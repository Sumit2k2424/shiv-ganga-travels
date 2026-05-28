import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Hotels Near Kedarnath 2026',
  description: 'Best hotels near Kedarnath 2026. Guptkashi, Sonprayag, Kedarnath Top and Phata stays — honest guide with prices, comfort ratings and tips.',
  keywords: ['hotels near kedarnath','kedarnath hotels 2026','guptkashi hotels','sonprayag hotels','kedarnath top stay','kedarnath accommodation'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-hotels` },
  openGraph: {
    title: 'Hotels Near Kedarnath 2026 — Guide to Best Stays',
    description: 'Where to stay for Kedarnath Yatra — complete hotel guide for Guptkashi, Sonprayag, Kedarnath Top and Phata.',
    url: `${SITE.baseUrl}/kedarnath-hotels`, type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels Near Kedarnath 2026 — Guide to Best Stays',
    description: 'Where to stay for Kedarnath Yatra — complete hotel guide for Guptkashi, Sonprayag, Kedarnath Top and Phata.',
    images: [{ url: '/opengraph-image', alt: 'Hotels Near Kedarnath 2026 — Guide to Best Stays | Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

const stays = [
  {
    loc: 'Kedarnath Top (3,583m)',
    desc: 'Basic GMVN tents and dormitories directly at the temple complex. Reserved for pilgrims wanting early morning darshan (4–5 AM). Expect minimal amenities — no hot water, shared bathrooms, basic bedding. Temperature drops to 2–5°C at night even in May.',
    budget: '₹300–₹800 per bed (GMVN)', comfort: '⭐⭐', rec: 'For devout pilgrims wanting to attend pre-dawn Abhishek puja. Book via GMVN directly.',
    type: 'Budget / Pilgrim'
  },
  {
    loc: 'Sonprayag (1,829m)',
    desc: 'Base camp town 24km from Gaurikund. Lower altitude — good for acclimatisation. Hotels here are modest guesthouses. Warmer than Kedarnath Top. Most pilgrims park vehicles here and take shared jeeps to Gaurikund.',
    budget: '₹600–₹2,000 per room', comfort: '⭐⭐', rec: 'If you want budget accommodation and can handle the shared jeep to Gaurikund early morning.',
    type: 'Budget'
  },
  {
    loc: 'Guptkashi (1,319m)',
    desc: 'Best overnight base for Kedarnath pilgrims. 40km from Gaurikund. Good range of hotels from ₹1,500 to ₹5,000. Better food options, attached bathrooms, decent hot water. All our standard packages include a Guptkashi halt.',
    budget: '₹1,500–₹5,000 per room', comfort: '⭐⭐⭐–⭐⭐⭐⭐', rec: 'Recommended halt. Our packages include pre-booked hotels here with guaranteed check-in.',
    type: 'Standard – Best Value'
  },
  {
    loc: 'Phata (1,768m)',
    desc: 'Helicopter pilgrims depart from Phata helipad. Small town with basic hotels. Good option if you\'re taking the helicopter next morning — reduces pre-dawn travel. Limited dining options.',
    budget: '₹1,200–₹3,000 per room', comfort: '⭐⭐–⭐⭐⭐', rec: 'Only relevant if your Kedarnath helicopter is from Phata helipad.',
    type: 'Helicopter pilgrims'
  },
  {
    loc: 'Rudraprayag (895m)',
    desc: 'Town at the confluence of Alaknanda and Mandakini rivers, 76km from Gaurikund. Much lower altitude — warmer, more comfortable. Good range of hotels including GMVN. Ideal for elderly pilgrims or those with altitude concerns.',
    budget: '₹1,500–₹4,000 per room', comfort: '⭐⭐⭐–⭐⭐⭐⭐', rec: 'Used in our extended Senior Citizen packages as a buffer night.',
    type: 'Senior / Comfort'
  },
];

export default function KedarnathHotels() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebPage',
        name:'Hotels Near Kedarnath 2026 — Complete Guide',
        description:'Where to stay for Kedarnath Yatra — hotel guide for Guptkashi, Sonprayag, Kedarnath Top and Phata.',
        url:`${SITE.baseUrl}/kedarnath-hotels`,
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>🏨 Hotel Guide · Kedarnath</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Hotels Near Kedarnath 2026 — Where to Stay</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:640, margin:'0 auto' }}>
            From Kedarnath Top to Guptkashi — honest guide to every halt, with prices and honest recommendations
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Kedarnath Yatra<span>›</span>
          <span>Hotels</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: May 21, 2026</div>

        <div style={{ background:'#fffbeb', border:'1px solid #fcd34d', borderRadius:12, padding:'14px 18px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#92400e', marginBottom:6 }}>⚠️ Book early for peak season (May–June, October)</div>
          <p style={{ margin:0, fontSize:13.5, color:'#78350f' }}>Good hotels near Kedarnath fill 30–45 days ahead in peak season. If your yatra is in May or October, confirm hotel bookings at least 3–4 weeks before departure. Our packages include pre-confirmed properties — you won't face last-minute availability issues.</p>
        </div>

        <p style={p}>
          There is no standard "hotel" at Kedarnath temple itself — only basic GMVN tents at the top. The real accommodation planning for Kedarnath involves choosing the right base camp from which to do the trek or take the helicopter. Most pilgrims stay in Guptkashi (40km away) — it has the best combination of comfort, altitude, and options. Here's the honest breakdown of each stop.
        </p>

        {stays.map(s => (
          <div key={s.loc} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'18px 20px', marginBottom:14 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:8, marginBottom:10 }}>
              <div>
                <span style={{ background:'rgba(232,146,10,0.12)', color:'#92640a', fontSize:11, fontWeight:700, padding:'2px 10px', borderRadius:20, marginBottom:6, display:'inline-block' }}>{s.type}</span>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, color:'var(--navy)', margin:0 }}>{s.loc}</h2>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontWeight:700, color:'var(--navy)', fontSize:14 }}>{s.budget}</div>
                <div style={{ fontSize:13 }}>{s.comfort}</div>
              </div>
            </div>
            <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, marginBottom:10 }}>{s.desc}</p>
            <div style={{ background:'var(--bg)', borderRadius:8, padding:'8px 12px', fontSize:13, color:'var(--navy)', borderLeft:'3px solid var(--gold)' }}>
              <strong>Our recommendation:</strong> {s.rec}
            </div>
          </div>
        ))}

        <h2 style={h2}>What Our Packages Include</h2>
        <p style={p}>
          All Shiv Ganga Travels Kedarnath packages include pre-confirmed hotel bookings. For the standard 3N/4D Kedarnath package, we include 1 night in Guptkashi on the way up, 1 night at Kedarnath Top (GMVN tent) if requested, and 1 night in Guptkashi or Rudraprayag on the way back. For senior citizen packages, we substitute the Kedarnath Top tent with an extra Guptkashi night. Every hotel is vetted by us personally — no surprises.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Book Kedarnath Yatra — Hotels Included</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>Pre-confirmed hotels at every halt. No last-minute scramble.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026 with hotel. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            View Package →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Badrinath Hotels','/badrinath-hotels'],['Kedarnath Weather','/kedarnath-weather'],['How to Reach Kedarnath','/blog/how-to-reach-kedarnath'],['Senior Citizen Guide','/blog/senior-citizen-char-dham'],['Trek Guide','/blog/kedarnath-trek-guide']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
