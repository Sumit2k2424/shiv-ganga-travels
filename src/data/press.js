// ── Newsroom / press office data ───────────────────────────────────────────
//
// WHY THIS EXISTS
// The measured bottleneck on this site is off-page, not content: Semrush (Aug
// 2026) shows 316 organic keywords against competitors' 1,000–4,800, and zero
// links from any of the 1,495 referring domains those competitors share. More
// destination pages do not fix that. Earned coverage does — a wire pickup or a
// trade-press citation is a link we cannot build ourselves, from a domain we
// could never buy our way onto.
//
// WHAT ACTUALLY GETS PICKED UP
// Not announcements. Desks bin "we are delighted to announce". What they run is
// (a) numbers nobody else has, (b) a named human who will go on record, and
// (c) copy already in the shape a sub-editor can lift. So every release here
// carries a dateline, a nut graf in the first 40 words, sourced figures, an
// attributable quote from the founder, boilerplate and a contact. That is the
// wire format, and matching it is most of the battle.
//
// HOW TO ADD ONE
// Add ONE object to RELEASES. Never touch the templates — same rule as the cab
// section. `isPublishable()` gates both generateStaticParams and the sitemap,
// so an incomplete draft is invisible rather than thin. Do not weaken the gate
// to ship faster: a newsroom full of thin pages is worse than an empty one,
// because it tells a journalist checking us out that we pad.
//
// Set `approved: false` on anything that has not been read by a human. It will
// sit in the file, build clean, and render nowhere.
//
// WHAT MAY NOT BE GENERATED
// Two fields are load-bearing for our credibility and must be written by a
// person, never drafted and shipped unread: `quotes` and any `facts` row whose
// `source` is not already published elsewhere on this site or by a named third
// party. A fabricated figure that a desk repeats is not an SEO problem, it is a
// correction, and a correction is the end of the relationship with that desk.
// The generator in scripts/press/ therefore emits quote slots as null and
// refuses to invent numbers — see PRESS-SYSTEM.md.

export const MEDIA_KIT = {
  // The boilerplate. Wire desks paste this verbatim at the foot of a story, so
  // it must be accurate, dull, and free of adjectives they would have to strip.
  boilerplateShort:
    'Shiv Ganga Travels is a Char Dham Yatra tour operator based in Haridwar, Uttarakhand, founded in 2010 and registered with the Uttarakhand Tourism Development Board. It operates road and helicopter pilgrimages to Yamunotri, Gangotri, Kedarnath and Badrinath.',

  boilerplateLong:
    'Shiv Ganga Travels is a Char Dham Yatra tour operator based in Haridwar, Uttarakhand. Founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer, the company runs road and helicopter pilgrimages to the four Himalayan shrines of Yamunotri, Gangotri, Kedarnath and Badrinath, along with Do Dham, Teen Dham, Panch Kedar and Panch Badri circuits. It is registered with the Uttarakhand Tourism Development Board and operates as a direct operator rather than an aggregator, handling its own vehicles, drivers and hotel contracts. The company has run pilgrimages through every season since 2010, including the years following the 2013 Kedarnath floods.',

  // Named, real, on the record. Never invent a spokesperson — the founder is the
  // only Person entity this site asserts, and he resolves to /#founder.
  spokesperson: {
    name: 'Dhanesh Chandra Mishra',
    title: 'Founder & Director',
    bio: 'Retired Indian Army officer. Founded Shiv Ganga Travels in 2010 and has run Char Dham operations through sixteen seasons, including the rebuilding years after the 2013 Kedarnath disaster. Available for comment on yatra logistics, route and road conditions, pilgrim safety, helicopter operations, and seasonal demand.',
    availableFor: [
      'Route and road-condition briefings during the yatra season',
      'Pilgrim safety, altitude and medical-screening policy',
      'Helicopter ticketing, UCADA fares and the fake-booking problem',
      'Seasonal demand, pricing and how a small operator competes with aggregators',
      'On-the-ground colour from Kedarnath, Badrinath, Gangotri and Yamunotri',
    ],
  },

  // Verifiable in one click. Journalists check these before they run anything.
  fastFacts: [
    ['Founded', '2010'],
    ['Head office', 'Saptrishi Road, Bhupatwala, Haridwar, Uttarakhand 249410'],
    ['Registration', 'Uttarakhand Tourism Development Board'],
    ['Operating model', 'Direct operator — own vehicles, drivers and hotel contracts'],
    ['Circuits operated', 'Char Dham, Do Dham, Teen Dham, Ek Dham, Panch Kedar, Panch Badri, Adi Kailash'],
    ['Seasons operated', '2010 – present, including post-2013 rebuilding years'],
  ],

  // Being explicit about reuse removes a permissions email and makes it likelier
  // someone actually runs the piece.
  assetPolicy:
    'Photographs and figures published in this newsroom may be reproduced by news organisations without charge, with attribution to Shiv Ganga Travels. Where a figure is sourced to Uttarakhand Tourism, the Devasthanam Board or another third party, please carry that attribution instead of ours. High-resolution images and the underlying operator data are available on request.',

  // Deliberately the general address rather than an invented press@ alias — see
  // the note in the PR. Swap it the day a dedicated inbox exists.
  contact: {
    name: 'Dhanesh Chandra Mishra',
    role: 'Founder & Director',
    note: 'Fastest response is WhatsApp during season (April–November), when he is frequently on the route and away from email.',
  },
};

// ── Releases ───────────────────────────────────────────────────────────────
// Every figure below is already published and sourced elsewhere on this site.
// Nothing here asserts a fact the site does not already stand behind.

export const RELEASES = [
  {
    slug: 'char-dham-2026-registrations-cross-50-lakh-operator-data',
    approved: true,
    dateline: 'HARIDWAR, Uttarakhand',
    dateISO: '2026-08-16',
    dateHuman: '16 August 2026',
    category: 'Data',
    // Entities, not keywords. These become schema `about` and the RSS
    // categories, so they should be things a reader could look up — shrines,
    // bodies, named phenomena — never phrases we would like to rank for.
    topics: ['Kedarnath', 'Badrinath', 'Uttarakhand Tourism', 'Pilgrimage footfall', 'Monsoon'],
    headline: 'Char Dham registrations cross 50 lakh in 2026, with Kedarnath and Badrinath alone recording over 30 lakh darshans',
    subhead: 'Haridwar operator publishes a sixteen-year dataset covering pilgrim numbers, route distances, costs and safety, and makes it free to use',
    summary:
      'Char Dham Yatra registrations for the 2026 season passed 50 lakh by 13 August, and Kedarnath and Badrinath together had recorded 30,62,228 darshans by 11 August. Shiv Ganga Travels, a Haridwar operator running the circuit since 2010, has published its own sixteen-year dataset alongside the official figures and made it free for news organisations to use.',
    body: [
      'Char Dham Yatra registrations for the 2026 season crossed 50 lakh by 13 August, according to Uttarakhand Tourism figures. Kedarnath and Badrinath alone had recorded 30,62,228 darshans by 11 August — 16,12,112 at Kedarnath and 14,50,116 at Badrinath — with the two shrines together taking more than ₹74.5 crore in offerings and revenue.',
      'The pace was set early. More than 17.8 lakh pilgrims had completed registration by mid-April, before the Badrinath doors opened on 23 April, making it the busiest booking window in five years.',
      'What the headline numbers obscure is that the yatra now runs straight through the monsoon rather than pausing for it. On 6 July 2026, 13,254 pilgrims visited the shrines despite heavy rain — 5,892 at Badrinath, 3,124 at Kedarnath, 1,983 at Gangotri and 2,151 at Hemkund Sahib. The 2026 season runs 208 days, from 19 April to 13 November.',
      'Shiv Ganga Travels has published a consolidated statistics page covering 2010 to 2026 — pilgrim numbers, route distances, cost breakdowns, hotel booking patterns and safety data — cross-referenced against Uttarakhand Tourism, Devasthanam Board and Char Dham Yatra Authority notifications. The company is making the dataset available to news organisations without charge.',
    ],
    quotes: [
      {
        text: 'The monsoon numbers are the ones that should be getting attention. Thirteen thousand people on the shrines in a single day of heavy rain is not what this yatra looked like ten years ago, and the infrastructure conversation has not caught up with it.',
        by: 'Dhanesh Chandra Mishra',
        role: 'Founder & Director, Shiv Ganga Travels',
      },
      {
        text: 'We have been running this route since 2010, including the years after 2013 when almost nobody came. Operators sit on that data and do nothing with it. It is more useful to a reporter than it is to us.',
        by: 'Dhanesh Chandra Mishra',
        role: 'Founder & Director, Shiv Ganga Travels',
      },
    ],
    facts: [
      { fact: 'Char Dham registrations, 2026 season', value: 'Over 50 lakh by 13 August', source: 'Uttarakhand Tourism' },
      { fact: 'Kedarnath + Badrinath darshans', value: '30,62,228 by 11 August', source: 'Devasthanam Board' },
      { fact: 'Offerings and revenue, both shrines', value: 'Over ₹74.5 crore', source: 'Devasthanam Board' },
      { fact: '2026 season length', value: '208 days (19 Apr – 13 Nov)', source: 'Devasthanam Board' },
      { fact: 'Single monsoon day, 6 July 2026', value: '13,254 pilgrims across shrines', source: 'Uttarakhand Tourism' },
      { fact: 'Circuit length', value: '~1,607 km across four shrines', source: 'Shiv Ganga Travels operator data' },
    ],
    links: [
      { label: 'Full statistics, 2010–2026', href: '/char-dham-yatra-statistics' },
      { label: 'Char Dham Yatra guide', href: '/char-dham-yatra' },
      { label: 'Live road status', href: '/char-dham-road-status' },
    ],
    notesToEditors: [
      'The underlying operator data (2010–2026) is available as a spreadsheet on request.',
      'Dhanesh Chandra Mishra is available for interview in Hindi or English, in person in Haridwar or by phone.',
      'Where figures are attributed to Uttarakhand Tourism or the Devasthanam Board, please carry that attribution rather than ours.',
    ],
  },

  // ── Replaced the pricing release, Aug 2026 ───────────────────────────────
  // The previous release here announced a 25 per cent package price cut. It was
  // withdrawn on instruction: this newsroom does not publish pricing news. The
  // old slug (…cuts-package-prices-25-percent-2026) 301s to /press via
  // src/data/redirects.js — it could not be reused for this story, because the
  // slug is the most visible line in a search result and that one was itself
  // the pricing announcement.
  //
  // The angle below is the stronger story anyway. It carries government figures
  // we did not have to generate, it is in the public interest, and consumer
  // fraud warnings get picked up where a company's own discount never does.
  //
  // HELD AS A DRAFT: quotes[] is empty. See the note there.
  {
    slug: 'char-dham-helicopter-booking-fraud-stf-figures-2026',
    approved: false,
    dateline: 'HARIDWAR, Uttarakhand',
    dateISO: '2026-08-25',
    dateHuman: '25 August 2026',
    category: 'Safety',
    topics: ['Kedarnath', 'Helicopter booking', 'Uttarakhand STF', 'Online fraud', 'IRCTC HeliYatra'],
    headline: 'Uttarakhand STF blocked 51 fake helicopter booking sites in 2025 — and there is still no agent quota',
    subhead: 'Haridwar operator publishes the official reporting channels and states that no operator, including itself, can sell a Kedarnath helicopter ticket',
    summary:
      'The Uttarakhand Special Task Force blocked 51 fake Char Dham helicopter-booking websites in its 2025 crackdown, disabled 111 fraudulent phone numbers and froze 56 bank accounts. A Haridwar operator has published the official reporting channels and the one portal that is genuine.',
    body: [
      // Nut graf — 38 words.
      'The Uttarakhand Special Task Force blocked 51 fake Char Dham helicopter-booking websites during its 2025 crackdown, disabled 111 fraudulent phone numbers, froze 56 bank accounts and reported 30 WhatsApp numbers, according to figures published by the force.',
      'Across its operations the STF has busted more than 76 fake sites, all impersonating the official IRCTC HeliYatra portal. The Indian Cyber Crime Coordination Centre (I4C), under the Union Home Ministry, has issued a national alert about fake Char Dham websites, social pages and paid advertisements. Victims have been reported from across India and among NRI families.',
      'The mechanism is consistent. Kedarnath helicopter tickets sell out within minutes of release, and the shortage is what the fraud runs on: a "VIP quota" offered on WhatsApp or Facebook, a polished site a search away, a paid advertisement that looks like verification. There is no VIP quota. There is no agent allocation. heliyatra.irctc.co.in is the only genuine booking channel, and anyone selling a Kedarnath helicopter seat through any other website, phone call or messaging app is running a scam.',
      'Shiv Ganga Travels, a Haridwar operator running the circuit since 2010, has published the reporting routes pilgrims need — the national cybercrime helpline 1930, cybercrime.gov.in, and the Uttarakhand Police takedown address for fraudulent Char Dham content — alongside the verification steps for checking any operator before paying. The company states plainly that it cannot sell these tickets either.',
    ],
    // ── NOT WRITTEN. DO NOT FILL THIS IN WITHOUT HIM. ──────────────────────
    // ASK DHANESH, then paste his actual words:
    //   1. You have watched this fraud from the operator side for years. What
    //      does a pilgrim who has been taken in usually tell you when they turn
    //      up in Haridwar? One or two sentences, plain.
    //   2. You are telling people that no operator — including you — can sell
    //      them a helicopter ticket. Why say that out loud when competitors
    //      imply otherwise?
    // Two quotes, in his voice, and the release is ready for approval.
    quotes: [],
    facts: [
      { fact: 'Fake helicopter-booking sites blocked, 2025 crackdown', value: '51', source: 'Uttarakhand STF' },
      { fact: 'Fraudulent phone numbers disabled', value: '111', source: 'Uttarakhand STF' },
      { fact: 'Bank accounts frozen', value: '56', source: 'Uttarakhand STF' },
      { fact: 'WhatsApp numbers reported', value: '30', source: 'Uttarakhand STF' },
      { fact: 'Fake sites busted across all operations', value: '76+', source: 'Uttarakhand STF' },
      { fact: 'Genuine helicopter booking channel', value: 'heliyatra.irctc.co.in only — no agent or offline quota', source: 'IRCTC / UCADA' },
      { fact: 'National alert on fake Char Dham sites', value: 'Issued', source: 'Indian Cyber Crime Coordination Centre (I4C), Union Home Ministry' },
      { fact: 'Cybercrime reporting helpline', value: '1930 · cybercrime.gov.in', source: 'Government of India' },
    ],
    links: [
      { label: 'Char Dham booking scams — how to verify an operator', href: '/char-dham-yatra-scams' },
      { label: 'Emergency and reporting contacts', href: '/char-dham-yatra-emergency-contacts' },
      { label: 'How Kedarnath helicopter booking actually works', href: '/blog/kedarnath-helicopter-booking' },
    ],
    notesToEditors: [
      'All enforcement figures in this release are the Uttarakhand STF\'s own and were published by the force. Please attribute them to the STF rather than to us.',
      'Dhanesh Chandra Mishra is available for interview in Hindi or English on helicopter ticketing, UCADA fares and the fake-booking problem, in person in Haridwar or by phone.',
      'We can put reporters in touch with pilgrims who have been defrauded, where they consent to speak.',
      'The company sells road packages and helicopter charters but does not sell individual Kedarnath helicopter seats, and says no operator legitimately can.',
    ],
  },
];

// ── Publishability gate ────────────────────────────────────────────────────
/**
 * A release reaches the sitemap and generateStaticParams only when it is
 * genuinely finished AND a human has approved it. A newsroom is the first place
 * a journalist checks before deciding whether we are worth quoting — a thin or
 * half-written release there costs more credibility than the page earns.
 *
 * Do not relax these to ship faster.
 */
export function isPublishable(r) {
  return Boolean(
    r &&
    r.approved === true &&
    r.slug &&
    r.headline &&
    r.dateline &&
    r.dateISO &&
    r.summary &&
    Array.isArray(r.body) && r.body.length >= 3 &&
    Array.isArray(r.quotes) && r.quotes.length >= 1 &&
    Array.isArray(r.facts) && r.facts.length >= 3
  );
}

export const getPublishedReleases = () =>
  RELEASES.filter(isPublishable).sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

export const getRelease = (slug) =>
  RELEASES.find((r) => r.slug === slug && isPublishable(r));

export const getReleaseParams = () =>
  getPublishedReleases().map((r) => ({ slug: r.slug }));

// ── Time ───────────────────────────────────────────────────────────────────
// `dateISO` is a calendar date because that is what a dateline shows. Google
// News, RSS and schema.org all want a full instant with an offset, and a bare
// date is read as midnight UTC — which back-dates every release by 5h30m and,
// for anything published before 05:30 IST, lands it on the previous day. So we
// resolve to a real IST timestamp here rather than in three separate consumers.
//
// Set `publishedAt` on a release when the exact hour matters (an embargo lift,
// a same-day response to a news event). Otherwise the default stands.
const IST = '+05:30';
const DEFAULT_PUBLISH_TIME = `T09:30:00${IST}`;

export const releaseTimestamp = (r) =>
  r.publishedAt || `${r.dateISO}${DEFAULT_PUBLISH_TIME}`;

/**
 * dateModified for schema. Falls back to publication — but when a release has
 * been substantively updated, `dateModifiedISO` should be set and an entry
 * added to `updates[]`, because a NewsArticle whose dateModified silently
 * drifts forward with no visible change on the page is exactly the pattern
 * Google's news systems treat as date manipulation.
 */
export const releaseModified = (r) =>
  r.dateModifiedISO ? `${r.dateModifiedISO}${DEFAULT_PUBLISH_TIME}` : releaseTimestamp(r);

/**
 * Releases published within `days` of now, newest first.
 *
 * Google's news sitemap spec accepts articles from the last two days and
 * ignores anything older, so the news sitemap is usually empty — that is the
 * correct steady state for a newsroom that publishes a few times a season, not
 * a bug. Do not widen the window to keep the file looking populated: submitting
 * stale URLs in a news sitemap is a documented reason for losing news
 * eligibility altogether.
 */
export function getRecentReleases(days = 2, now = new Date()) {
  const t = now.getTime();
  const cutoff = t - days * 86400_000;
  return getPublishedReleases().filter((r) => {
    const at = new Date(releaseTimestamp(r)).getTime();
    // Bounded at BOTH ends. The upper bound is not redundant: a release can be
    // written and approved ahead of its dateline (a season-opening piece dated
    // for the day the doors open, say), and it is publishable the moment it
    // lands in the file. Without this check it would enter the news sitemap
    // immediately, carrying a <news:publication_date> in the future — which is
    // invalid, and is the kind of thing that costs news eligibility rather than
    // merely being ignored.
    return at >= cutoff && at <= t;
  });
}

export const releaseUrl = (r, baseUrl) => `${baseUrl}/press/${r.slug}`;

/**
 * Keywords for the NewsArticle `keywords` field and the RSS categories.
 * Derived rather than hand-maintained so they cannot drift from the release.
 */
export function releaseKeywords(r) {
  return [
    'Char Dham Yatra',
    r.category,
    ...(r.topics || []),
  ].filter(Boolean);
}

/**
 * The line we want to see in someone else's copy.
 *
 * Journalists and AI answer engines both attribute far more reliably when the
 * exact string is sitting on the page than when they have to assemble one from
 * a byline and a URL. This is the single cheapest thing on the page that
 * changes whether a citation names us or says "one operator".
 */
export function citationFor(r, baseUrl) {
  return `Shiv Ganga Travels, "${r.headline}", ${r.dateHuman}. ${releaseUrl(r, baseUrl)}`;
}
