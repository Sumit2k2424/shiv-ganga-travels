# Garhwal Post — Dehradun English daily

**Prospect:** `garhwal-post`  ·  **Wants:** quote  ·  **Route in:** pitch
**Link should point at:** https://www.shivgangatravels.com/press
**Packet written:** 2026-09-01

## Why this one

A real regional newspaper covering the yatra every season. An operator who has run the route since 2010 and will go on record is exactly the source a desk needs for a season-open or road-status piece.

## Before you touch it

> Pitch a story, never a link. The quote and any figure must come from the human — see the generation ban at the top of src/data/press.js.

## What we have actually confirmed

2026-08-27: DNS resolves (185.38.109.205 and neighbours) and plain HTTP returns a 301, but the HTTPS endpoint does not answer from here — a browser user agent times out too, so this is not bot protection. Could be a certificate problem, a slow host or geo-blocking. Open it in a browser before pitching; if it is genuinely down, the pitch has nowhere to land.

Evidence on file: Established Dehradun daily. Contact desk and email NOT verified.

## Steps

1. `npm run links:audit -- garhwalpost.in` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://garhwalpost.in/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `garhwal-post` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
