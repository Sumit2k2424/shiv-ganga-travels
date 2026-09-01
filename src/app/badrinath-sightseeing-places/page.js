import Link from 'next/link';
import { SITE } from '@/data/packages';
import Breadcrumb from '@/components/Breadcrumb';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import BlogCTA from '@/components/BlogCTA';
import FAQAccordion from '@/components/FAQAccordion';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import SightseeingLinkMesh from '@/components/SightseeingLinkMesh';
import { h2, h3, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Places to Visit in Badrinath ${SITE.season} — Mana, Tapt Kund & Vasudhara` },
  description: 'Everything worth seeing at Badrinath beyond the temple — Tapt Kund at the steps, Mana village 3 km on, and the 122 m Vasudhara Falls. Distances, timings and how long each takes.',
  keywords: ['places to visit in badrinath','badrinath sightseeing','badrinath tourist places','things to do in badrinath','mana village badrinath','vasudhara falls badrinath','badrinath nearby places','badrinath darshan places'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-sightseeing-places` },
  openGraph: {
    title: `Places to Visit in Badrinath ${SITE.season} — Mana, Tapt Kund & Vasudhara Falls`,
    description: 'The temple takes an hour. The valley takes two days. Tapt Kund, Brahma Kapal, Mana village, Bheem Pul, Vasudhara Falls and Charanpaduka — with real distances and walking times.',
    url: `${SITE.baseUrl}/badrinath-sightseeing-places`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Places to Visit in Badrinath ${SITE.season} | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Places to Visit in Badrinath ${SITE.season}`,
    description: 'Tapt Kund, Mana village, Bheem Pul and Vasudhara Falls — what to see around Badrinath and how long each one actually takes.',
    images: [{ url: '/opengraph-image', alt: `Places to Visit in Badrinath | ${SITE.name}` }],
  },
};

// Distances are road/trail distances from the Badrinath temple itself, the way
// a pilgrim standing at the steps would measure them.
const SIGHTS = [
  {
    name: 'Tapt Kund',
    dist: 'At the temple steps',
    time: '20–30 min',
    href: '/tapt-kund',
    what: 'The natural hot spring directly below the temple stairs, running 45–55°C all year. Most pilgrims bathe here before darshan. It is small, it is crowded, and the water is hotter than people expect — go in slowly.',
  },
  {
    name: 'Brahma Kapal',
    dist: '150 m',
    time: '30–60 min',
    href: null,
    what: 'A flat rock platform on the Alaknanda where pind-daan is performed for ancestors. Priests sit here through the day. If a rite is the reason for your trip, budget a proper hour and go early.',
  },
  {
    name: 'Mana Village',
    dist: '3 km by road',
    time: 'Half a day',
    href: null,
    what: 'The last village before the Tibet border, and the anchor of everything else on this list. Stone lanes, wool weavers, and the Saraswati emerging from under the rock. A shared jeep or your own vehicle gets you there in ten minutes.',
  },
  {
    name: 'Vyas Gufa & Ganesh Gufa',
    dist: '3 km (in Mana)',
    time: '30 min',
    href: null,
    what: 'The cave where Vyas Muni is said to have dictated the Mahabharata, with Ganesh Gufa a short walk away where Ganesha is said to have written it down. Both are small, dark and worth standing inside for a minute.',
  },
  {
    name: 'Bheem Pul',
    dist: '3 km (in Mana)',
    time: '15 min',
    href: null,
    what: 'A single enormous slab of rock bridging the Saraswati, said to have been dropped there by Bhima. The river runs loud and fast underneath. This is where the Saraswati meets the Alaknanda and, by the story, goes underground.',
  },
  {
    name: 'Vasudhara Falls',
    dist: '9 km (6 km on foot from Mana)',
    time: '5–6 hrs return',
    href: null,
    what: 'A 122 m fall on the far side of Mana. The first stretch is gentle; past the Saraswati temple the trail steepens and stays steep. This is a real half-day walk at 3,000 m and above, not a viewpoint stop.',
  },
  {
    name: 'Charanpaduka',
    dist: '3 km uphill',
    time: '2–3 hrs return',
    href: null,
    what: 'A boulder bearing what devotees hold to be Vishnu’s footprint, up the slope behind the town. Steep, short, and usually empty compared with everything else here.',
  },
  {
    name: 'Mata Murti Temple',
    dist: '3 km',
    time: '30 min',
    href: null,
    what: 'Dedicated to the mother of Nar and Narayan, on the Alaknanda’s far bank. Quiet most of the year, and the centre of a large fair each September.',
  },
  {
    name: 'Neelkanth Peak viewpoint',
    dist: 'From the town itself',
    time: 'First light',
    href: null,
    what: 'The 6,596 m pyramid behind the temple. It catches gold for a few minutes at sunrise and is usually gone behind cloud by mid-morning, so this is a reason to be outside early rather than a place you travel to.',
  },
];

const FAQS = [
  { q: 'How many days do you need at Badrinath?',
    a: 'One night covers the temple, Tapt Kund and Brahma Kapal. Two nights lets you add Mana village properly and still be back before dark. If Vasudhara Falls is on your list, you need the second full day for it alone — the walk is roughly five to six hours return from Mana.' },
  { q: 'Is Mana village worth visiting?',
    a: 'Yes, and it is the single best use of a spare half-day at Badrinath. It is 3 km by road, so it costs you almost nothing in travel time, and Vyas Gufa, Ganesh Gufa, Bheem Pul and the Saraswati are all within a few hundred metres of each other once you are there.' },
  { q: 'How hard is the Vasudhara Falls trek?',
    a: 'Moderate, and longer than it sounds. It is 6 km each way from Mana at around 3,200 m rising to roughly 3,600 m. The first two to three kilometres are easy walking; after the Saraswati temple the trail gets steep and stony. Start by 7 AM, carry water, and turn back by 1 PM regardless of where you have reached.' },
  { q: 'Can you visit Badrinath sightseeing spots in winter?',
    a: 'No. The temple closes around 13 November and the town empties — Badri Vishal moves to Joshimath for the winter and the road beyond is snowbound. Mana, Vasudhara and Charanpaduka are all inaccessible until the portals reopen in late April.' },
  { q: 'Do you need a permit for Mana village?',
    a: 'Not for Mana itself, which is open to all Indian and foreign visitors. Restrictions begin further up towards the border, where the road is army-controlled and civilians are turned back at the checkpost past the village.' },
  { q: 'What is there to see between Joshimath and Badrinath?',
    a: 'Vishnuprayag, where the Alaknanda meets the Dhauliganga, is the main stop, and Govindghat is where the Hemkund Sahib and Valley of Flowers trek begins. Pandukeshwar, the winter seat of Yogdhyan Badri, sits just off the road and is worth ten minutes.' },
];

const PAA = [
  { q: 'What is famous in Badrinath besides the temple?', a: 'Tapt Kund hot spring at the temple steps, Mana village 3 km on with Vyas Gufa and Bheem Pul, and Vasudhara Falls beyond it. Brahma Kapal, on the river below the temple, is where pind-daan rites are performed.' },
  { q: 'How far is Mana village from Badrinath temple?', a: 'Three kilometres by road, about ten minutes by vehicle or a flat forty-minute walk. Shared jeeps run through the day in season.' },
  { q: 'How high is Vasudhara Falls?', a: 'About 122 metres, or 400 feet. It sits roughly 9 km from Badrinath — 3 km of road to Mana, then a 6 km trail.' },
  { q: 'Is there a trek from Badrinath?', a: 'Vasudhara Falls is the main one at 6 km each way from Mana. Charanpaduka is a shorter, steeper 3 km climb behind the town. Both are day walks that need no permit or guide in clear weather.' },
  { q: 'What is the best time to see Badrinath sightseeing places?', a: 'May to June and September to October. The valley is clear, the trails are dry, and Neelkanth is visible at sunrise. July and August bring rain that makes the Vasudhara trail slippery and often closes the road below.' },
];

function Schema() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places to Visit in Badrinath ${SITE.season}`,
    itemListElement: SIGHTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: s.name,
        description: s.what,
        address: { '@type': 'PostalAddress', addressLocality: 'Badrinath', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
      },
    })),
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function BadrinathSightseeingPlaces() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Badrinath · Sightseeing Guide</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Places to Visit in Badrinath
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto' }}>
            Tapt Kund · Brahma Kapal · Mana Village · Bheem Pul · Vasudhara Falls · Charanpaduka
          </p>
        </div>
      </section>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'20px 20px 60px' }}>
        <Breadcrumb items={[{ label:'Badrinath', href:'/badrinath-yatra' }, { label:'Places to Visit' }]} />

        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          Darshan at Badrinath takes about an hour. The valley around it takes two days. Tapt Kund
          is at the temple steps, Brahma Kapal is on the river just below, and Mana village — the
          last settlement before the Tibet border — is 3 km on, with Vyas Gufa, Bheem Pul and the
          Saraswati all within walking distance of each other. Vasudhara Falls, 6 km beyond Mana
          on foot, is the one thing here that needs a full day.
        </AnswerBox>

        <p style={p}>
          Most pilgrims give Badrinath a single night, do the darshan, and drive out the next
          morning. That is enough for the temple and nothing else. The thing worth knowing before
          you plan is that almost every sight here sits on one 3 km stretch of road ending at Mana,
          so a second night buys you far more than a second night usually does on this circuit.
        </p>

        <h2 style={h2}>What to see, and how long each takes</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:640 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Place','From the temple','Time needed','What it is'].map(hd => (
                  <th key={hd} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{hd}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIGHTS.map((s, i) => (
                <tr key={s.name} style={{ borderBottom:'1px solid hsl(var(--border))', background: i % 2 ? 'var(--bg)' : '#fff', verticalAlign:'top' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5, whiteSpace:'nowrap' }}>
                    {s.href ? <Link href={s.href} style={{ color:'var(--navy)' }}>{s.name}</Link> : s.name}
                  </td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12, whiteSpace:'nowrap' }}>{s.dist}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12, whiteSpace:'nowrap' }}>{s.time}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5, lineHeight:1.65, minWidth:280 }}>{s.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BlogCTA variant="inline" intent="info" />

        <h2 style={h2}>Mana village, and why it earns a half-day</h2>
        <p style={p}>
          Mana is the reason to stay a second night. It is three kilometres of good road from the
          temple, which means ten minutes in a vehicle, and once you are standing in it everything
          worth seeing is within a few hundred metres. The stone lanes still have working wool
          weavers in them. The Saraswati comes out from under the rock at Bheem Pul with a noise
          you feel through your boots. Vyas Gufa and Ganesh Gufa are both small enough to see in
          twenty minutes and both worth the walk if you know the story attached to them.
        </p>
        <p style={p}>
          Past the village the road belongs to the army and civilians are turned back at the
          checkpost. Mana itself needs no permit.
        </p>

        <h3 style={h3}>If you only have a spare morning</h3>
        <p style={p}>
          Tapt Kund, Brahma Kapal, then a jeep to Mana for Bheem Pul and the two caves. That is
          roughly four hours including travel, and it covers everything except Vasudhara and
          Charanpaduka. Skip Vasudhara rather than rush it — the second half of that trail is not
          a walk you want to be hurrying down in the afternoon.
        </p>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', margin:'24px 0' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>What we tell our own groups</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>
            Badrinath sits at 3,133 m and most people arrive having gained a lot of height that
            same day. We keep the Mana trip for the morning after darshan rather than the same
            afternoon, and we do not put Vasudhara in front of anyone who has been short of breath
            on the drive up. The falls will still be there next season.
          </div>
        </div>

        <h2 style={h2}>Nearby, on the way in or out</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10, marginBottom:24 }}>
          {[
            ['/badrinath-temple', 'Badrinath Temple', 'Darshan timings, Mahabhishek and the opening date'],
            ['/tapt-kund', 'Tapt Kund', 'The 45–55°C spring below the temple steps'],
            ['/govindghat', 'Govindghat', 'Where the Hemkund and Valley of Flowers trek starts'],
            ['/joshimath-narsingh-temple', 'Joshimath', 'Badrinath’s winter seat, 45 km down the valley'],
            ['/panch-badri-yatra', 'Panch Badri', 'The five Badri temples this one belongs to'],
            ['/hemkund-sahib-yatra', 'Hemkund Sahib', 'The high-altitude gurudwara above Govindghat'],
          ].map(([href, title, sub]) => (
            <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:10, padding:'12px 14px', textDecoration:'none', display:'block' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{title} →</div>
              <div style={{ fontSize:12.5, color:'#64748b', lineHeight:1.6 }}>{sub}</div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={FAQS} />

        <div style={{ marginTop:36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>

        <BlogAuthor variant="bottom" author="dhanesh" />
        <BlogCTA variant="footer" intent="booking" />

        <nav aria-label="Related Badrinath pages" style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:36 }}>
          <p style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', margin:'0 0 10px' }}>More on Badrinath</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[
              ['/badrinath-yatra', 'Badrinath Yatra package'],
              ['/how-to-reach-badrinath', 'How to reach Badrinath'],
              ['/badrinath-weather', 'Badrinath weather'],
              ['/badrinath-history-legends', 'History & legends'],
              ['/badrinath-festivals', 'Festivals & dates'],
              ['/badrinath-hotels', 'Where to stay'],
              ['/badrinath-dharamshala', 'Dharamshalas'],
              ['/badrinath-vip-darshan', 'VIP darshan'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{label} →</Link>
            ))}
          </div>
        </nav>
        <SightseeingLinkMesh current="badrinath" />
      </article>
    </>
  );
}
