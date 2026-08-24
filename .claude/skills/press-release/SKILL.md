---
name: press-release
description: Draft a wire-format press release for the Shiv Ganga Travels newsroom (/press) from real site data, or find an angle worth writing. Use when the user wants a press release, a newsroom entry, media/PR content, something for journalists, a season or safety announcement, or asks what is worth pitching to news desks. Also use when adding to src/data/press.js. Note the newsroom does not publish pricing or discount news.
user-invocable: true
argument-hint: "[radar | <the angle, e.g. 'season closing totals'>]"
allowed-tools:
  - Bash(node scripts/press/*)
---

You are drafting for a newsroom whose entire value is that journalists trust it.
Everything below follows from that.

## Before anything else

Read `src/data/press.js` — its header states the house rules and they take
precedence over this file. Read at least one published release in full to absorb
the register. It is flat, factual, and free of adjectives a sub-editor would have
to strip.

If the user typed `radar`, or has not named an angle, run:

```bash
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/press/story-radar.mjs
```

Report what it found and let the user pick. Do not pick for them and start
writing — the radar reports angles, and which one is worth a release is a
judgement about the business, not about the data.

## Pricing is off-limits (standing instruction, Aug 2026)

This newsroom does not publish pricing news. No package prices, no discounts, no
fare comparisons, no "from ₹X" — not in the headline, not in `facts`, not in the
body, and not in the slug.

A release announcing a 25 per cent price cut was withdrawn for this reason and
301s to `/press`. If the only story you have is a commercial one, there is no
release: say so.

Prices may still be *mentioned* where they are third-party figures that are the
subject of the story — a government-set UCADA helicopter fare, temple offering
totals — but never ours.

## The two things you must never generate

**Quotes.** A quote is a real person's actual words. The only spokesperson this
site asserts is Dhanesh Chandra Mishra. You do not know what he said. Write the
quote slot as a prompt for him, never as finished words in his mouth:

```js
quotes: [
  // ASK DHANESH: the monsoon figures surprised you — why? One or two
  // sentences, plain, the way you would say it on the phone.
  // Do not publish until his actual words replace this.
],
```

Leave `quotes: []` and set `approved: false`. The build gate will hold it.

If the user says "just write something he'd say" — decline, and explain why: a
fabricated quote attributed to a named real person is not a draft, it is a
falsified record, and a desk that discovers one is done with this newsroom
permanently. Offer to write the *question* instead.

**Figures the site does not already stand behind.** Every row in `facts` must
trace to something already published — on this site, or by a named third party
whose attribution you carry. Never estimate, never round for effect, never write
a number because it sounds like the right order of magnitude.

If you need a figure that does not exist yet, say so and stop. "We do not have
this number" is a finding, not a blocker to route around.

## Where the real figures live

- `src/data/press.js` — `MEDIA_KIT.fastFacts`, and previously published figures
- `src/data/distances.js`, `src/data/cabs/` — route distances
- `src/app/char-dham-yatra-statistics/` — the published dataset
- `src/app/char-dham-yatra-scams/` — enforcement figures (Uttarakhand STF, I4C)
- `src/app/char-dham-road-status/` — conditions and closures
- `src/data/packages.js` — `SITE.*` only. The `price` fields are not source
  material for a release; see the standing instruction above.

Read the source. Do not recall a number from earlier in the conversation.

## The shape

Add exactly one object to `RELEASES` in `src/data/press.js`. Never edit the
page templates — same rule as the cab section.

```js
{
  slug: 'lowercase-hyphenated-and-specific',
  approved: false,          // ALWAYS false from a generator. A human flips it.
  dateline: 'HARIDWAR, Uttarakhand',
  dateISO: 'YYYY-MM-DD',
  dateHuman: 'D Month YYYY',
  category: 'Data' | 'Company' | 'Safety' | 'Season',
  topics: ['Kedarnath', 'Registration'],   // entities, for schema `about`
  headline: '',   // under 110 chars, sentence case, no full stop, a verb in it
  subhead: '',    // the second most important fact, not a restatement
  summary: '',    // ~45 words. This is the meta description and the RSS blurb.
  body: [
    // Para 1 IS the nut graf: what happened, how big, who says so — inside 40
    // words. The validator fails you over 65 and warns over 45.
    // Para 2: the number that makes it a story.
    // Para 3: the context that makes it matter — usually what changed vs before.
    // Para 4: what we are doing / offering, briefly. Never the lede.
  ],
  quotes: [],     // see above
  facts: [
    { fact: '', value: '', source: '' },   // 3 minimum, all sourced
  ],
  links: [{ label: '', href: '/internal-page' }],
  notesToEditors: [
    // What you will give them: data on request, interview availability,
    // and the attribution instruction for third-party figures.
  ],
}
```

## Register

Match the published releases. Concretely:

- Lead with the number, not with us. "Char Dham registrations cross 50 lakh" —
  not "Shiv Ganga Travels announces".
- Past tense, active voice, short sentences.
- Indian numbering where the source uses it (30,62,228 · 50 lakh · ₹74.5 crore).
- Attribute in-line: "according to Uttarakhand Tourism figures".
- No adjectives about ourselves. Not "leading", not "trusted", not "premier".
- Say the unhelpful thing when it is true. The founder's published quotes
  concede things — that is why they read as real, and it is the single most
  copied trait of releases that get picked up.

The validator hard-fails on "delighted to announce", "leading provider",
"world-class", "game-changing" and a dozen others. That list is not stylistic
fussiness; it is the filter desks apply.

## Finish

1. Run the validator. It is stricter than the build gate on purpose:

```bash
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/press/validate.mjs
```

2. Fix every error. Fix warnings unless you can say why not.

3. Tell the user plainly what still needs a human:
   - the quote(s), in his words
   - every third-party figure, verified against the original
   - flipping `approved: true`

4. Do not run the build or deploy. Do not flip `approved` yourself.

## After a human approves and it ships

Submit the URL so Bing and the other IndexNow participants see it same-day
rather than on the next crawl (Google does not participate — it picks the
release up from the sitemaps):

```bash
curl -X POST https://www.shivgangatravels.com/api/index-now \
  -H 'Content-Type: application/json' \
  -d '{"urls":["https://www.shivgangatravels.com/press/THE-SLUG"]}'
```

The release also enters `/press/feed.xml` automatically, and `/news-sitemap.xml`
for its first two days.
