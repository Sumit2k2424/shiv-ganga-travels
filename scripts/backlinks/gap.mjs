#!/usr/bin/env node
// ── Competitor link gap ────────────────────────────────────────────────────
//
// THE QUESTION THIS ANSWERS
// Which sites link to several of our competitors and not to us? A domain that
// has linked to three Char Dham operators has already decided it links to Char
// Dham operators. That is the warmest prospect in the business, and it is the
// only kind of prospect that can be found rather than guessed at.
//
// WHERE THE DATA COMES FROM
// Backlink indexes are not free and this repo has no API key, so this script
// reads CSV exports rather than pretending to crawl the web. Put one export per
// competitor in data/competitors/, named for the competitor:
//
//   scripts/backlinks/data/competitors/chardhamtourism.com.csv
//   scripts/backlinks/data/competitors/thrillophilia.com.csv
//   scripts/backlinks/data/competitors/euttaranchal.com.csv
//
// Any of these will do — the header is sniffed, not assumed:
//   · Semrush   Backlink Analytics → Referring Domains → Export
//   · Ahrefs    free Backlink Checker (top 100 per domain, enough to start)
//   · Moz       Link Explorer free tier, 10 queries a month
//   · Search Console → Links → Top linking sites (for OUR side of the gap)
//
// Our own referring domains go in data/ours.csv, in the same shape. Without it
// the script still works — it just cannot tell you which gaps are already
// closed, and it says so rather than reporting a closed gap as an opportunity.
//
//   npm run links:gap
//   npm run links:gap -- --min 2      only domains linking to N+ competitors
//   npm run links:gap -- --all        include the ones the gate rejected
//
// WHAT IT WILL NOT DO
// It will not hand you a submission list. Every row still goes through
// quality.mjs, and on a real Char Dham export most rows come back REJECT. That
// is the correct result and the reason this file exists at all: the competitors
// in this niche have spent years building profiles that a gate like this one
// would have refused, and copying them wholesale would buy their liabilities.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assess, host, TOPIC_TERMS } from './quality.mjs';
import { COMPETITORS, OUR_DOMAIN, PROSPECTS, REFUSED, DEAD_ENDS } from './prospects.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(HERE, 'data', 'competitors');
const OURS = path.join(HERE, 'data', 'ours.csv');

const args = process.argv.slice(2);
const showAll = args.includes('--all');
const minIdx = args.indexOf('--min');
const MIN = minIdx >= 0 ? Number(args[minIdx + 1]) || 2 : 2;

// ── CSV reading ────────────────────────────────────────────────────────────
// Deliberately forgiving. These files are hand-exported by a person under time
// pressure and the difference between "Domain" and "Referring domain" should
// not cost anyone twenty minutes.
function parseCsv(file) {
  const text = fs.readFileSync(file, 'utf8').replace(/^﻿/, '');
  const lines = text.split(/\r?\n/).filter((l) => l.trim());
  if (!lines.length) return [];

  const split = (line) => {
    // Handles quoted fields containing commas; good enough for exports.
    const out = [];
    let cur = '', quoted = false;
    for (const ch of line) {
      if (ch === '"') quoted = !quoted;
      else if (ch === ',' && !quoted) { out.push(cur); cur = ''; }
      else cur += ch;
    }
    out.push(cur);
    return out.map((s) => s.trim().replace(/^"|"$/g, ''));
  };

  const header = split(lines[0]).map((h) => h.toLowerCase());
  const domainCol = header.findIndex((h) =>
    h.includes('referring domain') || h === 'domain' || h === 'source url' ||
    h.includes('source') || h === 'url' || h.includes('site'));

  if (domainCol < 0) {
    console.log('  ! ' + path.basename(file) + ' — no domain-like column found. Header was: ' + header.join(' | '));
    return [];
  }

  return lines.slice(1)
    .map((l) => host(split(l)[domainCol]))
    .filter((d) => d && d.includes('.'));
}

function readDir() {
  if (!fs.existsSync(DIR)) return {};
  const files = fs.readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.csv'));
  const out = {};
  for (const f of files) {
    const competitor = host(f.replace(/\.csv$/i, ''));
    out[competitor] = new Set(parseCsv(path.join(DIR, f)));
  }
  return out;
}

function run() {
  const byCompetitor = readDir();
  const names = Object.keys(byCompetitor);

  if (!names.length) {
    console.log('\n  No competitor exports found.\n');
    console.log('  Drop one CSV per competitor into:');
    console.log('    ' + path.relative(process.cwd(), DIR) + path.sep + '<competitor-domain>.csv\n');
    console.log('  The competitors this register tracks, in the order worth exporting:\n');
    for (const c of COMPETITORS) console.log('    ' + c.domain.padEnd(30) + c.note);
    console.log('\n  Free sources that need no subscription:');
    console.log('    · ahrefs.com/backlink-checker   — top 100 referring domains per site');
    console.log('    · moz.com/link-explorer         — 10 free queries a month');
    console.log('    · Your own side: Search Console → Links → Top linking sites → export to data/ours.csv\n');
    return;
  }

  // Ours, if we have it. Missing is a known-unknown, not a zero.
  let ours = null;
  if (fs.existsSync(OURS)) ours = new Set(parseCsv(OURS));

  // Everything already in the register or already refused is not news.
  const known = new Set([
    ...PROSPECTS.map((p) => host(p.domain)),
    ...REFUSED.map((r) => host(r.domain)),
    ...DEAD_ENDS.map((d) => host(d.domain)),
    ...COMPETITORS.map((c) => host(c.domain)),
    host(OUR_DOMAIN),
  ]);

  // Invert: domain → which competitors it links to.
  const tally = new Map();
  for (const [competitor, domains] of Object.entries(byCompetitor)) {
    for (const d of domains) {
      if (!tally.has(d)) tally.set(d, new Set());
      tally.get(d).add(competitor);
    }
  }

  const rows = [];
  const skipped = { known: 0, refused: 0, alreadyOurs: 0, belowMin: 0 };
  const refusedSet = new Set(REFUSED.map((r) => host(r.domain)));

  for (const [domain, comps] of tally) {
    if (comps.size < MIN) { skipped.belowMin++; continue; }
    if (refusedSet.has(domain)) { skipped.refused++; continue; }
    if (known.has(domain)) { skipped.known++; continue; }
    if (ours && ours.has(domain)) { skipped.alreadyOurs++; continue; }

    const competitorLinks = [...comps];
    // No HTML here; the gate scores what it can and audit.mjs fills the rest.
    // Relevance falls back to the domain name itself, which catches the
    // obviously on-topic ones (chardham*, *uttarakhand*, *yatra*).
    const nameLooksTopical = TOPIC_TERMS.some((t) => domain.includes(t.replace(/\s+/g, '')));
    const v = assess({
      domain,
      competitorLinks,
      topical: nameLooksTopical ? 0.6 : undefined,
      topicalNote: 'guessed from the domain name — audit it live before believing this',
    });
    rows.push({ domain, competitorLinks, ...v });
  }

  rows.sort((a, b) => b.competitorLinks.length - a.competitorLinks.length || b.score - a.score);

  const worth = rows.filter((r) => r.verdict !== 'REJECT');
  const junk = rows.filter((r) => r.verdict === 'REJECT');

  console.log('\n  COMPETITOR LINK GAP');
  console.log('  Exports read: ' + names.join(', '));
  console.log('  Our own referring domains: ' + (ours ? ours.size + ' loaded from ours.csv' : 'NOT LOADED — add data/ours.csv or every gap below may already be closed'));
  console.log('  ' + tally.size + ' distinct referring domains · ' + rows.length + ' link to ' + MIN + '+ competitors and not to us\n');

  const show = showAll ? rows : worth;
  if (!show.length) {
    console.log('  Nothing survived the gate. That is a normal result for this niche.\n');
  }

  for (const r of show) {
    console.log('  ' + r.verdict.padEnd(8) + String(r.score).padStart(3) + '  ' + r.domain);
    console.log('           links to: ' + r.competitorLinks.join(', '));
    for (const reason of r.reasons) console.log('           · ' + reason);
    console.log('           next: npm run links:audit -- ' + r.domain);
    console.log('');
  }

  console.log('  ' + worth.length + ' worth a look · ' + junk.length + ' rejected by the gate' + (showAll ? '' : ' (--all to see them)'));
  console.log('  Not shown: ' + skipped.belowMin + ' below the ' + MIN + '-competitor threshold · ' +
    skipped.refused + ' on the refused list · ' + skipped.known + ' already in the register · ' +
    skipped.alreadyOurs + ' already linking to us');
  console.log('  Nothing here is a prospect until it has been audited live and added to prospects.mjs by hand.\n');
}

run();
