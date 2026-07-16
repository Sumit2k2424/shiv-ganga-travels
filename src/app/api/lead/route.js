import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Receives lead-click beacons from <LeadTracker/> and appends a row to the
// owner's Google Sheet via an Apps Script webhook (LEAD_SHEET_WEBHOOK env var
// in Vercel — see LEAD-TRACKING-SETUP.md). The sheet is the lead store; it
// downloads as Excel any time. The site has no database by design.
// Always returns 204 fast — tracking must never slow or break the site.

function istNow() {
  const f = (opt) =>
    new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', ...opt }).format(new Date());
  return {
    date: f({ day: '2-digit', month: 'short', year: 'numeric' }),   // 16 Jul 2026
    time: f({ hour: '2-digit', minute: '2-digit', hour12: true }),  // 03:42 pm
  };
}

const clean = (v, n) => String(v ?? '').replace(/[\r\n\t]/g, ' ').trim().slice(0, n);

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
  try {
    const r = await fetch(hook, {
      method  : 'POST',
      headers : { 'Content-Type': 'application/json' },
      redirect: 'follow',
      body    : JSON.stringify({
        date, time, type: 'TEST', page: '/api/lead?test=1',
        package: 'Diagnostic', number: '', name: '', detail: 'Self-test row',
      }),
    });
    const body = (await r.text()).slice(0, 300);
    return NextResponse.json({
      ok: r.ok && body.trim() === 'ok',
      ...shape,
      googleStatus: r.status,
      googleSaid  : body,
      hint: body.includes('<HTML') || body.includes('<!DOCTYPE')
        ? 'Google returned a login/error page instead of "ok". Re-deploy the ' +
          'Apps Script with "Who has access: Anyone" (NOT "Anyone with Google ' +
          'account") and use the fresh /exec URL.'
        : body.trim() === 'ok'
          ? 'Working — check row 2 of your sheet.'
          : 'Unexpected reply from Apps Script.',
    });
  } catch (e) {
    return NextResponse.json({ ok: false, ...shape, error: String(e) });
  }
}

export async function POST(req) {
  const hook = process.env.LEAD_SHEET_WEBHOOK;
  let b = {};
  try { b = await req.json(); } catch {}

  const { date, time } = istNow();
  const row = {
    date,
    time,
    type   : clean(b.type, 20),
    page   : clean(b.page, 120),
    package: clean(b.package, 80),
    number : clean(b.number, 20),
    name   : clean(b.name, 60),
    detail : clean(b.detail, 200),
  };

  // Drop obvious junk (no type = not a real CTA event)
  if (hook && row.type) {
    try {
      await fetch(hook, {
        method  : 'POST',
        headers : { 'Content-Type': 'application/json' },
        redirect: 'follow',
        body    : JSON.stringify(row),
      });
    } catch { /* sheet down ≠ site down */ }
  }

  return new NextResponse(null, { status: 204 });
}
