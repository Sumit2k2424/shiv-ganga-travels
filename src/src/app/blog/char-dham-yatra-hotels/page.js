import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra Hotels 2026 — Best Stays at Kedarnath, Badrinath, Gangotri & Yamunotri',
  description: 'Best hotels for Char Dham Yatra 2026 — verified stays at Kedarnath base, Badrinath, Gangotri and Yamunotri. Budget, mid-range and premium options with prices and booking tips.',
  keywords: ['char dham yatra hotels','kedarnath hotels','badrinath hotels','gangotri hotels','yamunotri hotels','char dham accommodation','best hotel char dham yatra','char dham hotel booking 2026','guptkashi hotel','joshimath hotel'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-hotels` },
  openGraph: {
    title: 'Best Hotels for Char Dham Yatra 2026 — Kedarnath, Badrinath, Gangotri & Yamunotri',
    description: 'Budget, mid-range and premium accommodation options at all four Dhams and transit towns. Verified by our team every season.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-hotels`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Hotels 2026 | Shiv Ganga Travels' }],
  },
  twitter: { card: 'summary_large_image', title: 'Char Dham Yatra Hotels 2026', description: 'Best stays at all four Dhams and transit towns.' },
};

const faqData = [
  { q: 'How far in advance should I book Char Dham Yatra hotels?', a: 'Book at least 2–3 months before your Yatra date for GMVN properties, and 4–6 weeks for private hotels in peak season (May–June). September is slightly easier to book last-minute. The moment the Char Dham portals opening dates are announced (usually March), accommodation fills fast. Our packages include pre-booked hotels across the circuit — we block inventory months in advance.' },
  { q: 'Are hotels available at Kedarnath temple itself?', a: 'At Kedarnath (3,583m altitude), accommodation is basic — GMVN dormitories, small guesthouses and tented camps. The infrastructure is limited by altitude and environmental regulations. Most pilgrims stay at Guptkashi (1,319m, 40km from base) or Sonprayag the night before trekking. This gives better sleep quality and a more manageable trek start.' },
  { q: 'What is the price range of hotels on Char Dham circuit?', a: 'Budget guesthouses: ₹500–₹1,500 per room. Mid-range private hotels: ₹1,500–₹3,500 per room. Premium options in Haridwar and Rishikesh: ₹3,500–₹8,000 per room. At the Dhams themselves (Kedarnath, Gangotri), expect basic but clean accommodation in the ₹700–₹2,500 range. GMVN rooms are government-standardised and offer consistent quality for ₹800–₹2,500.' },
  { q: 'Do Char Dham hotels provide vegetarian food?', a: 'Yes — almost universally. The Char Dham region follows strict vegetarian norms at religious sites. Hotels near the temples serve only sattvic (pure vegetarian, no onion/garlic) food. In Haridwar, Rishikesh, Guptkashi and Joshimath, standard vegetarian meals are available everywhere. Our packages always include hotels that provide pure vegetarian food as standard.' },
  { q: 'Can I book hotels on the Char Dham circuit directly or should I use a package?', a: 'Direct booking is possible but comes with coordination complexity — you need to arrange a different hotel for each of 8–10 stops, most without reliable online booking systems. During peak season, popular hotels on the GMVN circuit are fully booked months in advance. A package that includes pre-booked accommodation across the full circuit removes this burden entirely, particularly for first-time pilgrims.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Char Dham Yatra Hotels 2026 — Best Stays at All Four Dhams',
    description: 'Budget, mid-range and premium hotel options at Kedarnath base, Badrinath, Gangotri and Yamunotri with prices and booking tips.',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Co-Founder & Operations Manager, Shiv Ganga Travels', url: `${SITE.baseUrl}/about` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2026-01-25', dateModified: '2026-05-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-hotels`,
    image: '/opengraph-image',
  };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };
const card = { padding:'20px 22px', background:'#f8fafc', borderRadius:'var(--r)', borderLeft:'3px solid var(--navy)', marginBottom:20 };

export default function Page() {
  return (
    <main style={{ background:'var(--bg)', minHeight:'100vh' }}>
      <Schema/>
      <div style={{ maxWidth:820, margin:'0 auto', padding:'clamp(24px,5vw,60px) clamp(16px,4vw,24px)' }}>
        <nav style={{ fontSize:13, color:'var(--text-muted)', marginBottom:20 }}>
          <Link href="/" style={{ color:'var(--gold)', textDecoration:'none' }}>Home</Link> {' → '}
          <Link href="/blog" style={{ color:'var(--gold)', textDecoration:'none' }}>Blog</Link> {' → Char Dham Yatra Hotels'}
        </nav>

        <div style={{ marginBottom:32 }}>
          <span style={{ background:'rgba(232,146,10,0.15)', color:'var(--gold)', fontSize:12, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 14px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Accommodation Guide</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,4vw,2.5rem)', fontWeight:700, color:'var(--navy)', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:16 }}>
            Char Dham Yatra Hotels 2026 — Where to Stay at Each Dham and Transit Town
          </h1>
          <p style={{ ...p, fontSize:17, color:'#475569', marginBottom:0 }}>
            Good accommodation on Char Dham Yatra is not about luxury — it is about arriving rested at each Dham. Our team checks every property we book our customers into before each season opens. This guide shares what we have learned across fifteen seasons about where to stay and, equally importantly, where not to.
          </p>
        </div>

        <BlogAuthor/>

        <h2 style={h2}>The Char Dham Hotel Circuit — Overview</h2>
        <p style={p}>A standard Char Dham circuit covers 10–12 nights across approximately 8 stays: Haridwar (arrival), Barkot/Janki Chatti (Yamunotri base), Uttarkashi (Gangotri base), Guptkashi or Sonprayag (Kedarnath base), Kedarnath itself (optional), Badrinath (directly), Joshimath (Badrinath base), and Haridwar (return). The quality and availability of hotels at each stop varies significantly.</p>

        <h2 style={h2}>Haridwar — Your Base Before the Journey</h2>
        <div style={card}>
          <p style={{ ...p, marginBottom:8 }}><strong>Best areas:</strong> Har Ki Pauri road, Rishi Nagar, Jwalapur Road (15 min from ghats, better value).</p>
          <p style={{ ...p, marginBottom:8 }}><strong>Budget (₹800–₹2,000):</strong> Hari Ki Pauri area guesthouses — basic but clean, within walking distance of Ganga Aarti.</p>
          <p style={{ ...p, marginBottom:8 }}><strong>Mid-range (₹2,000–₹4,500):</strong> Hotels near RISHIKUL Ayurvedic College area offer good value. Branded options like Haveli Hari Ganga give Ganga views.</p>
          <p style={{ ...p, marginBottom:0 }}><strong>Premium (₹4,500+):</strong> Ganga Kinare and Manu Maharani are the two most recommended premium stays in Haridwar.</p>
        </div>

        <h2 style={h2}>Yamunotri Base — Barkot &amp; Janki Chatti</h2>
        <div style={card}>
          <p style={{ ...p, marginBottom:8 }}>Janki Chatti (the actual trekking start point for Yamunotri, 6km away) has basic guesthouses. Most pilgrims prefer to stay in Barkot, 50km from Janki Chatti, which has more options and better road connectivity.</p>
          <p style={{ ...p, marginBottom:0 }}><strong>Price range:</strong> ₹600–₹2,500 at Barkot. GMVN's property here is reliable. Book GMVN at least 4 weeks in advance through gmvnl.in.</p>
        </div>

        <h2 style={h2}>Gangotri Base — Uttarkashi</h2>
        <div style={card}>
          <p style={{ ...p, marginBottom:8 }}>Uttarkashi is the main transit town (95km from Gangotri). It has the best range of accommodation options between Haridwar and Gangotri. The town is well-served by restaurants, pharmacies and ATMs — stock up here before heading to Gangotri.</p>
          <p style={{ ...p, marginBottom:0 }}><strong>Price range:</strong> ₹700–₹3,500. Budget options line the main bazaar. Hotel Shraddha and GMVN's Uttarkashi property are consistently well-reviewed by our customers.</p>
        </div>

        <h2 style={h2}>Kedarnath Base — Guptkashi &amp; Sonprayag</h2>
        <div style={card}>
          <p style={{ ...p, marginBottom:8 }}>This is the critical accommodation decision on the circuit. Staying at Guptkashi (1,319m) the night before gives you 8–9 hours sleep at a comfortable altitude and a 45-minute morning drive to Sonprayag (the last vehicle point). Staying at Sonprayag or Phata saves time but means a rougher night's sleep in busier, smaller accommodation.</p>
          <p style={{ ...p, marginBottom:0 }}><strong>Price range:</strong> ₹900–₹4,000 at Guptkashi. Our recommended mid-range stay in Guptkashi runs ₹1,800–₹2,800 per room and serves hot sattvic meals.</p>
        </div>

        <h2 style={h2}>At Kedarnath Temple (3,583m)</h2>
        <div style={card}>
          <p style={{ ...p, marginBottom:8 }}>Staying at Kedarnath itself is a deeply meaningful experience but requires flexibility. GMVN dormitories (₹400–₹600/bed) and private guesthouses (₹800–₹2,000/room) are available. Tented camps run by licensed operators are another option. Nights are cold (0–4°C in May, -5 to 2°C in October) — sleeping bags are strongly recommended.</p>
          <p style={{ ...p, marginBottom:0 }}><strong>Our advice:</strong> First-time pilgrims and those with health conditions are better off doing Kedarnath as a day-trip from Guptkashi — trek up, have darshan, and return before dark. Stay at altitude only if you are fit and experienced at high altitude.</p>
        </div>

        <h2 style={h2}>Badrinath</h2>
        <div style={card}>
          <p style={{ ...p, marginBottom:8 }}>Badrinath town has expanded significantly in recent years and now has a reasonable range of accommodation right next to the temple. The GMVN Tourist Bungalow at Badrinath is one of the better-located government properties on the circuit. Most pilgrims stay 1 night and do morning darshan at Brahma Muhurta (4–6 AM) — genuinely the most peaceful time at the temple.</p>
          <p style={{ ...p, marginBottom:0 }}><strong>Price range:</strong> ₹800–₹3,500 at Badrinath. Joshimath (45km), with better infrastructure and mobile connectivity, is an alternative base.</p>
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        {faqData.map(f => (
          <div key={f.q} style={{ marginBottom:20, padding:'18px 20px', background:'#f8fafc', borderRadius:'var(--r)', borderLeft:'3px solid var(--gold)' }}>
            <p style={{ fontWeight:700, color:'var(--navy)', fontSize:15, marginBottom:6 }}>{f.q}</p>
            <p style={{ ...p, marginBottom:0 }}>{f.a}</p>
          </div>
        ))}

        <BlogCTA/>

        <div style={{ marginTop:40, padding:'20px 24px', background:'rgba(15,43,91,0.04)', borderRadius:'var(--r)', borderLeft:'3px solid var(--navy)' }}>
          <p style={{ ...p, marginBottom:8, fontWeight:600 }}>Related Reading</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            {[['Kedarnath Hotels','/kedarnath-hotels'],['Badrinath Hotels','/badrinath-hotels'],['Char Dham Cost Guide','/blog/char-dham-yatra-cost'],['Char Dham Packing List','/blog/char-dham-yatra-packing-list']].map(([t,h]) => (
              <Link key={h} href={h} style={{ fontSize:13.5, color:'var(--gold)', textDecoration:'none', fontWeight:600, background:'rgba(232,146,10,0.1)', padding:'6px 14px', borderRadius:8 }}>{t} →</Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
