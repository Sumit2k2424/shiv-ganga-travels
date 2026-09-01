# eUttaranchal — Char Dham travel agents directory

**Prospect:** `euttaranchal-agents`  ·  **Wants:** listing  ·  **Route in:** pitch
**Link should point at:** https://www.shivgangatravels.com/char-dham-yatra
**Packet written:** 2026-09-01

## Why this one

The best-established Uttarakhand tourism portal and the centre of this niche’s link graph — six of the eight topical prospects on this register link to it. That authority is real. Whether it can still be obtained is not: see caution.

## Before you touch it

> The listing surface is gone, not moved. Checked 2026-09-01: /travel-agents/, /tour-operators/, /travel-agent/, /advertise/, /contact/ and /contact-us.php all return 410, and chardham.euttaranchal.com/resources.php 301s to a page that also returns 410. A site that 410s rather than 404s its outbound-listing pages has retired them deliberately. They now sell Char Dham packages themselves on the chardham subdomain, which makes them a booking competitor as much as a portal. Only the contact form at /about_us/contact_us.php survives — so any approach is a cold ask to a competitor, not a directory submission. Do not pitch this as a listing request.

## What we have actually confirmed

2026-09-01: every operator-listing path is 410. No current path exists — the search the earlier caution asked for has been done and came back empty.

Evidence on file: Domain live and ranking Aug 2026; /tourism/chard-dham-travel-agents.php returned 410 on 2026-08-27. Six further listing paths confirmed 410 on 2026-09-01; only /, /tourism/, /chardham/ and /about_us/contact_us.php return 200.

## Steps

1. `npm run links:audit -- euttaranchal.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.euttaranchal.com/tourism/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `euttaranchal-agents` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
