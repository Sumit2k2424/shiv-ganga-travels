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
//  KEDARNATH figures are the /kedarnath-pony-palki-kandi-rates table
//  (founder-voice rewrite, 19 Sep 2026) and the fare calculator's
//  bases; that page reads from here too, so it cannot drift from
//  itself. YAMUNOTRI figures are what our groups paid at the Janki
//  Chatti stand through the 2026 season.
//
//  The stands publish a government rate card each season and touts
//  quote above it; each band runs from "card rate" to "what you
//  actually pay in late May". Flip RATES_VERIFIED once the founder
//  has confirmed against a 2026 receipt, and bump the figures here —
//  nowhere else — when the 2027 card comes out.
// ═══════════════════════════════════════════════════════════════

export const RATES_VERIFIED = false; // flip once checked against a 2026 receipt

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
    calcBase: 3300,                  // KedarnathFareCalc starting point
  },

  // A palki (dandi) is priced PER BOOKING, not per leg: the four
  // bearers either drop you at the top or wait and bring you down.
  palki: {
    lo: 8000, hi: 12000,
    up:         band(8000, 9200),    // up only
    withReturn: 'about ₹12,000',     // up + same-day return, one booking
    band:       band(8000, 12000),   // the honest one-line figure
    calcBase: 9000,
  },

  // Kandi / pitthu — a porter carrying you in a wicker basket.
  kandi: {
    lo: 3500, hi: 5000,
    oneWay:    band(3500, 5000),
    roundTrip: band(7000, 9000),
    calcBase: 4200,
  },

  luggagePitthu: { oneWay: band(1000, 1500) },   // porter for bags only

  weight: { freeKg: 75, slabKg: 15, surchargePerSlab: 200 },

  // The district's own printed card — the only primary source there is.
  // Rudraprayag DM, letter 34/यात्रा व्यवस्था सेल/2024-25, notified 26 Apr
  // 2024 and revised 16 May 2024. Each fare is the mule-owner fee plus a
  // ₹150 "vyavastha shulk" (arrangement fee); `total` is what the receipt
  // says. Ghoda/khachar only — dandi and kandi are set separately by the
  // Zila Panchayat and that notice has not been found online. No 2025 or
  // 2026 revision has been published anywhere on rudraprayag.gov.in as of
  // 21 Sep 2026, so the counters are still working from this card; the
  // bands above are what pilgrims actually pay against it. Scanned copy
  // kept at seo/sources/rudraprayag-ghoda-khachar-rates-2024-05-16.pdf.
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
      { from: 'Bhimbali',            to: 'Kedarnath base camp', km: 8,  total: 1800 },
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
KEDARNATH_TREK.palki.bandLabel = `${KEDARNATH_TREK.palki.band} per booking`;
KEDARNATH_TREK.palki.explained = `${KEDARNATH_TREK.palki.up} up, ${KEDARNATH_TREK.palki.withReturn} with a same-day return`;
KEDARNATH_TREK.weight.label    = `₹${KEDARNATH_TREK.weight.surchargePerSlab} for every ${KEDARNATH_TREK.weight.slabKg} kg over ${KEDARNATH_TREK.weight.freeKg} kg`;
// What a group of four saves by walking instead of riding, one way.
KEDARNATH_TREK.pony.groupOfFourSaves = band(4 * KEDARNATH_TREK.pony.lo, 4 * KEDARNATH_TREK.pony.hi);
