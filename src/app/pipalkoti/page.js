import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Pipalkoti — The Overnight Halt Between Rudraprayag and Badrinath | Guide' },
  description: 'Pipalkoti, 1,260m on NH-58, sits between Chamoli and Joshimath on the Badrinath road. Why it works as a break-of-journey halt, what\'s nearby, and how it fits a Char Dham itinerary.',
  keywords: ['pipalkoti','pipalkoti uttarakhand','pipalkoti to badrinath','pipalkoti to joshimath distance','pipalkoti chamoli','pipalkoti char dham route'],
  alternates: { canonical: `${SITE.baseUrl}/pipalkoti` },
  openGraph: { title: 'Pipalkoti — The Overnight Halt Between Rudraprayag and Badrinath', description: 'A quiet Char Dham road-route town on NH-58, between Chamoli and Joshimath.', url: `${SITE.baseUrl}/pipalkoti`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Pipalkoti, Chamoli district' }] },
  twitter: { card: 'summary_large_image', title: 'Pipalkoti — Char Dham Road Halt', description: 'A Badrinath road-route town, 1,260m, between Chamoli and Joshimath.', images: [{ url: '/opengraph-image', alt: 'Pipalkoti' }] },
};

const FAQS = [
  { q: 'What is Pipalkoti known for?', a: 'Pipalkoti is a small town in Chamoli district, Uttarakhand, at about 1,260 m on NH-58, 17 km beyond Chamoli town on the road to Joshimath and Badrinath. It is not a pilgrimage destination in its own right — it functions as a practical overnight halt on the second-longest leg of the Badrinath road journey, breaking up the long stretch between Rudraprayag and Joshimath.' },
  { q: 'How far is Pipalkoti from Badrinath and Joshimath?', a: 'About 65–70 km to Joshimath and roughly 95 km to Badrinath itself. From Pipalkoti, Joshimath is a 2.5–3 hour drive and Badrinath a further hour beyond that, which is why pilgrims overnighting here typically reach Badrinath by late morning the next day.' },
  { q: 'Why do Char Dham operators stop overnight in Pipalkoti?', a: 'Because Haridwar to Badrinath in one day is a genuinely long, tiring drive on mountain roads — roughly 320 km with significant elevation gain. Breaking the journey at Pipalkoti (or, less commonly, Chamoli or Joshimath) turns a single exhausting day into two manageable ones, and Pipalkoti has more hotel capacity than the smaller villages further up the valley.' },
  { q: 'What is there to see in Pipalkoti itself?', a: 'Little beyond the town itself — it is a functional stop, not a sightseeing destination. Its value is logistical: reasonable hotels, restaurants, and a position that splits the Rudraprayag–Joshimath stretch roughly in half.' },
  { q: 'Is Pipalkoti safe from landslides?', a: 'Like most of the NH-58 corridor through Chamoli district, the stretch around Pipalkoti has seen landslide activity in the monsoon months, and the town itself sits in a district that has experienced serious geological events historically. It is a well-established halt with permanent infrastructure, not an unstable settlement, but as with the whole Char Dham road network, road status should be checked before travelling July–August.' },
];

const PAA = [
  { q: 'Should I stay overnight in Pipalkoti or push on to Joshimath?', a: 'For most pilgrims, Pipalkoti works better — it has more established hotel options than the smaller stretch approaching Joshimath, and stopping here rather than pushing on in fading light is the safer choice on a mountain road with landslide-prone sections.' },
  { q: 'Is Pipalkoti on the main Char Dham highway?', a: 'Yes — it sits directly on NH-58, the main road route to Badrinath, not on a side road or detour. Every vehicle travelling by road to Badrinath from Haridwar or Rishikesh passes through it.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Char Dham Route Map', item: `${SITE.baseUrl}/char-dham-yatra-route-map` },
    { '@type': 'ListItem', position: 3, name: 'Pipalkoti', item: `${SITE.baseUrl}/pipalkoti` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'City', name: 'Pipalkoti', description: 'A town on NH-58 in Chamoli district, Uttarakhand, functioning as an overnight halt on the road to Badrinath.', url: `${SITE.baseUrl}/pipalkoti`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Pipalkoti', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.4667, longitude: 79.4333, elevation: '1,260 m' } };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Pipalkoti — The Overnight Halt Between Rudraprayag and Badrinath', description: 'A guide to Pipalkoti as a Char Dham road-route halt: distances, why to stop here, and safety notes.', mainEntityOfPage: `${SITE.baseUrl}/pipalkoti`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function Pipalkoti() {
  const waText = encodeURIComponent('Namaste! I want a Badrinath itinerary with an overnight halt in Pipalkoti. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Chamoli District · 1,260 m · NH-58</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Pipalkoti — The Sensible Break in a Long Drive</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>17 km beyond Chamoli, ~70 km short of Joshimath — the town that turns one exhausting day to Badrinath into two comfortable ones</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛣️ On NH-58', '🌙 Overnight halt', '🚗 ~70 km to Joshimath', '🏔️ Chamoli district'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra-route-map" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Route Map</Link><span>›</span>
          <span>Pipalkoti</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,260 m'], ['District', 'Chamoli'], ['From Chamoli town', '17 km'], ['From Joshimath', '~65–70 km'], ['From Badrinath', '~95 km'], ['Highway', 'NH-58']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Pipalkoti exists on the map, for most travellers, as a decision rather than a destination.</strong> Haridwar to Badrinath by road is roughly 320 km of mountain driving, and doing it in one day is punishing — long hours, thin air by the end, and a final approach in fading light that nobody actually wants. Pipalkoti, sitting almost exactly at the point where that drive stops making sense as a single push, is where the sensible operators stop for the night.</p>

        <h2 style={h2}>What Is Pipalkoti?</h2>
        <AnswerBox>
          Pipalkoti is a town on NH-58 in Chamoli district, Uttarakhand, at about 1,260 m elevation, 17 km beyond Chamoli town on the road to Joshimath and Badrinath. It functions as an overnight halt for pilgrims travelling by road, splitting the long Rishikesh-to-Badrinath drive into two manageable days.
        </AnswerBox>

        <h2 style={h2}>Why Operators Stop Here</h2>
        <p style={p}>The math is straightforward. A same-day Haridwar-to-Badrinath drive covers roughly 320 km with continuous elevation gain on a mountain road — realistically 12 to 14 hours behind the wheel, arriving at altitude tired and in the dark more often than not. Splitting the trip at Pipalkoti (roughly the two-thirds mark) means a first day of driving that ends at a reasonable hour, a proper night's rest at a manageable elevation, and a short final push to Joshimath and Badrinath the next morning, arriving fresh in time for darshan.</p>
        <p style={p}>Pipalkoti has more established hotel capacity than the smaller villages further up toward Joshimath, which is the other practical reason it wins out as a halt over pushing on to somewhere closer to the dham itself.</p>

        <ExpertNote variant="insider">
          If your itinerary has you overnighting in Pipalkoti, don't rush the next morning's start. The final stretch from Pipalkoti through Joshimath to Badrinath climbs fast and passes some of the more landslide-prone sections of NH-58 — leaving with the roads fresh rather than in a scramble gives you buffer if there's a temporary closure or convoy delay ahead.
        </ExpertNote>

        <h2 style={h2}>Distances From Pipalkoti</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['To', 'Distance', 'Drive time'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Chamoli town', '17 km', '30 min'],
                ['Joshimath', '~65–70 km', '2.5–3 hrs'],
                ['Badrinath', '~95 km', '3.5–4 hrs'],
                ['Rudraprayag', '~65 km', '2 hrs'],
                ['Haridwar', '~245 km', '8–9 hrs'],
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
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want a Badrinath itinerary that paces the drive properly?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We route the Pipalkoti overnight halt so you reach Badrinath fresh, not exhausted. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>A Note on Road Safety</h2>
        <p style={p}>Chamoli district's NH-58 corridor, including the stretch through Pipalkoti, sees landslide activity during the monsoon and has a documented history of serious geological events. This does not make Pipalkoti itself unsafe — it is an established town with permanent infrastructure — but as with anywhere on the Char Dham road network, avoid travelling this stretch during heavy monsoon rain (July–August) and check <Link href="/char-dham-road-status">current road status</Link> before setting out.</p>

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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has driven the Rudraprayag–Pipalkoti–Joshimath stretch hundreds of times and paces every Badrinath itinerary around a proper overnight break. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a road trip to Badrinath?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Along the Badrinath road</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Badrinath Yatra', '/badrinath-yatra'], ['Karnaprayag', '/karnaprayag'], ['Rudraprayag', '/rudraprayag'], ['Gopeshwar', '/gopeshwar'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Govindghat', '/govindghat'], ['Char Dham Road Status', '/char-dham-road-status']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
