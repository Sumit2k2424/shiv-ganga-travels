# TripAdvisor — operator listing

**Prospect:** `tripadvisor`  ·  **Wants:** identity verification, then four corrections  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-09-01

## Why this one

Already listed, and the highest-trust profile NRI and foreign pilgrims check before booking. Ranked #41 of 96 Tours & Activities in Haridwar on one review, so there is room to move on volume alone.

## Before you touch it

> The listing is ALREADY CLAIMED — the public page says “Get verified to manage this listing”, which reads as unclaimed and is not. The owner portal says “You’ve claimed this business” and offers a Verify identity button. Identity verification is the only blocker, and only the owner can complete it. Four things then need correcting. (1) About text says “from ₹19,500 per person”, the pre-cut price, against ₹13,900. (2) Hours 7:00 AM – 9:00 PM against 9 AM – 8 PM — the same stale figure Google and Bing carry. (3) Contact block is empty. (4) Address on file reads “Bhoopatwala”, the identical misspelling GBP has, so both came from one source. Bot-blocked to crawlers; all of this needs a manual login.

## What we have actually confirmed

2026-09-01: claimed but NOT identity-verified. Four corrections queued behind that one step.

Evidence on file: Owner portal read 2026-09-01: claimed, unverified, Verify identity pending. Public listing 5.0 from one review, #41 of 96 Tours & Activities in Haridwar, ₹19,500 in About, 7:00 AM – 9:00 PM hours, empty contact block, address on file spells Bhoopatwala.

## Steps

1. `npm run links:audit -- tripadvisor.in` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.tripadvisor.com/Owners-g616028-d34343558-Shiv_Ganga_Travels-Haridwar_Haridwar_District_Uttarakhand.html and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `tripadvisor` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
