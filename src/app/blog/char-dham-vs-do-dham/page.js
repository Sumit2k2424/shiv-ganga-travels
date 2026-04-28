import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham vs Do Dham Yatra 2026 — Which is Right for You?',
  description: 'Detailed comparison: Char Dham Yatra (all 4 dhams) vs Do Dham Yatra (Kedarnath + Badrinath). Cost, days, difficulty, best for whom. Expert guide by Shiv Ganga Travels, Haridwar.',
  keywords: ['char dham vs do dham','char dham yatra vs do dham yatra','difference between char dham and do dham','which is better char dham or do dham','do dham yatra 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-vs-do-dham` },
};

const ROWS = [
  ['Dhams covered', 'All 4 — Yamunotri, Gangotri, Kedarnath, Badrinath', 'Usually 2 — Kedarnath + Badrinath'],
  ['Duration', '10–12 days (minimum)', '5–6 days (comfortable)'],
  ['Road distance', '~1,500–1,600 km from Haridwar', '~750–800 km from Haridwar'],
  ['Total trekking', '22 km (6km Yamunotri + 16km Kedarnath)', '16 km (Kedarnath only)'],
  ['Package cost (road)', 'From ₹19,500 per person', 'From ₹10,999 per person'],
  ['Package cost (helicopter)', 'From ₹85,000 per person', 'From ₹18,000 per person'],
  ['Difficulty level', 'Moderate — 10+ days of mountain travel', 'Easy to moderate — manageable in 5 days'],
  ['Best for', 'First-time complete pilgrims, those with 12+ days', 'Limited time, first-time yatris, repeat pilgrims'],
  ['Senior-friendly', 'Yes — with 12N/13D senior package', 'Yes — most manageable option for 65+'],
  ['Spiritual completeness', 'Complete circuit — all 4 dhams', 'The 2 most powerful shrines (Shiva + Vishnu)'],
  ['Booking lead time', '60+ days for peak season', '30–45 days sufficient'],
];

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the difference between Char Dham and Do Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra covers all 4 sacred shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath — in 10–12 days. Do Dham Yatra covers 2 dhams (typically Kedarnath + Badrinath) in 5–6 days. Char Dham costs ₹19,500+ per person; Do Dham costs ₹10,999+ per person.' }},
      { '@type': 'Question', name: 'Which is better — Char Dham or Do Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'For pilgrims with 10+ days, Char Dham is the complete and most spiritually fulfilling option. For those with limited time (5–7 days), first-time pilgrims wanting to test mountain travel, or senior citizens, Do Dham (Kedarnath + Badrinath) is the better choice — it covers the two most significant shrines and is more manageable.' }},
      { '@type': 'Question', name: 'Can I do Char Dham Yatra in 7 days?',
        acceptedAnswer: { '@type': 'Answer', text: 'Technically possible but not recommended. A 7-day Char Dham itinerary would require 200+ km of mountain driving daily and allow minimal time at each dham. The Kedarnath trek alone takes 4–6 hours one way. A Do Dham package in 5–6 days is far more sustainable for most pilgrims.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
}

export default function ComparisonPage() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Comparison Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Char Dham vs Do Dham Yatra<br/><em style={{ color:'#FFD166', fontStyle:'italic' }}>Which is Right for You?</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15 }}>Full comparison — duration, cost, difficulty, best for whom · Expert guide by Dhanesh Chandra Mishra, Shiv Ganga Travels</p>
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12.5, color:'var(--text-muted)', display:'flex', gap:20, flexWrap:'wrap' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>Author:</strong> Dhanesh Chandra Mishra, Founder, Shiv Ganga Travels (Retd. Army Officer)</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Last updated:</strong> April 2026</span>
          <span>📊 <strong style={{ color:'var(--navy)' }}>Based on:</strong> 50,000+ pilgrims, 15 years</span>
        </div>
      </div>

      <article style={className='blog-container'}>

        <p style={{ fontSize:15.5, color:'var(--text-mid)', lineHeight:1.85, marginBottom:24 }}>
          One of the most common questions Dhanesh ji receives at Shiv Ganga Travels: <strong>"Should we do Char Dham or Do Dham?"</strong> After guiding 50,000+ pilgrims since 2010, the answer depends entirely on your time, health, and what you want from the yatra.
        </p>

        {/* Comparison table */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:600, color:'var(--navy)', marginBottom:16 }}>Side-by-Side Comparison</h2>
        <div style={{ overflowX:'auto', marginBottom:36 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr>
                <th style={{ padding:'12px 16px', textAlign:'left', background:'var(--navy)', color:'#fff', fontWeight:700, fontSize:12 }}>Feature</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--navy)', color:'#FFD166', fontWeight:700, fontSize:12 }}>Char Dham Yatra (All 4)</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--teal)', color:'#fff', fontWeight:700, fontSize:12 }}>Do Dham Yatra</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([feature, cd, dd], i) => (
                <tr key={feature} style={{ borderBottom:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{feature}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{cd}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{dd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', marginBottom:12 }}>Choose Char Dham if...</h2>
        {['You have 10+ days available and no serious health conditions at altitude','You are completing the yatra for the first time and want the full spiritual circuit','You are aged 40–65 and in reasonable fitness','Family reunion or group pilgrimage where all members want the complete experience','You want to honour a vow (mannat) that requires all four dhams'].map(r => (
          <div key={r} style={{ display:'flex', gap:10, padding:'8px 0', borderBottom:'1px solid var(--border)', fontSize:15.5, color:'#2D3748' }}><span style={{ color:'var(--navy)', fontWeight:700 }}>✓</span>{r}</div>
        ))}

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', marginBottom:12, marginTop:28 }}>Choose Do Dham (Kedarnath + Badrinath) if...</h2>
        {['You have only 5–7 days available','You are above 65 or have health conditions','You are a first-time yatri wanting to experience mountain pilgrimage before committing to the full circuit','You have previously done Yamunotri and Gangotri and want to complete Kedarnath + Badrinath','Budget is a key consideration — Do Dham costs approximately 40% less than Char Dham'].map(r => (
          <div key={r} style={{ display:'flex', gap:10, padding:'8px 0', borderBottom:'1px solid var(--border)', fontSize:15.5, color:'#2D3748' }}><span style={{ color:'var(--teal)', fontWeight:700 }}>✓</span>{r}</div>
        ))}

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', margin:'28px 0' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>💬 From 15 years of experience:</div>
          <p style={{ fontSize:15.5, color:'#2D3748', lineHeight:1.75, margin:0 }}>
            "In my experience, pilgrims who rush Char Dham in 7–8 days feel unsatisfied — they missed the experience at each dham. I always recommend: if you have less than 10 days, do Do Dham well rather than Char Dham in a rush. The journey matters as much as the destination." — <strong>Dhanesh Chandra Mishra, Founder, Shiv Ganga Travels</strong>
          </p>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Not sure which to choose? Ask Dhanesh ji directly.</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Free advice · No obligation · Direct WhatsApp response in 30 minutes</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help deciding between Char Dham and Do Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/char-dham-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Char Dham →</Link>
            <Link href="/do-dham-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Do Dham →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
