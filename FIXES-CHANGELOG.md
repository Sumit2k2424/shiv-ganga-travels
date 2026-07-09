# SEO + Speed + LLM Fixes — Changelog (June 2026)

All changes validated: every edited file passes Babel/JSX parse, no links point
to deleted/redirected URLs, no sync `params` remain, no duplicate React keys.

## Critical fixes

1. **Removed conflicting robots/sitemap files.**
   Deleted `public/robots.txt` and `public/sitemap.xml`. They collided with the
   dynamic `src/app/robots.js` / `src/app/sitemap.js` (a build error on Next 15)
   and the static sitemap was stale, still listing redirected URLs. The dynamic
   versions are now the single source of truth.

2. **Removed the sitewide canonical from `src/app/layout.js`.**
   A canonical set in the root layout cascades to every page that doesn't define
   its own, telling Google those pages canonicalise to the homepage. Each page
   already sets its own canonical, so the root-layout `alternates` block is gone.

3. **Removed broken `hi-IN → /hi` hreflang** (same `alternates` block).
   `/hi` does not exist; a broken hreflang gets the whole set ignored. Re-add a
   `languages` map only once a real Hindi section ships.

4. **Server-side chat proxy: `src/app/api/chat/route.js` (new).**
   The ChatBot previously called `api.anthropic.com` directly from the browser
   with no key — that only works inside Claude artifacts; in production every AI
   answer silently failed. The new edge route holds the key server-side
   (`ANTHROPIC_API_KEY`) and `ChatBot.js` now POSTs to `/api/chat`. The unused
   `AI_SYSTEM_PROMPT` client import was dropped (smaller bundle) and the CSP
   `connect-src` no longer needs `api.anthropic.com`.

5. **Next 15 async `params`.**
   `packages/[slug]`, `blog/[slug]` and `cabs/[route]` now `await params` in both
   `generateMetadata` and the page component. Prevents Next 16 breakage.

## Internal-link + dead-code cleanup

- **Deleted 15 dead route folders** shadowed by `next.config.js` redirects:
  11 city pages (lucknow, varanasi, jaipur, ahmedabad, indore, bhopal, nagpur,
  surat, patna, rishikesh, dehradun), 3 redirected blog stubs
  (badrinath-yatra-guide, how-to-reach-badrinath, kedarnath-yatra-guide) and
  `char-dham-yatra-2025`.

- **Rewrote internal links** across 10 files so they point at final URLs instead
  of routing through 301s (redirected city links → nearest real hub page;
  `char-dham-yatra-2025` → `/char-dham-yatra`; `/blog/badrinath-yatra-guide` →
  `/badrinath-yatra`; etc.).

- **Removed the now-duplicate/mislabeled city entries** the link rewrite created
  in the homepage city grid, Footer, Navbar bottom bar and HTML sitemap (these
  would have thrown React duplicate-key warnings and shown misleading labels).
  Each link list now contains only cities that have real pages.

## Still recommended (not code — your action)

- Set `ANTHROPIC_API_KEY` in Vercel env vars (chatbot now depends on it).
- Run `npm install && npm run build` locally as the definitive pre-deploy check.
- Trim the ~65 page titles over 65 characters (move price/USP to the front).
- Replace duplicated stock temple photos with real geotagged yatra photos served
  via `next/image` (currently imported zero times — your AVIF/WebP config is idle).
- Drive GBP review velocity (your single biggest ranking gap) and execute the
  Reddit/Quora/YouTube off-site mention plan for AI-engine citations.
- Build a real `/hi` Hindi section (you already have Hindi blog content) and then
  restore the hreflang languages map.

## SEO Audit Round — July 2026

Validated with a full `next build` (all 130+ routes compile; sitemap emits 177 clean URLs).

### Indexing & sitemap
- Added 5 missing high-value pages to `sitemap.js` (they were live but invisible to
  Google): `/kedarnath-tour-package`, `/badrinath-tour-package`, `/kedarnath-vip-darshan`,
  `/kedarnath-pony-palki-kandi-rates`, `/char-dham-yatra-scams`.
- Deleted 15 dead route folders that had crept back in and were shadowed by 301s
  (`char-dham-yatra-2025`, 11 redirected city folders, 3 redirected blog stubs).

### SERP display (titles & descriptions)
- Root layout appends `| Shiv Ganga` to every title. 61 titles ran 66–90 chars
  *before* the suffix — all rewritten to ~45–55 chars, primary keyword first.
- Homepage title was double-branded via the template; now `title.absolute`, 64 chars.
- 68 meta descriptions over 165 chars trimmed to ≤160, keeping price + USP up front.
- Fixed a truncated OG title on `/blog/best-time-char-dham` ("…Crowd & P").

### Structured data
- `/char-dham-yatra` emitted a second rated TravelAgency on top of the layout org
  node → the exact "multiple aggregate ratings" GSC error. Page-level duplicate removed;
  Product node (with its rating) kept.

### Internal linking
- Kedarnath hub → 3N/4D package, VIP darshan, pony/palki rates.
- Badrinath hub → 2N/3D package. Aggregator page → scams guide.
- Footer: added both tour-package links; fixed duplicate `/char-dham-yatra` href
  (was a React duplicate-key bug); "Char Dham Guide" now points at the guide post.
- HTML sitemap page: added the 5 new pages.

### Data consistency & copy
- llms.txt still claimed ₹19,500 (repriced to ₹21,000 months ago) and quoted the old
  MakeMyTrip figure — synced to ₹21,000 / ₹32,479 across llms.txt, blogs.json, homepage.
- Fixed duplicate altitude typo (Nandanvan 4,450 m, not 4,463 m twice).
- Softened a few AI-sounding lines ("Embark — your blessed journey begins", "most
  seamless document").

## GEO / AI-Citability Round — July 2, 2026

Goal: make the site the source LLMs (ChatGPT, Claude, Perplexity, Google AI
Overviews) quote for Char Dham queries. Validated with a full build (193 pages).

### Price consistency (LLMs punish contradictions hardest)
Site quoted 3 different prices for the same package depending on the page.
Canonical prices reconciled everywhere (pages, FAQ schema, chatbot, llms.txt,
blogs.json): Kedarnath 3N/4D ₹6,999 · Badrinath 2N/3D ₹5,999 (data file updated
to match both landing pages) · Do Dham ₹10,999 · Yamunotri ₹5,999 · Gangotri
₹5,699 · Yam+Gan Do Dham ₹9,499 · Senior 12N/13D ₹27,999 · Chopta ₹8,499 ·
Nainital circuit ₹13,499 · Delhi 10N/11D from ₹22,999.

### llms.txt overhaul
- Closing-dates table contradicted the closing-dates blog (Nov 7 vs Nov 10/11) — synced.
- Removed 10 redirected city URLs it was still telling AIs to cite.
- Added the 8 strongest citable pages (VIP darshan, pony/palki rates, packages,
  scams, statistics, route map, calculator).
- Added an explicit AI citation licence block; freshness stamps → July 2, 2026.

### Structured data
- 24 pages emitted TWO FAQPage nodes (main FAQ + People-Also-Ask) — invalid.
  Now exactly one FAQPage per page; PAA answers stay visible in the accordion.
- 23 blog posts had no Article schema at all. BlogAuthor (top variant) now emits
  a BlogPosting node (headline, dates, author → org @id) — all 54 posts covered
  (25 native + 23 injected + 6 via GuideArticle).

### Freshness
- SITE.lastUpdated / lastUpdatedISO → July 2, 2026 (feeds visible "Updated"
  lines and dateModified on ~63 pages).

### Copy
- Chatbot price sheet had 9 stale figures — synced. A few remaining clichés
  humanised.

## Competitor Gap Round — July 2, 2026
Benchmarked live page-one results for "char dham yatra package from haridwar"
(haridwartourtrip, yatrio, rajputanacabs, chardhamcentral, chardhamtour) and
closed the gaps on /char-dham-yatra:
- Meta title now carries the ₹21,000 price anchor (every page-one competitor
  leads with price).
- Vehicle table extended with Force Urbania and 27-seater bus rows (Rajputana's
  fleet-menu edge).
- Add-ons: Mana Village (included free — differentiator) and Triyuginarayan cards.
- Operational-specificity trust paragraph (the haridwartourtrip pattern): walk-in
  office, hotel relationships in Barkot/Guptkashi, 10 pm phone answered.
- Real Google reviews strip added to the money page (was homepage-only).
- Badrinath temple page: BKTC Maha Abhishek ₹4,700 + puja price band FAQ
  (high-intent query no competitor answers cleanly).
- Statistics page: 17.8 lakh registrations by mid-April 2026 stat (fresh, citable).
- Verified 2026 kapat dates against current announcements — site already correct.
Build verified: 193 pages.

## Monsoon Freshness Round — July 9, 2026

Goal: keep the site the most current source on the SERP + in AI answers now that
the monsoon is active. All facts verified against July 2026 news (IMD alerts,
euttaranchal daily counts, government notifications).

### Fresh, citable facts added
- /char-dham-road-status: monsoon advisory box (orange alerts, short landslide
  blockages, Kedarnath heli suspensions in poor visibility), UPDATED → July 9,
  2026, plus 2 new PAA answers no competitor page covers cleanly: the 10 PM–4 AM
  night-driving ban and the mandatory Green Card for hill-route passenger
  vehicles (with the trust line that all SGT vehicles carry current Green Cards).
- /char-dham-yatra-statistics: July 6, 2026 single-day monsoon footfall stat
  (13,254 pilgrims — Badrinath 5,892, Kedarnath 3,124, Gangotri 1,983, Hemkund
  2,151). Last-updated + schema dateModified → July 9.
- Blog road-conditions post: stale green "April — no closures / Peak Season
  Active" box replaced with an amber monsoon status box linking to the live
  road-status page; dateModified → 2026-07-09.

### llms.txt
- Season status rewritten for the monsoon (MONSOON ACTIVE header, heli caveat,
  July 6 footfall stat, Sept–Oct post-monsoon window).
- Road status per-route refreshed with correct NH numbers and the ₹461 crore
  NH-134 slope-work detail.
- New "2026 Yatra Rules (verified)" block: night ban, Green Card, phone/camera
  ban (Badrinath beyond Singhdwar), 55+ medical cert, free registration,
  177 ambulances + AIIMS heli ambulance. Stamp → July 9, 2026.

### Freshness & humanising
- SITE.lastUpdated / ISO → July 9, 2026 (feeds ~63 pages + schema).
- kedarnath-vip-darshan and pony/palki rate pages: verified stamps → July 2026.
- Two AI-sounding lines rewritten ("breathtaking Alaknanda gorge",
  "most spiritually powerful experiences" group-page opener).

Validation: all 8 edited files parse clean via esbuild (jsx loader).
