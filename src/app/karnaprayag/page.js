import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Karnaprayag — The Junction About to Get a Railway' },
  description: 'Karnaprayag at 860 m: where the Alaknanda meets the Pindar, the Kumaon road splits, and the Rishikesh rail line will terminate. Temples, route and access.',
  keywords: ['karnaprayag','karnaprayag sangam','alaknanda pindar confluence','karna temple karnaprayag','uma devi temple karnaprayag','rishikesh karnaprayag railway','panch prayag','karnaprayag to badrinath distance','karnaprayag uttarakhand'],
  alternates: { canonical: `${SITE.baseUrl}/karnaprayag` },
  openGraph: {
    title: 'Karnaprayag — The Junction About to Get a Railway',
    description: 'Where the Alaknanda meets the Pindar and the Kumaon road splits off. Karna\'s temple, and the rail line that will change this route entirely.',
    url: `${SITE.baseUrl}/karnaprayag`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Karnaprayag — Alaknanda and Pindar confluence, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karnaprayag — The Junction About to Get a Railway',
    description: 'Alaknanda meets Pindar, the Kumaon road splits, and the railway is coming.',
    images: [{ url: '/opengraph-image', alt: 'Karnaprayag confluence' }],
  },
};

const FAQS = [
  {
    q: 'What is Karnaprayag known for?',
    a: 'Three things. It is the confluence of the Alaknanda and the Pindar, third of the five Panch Prayag. It is named for Karna of the Mahabharata, who is said to have worshipped Surya and performed penance here. And it is the road junction where the route into Kumaon — Gwaldam, Ranikhet, Almora — leaves the Badrinath highway.',
  },
  {
    q: 'Which rivers meet at Karnaprayag?',
    a: 'The Alaknanda, coming down from Badrinath, and the Pindar, which rises at the Pindari glacier in the Kumaon hills. The Pindar arrives from the east after a long run through Bageshwar district. Below the confluence the combined river continues as the Alaknanda — the Pindar loses its name here.',
  },
  {
    q: 'Why is it called Karnaprayag?',
    a: 'After Karna, the Mahabharata warrior born of Kunti and Surya. He is said to have worshipped his father the sun god at this confluence and performed long penance here, receiving the kavach and kundal — the armour and earrings — that made him near-invincible. There is a Karna temple at the site and an Uma Devi temple nearby.',
  },
  {
    q: 'How far is Karnaprayag from Rishikesh and Haridwar?',
    a: 'About 172 km from Rishikesh via Devprayag, Srinagar and Rudraprayag, and roughly 196 km from Haridwar. Allow six to seven hours from either. It is on the main Badrinath highway, so the road is reasonable by Garhwal standards.',
  },
  {
    q: 'Is Karnaprayag on the way to Badrinath?',
    a: 'Yes, directly. Every road route to Badrinath from Haridwar or Rishikesh passes through it — Karnaprayag, then Chamoli, Pipalkoti, Joshimath and up. Badrinath is about 130 km further on, four to five hours.',
  },
  {
    q: 'What is the Rishikesh–Karnaprayag railway?',
    a: 'A 125 km broad-gauge line under construction that will connect Rishikesh to Karnaprayag through 16 tunnels and 12 stations, with Karnaprayag as the terminus. As of July 2026, 101 of the 104 km of mainline tunnelling was complete, including India\'s longest transport tunnel at 14.5 km. The original target was December 2026; the revised completion date is December 2028.',
  },
  {
    q: 'Will the railway change the Char Dham Yatra?',
    a: 'Substantially, when it opens. It removes the hardest and longest part of the road journey — the six to seven hours from Rishikesh — and puts pilgrims within a few hours of both Badrinath and the Kedarnath roadhead. Expect far higher volumes and a different kind of visitor. If you have been meaning to see this stretch of Garhwal while it is still quiet, the window is closing.',
  },
  {
    q: 'Which Panch Prayag is Karnaprayag?',
    a: 'The third going downstream: Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag. It sits between Nandprayag above and Rudraprayag below, and on a full Char Dham circuit you pass all five.',
  },
  {
    q: 'Is Karnaprayag worth stopping at?',
    a: 'For half an hour, yes — the sangam and the Karna temple. It is a working market town rather than a destination, and most people pass through on the way to Badrinath. Its real value to a traveller is as a junction: this is where you decide between continuing up the Alaknanda or turning east into Kumaon.',
  },
  {
    q: 'Can you reach Nainital and Almora from Karnaprayag?',
    a: 'Yes, and this is the useful thing about the town. The road east through Gwaldam leads to Ranikhet, Almora and eventually Nainital, which is how you join Garhwal and Kumaon in one trip without going back down to the plains. It is a long mountain drive but a beautiful one.',
  },
];

const PAA = [
  { q: 'What is the Pindar river?', a: 'A tributary of the Alaknanda rising at the Pindari glacier in the Kumaon Himalaya, running west through Bageshwar district before joining at Karnaprayag. The Pindari glacier trek, which follows it up, is one of the classic Kumaon treks.' },
  { q: 'How far is Karnaprayag from Rudraprayag?', a: 'About 33 km down the Alaknanda, roughly an hour. Rudraprayag is the next prayag downstream and the junction where the Kedarnath road splits off.' },
  { q: 'Is there accommodation at Karnaprayag?', a: 'Basic hotels and a GMVN rest house, adequate for a night but not a reason to stay. Most Char Dham itineraries push on to Pipalkoti or Joshimath, which are better positioned for an early Badrinath darshan.' },
  { q: 'What is the best time to visit Karnaprayag?', a: 'April to June and September to November. At 860 m it is comfortable most of the year, but the point of coming is usually to pass through on the way somewhere higher, so the yatra season governs. Avoid the July–August monsoon, when this stretch of highway is landslide-prone.' },
  { q: 'Where exactly does the Kumaon road leave from?', a: 'At Karnaprayag itself. The Badrinath highway continues north up the Alaknanda towards Chamoli and Joshimath; the Kumaon road turns east and climbs towards Gwaldam, then on to Ranikhet, Almora and Kausani. It is the cleanest Garhwal-to-Kumaon crossing on the map.' },
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
      { '@type': 'ListItem', position: 2, name: 'Panch Prayag', item: `${SITE.baseUrl}/panch-prayag` },
      { '@type': 'ListItem', position: 3, name: 'Karnaprayag', item: `${SITE.baseUrl}/karnaprayag` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Karnaprayag Sangam',
    alternateName: ['Karnaprayag', 'Alaknanda–Pindar Confluence'],
    description: 'The confluence of the Alaknanda and Pindar rivers at 860 m in Chamoli district, Uttarakhand — third of the Panch Prayag, and the junction where the Kumaon road leaves the Badrinath highway.',
    url: `${SITE.baseUrl}/karnaprayag`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Karnaprayag', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.2597, longitude: 79.2153, elevation: '860 m' },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Road travellers'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Karnaprayag — The Junction About to Get a Railway',
    description: 'A guide to the Alaknanda–Pindar confluence: Karna\'s temple, the Kumaon road junction, and the Rishikesh–Karnaprayag rail line under construction.',
    mainEntityOfPage: `${SITE.baseUrl}/karnaprayag`,
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

export default function Karnaprayag() {
  const waText = encodeURIComponent('Namaste! I want a Char Dham or Garhwal-Kumaon itinerary through Karnaprayag. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Panch Prayag · 3 of 5 · Chamoli district
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Karnaprayag — The Junction About to Get a Railway
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Alaknanda meets Pindar · where the Kumaon road leaves the Badrinath highway · and the rail terminus that will change all of it
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🌊 Alaknanda + Pindar', '🛕 Karna\'s penance', '🛣️ Gateway to Kumaon', '🚉 Rail terminus, 2028'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-prayag" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Prayag</Link><span>›</span>
          <span>Karnaprayag</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Elevation', '860 m'], ['District', 'Chamoli'], ['From Rishikesh', '172 km'], ['To Badrinath', '~130 km'], ['To Rudraprayag', '33 km'], ['Rail terminus', 'Dec 2028 (est.)']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Karnaprayag is a junction town that is about to stop being a junction town.</strong> The Alaknanda meets the Pindar here, the road into Kumaon peels off east, and in a few years a railway from Rishikesh will terminate a few hundred metres from the confluence. Right now it is a place most pilgrims pass through without stopping. That will not be true for much longer.
        </p>

        <h2 style={h2}>What Is Karnaprayag?</h2>
        <AnswerBox>
          Karnaprayag is a town at 860 m in Chamoli district, Uttarakhand, where the Alaknanda and
          Pindar rivers meet &mdash; the third of the five Panch Prayag. It sits 172 km from Rishikesh on
          the Badrinath highway, and is the junction where the road into Kumaon splits off.
        </AnswerBox>
        <p style={p}>
          The <strong>Pindar</strong> rises at the Pindari glacier in the Kumaon Himalaya and runs west through Bageshwar district before arriving here. The <strong>Alaknanda</strong> comes down from <Link href="/badrinath-temple">Badrinath</Link>. Below the confluence the combined river keeps the Alaknanda name and carries on towards <Link href="/rudraprayag">Rudraprayag</Link>. The Pindar simply ends.
        </p>

        <h2 style={h2}>Karna&rsquo;s Confluence</h2>
        <p style={p}>
          The name is one of the more direct in Garhwal. <strong>Karna</strong> &mdash; son of Kunti and Surya, abandoned at birth, raised by a charioteer, and the most sympathetic figure in the Mahabharata &mdash; is said to have worshipped his father the sun god at this confluence and performed penance here for years. What he received for it was the <em>kavach</em> and <em>kundal</em>, the golden armour and earrings fused to his body, which made him almost impossible to kill.
        </p>
        <p style={p}>
          There is a small Karna temple at the sangam and an Uma Devi temple in the town. Neither is architecturally remarkable. The reason to stand there for a few minutes is that this is one of the few places on the Char Dham road associated with a figure people actually have feelings about &mdash; Karna is the character everyone argues over, and this is his spot.
        </p>

        <h2 style={h2}>The Railway That Changes Everything</h2>
        <p style={p}>
          This is the most consequential thing happening anywhere on the Char Dham route, and almost nobody planning a yatra knows about it.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['', 'Rishikesh–Karnaprayag line'].map((x, i) => <th key={i} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Length', '125 km, Rishikesh to Karnaprayag'],
                ['Structures', '16 tunnels, 12 stations'],
                ['Tunnelling done', '101 of 104 km of mainline tunnel, as of July 2026'],
                ['Notable', 'India\'s longest transport tunnel, 14.5 km, completed'],
                ['Original target', 'December 2026'],
                ['Revised target', 'December 2028'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          What it removes is the worst part of the journey. Right now the run from Rishikesh to Karnaprayag is six to seven hours of mountain road, and it is the stretch that exhausts people before the yatra has properly begun. A train covering it puts pilgrims within a few hours of both Badrinath and the Kedarnath roadhead, arriving rested.
        </p>

        <ExpertNote variant="insider">
          Two things follow from this, and I would rather say them plainly. The first is that volumes on this route are going to rise sharply, and the infrastructure &mdash; hotels, parking, the Sonprayag shuttle, the trail itself &mdash; is already at its limit in June. The second is more personal: the Alaknanda valley as it exists now, with its slow road and its half-empty market towns, has perhaps a couple of seasons left. If seeing that version matters to you, do not wait for the train.
        </ExpertNote>

        <h2 style={h2}>The Kumaon Turn</h2>
        <p style={p}>
          The practical reason to know Karnaprayag is that this is where Garhwal and Kumaon meet on the map. The Badrinath highway carries on north up the Alaknanda; the other road turns east and climbs towards <strong>Gwaldam</strong>, then on to Ranikhet, Almora and Kausani.
        </p>
        <p style={p}>
          That matters if you want both halves of Uttarakhand in one trip. Without this road, joining <Link href="/char-dham-yatra">Char Dham</Link> to <Link href="/kainchi-dham">Kainchi Dham</Link> or <Link href="/chitai-golu-devta-temple">Almora</Link> means dropping all the way back to the plains and coming up again. Through Karnaprayag and Gwaldam it is a long but continuous mountain drive. It is not a route we would put a tired pilgrim on at the end of a yatra, but for anyone with time it is one of the best drives in the state.
        </p>

        <h2 style={h2}>How to Reach Karnaprayag</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Rishikesh', '172 km', '6 hrs', 'Via Devprayag, Srinagar and Rudraprayag'],
                ['Haridwar', '~196 km', '6–7 hrs', 'The standard Char Dham departure'],
                ['Rudraprayag', '33 km', '1 hr', 'The next prayag downstream'],
                ['Nandprayag', '21 km', '45 min', 'The next prayag upstream'],
                ['Joshimath', '~110 km', '3.5–4 hrs', 'On towards Badrinath'],
                ['Badrinath', '~130 km', '4–5 hrs', 'Via Chamoli, Pipalkoti and Joshimath'],
                ['Gwaldam', '~55 km', '2 hrs', 'The Kumaon turn'],
                ['Jolly Grant airport', '212 km', '7 hrs', 'Nearest airport'],
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
          Until the line opens, the nearest railheads are Rishikesh and Haridwar. Every bus on the Badrinath route stops here. Accommodation is basic &mdash; a few small hotels and a GMVN rest house &mdash; and most Char Dham itineraries push on to Pipalkoti or Joshimath, which sit better for an early Badrinath darshan.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want Garhwal and Kumaon in one trip?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>The Gwaldam crossing makes it possible without dropping to the plains. Tell us how many days you have.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has driven the Karnaprayag stretch through fifteen seasons and has watched the tunnelling work go in alongside it. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a route through the Alaknanda valley?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Along the Alaknanda</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['All Five Panch Prayag', '/panch-prayag'], ['Devprayag', '/devprayag'], ['Rudraprayag', '/rudraprayag'], ['Ukhimath', '/ukhimath'], ['Gaurikund', '/gaurikund'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Badrinath Yatra', '/badrinath-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Kainchi Dham', '/kainchi-dham'], ['Chitai Golu Devta', '/chitai-golu-devta-temple'], ['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Road Status', '/char-dham-road-status'], ['Uttarakhand Packages', '/uttarakhand-tour-packages']].map(([l, href]) => (
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
