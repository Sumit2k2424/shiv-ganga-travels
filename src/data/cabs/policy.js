// ══════════════════════════════════════════════════════════════
//  CAB POLICY — what the fare covers, what it doesn't, and the
//  rules of the road on Uttarakhand hill routes.
// ══════════════════════════════════════════════════════════════
//  Written once, rendered on every cab page. Almost no operator in
//  this market publishes exclusions or a cancellation policy at all
//  — stating them plainly is the cheapest trust we can buy, and it
//  cuts the "but you never told me about tolls" call entirely.

export const FARE_INCLUDES = [
  'Fuel for the whole journey',
  'Driver charges, his food and his night halt',
  'All tolls, state border taxes and green tax',
  'Parking at temples and viewpoints',
  'Green Card and trip permit for hill routes',
  'Oxygen cylinder on board above 2,500 m',
  'Basic first-aid kit',
  'GST',
];

export const FARE_EXCLUDES = [
  'Your hotel or lodge — we can book it, billed separately',
  'Meals for passengers',
  'Pony, palki, porter or helicopter charges',
  'Temple pujas, VIP darshan or aarti tickets',
  'Anything caused by a landslide, roadblock or weather halt beyond the planned days',
  'AC in the hills — ₹2,000 extra if you want it running above the valleys',
];

export const EXTRAS = [
  { label: 'Night driving (after 10 PM in the plains)', value: '₹300 per night' },
  { label: 'Extra km beyond the quoted route', value: 'Charged at the vehicle per-km rate' },
  { label: 'Extra day if you extend the trip', value: 'Quoted before it starts, never after' },
  { label: 'AC running in hill sections', value: '₹2,000 for the trip' },
];

export const CANCELLATION = {
  headline: 'Cancel free up to 48 hours before pickup.',
  rows: [
    ['More than 48 hours before pickup', 'Full refund of anything paid'],
    ['24–48 hours before pickup', '50% of the advance retained'],
    ['Under 24 hours, or no-show', 'Advance retained'],
    ['Cancelled by us, or road closed by administration', 'Full refund, or reschedule at no charge'],
  ],
  note: 'We do not take payment online. Most bookings run on a small advance over UPI and the balance to the driver at the end of the trip, so there is rarely anything to refund.',
};

// Each rule carries an `appliesTo` predicate so a page only shows the rules
// that actually govern its journey. Before this, all four rendered on every
// cab page — so /cabs/to/gangotri and /cabs/from/ghaziabad both explained the
// Sonprayag–Gaurikund shuttle, which has nothing to do with either. Beyond
// being wrong, it was ~250 words of identical text on all 30 cab pages, and
// that sameness is a large part of why Google discovered them and declined to
// crawl. Context: { terrain, destination, dham }.
// Auli and Chopta are not dhams, but they sit on the Garhwal Char Dham corridor
// — Auli above Joshimath on the Badrinath road, Chopta on the Ukhimath–Kedarnath
// road — so the Char Dham road regulations do govern the drive to them. Nainital,
// Mukteshwar and Mussoorie are hill stations off that corridor, where quoting
// Char Dham rules would be simply wrong.
const CHAR_DHAM_CORRIDOR = ['auli', 'chopta'];
const onCharDhamRoad = (c) => Boolean(c.dham || CHAR_DHAM_CORRIDOR.includes(c.destination));

export const ROAD_RULES = [
  {
    id: 'night-driving',
    title: 'No night driving on hill routes',
    body: 'Vehicle movement on the Char Dham roads is banned between 10 PM and 4 AM by the district administration. We plan every pickup so you reach your halt in daylight — anyone promising to drive you through the night is planning to be stopped at a checkpost.',
    appliesTo: (c) => c.terrain === 'hills' && onCharDhamRoad(c),
  },
  {
    id: 'green-card',
    title: 'Green Card and trip card',
    body: 'Every commercial vehicle on a Char Dham route needs a Green Card (a fitness certificate specific to hill driving) plus a trip card for the journey. Ours are current on every vehicle we send. Without them you get turned back, usually at Rishikesh or Sonprayag.',
    appliesTo: (c) => c.terrain === 'hills' && onCharDhamRoad(c),
  },
  {
    id: 'hill-driving',
    title: 'Mountain roads, not highway hours',
    body: 'This is a hill run outside the Char Dham corridor, so none of the yatra paperwork applies. What does apply is arithmetic: average speed on these roads is 25–30 km/h, not the 60 a map will assume, and the last stretch is single-lane in places. We quote the honest driving time rather than the optimistic one.',
    appliesTo: (c) => c.terrain === 'hills' && !onCharDhamRoad(c),
  },
  {
    id: 'biometric',
    title: 'Yatra biometric registration',
    body: 'All four dhams need a biometric registration before darshan. It is free and done online at registrationandtouristcare.uk.gov.in, or at the counters in Haridwar and Rishikesh. We do it for you as part of the booking if you send us your ID details.',
    appliesTo: (c) => c.dham,
  },
  {
    id: 'sonprayag-shuttle',
    title: 'Sonprayag–Gaurikund is a shuttle',
    body: 'Private vehicles stop at Sonprayag. The last 5 km to Gaurikund runs on a timed one-way shuttle with slots assigned by the police. Your driver parks at Sonprayag and waits — the main luggage stays with the vehicle.',
    appliesTo: (c) => c.destination === 'kedarnath',
  },
  {
    id: 'plains-run',
    title: 'Plains runs are a different job',
    body: 'Nothing above the valleys applies on this stretch — no Green Card, no night-driving ban, no yatra registration. It is an expressway run, so the variables that matter are toll charges, which are included, and the pickup window you choose.',
    appliesTo: (c) => c.terrain !== 'hills' && !c.dham,
  },
];

/**
 * The rules that actually govern a given journey. Falls back to the two
 * universal hill rules if a caller passes no context, so a bare <RoadRules />
 * still renders something sensible.
 */
export function roadRulesFor(ctx = {}) {
  const hit = ROAD_RULES.filter((r) => r.appliesTo(ctx));
  return hit.length ? hit : ROAD_RULES.filter((r) => r.id === 'night-driving' || r.id === 'green-card');
}

// Business identity — the Organization-level trust block rendered at
// the foot of every cab page. Values mirror SITE in data/packages.js.
export const OPERATOR = {
  legalName: 'Shiv Ganga Travels',
  since: 2010,
  role: 'Direct operator — our own vehicles and our own drivers, no broker in between',
  credentials: [
    'Registered travel operator based in Haridwar since 2010',
    'Own fleet — Innova Crysta, Ertiga, Tempo Traveller, Scorpio',
    'Every vehicle carries a current Green Card and trip permit',
    'Drivers who run the Garhwal routes year-round, not seasonal hires',
  ],
};
