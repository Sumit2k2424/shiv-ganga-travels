import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Chandigarh 2026 — Packages',
  description: 'Char Dham Yatra from Chandigarh 2026. 4-hour drive to Haridwar, all-inclusive packages from ₹19,500. Direct operator, zero commission.',
  keywords: ['char dham yatra from chandigarh','chandigarh to haridwar char dham','char dham package chandigarh 2026','chandigarh haridwar distance char dham yatra'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-chandigarh` },
  openGraph: { title:'Char Dham Yatra from Chandigarh 2026', description:'Chandigarh to Haridwar is just 180km — the closest major city to the Char Dham circuit. All-inclusive from ₹22,999.', url:`${SITE.baseUrl}/char-dham-yatra-from-chandigarh`, type:'website' },
};

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:'How far is Chandigarh from Haridwar?',
        acceptedAnswer:{ '@type':'Answer', text:'Chandigarh to Haridwar is approximately 180km via NH73 (Ropar–Morinda–Ambala route) or NH7 through Panchkula. The drive takes 3.5–4 hours. This makes Chandigarh the closest major Indian city to the Char Dham starting point.' } },
      { '@type':'Question', name:'What is the Char Dham Yatra package from Chandigarh?',
        acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra package from Chandigarh starts at ₹22,999/person for 9N/10D from Haridwar. The Chandigarh to Haridwar drive (3.5 hrs) can be arranged as an add-on.' } },
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
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Chandigarh · Char Dham 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Package from Chandigarh 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath — from <strong style={{ color:'#FFD166' }}>₹22,999/person</strong> · Only 180km to Haridwar
          </p>
          {['📍 180km to Haridwar','⏱ 3.5hr drive','✅ Zero commission','🙏 9N/10D circuit'].map(t=>(
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Chandigarh</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, border:'2px solid var(--teal)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>🎯 Chandigarh's Unique Advantage</div>
          <div style={{ fontSize:14, color:'#334155', lineHeight:1.7 }}>At just 180km from Haridwar, Chandigarh residents have the shortest travel time to the Char Dham starting point of any major Indian city. You can leave home in the morning and be in Haridwar in time for the evening Ganga Aarti.</div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance to Haridwar','180km'],['Drive Time','3.5–4 hours'],['Yatra Duration','9N/10D'],['Total Trip','11–12 days'],['Package From','₹22,999/person'],['Season','Apr 19 – Nov 2026']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>How to Reach Haridwar from Chandigarh</h2>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
          Chandigarh to Haridwar is an easy 180km drive — the best route is NH73 via Panchkula, Ambala, Yamunanagar, and Saharanpur. The roads are good dual carriageway for most of the route. Leave Chandigarh by 7 AM and you will be in Haridwar by 11 AM. Trains are also available via the Chandigarh–Delhi–Haridwar route, though given the short distance, most groups prefer to drive.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Trains from Chandigarh to Haridwar</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','Dep','Arr','Duration','Fare'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Chandigarh–Haridwar Exp (14631)','05:35','11:05','5.5 hrs','SL ₹200 / CC ₹500'],
                ['CDG–HW via Ambala (14033)','06:10','10:50','4.5 hrs','SL ₹190 / 3A ₹500'],
                ['Private taxi/cab','Flexible','Flexible','3.5 hrs','₹2,500–3,000 one way'],
              ].map(([train,dep,arr,dur,fare],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{train}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{dep}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{arr}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{dur}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Our Packages</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:12, marginBottom:28 }}>
          {[
            { name:'Classic 9N/10D', price:'₹22,999', note:'Most popular', desc:'All 4 dhams, standard hotels, all meals, AC cab from Haridwar' },
            { name:'Deluxe 11N/12D', price:'₹30,999', note:'Extra comfort', desc:'3-star hotels, slower pace, more rest days, VIP puja' },
            { name:'Senior Special 12N/13D', price:'₹27,999', note:'60+ pilgrims', desc:'Ground-floor rooms, medical attendant, oxygen, pony included' },
            { name:'Helicopter 5N/6D', price:'₹88,000', note:'Premium', desc:'All 4 dhams by helicopter from Dehradun. No trekking.' },
          ].map(p=>(
            <div key={p.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:2 }}>{p.name}</div>
              <div style={{ fontWeight:800, fontSize:20, color:'var(--gold)', marginBottom:4 }}>{p.price}<span style={{ fontSize:12, fontWeight:500, color:'var(--text-muted)' }}>/person</span></div>
              <div style={{ fontSize:11.5, fontWeight:600, color:'var(--teal)', marginBottom:6 }}>{p.note}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book from Chandigarh — Free Quote in 2 Hours</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Direct operator from Haridwar. Zero commission. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Chandigarh and want to book Char Dham Yatra 2026. Please share package details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <a href="tel:+917017082807" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Senior Package','/blog/senior-citizen-char-dham'],['Registration','/blog/char-dham-yatra-registration'],['Cost 2026','/blog/char-dham-yatra-cost']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
