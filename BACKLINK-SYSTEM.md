# Backlink system

Finds link opportunities, refuses the bad ones, tracks which competitors are
linked where, and writes the submission packet. It does not submit anything —
see [Why nothing is submitted automatically](#why-nothing-is-submitted-automatically).

```bash
npm run links:radar    # what to do this week, in order, blockers first
npm run links:audit    # live-check every prospect against the quality gate
npm run links:gap      # which sites link to competitors and not to us
npm run links:draft -- <id>    # write the submission packet for one prospect
```

---

## The problem this is built around

`src/data/press.js` records the measurement: competitors share 1,495 referring
domains and we have a link from none of them. The instinct is to go and get
those 1,495 links. That instinct is wrong, and the whole design follows from
why.

`SEMRUSH-ACTION-PLAN.md` (July 2026) took 18 of those domains and called them
"easy directory submissions". Run them through `scripts/backlinks/quality.mjs`
and **14 are rejected**:

| Domain | What it actually is |
|---|---|
| `talajalisco.gob.mx` | A town hall in Jalisco, Mexico. No Mexican municipality links to a Haridwar tour operator on purpose — that page was hacked. |
| `blog-gold.com`, `develop-blog.com`, `activoblog.com` | One private blog network wearing three names. |
| `viesearch.com`, `abc-directory.com`, `adlandpro.com`, `catalog.in`, `indiacatalog.com` | Web directories of the 2005 kind. They emit links and receive no readers. |
| `loginslink.com` | A scraper that republishes other sites to host links. |
| `consumercomplaints.in`, `trustburn.com` | Complaint boards. The link puts the brand next to the word "complaint" in a SERP. |
| `goodfirms.co`, `salezshark.com` | B2B software directories. A pilgrimage operator listed among IT vendors is a footprint, not a citation. |

The competitors having these links is not an argument for getting them. It is
the reason they are cheap to outrank on trust.

So the system is subtractive. It starts from "no" and makes each domain earn
its way past a gate.

---

## The four pieces

### `quality.mjs` — the gate

The only place that decides whether a domain is worth a link. Everything else
routes through `assess()`, so one change to the rules changes every report.

Scores out of 100 across four weights:

| Weight | Points | Why this share |
|---|---|---|
| Relevance | 40 | A mid-authority Uttarakhand travel site beats a high-authority site that has never mentioned a mountain. |
| Trust | 30 | A masthead, a named editor, or an institution behind it. |
| Obtainable | 20 | A perfect prospect with no route in is worth less this season than a good one with an open form. |
| Competitor evidence | 10 | Deliberately the smallest. "They link to my competitors" is a reason to look, never a reason to want it. |

**Domain Authority appears nowhere in this file.** It is the metric that talked
the July plan into `adlandpro.com`.

Verdicts: `PURSUE` (60+), `MAYBE` (40–59), `WEAK` (under 40), `REJECT` (any hard
rule — never scored, because a score invites an argument and there isn't one).

Nofollow is not a penalty. Reddit, Quora and Tripoto are scored on their merits:
they are what AI assistants quote, and a ChatGPT citation is worth what a
ranking signal is worth now.

### `prospects.mjs` — the register and the ledger

Every domain we would accept a link from, why, what it wants in exchange, and
where it stands. Target list and status in one file, because a target list that
lives apart from its status is how a directory gets submitted to three times and
a journalist gets pitched the same story twice.

Nineteen entries. That is the finished shape, not a starting point — twenty real
placements beat four hundred directory submissions, and the four hundred
actively hurt.

It also carries `REFUSED`: the 15 domains we have turned down and why. Kept
rather than deleted, so nobody re-adds them next quarter.

`verified: null` means the submission mechanics have never been confirmed by
opening the page. The radar surfaces those before anyone spends a morning on a
form that moved — as the eUttaranchal directory did, and its URL in
`SEMRUSH-ACTION-PLAN.md` now returns HTTP 410.

### `audit.mjs` — the live check

Loads each domain and asks three questions: is it alive and is it what we think
it is, does it show spam signatures, and does it already link to our competitors
or to us. That last one is the useful one — a page linking to three operators
has told us it will link to a fourth, and a page already linking to us tells us
to stop pitching it.

```bash
npm run links:audit                       # the whole register
npm run links:audit -- --refused          # re-check what we rejected, to show the work
npm run links:audit -- example.com,b.in   # arbitrary domains from a new export
```

A homepage fetch is a shallow test and the output says so rather than
pretending. It catches dead domains, parked domains, link farms and paid-post
shops. It cannot tell you whether a site has an editor — open the ones that pass
and look.

### `gap.mjs` — the competitor gap

Which sites link to several competitors and not to us. Backlink indexes are not
free and this repo has no API key, so it reads CSV exports rather than
pretending to crawl — drop one file per competitor in
`scripts/backlinks/data/competitors/` and see the README there for free sources.

Every row still goes through the gate. On a real Char Dham export most come back
`REJECT`, and that is the correct result.

### `draft.mjs` — the submission packet

Writes `outreach/<prospect-id>/` containing a checklist, and whichever of
`pitch.md`, `listing.txt`, `article.md` or `answer.md` that prospect actually
wants.

Facts are re-derived every run: prices from `src/data/packages.js`, boilerplate
and spokesperson from `src/data/press.js`, address from `SITE`. Nothing is typed
from memory — `directory-submissions.md` records a period when the off-site
prices were stale by ₹5,600 a head because someone did.

**Quotes and any statistic the site does not already publish are emitted as
`[[ WRITE THIS ]]` slots and never generated.** That rule is inherited verbatim
from `src/data/press.js`. A fabricated figure that a desk repeats is not an SEO
problem, it is a correction, and a correction ends the relationship with that
desk.

The article drafter also checks `src/app/` for an existing page on the same
angle and warns. A guest post that duplicates a page we already rank with hands
a stronger domain our own copy to outrank us with.

---

## Why nothing is submitted automatically

Two reasons, and the second is the real one.

The first is that submitting on someone's behalf is a decision with a name
attached — the founder's — and a script should not make it.

The second: automated submission is the definition of the thing this system
exists to avoid. A tool that fills forms is a tool that fills four hundred
forms, and four hundred submissions from one small operator in one week is the
exact footprint that gets a profile discounted. The bottleneck is supposed to be
a person deciding each one is worth it. Remove that and nothing separates this
from the link farms in `REFUSED`.

`radar.mjs` enforces the same idea from the other side: more than six
submissions in 30 days triggers a warning, because real citations accumulate
slowly and a sprint is a pattern.

---

## Working it

1. `npm run links:radar` — blockers first, then six things to do. Six is the cap
   on purpose; outreach that outruns the ability to follow up reads as a mail merge.
2. `npm run links:audit` — before spending time on anything.
3. `npm run links:draft -- <id>` — get the packet, fill every `[[ WRITE THIS ]]`
   slot, send it yourself.
4. Set `status: 'submitted'` and `submittedOn` in `prospects.mjs`.
5. When it appears: `status: 'live'`, record `liveAt`, set `verified` to the date
   you saw it. The radar re-checks won links after 90 days, because a link that
   was quietly dropped is invisible unless something looks.

One follow-up if there is no reply after three weeks. Never two.

---

## What this does not replace

`AUTHORITY-PLAN.md` tier 1 is still the biggest single lever and no script can
do it: **38 Google reviews against competitors' 7,500.** The register tracks the
off-site work; it does not ask for reviews. Keep sending
`shivgangatravels.com/review` after every yatra.

---

## Where the domain actually stands — measured, 27 Aug 2026

Semrush Backlink Analytics, read directly from the account rather than estimated.

| | Authority Score | Referring domains | Organic traffic |
|---|---|---|---|
| **shivgangatravels.com** | **9** | 115 | 1.1K |
| discover-uttarakhand.com | 13 | 256 | 5.9K |
| chardhamtourism.com | 14 | 192 | 3.7K |
| euttaranchal.com | 47 | 5,400 | 308K |

Two separate facts sit in that table and they lead to opposite conclusions.

**Against the direct operators we are four points behind, not a league behind.**
AS 9 against 13 and 14 is a gap that twenty real placements closes.

**euttaranchal.com is not a competitor to catch, it is a prospect to be listed
on.** AS 47 on 5,400 referring domains with a normal country spread — it is the
portal for this niche, it runs a Char Dham travel-agent directory, and
`prospects.mjs` already tracks it as both. Nothing in this register outranks it;
the useful move is to be *in* it.

### The profile is a farm, and so is everyone's

Of our 115 referring domains, Semrush puts **109 at Authority Score 0–10** and
none above 40. The country split is Singapore 73% (67 domains), Moldova 17%
(16), India 2% (2). The network graph is flagged *Dangerous*. One of the top
anchor texts is "high quality dofollow backlinks online cheap".

The decisive measurement is the IP concentration. Across the 100 domains now in
`data/ours.csv`:

| IP | Referring domains on it |
|---|---|
| 118.139.181.85 | 23 |
| 195.20.19.178 | 13 |
| 118.139.176.46 | 12 |
| 184.168.115.60 | 7 |
| 118.139.178.200 | 6 |
| 118.139.161.199 | 5 |

**68 of 100 referring domains sit on six IP addresses.** That is not a link
profile, it is a link farm with 68 front doors. Five of them
(`backlinkhouse.com`, `backlinkon.com`, `backlinksbank.com`,
`backlinkshouse.com`, `backlinkstree.com`) share one IP and say what they are in
the domain name.

**Do not rush to a disavow file.** chardhamtourism.com shows Singapore 46% (67
domains) and Moldova 11% (16) — the *same counts* as ours. These are
auto-generated "domain stats", "website worth" and "backlink checker" sites that
emit a page for every domain they crawl and link to it. Nobody bought them and
nobody can avoid them; Google discounts this class algorithmically, and
disavowing links that were never counted buys nothing while risking the few that
were. Revisit only if a manual action appears in Search Console.

The finding that matters is the one underneath: **strip the farm and the site has
almost no real links at all.** One Travel & Tourism referring domain
(`tripclap.com`, AS 36, nofollow). That is the entire honest link profile. It is
also why the gate in `quality.mjs` is set the way it is — at AS 9 with 115 junk
domains, the marginal value of one real travel citation is enormous and the
marginal value of a directory listing is zero.

### What is now wired up

`data/ours.csv` holds 100 of the 115 referring domains (the remaining tail is all
AS 0–2 and did not paginate). `data/competitors/euttaranchal.com.csv` holds 95 of
euttaranchal's. That is enough for `npm run links:gap` to run for real, and at
`--min 1` it surfaces `chardhamyatra.org` as MAYBE 47 — a relevant `.org` on the
portal's own link graph, and the best untouched prospect the register has seen.

Both files are Semrush reads, not estimates. Re-export before trusting the
numbers; the README's warning about fabricated exports applies to stale ones too.

**Next**: export the other twelve competitors so the 2-competitor threshold does
real work. `chardhamtourism.com` and `triptochardham.in` first — the register
notes the latter's referring domains are mostly travel blogs, which is the
profile we actually want.

---

## The competitor gap, run for real — 27 Aug 2026

All thirteen tracked competitors were pulled from Semrush Backlink Analytics into
`data/competitors/`. Twelve produced data; `triptochardham.in` returns "No
matching results" in Semrush, so it has no export and the register note calling
its referring domains "mostly travel blogs" is unverified. Each file is the top
~100 referring domains as the report renders them, not a complete export — a
read, not an estimate, but a partial one.

| Export | Domains |
|---|---|
| euttaranchal.com | 95 |
| chardhamtourism.com | 100 |
| chardhamtourism.co.in | 96 |
| discover-uttarakhand.com | 100 |
| kumartravelsharidwar.com | 96 |
| shivaliktravels.com | 99 |
| haridwartravelagents.com | 98 |
| aanandaholidays.com | 88 |
| shrilaxmitourandtravels.com | 90 |
| bizarexpedition.com | 87 |
| thrillophilia.com | 90 |
| makemytrip.com | 96 |
| triptochardham.in | no Semrush data |

**775 distinct referring domains. 64 link to two or more competitors and not to
us. Every single one scored WEAK. Zero pursue, zero maybe.**

That is the most useful result the gap has produced, and it is a negative one.
The domains the whole niche shares are `video-bookmark.com`, `bookmark4you.com`,
`socialbookmarkssite.com`, `secretsearchenginelabs.com`, `byteshort.xyz`,
`screenshots.wiki`, `trafficdirectory.org`, `piratedirectory.org`,
`alive-directory.com` — bookmark farms and 2005-era directories — plus
`bing.com` and `yahoo.com`, which are search engines indexing a page, not
citations anybody earned.

`kumartravelsharidwar.com` is the clearest illustration: roughly thirty of its
referring domains are named `bookmark<something>.com`. It outranks us on the
local operator term while carrying a link profile made almost entirely of
bookmark spam. The links are not why it ranks.

**So the 2-competitor threshold is the wrong lens for this niche.** It is
designed to find the domain that links to everyone but you. Here, the domain
that links to everyone is by construction a farm — the only sites promiscuous
enough to link to six Haridwar operators are the ones that link to everybody.

The useful tier is the opposite one: sites that link to exactly **one**
competitor. A travel blog that made a single editorial choice is worth more than
a directory that made six automated ones. `npm run links:gap -- --min 1` opens
that tier, and because the gate guesses relevance from the domain name, the
names that mean nothing get under-scored there. Live audit is what separates
them.

### What survived a live audit

Sixteen candidates were pulled from the 1-competitor tier by hand and run through
`links:audit`, which fetches each homepage and counts real topic vocabulary:

| Domain | Verdict | Topic terms | Trust | Links to |
|---|---|---|---|---|
| chardhamyatra.org | **PURSUE 63** | 17 | .org | euttaranchal |
| chardhamcentral.com | MAYBE 54 | 11 | 3/5 | euttaranchal |
| travelwithmonk.com | MAYBE 54 | 13 | 3/5 | discover-uttarakhand |
| sacredyatra.com | MAYBE 51 | 16 | 2/5 | euttaranchal |
| chopta.in | MAYBE 51 | 8 | 2/5 | euttaranchal |
| kartikswami.com | MAYBE 51 | 7 | 2/5 | euttaranchal |
| aroraholidays.in | MAYBE 51 | 15 | 2/5 | discover-uttarakhand |
| merakitriangle.com | MAYBE 48 | 9 | 1/5 | euttaranchal |
| tripoto.com | MAYBE 40 | 3 | community | — |

All eight of the topical ones are now in `PROSPECTS` with `verified: null`.
Rejected on audit and deliberately not added: `euttarakhand.com` (39),
`kailashjourneys.com` (33), `indiain360.com` (19), `dooncircle.com` (16),
`mytravaly.com` (9), `voiceofvillage.com` (7), `audiala.com` (3).
`giskaa.com` returned HTTP 403 to the crawler, which says nothing either way.

Note how many point at euttaranchal.com. Five of the eight already link to the
portal — more evidence that being listed there is the single highest-leverage
off-site move available, since its own link graph is where the niche's real
publishers already are.

### Two things worth noticing

**79 of the 775 competitor referring domains already link to us.** That is the
shared farm quantified from the other direction: a tenth of the entire niche link
graph arrives at every operator automatically, us included, and nobody asked for
it.

**`rome2rio.com` (AS 88) links to `chardhamtourism.co.in` and `makemytrip.com`
but not to us.** It was already the top entry in the July plan's outreach list
and it is still untouched. It is a route-data platform, not a directory, and it
is the highest-authority genuinely relevant domain in all twelve exports.
`grokipedia.com` (AS 68) links to five competitors and is in the same position.
Neither is in `prospects.mjs` yet.

**Next:** the register now has 27 open prospects and 23 have never been opened
and checked. `npm run links:radar` puts the two BLOCKERs first, and it is right
to — the stale TripAdvisor price is a live problem on a third-party profile, and
the UTDB certificate question undermines a claim made in three places.

---

## rome2rio and grokipedia — added 27 Aug 2026

Both were top of the July outreach list and both sat untouched for seven weeks.
Both also defeat `links:audit`: rome2rio returns HTTP 403 to our crawler, and
grokipedia's homepage is a bare search box that scores 3/100 on relevance. Both
were opened in a browser instead, so their `verified` fields are a real read.

### rome2rio.com — better than the register can score it

The Get Listed page (`rome2rio.com/get-listed/`) is a **free, self-serve listing
for transport operators**, and the copy is explicit: "Provide reliable route and
schedule information, **including booking links**... It is easy and free to get
your transport data into Rome2Rio's search engine, either manually or via GTFS."
Self-reported scale is 35M+ monthly uniques and 746M searches a year.

The form sits on that page at `#block_form`. Mode of Transport includes **Taxi**,
and the interest multi-select includes "Have your services listed on Rome2Rio".
Region and country are Asia / India.

This is the rare prospect where the asset already exists: `src/data/cabs/routes.js`
is structured route data with origins, destinations, distances and times, which
is close to what the form is asking for.

**It scores 54/100 (MAYBE, rank 20) and that is the gate working exactly as
designed.** `quality.mjs` ignores Domain Authority on purpose — it is the metric
that talked the July plan into `adlandpro.com`. rome2rio gets relevance (0.85)
and obtainability (open) but zero trust, because trust comes from an
institutional TLD, the `REAL_COMMUNITIES` list, or a crawled homepage, and
rome2rio is none of those: it is a commercial platform that 403s our crawler.

**This is worth a human decision.** rome2rio is not a community and stretching
`REAL_COMMUNITIES` to include it would bend the list's meaning to flatter a
score. The honest options are (a) leave it at 54 and work it anyway from the
register, or (b) decide the gate needs a category for "major commercial platform
with a free, on-topic, self-serve listing" — which today it does not have.
Nothing was changed to force it up.

### grokipedia.com — a citation surface, not an outreach target

`grokipedia.com/page/Char_Dham_Yatra` carries **142 external citations**. The
most-cited sources are:

| Source | Citations |
|---|---|
| sacredyatra.com | 10 |
| euttaranchal.com | 7 |
| chardhamtour.in | 6 |
| chardhamyatra.org | 5 |
| travelvaidya.com | 5 |
| uttarakhandtourism.gov.in | 3 |

**"Shiv Ganga" appears zero times on that page.**

Note the cross-validation: the two most-cited Char Dham sources, `sacredyatra.com`
and `chardhamyatra.org`, are the same two this register picked out of the
competitor gap on the same day. An independent system reached our shortlist.

It cannot be pitched. Grokipedia is generated by xAI from crawled sources — no
editor, no listing. Articles carry a "Suggest Edit" button behind a sign-in, but
that is a correction mechanism, and suggesting an edit that inserts your own link
is how an account gets ignored. The only durable route is to be the sort of
source it already cites — and note **what** it cites: reference pages, not
package pages. `/char-dham-yatra-statistics` and the distance and timing guides
are the citable assets. `/packages` is not.

**One change was made to the gate for this.** `grokipedia.com` was added to
`REAL_COMMUNITIES` in `quality.mjs`, which moves it from 48 (MAYBE) to 68
(PURSUE), level with reddit.com and quora.com. The justification is the list's
own stated purpose — it exists for places "AI assistants quote", scored on their
merits rather than penalised for nofollow. Grokipedia is an AI-generated
encyclopedia that publishes its citation list. `wikipedia.org` was already on the
list; this is the same object. That is a data-list addition, not a change to how
anything is weighted.

### Result

Register now holds 29 prospects. `links:gap` correctly drops both from its
findings — "already in the register" went 1 to 3, and the count of gap domains
worth a look went 63 to 61.

Neither appears in `links:radar`, which shows only the top six by score. That is
deliberate ("six live threads is about the most one person can carry honestly"),
and both sit below the UTDB, Google Business, Bing Places, TripAdvisor, ADTOI and
eUttaranchal work that was already queued. grokipedia is now 14th, rome2rio 20th.
