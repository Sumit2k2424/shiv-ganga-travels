# Amar Ujala — Dehradun / Haridwar bureaus

**Prospect:** `amar-ujala-uttarakhand`  ·  **Wants:** quote  ·  **Route in:** relationship
**Link should point at:** https://www.shivgangatravels.com/char-dham-road-status
**Packet written:** 2026-09-15

## Why this one

The largest Hindi daily in Uttarakhand. Its Dehradun city page carried 32 Char Dham / Kedarnath mentions on the day it was checked; the yatra is its daily beat in season. A Haridwar operator on the route, ex-Army, available on the phone the same hour, is the source a bureau reporter keeps.

## Before you touch it

> Phone first, then WhatsApp the registrations figures. Never send a press release cold. Quotes on the record under Dhanesh Chandra Mishra only.

## What we have actually confirmed

2026-09-15: /uttarakhand/dehradun and /uttarakhand/haridwar both return 200; the Dehradun page had 32 yatra mentions, the Haridwar page 0 that day (local-crime heavy). Pitch the Dehradun bureau for yatra stories and Haridwar for operator-in-town stories.

Evidence on file: Uttarakhand edition with per-city pages for Dehradun and Haridwar. Bureau reporter name and number NOT yet obtained.

## Steps

1. `npm run links:audit -- amarujala.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.amarujala.com/uttarakhand/dehradun and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-15'` on `amar-ujala-uttarakhand` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
