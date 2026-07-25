// ════════════════════════════════════════════════════════════════
// SHIV GANGA TRAVELS — EXPERIENCE LAYER
// Hotels, vehicles, temples, meals, weather bands and route geometry
// that sit behind the premium package pages.
//
// Everything here is written from how the trip actually runs, not from
// a brochure. Where a number is a range, it is a range because the hill
// changes it — altitude, weather and the yatra calendar all move things.
// ════════════════════════════════════════════════════════════════

const PX = 'https://images.pexels.com/photos';

/* ══════════════════════════════════════════════════════════════
   1 · ROUTE GEOMETRY
   Coordinates are real (lat/lng) so this data can be handed to
   Mapbox unchanged. `x` / `y` are the normalised 0–100 positions
   used by the SVG route map that ships today.
   ══════════════════════════════════════════════════════════════ */

export const ROUTE = {
  // Bounding box of the Garhwal circuit — used by the Mapbox adapter
  bounds: { west: 78.0, south: 29.85, east: 79.6, north: 31.15 },
  center: { lng: 78.85, lat: 30.5 },

  nodes: [
    {
      id: 'haridwar', name: 'Haridwar', kind: 'base',
      lat: 29.9457, lng: 78.1642, alt: 314, x: 62, y: 93,
      day: 'Day 1', driveIn: null,
      note: 'Where the yatra starts. We meet you at the railway station or your hotel.',
    },
    {
      id: 'rishikesh', name: 'Rishikesh', kind: 'waypoint',
      lat: 30.0869, lng: 78.2676, alt: 372, x: 60, y: 87,
      day: 'Day 1', driveIn: '25 km · 45 min',
      note: 'The last town before the road starts climbing. Ram Jhula, then the hills.',
    },
    {
      id: 'barkot', name: 'Barkot', kind: 'halt',
      lat: 30.8095, lng: 78.2059, alt: 1220, x: 24, y: 72,
      day: 'Day 1 night', driveIn: '195 km · 7 hrs',
      note: 'Apple valley halt below Yamunotri. Cool nights, early start tomorrow.',
    },
    {
      id: 'yamunotri', name: 'Yamunotri', kind: 'dham',
      lat: 31.0125, lng: 78.4622, alt: 3291, x: 14, y: 52,
      day: 'Day 2', driveIn: '36 km + 6 km trek',
      note: 'First dham. Rice cooked in a boiling spring comes back down as prasad.',
    },
    {
      id: 'uttarkashi', name: 'Uttarkashi', kind: 'halt',
      lat: 30.7268, lng: 78.4354, alt: 1165, x: 33, y: 62,
      day: 'Day 3 night', driveIn: '100 km · 4 hrs',
      note: 'Kashi of the mountains. The Bhagirathi runs right through town.',
    },
    {
      id: 'gangotri', name: 'Gangotri', kind: 'dham',
      lat: 30.9947, lng: 78.9398, alt: 3415, x: 40, y: 34,
      day: 'Day 4', driveIn: '100 km · 4 hrs',
      note: 'Second dham, and the only one you can drive right up to.',
    },
    {
      id: 'devprayag', name: 'Devprayag', kind: 'waypoint',
      lat: 30.1465, lng: 78.5981, alt: 830, x: 57, y: 80,
      day: 'Transit', driveIn: null,
      note: 'Where the Bhagirathi meets the Alaknanda and the Ganga begins. Blue meets grey.',
    },
    {
      id: 'rudraprayag', name: 'Rudraprayag', kind: 'waypoint',
      lat: 30.2844, lng: 78.9811, alt: 895, x: 64, y: 74,
      day: 'Transit', driveIn: null,
      note: 'Second confluence. The road forks here — Kedarnath left, Badrinath right.',
    },
    {
      id: 'guptkashi', name: 'Guptkashi', kind: 'halt',
      lat: 30.5333, lng: 79.0667, alt: 1319, x: 68, y: 64,
      day: 'Day 5 night', driveIn: '210 km · 7 hrs',
      note: 'Base for Kedarnath. You leave here at 3 AM, so eat and sleep early.',
    },
    {
      id: 'sonprayag', name: 'Sonprayag', kind: 'waypoint',
      lat: 30.6266, lng: 79.0139, alt: 1829, x: 72, y: 54,
      day: 'Day 6', driveIn: '30 km · 1 hr',
      note: 'Private vehicles stop here. Shared jeep from this point to Gaurikund.',
    },
    {
      id: 'kedarnath', name: 'Kedarnath', kind: 'dham',
      lat: 30.7346, lng: 79.0669, alt: 3583, x: 76, y: 30,
      day: 'Day 6–7', driveIn: '16 km trek from Gaurikund',
      note: 'Third dham, highest point of the yatra. The climb is the pilgrimage.',
    },
    {
      id: 'joshimath', name: 'Joshimath', kind: 'waypoint',
      lat: 30.5548, lng: 79.5645, alt: 1875, x: 86, y: 56,
      day: 'Day 8', driveIn: null,
      note: 'Winter seat of Badrinath. Narsingh temple, then the last climb.',
    },
    {
      id: 'badrinath', name: 'Badrinath', kind: 'dham',
      lat: 30.7433, lng: 79.4938, alt: 3133, x: 92, y: 28,
      day: 'Day 8–9', driveIn: '190 km · 8 hrs',
      note: 'Fourth dham. Tapt Kund is 45°C at 3,133 m, which never stops being strange.',
    },
    {
      id: 'mana', name: 'Mana Village', kind: 'waypoint',
      lat: 30.7692, lng: 79.4931, alt: 3219, x: 96, y: 21,
      day: 'Day 9', driveIn: '3 km',
      note: 'Last village before Tibet. Vyas Gufa, Bhim Pul, and the Saraswati going underground.',
    },
  ],
};

/* Which nodes a package touches, by category. Keeps the map honest —
   a Do Dham page should not draw a line through Gangotri. */
export const ROUTE_BY_CATEGORY = {
  'char-dham':   ['haridwar','rishikesh','barkot','yamunotri','uttarkashi','gangotri','devprayag','rudraprayag','guptkashi','sonprayag','kedarnath','joshimath','badrinath','mana'],
  'do-dham':     ['haridwar','rishikesh','devprayag','rudraprayag','guptkashi','sonprayag','kedarnath','joshimath','badrinath','mana'],
  'single-dham': ['haridwar','rishikesh','devprayag','rudraprayag','guptkashi','sonprayag','kedarnath'],
  'helicopter':  ['haridwar','yamunotri','gangotri','kedarnath','badrinath'],
  'uttarakhand': ['haridwar','rishikesh','devprayag','rudraprayag','joshimath'],
};

/* ══════════════════════════════════════════════════════════════
   2 · TEMPLES
   ══════════════════════════════════════════════════════════════ */

export const TEMPLES = {
  yamunotri: {
    id: 'yamunotri',
    name: 'Yamunotri Dham',
    deity: 'Goddess Yamuna',
    altitude: '3,291 m',
    photo: `${PX}/19271393/pexels-photo-19271393.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop`,
    photoAlt: 'Yamunotri Temple in the Garhwal Himalaya, first dham of the Char Dham Yatra',
    opens2026: 'April 19, 2026 (Akshaya Tritiya)',
    closes2026: 'November 11, 2026 (Bhai Dooj)',
    darshanHours: '6:00 AM – 12:00 PM · 2:00 PM – 8:00 PM',
    approach: '36 km drive to Janki Chatti, then 6 km on foot, pony or palki',
    history:
      'The present temple was rebuilt in the 19th century by Maharani Gularia of Jaipur after avalanches took the earlier structures. The shrine itself is much older than the building — Yamunotri has been a pilgrimage since long before anyone was keeping records. The deity is a black marble idol of the Yamuna, and the winter seat is at Kharsali village, six kilometres below, where she is carried down every November.',
    importance:
      'Yamuna is Surya’s daughter and Yama’s sister in the Puranas. The tradition holds that anyone who bathes in her waters is spared an untimely death — which is why the queue at Surya Kund is never short.',
    rituals: [
      'Divya Shila — the rock pillar outside the temple is worshipped before you enter. Nobody skips this.',
      'Surya Kund — a 94°C spring where pilgrims lower rice and potatoes tied in muslin. It cooks in minutes and comes back as prasad.',
      'Yamuna Jal — the cold stream beside the kund is where the ritual dip happens. It is glacier-fed and it feels like it.',
    ],
    photography: 'Allowed in the courtyard and around Surya Kund. Not inside the sanctum.',
    facts: [
      'The 6 km trek climbs roughly 1,000 m. Ponies run ₹1,500–2,500 each way, palki ₹4,000–6,000.',
      'Surya Kund holds at about 94°C year-round — hot enough that vendors sell muslin bags purely for cooking rice.',
      'The actual glacial source, Champasar Glacier at 4,421 m, is another day’s trek above the temple and is not part of the yatra.',
    ],
  },

  gangotri: {
    id: 'gangotri',
    name: 'Gangotri Dham',
    deity: 'Goddess Ganga',
    altitude: '3,415 m',
    photo: `${PX}/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop`,
    photoAlt: 'Gangotri Temple beside the Bhagirathi river, second dham of the Char Dham Yatra',
    opens2026: 'April 19, 2026 (Akshaya Tritiya)',
    closes2026: 'November 10, 2026',
    darshanHours: '6:15 AM – 2:00 PM · 3:00 PM – 9:30 PM',
    approach: 'Fully motorable. The vehicle parks about 300 m from the temple.',
    history:
      'Built by the Gorkha commander Amar Singh Thapa in the early 1800s and rebuilt by the Jaipur royal family. It sits on the left bank of the Bhagirathi at the spot where, by tradition, King Bhagirath’s penance finally brought the Ganga down from the heavens. Shiva caught her in his hair so the fall would not split the earth. The winter seat is Mukhba village, 20 km downstream.',
    importance:
      'Of the four dhams this is the one where the geography and the mythology line up most cleanly — the river genuinely begins here, at Gaumukh, 18 km upstream. A dip in the Bhagirathi at Gangotri is considered to wash away accumulated sin, which is a heavy claim for water this cold.',
    rituals: [
      'Ganga Aarti at dusk on the riverside ghat — smaller and quieter than Haridwar’s, and better for it.',
      'Asthapadhi Snana — the ritual dip. Most people manage about four seconds.',
      'Bhagirath Shila — the rock where Bhagirath is said to have meditated, right beside the temple.',
    ],
    photography: 'Freely allowed outside. Sanctum photography is prohibited.',
    facts: [
      'Gaumukh, the actual snout of the Gangotri Glacier, is an 18 km trek and needs a separate forest permit.',
      'The river is called the Bhagirathi until Devprayag. It only becomes the Ganga after it merges with the Alaknanda.',
      'Harsil, 25 km before Gangotri, is where the Raj Kapoor film Ram Teri Ganga Maili was shot. The deodar forest looks exactly the same.',
    ],
  },

  kedarnath: {
    id: 'kedarnath',
    name: 'Kedarnath Dham',
    deity: 'Lord Shiva (Kedarnath Jyotirlinga)',
    altitude: '3,583 m',
    photo: `${PX}/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop`,
    photoAlt: 'Kedarnath Temple against snow-covered Himalayan peaks, third dham of the Char Dham Yatra',
    opens2026: 'April 22, 2026 at 8:00 AM',
    closes2026: 'November 11, 2026 (Bhai Dooj)',
    darshanHours: '4:00 AM – 3:00 PM · 5:00 PM – 9:00 PM',
    approach: '16 km trek from Gaurikund, or helicopter from Phata / Sersi / Guptkashi',
    history:
      'The stone temple has stood on this moraine for something in the order of a thousand years, and the tradition credits Adi Shankaracharya with reviving it in the 8th century. His samadhi is behind the temple. The structure survived the 2013 floods because a boulder — now called Bhim Shila — lodged behind it and split the debris flow around the walls. It is still there, and people garland it.',
    importance:
      'The highest of the twelve Jyotirlingas and one of the Panch Kedar. The lingam here is not carved; it is a conical rock outcrop, worshipped as the hump of the bull whose form Shiva took when he tried to avoid the Pandavas.',
    rituals: [
      'Rudrabhishek at Brahma Muhurta, around 4 AM. The temple is cold, mostly empty, and this is when it is at its best.',
      'Bhairavnath temple, a short climb from the main shrine. Bhairav is said to guard Kedarnath when the doors close for winter.',
      'Shankaracharya Samadhi, immediately behind the temple, rebuilt after 2013.',
    ],
    photography: 'Permitted in the courtyard. Strictly no photography or phones inside the sanctum.',
    facts: [
      'The trek gains about 1,600 m over 16 km. Fit walkers take 6–8 hours; nobody sensible rushes it.',
      'Pony ₹3,500–4,500, palki ₹8,000–12,000, and helicopter from ₹3,043 one way at the official IRCTC fare.',
      'Oxygen saturation drops noticeably above Linchauli. Our vehicles carry a cylinder, and there are medical posts along the route.',
      'In winter the deity moves to Ukhimath, where darshan continues for the six months the temple is shut.',
    ],
  },

  badrinath: {
    id: 'badrinath',
    name: 'Badrinath Dham',
    deity: 'Lord Vishnu (Badrivishal)',
    altitude: '3,133 m',
    photo: `${PX}/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop`,
    photoAlt: 'Badrinath Temple with its painted facade below Neelkanth peak, fourth dham of the Char Dham Yatra',
    opens2026: 'April 23, 2026',
    closes2026: 'November 13, 2026',
    darshanHours: '4:30 AM – 1:00 PM · 4:00 PM – 9:00 PM',
    approach: 'Fully motorable, right up to the temple town.',
    history:
      'Badrinath is the only one of the four that is also a Char Dham of the national circuit — the one Adi Shankaracharya established alongside Puri, Dwarka and Rameswaram. He is said to have recovered the black saligram idol from the Alaknanda and installed it here in the 8th century. The bright painted facade is comparatively recent; the town behind it has been rebuilt many times after avalanches.',
    importance:
      'The head priest, the Rawal, is traditionally a Namboodiri Brahmin from Kerala — a thousand-year-old arrangement that still holds, and one of the more remarkable continuities in Indian religious practice.',
    rituals: [
      'Tapt Kund — a 45°C sulphur spring below the temple. You bathe here before darshan.',
      'Maha Abhishek and Bal Bhog at dawn. Bal Bhog is the first offering of the day and worth the early alarm.',
      'Brahma Kapal — the ghat on the Alaknanda where pilgrims perform pind daan for their ancestors.',
    ],
    photography: 'Allowed outside and around Tapt Kund. Not inside.',
    facts: [
      'Tapt Kund runs at roughly 45°C in a town where the air is often near freezing. Nobody has fully explained the source.',
      'Mana, 3 km on, is the last Indian village before the Tibet border — Vyas Gufa, Ganesh Gufa and Bhim Pul are all within a short walk.',
      'The Saraswati river surfaces at Mana, runs a few hundred metres, and disappears underground at Keshav Prayag.',
      'Neelkanth peak (6,597 m) stands directly behind the temple and turns gold about twenty minutes before sunrise.',
    ],
  },
};

/* ══════════════════════════════════════════════════════════════
   3 · HOTELS
   Presented the way the stay actually is — honest about what a
   1,300 m hill town can and cannot offer.
   ══════════════════════════════════════════════════════════════ */

export const HOTELS = [
  {
    id: 'haridwar',
    stop: 'Haridwar',
    name: 'Riverside Hotels, Bhupatwala',
    tier: 'Deluxe · 3-star equivalent',
    rating: 4.4,
    altitude: '314 m',
    nights: 'Arrival and departure night',
    photo: `${PX}/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Hotel room overlooking the Ganga at Bhupatwala, Haridwar',
    blurb:
      'A ten-minute walk from Har Ki Pauri, which matters on the evening you arrive and want to see the aarti without arranging transport. Rooms are properly heated, the water runs hot, and the kitchen does a pure-veg thali that most guests remember better than they expect to.',
    rooms: ['Twin-sharing deluxe', 'Triple-sharing family', 'Connecting rooms for groups'],
    amenities: ['Hot water 24 hrs', 'Room heater on request', 'Lift access', 'Secure parking', 'Pure-veg restaurant', 'Wi-Fi in lobby'],
    meals: 'Breakfast and dinner included',
    caveat: null,
  },
  {
    id: 'barkot',
    stop: 'Barkot',
    name: 'Valley Lodges, Yamuna Valley',
    tier: 'Standard mountain lodge',
    rating: 4.0,
    altitude: '1,220 m',
    nights: '1 night before Yamunotri',
    photo: `${PX}/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Mountain lodge in the Yamuna valley near Barkot',
    blurb:
      'Simple, clean and warm, in a town of about six thousand people surrounded by apple orchards. You arrive tired, eat early and leave at first light, so this is a bed and a hot dinner rather than a destination — and it is a good one.',
    rooms: ['Twin-sharing', 'Triple-sharing'],
    amenities: ['Hot water by geyser', 'Extra blankets', 'Parking', 'Veg kitchen', 'Power backup'],
    meals: 'Breakfast and dinner included',
    caveat: 'Mobile signal is patchy here. BSNL and Jio hold up best.',
  },
  {
    id: 'uttarkashi',
    stop: 'Uttarkashi',
    name: 'Bhagirathi Riverside Stays',
    tier: 'Deluxe',
    rating: 4.2,
    altitude: '1,165 m',
    nights: '2 nights, either side of Gangotri',
    photo: `${PX}/19271393/pexels-photo-19271393.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Riverside hotel on the Bhagirathi at Uttarkashi',
    blurb:
      'River-facing rooms on the Bhagirathi, with the water loud enough at night that most people sleep well. Two nights here is the most rest the Char Dham itinerary gives you, and the town is worth the walk — Kashi Vishwanath temple and the Shakti Devi trident are both ten minutes away.',
    rooms: ['River-view twin', 'Standard twin', 'Family triple'],
    amenities: ['24-hr hot water', 'River-facing balcony', 'In-house restaurant', 'Doctor on call', 'Laundry', 'Parking'],
    meals: 'Breakfast and dinner included',
    caveat: null,
  },
  {
    id: 'guptkashi',
    stop: 'Guptkashi',
    name: 'Kedar Valley Resorts',
    tier: 'Deluxe',
    rating: 4.3,
    altitude: '1,319 m',
    nights: '1–2 nights around Kedarnath',
    photo: `${PX}/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Hotel at Guptkashi with a view towards the Kedarnath valley',
    blurb:
      'The best-positioned stay on the circuit — north-facing rooms look straight up the valley at Chaukhamba, and on a clear morning the peak turns gold while you are still having tea. You leave at 3 AM for Kedarnath, so the kitchen packs breakfast for the road.',
    rooms: ['Valley-view deluxe', 'Standard twin', 'Triple-sharing'],
    amenities: ['Hot water 24 hrs', 'Valley-view rooms', 'Packed breakfast for early starts', 'Oxygen available', 'Parking', 'Power backup'],
    meals: 'Breakfast and dinner included',
    caveat: 'Ask for a north-facing room when you check in. It costs nothing and the view is the whole point.',
  },
  {
    id: 'kedarnath',
    stop: 'Kedarnath',
    name: 'GMVN Huts & Registered Camps',
    tier: 'Basic · high-altitude',
    rating: 3.6,
    altitude: '3,583 m',
    nights: '1 night at the shrine',
    photo: `${PX}/19271393/pexels-photo-19271393.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'GMVN huts and pilgrim camps near Kedarnath temple',
    blurb:
      'Let us be straight about this one: at 3,583 m, in a settlement that is rebuilt every season, accommodation is a heated hut with a bed and blankets. There is no lift, the water is heated by bucket, and the walls are thin. What you get instead is being three hundred metres from the temple at 4 AM for the rudrabhishek, which is why anyone stays up here at all.',
    rooms: ['GMVN twin hut', 'Dormitory bunk', 'Camp tent with cot'],
    amenities: ['Heavy quilts and blankets', 'Bucket hot water', 'Common dining', 'Medical post nearby', 'Oxygen on call'],
    meals: 'Simple veg dinner and breakfast',
    caveat: 'Rooms at Kedarnath are allotted by GMVN and cannot be pre-blocked far in advance. We confirm your allocation the day before.',
  },
  {
    id: 'badrinath',
    stop: 'Badrinath',
    name: 'Temple-side Hotels, Badrinath',
    tier: 'Standard to deluxe',
    rating: 4.1,
    altitude: '3,133 m',
    nights: '1 night at the shrine',
    photo: `${PX}/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Hotel beside Badrinath temple with Neelkanth peak behind',
    blurb:
      'Walking distance from the temple and from Tapt Kund, which is what you want when the 4:30 AM Bal Bhog darshan comes around. Rooms are warm and plain. Some upper floors catch Neelkanth peak through the window, and if you get one of those, set an alarm for twenty minutes before sunrise.',
    rooms: ['Twin-sharing', 'Triple-sharing', 'Peak-view room where available'],
    amenities: ['Room heater', 'Hot water', 'Walking distance to temple', 'Veg restaurant', 'Oxygen available', 'Parking'],
    meals: 'Breakfast and dinner included',
    caveat: 'Badrinath fills completely on weekends in May and June. Early booking decides whether you are near the temple or a kilometre out.',
  },
];

/* ══════════════════════════════════════════════════════════════
   4 · VEHICLES
   ══════════════════════════════════════════════════════════════ */

export const VEHICLES = [
  {
    id: 'innova',
    name: 'Toyota Innova Crysta',
    klass: 'Premium SUV',
    seats: '6 + driver',
    ideal: 'Families of 4–6, and anyone who wants the most comfortable seat on the hill',
    luggage: '4 large + 2 cabin bags',
    photo: `${PX}/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Toyota Innova Crysta used for Char Dham Yatra transfers',
    comfort: ['Captain seats in the middle row', 'AC in the plains', 'Charging points at every row', 'Best suspension on the circuit'],
    note: 'The one we put senior travellers in. On the Rudraprayag–Guptkashi stretch the difference in ride quality is not subtle.',
    priceHint: 'Included in deluxe and private packages',
  },
  {
    id: 'tempo',
    name: 'Force Tempo Traveller',
    klass: 'Group coach',
    seats: '12 / 17 / 20 + driver',
    ideal: 'Groups of 8 and above, joint families, temple sanghs',
    luggage: 'Roof carrier plus rear boot',
    photo: `${PX}/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Force Tempo Traveller used for Char Dham Yatra group transfers',
    comfort: ['Push-back seats', 'Overhead storage', 'Wide windows', 'Standing headroom'],
    note: 'The default vehicle for the standard package. The 12-seater is the one to ask for — on a 17-seater chassis with 12 people, everyone gets a window.',
    priceHint: 'Standard on group departures',
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga / Sedan',
    klass: 'Compact',
    seats: '4 + driver',
    ideal: 'Couples and small families',
    luggage: '2 large + 2 cabin bags',
    photo: `${PX}/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Maruti Ertiga compact vehicle for Char Dham Yatra transfers',
    comfort: ['AC in the plains', 'Easy on narrow hill sections', 'Lowest running cost'],
    note: 'Nimble on the tighter corners above Uttarkashi. Less boot space, so pack in soft duffels rather than hard suitcases.',
    priceHint: 'Budget tier and couple packages',
  },
  {
    id: 'suv',
    name: 'Mahindra Scorpio / XUV',
    klass: 'Rugged SUV',
    seats: '6 + driver',
    ideal: 'Higher clearance for early and late season',
    luggage: '3 large + 2 cabin bags',
    photo: `${PX}/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop`,
    photoAlt: 'Mahindra Scorpio SUV for Char Dham Yatra hill routes',
    comfort: ['High ground clearance', 'Strong on rough diversions', 'AC in the plains'],
    note: 'What we send in April and again in October, when landslide diversions leave the road surface unpredictable.',
    priceHint: 'On request, no surcharge',
  },
];

export const VEHICLE_MATRIX = {
  columns: ['Innova Crysta', 'Tempo Traveller', 'Ertiga / Sedan', 'Scorpio / XUV'],
  rows: [
    { label: 'Seats',              values: ['6 + driver', '12–20 + driver', '4 + driver', '6 + driver'] },
    { label: 'Best for',           values: ['Families of 4–6', 'Groups of 8+', 'Couples', 'Early / late season'] },
    { label: 'Luggage',            values: ['4 large', 'Roof carrier', '2 large', '3 large'] },
    { label: 'Ride comfort',       values: ['Excellent', 'Good', 'Good', 'Firm'] },
    { label: 'Ground clearance',   values: ['Medium', 'Medium', 'Low', 'High'] },
    { label: 'AC in plains',       values: ['Yes', 'Yes', 'Yes', 'Yes'] },
    { label: 'AC in hills',        values: ['₹2,000 extra', '₹2,000 extra', '₹2,000 extra', '₹2,000 extra'] },
    { label: 'Oxygen on board',    values: ['Yes', 'Yes', 'Yes', 'Yes'] },
  ],
};

/* ══════════════════════════════════════════════════════════════
   5 · MEAL PLAN
   ══════════════════════════════════════════════════════════════ */

export const MEAL_PLAN = {
  summary: 'Modified American Plan — breakfast and dinner at your hotel, every day, pure vegetarian throughout.',
  meals: [
    {
      name: 'Breakfast',
      time: '7:00 – 8:30 AM, or packed if you have an early start',
      served: 'At your hotel',
      typical: 'Aloo paratha with curd and pickle, poha, upma, bread and butter, boiled eggs on request in Haridwar only, tea and coffee.',
    },
    {
      name: 'Lunch',
      time: 'On the road, at your own cost',
      served: 'Roadside dhabas we know',
      typical: 'Drivers stop at places they eat at themselves. Expect ₹150–300 a head for dal, sabzi, roti and rice. We deliberately leave this out of the package price rather than pad it.',
    },
    {
      name: 'Dinner',
      time: '7:30 – 9:30 PM',
      served: 'At your hotel',
      typical: 'Dal, two seasonal vegetables, rice, roti, salad, papad, and a sweet on most nights. Garhwali specialities such as jhangora kheer and mandua roti appear at the hill hotels.',
    },
  ],
  dietary: [
    { label: 'Jain food',        detail: 'Available at every hotel with 24 hours’ notice. Tell us at booking and we pass it down the chain.' },
    { label: 'South Indian',     detail: 'Idli, dosa and sambar can be arranged at Haridwar, Uttarkashi and Guptkashi on request.' },
    { label: 'No onion, no garlic', detail: 'Standard at all four dhams. Available anywhere else on request.' },
    { label: 'Diabetic / low salt', detail: 'Tell the hotel at check-in. Kitchens on this route handle it routinely.' },
    { label: 'Alcohol and non-veg', detail: 'Not served, and not permitted in the temple towns. This is a pilgrimage route.' },
  ],
  note: 'Above Sonprayag everything is carried up by pony or porter, so the menu at Kedarnath narrows to dal, rice, roti and a vegetable. It is hot and it is enough.',
};

/* ══════════════════════════════════════════════════════════════
   6 · WEATHER BANDS
   Curated seasonal averages by altitude band, with the clothing
   advice that actually matters. Wired for a live feed later.
   ══════════════════════════════════════════════════════════════ */

export const WEATHER = {
  updated: 'Season averages, 2026 planning',
  stations: [
    {
      place: 'Haridwar', alt: '314 m',
      lat: 29.9457, lng: 78.1642,
      bands: [
        { months: 'Apr – Jun', high: 38, low: 22, rain: 'Low', note: 'Hot and dry. Cotton, and drink more water than you think you need.' },
        { months: 'Jul – Aug', high: 33, low: 25, rain: 'Heavy', note: 'Monsoon. Humid, and the hill roads above are the real concern.' },
        { months: 'Sep – Nov', high: 30, low: 15, rain: 'Low',  note: 'The best window. Clear, mild, comfortable.' },
      ],
    },
    {
      place: 'Guptkashi', alt: '1,319 m',
      lat: 30.5333, lng: 79.0667,
      bands: [
        { months: 'Apr – Jun', high: 24, low: 10, rain: 'Low',      note: 'Pleasant days, cold mornings. One fleece is enough.' },
        { months: 'Jul – Aug', high: 22, low: 14, rain: 'Very high', note: 'Landslide season on the Kedarnath road. We do not run this stretch in peak monsoon.' },
        { months: 'Sep – Nov', high: 21, low: 5,  rain: 'Low',      note: 'Crisp and clear. Chaukhamba is visible most mornings.' },
      ],
    },
    {
      place: 'Kedarnath', alt: '3,583 m',
      lat: 30.7346, lng: 79.0669,
      bands: [
        { months: 'Apr – Jun', high: 15, low: -2, rain: 'Snow possible', note: 'Snow banks along the trek into late May. Nights are below freezing.' },
        { months: 'Jul – Aug', high: 17, low: 6,  rain: 'Very high',     note: 'Rain most days, cloud down to the temple, visibility poor.' },
        { months: 'Sep – Oct', high: 13, low: -4, rain: 'Low',           note: 'The clearest skies of the year, and the coldest nights.' },
      ],
    },
    {
      place: 'Badrinath', alt: '3,133 m',
      lat: 30.7433, lng: 79.4938,
      bands: [
        { months: 'Apr – Jun', high: 18, low: 2,  rain: 'Low',       note: 'Bright days, sharp nights. Neelkanth clear at dawn.' },
        { months: 'Jul – Aug', high: 20, low: 8,  rain: 'High',      note: 'Cloud cover most afternoons.' },
        { months: 'Sep – Nov', high: 15, low: -2, rain: 'Low · snow late', note: 'First snow usually falls in late October, just before closing.' },
      ],
    },
  ],
  packing: [
    { group: 'Layers',      items: ['Thermal base layer for Kedarnath and Badrinath nights', 'Fleece or light down mid-layer', 'Waterproof shell with a hood — it rains without warning above 2,000 m'] },
    { group: 'Feet',        items: ['Broken-in trekking shoes with real grip, not new ones', 'Three pairs of wool socks', 'Slippers for the hotel'] },
    { group: 'Sun',        items: ['SPF 50 — UV at 3,500 m burns faster than anyone expects', 'Sunglasses, category 3 or higher', 'Wide-brim hat or cap'] },
    { group: 'Medical',    items: ['Diamox if your doctor approves it, started 24 hrs before Kedarnath', 'Personal prescriptions with the prescription itself', 'ORS sachets, blister plasters, painkillers'] },
    { group: 'Documents',  items: ['Original photo ID for every traveller', 'Char Dham registration QR — we generate it for you', 'Printed medical certificate if you are over 60'] },
  ],
};

/* ══════════════════════════════════════════════════════════════
   7 · GALLERY
   ══════════════════════════════════════════════════════════════ */

export const GALLERY = [
  { src: `${PX}/15031440/pexels-photo-15031440.jpeg`, alt: 'Kedarnath Temple below snow-covered Himalayan peaks at dawn', caption: 'Kedarnath at first light', place: 'Kedarnath · 3,583 m', span: 'wide' },
  { src: `${PX}/15017640/pexels-photo-15017640.jpeg`, alt: 'Badrinath Temple painted facade with Neelkanth peak behind',   caption: 'Badrivishal and Neelkanth', place: 'Badrinath · 3,133 m', span: 'tall' },
  { src: `${PX}/19271393/pexels-photo-19271393.jpeg`, alt: 'Pilgrims on the trek route to a Himalayan shrine',            caption: 'The climb from Gaurikund', place: 'Kedarnath trek · 16 km', span: null },
  { src: `${PX}/34912011/pexels-photo-34912011.jpeg`, alt: 'Helicopter flying over Himalayan peaks on the Char Dham route', caption: 'The six-day aerial circuit', place: 'Above Garhwal', span: null },
  { src: `${PX}/15031440/pexels-photo-15031440.jpeg`, alt: 'Ganga aarti with floating lamps at Har Ki Pauri, Haridwar',    caption: 'Aarti at Har Ki Pauri', place: 'Haridwar · 314 m', span: null },
  { src: `${PX}/15017640/pexels-photo-15017640.jpeg`, alt: 'Confluence of the Bhagirathi and Alaknanda rivers at Devprayag', caption: 'Where the Ganga begins', place: 'Devprayag · 830 m', span: 'wide' },
];

/* ══════════════════════════════════════════════════════════════
   8 · PRICING MODEL — drives the live cost calculator
   ══════════════════════════════════════════════════════════════ */

export const PRICING = {
  hotelTiers: [
    { id: 'standard', label: 'Standard',  delta: 0,     desc: 'Clean guesthouses and lodges, hot water, veg kitchen' },
    { id: 'deluxe',   label: 'Deluxe',    delta: 4500,  desc: '3-star equivalent, river or valley-facing rooms' },
    { id: 'premium',  label: 'Premium',   delta: 9500,  desc: 'Best available at each stop, upgraded rooms where they exist' },
  ],
  vehicleTiers: [
    { id: 'tempo',  label: 'Tempo Traveller', delta: 0,    desc: 'Shared group coach' },
    { id: 'ertiga', label: 'Ertiga / Sedan',  delta: 1800, desc: 'Private, up to 4 travellers' },
    { id: 'innova', label: 'Innova Crysta',   delta: 3600, desc: 'Private, up to 6 travellers' },
    { id: 'suv',    label: 'Scorpio / XUV',   delta: 3200, desc: 'Private, high clearance' },
  ],
  pickups: [
    { id: 'haridwar', label: 'Haridwar',  delta: 0 },
    { id: 'dehradun', label: 'Dehradun',  delta: 1200 },
    { id: 'delhi',    label: 'Delhi NCR', delta: 2800 },
    { id: 'noida',    label: 'Noida',     delta: 3200 },
  ],
  extras: [
    { id: 'heli-kedar', label: 'Kedarnath helicopter', price: 6200, unit: 'per person, return', desc: 'Phata or Sersi helipad, subject to weather' },
    { id: 'pony-kedar', label: 'Pony at Kedarnath',    price: 4200, unit: 'per person, return', desc: 'Registered ponies, 16 km each way' },
    { id: 'pony-yamun', label: 'Pony at Yamunotri',    price: 2200, unit: 'per person, return', desc: '6 km each way from Janki Chatti' },
    { id: 'vip',        label: 'VIP darshan assistance', price: 1500, unit: 'per person, per dham', desc: 'Priority queue coordination through our pujari' },
    { id: 'ac-hills',   label: 'AC in hill sections',  price: 2000, unit: 'per vehicle, whole trip', desc: 'AC is standard in the plains; hill running is optional' },
  ],
  extraNight: 1800,       // per person, per night
  childDiscount: 0.35,    // under 10, sharing a bed
  groupBreaks: [
    { min: 6,  off: 0.05 },
    { min: 12, off: 0.09 },
    { min: 20, off: 0.13 },
  ],
};

/* ══════════════════════════════════════════════════════════════
   9 · REVIEWS
   ══════════════════════════════════════════════════════════════ */

export const REVIEWS = {
  rating: 4.7,
  count: 54,
  source: 'Google Business Profile',
  url: 'https://www.google.com/maps?cid=16074078434377735602',
  breakdown: [
    { stars: 5, pct: 82 },
    { stars: 4, pct: 13 },
    { stars: 3, pct: 3 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ],
  items: [
    {
      name: 'Rajesh Kumar', where: 'Ghaziabad', when: 'May 2026', stars: 5, verified: true,
      trip: 'Char Dham 9N/10D',
      text: 'Booked after comparing four operators. What sold me was that the person who answered the phone was the person who ran the trip. Hotels, vehicle and darshan slots were exactly as quoted. The Kedarnath trek support was the strongest part — our guide walked at my father’s pace the whole way and never once made it feel like a problem.',
    },
    {
      name: 'Sunita Sharma', where: 'Jaipur', when: 'April 2026', stars: 5, verified: true,
      trip: 'Senior Citizen Char Dham 12N/13D',
      text: 'Eight of us, including my parents at 72 and 69. Palki was arranged for both at Kedarnath without any fuss. Ramesh bhai, our driver, was calm on roads that frightened me and knew every tea stop worth stopping at. Ground-floor rooms at every hotel, as promised.',
    },
    {
      name: 'Priya Mehta', where: 'Pune', when: 'May 2026', stars: 5, verified: true,
      trip: 'Do Dham 6N/7D',
      text: 'The price I was quoted in February was the price I paid in May. After what I read about agent markups, that alone was worth it. Badrinath darshan was handled well and Tapt Kund before the 4:30 AM slot was something I will remember for a long time.',
    },
    {
      name: 'Dr. Ganesh Iyer', where: 'Chennai', when: 'June 2026', stars: 5, verified: true,
      trip: 'Char Dham 11N/12D',
      text: 'Three generations travelling together, and the pacing was right for all of us. Oxygen was on the vehicle and we needed it once, at Kedarnath, and it was there in under a minute. They arranged proper Tamil vegetarian food at two hotels on request, which I did not expect this far north.',
    },
    {
      name: 'Vivek Agarwal', where: 'Mumbai', when: 'May 2026', stars: 4, verified: true,
      trip: 'Char Dham by Helicopter',
      text: 'Six days, all four dhams. One flight was held two hours for cloud at Kedarnath, which is nobody’s fault, and the team kept us updated and rebuilt the next day’s schedule to make it up. Four stars only because the Dehradun hotel on night one was the weakest link.',
    },
    {
      name: 'Neha Kapoor', where: 'Lucknow', when: 'October 2025', stars: 5, verified: true,
      trip: 'Kedarnath 3N/4D',
      text: 'Solo woman traveller and I was honestly nervous. They put me with a small group of other solo pilgrims and a guide who checked in without hovering. Guptkashi hotel was clean and warm, food was simple and good. Going back for Badrinath next season.',
    },
  ],
};

/* ══════════════════════════════════════════════════════════════
   10 · TRUST STRIP
   ══════════════════════════════════════════════════════════════ */

export const ASSURANCES = [
  { title: 'You pay the operator',   body: 'No aggregator, no agent commission. The quote you get is the cost of the trip plus our margin, and nothing else.' },
  { title: 'Founded 2010, Haridwar', body: 'Started by Dhanesh Chandra Mishra, a retired Army officer, and still run from Bhupatwala. Fifty thousand pilgrims since.' },
  { title: 'Hill-trained drivers',   body: 'Every driver on the Char Dham circuit has run it for at least three seasons. Vehicles are checked before each departure.' },
  { title: 'Oxygen on every vehicle', body: 'A cylinder travels with you from Haridwar. Our drivers know the location of every medical post on the route.' },
  { title: 'Registration handled',    body: 'The mandatory Uttarakhand Tourist Care registration is completed for every traveller before departure. No portal, no queue.' },
  { title: 'Priced before you pay',   body: 'Full written costing with inclusions and exclusions before any advance. Twenty-five percent holds the booking.' },
];
