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
};

// Ready-made phrases so pages do not each re-assemble the sentence.
for (const t of [YAMUNOTRI_TREK, KEDARNATH_TREK]) {
  t.pony.oneWayLabel        = `${t.pony.oneWay} one way`;
  t.pony.typicalOneWayInr   = inr(t.pony.typicalOneWay);
  if (t.pony.typicalRoundTrip) t.pony.typicalRoundTripInr = inr(t.pony.typicalRoundTrip);
}
KEDARNATH_TREK.palki.bandLabel = `${KEDARNATH_TREK.palki.band} per booking`;
KEDARNATH_TREK.palki.explained = `${KEDARNATH_TREK.palki.up} up, ${KEDARNATH_TREK.palki.withReturn} with a same-day return`;
KEDARNATH_TREK.weight.label    = `₹${KEDARNATH_TREK.weight.surchargePerSlab} for every ${KEDARNATH_TREK.weight.slabKg} kg over ${KEDARNATH_TREK.weight.freeKg} kg`;
// What a group of four saves by walking instead of riding, one way.
KEDARNATH_TREK.pony.groupOfFourSaves = band(4 * KEDARNATH_TREK.pony.lo, 4 * KEDARNATH_TREK.pony.hi);
