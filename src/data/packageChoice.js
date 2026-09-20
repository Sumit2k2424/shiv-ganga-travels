// ══════════════════════════════════════════════════════════════
//  WHAT MAKES EACH PACKAGE ITSELF
// ══════════════════════════════════════════════════════════════
//  The 17 Sep 2026 lint of the live site put 7 of the 11 package
//  pages under 40 % unique text (the 9N/10D and 11N/12D shared 71 %
//  of their words). The itinerary, highlights and FAQs were already
//  distinct; everything around them — the six hotel cards, the dates
//  table, two link grids, the trust band — was the same on every
//  page. This file carries the two things that are genuinely per
//  package and were missing:
//
//  NIGHTS   where you sleep, night by night, read off the itinerary
//           by hand (the day descriptions say "Overnight X" in most
//           places, but not all, and a wrong town on a product page
//           is worse than none). Rendered instead of the hotel
//           carousel. Length must equal pkg.duration.nights.
//
//  WHY_THIS one paragraph on who the itinerary is for and how it
//           differs from its nearest sibling — the question a reader
//           comparing two tabs actually has, and the text no other
//           page can share. Keep to what the data above says; do not
//           add claims about hotels, prices or inclusions that the
//           package entry does not make.

export const PACKAGE_NIGHTS = {
  'char-dham-yatra-9n-10d-haridwar': [
    'Barkot', 'Barkot', 'Uttarkashi', 'Uttarkashi', 'Guptkashi',
    'Kedarnath', 'Guptkashi', 'Badrinath', 'Rudraprayag',
  ],
  'char-dham-yatra-11n-12d-haridwar': [
    'Haridwar', 'Barkot', 'Barkot', 'Uttarkashi', 'Uttarkashi', 'Uttarkashi',
    'Guptkashi', 'Kedarnath', 'Kedarnath', 'Guptkashi', 'Badrinath',
  ],
  'char-dham-yatra-helicopter-5n-6d-dehradun': [
    'Dehradun', 'Uttarkashi / Harsil', 'Phata / Sitapur camp', 'Badrinath', 'Badrinath',
  ],
  'char-dham-yatra-senior-citizen-12n-13d': [
    'Haridwar', 'Haridwar', 'Barkot', 'Barkot', 'Barkot', 'Uttarkashi', 'Uttarkashi',
    'Guptkashi', 'Kedarnath', 'Kedarnath', 'Guptkashi', 'Badrinath',
  ],
  'char-dham-yatra-from-delhi-10n-11d': [
    'Overnight Volvo, Delhi → Haridwar', 'Haridwar', 'Barkot', 'Barkot', 'Uttarkashi',
    'Guptkashi', 'Kedarnath', 'Guptkashi', 'Badrinath', 'Rishikesh',
  ],
  'kedarnath-badrinath-do-dham-5n-6d': [
    'Guptkashi', 'Kedarnath', 'Guptkashi', 'Badrinath', 'Badrinath',
  ],
  'yamunotri-gangotri-do-dham-4n-5d': [
    'Barkot', 'Barkot', 'Uttarkashi', 'Rishikesh / Haridwar',
  ],
  'teen-dham-yamunotri-gangotri-badrinath-7n-8d': [
    'Barkot', 'Barkot', 'Uttarkashi', 'Harsil', 'Guptkashi', 'Badrinath', 'Srinagar / Rishikesh',
  ],
  'kedarnath-yatra-package-3n-4d-haridwar': [
    'Guptkashi', 'Kedarnath', 'Guptkashi',
  ],
  'do-dham-helicopter-same-day-kedarnath-badrinath': [],
  'hemkund-sahib-badrinath-valley-of-flowers-6n-7d': [
    'Joshimath', 'Ghangaria', 'Ghangaria', 'Ghangaria', 'Badrinath', 'Srinagar / Rudraprayag',
  ],
  // Kumaon. No HOTELS entry matches these towns, so the night list renders
  // the town alone — which is correct: we book Nainital and Mukteshwar
  // property by property, and naming one we do not hold would be a claim.
  'kainchi-dham-nainital-mukteshwar-3n-4d': [
    'Nainital', 'Nainital', 'Mukteshwar',
  ],
};

/** Consecutive nights in the same town, collapsed: [{ from, to, town }]. */
export function nightRuns(slug) {
  const list = PACKAGE_NIGHTS[slug] || [];
  const runs = [];
  list.forEach((town, i) => {
    const last = runs[runs.length - 1];
    if (last && last.town === town) last.to = i + 1;
    else runs.push({ from: i + 1, to: i + 1, town });
  });
  return runs;
}

export const WHY_THIS = {
  'char-dham-yatra-9n-10d-haridwar':
    'This is the itinerary most of our groups take, and the one the other Char Dham pages are measured against. Nine nights is the shortest you can do all four dhams by road without driving after dark: a night either side of Yamunotri and Gangotri, a night up at Kedarnath so the 4 AM rudrabhishek is possible, and a halt at Rudraprayag on the way back rather than a twelve-hour push to Haridwar. What it does not have is slack. Day 5 and Day 8 are seven-hour drives, and the Kedarnath trek falls on Day 6 whether or not you slept well at Guptkashi. If you want rest days, the 11N/12D deluxe adds two and better hotels for about double the fare; if you are over 60 or want the ponies included, the senior-citizen 12N/13D is built for that. If money is the constraint and legs are not, this is the one.',

  'char-dham-yatra-11n-12d-haridwar':
    'Same four dhams, two more nights, roughly twice the fare — so what does ₹30,000 buy that ₹13,900 does not? Mostly time and sleep. Day 1 is an arrival night in Haridwar instead of a 6 AM start, Day 5 is a free day at Uttarkashi with the Harsil valley drive, and Kedarnath gets two nights (Days 8 and 9) in a tented camp, so the morning puja and the descent fall on different days. Hotels are the 3-star deluxe tier at every halt rather than standard guesthouses, the vehicle is an Innova Crysta for groups up to seven instead of a shared Tempo Traveller, and the VIP abhishek at Kedarnath and Badrinath is in the fare rather than bought at the counter. Choose it if you are travelling as a family that wants its own car and would rather not do a 16 km trek and a 200 km drive inside 24 hours. If you are fit and on a budget, the 9N/10D covers the same shrines.',

  'char-dham-yatra-helicopter-5n-6d-dehradun':
    'The road itineraries take nine to twelve nights; this one takes five, because the helicopter replaces every long drive and both treks. It starts and ends at Dehradun, not Haridwar — Sahastradhara helipad is the departure point — and the four dhams fall on Days 2 to 5 with an overnight at each stage: Uttarkashi after Yamunotri, a camp at Phata or Sitapur before the Kedarnath sortie, then two nights at Badrinath. The fare of ₹2,30,000 per person is the operator’s charter tariff and includes VIP darshan slots and all three meals, which the road packages do not. It is the right choice for pilgrims who cannot walk 16 km or sit in a vehicle for seven hours, and for anyone with six days rather than twelve. Weather is the trade-off: sorties are grounded in cloud, and a lost morning shifts the whole circuit. The same-day Kedarnath–Badrinath flight is the cheaper option if you only need two dhams.',

  'char-dham-yatra-senior-citizen-12n-13d':
    'This itinerary exists because the 9N/10D asks too much of a 65-year-old: a 6 km trek, a 16 km trek and two seven-hour drives inside ten days. Here the pony at Yamunotri and the palki at Kedarnath are in the fare, not optional extras, and the ascent to Kedarnath is spread over Days 9 to 11 with a full rest day at the temple. There are three days before you climb anything — a medical check on arrival, a Rishikesh acclimatisation day and a rest day at Barkot — and every drive is broken roughly every ninety minutes. The Tempo Traveller carries oxygen and an attendant, hotels give ground-floor rooms where they can, and meals are low-oil with Jain options. At ₹21,000 it sits between the standard and deluxe Char Dham fares; the difference from the 9N/10D is almost entirely the ponies, the palkis and three more nights. If you are under 60 and mobile, the standard package will feel slow.',

  'char-dham-yatra-from-delhi-10n-11d':
    'Every other package on this site starts in Haridwar; this one picks you up at Kashmiri Gate or Majnu Ka Tila and puts you on an overnight Volvo, so Day 1 is spent asleep on the bus and Day 2 is a rest day in Haridwar with the evening aarti. From Day 3 the route is the standard Char Dham circuit — Barkot, Uttarkashi, Guptkashi, Kedarnath, Badrinath — compressed slightly (Gangotri is done on the Barkot-to-Uttarkashi day) and finishing with a night in Rishikesh before the bus back to Delhi. The ₹17,200 fare against ₹13,900 for the Haridwar 9N/10D is the Delhi transfer both ways, the extra night and the AC Tempo Traveller for the hills. It is a fixed-date group departure, so you travel with 15 to 50 other pilgrims rather than in a private car; that keeps the price down and suits solo travellers and couples. If you would rather have door pickup in Noida or Gurugram, say so when you book — we can send a car for the Delhi leg.',

  'kedarnath-badrinath-do-dham-5n-6d':
    'Kedarnath and Badrinath are the two dhams most pilgrims mean when they say Char Dham, and this is the shortest way to see both by road. Five nights: Guptkashi, up to Kedarnath, back to Guptkashi, then two at Badrinath with the Mana village walk on the last full day. It keeps the hard part of the full circuit — the 16 km trek from Gaurikund on Day 2 — but drops Yamunotri and Gangotri and the four days of driving they cost. The fare is a range, ₹8,200 to ₹18,000, because it runs at Budget, Standard and Deluxe hotel tiers; the itinerary is identical at all three. Take it if you have a week rather than ten days, or if you have done Yamunotri and Gangotri before. If the trek is the problem rather than the time, the Teen Dham package visits three shrines and skips Kedarnath altogether.',

  'yamunotri-gangotri-do-dham-4n-5d':
    'The two river-source dhams, without the Kedarnath trek. Yamunotri still means a 6 km walk or pony from Janki Chatti on Day 2, but Gangotri is reached by road on Day 3 and the highest overnight is Uttarkashi at 1,165 m, so altitude sickness is rarely an issue. At ₹7,100 and four nights it is the cheapest of the multi-dham itineraries and the one we suggest to first-timers who want to find out whether the hills suit them before committing to the full circuit. Day 4 is short — the Vishwanath temple at Uttarkashi and the drive down — and Day 5 is only Rishikesh to Haridwar. If you can add three nights, the Teen Dham package continues from Uttarkashi to Badrinath for ₹11,600 and adds a night at Harsil on the way.',

  'teen-dham-yamunotri-gangotri-badrinath-7n-8d':
    'Three of the four dhams — Yamunotri, Gangotri and Badrinath — leaving out Kedarnath and its 16 km trek. The only walking is the 6 km at Yamunotri, which can be done by pony, so this is the full-circuit feel for people whose knees or lungs rule out Kedarnath. The route is the standard one as far as Uttarkashi, then sleeps at Harsil after Gangotri where the 9N/10D returns to Uttarkashi, crosses via Tehri to Guptkashi, and goes on to Badrinath and Mana. At ₹11,600 it is ₹2,300 less than the four-dham 9N/10D for two fewer nights and one fewer shrine. If you are choosing between this and the Kedarnath–Badrinath pair: that package keeps the trek and drops the two river sources; this one does the reverse.',

  'kedarnath-yatra-package-3n-4d-haridwar':
    'One dham, three nights, ₹5,250. Guptkashi on the first night, up to Kedarnath on Day 2 with the night at the temple so the 4 AM rudrabhishek is possible, down to Guptkashi on Day 3, and home via Devprayag on Day 4. It is the trek package: the 16 km from Gaurikund is on Day 2 whatever the weather, with ponies and the helicopter from Phata as paid alternatives we can book. There are no other shrines to pad it out, so it suits a long weekend from Haridwar or Delhi, a second trip for someone who has done the full circuit, or a group that only wants the Jyotirlinga. The Kedarnath–Badrinath 5N/6D adds Badrinath for two more nights; the VIP darshan and pony rate pages cover what the on-site costs are.',

  'do-dham-helicopter-same-day-kedarnath-badrinath':
    'One day, no nights, both shrines, ₹1,25,000 per person. The helicopter leaves Dehradun early, lands at the Kedarnath helipad for a VIP darshan slot, flies on to Badrinath for the same, and returns to Dehradun the same afternoon. It is the only itinerary here with no hotel and no drive, which is the point: it exists for pilgrims who cannot trek or travel for a week, for anyone flying into Dehradun for a day, and for families bringing an elderly parent who could not manage the road. The fare is the operator’s charter tariff for a six-seat aircraft and includes the pujari at both dhams. The five-night helicopter circuit adds Yamunotri and Gangotri and the overnight stays; the road Do Dham 5N/6D is the same two temples at a fraction of the price if you have the week.',

  'hemkund-sahib-badrinath-valley-of-flowers-6n-7d':
    'This is not a Char Dham itinerary; it shares only Badrinath with the others. The centre of it is three nights at Ghangaria (3,050 m): the 13 km walk up from Govindghat on Day 2, the Valley of Flowers on Day 3, and the 14 km round trip to Hemkund Sahib at 4,329 m on Day 4 — higher than any of the four dhams. Badrinath follows on Day 5 as the way down, with Brahmakapal rites for those who want them. It runs in the Valley of Flowers season, June to September, when the Char Dham road packages are quietest, and the walking is more than any of them: roughly 40 km over three days. Take it if Hemkund Sahib is the destination, or the wildflowers are; do not take it as a roundabout way to Badrinath. There is no helicopter alternative for Hemkund as there is for Kedarnath.',

  'kainchi-dham-nainital-mukteshwar-3n-4d':
    'Every other itinerary on this site is Garhwal — Haridwar, the four dhams, a trek. This one is Kumaon, the other half of Uttarakhand, and it starts at Kathgodam rather than Haridwar. The draw is Kainchi Dham, Neem Karoli Baba’s ashram on the Nainital–Almora road, and the itinerary is built around going there first thing on Day 1, before the buses fill the parking. Most people do Kainchi as a stop on someone else’s day trip and get an hour in a queue; three nights means you get the forenoon there and still have Nainital, Mukteshwar and Sattal without a rushed drive. Difficulty is Easy and there is no trek at any point — the highest you sleep is Mukteshwar at 2,286 m, well under the altitude where the Garhwal packages start asking things of you. Take it if you are travelling with parents, with small children, or in the March–June and September–November windows when the Char Dham road is either shut or at its busiest. If it is the four dhams you want, nothing here overlaps with them.',
};
