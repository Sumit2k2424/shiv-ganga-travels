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

  {
    slug: 'shiv-ganga-travels-cuts-package-prices-25-percent-2026',
    approved: true,
    dateline: 'HARIDWAR, Uttarakhand',
    dateISO: '2026-08-12',
    dateHuman: '12 August 2026',
    category: 'Company',
    headline: 'Haridwar Char Dham operator cuts all 39 package prices by 25 per cent mid-season',
    subhead: 'Cut applies to every road package with no group-size condition; helicopter charters held at existing fares',
    summary:
      'Shiv Ganga Travels has cut the price of all 39 of its Char Dham road packages by 25 per cent with immediate effect, mid-season and with no minimum group size attached. Its flagship Char Dham package falls from ₹18,500 to ₹13,900 per person. Helicopter charter fares are unchanged.',
    body: [
      'Shiv Ganga Travels, a Haridwar-based Char Dham Yatra operator founded in 2010, has cut the advertised price of all 39 of its road packages by 25 per cent with immediate effect. The company\'s flagship Char Dham package falls from ₹18,500 to ₹13,900 per person.',
      'The cut is unconditional. It applies to every road package regardless of group size, season or booking window, and the pre-cut price remains displayed alongside it so the reduction is verifiable rather than asserted.',
      'The company\'s two helicopter charters are excluded and stay at their existing fares — ₹2,30,000 for the 5N/6D Char Dham charter and ₹1,25,000 for the same-day Do Dham. Charter hours are a fixed external cost that an operator cannot discount without either absorbing a loss or cutting flying standards.',
      'The move comes in a season of record footfall, with Char Dham registrations passing 50 lakh. The company says the cut is a response to browsing traffic that was not converting to enquiries — a pattern it attributes to price opacity across the sector rather than to demand.',
    ],
    quotes: [
      {
        text: 'People were reading the itineraries and leaving. When that happens the problem is usually the number, so we moved the number. No conditions, no minimum group, no small print — because a price that only some customers can actually get is not a price, it is bait.',
        by: 'Dhanesh Chandra Mishra',
        role: 'Founder & Director, Shiv Ganga Travels',
      },
      {
        text: 'We left the helicopter charters alone deliberately. Charter hours cost what they cost. Any operator advertising a heavily discounted charter is either taking a loss they cannot sustain or cutting something you would rather they did not cut.',
        by: 'Dhanesh Chandra Mishra',
        role: 'Founder & Director, Shiv Ganga Travels',
      },
    ],
    facts: [
      { fact: 'Packages repriced', value: 'All 39 road packages', source: 'Shiv Ganga Travels' },
      { fact: 'Reduction', value: '25 per cent, unconditional', source: 'Shiv Ganga Travels' },
      { fact: 'Flagship Char Dham package', value: '₹18,500 → ₹13,900 per person', source: 'Shiv Ganga Travels' },
      { fact: 'Char Dham helicopter charter', value: 'Unchanged at ₹2,30,000', source: 'Shiv Ganga Travels' },
      { fact: 'Do Dham same-day charter', value: 'Unchanged at ₹1,25,000', source: 'Shiv Ganga Travels' },
      { fact: 'Effective', value: '12 August 2026', source: 'Shiv Ganga Travels' },
    ],
    links: [
      { label: 'All packages and current prices', href: '/packages' },
      { label: 'Char Dham Yatra packages', href: '/char-dham-yatra' },
      { label: 'Helicopter packages', href: '/char-dham-helicopter' },
    ],
    notesToEditors: [
      'Pre-cut and post-cut prices are both displayed publicly on the site, so the reduction can be verified independently.',
      'The company declined to attach a minimum-group-size condition to the advertised price, which it says would amount to bait advertising under the CCPA 2022 guidelines.',
      'Dhanesh Chandra Mishra is available for interview on operator pricing and how small operators compete with online aggregators.',
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
