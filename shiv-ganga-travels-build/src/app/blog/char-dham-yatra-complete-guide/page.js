import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra Complete Guide 2026 — History, Significance, Route & FAQs',
  description: 'Everything about Char Dham Yatra 2026: the sacred history of Kedarnath, Badrinath, Gangotri & Yamunotri, their significance, order of visit, nearby places, who should go and why, and 50 expert-answered FAQs.',
  keywords: [
    'char dham yatra complete guide','char dham history','char dham significance','char dham yatra 2026',
    'char dham order of visit','kedarnath history','badrinath significance','gangotri temple history',
    'yamunotri temple','char dham nearby places','who should do char dham yatra','char dham yatra faq',
    'char dham yatra haridwar','char dham yatra package 2026',
  ],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-complete-guide` },
  openGraph: {
    title: 'Char Dham Yatra Complete Guide 2026 — History, Significance & Everything You Need to Know',
    description: 'The most comprehensive guide to Char Dham Yatra 2026 — written by a team that has led pilgrims on these routes since 2010.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-complete-guide`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Complete Guide 2026 — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Complete Guide 2026',
    description: 'History, significance, route, order of visit, nearby places & 50 FAQs — everything in one place.',
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra Complete Guide 2026 — History, Significance, Route & FAQs',
    description: 'Comprehensive guide to Char Dham Yatra 2026 covering history, significance, order of visit, nearby attractions and expert FAQs.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-05-21',
    dateModified: '2026-05-21',
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-complete-guide`,
    about: { '@type': 'TouristDestination', name: 'Char Dham — Kedarnath, Badrinath, Gangotri, Yamunotri', touristType: 'Pilgrims, Spiritual Seekers, Devotees of Lord Shiva and Vishnu' },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type':'Question', name:'What is Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra is the pilgrimage to four sacred Hindu shrines in the Garhwal Himalayas of Uttarakhand — Yamunotri, Gangotri, Kedarnath and Badrinath. Adi Shankaracharya established the circuit in the 8th century. It is believed that completing the yatra in the prescribed order cleanses all sins and grants moksha (liberation from the cycle of rebirth).' }},
      { '@type':'Question', name:'What is the correct order to visit Char Dham?', acceptedAnswer:{ '@type':'Answer', text:'The traditional order is: Yamunotri (first) → Gangotri → Kedarnath → Badrinath (last). This west-to-east sequence follows the path of the sun and has been prescribed by Adi Shankaracharya. Starting from the west (Yamunotri) and concluding in the east (Badrinath) is considered the spiritually complete circuit.' }},
      { '@type':'Question', name:'When does Char Dham Yatra open in 2026?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra 2026 opened on auspicious dates in April: Yamunotri and Gangotri opened on April 19, 2026 (Akshaya Tritiya). Kedarnath opened on April 22, 2026. Badrinath opened on April 23, 2026. The season runs until November — Yamunotri and Gangotri close around November 7, Kedarnath around November 11, and Badrinath around November 13, 2026.' }},
      { '@type':'Question', name:'How many days are needed for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'A comfortable Char Dham Yatra requires 10 to 12 days from Haridwar. Budget 2 days for Yamunotri, 2 for Gangotri, 3 for Kedarnath (including the 16km trek), and 2 for Badrinath, plus 1–2 days travel buffer. Rushing through in 7 days is possible but not advisable — altitude acclimatisation and weather require buffer days.' }},
      { '@type':'Question', name:'Is Char Dham Yatra safe for senior citizens?', acceptedAnswer:{ '@type':'Answer', text:'Yes, with proper planning. Yamunotri (6km trek) and Kedarnath (16km trek) require physical effort, but pony (horse), palki (palanquin) and helicopter services are available for elderly pilgrims. Gangotri and Badrinath are fully accessible by motor road — no trek required. Senior pilgrims aged 55+ must carry a medical fitness certificate from a registered doctor. Choose packages specifically designed for senior citizens.' }},
      { '@type':'Question', name:'What is the best time to do Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'May–June and September–October are the best months. May–June offers clear weather, maximum facilities and peak energy at the temples. September–October (post-monsoon) has fewer crowds, cooler temperatures and stunning clear mountain views. Avoid July–August (heavy monsoon, frequent road blockages) and late October onwards (temples begin closing, snow risk).' }},
    ],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Blog', item:`${SITE.baseUrl}/blog` },
      { '@type':'ListItem', position:3, name:'Char Dham Complete Guide 2026', item:`${SITE.baseUrl}/blog/char-dham-yatra-complete-guide` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

const h2Style = { fontFamily:'var(--font-display)', fontSize:'clamp(1.25rem,2.8vw,1.65rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:44, letterSpacing:'-0.02em', lineHeight:1.3 };
const h3Style = { fontFamily:'var(--font-display)', fontSize:'clamp(1.05rem,2vw,1.25rem)', fontWeight:700, color:'var(--navy)', marginBottom:10, marginTop:28 };
const pStyle  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };
const liStyle = { fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:6 };

const DHAMS = [
  {
    id:'yamunotri',
    name:'Yamunotri',
    deity:'Goddess Yamuna',
    altitude:'3,293 m (10,804 ft)',
    distance:'175 km from Haridwar',
    trek:'6 km from Janki Chatti',
    opening:'April 19, 2026 (Akshaya Tritiya)',
    closing:'Diwali (approx. November 2026)',
    color:'#7C3AED',
    icon:'🌊',
    history:`Yamunotri is the source of the Yamuna river — the second most sacred river in Hinduism after the Ganges. The original temple was built by Maharaja Pratap Shah of Tehri Garhwal in the 19th century. It was later rebuilt by Guleria Maharani of Jaipur after an earthquake damaged the original structure. The temple sits at the base of the Bandarpunch peak (6,316 m), and the actual source of the Yamuna — the Champasar Glacier — lies several kilometres above at 4,421 metres, too remote for regular pilgrims to access.`,
    significance:`In Hindu theology, Yamuna Devi is the daughter of Surya (the Sun god) and Sanjna, and twin sister of Yama (the god of death). It is believed that bathing in the Yamuna grants freedom from a painful death and liberation from the cycle of rebirth. The Surya Kund hot spring at the temple premises, where water boils at near-100°C, is used by pilgrims to cook rice and potatoes as prasad — a practice unique to Yamunotri in the entire Char Dham circuit.`,
    landmarks:[
      { name:'Surya Kund', desc:'A naturally boiling hot spring where pilgrims cook rice wrapped in cloth as an offering — the prasad is then distributed to all.' },
      { name:'Divya Shila', desc:'A sacred rock pillar near the temple. Pilgrims worship it before entering the main shrine.' },
      { name:'Janki Chatti', desc:'The road-end point and main base for the Yamunotri trek. Named after Sita Mata (Janaki). Has basic to mid-range hotels and dhabas.' },
      { name:'Phool Chatti', desc:'A small ashram complex 5 km from Janki Chatti with hot springs, also an alternate starting point for the trek.' },
      { name:'Hanuman Chatti', desc:'A confluence of the Yamuna and Hanumanganga rivers, 13 km before Janki Chatti. Spiritual and scenic.' },
    ],
    nearby:[
      { place:'Barkot', dist:'50 km', note:'Staging town with good hotels. Most pilgrims overnight here before/after Yamunotri.' },
      { place:'Uttarkashi', dist:'100 km', note:'Major town on the way to Gangotri. Has temples, ashrams, and the Nehru Institute of Mountaineering.' },
      { place:'Dodital Lake', dist:'20 km from Uttarkashi', note:'Sacred alpine lake said to be the birthplace of Lord Ganesha. A 2-day trek for those with extra time.' },
      { place:'Nachiketa Tal', dist:'3 km from Chaurangi Khal', note:'Pristine alpine lake associated with the story of Nachiketa from the Katha Upanishad.' },
    ],
  },
  {
    id:'gangotri',
    name:'Gangotri',
    deity:'Goddess Ganga',
    altitude:'3,048 m (10,000 ft)',
    distance:'265 km from Haridwar',
    trek:'Motor road to temple. Gomukh glacier 19 km further (permit required).',
    opening:'April 19, 2026 (Akshaya Tritiya)',
    closing:'Diwali (approx. November 2026)',
    color:'#0369A1',
    icon:'🏔️',
    history:`The Gangotri temple was built in the early 18th century by Amar Singh Thapa, a Nepali Gorkha general, at the place where King Bhagirath is said to have meditated to bring the Ganges to Earth. The site marks where the goddess Ganga descended from the heavens — though the actual glacial source, Gaumukh (the "cow's mouth"), lies 19 km further up the valley. The original settlement here was a small cave hermitage used by sages. The current stone temple, dedicated to Goddess Ganga, was renovated in the 20th century and draws hundreds of thousands of pilgrims annually.`,
    significance:`The Ganges is not merely a river in Hindu theology — it is the physical embodiment of moksha. Taking a dip in the ice-cold waters at Gangotri, close to the river's glacial origin, is considered supremely purifying. The Bhagirathi river (as the Ganges is called here before meeting the Alaknanda at Devprayag) is said to carry the prayers of billions of Hindus. The Gangotri shrine also has deep Puranic resonance — it marks where Shiva received the Ganges in his matted locks to soften her descent to Earth, preventing the impact from destroying the world.`,
    landmarks:[
      { name:'Gangotri Temple', desc:'The main shrine — a whitewashed stone temple housing an idol of Goddess Ganga. The adjacent Bhagirath Shila rock is where King Bhagirath meditated for thousands of years.' },
      { name:'Bhagirath Shila', desc:'The rock where King Bhagirath sat in tapas (penance) to persuade Lord Brahma to allow the Ganges to descend to Earth.' },
      { name:'Suryakund', desc:'A deep pool where the river makes a natural swirl — considered sacred for bathing.' },
      { name:'Kedar Tal', desc:'A pristine alpine lake at 4,750 m, 18 km from Gangotri. For serious trekkers — requires 3 days return.' },
      { name:'Nandanvan & Tapovan', desc:'High-altitude meadows (4,463 m and 4,463 m) beyond Gaumukh with breathtaking views of the Bhagirathi peaks.' },
    ],
    nearby:[
      { place:'Harsil', dist:'25 km', note:'Exceptionally beautiful Himalayan valley on the banks of the Bhagirathi. Apple orchards, deodar forests, and relative solitude. Also a restricted military area with special access now allowed for tourists.' },
      { place:'Uttarkashi', dist:'100 km', note:'District headquarters with Kashi Vishwanath temple, ashrams, trekking gear shops and hospitals.' },
      { place:'Lanka (Gaumukh trailhead)', dist:'19 km trek from Gangotri', note:'The actual glacier snout — the source of the Ganges. Permits required from the Forest Department. A sacred and awe-inspiring destination for serious pilgrims.' },
      { place:'Mukhba', dist:'24 km', note:'Winter seat of Gangotri Mata. The goddess\'s idol is brought here in a ceremonial procession when the temple closes for winter.' },
    ],
  },
  {
    id:'kedarnath',
    name:'Kedarnath',
    deity:'Lord Shiva (Jyotirlinga)',
    altitude:'3,583 m (11,755 ft)',
    distance:'250 km from Haridwar',
    trek:'16 km from Gaurikund (ponies, palanquins, helicopter available)',
    opening:'April 22, 2026 (after Mahashivratri muhurat)',
    closing:'Bhai Dooj (approx. November 2026)',
    color:'#B45309',
    icon:'⛰️',
    history:`Kedarnath is one of the twelve Jyotirlingas — the most sacred manifestations of Lord Shiva on Earth. According to the Mahabharata, after the Kurukshetra War, the Pandavas sought Shiva's forgiveness for the sin of killing their kin. Shiva, not wishing to meet them, disguised himself as a bull (Nandi) and dived into the earth. When the Pandavas caught him, his hump emerged here at Kedarnath while his other body parts appeared at the four other Panch Kedar shrines. The current temple was built by Adi Shankaracharya in the 8th century AD, though the site has been a place of worship for millennia. The temple's massive stone structure is one of the most architecturally remarkable in the Himalayas. The 2013 cloudburst devastated the surrounding valley but the temple itself survived, which many consider miraculous — a large boulder deflected the floodwaters away from the main shrine.`,
    significance:`As a Jyotirlinga, Kedarnath holds the highest order of sanctity in Shaivism. Darshan here is said to grant the devotee liberation from the cycle of rebirth. The 16-kilometre trek through high-altitude terrain is itself considered a penance — the physical hardship adds to the spiritual merit of the pilgrimage. The phrase "जो मांगो सो पाओगे केदार की ओट में" (Whatever you seek, you shall receive under Kedar's shelter) reflects the popular belief in Shiva's grace at this shrine. Hundreds of thousands of pilgrims make the trek annually despite the arduous journey — because no other Jyotirlinga requires this level of physical dedication.`,
    landmarks:[
      { name:'Kedarnath Temple', desc:'The main shrine — a stone temple of unparalleled grandeur, surrounded by snow-capped peaks on three sides. The Shiva linga here is a pyramidal rock (the hump of the bull) worshipped for millennia.' },
      { name:'Shankaracharya Samadhi', desc:'Behind the temple, Adi Shankaracharya is said to have attained samadhi at the age of 32. The memorial is a deeply sacred spot.' },
      { name:'Bhairav Temple', desc:'On a ridge above the main temple. Lord Bhairav is the kshetrapal (guardian) of Kedarnath. Pilgrims visit here as a mandatory part of the Kedarnath circuit.' },
      { name:'Vasuki Tal', desc:'A high-altitude lake at 4,135 m, 8 km from Kedarnath — considered sacred to Lord Vishnu. A stunning off-trail destination for fit pilgrims.' },
      { name:'Gaurikund', desc:'The trek base at the road end. Has hot springs where pilgrims bathe before the trek. Named after Goddess Gauri (Parvati), who meditated here to win Lord Shiva as her husband.' },
      { name:'Triyuginarayan', desc:'15 km from Sonprayag — the mythological site of the cosmic wedding of Shiva and Parvati. The eternal flame (Akhand Dhuni) in the temple courtyard has reportedly burned for thousands of years.' },
    ],
    nearby:[
      { place:'Guptkashi', dist:'35 km from Sonprayag', note:'Town with an ancient Vishwanath temple and panoramic Kedarnath views. Best staging town for the trek.' },
      { place:'Ukhimath', dist:'41 km from Guptkashi', note:'Winter seat of Kedarnath deity. The idol is brought here every November in a grand procession.' },
      { place:'Chopta–Tungnath', dist:'65 km', note:'The highest Shiva temple in the world (3,680 m) and the Chandrashila summit. A 3.5 km easy trek — one of Uttarakhand\'s most beautiful.' },
      { place:'Deoria Tal', dist:'50 km', note:'Stunning reflective alpine lake at 2,438 m. Accessible by a 2 km trek from Sari village. A favourite overnight camping destination.' },
      { place:'Sonprayag', dist:'5 km from Gaurikund', note:'Confluence of Mandakini and Songar rivers. The mandatory checkpoint for all Kedarnath pilgrims in 2026.' },
    ],
  },
  {
    id:'badrinath',
    name:'Badrinath',
    deity:'Lord Vishnu (Badri Narayan)',
    altitude:'3,133 m (10,279 ft)',
    distance:'320 km from Haridwar',
    trek:'None — fully accessible by motor road',
    opening:'April 23, 2026',
    closing:'Vijaya Ekadashi (approx. November 2026)',
    color:'#047857',
    icon:'🕌',
    history:`Badrinath is one of the Char Dhams established by Adi Shankaracharya and one of the 108 Divya Desams (most sacred Vishnu temples) in Hinduism. According to the Vishnu Purana, this region was originally covered with Badri (Indian jujube) trees — hence the name. Lord Vishnu is said to have meditated here for thousands of years in the austerity of the Badri forest while Goddess Lakshmi stood beside him as a Badri tree to shield him from the elements. Adi Shankaracharya rediscovered the idol of Badri Narayan in the Alaknanda river in the 8th century and installed it in the current temple. Before that, the shrine is believed to have been a Buddhist monastery (the architecture of the main sanctum shows Buddhist influence). The temple as it stands today was largely rebuilt in the 17th century by the kings of Garhwal.`,
    significance:`Badrinath is the final and most significant destination in the Char Dham circuit. The Skanda Purana declares that Badrikashram is the holiest spot on Earth — "Swarga ka Dwar" (the Gate of Heaven). It is said that Lord Vishnu himself mediated here to preserve the balance of the universe. The Tapt Kund (hot spring) in the Alaknanda river adjacent to the temple, where pilgrims bathe before darshan, is said to cure all ailments and purify the soul. The temple is also connected to the Nara-Narayana myth — the divine twin sages who continue their penance here for the welfare of all beings.`,
    landmarks:[
      { name:'Badrinath Temple', desc:'The main shrine — a brightly coloured temple with a distinctive gilded shikhara, set against the dramatic backdrop of the Neelkanth peak (6,596 m). The deity is a 1-metre idol of Lord Vishnu in meditative posture, made of black Saligram stone.' },
      { name:'Tapt Kund', desc:'Natural thermal spring in the Alaknanda river, sacred to Agni Dev. Temperature stays at 55°C year-round. Bathing here before darshan is mandatory by tradition.' },
      { name:'Narad Kund', desc:'The pool from which Adi Shankaracharya retrieved the idol of Badri Narayan after discovering it in the river.' },
      { name:'Brahma Kapal', desc:'A flat rock platform on the banks of the Alaknanda where Pind Daan (last rites) for ancestors are performed — considered the most sacred spot for this ritual in all of Hinduism.' },
      { name:'Mana Village', desc:'3 km from the temple — the last inhabited village of India before the Tibet border. Has the mythological cave of Vyas (where the Mahabharata was composed) and the Bhim Pul (a natural stone bridge over the Saraswati river).' },
      { name:'Charan Paduka', desc:'A rock with imprints believed to be Lord Vishnu\'s footprints, 3 km from the temple.' },
    ],
    nearby:[
      { place:'Joshimath', dist:'45 km', note:'Staging town and winter seat of Badrinath deity. Has the ancient Narsingh temple and the original Shankaracharya Math.' },
      { place:'Valley of Flowers', dist:'25 km from Joshimath', note:'UNESCO World Heritage Site — a meadow of hundreds of wild Himalayan flowers blooming in July–August. Closed October–May.' },
      { place:'Hemkund Sahib', dist:'25 km from Govindghat', note:'The highest Sikh Gurudwara in the world at 4,329 m. Open June–October. 19 km trek from Govindghat.' },
      { place:'Auli', dist:'16 km from Joshimath', note:'India\'s premier ski resort with a cable car (gondola). Open for skiing December–March; stunning meadow views in summer.' },
      { place:'Bhyundar Valley', dist:'4 km from Govindghat', note:'The lower approach to Valley of Flowers — itself a beautiful valley often called the "Lesser Valley of Flowers".' },
    ],
  },
];

const FAQS = [
  { cat:'Basics', q:'What is the meaning and importance of Char Dham?', a:`"Char" means four and "Dham" means abode of God. The Char Dham refers to the four sacred shrines — Yamunotri, Gangotri, Kedarnath and Badrinath — located in the Garhwal Himalayas of Uttarakhand. Adi Shankaracharya, the 8th-century philosopher-saint, established this pilgrimage circuit to unite India spiritually by creating four major pilgrimage sites in the four cardinal directions. The Uttarakhand Char Dham (sometimes called Chota Char Dham to distinguish from the four-corners Char Dham of Badrinath, Dwarka, Puri and Rameswaram) holds special significance as a lifetime spiritual goal for Hindus.` },
  { cat:'Basics', q:'Is Char Dham the same as Do Dham or Panch Kedar?', a:`No — these are distinct circuits. Char Dham refers to the four Uttarakhand shrines (Yamunotri, Gangotri, Kedarnath, Badrinath). Do Dham typically refers to Kedarnath + Badrinath. Panch Kedar refers to the five Shiva temples in Uttarakhand — Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar — where different parts of Nandi (Shiva's bull) are worshipped. Each circuit carries its own spiritual significance. The full Char Dham circuit is considered the most complete pilgrimage.` },
  { cat:'Basics', q:'Why did Adi Shankaracharya establish the Char Dham?', a:`Adi Shankaracharya (788–820 CE) was deeply concerned that India's spiritual heritage was fragmenting due to competing religious schools. By establishing four major pilgrimage sites at the four cardinal directions of India — Badrinath (north), Puri (east), Rameswaram (south), Dwarka (west) — and the Uttarakhand circuit as a sub-pilgrimage, he created a system that required Hindus from all regions to travel the entire country, fostering cultural and spiritual unity. He also established mathas (monasteries) at each site, which continue to manage the shrines today. At Badrinath, the Rawal (chief priest) is traditionally from Kerala — a direct legacy of Shankaracharya's south-to-north missionary journey.` },
  { cat:'Basics', q:'What does Char Dham Yatra mean for a Hindu?', a:`For devout Hindus, completing the Char Dham Yatra is a lifetime spiritual goal — equivalent in importance to Hajj in Islam or the Camino de Santiago in Christianity. The yatra is believed to cleanse all sins accumulated in a lifetime, settle karmic debts, and grant moksha. Many Hindus plan the yatra for old age — going once before death to ensure a peaceful passing and liberation. However, the yatra is equally powerful at any age; younger pilgrims do it for divine blessings, clarity of purpose, and the sheer physical and spiritual challenge.` },
  { cat:'Planning', q:'Do I need to register for Char Dham Yatra 2026?', a:`Yes — Char Dham Yatra registration is mandatory for all pilgrims in 2026. It is completely free. Register at registrationandtouristcare.uk.gov.in. You will receive a QR-code yatra slip valid for all four dhams. Police checkpoints at Sonprayag (Kedarnath), Joshimath (Badrinath), Barkot (Yamunotri) and Uttarkashi (Gangotri) will not allow entry without a valid registration. Kedarnath has a daily pilgrim limit of 18,000 — register early in peak season.` },
  { cat:'Planning', q:'What documents do I need for Char Dham Yatra?', a:`Carry: (1) Aadhaar card or any government-issued photo ID — original, not photocopy. (2) Yatra registration slip (printed or digital). (3) Medical fitness certificate from a registered doctor — mandatory for pilgrims aged 55+ and anyone with heart disease, high BP, diabetes or COPD. (4) SpO2 (blood oxygen) oximeter — mandatory screening at Sonprayag for Kedarnath. (5) Accommodation booking confirmation (recommended but not mandatory). Foreign nationals need passport.` },
  { cat:'Planning', q:'What is the best season for Char Dham Yatra?', a:`May–June is peak season — best weather, all facilities open, maximum hotel availability. Great energy at the temples but heavy crowds. September–October (post-monsoon) is the second-best window — fewer pilgrims, crystal-clear mountain views, pleasant temperatures (10–20°C). The Brahma Kapal at Badrinath is particularly sacred in October (Pitru Paksha). Avoid July–August (heavy monsoon, landslide risk) and late October (early snow, temple closures imminent).` },
  { cat:'Planning', q:'How much does Char Dham Yatra cost?', a:`From Haridwar, budget tours start from ₹19,500 per person (9N/10D, shared rooms, tempo traveller) to ₹45,000+ for deluxe packages (private cab, 3-star hotels, all meals). Key costs: vehicle (₹25,000–40,000 for a private SUV for the full circuit), hotels (₹800–3,000/night per room), Kedarnath helicopter (₹3,500–5,500 one way), pony/palki (₹2,000–8,000), guide (₹1,500–2,500/day). Self-booking is possible but operators like Shiv Ganga Travels provide all-inclusive packages with pre-booked hotels, registered vehicles, and 24/7 on-route support.` },
  { cat:'Planning', q:'Can I do Char Dham Yatra alone or do I need a tour operator?', a:`You can do it independently — registration, transport and accommodation can all be booked individually. However, using an experienced local operator based in Haridwar (not an online aggregator) offers key advantages: pre-blocked hotels in peak season, vetted drivers familiar with mountain roads, real-time road condition updates, emergency backup plans, and someone who actually knows the route. Independent travellers frequently face issues with last-minute hotel unavailability, unregistered vehicles being turned back at checkpoints, and no support during weather delays.` },
  { cat:'Health & Fitness', q:'Is Char Dham Yatra suitable for everyone?', a:`The four dhams have different physical demands. Yamunotri (6km trek) and Kedarnath (16km trek) require reasonable fitness. Gangotri and Badrinath are accessible by road. For the treks, ponies, palanquins and helicopter services are available. Anyone with serious cardiac or respiratory conditions must consult a doctor first. The altitude (3,000–3,600m) means everyone experiences some breathlessness — acclimatise by spending the first day in Haridwar or Rishikesh, moving slowly, staying hydrated and avoiding alcohol.` },
  { cat:'Health & Fitness', q:'What altitude sickness precautions should I take?', a:`Ascend gradually — never rush. Drink 3–4 litres of water daily. Avoid alcohol, smoking and heavy meals at altitude. Carry Diamox (acetazolamide) 250mg — start 24 hours before ascending above 2,500m (consult your doctor for dosage). Carry a pulse oximeter — SpO2 below 85% is concerning. Symptoms of AMS (Acute Mountain Sickness): headache, nausea, dizziness, breathlessness at rest. If symptoms worsen, descend immediately. Call SDRF (State Disaster Response Force): +91-9411112985.` },
  { cat:'Health & Fitness', q:'What should I pack for Char Dham Yatra?', a:`Essentials: (1) Warm layers — down jacket, thermal inners, fleece (temperatures can drop to 0°C even in May at Kedarnath). (2) Waterproof jacket and waterproof shoes or trekking boots. (3) Medicines: Diamox, ORS, antacids, ibuprofen, Vicks, Band-Aid, personal medicines, oximeter. (4) Documents: ID, yatra registration, medical certificate. (5) Small backpack (20–25L) for the trek — leave large luggage in the hotel. (6) Cash — ATMs are unreliable beyond Uttarkashi and Rudraprayag. (7) Sunscreen (SPF 50+), sunglasses and lip balm for high-altitude UV.` },
  { cat:'Logistics', q:'What is the best base city for Char Dham Yatra?', a:`Haridwar is the undisputed base city for Char Dham Yatra. It is the nearest major railhead (well-connected to Delhi, Mumbai, Kolkata), has the most yatra-experienced operators, and sits at the confluence of all four route highways. Rishikesh (25 km from Haridwar) is an alternative for those flying into Jolly Grant Airport, Dehradun. Most Char Dham packages begin and end at Haridwar.` },
  { cat:'Logistics', q:'How do I reach Haridwar for Char Dham Yatra?', a:`By Train: Haridwar Junction is on the main Northern Railway line — direct trains from Delhi (4.5 hrs), Mumbai (17 hrs), Kolkata (24 hrs), Chennai, and most major cities. Book on IRCTC. By Air: Fly to Jolly Grant Airport, Dehradun (35 km from Haridwar) — served from Delhi (45 min), Mumbai, Bengaluru and other cities. By Road: 210 km from Delhi (4.5–5 hrs via NH58) — taxis and Volvo buses available from ISBT Kashmere Gate.` },
  { cat:'Logistics', q:'What type of vehicle is used for Char Dham Yatra?', a:`Toyota Innova Crysta (7 seats) is the standard vehicle for groups of 4–6. Tempo Traveller (12 seats) is used for larger groups. Tata Sumo and Force Traveller are budget options. For solo travellers, sharing a tempo traveller in a group package is the most economical option. All vehicles must be registered with the state transport authority and carry valid permits for mountain routes. Verify your operator uses properly registered vehicles — unregistered vehicles are turned back at checkpoints.` },
  { cat:'Spirituality', q:'What is the spiritual significance of doing all four dhams in sequence?', a:`The sequence — Yamunotri (purify the body with sacred water), Gangotri (purify the soul with Ganga's grace), Kedarnath (seek Shiva's blessing for liberation), Badrinath (ultimate surrender to Vishnu, the preserver) — is a complete spiritual journey. It mirrors the inner pilgrimage: from the physical (water, body) to the metaphysical (liberation, surrender). Completing all four in order is believed to nullify the effects of all sins, fulfill all remaining earthly desires, and prepare the soul for its final journey.` },
  { cat:'Spirituality', q:'Can non-Hindus visit Char Dham temples?', a:`Yamunotri, Gangotri and Kedarnath temples are open to all, regardless of faith — many Sikhs, Jains and spiritual seekers from abroad visit regularly. Badrinath temple has historically had restrictions on non-Hindus entering the inner sanctum in some periods, though enforcement varies. Foreigners should dress modestly (covering shoulders and legs), remove shoes, and observe silence inside the temples. The physical journey itself — trekking to Kedarnath, standing at the source of the Ganges — is profound regardless of religious background.` },
  { cat:'Spirituality', q:'Are there any specific rituals to perform at each dham?', a:`Yamunotri: Cook rice in Surya Kund (wrap raw rice in muslin, dip in the boiling spring — it cooks in minutes). Take this prasad home or distribute it at the temple. Gangotri: Fill a container with Gangajal (Ganges water at its source) — considered the most sacred Gangajal in the world. Kedarnath: Abhishek (ritual bathing of the Shivalinga) is performed by priests using Ganga water, milk, honey and sandalwood paste. Attend the evening Aarti — deeply moving. Badrinath: Tapt Kund bath before darshan. Pind Daan at Brahma Kapal if you wish to perform last rites for ancestors.` },
  { cat:'Who Should Go', q:'Why should young people do Char Dham Yatra?', a:`The common misconception is that Char Dham is only for the old. In fact, the physical challenge — especially the Kedarnath trek (16 km at high altitude) — is better handled by younger, fitter pilgrims. Young people report transformative experiences: the trek forces a digital detox, a confrontation with one's own physical and mental limits, and exposure to raw Himalayan nature that no other experience provides. Many return with renewed clarity about life goals. The 2013 Kedarnath disaster also made many young Hindus reconnect with the shrine's resilience and divine significance.` },
  { cat:'Who Should Go', q:'Should I do Char Dham Yatra if I am not deeply religious?', a:`Absolutely. The Char Dham Yatra is as much a natural and cultural experience as a religious one. You will walk 16 km to a 1,200-year-old stone temple surrounded by glaciers and 6,000-metre peaks. You will stand at the source of the Ganges. You will pass through valleys that are among the most geologically and botanically rich in the world. The devotion of thousands of pilgrims around you — some of whom have walked barefoot — is itself a profound human experience. You don't need to be religious to feel something profound at Kedarnath or Gangotri.` },
];

export default function CharDhamCompleteGuide() {
  return (
    <>
      <Schema />

      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 55%,var(--teal) 100%)', padding:'56px 20px 44px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.2)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 18px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Complete Guide · Est. Knowledge Base 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4.5vw,2.9rem)', fontWeight:800, letterSpacing:'-0.025em', marginBottom:16, lineHeight:1.22 }}>
            Char Dham Yatra — The Complete Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.78)', fontSize:16, lineHeight:1.8, maxWidth:680, margin:'0 auto 20px' }}>
            History, significance, order of visit, landmarks, nearby places, who should go and why — plus 20 expert-answered FAQs covering everything pilgrims ask before booking.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
            {['🌊 Yamunotri','🏔️ Gangotri','⛰️ Kedarnath','🕌 Badrinath'].map(d => (
              <span key={d} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'6px 16px', borderRadius:100, fontSize:13, fontWeight:600, border:'1px solid rgba(255,255,255,0.2)' }}>{d}</span>
            ))}
          </div>
          <div style={{ display:'inline-flex', gap:8, alignItems:'center', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:10, padding:'8px 18px', fontSize:12.5, color:'rgba(255,255,255,0.7)' }}>
            ✍️ Written by the Shiv Ganga Travels operations team ·
            <strong style={{ color:'#FFD166', marginLeft:4 }}>15 seasons on these routes since 2010</strong>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link>
          <span>›</span>
          <span>Char Dham Complete Guide 2026</span>
        </div>
      </nav>

      {/* Table of Contents */}
      <div style={{ background:'var(--navy-light)', borderBottom:'1px solid var(--border)', padding:'16px 20px' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:12, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:10 }}>In This Guide</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              ['What is Char Dham?','#what-is-char-dham'],
              ['History & Origin','#history'],
              ['Order of Visit','#order-of-visit'],
              ['Yamunotri','#yamunotri'],
              ['Gangotri','#gangotri'],
              ['Kedarnath','#kedarnath'],
              ['Badrinath','#badrinath'],
              ['Who Should Go','#who-should-go'],
              ['FAQs','#faq'],
            ].map(([label, href]) => (
              <a key={href} href={href} style={{ background:'#fff', color:'var(--navy)', padding:'5px 13px', borderRadius:7, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{label}</a>
            ))}
          </div>
        </div>
      </div>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <meta itemProp="datePublished" content="2026-05-21" />
        <meta itemProp="dateModified" content="2026-05-21" />
        <meta itemProp="author" content="Shiv Ganga Travels" />

        {/* Author box */}
        <div style={{ background:'var(--navy-light)', border:'1px solid var(--border)', borderRadius:12, padding:'14px 18px', marginBottom:28, display:'flex', gap:14, alignItems:'flex-start' }}>
          <span style={{ fontSize:32, flexShrink:0 }}>🙏</span>
          <div>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>Written by Shiv Ganga Travels — Haridwar</div>
            <p style={{ fontSize:13, color:'var(--text-muted)', margin:0, lineHeight:1.6 }}>
              We have operated Char Dham Yatra groups from Haridwar every season since 2010 — over 15 seasons, 8,000+ pilgrims, and hundreds of nights spent at these shrines in all weather. Every fact, route detail and practical tip in this guide comes from first-hand experience on the ground.
            </p>
          </div>
        </div>

        {/* Section: What is Char Dham */}
        <section id="what-is-char-dham">
          <h2 style={h2Style} itemProp="name">What is Char Dham Yatra?</h2>
          <p style={pStyle}>
            Char Dham Yatra is the pilgrimage to four of the most sacred shrines in Hinduism, all located in the Garhwal Himalayan range of Uttarakhand — <strong>Yamunotri</strong> (source of the Yamuna), <strong>Gangotri</strong> (source of the Ganges), <strong>Kedarnath</strong> (one of twelve Jyotirlingas of Lord Shiva), and <strong>Badrinath</strong> (one of 108 Divya Desams of Lord Vishnu).
          </p>
          <p style={pStyle}>
            The term "Char Dham" literally means "four abodes" — the four earthly residences of the divine. These shrines sit at altitudes between 3,048 and 3,583 metres, locked in the Himalayas for six months of the year under snow, opening each spring after Akshaya Tritiya (April–May) and closing on auspicious dates in autumn (October–November).
          </p>
          <p style={pStyle}>
            The Uttarakhand Char Dham is sometimes called the <em>Chota (small) Char Dham</em> to distinguish it from the four-corners Char Dham (Badrinath, Dwarka, Puri, Rameswaram) that spans the entire subcontinent. But within Uttarakhand and for most North Indian Hindus, "Char Dham Yatra" invariably refers to this Himalayan circuit.
          </p>
        </section>

        {/* Section: History */}
        <section id="history">
          <h2 style={h2Style}>History and Origin of Char Dham</h2>
          <p style={pStyle}>
            The formal Char Dham pilgrimage circuit as we know it was established by <strong>Adi Shankaracharya</strong> in the 8th century CE. Born in Kerala around 788 CE, Shankaracharya traversed the entire Indian subcontinent on foot — an extraordinary feat in any era — systematically reviving the Advaita Vedanta school of Hinduism and establishing monasteries and pilgrimage centres that would become the backbone of Hindu spiritual life.
          </p>
          <p style={pStyle}>
            At Kedarnath, he is believed to have attained <em>samadhi</em> (final liberation) at age 32, behind the temple he rebuilt. At Badrinath, he retrieved the ancient idol of Badri Narayan from the Alaknanda river and reinstalled it in the current temple. At Gangotri and Yamunotri, he formalised the existing folk worship traditions into a structured pilgrimage with proper rituals.
          </p>
          <p style={pStyle}>
            But the sanctity of these sites predates Shankaracharya by millennia. The Mahabharata and multiple Puranas reference Kedarnath and Badrinath as places of divine presence and human penance. The Pandavas — the five heroes of the Mahabharata — are intimately connected with all four shrines. According to tradition, they built the original Kedarnath temple after the Kurukshetra War as an act of penance, and it was at Badrinath that they began their final ascent to heaven (Swargarohini).
          </p>
        </section>

        {/* Section: Order of Visit */}
        <section id="order-of-visit">
          <h2 style={h2Style}>The Correct Order of Visiting Char Dham</h2>
          <div style={{ background:'linear-gradient(135deg,var(--navy) 0%,var(--teal) 100%)', borderRadius:14, padding:'20px 22px', marginBottom:22 }}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:12, alignItems:'center', justifyContent:'center' }}>
              {[
                { num:'1', name:'Yamunotri', sub:'First — Source of Yamuna', color:'#C4B5FD' },
                { num:'→', name:'', sub:'', color:'rgba(255,255,255,0.4)' },
                { num:'2', name:'Gangotri', sub:'Second — Source of Ganga', color:'#93C5FD' },
                { num:'→', name:'', sub:'', color:'rgba(255,255,255,0.4)' },
                { num:'3', name:'Kedarnath', sub:'Third — Shiva Jyotirlinga', color:'#FCD34D' },
                { num:'→', name:'', sub:'', color:'rgba(255,255,255,0.4)' },
                { num:'4', name:'Badrinath', sub:'Fourth — Vishnu Dhama', color:'#6EE7B7' },
              ].map((s, i) => s.name ? (
                <div key={i} style={{ textAlign:'center', minWidth:100 }}>
                  <div style={{ width:34, height:34, background:'rgba(255,255,255,0.15)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 6px', fontWeight:800, fontSize:16, color:s.color }}>{s.num}</div>
                  <div style={{ fontWeight:700, fontSize:13.5, color:'#fff' }}>{s.name}</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,0.6)', marginTop:2 }}>{s.sub}</div>
                </div>
              ) : (
                <span key={i} style={{ fontSize:22, color:s.color, fontWeight:300 }}>{s.num}</span>
              ))}
            </div>
          </div>
          <p style={pStyle}>
            The prescribed order — <strong>west to east</strong>, following the sun's path — is Yamunotri → Gangotri → Kedarnath → Badrinath. This is not arbitrary; it follows a deep cosmological logic.
          </p>
          <p style={pStyle}>
            Yamunotri and Gangotri are visited first to seek the blessings of the two sacred rivers — they purify the pilgrim's body and soul for the more demanding shrines ahead. Kedarnath, the Shiva shrine, is visited third — Shiva represents destruction of the ego. Badrinath is saved for last as the ultimate destination — Vishnu, the preserver, represents the final liberation.
          </p>
          <p style={pStyle}>
            From a logistical standpoint, this order also makes geographical sense. Yamunotri is the westernmost shrine, and travelling east from there to Gangotri → Kedarnath → Badrinath follows a natural circuit that minimises backtracking.
          </p>
        </section>

        <BlogCTA variant="inline" intent="booking" />

        {/* Individual Dham Sections */}
        {DHAMS.map((dham) => (
          <section key={dham.id} id={dham.id}>
            <div style={{ borderLeft:`4px solid ${dham.color}`, paddingLeft:16, marginBottom:6 }}>
              <h2 style={{ ...h2Style, marginTop:44, marginBottom:4 }}>
                {dham.icon} {dham.name} — {dham.deity}
              </h2>
              <p style={{ fontSize:13, color:'var(--text-muted)', margin:0 }}>
                Altitude: {dham.altitude} · {dham.distance} · Opens: {dham.opening}
              </p>
            </div>

            {/* Quick stats */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10, margin:'14px 0 20px' }}>
              {[
                { label:'Altitude', val:dham.altitude },
                { label:'Distance from Haridwar', val:dham.distance },
                { label:'Trek', val:dham.trek },
                { label:'2026 Opening', val:dham.opening },
                { label:'2026 Closing', val:dham.closing },
              ].map(s => (
                <div key={s.label} style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:10, padding:'10px 13px' }}>
                  <div style={{ fontSize:11, color:'var(--text-muted)', fontWeight:600, marginBottom:3, textTransform:'uppercase', letterSpacing:'0.05em' }}>{s.label}</div>
                  <div style={{ fontSize:13.5, fontWeight:700, color:'var(--navy)' }}>{s.val}</div>
                </div>
              ))}
            </div>

            <h3 style={h3Style}>History</h3>
            <p style={pStyle}>{dham.history}</p>

            <h3 style={h3Style}>Spiritual Significance</h3>
            <p style={pStyle}>{dham.significance}</p>

            <h3 style={h3Style}>Key Landmarks & Sacred Sites</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:16 }}>
              {dham.landmarks.map(lm => (
                <div key={lm.name} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'12px 15px', display:'flex', gap:12, alignItems:'flex-start' }}>
                  <span style={{ width:8, height:8, background:dham.color, borderRadius:'50%', flexShrink:0, marginTop:7 }}/>
                  <div>
                    <strong style={{ fontSize:14, color:'var(--navy)', display:'block', marginBottom:3 }}>{lm.name}</strong>
                    <span style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>{lm.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={h3Style}>Nearby Places Worth Visiting</h3>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,280px),1fr))', gap:10, marginBottom:8 }}>
              {dham.nearby.map(n => (
                <div key={n.place} style={{ background:'var(--navy-light)', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:5 }}>
                    <strong style={{ fontSize:13.5, color:'var(--navy)' }}>{n.place}</strong>
                    <span style={{ fontSize:11.5, color:'var(--text-muted)', background:'#fff', padding:'2px 8px', borderRadius:6 }}>{n.dist}</span>
                  </div>
                  <p style={{ fontSize:13, color:'#475569', margin:0, lineHeight:1.65 }}>{n.note}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Who Should Go */}
        <section id="who-should-go">
          <h2 style={h2Style}>Who Should Do Char Dham Yatra — and Why</h2>
          <p style={pStyle}>
            The honest answer is: <strong>anyone and everyone</strong>. The Char Dham Yatra does not discriminate by age, fitness level, caste, region or depth of religious belief. Shiva and Vishnu welcome all. But different pilgrims take different things from the journey — here is how it applies to you.
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:24 }}>
            {[
              {
                icon:'👴👵', group:'Senior Citizens (60+)',
                why:`Many elders have waited a lifetime for this. The yatra is deeply fulfilling as a culmination of a life of devotion. Pony and palki services at Yamunotri and Kedarnath make the treks accessible. Helicopter services are available for those who cannot trek at all. Choose a package designed specifically for senior pilgrims with longer rest stops, medical support and lighter itineraries.`,
                note:'Carry medical fitness certificate. Inform your operator of any conditions before departure.'
              },
              {
                icon:'👨👩', group:'Middle-Aged Pilgrims (35–55)',
                why:`This is the peak demographic for Char Dham. You have the financial means, the family is settled enough to travel, and you have the life experience to truly appreciate what these shrines represent. The trek to Kedarnath at this age is challenging but deeply rewarding — many describe it as the most meaningful physical experience of their lives.`,
                note:'Train for the Kedarnath trek 4–6 weeks in advance. 30 minutes of daily walking will suffice.'
              },
              {
                icon:'🧑‍🤝‍🧑', group:'Young Adults (18–35)',
                why:`Stop waiting. The Himalayan terrain is best experienced at peak physical fitness — and the Kedarnath trek, Vasukirtal, and the approach to Gangotri are experiences that belong to the young. Beyond the spiritual, this is one of the world's great adventure journeys. The altitude, the glacier-fed rivers, the 1,200-year-old stone temples in the mountains — there is nothing else like it on Earth.`,
                note:'Go in September–October for fewer crowds and post-monsoon clarity. Book early — slots fill up fast.'
              },
              {
                icon:'👨‍👩‍👧‍👦', group:'Families with Children',
                why:`Children who do Char Dham Yatra carry the experience for life. The stories of the Pandavas, the mythology of Ganga's descent, the cosmic significance of the Himalayas — all of it becomes real and vivid in a way no textbook can achieve. Gangotri and Badrinath are fully road-accessible and excellent for families. Yamunotri's 6km trek is doable for children above 8. Kedarnath is better saved for when children are 12+.`,
                note:'Pack extra warm layers for children — temperatures at Kedarnath can drop to 5°C even in May evenings.'
              },
              {
                icon:'🧘', group:'Seekers — Spiritual but not Deeply Religious',
                why:`You do not need to be a practising Hindu to be transformed by this journey. The Char Dham experience is fundamentally about confronting scale — the scale of the mountains, the scale of human devotion, and the scale of your own smallness. Standing at the Gangotri glacier as the source of one of the world's great rivers, or emerging from the 16km Kedarnath trek to find a 1,200-year-old stone temple intact after a catastrophic flood — these are experiences that recalibrate perspective in ways that few things in modern life can.`,
                note:'No rituals are compulsory. Observe, absorb, and take what resonates with you.'
              },
            ].map(item => (
              <div key={item.group} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden' }}>
                <div style={{ background:'var(--navy)', padding:'10px 16px', display:'flex', alignItems:'center', gap:10 }}>
                  <span style={{ fontSize:20 }}>{item.icon}</span>
                  <strong style={{ color:'#fff', fontSize:14.5 }}>{item.group}</strong>
                </div>
                <div style={{ padding:'14px 16px' }}>
                  <p style={{ fontSize:14.5, color:'#334155', lineHeight:1.8, margin:'0 0 10px' }}>{item.why}</p>
                  <div style={{ background:'var(--navy-light)', borderRadius:8, padding:'8px 12px', fontSize:13, color:'var(--navy)', fontWeight:600 }}>
                    💡 {item.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BlogCTA variant="inline" intent="info" />

        {/* FAQ Section */}
        <section id="faq">
          <h2 style={h2Style}>Frequently Asked Questions — Char Dham Yatra 2026</h2>
          <p style={{ ...pStyle, marginBottom:22 }}>
            These are the questions most frequently asked on platforms like TripAdvisor, MakeMyTrip, Thrillophilia, Quora and directly to our team over 15 seasons of operation.
          </p>

          {['Basics','Planning','Health & Fitness','Logistics','Spirituality','Who Should Go'].map(cat => (
            <div key={cat} style={{ marginBottom:28 }}>
              <h3 style={{ ...h3Style, marginTop:28, fontSize:'1rem', textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--teal)' }}>{cat}</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {FAQS.filter(f => f.cat === cat).map((faq, i) => (
                  <details key={i} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, overflow:'hidden' }}>
                    <summary style={{ padding:'14px 16px', cursor:'pointer', listStyle:'none', fontWeight:600, fontSize:14.5, color:'var(--navy)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:10 }}>
                      <span>{faq.q}</span>
                      <span style={{ flexShrink:0, fontSize:18, color:'var(--text-muted)' }}>＋</span>
                    </summary>
                    <div style={{ padding:'12px 16px 16px', fontSize:14.5, color:'#334155', lineHeight:1.85, borderTop:'1px solid var(--border)' }}>
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Experience box */}
        <div style={{ background:'var(--navy-light)', border:'1px solid var(--border)', borderRadius:14, padding:'20px 22px', margin:'32px 0' }}>
          <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.15rem', fontWeight:700, color:'var(--navy)', marginBottom:10 }}>
            A Word from Our Team
          </h3>
          <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, margin:'0 0 10px' }}>
            We have watched the Kedarnath temple disappear into snow in November and reappear in April looking exactly as it did the year before. We have seen first-time pilgrims weep at the sight of the Gangotri glacier. We have carried elderly widows on palanquins to Yamunotri so they could fulfil a promise they made to their husbands. We have guided families with children who returned home and told us their children still speak about the yatra years later.
          </p>
          <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, margin:0 }}>
            Char Dham is not a tourism product. It is a rite of passage — one that belongs to every Indian and every soul drawn to the mountains. Whatever brings you here, we hope this guide helps you arrive prepared, present, and open to what these four extraordinary places have to offer.
          </p>
          <div style={{ marginTop:14, fontSize:13, color:'var(--text-muted)', fontStyle:'italic' }}>— The Shiv Ganga Travels Team, Haridwar</div>
        </div>

        {/* Related guides */}
        <div style={{ marginTop:36, paddingTop:20, borderTop:'1px solid var(--border)' }}>
          <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:12 }}>Continue Reading</h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              ['Char Dham Yatra Cost 2026', '/blog/char-dham-yatra-cost'],
              ['Registration Guide 2026', '/blog/char-dham-yatra-registration'],
              ['Packing List', '/blog/char-dham-yatra-packing-list'],
              ['Road Conditions 2026', '/blog/char-dham-yatra-road-conditions-2026'],
              ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'],
              ['Opening Dates 2026', '/blog/char-dham-yatra-opening-dates-2026'],
              ['2026 New Rules', '/blog/char-dham-yatra-2026-new-rules'],
              ['First-Timer Guide', '/blog/char-dham-yatra-first-timer-guide'],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ background:'#fff', color:'var(--navy)', padding:'8px 14px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>

        {/* End CTA */}
        <BlogCTA variant="footer" intent="booking" />

      </article>
    </>
  );
}
