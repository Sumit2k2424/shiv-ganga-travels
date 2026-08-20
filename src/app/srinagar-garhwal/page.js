import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Srinagar Garhwal — Former Capital of the Garhwal Kingdom | Full Guide' },
  description: 'Srinagar Garhwal, on the Alaknanda between Devprayag and Rudraprayag, was the 16th-century capital of the Garhwal kingdom. History, HNB University, and how it fits a Char Dham road route.',
  keywords: ['srinagar garhwal','srinagar uttarakhand','srinagar garhwal history','hnb garhwal university','srinagar garhwal to badrinath distance','srinagar alaknanda'],
  alternates: { canonical: `${SITE.baseUrl}/srinagar-garhwal` },
  openGraph: { title: 'Srinagar Garhwal — Former Capital of the Garhwal Kingdom', description: 'The 16th-century capital of the Garhwal kingdom, on the Alaknanda between Devprayag and Rudraprayag.', url: `${SITE.baseUrl}/srinagar-garhwal`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Srinagar Garhwal, on the Alaknanda' }] },
  twitter: { card: 'summary_large_image', title: 'Srinagar Garhwal — Former Capital', description: 'The historic capital of the Garhwal kingdom on the Alaknanda river.', images: [{ url: '/opengraph-image', alt: 'Srinagar Garhwal' }] },
};

const FAQS = [
  { q: 'What is Srinagar Garhwal?', a: 'Srinagar Garhwal (distinct from Srinagar in Jammu & Kashmir) is a historic town on the Alaknanda river in Pauri Garhwal district, Uttarakhand, on the Char Dham road between Devprayag and Rudraprayag. It was the capital of the Garhwal kingdom from the 16th century until a devastating 1894 flood destroyed much of the old town, and today it is the largest town on this stretch of the Char Dham highway, home to Hemwati Nandan Bahuguna Garhwal University.' },
  { q: 'When was Srinagar the capital of Garhwal?', a: 'From the 16th century, when King Ajay Pal is credited with founding it as capital of the unified Garhwal kingdom, until the late 19th century. A massive flood in 1894 — caused by the collapse of a natural landslide dam on the Birahi Ganga, a tributary further up the valley — devastated Old Srinagar, after which the Tehri royal family relocated their capital to nearby Kirtinagar and eventually New Tehri.' },
  { q: 'What is HNB Garhwal University?', a: 'Hemwati Nandan Bahuguna Garhwal University, established in 1973 (originally as Garhwal University, renamed in 1989), is headquartered in Srinagar on the banks of the Alaknanda. It is the region\'s principal university and makes Srinagar the largest educational and commercial centre on the Devprayag–Rudraprayag stretch of the Char Dham road.' },
  { q: 'How far is Srinagar Garhwal from Devprayag and Rudraprayag?', a: 'About 35 km from Devprayag and roughly 70 km from Rudraprayag, directly on NH-7, the main Char Dham road route.' },
  { q: 'Is Srinagar Garhwal a pilgrimage stop?', a: 'Not a primary one — it is better understood as the largest service town on this stretch of highway, useful for fuel, food, banking and hotel options between the smaller villages either side. Pilgrims interested in Garhwal history may want to stop for the historical context alone.' },
];

const PAA = [
  { q: 'What caused the 1894 flood that destroyed Old Srinagar?', a: 'A natural landslide had dammed the Birahi Ganga, a tributary of the Alaknanda, further up the valley. When the dam burst, the resulting flood devastated Old Srinagar, then the Garhwal capital, prompting the ruling family to relocate.' },
  { q: 'Is Srinagar Garhwal the same as Srinagar, Kashmir?', a: 'No, entirely separate towns that happen to share a name — Srinagar Garhwal is in Uttarakhand on the Alaknanda river, while Srinagar in Jammu & Kashmir is the summer capital of that union territory. They are commonly confused in casual conversation but have no connection.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Char Dham Route Map', item: `${SITE.baseUrl}/char-dham-yatra-route-map` },
    { '@type': 'ListItem', position: 3, name: 'Srinagar Garhwal', item: `${SITE.baseUrl}/srinagar-garhwal` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'City', name: 'Srinagar Garhwal', description: 'A historic town on the Alaknanda river in Pauri Garhwal district, Uttarakhand — former capital of the Garhwal kingdom and site of HNB Garhwal University.', url: `${SITE.baseUrl}/srinagar-garhwal`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Srinagar', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.2167, longitude: 78.7833, elevation: '560 m' } };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Srinagar Garhwal — Former Capital of the Garhwal Kingdom', description: 'A guide to Srinagar Garhwal: its history as the Garhwal capital, the 1894 flood, HNB University, and its place on the Char Dham road.', mainEntityOfPage: `${SITE.baseUrl}/srinagar-garhwal`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function SrinagarGarhwal() {
  const waText = encodeURIComponent('Namaste! I am travelling the Char Dham road route through Srinagar Garhwal. Please share an itinerary.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Pauri Garhwal · On the Alaknanda</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Srinagar Garhwal — Once the Kingdom's Capital</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Founded by King Ajay Pal in the 16th century, destroyed by flood in 1894 — now the largest town between Devprayag and Rudraprayag on the Char Dham road</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['👑 Former Garhwal capital', '🎓 HNB University', '🌊 On the Alaknanda', '🛣️ On NH-7'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra-route-map" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Route Map</Link><span>›</span>
          <span>Srinagar Garhwal</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['District', 'Pauri Garhwal'], ['River', 'Alaknanda'], ['From Devprayag', '~35 km'], ['From Rudraprayag', '~70 km'], ['Founded', '16th century'], ['University', 'HNB Garhwal']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Every Char Dham traveller passes through Srinagar Garhwal; almost none of them know it was once a kingdom's capital.</strong> Founded by King Ajay Pal in the 16th century as the seat of a unified Garhwal, it grew into the region's most important town — until a flood in 1894 wiped much of it away, and the capital moved elsewhere. What survives today is the Alaknanda valley's largest town, and a stop worth understanding rather than just driving through.</p>

        <h2 style={h2}>What Is Srinagar Garhwal?</h2>
        <AnswerBox>
          Srinagar Garhwal is a town on the Alaknanda river in Pauri Garhwal district, Uttarakhand, on NH-7 between Devprayag and Rudraprayag. Founded in the 16th century by King Ajay Pal as capital of the Garhwal kingdom, it is today the largest town on this stretch of the Char Dham road and home to Hemwati Nandan Bahuguna Garhwal University.
        </AnswerBox>

        <h2 style={h2}>A Kingdom's Capital, Undone by Flood</h2>
        <p style={p}><strong>Ajay Pal</strong>, who unified the fragmented "land of fifty-two forts" — Gadhdesh, the old name for Garhwal, referring to its scattered petty kingdoms — into a single realm, established Srinagar as his capital in the 16th century. It held that status for roughly three and a half centuries, through the rise and eventual fracturing of the Garhwal kingdom under British-era pressures.</p>
        <p style={p}>In <strong>1894</strong>, a natural landslide dam on the Birahi Ganga, a tributary further up the Alaknanda valley, gave way. The resulting flood devastated Old Srinagar. The ruling family relocated first to nearby Kirtinagar, founded by King Kirti Shah shortly after, and eventually to New Tehri — the beginning of the chain of events that led, decades later, to the modern town of <Link href="/tehri-town">Tehri</Link> overlooking what is now Tehri Lake.</p>

        <ExpertNote variant="insider">
          Srinagar today doesn't advertise its royal history — there's no grand palace ruin to point a camera at, since the 1894 flood took most of what remained of the old town. What's worth knowing instead is practical: this is genuinely the last "big town" feel you'll get before the Char Dham road narrows into smaller hill settlements the rest of the way to Rudraprayag and beyond. Fuel up, eat properly, and treat it as your last easy stop before the mountains get serious.
        </ExpertNote>

        <h2 style={h2}>Distances From Srinagar Garhwal</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['To', 'Distance', 'Drive time'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Devprayag', '~35 km', '1 hr'],
                ['Rudraprayag', '~70 km', '2 hrs'],
                ['Rishikesh', '~100 km', '3 hrs'],
                ['Haridwar', '~125 km', '3.5–4 hrs'],
                ['Kedarnath (via Gaurikund)', '~155 km', '5–6 hrs'],
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
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Travelling the Char Dham road through Srinagar Garhwal?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We route the full journey with proper stops planned in. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has driven the Devprayag–Srinagar–Rudraprayag stretch several hundred times across fifteen yatra seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Char Dham road trip?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Along the Char Dham road</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Devprayag', '/devprayag'], ['Rudraprayag', '/rudraprayag'], ['Tehri Town', '/tehri-town'], ['Char Dham Yatra', '/char-dham-yatra'], ['Char Dham Road Status', '/char-dham-road-status']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
