# GEO / AI Search Analysis — shivgangatravels.com

**Audited:** 9 August 2026 · **Scope:** Google AI Overviews, ChatGPT, Claude, Perplexity, Gemini, Bing Copilot

## GEO Readiness Score: 71/100

| Dimension | Weight | Score | Verdict |
|---|---|---|---|
| Technical accessibility | 20% | 19/20 | Excellent — nothing blocking |
| Structural readability | 20% | 17/20 | Strong |
| Passage citability | 25% | 17/25 | Good on 20% of pages, absent on the rest |
| Authority & brand signals | 20% | 11/20 | **Weakest link — off-site entity gap** |
| Multi-modal content | 15% | 7/15 | No video anywhere |

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
| YouTube | **absent** | Strongest single correlation with AI citation |
| Reddit | **absent** | 46.7% of Perplexity citations; 11.3% of ChatGPT's |
| Wikipedia / Wikidata | **absent** | 47.9% of ChatGPT citations |
| LinkedIn | **absent** | Moderate; also anchors the founder entity |
| Instagram | present | Weak signal for LLMs |
| TripAdvisor / JustDial | present | Good local proof, weak for LLMs |

**Founder entity is unresolvable.** The `Person` schema for Dhanesh Chandra Mishra carries `name`, `jobTitle`, `description` and `worksFor` — but **no `sameAs`**. There is no LinkedIn, Wikidata, or authored-profile URL to tie the entity to anything outside this domain. For ChatGPT and Perplexity, which lean hard on entity resolution, an unlinked person is effectively an unverifiable claim. This is the highest-leverage schema fix available and it is blocked on real URLs only you can supply.

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

1. **Get the founder onto LinkedIn and Wikidata, then add `sameAs` to the `Person` schema.** Off-site work, but it converts an unverifiable claim into a resolvable entity. Blocked on real URLs.
2. **Start a YouTube channel.** Strongest measured correlation with AI citation, and it closes the multi-modal gap simultaneously. Route walkthroughs, Sonprayag shuttle explainer, fare breakdowns — content you already have in text.
3. **Answer real questions on Reddit** (r/india, r/uttarakhand, r/IndiaTravel) as an identified Haridwar operator. Reddit is 46.7% of Perplexity's citations.
4. **Roll `AnswerBox` out to the remaining ~126 pages.** Mechanical, on-site, fully in your control. The component and the pattern already exist.
5. **Add `dateModified` to the commercial pages' schema** so the freshness signal is machine-readable, not just visible.

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

## Not done, and why

- **`sameAs` for the founder** — needs real LinkedIn/Wikidata URLs. Inventing profile links would be fabricating an identity trail.
- **Wikipedia entry** — cannot be self-created without violating Wikipedia's conflict-of-interest policy, and a promotional entry would be deleted. It has to come from independent coverage.
- **Reddit / YouTube presence** — off-site accounts and content, not a code change.
- **AnswerBox on the remaining ~126 pages** — each needs accurate, page-specific copy. Say the word and I'll work through them in batches.
