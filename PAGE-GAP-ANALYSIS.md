# Page Gap Analysis — 62 Pages to Build

**Audited:** 10 Aug 2026
**Current inventory:** 97 app routes · 64 blog posts · 38 cab routes · 38 package slugs

## Progress — 26 of 62 built

| # | Page | Status |
|---|---|---|
| 55 | `/privacy-policy` | ✅ Built — needs legal review |
| 56 | `/terms-and-conditions` | ✅ Built — needs legal review |
| 9 | `/taxi-service-in-haridwar` | ✅ Built — **rates unverified** |
| 11 | `/haridwar-to-delhi-taxi` | ✅ Built — **rates unverified** |
| 12 | `/haridwar-to-rishikesh-taxi` | ✅ Built — **rates unverified** |
| 13 | `/dehradun-airport-to-haridwar-taxi` | ✅ Built — **rates unverified** |
| 1 | `/har-ki-pauri-guide` | ✅ Built |
| 3 | `/mansa-devi-temple` | ✅ Built — ropeway fares approximate |
| 4 | `/chandi-devi-temple` | ✅ Built — ropeway fares approximate |
| 5 | `/daksh-mahadev-temple` | ✅ Built |
| 6 | `/maya-devi-temple` | ✅ Built |
| 7 | `/haridwar-sightseeing-places` | ✅ Built |
| 14 | `/shantikunj-haridwar-guide` | ✅ Built |
| 19 | `/winter-char-dham-yatra` | ✅ Built |
| 20 | `/omkareshwar-temple-ukhimath` | ✅ Built |
| 21 | `/joshimath-narsingh-temple` | ✅ Built — carries a subsidence caveat |
| 22 | `/mukhba-gangotri-winter-seat` | ✅ Built |
| 23 | `/kharsali-yamunotri-winter-seat` | ✅ Built |
| 24 | `/kedarnath-doli-yatra` | ✅ Built |
| 31 | `/shiv-ganga-travels-vs-thrillophilia` | ✅ Built |
| — | `/char-dham-yatra-booking-sites-compared` | ✅ Built — replaces #32, #33 |
| — | `/how-to-choose-char-dham-tour-operator` | ✅ Built — replaces #28–30 |
| 34 | `/char-dham-helicopter-booking-guide` | ✅ Built |
| 36 | `/char-dham-yatra-for-temple-groups` | ✅ Built |
| 37 | `/char-dham-yatra-corporate-booking` | ✅ Built |
| 49 | `/char-dham-yatra-hindi` | ✅ Built — added to `LANGUAGE_PAGES`, propagates everywhere |

### Dropped, with reasons

| Was | Page | Why dropped |
|---|---|---|
| 2 | `/ganga-aarti-haridwar` | Cannibalizes `/har-ki-pauri-guide` — the aarti happens *at* Har Ki Pauri. One entity, one intent. Replaced with `/shantikunj-haridwar-guide`. |
| 28–30 | `/best-char-dham-operators-{delhi,rishikesh,dehradun}` | We are a Haridwar business. Listing ourselves as "best in Rishikesh" is weak on credibility, cannot win those local packs, and risks cannibalizing the existing `/char-dham-yatra-from-*` departure pages. Replaced with one honest buyer's guide, `/how-to-choose-char-dham-tour-operator`. |
| 32–33 | `/shiv-ganga-travels-vs-{yatra-com,easemytrip}` | Same argument as the MakeMyTrip page three more times. Consolidated into `/char-dham-yatra-booking-sites-compared`, which also captures "best site to book Char Dham". |
| 35 | `/char-dham-yatra-group-booking` | `/blog/char-dham-group-package` already targets the exact keyword `char dham yatra group booking`. Upgrade that page instead of splitting the signal. |
| 38 | `/char-dham-yatra-emi-payment` | We do not offer EMI. Writing the page would mean inventing a financial product. |

**Three blockers before deploy:** taxi fares in `src/data/localTaxi.js`
(`RATES_VERIFIED = false`), ropeway fares in `src/data/haridwarPlaces.js`
(`PLACES_VERIFIED = false`), and winter distances/altitudes in
`src/data/winterSeats.js` (`WINTER_VERIFIED = false`). All researched estimates,
not confirmed numbers.

**Deadline:** the winter cluster must be indexed before the dhams close on
10–13 November 2026. Request indexing in Search Console as soon as it deploys —
these pages earn nothing until the season turns, and then they earn for five months.

## What you already own (do not rebuild)

| Cluster | Status |
|---|---|
| Char Dham core (cost, route map, checklist, scams, stats, road status, emergency) | Saturated |
| Origin cities — 21 (Delhi, Mumbai, Chennai, Kolkata, Bangalore, Hyderabad…) | Strong |
| Four dham temple + weather + how-to-reach pages | Complete |
| Kedarnath depth (VIP darshan, pony rates, height, trek, hotels) | Strong |
| Packages (38 slugs), cabs (38 routes, 11 origins, 10 destinations) | Strong |
| Language pages — 6 (Assamese, Bengali, Gujarati, Kannada, Odia, Telugu) | Partial |

## The three structural holes

1. **Haridwar itself is invisible.** Zero pages mention Har Ki Pauri, Mansa Devi,
   Chandi Devi, Daksh Mahadev, Ganga Aarti, Shantikunj or Kumbh. You are a
   Haridwar business with no Haridwar content. Competitors own every "Haridwar
   darshan / taxi / sightseeing / hotels" query by default.
2. **You earn nothing for five months.** Season closes early November. There is
   no winter content at all — no winter seats (Ukhimath, Joshimath, Mukhba,
   Kharsali), no winter Char Dham, no Haridwar-Rishikesh winter tourism.
3. **Return-leg and local transfers are missing.** You have `delhi-to-haridwar-cab`
   but not the reverse. No airport transfers. No Haridwar↔Rishikesh. These are
   the highest-frequency, lowest-competition money queries in your postcode.

---

# TIER 1 — Local dominance, Haridwar & Rishikesh (18 pages)
*Highest ROI. Short-tail local intent, weak competition, and every page feeds
your map-pack relevance because the entity is your own city.*

| # | Slug | Primary query | Why it's a gap / what makes it non-thin |
|---|---|---|---|
| 1 | `/har-ki-pauri-guide` | har ki pauri haridwar | Aarti timings by season, exact ghat layout, where to sit, shoe-deposit rules, parking, pickpocket advisory |
| 2 | `/ganga-aarti-haridwar` | ganga aarti haridwar timing | Daily sunset times month-by-month, VIP seating cost, how to book, live-crowd guidance |
| 3 | `/mansa-devi-temple` | mansa devi temple haridwar | Ropeway fares/timings, trek route, combined Mansa+Chandi ticket, wait times by day |
| 4 | `/chandi-devi-temple` | chandi devi temple | Ropeway vs 3km trek, Neel Parvat, Navratri crowd data |
| 5 | `/daksh-mahadev-temple` | daksh prajapati temple kankhal | Kankhal history, Shivratri significance, distance from Har Ki Pauri |
| 6 | `/maya-devi-temple` | maya devi temple haridwar | Shakti Peeth status — a genuine authority topic, thin competition |
| 7 | `/haridwar-sightseeing-places` | places to visit in haridwar | 1-day and 2-day itineraries with your cab pricing attached |
| 8 | `/haridwar-hotels` | hotels in haridwar near har ki pauri | Mirrors your existing `/kedarnath-hotels` template; price bands by area |
| 9 | `/taxi-service-in-haridwar` | taxi service haridwar / cab in haridwar | Local hire rates (4hr/8hr/full-day), fleet, no-commission pitch |
| 10 | `/tempo-traveller-hire-haridwar` | tempo traveller haridwar | 12/17/26-seater rates, group yatra vehicle, per-km slabs |
| 11 | `/haridwar-to-delhi-taxi` | haridwar to delhi cab | **Return leg missing** — you only built delhi→haridwar |
| 12 | `/haridwar-to-rishikesh-taxi` | haridwar to rishikesh taxi | Highest-volume short transfer in your area; not in cab data |
| 13 | `/dehradun-airport-to-haridwar-taxi` | jolly grant airport to haridwar | Flight-arrival intent, high conversion, priced per-vehicle |
| 14 | `/shantikunj-haridwar-guide` | shantikunj haridwar | **You are next door to Gate No. 1.** Sadhak stay process, timings, how to reach |
| 15 | `/patanjali-yogpeeth-haridwar` | patanjali yogpeeth haridwar | Wellness-tourism traffic, treatment booking, distance/transfer |
| 16 | `/kumbh-mela-haridwar` | haridwar kumbh mela 2027 | Next Ardh Kumbh cycle — build the authority page early and hold it |
| 17 | `/neelkanth-mahadev-temple` | neelkanth mahadev rishikesh | Top Rishikesh query, no page exists; road vs trek, Shravan crowd |
| 18 | `/triveni-ghat-rishikesh` | triveni ghat aarti | Pairs with Rishikesh packages you already sell |

# TIER 2 — Winter and off-season revenue (9 pages)
*Nov–Mar you currently rank for nothing. These pages start earning in the exact
window your Char Dham pages go dead.*

| # | Slug | Primary query | Notes |
|---|---|---|---|
| 19 | `/winter-char-dham-yatra` | char dham yatra in winter | Hub page: the doors close, the deities move — where to actually go |
| 20 | `/omkareshwar-temple-ukhimath` | kedarnath winter seat / ukhimath | Kedarnath's winter abode. Almost nobody covers this properly |
| 21 | `/joshimath-narsingh-temple` | badrinath winter seat joshimath | Narsingh Devta, the arm legend, winter puja schedule |
| 22 | `/mukhba-gangotri-winter-seat` | mukhba mukhimath gangotri winter | Ganga Devi winter residence |
| 23 | `/kharsali-yamunotri-winter-seat` | kharsali yamunotri winter | Yamuna's winter seat + Someshwar Mahadev |
| 24 | `/kedarnath-doli-yatra` | kedarnath doli yatra route dates | The palanquin procession — highly shared, link-earning content |
| 25 | `/auli-skiing-package` | auli skiing / auli in winter | You sell an Auli package with no landing page |
| 26 | `/haridwar-rishikesh-winter-tour` | haridwar rishikesh in december | Captures your own city's off-season traffic |
| 27 | `/char-dham-yatra-2027` | char dham yatra 2027 | Publish now, rank before the season opens. Repeat every year |

# TIER 3 — High-intent commercial and comparison (11 pages)
*You have exactly two comparison pages and they perform. This is the pattern to
scale — bottom-of-funnel, low volume, very high conversion.*

| # | Slug | Primary query |
|---|---|---|
| 28 | `/best-char-dham-operators-delhi` | best char dham tour operator delhi |
| 29 | `/best-char-dham-operators-rishikesh` | char dham operators rishikesh |
| 30 | `/best-char-dham-operators-dehradun` | char dham tour operator dehradun |
| 31 | `/shiv-ganga-travels-vs-thrillophilia` | thrillophilia char dham review |
| 32 | `/shiv-ganga-travels-vs-yatra-com` | yatra.com char dham package |
| 33 | `/shiv-ganga-travels-vs-easemytrip` | easemytrip char dham |
| 34 | `/char-dham-helicopter-operators-compared` | char dham helicopter booking comparison |
| 35 | `/char-dham-yatra-group-booking` | char dham group booking 20 people |
| 36 | `/char-dham-yatra-for-temple-groups` | mandir group char dham yatra |
| 37 | `/char-dham-yatra-corporate-booking` | corporate pilgrimage tour |
| 38 | `/char-dham-yatra-emi-payment` | char dham yatra installment / emi |

# TIER 4 — Distance, route and logistics gaps (10 pages)
*You have exactly one distance page (`kedarnath-to-badrinath-distance`) and it
works. Every one of these is a real, repeatedly-searched query with a fixed
factual answer — the format AI engines cite most.*

| # | Slug | Primary query |
|---|---|---|
| 39 | `/haridwar-to-badrinath-distance` | haridwar to badrinath distance |
| 40 | `/haridwar-to-kedarnath-distance` | haridwar to kedarnath km |
| 41 | `/haridwar-to-gangotri-distance` | haridwar to gangotri distance |
| 42 | `/haridwar-to-yamunotri-distance` | haridwar to yamunotri distance |
| 43 | `/delhi-to-kedarnath-distance` | delhi to kedarnath distance by road |
| 44 | `/sonprayag-to-kedarnath` | sonprayag to gaurikund shuttle |
| 45 | `/gangotri-to-yamunotri-distance` | gangotri to yamunotri road |
| 46 | `/char-dham-yatra-mobile-network` | network coverage kedarnath badrinath |
| 47 | `/altitude-sickness-char-dham` | altitude sickness kedarnath prevention |
| 48 | `/char-dham-yatra-food-guide` | food during char dham yatra |

# TIER 5 — Language expansion (6 pages)
*You built six regional languages but skipped the largest search language for
this exact topic.*

| # | Slug | Note |
|---|---|---|
| 49 | `/char-dham-yatra-hindi` | **Biggest single miss.** Hindi dominates Char Dham search volume. You have Hindi blog posts but no Hindi hub page |
| 50 | `/char-dham-yatra-marathi` | Maharashtra is a top-3 pilgrim source state; you have Mumbai/Pune/Nashik demand and no Marathi page |
| 51 | `/char-dham-yatra-tamil` | Chennai/Coimbatore pilgrims |
| 52 | `/char-dham-yatra-malayalam` | Kerala group-yatra market |
| 53 | `/char-dham-yatra-punjabi` | Pairs with Hemkund Sahib demand you already serve |
| 54 | `/char-dham-yatra-nepali` | Nepali pilgrim traffic through Haridwar is real and uncontested |

# TIER 6 — Trust, legal and E-E-A-T (8 pages)
*These do not rank for much on their own. They raise the trust score of every
other page, and two of them are legal exposure right now.*

| # | Slug | Why |
|---|---|---|
| 55 | `/privacy-policy` | **Missing entirely.** Required for payment processing, ad platforms, and Google's trust signals |
| 56 | `/terms-and-conditions` | Missing. You have cancellation-policy only |
| 57 | `/our-fleet` | Vehicle photos, registration numbers, ages — proof you own the fleet, which is your entire pitch |
| 58 | `/our-drivers` | Named drivers with years on-route. Your reviews already name "Ramesh bhai" — turn that into a page |
| 59 | `/uttarakhand-tourism-registration` | Your operator licence, GST, registration number. Directly counters the scam-fear search cluster you already rank for |
| 60 | `/photo-gallery` | Real geotagged yatra photos. Feeds image search and GBP |
| 61 | `/customer-reviews` | On-site review page with Review schema; `/review` currently only redirects to Google |
| 62 | `/how-to-pay` | Payment methods, advance %, refund flow, what a legitimate invoice looks like |

---

## Build order

1. **Weeks 1–3 — Tier 6 (#55, #56) then Tier 1 (#9, #11, #12, #13, #1, #3, #7).**
   Legal gaps closed, then the local transport and landmark pages. Fastest
   ranking wins on the site because competition in Haridwar organic is weak.
2. **Weeks 4–6 — Rest of Tier 1 + Tier 5 (#49 Hindi first).**
3. **Weeks 7–9 — Tier 2 winter cluster.** Must be live and indexed before
   November or you lose the whole off-season.
4. **Weeks 10–12 — Tier 3 and Tier 4.**

## Two honest cautions

- `AUTHORITY-PLAN.md` in this repo says to stop building near-duplicate pages,
  and it is right about that. Nothing in this list is a template clone: every
  entry needs its own real data — actual fares, actual timings, actual distances,
  photos you took. A Tier 4 distance page with a made-up number is worse than no
  page. If you cannot source real data for one, drop it rather than pad it.
- Local *map-pack* ranking is driven mostly by Google Business Profile, review
  count and velocity, and proximity — not by pages. Tier 1 wins you the **organic**
  results next to the map pack, which is a different and still valuable slot. To
  move the map pack itself, the review system in `AUTHORITY-PLAN.md` Tier 1
  remains the lever.
