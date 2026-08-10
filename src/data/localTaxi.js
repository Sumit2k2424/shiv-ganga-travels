// ═══════════════════════════════════════════════════════════════
//  LOCAL HARIDWAR TAXI / TRANSFER DATA
//  Single source of truth for the local-service pages:
//    /taxi-service-in-haridwar
//    /haridwar-to-delhi-taxi
//    /haridwar-to-rishikesh-taxi
//    /dehradun-airport-to-haridwar-taxi
//
//  ⚠️  RATES ARE THE ONE THING YOU MUST CONFIRM BEFORE DEPLOY.
//  They were set from an August 2026 survey of the operators currently
//  ranking (Rajputana Cabs, taxiinharidwar.com, taxiserviceinharidwar.com,
//  haridwarcarrentals.com) and positioned just under aggregator pricing,
//  which is the direct-operator argument. They are NOT your quoted rates
//  until you say they are. Edit this file — every page re-renders.
//
//  A wrong price on a live page costs a booking and a review. Check it.
// ═══════════════════════════════════════════════════════════════

export const RATES_VERIFIED = false; // flip to true once you've checked every number

// ── Local hire fleet — the 8 hr / 80 km day-rate standard ──────
export const FLEET = [
  { id:'dzire',  name:'Swift Dzire',    type:'Sedan',           seats:4,
    local8:1600, extraKm:13, extraHr:150, outstationKm:12,
    note:'Couples and small families. Boot fits two large suitcases, not four.' },
  { id:'ertiga', name:'Maruti Ertiga',  type:'MUV',             seats:6,
    local8:2300, extraKm:16, extraHr:180, outstationKm:15,
    note:'The sweet spot for a family of five with luggage.' },
  { id:'innova', name:'Toyota Innova',  type:'SUV',             seats:6,
    local8:2800, extraKm:18, extraHr:200, outstationKm:17,
    note:'Older body style, same engine reliability. Cheaper than the Crysta.' },
  { id:'crysta', name:'Innova Crysta',  type:'Premium SUV',     seats:6,
    local8:3200, extraKm:21, extraHr:250, outstationKm:20,
    note:'What we send on hill routes with senior passengers.' },
  { id:'tt12',   name:'Tempo Traveller 12-seat', type:'Tempo',  seats:12,
    local8:4500, extraKm:26, extraHr:300, outstationKm:24,
    note:'Group yatra standard. Push-back seats, roof carrier.' },
  { id:'tt17',   name:'Tempo Traveller 17-seat', type:'Tempo',  seats:17,
    local8:5500, extraKm:30, extraHr:350, outstationKm:28,
    note:'Extended families and temple groups.' },
];

// ── Fixed-price transfers (one-way drop, all-inclusive) ────────
// Inclusive of toll, state tax, parking and driver allowance.
export const TRANSFERS = {
  'haridwar-delhi': {
    from:'Haridwar', to:'Delhi', km:210, hours:'5–6 hrs',
    highway:'NH-334 to Roorkee, then NH-58 via Muzaffarnagar & Meerut',
    fares:{ dzire:3800, ertiga:5200, innova:5900, crysta:6500, tt12:9500, tt17:11500 },
  },
  'haridwar-rishikesh': {
    from:'Haridwar', to:'Rishikesh', km:25, hours:'40–55 min',
    highway:'NH-34 via Raiwala and Shyampur',
    fares:{ dzire:900, ertiga:1300, innova:1500, crysta:1600, tt12:2400, tt17:2900 },
  },
  'airport-haridwar': {
    from:'Jolly Grant Airport (DED)', to:'Haridwar', km:35, hours:'50–70 min',
    highway:'NH-7 via Doiwala and Raiwala',
    fares:{ dzire:1200, ertiga:1600, innova:1800, crysta:1900, tt12:2800, tt17:3400 },
  },
};

// ── Local sightseeing circuits (within the 8 hr / 80 km day) ───
export const CIRCUITS = [
  { name:'Haridwar Temple Circuit', hours:'5–6 hrs', km:'~45 km',
    stops:['Har Ki Pauri','Mansa Devi (ropeway base)','Chandi Devi (ropeway base)','Daksh Mahadev, Kankhal','Maya Devi'],
    note:'The standard darshan day. Ropeway tickets are not included — buy at the counter.' },
  { name:'Haridwar + Rishikesh', hours:'8–9 hrs', km:'~95 km',
    stops:['Har Ki Pauri','Mansa Devi','Ram Jhula','Lakshman Jhula','Triveni Ghat','Parmarth Niketan aarti'],
    note:'Crosses the 80 km slab. Expect the extra-km charge on the bill — we tell you before you leave.' },
  { name:'Ashram & Ghat Circuit', hours:'4–5 hrs', km:'~30 km',
    stops:['Shantikunj','Patanjali Yogpeeth','Bharat Mata Mandir','Sapt Rishi Ashram','Har Ki Pauri'],
    note:'Popular with pilgrims staying a few days. Our office is on this route.' },
  { name:'Rajaji National Park Half Day', hours:'5 hrs', km:'~60 km',
    stops:['Chilla gate','Safari drop and pickup','Return via Rishikesh road'],
    note:'Safari permit and gypsy are booked separately through the forest department.' },
];

// ── Har Ki Pauri Ganga Aarti — seasonal timings ────────────────
// Performed by Shri Ganga Sabha at Brahmakund. Times track sunrise
// and sunset, so they shift through the year.
export const AARTI = [
  { season:'Summer (Apr–Sep)', morning:'5:30 AM', evening:'6:30 PM' },
  { season:'Winter (Oct–Mar)', morning:'6:30 AM', evening:'5:30 PM' },
];

// ── Helpers ───────────────────────────────────────────────────
export const fleetById = id => FLEET.find(v => v.id === id);

export const transferRows = key =>
  Object.entries(TRANSFERS[key].fares).map(([id, fare]) => {
    const v = fleetById(id);
    return { id, name:v.name, seats:v.seats, fare };
  });

export const cheapestFare = key => Math.min(...Object.values(TRANSFERS[key].fares));

export const inr = n => '₹' + n.toLocaleString('en-IN');
