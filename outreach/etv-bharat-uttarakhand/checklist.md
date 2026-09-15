# ETV Bharat Uttarakhand — Hindi TV/digital bureau

**Prospect:** `etv-bharat-uttarakhand`  ·  **Wants:** quote  ·  **Route in:** relationship
**Link should point at:** https://www.shivgangatravels.com/press
**Packet written:** 2026-09-15

## Why this one

Video-first regional news with a Dehradun bureau. A thirty-second on-camera comment at the office is a story for them, a citation for us, and a clip the YouTube channel can reuse. Their web articles carry the interviewee name and business.

## Before you touch it

> Camera means the office front, the vehicles and Dhanesh — the same original photographs week 1 of the link plan asks for. Do not do this before those exist.

## What we have actually confirmed

2026-09-15: /hi/uttarakhand returns 200 (the older /hi/!state/uttarakhand path is 410). Light yatra coverage on the day (1 mention) — seasonal.

Evidence on file: Uttarakhand section live. Bureau contact NOT yet obtained.

## Steps

1. `npm run links:audit -- etvbharat.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.etvbharat.com/hi/uttarakhand and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-15'` on `etv-bharat-uttarakhand` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
