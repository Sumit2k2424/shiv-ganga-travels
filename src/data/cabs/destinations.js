// ══════════════════════════════════════════════════════════════
//  DESTINATIONS — places we drive to
// ══════════════════════════════════════════════════════════════
//  Powers /cabs/to/[destination], which answers a different query
//  than any route page does: "kedarnath taxi service", "cab to
//  badrinath", "taxi to auli" — where the traveller knows where they
//  are going but has not settled on where they are starting from.
//
//  A destination page earns its keep by comparing fares from every
//  origin in one table, and by carrying the facts that are true of
//  the place regardless of who is driving there: where the road
//  actually ends, what the trek is, when it opens, what permit you
//  need. The route pages then handle the journey itself.
//
//  Exact opening and closing dates change every year with the
//  panchang and are announced a few weeks ahead, so we give the
//  season window here and link out to the dedicated dates page
//  rather than baking a date that goes stale.

export const DESTINATIONS = [
  // ───────────────── THE FOUR DHAMS ─────────────────
  {
    slug: 'kedarnath',
    name: 'Kedarnath',
    kind: 'dham',
    state: 'Uttarakhand',
    altitude: '3,583 m',
    lastMotorable: 'Sonprayag (private vehicles), then a shuttle to Gaurikund',
    trek: '16 km on foot from Gaurikund',
    season: 'Opens around late April or early May on Akshaya Tritiya; closes on Bhai Dooj, two days after Diwali',
    intro: 'Kedarnath is the hardest of the four dhams to reach and the one people most want to. No road goes there. Private vehicles stop at Sonprayag, a timed police-run shuttle covers the last 5 km to Gaurikund, and from Gaurikund it is 16 km uphill on foot, by pony, by palki, or a helicopter hop from Phata or Guptkashi. Every cab route to Kedarnath on this site therefore ends at Sonprayag or Gaurikund — anyone quoting you a taxi "to Kedarnath temple" is quoting you a taxi to Gaurikund and hoping you do not ask.',
    gettingAround: [
      ['Pony or khachar from Gaurikund', '₹3,000–₹4,500 each way depending on season; book at the Gaurikund counter'],
      ['Palki (four bearers)', '₹8,000–₹12,000 each way — the usual choice for senior pilgrims'],
      ['Helicopter from Phata, Sersi or Guptkashi', 'Roughly ₹8,000 return per person; slots sell out weeks ahead and grounds instantly in bad weather'],
      ['On foot', '16 km, six to nine hours up. Start by 4 AM to be back down the same day, or stay overnight at Kedarnath'],
    ],
    whereToStay: [
      ['Guptkashi', 'The sensible base — 1,319 m, proper hotels, hot water, and only 30 km from Sonprayag'],
      ['Sonprayag & Sitapur', 'Basic but closest to the shuttle point; useful if you want the earliest possible start'],
      ['Kedarnath itself', 'GMVN huts and tents near the temple. Book far ahead — capacity is tiny'],
    ],
    permits: 'Char Dham biometric registration is mandatory. Free, done online or at the Haridwar and Rishikesh counters — we handle it with your booking.',
    faqs: [
      ['Can a cab go all the way to Kedarnath temple?', 'No. Private vehicles stop at Sonprayag, a shuttle takes you the last 5 km to Gaurikund, and from there it is a 16 km trek, pony ride, palki or helicopter. Any operator quoting a cab to the temple itself is quoting you Gaurikund.'],
      ['Which city is cheapest to book a Kedarnath cab from?', 'Haridwar, because our vehicles are stationed there. Rishikesh is about the same and 25 km shorter; Dehradun costs a little more but lets you start straight from Jolly Grant airport.'],
      ['How many days do I need for Kedarnath by road?', 'Three at a minimum from Haridwar — up to Guptkashi, trek day, and back. Two is only realistic with a helicopter leg.'],
      ['What happens to my luggage during the trek?', 'It stays locked in the vehicle at Sonprayag with your driver. Take a light daypack up; there is nowhere to store anything at Gaurikund.'],
    ],
    guides: [['How to Reach Kedarnath', '/blog/how-to-reach-kedarnath'], ['Kedarnath Yatra Guide', '/kedarnath-yatra'], ['Kedarnath Temple', '/kedarnath-temple']],
  },
  {
    slug: 'badrinath',
    name: 'Badrinath',
    kind: 'dham',
    state: 'Uttarakhand',
    altitude: '3,133 m',
    lastMotorable: 'Badrinath temple itself — the road goes all the way',
    trek: 'None',
    season: 'Opens around late April or early May; closes in the third week of November',
    intro: 'Badrinath is the farthest of the four dhams and, paradoxically, the easiest. The road runs right up to the temple town, so there is no trek at any point — which makes it the one dham that genuinely works for pilgrims in their seventies and eighties, or anyone who cannot manage the Kedarnath climb. The drive follows the Alaknanda through all five Prayags to Joshimath, then climbs hard for the last stretch to 3,133 m. Mana, India’s last village before Tibet, is 3 km further on and worth the extra twenty minutes.',
    gettingAround: [
      ['Temple to Tapt Kund', 'The hot spring is at the temple steps — most pilgrims bathe before darshan'],
      ['Mana village', '3 km beyond Badrinath; your cab can take you, or it is a pleasant walk'],
      ['Vasudhara Falls', '9 km from Mana including a 5 km walk from Mana village'],
    ],
    whereToStay: [
      ['Badrinath town', 'GMVN and private hotels within walking distance of the temple — the best option if you want the 4:30 AM abhishek slot'],
      ['Joshimath', '45 km short of Badrinath at 1,890 m. Warmer, more comfortable, and the usual halt on the way up'],
      ['Pipalkoti', 'Lower and warmer again; the choice when Joshimath is full'],
    ],
    permits: 'Char Dham biometric registration is mandatory. No trekking permit needed since there is no trek.',
    faqs: [
      ['Does the cab go right up to Badrinath temple?', 'Yes. The road reaches the temple town and the parking is a few minutes’ walk from the temple itself. It is the only dham of the four with no trek at all.'],
      ['Is Badrinath suitable for elderly pilgrims?', 'It is the most senior-friendly of the four dhams for exactly that reason. We add rest halts on the drive, break the journey at Joshimath, and ask hotels for ground-floor rooms.'],
      ['How many days does Badrinath need from Haridwar?', 'Three is the honest minimum — the drive is 10 to 11 hours each way, so it is up, darshan, and back with a Joshimath night in each direction.'],
    ],
    guides: [['How to Reach Badrinath', '/how-to-reach-badrinath'], ['Badrinath Yatra Guide', '/badrinath-yatra'], ['Badrinath Temple', '/badrinath-temple']],
  },
  {
    slug: 'gangotri',
    name: 'Gangotri',
    kind: 'dham',
    state: 'Uttarakhand',
    altitude: '3,100 m',
    lastMotorable: 'Gangotri temple — the road reaches it',
    trek: 'None to the temple; 18 km to Gaumukh glacier if you want it',
    season: 'Opens on Akshaya Tritiya in late April or early May; closes on Annakut, the day after Diwali',
    intro: 'Gangotri is the source shrine of the Ganga and the easiest dham to combine with Yamunotri, since both sit in the western Garhwal valleys. The road reaches the temple, so there is no trek unless you want one — and the one on offer is a serious 18 km walk to the Gaumukh glacier snout, which needs a forest permit and is a two-day undertaking. The drive up through Uttarkashi and Harsil is among the most beautiful in the state, and Harsil in particular is worth building an hour into your plan for.',
    gettingAround: [
      ['Temple and Bhagirathi Shila', 'All within a few minutes’ walk of the parking'],
      ['Surya Kund & Gauri Kund falls', 'Beside the temple — plan three or four hours at Gangotri in total'],
      ['Gaumukh glacier trek', '18 km each way, forest permit required, two days minimum'],
    ],
    whereToStay: [
      ['Harsil', '25 km before Gangotri in the Bhagirathi gorge — the nicest place to stay on this route by some distance'],
      ['Uttarkashi', 'The main town on the route, 100 km short. Full range of hotels'],
      ['Gangotri', 'Ashrams and basic guesthouses beside the temple'],
    ],
    permits: 'Char Dham biometric registration is mandatory. The Gaumukh trek needs a separate Gangotri National Park permit, capped at 150 people a day.',
    faqs: [
      ['Can a cab reach Gangotri temple?', 'Yes, the road goes all the way. Parking is a short walk from the temple and there is no trekking involved unless you add the Gaumukh glacier walk.'],
      ['What is the best stop on the Haridwar to Gangotri drive?', 'Harsil, 25 km before Gangotri. It sits in the Bhagirathi gorge among apple orchards and deodar, and most people wish they had allowed a night there rather than an hour.'],
      ['Do I need a permit for the Gaumukh trek?', 'Yes — a Gangotri National Park permit, limited to 150 people a day and best arranged a few weeks ahead. It is separate from the Char Dham registration.'],
    ],
    guides: [['How to Reach Gangotri', '/how-to-reach-gangotri'], ['Gangotri Yatra Guide', '/gangotri-yatra'], ['Harsil Valley', '/harsil-valley']],
  },
  {
    slug: 'yamunotri',
    name: 'Yamunotri',
    kind: 'dham',
    state: 'Uttarakhand',
    altitude: '3,293 m',
    lastMotorable: 'Janki Chatti',
    trek: '6 km on foot from Janki Chatti',
    season: 'Opens on Akshaya Tritiya in late April or early May; closes on Bhai Dooj after Diwali',
    intro: 'Yamunotri is the first dham in the traditional clockwise circuit and the gentlest introduction to Garhwal driving — the road climbs steadily through Chamba and Barkot with the Yamuna valley opening below you, and nothing about it is frightening. The cab reaches Janki Chatti; the last 6 km to the temple is on foot, by pony or by palki, and it is a proper climb rather than a stroll. The Surya Kund hot spring at the top is hot enough to cook rice in, which is exactly what pilgrims do as prasad.',
    gettingAround: [
      ['Pony or palki from Janki Chatti', '₹1,200–₹1,800 for a pony, more for a palki; arranged at the Janki Chatti stand'],
      ['On foot', '6 km, roughly three hours up and two down'],
      ['Surya Kund & Divya Shila', 'At the temple — the hot spring where prasad is cooked'],
    ],
    whereToStay: [
      ['Barkot', 'The standard overnight halt, 45 km short. Modest hotels, reliable hot water'],
      ['Janki Chatti & Phool Chatti', 'Basic guesthouses at the road head for the earliest possible start'],
      ['Syana Chatti', 'Between Barkot and Janki Chatti, quieter than both'],
    ],
    permits: 'Char Dham biometric registration is mandatory.',
    faqs: [
      ['How close can a cab get to Yamunotri?', 'Janki Chatti, where the road ends. From there it is 6 km up to the temple on foot, by pony or by palki. Your driver waits at Janki Chatti with the luggage.'],
      ['Is the Yamunotri trek harder than Kedarnath?', 'Much shorter — 6 km against 16 — but steeper in places. Most reasonably fit people manage it in about three hours; ponies are readily available if not.'],
      ['Where should I stay for Yamunotri?', 'Barkot, 45 km before Janki Chatti. Driving from Haridwar to Janki Chatti and back in a day is possible on paper and exhausting in practice.'],
    ],
    guides: [['How to Reach Yamunotri', '/how-to-reach-yamunotri'], ['Yamunotri Yatra Guide', '/yamunotri-yatra']],
  },

  // ───────────────── HILL STATIONS ─────────────────
  {
    slug: 'auli',
    name: 'Auli',
    kind: 'hill',
    state: 'Uttarakhand',
    altitude: '2,800 m (Joshimath base 1,890 m)',
    lastMotorable: 'Joshimath, then ropeway or a 14 km hill road up to Auli',
    trek: 'None — ropeway or road',
    season: 'Snow and skiing December to February; green meadows April to June and September to November',
    intro: 'Auli is India’s best-known ski slope and has the finest front-row view of Nanda Devi anywhere you can drive to. It is also a long way — you follow almost the entire Badrinath road to Joshimath before turning up. The reward for the nine or ten hours is a meadow at 2,800 m with the second-highest mountain in India filling the skyline. Asia’s longest cable car runs the 4 km up from Joshimath; there is also a 14 km road if you would rather drive it.',
    gettingAround: [
      ['Joshimath–Auli ropeway', '4 km, Asia’s longest cable car. Shortest queues first thing in the morning'],
      ['Joshimath–Auli by road', '14 km of hill road, about 45 minutes'],
      ['Gorson Bahuguna meadow', '3 km walk from Auli — the best Nanda Devi viewpoint'],
    ],
    whereToStay: [
      ['Joshimath', 'The practical base. Full range of hotels at 1,890 m, warmer than Auli'],
      ['Auli', 'GMVN resort and a handful of properties on the slope — book well ahead in ski season'],
    ],
    permits: 'None required.',
    faqs: [
      ['Does the cab go up to Auli or stop at Joshimath?', 'Cabs go to Joshimath. From there it is the 4 km ropeway or a 14 km hill drive up to Auli — we arrange either, and most people take the ropeway up and the road down.'],
      ['When is there snow in Auli?', 'December through February is reliable, with January the deepest. March can still hold snow at the top. From April the meadows open up green, which many people prefer.'],
      ['Can I combine Auli with Badrinath?', 'Easily, and it barely costs a day — you pass Joshimath either way, so it is the same road up to that point.'],
    ],
    guides: [['Auli Tour Package', '/packages/uttarakhand']],
  },
  {
    slug: 'chopta',
    name: 'Chopta',
    kind: 'hill',
    state: 'Uttarakhand',
    altitude: '2,680 m',
    lastMotorable: 'Chopta',
    trek: '3.5 km to Tungnath, a further 1.5 km to Chandrashila',
    season: 'Rhododendrons March to May; clear peaks September to November; snow trekking December to March',
    intro: 'Chopta is the quiet one — a meadow in dense deodar and rhododendron forest that gets called the mini Switzerland of Uttarakhand and, unusually for that phrase, roughly deserves it. It is the base for the walk up to Tungnath, the highest Shiva temple in the world, and Chandrashila summit above it. The route leaves the Char Dham highway at Rudraprayag, which is exactly why it stays quiet: the coach traffic carries straight on towards Kedarnath.',
    gettingAround: [
      ['Tungnath trek', '3.5 km from Chopta, about two hours up. Paved most of the way'],
      ['Chandrashila summit', 'A further 1.5 km and steeper. Worth it for the Nanda Devi and Trishul panorama'],
      ['Deoria Tal', '3 km walk from Sari village, 15 km from Chopta — the lake with the Chaukhamba reflection'],
    ],
    whereToStay: [
      ['Chopta', 'Limited — a handful of camps and small lodges. Book ahead or you will not get one'],
      ['Sari village', 'For Deoria Tal, and easier to find a bed'],
      ['Ukhimath', 'Proper hotels, 30 km back down the valley'],
    ],
    permits: 'None required.',
    faqs: [
      ['Can I trek Tungnath from Chopta in one day?', 'Yes — 3.5 km up to Tungnath and another 1.5 km to Chandrashila. Most people do the whole thing as a half day from a Chopta overnight and are back by lunch.'],
      ['Is Chopta worth it after doing the Char Dham?', 'It is the trip people come back for. Far fewer crowds than the dham routes, real forest, and a summit you can actually reach on your own legs in a morning.'],
    ],
    guides: [['Uttarakhand Tour Packages', '/packages/uttarakhand']],
  },
  {
    slug: 'mussoorie',
    name: 'Mussoorie',
    kind: 'hill',
    state: 'Uttarakhand',
    altitude: '2,005 m',
    lastMotorable: 'Mall Road, subject to timed vehicle restrictions',
    trek: 'None',
    season: 'Pleasant March to June and September to November; misty and green in the monsoon',
    intro: 'Mussoorie is the quickest escape into the hills from anywhere in the Doon valley — an hour from Dehradun, under three from Rishikesh or Haridwar. The climb up Rajpur Road drops the temperature with every bend, and by Mall Road you are 2,000 m up among colonial-era estates and deodar. It is the standard add-on for families finishing a yatra who want two easy days before the flight home.',
    gettingAround: [
      ['Mall Road', 'Vehicle entry is restricted at peak hours. Your driver knows the windows and the parking'],
      ['Gun Hill', 'Ropeway from Mall Road, best in the hour before sunset'],
      ['Kempty Falls', '15 km before town on the way up; go early, it fills by midday'],
      ['Camel’s Back Road', 'A flat 3 km walk with the best Himalayan skyline in town'],
    ],
    whereToStay: [
      ['Mall Road & Library Bazaar', 'Walking distance to everything; the busiest and noisiest'],
      ['Landour', 'Above Mussoorie, much quieter, better views and better cafes'],
      ['Barlowganj & Jharipani', 'On the way up, cheaper and calmer'],
    ],
    permits: 'None required. Mall Road has timed vehicle restrictions.',
    faqs: [
      ['Is a Mussoorie day trip possible from Haridwar or Rishikesh?', 'Comfortably. Leave by 7 AM, take in Kempty Falls and Mall Road, and you are back by evening. An overnight is better if you want Gun Hill and the Camel’s Back walk unhurried.'],
      ['Can the cab drive on Mall Road?', 'Only outside the restricted hours. Your driver drops you at the permitted parking and picks you up there — it is a short and pleasant walk either way.'],
    ],
    guides: [['Uttarakhand Tour Packages', '/packages/uttarakhand']],
  },
  {
    slug: 'nainital',
    name: 'Nainital',
    kind: 'hill',
    state: 'Uttarakhand',
    altitude: '1,938 m',
    lastMotorable: 'Mallital, beside the lake',
    trek: 'None',
    season: 'Best March to June and September to November; cold and quiet December to February',
    intro: 'Nainital sits in Kumaon, the other half of Uttarakhand from the dhams, so getting there is a plains-and-then-hills drive rather than a gorge route — mostly good highway through Haldwani with the climb saved for the last hour. That makes it far easier on senior travellers than any Garhwal route. It is the classic family lake holiday, and it pairs naturally with a Jim Corbett night at Ramnagar, which sits right on the way.',
    gettingAround: [
      ['Naini Lake boating', 'From the Mallital or Tallital jetties'],
      ['Naina Devi temple', 'At the north end of the lake, beside the flats'],
      ['Snow View', 'Ropeway from Mallital, or a steep 2 km walk'],
      ['Kainchi Dham (Neem Karoli Baba ashram)', '17 km on the Almora road — a half-day extension most of our bookings now add'],
    ],
    whereToStay: [
      ['Mallital', 'Lakeside, walking distance to the Mall and the boats'],
      ['Tallital', 'The quieter end, near the bus stand'],
      ['Ayarpatta & Sher Ka Danda', 'On the ridges above the lake, better views, a steep walk back'],
    ],
    permits: 'None required.',
    faqs: [
      ['Is the drive to Nainital easier than the Char Dham routes?', 'Considerably. It is highway almost all the way to Haldwani with only the final hour in the hills, which makes it the route we recommend for families travelling with very young children or elderly parents.'],
      ['Can I add Jim Corbett to a Nainital trip?', 'Easily — Ramnagar, the Corbett gateway, is directly on the route. A Haridwar or Delhi loop taking in Corbett and Nainital works well over three or four days.'],
      ['How far is Kainchi Dham from Nainital?', 'About 17 km on the Almora road, half an hour. Go early; the ashram gets very busy by mid-morning.'],
    ],
    guides: [['Uttarakhand Tour Packages', '/packages/uttarakhand']],
  },
  {
    slug: 'mukteshwar',
    name: 'Mukteshwar',
    kind: 'hill',
    state: 'Uttarakhand',
    altitude: '2,171 m',
    lastMotorable: 'Mukteshwar village',
    trek: 'None',
    season: 'Clearest Himalayan views October to February; orchards in blossom March and April',
    intro: 'Mukteshwar is what people choose when Nainital has disappointed them. It is a ridge village at 2,171 m surrounded by apple and apricot orchards, with one of the widest Himalayan skylines in Kumaon — Nanda Devi through to Trishul on a clear winter morning. There is no lake and there are few cafes, which is precisely the point. The drive is the Nainital route plus another hour through the orchard belt at Ramgarh.',
    gettingAround: [
      ['Mukteshwar Dham', 'The Shiva temple at the top of the ridge, and the reason for the name'],
      ['Chauli ki Jali', 'The cliff face beside the temple with the drop and the view'],
      ['Ramgarh orchards', 'The fruit bowl of Kumaon, 15 km back down'],
    ],
    whereToStay: [
      ['Mukteshwar village', 'Orchard homestays and small resorts along the ridge'],
      ['Ramgarh', 'Among the orchards, lower and warmer'],
      ['Bhimtal or Nainital', 'If you want the lake as well, and a wider choice of hotels'],
    ],
    permits: 'None required.',
    faqs: [
      ['Is Mukteshwar better than Nainital?', 'It is higher, quieter, and has much bigger mountain views, but no lake and far fewer places to eat. Plenty of travellers do both in one Kumaon loop — Nainital for the lake, Mukteshwar for the calm.'],
      ['How long is the drive to Mukteshwar?', 'From Haridwar about 310 km and eight to nine hours; from Dehradun 335 km. Most of it is highway, with the hill climb in the last 60 km. A night at Nainital on the way splits it neatly.'],
    ],
    guides: [['Uttarakhand Tour Packages', '/packages/uttarakhand']],
  },

  // ───────────────── GATEWAY CITIES (as destinations) ─────────────────
  {
    slug: 'haridwar',
    name: 'Haridwar',
    kind: 'city',
    state: 'Uttarakhand',
    altitude: '314 m',
    lastMotorable: 'Anywhere in the city',
    trek: 'None',
    season: 'Year-round; busiest during the yatra season and at Kanwar Mela in July',
    intro: 'Haridwar is the gateway to the whole Char Dham circuit and a destination in its own right — the Ganga arrives on the plains here, and the evening aarti at Har Ki Pauri is the reason most people come. It is also where our office and our vehicles are, so a drop here is the one route we can quote most sharply. Most bookings to Haridwar are the first leg of something bigger: the transfer up from Delhi or Jaipur, with the yatra starting the next morning.',
    gettingAround: [
      ['Har Ki Pauri', 'The main ghat and the evening Ganga aarti. Vehicles stop at Upper Road, two minutes’ walk'],
      ['Mansa Devi & Chandi Devi', 'Both hilltop temples, both with ropeways'],
      ['Rishikesh', '25 km on, and almost always visited on the same trip'],
    ],
    whereToStay: [
      ['Har Ki Pauri & Bara Bazaar', 'Walking distance to the aarti; noisy and atmospheric'],
      ['Bhupatwala', 'Quieter, along the river, close to Shantikunj — where most yatra groups stay'],
      ['Shyampur & Bypass Road', 'Newer hotels with parking, five minutes out'],
    ],
    permits: 'None required for Haridwar itself. Char Dham registration is needed only if you continue to the dhams.',
    faqs: [
      ['What time is the Ganga aarti at Har Ki Pauri?', 'Around sunset — roughly 6 PM in summer and 5:30 PM in winter. Arrive forty minutes early for a seat anywhere near the front.'],
      ['Is Haridwar the best place to start the Char Dham Yatra?', 'For most people, yes. It has the rail connections, the registration counters, the yatra infrastructure, and it is where operators like us are actually based, so vehicles start from here rather than being repositioned.'],
    ],
    guides: [['How to Reach Haridwar', '/how-to-reach-haridwar'], ['Haridwar Tour Packages', '/haridwar-tour-packages']],
  },

  // ───────────────── ROAD HEADS ─────────────────
  //  The two places our vehicles actually stop on the biggest pilgrim
  //  routes. Both are searched by name by people who already know the
  //  road ends there — a different traveller from the one searching
  //  "cab to Kedarnath", and one nobody on page one serves properly.
  {
    slug: 'sonprayag',
    name: 'Sonprayag',
    kind: 'city',
    state: 'Uttarakhand',
    altitude: '1,829 m',
    lastMotorable: 'Sonprayag itself — no private vehicle goes beyond it towards Kedarnath',
    trek: 'Shuttle jeep 5 km to Gaurikund, then 16 km on foot to Kedarnath',
    season: 'Live only while Kedarnath is open — late April or early May until Bhai Dooj, two days after Diwali',
    intro: 'Sonprayag is where the Kedarnath road ends for everybody. It is a small confluence town at 1,829 m where the Basuki meets the Mandakini, and its entire purpose in the yatra is administrative: private vehicles park here, a police-controlled shuttle jeep runs the last 5 km up to Gaurikund, and the 16 km trek starts above that. If you have been quoted a taxi “to Kedarnath”, this is the place that taxi is actually taking you. Booking it by its real name usually gets you a straighter answer on price, because the operator knows you understand the road.',
    gettingAround: [
      ['Shuttle jeep to Gaurikund', '5 km, ₹50–₹100 per head, government-run. It is the only way up — private cars, including ours, are turned back at the barrier'],
      ['Parking at Sonprayag', 'Paid multi-day parking beside the shuttle stand. Your driver waits here with your luggage while you are on the mountain'],
      ['Pony, palki and kandi', 'All booked at the Gaurikund counter above, not at Sonprayag'],
      ['Helipads at Phata, Sersi and Guptkashi', '15–30 km back down the valley — the helicopter leg starts below Sonprayag, not above it'],
    ],
    whereToStay: [
      ['Guptkashi', 'The sensible halt, 30 km below at 1,319 m — real hotels, hot water, and a 45-minute run to the shuttle in the morning'],
      ['Sonprayag and Sitapur', 'Basic guesthouses within walking distance of the barrier. Worth it only if you want the very first shuttle slot'],
      ['Gaurikund', 'A handful of rooms above the shuttle drop, at the trek head itself. Noisy, cold and always full in season'],
    ],
    permits: 'Char Dham biometric registration is checked at Sonprayag before you are allowed onto the shuttle. Do it online or at the Haridwar and Rishikesh counters — we handle it with your booking.',
    faqs: [
      ['Why do taxis stop at Sonprayag and not Gaurikund?', 'The 5 km above Sonprayag is a single-lane road that cannot absorb yatra traffic, so the administration restricts it to government-assigned shuttle jeeps. Every private vehicle, ours included, is turned back at the Sonprayag barrier.'],
      ['How much is a taxi from Haridwar to Sonprayag?', 'A one-way drop starts at about ₹3,000 in a Swift Dzire and ₹4,300 in an Innova Crysta — the same fare as a Kedarnath booking, because Sonprayag is where a Kedarnath cab ends.'],
      ['Where does my driver wait while I trek to Kedarnath?', 'At the Sonprayag parking, with your luggage locked in the vehicle. Take only a daypack up; there is no left-luggage facility at Gaurikund.'],
      ['How long does the Sonprayag to Gaurikund shuttle take?', 'Fifteen to twenty minutes of driving, but the queue is the real variable. Before 8 AM it is usually quick; after midday it can cost you two hours.'],
    ],
    guides: [['Gaurikund', '/gaurikund'], ['Kedarnath Yatra Guide', '/kedarnath-yatra'], ['Pony, Palki & Kandi Rates', '/kedarnath-pony-palki-kandi-rates']],
  },
  {
    slug: 'joshimath',
    name: 'Joshimath',
    kind: 'city',
    state: 'Uttarakhand',
    altitude: '1,890 m',
    lastMotorable: 'Joshimath town; the road continues to Badrinath and up to Auli',
    trek: 'None from town — Auli is a 4.3 km ropeway or 13 km by road',
    season: 'Year-round. Badrinath traffic late April to November, ski season December to March',
    intro: 'Joshimath — officially Jyotirmath since 2023 — is the hinge of the whole upper Alaknanda valley. Badrinath, Auli, Hemkund Sahib and the Valley of Flowers all hang off this one town at 1,890 m, and there is no way to reach any of them without passing through it. That makes it the most useful halt on the Haridwar–Badrinath drive: ten to eleven hours from Haridwar is honest driving time, and stopping here turns a punishing day into two civil ones. It is also where Badrinath gate timings are managed in peak season, so an overnight here is often what gets you an early slot rather than a mid-afternoon one.',
    gettingAround: [
      ['Auli ropeway', '4.3 km and about 25 minutes from the town cable car station — one of Asia’s longest. Closed in high wind, when the 13 km road is the fallback'],
      ['Govindghat', '22 km on towards Badrinath — the road head for Hemkund Sahib and the Valley of Flowers'],
      ['Badrinath', '45 km and roughly two hours further up, subject to the gate timings'],
      ['Narsingh Temple and the Adi Shankaracharya math', 'In town, and the winter seat of Badrinath — worth the hour'],
    ],
    whereToStay: [
      ['Joshimath town', 'The widest choice of proper hotels above Chamoli, and the reason most Badrinath itineraries halt here'],
      ['Auli', 'Resorts and GMVN huts at the top of the ropeway — cold, spectacular and much dearer'],
      ['Pipalkoti', '38 km below at a kinder altitude, useful if you arrive late or are travelling with senior passengers'],
    ],
    permits: 'None for Joshimath itself. Char Dham biometric registration is required to continue to Badrinath; Valley of Flowers entry is ticketed at Ghangaria.',
    faqs: [
      ['Is Joshimath safe to stay in after the 2023 subsidence?', 'The affected zone was specific wards, and hotels outside it have operated normally through every season since. We book halts in the unaffected parts of town, and Pipalkoti is always available as an alternative if you would rather not stop here at all.'],
      ['How far is Joshimath from Haridwar by cab?', 'About 275 km and 9 to 10 hours. It is the standard overnight halt on the Badrinath run, which is 45 km further up.'],
      ['Can I do Auli as a day trip from Joshimath?', 'Easily. The ropeway takes about 25 minutes each way, so a morning up and back still leaves the afternoon for the drive to Badrinath.'],
      ['Is Joshimath the same as Jyotirmath?', 'Yes — the town was officially renamed Jyotirmath in 2023, after the Adi Shankaracharya math there. Almost every road sign, ticket and hotel booking still says Joshimath.'],
    ],
    guides: [['Joshimath Sightseeing', '/joshimath-sightseeing-places'], ['Govindghat', '/govindghat'], ['Hemkund Sahib Yatra', '/hemkund-sahib-yatra'], ['Narsingh Temple', '/joshimath-narsingh-temple']],
  },

  // ───────────────── MORE GATEWAY CITIES ─────────────────
  {
    slug: 'rishikesh',
    name: 'Rishikesh',
    kind: 'city',
    state: 'Uttarakhand',
    altitude: '372 m',
    lastMotorable: 'Anywhere in the city; vehicles cannot cross Ram Jhula or Laxman Jhula',
    trek: 'None',
    season: 'Year-round. Rafting late September to June, yoga season all year, monsoon quiet',
    intro: 'Rishikesh is where the Ganga leaves the mountains, and where the Char Dham highway properly begins — every dham route passes through it. People arriving by cab are usually coming for one of three things: a yoga or meditation course in Tapovan, a rafting weekend, or the start of a yatra the next morning. The drive up from Delhi is 240 km of expressway and then twenty minutes of river, which is why so many groups skip the train and simply book a car. One practical note: vehicles cannot cross either suspension bridge, so an address on the far bank means a short walk at the end.',
    gettingAround: [
      ['Ram Jhula and Swarg Ashram', 'Parking on the Muni Ki Reti side; the bridge itself is foot and two-wheeler only'],
      ['Laxman Jhula and Tapovan', 'Where most yoga schools and cafés are. Narrow lanes — we meet you at the nearest turning point'],
      ['Triveni Ghat', 'The city-side ghat and the evening Ganga aarti, quieter than Haridwar’s'],
      ['Neelkanth Mahadev', '32 km each way through the Rajaji forest road — the standard half-day run'],
    ],
    whereToStay: [
      ['Tapovan and Laxman Jhula', 'Guesthouses, yoga schools and the cheapest beds. Walk-in territory'],
      ['Swarg Ashram', 'Ashram stays and the quietest part of the riverbank'],
      ['Muni Ki Reti and Shivpuri', 'Riverside resorts and the rafting camps upstream, all with parking'],
    ],
    permits: 'None required. Char Dham biometric registration is needed only if you continue to the dhams; there is a counter in Rishikesh.',
    faqs: [
      ['How long does a cab from Delhi to Rishikesh take?', 'About 240 km and five to six hours, most of it on the Delhi–Dehradun expressway and NH-334. Leave before 7 AM and you can be at Ram Jhula for lunch.'],
      ['Can a cab drop me at my Tapovan guesthouse?', 'Usually to the door, but the lanes above Laxman Jhula are the exception — there we drop at the nearest point a vehicle can turn, which is a two-minute walk at most.'],
      ['Which Rishikesh railway station will you pick up from?', 'Either. The old Rishikesh station and the newer Yoganagari Rishikesh station are 6 km apart and trains use both, so tell us the station printed on your ticket.'],
      ['Is it better to base a Char Dham trip in Rishikesh or Haridwar?', 'Whichever you are already in. Rishikesh is 25 km closer to every dham, but the roads merge at Devprayag, so the saving is half an hour rather than anything structural.'],
    ],
    guides: [['Rishikesh Sightseeing', '/rishikesh-sightseeing-places'], ['Rishikesh Tour Packages', '/rishikesh-tour-packages'], ['Triveni Ghat', '/triveni-ghat-rishikesh'], ['Neelkanth Mahadev', '/neelkanth-mahadev-temple']],
  },
  {
    slug: 'dehradun',
    name: 'Dehradun',
    kind: 'city',
    state: 'Uttarakhand',
    altitude: '640 m',
    lastMotorable: 'Anywhere in the city, including Jolly Grant airport',
    trek: 'None',
    season: 'Year-round; the valley is at its best from September to November and again in March',
    intro: 'Dehradun is the state capital and the only city in this part of Uttarakhand with an airport, which is what makes it a destination rather than just a waypoint. Since the Delhi–Dehradun expressway opened, the drive from Delhi has come down to roughly five to six hours, and a car has become a genuine alternative to the flight for a family travelling with luggage. Most drops here are one of two things: a flight the next morning out of Jolly Grant, or a night in the valley before carrying on up to Mussoorie, which is another ninety minutes above the city.',
    gettingAround: [
      ['Jolly Grant airport', '25 km south-east of the centre, on the Rishikesh road. About 45 minutes in normal traffic'],
      ['Mussoorie', '35 km and roughly 90 minutes up — the reason a good many Dehradun drops exist at all'],
      ['Robber’s Cave, Sahastradhara and the Forest Research Institute', 'The standard half-day loop, all within 15 km of the clock tower'],
      ['Rishikesh and Haridwar', '45 km and 55 km respectively, both under two hours'],
    ],
    whereToStay: [
      ['Rajpur Road', 'The main hotel strip, closest to restaurants and the clock tower'],
      ['Near Jolly Grant', 'Airport hotels, sensible only if you have a first-flight departure'],
      ['Mussoorie Road', 'Quieter, greener, and already halfway up the hill if Mussoorie is next'],
    ],
    permits: 'None required.',
    faqs: [
      ['How long is the cab ride from Delhi to Dehradun now?', 'Roughly five to six hours for 250 km, using the Delhi–Dehradun expressway through Baghpat and Saharanpur. Before the expressway it was closer to seven.'],
      ['Can you drop me at Jolly Grant airport for an early flight?', 'Yes, and it is one of our most common runs. Tell us the flight time and we work the pickup back from it — the airport is 45 minutes from the city and about an hour and a quarter from Haridwar.'],
      ['Should I stay in Dehradun or go straight up to Mussoorie?', 'Go up, unless you have an early flight. Mussoorie is only 90 minutes further and the difference in air and view is worth the extra leg the same evening.'],
    ],
    guides: [['Dehradun Airport to Haridwar Taxi', '/dehradun-airport-to-haridwar-taxi'], ['Mussoorie Tour Packages', '/mussoorie-tour-packages']],
  },
  // Delhi as a DESTINATION rather than an origin. This is the return-leg
  // hub: pilgrims finish the yatra in the hills and need one way down,
  // and our vehicles are heading back towards the plains anyway. Note
  // there is deliberately no `whereToStay` — a Haridwar cab operator
  // recommending Delhi hotels would be filler, and the template guards it.
  {
    slug: 'delhi',
    name: 'Delhi',
    kind: 'city',
    state: 'Delhi',
    altitude: '216 m',
    lastMotorable: 'Anywhere in Delhi and the NCR, including all three IGI terminals',
    trek: 'None',
    season: 'Year-round. October to March is the pleasant half; May and June on the plains are punishing after a month in the hills',
    intro: 'Almost nobody books a cab to Delhi as a holiday. They book it because something else has just finished — a yatra, a hill-station week, a wedding in Haridwar — and there is a flight or a Rajdhani out of Delhi the next morning. That makes it the most time-critical drop we run, and the one where the fare matters least and the arrival hour matters most. It is also the leg where a Haridwar-based operator has a real structural advantage: our vehicles are coming back down to the plains regardless, so a one-way drop to Delhi is a run we want rather than one we have to be talked into.',
    gettingAround: [
      ['IGI Terminals 1, 2 and 3', 'All three, and they are far enough apart that the terminal number genuinely matters. Send us the flight number and we drop at the right one with time in hand'],
      ['New Delhi, Hazrat Nizamuddin and Anand Vihar', 'The three stations most yatra groups leave from. Anand Vihar is the quickest to reach coming down NH-9 from Haridwar'],
      ['Any NCR address', 'Noida, Gurugram, Ghaziabad and Faridabad are all covered at the Delhi fare — there is no outside-city-limits line item'],
      ['Kashmere Gate ISBT', 'For anyone carrying on by bus. Awkward to reach at rush hour, which is worth planning around rather than discovering'],
    ],
    permits: 'None required. Note that older diesel vehicles face NCR restrictions, which is one reason we run a young fleet rather than the oldest thing that still passes.',
    faqs: [
      ['How long does a cab from Haridwar to Delhi take?', 'About 210 km and five to six hours on NH-334 through Roorkee, Muzaffarnagar and Meerut. Leave by 7 AM to beat the worst of the Delhi approach; a 4 PM departure can turn the same drive into eight hours.'],
      ['Can you drop me at Delhi airport for an early flight?', 'Yes, and it is a large share of what we do on this route. Give us the flight number rather than a pickup time and we work backwards from it, allowing for the terminal and the hour.'],
      ['Is a one-way drop to Delhi cheaper than a round trip?', 'Per kilometre, no — a round trip spreads the return leg over both directions. But if you only need one direction, a one-way drop is what you should book, and we quote it as its own thing rather than half a return.'],
      ['Do you charge extra for a Noida or Gurugram address?', 'No. Anywhere in the NCR is the Delhi fare. The only thing that changes with the address is what time we need to leave.'],
    ],
    guides: [['Haridwar to Delhi Taxi', '/haridwar-to-delhi-taxi'], ['Char Dham Yatra from Delhi', '/char-dham-yatra-from-delhi']],
  },

];

export const DESTINATIONS_BY_SLUG = Object.fromEntries(DESTINATIONS.map((d) => [d.slug, d]));
