import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Package from Lucknow 2026 — Distance, Route & Booking',
  description: 'Char Dham Yatra from Lucknow 2026. Distance to Haridwar: 520km. Route via NH30 Moradabad. All-inclusive packages from ₹22,999/person. Direct operator, zero commission.',
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-lucknow` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How to reach Haridwar from Lucknow for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Best option: Fly Lucknow to Dehradun (1.5 hrs, IndiGo) then taxi 35km to Haridwar. Or take LKO-HW Express (14309) — departs Lucknow 14:00, arrives Haridwar 06:15 next day.' } },
      { '@type': 'Question', name: 'What is the cost of Char Dham Yatra from Lucknow?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra from Lucknow starts at ₹22,999 per person for 9N/10D from Haridwar. Add Lucknow-Haridwar travel cost separately.' } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Lucknow · Char Dham 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Package from Lucknow 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath — from <strong style={{ color:'#FFD166' }}>₹22,999/person</strong> · Direct operator · Zero commission
          </p>
          {['📍 520km to Haridwar','✅ Zero commission','🙏 9N/10D circuit','⭐ 50,000+ pilgrims'].map(t=>(
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Lucknow</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance to Haridwar','520km'],['Best Route','Via NH30 Moradabad'],['Yatra Duration','9N/10D'],['Total Trip','11-13 days'],['Package From','₹22,999/person'],['Season','Apr 19 – Nov 2026']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>How to Reach Haridwar from Lucknow</h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.85, marginBottom:20 }}>
          Lucknow to Haridwar is 520km via NH30 through Moradabad. The fastest option is flying Lucknow to Dehradun (1.5 hrs, IndiGo daily) then a 35km taxi to Haridwar. The overnight LKO-HW Express train is also excellent — departs 14:00, arrives Haridwar 06:15 next morning.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Trains from Lucknow to Haridwar</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','Route','Dep','Arr','Fare'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}>
                <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>LKO-HW Express 14309</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>LKO → HW</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>14:00</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>06:15+1</td>
                <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>SL ₹280, 3A ₹740</td>
              </tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}>
                <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>Via Delhi Shatabdi</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>LKO → NDLS + HW</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>Various</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>~10 hrs total</td>
                <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>CC ₹1,100 total</td>
              </tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}>
                <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>Overnight LKO→HW</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>LKO → HW direct</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>Night trains</td>
                <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>12 hrs</td>
                <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>SL ₹260</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book from Lucknow — Free Quote in 2 Hours</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Direct operator. Zero commission. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Lucknow and want to book Char Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/char-dham-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Haridwar','/how-to-reach-haridwar'],['Cost 2026','/blog/char-dham-yatra-cost'],['Registration','/blog/char-dham-yatra-registration'],['Group Packages','/blog/char-dham-group-package']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
