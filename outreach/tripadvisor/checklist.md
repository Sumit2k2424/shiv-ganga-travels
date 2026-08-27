# TripAdvisor — operator listing

**Prospect:** `tripadvisor`  ·  **Wants:** profile  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-08-27

## Why this one

Already listed. High-trust profile that NRI and foreign pilgrims check before booking.

## Before you touch it

> URGENT AND ALREADY KNOWN: directory-submissions.md records that the live TripAdvisor description still says "from ₹19,500 per person". The real anchor is ₹13,900. A wrong price on a third-party profile is worse than no profile — fix this before any new submission is made anywhere, because the same stale figure is probably sitting on other listings too.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: Listing exists; stale price recorded in directory-submissions.md.

## Steps

1. `npm run links:audit -- tripadvisor.in` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.tripadvisor.in/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-08-27'` on `tripadvisor` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
