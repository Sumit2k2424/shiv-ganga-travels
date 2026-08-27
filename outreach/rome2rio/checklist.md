# Rome2Rio — transport operator listing

**Prospect:** `rome2rio`  ·  **Wants:** listing  ·  **Route in:** open
**Link should point at:** https://www.shivgangatravels.com/cabs
**Packet written:** 2026-08-27

## Why this one

Authority Score 88 — the highest-authority genuinely relevant domain in all twelve competitor exports, and it already links to chardhamtourism.co.in and makemytrip.com but not to us. The listing is free, self-serve, and explicitly for transport operators to submit route information INCLUDING BOOKING LINKS. This is the rare case where the asset already exists: src/data/cabs/routes.js is structured route data with origins, destinations, distances and times, which is exactly what the form asks for.

## Before you touch it

> It is a transport search engine, not a directory, and the listing must describe what we actually run. We are a taxi and private-cab operator on fixed routes — not a bus line with published schedules. Submit under Mode of Transport = Taxi and describe on-demand routes honestly; inventing a timetable to fit the form is how a listing gets pulled. Fares must match src/data/cabs/routes.js on the day of submission, not a figure typed from memory — directory-submissions.md records the period when off-site prices were stale by Rs5,600 a head.

## What we have actually confirmed

2026-08-27, opened in a browser because the site returns HTTP 403 to our crawler. /get-listed/ is live and headed "Listing for operators — Be seen by millions, for free". It states: "Transport operators and agencies: Provide reliable route and schedule information, including booking links... It is easy and free to get your transport data into Rome2Rio's search engine, either manually or via GTFS." Self-reported scale: 35M+ average monthly unique visitors, 50M+ monthly sessions, 746M searches a year, 20K+ transport operators. The submission form is on that page at #block_form and asks for company type, Mode of Transport (Bus / Train / Ferry / Flights / TAXI / N/A), an interest multi-select that includes "Have your services listed on Rome2Rio", and Region + Country (Asia / India). Support runs through help.rome2rio.com/en/support/tickets/new. NOT SUBMITTED — this register does not submit anything.

Evidence on file: Semrush Backlink Analytics 2026-08-27: AS 88, present in the chardhamtourism.co.in and makemytrip.com referring-domain exports in data/competitors/.

## Steps

1. `npm run links:audit -- rome2rio.com` — confirm it is alive, on-topic, and not already linking to us.
2. Open https://www.rome2rio.com/get-listed/ and read what they actually ask for. This packet is a starting point, not a form filling.
3. Fill every `[[ WRITE THIS ]]` slot. Do not send with one open.
4. Check the price in the copy against `src/data/packages.js` on the day you send it.
5. Send it yourself. Nothing here is submitted by a script — see the note at the top of `scripts/backlinks/draft.mjs`.
6. Set `status: 'submitted'` and `submittedOn: '2026-08-27'` on `rome2rio` in `scripts/backlinks/prospects.mjs`.
7. When it appears, set `status: 'live'`, record the URL in `liveAt`, and set `verified` to the date you saw it.

## If they say no

Set `status: 'declined'` with a one-line reason. A declined prospect that stays open gets pitched again next season by someone who does not remember, and being pitched twice is how a publication stops opening the emails.
