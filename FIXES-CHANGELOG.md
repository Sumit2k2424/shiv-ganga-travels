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
