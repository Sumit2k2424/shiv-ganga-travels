# Newsroom system

How `/press` works, what it is for, and what it will and will not do.

## What this is actually for

The measured bottleneck on this site is off-page. Semrush (Aug 2026) shows 316
organic keywords against competitors' 1,000–4,800, and zero links from any of
the 1,495 referring domains those competitors share. More destination pages do
not move that. Earned coverage does.

So the newsroom has two audiences, in this order:

1. **Journalists**, who cite us and link from a domain we could never buy onto.
2. **AI answer engines**, which quote sourced figures far more readily than
   marketing copy, and which now sit in front of a growing share of the
   research a pilgrim does before booking.

Both want the same artefact: a dated, sourced, attributable document. That is
why the format is wire format and not a blog post.

## Honest expectations about Google News

**A corporate newsroom does not get into Google News by publishing press
releases.** Google's news policies exclude routine promotional and press-release
content from news surfaces, and inclusion requires being accepted as a
publication through Publisher Center. Anyone who tells you a `news-sitemap.xml`
buys entry is selling something.

What the technical work here actually buys:

| Surface | Realistic outcome |
|---|---|
| Google News tab | Unlikely without Publisher Center acceptance. Built correctly in case that changes. |
| Google Search | Normal indexing. Dated pages with sourced figures compete well for long-tail queries. |
| AI answer engines | **The strongest play.** Sourced figures + explicit citation + `speakable` + full `articleBody` in schema is close to ideal input. |
| Bing / Copilot | Same-day via IndexNow. |
| Journalist discovery | RSS + a named spokesperson + free reuse. This is where links come from. |

The citations worth chasing come from a reporter reading `/press` and picking up
the phone — not from a sitemap.

## The pieces

**Data**
- `src/data/press.js` — `MEDIA_KIT` and `RELEASES`. One object per release.
  `isPublishable()` gates the build; `approved: false` holds a draft invisible.

**Pages**
- `src/app/press/page.js` — media kit, spokesperson, fast facts, boilerplate
- `src/app/press/[slug]/page.js` — the release, with `NewsArticle` schema
- `src/app/press/[slug]/opengraph-image.js` — per-release share card

**Syndication**
- `src/app/press/feed.xml/route.js` — RSS 2.0, **full text**. A sub-editor
  should be able to file accurately without visiting the site.
- `src/app/news-sitemap.xml/route.js` — Google News sitemap, rolling 2-day
  window. **Usually empty. That is correct.** Never widen the window.
- `src/app/robots.js` — lists both sitemaps
- `src/app/layout.js` — site-wide RSS autodiscovery
- `src/app/api/index-now/route.js` — `GET` for the weekly cron, `POST {urls:[]}`
  on publish. Reaches Bing, Yandex, Seznam, Naver. **Not Google.**

**Tooling**
- `npm run press:radar` — angles worth writing, from real data
- `npm run press:snapshot` — record the package list so new circuits are visible
- `npm run press:check` — editorial validator, stricter than the build gate
- `.claude/skills/press-release/` — drafting skill

## The editorial rules

These are not style preferences. They are the reason the newsroom is worth
having at all.

**No pricing news** (standing instruction, Aug 2026). No package prices, no
discounts, no fare comparisons — not in the body, not in `facts`, and not in the
slug. A release announcing a 25 per cent price cut was withdrawn and now 301s to
`/press`. Enforced by `press:check`, which fails on our own commercial language
and on any slug reading as a price announcement. Third-party money is still
allowed where the figure *is* the story — temple offering totals, government-set
UCADA fares — because those are not ours to advertise.

The reasoning: a discount is a story only to us. Journalists do not run it, so it
buys no link, and it commits the business publicly to a number it may want back.
The fraud, safety and season-data angles cost nothing to give away and are the
ones desks actually pick up.

**Quotes are never generated.** The only spokesperson this site asserts is
Dhanesh Chandra Mishra. A generated quote attributed to a named real person is a
falsified record. The generator writes a *question* for him and leaves
`quotes: []`; the validator hard-fails on any quote attributed to anyone else.

**Figures are never estimated.** Every `facts` row traces to something already
published here or by a named third party. Where a figure belongs to Uttarakhand
Tourism or the Devasthanam Board, that attribution travels with it — being cited
as the source of a government figure we did not produce is a correction waiting
to happen.

**Nothing publishes unread.** `approved: false` is the default from any
generator. A human flips it.

The cost of breaking any of these is not a ranking penalty. It is one desk
discovering it, and that desk never running us again.

## Adding a release

```bash
npm run press:radar            # what is worth writing
```

Then use the `press-release` skill, or hand-write an object into `RELEASES`.

```bash
npm run press:check            # must pass
npm run build                  # must pass
```

Before flipping `approved: true`, a human confirms:

- [ ] The quote is in his actual words
- [ ] Every third-party figure checked against the original source
- [ ] The nut graf lands in the first 40 words
- [ ] Headline under 110 characters

After deploy:

```bash
curl -X POST https://www.shivgangatravels.com/api/index-now \
  -H 'Content-Type: application/json' \
  -d '{"urls":["https://www.shivgangatravels.com/press/THE-SLUG"]}'
```

## What is not built

Deliberately out of scope, with reasons:

- **Wire distribution (PR Newswire, ANI, PTI).** Paid, and syndicated press
  releases are `nofollow` or `noindex` almost everywhere, so they do not solve
  the link problem. Direct pitching to named reporters does.
- **A `press@` alias.** `MEDIA_KIT.contact` deliberately uses the general
  address and the founder's name. An unstaffed press alias that bounces is worse
  than no alias.
- **Auto-publish on a schedule.** A newsroom that posts because it is Tuesday
  reads as a content mill. Publish when there is something sourced to say.
