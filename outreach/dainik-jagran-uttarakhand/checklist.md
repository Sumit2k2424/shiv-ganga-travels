# Dainik Jagran — Haridwar bureau

**Prospect:** `dainik-jagran-uttarakhand`  ·  **Wants:** quote  ·  **Route in:** relationship
**Link should point at:** https://www.shivgangatravels.com/char-dham-yatra-statistics
**Packet written:** 2026-09-15

## Why this one

Second Hindi daily with a dedicated Haridwar page. Same play as Amar Ujala: be the operator a reporter can call at 7 am when the Kedarnath road shuts.

## Before you touch it

> Same as Amar Ujala. Do not pitch both bureaus the identical figure on the same day; give each a different angle from the statistics hub.

## What we have actually confirmed

2026-09-15: /uttarakhand/haridwar returns 200 with live yatra coverage (2 mentions that day).

Evidence on file: Haridwar city page exists. Bureau contact NOT yet obtained.

## Steps

1. `npm run links:audit -- jagran.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.jagran.com/uttarakhand/haridwar and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-15'` on `dainik-jagran-uttarakhand` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
