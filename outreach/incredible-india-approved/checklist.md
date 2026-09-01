# Ministry of Tourism — approved travel agent / tour operator scheme

**Prospect:** `incredible-india-approved`  ·  **Wants:** listing  ·  **Route in:** relationship
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-09-01

## Why this one

Central government recognition scheme. Slowest item on this list and the one with the longest half-life.

## Before you touch it

> Documentation-heavy, and the approved-operator categories have turnover/office requirements a small operator may not meet. Check eligibility before spending a week on it.

## What we have actually confirmed

**Nothing.** This entry was identified from search results and its submission mechanics have never been checked. Open the site and confirm the form or the contact exists before writing anything.

Evidence on file: Scheme referenced by IRCTC Tourism's approved-agents page. Category and criteria NOT verified.

## Steps

1. `npm run links:audit -- tourism.gov.in` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://tourism.gov.in/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `incredible-india-approved` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
