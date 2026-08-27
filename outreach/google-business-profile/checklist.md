# Google Business Profile

**Prospect:** `google-business-profile`  ·  **Wants:** listing  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-08-27

## Why this one

The single highest-value local asset, and the one that feeds the map pack and local AI answers. Posts and Q&A are underused per AUTHORITY-PLAN tier 5.

## Before you touch it

> Not a backlink. It is here because this register is the only place the off-site work is tracked, and leaving it out would mean it keeps not happening.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: Profile exists — AUTHORITY-PLAN records 38 reviews at 4.6.

## Steps

1. `npm run links:audit -- google.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://business.google.com/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-08-27'` on `google-business-profile` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
