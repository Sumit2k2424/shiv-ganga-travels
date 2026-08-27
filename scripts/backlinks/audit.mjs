#!/usr/bin/env node
// ── Link audit ─────────────────────────────────────────────────────────────
//
// WHAT THIS DOES
// Loads a domain, reads what is actually on it, and runs it through the gate in
// quality.mjs. Three questions per domain:
//
//   1. Is it alive, and is it what we think it is?
//   2. Does it show any of the spam signatures?
//   3. Does it already link to our competitors — or to us?
//
// Question 3 is the useful one. A page that links to three operators has told
// us it will link to a fourth, and a page that already links to us tells us to
// stop pitching it. Both facts are cheap to check and expensive to guess at.
//
//   npm run links:audit                       every prospect in the register
//   npm run links:audit -- --refused          re-check what we rejected, to show the work
//   npm run links:audit -- example.com,b.in   arbitrary domains, e.g. from a new export
//
// A homepage fetch is a shallow test and this file says so in its output rather
// than pretending otherwise. It catches dead domains, parked domains, link
// farms and obvious paid-post shops, which is most of the junk. It cannot tell
// you whether a site has an editor. Open the ones that pass and look.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assess, host } from './quality.mjs';
import { PROSPECTS, REFUSED, COMPETITORS, OUR_DOMAIN } from './prospects.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, 'data', 'last-audit.json');

const args = process.argv.slice(2);
const wantRefused = args.includes('--refused');
const explicit = args.filter((a) => !a.startsWith('--')).flatMap((a) => a.split(',')).filter(Boolean);

// Identify honestly. A crawler that lies about who it is has already started
// down the road this whole system exists to avoid.
const UA = 'ShivGangaTravels-LinkAudit/1.0 (+https://www.shivgangatravels.com; contact support@shivgangatravels.com)';

// Why a fetch failed matters more than that it failed, and the first version of
// this file printed one word — UNREACHABLE — for four different situations.
// On the first real run that put TripAdvisor, Quora, JustDial and the Ministry
// of Tourism in the same bucket as a genuinely dead domain. All four were
// simply refusing a non-browser user agent; a browser UA gets a 301 from every
// one of them. Reporting that as "unreachable" trains the reader to ignore the
// line, which is the one thing a gate cannot afford.
//
// We do NOT retry with a spoofed browser agent. Defeating a site's bot
// protection to score it is the same posture as the link farms this system
// exists to refuse, and a system that cheats in its own favour here would be
// worth less than no system. Blocked means a human opens it in a browser.
function classify(status, err) {
  if (status === 403 || status === 401 || status === 429) {
    return { state: 'BLOCKED', note: 'HTTP ' + status + ' to our crawler. Almost always bot protection, not a dead site — a browser sees it fine. Open it yourself; this says nothing about quality either way.' };
  }
  if (status === 404 || status === 410) {
    return { state: 'GONE', note: 'HTTP ' + status + '. This URL is genuinely dead. Find the current one or drop the entry — do not paste it into an email.' };
  }
  if (status >= 500) {
    return { state: 'SERVER ERROR', note: 'HTTP ' + status + '. Their end, probably transient. Re-run before drawing any conclusion.' };
  }
  if (!status) {
    return { state: 'NO RESPONSE', note: 'No HTTPS response' + (err ? ' (' + err + ')' : '') + '. Could be DNS, a broken certificate, a timeout or geo-blocking. Check whether plain HTTP resolves before assuming the domain is dead.' };
  }
  return { state: 'HTTP ' + status, note: '' };
}

async function load(domain, checkUrl) {
  const url = checkUrl || 'https://' + domain + '/';
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 15000);
  try {
    const res = await fetch(url, { redirect: 'follow', signal: ctl.signal, headers: { 'user-agent': UA, accept: 'text/html' } });
    const html = res.ok ? (await res.text()).slice(0, 400_000) : '';
    return { ok: res.ok, statusCode: res.status, finalUrl: res.url, html, requested: url, ...classify(res.status) };
  } catch (err) {
    const reason = err.name === 'AbortError' ? 'timed out after 15s' : err.message;
    return { ok: false, statusCode: 0, finalUrl: url, html: '', requested: url, error: reason, ...classify(0, reason) };
  } finally {
    clearTimeout(timer);
  }
}

// Who does this page link out to? A substring check over the markup — we are
// looking for the presence of a domain, not parsing the document.
//
// The `scrubbed` step is not defensive tidying, it is a bug fix. The user agent
// above politely contains our own URL, and some sites (YouTube among them)
// echo the request's user agent back into the page. The first run of this
// script reported that youtube.com already links to us; what it had actually
// found was its own user-agent string reflected in the response. A crawler that
// detects itself and calls it a backlink would quietly take real prospects off
// the list, so the agent string comes out before anything is counted.
function outboundHits(html, domains) {
  const scrubbed = html.toLowerCase().split(UA.toLowerCase()).join(' ');
  return domains.filter((d) => scrubbed.includes('//' + d) || scrubbed.includes('//www.' + d));
}

const pad = (s, n) => String(s).padEnd(n);

async function run() {
  // A command-line argument may be a bare domain or a full URL. Keep the path
  // when there is one: the roundup post is where a site lists operators, and
  // checking its homepage instead answers a question nobody asked.
  const targets = explicit.length
    ? explicit.map((d) => ({
        id: host(d),
        name: host(d),
        domain: host(d),
        checkUrl: /^https?:\/\/.+\/.+/.test(d) ? d : null,
        source: 'command line',
      }))
    : wantRefused
      ? REFUSED.map((r) => ({ id: r.domain, name: r.domain, domain: r.domain, source: 'refused list', refusalNote: r.why }))
      : PROSPECTS.map((p) => ({ ...p, source: 'register' }));

  const competitorDomains = COMPETITORS.map((c) => c.domain);
  const results = [];

  console.log('\n  LINK AUDIT — ' + targets.length + ' domain(s)\n');

  for (const t of targets) {
    // Our own domain is in the register as an asset, not a placement.
    if (t.domain === OUR_DOMAIN) continue;

    // A homepage rarely carries outbound operator links — the directory page or
    // the roundup post does. Where a prospect names the page the links would
    // actually live on, check that instead. This is why the first full run
    // found no competitor links anywhere: it was reading nineteen homepages.
    const page = await load(t.domain, t.checkUrl);
    // A site linking to itself is not evidence of anything. euttaranchal.com is
    // both a competitor and a prospect, and without this it scored points for
    // linking to its own homepage.
    const others = competitorDomains.filter((d) => d !== t.domain);
    const competitorLinks = page.html ? outboundHits(page.html, others) : [];
    const linksToUs = page.html ? outboundHits(page.html, [OUR_DOMAIN]).length > 0 : false;

    const verdict = assess({
      domain: t.domain,
      html: page.html,
      topical: t.topical,
      editorial: t.editorial,
      institutional: t.institutional,
      obtainable: t.obtainable,
      competitorLinks,
    });

    results.push({
      id: t.id, domain: t.domain, checked: page.requested, statusCode: page.statusCode,
      state: page.state, verdict: verdict.verdict, score: verdict.score, competitorLinks, linksToUs,
    });

    const head = pad(verdict.verdict, 8) + pad(verdict.score + '/100', 9) + t.domain;
    console.log('  ' + head);
    console.log('  ' + '─'.repeat(Math.max(40, head.length)));
    if (t.name && t.name !== t.domain) console.log('    ' + t.name);

    if (!page.ok) {
      console.log('    ' + page.state + ' — ' + page.note);
    } else if (page.finalUrl && host(page.finalUrl) !== t.domain) {
      console.log('    Redirects to ' + host(page.finalUrl) + ' — verify this is still the site we meant.');
    }

    if (linksToUs) {
      console.log('    ALREADY LINKS TO US. Stop pitching. Move status to "live" and record where.');
    } else if (competitorLinks.length) {
      console.log('    Links to ' + competitorLinks.length + ' competitor(s): ' + competitorLinks.join(', '));
    }

    for (const r of verdict.reasons) console.log('    · ' + r);
    if (t.refusalNote) console.log('    Refused because: ' + t.refusalNote);
    for (const u of verdict.unchecked) console.log('    ? Not checked — ' + u);
    console.log('');
  }

  // Only a full pass over the register is worth caching. An ad-hoc check of two
  // domains from a CSV should not overwrite the record of the last real audit.
  if (!explicit.length && !wantRefused) {
    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, JSON.stringify({ ranOn: new Date().toISOString().slice(0, 10), results }, null, 2));
    console.log('  Written to ' + path.relative(process.cwd(), OUT));
  }

  const n = (v) => results.filter((r) => r.verdict === v).length;
  console.log('  ' + n('PURSUE') + ' pursue · ' + n('MAYBE') + ' maybe · ' + n('WEAK') + ' weak · ' + n('REJECT') + ' rejected\n');
}

run();
