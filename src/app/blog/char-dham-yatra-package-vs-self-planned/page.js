import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Package vs Self-Planned — Which is Better in 2026?',
  description: 'Honest comparison: booking a Char Dham Yatra package vs planning independently. Cost, convenience, flexibility, safety. Expert analysis by a 15-year Char Dham operator.',
  keywords: ['char dham yatra package vs self planned','char dham yatra self booking','is char dham yatra package worth it','char dham yatra independent travel','char dham yatra own arrangement'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-package-vs-self-planned` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is a Char Dham Yatra package worth it?',
        acceptedAnswer: { '@type': 'Answer', text: 'For most pilgrims, yes. A Char Dham Yatra package from a direct operator is typically 10–20% cheaper than self-arranging all components separately during peak season, while removing logistical complexity. The key is booking with a direct operator (not an aggregator) — Shiv Ganga Travels charges zero commission.' }},
      { '@type': 'Question', name: 'Can I do Char Dham Yatra on my own without a travel agent?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, it is possible. You need to arrange: biometric registration, vehicle hire, hotels at Barkot/Uttarkashi/Guptkashi/Joshimath, and Kedarnath trek logistics. During peak season (May–June), hotels fill 45–60 days in advance — independent travellers often find their preferred options unavailable. For first-time pilgrims or senior citizens, a package is strongly recommended.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
}

export default function PkgVsSelf() {
  const rows = [
    ['Hotel booking', 'Pre-blocked rooms guaranteed', 'May be unavailable in peak season'],
    ['Vehicle', 'Hill-certified, experienced driver included', 'Hire separately — quality varies'],
    ['Cost transparency', 'One price, all inclusive', 'Multiple separate costs, surprises common'],
    ['Biometric registration', 'Operator handles all paperwork', 'Self-arrange online or at Haridwar centre'],
    ['Kedarnath logistics', 'Pony/helicopter pre-arranged', 'Self-arrange at Gaurikund — long queues'],
    ['Emergency support', 'Operator on call 24/7', 'On your own'],
    ['Flexibility', 'Fixed itinerary — less spontaneous', 'Change plans freely'],
    ['Cost (2 people, peak)', '₹22,000–28,000 per person', '₹24,000–32,000 per person (peak hotels)'],
    ['Cost (10 people, peak)', '₹19,500 per person', '₹18,000–22,000 per person (possible saving)'],
    ['Best for', 'First-time, senior, 2–8 person groups', 'Experienced, 10+ people, repeat pilgrims'],
  ];
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Honest Comparison · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Package vs Self-Planned<br/><em style={{ color:'#FFD166', fontStyle:'italic' }}>Char Dham Yatra 2026</em></h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15 }}>Honest analysis from Dhanesh Chandra Mishra — 15-year Char Dham operator · Shiv Ganga Travels, Haridwar</p>
        </div>
      </section>
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12.5, color:'var(--text-muted)', display:'flex', gap:20, flexWrap:'wrap' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>Author:</strong> Dhanesh Chandra Mishra · Founder, Shiv Ganga Travels · Retd. Army Officer</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Last updated:</strong> April 2026</span>
        </div>
      </div>
      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={{ fontSize:15.5, color:'var(--text-mid)', lineHeight:1.85, marginBottom:24 }}>
          An honest answer from someone who runs packages: self-planned is absolutely possible, and for some pilgrims it is the better choice. But for most first-time pilgrims and senior citizens, a direct operator package wins on cost, convenience, and safety — especially if you book with a zero-commission direct operator rather than an aggregator.
        </p>
        <div style={{ overflowX:'auto', marginBottom:36 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr>
                <th style={{ padding:'12px 16px', textAlign:'left', background:'var(--navy)', color:'#fff', fontWeight:700, fontSize:12 }}>Factor</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--navy)', color:'#FFD166', fontWeight:700, fontSize:12 }}>Package (Direct Operator)</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--teal)', color:'#fff', fontWeight:700, fontSize:12 }}>Self-Planned</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([f,p,s],i) => (
                <tr key={f} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{f}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{p}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>⚠️ The most common self-planning mistake:</div>
          <p style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.75, margin:0 }}>Pilgrims who plan independently often underestimate hotel availability in peak season. Hotels at Guptkashi (Kedarnath base) and Joshimath (Badrinath base) fill up 45–60 days ahead in May–June. Operators like Shiv Ganga Travels pre-block rooms from January each year. A self-planner arriving in Haridwar in late April for a May departure will find most good hotels already gone.</p>
        </div>
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Get a Free Package Quote</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Compare our package price vs your self-planned estimate · Free advice in 30 minutes</p>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to compare package vs self-planned for Char Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp Dhanesh ji</a>
        </div>
      </article>
    </>
  );
}
