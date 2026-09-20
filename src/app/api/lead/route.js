import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Receives lead-click beacons from <LeadTracker/> and appends a row to the
// owner's Google Sheet via an Apps Script webhook (LEAD_SHEET_WEBHOOK env var
// in Vercel — see LEAD-TRACKING-SETUP.md). The sheet is the lead store; it
// downloads as Excel any time. The site has no database by design.
// Always returns 204 fast — tracking must never slow or break the site.
//
// Every call to the webhook carries a timeout. Apps Script occasionally
// stalls (the /exec → googleusercontent redirect hop, sheet lock contention)
// and without one the edge runtime kills the function at 25 s with a 504 —
// seen in production on 20 Sep 2026. Beacons get a short budget and are
// dropped on the floor if Google is slow; the contact form gets most of the
// 25 s and then reports "unconfirmed" so the visitor is sent to WhatsApp.

function istNow() {
  const f = (opt) =>
    new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', ...opt }).format(new Date());
  return {
    date: f({ day: '2-digit', month: 'short', year: 'numeric' }),   // 16 Jul 2026
    time: f({ hour: '2-digit', minute: '2-digit', hour12: true }),  // 03:42 pm
  };
}

const clean = (v, n) => String(v ?? '').replace(/[\r\n\t]/g, ' ').trim().slice(0, n);

// Edge functions are killed at 25 s; stay under it so the caller gets a real
// answer instead of a 504.
const FORM_TIMEOUT_MS   = 20_000;
const BEACON_TIMEOUT_MS = 8_000;

function postRow(hook, row, timeoutMs) {
  return fetch(hook, {
    method  : 'POST',
    headers : { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body    : JSON.stringify(row),
    signal  : AbortSignal.timeout(timeoutMs),
  });
}

// GET /api/lead            → is the webhook env var configured?
// GET /api/lead?test=1     → send a real test row and report what Google said.
export async function GET(req) {
  const hook = process.env.LEAD_SHEET_WEBHOOK;
  const url  = new URL(req.url);

  if (!hook) {
    return NextResponse.json({
      ok: false,
      reason: 'LEAD_SHEET_WEBHOOK is not set on this deployment. Add it in ' +
              'Vercel → Settings → Environment Variables, then REDEPLOY ' +
              '(env vars only apply to builds made after they are added).',
    });
  }

  const shape = {
    endsWithExec: hook.trim().endsWith('/exec'),
    host        : (() => { try { return new URL(hook).host; } catch { return 'INVALID URL'; } })(),
  };

  if (url.searchParams.get('test') !== '1') {
    return NextResponse.json({ ok: true, configured: true, ...shape });
  }

  const { date, time } = istNow();
  const started = Date.now();
  try {
    const r = await postRow(hook, {
      date, time, type: 'TEST', page: '/api/lead?test=1',
      package: 'Diagnostic', number: '', name: '', detail: 'Self-test row',
    }, FORM_TIMEOUT_MS);
    const body = (await r.text()).slice(0, 300);
    return NextResponse.json({
      ok: r.ok && body.trim() === 'ok',
      ...shape,
      googleStatus: r.status,
      googleSaid  : body,
      googleMs    : Date.now() - started,
      hint: body.includes('<HTML') || body.includes('<!DOCTYPE')
        ? 'Google returned a login/error page instead of "ok". Re-deploy the ' +
          'Apps Script with "Who has access: Anyone" (NOT "Anyone with Google ' +
          'account") and use the fresh /exec URL.'
        : body.trim() === 'ok'
          ? 'Working — check row 2 of your sheet.'
          : 'Unexpected reply from Apps Script.',
    });
  } catch (e) {
    return NextResponse.json({ ok: false, ...shape, googleMs: Date.now() - started, error: String(e) });
  }
}

export async function POST(req) {
  const hook = process.env.LEAD_SHEET_WEBHOOK;
  let b = {};
  try { b = await req.json(); } catch {}

  // Honeypot from the contact form: a filled "company" field is a bot.
  // Say nothing useful back — a 204 looks like success to the script.
  if (b.company) return new NextResponse(null, { status: 204 });

  const { date, time } = istNow();
  const row = {
    date,
    time,
    type   : clean(b.type, 20),
    page   : clean(b.page, 120),
    package: clean(b.package, 80),
    number : clean(b.number, 20),
    name   : clean(b.name, 60),
    // 600, not 200: the contact form packs email, month, party size and the
    // message into this one cell. Beacons stay well under it.
    detail : clean(b.detail, 600),
  };

  // Drop obvious junk (no type = not a real CTA event)
  if (!row.type) return new NextResponse(null, { status: 204 });

  // `ack: true` is the contact form asking for a real answer: did the row
  // reach the sheet? Beacons never set it and keep the fire-and-forget 204.
  if (b.ack === true) {
    if (!hook) {
      return NextResponse.json({ ok: false, reason: 'lead store not configured' }, { status: 503 });
    }
    if (!row.name || !row.number) {
      return NextResponse.json({ ok: false, reason: 'name and number are required' }, { status: 400 });
    }
    try {
      const r = await postRow(hook, row, FORM_TIMEOUT_MS);
      const said = (await r.text()).trim();
      if (r.ok && said === 'ok') return NextResponse.json({ ok: true });
      return NextResponse.json({ ok: false, reason: 'lead store rejected the row' }, { status: 502 });
    } catch (e) {
      // A timeout is ambiguous: Apps Script may still have appended the row.
      // Say "unconfirmed", not "failed" — the form copy is written for that.
      const reason = e?.name === 'TimeoutError' ? 'lead store did not confirm in time' : 'lead store unreachable';
      return NextResponse.json({ ok: false, reason }, { status: 502 });
    }
  }

  if (hook) {
    try {
      await postRow(hook, row, BEACON_TIMEOUT_MS);
    } catch { /* sheet down or slow ≠ site down */ }
  }

  return new NextResponse(null, { status: 204 });
}
