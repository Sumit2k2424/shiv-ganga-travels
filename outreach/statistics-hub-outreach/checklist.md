# Char Dham statistics hub — citation outreach

**Prospect:** `statistics-hub-outreach`  ·  **Wants:** quote  ·  **Route in:** pitch
**Link should point at:** https://www.shivgangatravels.com/char-dham-yatra-statistics
**Packet written:** 2026-09-01

## Why this one

Built to be cited and, per AUTHORITY-PLAN tier 4, still unpromoted. Anyone writing a 2026 or 2027 season piece needs footfall and route numbers in one place, and a chart nobody else publishes is the most linkable thing on this site.

## Before you touch it

> Every figure offered must already be sourced on the page. Offering a number we cannot attribute is how a correction happens, and a correction ends the relationship with that desk.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: Page exists at /char-dham-yatra-statistics.

## Steps

1. `npm run links:audit -- shivgangatravels.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.shivgangatravels.com/char-dham-yatra-statistics and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `statistics-hub-outreach` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
