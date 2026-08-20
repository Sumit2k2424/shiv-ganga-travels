import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Chamoli Town — On the Alaknanda, Between Karnaprayag and Joshimath | Guide' },
  description: 'Chamoli town, 1,300m on the Alaknanda, lends its name to the district that holds Badrinath, the Panch Kedar and the Valley of Flowers. What it is, and how it fits a Char Dham road route.',
  keywords: ['chamoli town','chamoli uttarakhand','chamoli district','chamoli to badrinath distance','chamoli alaknanda'],
  alternates: { canonical: `${SITE.baseUrl}/chamoli-town` },
  openGraph: { title: 'Chamoli Town — On the Alaknanda, Between Karnaprayag and Joshimath', description: 'The town that names Uttarakhand\'s Char Dham district, on the Alaknanda river.', url: `${SITE.baseUrl}/chamoli-town`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Chamoli town, Alaknanda river' }] },
  twitter: { card: 'summary_large_image', title: 'Chamoli Town — On the Alaknanda', description: 'The town on the Alaknanda that names Uttarakhand\'s Char Dham district.', images: [{ url: '/opengraph-image', alt: 'Chamoli town' }] },
};

const FAQS = [
  { q: 'What is Chamoli town?', a: 'Chamoli is a small town in Uttarakhand, at about 1,300 m on the banks of the Alaknanda river, between Karnaprayag and Pipalkoti on NH-58. It lends its name to Chamoli district, which contains Badrinath, all five Panch Kedar temples, the Panch Badri shrines, the Valley of Flowers, and Hemkund Sahib — making it one of the most pilgrimage-dense districts in India, even though the town itself is modest.' },
  { q: 'Is Chamoli town the same as Chamoli district?', a: 'No — Chamoli town is a specific settlement on NH-58; Chamoli district is the much larger administrative division (whose actual headquarters, confusingly, is Gopeshwar, not Chamoli town itself). The naming is a common source of confusion for first-time pilgrims researching the region.' },
  { q: 'Why is Chamoli district significant for Char Dham pilgrims?', a: 'It contains Badrinath, the fourth and final Char Dham; all five Panch Kedar temples (Kedarnath, Tungnath, Rudranath, Madhyamaheshwar, Kalpeshwar); the Panch Badri circuit; Hemkund Sahib; and the Valley of Flowers National Park — an unusually dense concentration of major Himalayan pilgrimage and trekking sites within one district.' },
  { q: 'How far is Chamoli town from Badrinath and Joshimath?', a: 'About 110 km to Badrinath and roughly 85 km to Joshimath, on the NH-58 road that continues through Pipalkoti.' },
  { q: 'Is there anything to see in Chamoli town itself?', a: 'It is primarily a small market and road-stop town rather than a sightseeing destination — its significance is as a waypoint marker for the wider district it names, and as a fuel/food stop on the Badrinath drive.' },
];

const PAA = [
  { q: 'Why is the district headquarters not in Chamoli town?', a: 'This is a genuine quirk of Uttarakhand district naming — Chamoli district takes its name from the town, but its administrative headquarters was established at Gopeshwar, a separate town further along the route toward Rudranath. It follows a pattern seen elsewhere in the Himalayan states where a district\'s namesake town isn\'t always its seat of government.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Char Dham Route Map', item: `${SITE.baseUrl}/char-dham-yatra-route-map` },
    { '@type': 'ListItem', position: 3, name: 'Chamoli Town', item: `${SITE.baseUrl}/chamoli-town` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'City', name: 'Chamoli', description: 'A town on the Alaknanda river in Uttarakhand, on NH-58 between Karnaprayag and Pipalkoti, namesake of Chamoli district.', url: `${SITE.baseUrl}/chamoli-town`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.4000, longitude: 79.3167, elevation: '1,300 m' } };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Chamoli Town — On the Alaknanda, Between Karnaprayag and Joshimath', description: 'A guide to Chamoli town: its relationship to the district, distances, and its place on the Badrinath road route.', mainEntityOfPage: `${SITE.baseUrl}/chamoli-town`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function ChamoliTown() {
  const waText = encodeURIComponent('Namaste! I am planning a Char Dham trip through Chamoli district. Please share an itinerary.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Alaknanda Valley · 1,300 m · NH-58</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Chamoli Town — Small Town, Enormous District</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>On the Alaknanda between Karnaprayag and Pipalkoti — the modest town that gives its name to the district holding Badrinath, the Panch Kedar and the Valley of Flowers</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🏔️ Namesake of Chamoli district', '🚗 On NH-58', '🛕 Gateway to Badrinath', '🌊 On the Alaknanda'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra-route-map" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Route Map</Link><span>›</span>
          <span>Chamoli Town</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,300 m'], ['River', 'Alaknanda'], ['From Karnaprayag', '~30 km'], ['From Pipalkoti', '17 km'], ['From Badrinath', '~110 km'], ['District HQ', 'Gopeshwar (not here)']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Few towns this small carry a district this loaded.</strong> Chamoli, on the banks of the Alaknanda between Karnaprayag and Pipalkoti, is unremarkable to look at — a road-stop of shops and small hotels. But the district it names holds Badrinath, all five Panch Kedar temples, the Panch Badri circuit, Hemkund Sahib, and the Valley of Flowers National Park. If you are travelling anywhere in that list, you are, technically, going to Chamoli.</p>

        <h2 style={h2}>What Is Chamoli Town?</h2>
        <AnswerBox>
          Chamoli is a town on the Alaknanda river in Uttarakhand, at about 1,300 m, on NH-58 between Karnaprayag and Pipalkoti. It is the namesake of Chamoli district — though the district's administrative headquarters is actually at Gopeshwar, further up the road toward Rudranath.
        </AnswerBox>

        <h2 style={h2}>The District the Town Names</h2>
        <p style={p}>Chamoli district is, by pilgrimage density, one of the most significant in India: <Link href="/badrinath-yatra">Badrinath</Link>, the fourth and final Char Dham; the five <Link href="/panch-kedar-yatra">Panch Kedar</Link> Shiva temples (Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar); the five <Link href="/panch-badri-yatra">Panch Badri</Link> Vishnu shrines; the Sikh pilgrimage site Hemkund Sahib; and the Valley of Flowers, a UNESCO World Heritage site. A single administrative district holding a Char Dham temple, both five-temple Kedar and Badri circuits, and a Sikh gurdwara pilgrimage is genuinely unusual — most districts in the Himalayan belt hold at most one of these categories.</p>

        <ExpertNote variant="insider">
          This is worth knowing purely to avoid confusion when researching: "Chamoli" in trip planning almost always means the district, not the town. If a source says a temple or trek is "in Chamoli," check the actual distance from Chamoli town itself — it could be anywhere from 20 km to well over 100 km away, since the district stretches from the Alaknanda valley floor up to some of Uttarakhand's highest pilgrimage sites.
        </ExpertNote>

        <h2 style={h2}>Distances From Chamoli Town</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['To', 'Distance', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Pipalkoti', '17 km', 'Next stop up the highway'],
                ['Gopeshwar (district HQ)', '~27–30 km', 'Via Pipalkoti'],
                ['Karnaprayag', '~30 km', 'Down the valley'],
                ['Joshimath', '~85 km', 'Via Pipalkoti'],
                ['Badrinath', '~110 km', 'Full onward drive'],
                ['Haridwar', '~215 km', 'Standard road route'],
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
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning a trip anywhere in Chamoli district?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Badrinath, Panch Kedar, Panch Badri, Hemkund Sahib — we route all of it. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has routed pilgrims across every major site in Chamoli district for fifteen yatra seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Char Dham trip through Chamoli?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Around Chamoli district</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Pipalkoti', '/pipalkoti'], ['Gopeshwar', '/gopeshwar'], ['Karnaprayag', '/karnaprayag'], ['Badrinath Yatra', '/badrinath-yatra'], ['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Valley of Flowers Trek', '/blog/valley-of-flowers-trek']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
