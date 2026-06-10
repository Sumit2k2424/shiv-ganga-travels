# Google-Factors Round — Changelog (June 2026)

Audited against the four ranking factors you listed. Honest finding: two of the
four (E-E-A-T and Core Web Vitals) were already strong, so the work concentrated
on the two real gaps — Entity Salience and User Intent Matching — plus title
truncation cleanup. All edited files pass Babel/JSX parse.

## 1. E-E-A-T — already strong, no code change needed
You already have: real named experts (Dhanesh Chandra Mishra — ex-Army founder;
Sumit Mishra — operations), credentialed author bylines with LinkedIn/Facebook
`sameAs`, a detailed first-hand founder story, Person schema with `@id`s, and
"last updated · verified for current season" stamps. First-hand voice
("our pilgrims", "our team has described") runs through the long-form pages.
This is better than almost every competitor — leave it as is.

## 2. Core Web Vitals — already solid, no code change needed
Hero is an inline SVG scene (text H1 is the LCP — no image-LCP cost). Every
raw `<img>` already carries explicit width/height (no CLS) plus
`loading="lazy"` + `decoding="async"`. Heavy widgets are deferred via
`dynamic(ssr:false)`; GA4 loads after LCP; vendor chunks are split. The earlier
note still stands: serving real photos through `next/image` would add AVIF/WebP
+ priority hints, but nothing here is actively failing CWV.

## 3. Entity Salience — FIXED (this was the real gap)
The temple `TouristAttraction` schemas had geo + address but no link to the
canonical knowledge-graph entities, so Google couldn't confidently connect
"Kedarnath Temple" on your page to the real-world entity.

- Added `sameAs` to all four temple pages:
  - Kedarnath → Wikipedia + Wikidata Q866014
  - Badrinath → Wikipedia + Wikidata Q799695
  - Gangotri  → Wikipedia (Gangotri_Temple)
  - Yamunotri → Wikipedia (Yamunotri)
  (Verified IDs only — no guessed Wikidata IDs, which would mis-link entities.)
- Added `containedInPlace` (Uttarakhand) and `isPartOf` → Chota Char Dham entity
  on each temple page, so the four shrines are tied to the pilgrimage-circuit entity.
- Upgraded the Organization `knowsAbout` in layout.js from plain strings to
  entity-linked `Thing` objects with Wikipedia `sameAs`, connecting the business
  to the topics it claims expertise in.

## 4. User Intent Matching — FIXED on the highest-intent pages
Created `src/components/AnswerBox.js` — a styled, self-contained 40–60 word
direct answer that sits right under the page heading. This is the passage AI
Overviews / ChatGPT / Perplexity and featured snippets extract; burying the
answer in paragraph three means it isn't pulled.

- Added a direct-answer lead to all four temple pages (cost/opening/altitude/
  access resolved in the first 50 words).
- Rolled AnswerBox onto the five top money pages too: kedarnath-yatra,
  char-dham-yatra, do-dham-yatra, badrinath-yatra, char-dham-helicopter — each
  resolves price + duration + access in the lead passage. (9 high-intent pages
  now covered in total.)
- The box uses the existing `.speakable-answer` class, so it also feeds the
  SpeakableSpecification schema already present on these pages.
- Roll the same component onto the money pages next (kedarnath-yatra,
  char-dham-yatra, do-dham-yatra, cost pages) — import it and drop one
  `<AnswerBox>` under the H1.

## 5. Title truncation cleanup (SERP CTR + intent clarity)
Five page titles were cut off mid-phrase, ending in a stray comma
(e.g. "Badrinath Temple 2026 — Darshan Timings,"). Completed all five:
- badrinath-temple, kedarnath-temple, haridwar-to-gangotri-cab,
  delhi-to-haridwar-cab, haridwar-to-badrinath-cab, uttarakhand-tour-packages
  (main title + the one truncated OG/Twitter variant).

## Still your move (not code)
- Create a Wikidata item for "Shiv Ganga Travels" and add it to the Organization
  `sameAs` — the single biggest remaining entity signal for the *business*.
- Roll AnswerBox onto any remaining mid-intent pages (cab routes, blog guides)
  as you touch them — import it and drop one `<AnswerBox>` under the H1/first H2.
- Real first-hand photos via `next/image`.
- Off-site entity reinforcement: consistent NAP + brand mentions on Reddit,
  Quora, YouTube — these drive both AI citations and knowledge-graph confidence.
