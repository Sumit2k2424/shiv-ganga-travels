#!/usr/bin/env node
// ── Backlink radar ─────────────────────────────────────────────────────────
//
// WHAT THIS IS FOR
// The register knows everything and tells you nothing. This reads it and says
// what to do this week, in order, with the blockers first.
//
// It is the sibling of scripts/press/story-radar.mjs and it works the same way:
// it reports from data that already exists in the repo, it writes no copy, and
// it asserts no fact. What it removes is the part where a season passes and
// nobody noticed that the pitch window opened in February.
//
//   npm run links:radar
//
// PRIORITY ORDER, AND WHY
//   BLOCKER   something published off-site is wrong right now. Fix before
//             adding more of it — every new submission copies the error.
//   VERIFY    an entry we have never actually opened. Cheap, and it stops a
//             dead URL being pasted into an outreach email.
//   DO        open prospects, best first.
//   CHASE     submitted, nothing appeared, enough time has passed for one
//             polite follow-up. One. Never two.
//   RECHECK   links we won, which may have rotted.

import { PROSPECTS, COMPETITORS } from './prospects.mjs';
import { assess } from './quality.mjs';
import { SITE } from '../../src/data/packages.js';

const TODAY = new Date();
const days = (a, b) => Math.round((b - a) / 86_400_000);
const since = (iso) => (iso ? days(new Date(iso + 'T00:00:00+05:30'), TODAY) : null);

const findings = [];
const add = (priority, title, detail) => findings.push({ priority, title, detail });

const ORDER = { BLOCKER: 0, VERIFY: 1, DO: 2, CHASE: 3, RECHECK: 4, WINDOW: 5, INFO: 6 };

// ── 1. Blockers ────────────────────────────────────────────────────────────
// A caution marked URGENT is something already published that is wrong. It
// outranks every opportunity below it, because outreach multiplies whatever is
// currently on the profile — including a stale price.
for (const p of PROSPECTS) {
  if (p.caution && /urgent/i.test(p.caution)) {
    add('BLOCKER', p.name, p.caution);
  }
}

// ── 2. Never verified ──────────────────────────────────────────────────────
// The register is honest about what it has not confirmed. This surfaces it
// before anyone spends a morning on a submission form that moved in 2023 — as
// the eUttaranchal directory did.
const unverified = PROSPECTS.filter((p) => !p.verified && p.status === 'open' && p.category !== 'asset');
if (unverified.length) {
  add('VERIFY', unverified.length + ' entries have never been opened and checked',
    'Run `npm run links:audit` first — it loads each one, checks it is alive, and reports whether it already links to competitors or to us.\n    ' +
    unverified.map((p) => p.id + '  (' + p.domain + ')').join('\n    '));
}

// ── 3. What to do ──────────────────────────────────────────────────────────
// Scored through the same gate as everything else, so the ordering here and the
// ordering in the audit cannot drift apart.
const open = PROSPECTS
  .filter((p) => p.status === 'open' && p.category !== 'asset')
  .map((p) => ({ p, v: assess(p) }))
  .sort((a, b) => b.v.score - a.v.score);

for (const { p, v } of open.slice(0, 6)) {
  add('DO', p.name + '  [' + v.score + '/100 · wants a ' + p.wants + ']',
    p.why + '\n    Point it at: ' + p.target +
    (p.submitUrl ? '\n    Submit: ' + p.submitUrl : '\n    No open form — this one needs a pitch to a person.') +
    '\n    Draft the packet: npm run links:draft -- ' + p.id +
    (p.caution ? '\n    Watch out: ' + p.caution : ''));
}

if (open.length > 6) {
  add('INFO', (open.length - 6) + ' more open prospects below the top six',
    'Deliberately not listed. Six live threads is about the most one person can carry honestly, and outreach that outruns the ability to follow up reads as a mail merge.');
}

// ── 4. Chasing ─────────────────────────────────────────────────────────────
for (const p of PROSPECTS.filter((x) => x.status === 'submitted')) {
  const age = since(p.submittedOn);
  if (age === null) {
    add('CHASE', p.name + ' — submitted, no date recorded',
      'Add `submittedOn: \'YYYY-MM-DD\'` to this entry in prospects.mjs so the radar can time the follow-up.');
  } else if (age >= 21 && !p.chasedOn) {
    add('CHASE', p.name + ' — ' + age + ' days, nothing published',
      'Send one follow-up, then let it go. Record it as `chasedOn`. A second chase converts nothing and costs the relationship for next season.');
  }
}

// ── 5. Link rot ────────────────────────────────────────────────────────────
// A link that was won and then quietly dropped is invisible unless something
// looks. Re-checking what we already have is cheaper than earning a replacement.
const live = PROSPECTS.filter((p) => p.status === 'live');
const stale = live.filter((p) => (since(p.verified) ?? 999) > 90);
if (stale.length) {
  add('RECHECK', stale.length + ' won link(s) not confirmed in over 90 days',
    'Sites get redesigned and listings get pruned. `npm run links:audit -- ' + stale.map((p) => p.domain).join(',') + '` reports whether each still links to us.\n    ' +
    stale.map((p) => p.domain + '  (last confirmed ' + (p.verified || 'never') + ')').join('\n    '));
}

// ── 6. Season windows ──────────────────────────────────────────────────────
// Press outreach is worthless out of season and near-automatic in it. These are
// the dates the site already publishes and stands behind — the same calendar
// the story radar uses, kept in step with SITE.season deliberately.
const WINDOWS = [
  { date: SITE.season + '-10-15', name: 'Closing dates announced', angle: 'Desks run a "what happens to late bookings" piece. An operator on the route is the source they need.' },
  { date: SITE.season + '-11-13', name: 'Season closes',           angle: 'Season-wrap coverage. Offer /char-dham-yatra-statistics as the numbers source before someone else does.' },
  { date: (SITE.season + 1) + '-02-15', name: 'Registration opens', angle: 'The single most useful thing to be quoted on all year, and the moment the fake-registration-portal story runs. /char-dham-yatra-scams is the asset.' },
  { date: (SITE.season + 1) + '-04-19', name: 'Season opens',       angle: 'Every desk covering Uttarakhand runs something. Pitch two to four weeks ahead, not on the day.' },
];

for (const w of WINDOWS) {
  const away = days(TODAY, new Date(w.date + 'T00:00:00+05:30'));
  if (away < 0 || away > 75) continue;
  const pitchNow = away >= 14 && away <= 45;
  add('WINDOW', w.name + ' — in ' + away + ' days (' + w.date + ')',
    w.angle + (pitchNow
      ? '\n    This is the window. Pitch ' + PROSPECTS.filter((p) => p.category === 'press').map((p) => p.domain).join(', ') + ' now.'
      : '\n    Too early to pitch — desks file and forget anything more than about six weeks out.'));
}

// ── 7. Velocity guard ──────────────────────────────────────────────────────
// Twenty submissions in a week looks exactly like what it is. Real citations
// accumulate slowly, and a register that encourages a sprint is a register that
// builds a footprint.
const recent = PROSPECTS.filter((p) => (since(p.submittedOn) ?? 999) <= 30).length;
if (recent > 6) {
  add('INFO', recent + ' submissions in the last 30 days',
    'That is faster than this profile should grow. A small operator earning six-plus citations a month is a pattern, and the pattern is the thing that gets looked at. Slow down to two or three, and put the time into the press pitches instead — those cannot be pattern-matched.');
}

// ── Report ─────────────────────────────────────────────────────────────────
findings.sort((a, b) => ORDER[a.priority] - ORDER[b.priority]);

const counts = PROSPECTS.reduce((acc, p) => { acc[p.status] = (acc[p.status] || 0) + 1; return acc; }, {});

console.log('\n  BACKLINK RADAR — ' + TODAY.toISOString().slice(0, 10));
console.log('  ' + PROSPECTS.length + ' prospects · ' + Object.entries(counts).map(([k, v]) => v + ' ' + k).join(' · '));
console.log('  ' + COMPETITORS.length + ' competitors tracked · gate: scripts/backlinks/quality.mjs\n');

if (!findings.length) {
  console.log('  Nothing to do. Unlikely — check that statuses in prospects.mjs are current.\n');
}

for (const f of findings) {
  console.log('  [' + f.priority + '] ' + f.title);
  console.log('    ' + f.detail.replace(/\n/g, '\n    '));
  console.log('');
}

console.log('  Nothing above is submitted automatically. `npm run links:draft -- <id>` writes the packet; a human sends it.\n');
