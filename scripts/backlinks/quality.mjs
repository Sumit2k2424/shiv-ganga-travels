// ── The quality gate ───────────────────────────────────────────────────────
//
// WHAT THIS IS FOR
// Every other file in this directory asks the same question — "is this domain
// worth a link from?" — and this is the only place that answers it. Nothing
// else in the system is allowed to decide; audit.mjs, gap.mjs and radar.mjs all
// route through `assess()` so that one change to the rules changes every
// report at once.
//
// WHY IT IS MOSTLY A LIST OF REJECTIONS
// The brief was "only good websites, not spam". In this niche that is almost
// entirely a subtractive problem: the supply of Char Dham link opportunities is
// enormous and roughly nine-tenths of it is link farms, paid-post networks and
// hacked pages. Finding candidates is easy. Not poisoning the profile with them
// is the hard part, so the gate is built to reject by default and let very
// little through.
//
// A WORKED EXAMPLE, BECAUSE IT MATTERS
// SEMRUSH-ACTION-PLAN.md (July 2026) lists 18 "easy directory submissions"
// harvested from competitor backlink data. Run them through this gate and 14
// are rejected. `talajalisco.gob.mx` is a municipal government site in Jalisco,
// Mexico — no Mexican town hall links to a Haridwar tour operator on purpose,
// so that link exists because the site was compromised. `blog-gold.com`,
// `develop-blog.com` and `activoblog.com` are one private blog network wearing
// three names. `loginslink.com` is a scraper. `consumercomplaints.in` and
// `trustburn.com` are complaint boards, where a link is a brand liability that
// happens to be dofollow.
//
// That the competitors have these links is not an argument for getting them.
// It is the reason those competitors are cheap to outrank on trust.
//
// THE ONE RULE THAT IS NOT NEGOTIABLE
// A domain is judged on what it publishes, never on what it would give us.
// The moment "but it's a dofollow DA40" starts overriding "nobody reads it",
// this becomes a link-buying tool and the profile becomes a liability.

// ── Hard rejections ────────────────────────────────────────────────────────
//
// Each rule is a family of spam, not a single site. `signatures` are matched
// against fetched page HTML (lowercased) by audit.mjs; `domains` are matched
// against the hostname so a known-bad site is rejected without a fetch.
//
// Keep the `why` field written for a human. These reports get read months later
// by someone deciding whether to override a verdict, and "REJECT: link-farm" on
// its own invites the override.
export const REJECT_RULES = [
  {
    id: 'sells-links',
    why: 'The site sells placement. A link that can be bought carries no editorial signal, and paid links passing PageRank are a guidelines violation on our side as much as theirs.',
    signatures: [
      'buy backlinks', 'buy a backlink', 'buy guest post', 'guest post price',
      'sponsored post price', 'paid guest post', 'guest posting service',
      'da 50 guest post', 'dofollow backlink for', 'link insertion price',
      'we accept paid', 'publish your article for $', 'publish your article for ₹',
    ],
    domains: [],
  },
  {
    id: 'link-farm',
    why: 'A free-for-all web directory. Nobody browses these; they exist only to emit links, which is exactly the footprint that makes a profile look manufactured.',
    signatures: [
      'add your url', 'submit your link', 'free directory submission',
      'reciprocal link required', 'link exchange', 'add site to directory',
      'instant approval directory',
    ],
    domains: [
      'viesearch.com', 'abc-directory.com', 'adlandpro.com', 'catalog.in',
      'indiacatalog.com', 'selling.com', 'dmcfinder.com', 'loginslink.com',
      'csridentity.com',
    ],
  },
  {
    id: 'pbn',
    why: 'Private blog network — a generic blog name, no masthead, no named author, publishing across unrelated verticals. These get deindexed in waves and take their outbound links with them.',
    signatures: [],
    domains: [
      'blog-gold.com', 'develop-blog.com', 'activoblog.com', 'tntcode.com',
      'appicsoftwares.com', 'salezshark.com', 'mumbaikarsperspective.com',
      'indianeconomicobserver.com', 'manchalamushafir.com', 'guestblognow.com',
    ],
  },
  {
    id: 'compromised',
    why: 'The link exists because the page was hacked, not because anyone chose to publish it. Topically and geographically impossible placements are the tell. Being on one is a liability, and it disappears the moment the site is cleaned.',
    signatures: [],
    domains: ['talajalisco.gob.mx'],
  },
  {
    id: 'complaint-board',
    why: 'A link from a complaint or review-dispute site puts the brand name next to the word "complaint" in a SERP. The link is worth less than the impression costs.',
    signatures: [],
    domains: ['consumercomplaints.in', 'trustburn.com'],
  },
  {
    id: 'off-topic-b2b',
    why: 'A software or B2B vendor directory. A Haridwar pilgrimage operator listed among IT firms is a footprint that says "we submit ourselves everywhere", which is the opposite of what a citation should say.',
    signatures: [],
    domains: ['goodfirms.co', 'salezshark.com'],
  },
  {
    id: 'dead-or-parked',
    why: 'Parked, expired or serving a holding page. Detected live by audit.mjs rather than listed here.',
    signatures: [
      'this domain is for sale', 'buy this domain', 'domain parking',
      'related searches sponsored listings',
    ],
    domains: [],
  },
];

// ── Positive signals ───────────────────────────────────────────────────────
//
// Scored out of the weights below. The weighting is deliberate: RELEVANCE is
// worth more than TRUST, because a link from a mid-authority Uttarakhand travel
// site beats one from a high-authority site that has never mentioned a
// mountain. Domain-authority scores appear nowhere in this file on purpose —
// they are the metric that talked the July plan into `adlandpro.com`.
export const WEIGHTS = {
  relevance : 40, // does this site's audience actually go on this yatra?
  trust     : 30, // is there a masthead, a named editor, an institution behind it?
  obtainable: 20, // can a small operator realistically get placed, this season?
  evidence  : 10, // does it already link to competitors — i.e. proven willing?
};

// Topic words that mean "this page is about our subject". Used both to score
// relevance and, in gap.mjs, to sanity-check a competitor's referring domain
// before it is ever put in front of a human.
export const TOPIC_TERMS = [
  'char dham', 'chardham', 'kedarnath', 'badrinath', 'gangotri', 'yamunotri',
  'haridwar', 'rishikesh', 'uttarakhand', 'garhwal', 'yatra', 'pilgrimage',
  'temple', 'himalaya', 'trek', 'devbhoomi', 'hemkund', 'valley of flowers',
];

// Institutional shapes worth more than any blog. A .gov.in listing is the one
// link in this niche that cannot be bought, faked or lost to a Google update.
const INSTITUTIONAL = [
  { test: (h) => h.endsWith('.gov.in') || h.endsWith('.nic.in'), label: 'Indian government', trust: 30 },
  { test: (h) => h.endsWith('.gov') || h.includes('.gov.'),      label: 'government',        trust: 28 },
  { test: (h) => h.endsWith('.ac.in') || h.endsWith('.edu'),     label: 'academic',          trust: 26 },
  { test: (h) => h.endsWith('.org.in') || h.endsWith('.org'),    label: 'non-profit / association', trust: 18 },
];

// Communities where the link is usually nofollow and that is fine. AUTHORITY-PLAN
// tier 2 is right that these predict AI-assistant visibility better than dofollow
// links do, and ChatGPT or Perplexity citing us is worth as much now as a ranking
// signal. Scored on their own merits rather than penalised for rel.
const REAL_COMMUNITIES = [
  'reddit.com', 'quora.com', 'indiamike.com', 'tripadvisor.in', 'tripadvisor.com',
  'wikivoyage.org', 'wikipedia.org', 'tripoto.com', 'youtube.com',
  'indiatravelforum.in', 'stackexchange.com', 'medium.com',
  // grokipedia.com is not a community in the forum sense, but it is the purest
  // case of what this list is for: an AI-generated encyclopedia whose article
  // citations ARE the "what AI assistants quote" signal above. Its Char Dham
  // Yatra page carries 142 external citations and names its sources in public.
  // Wikipedia is already on this list; this is the same object.
  'grokipedia.com',
];

const host = (input) => String(input || '')
  .trim().toLowerCase()
  .replace(/^https?:\/\//, '')
  .replace(/^www\./, '')
  .split(/[/?#]/)[0];

// ── assess() ───────────────────────────────────────────────────────────────
//
// The single entry point. Give it what you know; it scores what it can and says
// what it could not check. It never fetches — callers do that and pass `html`
// in — so this file stays pure and testable, and the same function scores both
// a hand-written prospect and a row from a competitor CSV.
//
//   assess({ domain, html, topical, editorial, institutional, obtainable, competitorLinks })
//
// Returns { verdict, score, band, reasons[], rejectedBy, unchecked[] }.
export function assess(input = {}) {
  const h = host(input.domain);
  const html = String(input.html || '').toLowerCase();
  const reasons = [];
  const unchecked = [];

  if (!h) {
    return { verdict: 'REJECT', score: 0, band: 'invalid', reasons: ['No domain given.'], rejectedBy: 'invalid', unchecked: [] };
  }

  // 1. Hard rejections first. A rejected domain is never scored — a score
  //    invites someone to argue with it, and there is nothing to argue about.
  for (const rule of REJECT_RULES) {
    if (rule.domains.some((d) => h === d || h.endsWith('.' + d))) {
      return { verdict: 'REJECT', score: 0, band: rule.id, reasons: [rule.why], rejectedBy: rule.id, unchecked: [] };
    }
    if (html) {
      const hit = rule.signatures.find((s) => html.includes(s));
      if (hit) {
        return {
          verdict: 'REJECT', score: 0, band: rule.id, rejectedBy: rule.id,
          reasons: [rule.why + '\n      Matched on the live page: "' + hit + '"'],
          unchecked: [],
        };
      }
    }
  }

  let score = 0;

  // 2. Relevance. An explicit `topical` from a curated entry wins; otherwise
  //    count topic terms in the fetched HTML.
  if (typeof input.topical === 'number') {
    score += Math.round(WEIGHTS.relevance * input.topical);
    reasons.push('Relevance ' + Math.round(input.topical * 100) + '% (' + (input.topicalNote || 'set by hand in prospects.mjs') + ').');
  } else if (html) {
    const hits = TOPIC_TERMS.filter((t) => html.includes(t));
    const ratio = Math.min(1, hits.length / 6);
    score += Math.round(WEIGHTS.relevance * ratio);
    reasons.push(hits.length
      ? 'Relevance: ' + hits.length + ' topic terms on the homepage (' + hits.slice(0, 5).join(', ') + ').'
      : 'Relevance: no Char Dham or Uttarakhand vocabulary found on the homepage.');
  } else {
    unchecked.push('relevance (no HTML fetched)');
  }

  // 3. Trust.
  const inst = INSTITUTIONAL.find((i) => i.test(h));
  const community = REAL_COMMUNITIES.find((c) => h === c || h.endsWith('.' + c));
  if (input.institutional || inst) {
    score += inst ? inst.trust : WEIGHTS.trust;
    reasons.push('Trust: ' + (inst ? inst.label : 'institution') + ' domain — the class of link that cannot be bought.');
  } else if (community) {
    score += 20;
    reasons.push('Trust: moderated public community (' + community + '). Usually nofollow, and worth pursuing anyway — this is what AI assistants quote.');
  } else if (input.editorial) {
    score += 18;
    reasons.push('Trust: real editorial operation — named authors, dated posts, a masthead.');
  } else if (html) {
    // Weak proxies, but they separate a publication from a template.
    const signs = ['written by', 'about us', 'editorial', 'privacy policy', 'contact us'].filter((s) => html.includes(s));
    score += Math.min(12, signs.length * 3);
    reasons.push('Trust: ' + signs.length + '/5 basic publication markers present.');
    unchecked.push('editorial quality (only a homepage heuristic — open the site and look for bylines)');
  } else {
    unchecked.push('trust (no HTML fetched)');
  }

  // 4. Obtainability. A perfect prospect we have no route into is worth less
  //    this season than a good one with an open submission form.
  const OBTAIN = { open: 20, pitch: 14, relationship: 8, closed: 0 };
  const OBTAIN_WHY = {
    open        : 'Obtainable: open submission — a form or listing we can complete ourselves.',
    pitch       : 'Obtainable: needs a pitch to a named human. Slower, and worth more when it lands.',
    relationship: 'Obtainable: needs a membership or an existing relationship first.',
    closed      : 'Obtainable: no realistic route in right now. Park it.',
  };
  if (input.obtainable in OBTAIN) {
    score += OBTAIN[input.obtainable];
    reasons.push(OBTAIN_WHY[input.obtainable]);
  } else {
    unchecked.push('obtainability (not set — see the `obtainable` field in prospects.mjs)');
  }

  // 5. Competitor evidence. A site that already links to two or three operators
  //    has demonstrated it will link to a fourth. This is the whole basis of
  //    gap.mjs, and it is worth the fewest points on purpose: "they link to my
  //    competitors" is a reason to look, never a reason to want it.
  const n = Array.isArray(input.competitorLinks) ? input.competitorLinks.length : 0;
  if (n) {
    score += Math.min(WEIGHTS.evidence, n * 5);
    reasons.push('Evidence: already links to ' + n + ' competitor' + (n > 1 ? 's' : '') + ' (' + input.competitorLinks.join(', ') + ').');
  }

  const verdict = score >= 60 ? 'PURSUE' : score >= 40 ? 'MAYBE' : 'WEAK';
  const band = verdict === 'PURSUE' ? 'worth the effort'
    : verdict === 'MAYBE' ? 'only if it is cheap'
    : 'not worth a submission';

  return { verdict, score, band, reasons, rejectedBy: null, unchecked };
}

export { host };
