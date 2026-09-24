// ================================================================
// SHIV GANGA TRAVELS — COMPLETE UTTARAKHAND PACKAGE DATA 2026
// Source: gangotritravels.com itineraries + market research
// Updated: May 2026
// ================================================================

import { KEDARNATH_TREK } from './trekRates';

export const SITE = {
  name       : 'Shiv Ganga Travels',
  tagline    : 'Your Sacred Journey, Our Devotion',
  phone      : '+91-7817996730',
  phone2     : '+91-8859123961',
  whatsapp   : '917817996730',
  whatsapp2  : '918859123961',
  email      : 'support@shivgangatravels.com',
  address    : 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410, India',
  // Founding year, set 17 Sep 2026 to match the Google Business Profile
  // (which is what Bing, the company LinkedIn page and JustDial were aligned
  // to on 15 Sep). It was removed sitewide on 14 Sep because the old "since
  // 2010" claim could not be verified; this is now the ONE value every
  // schema node, fact list and llms.txt line reads. Change it here only.
  founded: '2017',
  // Google Business Profile rating and review count — the ONLY place these
  // numbers live. Every badge, pill, FAQ answer, JSON-LD aggregateRating and
  // llms.txt line interpolates from here (they used to be typed into ~35
  // files and drifted). Update both when the profile moves; note the date.
  reviews: { rating: 4.6, count: 67, checked: '2026-09-13' },
  // GST registration. The one identity number we publish, because anyone can
  // verify it at gst.gov.in in seconds — unlike the UTDB/IATO badges that were
  // removed 13 Sep 2026 for having no number behind them. Rendered in the
  // footer, contact page, package trust block, llms.txt, press fast-facts and
  // as schema.org taxID on the TravelAgency node. GST rules also require it
  // to be displayed at the place of business, so it is public by design.
  gstin: '05ALBPC4708P1Z5',
  baseUrl    : 'https://www.shivgangatravels.com',
  // Single source of truth for the "Last updated" freshness stamp shown
  // across all pages. Bump these two values to refresh the whole site.
  // No site-wide lastUpdated any more. Every page reads its own git-derived
  // date from src/lib/pageDates.js (regenerate with `npm run dates`). One
  // constant stamped ~150 pages with the same date regardless of when each
  // changed, which is the false-freshness signal Google discounts.

  // The yatra season every evergreen page advertises in its <title> and meta
  // description. Pilgrims genuinely search "char dham yatra 2026 package", so
  // the year earns its place in the title — but it used to be hard-coded into
  // ~180 files, which meant the whole site read as stale the moment the season
  // turned. Evergreen pages now interpolate this instead.
  //
  // BUMP THIS TO 2027 once the 2026 season closes (13 Nov 2026) and forward
  // bookings open. It is the only edit needed to roll the site over.
  //
  // Pages where the year IS the subject — opening/closing dates, that season's
  // rule changes, road conditions — deliberately keep their year hard-coded and
  // get a new sibling page each year instead. Don't wire those to this value.
  // Working hours. Single source of truth for the contact page, both schema
  // blocks in layout.js, and the HOURS line in every listing packet.
  //
  // Before this existed the site asserted three different answers at once:
  // the Organization schema said 07:00-21:00, the branch schema 08:00-20:00,
  // and the contact page 7 AM-9 PM on weekdays with 8 AM-8 PM on Sunday.
  // Citations built from any one of them would have contradicted the others,
  // which is the precise thing NAP consistency is meant to prevent.
  hours      : { opens: '09:00', closes: '20:00' },  // daily
  hoursHuman : '9 AM - 8 PM',

  season: 2026,
};

// ── Shared inclusions / exclusions ─────────────────────────────
// Exported so /packages can print the standard terms once instead of every
// package page repeating them.
export const INC_STD = [
  'Accommodation on twin/triple sharing basis at hotels/lodges',
  'Daily vegetarian breakfast & dinner (Jain options available)',
  'Private vehicle — Tempo Traveller / Innova Crysta / SUV (AC available in plain areas; optional at ₹2,000 extra in hilly areas)',
  'Local experienced guide + pujari for temple darshans',
  'All toll charges, parking, state taxes, driver allowance',
  'Basic first-aid kit + oxygen cylinder on vehicle',
  'Yatra biometric registration assistance',
  'Pickup & drop at Haridwar railway station / bus stand',
];
export const EXC_STD = [
  'Train / flight tickets to / from Haridwar or Dehradun',
  'Pony, palki or porter charges at Yamunotri & Kedarnath',
  'Helicopter charges (available at extra cost)',
  'Personal expenses — laundry, tips, room heater, phone calls',
  'Temple donations, special puja or abhishek fees',
  'Medical expenses and travel insurance',
  'Lunch on road journey days',
  'Anything not specifically mentioned in inclusions',
];

// Pexels / Wikimedia photos — CDN compressed
const P = 'https://images.pexels.com/photos';
const W = 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop';

export const CATEGORIES = {
  'char-dham': { slug:'char-dham',    name:'Char Dham Yatra',      shortName:'Char Dham',    icon:'🏔️', desc:'All 4 sacred dhams' , cover:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', coverAlt:'Kedarnath Temple with Himalayan peaks — Char Dham Yatra 2026'},
  'do-dham': { slug:'do-dham',      name:'Do Dham Yatra',        shortName:'Do Dham',      icon:'🕌', desc:'Two dhams, one journey' , cover:'https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=800', coverAlt:'Badrinath Temple — Do Dham Yatra 2026'},
  'single-dham': { slug:'single-dham',  name:'Single Dham Yatra',    shortName:'Single Dham',  icon:'🙏', desc:'One shrine, pure devotion' , cover:'https://images.pexels.com/photos/19271393/pexels-photo-19271393.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', coverAlt:'Kedarnath Temple against snow peaks — Single Dham Yatra'},
  'helicopter': { slug:'helicopter',   name:'Helicopter Tours',     shortName:'Helicopter',   icon:'🚁', desc:'VIP aerial yatra' , cover:'https://images.pexels.com/photos/34912011/pexels-photo-34912011.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', coverAlt:'Helicopter over Himalayan peaks — Char Dham by Helicopter'},
  // Kumaon is the only non-Garhwal category left. It is deliberately NOT the
  // old 'uttarakhand' category slug: that one addressed /packages/uttarakhand,
  // which is 410 Gone and must stay that way. One package sits here.
  'kumaon': { slug:'kumaon',       name:'Kumaon Tours',         shortName:'Kumaon',       icon:'🏞️', desc:'Kainchi Dham, lakes, orchards' , cover:'https://images.pexels.com/photos/35536243/pexels-photo-35536243.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', coverAlt:'Nainital lake in the Kumaon hills — Kainchi Dham tour'},
};

// ================================================================
// ALL PACKAGES — 15 packages across 4 categories
// ================================================================
// The 24 Uttarakhand tour/trek packages that used to sit here as a fifth
// category were deleted on 15 Sep 2026 (410 Gone, see src/data/gone.js).
// Each had ~270-390 words of its own against a 50-60% shared template and
// earned 0-10 impressions in 28 days — the same footprint as the cab pages
// cut two days earlier. Noindexing them on 14 Sep was not enough: the pages
// still existed. Non-pilgrimage tours are now enquiry-only (the
// /uttarakhand-tour-packages hub went too, 20 Sep 2026 — it 301s to /packages). The Char Dham / Do Dham / single-dham /
// helicopter packages below are hand-written (1,000-1,400 own words).
export const PACKAGES = [

  // ─────────────────────────────────────────────────────────────
  // CATEGORY 1: CHAR DHAM (5 packages)
  // ─────────────────────────────────────────────────────────────

  {
    slug     : 'char-dham-yatra-9n-10d-haridwar',
    photo    : 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'char-dham',
    name     : 'Char Dham Yatra Package — 9 Nights 10 Days',
    subtitle : 'Ex-Haridwar | Standard | Most Popular',
    seoHeading: 'Char Dham Yatra 2026 — 9N/10D from Haridwar',
    duration : { nights:9, days:10 },
    groupSize: '10–40 pilgrims',
    difficulty:'Moderate',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Tempo Traveller / Innova',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Max: Kedarnath 3,583m',
    price    : { original:24000, discounted:13900, currency:'₹', perPerson:true },
    highlights:[
      'All 4 Dhams — Yamunotri, Gangotri, Kedarnath & Badrinath',
      '6 km trek / pony ride to Yamunotri from Janki Chatti',
      'Divya Shila puja + Surya Kund (88°C) hot spring ritual',
      'Gangotri temple darshan + Bhagirathi holy river dip',
      '16 km Kedarnath trek from Gaurikund (pony optional)',
      'Brahma Muhurta rudrabhishek at Kedarnath Jyotirlinga',
      'Badrinath darshan + Tapt Kund + Mana village visit',
    ],
    inclusions: [...INC_STD],
    exclusions: EXC_STD,
    itinerary: [
      {day:1,  title:'Haridwar → Barkot (220 km | 7–8 hrs)', desc:'Depart 6 AM via Rishikesh, Chamba, Naugaon to Barkot — gateway to Yamunotri. En route enjoy views of the Yamuna Valley and dense forests. Check in, dinner, overnight Barkot (1,220m).'},
      {day:2,  title:'Barkot → Yamunotri Darshan → Barkot', desc:'Early morning drive to Janki Chatti (36 km). Begin 6 km trek (pony/palki available). Worship at Divya Shila before entering Yamunotri temple (3,291m). Cook potatoes in Surya Kund (88°C) as prasad. Seek blessings of Goddess Yamuna. Return trek, drive to Barkot. Overnight.'},
      {day:3,  title:'Barkot → Uttarkashi (100 km | 4 hrs)', desc:'Scenic drive via Dharali valley to Uttarkashi — "Kashi of the Mountains." Visit the ancient Kashi Vishwanath temple and Shakti Devi temple with its legendary 6-metre trident. Walk on the banks of Bhagirathi river. Overnight Uttarkashi (1,165m).'},
      {day:4,  title:'Uttarkashi → Gangotri → Uttarkashi', desc:'Drive 100 km to Gangotri (3,415m) through Harsil valley. Morning aarti at the riverside Gangotri temple. Perform Asthapadhi Snana (holy dip in Bhagirathi). Visit Suryakund, Brahma Kund and Bhagirath Shila. Evening aarti. Return to Uttarkashi. Overnight.'},
      {day:5,  title:'Uttarkashi → Guptkashi (210 km | 7 hrs)', desc:'Long scenic drive via Tehri Dam, Devprayag (confluence of Bhagirathi & Alaknanda), Srinagar, Rudraprayag to Guptkashi — gateway to Kedarnath. Visit twin temples of Kashi Vishwanath & Ardhanarishwar. Overnight Guptkashi (1,319m).'},
      {day:6,  title:'Guptkashi → Gaurikund → Kedarnath Trek', desc:'3 AM departure. Drive to Sonprayag, shared jeep to Gaurikund. Ritual dip in Gaurikund hot spring. Begin 16 km trek: Jungle Chatti (4 km) → Bheem Bali (9 km) → Linchauli (13 km) → Kedarnath temple (16 km, 3,583m). Evening darshan at the Jyotirlinga. Overnight at Kedarnath.'},
      {day:7,  title:'Kedarnath Full Darshan → Guptkashi', desc:'4 AM Brahma Muhurta rudrabhishek puja. Morning aarti. Visit Shankaracharya Samadhi (behind temple) and Bhairavnath temple. Optional: 1 km walk to Gandhi Sarovar glacial lake. Descent begins 9 AM. Return Guptkashi. Overnight.'},
      {day:8,  title:'Guptkashi → Joshimath → Badrinath', desc:'Drive via Ukhimath, Chamoli, Pipalkoti, Joshimath (Narsingh Temple). Arrive Badrinath (3,133m) by afternoon. Tapt Kund thermal bath (45°C). Evening mahabhishek darshan at Badrivishal. Overnight Badrinath.'},
      {day:9,  title:'Badrinath → Mana Village → Rudraprayag', desc:'4 AM Bal Bhog darshan. Visit Mana village (3 km) — Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati River origin. Brahamakapal pitru puja. Drive back via Joshimath and Chamoli to Rudraprayag. Overnight Rudraprayag.'},
      {day:10, title:'Rudraprayag → Devprayag → Haridwar', desc:'Morning drive from Rudraprayag via Devprayag (sacred Sangam of Bhagirathi & Alaknanda — photo stop), Rishikesh. Arrive Haridwar in time for the evening Ganga Aarti at Har Ki Pauri. Tour ends. Certificate + prasad distributed.'},
    ],
    featured : true,
    badge    : 'Most Popular',
    images   : ['kedarnath','badrinath','gangotri','yamunotri'],
    tags     : ['char dham','chardham','haridwar','9 nights','family','group','2026','ex haridwar','private tour','budget','deluxe','customized'],
    metaTitle: 'Char Dham Yatra 9N/10D from Haridwar | All-Inclusive',
    metaDesc : 'Char Dham Yatra 2026 — 9N/10D from ₹13,900/person, all 4 dhams. Direct Haridwar operator, fixed departures & instant confirmation.',
    faqs:[
      {q:'How much does the Char Dham Yatra package from Haridwar cost in 2026?', a:'Our 9N/10D Char Dham Yatra from Haridwar starts at ₹13,900 per person on the budget tier (shared Tempo Traveller, clean guesthouses). Deluxe with an Innova Crysta and 2–3 star hotels runs ₹30,000. A private couple package is roughly ₹42,000–₹60,000 depending on tier. These are direct operator rates — no agent margin sits on top. Note: AC is standard in plains; in hilly areas it can be availed at ₹2,000 extra.'},
      {q:'What is included in the package?', a:'AC transport for the full route, twin-sharing hotels, daily breakfast and dinner, an experienced driver-cum-guide, pujari assistance at the temples, an oxygen cylinder in the vehicle, help with the mandatory Char Dham registration, and pickup/drop at Haridwar railway station. Pony, palki and helicopter at Kedarnath are extra.'},
      {q:'Is the Char Dham 2026 registration mandatory, and do you handle it?', a:'Yes. Every pilgrim must register on the Uttarakhand government Tourist Care portal (registrationandtouristcare.uk.gov.in) before darshan, and you cannot enter Kedarnath or Yamunotri without the QR slip. We complete the registration for every guest on the package using your ID and photo — you do not have to fight the portal yourself.'},
      {q:'Is the Kedarnath trek mandatory?', a:'No. The 16 km from Gaurikund can be done on foot, by pony (' + KEDARNATH_TREK.pony.oneWay + '), palki (' + KEDARNATH_TREK.palki.bandLabel + ') or helicopter (from ₹3,043 one way, official IRCTC fare). We book any of these for you. Most fit pilgrims walk up and ride down; senior travellers usually take the pony both ways.'},
      {q:'Can I do this Char Dham Yatra from Delhi or Noida instead of Haridwar?', a:'Yes. The package is built around a Haridwar start, but we run pickups from Delhi, Noida, Gurugram and Dehradun for an add-on of roughly ₹2,000–₹3,500 per person, or you can take a train to Haridwar and we receive you at the station. See our Char Dham Yatra from Delhi page for the door-pickup version.'},
      {q:'How is this different from the IRCTC Char Dham package?', a:'IRCTC runs large fixed-departure group tours on a set calendar. We are a Haridwar-based operator, so departures are flexible (any date you pick), groups are smaller, the itinerary can be customised, and you deal directly with the people running your trip rather than a call centre. Our rates also tend to undercut the equivalent IRCTC tier because there is no middle layer.'},
      {q:'Is this package suitable for senior citizens and families?', a:'Very much so — it is our most-booked family option. We arrange ground-floor rooms, a slower pace where needed, pony or palki at Kedarnath, and the oxygen cylinder travels with you. For pilgrims over 70 or with heart/BP conditions, tell us in advance and we adjust rest days and the Kedarnath plan.'},
      {q:'When does Char Dham Yatra 2026 open and close?', a:'Confirmed 2026 dates: Yamunotri and Gangotri open April 19 (Akshaya Tritiya), Kedarnath April 22 (8:00 AM), Badrinath April 23. Closing on Bhai Dooj: Yamunotri Nov 11, Gangotri Nov 10, Kedarnath Nov 11, Badrinath Nov 13. May–June and Sept–Oct are the most comfortable windows.'},
    ],
  },

  {
    slug     : 'char-dham-yatra-11n-12d-haridwar',
    photo    : 'https://images.pexels.com/photos/16786632/pexels-photo-16786632.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'char-dham',
    name     : 'Char Dham Yatra — 11 Nights 12 Days Deluxe',
    subtitle : 'Ex-Haridwar | Deluxe Hotels | Extra Rest Days',
    seoHeading: 'Char Dham Yatra Deluxe 2026 — 11N/12D | All 4 Dhams',
    duration : { nights:11, days:12 },
    groupSize: '6–30 pilgrims',
    difficulty:'Moderate',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Innova Crysta / Tempo Traveller',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Max: Kedarnath 3,583m',
    price    : { original:50000, discounted:30000, currency:'₹', perPerson:true },
    highlights:[
      '3-star deluxe hotels at every stopover',
      'Extra rest day at Uttarkashi with Harsil Valley excursion',
      'Overnight luxury tent stay at Kedarnath',
      'VIP abhishek puja at Kedarnath & Badrinath',
      'Kempty Falls, Tehri Lake & Devprayag photo stops',
      'Private Innova Crysta for small groups (up to 7)',
      'Welcome kit with puja items, poncho & yatra guide',
    ],
    inclusions:[...INC_STD, '3-star deluxe hotel at all stopovers', 'Overnight luxury tent at Kedarnath', 'Special VIP abhishek puja at Kedarnath & Badrinath', 'Welcome kit with puja items & poncho', 'Tehri Lake sightseeing en route'],
    exclusions: EXC_STD,
    itinerary:[
      {day:1,  title:'Arrive Haridwar', desc:'Pickup at Haridwar station. Check in to deluxe hotel. Evening Ganga Aarti at Har Ki Pauri. Briefing by guide. Overnight.'},
      {day:2,  title:'Haridwar → Mussoorie → Barkot', desc:'Drive via Rishikesh to Mussoorie — Queen of Hills. Visit Kempty Falls. Continue to Barkot via Naugaon. Overnight Barkot.'},
      {day:3,  title:'Barkot → Yamunotri Darshan → Barkot', desc:'Janki Chatti trek. Divya Shila puja. Surya Kund hot spring. Full darshan of Goddess Yamuna. Return Barkot.'},
      {day:4,  title:'Barkot → Uttarkashi (via Prakateshwar Cave)', desc:'Scenic drive through Yamuna valley. Vishwanath & Shakti temples. Bhagirathi ghat walk. Overnight Uttarkashi.'},
      {day:5,  title:'Uttarkashi → Harsil Valley Excursion', desc:'Day trip to Harsil — apple orchards, cedar forests, crystal-clear Bhagirathi river. One of India\'s most scenic valleys. Optional: Dharali village walk. Return Uttarkashi.'},
      {day:6,  title:'Uttarkashi → Gangotri Darshan → Uttarkashi', desc:'Early drive to Gangotri. Morning aarti, Bhagirathi holy dip, Suryakund, Brahma Kund. Evening aarti. Return Uttarkashi.'},
      {day:7,  title:'Uttarkashi → Guptkashi (via Tehri Reservoir)', desc:'Drive via New Tehri Dam — Asia\'s highest earthfill dam (260m). Lake views. Devprayag Sangam. Arrive Guptkashi. Overnight.'},
      {day:8,  title:'Guptkashi → Gaurikund → Kedarnath Trek', desc:'3 AM departure. Gaurikund bath. 16 km trek with rest stops. Arrive Kedarnath afternoon. VIP darshan. Overnight luxury tent.'},
      {day:9,  title:'Kedarnath Full Day', desc:'4 AM Brahma Muhurta rudrabhishek puja. Morning aarti. Shankaracharya Samadhi, Gandhi Sarovar lake, Bhairavnath temple. Rest and meditation. Overnight Kedarnath.'},
      {day:10, title:'Kedarnath Descent → Guptkashi', desc:'Final morning darshan. Descent to Gaurikund by 9 AM. Drive Guptkashi. Overnight.'},
      {day:11, title:'Guptkashi → Badrinath (via Joshimath)', desc:'Drive via Okhimath, Chamoli, Joshimath. Arrive Badrinath. Tapt Kund dip. Mahabhishek darshan. Overnight.'},
      {day:12, title:'Badrinath → Mana → Rishikesh → Haridwar', desc:'Bal Bhog darshan. Mana village, Vyas Gufa, Bhim Pul. Return drive via Rishikesh. Haridwar Ganga Aarti. Tour ends.'},
    ],
    featured : true,
    badge    : 'Best Seller',
    images   : ['kedarnath','badrinath','gangotri','yamunotri'],
    tags     : ['char dham','chardham deluxe','haridwar','kedarnath stay','harsil','luxury','3 star hotels','slow paced','11 nights'],
    metaTitle: 'Char Dham Deluxe 11N/12D | Kedarnath Night Stay',
    metaDesc : 'Char Dham Yatra Deluxe 2026 — 11N/12D from ₹30,000/person, 3-star hotels. Direct Haridwar operator, customizable itinerary & instant confirmation.',
    faqs:[],
  },

  {
    slug     : 'char-dham-yatra-helicopter-5n-6d-dehradun',
    photo    : 'https://images.pexels.com/photos/34912011/pexels-photo-34912011.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'char-dham',
    name     : 'Char Dham Yatra by Helicopter — 5N/6D',
    subtitle : 'Ex-Dehradun | VIP Luxury | All-Inclusive',
    seoHeading: 'Char Dham Yatra by Helicopter 2026 — 5N/6D from Dehradun | VIP Darshan',
    duration : { nights:5, days:6 },
    groupSize: '2–8 pilgrims',
    difficulty:'Easy (no trekking required)',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Helicopter from Sahastradhara Helipad, Dehradun',
    startCity: 'Dehradun',
    endCity  : 'Dehradun',
    altitude : 'Max: Kedarnath 3,583m (helipad at 3,566m)',
    // Repriced Aug 2026 to ₹2,30,000. The previous ₹85,000 was a stale figure
    // that described a full charter at a ground-package price — the site's own
    // /char-dham-helicopter page already stated the real market band of
    // ₹2,09,000–2,50,000, so the data and the copy contradicted each other.
    // No struck-through "original": we do not invent a was-price we never charged.
    price    : { original:230000, discounted:230000, currency:'₹', perPerson:true },
    highlights:[
      'Complete Char Dham in just 6 days by helicopter',
      'Departs from Sahastradhara Helipad, Dehradun',
      'VIP priority darshan at all four dhams — no queues',
      'Luxury hotel accommodation at every stopover',
      'All meals — breakfast, lunch & dinner included',
      'Personal pujari for special abhishek at each dham',
      '5 kg duffle bag per person (provided by operator)',
    ],
    inclusions:['Helicopter transfers between all 4 dhams & Dehradun','Luxury hotel (4-star equivalent) accommodation','All meals — breakfast, lunch & dinner','VIP darshan passes + personal pujari','Duffle bag (5 kg) provided','Pickup & drop at Dehradun airport/railway station','Body weight check-in + pre-departure briefing','Basic travel insurance'],
    exclusions:['Airfare / train to Dehradun','Personal expenses and tips','Helicopter cancellation due to bad weather (reschedule/refund policy applies)'],
    // The aircraft is flown by a DGCA-approved third-party operator; we book and
    // coordinate the charter and act as agent for that portion. Stated plainly
    // because the 2026 DGCA capacity cuts make cancellations more likely.
    operatorNote: 'Helicopter flights are operated by DGCA-approved third-party operators. Shiv Ganga Travels books and coordinates the charter and handles all ground arrangements; for the flying portion we act as agent, and the operator\'s weather and cancellation rules apply.',
    itinerary:[
      {day:1, title:'Arrive Dehradun — Pre-Yatra Briefing', desc:'Receive at Dehradun airport/railway station. Check in hotel. 8:30 PM mandatory pre-yatra briefing — itinerary, duffle bag distribution, body weight recording (helicopter weight limits apply). Dinner and overnight Dehradun.'},
      {day:2, title:'Dehradun → Kharsali (Yamunotri) → Harsil/Uttarkashi', desc:'6 AM fly from Sahastradhara Helipad to Kharsali helipad. 1 km walk/pony to Yamunotri temple. Divya Shila puja, Surya Kund ritual, full darshan. Fly to Harsil/Gangotri area. Overnight Uttarkashi luxury hotel.'},
      {day:3, title:'Gangotri Darshan → Transfer to Sitapur/Phata', desc:'Morning flight to Gangotri helipad. Bhagirathi river abhishek. Gangotri temple puja. Fly to Sitapur or Phata — staging base for Kedarnath. Overnight luxury camp.'},
      {day:4, title:'Kedarnath Helicopter Darshan → Badrinath', desc:'5 AM fly Phata → Kedarnath helipad (9-min flight, 3,566m). VIP rudrabhishek puja at the Jyotirlinga. Shankaracharya Samadhi. Return helicopter to Phata. Road transfer to Badrinath (3 hrs). Overnight Badrinath.'},
      {day:5, title:'Badrinath Full Darshan + Mana Village', desc:'4 AM Bal Bhog & special puja. Tapt Kund bath. Complete Badrinath complex: Kubera temple, Garuda Shila, Narad Kund. Mana village: Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati river, Brahamakapal. Overnight Badrinath.'},
      {day:6, title:'Badrinath → Dehradun — Journey Home', desc:'Final darshan. Helicopter or road transfer to Dehradun. Reach by noon. Transfer to airport/station. Certificates and prasad distributed. Char Dham completed in 6 blessed days.'},
    ],
    featured : true,
    badge    : 'Premium',
    images   : ['helicopter','kedarnath','badrinath'],
    tags     : ['char dham','helicopter','4 dham by helicopter','DGCA approved','sahastradhara','luxury','dehradun','vip','senior','fast','no trek'],
    metaTitle: 'Char Dham Helicopter Package 5N/6D | Dehradun Charter',
    metaDesc : 'Char Dham Helicopter Package 2026 — 5N/6D from Dehradun, ₹2,30,000/person all-inclusive. DGCA-approved third-party operators. Direct booking, no agent commission.',
    faqs:[{q:'What is the luggage limit for helicopter yatra?', a:'5 kg per person in the provided duffle bag. No hard-shell suitcases permitted.'},{q:'What if helicopter gets cancelled due to weather?', a:'We reschedule to next available slot. If rescheduling is not possible, the helicopter portion is fully refunded.'}],
  },

  {
    slug     : 'char-dham-yatra-senior-citizen-12n-13d',
    photo    : 'https://images.pexels.com/photos/11974834/pexels-photo-11974834.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'char-dham',
    name     : 'Char Dham Yatra — Senior Citizen Special 12N/13D',
    subtitle : 'Ex-Haridwar | Slow-Paced | Medical Attendant',
    seoHeading: 'Senior Citizen Char Dham Yatra 2026 — 12N/13D',
    duration : { nights:12, days:13 },
    groupSize: '10–30 pilgrims (60+ age group)',
    difficulty:'Easy–Moderate (Yamunotri pony included; Kedarnath pony or palki optional)',
    season   : 'May – June & Sept – Oct 2026',
    transport:'AC Tempo Traveller (ground floor priority)',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Max: Kedarnath 3,583m',
    price    : { original:32000, discounted:21000, currency:'₹', perPerson:true },
    highlights:[
      'Designed for pilgrims aged 60+ with extra rest days',
      'Pony at Yamunotri (6 km both ways) — included',
      `Palki at either trek, or a pony at Kedarnath — optional, booked for you at the official rate (Kedarnath palki ${KEDARNATH_TREK.palki.bandLabel})`,
      'Medical attendant + oxygen cylinders on board',
      'Ground floor rooms preferred at all hotels',
      'Slow driving pace with frequent rest & chai stops',
      'Light sattvic diet — low oil, Jain options available',
    ],
    inclusions:[...INC_STD, 'Pony at Yamunotri — both ways included', 'Certified medical attendant on mountain stretches', 'Extra oxygen cylinders + pulse oximeters on vehicle', 'Ground floor rooms preferred', 'Compression socks and walking sticks'],
    // Palki and the Kedarnath pony came out of the fare on 23 Sep 2026: the
    // Zila Panchayat's 2026 board puts a Kedarnath palki return alone at
    // ₹15,200–21,200, more than the whole package. Both are optional extras.
    exclusions: EXC_STD.map((e) => e.startsWith('Pony, palki') ? 'Palki at Yamunotri or Kedarnath, and pony at Kedarnath — optional, arranged on request at the official rate' : e),
    itinerary:[
      {day:1,  title:'Arrive Haridwar — Medical Check', desc:'Receive at Haridwar station. Check in hotel. Medical check by our attendant (BP, oxygen levels). Welcome dinner, group briefing. Optional: Ganga Aarti from ghats (seated viewing).'},
      {day:2,  title:'Haridwar → Rishikesh Acclimatization Day', desc:'Gentle sightseeing — Triveni Ghat, Lakshman Jhula, Ram Jhula. Parmarth Niketan for Ganga Aarti. Return Haridwar. Rest afternoon. This is an energy conservation day before the mountains.'},
      {day:3,  title:'Haridwar → Barkot (Slow Drive)', desc:'Depart 7 AM at gentle pace. Rest stop every 90 mins. Lunch en route. Arrive Barkot 4 PM. Evening flat walk near hotel. Early dinner 7 PM. Recommended 9 PM bedtime.'},
      {day:4,  title:'Barkot — Rest & Briefing Day', desc:'Full rest day. Acclimatize to altitude 1,220m. Optional gentle walk to Saptarishi Kund. Medical check. Briefing about tomorrow’s Yamunotri pony (and palki, for anyone who has opted for one).'},
      {day:5,  title:'Barkot → Yamunotri (Pony Both Ways)', desc:'Drive to Janki Chatti. All pilgrims on pony both ways (included); palki for anyone who has opted for it. Temple darshan, Surya Kund puja. Return. Overnight Barkot.'},
      {day:6,  title:'Barkot → Uttarkashi', desc:'Relaxed drive. Arrive Uttarkashi by lunch. Afternoon rest. Evening Vishwanath temple (flat walking, manageable). Early dinner. Overnight.'},
      {day:7,  title:'Uttarkashi → Gangotri → Uttarkashi', desc:'Drive to Gangotri. 400m flat walk from parking to temple. Ganga puja, river dip optional. Return Uttarkashi. Rest afternoon.'},
      {day:8,  title:'Uttarkashi → Guptkashi (4 rest stops)', desc:'Long drive with 4 comfort breaks. Arrive Guptkashi 5 PM. Hot water bag for tired muscles. Early dinner. Overnight.'},
      {day:9,  title:'Guptkashi → Kedarnath Ascent', desc:'4 AM departure. Drive Gaurikund. Hot spring ritual dip. The 16 km ascent on foot, or by pony or palki (optional, booked in advance at the official rate). Rest stops at Bheem Bali and Linchauli. Arrive Kedarnath by afternoon. Rest. Evening darshan.'},
      {day:10, title:'Kedarnath — Full Darshan + Rest', desc:'Morning VIP darshan (seated arrangement). Shankaracharya Samadhi visit. Oxygen available. Afternoon rest at 3,583m altitude.'},
      {day:11, title:'Kedarnath → Guptkashi (Descent)', desc:'Morning descent at a gentle pace, on foot or by pony or palki (optional). Drive Guptkashi. Medical check. Rest.'},
      {day:12, title:'Guptkashi → Badrinath (Comfort Drive)', desc:'Drive via Joshimath with frequent stops. Arrive Badrinath 2 PM. Tapt Kund soak (excellent for elderly joints, 45°C). Evening darshan.'},
      {day:13, title:'Badrinath → Mana → Haridwar', desc:'Morning puja (seated VIP). Mana village 3 km paved road walk. Return drive Haridwar via Rishikesh. Ganga Aarti. Tour ends.'},
    ],
    featured : false,
    badge    : 'Senior Special',
    images   : ['kedarnath','badrinath','yamunotri','gangotri'],
    tags     : ['char dham','senior citizen','pony palki','medical','slow paced','60 plus','65 plus','elderly','doctor','oxygen'],
    metaTitle: 'Senior Citizen Char Dham Yatra 12N/13D | Slow-Paced',
    metaDesc : 'Senior Citizen Char Dham Yatra 2026 — 12N/13D from ₹21,000/person. Direct Haridwar operator, customizable itinerary & instant confirmation.',
    faqs:[],
  },

  {
    slug     : 'char-dham-yatra-from-delhi-10n-11d',
    photo    : 'https://images.pexels.com/photos/14149541/pexels-photo-14149541.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'char-dham',
    name     : 'Char Dham Yatra Package from Delhi — 10N/11D',
    subtitle : 'Ex-Delhi | Vol Bus + Private Car | Group Tour',
    seoHeading: 'Char Dham Yatra from Delhi 2026 — 10N/11D | All 4 Dhams',
    duration : { nights:10, days:11 },
    groupSize: '15–50 pilgrims',
    difficulty:'Moderate',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Volvo Bus Delhi → Haridwar + AC Tempo Traveller',
    startCity: 'Delhi',
    endCity  : 'Delhi',
    altitude : 'Max: Kedarnath 3,583m',
    price    : { original:28000, discounted:17200, currency:'₹', perPerson:true },
    highlights:[
      'Pickup from Delhi (Kashmiri Gate / Majnu Ka Tila)',
      'Volvo Bus Delhi to Haridwar + AC Tempo Traveller for yatra',
      'All 4 Dhams covered in 10 nights / 11 days',
      'VIP darshan assistance at all temples',
      'Haridwar Ganga Aarti on arrival day',
      'Rishikesh local sightseeing on return',
      'Group departure — meet fellow pilgrims',
    ],
    inclusions:[...INC_STD, 'Volvo Bus Delhi → Haridwar (onward)', 'AC Tempo Traveller for full yatra', 'Pickup from Kashmiri Gate or Majnu Ka Tila, Delhi'],
    exclusions: EXC_STD,
    itinerary:[
      {day:1,  title:'Delhi → Haridwar (Overnight Volvo Bus)', desc:'Board Volvo Bus at Kashmiri Gate / Majnu Ka Tila, Delhi at 9 PM. Comfortable overnight journey to Haridwar.'},
      {day:2,  title:'Arrive Haridwar — Rest Day', desc:'Arrive Haridwar 6 AM. Check in, freshen up, breakfast. Rest. Evening attend famous Ganga Aarti at Har Ki Pauri. Overnight Haridwar.'},
      {day:3,  title:'Haridwar → Barkot', desc:'Depart 6 AM. Scenic drive via Rishikesh, Chamba, Naugaon to Barkot. Overnight.'},
      {day:4,  title:'Barkot → Yamunotri Darshan → Barkot', desc:'Janki Chatti trek (6 km). Divya Shila puja, Surya Kund ritual, full darshan. Return Barkot.'},
      {day:5,  title:'Barkot → Gangotri → Uttarkashi', desc:'Drive via Uttarkashi to Gangotri (100 km). Temple darshan, Bhagirathi dip. Return Uttarkashi. Overnight.'},
      {day:6,  title:'Uttarkashi → Guptkashi', desc:'Long drive via Tehri, Devprayag, Rudraprayag. Overnight Guptkashi.'},
      {day:7,  title:'Guptkashi → Kedarnath Trek (16 km)', desc:'3 AM start. Gaurikund bath. 16 km trek. Arrive Kedarnath afternoon. Evening darshan. Overnight.'},
      {day:8,  title:'Kedarnath Puja → Guptkashi', desc:'Brahma Muhurta puja. Morning aarti. Descent to Gaurikund. Drive Guptkashi.'},
      {day:9,  title:'Guptkashi → Badrinath', desc:'Drive via Joshimath. Arrive Badrinath. Tapt Kund, evening darshan.'},
      {day:10, title:'Badrinath → Mana → Rishikesh', desc:'Morning puja. Mana village. Return drive. Overnight Rishikesh.'},
      {day:11, title:'Rishikesh → Haridwar → Delhi', desc:'Rishikesh sightseeing. Haridwar Ganga Aarti. Board bus Delhi. Tour ends on arrival Delhi (next morning).'},
    ],
    featured : false,
    badge    : null,
    images   : ['gangotri','kedarnath','badrinath','yamunotri'],
    tags     : ['char dham','delhi','volvo bus','group tour','affordable','delhi pickup','haridwar via delhi','290km','noida gurugram'],
    metaTitle: 'Char Dham Yatra from Delhi 10N/11D | Delhi Pickup',
    metaDesc : 'Char Dham Yatra from Delhi 2026 — 10N/11D from ₹17,200/person. Direct Haridwar operator, fixed departures & instant confirmation.',
    faqs:[
      {q:'How much is the Char Dham Yatra package from Delhi in 2026?', a:'Our 10N/11D group package from Delhi starts at ₹17,200 per person — that includes the overnight Volvo from Delhi to Haridwar, AC Tempo Traveller for the whole yatra, hotels, daily breakfast and dinner, guide and registration. A private car version (Innova Crysta, your own family only) runs roughly ₹32,000–₹33,800 per person depending on hotel tier. Direct rates, no agent commission.'},
      {q:'How far is Delhi to Haridwar and how long does it take?', a:'Roughly 220–240 km depending on your pickup point, about 5–6 hours by road via the Delhi–Dehradun Expressway. We run it overnight on a Volvo so you sleep through the journey and arrive fresh at 6 AM, saving a full daytime leg.'},
      {q:'Can I do the Char Dham Yatra from Delhi by car instead of bus?', a:'Yes. Tell us and we send a private AC car (Innova Crysta or Ertiga) to your Delhi/Noida/Gurugram address, drive you to Haridwar, and the same vehicle stays with you for the full yatra. It costs more than the Volvo group option but gives you door pickup, your own pace and no co-passengers.'},
      {q:'Is there a Char Dham Yatra from Delhi by train or helicopter?', a:'By train: take any Delhi–Haridwar service (Shatabdi, Jan Shatabdi, Mussoorie Express) and we receive you at Haridwar station — we adjust the package to a 9N/10D ex-Haridwar plan. By helicopter: there is no chopper from Delhi itself; the Char Dham helicopter circuit departs from Dehradun (Sahastradhara helipad), so we drive or fly you to Dehradun and start the 5N/6D heli yatra there.'},
      {q:'Where in Delhi do you pick up from?', a:'Standard boarding is Kashmiri Gate ISBT or Majnu Ka Tila for the Volvo. For the private car option we pick up from any home address across Delhi NCR — Noida, Greater Noida, Gurugram, Faridabad and Ghaziabad included, usually for no extra charge within NCR.'},
      {q:'How is this different from the IRCTC Char Dham package from Delhi?', a:'IRCTC sells fixed-date rail/road group tours through their portal with set departures and large groups. We are the operator on the ground in Haridwar — flexible dates, smaller groups, a customisable itinerary, and direct contact with the team running your trip. Our equivalent tier usually costs less because you are not paying a booking layer on top.'},
      {q:'Do you handle the mandatory Char Dham 2026 registration for Delhi pilgrims?', a:'Yes. Every traveller must register on the Uttarakhand Tourist Care portal before darshan. Send us your photo and ID and we complete it for you, then hand over the QR slips when you reach Haridwar — you do not need to deal with the government site yourself.'},
      {q:'When does Char Dham Yatra 2026 open?', a:'Yamunotri and Gangotri open April 19 (Akshaya Tritiya), Kedarnath April 22, Badrinath April 23. The shrines close in the second week of November. May–June and September–October are the most comfortable windows from Delhi.'},
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // CATEGORY 2: DO DHAM (4 packages)
  // ─────────────────────────────────────────────────────────────

  {
    slug     : 'kedarnath-badrinath-do-dham-5n-6d',
    photo    : 'https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'do-dham',
    name     : 'Kedarnath Badrinath Do Dham Yatra — 5N/6D',
    subtitle : 'Ex-Haridwar | Most Popular Do Dham | Best Value',
    seoHeading: 'Kedarnath Badrinath Do Dham 2026 — 5N/6D Haridwar',
    duration : { nights:5, days:6 },
    groupSize: '10–40 pilgrims',
    difficulty:'Moderate (16 km Kedarnath trek)',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Tempo Traveller / Innova',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Max: Kedarnath 3,583m',
    price    : { original:18000, discounted:8200, currency:'₹', perPerson:true, isRange:true },
    highlights:[
      'Kedarnath Jyotirlinga — sacred hump of Lord Shiva',
      'Gaurikund hot spring ritual dip before the trek',
      '16 km Kedarnath trek with rest stops (pony optional)',
      'Brahma Muhurta rudrabhishek puja at Kedarnath',
      'Badrinath — abode of Lord Vishnu on Alaknanda banks',
      'Tapt Kund (45°C natural thermal spring) at Badrinath',
      'Mana village — last Indian village before Tibet',
    ],
    inclusions:[...INC_STD],
    exclusions: EXC_STD,
    itinerary:[
      {day:1, title:'Haridwar → Guptkashi (210 km | 7–8 hrs)', desc:'Depart Haridwar 5:30 AM. Drive via Rishikesh, Devprayag (Sangam photo stop), Srinagar, Rudraprayag to Guptkashi. Visit Vishwanath & Ardhanarishwar temples. Overnight Guptkashi.'},
      {day:2, title:'Guptkashi → Gaurikund → Kedarnath Trek', desc:'3:30 AM departure. Drive Sonprayag → Gaurikund. Hot spring dip. 16 km trek via Jungle Chatti, Bheem Bali, Linchauli to Kedarnath (3,583m). Evening darshan. Overnight.'},
      {day:3, title:'Kedarnath Full Darshan → Guptkashi', desc:'4 AM rudrabhishek puja. Morning aarti. Shankaracharya Samadhi + Gandhi Sarovar optional. Descent 10 AM. Drive Guptkashi. Overnight.'},
      {day:4, title:'Guptkashi → Joshimath → Badrinath (165 km)', desc:'Drive via Okhimath, Ukhimath, Chamoli, Joshimath (Narsingh Temple). Arrive Badrinath. Tapt Kund dip. Mahabhishek evening darshan.'},
      {day:5, title:'Badrinath Full Darshan → Mana Village', desc:'4 AM Bal Bhog. VIP puja. Mana village: Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati origin, Brahamakapal. Neelkanth peak viewpoint. Afternoon return drive.'},
      {day:6, title:'Return → Rishikesh → Haridwar', desc:'Morning drive via Joshimath, Devprayag, Rishikesh. Ram Jhula walk. Haridwar Ganga Aarti. Trip ends.'},
    ],
    featured : true,
    badge    : 'Best Value',
    images   : ['kedarnath','badrinath'],
    tags     : ['do dham','2 dham yatra','kedarnath badrinath','badrinath kedarnath','haridwar','jyotirlinga','overnight kedarnath','mahabhishek'],
    metaTitle: 'Kedarnath Badrinath Do Dham 5N/6D | Night at Kedarnath',
    metaDesc : 'Kedarnath Badrinath Do Dham Yatra 2026 — 5N/6D from ₹11,000/person. Direct Haridwar operator, fixed departures & instant confirmation.',
    // The separate "by helicopter 3N/4D" package page was merged into this one
    // on 15 Sep 2026 — same two dhams, same operator, 79% identical page. It is
    // sold as a variant of this itinerary now.
    localInsights:[
      'By helicopter instead of the trek: the same two dhams in 3N/4D — Phata/Guptkashi to Kedarnath by helicopter, Badrinath by road — from ₹22,500 per person including the helicopter ticket, VIP darshan slot and hotels. Ask for the helicopter variant when you enquire.',
    ],
    faqs:[
      { q:'Can I do Kedarnath–Badrinath by helicopter instead of trekking?', a:'Yes. The helicopter variant of this package runs 3N/4D: you fly Phata or Guptkashi to Kedarnath and back the same morning, then drive to Badrinath. It is ₹22,500 per person upwards depending on the helipad and date, against ₹8,200 for the road-and-trek version, and it is the one we recommend for anyone over 65 or with a heart or knee condition. Helicopter tickets are weather-dependent; if the flight is cancelled we reschedule or refund the helicopter portion.' },
    ],
  },

  {
    slug     : 'yamunotri-gangotri-do-dham-4n-5d',
    photo    : 'https://images.pexels.com/photos/18590571/pexels-photo-18590571.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'do-dham',
    name     : 'Yamunotri Gangotri Do Dham Yatra — 4N/5D',
    subtitle : 'Ex-Haridwar | Goddess Yamuna & Mother Ganga',
    seoHeading: 'Yamunotri Gangotri Do Dham 2026 — 4N/5D Haridwar',
    duration : { nights:4, days:5 },
    groupSize: '10–40 pilgrims',
    difficulty:'Moderate (6 km trek at Yamunotri)',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Tempo Traveller / Car',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Max: Gangotri 3,415m / Yamunotri 3,291m',
    price    : { original:11500, discounted:7100, currency:'₹', perPerson:true },
    highlights:[
      'Yamunotri — source of sacred Yamuna River at 3,291m',
      'Divya Shila puja + Surya Kund (88°C) hot spring',
      'Gangotri — origin of holy River Ganga at 3,415m',
      'Bhagirathi Asthapadhi Snana (holy dip in Ganga)',
      'Harsil valley — one of India\'s most scenic valleys',
      'Vishwanath Mandir at Uttarkashi',
      'No high-altitude Kedarnath trek required',
    ],
    inclusions:[...INC_STD],
    exclusions: EXC_STD,
    itinerary:[
      {day:1, title:'Haridwar → Barkot (220 km)', desc:'Depart 6 AM via Rishikesh, Narendra Nagar, Chamba, Naugaon to Barkot. Yamuna valley views. Overnight Barkot.'},
      {day:2, title:'Barkot → Yamunotri Darshan → Barkot', desc:'5 AM drive Janki Chatti. 6 km trek (pony/palki optional). Yamunotri temple (3,291m) darshan. Divya Shila puja. Surya Kund hot spring (cook rice/potatoes as prasad). Return Barkot.'},
      {day:3, title:'Barkot → Gangotri → Uttarkashi', desc:'Drive via Uttarkashi to Gangotri. Asthapadhi Snana in Bhagirathi. Gangotri temple darshan, morning aarti. Suryakund, Brahma Kund. Optional evening puja. Overnight Uttarkashi.'},
      {day:4, title:'Uttarkashi → Vishwanath Temple → Drive', desc:'Morning Vishwanath temple, Shakti temple visit. Drive via Tehri, Devprayag. Overnight Rishikesh/Haridwar.'},
      {day:5, title:'Rishikesh → Haridwar — Tour End', desc:'Rishikesh visit: Laxman Jhula, Triveni Ghat. Haridwar Ganga Aarti. Tour ends.'},
    ],
    featured : false,
    badge    : null,
    images   : ['yamunotri','gangotri'],
    tags     : ['do dham','yamunotri gangotri','haridwar','easy trek','surya kund','harsil valley','gangotri package','yamunotri package'],
    metaTitle: 'Yamunotri Gangotri Do Dham 4N/5D | Via Harsil Valley',
    metaDesc : 'Yamunotri Gangotri Do Dham Yatra 2026 — 4N/5D from ₹7,100/person. Direct Haridwar operator, customizable itinerary & instant confirmation.',
    faqs:[],
  },


  {
    slug     : 'teen-dham-yamunotri-gangotri-badrinath-7n-8d',
    photo    : 'https://images.pexels.com/photos/35408529/pexels-photo-35408529.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'do-dham',
    name     : 'Teen Dham Yatra — Yamunotri Gangotri Badrinath 7N/8D',
    subtitle : 'Ex-Haridwar | 3 Dhams | No Kedarnath Trek',
    seoHeading: 'Teen Dham Yatra 2026 — Yamunotri Gangotri Badrinath 7N/8D',
    duration : { nights:7, days:8 },
    groupSize: '10–40 pilgrims',
    difficulty:'Easy–Moderate (only 6 km Yamunotri trek)',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Tempo Traveller / Car',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Max: Gangotri 3,415m',
    price    : { original:18000, discounted:11600, currency:'₹', perPerson:true },
    highlights:[
      '3 sacred dhams — Yamunotri, Gangotri & Badrinath',
      'No 16 km Kedarnath trek — suitable for all fitness levels',
      'Surya Kund hot spring ritual at Yamunotri',
      'Bhagirathi holy dip at Gangotri',
      'Tapt Kund, Mana village, Vyas Gufa at Badrinath',
      'Harsil valley excursion en route to Gangotri',
      'Value package — 3 dhams at 2-dham price',
    ],
    inclusions:[...INC_STD],
    exclusions: EXC_STD,
    itinerary:[
      {day:1, title:'Haridwar → Barkot', desc:'Drive 220 km via Rishikesh, Chamba, Naugaon. Overnight Barkot.'},
      {day:2, title:'Barkot → Yamunotri Darshan → Barkot', desc:'Janki Chatti trek (6 km). Divya Shila puja. Surya Kund ritual. Full darshan. Return Barkot.'},
      {day:3, title:'Barkot → Uttarkashi', desc:'100 km drive. Vishwanath temple. Overnight Uttarkashi.'},
      {day:4, title:'Uttarkashi → Gangotri → Harsil', desc:'100 km to Gangotri. Bhagirathi dip, temple darshan, aarti. Drive to scenic Harsil valley. Overnight.'},
      {day:5, title:'Harsil / Uttarkashi → Guptkashi (via Tehri)', desc:'Drive via Tehri Dam, Devprayag, Rudraprayag. Overnight Guptkashi.'},
      {day:6, title:'Guptkashi → Joshimath → Badrinath', desc:'Drive via Chamoli, Joshimath (Narsingh Temple). Arrive Badrinath. Tapt Kund, evening darshan.'},
      {day:7, title:'Badrinath Full Darshan → Mana Village', desc:'4 AM puja. Mana village full tour. Afternoon return drive. Overnight Srinagar/Rishikesh.'},
      {day:8, title:'Rishikesh → Haridwar — Tour End', desc:'Rishikesh sightseeing. Haridwar Ganga Aarti. Tour ends.'},
    ],
    featured : false,
    badge    : null,
    images   : ['yamunotri','gangotri','badrinath'],
    tags     : ['teen dham','3 dham','yamunotri','gangotri','badrinath','no kedarnath trek'],
    metaTitle: 'Teen Dham Yatra 7N/8D | Yamunotri, Gangotri, Badrinath',
    metaDesc : 'Teen Dham Yatra 2026 — 7N/8D from ₹11,600/person, no Kedarnath trek. Direct Haridwar operator, fixed departures & instant confirmation.',
    faqs:[],
  },

  // ─────────────────────────────────────────────────────────────
  // CATEGORY 3: SINGLE DHAM (4 packages)
  // ─────────────────────────────────────────────────────────────

  {
    slug     : 'kedarnath-yatra-package-3n-4d-haridwar',
    photo    : 'https://images.pexels.com/photos/12151764/pexels-photo-12151764.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'single-dham',
    name     : 'Kedarnath Yatra Package from Haridwar — 3N/4D',
    subtitle : 'Ex-Haridwar | 12th Jyotirlinga | Trek or Helicopter',
    seoHeading: 'Kedarnath Yatra 2026 — 3N/4D | 16km Trek from Gaurikund',
    duration : { nights:3, days:4 },
    groupSize: 'Any group size',
    difficulty:'Moderate–Challenging (16 km trek)',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Innova Crysta / Car',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Kedarnath: 3,583m | Gaurikund: 1,982m',
    price    : { original:8500, discounted:5250, currency:'₹', perPerson:true },
    highlights:[
      'Kedarnath Jyotirlinga — 12th and highest of 12 Shiva shrines',
      '16 km scenic trek from Gaurikund (pony/helicopter optional)',
      'Gaurikund hot spring bath before the holy trek',
      'Brahma Muhurta rudrabhishek puja at 4 AM',
      'Visit Shankaracharya Samadhi — Adi Shankaracharya attained Mahasamadhi here',
      'Gandhi Sarovar glacial lake optional (1 km detour)',
      'Devprayag Sangam — sacred confluence of Bhagirathi & Alaknanda',
    ],
    inclusions:[...INC_STD, 'Yatra registration for Kedarnath'],
    exclusions: EXC_STD,
    itinerary:[
      {day:1, title:'Haridwar → Guptkashi (210 km | 7–8 hrs)', desc:'Depart 5:30 AM. Drive via Rishikesh, Devprayag Sangam (photo stop), Srinagar, Rudraprayag to Guptkashi. Check in. Visit Vishwanath & Ardhanarishwar temples. Overnight Guptkashi.'},
      {day:2, title:'Guptkashi → Gaurikund → Kedarnath Trek (16 km)', desc:'3:30 AM. Drive Sonprayag → shared jeep Gaurikund. Hot spring ritual dip. 16 km trek: Jungle Chatti → Bheem Bali → Linchauli → Kedarnath (3,583m). Evening VIP darshan. Overnight.'},
      {day:3, title:'Kedarnath Full Darshan → Descent → Guptkashi', desc:'4 AM rudrabhishek puja. Morning aarti. Shankaracharya Samadhi. Optional Gandhi Sarovar (1 km). Descent 10 AM → Gaurikund 2 PM. Drive Guptkashi. Overnight.'},
      {day:4, title:'Guptkashi → Devprayag → Rishikesh → Haridwar', desc:'Morning drive via Rudraprayag, Devprayag, Rishikesh (Ram Jhula stop). Haridwar Ganga Aarti. Tour ends. Certificate + prasad.'},
    ],
    featured : true,
    badge    : 'Bestseller',
    images   : ['kedarnath'],
    tags     : ['kedarnath','ek dham yatra','single dham','haridwar','jyotirlinga','trek','2026','16km trek','gaurikund','guptkashi','ek dham package'],
    metaTitle: 'Kedarnath Yatra Package 3N/4D from Haridwar',
    metaDesc : 'Kedarnath Ek Dham Yatra 2026 — 3N/4D from ₹5,250/person. Direct Haridwar operator, fixed departures & instant confirmation.',
    faqs:[
      {q:'What is the Kedarnath trek distance and difficulty?', a:'16 km one way from Gaurikund. Moderate-challenging with ~1,600m elevation gain. Fit pilgrims complete it in 5–6 hrs. Pony, palki and helicopter are available alternatives.'},
      {q:'Can I do overnight stay at Kedarnath?', a:'Yes. We arrange overnight at GMVN guesthouses or pre-booked camps. Highly recommended as Brahma Muhurta (4 AM) darshan is the most spiritually powerful.'},
      {q:'When does Kedarnath temple open in 2026?', a:'Kedarnath opens in late April / early May 2026. Exact date announced by temple committee. Contact us for latest opening date.'},
    ],
  },




  // ─────────────────────────────────────────────────────────────
  // CATEGORY 4: HELICOPTER (2 packages)
  // ─────────────────────────────────────────────────────────────

  {
    slug     : 'do-dham-helicopter-same-day-kedarnath-badrinath',
    photo    : 'https://images.pexels.com/photos/33105775/pexels-photo-33105775.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'helicopter',
    name     : 'Do Dham Same-Day Helicopter Tour — Kedarnath & Badrinath',
    subtitle : 'Ex-Dehradun | 1 Day | Luxury | VIP Darshan',
    seoHeading: 'Same Day Do Dham by Helicopter 2026 — Kedarnath Badrinath',
    duration : { nights:0, days:1 },
    groupSize: '2–6 pilgrims per trip',
    difficulty:'Easy (helicopter — no trekking)',
    season   : 'May – June & Sept – Oct 2026',
    transport:'Helicopter (6-seater)',
    startCity: 'Dehradun',
    endCity  : 'Dehradun',
    altitude : 'Max: Kedarnath 3,566m (helipad)',
    // Repriced Aug 2026 to ₹1,25,000 confirmed by the owner. The previous
    // ₹45,000 was stale for a full Dehradun→Kedarnath→Badrinath→Dehradun
    // charter — market for the identical product is ₹1,10,000–₹1,45,000, and
    // /blog/kedarnath-helicopter-booking already quoted ₹1.1–1.5 lakh for a
    // same-day Dehradun charter to a single dham. No invented was-price.
    price    : { original:125000, discounted:125000, currency:'₹', perPerson:true },
    highlights:[
      'Visit both Kedarnath & Badrinath in a single day',
      'Aerial views of Garhwal Himalayas from helicopter',
      'VIP priority darshan at both temples',
      'No physical trekking — ideal for elderly and busy pilgrims',
      'Departs from Dehradun (Sahastradhara/Phata helipads)',
      'Personal pujari for abhishek puja at both dhams',
    ],
    inclusions:['Helicopter — Dehradun/Phata → Kedarnath → Phata → Badrinath → Dehradun','VIP darshan passes at both temples','Personal pujari for abhishek puja','Lunch + refreshments on tour day','Pickup & drop at Dehradun hotel/station'],
    exclusions:['Hotel accommodation (day trip — no overnight)', 'Personal expenses and tips','Weather cancellation — reschedule or refund policy applies'],
    itinerary:[
      {day:1, title:'Dehradun → Kedarnath → Badrinath → Dehradun', desc:'Depart Dehradun Sahastradhara Helipad 6 AM. Fly to Kedarnath (30 min). VIP rudrabhishek puja, Shankaracharya Samadhi, morning aarti. Return helicopter to Phata. Fly to Badrinath. Tapt Kund dip. Special puja at Badrivishal. Mana village quick visit. Return helicopter to Dehradun. Arrive by 4–5 PM. This is an exhilarating 1-day spiritual experience for those who cannot spare multiple days.'},
    ],
    featured : false,
    badge    : null,
    images   : ['helicopter','kedarnath','badrinath'],
    tags     : ['helicopter','same day','do dham','kedarnath','badrinath','dehradun','vip','one day'],
    metaTitle: 'Kedarnath Badrinath Same-Day Helicopter Tour',
    metaDesc : 'Kedarnath Badrinath by helicopter in one day from Dehradun — ₹1,25,000/person, VIP darshan at both dhams. DGCA-approved third-party charter, direct booking.',
    faqs:[],
  },

  {
    slug     : 'hemkund-sahib-badrinath-valley-of-flowers-6n-7d',
    photo    : 'https://images.pexels.com/photos/37647713/pexels-photo-37647713.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'helicopter',
    name     : 'Hemkund Sahib + Valley of Flowers + Badrinath — 6N/7D',
    subtitle : 'Ex-Haridwar | Sikh Pilgrimage + UNESCO World Heritage',
    seoHeading: 'Valley of Flowers & Hemkund Sahib 2026 — 6N/7D Haridwar',
    duration : { nights:6, days:7 },
    groupSize: '10–30 pilgrims',
    difficulty:'Moderate (Hemkund Sahib 14 km trek)',
    season   : 'June – September 2026 (Valley of Flowers season)',
    transport:'Tempo Traveller / Car + Trek',
    startCity: 'Haridwar',
    endCity  : 'Haridwar',
    altitude : 'Max: Hemkund Sahib 4,329m',
    price    : { original:22000, discounted:13900, currency:'₹', perPerson:true },
    highlights:[
      'Hemkund Sahib Gurudwara at 4,329m — sacred Sikh pilgrimage',
      'Valley of Flowers — UNESCO World Heritage Site',
      '500+ species of Himalayan wildflowers in full bloom',
      'Badrinath temple darshan + Tapt Kund + Mana village',
      'Govindghat — starting point for Hemkund and Valley of Flowers',
      'Ghangaria overnight stay at 3,050m altitude',
      'Brahmakapal ancestral rites at Badrinath',
    ],
    inclusions:[...INC_STD],
    exclusions: EXC_STD,
    itinerary:[
      {day:1, title:'Haridwar → Joshimath (300 km)', desc:'Depart 5 AM. Drive via Rishikesh, Devprayag, Karnaprayag, Chamoli, Pipalkoti to Joshimath. Overnight Joshimath.'},
      {day:2, title:'Joshimath → Govindghat → Ghangaria (13 km trek)', desc:'Drive to Govindghat (20 km). Begin 13 km trek to Ghangaria (3,050m) via scenic forest trail along Pushpawati River. Check in Ghangaria. Overnight.'},
      {day:3, title:'Ghangaria → Valley of Flowers (3 km)', desc:'Day trek to the UNESCO World Heritage Valley of Flowers (3,658m). 87 sq km of meadows with 500+ wildflower species — Blue Poppy, Brahma Kamal, Cobra Lily, Anemone. Return Ghangaria evening. Overnight.'},
      {day:4, title:'Ghangaria → Hemkund Sahib → Ghangaria (14 km round)', desc:'Predawn start. 7 km trek to Hemkund Sahib Gurudwara (4,329m) — sacred glacial lake + Sikh shrine. Sarovar bath (icy glacial). Return Ghangaria. Overnight.'},
      {day:5, title:'Ghangaria → Govindghat → Badrinath', desc:'Descend to Govindghat (13 km). Drive 30 km to Badrinath. Check in. Evening Tapt Kund bath + mahabhishek darshan.'},
      {day:6, title:'Badrinath Full Darshan → Mana Village', desc:'4 AM Bal Bhog puja. Mana village full tour. Brahamakapal pitru puja. Neelkanth peak views. Afternoon return drive. Overnight Srinagar/Rudraprayag.'},
      {day:7, title:'Return to Haridwar', desc:'Drive via Devprayag, Rishikesh. Haridwar Ganga Aarti. Tour ends.'},
    ],
    featured : false,
    badge    : 'Special',
    images   : ['badrinath'],
    tags     : ['hemkund sahib','valley of flowers','badrinath','sikh pilgrimage','unesco','trek'],
    metaTitle: 'Valley of Flowers & Hemkund Sahib 6N/7D from Haridwar',
    metaDesc : 'Valley of Flowers & Hemkund Sahib 2026 — 6N/7D from ₹13,900/person. Direct Haridwar operator, instant confirmation.',
    faqs:[],
  },

  // ─────────────────────────────────────────────────────────────
  // KUMAON — the one non-Garhwal itinerary we still sell as a page.
  // Restored 20 Sep 2026. It was deleted on 15 Sep with the other 23
  // Uttarakhand tours because that tier was generated from a template;
  // this one is not template output — /kainchi-dham is the site's
  // highest-volume hub (165K/mo, pos 17) and had no itinerary to send
  // a reader to, so the enquiry died on the hub page.
  // ─────────────────────────────────────────────────────────────
  {
    slug     : 'kainchi-dham-nainital-mukteshwar-3n-4d',
    photo    : 'https://images.pexels.com/photos/35536243/pexels-photo-35536243.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&fit=crop',
    category : 'kumaon',
    name     : 'Kainchi Dham + Nainital + Mukteshwar — 3N/4D',
    subtitle : 'Ex-Kathgodam | Neem Karoli Baba Ashram · Lakes · Orchards',
    seoHeading: 'Kainchi Dham, Nainital and Mukteshwar — 3N/4D from Kathgodam',
    duration : { nights:3, days:4 },
    groupSize: 'Any group size',
    difficulty:'Easy',
    season   : 'March – June & Sept – Nov 2026',
    transport:'AC Innova / Tempo Traveller',
    startCity: 'Kathgodam',
    endCity  : 'Kathgodam',
    altitude : 'Kainchi 1,400m | Nainital 2,084m | Mukteshwar 2,286m',
    price    : { original:11500, discounted:6750, currency:'₹', perPerson:true },
    highlights:[
      'Kainchi Dham — Neem Karoli Baba\'s ashram on the Nainital–Almora road',
      'We time the Kainchi visit for early morning, before the tour buses arrive',
      'Naini Lake boating and the Naina Devi temple at Nainital',
      'Snow View Point ropeway with Nanda Devi and Trishul on a clear day',
      'Mukteshwar — apple orchards, the Shiva temple and Chauli ki Jaali cliff',
      'Bhimtal and Sattal on the drive down, away from the Nainital crowd',
      'Small-group pace — no rushed \'cover 10 spots in a day\' itinerary',
    ],
    inclusions:['3 nights hotel accommodation (Nainital + Mukteshwar)','Daily breakfast and dinner','AC vehicle for the full route and sightseeing','Local driver who knows the ashram timings','All toll, parking and driver allowance','Pickup and drop at Kathgodam railway station'],
    exclusions:['Train to Kathgodam','Naini Lake boating ticket (₹210 per boat)','Snow View ropeway (₹300 return)','Personal expenses and shopping on Mall Road','Any meal on travel days marked as lunch','Insurance'],
    itinerary:[
      {day:1, title:'Kathgodam → Kainchi Dham → Nainital (70 km)', desc:'Pick you up at Kathgodam and drive up towards Bhowali. Stop at Kainchi Dham for darshan — the ashram Neem Karoli Baba built beside the Shipra river. It is calm in the forenoon; by afternoon the parking overflows, which is why we go first. Continue to Nainital, check in, and keep the evening free for Mall Road and the lakeside. Overnight Nainital.'},
      {day:2, title:'Nainital Full Day', desc:'Boat across Naini Lake to the Naina Devi temple, one of the Shakti Peethas. Ropeway to Snow View Point for the Himalayan skyline. Tiffin Top and Eco Cave Gardens if the group is up for a short walk. The rest of the day is unhurried — chai, the flat lake walk, some shopping. Overnight Nainital.'},
      {day:3, title:'Nainital → Mukteshwar (50 km)', desc:'Drive to Mukteshwar through Bhowali\'s fruit market. This is the quiet counterpart to Nainital — a 350-year-old Shiva temple on the ridge, the IVRI campus, and Chauli ki Jaali, a cliff with a sheer drop and long valley views. Apple and plum orchards line the road. Overnight Mukteshwar.'},
      {day:4, title:'Mukteshwar → Sattal → Kathgodam', desc:'Slow morning with the sunrise over the peaks. Drive down via Sattal — a cluster of interconnected freshwater lakes that stays green and empty compared to Nainital. Reach Kathgodam by afternoon for your train. Tour ends.'},
    ],
    featured : true,
    badge    : 'Trending',
    images   : ['kainchi','nainital'],
    tags     : ['kainchi dham','neem karoli baba','nainital','mukteshwar','kumaon','bhimtal','sattal','ashram','weekend'],
    // Retitled 21 Sep 2026. The restore on 20 Sep brought back the old
    // "Tour 2026 | Price Starts at ₹" pattern that the 17 Sep retitle had
    // purged from every other package — this page was 410 that day.
    metaTitle: 'Kainchi Dham Nainital Mukteshwar 3N/4D | Ex-Kathgodam',
    metaDesc : 'Kainchi Dham darshan before the tour buses, two nights in Nainital, one in Mukteshwar. 3N/4D from Kathgodam at ₹6,750 per person, no trekking, small-group pace.',
    faqs:[
      {q:'Where is Kainchi Dham and how far is it from Nainital?', a:'Kainchi Dham sits on the Nainital–Almora highway near Bhowali, about 17 km from Nainital and 38 km from Kathgodam. Our vehicle stops there on the way up on day 1, so you do not make a separate trip for it.'},
      {q:'What is the best time to visit Kainchi Dham?', a:'March to June and September to November are comfortable. The ashram is busiest around June 15, the Pratishtha Diwas (foundation day), when the annual bhandara draws huge crowds — plan for long queues if you come that week. On normal days, early morning is calmest, which is how we schedule it.'},
      {q:'Is this package good for elderly parents?', a:'Yes. There is no trekking. The only walking is short and optional — Tiffin Top and Chauli ki Jaali. We arrange ground-floor or lift-access rooms where the hotel has them, and keep the driving days short.'},
    ],
  },
];

// ================================================================
// UTILITY HELPERS
// ================================================================
export function getPackageBySlug(slug) {
  return PACKAGES.find(p => p.slug === slug) || null;
}
export function getPackagesByCategory(category) {
  return PACKAGES.filter(p => p.category === category);
}
export function getFeaturedPackages() {
  return PACKAGES.filter(p => p.featured);
}
export function getAllSlugs() {
  return PACKAGES.map(p => ({ slug: p.slug }));
}

// ================================================================
// GLOBAL FAQs
// ================================================================
export const GLOBAL_FAQS = [
  { q:'What is the best time to do Char Dham Yatra in 2026?',
    a:'Travel in May or September–October. May (8–22°C) gives you blooming rhododendrons, clear skies and smooth trekking conditions. September–October delivers post-monsoon crystal visibility, fewer crowds, and vivid autumn colours on the Kedarnath descent. Avoid July–August — the monsoon causes landslides on both the Kedarnath and Gangotri routes. The 2026 season opens April 19 (Yamunotri and Gangotri), April 22 (Kedarnath), and April 23 (Badrinath).' },
  { q:'Do I need to register for Char Dham Yatra 2026?',
    a:'Yes — registration is mandatory and enforced at police checkpoints. You register online at the Uttarakhand Tourism portal or in person at biometric centres in Haridwar and Rishikesh. Register before you leave home. Police turn back unregistered pilgrims at Sonprayag (Kedarnath route) and other checkpoints, even if you have driven 6 hours from Haridwar. We handle registration for all pilgrims in our packages.' },
  { q:'What does Char Dham Yatra cost from Haridwar in 2026?',
    a:'Our Char Dham packages start at ₹13,900 per person for 9N/10D all-inclusive from Haridwar — that covers your vehicle, hotels, guide, meals and VIP darshan assistance at all 4 dhams. Pony and palki at Yamunotri and Kedarnath are optional extras, paid at the official rate. Note: AC is standard in plains; in hilly areas it can be availed at ₹2,000 extra. Deluxe options (Innova Crysta, 3-star hotels) run ₹30,000. The Char Dham by helicopter package is ₹2,30,000 — helicopter charter is genuinely expensive and any "helicopter package" advertised near ₹85,000 is a road package with IRCTC shuttle tickets bought separately. All prices are direct — no agent commission, no hidden charges.' },
  { q:'What is the Char Dham Yatra route from Haridwar?',
    a:'The circuit follows a clockwise direction: Haridwar → Barkot → Yamunotri (Day 3) → Uttarkashi → Gangotri (Day 5) → Guptkashi → Kedarnath (Day 7) → Rudraprayag → Badrinath (Day 9-10) → return to Haridwar (Day 11). Total road distance: approximately 1,100km. Yamunotri requires a 6km trek from Janki Chatti. Kedarnath requires a 16km trek from Gaurikund. Gangotri and Badrinath are fully motorable.' },
  { q:'Is Char Dham Yatra safe for senior citizens?',
    a:'Yes — with the right package and planning. We run a dedicated Senior Citizen Char Dham package (12N/13D) that includes pony charges at Yamunotri, pony or palki at Kedarnath on request (an optional extra at the official rate), ground-floor hotel rooms, an extra acclimatisation day before Kedarnath, and oxygen cylinders in every vehicle. Over 30% of our pilgrims each year are 60+ years old. Our drivers and guides are trained for altitude-related health situations.' },
  { q:'Do I need to be physically fit for Char Dham Yatra?',
    a:'You need to be able to walk 6km uphill (Yamunotri) and 16km (Kedarnath). Badrinath and Gangotri are fully motorable — no trekking required. For Kedarnath, pony (₹1,200–1,500 one way) and helicopter (from ₹3,043 one way via IRCTC) are available as alternatives. Most pilgrims aged 18–70 with no serious cardiac or respiratory conditions complete the Kedarnath trek without assistance. Carry a medical fitness certificate if you are 60+ or have any pre-existing condition.' },
  { q:'How do I book Char Dham Yatra from Shiv Ganga Travels?',
    a:'WhatsApp us at +91-7817996730 with your preferred dates, group size, and city. We send a detailed custom itinerary with exact pricing within 2 hours. A 25% advance payment secures your booking and holds your hotel and darshan slots. We accept UPI, bank transfer and major cards. No booking fee, no processing charge.' },
  { q:'Can I do Char Dham Yatra by helicopter?',
    a:'Yes. Our Char Dham by helicopter package covers all 4 dhams in 5N/6D from Dehradun (Sahastradhara Helipad). Helicopters land at dedicated helipads near each temple: Kharsali (Yamunotri, 1km walk), Harsil (Gangotri, 25km road), Phata or Sersi (Kedarnath, VIP darshan), Badrinath (adjacent to temple). Package price: ₹2,30,000 per person all-inclusive, with the charter flown by a DGCA-approved third-party operator. Note the distinction: this is a full charter. Kedarnath shuttle seats booked individually are a separate product and are sold only on the IRCTC HeliYatra portal.' },
];
// ================================================================
// TRUST SIGNALS
// ================================================================
export const TRUST = {
  // Three claims, stated once each. "100% Safe / zero incident" was an
  // absolutist claim no serious operator can stand behind publicly —
  // safety is now framed as practice (hill-trained drivers, oxygen on
  // board, vehicle checks) in section copy instead.
  stats: [
    { value:'Direct', label:'Operator',         sub:'You pay us, not an agent' },
    { value:'50,000+', label:'Pilgrims Served',  sub:'Across every season' },
    { value:`${SITE.reviews.rating}/5`, label:'Google Rating', sub:'Public, verifiable reviews' },
  ],
  // IATA / IATO / ISO badges removed until accreditation numbers can be
  // shown alongside them — an unverifiable badge costs more trust than it
  // buys. Restore any of these with its registration number when available.
  certifications: [
    { text:'Yatra Permit Authority: Uttarakhand Tourism', url:'https://registrationandtouristcare.uk.gov.in', linkText:'Registration Portal →' },
    { text:'Government-approved Char Dham Yatra Operator 2026', url:null, linkText:null },
  ],
};
