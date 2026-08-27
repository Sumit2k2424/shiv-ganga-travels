// ── The prospect register ──────────────────────────────────────────────────
//
// WHAT THIS IS
// Every domain we would accept a link from, why, what it wants from us in
// exchange, and where each one currently stands. It is both the target list and
// the ledger — one file, because a target list that lives apart from its status
// is how the same directory gets submitted to three times and a journalist gets
// pitched the same story twice.
//
// HOW TO WORK IT
//   npm run links:radar    what to do this week, in order
//   npm run links:audit    live-check these domains against the quality gate
//   npm run links:gap      find new ones from competitor backlink exports
//   npm run links:draft    write the submission packet for one prospect
//
// THE SIZE OF THIS FILE IS THE POINT
// There are a little over twenty entries. That is not a starting point to be
// grown into two hundred — it is the finished shape. Semrush counted 1,495
// referring domains across the competitors and this system rejects the large
// majority of them on purpose (see quality.mjs). Twenty real placements beat
// four hundred directory submissions, and the four hundred actively hurt.
//
// FIELDS
//   status      open | drafted | submitted | live | declined | parked
//   wants       what they publish: listing, article, travelogue, answer, quote, profile
//   obtainable  open | pitch | relationship | closed   (scored in quality.mjs)
//   topical     0–1, how close their audience is to ours. Set by hand, honestly.
//   verified    what we have actually confirmed, and when. Never write a claim
//               here that came from memory — `npm run links:audit` fills it.
//   target      the page on our site the link should point at. Deep pages earn
//               links; the homepage is where lazy submissions point.
//
// A NOTE ON `verified: null`
// Several entries below were identified from search results in August 2026 but
// their submission mechanics have NOT been confirmed by opening the page. They
// are marked `verified: null` and the radar shows them as needing a check
// before any time is spent. This is deliberate — a register that quietly
// asserts a submission URL it has never loaded is worse than an empty one.

export const OUR_DOMAIN = 'shivgangatravels.com';

// Competitors whose backlink profiles we mine in gap.mjs. Each carries how it
// was identified, because "competitor" is a claim and this list drives which
// domains we go after.
export const COMPETITORS = [
  { domain: 'chardhamtourism.com',        note: 'Ranks for the head term "char dham yatra package". Named in SERP research, Aug 2026.' },
  { domain: 'chardhamtourism.co.in',      note: 'Separate site, same brand family. Runs an "approved travel agents in Haridwar" page — that page is itself a prospect.' },
  { domain: 'euttaranchal.com',           note: 'Uttarakhand tourism portal with a Char Dham travel-agent directory. Both a competitor for traffic and a prospect for a listing.' },
  { domain: 'thrillophilia.com',          note: 'Aggregator. We publish a comparison page against it.' },
  { domain: 'makemytrip.com',             note: 'Aggregator. We publish a comparison page against it.' },
  { domain: 'discover-uttarakhand.com',   note: 'Ranks on "best char dham tour operators in Haridwar".' },
  { domain: 'kumartravelsharidwar.com',   note: 'Direct Haridwar operator, ranks on the local operator term.' },
  { domain: 'shivaliktravels.com',        note: 'Direct Haridwar operator.' },
  { domain: 'aanandaholidays.com',        note: 'Direct Haridwar operator, runs a "chardham travel agents in Haridwar" page.' },
  { domain: 'haridwartravelagents.com',   note: 'Directory-shaped operator site for Haridwar agents.' },
  { domain: 'triptochardham.in',          note: 'Operator with an active blog — its referring domains are mostly travel blogs.' },
  { domain: 'bizarexpedition.com',        note: 'Ranks on the 2026 package term.' },
  { domain: 'shrilaxmitourandtravels.com', note: 'Direct Haridwar operator.' },
];

export const PROSPECTS = [
  // ── Institutional. The links nobody can buy, and the only ones that will
  //    still be there in five years. Slow, bureaucratic, worth all of it.
  {
    id: 'utdb-travel-trade',
    name: 'Uttarakhand Tourism Development Board — travel trade register',
    domain: 'traveltrade.uttarakhandtourism.gov.in',
    url: 'https://traveltrade.uttarakhandtourism.gov.in/',
    submitUrl: 'https://traveltrade.uttarakhandtourism.gov.in/signup',
    category: 'institutional',
    wants: 'listing',
    topical: 1, institutional: true, obtainable: 'open',
    target: '/',
    why: 'The state register every Uttarakhand tour operator must hold, and the thing our schema, our media kit and every press pitch already assert. Do it for the certificate and for the truth of the claim. Whether it also yields a crawlable link is now doubtful — see `verified` — so this is no longer scored as a link win.',
    caution: 'URGENT: UTDB has moved to a NEW portal and is re-verifying and re-registering every existing user "to eliminate duplication". Our certificate may predate that migration. src/data/press.js, MEDIA_KIT.fastFacts and the Organization schema all state we are UTDB-registered — if that is no longer current on the new portal, the claim is wrong in three places a journalist checks. Confirm the certificate before pitching anyone.',
    evidence: 'Portal loaded in a browser 2026-08-27 and its official guidelines PDF (ttapi.uttarakhandtourism.gov.in/pdfs/UTDB_TravelTrade_Guidelines.pdf) read in full.',
    verified: '2026-08-27, and the findings change this entry. (1) The live portal is traveltrade.uttarakhandtourism.gov.in — all THREE older URLs are dead: /register-operator (in directory-submissions.md), /travel/login.php and /page/travel-agents all return the SPA 404. (2) The guidelines open by stating UTDB is re-verifying and re-registering all users on the new portal. (3) Flow: sign up, pick category and sub-category, select DISTRICT (Haridwar), fill organisation details and geolocation, upload documents (PDF; photos JPG/JPEG/PNG), pay, then the District Tourism Development Officer reviews and issues the certificate. (4) Fees, timelines and certificate tenure are shown inside the portal per category and are NOT in the public guidelines — we do not know them and must not guess. (5) The "Old User / already have a certificate" migration path says "This feature will be available soon", so an existing holder cannot simply port across today. (6) Support: +91 78605 91704. (7) NO PUBLIC DIRECTORY of registered operators was found anywhere on the site — the portal is entirely login-gated and the old public travel-agents page is a 404. Treat the backlink as unproven until a public listing is actually seen.',
    status: 'open',
  },
  {
    id: 'adtoi',
    name: 'ADTOI — Association of Domestic Tour Operators of India',
    domain: 'adtoi.in',
    url: 'https://www.adtoi.in/',
    submitUrl: null,
    category: 'institutional',
    wants: 'profile',
    topical: 0.85, institutional: true, obtainable: 'relationship',
    target: '/',
    why: 'The domestic-operator association, which is the right one for this business — IATO is inbound-focused and a Char Dham road operator is not its constituency. Member directories are crawled and the membership itself is a trust marker to quote in pitches.',
    caution: 'Paid membership with eligibility criteria. Treat the fee as a business decision, not an SEO spend — the link is a by-product.',
    evidence: 'adtoi.in confirmed live, Aug 2026.',
    verified: null,
    status: 'open',
  },
  {
    id: 'incredible-india-approved',
    name: 'Ministry of Tourism — approved travel agent / tour operator scheme',
    domain: 'tourism.gov.in',
    url: 'https://tourism.gov.in/',
    submitUrl: null,
    category: 'institutional',
    wants: 'listing',
    topical: 0.7, institutional: true, obtainable: 'relationship',
    target: '/',
    why: 'Central government recognition scheme. Slowest item on this list and the one with the longest half-life.',
    caution: 'Documentation-heavy, and the approved-operator categories have turnover/office requirements a small operator may not meet. Check eligibility before spending a week on it.',
    evidence: 'Scheme referenced by IRCTC Tourism\'s approved-agents page. Category and criteria NOT verified.',
    verified: null,
    status: 'open',
  },

  // ── Niche portals. Mid-authority, on-topic, and they already link to the
  //    people we are trying to outrank — which is the whole argument for them.
  {
    id: 'euttaranchal-agents',
    name: 'eUttaranchal — Char Dham travel agents directory',
    domain: 'euttaranchal.com',
    url: 'https://www.euttaranchal.com/tourism/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'listing',
    topical: 1, editorial: true, obtainable: 'pitch',
    target: '/char-dham-yatra',
    why: 'The best-established Uttarakhand tourism portal, with both an operator directory and a travelogue section. It is on-topic in a way no general directory is, and it demonstrably links out to operators.',
    caution: 'The travel-agents URL carried in SEMRUSH-ACTION-PLAN now returns HTTP 410 Gone — the directory has moved or been retired. Find the current path before pitching, and do not paste the dead URL into an email.',
    evidence: 'Domain live and ranking Aug 2026; /tourism/chard-dham-travel-agents.php returned 410 on 2026-08-27.',
    verified: '2026-08-27: old directory URL is dead (410).',
    status: 'open',
  },
  {
    id: 'indiamike',
    name: 'IndiaMike — India travel forum',
    domain: 'indiamike.com',
    url: 'https://www.indiamike.com/',
    submitUrl: null,
    category: 'community',
    wants: 'answer',
    topical: 0.8, obtainable: 'open',
    target: '/char-dham-yatra-checklist',
    why: 'The oldest serious India travel forum, heavily read by foreign and NRI travellers planning exactly this trip. Threads rank for years and are quoted by AI assistants.',
    caution: 'Strict, long-memoried moderation. Answer questions properly for weeks before any link appears, and never post as the business where a first-person traveller voice is expected. A ban here is permanent and public.',
    evidence: 'Long-running forum, still active Aug 2026.',
    verified: null,
    status: 'open',
  },
  {
    id: 'tripoto',
    name: 'Tripoto — travelogue platform',
    domain: 'tripoto.com',
    url: 'https://www.tripoto.com/',
    submitUrl: 'https://www.tripoto.com/create',
    category: 'community',
    wants: 'travelogue',
    topical: 0.75, obtainable: 'open',
    target: '/char-dham-yatra-route-map',
    why: 'Self-publishing travelogue site with real traffic on Indian pilgrimage routes. A genuine day-by-day account of a yatra we actually ran is publishable here without asking anyone.',
    caution: 'Links are nofollow. Worth doing for referral traffic and AI citation, not for PageRank — and it only works if the piece is a real trip with real photographs, which we have.',
    evidence: 'Platform live Aug 2026.',
    verified: null,
    status: 'open',
  },

  // ── Earned press. The reason src/data/press.js exists. These are the links
  //    a competitor with 7,500 reviews still cannot manufacture.
  {
    id: 'garhwal-post',
    name: 'Garhwal Post — Dehradun English daily',
    domain: 'garhwalpost.in',
    url: 'https://garhwalpost.in/',
    submitUrl: null,
    category: 'press',
    wants: 'quote',
    topical: 0.9, editorial: true, obtainable: 'pitch',
    target: '/press',
    why: 'A real regional newspaper covering the yatra every season. An operator who has run the route since 2010 and will go on record is exactly the source a desk needs for a season-open or road-status piece.',
    caution: 'Pitch a story, never a link. The quote and any figure must come from the human — see the generation ban at the top of src/data/press.js.',
    evidence: 'Established Dehradun daily. Contact desk and email NOT verified.',
    verified: '2026-08-27: DNS resolves (185.38.109.205 and neighbours) and plain HTTP returns a 301, but the HTTPS endpoint does not answer from here — a browser user agent times out too, so this is not bot protection. Could be a certificate problem, a slow host or geo-blocking. Open it in a browser before pitching; if it is genuinely down, the pitch has nowhere to land.',
    status: 'open',
  },
  {
    id: 'hill-post',
    name: 'Hill Post — Himalayan region news',
    domain: 'hillpost.in',
    url: 'https://hillpost.in/',
    submitUrl: null,
    category: 'press',
    wants: 'quote',
    topical: 0.8, editorial: true, obtainable: 'pitch',
    target: '/char-dham-yatra-statistics',
    why: 'Covers Himalayan states with an appetite for data. The statistics hub was built to be cited and this is the kind of outlet that cites it.',
    caution: 'Same rule: the pitch is the dataset, not the company.',
    evidence: 'Regional news site. Editorial contact NOT verified.',
    verified: null,
    status: 'open',
  },
  {
    id: 'featured-journalist-queries',
    name: 'Featured — journalist source requests',
    domain: 'featured.com',
    url: 'https://featured.com/',
    submitUrl: 'https://featured.com/experts',
    category: 'press',
    wants: 'quote',
    topical: 0.4, obtainable: 'open',
    target: '/about',
    why: 'Replaces the HARO workflow, which shut down at the end of 2024. Journalists post questions, experts answer, published answers carry a byline and a link. Travel and small-business queries come up regularly and a sixteen-year Himalayan operator is a genuinely qualified source.',
    caution: 'Only answer where the founder is actually the expert. Answering off-topic queries for the link is how a source gets dropped, and the answers are published under a real name.',
    evidence: 'Platform live Aug 2026. Free vs paid tier NOT verified.',
    verified: null,
    status: 'open',
  },
  {
    id: 'qwoted',
    name: 'Qwoted — journalist source platform',
    domain: 'qwoted.com',
    url: 'https://www.qwoted.com/',
    submitUrl: null,
    category: 'press',
    wants: 'quote',
    topical: 0.35, obtainable: 'open',
    target: '/press',
    why: 'Second source-request platform, different journalist pool. Same economics as Featured.',
    caution: 'Skewed towards finance and tech desks; travel volume is lower. Low effort per query, so it earns its place, but do not let it eat a morning.',
    evidence: 'Platform live Aug 2026.',
    verified: null,
    status: 'open',
  },

  // ── Public communities. Nofollow, and the AUTHORITY-PLAN is right that they
  //    now matter as much for AI answers as links do for rankings.
  {
    id: 'reddit-uttarakhand',
    name: 'Reddit — r/uttarakhand, r/IndiaTravel, r/india',
    domain: 'reddit.com',
    url: 'https://www.reddit.com/r/uttarakhand/',
    submitUrl: null,
    category: 'community',
    wants: 'answer',
    topical: 0.7, obtainable: 'open',
    target: '/char-dham-yatra-scams',
    why: 'Reddit threads are quoted heavily by ChatGPT, Perplexity and Google AI answers. The scam-warning and registration pages answer questions that are asked there every season, honestly and without a sales pitch.',
    caution: 'The fastest way to lose this channel is to link on the way in. Build comment history, answer without a link, and link only when someone asks for the detail. Disclose the operator relationship every time — Reddit forgives a disclosed operator and never forgives an undisclosed one.',
    evidence: 'Subreddits active Aug 2026.',
    verified: null,
    status: 'open',
  },
  {
    id: 'quora-chardham',
    name: 'Quora — Char Dham and Kedarnath question space',
    domain: 'quora.com',
    url: 'https://www.quora.com/',
    submitUrl: null,
    category: 'community',
    wants: 'answer',
    topical: 0.7, obtainable: 'open',
    target: '/char-dham-yatra-checklist',
    why: 'Quora answers rank on long-tail planning questions and are a standing AI training and citation source. Registration mechanics, helicopter booking and pony rates are all questions we can answer better than anyone answering them now.',
    caution: 'One thorough answer beats twenty short ones. Answers that exist to carry a link get collapsed.',
    evidence: 'Platform live Aug 2026.',
    verified: null,
    status: 'open',
  },
  {
    id: 'youtube-channel',
    name: 'YouTube — operator channel',
    domain: 'youtube.com',
    url: 'https://www.youtube.com/',
    submitUrl: null,
    category: 'community',
    wants: 'profile',
    topical: 0.8, obtainable: 'open',
    target: '/',
    why: 'Already tier 3 of AUTHORITY-PLAN and still not done. Phone-shot footage of the registration counter, the Kedarnath trek and a real departure day is content nobody else is uploading, and video is what AI summarisers increasingly reach for.',
    caution: 'Description links are nofollow. The value is the branded search and the citation, not the link.',
    evidence: 'n/a — an owned channel, not a placement.',
    verified: null,
    status: 'open',
  },

  // ── Citations. NAP consistency, not link equity. Cheap, finite, done once.
  {
    id: 'google-business-profile',
    name: 'Google Business Profile',
    domain: 'google.com',
    url: 'https://www.google.com/business/',
    submitUrl: 'https://business.google.com/',
    category: 'citation',
    wants: 'listing',
    topical: 0.9, institutional: true, obtainable: 'open',
    target: '/',
    why: 'The single highest-value local asset, and the one that feeds the map pack and local AI answers. Posts and Q&A are underused per AUTHORITY-PLAN tier 5.',
    caution: 'Not a backlink. It is here because this register is the only place the off-site work is tracked, and leaving it out would mean it keeps not happening.',
    evidence: 'Profile exists — AUTHORITY-PLAN records 38 reviews at 4.6.',
    verified: null,
    status: 'open',
  },
  {
    id: 'bing-places',
    name: 'Bing Places for Business',
    domain: 'bingplaces.com',
    url: 'https://www.bingplaces.com/',
    submitUrl: 'https://www.bingplaces.com/',
    category: 'citation',
    wants: 'listing',
    topical: 0.8, institutional: true, obtainable: 'open',
    target: '/',
    why: 'Feeds Bing, and through Bing a share of Copilot and ChatGPT web results. Twenty minutes, once.',
    caution: 'None. Just do it.',
    evidence: 'Platform live Aug 2026.',
    verified: null,
    status: 'open',
  },
  {
    id: 'tripadvisor',
    name: 'TripAdvisor — operator listing',
    domain: 'tripadvisor.in',
    url: 'https://www.tripadvisor.in/',
    submitUrl: null,
    category: 'citation',
    wants: 'profile',
    topical: 0.9, obtainable: 'open',
    target: '/',
    why: 'Already listed. High-trust profile that NRI and foreign pilgrims check before booking.',
    caution: 'URGENT AND ALREADY KNOWN: directory-submissions.md records that the live TripAdvisor description still says "from ₹19,500 per person". The real anchor is ₹13,900. A wrong price on a third-party profile is worse than no profile — fix this before any new submission is made anywhere, because the same stale figure is probably sitting on other listings too.',
    evidence: 'Listing exists; stale price recorded in directory-submissions.md.',
    verified: null,
    status: 'open',
  },
  {
    id: 'justdial',
    name: 'JustDial',
    domain: 'justdial.com',
    url: 'https://www.justdial.com/',
    submitUrl: 'https://www.justdial.com/free-listing',
    category: 'citation',
    wants: 'listing',
    topical: 0.5, obtainable: 'open',
    target: '/',
    why: 'India-specific local citation with genuine consumer traffic and phone leads. Consistent NAP here supports the local pack.',
    caution: 'Expect sales calls. The link is nofollow; the leads are the reason.',
    evidence: 'Platform live Aug 2026.',
    verified: null,
    status: 'open',
  },
  {
    id: 'openstreetmap',
    name: 'OpenStreetMap business node',
    domain: 'openstreetmap.org',
    url: 'https://www.openstreetmap.org/',
    submitUrl: null,
    category: 'citation',
    wants: 'listing',
    topical: 0.4, obtainable: 'open',
    target: '/',
    why: 'Feeds a long tail of apps and map products, and the website tag propagates into them. Free, permanent, and almost nobody in this niche bothers.',
    caution: 'Add the business as it really is; OSM editors revert promotional tagging.',
    evidence: 'Platform live Aug 2026.',
    verified: null,
    status: 'open',
  },

  // ── Link-earning assets we own. Not placements — the reason a placement says
  //    yes. Tracked here so the pitch and the asset stay in one register.
  {
    id: 'statistics-hub-outreach',
    name: 'Char Dham statistics hub — citation outreach',
    domain: OUR_DOMAIN,
    url: 'https://www.shivgangatravels.com/char-dham-yatra-statistics',
    submitUrl: null,
    category: 'asset',
    wants: 'quote',
    topical: 1, obtainable: 'pitch',
    target: '/char-dham-yatra-statistics',
    why: 'Built to be cited and, per AUTHORITY-PLAN tier 4, still unpromoted. Anyone writing a 2026 or 2027 season piece needs footfall and route numbers in one place, and a chart nobody else publishes is the most linkable thing on this site.',
    caution: 'Every figure offered must already be sourced on the page. Offering a number we cannot attribute is how a correction happens, and a correction ends the relationship with that desk.',
    evidence: 'Page exists at /char-dham-yatra-statistics.',
    verified: null,
    status: 'open',
  },

  // ── Niche travel sites, from the 27 Aug 2026 competitor gap ─────────────
  //
  //    Twelve competitor exports went into data/competitors/, giving 775
  //    distinct referring domains. At the default 2-competitor threshold,
  //    64 domains link to rivals and not to us and EVERY ONE scored WEAK —
  //    zero pursue, zero maybe. They are bookmark farms, 2005-era directories
  //    and search-engine artifacts (bing.com, yahoo.com). That is the single
  //    most useful thing the gap has told us: the shared link graph of this
  //    niche is worthless, and copying it is not a strategy.
  //
  //    Everything below instead came from the 1-competitor tier and was then
  //    audited live, because the gate guesses relevance from the domain name
  //    and under-scores real sites with unhelpful names. Each one is a working
  //    Char Dham or Uttarakhand publisher that already links to a competitor.
  //    All are `verified: null` — the audit reads a homepage, which cannot
  //    tell you whether a site has an editor or takes submissions. Open them.
  {
    id: 'chardhamyatra-org',
    name: 'chardhamyatra.org',
    domain: 'chardhamyatra.org',
    url: 'https://chardhamyatra.org/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'listing',
    topical: 1, obtainable: 'pitch',
    target: '/char-dham-yatra',
    why: 'The best prospect the gap produced and the only domain in 775 to clear the gate unaided — PURSUE 63 on live audit, 17 Char Dham topic terms on the homepage, a .org, and already linking to euttaranchal.com. A site that links one operator will link a second.',
    caution: 'A .org in this niche is not automatically a non-profit. Confirm who runs it before treating the trust score as real.',
    evidence: 'links:gap 2026-08-27 (MAYBE 47 on name heuristics), then links:audit live — upgraded to PURSUE 63.',
    verified: null,
    status: 'open',
  },
  {
    id: 'chardhamcentral',
    name: 'chardhamcentral.com',
    domain: 'chardhamcentral.com',
    url: 'https://chardhamcentral.com/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'listing',
    topical: 1, obtainable: 'pitch',
    target: '/char-dham-yatra',
    why: 'MAYBE 54 live — 11 Char Dham topic terms and 3/5 publication markers, the highest trust signal of the niche sites found. Links to euttaranchal.com.',
    caution: 'Check whether it is an operator itself before pitching. A competitor does not list a competitor.',
    evidence: 'links:audit live, 2026-08-27.',
    verified: null,
    status: 'open',
  },
  {
    id: 'travelwithmonk',
    name: 'travelwithmonk.com',
    domain: 'travelwithmonk.com',
    url: 'https://travelwithmonk.com/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'article',
    topical: 0.9, obtainable: 'pitch',
    target: '/char-dham-yatra',
    why: 'MAYBE 54 live — 13 Char Dham topic terms, 3/5 publication markers. Links to discover-uttarakhand.com. A travel blog rather than a directory, which is the profile worth having.',
    caution: 'Check for a paid-post footprint before pitching — travel blogs in this niche often sell placements, and a bought post is not the link we want.',
    evidence: 'links:audit live, 2026-08-27.',
    verified: null,
    status: 'open',
  },
  {
    id: 'sacredyatra',
    name: 'sacredyatra.com',
    domain: 'sacredyatra.com',
    url: 'https://sacredyatra.com/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'listing',
    topical: 1, obtainable: 'pitch',
    target: '/char-dham-yatra',
    why: 'MAYBE 51 live — 16 Char Dham topic terms, the densest topical match of anything the gap surfaced, and the highest Authority Score among the niche finds (37). Links to euttaranchal.com.',
    caution: '2/5 publication markers. Confirm there is an editor and not just a template.',
    evidence: 'links:audit live, 2026-08-27.',
    verified: null,
    status: 'open',
  },
  {
    id: 'chopta-in',
    name: 'chopta.in',
    domain: 'chopta.in',
    url: 'https://chopta.in/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'article',
    topical: 0.9, obtainable: 'pitch',
    target: '/chopta-tungnath',
    why: 'MAYBE 51 live, 8 Garhwal topic terms, links to euttaranchal.com. The rare case where the target page picks itself: /chopta-tungnath sits at position 47 for "chopta tungnath" (33,100/mo) and a topical link is exactly what it lacks.',
    caution: 'Single-destination site — pitch Chopta and Tungnath, nothing else. A Char Dham pitch here reads as spam.',
    evidence: 'links:audit live, 2026-08-27.',
    verified: null,
    status: 'open',
  },
  {
    id: 'kartikswami',
    name: 'kartikswami.com',
    domain: 'kartikswami.com',
    url: 'https://kartikswami.com/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'article',
    topical: 0.85, obtainable: 'pitch',
    target: '/uttarakhand-shiva-temples',
    why: 'MAYBE 51 live, 7 topic terms including Char Dham and Haridwar, links to euttaranchal.com. A single-temple site, so pitch the temple guides rather than a package.',
    caution: 'Narrow site. The only honest pitch is a temple page, not a booking page.',
    evidence: 'links:audit live, 2026-08-27.',
    verified: null,
    status: 'open',
  },
  {
    id: 'aroraholidays',
    name: 'aroraholidays.in',
    domain: 'aroraholidays.in',
    url: 'https://aroraholidays.in/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'listing',
    topical: 0.9, obtainable: 'pitch',
    target: '/char-dham-yatra',
    why: 'MAYBE 51 live — 15 Char Dham topic terms. Links to discover-uttarakhand.com.',
    caution: 'Reads like an operator, which would make it a competitor rather than a prospect. Verify before pitching — this is the entry most likely to be refused on a closer look.',
    evidence: 'links:audit live, 2026-08-27.',
    verified: null,
    status: 'open',
  },
  {
    id: 'merakitriangle',
    name: 'merakitriangle.com',
    domain: 'merakitriangle.com',
    url: 'https://merakitriangle.com/',
    submitUrl: null,
    category: 'niche-portal',
    wants: 'article',
    topical: 0.8, obtainable: 'pitch',
    target: '/char-dham-yatra',
    why: 'MAYBE 48 live, 9 topic terms across Char Dham, Kedarnath and Rishikesh. Links to euttaranchal.com.',
    caution: '1/5 publication markers — the weakest trust signal of the set. Open it before spending a morning.',
    evidence: 'links:audit live, 2026-08-27.',
    verified: null,
    status: 'open',
  },

  // ── The two high-authority domains the gap found ───────────────────────
  //
  //    Both were top of SEMRUSH-ACTION-PLAN.md's July outreach list and both
  //    sat untouched for seven weeks. Both defeat `links:audit` — rome2rio
  //    returns HTTP 403 to our crawler and grokipedia's homepage is a bare
  //    search box — so both were opened in a browser instead, and their
  //    `verified` fields are that read rather than a heuristic score.
  {
    id: 'rome2rio',
    name: 'Rome2Rio — transport operator listing',
    domain: 'rome2rio.com',
    url: 'https://www.rome2rio.com/',
    submitUrl: 'https://www.rome2rio.com/get-listed/',
    category: 'citation',
    wants: 'listing',
    topical: 0.85, obtainable: 'open',
    target: '/cabs',
    why: 'Authority Score 88 — the highest-authority genuinely relevant domain in all twelve competitor exports, and it already links to chardhamtourism.co.in and makemytrip.com but not to us. The listing is free, self-serve, and explicitly for transport operators to submit route information INCLUDING BOOKING LINKS. This is the rare case where the asset already exists: src/data/cabs/routes.js is structured route data with origins, destinations, distances and times, which is exactly what the form asks for.',
    caution: 'It is a transport search engine, not a directory, and the listing must describe what we actually run. We are a taxi and private-cab operator on fixed routes — not a bus line with published schedules. Submit under Mode of Transport = Taxi and describe on-demand routes honestly; inventing a timetable to fit the form is how a listing gets pulled. Fares must match src/data/cabs/routes.js on the day of submission, not a figure typed from memory — directory-submissions.md records the period when off-site prices were stale by Rs5,600 a head.',
    evidence: 'Semrush Backlink Analytics 2026-08-27: AS 88, present in the chardhamtourism.co.in and makemytrip.com referring-domain exports in data/competitors/.',
    verified: '2026-08-27, opened in a browser because the site returns HTTP 403 to our crawler. /get-listed/ is live and headed "Listing for operators — Be seen by millions, for free". It states: "Transport operators and agencies: Provide reliable route and schedule information, including booking links... It is easy and free to get your transport data into Rome2Rio\'s search engine, either manually or via GTFS." Self-reported scale: 35M+ average monthly unique visitors, 50M+ monthly sessions, 746M searches a year, 20K+ transport operators. The submission form is on that page at #block_form and asks for company type, Mode of Transport (Bus / Train / Ferry / Flights / TAXI / N/A), an interest multi-select that includes "Have your services listed on Rome2Rio", and Region + Country (Asia / India). Support runs through help.rome2rio.com/en/support/tickets/new. NOT SUBMITTED — this register does not submit anything.',
    status: 'open',
  },
  {
    id: 'grokipedia',
    name: 'Grokipedia — Char Dham Yatra article citations',
    domain: 'grokipedia.com',
    url: 'https://grokipedia.com/page/Char_Dham_Yatra',
    submitUrl: null,
    category: 'citation',
    wants: 'quote',
    topical: 1, obtainable: 'relationship',
    target: '/char-dham-yatra',
    why: 'Authority Score 68 and it already links to five competitors. But the number that matters is on the article itself: the Char Dham Yatra page carries 142 external citations and cites sacredyatra.com ten times, euttaranchal.com seven, chardhamtour.in six, chardhamyatra.org five. We are cited zero times. This is the AI-citation surface the gate was built to take seriously — an AI encyclopedia deciding, in public and in a crawlable list, who the authorities on Char Dham are.',
    caution: 'NOT PITCHABLE, and treating it as an outreach target will waste a morning. Grokipedia is generated by xAI from crawled sources; there is no editor to email and no listing to submit. Articles carry a "Suggest Edit" button and the site has a "Suggest Article" control, both behind a sign-in — that is a correction mechanism, not a placement one, and suggesting an edit that inserts our own link is the kind of thing that gets an account ignored. The only durable route is to be the sort of source it already cites. Note what it cites: reference pages, not package pages. /char-dham-yatra-statistics and the distance and timing guides are the citable assets; /packages is not.',
    evidence: 'Semrush Backlink Analytics 2026-08-27: AS 68, present in the chardhamtourism.com, euttaranchal.com, makemytrip.com, shivaliktravels.com and thrillophilia.com referring-domain exports.',
    verified: '2026-08-27, opened in a browser because links:audit scored it 3/100 — the homepage is a bare search box with no topic vocabulary, which the crawler cannot see past. The site has real depth on this subject: 456 results for "Char Dham Yatra". /page/Char_Dham_Yatra was read and its outbound citations counted — 142 external links, top hosts sacredyatra.com (10), euttaranchal.com (7), chardhamtour.in (6), chardhamyatra.org (5), travelvaidya.com (5), uttarakhandtourism.gov.in (3). "Shiv Ganga" appears 0 times on that page. Worth noting as cross-validation: the two most-cited Char Dham sources, sacredyatra.com and chardhamyatra.org, are both already in this register from the same gap run — an independent system reached the same shortlist we did.',
    status: 'open',
  },
];

// ── Prospects we have deliberately refused ─────────────────────────────────
//
// Kept, rather than deleted, because the July plan listed most of them as
// "easy wins" and without this record someone re-adds them next quarter. The
// gate in quality.mjs rejects each of these on its own; this is the human note.
export const REFUSED = [
  { domain: 'talajalisco.gob.mx', why: 'Municipal government site in Jalisco, Mexico. A link to a Haridwar operator there means the site was compromised. Listed as an "easy directory submission" in SEMRUSH-ACTION-PLAN.md — it never was.' },
  { domain: 'blog-gold.com',      why: 'PBN. Same network as develop-blog.com and activoblog.com.' },
  { domain: 'develop-blog.com',   why: 'PBN.' },
  { domain: 'activoblog.com',     why: 'PBN.' },
  { domain: 'adlandpro.com',      why: 'Free-for-all classifieds and link farm.' },
  { domain: 'viesearch.com',      why: 'Web directory of the 2005 kind. Emits links, receives no readers.' },
  { domain: 'abc-directory.com',  why: 'Web directory.' },
  { domain: 'catalog.in',         why: 'Web directory.' },
  { domain: 'indiacatalog.com',   why: 'Web directory.' },
  { domain: 'loginslink.com',     why: 'Scraper. Republishes other sites’ content to host links.' },
  { domain: 'consumercomplaints.in', why: 'Complaint board. Puts the brand next to the word "complaint" in a SERP for the sake of a dofollow link.' },
  { domain: 'trustburn.com',      why: 'Complaint and review-dispute board. Same reasoning.' },
  { domain: 'goodfirms.co',       why: 'B2B software vendor directory. A pilgrimage operator listed among IT firms is a footprint, not a citation.' },
  { domain: 'salezshark.com',     why: 'CRM vendor blog. Off-topic placement with no editorial process.' },
  { domain: 'guestblognow.com',   why: 'Guest-post farm. Publishes anything, which is precisely why a link from it means nothing.' },
];

// ── Checked and found to be dead ends ──────────────────────────────────────
//
// The obvious play in this niche is to get added to a "best Char Dham tour
// operators" listicle. On 2026-08-27 the four highest-ranking ones were fetched
// and their outbound links extracted. **Not one links to any operator.**
//
//   holidify.com    links only to agents.holidify.com — its own lead-capture subdomain
//   yatrio.in       is itself an operator; the "top agents" list promotes yatrio
//   clanstays.com   outbound links are social share buttons and wa.me
//   travelsyatra.com  same — one wa.me link and nothing else
//
// The genre is not editorial. These pages are written by operators to rank for
// the term and funnel readers to themselves, and the rival operators they
// "recommend" are named in plain text with no href. Being added to one is a
// brand mention at best and usually not even that.
//
// This is worth knowing before anyone spends a week on outreach to them, and it
// is the reason the register leans on institutional listings and real press
// rather than the SERP for this term. Recorded so the next person does not run
// the same four fetches.
export const DEAD_ENDS = [
  { domain: 'holidify.com',     checked: '2026-08-27', why: 'Ranks #1 for "char dham travel agents". Links out to its own agents.holidify.com subdomain only — it is a lead-gen funnel, not a directory.' },
  { domain: 'yatrio.in',        checked: '2026-08-27', why: 'Its "best travel agent" page recommends itself. The only external links are uttarakhandtourism.gov.in and Wikipedia.' },
  { domain: 'clanstays.com',    checked: '2026-08-27', why: '"Best Char Dham travel agents 2026" with zero outbound operator links — social share buttons only.' },
  { domain: 'travelsyatra.com', checked: '2026-08-27', why: 'Same pattern. One wa.me link and nothing else.' },
];

export const getProspect = (id) => PROSPECTS.find((p) => p.id === id);
export const byStatus = (s) => PROSPECTS.filter((p) => p.status === s);
