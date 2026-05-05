import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Nagpur 2026 — Flight, Route & Package',
  description: 'Char Dham Yatra from Nagpur 2026. Fly Nagpur to Dehradun (2 hrs). All-inclusive packages from ₹22,999/person. Direct Haridwar operator. Zero commission.',
  keywords: ['char dham yatra from nagpur','nagpur to haridwar char dham','char dham package nagpur 2026','nagpur char dham yatra flight'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-nagpur` },
};

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:'How to reach Haridwar from Nagpur for Char Dham Yatra?',
        acceptedAnswer:{ '@type':'Answer', text:'Best option: Fly Nagpur (NAG) to Dehradun (DED) — direct or via Delhi — approximately 2 hours. Then 35km taxi to Haridwar (45 mins). Alternatively, take a train to Delhi and then another train or taxi to Haridwar (total ~22 hours).' } },
      { '@type':'Question', name:'How many days to plan for Char Dham Yatra from Nagpur?',
        acceptedAnswer:{ '@type':'Answer', text:'Plan 12–13 days: 1 day travel Nagpur to Haridwar, 9–10 days Char Dham circuit, 1–2 days return. Flying reduces total trip to 11–12 days.' } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>;
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Nagpur · Char Dham 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Package from Nagpur 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath — from <strong style={{ color:'#FFD166' }}>₹22,999/person</strong> · Fly Nagpur → Dehradun
          </p>
          {['✈️ 2hr flight to Dehradun','✅ Zero commission','🙏 9N/10D circuit','⭐ Direct operator Haridwar'].map(t=>(
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Nagpur</span>
        </div>
      </nav>
      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance to Haridwar','1,450km'],['Best Option','Fly to Dehradun'],['Flight Time','~2 hrs'],['Total Trip','12–13 days'],['Package From','₹22,999/person'],['Season','Apr 19 – Nov 2026']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>How to Reach Haridwar from Nagpur</h2>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
          Given the 1,450km distance, flying is by far the smartest option from Nagpur. IndiGo and Air India operate Nagpur to Dehradun flights — direct or via Delhi — with total travel time of around 2–3 hours. From Dehradun's Jolly Grant Airport, Haridwar is 35km (45-minute taxi). You can leave Nagpur in the morning and attend Haridwar's Ganga Aarti the same evening.
        </p>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
          If budget is a priority, the overnight train from Nagpur to Delhi (12–14 hours, Rajdhani or Duronto) followed by a Delhi–Haridwar train or taxi is a solid second option — total journey around 18–20 hours but very economical.
        </p>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Travel Options from Nagpur to Haridwar</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Option','Route','Duration','Approx Cost'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Flight (recommended)','NAG → DED (direct/via DEL) + taxi to HW','2–3 hrs + 45 min taxi','₹3,500–6,000'],
                ['Train (budget)','NGP → NDLS (Rajdhani/Duronto) + Shatabdi to HW','18–22 hrs total','₹1,200–2,000'],
                ['Train + Taxi','NGP → HW via Nagpur–Delhi train + taxi Dehradun','~16 hrs','₹1,500–2,500'],
              ].map(([opt,route,dur,cost],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{opt}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{route}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{dur}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book from Nagpur — Free Quote in 2 Hours</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Direct Haridwar operator. Zero commission. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Nagpur and want to book Char Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <a href="tel:+917017082807" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['From Mumbai','/char-dham-yatra-from-mumbai'],['Cost 2026','/blog/char-dham-yatra-cost'],['Registration','/blog/char-dham-yatra-registration']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
