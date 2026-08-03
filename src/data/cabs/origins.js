// ══════════════════════════════════════════════════════════════
//  ORIGINS — cities we pick up from
// ══════════════════════════════════════════════════════════════
//  Adding a whole new region is one entry in REGIONS plus one entry
//  per city here. No template work, no component changes.
//
//  An origin only gets a landing page once it has `intro`,
//  `pickupPoints` and `faqs` filled in AND at least one publishable
//  route pointing out of it — see isOriginPublishable() in index.js.
//  That gate is what keeps a growing city list from turning into
//  a field of thin pages.

export const REGIONS = [
  { id: 'uttarakhand', label: 'Uttarakhand', blurb: 'Our home bases — vehicles and drivers stationed here year-round.' },
  { id: 'delhi-ncr',   label: 'Delhi NCR',   blurb: 'Doorstep pickup across the capital region, straight through to Haridwar and the hills.' },
  { id: 'rajasthan',   label: 'Rajasthan',   blurb: 'Long-haul transfers and full-circuit yatra vehicles from the Rajasthan cities.' },
];

export const ORIGINS = [
  // ───────────────── UTTARAKHAND ─────────────────
  {
    slug: 'haridwar',
    name: 'Haridwar',
    region: 'uttarakhand',
    state: 'Uttarakhand',
    isBase: true,
    intro: 'Haridwar is where we are based — our office is on Saptrishi Road near Shantikunj, and our vehicles park here between trips. That matters more than it sounds: a cab booked from Haridwar starts from a garage ten minutes away rather than being repositioned overnight from another city, which is why our fares from here are the lowest of any of our pickup points. It is also the natural starting gate for the Char Dham circuit, so almost every route we run either begins here or passes through.',
    pickupPoints: [
      ['Haridwar Railway Station', 'Two minutes from the taxi stand. Send us your train number and the driver waits on the platform-side exit with a name board.'],
      ['Har Ki Pauri / Bara Bazaar', 'Vehicles cannot enter the ghat lanes — we pick up at Upper Road, a two-minute walk from the aarti steps.'],
      ['Bhupatwala & Shantikunj', 'Our own neighbourhood. Doorstep pickup from any ashram or hotel here.'],
      ['Roorkee & Jwalapur', 'Within our no-extra-charge pickup radius.'],
    ],
    localRuns: [
      ['Haridwar local sightseeing (8 hrs / 80 km)', 'Har Ki Pauri, Mansa Devi, Chandi Devi, Daksh Temple, Bharat Mata Mandir'],
      ['Haridwar–Rishikesh day trip', 'Both cities, Ram Jhula, Laxman Jhula, Beatles Ashram, evening aarti'],
      ['Airport transfer — Jolly Grant', '35 km, about an hour and a quarter'],
    ],
    faqs: [
      ['Where do you pick up from in Haridwar?', 'Anywhere in the city at no extra charge — railway station, bus stand, any hotel or ashram, including Bhupatwala, Jwalapur and Roorkee. For station pickups send us your train number and the driver meets you with a name board.'],
      ['Is it cheaper to book a cab from Haridwar than from Delhi or Dehradun?', 'Yes, noticeably. Our vehicles are stationed in Haridwar, so there is no repositioning cost built into the fare. On a Kedarnath run the difference against a Delhi start is usually ₹2,500–₹3,500.'],
      ['Can I book a cab in Haridwar for just one day of local sightseeing?', 'Yes. An 8-hour, 80 km local package covers Har Ki Pauri, Mansa Devi, Chandi Devi and Daksh Temple, and can be extended to Rishikesh for the evening aarti.'],
      ['Do you have an actual office in Haridwar?', 'We do — Saptrishi Road, near Shantikunj Gate No. 1, Bhupatwala. You are welcome to come and see the vehicles before you book, which is not something an app can offer you.'],
    ],
  },
  {
    slug: 'rishikesh',
    name: 'Rishikesh',
    region: 'uttarakhand',
    state: 'Uttarakhand',
    isBase: true,
    intro: 'Rishikesh sits 25 km up the road from Haridwar and is where the Char Dham highway properly begins — every dham route passes through it. Most of our Rishikesh bookings come from travellers already here for a yoga course or a few days of rafting, who then want to carry on into the mountains rather than backtrack. Starting from Rishikesh instead of Haridwar shaves roughly 25 km and half an hour off every hill route.',
    pickupPoints: [
      ['Ram Jhula & Swarg Ashram', 'Pickup at the Ram Jhula parking; vehicles cannot cross the bridge.'],
      ['Laxman Jhula & Tapovan', 'Doorstep pickup from any Tapovan guesthouse or yoga school.'],
      ['Rishikesh Railway Station & Yoganagari (Rishikesh) Station', 'Both covered — tell us which one your train arrives at, they are 6 km apart.'],
      ['Muni Ki Reti & Shivpuri', 'Standard pickup, including the rafting camps upriver.'],
    ],
    localRuns: [
      ['Rishikesh local sightseeing (8 hrs / 80 km)', 'Ram Jhula, Laxman Jhula, Beatles Ashram, Trimbakeshwar, Neelkanth Mahadev'],
      ['Neelkanth Mahadev return', '32 km each way through the forest road'],
      ['Rishikesh–Haridwar evening aarti trip', 'Down for the Har Ki Pauri aarti and back'],
    ],
    faqs: [
      ['Should I start my Char Dham cab from Rishikesh or Haridwar?', 'Whichever city you are already in. Rishikesh is about 25 km closer to every dham, but the routes merge at Devprayag anyway, so the saving is half an hour rather than anything structural.'],
      ['Can you pick up from a yoga ashram in Tapovan?', 'Yes, doorstep. The narrow lanes above Laxman Jhula are the one exception — there we meet you at the nearest point a vehicle can turn, usually a two-minute walk.'],
      ['Which Rishikesh railway station do you pick up from?', 'Both. The old Rishikesh station and the newer Yoganagari Rishikesh station are 6 km apart and trains use both, so tell us the station name on your ticket.'],
    ],
  },
  {
    slug: 'dehradun',
    name: 'Dehradun',
    region: 'uttarakhand',
    state: 'Uttarakhand',
    isBase: true,
    intro: 'Dehradun matters for one reason above all others: Jolly Grant is the nearest airport to the whole Char Dham circuit. Fly in, and the yatra can start in the arrivals hall rather than after a night in Delhi. Dehradun adds roughly 40 km over a Rishikesh start on the dham routes, and it is also the shortest hop to Mussoorie in the entire state — 35 km, about an hour up Rajpur Road.',
    pickupPoints: [
      ['Jolly Grant Airport (DED)', 'We time the pickup to your flight and track delays. 20 km from the city, 35 km from Haridwar.'],
      ['Dehradun Railway Station & ISBT', 'Both standard, no extra charge.'],
      ['Rajpur Road, Clement Town, Sahastradhara Road', 'Doorstep pickup anywhere in the city.'],
    ],
    localRuns: [
      ['Dehradun local sightseeing (8 hrs / 80 km)', 'Robber’s Cave, Sahastradhara, Tapkeshwar, Mindrolling Monastery, FRI'],
      ['Dehradun–Mussoorie day trip', '35 km up, Kempty Falls and Mall Road, back by evening'],
      ['Airport transfer — Jolly Grant to city or Mussoorie', '20 km / 60 km'],
    ],
    faqs: [
      ['Do you pick up from Jolly Grant airport?', 'Yes, and it is one of our most common bookings. Send your flight number when you book — we track the arrival and the driver is at the exit with a name board, including on delayed flights.'],
      ['Can I fly into Dehradun and start the Char Dham the same day?', 'Yes, if you land in the morning. An afternoon landing means you will be driving into the 10 PM hill curfew, so we would put you at Rishikesh or Guptkashi for the night and start properly the next morning.'],
      ['How far is Mussoorie from Dehradun by cab?', 'Just 35 km, about an hour up Rajpur Road — the quickest way into the hills anywhere in Uttarakhand. From Jolly Grant it is 60 km, roughly two hours.'],
    ],
  },

  // ───────────────── DELHI NCR ─────────────────
  {
    slug: 'delhi',
    name: 'Delhi',
    region: 'delhi-ncr',
    state: 'Delhi',
    intro: 'Delhi is where most Char Dham trips actually begin, because it is where the flights and the long-distance trains land. The run up to Haridwar is 210 km of good highway — the Delhi–Meerut Expressway and then NH334 — and takes four to five hours if you leave early enough to clear Ghaziabad before the morning build-up. Plenty of our Delhi bookings are not just the transfer: we pick up in Delhi, run the entire yatra, and drop back in Delhi with the same vehicle and driver throughout.',
    pickupPoints: [
      ['IGI Airport — all three terminals', 'Flight tracked; driver at the arrivals gate with a name board.'],
      ['New Delhi, Hazrat Nizamuddin & Anand Vihar stations', 'Standard pickup, no extra charge.'],
      ['Any Delhi address', 'Doorstep, including South Delhi, Dwarka, Rohini and the Ring Road hotels.'],
    ],
    faqs: [
      ['How long does the Delhi to Haridwar cab take?', 'Four to five hours for 210 km via the Delhi–Meerut Expressway and NH334. Leave by 5 AM and you will be in Haridwar for a late breakfast; leave at 9 AM on a Friday and it can stretch past six hours.'],
      ['Can you pick up from Delhi airport for the Char Dham Yatra?', 'Yes, and it is the cleanest way to do it. We meet your flight, drive to Haridwar or straight on to the first halt, and the same vehicle and driver stay with you for the whole circuit and bring you back to Delhi.'],
      ['Is it cheaper to take a cab to Haridwar or the train, then a cab from there?', 'The train plus a Haridwar cab is cheaper if you are two people. From four upwards a direct Delhi cab usually wins on both cost and hassle, because you are not moving luggage twice.'],
    ],
  },
  {
    slug: 'noida',
    name: 'Noida',
    region: 'delhi-ncr',
    state: 'Uttar Pradesh',
    intro: 'Noida and Greater Noida sit on the right side of the city for this trip — you join the Delhi–Meerut Expressway without crossing central Delhi, which is worth a good forty minutes against a South Delhi start. It is 235 km to Haridwar, five to six hours depending on where in Noida you begin. We run the full Char Dham circuit from here too, picking up and dropping at your door.',
    pickupPoints: [
      ['All Noida sectors', 'Doorstep pickup, Sector 1 through 168.'],
      ['Greater Noida & Noida Extension', 'Covered at the same fare.'],
      ['Noida–Greater Noida Expressway hotels', 'Standard pickup.'],
    ],
    faqs: [
      ['How far is Haridwar from Noida by cab?', 'About 235 km, five to six hours via the Delhi–Meerut Expressway and NH334. From Greater Noida add roughly half an hour.'],
      ['Do you charge extra to pick up from Noida rather than Delhi?', 'A small amount — Noida is slightly further from Haridwar than central Delhi. It is quoted upfront, not added afterwards.'],
    ],
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    region: 'delhi-ncr',
    state: 'Haryana',
    intro: 'Gurugram is the longest of the NCR starts at around 245 km, because you cross the whole city before you are pointed the right way. The saving grace is that an early departure — before six — clears the Dhaula Kuan and Ghaziabad stretches while they are still empty, and the rest is expressway. Five to six hours in practice.',
    pickupPoints: [
      ['All Gurugram sectors, DLF phases and Golf Course Road', 'Doorstep pickup.'],
      ['Cyber City & Udyog Vihar hotels', 'Standard pickup.'],
      ['Manesar & Sohna Road', 'Covered.'],
    ],
    faqs: [
      ['How long is the Gurugram to Haridwar drive?', 'Around 245 km and five to six hours. Crossing Delhi is the variable — a 5 AM start makes it five hours, a 9 AM start can make it seven.'],
      ['Can you pick up from Gurugram for the full Char Dham Yatra?', 'Yes. Same vehicle and driver from your door in Gurugram through the whole circuit and back.'],
    ],
  },
  {
    slug: 'ghaziabad',
    name: 'Ghaziabad',
    region: 'delhi-ncr',
    state: 'Uttar Pradesh',
    intro: 'Ghaziabad is the closest NCR city to Haridwar — 195 km, four to five hours, and you are on the Delhi–Meerut Expressway within minutes of leaving. For anyone in Indirapuram, Vaishali or Raj Nagar it is the easiest start in the whole region, and the fare reflects the shorter distance.',
    pickupPoints: [
      ['Indirapuram, Vaishali, Vasundhara, Kaushambi', 'Doorstep pickup.'],
      ['Raj Nagar Extension & Crossings Republik', 'Covered.'],
      ['Ghaziabad Junction railway station', 'Standard pickup.'],
    ],
    faqs: [
      ['How far is Haridwar from Ghaziabad?', 'About 195 km, four to five hours via the Delhi–Meerut Expressway and NH334. It is the shortest run to Haridwar of any NCR city.'],
    ],
  },

  // ───────────────── RAJASTHAN ─────────────────
  {
    slug: 'jaipur',
    name: 'Jaipur',
    region: 'rajasthan',
    state: 'Rajasthan',
    intro: 'Jaipur sends a steady stream of pilgrims to the Char Dham every season, and the honest way to do it by road is a single long day to Haridwar — 470 km, eight to nine hours on NH48 and NH334 through Alwar and Roorkee — with the yatra proper starting the next morning. We do not pretend a Jaipur-to-Kedarnath one-way drop is a sensible booking; what works is a vehicle and driver that pick you up in Jaipur and stay with you for the whole circuit and back.',
    pickupPoints: [
      ['Jaipur International Airport', 'Flight tracked, name board at arrivals.'],
      ['Jaipur Junction & Gandhi Nagar stations', 'Standard pickup.'],
      ['Any Jaipur address', 'Doorstep, including Vaishali Nagar, Malviya Nagar, C-Scheme and Tonk Road.'],
    ],
    faqs: [
      ['How far is Haridwar from Jaipur by road?', 'About 470 km, eight to nine hours via NH48 and NH334 through Alwar and Roorkee. It is a comfortable single day if you leave by 5 AM.'],
      ['Can I book one vehicle in Jaipur for the whole Char Dham Yatra?', 'Yes, and for a Rajasthan start it is the sensible option. One vehicle, one driver, Jaipur to Jaipur — usually 12 to 14 days including the drive at both ends.'],
      ['Is it better to fly or drive from Jaipur for the Char Dham?', 'Flying to Dehradun and picking the vehicle up at Jolly Grant saves two full days of driving. Driving makes sense if you are a group of six or more, where the flight cost outweighs the extra days.'],
    ],
  },
  {
    slug: 'ajmer',
    name: 'Ajmer',
    region: 'rajasthan',
    state: 'Rajasthan',
    intro: 'Ajmer to Haridwar is a long haul — around 600 km and ten to eleven hours via Jaipur and Alwar — so almost nobody books it as a plain one-way drop. What people do book, and what we run regularly, is a full-circuit vehicle from Ajmer or Pushkar that handles the drive up, the entire Char Dham, and the drive home.',
    pickupPoints: [
      ['Ajmer Junction railway station', 'Standard pickup.'],
      ['Pushkar', 'Covered at the same fare, 15 km from Ajmer.'],
      ['Any Ajmer address', 'Doorstep pickup.'],
    ],
    faqs: [
      ['How long does it take to drive from Ajmer to Haridwar?', 'Around 600 km and ten to eleven hours via Jaipur and Alwar. Most groups break it with a night at Jaipur or Haridwar rather than pushing straight into the hills.'],
    ],
  },
  {
    slug: 'jodhpur',
    name: 'Jodhpur',
    region: 'rajasthan',
    state: 'Rajasthan',
    intro: 'Jodhpur is roughly 800 km from Haridwar, which puts it firmly in full-circuit-package territory rather than point-to-point cab territory. We run Jodhpur pickups as part of complete Char Dham bookings, with a night at Jaipur or Delhi on the way up.',
    pickupPoints: [
      ['Jodhpur Airport & railway station', 'Standard pickup.'],
      ['Any Jodhpur address', 'Doorstep pickup.'],
    ],
    faqs: [],
  },
  {
    slug: 'udaipur',
    name: 'Udaipur',
    region: 'rajasthan',
    state: 'Rajasthan',
    intro: 'Udaipur is about 900 km from Haridwar. As with Jodhpur, the workable product is a full-circuit vehicle rather than a one-way transfer — we pick up in Udaipur, break the drive, run the yatra and bring you home.',
    pickupPoints: [
      ['Maharana Pratap Airport & Udaipur City station', 'Standard pickup.'],
      ['Any Udaipur address', 'Doorstep pickup.'],
    ],
    faqs: [],
  },
];

export const ORIGINS_BY_SLUG = Object.fromEntries(ORIGINS.map((o) => [o.slug, o]));
