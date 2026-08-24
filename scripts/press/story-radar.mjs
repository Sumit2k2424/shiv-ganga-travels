#!/usr/bin/env node
// ── Story radar ────────────────────────────────────────────────────────────
//
// WHAT THIS IS FOR
// The hard part of running a newsroom this size is not writing the release, it
// is noticing that there is one. A season is three weeks from closing, a new
// circuit opened, a figure on the site has not been touched since July — each
// of those is a story, and each is invisible until someone goes looking.
//
// So this reports *angles*, from data that already exists in this repo. It
// writes no copy and asserts no fact. Everything it prints still has to be
// verified and written by a person; what it removes is the part where nobody
// noticed in time.
//
// WHAT IT DELIBERATELY DOES NOT DO
// It does not invent statistics, and it does not draft quotes. Those are the
// two fields src/data/press.js says must be written by a human, and a radar
// that started guessing at them would be the fastest possible way to get a
// figure into a newspaper that we cannot stand behind.
//
// It also does not watch prices. See the note above section 2 — pricing is not
// newsroom material here, by instruction.
//
//   npm run press:radar
//   npm run press:snapshot    # record the current package list
//
// The snapshot is how a genuinely new circuit is spotted: run it after a
// deliberate change, and the next run reports what appeared since.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PACKAGES, SITE } from '../../src/data/packages.js';
import { RELEASES, getPublishedReleases } from '../../src/data/press.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SNAPSHOT = path.join(HERE, 'package-snapshot.json');
const TODAY = new Date();

const iso = (d) => d.toISOString().slice(0, 10);
const daysBetween = (a, b) => Math.round((b - a) / 86400_000);

// ── The season calendar ────────────────────────────────────────────────────
// Dates the site already publishes and stands behind (see the 2026 season
// release: 19 Apr – 13 Nov, sourced to the Devasthanam Board). Anything added
// here must be a date we have published elsewhere, not one assumed — the radar
// pointing at a wrong date is how a wrong date reaches a release.
//
// Each entry is a recurring news moment: the window when desks are actively
// looking for someone who knows the route.
const CALENDAR = [
  { date: `${SITE.season}-11-13`, name: 'Season closes', angle: 'Season-end totals: what the year actually looked like from the road, against the official footfall figures. Desks run a wrap piece and need an operator who was there all season.' },
  { date: `${SITE.season}-10-15`, name: 'Closing dates announced', angle: 'Shrine door-closing dates for winter, and what pilgrims with late bookings should do. Consistently searched and consistently covered.' },
  { date: `${SITE.season + 1}-02-15`, name: 'Next-season registration opens', angle: 'Registration mechanics, what changed from last year, and the fake-portal problem. This is the single most useful thing to be quoted on all year.' },
  { date: `${SITE.season + 1}-04-19`, name: 'Season opens', angle: 'Opening-day conditions, road status, first-week volumes. Every desk covering Uttarakhand runs something.' },
  { date: `${SITE.season}-07-15`, name: 'Monsoon peak', angle: 'Road conditions, closures and whether the yatra should pause. The site already has a monsoon-safety position and live road status to point at.' },
];

const findings = [];
const add = (priority, title, detail) => findings.push({ priority, title, detail });

// ── 1. Calendar proximity ──────────────────────────────────────────────────
// A release lands when a desk is already thinking about the subject. Two to
// four weeks out is the window: early enough to be useful for planning pieces,
// late enough that it is not filed and forgotten.
for (const ev of CALENDAR) {
  const when = new Date(`${ev.date}T00:00:00+05:30`);
  const away = daysBetween(TODAY, when);
  if (away < -14 || away > 60) continue;

  const priority = away >= 14 && away <= 35 ? 'HIGH' : 'MEDIUM';
  const phrasing =
    away < 0 ? `${Math.abs(away)} days ago` :
    away === 0 ? 'today' : `in ${away} days`;

  add(priority, `${ev.name} — ${phrasing} (${ev.date})`, ev.angle);
}

// ── 2. New circuits and routes ─────────────────────────────────────────────
//
// PRICING IS NOT A STORY HERE, BY INSTRUCTION (Aug 2026).
// An earlier version of this radar watched package prices and flagged any
// movement as a HIGH-priority angle — it is how the withdrawn 25-per-cent
// release came about. The newsroom no longer publishes pricing news, so price
// drift is not detected and not reported: a radar that keeps surfacing an angle
// nobody may write is worse than useless, because it trains the reader to skim.
//
// What is still worth noticing is a genuinely new circuit or route, which is a
// trade-press note without being a commercial one. The snapshot therefore
// records package slugs only, and no figures.
const currentSlugs = PACKAGES.filter((p) => p?.slug).map((p) => p.slug).sort();

if (process.argv.includes('--snapshot')) {
  fs.writeFileSync(SNAPSHOT, JSON.stringify({ takenOn: iso(TODAY), slugs: currentSlugs }, null, 2));
  console.log(`Snapshot written: ${currentSlugs.length} package slugs as of ${iso(TODAY)}.`);
  console.log(`  ${SNAPSHOT}\n`);
  process.exit(0);
}

if (fs.existsSync(SNAPSHOT)) {
  const prev = JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8'));
  const known = new Set(prev.slugs || []);
  const added = currentSlugs.filter((s) => !known.has(s));

  if (added.length) {
    add(
      'MEDIUM',
      `${added.length} new package(s) since ${prev.takenOn}`,
      `A genuinely new circuit or route can carry a trade-press note — but only if it is new, not repackaged, and the note must not turn into a price announcement.\n    ${added.join('\n    ')}`
    );
  }
} else {
  add('INFO', 'No package snapshot yet', 'Run `npm run press:snapshot` to record the current package list. New circuits are reported from the next run on.');
}

// ── 3. Freshness of the pages we point journalists at ──────────────────────
const stamped = new Date(`${SITE.lastUpdatedISO}T00:00:00+05:30`);
const stale = daysBetween(stamped, TODAY);
if (stale > 45) {
  add(
    stale > 90 ? 'HIGH' : 'MEDIUM',
    `Site freshness stamp is ${stale} days old (${SITE.lastUpdatedISO})`,
    'The press office promises maintained pages. A journalist who checks the "last updated" date and finds it months old discounts everything else on the page. Bump SITE.lastUpdated / lastUpdatedISO in src/data/packages.js once the underlying pages are genuinely reviewed — not before.'
  );
}

// ── 4. Newsroom cadence ────────────────────────────────────────────────────
const published = getPublishedReleases();
const drafts = RELEASES.filter((r) => r.approved !== true);

if (published.length) {
  const last = new Date(`${published[0].dateISO}T00:00:00+05:30`);
  const since = daysBetween(last, TODAY);
  if (since > 60) {
    add('MEDIUM', `${since} days since the last release`, 'A newsroom that goes quiet for a season reads as abandoned when a journalist checks it. One sourced release a quarter is enough to look live.');
  }
}

if (drafts.length) {
  add('HIGH', `${drafts.length} draft(s) awaiting human approval`, `These build clean and render nowhere until approved:\n    ${drafts.map((d) => d.slug || '(unnamed)').join('\n    ')}`);
}

// ── 5. Angles already covered ──────────────────────────────────────────────
// Cheap repetition check so the radar does not keep proposing a story we ran.
const covered = published.map((r) => `${r.headline} ${r.summary}`.toLowerCase());
const dupe = (needle) => covered.some((c) => c.includes(needle));

for (const ev of CALENDAR) {
  const key = ev.name.toLowerCase().split(' ')[0];
  if (dupe(key) && findings.some((f) => f.title.startsWith(ev.name))) {
    add('INFO', `"${ev.name}" may already be covered`, 'A published release mentions this. Check before writing another — an updated release with a dateModified is usually better than a near-duplicate.');
  }
}

// ── Report ─────────────────────────────────────────────────────────────────
const ORDER = { HIGH: 0, MEDIUM: 1, INFO: 2 };
findings.sort((a, b) => ORDER[a.priority] - ORDER[b.priority]);

console.log(`\nStory radar — ${iso(TODAY)}`);
console.log(`${published.length} published, ${drafts.length} draft(s).\n`);

if (!findings.length) {
  console.log('Nothing on the radar. That is a legitimate result.\n');
} else {
  for (const f of findings) {
    console.log(`[${f.priority}] ${f.title}`);
    console.log(`    ${f.detail.replace(/\n/g, '\n    ')}\n`);
  }
}

console.log('These are angles, not facts. Verify every figure before it reaches a release.');
console.log('Draft one with the `press-release` skill, then run scripts/press/validate.mjs.\n');
