import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Devprayag — Where the Ganga Actually Begins | Full Guide' },
  description: 'Devprayag is where the Bhagirathi and Alaknanda meet and become the Ganga. Sangam ghat, Raghunath Temple, how to reach from Haridwar, and when to go.',
  keywords: ['devprayag','devprayag sangam','devprayag temple','raghunath temple devprayag','bhagirathi alaknanda confluence','ganga origin devprayag','panch prayag','devprayag to rishikesh distance','devprayag uttarakhand'],
  alternates: { canonical: `${SITE.baseUrl}/devprayag` },
  openGraph: {
    title: 'Devprayag — Where the Ganga Actually Begins',
    description: 'The confluence of the Bhagirathi and Alaknanda, 70 km from Rishikesh. Sangam ghat, Raghunath Temple, and how to fit it into a Char Dham route.',
    url: `${SITE.baseUrl}/devprayag`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Devprayag — Bhagirathi and Alaknanda confluence, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devprayag — Where the Ganga Actually Begins',
    description: 'Bhagirathi meets Alaknanda and becomes the Ganga. Sangam, Raghunath Temple, how to reach.',
    images: [{ url: '/opengraph-image', alt: 'Devprayag confluence' }],
  },
};

const FAQS = [
  {
    q: 'What is special about Devprayag?',
    a: 'Devprayag is where the Bhagirathi and the Alaknanda meet and, from that point downstream, the river is called the Ganga. Every other stretch above this confluence carries a different name. So while Gangotri is where pilgrims go to honour the source, Devprayag is where the Ganga as a named river actually begins — and you can stand on the ghat and watch it happen.',
  },
  {
    q: 'Which two rivers meet at Devprayag?',
    a: 'The Bhagirathi, which comes down from Gaumukh above Gangotri, and the Alaknanda, which comes down from the Satopanth glacier above Badrinath. They arrive at Devprayag from two different valleys and two different dhams, and they look completely different — the Bhagirathi is clearer and greener, the Alaknanda greyer and heavier with silt. You can see the line between them for a stretch after they join.',
  },
  {
    q: 'How far is Devprayag from Rishikesh and Haridwar?',
    a: 'About 70 km from Rishikesh and 94 km from Haridwar, on NH-7. From Rishikesh it is roughly two hours; from Haridwar allow two and a half to three. The road follows the river almost the whole way and it is one of the more comfortable mountain drives in Garhwal.',
  },
  {
    q: 'Is Devprayag on the Char Dham route?',
    a: 'Yes, and you will pass it whether you plan to or not. Every road route to Kedarnath and Badrinath from Haridwar or Rishikesh goes through Devprayag. Most operators drive straight past. We stop, because a twenty-minute halt at the sangam is the best possible start to a yatra and costs nothing.',
  },
  {
    q: 'Can you bathe at the Devprayag sangam?',
    a: 'Yes. There are steps down to the confluence and iron chains fixed into the rock to hold on to — and you should use them. The current where two Himalayan rivers meet is much stronger than it looks from the road, and the water is cold year-round. Stay within the chained section.',
  },
  {
    q: 'What is the Raghunath Temple at Devprayag?',
    a: 'A stone temple set about a hundred steps above the sangam, dedicated to Rama as Raghunathji. It is counted among the 108 Divya Desams, the Vishnu shrines named in the Tamil Alvar hymns — which is unusual this far north. The idol is traditionally attributed to Adi Shankaracharya in the 8th century, with the present structure dated to the 9th–10th and extended later under the Garhwal kings.',
  },
  {
    q: 'How much time do you need at Devprayag?',
    a: 'Twenty minutes gets you the sangam. An hour gets you the sangam and the temple. Half a day, and you can add Dashrathshila and walk the old bazaar lanes above the confluence, which most visitors never do. If you are on a Char Dham itinerary, budget the hour on the way up.',
  },
  {
    q: 'Which of the Panch Prayag is Devprayag?',
    a: 'The last one going downstream, and the most significant. The five confluences of the Alaknanda are Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag and Devprayag. The Alaknanda picks up a tributary at each; at Devprayag it meets the Bhagirathi and the combined river is renamed the Ganga. On a Char Dham circuit you cross all five.',
  },
  {
    q: 'What is the best time to visit Devprayag?',
    a: 'March to June and September to November. At 830 m it stays pleasant when the higher dhams are freezing, so it works outside the yatra season too. Avoid July and August — the rivers run high and brown, the sangam steps can be submerged, and NH-7 is prone to landslide closures.',
  },
  {
    q: 'Is there anywhere to stay in Devprayag?',
    a: 'A handful of small guesthouses and a GMVN rest house, and that is genuinely it. Most people visit as a stop rather than a stay. If you want a night on the river, Rishikesh or Srinagar (Uttarakhand) both have far more choice and are within a comfortable drive.',
  },
];

const PAA = [
  { q: 'Why is the Ganga not called Ganga above Devprayag?', a: 'Because by tradition the river takes its name only after the Bhagirathi and Alaknanda merge. Above the confluence they are two separate rivers with two separate sources and two separate names. It is a naming convention rather than a geological rule — hydrologically the Alaknanda is the larger of the two — but it is the one every map and every priest in Garhwal follows.' },
  { q: 'Which river is bigger, Bhagirathi or Alaknanda?', a: 'The Alaknanda, by volume and by catchment. It is the longer river with the bigger basin. The Bhagirathi carries the name and the religious weight because Gangotri sits at its head, which is why the combined river is called Ganga rather than Alaknanda.' },
  { q: 'Can you see the two rivers as different colours?', a: 'Usually, yes — most clearly from October through May. The Bhagirathi runs greener and clearer, the Alaknanda greyer with glacial silt, and the boundary between them stays visible for a few hundred metres downstream. During the monsoon both run brown and the effect disappears entirely.' },
  { q: 'Is Devprayag worth visiting?', a: 'If you have any interest in the Ganga as a river rather than an idea, it is the single most worthwhile stop between Rishikesh and Rudraprayag. If you are only ticking temples, the Raghunath Temple is fine but not extraordinary. The confluence is the reason to come.' },
  { q: 'What else is near Devprayag?', a: 'Dashrathshila hillock is a short climb above the town. Downstream you have the Rishikesh rafting stretch, which actually launches from near Devprayag on the longer runs. Upstream the road splits — Bhagirathi valley towards Tehri, Uttarkashi and Gangotri, Alaknanda valley towards Srinagar, Rudraprayag and Badrinath.' },
];

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Devprayag', item: `${SITE.baseUrl}/devprayag` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Devprayag Sangam',
    alternateName: ['Devprayag', 'Bhagirathi–Alaknanda Confluence'],
    description: 'The confluence of the Bhagirathi and Alaknanda rivers in Tehri Garhwal, Uttarakhand, where the two rivers merge and are renamed the Ganga. Site of the Raghunath Temple, one of the 108 Divya Desams.',
    url: `${SITE.baseUrl}/devprayag`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Devprayag', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.1469, longitude: 78.5983, elevation: '830 m' },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Families', 'Photographers'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Devprayag — Where the Ganga Actually Begins',
    description: 'A guide to the Bhagirathi–Alaknanda confluence: the sangam, Raghunath Temple, how to reach from Haridwar and Rishikesh, and where it sits on the Char Dham route.',
    mainEntityOfPage: `${SITE.baseUrl}/devprayag`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 520 };

const PRAYAGS = [
  { n: '1', name: 'Vishnuprayag', rivers: 'Alaknanda + Dhauliganga', alt: '1,372 m', near: 'Joshimath, on the Badrinath road' },
  { n: '2', name: 'Nandprayag', rivers: 'Alaknanda + Nandakini', alt: '914 m', near: 'Chamoli district' },
  { n: '3', name: 'Karnaprayag', rivers: 'Alaknanda + Pindar', alt: '788 m', near: 'Junction for the Kumaon road' },
  { n: '4', name: 'Rudraprayag', rivers: 'Alaknanda + Mandakini', alt: '610 m', near: 'Where the Kedarnath road splits off' },
  { n: '5', name: 'Devprayag', rivers: 'Alaknanda + Bhagirathi', alt: '830 m', near: 'The Ganga begins here' },
];

export default function Devprayag() {
  const waText = encodeURIComponent('Namaste! I want a Char Dham itinerary that stops properly at Devprayag. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Tehri Garhwal · 830 m · Panch Prayag
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Devprayag — Where the Ganga Actually Begins
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            The Bhagirathi meets the Alaknanda here and the river is renamed the Ganga · 70 km from Rishikesh · on every Char Dham road route
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🌊 Bhagirathi + Alaknanda', '🛕 Raghunath Temple', '🚗 94 km from Haridwar', '🎖️ We stop here on every yatra'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Devprayag</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '830 m'], ['District', 'Tehri Garhwal'], ['From Rishikesh', '70 km'], ['From Haridwar', '94 km'], ['Highway', 'NH-7'], ['Best months', 'Mar–Jun, Sep–Nov']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Devprayag is where the Ganga starts being the Ganga.</strong> The Bhagirathi comes down from Gangotri, the Alaknanda comes down from Badrinath, they meet at a rock spur in Tehri Garhwal, and from that point the river carries a single name. Everyone on a Char Dham road trip drives through it. Almost nobody stops. That is the whole argument of this page.
        </p>

        <h2 style={h2}>What Is Devprayag?</h2>
        <AnswerBox>
          Devprayag is a town in Tehri Garhwal, Uttarakhand, at 830 m, where the Bhagirathi and
          Alaknanda rivers meet to form the Ganga. It is the last of the five Panch Prayag confluences
          and sits 70 km from Rishikesh on NH-7, on the main road route to Kedarnath and Badrinath.
        </AnswerBox>
        <p style={p}>
          The town is built into the hillside above the confluence in tight stone terraces, and the old part of it — the lanes climbing behind the <Link href="/char-dham-yatra">Char Dham</Link> highway — has changed very little. Below, two rivers arrive from two different valleys and merge in front of you. It is not a subtle thing to watch. In the clear months you can see exactly where one water ends and the other begins.
        </p>

        <h2 style={h2}>The Two Rivers, and Why Only One Name Survives</h2>
        <p style={p}>
          The <strong>Bhagirathi</strong> rises at Gaumukh, the snout of the Gangotri glacier, and comes down through Harsil and Uttarkashi. The <strong>Alaknanda</strong> rises at the Satopanth glacier above Badrinath and comes down through Joshimath, Rudraprayag and Srinagar, picking up four tributaries at four confluences on the way. Both are Himalayan rivers. Both are old. Only one gives the combined river its name — and it is not the bigger one.
        </p>
        <p style={p}>
          By volume and catchment the Alaknanda is the larger river. If naming followed hydrology, the Ganga would be the Alaknanda all the way to the sea. It follows Gangotri instead, because the Bhagirathi carries the descent story — Bhagirath&rsquo;s penance, Shiva catching the river in his hair — and that story is what people came for. It is a good reminder that in Garhwal the map and the scripture do not always agree, and when they disagree, the scripture usually wins.
        </p>

        <ExpertNote variant="insider">
          Stand on the sangam steps facing upstream and the Bhagirathi is on your right, the Alaknanda on your left. In October the difference is almost comical — one green, one grey-brown, with a hard seam between them that holds for a few hundred metres before it blurs. Go in August and both are the same churning brown and you will wonder what everyone is talking about. If you have any choice in the matter, come after the rains.
        </ExpertNote>

        <h2 style={h2}>The Raghunath Temple</h2>
        <p style={p}>
          A hundred-odd steps above the water sits a stone temple to Rama, worshipped here as Raghunathji, with Lakshmi as Sita. It is counted among the <strong>108 Divya Desams</strong> — the Vishnu shrines named in the hymns of the Tamil Alvar poets — which is genuinely strange when you think about it: a shrine in the Garhwal hills listed in devotional poetry composed two thousand kilometres south, centuries before anyone here would have read it.
        </p>
        <p style={p}>
          The idol is traditionally attributed to Adi Shankaracharya in the 8th century. The building you actually see is later — 9th to 10th century in its core, with additions under the Katyuri and then the Garhwal kings, who maintained it for generations. It is built in the same squat, thick-walled Garhwali style as <Link href="/kedarnath-temple">Kedarnath</Link>, for the same reason: earthquakes.
        </p>

        <h2 style={h2}>What to Actually Do There</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { t: 'The sangam ghat', d: 'Steps run right down to the confluence with iron chains bolted into the rock. Use them. Two Himalayan rivers meeting produces a pull that does not look like much from the road and is considerably stronger than it appears. The water is cold in every month of the year. Stay inside the chained section and you will be fine.' },
            { t: 'Raghunath Temple', d: 'Up the steps from the ghat. Small, dark, old. Fifteen minutes unless you sit, and sitting is the point. Morning is quieter than afternoon.' },
            { t: 'Dashrathshila', d: 'A hillock above the town, named for Rama\'s father Dashrath, who is said to have done penance here. A short climb, almost always empty, and the view down onto the confluence from above is better than the view from the ghat.' },
            { t: 'The old bazaar lanes', d: 'Behind and above the highway. Stone houses, slate roofs, chai shops that have been there longer than the road. Twenty minutes of walking and you have seen a Garhwali hill town that has not been rebuilt for tourists.' },
          ].map(x => (
            <div key={x.t} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--teal)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{x.t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{x.d}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>How to Reach Devprayag</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Rishikesh', '70 km', '2 hrs', 'NH-7 the whole way, following the river'],
                ['Haridwar', '94 km', '2.5–3 hrs', 'Via Rishikesh; the standard Char Dham departure'],
                ['Dehradun', '95 km', '3 hrs', 'Nearest airport is Jolly Grant, 85 km'],
                ['Delhi', '310 km', '8–9 hrs', 'Long day; most people break it at Haridwar'],
                ['Srinagar (Uttarakhand)', '35 km', '1 hr', 'Next town up the Alaknanda'],
                ['Rudraprayag', '70 km', '2 hrs', 'The next prayag upstream'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          There is no railway station and no airport. The nearest rail heads are Rishikesh and Haridwar; the nearest airport is Jolly Grant at Dehradun. Buses on the Rishikesh–Srinagar–Rudraprayag route all stop here, but they stop briefly and at the highway, not the ghat. If the confluence is the reason you are going, come by car or in a <Link href="/taxi-service-in-haridwar">hired taxi from Haridwar</Link> so you control how long you stay.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want a Char Dham itinerary that actually stops here?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We build the Devprayag halt into every road route. Tell us your dates and we will send a routed plan.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Devprayag and the Panch Prayag</h2>
        <p style={p}>
          The Alaknanda gathers a tributary at each of five confluences on its way down, and each is a <em>prayag</em>. Devprayag is the fifth and last, and the only one where the resulting river changes name. On a full <Link href="/char-dham-yatra">Char Dham circuit</Link> you cross all five, usually without noticing four of them.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['#', 'Prayag', 'Rivers', 'Altitude', 'Where it sits'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {PRAYAGS.map((p2, i) => (
                <tr key={p2.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: p2.name === 'Devprayag' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--teal)' }}>{p2.n}</td>
                  <td style={{ ...TD, fontWeight: p2.name === 'Devprayag' ? 800 : 600, color: 'var(--navy)' }}>{p2.name}</td>
                  <td style={TD}>{p2.rivers}</td>
                  <td style={TD}>{p2.alt}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{p2.near}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>
          At 830 m Devprayag is low enough to be comfortable most of the year, which makes it unusual among Char Dham stops. <strong>October and November</strong> are the best months — the rivers have cleared after the monsoon, the seam between the two waters is at its sharpest, and the crowds have gone home with the yatra season. <strong>March to June</strong> is the busy stretch, warm and dusty but reliable.
        </p>
        <p style={p}>
          Skip <strong>July and August</strong>. Both rivers run high and uniformly brown, the lower ghat steps can be underwater, and NH-7 through this stretch closes for landslides more often than any other part of the lower Garhwal road. More on that in our <Link href="/blog/char-dham-monsoon-safety">monsoon safety guide</Link> and the <Link href="/char-dham-road-status">live road status page</Link>.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 10, padding: '12px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', cursor: 'pointer', lineHeight: 1.5 }}>{f.q}</summary>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, margin: '10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>Founder &amp; Director, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has driven the Rishikesh&ndash;Devprayag&ndash;Rudraprayag road several hundred times across fifteen yatra seasons, and puts the Devprayag halt into every road itinerary we build. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Char Dham trip through Devprayag?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Along the same road</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Char Dham Yatra', '/char-dham-yatra'], ['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Dhari Devi Temple', '/dhari-devi-temple'], ['Guptkashi Guide', '/guptkashi-guide'], ['Gaurikund Guide', '/gaurikund-guide'], ['Harsil Valley', '/harsil-valley'], ['Hemkund Sahib Yatra', '/hemkund-sahib-yatra'], ['Adi Kailash Yatra', '/adi-kailash-yatra'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Surkanda Devi Temple', '/surkanda-devi-temple'], ['Triveni Ghat, Rishikesh', '/triveni-ghat-rishikesh'], ['Neelkanth Mahadev', '/neelkanth-mahadev-temple'], ['Rishikesh Packages', '/rishikesh-tour-packages'], ['Haridwar to Badrinath', '/haridwar-to-badrinath-distance'], ['Road Status', '/char-dham-road-status'], ['Taxi from Haridwar', '/taxi-service-in-haridwar'], ['Char Dham from Haridwar', '/char-dham-yatra-from-haridwar'], ['Char Dham from Delhi', '/char-dham-yatra-from-delhi']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>
      </article>
    </>
  );
}
