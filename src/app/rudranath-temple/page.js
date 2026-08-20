import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Rudranath Temple — The Toughest Panch Kedar Trek | Complete Guide' },
  description: 'Rudranath temple, 3,600m, is where Shiva\'s face is worshipped as Neelkanth Mahadev — the most remote and physically demanding of the five Panch Kedar. Trek route, legend, best season.',
  keywords: ['rudranath temple','rudranath trek','panch kedar rudranath','rudranath chamoli','neelkanth mahadev rudranath','rudranath trek route sagar village'],
  alternates: { canonical: `${SITE.baseUrl}/rudranath-temple` },
  openGraph: { title: 'Rudranath Temple — The Toughest Panch Kedar Trek', description: 'Shiva\'s face, worshipped as Neelkanth Mahadev, 3,600m — the most demanding of the five Panch Kedar.', url: `${SITE.baseUrl}/rudranath-temple`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Rudranath Temple, Chamoli' }] },
  twitter: { card: 'summary_large_image', title: 'Rudranath Temple — The Toughest Panch Kedar Trek', description: 'The most remote and demanding of the five Panch Kedar temples.', images: [{ url: '/opengraph-image', alt: 'Rudranath Temple' }] },
};

const FAQS = [
  { q: 'What is Rudranath temple?', a: 'Rudranath is a Shiva temple at about 3,600 m in Chamoli district, Uttarakhand, one of the five Panch Kedar shrines. It enshrines Shiva\'s face, worshipped here as Neelkanth Mahadev, and is widely regarded as the hardest of the five to reach — a roughly 20 km trek one way through forest and alpine terrain from the trailhead village of Sagar.' },
  { q: 'What is the Panch Kedar legend at Rudranath?', a: 'After the Kurukshetra war, the Pandavas sought Shiva\'s forgiveness for the killing done on both sides. Shiva, unwilling to grant them an easy audience, fled in the form of a bull and dived into the ground to escape. His body parts are said to have resurfaced at five places across Garhwal — the hump at Kedarnath, the arms at Tungnath, the navel at Madhyamaheshwar, the hair at Kalpeshwar, and the face at Rudranath, where it is worshipped as Neelkanth Mahadev.' },
  { q: 'How hard is the Rudranath trek?', a: 'It is generally considered the most physically demanding of the five Panch Kedar treks — roughly 20 km one-way from Sagar village, crossing the Pitradhar ridge at close to 4,000 m, through dense forest and open alpine meadow (bugyal) with no permanent settlements en route. A standard itinerary allows 4 days, 3 nights round trip. It requires genuine fitness and is not recommended for first-time trekkers or elderly pilgrims.' },
  { q: 'When is the best time to trek to Rudranath?', a: 'Mid-May to end-June, and September to mid-October. Both windows avoid the monsoon, when the forest trail becomes slippery and leech-infested, and avoid the winter closure, when snow makes the route impassable.' },
  { q: 'How old is Rudranath temple?', a: 'The current structure is generally dated to around the 8th century, consistent with the broader Panch Kedar temple-building period associated with the region\'s early Shaiva revival.' },
  { q: 'Where does the Rudranath trek start?', a: 'From Sagar village in Chamoli district, reached by road from Gopeshwar. The trek then runs through Pung Bugyal and over the Pitradhar ridge before descending to the temple.' },
];

const PAA = [
  { q: 'Which is the hardest Panch Kedar temple to reach?', a: 'Rudranath, by consensus among trekkers and guides who have done all five — its 20 km trail with a near-4,000 m ridge crossing and no roadhead anywhere close is significantly tougher than Kedarnath\'s well-graded 16 km path or Tungnath\'s short 3.5 km climb.' },
  { q: 'What does Neelkanth Mahadev mean at Rudranath?', a: 'Neelkanth ("blue-throated") refers to the episode where Shiva swallowed poison churned from the cosmic ocean to save creation, turning his throat blue. The face of Shiva enshrined at Rudranath is worshipped under this name, distinct from the separate Neelkanth Mahadev temple near Rishikesh.' },
  { q: 'Can Rudranath be combined with other Panch Kedar temples?', a: 'Yes, on a full Panch Kedar circuit, but not on the same days — Rudranath, Kedarnath and Madhyamaheshwar each require separate multi-day treks from different trailheads, so a complete circuit typically runs 12-16 days including travel between bases.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Panch Kedar Yatra', item: `${SITE.baseUrl}/panch-kedar-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Rudranath', item: `${SITE.baseUrl}/rudranath-temple` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'HinduTemple', name: 'Rudranath Temple', alternateName: ['Neelkanth Mahadev, Rudranath'], description: 'A Panch Kedar shrine at 3,600 m in Chamoli district, Uttarakhand, enshrining Shiva\'s face, reached by a demanding 20 km trek from Sagar village.', url: `${SITE.baseUrl}/rudranath-temple`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Rudranath, Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.3667, longitude: 79.3167, elevation: '3,600 m' }, isAccessibleForFree: true, touristType: ['Pilgrims', 'Trekkers'] };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Rudranath Temple — The Toughest Panch Kedar Trek', description: 'A guide to Rudranath: the Panch Kedar legend, the trek from Sagar village, difficulty, and best season.', mainEntityOfPage: `${SITE.baseUrl}/rudranath-temple`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 480 };

const KEDARS = [
  { n: '1', name: 'Kedarnath', part: 'Hump', alt: '3,583 m', href: '/kedarnath-temple' },
  { n: '2', name: 'Tungnath', part: 'Arms', alt: '3,680 m', href: '/chopta-tungnath' },
  { n: '3', name: 'Rudranath', part: 'Face', alt: '3,600 m', href: '' },
  { n: '4', name: 'Madhyamaheshwar', part: 'Navel', alt: '3,497 m', href: '/madhyamaheshwar-temple' },
  { n: '5', name: 'Kalpeshwar', part: 'Hair', alt: '2,134 m', href: '/kalpeshwar-temple' },
];

export default function Rudranath() {
  const waText = encodeURIComponent('Namaste! I want to plan a Rudranath temple trek as part of Panch Kedar. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Chamoli · 3,600 m · Panch Kedar</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Rudranath — Shiva's Face, the Toughest Panch Kedar</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>A 20 km trek through forest and alpine bugyal to the temple of Neelkanth Mahadev — the most demanding of the five Panch Kedar shrines</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🥾 20 km trek', '⛰️ Pitradhar ridge, ~4,000 m', '🛕 Face of Shiva', '📅 4 days / 3 nights'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-kedar-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Kedar Yatra</Link><span>›</span>
          <span>Rudranath</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '3,600 m'], ['Trailhead', 'Sagar village'], ['Trek distance', '~20 km one-way'], ['Duration', '4D/3N round trip'], ['Difficulty', 'Hard'], ['Season', 'May–Jun, Sep–Oct']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Every guide who has done all five Panch Kedar treks names the same one hardest: Rudranath.</strong> No road comes anywhere near it. The trail runs twenty kilometres through dense oak-rhododendron forest and open alpine meadow, crosses a ridge close to 4,000 m, and drops you at a small stone temple holding what Garhwal tradition calls the face of Shiva.</p>

        <h2 style={h2}>What Is Rudranath Temple?</h2>
        <AnswerBox>
          Rudranath is a Shiva temple at about 3,600 m in Chamoli district, Uttarakhand, one of the five Panch Kedar shrines. It enshrines Shiva's face, worshipped as Neelkanth Mahadev, inside a small stone structure set into a rock face. It is reached by a roughly 20 km trek from Sagar village and is considered the most physically demanding of the five Panch Kedar temples.
        </AnswerBox>

        <h2 style={h2}>The Panch Kedar Legend</h2>
        <p style={p}>After the Kurukshetra war, the Pandavas were troubled by the killing done on both sides — kin against kin — and sought Shiva's forgiveness. Shiva, unwilling to grant an easy audience, is said to have taken the form of a bull and fled into the earth to escape them. When the Pandavas finally cornered him, his body reappeared in five places across the Garhwal Himalayas: the hump at <Link href="/kedarnath-temple">Kedarnath</Link>, the arms at <Link href="/chopta-tungnath">Tungnath</Link>, the navel at <Link href="/madhyamaheshwar-temple">Madhyamaheshwar</Link>, the matted hair at <Link href="/kalpeshwar-temple">Kalpeshwar</Link> — and the face, here at Rudranath, worshipped under the name <strong>Neelkanth Mahadev</strong>, recalling the episode where Shiva swallowed the poison churned from the cosmic ocean to save the universe, and his throat turned blue.</p>
        <p style={p}>The present temple structure is generally dated to around the 8th century, part of the same wave of Shaiva temple-building across Garhwal that produced the current Kedarnath shrine.</p>

        <ExpertNote variant="warning">
          This is not a trek to underestimate because the other four Panch Kedar sound similar. The Pitradhar ridge crossing sits close to 4,000 m with real exposure to weather, there is no permanent settlement between Sagar and the temple, and the standard window is short — mid-May to end-June, then September to mid-October, either side of the monsoon. Go with a local guide, carry proper cold-weather gear even in June, and do not attempt it as your first Himalayan trek.
        </ExpertNote>

        <h2 style={h2}>The Trek Route</h2>
        <p style={p}>The trailhead is <strong>Sagar village</strong>, reached by road from Gopeshwar. From there the trail climbs through forest to <strong>Pung Bugyal</strong>, an open alpine meadow, before the final push over the <strong>Pitradhar ridge</strong> (close to 4,000 m) and down to the temple. A standard itinerary allows four days and three nights for the round trip, with an overnight camp roughly midway.</p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Leg', 'Distance', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Gopeshwar → Sagar village', '~15 km road', 'Drive; last motorable point'],
                ['Sagar → Pung Bugyal', '~10 km trek', 'Day 1, forest and meadow'],
                ['Pung Bugyal → Rudranath (via Pitradhar)', '~10 km trek', 'Day 2, ridge crossing near 4,000 m'],
                ['Return to Sagar', '~20 km trek', 'Days 3–4, retrace the route'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning the Rudranath trek?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We arrange the guide, permits and Gopeshwar–Sagar transfer for the full Panch Kedar circuit.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Rudranath and the Panch Kedar</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['#', 'Temple', "Shiva's part", 'Altitude'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {KEDARS.map((k, i) => (
                <tr key={k.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: k.name === 'Rudranath' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--teal)' }}>{k.n}</td>
                  <td style={{ ...TD, fontWeight: k.name === 'Rudranath' ? 800 : 600, color: 'var(--navy)' }}>{k.href ? <Link href={k.href} style={{ color: 'var(--teal)' }}>{k.name}</Link> : k.name}</td>
                  <td style={TD}>{k.part}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{k.alt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Arranges Panch Kedar treks with vetted local guides for the harder legs like Rudranath. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Panch Kedar trek?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Panch Kedar circuit</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Kedarnath Temple', '/kedarnath-temple'], ['Chopta Tungnath', '/chopta-tungnath'], ['Madhyamaheshwar Temple', '/madhyamaheshwar-temple'], ['Kalpeshwar Temple', '/kalpeshwar-temple'], ['Gopeshwar', '/gopeshwar'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
