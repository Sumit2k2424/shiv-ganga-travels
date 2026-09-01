# Google Business Profile

**Prospect:** `google-business-profile`  ·  **Wants:** listing  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-09-01

## Why this one

The single highest-value local asset, and the one that feeds the map pack and local AI answers. Posts and Q&A are underused per AUTHORITY-PLAN tier 5.

## Before you touch it

> Checked 2026-09-01 against the live profile. Three fields are wrong and one is contradictory. Hours read 07:00-21:00 daily against the correct 09:00-20:00. The Booking options module shows ₹21,000 for the 9N/10D Char Dham package, which is the 12N/13D senior price on the wrong label — the real figure is ₹13,900, so this is a second stale price alongside TripAdvisor, and worse because it sits beside “Instant confirmation”. The address spells Bhoopatwala where the site and every packet say Bhupatwala, and appends Motichur Range. Opening date says 10 August 2017 while the description directly above it says since 2010. Editing must be done by hand: the profile edit dialog does not accept automated input reliably.

## What we have actually confirmed

2026-09-01: live profile read. Hours, booking price and address spelling all disagree with the site.

Evidence on file: Profile exists — AUTHORITY-PLAN records 38 reviews at 4.6.

## Steps

1. `npm run links:audit -- google.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://business.google.com/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `google-business-profile` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
