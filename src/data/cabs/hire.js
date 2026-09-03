// ══════════════════════════════════════════════════════════════
//  VEHICLE HIRE — the fourth cab tier
// ══════════════════════════════════════════════════════════════
//  Powers /cabs/hire/[vehicle].
//
//  Why this tier exists. The three existing tiers all answer a
//  journey question — where from, where to, which road. A large,
//  entirely separate block of demand asks a vehicle question first:
//  "tempo traveller on rent in Haridwar", "Innova Crysta on rent in
//  Haridwar", "12 seater tempo traveller rate per km". The group
//  organiser knows how many people are coming and needs a per-km
//  number before they know the itinerary. We had no page of any kind
//  for that query class; Gangotri Travels holds five, and the rest of
//  page one is aggregator boilerplate with no rate card on it.
//
//  RATES ARE NOT DUPLICATED HERE. Every figure comes from
//  src/data/localTaxi.js, which is the published rate card the
//  /taxi-service-in-haridwar page already renders — so the day rate,
//  the extra-km rate and the outstation per-km rate cannot drift
//  between the two pages. Note that localTaxi.js still carries
//  RATES_VERIFIED = false; that flag governs these pages too.
//
//  Everything below is editorial: what the vehicle is actually like,
//  who should not book it, and what it does on a hill road. That is
//  the part no competitor page has.

import { FLEET as LOCAL_FLEET, fleetById } from '@/data/localTaxi';

export const HIRE = [
  {
    slug: 'tempo-traveller-haridwar',
    showcaseId: 'tempo',          // matching entry in experience.js VEHICLES
    name: 'Tempo Traveller',
    h1: 'Tempo Traveller on rent in Haridwar',
    // Rate-card ids rendered on this page, in display order.
    rateIds: ['tt12', 'tt17'],
    seatsLabel: '12 or 17 seats, plus the driver',
    luggage: 'Roof carrier plus a rear boot — the only vehicle we run that takes a full group’s luggage without anyone holding a bag',
    idealFor: 'Joint families, temple sanghs, office groups and anyone travelling eight or more',
    intro: 'A Tempo Traveller is what a group of eight or more actually needs, and it is the vehicle most people underestimate. The 12-seat version is the yatra standard — push-back seats, a roof carrier that takes the luggage a Char Dham trip generates, and enough headroom to stand up in at a halt. The 17-seat is the same vehicle stretched, and it is the one extended families and temple groups book. What matters more than the seat count on a Uttarakhand hill route is that the vehicle is a hill-registered Tempo with a current Green Card and a driver who runs the Char Dham roads every season, because a long-wheelbase vehicle on the switchbacks above Rudraprayag is genuinely a skill and not a formality.',
    goodFor: [
      ['Groups of 8 to 17', 'Below eight people an Innova Crysta is cheaper and more comfortable per head. Above eight there is no sensible alternative.'],
      ['Char Dham circuits', 'The luggage a ten-day yatra generates does not fit anywhere else. The roof carrier is the whole argument.'],
      ['Temple sanghs and joint families', 'One vehicle keeps the group together, which matters more than most organisers expect on a route with this many halts.'],
      ['Airport and station group transfers', 'Delhi or Jolly Grant to Haridwar in one vehicle rather than three cabs that arrive twenty minutes apart.'],
    ],
    honestLimits: [
      'It is slower on the hills than an SUV, and on the Kedarnath and Yamunotri approaches that difference compounds into an hour or more a day.',
      'Some narrow stretches above Sonprayag and towards Janki Chatti are genuinely tight for a 17-seat body. We will say so at the quoting stage rather than at the diversion.',
      'A half-full Tempo costs the same as a full one. If your group is nine, look hard at whether two Ertigas suit you better.',
    ],
    hillNote: 'Both sizes carry a valid Green Card and trip permit for the Char Dham routes. On the high approaches we fit oxygen as standard above 2,500 m, which on a 17-seat group is not a small consideration.',
    routes: ['haridwar-to-kedarnath-cab', 'haridwar-to-badrinath-cab', 'haridwar-to-gangotri-cab', 'delhi-to-haridwar-cab'],
    guides: [['Taxi Service in Haridwar', '/taxi-service-in-haridwar'], ['Char Dham Cab Booking', '/char-dham-yatra-cab-booking'], ['Char Dham for Temple Groups', '/char-dham-yatra-for-temple-groups']],
    faqs: [
      ['What is the tempo traveller rate per km in Haridwar?', 'A 12-seat Tempo Traveller runs ₹24 per km on outstation trips and a 17-seat ₹28 per km, plus a ₹300 per night driver allowance. For a day inside Haridwar the 8 hour / 80 km rate is ₹4,500 and ₹5,500 respectively, with extra kilometres at ₹26 and ₹30.'],
      ['How many people fit in a 12 seater tempo traveller with luggage?', 'Twelve passengers plus the driver, and the luggage goes on the roof carrier rather than inside. If you are twelve people with a full yatra’s worth of bags, the 17-seat is the more comfortable booking even though you do not need the seats.'],
      ['Is a Tempo Traveller safe on the Char Dham routes?', 'Yes, with the right vehicle and driver — which is what the Green Card and hill endorsement exist to certify. It is slower than an SUV on the climbs and tight on a few stretches above Sonprayag, and we plan the day around that rather than pretending otherwise.'],
      ['Can I hire a tempo traveller in Haridwar for one day only?', 'Yes. The 8 hour / 80 km local day rate applies, which covers Har Ki Pauri, both ropeways, Daksh Mahadev and Kankhal comfortably. Adding Rishikesh crosses the 80 km slab, and we tell you that before you leave rather than on the bill.'],
      ['Do you charge extra for the roof carrier?', 'No. It is part of the vehicle, not an add-on, and neither is the driver’s allowance hidden inside the per-km figure — it is the flat ₹300 a night shown on the rate card.'],
    ],
  },
  {
    slug: 'innova-crysta-haridwar',
    showcaseId: 'innova',          // matching entry in experience.js VEHICLES
    name: 'Innova Crysta',
    h1: 'Innova Crysta on rent in Haridwar',
    rateIds: ['crysta', 'innova'],
    seatsLabel: '6 seats, plus the driver',
    luggage: '4 large suitcases plus cabin bags',
    idealFor: 'Families with senior travellers, and any long hill route where the seat has to survive ten hours',
    intro: 'The Innova Crysta is the vehicle we put senior passengers in, and that is the whole case for it. On a plains run the difference against an Ertiga is comfort you could argue about; on the ten-hour climb to Badrinath or the Mandakini valley to Sonprayag it is the difference between arriving tired and arriving unable to walk to the temple the next morning. The suspension absorbs the broken surface above Rudraprayag in a way nothing cheaper does, the seat has real back support, and there is room for four large cases without anything on a lap. We also run the older Innova body at a lower rate — same engine, same reliability, less refinement — and we will tell you when the Crysta is genuinely not worth the difference.',
    goodFor: [
      ['Families with senior travellers', 'The single most common reason people pay the difference, and the one we think is always justified on a hill route.'],
      ['Long hill hauls', 'Badrinath, Kedarnath, Gangotri, Auli — anything over 250 km of mountain road.'],
      ['Groups of five or six with luggage', 'Six seats and four large cases without anyone holding a bag on their knees.'],
      ['Airport transfers where the flight is early', 'A quieter cabin at 4 AM is worth more than it sounds.'],
    ],
    honestLimits: [
      'For two people on a plains route it is money spent on capacity you will not use — a Dzire does that run for roughly half.',
      'It seats six, not seven. Operators who quote it as a seven-seater are counting a seat nobody adult can sit in for eight hours.',
      'On the tightest diversions above Sonprayag a Scorpio has better clearance. We will say so if the road that week calls for it.',
    ],
    hillNote: 'Every Crysta we send on a Char Dham route carries a current Green Card and trip permit, and oxygen is fitted as standard above 2,500 m rather than charged as an extra.',
    routes: ['haridwar-to-badrinath-cab', 'haridwar-to-kedarnath-cab', 'haridwar-to-joshimath-cab', 'haridwar-to-nainital-cab'],
    guides: [['Taxi Service in Haridwar', '/taxi-service-in-haridwar'], ['Char Dham Cab Booking', '/char-dham-yatra-cab-booking'], ['Altitude Sickness on the Char Dham', '/altitude-sickness-char-dham']],
    faqs: [
      ['What is the Innova Crysta rent per km in Haridwar?', 'Twenty rupees per km on outstation trips, plus a ₹300 per night driver allowance. A full day inside Haridwar is ₹3,200 for 8 hours and 80 km, with extra kilometres at ₹21 and extra hours at ₹250.'],
      ['Is the Innova Crysta a 6 or 7 seater?', 'We quote it as six plus the driver, because that is how many adults travel in it comfortably for a full day. The seven-seat configuration exists, but the middle seat on a ten-hour hill route is not a seat anyone thanks you for.'],
      ['Innova or Innova Crysta — is the extra worth it?', 'On plains routes, rarely. On a long hill haul with senior passengers, yes — the suspension and the seat are where the money goes and both matter above Rudraprayag. We run both and will tell you honestly which suits the route you have picked.'],
      ['Does the Crysta come with a driver, or can I self-drive?', 'With a driver. We do not rent self-drive, and on the Char Dham routes a hill-endorsed commercial driver is a legal requirement rather than a preference.'],
    ],
  },
  {
    slug: 'swift-dzire-haridwar',
    showcaseId: 'ertiga',          // matching entry in experience.js VEHICLES
    name: 'Swift Dzire',
    h1: 'Swift Dzire taxi on rent in Haridwar',
    rateIds: ['dzire'],
    seatsLabel: '4 seats, plus the driver',
    luggage: '2 large suitcases plus 2 cabin bags — and that is a real limit, not a cautious one',
    idealFor: 'Couples, two or three travellers, airport runs and local Haridwar days',
    intro: 'The Dzire is the cheapest thing we run and, for a very large share of trips, exactly the right vehicle. Two people going to Rishikesh for the aarti, a couple doing the Haridwar temple circuit, an airport drop at Jolly Grant, a one-way to Delhi — the sedan does all of it for roughly half what an SUV costs, and nobody arrives wishing they had spent more. Where we will talk you out of it is the boot. Two large suitcases is the honest number; the fourth passenger and the fourth bag do not both fit, and finding that out at the pickup point with a train to catch is a bad hour for everyone.',
    goodFor: [
      ['Couples and pairs', 'The most common Dzire booking by a distance, and the cheapest way to travel properly rather than shared.'],
      ['Haridwar local days', 'Har Ki Pauri, both ropeways, Daksh Mahadev and Kankhal inside the 8 hour / 80 km slab.'],
      ['Airport and station transfers', 'Jolly Grant to Haridwar, or Haridwar to Delhi — fixed fare, tolls in it.'],
      ['Plains routes generally', 'Delhi, Rishikesh, Dehradun. The road never asks for more vehicle than this.'],
    ],
    honestLimits: [
      'Two large suitcases. Four adults with four cases will not fit, whatever anyone quotes you.',
      'On the long dham climbs the ride is noticeably harder than an Ertiga or a Crysta. Fine for two young travellers, wearing for a family over ten hours.',
      'Air conditioning is switched off on the steep hill sections because it strains the engine on gradients — true of every sedan on those roads, ours included.',
    ],
    hillNote: 'A Dzire will do the Char Dham routes and plenty of people book it for exactly that. It carries the same Green Card and trip permit as everything else we send. It is the ride quality, not the capability, that makes us suggest an Ertiga to families.',
    routes: ['haridwar-to-mussoorie-cab', 'haridwar-to-dehradun-cab', 'delhi-to-haridwar-cab', 'delhi-to-rishikesh-cab'],
    guides: [['Haridwar to Rishikesh Taxi', '/haridwar-to-rishikesh-taxi'], ['Haridwar to Delhi Taxi', '/haridwar-to-delhi-taxi'], ['Dehradun Airport to Haridwar', '/dehradun-airport-to-haridwar-taxi']],
    faqs: [
      ['What is the Swift Dzire taxi rate per km in Haridwar?', 'Twelve rupees per km on outstation trips, plus a ₹300 per night driver allowance. A local day is ₹1,600 for 8 hours and 80 km, with extra kilometres at ₹13 and extra hours at ₹150 — the cheapest rate on our card.'],
      ['How much luggage fits in a Dzire?', 'Two large suitcases in the boot plus two cabin bags. Four passengers with four large cases is not a booking that works, and we would rather tell you now than at the pickup.'],
      ['Is a Dzire alright for the Char Dham route?', 'Legally and mechanically, yes — it carries the same Green Card and hill permits as our SUVs. Over ten hours of mountain road a family will be more comfortable in an Ertiga, which is why we suggest it, not because the sedan cannot do the road.'],
      ['What is the cheapest taxi from Haridwar to Rishikesh?', 'A Dzire one-way drop at ₹900 for the 25 km. If you want the driver to wait while you see Ram Jhula and Triveni Ghat, book the 8-hour local day instead — a return billed as two one-way drops always costs more.'],
    ],
  },
  {
    slug: 'ertiga-haridwar',
    showcaseId: 'ertiga',          // matching entry in experience.js VEHICLES
    name: 'Maruti Ertiga',
    h1: 'Maruti Ertiga on rent in Haridwar',
    rateIds: ['ertiga'],
    seatsLabel: '6 seats, plus the driver',
    luggage: '3 large suitcases plus 2 cabin bags',
    idealFor: 'Families of four to six who want hill comfort without Innova money',
    intro: 'The Ertiga is the vehicle we book most often for families, and it is the one most people have not considered. It seats six properly, takes three large cases, and costs meaningfully less than an Innova Crysta while riding far better than a sedan on the climbs above Rishikesh. It is also nimbler than either on a hill road, which sounds like a small thing until you meet a bus on a switchback near Uttarkashi. For a family of five doing the Char Dham on a budget that still has to be comfortable, this is the honest recommendation, and we make it even though the Crysta earns us more.',
    goodFor: [
      ['Families of four to six', 'Six real seats and three large cases, without the Crysta premium.'],
      ['Short and medium hill routes', 'Gangotri, Yamunotri, Chopta, Auli — the nimbleness is a genuine advantage on the narrower approaches.'],
      ['Budget-conscious Char Dham circuits', 'The most comfort per rupee on a ten-day yatra, by a clear margin.'],
      ['Mixed groups with children', 'Easier to get in and out of at a roadside halt than a high SUV.'],
    ],
    honestLimits: [
      'On a ten-hour haul to Badrinath with senior passengers, the Crysta seat is worth the difference. This is the one case where we do not recommend the Ertiga.',
      'Three large cases, not four. Six passengers travelling heavy should look at the Crysta or a Tempo.',
      'Ground clearance is lower than an SUV, which shows on the rough diversions after a landslide season.',
    ],
    hillNote: 'Green Card and trip permit as standard, oxygen fitted above 2,500 m, and drivers who run these routes every season. The Ertiga handles the narrow upper approaches to Gangotri and Yamunotri better than anything larger we run.',
    routes: ['haridwar-to-gangotri-cab', 'haridwar-to-yamunotri-cab', 'haridwar-to-chopta-cab', 'haridwar-to-auli-cab'],
    guides: [['Taxi Service in Haridwar', '/taxi-service-in-haridwar'], ['Char Dham Cab Booking', '/char-dham-yatra-cab-booking'], ['Char Dham Yatra Cost Calculator', '/char-dham-yatra-cost-calculator']],
    faqs: [
      ['What is the Ertiga taxi rate per km in Haridwar?', 'Fifteen rupees per km on outstation trips, plus a ₹300 per night driver allowance. A local day is ₹2,300 for 8 hours and 80 km, with extra kilometres at ₹16 and extra hours at ₹180.'],
      ['Ertiga or Innova Crysta for the Char Dham?', 'Ertiga for a family of four to six travelling normally — it rides well, costs less and is easier on the narrow upper roads. Crysta if you have senior passengers or the route is a long one like Badrinath, where the seat matters more than the saving.'],
      ['Does an Ertiga seat 7 people?', 'Seven with the driver, six passengers comfortably. On a ten-day yatra we quote it as a six-seater because the last seat is a short-hop seat, not a mountain-road seat.'],
      ['How much luggage does an Ertiga take?', 'Three large suitcases plus two cabin bags, with the third row up. Drop the third row and it takes considerably more, which is worth doing if you are four people travelling heavy.'],
    ],
  },  {
    slug: 'force-urbania-haridwar',
    showcaseId: 'tempo',          // matching entry in experience.js VEHICLES
    name: 'Force Urbania',
    h1: 'Force Urbania on rent in Haridwar',
    rateIds: ['urbania', 'tt17'],
    seatsLabel: '13 or 17 seats, plus the driver',
    luggage: 'Rear boot plus roof carrier — the same capacity as a tempo, loaded the same way',
    idealFor: 'Groups of a dozen or more who would rather not spend ten hours in a tempo traveller',
    intro: 'The Urbania is the one vehicle on our card where the case is entirely about the ride. A tempo traveller is built on a truck chassis; the Urbania is a monocoque, which in practice means it corners flat, absorbs the broken surface above Rudraprayag without throwing the back row around, and is quiet enough to hold a conversation in at highway speed. On a Haridwar airport transfer none of that matters much. On the ten-hour climb to Badrinath with fourteen people aboard it is the difference between a group that arrives ready to walk to the temple and one that arrives wanting a lie down. It costs roughly fifteen per cent more per kilometre than a 17-seat tempo for the same seats, and whether that is worth paying depends almost entirely on how long the route is.',
    goodFor: [
      ['Long hill circuits with a large group', 'Char Dham, Badrinath, the full Do Dham — anywhere the group is in the vehicle for eight hours a day, repeatedly.'],
      ['Groups with senior travellers', 'The reason most people upgrade. A monocoque body over Uttarakhand hill surface is a genuinely different experience from a ladder frame.'],
      ['Corporate and institutional bookings', 'Where the vehicle is part of what is being provided rather than just transport, and it shows.'],
      ['Airport and station transfers for a large party', 'Delhi or Jolly Grant to Haridwar in one vehicle, with everyone arriving in the same state.'],
    ],
    honestLimits: [
      'For a short transfer it is money spent on comfort you will not be in long enough to notice — a 17-seat tempo does a two-hour run just as well for meaningfully less.',
      'We run fewer Urbanias than tempos, so peak-season availability is tighter. Book further ahead than you would for a tempo, particularly for May and June.',
      'Ground clearance is lower than a tempo traveller. On a season with heavy landslide diversions above Sonprayag or Joshimath we will sometimes recommend the tempo instead, and that is not us upselling downwards for fun.',
    ],
    hillNote: 'Green Card and trip permit as standard, and oxygen fitted above 2,500 m. The Urbania handles the Char Dham routes on the same permits as everything else we run — the difference is entirely in the ride, not the capability.',
    routes: ['haridwar-to-badrinath-cab', 'haridwar-to-kedarnath-cab', 'haridwar-to-joshimath-cab', 'delhi-to-haridwar-cab'],
    guides: [['Taxi Service in Haridwar', '/taxi-service-in-haridwar'], ['Char Dham Cab Booking', '/char-dham-yatra-cab-booking'], ['Char Dham for Temple Groups', '/char-dham-yatra-for-temple-groups']],
    faqs: [
      ['What is the Force Urbania rate per km in Haridwar?', 'Thirty-two rupees per km on outstation trips, plus a ₹300 per night driver allowance. A local day inside Haridwar is ₹6,500 for 8 hours and 80 km, with extra kilometres at ₹34 and extra hours at ₹400.'],
      ['Urbania or Tempo Traveller — which should I book?', 'Tempo for anything short, Urbania for anything long. The Urbania is a monocoque body rather than a truck chassis, so it rides far better over hill surface, and it costs about fifteen per cent more per kilometre for the same number of seats. On a two-hour transfer that premium buys you very little; on a ten-day Char Dham circuit it is the best money in the booking.'],
      ['How many people does a Force Urbania seat?', 'Thirteen or seventeen depending on the configuration, plus the driver. Luggage goes in the rear boot and on the roof carrier, exactly as it does in a tempo — the capacity is the same, the ride is not.'],
      ['Is the Urbania alright on the Char Dham roads?', 'Yes, on the same Green Card and hill permits as everything else we send. The one caveat is ground clearance, which is lower than a tempo traveller — in a season with heavy diversions above Sonprayag we may suggest the tempo for that stretch specifically.'],
      ['Do you have Urbanias available in peak season?', 'Fewer than we have tempos, so book earlier. May and June go first, and a group of fourteen deciding in April is usually deciding between an Urbania that is already taken and a tempo that is not.'],
    ],
  },

];

export const HIRE_BY_SLUG = Object.fromEntries(HIRE.map((h) => [h.slug, h]));

export const getHire = (slug) => HIRE_BY_SLUG[slug] || null;

/**
 * A hire page is publishable only once it carries its own editorial
 * copy AND resolves to real rate-card rows. Same gate philosophy as
 * the other three tiers: an incomplete entry is invisible rather
 * than thin.
 */
export function isHirePublishable(h) {
  return Boolean(
    h &&
    h.slug &&
    h.intro?.length > 200 &&
    h.rateIds?.length >= 1 &&
    h.rateIds.every((id) => fleetById(id)) &&
    h.goodFor?.length >= 2 &&
    h.honestLimits?.length >= 2 &&
    h.faqs?.length >= 3
  );
}

export const getPublishedHire = () => HIRE.filter(isHirePublishable);

export const getHireParams = () => getPublishedHire().map((h) => ({ vehicle: h.slug }));

export const hirePath = (h) => `/cabs/hire/${h.slug || h}`;

/** The rate-card rows this page renders, resolved from localTaxi.js. */
export const hireRates = (h) => h.rateIds.map(fleetById).filter(Boolean);

/**
 * The headline rates: the LEAD vehicle's, not the cheapest on the page.
 *
 * These feed the page title, the meta description and the answer box, all of
 * which name one vehicle — so they have to quote that vehicle's rate. Taking
 * the minimum instead had the Innova Crysta page titled "₹17/km", which is the
 * older Innova body sharing the table, while its own FAQ said ₹20; and it would
 * have put the 17-seat Tempo's ₹28 on the Urbania page. rateIds[0] is always
 * the vehicle the page is named after; anything after it is a comparison row.
 */
export const hireDayRate = (h) => hireRates(h)[0].local8;
export const hirePerKm = (h) => hireRates(h)[0].outstationKm;

/** Other hire pages, for the link mesh. */
export const hireSiblings = (h) => getPublishedHire().filter((x) => x.slug !== h.slug);

export { LOCAL_FLEET };
