# chopta.in

**Prospect:** `chopta-in`  ·  **Wants:** article  ·  **Route in:** pitch
**Link should point at:** https://www.shivgangatravels.com/chopta-tungnath
**Packet written:** 2026-09-01

## Why this one

MAYBE 51 live, 8 Garhwal topic terms, links to euttaranchal.com. The rare case where the target page picks itself: /chopta-tungnath sits at position 47 for "chopta tungnath" (33,100/mo) and a topical link is exactly what it lacks.

## Before you touch it

> Single-destination site — pitch Chopta and Tungnath, nothing else. A Char Dham pitch here reads as spam.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: links:audit live, 2026-08-27.

## Steps

1. `npm run links:audit -- chopta.in` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://chopta.in/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `chopta-in` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
