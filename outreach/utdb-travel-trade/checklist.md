# Uttarakhand Tourism Development Board — travel trade register

**Prospect:** `utdb-travel-trade`  ·  **Wants:** listing  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/
**Packet written:** 2026-09-01

## Why this one

The state register every Uttarakhand tour operator must hold, and the thing our schema, our media kit and every press pitch already assert. Do it for the certificate and for the truth of the claim. Whether it also yields a crawlable link is now doubtful — see `verified` — so this is no longer scored as a link win.

## Before you touch it

> URGENT: UTDB has moved to a NEW portal and is re-verifying and re-registering every existing user "to eliminate duplication". Our certificate may predate that migration. src/data/press.js, MEDIA_KIT.fastFacts and the Organization schema all state we are UTDB-registered — if that is no longer current on the new portal, the claim is wrong in three places a journalist checks. Confirm the certificate before pitching anyone.

## What we have actually confirmed

2026-08-27, and the findings change this entry. (1) The live portal is traveltrade.uttarakhandtourism.gov.in — all THREE older URLs are dead: /register-operator (in directory-submissions.md), /travel/login.php and /page/travel-agents all return the SPA 404. (2) The guidelines open by stating UTDB is re-verifying and re-registering all users on the new portal. (3) Flow: sign up, pick category and sub-category, select DISTRICT (Haridwar), fill organisation details and geolocation, upload documents (PDF; photos JPG/JPEG/PNG), pay, then the District Tourism Development Officer reviews and issues the certificate. (4) Fees, timelines and certificate tenure are shown inside the portal per category and are NOT in the public guidelines — we do not know them and must not guess. (5) The "Old User / already have a certificate" migration path says "This feature will be available soon", so an existing holder cannot simply port across today. (6) Support: +91 78605 91704. (7) NO PUBLIC DIRECTORY of registered operators was found anywhere on the site — the portal is entirely login-gated and the old public travel-agents page is a 404. Treat the backlink as unproven until a public listing is actually seen.

Evidence on file: Portal loaded in a browser 2026-08-27 and its official guidelines PDF (ttapi.uttarakhandtourism.gov.in/pdfs/UTDB_TravelTrade_Guidelines.pdf) read in full.

## Steps

1. `npm run links:audit -- traveltrade.uttarakhandtourism.gov.in` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://traveltrade.uttarakhandtourism.gov.in/signup and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-09-01'` on `utdb-travel-trade` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
