// ═══════════════════════════════════════════════════════════════
//  TREK RATES — pony / doli fares at the two trek dhams
//
//  Single source for the Yamunotri pony and doli figures. Before
//  21 Sep 2026 the same fare was quoted five different ways across
//  eight pages (₹1,200 · ₹1,200–1,800 · ₹1,800–2,500 · ₹1,800–3,000
//  · ₹2,000), which is exactly the kind of internal contradiction a
//  reader — or a rater — notices. Every page that mentions the
//  Yamunotri pony now reads from here.
//
//  The bands are what our groups paid at the Janki Chatti stand
//  through the 2026 season. The stand publishes a government rate
//  card each season and touts quote above it; the range covers
//  "card rate" to "what you actually pay in late May". Flip
//  RATES_VERIFIED once the founder has confirmed against a 2026
//  receipt, and bump the figures here — nowhere else — when the
//  2027 card comes out.
//
//  Kedarnath is NOT here yet. Its figures live on
//  /kedarnath-pony-palki-kandi-rates (the page with the fare
//  calculator) and are quoted by hand on ~6 other pages; moving
//  them is a separate, larger task.
// ═══════════════════════════════════════════════════════════════

export const RATES_VERIFIED = false; // flip once checked against a 2026 receipt

const inr = (n) => '₹' + n.toLocaleString('en-IN');

export const YAMUNOTRI_TREK = {
  km: 6,
  climbM: 641,
  from: 'Janki Chatti',
  bookedAt: 'the Janki Chatti stand, government rate card',

  pony: {
    oneWay:    '₹1,800–2,500',   // display band, one way
    roundTrip: '₹3,500–4,500',   // display band, both ways
    typicalOneWay:    2000,      // single figure for budget line items
    typicalRoundTrip: 4000,
  },

  doli: {
    oneWay:    '₹3,000–5,000',   // four porters; the option for anyone who cannot sit a pony
    roundTrip: '₹6,000–9,000',
  },
};

// Ready-made phrases so pages do not each re-assemble the sentence.
YAMUNOTRI_TREK.pony.oneWayLabel      = `${YAMUNOTRI_TREK.pony.oneWay} one way`;
YAMUNOTRI_TREK.pony.typicalOneWayInr = inr(YAMUNOTRI_TREK.pony.typicalOneWay);
YAMUNOTRI_TREK.pony.typicalRoundTripInr = inr(YAMUNOTRI_TREK.pony.typicalRoundTrip);
