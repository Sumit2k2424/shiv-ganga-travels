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
