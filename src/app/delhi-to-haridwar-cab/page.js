import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Delhi to Haridwar Cab 2026 — Taxi Fare,',
  description: 'Book cab from Delhi to Haridwar for Char Dham Yatra 2026. 210km via NH58, 4–5 hours. Swift Dzire from ₹2,800. Pickup from IGI Airport, NDLS, or home.',
  keywords: ['delhi to haridwar cab,delhi to haridwar taxi fare,delhi to haridwar distance,cab from delhi to haridwar char dham yatra'],
  alternates: { canonical: `${SITE.baseUrl}/delhi-to-haridwar-cab` },
  openGraph: { title: 'Delhi to Haridwar Cab 2026 — Taxi Fare, Distance, Char Dham Pickup', description: 'Book cab from Delhi to Haridwar for Char Dham Yatra 2026. 210km via NH58, 4–5 hours. Swift Dzire from ₹2,800. Pickup from IGI Airport, NDLS, or home.', url: `${SITE.baseUrl}/delhi-to-haridwar-cab`, type:'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi to Haridwar Cab 2026 — Taxi Fare, Distance, Char Dham Pickup',
    description: 'Book cab from Delhi to Haridwar for Char Dham Yatra 2026. 210km via NH58, 4–5 hours. Swift Dzire from ₹2,800. Pickup from IGI Airport, NDLS, or home.',
    images: [{ url: '/opengraph-image', alt: 'Delhi to Haridwar Cab 2026 — Taxi Fare, Distance, Char Dham  | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TaxiService',
    name:'Delhi / NCR to Haridwar Cab — Shiv Ganga Travels',
    url:`${SITE.baseUrl}/delhi-to-haridwar-cab`,
    telephone:SITE.phone, areaServed:'Uttarakhand',
    provider:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl },
  };
  const bc = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Cab Booking',item:`${SITE.baseUrl}/char-dham-yatra-cab-booking`},
    {'@type':'ListItem',position:3,name:'Delhi / NCR to Haridwar',item:`${SITE.baseUrl}/delhi-to-haridwar-cab`},
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>🚙 Cab Booking · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.6rem,4vw,2.6rem)', marginBottom:12 }}>Delhi / NCR to Haridwar Cab 2026</h1>
        <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:24 }}>
          {[{icon:'📏',val:'210 km'},{icon:'⏱',val:'4–5 hrs'},{icon:'📍',val:'Via Muzaffarnagar → Roorkee'}].map(c=>(
            <span key={c.val} style={{ background:'rgba(255,255,255,0.12)', backdropFilter:'blur(6px)', color:'#fff', fontSize:12.5, padding:'6px 14px', borderRadius:100, display:'flex', gap:6, alignItems:'center' }}>{c.icon} {c.val}</span>
          ))}
        </div>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a cab from Delhi / NCR to Haridwar for Char Dham Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background:'#25D366', color:'#fff', padding:'12px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
          <a href='tel:+917017082807' style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'12px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>📞 {SITE.phone}</a>
        </div>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/char-dham-yatra-cab-booking" style={{ color:'var(--navy)', textDecoration:'none' }}>Cab Booking</Link><span>›</span>
        <span>Delhi / NCR to Haridwar</span>
      </div>
    </nav>

    <div style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>

      <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:12 }}>
        {[{icon:'📏',label:'Distance',val:'210 km'},{icon:'⏱',label:'Drive time',val:'4–5 hrs'},{icon:'🏔️',label:'Route',val:'Via Muzaffarnagar → Roorkee'},{icon:'ℹ️',label:'Note',val:'Pickup from IGI Airport, New Delhi Stati…'}].map(s=>(
          <div key={s.label} style={{ textAlign:'center' }}>
            <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
            <div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
          </div>
        ))}
      </div>

      <h2 style={{...h2}}>Full Route</h2>
      <p style={{...p}}>
        <strong>NH58 via Meerut → Muzaffarnagar → Roorkee → Haridwar</strong><br/>
        <span style={{ fontSize:13.5, color:'var(--text-muted)' }}>Pickup from IGI Airport, New Delhi Station, Hazrat Nizamuddin, or any Delhi address.</span>
      </p>

      <h2 style={{...h2}}>Vehicle Options & Fares</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
          <thead>
            <tr style={{ background:'var(--navy-light)' }}>
              <th style={{ padding:'10px 16px', textAlign:'left', fontWeight:700, fontSize:11.5, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Vehicle</th>
              <th style={{ padding:'10px 16px', textAlign:'center', fontWeight:700, fontSize:11.5, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Seats</th>
              <th style={{ padding:'10px 16px', textAlign:'right', fontWeight:700, fontSize:11.5, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>One-way Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop:'1px solid var(--border)' }}><td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)' }}>Swift Dzire</td><td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-muted)' }}>4 seats</td><td style={{ padding:'11px 16px', textAlign:'right', fontWeight:700, color:'var(--navy)', fontSize:15 }}>₹2,800–3,500</td></tr>
<tr style={{ borderTop:'1px solid var(--border)' }}><td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)' }}>Innova Crysta</td><td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-muted)' }}>6 seats</td><td style={{ padding:'11px 16px', textAlign:'right', fontWeight:700, color:'var(--navy)', fontSize:15 }}>₹5,000–6,000</td></tr>
<tr style={{ borderTop:'1px solid var(--border)' }}><td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)' }}>Tempo Traveller 9S</td><td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-muted)' }}>9 seats</td><td style={{ padding:'11px 16px', textAlign:'right', fontWeight:700, color:'var(--navy)', fontSize:15 }}>₹7,000–8,500</td></tr>
          </tbody>
        </table>
      </div>

      <h2 style={{...h2}}>Driver Tips for This Route</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:28 }}>
        <div style={{ display:'flex', gap:10, padding:'10px 14px', background:'#fff', borderRadius:9, border:'1px solid var(--border)', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}><span style={{ flexShrink:0 }}>💡</span>Start by 4–5 AM from Delhi to avoid NH58 traffic and reach Haridwar by 9 AM</div>
<div style={{ display:'flex', gap:10, padding:'10px 14px', background:'#fff', borderRadius:9, border:'1px solid var(--border)', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}><span style={{ flexShrink:0 }}>💡</span>Avoid Friday evenings and weekends — NH58 congested near Meerut</div>
<div style={{ display:'flex', gap:10, padding:'10px 14px', background:'#fff', borderRadius:9, border:'1px solid var(--border)', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}><span style={{ flexShrink:0 }}>💡</span>Expressway route via Meerut Expressway is faster than old NH route</div>
<div style={{ display:'flex', gap:10, padding:'10px 14px', background:'#fff', borderRadius:9, border:'1px solid var(--border)', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}><span style={{ flexShrink:0 }}>💡</span>We can combine with complete Char Dham Yatra — one pickup from Delhi, return to Delhi</div>
      </div>

      <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>🚙 Other cab routes:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[
            {label:'Full Char Dham Cab',href:'/char-dham-yatra-cab-booking'},
            {label:'Haridwar → Kedarnath',href:'/haridwar-to-kedarnath-cab'},
            {label:'Haridwar → Badrinath',href:'/haridwar-to-badrinath-cab'},
            {label:'Haridwar → Gangotri',href:'/haridwar-to-gangotri-cab'},
            {label:'Delhi → Haridwar',href:'/delhi-to-haridwar-cab'},
          ].filter(l=>!l.href.includes('delhi-to-haridwar-cab')).map(l=>(
            <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Delhi / NCR to Haridwar Cab</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Quote in 30 minutes · Fixed fare · No hidden charges · AC vehicle</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a cab from Delhi / NCR to Haridwar for Char Dham Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href='tel:+917017082807' style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>
    </div>
  </>);
}
