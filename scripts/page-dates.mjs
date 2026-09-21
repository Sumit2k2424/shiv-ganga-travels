#!/usr/bin/env node
/*
  page-dates — real per-page dates from git history.

  Writes src/data/pageDates.json: for every route under src/app, the date its
  content was first added to the repo and the date it last changed. Pages read
  it through src/lib/pageDates.js for the visible "Last updated" stamp, the
  schema.org dateModified/datePublished, and the sitemap lastmod.

  Why this exists: until 13 Sep 2026 one constant (SITE.lastUpdated) stamped
  "July 30, 2026" on ~150 pages regardless of when each one changed, and the
  blog carried batch publication dates. Google compares the visible date, the
  schema date and the change it actually observed on crawl; uniform stamps read
  as decoration. A date derived from the commit that touched the page is the
  one claim about freshness that is always true.

  Run it locally and COMMIT THE JSON:

      npm run dates

  It must not run on Vercel — the deploy clone is shallow, so git would report
  every page as created and modified "today". The JSON is the source of truth
  at build time; regenerate it before committing content changes.

  What counts as "the page changed":
    - its own page.js, and
    - any data module it imports from src/data that is specific to it
      (langContent/<lang>.js, cabs/*.js for cab routes, press.js for /press,
      packages.js only for /packages routes). Site-wide data modules
      (packages.js elsewhere, social.js, redirects.js, languages.js,
      experience.js, botConfig.js, clusters.js, distances.js, winterSeats.js,
      trekRates.js)
      are excluded — a phone-number edit there is not a content update on
      every page that shows the phone number.
  Shared components are excluded on purpose: a footer refactor is not a
  content change on 260 pages.
*/
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'src', 'app');
const OUT = join(ROOT, 'src', 'data', 'pageDates.json');

const SITE_WIDE_DATA = new Set([
  'packages', 'social', 'redirects', 'languages', 'experience', 'botConfig',
  'clusters', 'distances', 'winterSeats', 'routeStops', 'packageRoute', 'reels',
  'haridwarPlaces', 'localTaxi', 'trekRates',
]);

// ── 0. commits that touched pages without changing what a reader sees ──────
// A commit that edits every page.js to remove a dead link, rename a constant,
// rewrite a <title> or add a schema node is not a content update, and a
// site-wide "modified today" that follows one is exactly the artificial-
// freshness pattern Google's guidance warns about. On 13–15 Sep 2026 three such
// commits stamped 99 of 105 routes as modified in the same week.
//
// Two ways a commit is skipped here: its hash is listed below, or its subject
// contains the token `[housekeeping]`. Use the token on every future commit
// whose purpose is links, metadata, schema, tracking or deletion — anything a
// reader would not notice on the page. A commit that changes prose, prices,
// dates, tables or itineraries must NOT carry it.
const HOUSEKEEPING = new Set([
  '3f682d7', // 14 Sep 2026 — 410 list, noindex, founding-claim removal across 218 pages
  '992b378', // 13 Sep 2026 — wired the per-page dates themselves into 169 pages
  'e02a490', // 15 Sep 2026 — deleted the templated tiers; touched 33 survivors' links
  'd3bdcb0', // 13 Sep 2026 — reviews constant + UTDB/IATO claim removal
  'e299149', // 13 Sep 2026 — hreflang wiring
  'd0a1df3', // 13 Sep 2026 — noindex flags
  'a4f4999', // 13 Sep 2026 — cab index gate
  'cd410da', // 14 Sep 2026 — schema type swap
  '433f32d', // 13 Sep 2026 — GSTIN line
  'fee480d', // 13 Sep 2026 — cab 308s
  '91eba5c', //  1 Sep 2026 — 109 meta descriptions
  'a7a9fed', // 31 Aug 2026 — 65 <title> trims
  'ea2ae5e', //  1 Sep 2026 — 19 <title> trims
  '74a43a1', //  1 Sep 2026 — homepage <title>
  '3aa489c', // 27 Aug 2026 — orphan-link mesh
  '196d3f4', // 31 Aug 2026 — og:image on cab templates
  'bf714d5', //  3 Sep 2026 — prefetch attribute sweep
]);

// ── 1. one pass over history: file → { created, modified } ─────────────────
const log = execFileSync(
  'git',
  ['log', '--format=C %cs %h %s', '--name-only', '--diff-filter=AMR', '--', 'src/app', 'src/data'],
  { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
);
const dates = new Map(); // path (posix) → { created, modified }
let cur = null;
let skip = false;
for (const raw of log.split('\n')) {
  const line = raw.trim().replace(/^'|'$/g, '');
  if (!line) continue;
  if (line.startsWith('C ')) {
    const [, date, hash, ...subject] = line.split(' ');
    cur = date;
    skip = HOUSEKEEPING.has(hash) || subject.join(' ').includes('[housekeeping]');
    continue;
  }
  if (!cur || skip) continue;
  const e = dates.get(line);
  if (!e) dates.set(line, { modified: cur, created: cur }); // newest first
  else e.created = cur;                                     // keeps walking back
}

// ── 2. every page.js under src/app → its route and its data deps ───────────
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== 'api' && name !== 'ui-kit') walk(p, out); }
    else if (name === 'page.js') out.push(p);
  }
  return out;
}
const toPosix = p => relative(ROOT, p).split(sep).join('/');
const routeOf = file => {
  const rel = relative(APP, dirname(file)).split(sep).filter(s => !/^\(.*\)$/.test(s)).join('/');
  return '/' + rel;
};

const routes = {};
let missing = 0;
for (const file of walk(APP)) {
  const route = routeOf(file);
  const pf = toPosix(file);
  const files = [pf];
  const src = readFileSync(file, 'utf8');
  for (const m of src.matchAll(/from\s+['"]@\/data\/([\w./-]+)['"]/g)) {
    const mod = m[1].replace(/\.js$/, '');
    const base = mod.split('/')[0];
    const isSiteWide = SITE_WIDE_DATA.has(base) && !(base === 'packages' && route.startsWith('/packages'));
    if (isSiteWide) continue;
    const cand = [`src/data/${mod}.js`, `src/data/${mod}/index.js`].find(c => existsSync(join(ROOT, c)));
    if (cand) files.push(cand);
  }
  const ds = files.map(f => dates.get(f)).filter(Boolean);
  if (!ds.length) { missing++; continue; }
  const created = ds.map(d => d.created).sort()[0];
  const modified = ds.map(d => d.modified).sort().at(-1);
  routes[route] = { created, modified, files };
}

const sorted = Object.fromEntries(Object.entries(routes).sort(([a], [b]) => a.localeCompare(b)));
const generated = new Date().toISOString().slice(0, 10);
const latest = Object.values(sorted).map(r => r.modified).sort().at(-1);
writeFileSync(OUT, JSON.stringify({
  _readme: 'Generated by `npm run dates` from git history. Commit this file; do not edit by hand. See scripts/page-dates.mjs.',
  generated,
  latest,
  routes: sorted,
}, null, 2) + '\n');

const n = Object.keys(sorted).length;
const byMonth = {};
for (const r of Object.values(sorted)) byMonth[r.modified.slice(0, 7)] = (byMonth[r.modified.slice(0, 7)] || 0) + 1;
console.log(`page-dates: ${n} routes written to src/data/pageDates.json (latest change ${latest}${missing ? `, ${missing} without history` : ''})`);
console.log('modified by month:', Object.entries(byMonth).sort().map(([k, v]) => `${k}=${v}`).join('  '));
