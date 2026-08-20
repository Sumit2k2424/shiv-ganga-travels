import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Augustmuni — Sage Agastya\'s Town on the Kedarnath Road | Full Guide' },
  description: 'Augustmuni, on the Mandakini 18 km from Rudraprayag, is named for the sage Agastya and home to the Agasteshwar Mahadev temple. History, legend, and its place on the road to Kedarnath.',
  keywords: ['augustmuni','agastyamuni','augustmuni rudraprayag','agasteshwar mahadev temple','augustmuni to kedarnath distance','sage agastya uttarakhand'],
  alternates: { canonical: `${SITE.baseUrl}/augustmuni` },
  openGraph: { title: 'Augustmuni — Sage Agastya\'s Town on the Kedarnath Road', description: 'Named for the sage Agastya, home to the Agasteshwar Mahadev temple, on the Mandakini river.', url: `${SITE.baseUrl}/augustmuni`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Augustmuni, Mandakini valley' }] },
  twitter: { card: 'summary_large_image', title: 'Augustmuni — Sage Agastya\'s Town', description: 'On the road to Kedarnath, named for the sage Agastya.', images: [{ url: '/opengraph-image', alt: 'Augustmuni' }] },
};

const FAQS = [
  { q: 'What is Augustmuni?', a: 'Augustmuni (also spelt Agastyamuni) is a town on the Mandakini river in Rudraprayag district, Uttarakhand, about 18 km from Rudraprayag on the road to Kedarnath. It is named after the sage Agastya, one of the Saptarishi (seven great sages) of Hindu tradition, who is believed to have meditated here.' },
  { q: 'What is the legend of sage Agastya at this town?', a: 'Tradition holds that Sage Agastya meditated at this spot for a year performing austerities, and that the deity of the Vindhya mountains, pleased with his devotion, appeared before him and granted a boon. The town takes his name in memory of that penance, and the local temple, Agasteshwar Mahadev, is dedicated to Shiva in association with the sage.' },
  { q: 'What is the Agasteshwar Mahadev temple?', a: 'A Shiva temple in Augustmuni of genuine archaeological interest — its stonework carries carved figures of Hindu deities, and the current structure, rebuilt in South Indian architectural style after earlier floods damaged the original, stands out from the typical North Indian nagara-style temples found elsewhere on the Kedarnath road.' },
  { q: 'How far is Augustmuni from Rudraprayag and Kedarnath?', a: 'About 18 km from Rudraprayag and roughly 55–60 km from Gaurikund, the trailhead for the Kedarnath trek, on the road that continues via Guptkashi.' },
  { q: 'Is Augustmuni on the main Char Dham route to Kedarnath?', a: 'Yes — it sits directly on the road between Rudraprayag and Guptkashi, which every pilgrim travelling by road to Kedarnath passes through, whether or not they stop.' },
];

const PAA = [
  { q: 'Who was Sage Agastya?', a: 'One of the Saptarishi, the seven great sages of Hindu tradition — a towering figure in Vedic and later Puranic literature, credited with composing hymns, spreading Vedic culture to South India, and numerous feats of asceticism across multiple regional traditions. His association with this specific Garhwal town is a local strand of a much wider pan-Indian legend.' },
  { q: 'Why does the Agasteshwar temple look different from other Garhwal temples?', a: 'Its current structure was rebuilt in South Indian architectural style after floods damaged earlier versions of the temple — a deliberate architectural nod, most likely, to Agastya\'s strong association with South Indian tradition, distinct from the North Indian nagara-style temples typical of the rest of the Kedarnath valley.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Char Dham Route Map', item: `${SITE.baseUrl}/char-dham-yatra-route-map` },
    { '@type': 'ListItem', position: 3, name: 'Augustmuni', item: `${SITE.baseUrl}/augustmuni` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'City', name: 'Augustmuni', alternateName: ['Agastyamuni'], description: 'A town on the Mandakini river in Rudraprayag district, Uttarakhand, named for the sage Agastya, home to the Agasteshwar Mahadev temple, on the road to Kedarnath.', url: `${SITE.baseUrl}/augustmuni`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Augustmuni', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.4333, longitude: 79.0000, elevation: '900 m' } };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Augustmuni — Sage Agastya\'s Town on the Kedarnath Road', description: 'A guide to Augustmuni: the Agastya legend, the Agasteshwar Mahadev temple, and its place on the road to Kedarnath.', mainEntityOfPage: `${SITE.baseUrl}/augustmuni`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function Augustmuni() {
  const waText = encodeURIComponent('Namaste! I want a Kedarnath itinerary with a stop at Augustmuni / Agasteshwar Mahadev temple. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Rudraprayag District · On the Mandakini</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Augustmuni — Named for a Sage, Not a Month</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>18 km from Rudraprayag on the Mandakini, home to the Agasteshwar Mahadev temple and the legend of Sage Agastya's penance</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🧘 Sage Agastya legend', '🛕 Agasteshwar Mahadev', '🌊 On the Mandakini', '🛣️ En route to Kedarnath'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra-route-map" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Route Map</Link><span>›</span>
          <span>Augustmuni</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['District', 'Rudraprayag'], ['River', 'Mandakini'], ['From Rudraprayag', '~18 km'], ['To Gaurikund', '~55–60 km'], ['Key site', 'Agasteshwar Mahadev'], ['Named for', 'Sage Agastya']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>The name looks Western; it isn't.</strong> Augustmuni has nothing to do with the month of August — it is named for the sage Agastya, one of Hindu tradition's Saptarishi, the seven great sages, who is said to have meditated on this exact stretch of the Mandakini valley. Every pilgrim driving from Rudraprayag toward Kedarnath passes through it.</p>

        <h2 style={h2}>What Is Augustmuni?</h2>
        <AnswerBox>
          Augustmuni (also spelt Agastyamuni) is a town on the Mandakini river in Rudraprayag district, Uttarakhand, about 18 km from Rudraprayag on the road to Kedarnath via Guptkashi. It is named for the sage Agastya, believed to have meditated here, and is home to the Agasteshwar Mahadev temple.
        </AnswerBox>

        <h2 style={h2}>The Legend of Sage Agastya</h2>
        <p style={p}><strong>Agastya</strong> is one of the towering figures of Hindu tradition — a Vedic sage credited across multiple regional traditions with composing hymns, carrying Vedic culture into South India, and performing extraordinary feats of asceticism. Local legend holds that he meditated on this spot in the Mandakini valley for a year, performing severe penance, and that the deity of the Vindhya mountain range, moved by his devotion, appeared before him and granted a boon. The town's name preserves that memory directly: Augustmuni, from Agastya Muni — the sage Agastya.</p>

        <h2 style={h2}>The Agasteshwar Mahadev Temple</h2>
        <p style={p}>The town's central shrine, <strong>Agasteshwar Mahadev</strong>, is dedicated to Shiva in association with the sage, and is of genuine archaeological interest — its stonework carries carved figures of Hindu deities, distinct enough to have drawn scholarly attention. Floods damaged earlier versions of the structure over the centuries; the temple standing today was rebuilt in a <strong>South Indian architectural style</strong>, a detail that stands out against the North Indian nagara-style temples typical of the rest of the Kedarnath valley, and likely a deliberate nod to Agastya's own deep association with South India in wider Hindu tradition.</p>

        <ExpertNote variant="insider">
          Most Kedarnath-bound traffic drives straight through Augustmuni without stopping — it isn't a required halt, and there's no queue management or major infrastructure built around it. That's exactly why fifteen minutes at the Agasteshwar temple, off-season especially, gives you a genuinely quiet, uncrowded stop on a road that gets very busy the closer you get to Guptkashi and Gaurikund.
        </ExpertNote>

        <h2 style={h2}>Distances From Augustmuni</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['To', 'Distance', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Rudraprayag', '~18 km', 'Back down the Mandakini'],
                ['Guptkashi', '~24 km', 'Next major stop on the Kedarnath road'],
                ['Gaurikund (Kedarnath trailhead)', '~55–60 km', 'Via Guptkashi and Sonprayag'],
                ['Haridwar', '~200 km', 'Standard road route'],
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
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Travelling to Kedarnath via Augustmuni?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can add the Agasteshwar temple stop without adding real time to your journey. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has driven the Rudraprayag–Augustmuni–Guptkashi stretch on almost every Kedarnath departure since {SITE.established}. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Kedarnath trip via Augustmuni?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>On the road to Kedarnath</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Rudraprayag', '/rudraprayag'], ['Guptkashi Guide', '/guptkashi-guide'], ['Gaurikund', '/gaurikund'], ['Kedarnath Temple', '/kedarnath-temple'], ['Kedarnath Yatra', '/kedarnath-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
