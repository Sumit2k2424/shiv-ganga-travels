import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Rudraprayag — The Junction That Decides Your Yatra' },
  description: 'Rudraprayag is where the Kedarnath road splits from the Badrinath road. The sangam, Koteshwar cave, Corbett\'s man-eating leopard, and how to reach.',
  keywords: ['rudraprayag','rudraprayag sangam','alaknanda mandakini confluence','koteshwar mahadev temple','rudranath temple rudraprayag','man eating leopard of rudraprayag','rudraprayag to kedarnath distance','panch prayag','rudraprayag uttarakhand'],
  alternates: { canonical: `${SITE.baseUrl}/rudraprayag` },
  openGraph: {
    title: 'Rudraprayag — The Junction That Decides Your Yatra',
    description: 'Where the Alaknanda meets the Mandakini and the Kedarnath road splits from the Badrinath road. Sangam, Koteshwar cave, and Corbett\'s leopard.',
    url: `${SITE.baseUrl}/rudraprayag`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Rudraprayag — Alaknanda and Mandakini confluence, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudraprayag — The Junction That Decides Your Yatra',
    description: 'Alaknanda meets Mandakini. Where the Kedarnath road leaves the Badrinath road.',
    images: [{ url: '/opengraph-image', alt: 'Rudraprayag confluence' }],
  },
};

const FAQS = [
  {
    q: 'What is Rudraprayag known for?',
    a: 'Three things. It is the confluence of the Alaknanda and the Mandakini, and one of the five Panch Prayag. It is the road junction where the Kedarnath route leaves the Badrinath route, which makes it the single most consequential fork on the whole Char Dham circuit. And it is where Jim Corbett shot the man-eating leopard that killed 125 people between 1918 and 1926.',
  },
  {
    q: 'Which rivers meet at Rudraprayag?',
    a: 'The Alaknanda, coming down from the Satopanth glacier above Badrinath, and the Mandakini, coming down from the Chorabari glacier above Kedarnath. So the two rivers meeting here are literally the rivers of the two dhams — Shiva\'s river and Vishnu\'s river joining below the town.',
  },
  {
    q: 'Why is it called Rudraprayag?',
    a: 'Rudra is a form of Shiva. The story told locally is that the sage Narada practised music here with a degree of pride, was humbled, and then did penance until Shiva appeared to him in his Rudra form and taught him properly. The Rudranath temple beside the sangam marks the spot.',
  },
  {
    q: 'How far is Rudraprayag from Kedarnath and Badrinath?',
    a: 'About 75 km to Gaurikund, the Kedarnath roadhead, which is two and a half to three hours up the Mandakini valley. Badrinath is about 160 km, five to six hours up the Alaknanda. From Rudraprayag you can reach either dham in a day, which is exactly why almost every Char Dham itinerary overnights here or at Guptkashi just above it.',
  },
  {
    q: 'What is the man-eating leopard of Rudraprayag?',
    a: 'A leopard that killed at least 125 people along the Kedarnath and Badrinath pilgrim routes between 1918 and 1926 — the official count, and locally believed to be low. It hunted pilgrims and villagers at night for eight years, shut down the yatra, and was eventually shot by Jim Corbett on 2 May 1926 after months of hunting. Corbett wrote a book about it. There is a plaque near the spot on the Gular road.',
  },
  {
    q: 'What is Koteshwar Mahadev temple?',
    a: 'A cave temple about 3 km downstream from the sangam, set into rock right at the river\'s edge. Shiva is said to have meditated here on his way to Kedarnath. It floods in high monsoon and the natural rock formations inside are what people come for. Far quieter than the main sangam and worth the detour.',
  },
  {
    q: 'How far is Rudraprayag from Haridwar and Rishikesh?',
    a: 'Roughly 165 km from Haridwar and 140 km from Rishikesh, five to six hours on NH-7 via Devprayag and Srinagar. It is a long but straightforward drive that follows the river almost the whole way.',
  },
  {
    q: 'Is Rudraprayag worth stopping at?',
    a: 'Yes, and most itineraries already stop here or at Guptkashi because the driving distances force it. Give it an evening rather than a night-and-go: the sangam at dusk, the Rudranath temple, and Koteshwar in the morning if you have an hour. The town itself is a working roadhead, not a pretty hill station, and it does not pretend otherwise.',
  },
  {
    q: 'Where should I stay — Rudraprayag or Guptkashi?',
    a: 'If Kedarnath is next, stay at Guptkashi or Sitapur — you are 30-40 km closer to Gaurikund and that matters on a 3 AM start. If Badrinath is next, or you are heading back down, Rudraprayag is the better base. We route it that way on every Do Dham and Char Dham itinerary.',
  },
  {
    q: 'Which Panch Prayag is Rudraprayag?',
    a: 'The fourth going downstream — Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, then Devprayag. It is the last confluence before the Alaknanda meets the Bhagirathi at Devprayag and becomes the Ganga.',
  },
];

const PAA = [
  { q: 'Can you bathe at the Rudraprayag sangam?', a: 'Yes, there are steps down to the confluence. The Mandakini comes down fast and cold from the Kedarnath glacier and the current at the meeting point is stronger than it looks. Stay in the shallows near the steps, and do not attempt it at all during or just after the monsoon.' },
  { q: 'Is Rudraprayag safe now?', a: 'Entirely. The leopard has been dead for a century and the town is a busy district headquarters on a national highway. The real hazards here are the same as anywhere in Garhwal — monsoon landslides and the driving, not wildlife.' },
  { q: 'What is the difference between Rudraprayag and Rudranath?', a: 'Easy to confuse. Rudraprayag is this town and confluence at 610 m on the main highway. Rudranath is one of the Panch Kedar temples, a high-altitude shrine at about 3,600 m reached by a demanding trek from Sagar village near Gopeshwar. Different places, roughly 100 km apart.' },
  { q: 'How many days do you need at Rudraprayag?', a: 'One evening and one morning covers everything worth seeing. Most people pass through in an afternoon. If you are building an itinerary, treat it as a well-placed overnight rather than a destination in its own right.' },
  { q: 'Is Dhari Devi temple near Rudraprayag?', a: 'Yes, about 20 km downstream towards Srinagar, on the Alaknanda. It is one of the more atmospheric stops on this stretch of road and easy to combine with Rudraprayag on the same day.' },
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
      { '@type': 'ListItem', position: 3, name: 'Rudraprayag', item: `${SITE.baseUrl}/rudraprayag` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Rudraprayag Sangam',
    alternateName: ['Rudraprayag', 'Alaknanda–Mandakini Confluence'],
    description: 'The confluence of the Alaknanda and Mandakini rivers in Rudraprayag district, Uttarakhand — one of the Panch Prayag, and the road junction where the Kedarnath route separates from the Badrinath route.',
    url: `${SITE.baseUrl}/rudraprayag`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Rudraprayag', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.2844, longitude: 78.9811 },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Families', 'History readers'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Rudraprayag — The Junction That Decides Your Yatra',
    description: 'A guide to the Alaknanda–Mandakini confluence: the sangam, Rudranath and Koteshwar temples, Corbett\'s man-eating leopard, and how Rudraprayag shapes a Char Dham route.',
    mainEntityOfPage: `${SITE.baseUrl}/rudraprayag`,
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

export default function Rudraprayag() {
  const waText = encodeURIComponent('Namaste! I want a Char Dham itinerary routed through Rudraprayag. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Panch Prayag · 4 of 5 · The Kedarnath fork
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Rudraprayag — The Junction That Decides Your Yatra
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            The Alaknanda meets the Mandakini · Kedarnath left, Badrinath straight on · 165 km from Haridwar
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🌊 Alaknanda + Mandakini', '🛕 Rudranath & Koteshwar', '🐆 Corbett\'s leopard, 1926', '🚗 75 km to Gaurikund'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Rudraprayag</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Confluence', '610 m'], ['District', 'Rudraprayag'], ['From Haridwar', '165 km'], ['To Gaurikund', '75 km'], ['To Badrinath', '160 km'], ['Best months', 'Apr–Jun, Sep–Nov']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Rudraprayag is where you commit.</strong> Up to this point every Char Dham itinerary drives the same road. Here the valley splits — the Mandakini goes left towards Kedarnath, the Alaknanda carries straight on towards Badrinath — and whichever way your driver turns decides the next three days of your trip. It is the most consequential road junction in Garhwal, and most people pass through it without noticing.
        </p>

        <h2 style={h2}>What Is Rudraprayag?</h2>
        <AnswerBox>
          Rudraprayag is a town and confluence in Uttarakhand where the Alaknanda and Mandakini rivers
          meet — the fourth of the five Panch Prayag. It sits 165 km from Haridwar on NH-7, and is the
          junction where the road to Kedarnath separates from the road to Badrinath.
        </AnswerBox>
        <p style={p}>
          Two rivers arrive here from two dhams. The <strong>Mandakini</strong> comes down from the Chorabari glacier above <Link href="/kedarnath-temple">Kedarnath</Link>; the <strong>Alaknanda</strong> comes down from Satopanth above <Link href="/badrinath-temple">Badrinath</Link>. Shiva&rsquo;s river and Vishnu&rsquo;s river, meeting below a working roadhead town with truck horns and tea stalls. Garhwal does this a lot — the sacred and the entirely ordinary sharing a riverbank without any apparent tension.
        </p>
        <p style={p}>
          The name comes from Rudra, a form of Shiva. The story told here is about the sage Narada, who was proud of his music, was taken down a peg, and then did penance on this spot until Shiva appeared as Rudra and taught him properly. The <strong>Rudranath temple</strong> beside the sangam marks it. Not to be confused with the Panch Kedar Rudranath, which is a hard trek at 3,600 m and about a hundred kilometres away &mdash; see our <Link href="/panch-kedar-yatra">Panch Kedar guide</Link> for that one.
        </p>

        <h2 style={h2}>The Fork: Kedarnath Left, Badrinath Straight On</h2>
        <p style={p}>
          This is the practical reason Rudraprayag matters to anyone planning a yatra. From the sangam, the two routes diverge and do not meet again until you come back down.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Route', 'Valley', 'Next stops', 'Distance', 'Drive'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Towards Kedarnath', 'Mandakini', 'Tilwara → Agastyamuni → Guptkashi → Sonprayag → Gaurikund', '75 km', '2.5–3 hrs'],
                ['Towards Badrinath', 'Alaknanda', 'Karnaprayag → Chamoli → Joshimath → Badrinath', '160 km', '5–6 hrs'],
                ['Back down', 'Alaknanda', 'Srinagar → Devprayag → Rishikesh → Haridwar', '165 km', '5–6 hrs'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[3]}</td>
                  <td style={TD}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ExpertNote variant="tip">
          If Kedarnath is next, do not sleep at Rudraprayag &mdash; push on to Guptkashi or Sitapur. You will be starting at 3 AM for Sonprayag and those extra thirty-five kilometres, done the evening before, are the difference between a manageable morning and a miserable one. If Badrinath is next, or you are coming back down, Rudraprayag is the better bed. We route it that way on every <Link href="/do-dham-yatra">Do Dham</Link> and <Link href="/char-dham-yatra">Char Dham</Link> itinerary, and it is the sort of detail that never appears in a brochure.
        </ExpertNote>

        <h2 style={h2}>The Leopard</h2>
        <p style={p}>
          Between 1918 and 1926 a single leopard killed at least <strong>125 people</strong> along these pilgrim roads. That is the official figure and nobody local believes it. It hunted at night, took people from inside houses, and became efficient enough that the Kedarnath and Badrinath yatra effectively stopped for several seasons — pilgrims would not walk the road, and the villages along it barred their doors after dark for eight years.
        </p>
        <p style={p}>
          Jim Corbett came in 1925 and it took him until <strong>2 May 1926</strong> to kill it. He wrote the story up afterwards as <em>The Man-Eating Leopard of Rudraprayag</em>, and it is still the best thing ever written about this stretch of road — not for the hunt, which is slow and mostly failure, but for the portrait of what fear does to a valley over eight years. There is a plaque near the spot on the old Gular road.
        </p>
        <p style={p}>
          It is worth knowing this before you drive through, because the geography in the book is the geography outside your window. The pilgrim paths Corbett describes are, in places, the road you are on.
        </p>

        <h2 style={h2}>What to See</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { t: 'The sangam', d: 'Steps lead down to where the two rivers meet. The Mandakini runs faster and colder — it is a shorter, steeper river off the Kedarnath glacier — and you can usually pick out which water is which. Quietest at dusk, after the day\'s buses have gone through.' },
            { t: 'Rudranath Temple', d: 'Beside the sangam, small and old, marking Narada\'s penance. Ten minutes. The interest here is the setting rather than the architecture.' },
            { t: 'Koteshwar Mahadev', d: 'A cave temple 3 km downstream, set into the rock at the water\'s edge, where Shiva is said to have stopped on his way to Kedarnath. Natural rock formations inside, and it floods in heavy monsoon. Much quieter than the sangam and the better of the two temples if you only do one.' },
            { t: 'Chamunda Devi Temple', d: 'Above the town, a short climb. Local rather than touristed, and the view down over the confluence is the reason to go up.' },
            { t: 'Dhari Devi, 20 km downstream', d: 'Not in Rudraprayag but easily combined the same day. One of the more atmospheric temples on the Alaknanda — see our full guide.' },
          ].map(x => (
            <div key={x.t} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--teal)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{x.t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{x.d}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13.5, color: '#64748b', marginBottom: 28 }}>
          Full guide to the last one: <Link href="/dhari-devi-temple">Dhari Devi Temple</Link>.
        </p>

        <h2 style={h2}>How to Reach Rudraprayag</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Haridwar', '165 km', '5–6 hrs', 'The standard Char Dham departure, via Rishikesh and Devprayag'],
                ['Rishikesh', '140 km', '5 hrs', 'NH-7 the whole way'],
                ['Devprayag', '70 km', '2 hrs', 'The next prayag downstream'],
                ['Srinagar (Uttarakhand)', '34 km', '1 hr', 'Nearest town with real hotel choice'],
                ['Guptkashi', '40 km', '1.5 hrs', 'Up the Mandakini, towards Kedarnath'],
                ['Gaurikund', '75 km', '2.5–3 hrs', 'The Kedarnath trek roadhead'],
                ['Badrinath', '160 km', '5–6 hrs', 'Up the Alaknanda via Joshimath'],
                ['Dehradun (Jolly Grant)', '160 km', '5 hrs', 'Nearest airport'],
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
          No railway, no airport. Nearest rail heads are Rishikesh and Haridwar; nearest airport is Jolly Grant. Every bus on the Rishikesh&ndash;Kedarnath and Rishikesh&ndash;Badrinath routes stops here, but if you want the sangam rather than the bus stand, come by car or a <Link href="/taxi-service-in-haridwar">hired taxi from Haridwar</Link>.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Not sure whether to overnight here or push to Guptkashi?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Tell us which dham is next and how early you want to start. We will route it properly.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>
          The yatra season, <strong>late April to early November</strong>, is when the town is alive and every hotel is open. <strong>September and October</strong> are the best of it — the rivers have cleared, the crowds have thinned, and the confluence is at its most photogenic. May and June are hot, dusty and busy.
        </p>
        <p style={p}>
          Avoid <strong>July and August</strong>. Both rivers run high and brown, Koteshwar can be underwater, and this stretch of NH-7 is among the most landslide-prone on the circuit. Winter is quiet and perfectly pleasant at 610 m, but the dhams above are shut, so there is little reason to come. Check our <Link href="/char-dham-road-status">road status page</Link> before any monsoon-season drive.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has taken the Rudraprayag fork left towards Kedarnath and straight on towards Badrinath several hundred times across fifteen seasons, and the overnight advice on this page is his. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a yatra through Rudraprayag?</h3>
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
            {[['Devprayag Sangam', '/devprayag'], ['Dhari Devi Temple', '/dhari-devi-temple'], ['Guptkashi Guide', '/guptkashi-guide'], ['Gaurikund Guide', '/gaurikund'], ['Kedarnath Yatra', '/kedarnath-yatra'], ['Badrinath Yatra', '/badrinath-yatra'], ['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Kedarnath to Badrinath', '/kedarnath-to-badrinath-distance'], ['Road Status', '/char-dham-road-status'], ['Chopta & Tungnath', '/chopta-tungnath'], ['Taxi from Haridwar', '/taxi-service-in-haridwar'], ['Char Dham from Haridwar', '/char-dham-yatra-from-haridwar']].map(([l, href]) => (
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
