# TripAdvisor — operator listing

**Prospect:** `tripadvisor`  ·  **Wants:** claim, then three corrections  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-09-01

## Why this one

Already listed, and the highest-trust profile NRI and foreign pilgrims check before booking. Ranked #41 of 96 Tours & Activities in Haridwar on one review, so there is room to move on volume alone.

## Before you touch it

> Read live on 2026-09-01, and it is worse than the August note said. The listing is UNCLAIMED — the page shows “Get verified to manage this listing”, so nothing can be edited until it is claimed, and that gates everything below. Three things are then wrong. (1) The About text still says “packages from ₹19,500 per person”, the pre-cut price, against ₹13,900. (2) Hours read 7:00 AM – 9:00 PM, the identical stale figure Google and Bing carry — this is the third listing with it. (3) The contact block is empty, so a profile with a wrong price offers no way to ring and correct it. The address in the description is right (Saptrishi Road, Bhupatwala). Bot-blocked to crawlers, so all of this needs a manual login.

## What we have actually confirmed

2026-09-01: confirmed live and unclaimed. Stale price and stale hours both still published.

Evidence on file: Listing live at tripadvisor.com/Attraction_Review-g616028-d34343558. Read 2026-09-01: 5.0 from a single review, #41 of 96, ₹19,500 in the About text, 7:00 AM – 9:00 PM hours, empty contact block, “Booking unavailable on Tripadvisor”.

## Steps

1. `npm run links:audit -- tripadvisor.in` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.tripadvisor.in/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `tripadvisor` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
