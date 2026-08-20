import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Adi Badri Temple — 16 Gupta-Era Shrines Near Karnaprayag | Full Guide' },
  description: 'Adi Badri is a cluster of 16 stone temples near Karnaprayag, the first of the Sapta Badri and the lowest-altitude, open-all-year member of the Panch Badri circuit.',
  keywords: ['adi badri temple','adi badri karnaprayag','adi badri chamoli','sapta badri','panch badri adi badri','adi badri history','adi badri gupta era temples'],
  alternates: { canonical: `${SITE.baseUrl}/adi-badri-temple` },
  openGraph: {
    title: 'Adi Badri Temple — 16 Gupta-Era Shrines Near Karnaprayag',
    description: 'A cluster of 16 stone temples near Karnaprayag, the oldest and lowest of the Panch Badri, open year-round.',
    url: `${SITE.baseUrl}/adi-badri-temple`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Adi Badri Temple complex, Chamoli' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adi Badri Temple — 16 Gupta-Era Shrines Near Karnaprayag',
    description: 'The oldest and lowest of the Panch Badri, near Karnaprayag, open year-round.',
    images: [{ url: '/opengraph-image', alt: 'Adi Badri Temple complex' }],
  },
};

const FAQS = [
  { q: 'What is Adi Badri temple?', a: 'Adi Badri is a cluster of 16 small stone shrines to Lord Vishnu near Chamoli, Uttarakhand, 17 km from Karnaprayag on the Karnaprayag–Ranikhet road. It is the first (adi) of the Sapta Badri — the seven Badri shrines — and one of the five that make up the Panch Badri circuit. Historians date the temples to the late Gupta period, roughly the 5th to 8th century CE, which makes them older than the temple structure now standing at Badrinath itself.' },
  { q: 'Why is it called Adi Badri if Badrinath is the main shrine?', a: 'Adi means "first" or "original". Tradition holds that Adi Shankaracharya established this complex — and the other Sapta Badri shrines — in the 8th century as accessible alternatives to the high-altitude main shrine, and that in centuries when snow or unrest blocked the road to Badrinath, pilgrims worshipped Vishnu here instead. Whether Shankaracharya personally built all sixteen temples is debated by historians, but the Gupta-era stonework is not: it predates the current Badrinath structure by several centuries.' },
  { q: 'How many temples are at Adi Badri?', a: 'Sixteen small shrines remain in the complex, of which seven are attributed directly to the Gupta period. The central and largest is the Adi Narayan temple, housing a black stone image of Vishnu. The others are grouped around it in the same curvilinear north-Indian shikhara style, weathered but structurally intact.' },
  { q: 'How far is Adi Badri from Karnaprayag and Haridwar?', a: 'About 17–18 km from Karnaprayag on the road toward Ranikhet, roughly an hour\'s drive. From Haridwar it is around 220 km via Rishikesh, Devprayag, Rudraprayag and Karnaprayag — a 7–8 hour drive on the Char Dham highway.' },
  { q: 'Is Adi Badri open in winter?', a: 'Yes — this is what sets it apart from the other four Panch Badri shrines. Adi Badri sits at only about 1,000 m, well below the snow line that closes Badrinath, Yogdhyan Badri and Bhavishya Badri each winter. It is open and accessible year-round, which makes it the natural winter-season Badri pilgrimage.' },
  { q: 'Is Adi Badri on the main Char Dham route?', a: 'No. It is a detour off the main Rishikesh–Badrinath highway, reached via a side road from Karnaprayag rather than from a stop directly on NH-7. Most Char Dham operators skip it because it adds a half-day; it is usually visited as a dedicated Panch Badri or Sapta Badri trip, or added deliberately for pilgrims completing the full circuit.' },
  { q: 'What deity is worshipped at Adi Badri?', a: 'Lord Vishnu, as at every Badri shrine, in the central Adi Narayan temple. The complex is Vaishnavite — built to spread and anchor Vishnu worship in a district otherwise dominated by Shaiva pilgrimage sites like the nearby Panch Kedar.' },
];

const PAA = [
  { q: 'Is Adi Badri worth visiting?', a: 'If you have any interest in temple architecture or the history behind the Char Dham system, yes — it is one of the few genuinely old stone structures on the entire Garhwal pilgrim circuit, most of which was rebuilt after earthquakes and floods over the centuries. If you are only completing the standard four-dham circuit, it is an optional detour rather than a required stop.' },
  { q: 'What is the difference between Sapta Badri and Panch Badri?', a: 'Sapta Badri lists seven Badri shrines; Panch Badri, the more commonly followed pilgrimage circuit, covers five of them — Badrinath, Yogdhyan Badri, Bhavishya Badri, Vridh Badri and Adi Badri. The remaining two Sapta Badri sites (Dhyan Badri and Bridha Badri variants named in some older texts) are rarely included in modern itineraries.' },
  { q: 'Who built the Adi Badri temples?', a: 'The consensus among historians is that seven of the sixteen shrines date to the Gupta period, built by rulers or patrons promoting Vaishnavism in the 5th to 8th centuries. Local tradition credits Adi Shankaracharya with consolidating and popularising the site in the 8th century as part of his broader project of establishing the Char Dham and Sapta Badri system.' },
  { q: 'Can Adi Badri be combined with a Char Dham trip?', a: 'Yes, if you route through Karnaprayag with time to spare — the detour is roughly 2 hours round trip from the highway. It fits best on the return leg of a Char Dham yatra, or as a stop on a dedicated Panch Badri itinerary that already routes through Chamoli district at a relaxed pace.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Panch Badri Yatra', item: `${SITE.baseUrl}/panch-badri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Adi Badri', item: `${SITE.baseUrl}/adi-badri-temple` },
  ]};
  const place = {
    '@context': 'https://schema.org', '@type': 'HinduTemple',
    name: 'Adi Badri Temple Complex', alternateName: ['Adi Badri', 'Adi Narayan Temple'],
    description: 'A cluster of 16 stone shrines to Vishnu near Karnaprayag, Chamoli district, Uttarakhand, dated to the Gupta period (5th–8th century CE). First of the Sapta Badri and one of the Panch Badri.',
    url: `${SITE.baseUrl}/adi-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Adi Badri, Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.1717, longitude: 79.3417, elevation: '1,000 m' },
    isAccessibleForFree: true, touristType: ['Pilgrims', 'History enthusiasts', 'Architecture enthusiasts'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Adi Badri Temple — 16 Gupta-Era Shrines Near Karnaprayag',
    description: 'A guide to Adi Badri: the sixteen-temple complex near Karnaprayag, its Gupta-era history, how it fits into the Panch Badri circuit, and how to reach it.',
    mainEntityOfPage: `${SITE.baseUrl}/adi-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO,
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
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 480 };

const BADRIS = [
  { n: '1', name: 'Badrinath (Vishal Badri)', alt: '3,133 m', open: 'Apr–Nov', near: 'The main shrine, principal Char Dham', href: '/badrinath-temple' },
  { n: '2', name: 'Yogdhyan Badri', alt: '1,920 m', open: 'Year-round', near: 'Pandukheshwar, winter seat of the deity', href: '/yogdhyan-badri-temple' },
  { n: '3', name: 'Bhavishya Badri', alt: '2,744 m', open: 'May–Nov', near: 'Subhain, 6 km trek from Tapovan', href: '/bhavishya-badri-temple' },
  { n: '4', name: 'Vridh Badri', alt: '1,380 m', open: 'Year-round', near: 'Animath, 7 km from Joshimath', href: '/vridh-badri-temple' },
  { n: '5', name: 'Adi Badri', alt: '1,000 m', open: 'Year-round', near: 'You are here', href: '' },
];

export default function AdiBadri() {
  const waText = encodeURIComponent('Namaste! I would like a Panch Badri / Sapta Badri itinerary that includes Adi Badri. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Chamoli · 1,000 m · Sapta Badri #1
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Adi Badri — The Oldest of the Badri Shrines
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Sixteen Gupta-era stone temples near Karnaprayag · open year-round · the first of the Panch Badri circuit
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛕 16 stone shrines', '📜 5th–8th century', '🚗 17 km from Karnaprayag', '❄️ Open all winter'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-badri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Badri Yatra</Link><span>›</span>
          <span>Adi Badri</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,000 m'], ['District', 'Chamoli'], ['From Karnaprayag', '17–18 km'], ['From Haridwar', '~220 km'], ['Era', 'Gupta, 5th–8th c.'], ['Open', 'Year-round']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Adi Badri is the oldest stonework on the entire Char Dham circuit</strong> — older than the temple structure standing at Badrinath itself. Sixteen small shrines sit clustered on a hillside 17 km off the main highway near Karnaprayag, built in a style historians trace to the Gupta period, and almost every Char Dham operator drives straight past the turning. It is the first of the Panch Badri and the only one, along with Vridh Badri and Yogdhyan Badri, that never closes for winter.</p>

        <h2 style={h2}>What Is Adi Badri?</h2>
        <AnswerBox>
          Adi Badri is a complex of 16 stone temples to Lord Vishnu near Karnaprayag in Chamoli district, Uttarakhand, at about 1,000 m elevation. Seven of the shrines are dated to the Gupta period (5th–8th century CE). It is the first of the Sapta Badri and one of the five shrines of the Panch Badri circuit, and unlike the higher Badri temples it stays open year-round.
        </AnswerBox>
        <p style={p}>The central and largest structure is the <strong>Adi Narayan temple</strong>, housing a black stone image of Vishnu roughly a metre tall. The smaller shrines around it, some little more than a single stone cell with a curved shikhara roof, are arranged in loose rows on the hillside — weathered by fourteen centuries of Himalayan winters but structurally sound, which is itself notable in a region where earthquakes and floods have destroyed and rebuilt most older temples multiple times.</p>

        <h2 style={h2}>Why "Adi" — the First Badri</h2>
        <p style={p}><em>Adi</em> means first, or original. Tradition credits <strong>Adi Shankaracharya</strong>, the 8th-century philosopher who is said to have established the Char Dham pilgrimage system itself, with consolidating this site as part of a wider network of Badri shrines — accessible lower-altitude alternatives for the seasons or centuries when the road to the main Badrinath shrine, far up the Alaknanda valley, was blocked by snow, or simply unreachable for pilgrims who could not manage the climb.</p>
        <p style={p}>Whether Shankaracharya personally founded all sixteen temples is a question historians treat cautiously — the architectural dating to the Gupta period predates him by two to three centuries. What the two claims agree on is the function: Adi Badri was never meant to compete with Badrinath, but to extend it, giving Vishnu worship a foothold lower in the valley that the high shrine could never offer in winter.</p>

        <ExpertNote variant="insider">
          Go in the late afternoon if you can. The temples face roughly east-southeast and the low sun catches the shikhara carving at an angle that midday light flattens completely — you can actually read the weathered figures on the stone rather than just see that they're there. There's no ticket, no queue, and most days you'll have the whole hillside to yourself.
        </ExpertNote>

        <h2 style={h2}>How to Reach Adi Badri</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Karnaprayag', '17–18 km', '~1 hr', 'Turn off NH-58 onto the Ranikhet road'],
                ['Rudraprayag', '55 km', '2 hrs', 'Via Karnaprayag'],
                ['Haridwar', '~220 km', '7–8 hrs', 'Via Rishikesh, Devprayag, Rudraprayag, Karnaprayag'],
                ['Rishikesh', '195 km', '6–7 hrs', 'Standard Char Dham departure road'],
                ['Ranikhet', '65 km', '2.5 hrs', 'Onward road for a Kumaon–Garhwal loop'],
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
        <p style={p}>There is no railway station or airport near Adi Badri. The nearest railhead and airport are both at Rishikesh/Dehradun. The site sits off the main Char Dham highway, so it is not a natural stop unless your route deliberately passes through Karnaprayag with time to spare — it works best as a half-day detour on the return leg, or as the anchor of a dedicated <Link href="/panch-badri-yatra">Panch Badri</Link> itinerary.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want a Panch Badri itinerary that includes Adi Badri?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We route the full five-shrine circuit, or add Adi Badri to a Char Dham return leg. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Adi Badri and the Other Four Panch Badri</h2>
        <p style={p}>The Panch Badri circuit runs from the highest and busiest shrine down to the lowest and quietest. Adi Badri, at the bottom of that ladder in both altitude and footfall, is where most pilgrims finish the circuit rather than start it — the natural closing stop after Badrinath, Yogdhyan Badri, Bhavishya Badri and Vridh Badri.</p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['#', 'Shrine', 'Altitude', 'Open', 'Where it sits'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {BADRIS.map((b, i) => (
                <tr key={b.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: b.name === 'Adi Badri' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--teal)' }}>{b.n}</td>
                  <td style={{ ...TD, fontWeight: b.name === 'Adi Badri' ? 800 : 600, color: 'var(--navy)' }}>{b.href ? <Link href={b.href} style={{ color: 'var(--teal)' }}>{b.name}</Link> : b.name}</td>
                  <td style={TD}>{b.alt}</td>
                  <td style={TD}>{b.open}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{b.near}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>Because Adi Badri sits at only 1,000 m, it is comfortable in every month of the year — the one genuine advantage it has over the rest of the circuit. <strong>October to March</strong> gives the clearest views and the fewest visitors. <strong>April to June</strong> is warm but manageable. Avoid nothing in particular except the height of the monsoon, July–August, when the Karnaprayag–Ranikhet road is more prone to landslip like every other hill road in the district.</p>

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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Routes the full Sapta/Panch Badri circuit for pilgrims wanting more than the standard four-dham trip. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Panch Badri or Char Dham trip?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Panch Badri circuit</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Badri Yatra', '/panch-badri-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Yogdhyan Badri', '/yogdhyan-badri-temple'], ['Bhavishya Badri', '/bhavishya-badri-temple'], ['Vridh Badri', '/vridh-badri-temple'], ['Tapt Kund', '/tapt-kund'], ['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Karnaprayag', '/karnaprayag'], ['Char Dham Yatra', '/char-dham-yatra'], ['Char Dham Route Map', '/char-dham-yatra-route-map']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
