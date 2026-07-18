# Shiv Ganga Travels — Site Audit: SEO, Content Gaps & LLM Visibility

**Audited:** July 18, 2026
**Scope:** Full Next.js 15 App Router site (`shivgangatravels.com`) — ~135 routes, 57 blog posts, 10 "from-city" landing pages, 6 native-language pages, dynamic sitemap/robots, structured data.
**This round also shipped:** Char Dham headline price change (₹21,000 → ₹18,500) and a refreshed road-status page with July 2026 news. Those are documented in the "Changes shipped this round" section.

---

## 1. Executive summary

This is a mature, well-engineered SEO site — well above the norm for a regional tour operator. Technical foundations (rendering, structured data, security headers, AI-crawler access, internal linking, freshness discipline) are already strong. There is no single "broken" thing dragging the site down. The highest-value opportunities are now **off-page authority (backlinks)** and **a handful of high-volume content clusters not yet built**, plus keeping the fast-changing facts (price, road status, dates) consistent everywhere they appear — which is exactly where a price change like this one can silently introduce contradictions that both Google and LLMs penalise.

Overall grade: **A− on technical/on-page SEO**, **A on LLM-visibility readiness**, **C+ on off-page authority** (the main lever left to pull, per the existing SEMrush plan).

---

## 2. Changes shipped this round

**Price: ₹21,000 → ₹18,500 (Char Dham 9N/10D headline "from" price).**
Updated the canonical package record (`src/data/packages.js`, `discounted: 18500`), the homepage/offer schema (`src/app/page.js`, `src/app/layout.js`), hero and CTA components, all six native-language content files, the Hindi/Bengali/Telugu/Kannada meta descriptions, and every blog/comparison page where ₹21,000 was *Shiv Ganga's own* starting price. Competitor/aggregator figures (MakeMyTrip ₹32,479, local-agent ₹22,000–25,000, "goes to operator" rows) were deliberately left intact.

Dependent figures were recomputed so nothing contradicts the new price:
- MakeMyTrip comparison page: the per-person gap is now **₹13,979** (₹32,479 − ₹18,500), corrected in all five places it appears.
- Statistics page price table: percentages re-derived against the ₹18,500 baseline (MakeMyTrip +64.0%, Thomas Cook +56.2%, Thrillophilia +43.2%, Yatra +50.3%).
- Hindi "kitna kharcha" worked example: 4× ₹18,500 = ₹74,000, total ₹92,300, per-person ₹23,075.
- Group-discount figure and group-tier FAQ aligned to the new base and to the detailed vehicle table.
- `llms.txt`: price, "43% cheaper vs MakeMyTrip" claim, and pricing block all updated.

**Road status refreshed with July 2026 news** (`src/app/char-dham-road-status/page.js` and `llms.txt`):
- "Last verified" date → July 18, 2026.
- New **"Latest road updates"** dated-bulletin block (Jul 12 Munkatiya/Sonprayag landslide cleared by JCB; Jul 3 IMD orange alert + NH-58 Joshimath/Patalganga/Tangni partial blocks; Jul 1 Kedarnath helicopter suspension; Apr ₹461 cr Yamunotri slope work).
- Kedarnath and Badrinath route notes updated with current watch-points; Badrinath highway corrected from **NH-7 → NH-58**.
- FAQ and monsoon advisory rewritten with the specific current events.
- Global `SITE.lastUpdated` bumped to July 18, 2026 and stale `2026-07-09` `dateModified` values advanced to `2026-07-18` on the three affected pages.

*Sources for the road updates:* ANI (Jul 12 Munkatiya landslide), Nativeplanet (Jul 3 orange alert / NH-58 blocks), ANI (Jul 1 helicopter suspension), plus route-completion figures cross-checked against current route guides.

---

## 3. Technical SEO — what's already right

The site does not need remediation here; this section is a baseline so future changes don't regress it.

Rendering and crawlability are handled correctly for the App Router: server components keep counters and content in the initial HTML, `robots.js` and `sitemap.js` are the single dynamic source of truth (the stale static `robots.txt`/`sitemap.xml` were already removed), and the sitemap auto-discovers real page files so it never lists 404s or 301-only slugs. Each page sets its own canonical, and the deliberately-removed sitewide canonical and broken `hi-IN` hreflang are documented in the changelog.

Structured data is genuinely thorough: a `TravelAgency`/`LocalBusiness`/`TouristInformationCenter` organization node with `aggregateRating` (4.7 / 54), individual `Review` nodes, `hasOfferCatalog` (now with the ₹18,500 offer), `knowsAbout` entities wired to Wikipedia, and `sameAs` profiles. Blog and landing pages carry `Article`, `FAQPage`, and `BreadcrumbList` schema.

Security and performance headers are production-grade: HSTS with preload, `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, a scoped `Permissions-Policy`, a real Content-Security-Policy, `compress: true`, `next/font` self-hosting, `next/image` with remote patterns, and long-lived immutable caching for static assets.

---

## 4. On-page SEO — findings

The consistent-facts risk is the main on-page issue, and this price round is a live example: a headline number appears in ~50 files (meta descriptions, hero, schema, blog tables, six language files, and `llms.txt`), and any missed instance becomes a contradiction. This round they were reconciled, but the same discipline is needed for the **next** change (season dates, helicopter price, phone number). Recommendation: keep pushing shared facts through `src/data/packages.js` (`SITE`, package records) rather than hard-coding them in prose, so one edit propagates. The price is not yet fully centralised — the language files and many blog tables still hard-code it.

Minor dated-snapshot inconsistency (low priority, intentional-looking): the statistics page compares against "May 2025" competitor prices (MakeMyTrip ₹30,337) while the dedicated comparison page uses "May 2026" (₹32,479). Both are labelled with their date so neither is wrong, but a reader hitting both sees two MakeMyTrip numbers. Consider refreshing the statistics table to a 2026 snapshot next content pass.

Everything else on-page is solid: unique titles/descriptions per route, keyword-appropriate H1s, FAQ blocks with schema, and dense internal linking (the road-status page alone links to monsoon-safety, route-map, packages, and the four dham guides).

---

## 5. Content gaps

The site's own SEMrush plan (`SEMRUSH-ACTION-PLAN.md`, dated July 9) already identifies the biggest unbuilt clusters, and they remain the right priorities:

1. **Tungnath / `/tungnath-temple`** — ~165k/mo "tungnath" + 33k "tungnath temple". Currently only a section on `/chopta-tungnath`; a dedicated page is the largest single opportunity.
2. **`/panch-prayag` guide** — Devprayag Sangam 27k + Panch Prayag 9.9k + Karnaprayag 27k, all on the Badrinath route you already run.
3. **Panch Kedar enrichment** — "panch kedar" 40.5k/mo; the current page is thin (~133 lines).
4. **"kedarnath opening date 2026"** — 27k/mo; the opening-dates blog exists but should lead its H1/meta with the Kedarnath term and a per-dham date table high on the page.

Two additions from this audit:
- **Seasonal freshness pages already pay off** — `char-dham-road-status`, `september-char-dham-yatra`, `char-dham-yatra-in-october` and `char-dham-monsoon-safety` are exactly the kind of time-sensitive content that wins featured snippets during the season. Keep the road-status page updated weekly through the monsoon (it now has a dated-bulletin structure that makes this a 5-minute edit).
- **A visible "last updated" + changelog on the road-status page** would reinforce freshness for both Google and users; the dated bulletin block added this round is a step toward that.

---

## 6. LLM / AI-search visibility

This is a relative strength, and unusually so.

`robots.js` explicitly allows the major AI crawlers — GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, CCBot, cohere-ai — so the site is eligible to be read and cited by ChatGPT, Claude, Perplexity, and Google AI Overviews.

`public/llms.txt` is genuinely well-built and now internally consistent after this round: identity block, differentiators, a Char Dham facts table (open/close dates, altitudes, access), an explicit citation format, a "cite these URLs" list, and pricing. I verified all 41 URLs referenced in it resolve to real pages — no dead links, which matters because a broken reference erodes model trust in the whole file.

What would push AI visibility further:
- **Keep `llms.txt` price/date facts synced on every change** (done this round — the file no longer disagrees with the site on price).
- **Add explicit, quotable answer sentences at the top of the highest-intent pages** ("A 9N/10D Char Dham Yatra from Haridwar costs ₹18,500 per person, all-inclusive, direct operator.") — models lift clean, self-contained sentences. Several pages already do this; the from-city and language pages could too.
- **Named-entity grounding** — the founder (Dhanesh Chandra Mishra) and author (Sumit Mishra) are in schema and `llms.txt` with external profiles; that's the right pattern for entity recognition and should be maintained.

---

## 7. Off-page authority — the real gap

Per the SEMrush backlink matrix (631 referring domains analysed), competitors are earning links the site is not. This is the single biggest remaining lever and it is off-code work: prioritise the high-authority referral targets first (rome2rio, travel forums like indiatravelforum.in, herotraveler, sostravelhouse), then the easy directory submissions listed in `SEMRUSH-ACTION-PLAN.md` and `directory-submissions.md`. Content and technical are strong enough that new authority should convert to rankings quickly.

---

## 8. Prioritised next actions

**Done this round:** price reconciliation across the site + `llms.txt`, dependent-math corrections, road-status refresh with July 2026 news, freshness-date bumps.

**Highest value, still to do (roughly in order):**
1. Off-page: work the backlink outreach + directory list (biggest ranking lever).
2. Build the Tungnath dedicated page (largest single keyword opportunity).
3. Centralise the package price in `SITE`/package records and reference it in prose so future price changes are one edit, not fifty.
4. Build `/panch-prayag` and enrich the thin Panch Kedar page.
5. Refresh the statistics page competitor table to a 2026 snapshot to match the comparison page.
6. Keep the road-status page updated weekly through the monsoon.

---

*Prepared as part of the July 18, 2026 update round. All code changes in this round pass a delimiter/structure check; a full `next build` could not be run in this environment because the npm registry was unreachable, so run `npm install && npm run build` locally before deploying.*
