import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Tehri Town — New Tehri, the Lake and India\'s Tallest Dam | Full Guide' },
  description: 'New Tehri, 1,550–1,950m, overlooks Tehri Lake and the 260m Tehri Dam, India\'s tallest. On the Char Dham route between Dehradun and Yamunotri/Gangotri, with boating and adventure tourism.',
  keywords: ['tehri town','new tehri','tehri lake','tehri dam height','tehri to yamunotri distance','tehri char dham route'],
  alternates: { canonical: `${SITE.baseUrl}/tehri-town` },
  openGraph: { title: 'Tehri Town — New Tehri, the Lake and India\'s Tallest Dam', description: 'New Tehri overlooks Tehri Lake and the 260m Tehri Dam, on the road to Yamunotri and Gangotri.', url: `${SITE.baseUrl}/tehri-town`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Tehri Lake and New Tehri town' }] },
  twitter: { card: 'summary_large_image', title: 'Tehri Town — New Tehri and the Lake', description: 'India\'s tallest dam and its lake, on the route to Yamunotri and Gangotri.', images: [{ url: '/opengraph-image', alt: 'Tehri Lake' }] },
};

const FAQS = [
  { q: 'What is New Tehri?', a: 'New Tehri is the district headquarters of Tehri Garhwal, Uttarakhand, built between about 1,550 and 1,950 m elevation overlooking Tehri Lake — the reservoir created by the Tehri Dam. It replaced Old Tehri, the original town, which was submerged when the dam\'s reservoir filled in the 2000s.' },
  { q: 'How tall is Tehri Dam?', a: 'The Tehri Dam stands about 260 m tall, making it the tallest dam in India and one of the tallest in the world. It is an earth-and-rockfill embankment dam on the Bhagirathi river, generating hydroelectric power and supplying water and irrigation across the region.' },
  { q: 'What happened to Old Tehri?', a: 'Old Tehri, the original town, was submerged when the Tehri Dam\'s reservoir — now Tehri Lake — filled. Residents were resettled, most to the newly built New Tehri township on higher ground, and Old Tehri now lies beneath the lake\'s waters.' },
  { q: 'Can you do water sports on Tehri Lake?', a: 'Yes — Tehri Lake has developed into a genuine adventure-tourism hub, with boating and increasingly water sports operators active on the reservoir, drawing visitors independent of the Char Dham pilgrim traffic passing nearby.' },
  { q: 'Is Tehri on the Char Dham route?', a: 'It sits near the route rather than directly on the busiest corridor — the main Dehradun–Chamba–Tehri–Dharasu road connects toward Yamunotri and, via Uttarkashi, Gangotri, making Tehri a relevant stop for pilgrims approaching those two dhams from Dehradun rather than the Haridwar–Rishikesh corridor used for Kedarnath and Badrinath.' },
  { q: 'How far is Tehri from Dehradun and Rishikesh?', a: 'Roughly 75–80 km from Dehradun via Chamba, and about 90 km from Rishikesh, on hill roads that take 3–3.5 hours depending on the route.' },
];

const PAA = [
  { q: 'Why was Tehri Dam built so tall?', a: 'To maximise the hydroelectric and water-storage capacity of the Bhagirathi at this particular gorge site — the height and the resulting reservoir capacity are what make Tehri one of India\'s most significant multipurpose dam projects, supplying irrigation, drinking water and power across Uttarakhand and neighbouring states.' },
  { q: 'Is Tehri Lake worth visiting on a Char Dham trip?', a: 'If your route to Yamunotri or Gangotri passes through Chamba and New Tehri, yes — it is a natural, low-effort stop with genuine scenic and recreational value that most operators skip purely because it isn\'t directly on the fastest line to the dham itself.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Char Dham Route Map', item: `${SITE.baseUrl}/char-dham-yatra-route-map` },
    { '@type': 'ListItem', position: 3, name: 'Tehri Town', item: `${SITE.baseUrl}/tehri-town` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'City', name: 'New Tehri', description: 'The district headquarters of Tehri Garhwal, Uttarakhand, overlooking Tehri Lake and the Tehri Dam, on the road toward Yamunotri and Gangotri.', url: `${SITE.baseUrl}/tehri-town`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'New Tehri', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.3667, longitude: 78.4833, elevation: '1,550–1,950 m' } };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Tehri Town — New Tehri, the Lake and India\'s Tallest Dam', description: 'A guide to New Tehri: the dam, the lake, what happened to Old Tehri, and its place on the Char Dham route.', mainEntityOfPage: `${SITE.baseUrl}/tehri-town`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function TehriTown() {
  const waText = encodeURIComponent('Namaste! I want a Yamunotri/Gangotri itinerary that includes a stop at Tehri Lake. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Tehri Garhwal HQ · 1,550–1,950 m</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>New Tehri — A Town Built Above a Buried One</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Overlooking India's tallest dam and the lake that swallowed Old Tehri — on the road toward Yamunotri and Gangotri from Dehradun</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🏗️ India\'s tallest dam, 260 m', '🌊 Tehri Lake boating', '🏘️ Old Tehri lies submerged', '🛣️ Route to Yamunotri/Gangotri'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra-route-map" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Route Map</Link><span>›</span>
          <span>Tehri Town</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,550–1,950 m'], ['District', 'Tehri Garhwal'], ['Dam height', '260 m'], ['From Dehradun', '~75–80 km'], ['From Rishikesh', '~90 km'], ['To Old Tehri', '24 km, now submerged']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>New Tehri is a town built to look down on the town it replaced.</strong> Perched between 1,550 and 1,950 m on the hillside above the Bhagirathi valley, it overlooks a vast blue reservoir — and somewhere beneath that water lies Old Tehri, submerged when the dam that gives the district its modern identity filled its reservoir in the 2000s.</p>

        <h2 style={h2}>What Is New Tehri?</h2>
        <AnswerBox>
          New Tehri is the district headquarters of Tehri Garhwal, Uttarakhand, built at 1,550 to 1,950 m overlooking Tehri Lake. It replaced Old Tehri, which was submerged by the reservoir of the Tehri Dam — at 260 m, India's tallest dam — and lies on the road route from Dehradun toward Yamunotri and Gangotri.
        </AnswerBox>

        <h2 style={h2}>The Dam and the Town It Buried</h2>
        <p style={p}>The <strong>Tehri Dam</strong>, an earth-and-rockfill embankment on the Bhagirathi river, stands roughly 260 m tall — the tallest dam in India and among the tallest in the world. Built for hydroelectric power, irrigation and water supply, its reservoir gradually filled through the 2000s, and as the water rose it submerged Old Tehri, the town that had stood on the site for generations. Residents were resettled, most to the newly constructed New Tehri, built deliberately on higher ground above the coming waterline.</p>
        <p style={p}>What resulted is <strong>Tehri Lake</strong> — a reservoir large enough that it has become a genuine adventure-tourism destination in its own right, with boating and water-sports operators now active on its waters, independent of any pilgrim traffic passing through.</p>

        <ExpertNote variant="insider">
          If your route to Yamunotri or Gangotri runs via Dehradun and Chamba rather than the Haridwar–Rishikesh corridor, New Tehri is a natural, almost-free stop — the lake viewpoints near the town cost nothing and add barely half an hour, and it's a genuinely different landscape from the narrow river gorges the rest of the Char Dham route runs through.
        </ExpertNote>

        <h2 style={h2}>Distances From New Tehri</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['To', 'Distance', 'Drive time'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Chamba', '~11 km', '25 min'],
                ['Dehradun', '~75–80 km', '2.5–3 hrs'],
                ['Rishikesh', '~90 km', '3 hrs'],
                ['Uttarkashi (toward Gangotri)', '~90 km', '3–3.5 hrs'],
                ['Barkot (toward Yamunotri)', '~70 km', '2.5 hrs'],
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
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Routing through Tehri to Yamunotri or Gangotri?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can add a lake stop without derailing your yatra schedule. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Routes the Dehradun–Tehri–Yamunotri corridor for pilgrims travelling from the western side of the state. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Yamunotri or Gangotri trip via Tehri?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Toward Yamunotri and Gangotri</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Barkot', '/barkot'], ['Yamunotri Yatra', '/yamunotri-yatra'], ['Gangotri Yatra', '/gangotri-yatra'], ['Uttarkashi Hotels', '/uttarkashi-hotels'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
