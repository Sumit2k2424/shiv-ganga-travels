# Qwoted — journalist source platform

**Prospect:** `qwoted`  ·  **Wants:** quote  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/press
**Packet written:** 2026-08-27

## Why this one

Second source-request platform, different journalist pool. Same economics as Featured.

## Before you touch it

> Skewed towards finance and tech desks; travel volume is lower. Low effort per query, so it earns its place, but do not let it eat a morning.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: Platform live Aug 2026.

## Steps

1. `npm run links:audit -- qwoted.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.qwoted.com/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-08-27'` on `qwoted` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
