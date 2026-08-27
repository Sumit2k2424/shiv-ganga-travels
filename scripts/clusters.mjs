#!/usr/bin/env node
// ── Cluster link audit ─────────────────────────────────────────────────────
//
// For every cluster in src/data/clusters.js, checks whether each informational
// spoke actually links UP to its hub and to the money page.
//
// Why this and not a component that renders the links automatically: a link
// block dropped onto sixty pages by a loop is a footer, and Google reads a
// footer as chrome. Links that sit in the body, in the page's own words, are
// worth having — so this reports the gap and a human closes it where it reads
// naturally. The measurement is automated; the writing is not.
//
//   npm run clusters              the full report
//   npm run clusters -- --gaps    only the missing links, biggest volume first
//   npm run clusters -- --csv     machine-readable, for tracking over time
//
// A spoke that IS the hub is skipped for the hub check — a page does not link
// to itself. Slugs that resolve to no page file are reported as BROKEN, never
// silently dropped.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CLUSTERS } from '../src/data/clusters.js';
import { createRequire } from 'node:module';
// redirects.js is the single source of truth for 301s (see next.config.js). A
// cluster slug that is a redirect source is the commonest way this file goes
// stale, so name the destination rather than just reporting a dead slug.
const { REDIRECTS } = createRequire(import.meta.url)('../src/data/redirects.js');
const REDIRECT_TO = new Map(REDIRECTS.map((r) => [r.source, r.destination]));

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'src', 'app');

const args = process.argv.slice(2);
const ONLY_GAPS = args.includes('--gaps');
const AS_CSV = args.includes('--csv');

// ── resolve a route slug to the file that renders it ───────────────────────
// /blog/foo → src/app/blog/foo/page.js. Dynamic segments ([slug]) are not
// resolvable this way, so anything under a dynamic route is reported as such
// rather than guessed at.
function pageFileFor(slug) {
  const rel = slug.replace(/^\//, '');
  for (const ext of ['js', 'jsx', 'tsx', 'ts']) {
    const p = path.join(APP, rel, `page.${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

// Does `file` contain a link to `target`? Matches href="/target" and
// href={'/target'} and the ['Label', '/target'] tuple shape this repo uses.
function linksTo(file, target) {
  const src = fs.readFileSync(file, 'utf8');
  const esc = target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`["'\`]${esc}["'\`]`).test(src);
}

const rows = [];
const broken = [];

for (const c of CLUSTERS) {
  const hubFile = pageFileFor(c.hub);
  if (!hubFile) broken.push({ cluster: c.id, role: 'hub', slug: c.hub });
  const moneyFile = pageFileFor(c.money);
  const moneyIsDynamic = !moneyFile && /\/packages\/|\/cabs\//.test(c.money);
  if (!moneyFile && !moneyIsDynamic) broken.push({ cluster: c.id, role: 'money', slug: c.money });

  for (const s of c.spokes) {
    const file = pageFileFor(s.slug);
    if (!file) {
      const dynamic = /\/packages\/|\/cabs\//.test(s.slug);
      if (!dynamic) broken.push({ cluster: c.id, role: 'spoke', slug: s.slug });
      continue;
    }
    const isHub = s.slug === c.hub;
    rows.push({
      cluster: c.id,
      clusterName: c.name,
      slug: s.slug,
      head: s.head || '',
      vol: typeof s.vol === 'number' ? s.vol : null,
      pos: typeof s.pos === 'number' ? s.pos : null,
      toHub: isHub ? 'self' : (linksTo(file, c.hub) ? 'yes' : 'NO'),
      toMoney: linksTo(file, c.money) ? 'yes' : 'NO',
      hub: c.hub,
      money: c.money,
    });
  }
}

if (AS_CSV) {
  console.log('cluster,slug,head,volume,position,links_to_hub,links_to_money');
  for (const r of rows) {
    console.log([r.cluster, r.slug, `"${r.head}"`, r.vol ?? '', r.pos ?? '', r.toHub, r.toMoney].join(','));
  }
  process.exit(0);
}

const gaps = rows.filter((r) => r.toHub === 'NO' || r.toMoney === 'NO');
const measuredGaps = gaps.filter((r) => r.vol !== null).sort((a, b) => b.vol - a.vol);
const unmeasuredGaps = gaps.filter((r) => r.vol === null);

const n = (v) => (v === null ? '     —' : String(v).padStart(6));

console.log('');
console.log('  CLUSTER LINK AUDIT');
console.log('  ' + '─'.repeat(76));
console.log(`  ${CLUSTERS.length} clusters · ${rows.length} spokes resolved · ${gaps.length} with a missing link`);
console.log('');

if (measuredGaps.length) {
  const lost = measuredGaps.reduce((a, r) => a + r.vol, 0);
  console.log(`  MISSING LINKS, ranked by the search volume sitting behind them`);
  console.log(`  ${lost.toLocaleString()}/mo of measured demand is entering pages that do not`);
  console.log(`  point at the page which takes a booking.`);
  console.log('');
  console.log('     vol    pos  →hub  →money  page');
  console.log('  ' + '─'.repeat(76));
  for (const r of measuredGaps) {
    const hub = r.toHub === 'NO' ? ' NO ' : (r.toHub === 'self' ? 'self' : ' ·  ');
    const money = r.toMoney === 'NO' ? '  NO ' : '  ·  ';
    console.log(`  ${n(r.vol)} ${n(r.pos)}  ${hub}  ${money}  ${r.slug}`);
  }
  console.log('');
}

if (unmeasuredGaps.length && !ONLY_GAPS) {
  console.log(`  Also missing a link, no Semrush figure yet (${unmeasuredGaps.length}):`);
  for (const r of unmeasuredGaps) {
    const which = [r.toHub === 'NO' ? 'hub' : null, r.toMoney === 'NO' ? 'money' : null].filter(Boolean).join(' + ');
    console.log(`    ${r.slug.padEnd(44)} missing ${which}`);
  }
  console.log('');
}

if (!ONLY_GAPS) {
  console.log('  BY CLUSTER');
  console.log('  ' + '─'.repeat(76));
  for (const c of CLUSTERS) {
    const mine = rows.filter((r) => r.cluster === c.id);
    if (!mine.length) continue;
    const hubOk = mine.filter((r) => r.toHub === 'yes' || r.toHub === 'self').length;
    const moneyOk = mine.filter((r) => r.toMoney === 'yes').length;
    const vol = mine.reduce((a, r) => a + (r.vol || 0), 0);
    console.log(`  ${c.name}`);
    console.log(`    hub ${c.hub}`);
    console.log(`    money ${c.money}`);
    console.log(`    ${mine.length} spokes · ${hubOk}/${mine.length} link to hub · ${moneyOk}/${mine.length} link to money · ${vol.toLocaleString()}/mo measured`);
    console.log('');
  }
}

if (broken.length) {
  console.log('  BROKEN SLUGS — these point at no page file');
  console.log('  ' + '─'.repeat(76));
  for (const b of broken) {
    const to = REDIRECT_TO.get(b.slug);
    const why = to ? `301s to ${to} — use that slug` : 'no page.js and no redirect';
    console.log(`    [${b.cluster}] ${b.role.padEnd(6)} ${b.slug.padEnd(34)} ${why}`);
  }
  console.log('');
  process.exitCode = 1;
}
