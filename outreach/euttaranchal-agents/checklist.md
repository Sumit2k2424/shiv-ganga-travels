# eUttaranchal — Char Dham travel agents directory

**Prospect:** `euttaranchal-agents`  ·  **Wants:** listing  ·  **Route in:** pitch
**Link should point at:** https://www.shivgangatravels.com/char-dham-yatra
**Packet written:** 2026-08-27

## Why this one

The best-established Uttarakhand tourism portal, with both an operator directory and a travelogue section. It is on-topic in a way no general directory is, and it demonstrably links out to operators.

## Before you touch it

> The travel-agents URL carried in SEMRUSH-ACTION-PLAN now returns HTTP 410 Gone — the directory has moved or been retired. Find the current path before pitching, and do not paste the dead URL into an email.

## What we have actually confirmed

2026-08-27: old directory URL is dead (410).

Evidence on file: Domain live and ranking Aug 2026; /tourism/chard-dham-travel-agents.php returned 410 on 2026-08-27.

## Steps

1. `npm run links:audit -- euttaranchal.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.euttaranchal.com/tourism/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-08-27'` on `euttaranchal-agents` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
