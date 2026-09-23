// ═══════════════════════════════════════════════════════════════
//  TREK RATES — pony / palki / kandi fares at the two trek dhams
//
//  Single source for every pony, palki, doli and kandi figure on the
//  site. Before 21–22 Sep 2026 the Yamunotri pony was quoted five
//  ways across eight pages and the Kedarnath pony three ways across
//  ten, with the palki described as "one way" on three pages and
//  "round trip" on two — it is neither; it is priced per booking.
//  A reader comparing two of our own pages would catch it; so would
//  a rater. Every page that mentions a trek fare now reads from here.
//
//  KEDARNATH palki (dandi) and kandi figures are read off the Zila
//  Panchayat Rudraprayag's printed 2026 boards, which our team
//  photographed on the trail (added 23 Sep 2026) — every summary figure below is derived
//  from those two tables, not typed separately. The mule figures are
//  the District Magistrate's card (2024 notice, still in force) plus
//  the band pilgrims actually pay. YAMUNOTRI figures are what our
//  groups paid at the Janki Chatti stand through the 2026 season.
//
//  Touts quote above the printed rates. Bump the figures here —
//  nowhere else — when the 2027 boards go up.
// ═══════════════════════════════════════════════════════════════

// Dandi and kandi are now verified against the 2026 boards; the mule
// band (pony.lo/hi) still wants a 2026 receipt before this flips.
export const RATES_VERIFIED = false;

const inr  = (n) => '₹' + n.toLocaleString('en-IN');
const band = (lo, hi) => `₹${lo.toLocaleString('en-IN')}–${hi.toLocaleString('en-IN')}`;

// ── Yamunotri: 6 km from Janki Chatti, 641 m of climb ─────────────
export const YAMUNOTRI_TREK = {
  km: 6,
  climbM: 641,
  from: 'Janki Chatti',
  bookedAt: 'the Janki Chatti stand, government rate card',

  pony: {
    lo: 1800, hi: 2500,
    oneWay:    band(1800, 2500),     // one way
    roundTrip: band(3500, 4500),     // both ways
    typicalOneWay:    2000,          // single figure for budget line items
    typicalRoundTrip: 4000,
  },

  // Called doli or palki interchangeably at Yamunotri; four porters.
  doli: {
    lo: 4000, hi: 6000,
    oneWay:    band(4000, 6000),
    roundTrip: band(8000, 11000),
  },
};

// ── Kedarnath: Zila Panchayat Rudraprayag's 2026 boards ──────────
// Two printed boards headed "वर्ष 2026 के यात्राकाल के लिए गौरीकुण्ड से
// केदारनाथ पैदल मार्ग के लिए डण्डी (डोली) / कण्डी की दरें", photographed
// by our team on the route in the 2026 season. The photos are served at
// public/images/kedarnath-dandi-doli-rate-board-2026.jpg and
// public/images/kedarnath-kandi-rate-board-2026.jpg and shown on the
// rates page, so any figure here can be checked against the board.
//
// `totals` is the योग column — what the receipt shows. The board also
// prints the split: porters' wages (मजदूरी) + the fees below. Routes are
// reordered from the board (main legs first); every figure is as printed
// and every total was checked against its wages + fees.

const ZP_BOARD = {
  issuer: 'Zila Panchayat, Rudraprayag',
  season: 2026,
  licenceFee: 400,   // every mule owner, dandi/kandi porter and hawker needs a ZP licence
};

export const ZP_DANDI_2026 = {
  ...ZP_BOARD,
  photo: '/images/kedarnath-dandi-doli-rate-board-2026.jpg',
  arrangementFee: 600,   // व्यवस्था शुल्क
  dandiFee: 600,         // डण्डी शुल्क गद्दी सहित — the dandi itself, with its cushion
  // Passenger weight. The board prints the third slab as "75–90"; 75 kg
  // already sits in 61–75, so it is labelled 76–90 here.
  slabs: ['0–60 kg', '61–75 kg', '76–90 kg', '91–100 kg', '101–120 kg'],
  over120Extra: 2000,    // "120 किलो से अधिक" pays the 101–120 rate + ₹2,000
  // null = the cell is unreadable in our photo (a fold in the banner).
  routes: [
    { id: 'up',          from: 'Gaurikund', to: 'Kedarnath',                trip: 'One way',         km: 16, totals: [9200, 10200, 11200, 12200, 15200] },
    { id: 'down',        from: 'Kedarnath', to: 'Gaurikund',                trip: 'One way',         km: 16, totals: [8200,  9200, 10200, 11200, 14200] },
    { id: 'return',      from: 'Gaurikund', to: 'Kedarnath and back',       trip: 'Same day',        km: 32, totals: [15200, 16200, 17200, 18200, 21200] },
    { id: 'returnNight', from: 'Gaurikund', to: 'Kedarnath and back',       trip: 'With night halt', km: 32, totals: [17200, 18200, 19200, 20200, 23200] },
    { id: 'gkLincholi',  from: 'Gaurikund', to: 'Lincholi',                 trip: 'One way',         km: 12, totals: [8200,  9200, 10200, 11200, null] },
    { id: 'lincholiGk',  from: 'Lincholi',  to: 'Gaurikund',                trip: 'One way',         km: 12, totals: [7700,  8700,  9700, 10700, null] },
    { id: 'lincholiUp',  from: 'Lincholi',  to: 'Kedarnath',                trip: 'One way',         km: 4,  totals: [5700,  6700,  7700,  8700, 11700] },
    { id: 'lincholiDn',  from: 'Kedarnath', to: 'Lincholi',                 trip: 'One way',         km: 4,  totals: [5200,  6200,  7200,  8200, 11200] },
    { id: 'lincholiRet', from: 'Lincholi',  to: 'Kedarnath and back',       trip: 'Same day',        km: 8,  totals: [6700,  8200,  9200, 10200, 13200] },
  ],
};

// Kandi: a wicker basket on one porter's back. The board has two weight
// slabs and nothing above 50 kg — heavier passengers go by dandi.
export const ZP_KANDI_2026 = {
  ...ZP_BOARD,
  photo: '/images/kedarnath-kandi-rate-board-2026.jpg',
  arrangementFee: 500,
  slabs: ['Up to 25 kg', 'Up to 50 kg'],
  maxKg: 50,
  routes: [
    { id: 'up',          from: 'Gaurikund', to: 'Kedarnath',          trip: 'One way',         km: 16, totals: [6000, 8000] },
    { id: 'down',        from: 'Kedarnath', to: 'Gaurikund',          trip: 'One way',         km: 16, totals: [5000, 7000] },
    { id: 'return',      from: 'Gaurikund', to: 'Kedarnath and back', trip: 'Same day',        km: 32, totals: [8000, 12500] },
    { id: 'returnNight', from: 'Gaurikund', to: 'Kedarnath and back', trip: 'With night halt', km: 32, totals: [10500, 14500] },
    { id: 'gkLincholi',  from: 'Gaurikund', to: 'Lincholi',           trip: 'One way',         km: 12, totals: [5000, 7000] },
    { id: 'gkBhimbali',  from: 'Gaurikund', to: 'Bhimbali',           trip: 'One way',         km: 6,  totals: [4000, 5000] },
    { id: 'lincholiUp',  from: 'Lincholi',  to: 'Kedarnath',          trip: 'One way',         km: 4,  totals: [3500, 4000] },
    // The board lists Kedarnath → Lincholi twice: ₹4,000 in one row and
    // ₹3,500 in the other for the 50 kg slab. Both are kept.
    { id: 'lincholiDn',  from: 'Kedarnath', to: 'Lincholi',           trip: 'One way',         km: 4,  totals: [3000, 4000], alt50: 3500 },
    { id: 'bhimbaliDn',  from: 'Kedarnath', to: 'Bhimbali',           trip: 'One way',         km: 10, totals: [4000, 5000] },
  ],
};

const dandiRoute = (id) => ZP_DANDI_2026.routes.find((r) => r.id === id).totals;
const kandiRoute = (id) => ZP_KANDI_2026.routes.find((r) => r.id === id).totals;
const span = (totals) => { const t = totals.filter(Boolean); return band(Math.min(...t), Math.max(...t)); };

// ── Kedarnath: 16 km from Gaurikund, ~1,600 m of climb ────────────
export const KEDARNATH_TREK = {
  km: 16,
  climbM: 1600,
  from: 'Gaurikund',
  bookedAt: 'the Gaurikund and Sonprayag prepaid counters, printed receipt',

  pony: {
    lo: 3000, hi: 4500,
    oneWay:    band(3000, 4500),     // one way, either direction
    roundTrip: band(6000, 9000),     // two separate bookings
    typicalOneWay: 4000,             // single figure for budget line items
  },

  // Palki = dandi = doli: a seat on poles, four bearers. Priced by the
  // passenger's weight slab; a same-day return is one booking and
  // costs less than two one-way fares (the bearers wait at the top).
  // All from ZP_DANDI_2026, Gaurikund ↔ Kedarnath, 0–60 kg to 101–120 kg.
  palki: {
    lo: dandiRoute('up')[0], hi: dandiRoute('up')[4],
    up:         span(dandiRoute('up')),           // ₹9,200–15,200
    down:       span(dandiRoute('down')),         // ₹8,200–14,200
    withReturn: span(dandiRoute('return')),       // ₹15,200–21,200, same day
    nightHalt:  span(dandiRoute('returnNight')),  // ₹17,200–23,200
    band:       span(dandiRoute('up')),           // the honest one-line figure: one way up
  },

  // Kandi — a porter carrying you in a wicker basket; up to 50 kg only.
  kandi: {
    lo: kandiRoute('up')[0], hi: kandiRoute('up')[1],
    oneWay:    span(kandiRoute('up')),            // ₹6,000–8,000 up
    down:      span(kandiRoute('down')),          // ₹5,000–7,000
    roundTrip: span(kandiRoute('return')),        // ₹8,000–12,500, same day
    nightHalt: span(kandiRoute('returnNight')),   // ₹10,500–14,500
    maxKg: ZP_KANDI_2026.maxKg,
  },

  // Porter for bags only. Not on either board; what our groups paid.
  luggagePitthu: { oneWay: band(1000, 1500) },

  // The district's own printed card — the only primary source there is.
  // Rudraprayag DM, letter 34/यात्रा व्यवस्था सेल/2024-25, notified 26 Apr
  // 2024 and revised 16 May 2024. Each fare is the mule-owner fee plus a
  // ₹150 "vyavastha shulk" (arrangement fee); `total` is what the receipt
  // says. Ghoda/khachar only, one fare per leg — the card has no weight
  // slabs. Dandi and kandi are set separately by the Zila Panchayat (the
  // 2026 boards above). No 2025 or 2026 revision of this card has been
  // published anywhere on rudraprayag.gov.in as of 21 Sep 2026, so the
  // counters are still working from it; pony.lo/hi is what pilgrims
  // actually pay against it. Scanned copy kept at
  // seo/sources/rudraprayag-ghoda-khachar-rates-2024-05-16.pdf.
  officialCard: {
    season: 2024,
    issuer: 'District Magistrate, Rudraprayag',
    notice: 'Letter 34/Yatra Vyavastha Cell/2024-25, revised 16 May 2024',
    url: 'https://cdn.s3waas.gov.in/s3e6b4b2a746ed40e1af829d1fa82daa10/uploads/2024/05/2024051783.pdf',
    listingUrl: 'https://rudraprayag.gov.in/hi/document/%E0%A4%B8%E0%A5%8B%E0%A4%A8%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AF%E0%A4%BE%E0%A4%97-%E0%A4%97%E0%A5%8C%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%81%E0%A4%A3%E0%A5%8D%E0%A4%A1-%E0%A4%B8%E0%A5%87-%E0%A4%95-2/',
    arrangementFee: 150,
    legs: [
      { from: 'Sonprayag',           to: 'Kedarnath base camp', km: 19, total: 3500 },
      { from: 'Sonprayag',           to: 'Lincholi',            km: 16, total: 2500 },
      { from: 'Sonprayag',           to: 'Bhimbali',            km: 11, total: 1700 },
      { from: 'Sonprayag',           to: 'Gaurikund',           km: 5,  total: 1100 },
      { from: 'Gaurikund',           to: 'Kedarnath base camp', km: 14, total: 3200 },
      { from: 'Gaurikund',           to: 'Lincholi',            km: 11, total: 2400 },
      { from: 'Gaurikund',           to: 'Bhimbali',            km: 6,  total: 1200 },
      { from: 'Gaurikund',           to: 'Sonprayag',           km: 5,  total: 1000 },
      { from: 'Bhimbali',            to: 'Kedarnath base camp', km: 8,  total: 1800 },
      { from: 'Bhimbali',            to: 'Gaurikund',           km: 6,  total: 1200 },
      { from: 'Kedarnath base camp', to: 'Sonprayag',           km: 19, total: 2500 },
      { from: 'Kedarnath base camp', to: 'Gaurikund',           km: 14, total: 2300 },
      { from: 'Kedarnath base camp', to: 'Bhimbali',            km: 8,  total: 1300 },
      { from: 'Kedarnath base camp', to: 'Lincholi',            km: 3,  total: 1000 },
    ],
    // The three figures the page quotes in prose.
    gaurikundUp:   3200,
    gaurikundDown: 2300,
    sonprayagUp:   3500,
  },
};

// Ready-made phrases so pages do not each re-assemble the sentence.
for (const t of [YAMUNOTRI_TREK, KEDARNATH_TREK]) {
  t.pony.oneWayLabel        = `${t.pony.oneWay} one way`;
  t.pony.typicalOneWayInr   = inr(t.pony.typicalOneWay);
  if (t.pony.typicalRoundTrip) t.pony.typicalRoundTripInr = inr(t.pony.typicalRoundTrip);
}
KEDARNATH_TREK.officialCard.gaurikundUpInr   = inr(KEDARNATH_TREK.officialCard.gaurikundUp);
KEDARNATH_TREK.officialCard.gaurikundDownInr = inr(KEDARNATH_TREK.officialCard.gaurikundDown);
KEDARNATH_TREK.officialCard.sonprayagUpInr   = inr(KEDARNATH_TREK.officialCard.sonprayagUp);
KEDARNATH_TREK.palki.bandLabel = `${KEDARNATH_TREK.palki.band} one way, by weight`;
KEDARNATH_TREK.palki.explained = `${KEDARNATH_TREK.palki.up} up by weight, ${KEDARNATH_TREK.palki.withReturn} for a same-day return`;
KEDARNATH_TREK.palki.slabLabel = `five passenger-weight slabs from ${ZP_DANDI_2026.slabs[0]} to ${ZP_DANDI_2026.slabs[4]}, plus ${inr(ZP_DANDI_2026.over120Extra)} above 120 kg`;
// What a group of four saves by walking instead of riding, one way.
KEDARNATH_TREK.pony.groupOfFourSaves = band(4 * KEDARNATH_TREK.pony.lo, 4 * KEDARNATH_TREK.pony.hi);
