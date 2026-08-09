# GEO / AI Search Analysis — shivgangatravels.com

**Audited:** 9 August 2026 · **Scope:** Google AI Overviews, ChatGPT, Claude, Perplexity, Gemini, Bing Copilot

## GEO Readiness Score: 75/100

*(revised up from 71 later the same day — YouTube, Reddit and LinkedIn accounts
were created and are now wired into the entity graph. See the changelog at the
bottom.)*

| Dimension | Weight | Score | Verdict |
|---|---|---|---|
| Technical accessibility | 20% | 19/20 | Excellent — nothing blocking |
| Structural readability | 20% | 17/20 | Strong |
| Passage citability | 25% | 17/25 | Good on 20% of pages, absent on the rest |
| Authority & brand signals | 20% | 15/20 | Accounts now exist; **content volume is the gap** |
| Multi-modal content | 15% | 7/15 | Channel exists, no published video yet |

The honest headline: **the technical layer is close to best-in-class and is not what's holding the site back.** Someone already built `AnswerBox`, `llms.txt`, an IndexNow endpoint, `SpeakableSpecification`, and explicit allows for every major AI crawler. The remaining ceiling is off-site — brand mentions on the platforms LLMs actually draw from.

---

## 1. AI crawler access — PASS

All major answer engines are explicitly allowed and receive fully server-rendered HTML. Verified by fetching the homepage with each user agent:

| Crawler | Allowed | Bytes received |
|---|---|---|
| GPTBot | yes | 479,099 |
| OAI-SearchBot | yes | 479,099 |
| ClaudeBot | yes | 479,099 |
| PerplexityBot | yes | 479,099 |

**Fixed in this pass:** added explicit allows for `Google-CloudVertexBot` (Gemini grounding), `Applebot` / `Applebot-Extended`, `Meta-ExternalAgent`, `Amazonbot`, `DuckAssistBot`, `MistralAI-User`, `YouBot`, `Bingbot`. These were previously falling through to the `*` rule — permitted, but implicitly, and a future tightening of `*` would have silently cut them off.

## 2. Server-side rendering — PASS

Next.js App Router, 248 statically prerendered pages. AI crawlers do not execute JavaScript; every one of them gets complete content. No client-only content gating.

## 3. llms.txt — PASS

Present at `/llms.txt`, 13,109 bytes, updated July 2026. Contains legal identity, founder, address, GPS, Google Place ID, phone/WhatsApp, rating, differentiators, and per-package pricing and seasons. This is well above the typical implementation.

**Gap:** no `/llms-full.txt`. Optional under the standard.

## 4. Structured data — STRONG

Per-page inventory shows `Organization`, `Person` (founder), `FAQPage` (109 of 158 pages), `Review`, `Rating`, `Offer`, `Place`, `City`, `BreadcrumbList`, `ImageObject`, `SpeakableSpecification`.

Organization `sameAs` links six external profiles: Google Maps, Instagram, JustDial, TripAdvisor, WhatsApp, and the canonical site.

## 5. Brand mention analysis — THE REAL GAP

Ahrefs' Dec 2025 study of 75,000 brands found brand mentions correlate roughly **3x more strongly with AI citation than backlinks** — YouTube mentions strongest (~0.737), versus Domain Rating at ~0.266.

| Platform | Status | Why it matters |
|---|---|---|
| YouTube | **account live**, no video yet | Strongest single correlation with AI citation |
| Reddit | **r/CharDham_Guide live** | 46.7% of Perplexity citations; 11.3% of ChatGPT's |
| LinkedIn | **company page live** | Moderate; anchors the business entity |
| Wikipedia / Wikidata | absent | 47.9% of ChatGPT citations |
| Instagram / Facebook | present | Weak signal for LLMs |
| TripAdvisor / JustDial | present | Good local proof, weak for LLMs |

The accounts existing is the precondition, not the win. **The signal is mentions
and content volume, not profile existence** — an empty YouTube channel
contributes essentially nothing. Publishing route walkthroughs and answering
real questions in the subreddit is what converts these into citations.

**Founder entity is still unresolvable.** The `Person` schema for Dhanesh
Chandra Mishra now carries `name`, `jobTitle`, `description`, `worksFor`,
`alumniOf`, `knowsAbout` and `url` → `/about`, and resolves to a single `@id`
(`/#founder`) across the whole site. But there is still **no `sameAs`** — no
personal LinkedIn, Wikidata entry, or authored byline anywhere off this domain.
The company LinkedIn identifies the business, not the person. For ChatGPT and
Perplexity, which lean hard on entity resolution, an unlinked person remains an
unverifiable claim. This is still the highest-leverage schema fix available and
it is still blocked on a real URL only you can supply.

## 6. Passage citability — PARTIAL

`src/components/AnswerBox.js` already exists and is purpose-built for this: a 40–60 word self-contained lead answer, carrying `.speakable-answer` which feeds `SpeakableSpecification`.

**Coverage before this pass:** 28 of 158 pages (18%).
**Added in this pass:** `/gangotri-yatra`, `/yamunotri-yatra`, `/char-dham-yatra-from-delhi`, `/char-dham-yatra-from-mumbai` — all four verified rendering server-side.
**Coverage now:** 32 of 158 (20%).

Still missing on ~126 pages, including `/uttarakhand-tour-packages`, `/char-dham-yatra-route-map`, `/online-puja-booking`, `/panch-kedar-yatra`, and most of the 55 blog posts.

## 7. Multi-modal — WEAK

Text and images throughout, plus an illustrative Char Dham circuit map. **No video content anywhere.** Content with multi-modal elements sees materially higher AI selection rates, and YouTube doubles as the strongest brand-mention signal — so this gap costs twice.

## 8. Freshness signals — PARTIAL

`dateModified` appears in schema on blog and cab pages but not on several top commercial pages (`/`, `/char-dham-yatra`, `/kedarnath-yatra`, `/gangotri-yatra`, `/yamunotri-yatra`). A visible "Last updated" line renders on many of these via `SITE.lastUpdated`, so the human signal is there while the machine-readable one is not.

## 9. Bing / Copilot — PASS

`/api/index-now` endpoint exists with a weekly Vercel cron (`0 6 * * 1`). `Bingbot` now explicitly allowed.

## 10. RSL 1.0 licensing — ABSENT

No `/rsl.xml`. Emerging standard (Dec 2025); low urgency, and it governs licensing rather than visibility.

---

## Top 5 highest-impact changes

1. **Publish video on the new YouTube channel.** The account exists; an empty
   channel contributes nothing. Route walkthroughs, the Sonprayag shuttle
   explainer, fare breakdowns — all content you already have in text.
2. **Post and answer in r/CharDham_Guide, and in r/india / r/uttarakhand /
   r/IndiaTravel** as an identified Haridwar operator. Reddit is 46.7% of
   Perplexity's citations, and a subreddit with no threads is not a signal.
3. **Get the founder a personal LinkedIn (and eventually Wikidata), then add
   `sameAs` to his `Person` schema.** Converts an unverifiable claim into a
   resolvable entity. Blocked on a real URL.
4. **Roll `AnswerBox` out to the remaining ~126 pages.** Mechanical, on-site,
   fully in your control. The component and the pattern already exist.
5. **Add `dateModified` to the commercial pages' schema** so the freshness
   signal is machine-readable, not just visible.

## Changes made in this pass

| Change | File | Status |
|---|---|---|
| 9 additional AI crawlers explicitly allowed | `src/app/robots.js` | done, verified |
| AnswerBox on `/gangotri-yatra` | `src/app/gangotri-yatra/page.js` | done, renders SSR |
| AnswerBox on `/yamunotri-yatra` | `src/app/yamunotri-yatra/page.js` | done, renders SSR |
| AnswerBox on `/char-dham-yatra-from-delhi` | `src/app/char-dham-yatra-from-delhi/page.js` | done, renders SSR |
| AnswerBox on `/char-dham-yatra-from-mumbai` | `src/app/char-dham-yatra-from-mumbai/page.js` | done, renders SSR |

All answer-block copy is drawn from figures already published on each page (₹5,699 Gangotri, ₹5,999 Yamunotri, ₹22,999 Delhi, ₹24,999 Mumbai, distances and season dates from each page's own fact strip). No new claims were invented.

Build verified: 248 static pages, sitemap unchanged at 220 URLs.

## Changelog — second pass, same day

The YouTube channel, Reddit community and LinkedIn company page were created
and linked in the footer. Wiring them into the entity graph surfaced three
defects:

1. **`src/data/social.js` was a dead module.** Its header has always claimed it
   feeds "schema.org `sameAs` in `src/app/layout.js`", but nothing imported it —
   `layout.js` carried its own hardcoded list. That is why Facebook, YouTube and
   LinkedIn were live in the footer and absent from `sameAs`. `layout.js` now
   spreads `SOCIAL_SAME_AS`; Organization `sameAs` went from 6 URLs to 10.
2. **The founder was three entities.** `/#founder` sitewide, `/about#dhanesh-mishra`
   on the about page, and a third `itemID` on contact. All three now resolve to
   `/#founder`.
3. **The about-page founder node asserted a false identity.** It carried
   `sameAs: [site root, company Google Maps listing]` — claiming this person *is*
   the website and *is* the business. Removed; replaced with `url` → `/about`.

`r/CharDham_Guide` was deliberately kept **out** of `sameAs`. It is a topic
community, not a page about the business, and `sameAs` means "a page that
unambiguously indicates this item's identity". It stays in the footer, where
the link and the brand mention still count.

Each new URL was fetched before being added, per `social.js`'s own rule that a
404 in `sameAs` is worse than a missing link: YouTube 200 ("Shiv Ganga Travels -
YouTube"), LinkedIn 200 ("Shiv Ganga Travels | LinkedIn"), Reddit 200 with a real
sidebar description. **Facebook could not be verified** — facebook.com returns
400 to server-side fetches. It was already marked `verified: true` from an
earlier pass and was left as-is; worth an eyeball.

## Not done, and why

- **`sameAs` for the founder** — needs a real personal LinkedIn/Wikidata URL. The
  company LinkedIn identifies the business, not him. Inventing profile links
  would be fabricating an identity trail.
- **Wikipedia entry** — cannot be self-created without violating Wikipedia's conflict-of-interest policy, and a promotional entry would be deleted. It has to come from independent coverage.
- **Reddit / YouTube presence** — off-site accounts and content, not a code change.
- **AnswerBox on the remaining ~126 pages** — each needs accurate, page-specific copy. Say the word and I'll work through them in batches.
