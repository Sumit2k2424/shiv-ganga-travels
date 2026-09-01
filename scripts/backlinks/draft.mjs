#!/usr/bin/env node
// ── Submission packets ─────────────────────────────────────────────────────
//
// WHAT THIS WRITES
// Everything needed to make one submission, in one folder, built from data that
// is already in this repo:
//
//   outreach/<prospect-id>/checklist.md   what to do, in order, and what to check
//   outreach/<prospect-id>/pitch.md       the message to a named human
//   outreach/<prospect-id>/listing.txt    NAP block and descriptions for a form
//   outreach/<prospect-id>/article.md     a commissioned or guest piece, outlined
//
//   npm run links:draft -- utdb-travel-trade
//   npm run links:draft -- --all
//
// WHY IT DOES NOT SEND ANYTHING
// Two reasons, and the second is the real one.
//
// The first is that submitting on someone's behalf is a decision with a name
// attached — the founder's — and a script should not be making it.
//
// The second is that automated submission is the definition of the thing this
// system exists to avoid. A tool that fills forms is a tool that fills four
// hundred forms, and four hundred submissions from one small operator in one
// week is the exact footprint that gets a profile discounted. The bottleneck is
// supposed to be a person deciding each one is worth it. Removing that
// bottleneck removes the only thing separating this from the link farms in
// REFUSED.
//
// WHERE THE FACTS COME FROM, AND WHAT IS LEFT BLANK
// Prices come from src/data/packages.js, boilerplate and the spokesperson from
// src/data/press.js, and the address from SITE. Nothing is typed from memory —
// directory-submissions.md records a period when the off-site prices were
// stale by ₹5,600 a head because someone did.
//
// Quotes and any statistic the site does not already publish are emitted as
// [[ WRITE THIS ]] slots and never generated. That rule is inherited verbatim
// from src/data/press.js and it is not a style preference: a fabricated figure
// that a desk repeats is a correction, and a correction ends the relationship.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROSPECTS, getProspect, OUR_DOMAIN } from './prospects.mjs';
import { SITE, PACKAGES } from '../../src/data/packages.js';
import { MEDIA_KIT } from '../../src/data/press.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const OUTREACH = path.join(ROOT, 'outreach');
const APP = path.join(ROOT, 'src', 'app');

const SLOT = '[[ WRITE THIS — never generated, see the note in draft.mjs ]]';
const today = new Date().toISOString().slice(0, 10);

// ── Facts, re-derived every run ────────────────────────────────────────────
const cheapest = (filter) => PACKAGES
  .filter(filter)
  .map((p) => p?.price?.discounted)
  .filter((n) => typeof n === 'number')
  .sort((a, b) => a - b)[0];

const facts = {
  charDhamFrom : cheapest((p) => p.category === 'char-dham' && p.startCity === 'Haridwar'),
  charDhamAny  : cheapest((p) => p.category === 'char-dham'),
  kedarnathFrom: cheapest((p) => /kedarnath/i.test(p.name) && !/do dham|char dham/i.test(p.name)),
  packageCount : PACKAGES.filter((p) => p?.slug).length,
};

const inr = (n) => (typeof n === 'number' ? '₹' + n.toLocaleString('en-IN') : SLOT);

// ── Services, grouped and priced from PACKAGES ─────────────────────────
// Derived rather than written down, because the prices are the part that goes
// stale. The Aug 2026 cut moved all 39 at once, and a listing still quoting the
// old figure is the exact problem sitting on the TripAdvisor profile today.
const CATEGORY_LABEL = {
  'char-dham'  : 'Char Dham pilgrimage',
  'do-dham'    : 'Do Dham & Teen Dham',
  'single-dham': 'Single shrine',
  'helicopter' : 'Helicopter',
  'uttarakhand': 'Uttarakhand tours & treks',
};
const CATEGORY_ORDER = ['char-dham', 'do-dham', 'single-dham', 'helicopter', 'uttarakhand'];

// Real services that carry no package price, so they cannot be derived. Listed
// here so the block covers the whole offering rather than only what is priced.
const SERVICES_UNPRICED = [
  'Char Dham cab and taxi booking — fixed fares, hill-trained drivers',
  'Airport and railway station transfers — Dehradun, Haridwar, Rishikesh',
  'Tempo Traveller, Innova Crysta, Ertiga, Dzire, Scorpio and bus hire',
  'Char Dham Yatra registration and Green Card assistance',
  'Hotel booking on the Char Dham route',
  'VIP darshan and BKTC puja booking',
  'Group and corporate pilgrimage bookings',
];

// Duration is only worth printing when the package name does not already carry
// it, which most of them do.
function durationPhrase(p) {
  const d = p.duration;
  if (!d) return '';
  const nights = Number(d.nights) || 0;
  const days = Number(d.days) || 0;
  const short = nights + 'N/' + days + 'D';
  const name = String(p.name || '');
  if (name.includes(short)) return '';
  if (/[0-9]+\s*Nights?\s+[0-9]+\s*Days?/i.test(name)) return '';
  if (nights === 0) return 'same day, ';
  return short + ', ';
}

function serviceLines() {
  const out = [];
  for (const cat of CATEGORY_ORDER) {
    const list = PACKAGES.filter((p) => p.category === cat && p.slug);
    if (!list.length) continue;
    out.push('  ' + (CATEGORY_LABEL[cat] || cat));
    for (const p of list) {
      out.push('    ' + p.name + ' (' + durationPhrase(p) + 'from ' + inr(p.price && p.price.discounted) + ' per person)');
    }
    out.push('');
  }
  out.push('  Transport & support');
  for (const x of SERVICES_UNPRICED) out.push('    ' + x);
  return out;
}

// A guest article that repeats a page we already publish is a duplicate-content
// own goal — we would be handing a stronger domain our own copy to outrank us
// with. So the packet checks whether we already cover the angle and says so.
const existingPages = fs.existsSync(APP)
  ? fs.readdirSync(APP, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
  : [];

const overlaps = (angle) => existingPages.filter((slug) => {
  const words = slug.split('-').filter((w) => w.length > 4);
  return words.length >= 2 && words.every((w) => angle.toLowerCase().includes(w));
});

// ── The pieces ─────────────────────────────────────────────────────────────

function checklist(p) {
  const lines = [
    '# ' + p.name,
    '',
    '**Prospect:** `' + p.id + '`  ·  **Wants:** ' + p.wants + '  ·  **Route in:** ' + p.obtainable,
    '**Link should point at:** https://www.' + OUR_DOMAIN + p.target,
    '**Packet written:** ' + today,
    '',
    '## Why this one',
    '',
    p.why,
    '',
  ];

  if (p.caution) lines.push('## Before you touch it', '', '> ' + p.caution.replace(/\n/g, '\n> '), '');

  lines.push(
    '## What we have actually confirmed',
    '',
    p.verified ? p.verified : '**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.',
    '',
    'Evidence on file: ' + (p.evidence || 'none recorded'),
    '',
    '## Steps',
    '',
    '1. `npm run links:audit -- ' + p.domain + '` — confirm it is alive, on-topic, and not already linking to us.',
    '2. Open ' + (p.submitUrl || p.url) + ' and read what they actually ask for. This packet is a starting point, not a form filling.',
    '3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.',
    '4. Check the price in the copy against `src/data/packages.js` on the day you send it.',
    '5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.',
    '6. Set `status: \'submitted\'` and `submittedOn: \'' + today + '\'` on `' + p.id + '` in `scripts/backlinks/prospects.mjs`.',
    '7. When it appears, set `status: \'live\'`, record the URL in `liveAt`, and set `verified` to the date you saw it.',
    '',
    '## If they say no',
    '',
    'Set `status: \'declined\'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.',
    '',
  );
  return lines.join('\n');
}

function pitch(p) {
  const isPress = p.category === 'press';
  const subject = isPress
    ? 'Char Dham ' + SITE.season + ' — operator on the route since 2010, available for comment'
    : 'Listing enquiry — Shiv Ganga Travels, Char Dham operator, Haridwar';

  const body = isPress
    ? [
      'Dear ' + SLOT + ' (find the actual name of the desk editor — a pitch to "Sir/Madam" is a pitch to nobody),',
      '',
      'I run Shiv Ganga Travels, a Char Dham operator based in Bhupatwala, Haridwar. We have',
      'taken pilgrims up the Garhwal route every season since 2010, including the years after the',
      '2013 Kedarnath floods.',
      '',
      'I am writing because ' + SLOT + ' (the story, in one sentence — what is happening now that',
      'their readers need explained. Not what we sell).',
      '',
      'What I can give you:',
      '',
      '  · On-record comment, under my own name and title.',
      '  · Route and road conditions as they are this week, from drivers who were on them.',
      '  · Our published figures at https://www.' + OUR_DOMAIN + '/char-dham-yatra-statistics —',
      '    free to reproduce with attribution, and every number there is sourced on the page.',
      '  · Photographs, no charge, per our stated asset policy.',
      '',
      'If a number below is useful, please carry the original source rather than us:',
      '',
      '  ' + SLOT + ' (paste only figures already published on our site or by the Devasthanam',
      '  Board / Uttarakhand Tourism, with their attribution. Do not paraphrase a figure into',
      '  this email that is not already public — see the rule at the top of src/data/press.js.)',
      '',
      'Happy to talk any time. WhatsApp is fastest during season — I am often on the route.',
      '',
      MEDIA_KIT.spokesperson.name,
      MEDIA_KIT.contact.role + ', Shiv Ganga Travels',
      SITE.phone + ' (call/WhatsApp) · ' + SITE.email,
      'https://www.' + OUR_DOMAIN + '/press',
      '',
      '--',
      MEDIA_KIT.boilerplateShort,
    ]
    : [
      'Dear ' + SLOT + ' (a name, if the site shows one),',
      '',
      'I would like to enquire about a listing for Shiv Ganga Travels on ' + p.domain + '.',
      '',
      MEDIA_KIT.boilerplateShort,
      '',
      'Details are below and in the attached profile. If there is a form or a fee I have missed,',
      'please point me to it.',
      '',
      'Name:     ' + SITE.name,
      'Address:  ' + SITE.address,
      'Phone:    ' + SITE.phone,
      'Email:    ' + SITE.email,
      'Website:  https://www.' + OUR_DOMAIN + p.target,
      '',
      'Thank you,',
      MEDIA_KIT.spokesperson.name,
      MEDIA_KIT.contact.role + ', Shiv Ganga Travels',
    ];

  return [
    '# Pitch — ' + p.name,
    '',
    '**Send to:** ' + SLOT + ' (a person, at a verified address — not `info@`)',
    '**Subject:** ' + subject,
    '',
    '---',
    '',
    body.join('\n'),
    '',
    '---',
    '',
    '## Rules for this message',
    '',
    '- One follow-up if there is no reply after three weeks. Never two.',
    '- Never mention the link. If the piece runs, the link follows; if you ask for it, the piece does not run.',
    '- ' + (isPress ? 'The quote must be the founder\'s own words. A drafted quote attributed to a real person is the one thing this whole system will not do.' : 'Keep the NAP block character-for-character identical to every other listing. Inconsistency is what dilutes a citation.'),
    '',
  ].join('\n');
}

function listing(p) {
  return [
    '# Listing copy — ' + p.name,
    '# Generated ' + today + ' from src/data/packages.js and src/data/press.js.',
    '# Re-generate rather than editing this file, and re-check prices on the day you paste.',
    '',
    'BUSINESS NAME',
    SITE.name,
    '',
    'CATEGORY',
    'Tour operator · Pilgrimage tour operator · Travel agency',
    '',
    'ADDRESS (paste identically everywhere — this exact string)',
    SITE.address,
    '',
    'PHONE      ' + SITE.phone,
    'WHATSAPP   ' + SITE.phone,
    'EMAIL      ' + SITE.email,
    'WEBSITE    https://www.' + OUR_DOMAIN + p.target,
    'FOUNDED    ' + SITE.established,
    '',
    'SHORT DESCRIPTION (~50 words)',
    MEDIA_KIT.boilerplateShort,
    '',
    'LONG DESCRIPTION (~200 words)',
    MEDIA_KIT.boilerplateLong,
    '',
    'PRICE ANCHORS — live from src/data/packages.js on ' + today,
    '  Char Dham 9N/10D ex-Haridwar ....... from ' + inr(facts.charDhamFrom),
    '  Kedarnath single dham .............. from ' + inr(facts.kedarnathFrom),
    '  Packages published ................. ' + facts.packageCount,
    '',
    '  If a listing already published elsewhere shows a different figure, that listing is',
    '  stale and must be corrected before this one is created. directory-submissions.md',
    '  records the TripAdvisor description still carrying a price that is ₹5,600 too high.',
    '',
    'SERVICES — ' + facts.packageCount + ' packages, priced live on ' + today,
    ...serviceLines(),
    '',
    'FAST FACTS',
    ...MEDIA_KIT.fastFacts.map(([k, v]) => '  ' + k.padEnd(20) + v),
    '',
  ].join('\n');
}

function article(p) {
  // The angle has to be something the site does NOT already publish, or we are
  // competing with ourselves on a stronger domain.
  const angle = SLOT + ' (one angle, specific, and useful to THEIR readers)';
  const clash = overlaps(String(p.angle || ''));

  return [
    '# Article draft — for ' + p.name,
    '',
    '**Status: outline only.** The prose is not generated. What is below is the shape,',
    'the facts we can stand behind, and the checks it has to pass before it is sent.',
    '',
    '## Angle',
    '',
    angle,
    '',
    clash.length
      ? '> **Overlap warning.** We already publish `/' + clash.join('`, `/') + '`. Do not send a\n> version of a page we already rank with — you would be handing a stronger domain our\n> own copy. Find the angle that page does *not* cover, or pick a different one.'
      : '> Check `src/app/` before writing: if we already publish this angle, change it. A guest\n> post that duplicates our own page competes with us from a stronger domain.',
    '',
    '## Shape',
    '',
    '1. **Open on the thing that goes wrong.** Not on the company. The reader arrived with a',
    '   problem — registration, altitude, road timing, what a pony actually costs.',
    '2. **Answer it in the first 100 words.** The publication gets a piece that works; we get',
    '   a paragraph an AI assistant can lift with attribution.',
    '3. **Three to five sections of real specifics** — distances, altitudes, timings, rates.',
    '   All of it is already in `src/data/` and none of it should be typed from memory.',
    '4. **One honest limitation.** The piece that says "do not attempt this in the first week',
    '   of monsoon" is the piece that gets published and quoted.',
    '5. **A single contextual link**, in the body, where it genuinely helps:',
    '   https://www.' + OUR_DOMAIN + p.target,
    '',
    '## Facts available without inventing anything',
    '',
    '  · Operating since ' + SITE.established + ', every season including post-2013 rebuilding.',
    '  · ' + facts.packageCount + ' published circuits; Char Dham 9N/10D from ' + inr(facts.charDhamFrom) + ' ex-Haridwar.',
    '  · Season ' + SITE.season + ' dates, road status, distances and pony rates: all published on site.',
    '  · Sourced figures: https://www.' + OUR_DOMAIN + '/char-dham-yatra-statistics',
    '',
    '## What may not appear in this draft',
    '',
    '  · Any statistic not already published on our site or by a named third party.',
    '  · Any quote. If the piece needs one, ' + MEDIA_KIT.spokesperson.name + ' writes it.',
    '  · A word of praise for ourselves. The byline does that work; the copy must not.',
    '',
    '## Before sending',
    '',
    '  - [ ] Every `[[ WRITE THIS ]]` slot filled.',
    '  - [ ] Read their published guidelines. Length, format, bio, image rights.',
    '  - [ ] Prices re-checked against `src/data/packages.js` today.',
    '  - [ ] Exactly one link, and it is contextual.',
    '  - [ ] Nobody could tell from the copy that we wanted a link.',
    '',
  ].join('\n');
}

function answer(p) {
  return [
    '# Community answer — ' + p.name,
    '',
    '**This is the channel where a link costs more than it earns.** ' + p.domain + ' is read by',
    'people who can smell an operator posting for reach, and by the AI assistants that quote them.',
    '',
    '## The rules, which are not negotiable',
    '',
    '1. **Disclose.** "I run a Char Dham operation in Haridwar" goes in the first line, every time.',
    '   Disclosed, the expertise is welcome. Undisclosed and discovered, the account is finished.',
    '2. **Answer without a link first.** Build a real history. A profile whose every comment carries',
    '   a URL is a spam profile no matter how good the comments are.',
    '3. **Link only when the detail is genuinely needed** — a rate table, a route map, a date list —',
    '   and only after someone has asked for it.',
    '4. **Be useful when it costs us.** "You do not need an operator for that" earns more standing',
    '   than any pitch, and standing is the entire asset here.',
    '',
    '## What we know better than the people currently answering',
    '',
    '  · Registration mechanics, and which portals are fake — /char-dham-yatra-scams',
    '  · Real pony, palki and kandi rates — /kedarnath-pony-palki-kandi-rates, /yamunotri-pony-palki-rates',
    '  · Road timings and distances that match the actual drive — /char-dham-yatra-route-map',
    '  · Altitude and who should not attempt the trek — /altitude-sickness-char-dham',
    '',
    '## Target',
    '',
    'https://www.' + OUR_DOMAIN + p.target + ' — only when it is the answer to what was asked.',
    '',
    '## Draft',
    '',
    SLOT + ' (written by a person, in the first person, about something that actually happened',
    'on the route. A drafted community comment reads like one, and this is the one channel',
    'where reading like one is fatal.)',
    '',
  ].join('\n');
}

// ── Write ──────────────────────────────────────────────────────────────────

function build(p) {
  const dir = path.join(OUTREACH, p.id);
  fs.mkdirSync(dir, { recursive: true });

  const files = { 'checklist.md': checklist(p) };

  if (p.wants === 'listing' || p.wants === 'profile') files['listing.txt'] = listing(p);
  if (p.wants === 'article' || p.wants === 'travelogue') files['article.md'] = article(p);
  if (p.wants === 'answer') files['answer.md'] = answer(p);
  if (p.obtainable === 'pitch' || p.wants === 'quote' || p.wants === 'article') files['pitch.md'] = pitch(p);

  // Never overwrite work. Once someone has filled the [[ WRITE THIS ]] slots
  // in a packet, that file is the only copy of a person's writing, and a second
  // `--all` run six weeks later would silently destroy it. Regenerating is
  // cheap; re-writing a pitch from memory is not.
  const written = [];
  const kept = [];
  for (const [name, body] of Object.entries(files)) {
    const file = path.join(dir, name);
    if (fs.existsSync(file) && !force) { kept.push(name); continue; }
    fs.writeFileSync(file, body, 'utf8');
    written.push(name);
  }
  return { dir, written, kept };
}

const args = process.argv.slice(2);
const ids = args.filter((a) => !a.startsWith('--'));
const all = args.includes('--all');
const force = args.includes('--force');

if (!ids.length && !all) {
  console.log('\n  Usage: npm run links:draft -- <prospect-id>   (or --all)\n');
  console.log('  Open prospects:\n');
  for (const p of PROSPECTS.filter((x) => x.status === 'open')) {
    console.log('    ' + p.id.padEnd(30) + p.wants.padEnd(12) + p.domain);
  }
  console.log('');
  process.exit(0);
}

const chosen = all ? PROSPECTS.filter((p) => p.status === 'open' && p.category !== 'asset') : ids.map(getProspect);

console.log('');
for (const p of chosen) {
  if (!p) { console.log('  ! No prospect with that id. Run without arguments to list them.'); continue; }
  const { dir, written, kept } = build(p);
  console.log('  ' + p.id);
  if (written.length) console.log('    ' + path.relative(ROOT, dir) + '  →  ' + written.join(', '));
  if (kept.length) console.log('    kept (already exists, not overwritten): ' + kept.join(', ') + '   — `--force` to replace');
}
console.log('\n  Slots marked [[ WRITE THIS ]] are deliberate. Fill them before anything is sent.');
console.log('  Nothing above has been submitted anywhere.\n');
