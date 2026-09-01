# Bing Places for Business

**Prospect:** `bing-places`  ·  **Wants:** a claim on the existing listing  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-09-01

## Why this one

Feeds Bing, and through Bing a share of Copilot and ChatGPT web results. A wrong street name here propagates into AI answers, which is why the existing listing matters more than a new one would.

## Before you touch it

> NOT a new listing — a claim and correction. A verified listing already exists and carries two wrong facts. Address reads “Saptsarover Road, Hardwar, UK”: Sapt Sarovar is a different road from Saptrishi Road, and there is no Bhupatwala, no gate reference and no 249410. Hours read 07:00-21:00 daily, the same stale figure GBP carries, against the correct 09:00-20:00 — both listings were clearly seeded from one source that is now out of date in three places. Ownership has to be verified before any field can be edited, so this is longer than the twenty minutes the register used to claim. Phone (078179 96730), website and description are all already correct.

## What we have actually confirmed

2026-09-01: listing exists and is wrong on address and hours. Claim it, do not create a second one.

Evidence on file: Platform live Aug 2026. Re-checked 2026-09-01: bingplaces.com, /DashBoard/Index and bing.com/maps all HTTP 200. Listing found on Bing Maps, verified badge, 5/5 from a single Tripadvisor review against 4.7 from 57 on Google.

## Steps

1. `npm run links:audit -- bingplaces.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.bingplaces.com/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `bing-places` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
