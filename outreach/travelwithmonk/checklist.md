# travelwithmonk.com

**Prospect:** `travelwithmonk`  ·  **Wants:** article  ·  **Route in:** pitch
**Link should point at:** https://www.shivgangatravels.com/char-dham-yatra
**Packet written:** 2026-09-01

## Why this one

MAYBE 54 live — 13 Char Dham topic terms, 3/5 publication markers. Links to discover-uttarakhand.com. A travel blog rather than a directory, which is the profile worth having.

## Before you touch it

> Check for a paid-post footprint before pitching — travel blogs in this niche often sell placements, and a bought post is not the link we want.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: links:audit live, 2026-08-27.

## Steps

1. `npm run links:audit -- travelwithmonk.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://travelwithmonk.com/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `travelwithmonk` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
