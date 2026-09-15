# Hindustan (Live Hindustan) — Haridwar bureau

**Prospect:** `hindustan-uttarakhand`  ·  **Wants:** quote  ·  **Route in:** relationship
**Link should point at:** https://www.shivgangatravels.com/char-dham-road-status
**Packet written:** 2026-09-15

## Why this one

Third of the three Hindi dailies with a Haridwar page, and on the day checked the heaviest yatra coverage of the three (30 mentions). Completes the set: one operator quoted across all three is what makes a name familiar to the next reporter.

## Before you touch it

> Same as above.

## What we have actually confirmed

2026-09-15: /uttarakhand/haridwar returns 200; 30 Char Dham / Kedarnath mentions on the page that day.

Evidence on file: Haridwar page live with daily yatra items. Bureau contact NOT yet obtained.

## Steps

1. `npm run links:audit -- livehindustan.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.livehindustan.com/uttarakhand/haridwar and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-15'` on `hindustan-uttarakhand` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
