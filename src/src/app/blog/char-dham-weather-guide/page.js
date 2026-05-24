import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Weather Guide 2026 — Month-by-Month Temperature & Best Time to Visit',
  description: 'Detailed Char Dham weather guide for Kedarnath, Badrinath, Gangotri and Yamunotri. Month-by-month temperature, rainfall, snow conditions and what to expect in each season.',
  keywords: ['char dham weather','kedarnath temperature','badrinath weather','gangotri weather','yamunotri weather','char dham best time to visit','char dham weather in may','char dham weather in october','char dham yatra weather 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-weather-guide` },
  openGraph: {
    title: 'Char Dham Weather Guide 2026 — Best Time to Visit Each Dham',
    description: 'Month-by-month temperature, rain, snow and travel conditions for Kedarnath, Badrinath, Gangotri and Yamunotri.',
    url: `${SITE.baseUrl}/blog/char-dham-weather-guide`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Weather Guide 2026 | Shiv Ganga Travels' }],
  },
  twitter: { card: 'summary_large_image', title: 'Char Dham Weather Guide 2026', description: 'Month-by-month conditions for all four Dhams.' },
};

const faqData = [
  { q: 'What is the best month for Char Dham Yatra?', a: 'May and September are the two best months. May gives you clear skies after the portals open in late April/early May — roads are stable, temperatures are pleasant, and crowds are manageable. September is even better for weather — post-monsoon visibility is extraordinary, temperatures are mild, and pilgrims who go in September often describe it as the most peaceful Yatra experience.' },
  { q: 'What is the weather like in Kedarnath in May?', a: 'May in Kedarnath (3,583m) sees daytime temperatures of 8–14°C and nights drop to 0–4°C. The trail from Gaurikund can be cold in the morning. Carry a good down jacket and waterproof layer. Snow patches may still be visible on surrounding peaks, which is beautiful. The temple portals typically open in late April or early May.' },
  { q: 'Is it safe to do Char Dham Yatra in July–August (monsoon)?', a: 'July and August are the most risky months. Heavy rainfall causes landslides on mountain roads, particularly on the Kedarnath route and the Haridwar–Badrinath highway. Our recommendation: book for May–June or September–October instead. If you must travel in monsoon, buy travel insurance and allow for extra buffer days — road closures can delay journeys by 24–48 hours.' },
  { q: 'What should I pack for Char Dham Yatra based on the weather?', a: 'For May–June: thermal base layer, down jacket, waterproofs, sturdy trekking shoes, sunscreen, sunglasses. For September–October: same kit, plus extra warm layers as temperatures drop faster post-monsoon. Even in summer, evenings at Kedarnath and Gangotri can be very cold. Never pack only cotton — carry synthetics or wool.' },
  { q: 'When do the Char Dham portals open and close in 2026?', a: 'The portals typically open on Akshaya Tritiya (late April/early May) and close on Diwali/Bhai Dooj (October/November). For Char Dham Yatra 2026 exact dates will be announced by the Badrinath–Kedarnath Temple Committee and state authorities around March 2026. We publish confirmed dates as soon as they are announced.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Char Dham Weather Guide 2026 — Month-by-Month Temperature & Best Time to Visit',
    description: 'Detailed weather conditions at Kedarnath, Badrinath, Gangotri and Yamunotri — every month of the Yatra season, with packing tips.',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Co-Founder & Operations Manager, Shiv Ganga Travels', url: `${SITE.baseUrl}/about` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2026-01-15', dateModified: '2026-05-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-weather-guide`,
    image: '/opengraph-image',
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
    </>
  );
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const h3 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.1rem,2vw,1.35rem)', fontWeight:600, color:'var(--navy)', marginBottom:8, marginTop:24 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };
const tbl = { width:'100%', borderCollapse:'collapse', marginBottom:24, fontSize:14 };
const th = { background:'var(--navy)', color:'#fff', padding:'10px 14px', textAlign:'left', fontWeight:600 };
const td = { padding:'9px 14px', borderBottom:'1px solid #e2e8f0', color:'#334155' };
const tdAlt = { ...td, background:'#f8fafc' };

export default function Page() {
  return (
    <main style={{ background:'var(--bg)', minHeight:'100vh' }}>
      <Schema/>
      <div style={{ maxWidth:820, margin:'0 auto', padding:'clamp(24px,5vw,60px) clamp(16px,4vw,24px)' }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize:13, color:'var(--text-muted)', marginBottom:20 }}>
          <Link href="/" style={{ color:'var(--gold)', textDecoration:'none' }}>Home</Link>
          {' → '}
          <Link href="/blog" style={{ color:'var(--gold)', textDecoration:'none' }}>Blog</Link>
          {' → Char Dham Weather Guide 2026'}
        </nav>

        {/* Header */}
        <div style={{ marginBottom:32 }}>
          <span style={{ background:'rgba(232,146,10,0.15)', color:'var(--gold)', fontSize:12, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 14px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Yatra Planning
          </span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,4vw,2.5rem)', fontWeight:700, color:'var(--navy)', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:16 }}>
            Char Dham Weather Guide 2026 — Month-by-Month Conditions at All Four Dhams
          </h1>
          <p style={{ ...p, fontSize:17, color:'#475569', marginBottom:0 }}>
            Knowing the weather before you go is the difference between a smooth Yatra and a stressful one. Over fifteen seasons guiding pilgrims to Kedarnath, Badrinath, Gangotri and Yamunotri, we have seen the mountains in every mood. This guide tells you exactly what to expect — month by month — so you can plan with confidence.
          </p>
        </div>

        <BlogAuthor/>

        {/* Season overview */}
        <h2 style={h2}>The Three Seasons of Char Dham Yatra</h2>
        <p style={p}>The Char Dham Yatra season runs from late April to November, roughly split into three phases. Pre-monsoon (May–June) and post-monsoon (September–October) are the two windows most experienced pilgrims prefer. The monsoon months of July and August are possible but require flexibility and patience. November sees the portals close — Kedarnath and Badrinath shut first, followed by Gangotri and Yamunotri.</p>

        {/* Month table */}
        <h2 style={h2}>Month-by-Month Weather at All Four Dhams</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={tbl}>
            <thead>
              <tr>
                <th style={th}>Month</th>
                <th style={th}>Kedarnath (3,583m)</th>
                <th style={th}>Badrinath (3,133m)</th>
                <th style={th}>Gangotri (3,415m)</th>
                <th style={th}>Yamunotri (3,293m)</th>
                <th style={th}>Verdict</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['May','8–14°C day / 0–4°C night','10–16°C / 2–6°C','8–14°C / 1–4°C','9–15°C / 2–5°C','✅ Excellent — portals open, clear skies'],
                ['June','12–18°C / 4–8°C','14–20°C / 5–9°C','12–17°C / 4–8°C','13–18°C / 4–8°C','✅ Very good — best for families'],
                ['July','10–16°C / 5–9°C','13–18°C / 6–10°C','10–15°C / 4–8°C','12–17°C / 5–9°C','⚠️ Monsoon — landslide risk, plan buffer'],
                ['August','10–15°C / 4–8°C','12–17°C / 5–9°C','9–14°C / 3–7°C','10–15°C / 3–7°C','⚠️ Peak monsoon — not recommended'],
                ['September','8–14°C / 2–6°C','10–16°C / 3–7°C','8–13°C / 1–5°C','9–14°C / 2–6°C','✅ Best month — crystal clear, fewer crowds'],
                ['October','4–10°C / -2–3°C','6–12°C / 0–4°C','4–10°C / -2–2°C','5–11°C / -1–3°C','✅ Good — stunning autumn colours'],
                ['November','0–6°C / -6–0°C','2–8°C / -4–1°C','0–5°C / -8–-2°C','1–6°C / -6–0°C','🔴 Portals closing — only early November'],
              ].map(([m, k, b, g, y, v], i) => (
                <tr key={m}>
                  <td style={i%2===0?tdAlt:td}><strong>{m}</strong></td>
                  <td style={i%2===0?tdAlt:td}>{k}</td>
                  <td style={i%2===0?tdAlt:td}>{b}</td>
                  <td style={i%2===0?tdAlt:td}>{g}</td>
                  <td style={i%2===0?tdAlt:td}>{y}</td>
                  <td style={i%2===0?tdAlt:td}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Per-dham detail */}
        <h2 style={h2}>Kedarnath Weather — What the Numbers Don't Tell You</h2>
        <p style={p}>At 3,583 metres, Kedarnath is the highest of the four Dhams and the most weather-sensitive. Even in May, it can snow unexpectedly and temperatures drop sharply after sunset. What the temperature tables miss is the wind — the valley funnels cold air from the glacier directly onto the trekking path and the temple courtyard. We always advise our pilgrims: dress for 5°C colder than the forecast says.</p>
        <p style={p}>The 16km trek from Gaurikund starts at 1,982m and climbs to 3,583m. This elevation change means you will pass through noticeably different weather zones within a single walk. Morning starts are cold and crisp. Afternoons can be warm and sunny. By 4 PM, clouds often build from the south and temperatures fall fast. Plan to reach the temple before 2 PM for the best experience.</p>

        <h2 style={h2}>Badrinath Weather — The Most Forgiving of the Four</h2>
        <p style={p}>Badrinath sits at 3,133m in a broad valley sheltered by the Nar-Narayan and Nilkantha peaks. It catches less monsoon rain than the southern ranges and warms up faster in the morning than Kedarnath. September in Badrinath is genuinely glorious — the Alakananda River runs clear and fast, the surrounding slopes turn gold and amber, and the temple is quieter than in peak season.</p>

        <h2 style={h2}>Gangotri &amp; Yamunotri — The Northern Dhams</h2>
        <p style={p}>Both Gangotri and Yamunotri are in the Uttarkashi district and share similar weather patterns. Gangotri, at the source of the Ganga, has a more dramatic microclimate — temperatures can swing 12°C between a sunny afternoon and a cloudy morning. Yamunotri, at the source of the Yamuna, involves a 6km trek from Janki Chatti that can be icy in early May and muddy in the monsoon. Late September to mid-October is the sweet spot for both.</p>

        <h2 style={h2}>Packing List by Season</h2>
        <h3 style={h3}>May–June (Pre-Monsoon)</h3>
        <p style={p}>Thermal inner layer · Mid-weight fleece · Down jacket or warm puffer · Waterproof outer shell · Trekking shoes (waterproof) · Wool socks × 3 pairs · Sunscreen SPF 50+ · UV-protection sunglasses · Light gloves · Hat</p>
        <h3 style={h3}>July–August (Monsoon)</h3>
        <p style={p}>Everything above, plus: Full waterproof poncho · Gaiters for muddy trails · Spare dry clothes in waterproof bag · ORS sachets for hydration · Strong trekking poles for slippery paths · Extra day's budget for potential delays</p>
        <h3 style={h3}>September–October (Post-Monsoon)</h3>
        <p style={p}>Everything from May–June, plus: Heavier down jacket for October · Balaclava or neck gaiter · Hand warmers · Chemical heat pads for sleeping bags</p>

        {/* FAQ */}
        <h2 style={h2}>Frequently Asked Questions</h2>
        {faqData.map(f => (
          <div key={f.q} style={{ marginBottom:20, padding:'18px 20px', background:'#f8fafc', borderRadius:'var(--r)', borderLeft:'3px solid var(--gold)' }}>
            <p style={{ fontWeight:700, color:'var(--navy)', fontSize:15, marginBottom:6 }}>{f.q}</p>
            <p style={{ ...p, marginBottom:0 }}>{f.a}</p>
          </div>
        ))}

        <BlogCTA/>

        <div style={{ marginTop:40, padding:'20px 24px', background:'rgba(15,43,91,0.04)', borderRadius:'var(--r)', borderLeft:'3px solid var(--navy)' }}>
          <p style={{ ...p, marginBottom:8, fontWeight:600 }}>Continue Reading</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            {[['Best Time for Char Dham Yatra','/blog/best-time-char-dham'],['Char Dham Packing List','/blog/char-dham-yatra-packing-list'],['Char Dham Complete Guide','/blog/char-dham-yatra-complete-guide'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide']].map(([t,h]) => (
              <Link key={h} href={h} style={{ fontSize:13.5, color:'var(--gold)', textDecoration:'none', fontWeight:600, background:'rgba(232,146,10,0.1)', padding:'6px 14px', borderRadius:8 }}>{t} →</Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
