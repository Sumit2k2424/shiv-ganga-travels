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
  { id: 'uttarakhand-hills', label: 'Up in the hills', blurb: 'Where trips end rather than start — one-way drops from the dhams, road heads and hill stations back down to the plains.' },
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
    intro: 'Jodhpur is about 880 km from Haridwar, which puts it firmly in full-circuit-package territory rather than point-to-point cab territory. We run Jodhpur pickups as part of complete Char Dham bookings, with a night at Jaipur or Delhi on the way up. Booked that way it is one vehicle and one driver from your door in Jodhpur, through the four dhams, and home again — which is both cheaper than a transfer plus a separate yatra and considerably less to organise. What we will not do is quote the drive up as a single day; 880 km with a family aboard is fourteen to fifteen hours of elapsed time, and a driver at the wheel for that long is the biggest avoidable risk on a long-haul booking.',
    pickupPoints: [
      ['Jodhpur Airport & railway station', 'Standard pickup, flight or train tracked.'],
      ['Any Jodhpur address', 'Doorstep pickup, including Ratanada, Shastri Nagar and the old city guesthouses.'],
      ['Pali and Bilara', 'On the Ajmer road out, and covered at the Jodhpur fare if that is where your group actually starts.'],
    ],
    faqs: [
      ['How far is Haridwar from Jodhpur by road?', 'About 880 km via Ajmer, Jaipur and Delhi. Mapping sites quote eleven hours of driving; with real stops it is fourteen to fifteen hours of elapsed time, so we run it as two days with a night at Jaipur or Delhi.'],
      ['Can I book one vehicle in Jodhpur for the whole Char Dham Yatra?', 'Yes, and from this distance it is the only booking that really makes sense. Jodhpur to Jodhpur, usually 14 to 16 days including the drive at both ends, quoted as one fixed figure.'],
      ['Would we be better off flying?', 'For most groups, yes — flying to Delhi or Dehradun and starting the vehicle there saves two full days of driving each way. Driving the whole way starts to pay for a group of six or more.'],
    ],
  },
  {
    slug: 'udaipur',
    name: 'Udaipur',
    region: 'rajasthan',
    state: 'Rajasthan',
    intro: 'Udaipur is about 900 km from Haridwar. As with Jodhpur, the workable product is a full-circuit vehicle rather than a one-way transfer — we pick up in Udaipur, break the drive at Jaipur or Delhi, run the yatra and bring you home, all on one quote. The road north through Chittorgarh and Ajmer is fast, open highway for most of its length, so the drive itself is undemanding; what makes it two days rather than one is simply the arithmetic of 900 km, and we would rather say so than sell you a fifteen-hour day and a driver who has been at the wheel for all of it.',
    pickupPoints: [
      ['Maharana Pratap Airport & Udaipur City station', 'Standard pickup, flight or train tracked.'],
      ['Any Udaipur address', 'Doorstep pickup, lake-side hotels included.'],
      ['Nathdwara and Chittorgarh', 'Both on or near the road north, and covered at the Udaipur fare rather than treated as a detour.'],
    ],
    faqs: [
      ['How far is Haridwar from Udaipur by road?', 'About 900 km via Chittorgarh, Ajmer, Jaipur and Delhi — a genuine two-day drive with a night at Jaipur or Delhi. The mapping sites quote around eleven hours, but that is driving time with nothing else in it.'],
      ['Can you run the whole Char Dham Yatra from Udaipur?', 'Yes, and it is what nearly every Udaipur booking turns out to be. One vehicle and one driver, Udaipur to Udaipur, typically 14 to 16 days including the drive at both ends.'],
      ['Is it worth driving rather than flying?', 'Only for a larger group. Udaipur has flights to Delhi, and picking the vehicle up there or at Dehradun saves four days across the round trip. At six or more travellers the fares start to favour driving.'],
    ],
  },
  // ───────────────── UP IN THE HILLS ─────────────────
  //  Return-leg origins. Every other origin in this file is somewhere we
  //  pick up at the START of a trip; these five are where trips END, and
  //  the passenger needs one way down. They are not bases — we do not park
  //  vehicles at 3,133 m — so `isBase` is deliberately absent and the
  //  pickup points describe a taxi stand or a parking barrier rather than
  //  a doorstep.
  //
  //  Commercially this is the best leg we run: our vehicles are returning
  //  to Haridwar whatever happens, so a downhill drop is a run we want.
  //  That is also why every competitor page one of these targets is a
  //  one-way page ("badrinath to haridwar one way taxi") rather than a
  //  round-trip one.
  {
    slug: 'badrinath',
    name: 'Badrinath',
    region: 'uttarakhand-hills',
    state: 'Uttarakhand',
    pickupLabel: 'Temple parking pickup',
    intro: 'Badrinath is the one dham the road reaches, which means it is also the one where you can finish your darshan and be in a vehicle an hour later. That matters more than it sounds: a great many people arrive on a package that ends here, or change their plans at the temple, and then discover that finding a car in a town at 3,133 m on a November afternoon is a different proposition from finding one in Haridwar. Downhill drops from Badrinath are a run we are always glad to take, because our vehicles are returning to the plains regardless. The one hard constraint is daylight — the gate system and the 10 PM to 4 AM hill movement ban both decide what time you can actually leave.',
    pickupPoints: [
      ['Badrinath temple and the Tapt Kund bazaar', 'The vehicle waits at the main parking below the temple — the lanes above it are foot traffic only, as they are at every dham.'],
      ['Badrinath bus stand and taxi stand', 'Standard pickup, and the easiest place to find in the dark if you are leaving before first light.'],
      ['Mana village', 'Three km on, and often the last stop people make before turning around. We will pick up there instead if that is where your morning ends.'],
      ['Any Badrinath hotel or GMVN property', 'Door pickup wherever the road reaches the door, which in Badrinath is most but not all of them.'],
    ],
    faqs: [
      ['Can I book a one-way taxi from Badrinath back to Haridwar?', 'Yes, and it is one of our most common bookings. Our vehicles are heading back to Haridwar anyway, so a downhill drop is a run we want rather than one we have to be persuaded into. It is 320 km and ten to eleven hours, so it is a full day.'],
      ['What time do I have to leave Badrinath?', 'Early. Vehicle movement on hill routes is banned between 10 PM and 4 AM, and the Badrinath gate timings restrict the descent further in peak season. A 6 AM departure reaches Haridwar comfortably; a 2 PM one means a night at Joshimath or Rudraprayag.'],
      ['Is there a taxi stand at Badrinath, or should I book ahead?', 'There is a stand, and in season there are cars at it. What there is not is a fixed price — the rate at a dham taxi stand on a busy afternoon is whatever the driver says it is. Booking ahead is worth doing for that reason alone.'],
      ['Can I stop at Joshimath or Auli on the way down?', 'Easily. Joshimath is 45 km down and directly on the route; Auli is a ropeway ride from it. Adding either costs you the time and nothing else if you tell us before you book.'],
    ],
  },
  {
    slug: 'sonprayag',
    name: 'Sonprayag',
    region: 'uttarakhand-hills',
    state: 'Uttarakhand',
    pickupLabel: 'Pickup at the shuttle barrier',
    intro: 'Sonprayag is where the Kedarnath trek spits you out, and the state most people are in when they get there is not one for negotiating. You have come down 16 km on foot or by pony, taken the shuttle from Gaurikund, and it is usually mid-afternoon. This is the single worst moment on the whole circuit to be looking for a car — which is exactly why the fares quoted at the Sonprayag barrier on a busy day bear no relation to the fares quoted anywhere else. A pre-booked downhill drop from here costs what it costs, and the driver is holding your luggage in the parking already.',
    pickupPoints: [
      ['Sonprayag shuttle barrier and parking', 'Where the Gaurikund jeeps drop you, and where your vehicle waits. If we drove you up, this is the same car and the same driver with your bags in it.'],
      ['Sitapur', 'Two km below, and where the overflow parking sits in peak weeks. We will meet you here if the barrier area is jammed.'],
      ['Gaurikund', 'We cannot drive up to it — no private vehicle can — but if you are booking from Gaurikund we time the pickup to the shuttle you catch.'],
      ['Guptkashi', 'Thirty km down, and the pickup point if you have come off the mountain late and slept there first.'],
    ],
    faqs: [
      ['How do I get a taxi from Sonprayag after the Kedarnath trek?', 'Book it before you go up. Sonprayag has cars, but you will be negotiating at four in the afternoon after a 16 km descent, which is not a negotiation you win. A pre-booked drop has a fixed fare and the driver already has your luggage.'],
      ['How far is Haridwar from Sonprayag?', 'About 235 km and eight to nine hours down through Guptkashi, Rudraprayag, Srinagar and Devprayag. Leaving Sonprayag after about 1 PM means arriving in Haridwar in the dark.'],
      ['Can the same driver who brought me up wait and take me back?', 'Yes, and that is how most Kedarnath bookings are quoted — the vehicle stays in the Sonprayag parking with your luggage while you are on the mountain, usually two nights. It works out cheaper than two one-way drops.'],
      ['What if I come down a day later than planned?', 'Tell the driver on WhatsApp. Weather turns and treks run long on this mountain, and an extra night of waiting is a known cost we quote rather than a penalty we spring on you.'],
    ],
  },
  {
    slug: 'joshimath',
    name: 'Joshimath',
    region: 'uttarakhand-hills',
    state: 'Uttarakhand',
    pickupLabel: 'Town or Govindghat pickup',
    intro: 'Joshimath is the junction everything above it funnels through — Badrinath, Auli, Hemkund Sahib, the Valley of Flowers — so it is where a great many trips end, whether or not they were meant to. Trekkers come down from Ghangaria to Govindghat and need a way to the plains; skiers finish at Auli; Badrinath pilgrims break the descent here because ten hours in one go is too much. It sits at 1,890 m with the widest choice of rooms above Chamoli, which makes it the sensible place to start a downhill run at first light rather than pushing on tired.',
    pickupPoints: [
      ['Joshimath town and the Auli ropeway station', 'Doorstep pickup anywhere the road reaches, which in Joshimath is nearly everywhere.'],
      ['Govindghat', 'Twenty-two km up the Badrinath road, and the road head for Hemkund Sahib and the Valley of Flowers. This is where trekking groups actually want collecting.'],
      ['Joshimath bus stand', 'Standard pickup, and the easiest landmark for a pre-dawn departure.'],
      ['Auli', 'Top of the ropeway or up the 13 km road, depending on the weather and the season.'],
    ],
    faqs: [
      ['Can I get a taxi from Joshimath to Haridwar?', 'Yes — 275 km and nine to ten hours down the Alaknanda through Karnaprayag, Rudraprayag and Devprayag. It is a full day, so a 6 AM start is what makes it a civilised one.'],
      ['Can you collect us from Govindghat after the Valley of Flowers trek?', 'Yes, and it is better than finding a shared jeep at the end of a trek day. Govindghat is 22 km above Joshimath; we time the pickup to when you expect to be down from Ghangaria.'],
      ['Is Joshimath a good place to break the descent from Badrinath?', 'It is the obvious one. Forty-five km down from the temple, 1,200 m lower, and with real hotels — which matters if there are senior travellers in the group.'],
    ],
  },
  {
    slug: 'mussoorie',
    name: 'Mussoorie',
    region: 'uttarakhand-hills',
    state: 'Uttarakhand',
    pickupLabel: 'Mall Road pickup points',
    intro: 'Mussoorie runs on a different rhythm from the dham routes: weekends, school holidays and the summer months, with people arriving from Delhi on Friday and needing to leave on Sunday. The descent is short — thirty-five km and ninety minutes to Dehradun, or five to six hours all the way to Delhi on the expressway — but the first half hour of it is the part that catches people out. Mall Road is closed to vehicles through much of the afternoon and evening, and the parking at both the Library and Picture Palace ends fills solid in season, so where your car can actually meet you is worth settling before the morning you leave.',
    pickupPoints: [
      ['Library Chowk (Gandhi Chowk)', 'The western end. Parking here is the more reliable of the two in season.'],
      ['Picture Palace and Masonic Lodge', 'The eastern end and the ropeway base. Tell us which end your hotel is at — they are 6 km apart along a road that is often closed in the middle.'],
      ['Landour and Sisters Bazaar', 'The lanes above are narrow; we meet you at the nearest turning point, which is rarely more than a short walk.'],
      ['Kempty Falls and the Dehradun road hotels', 'Standard pickup, and easier than anywhere in the town centre.'],
    ],
    faqs: [
      ['How much is a taxi from Mussoorie to Delhi?', 'It is 290 km and seven to eight hours — ninety minutes down to Dehradun, then the expressway. We quote it as a fixed one-way drop with tolls included rather than by the kilometre.'],
      ['Where can the cab pick me up on the Mall Road?', 'That depends on the hour. The central stretch of the Mall is closed to vehicles for much of the afternoon and evening, so we pick up at Library Chowk or Picture Palace and will tell you honestly which is closer to your hotel.'],
      ['Can I get a one-way drop from Mussoorie to Haridwar?', 'Yes — 85 km and about two and a half hours via Dehradun. It is a common booking for anyone finishing a hill week and starting a yatra, or catching a train from Haridwar.'],
      ['Do you run early-morning departures from Mussoorie?', 'Routinely. A pre-dawn start is the right call if you have a flight from Jolly Grant or a long day to Delhi ahead — the hill road is empty and the descent takes half the time it does at noon.'],
    ],
  },
  {
    slug: 'nainital',
    name: 'Nainital',
    region: 'uttarakhand-hills',
    state: 'Uttarakhand',
    pickupLabel: 'Mallital or Tallital pickup',
    intro: 'Nainital sits in Kumaon, on the other side of the state from everything else we run, and that geography is the whole story of a cab from here. The road out goes east and south through Haldwani, Rampur and Moradabad — nowhere near the Char Dham corridor — so a drop to Delhi is a straightforward six to seven hours, while a drop to Haridwar means crossing the state the long way round. Vehicle entry to the Mall Road area is restricted at peak times and the parking near the lake fills by Saturday lunchtime, so the practical question on a Nainital departure is usually where the car can wait, not how long the drive is.',
    pickupPoints: [
      ['Mallital and Tallital', 'The two ends of the lake, and the two places a vehicle can reliably wait. Tallital is the better bet on a busy weekend.'],
      ['Nainital bus stand', 'At the Tallital end, and the simplest landmark for an early departure.'],
      ['Kathgodam and Haldwani', 'The railhead, 35 km down. A great many Nainital bookings are really a drop to a train here.'],
      ['Bhimtal, Sattal and Naukuchiatal', 'All within 25 km and all covered at the same fare — worth mentioning if you are staying at a lake rather than in the town.'],
    ],
    faqs: [
      ['How much is a taxi from Nainital to Delhi?', 'It is about 300 km and six to seven hours via Haldwani, Rampur and Moradabad. We quote a fixed one-way drop with tolls and the state entry tax included, so nothing is collected at the border.'],
      ['Can I get a cab from Nainital to Haridwar?', 'Yes, though it is worth knowing it is 265 km across the state rather than a short hop — Nainital is in Kumaon and Haridwar is in Garhwal. It is a common booking for people combining a Kumaon week with the start of a yatra.'],
      ['Where will the cab meet me in Nainital?', 'Mallital or Tallital, depending on where you are staying and how busy the weekend is. Vehicle entry to the Mall is restricted at peak times, so we agree the point before the morning you leave rather than on it.'],
      ['Can we stop at Bhimtal or Sattal on the way down?', 'Yes, and it costs almost nothing to do so — they are on the road out. Far more efficient than a separate day trip back up from wherever you are staying.'],
    ],
  },

];

export const ORIGINS_BY_SLUG = Object.fromEntries(ORIGINS.map((o) => [o.slug, o]));
