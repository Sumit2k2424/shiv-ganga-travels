import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Gopeshwar — Chamoli District HQ and Gateway to Rudranath | Full Guide' },
  description: 'Gopeshwar, 1,300m, is the headquarters of Chamoli district and the road base for the Rudranath trek. Gopinath temple, Vaitarni Kund, and how it fits a Panch Kedar itinerary.',
  keywords: ['gopeshwar','gopeshwar uttarakhand','gopeshwar chamoli','gopinath temple gopeshwar','gopeshwar to rudranath','gopeshwar to sagar village'],
  alternates: { canonical: `${SITE.baseUrl}/gopeshwar` },
  openGraph: { title: 'Gopeshwar — Chamoli District HQ and Gateway to Rudranath', description: 'The district headquarters of Chamoli and the road base for the Rudranath trek.', url: `${SITE.baseUrl}/gopeshwar`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Gopeshwar, Chamoli district' }] },
  twitter: { card: 'summary_large_image', title: 'Gopeshwar — Gateway to Rudranath', description: 'Chamoli district HQ, the Gopinath temple, and the road base for Rudranath.', images: [{ url: '/opengraph-image', alt: 'Gopeshwar' }] },
};

const FAQS = [
  { q: 'What is Gopeshwar known for?', a: 'Gopeshwar is the district headquarters of Chamoli, Uttarakhand, at about 1,300 m, known for the ancient Gopinath temple to Shiva and as the last significant town before the road toward Sagar village, the trailhead for the Rudranath trek. It is a working administrative town rather than a pilgrimage stop in its own right, but it sits on the route to two genuine Panch Kedar pilgrimages.' },
  { q: 'What is the Gopinath temple?', a: 'An old Shiva temple at the centre of Gopeshwar town, built in the North Indian nagara style, with a trishul (trident) in the courtyard bearing an inscription dated to around the 12th century — among the older dated inscriptions in the district. It functions as the town\'s principal temple and a stop for pilgrims passing through en route to Rudranath.' },
  { q: 'What is Vaitarni Kund?', a: 'A small sacred pond near Gopeshwar associated in local tradition with the mythological river Vaitarni, said to be crossed by souls after death — pilgrims visiting Gopinath temple often stop here too, though it is a minor, local-tradition site rather than a major pilgrimage destination.' },
  { q: 'How far is Gopeshwar from Rudranath?', a: 'Gopeshwar itself is not the trailhead — the road continues on to Sagar village, about 15 km further, which is where the actual 20 km Rudranath trek begins. Gopeshwar functions as the last town with full facilities (fuel, hotels, hospital) before that final stretch.' },
  { q: 'How far is Gopeshwar from Pipalkoti and Chamoli town?', a: 'About 16 km from Pipalkoti and roughly 27–30 km from Chamoli town, on the road that branches off the main NH-58 Badrinath highway toward the Rudranath trek base.' },
];

const PAA = [
  { q: 'Is Gopeshwar worth visiting on a Char Dham trip?', a: 'Only if your itinerary already includes the Rudranath trek, or you have a genuine interest in the Gopinath temple\'s old inscriptions — it is not a detour that makes sense for a standard four-dham circuit, since it branches off the main Badrinath highway.' },
  { q: 'Does Gopeshwar have hospital and fuel facilities?', a: 'Yes — as the district headquarters of Chamoli, Gopeshwar has the fullest range of services (district hospital, fuel stations, banks) of any town between Rudraprayag and Sagar village, which is exactly why it functions as the last proper stop before the Rudranath trailhead.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Panch Kedar Yatra', item: `${SITE.baseUrl}/panch-kedar-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Gopeshwar', item: `${SITE.baseUrl}/gopeshwar` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'City', name: 'Gopeshwar', description: 'The district headquarters of Chamoli, Uttarakhand, home to the ancient Gopinath temple and the last major town before the Rudranath trek base.', url: `${SITE.baseUrl}/gopeshwar`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Gopeshwar', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.3833, longitude: 79.3333, elevation: '1,300 m' } };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Gopeshwar — Chamoli District HQ and Gateway to Rudranath', description: 'A guide to Gopeshwar: the Gopinath temple, Vaitarni Kund, and its role as the base town for the Rudranath trek.', mainEntityOfPage: `${SITE.baseUrl}/gopeshwar`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function Gopeshwar() {
  const waText = encodeURIComponent('Namaste! I want to plan a Rudranath trek via Gopeshwar and Sagar village. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Chamoli District HQ · 1,300 m</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Gopeshwar — The Last Town Before Rudranath</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Chamoli's district headquarters, home to the 12th-century Gopinath temple, and the last full-facility town before the Rudranath trek base at Sagar village</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛕 Gopinath Temple', '📜 12th-century inscription', '🥾 Base for Rudranath trek', '🏥 District HQ facilities'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-kedar-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Kedar Yatra</Link><span>›</span>
          <span>Gopeshwar</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,300 m'], ['Role', 'Chamoli district HQ'], ['From Pipalkoti', '~16 km'], ['To Sagar village', '~15 km'], ['Key site', 'Gopinath Temple'], ['Trek from here', 'Rudranath']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Gopeshwar does two jobs at once.</strong> As the administrative headquarters of Chamoli district, it is where the hospital, the fuel pumps and the government offices actually are. And as the last town of any size before the road climbs to Sagar village, it is the practical staging point for anyone attempting the <Link href="/rudranath-temple">Rudranath trek</Link> — the hardest of the five Panch Kedar pilgrimages.</p>

        <h2 style={h2}>What Is Gopeshwar?</h2>
        <AnswerBox>
          Gopeshwar is the district headquarters of Chamoli, Uttarakhand, at about 1,300 m elevation, roughly 16 km from Pipalkoti. It is home to the ancient Gopinath Shiva temple and functions as the last full-facility town before Sagar village, the trailhead for the Rudranath trek.
        </AnswerBox>

        <h2 style={h2}>The Gopinath Temple</h2>
        <p style={p}>At the centre of town stands the <strong>Gopinath temple</strong>, an old Shiva shrine built in the North Indian nagara style. In its courtyard stands a trishul — a trident — carrying an inscription generally dated to around the 12th century, one of the older dated pieces of stonework in the district and a genuine historical marker rather than a recent addition. The temple functions today both as a local place of worship and a stop for pilgrims passing through en route to Rudranath.</p>
        <p style={p}>Nearby, <strong>Vaitarni Kund</strong>, a small sacred pond, carries its own local tradition — associated with the mythological river Vaitarni, said in Hindu belief to be crossed by souls after death. It draws far fewer visitors than the temple itself but is worth the short stop if you are already in town.</p>

        <ExpertNote variant="insider">
          If Rudranath is on your itinerary, treat Gopeshwar as your last chance to sort logistics properly — fuel up, confirm your guide arrangements, and pick up anything you're missing for the trek, because Sagar village and everything beyond it has essentially no shopping. Pilgrims who skip this and try to sort gear at the trailhead are usually disappointed.
        </ExpertNote>

        <h2 style={h2}>Distances From Gopeshwar</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['To', 'Distance', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Sagar village (Rudranath trailhead)', '~15 km', 'Last motorable point before the trek'],
                ['Pipalkoti', '~16 km', 'Back on the main Badrinath highway'],
                ['Chamoli town', '~27–30 km', 'Via Pipalkoti'],
                ['Joshimath', '~85 km', 'Via the NH-58 highway'],
                ['Haridwar', '~230 km', 'Standard road route'],
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
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning the Rudranath trek via Gopeshwar?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We arrange the Gopeshwar–Sagar transfer, guide and permits for the full Panch Kedar circuit.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Arranges the Gopeshwar staging leg for pilgrims attempting the Rudranath trek. <Link href="/about">More about the team</Link>.</p>
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
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Panch Kedar route</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Rudranath', '/rudranath-temple'], ['Pipalkoti', '/pipalkoti'], ['Kalpeshwar Temple', '/kalpeshwar-temple'], ['Madhyamaheshwar Temple', '/madhyamaheshwar-temple'], ['Char Dham Route Map', '/char-dham-yatra-route-map']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
