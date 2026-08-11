// ═══════════════════════════════════════════════════════════════
//  ROAD DISTANCES — point to point
//
//  Powers the /X-to-Y-distance pages.
//
//  ⚠️  These are keyed to src/data/cabs/routes.js, which is the
//  authoritative source for anything we also sell as a cab route.
//  If a figure changes there, change it here in the same commit —
//  a distance page and a cab page disagreeing about the same road
//  is the exact failure mode we hit with the helicopter prices.
//
//  NOT the same as src/data/routeStops.js. Those distances are
//  CUMULATIVE along the full Char Dham circuit (Badrinath reads
//  560 km because that is the running total via all four dhams).
//  These are direct, one origin to one destination. Both are
//  correct; they answer different questions. Several pages below
//  say so explicitly, because a reader who spots the gap will
//  otherwise assume one of them is wrong.
//
//  DERIVED figures are marked. Gangotri→Yamunotri is not a route
//  we sell as a single cab leg, so its distance is reasoned from
//  the two Haridwar legs rather than measured. Treat it as ±15 km.
// ═══════════════════════════════════════════════════════════════

export const DISTANCES_VERIFIED = false; // flip once driven and checked

export const ROUTES = {
  'haridwar-badrinath': {
    slug: 'haridwar-to-badrinath-distance',
    from: 'Haridwar', to: 'Badrinath',
    km: 320, kmLabel: '320 km', time: '10–11 hrs', source: 'cabs/routes.js',
    endPoint: 'Badrinath temple — road goes all the way',
    trek: null,
    via: ['Rishikesh', 'Devprayag', 'Rudraprayag', 'Karnaprayag', 'Chamoli', 'Joshimath'],
    legs: [
      ['Haridwar → Rishikesh', '25 km', '45 min', 'Flat, easy. The last plains driving you get.'],
      ['Rishikesh → Devprayag', '70 km', '2 hrs', 'The Ganga on your right the whole way. Where the Bhagirathi and Alaknanda meet.'],
      ['Devprayag → Rudraprayag', '70 km', '2 hrs', 'Steady climb along the Alaknanda. Srinagar is the one real town.'],
      ['Rudraprayag → Chamoli', '75 km', '2.5 hrs', 'Through Karnaprayag and Nandprayag. Two more confluences.'],
      ['Chamoli → Joshimath', '50 km', '2 hrs', 'The Helang stretch. Slowest section of the route and the first to close in rain.'],
      ['Joshimath → Badrinath', '45 km', '2 hrs', 'Narrow, high, one-way gate control in places. Vishnuprayag below you.'],
    ],
    whySlow: 'Badrinath is the longest single leg of the Char Dham and the one people most often underestimate. It is 320 km, which on a plains highway is four hours. Here it is ten to eleven, because from Rudraprayag onward you are on a road that climbs 2,800 metres while following a river gorge, and the Chamoli–Joshimath section has been under near-permanent widening and slide repair. Add the 10 PM to 4 AM night-driving ban on all Char Dham routes and a single-day run from Haridwar means leaving before dawn and still arriving tired.',
    note: 'Joshimath has had significant ground subsidence since 2023 and remains monitored. The highway runs and the town functions, but conditions change — ask before you fix dates.',
  },

  'haridwar-gangotri': {
    slug: 'haridwar-to-gangotri-distance',
    from: 'Haridwar', to: 'Gangotri',
    km: 265, kmLabel: '265 km', time: '8–9 hrs', source: 'cabs/routes.js',
    endPoint: 'Gangotri temple — vehicle parks a short walk away',
    trek: null,
    via: ['Rishikesh', 'Chamba', 'Tehri', 'Dharasu', 'Uttarkashi', 'Harsil'],
    legs: [
      ['Haridwar → Rishikesh', '25 km', '45 min', 'Flat and quick.'],
      ['Rishikesh → Chamba', '60 km', '2 hrs', 'Climbing out of the valley. Views back over the Ganga.'],
      ['Chamba → Dharasu', '55 km', '1.5 hrs', 'Past the Tehri reservoir. The road is good here.'],
      ['Dharasu → Uttarkashi', '30 km', '1 hr', 'Along the Bhagirathi. Uttarkashi is the last real town.'],
      ['Uttarkashi → Harsil', '73 km', '2.5 hrs', 'The road narrows and the gorge tightens. Gangnani hot spring en route.'],
      ['Harsil → Gangotri', '25 km', '1 hr', 'Deodar forest, then the temple. Highest and coldest stretch.'],
    ],
    whySlow: 'Gangotri is the easiest of the four dhams to reach in one sense — the road runs to the temple and there is no trek at all, which is why it suits pilgrims who cannot walk far. The time goes in the last 100 km. Up to Uttarkashi the road is broad and fast. Past it the Bhagirathi gorge closes in, the carriageway narrows to a lane and a half in places, and you spend two and a half hours covering 73 km. That stretch is also the first to shut in heavy rain.',
    note: 'Gangotri closes on 10 November 2026. After that the deity is at Mukhba, near Harsil, which you pass on this same road.',
  },

  'haridwar-yamunotri': {
    slug: 'haridwar-to-yamunotri-distance',
    from: 'Haridwar', to: 'Yamunotri',
    km: 222, kmLabel: '222 km to Janki Chatti', time: '8–9 hrs', source: 'cabs/routes.js',
    endPoint: 'Janki Chatti — the road ends here',
    trek: '6 km each way from Janki Chatti, 2–3 hrs up',
    via: ['Rishikesh', 'Narendra Nagar', 'Chamba', 'Brahmakhal', 'Barkot'],
    legs: [
      ['Haridwar → Rishikesh', '25 km', '45 min', 'Flat and quick.'],
      ['Rishikesh → Chamba', '60 km', '2 hrs', 'Via Narendra Nagar. Steady climb.'],
      ['Chamba → Brahmakhal', '45 km', '1.5 hrs', 'Where the Yamunotri and Gangotri roads part company.'],
      ['Brahmakhal → Barkot', '40 km', '1.5 hrs', 'Descending into the Yamuna valley. Barkot is the sensible overnight halt.'],
      ['Barkot → Janki Chatti', '45 km', '2 hrs', 'Narrow valley road. Kharsali sits opposite Janki Chatti.'],
      ['Janki Chatti → Yamunotri', '6 km trek', '2–3 hrs up', 'The steepest approach of the four dhams. Pony and palki available.'],
    ],
    whySlow: 'This is the shortest drive of the four and the hardest finish. The 222 km to Janki Chatti is a comfortable day, but the road ends there and the last 6 km is a genuine climb — steeper per kilometre than the Kedarnath trek, even though it is far shorter. Pilgrims who breeze through the drive and then attempt the trek the same afternoon regularly regret it. Sleep at Barkot, start the trek at first light.',
    note: 'Yamunotri closes on 11 November 2026, Bhai Dooj. The deity then winters at Kharsali, which is directly across the river from Janki Chatti and reachable by road.',
  },

  'delhi-kedarnath': {
    slug: 'delhi-to-kedarnath-distance',
    from: 'Delhi', to: 'Kedarnath',
    km: 445, kmLabel: '445 km to Gaurikund', time: '12–14 hrs driving', source: 'derived: 210 km Delhi–Haridwar + 235 km Haridwar–Gaurikund',
    endPoint: 'Sonprayag, then shuttle to Gaurikund',
    trek: '16 km each way from Gaurikund, 5–7 hrs up',
    via: ['Meerut', 'Muzaffarnagar', 'Roorkee', 'Haridwar', 'Devprayag', 'Rudraprayag', 'Guptkashi', 'Sonprayag'],
    legs: [
      ['Delhi → Haridwar', '210 km', '4–5 hrs', 'Delhi–Meerut Expressway then NH-58. The only fast section.'],
      ['Haridwar → Devprayag', '95 km', '2.5 hrs', 'Into the hills. Road quality drops after Rishikesh.'],
      ['Devprayag → Rudraprayag', '70 km', '2 hrs', 'Along the Alaknanda.'],
      ['Rudraprayag → Guptkashi', '45 km', '1.5 hrs', 'Turning up the Mandakini valley.'],
      ['Guptkashi → Sonprayag', '30 km', '1.5 hrs', 'Narrow. Vehicles stop at Sonprayag.'],
      ['Sonprayag → Gaurikund', '5 km', '20 min', 'Police-controlled shuttle only. No private vehicles.'],
      ['Gaurikund → Kedarnath', '16 km trek', '5–7 hrs', 'On foot, pony, palki or helicopter from Phata/Sersi.'],
    ],
    whySlow: 'Nobody should attempt this in one day, and operators who quote it as a single drive are describing something that does not work. It is 445 km of which only the first 210 are fast, followed by a 16 km trek at altitude. Driving twelve hours and starting a Himalayan climb the next morning is how people end up with altitude sickness at Rambara. Break it at Haridwar or Rishikesh on night one and Guptkashi or Sonprayag on night two.',
    note: 'Through Shravan — usually late July into August — the Delhi–Haridwar leg is heavily disrupted by the Kanwar Yatra, with NH-58 progressively closed to vehicles. In that window take the train to Haridwar instead.',
  },

  'gangotri-yamunotri': {
    slug: 'gangotri-to-yamunotri-distance',
    from: 'Gangotri', to: 'Yamunotri',
    km: 225, kmLabel: 'about 225 km to Janki Chatti', time: '8–9 hrs', source: 'DERIVED — not a single cab leg we sell. ±15 km.',
    endPoint: 'Janki Chatti, then the trek',
    trek: '6 km each way from Janki Chatti',
    via: ['Harsil', 'Uttarkashi', 'Dharasu', 'Brahmakhal', 'Barkot'],
    legs: [
      ['Gangotri → Uttarkashi', '98 km', '3.5 hrs', 'Back down the Bhagirathi gorge you came up.'],
      ['Uttarkashi → Dharasu', '30 km', '1 hr', 'Descending to the valley junction.'],
      ['Dharasu → Brahmakhal', '35 km', '1.5 hrs', 'The crossover point between the two valleys.'],
      ['Brahmakhal → Barkot', '40 km', '1.5 hrs', 'Into the Yamuna valley.'],
      ['Barkot → Janki Chatti', '45 km', '2 hrs', 'Narrow valley road to the roadhead.'],
    ],
    whySlow: 'Gangotri and Yamunotri look close on a map — roughly 80 km apart as the crow flies — and there is no road between them. The Bandarpunch massif sits in the way. To get from one to the other you descend the entire Bhagirathi valley to Dharasu, cross to the Yamuna valley, and climb again. That is 225 km and a full day to cover 80 km of actual separation, and it is the single most useful thing to understand about Char Dham route planning.',
    note: 'This is exactly why the traditional yatra order runs Yamunotri first, then Gangotri, then east to Kedarnath and Badrinath. Doing Gangotri before Yamunotri means driving this leg backwards and losing a day.',
  },
};

export const routeList = () => Object.values(ROUTES);
export const getRoute = key => ROUTES[key];
