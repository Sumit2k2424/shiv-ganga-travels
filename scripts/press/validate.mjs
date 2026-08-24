#!/usr/bin/env node
// ── Newsroom validator ─────────────────────────────────────────────────────
//
// WHY THIS EXISTS
// `isPublishable()` in src/data/press.js answers one question: is this release
// structurally complete enough to render? That is the right gate for the build,
// but it is not the standard the file's own header sets. It cannot tell that a
// quote slot still says TODO, that a figure has no source, or that the copy
// opens with "we are delighted to announce" — the exact thing the header says
// desks bin.
//
// So this is the editorial gate that runs before a human signs off, and it is
// deliberately stricter than the build gate. Anything that generates a draft
// must be run through it. The generator cannot be trusted to grade its own
// homework, and neither can a person at 11pm.
//
//   node scripts/press/validate.mjs           # all releases, drafts included
//   node scripts/press/validate.mjs --strict  # warnings become errors
//
// Exit code 1 on any error, so it can gate a commit or a deploy.

import { RELEASES, isPublishable } from '../../src/data/press.js';

const STRICT = process.argv.includes('--strict');

// Phrases that get a release deleted unread. This list is not stylistic
// pedantry — it is the difference between copy a sub-editor can lift and copy
// they have to rewrite, and rewriting is the point at which they decide it is
// easier to call someone else.
const DEAD_PHRASES = [
  'delighted to announce', 'excited to announce', 'pleased to announce',
  'proud to announce', 'thrilled to', 'is proud to', 'leading provider',
  'one-stop', 'one stop shop', 'revolutionary', 'game-changing', 'game changer',
  'cutting-edge', 'state-of-the-art', 'best-in-class', 'world-class',
  'unparalleled', 'seamless experience', 'take it to the next level',
  'we are committed to', 'synergy', 'disrupt', 'paradigm',
];

// Anything still carrying one of these is a draft, not a release.
const PLACEHOLDERS = [
  'TODO', 'TKTK', 'TK ', 'XXX', 'LOREM', 'PLACEHOLDER',
  'NEEDS_QUOTE', 'NEEDS QUOTE', 'FIXME', '<<', '>>', '[INSERT',
];

const errors = [];
const warnings = [];

const err = (slug, msg) => errors.push(`${slug}: ${msg}`);
const warn = (slug, msg) => warnings.push(`${slug}: ${msg}`);

const words = (s) => String(s).trim().split(/\s+/).filter(Boolean);

/** Every string in a release, for the phrase and placeholder sweeps. */
function allText(r) {
  return [
    r.headline, r.subhead, r.summary,
    ...(r.body || []),
    ...(r.quotes || []).flatMap((q) => [q?.text, q?.by, q?.role]),
    ...(r.facts || []).flatMap((f) => [f?.fact, f?.value, f?.source]),
    ...(r.notesToEditors || []),
  ].filter((x) => typeof x === 'string');
}

const seenSlugs = new Set();

for (const r of RELEASES) {
  const slug = r.slug || '(missing slug)';

  // ── Identity ────────────────────────────────────────────────────────────
  if (!r.slug) err(slug, 'no slug');
  if (seenSlugs.has(r.slug)) err(slug, 'duplicate slug — two releases would collide on one URL');
  seenSlugs.add(r.slug);

  if (r.slug && !/^[a-z0-9-]+$/.test(r.slug)) {
    err(slug, 'slug must be lowercase letters, digits and hyphens only');
  }

  // ── Dates ───────────────────────────────────────────────────────────────
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.dateISO || '')) {
    err(slug, `dateISO must be YYYY-MM-DD, got ${JSON.stringify(r.dateISO)}`);
  } else if (Number.isNaN(new Date(r.dateISO).getTime())) {
    err(slug, `dateISO is not a real date: ${r.dateISO}`);
  }
  if (r.dateModifiedISO && r.dateModifiedISO < r.dateISO) {
    err(slug, 'dateModifiedISO is earlier than dateISO');
  }
  // A dateModified that moves with no visible change on the page is the
  // pattern news systems treat as date manipulation.
  if (r.dateModifiedISO && r.dateModifiedISO !== r.dateISO && !r.updates?.length) {
    warn(slug, 'dateModifiedISO is set but updates[] is empty — say what changed, or drop the modified date');
  }

  // ── Headline ────────────────────────────────────────────────────────────
  if (r.headline && r.headline.length > 110) {
    warn(slug, `headline is ${r.headline.length} chars; schema truncates at 110 — write it shorter rather than let it be cut`);
  }
  if (r.headline && /^[A-Z\s]+$/.test(r.headline)) {
    err(slug, 'headline is in caps — desks read that as a shout, not a story');
  }
  if (r.headline && r.headline.trim().endsWith('.')) {
    warn(slug, 'headline ends in a full stop — wire headlines do not');
  }

  // ── The nut graf ────────────────────────────────────────────────────────
  // The house rule in press.js is a nut graf inside the first 40 words. If the
  // opening paragraph runs long, the story is buried and the release reads as
  // a company update.
  const first = (r.body || [])[0];
  if (first) {
    const n = words(first).length;
    if (n > 65) err(slug, `opening paragraph is ${n} words — the nut graf must land in the first 40`);
    else if (n > 45) warn(slug, `opening paragraph is ${n} words — tighten toward 40`);
  }

  if (r.summary && words(r.summary).length > 70) {
    warn(slug, `summary is ${words(r.summary).length} words — it is the description and the RSS blurb; keep it under about 60`);
  }

  // ── Quotes: the field that must never be generated ──────────────────────
  for (const [i, q] of (r.quotes || []).entries()) {
    if (!q?.text || !q?.by || !q?.role) {
      err(slug, `quote ${i + 1} is incomplete — text, by and role are all required`);
      continue;
    }
    if (words(q.text).length < 12) {
      warn(slug, `quote ${i + 1} is very short — a desk cannot build a paragraph around it`);
    }
    // A quote is a person's actual words. If it is attributed to someone who is
    // not the one spokesperson this site asserts, that is a fabrication risk
    // worth stopping on rather than warning about.
    if (!/Dhanesh Chandra Mishra/i.test(q.by)) {
      err(slug, `quote ${i + 1} is attributed to "${q.by}" — the only spokesperson this site asserts is Dhanesh Chandra Mishra. Do not invent people.`);
    }
  }

  // ── Figures ─────────────────────────────────────────────────────────────
  for (const [i, f] of (r.facts || []).entries()) {
    if (!f?.fact || !f?.value || !f?.source) {
      err(slug, `fact ${i + 1} is missing fact, value or source — an unsourced figure cannot ship`);
    }
  }

  // Third-party figures are the ones that get us in trouble if wrong, because
  // we are asserting what someone else published. Reported once per release
  // rather than once per row: a validator that prints six near-identical lines
  // for one release is a validator people learn to scroll past.
  const thirdParty = [
    ...new Set(
      (r.facts || [])
        .filter((f) => f?.source && !/Shiv Ganga/i.test(f.source))
        .map((f) => f.source)
    ),
  ];
  if (thirdParty.length) {
    warn(slug, `${thirdParty.length} third-party source(s) to verify against the original before publishing — ${thirdParty.join(', ')}. Keep that attribution in the copy rather than reassigning it to us.`);
  }

  // ── Copy hygiene ────────────────────────────────────────────────────────
  const text = allText(r);
  const hay = text.join(' \n ').toLowerCase();

  for (const phrase of DEAD_PHRASES) {
    if (hay.includes(phrase)) {
      err(slug, `contains "${phrase}" — press.js says desks bin this. Rewrite the sentence.`);
    }
  }
  for (const ph of PLACEHOLDERS) {
    if (text.some((t) => t.toUpperCase().includes(ph))) {
      err(slug, `contains placeholder "${ph.trim()}" — this is a draft, not a release`);
    }
  }

  // ── Pricing (standing instruction, Aug 2026) ────────────────────────────
  // The newsroom does not publish our own pricing or discount news. Enforced
  // here rather than left to memory: the withdrawn 25-per-cent release is
  // exactly the thing that gets rewritten from habit six months later, by
  // someone who never saw the instruction.
  //
  // Third-party money is still allowed — temple offering totals, government-set
  // UCADA fares — because there the figure is the story and it is not ours. So
  // the check looks for OUR commercial language, not for currency alone.
  const OWN_PRICE = [
    /\bper person\b/i,
    /\bdiscount(ed|s)?\b/i,
    /\bprice cut\b/i, /\bcuts? (all )?(its )?\w*\s?prices?\b/i,
    /\bper cent off\b/i, /\b\d+% off\b/i,
    /\bstarting (at|from) ₹/i, /\bfrom ₹[\d,]+/i,
    /\bpackage price/i, /\brepriced?\b/i, /\bfare cut\b/i,
    /\boffer price\b/i, /\bspecial rate\b/i,
  ];

  const priceHits = new Set();
  for (const t of text) {
    for (const re of OWN_PRICE) {
      if (re.test(t)) priceHits.add(re.source.replace(/\\b|\\s\?|[()?]/g, '').slice(0, 34));
    }
  }
  // A slug is the most visible line in a search result — a pricing slug is a
  // pricing announcement even if the copy has been scrubbed.
  if (/\bprice|discount|cheap|offer|deal|percent|fare\b/i.test(r.slug || '')) {
    err(slug, 'slug reads as a pricing announcement — the newsroom does not publish pricing news, and the slug is the most visible part of it');
  }
  if (priceHits.size) {
    err(slug, `reads as pricing news (matched: ${[...priceHits].join(', ')}). The newsroom does not publish our own prices or discounts. Third-party figures — temple offerings, UCADA fares — are fine; ours are not.`);
  }

  // ── Approval and build gate ─────────────────────────────────────────────
  if (r.approved === true && !isPublishable(r)) {
    err(slug, 'approved:true but fails isPublishable() — it will silently render nowhere');
  }
  if (r.approved !== true) {
    warn(slug, 'approved:false — held as a draft, will not render or reach the sitemap');
  }
}

// ── Report ─────────────────────────────────────────────────────────────────
const published = RELEASES.filter(isPublishable).length;
console.log(`\nNewsroom: ${RELEASES.length} release(s), ${published} publishable.\n`);

if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  for (const w of warnings) console.log(`  ! ${w}`);
  console.log('');
}

if (errors.length) {
  console.log(`Errors (${errors.length}):`);
  for (const e of errors) console.log(`  x ${e}`);
  console.log('');
  process.exit(1);
}

if (STRICT && warnings.length) {
  console.log('--strict: warnings are errors.\n');
  process.exit(1);
}

console.log(errors.length ? '' : 'No blocking problems.\n');
