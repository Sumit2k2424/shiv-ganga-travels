# Search Console Fix Report — shivgangatravels.com
_Applied July 2026. Based on the GSC coverage export (Critical issues.csv, Chart.csv)._

## What Search Console was reporting

| Reason | Pages | Status |
|---|---|---|
| Not found (404) | 15 | Fixed |
| Duplicate without user-selected canonical | 1 | Fixed |
| Crawled — currently not indexed | 13 | Addressed |
| Page with redirect | 14 | Reduced |
| Redirect error | 1 | Fixed |
| Discovered — currently not indexed | 19 | Addressed |

---

## 1. Live 404s from broken internal links

`/surkanda-devi-temple` linked to three cab pages without the `/cabs/` prefix, so
Googlebot crawled three URLs that never existed:

- `/haridwar-to-mussoorie-cab`
- `/rishikesh-to-mussoorie-cab`
- `/dehradun-to-mussoorie-cab`

**Fixed** — the links now point at `/cabs/<route>`, and 301 redirects were added for all
15 cab slugs in their un-prefixed form so any old crawl, bookmark or backlink lands on
the real page instead of a 404.

A full crawl of the codebase now returns **zero internal links to missing pages** and
**zero internal links pointing at a redirect**.

## 2. The thin `/blog/[slug]` route (duplicate canonical + crawled-not-indexed)

`src/app/blog/[slug]/page.js` rendered pages from `src/data/blogs.json`. Every one of
those 10 slugs was either already a real static page or already 301-redirected in
`next.config.js`. The route produced:

- pages whose entire body was a single `<p>{blog.content}</p>`
- an Article schema with `headline: "Blog"`, an empty description and
  `mainEntityOfPage: ".../blog/[slug]"` — a literal, unresolved placeholder
- a "Related Guides" block linking to URLs that 301 elsewhere

**Fixed** — the route and `blogs.json` were deleted. This removes the duplicate-canonical
page, the thin content, and the redirect-chasing internal links in one move.

## 3. Pages missing from the XML sitemap

Five live landing pages were never listed: `/adi-kailash-yatra`,
`/chitai-golu-devta-temple`, `/harsil-valley`, `/rajaji-national-park`,
`/surkanda-devi-temple`.

**Fixed** — `src/app/sitemap.js` now runs a discovery pass over `src/app` and appends any
top-level route with a real page file that isn't already listed, skipping the redirected
city slugs and the noindex utility routes. New landing pages will enter the sitemap the
moment they ship, rather than waiting for someone to remember.

## 4. Orphan pages — the real cause of "Discovered / Crawled — not indexed"

Google will not spend crawl budget on pages nothing links to.

- **13 blog posts** existed but were absent from `/blog`, including strong ones like
  the 50-question FAQ, the Green Card guide, Kedarnath registration, closing dates and
  road conditions. All 13 are now on the blog index.
- The blog index card for `badrinath-yatra-guide` pointed at a redirected URL. It now
  links straight to `/badrinath-yatra` (the `POSTS` array supports an optional `href`).
- **`/sitemap-page` was missing ~48 URLs** — all 15 cab routes, all 6 language pages,
  the temple and destination guides, the regional package pages, the comparison pages
  and 23 blog posts. It now covers everything except itself, and pulls cab routes and
  language pages straight from the data files so it can't drift again.

## 5. Custom 404 page

There was no `not-found.js`, so unmatched URLs got the bare Next.js default: no
navigation, no internal links, nothing for a crawler or a lost pilgrim. Added
`src/app/not-found.js` — `noindex, follow`, ten popular destinations, phone number, and
a link to the full sitemap.

## 6. Metadata cleanup

- 10 meta descriptions ran past the ~160-character display limit and were being
  truncated in the SERP. All rewritten to fit while keeping the numbers and specifics
  that earn the click.
- `/blog/september-char-dham-yatra` had a 67-character title. Trimmed to 53.

Affected: monsoon safety, Kedarnath helicopter booking, September yatra, Bengali,
Kannada and Telugu language pages, Dhari Devi, Gaurikund, Guptkashi, Kedarnath height.

---

## What to do after deploying

1. Deploy, then fetch `https://www.shivgangatravels.com/sitemap.xml` and confirm the five
   previously-missing pages appear.
2. In Search Console, resubmit the sitemap.
3. Open the **Not found (404)** and **Redirect error** reports and click **Validate Fix**.
4. Request indexing for the 13 blog posts that were orphaned — they now have internal
   links and will pick up on their own, but a manual nudge is faster.
5. Leave the "Page with redirect" bucket alone. Those are intentional 301s from the
   duplicate-content cleanup. It is a status, not an error.

## Files changed

```
next.config.js                          16 new 301 redirects
src/app/sitemap.js                      auto-discovery safety net
src/app/sitemap-page/page.js            ~48 URLs added, cab + language sections
src/app/blog/page.js                    13 posts added, redirect link fixed
src/app/not-found.js                    new
src/app/surkanda-devi-temple/page.js    3 broken links fixed
src/app/blog/[slug]/page.js             deleted
src/data/blogs.json                     deleted
+ 10 pages with shortened meta descriptions, 1 with a shortened title
```

---

# Trust strip — Army founder + pay us directly

## What was wrong

The old utility bar sat *above* the sticky navbar, so it scrolled out of view within
one flick. It was 11.5px, low-contrast grey-on-navy, and on screens under 560px the
CSS hid the important half — "you pay us, not a middleman" disappeared entirely and
was replaced with "Direct operator in Haridwar · Est. 2010".

The Army founder fact was nowhere on the page. It existed only inside JSON-LD schema
markup and on the About page — visible to Google, invisible to visitors.

## What replaced it

`src/components/TrustStrip.js`, rendered inside a new sticky header wrapper so the
strip and the navbar pin together. The two facts are on screen the moment any page
loads and stay there for the whole scroll.

**Position** — top of the sticky header, above the navbar. Not a popup, not an
overlay. Google penalises intrusive interstitials on mobile, and the site already
runs a lead popup and a WhatsApp bubble; a third interruption would have cost more
conversions than it won.

**The hook** — a gold light sweeps across the bar twice on load, about 1.5s each,
then stops for good. The two claims fade up from below on a short stagger, Army
first at 0.10s, payment at 0.28s. Motion draws the eye once and then gets out of the
way; a looping animation in the header would be irritating by the third page.

**Mobile** — the two claims alternate every four seconds with a fade and slide, so
each one gets the full width instead of being truncated. Under 400px the phone pill
drops away rather than squeezing the message.

**Copy**

> 🎖️ Founded 2010 by a **retired Indian Army officer** · ₹ **You pay us directly** —
> zero commission, no middleman · 📞 +91-7817996730

"You pay us directly" is set in gold with a soft glow, so the eye lands on the money
claim first.

## Technical notes

- Server component. No JavaScript, no state, no hydration cost. Both the entrance
  animation and the mobile rotation are pure CSS.
- Fixed height (36px desktop, 30px mobile) — contributes nothing to CLS.
- `prefers-reduced-motion: reduce` kills the sweep and the rotation and shows the
  Army line statically.
- `scroll-margin-top` moved 96px → 112px so anchor links still clear the taller
  sticky header.
- Marked up as `role="note"` with an aria-label carrying both claims.

## Files changed

```
src/components/TrustStrip.js   new
src/components/Navbar.js       utility strip replaced; header stack now sticky
src/app/globals.css            TRUST STRIP block; scroll-margin-top 96 → 112
```
