import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Cab Booking 2026 — Innova & Tempo',
  description: 'Book Char Dham Yatra cab from Haridwar 2026. Innova, Tempo Traveller, SUV. Door-to-door pickup. Direct operator, best rates.',
  keywords: ['char dham yatra cab booking','char dham yatra taxi','haridwar to char dham cab','char dham yatra innova','char dham yatra tempo traveller','char dham cab price 2026'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-cab-booking` },
  openGraph: { title: 'Char Dham Yatra Cab Booking 2026 — All Vehicles from Haridwar', description: 'Innova, Tempo Traveller, Ertiga for Char Dham Yatra from Haridwar. Fixed rates, AC vehicles, hill-experienced drivers.', url: `${SITE.baseUrl}/char-dham-yatra-cab-booking`, type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Cab Booking 2026 — All Vehicles from Haridwar',
    description: 'Innova, Tempo Traveller, Ertiga for Char Dham Yatra from Haridwar. Fixed rates, AC vehicles, hill-experienced drivers.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Cab Booking 2026 — All Vehicles from Haridwa | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TaxiService',
    name:`${SITE.name} — Char Dham Cab Service`,
    url:`${SITE.baseUrl}/char-dham-yatra-cab-booking`,
    telephone:SITE.phone, areaServed:'Uttarakhand',
    provider:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone },
  };
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
    { '@type':'Question', name:'What is the cab fare for Char Dham Yatra from Haridwar?', acceptedAnswer:{ '@type':'Answer', text:'Cab fares for Char Dham Yatra from Haridwar start at ₹18,000 for a Swift Dzire (4-seater) and go up to ₹45,000 for a Tempo Traveller (12-seater) for the complete 10-12 day circuit. Innova Crysta is ₹26,000–32,000 for the full Char Dham route.' }},
    { '@type':'Question', name:'Which vehicle is best for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Innova Crysta is the most popular for families of 4-6. Tempo Traveller (12-seater) is best for groups. Swift Dzire is economical for small groups. All vehicles must be hill-certified and our drivers have 5+ years mountain driving experience.' }},
    { '@type':'Question', name:'Is cab included in Char Dham Yatra packages?', acceptedAnswer:{ '@type':'Answer', text:'Yes — all our Char Dham Yatra packages include a dedicated AC vehicle. You can also book just the cab service separately if you have your own accommodation arranged.' }},
  ]};
  const bc = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Cab Booking',item:`${SITE.baseUrl}/char-dham-yatra-cab-booking`},
  ]};
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/>
  </>);
}

const vehicles = [
  { name:'Swift Dzire', seats:4, type:'Sedan', price:'₹18,000–24,000', best:'Couples & small families', ac:true, luggage:'2 bags', img:'🚗', features:['AC','4 comfortable seats','Best for budget travel','Hill-terrain certified'] },
  { name:'Innova Crysta', seats:6, type:'Premium SUV', price:'₹26,000–32,000', best:'Families of 4–6', ac:true, luggage:'4 bags', img:'🚙', features:['AC','6 plush seats','Most popular choice','Excellent mountain grip','High ground clearance'], popular:true },
  { name:'Innova HyCross', seats:6, type:'Premium Hybrid', price:'₹30,000–38,000', best:'Premium travelers', ac:true, luggage:'4 bags', img:'🚙', features:['AC','Hybrid engine','Better fuel efficiency','Smooth hill performance','Premium interiors'] },
  { name:'Tempo Traveller (9-seater)', seats:9, type:'Mini Van', price:'₹32,000–40,000', best:'Groups of 7–9', ac:true, luggage:'6 bags', img:'🚐', features:['AC','9 push-back seats','Ideal for groups','Luggage carrier roof'] },
  { name:'Tempo Traveller (12-seater)', seats:12, type:'Group Van', price:'₹38,000–46,000', best:'Groups of 10–12', ac:true, luggage:'8 bags', img:'🚐', features:['AC','12 seats','Best per-seat economy','Roof carrier','Group pilgrimages'] },
];

const routes = [
  { from:'Haridwar', to:'Kedarnath Base (Gaurikund)', dist:'225 km', time:'6–7 hrs', note:'Via Guptkashi', href:'/haridwar-to-kedarnath-cab' },
  { from:'Haridwar', to:'Badrinath', dist:'320 km', time:'8–9 hrs', note:'Via Joshimath', href:'/haridwar-to-badrinath-cab' },
  { from:'Haridwar', to:'Gangotri', dist:'265 km', time:'7–8 hrs', note:'Via Uttarkashi', href:'/haridwar-to-gangotri-cab' },
  { from:'Delhi', to:'Haridwar', dist:'210 km', time:'4–5 hrs', note:'NH58 via Meerut', href:'/delhi-to-haridwar-cab' },
  { from:'Haridwar', to:'Yamunotri Base (Janki Chatti)', dist:'175 km', time:'5–6 hrs', note:'Via Barkot', href:'/yamunotri-yatra' },
];

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.7rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:14, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function CabBooking() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🚙 Cab Booking · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Char Dham Yatra Cab Booking 2026</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Innova Crysta · Tempo Traveller · Swift Dzire · from Haridwar · Hill-experienced drivers · Fixed rates · AC vehicles</p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginTop:24 }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a cab for Char Dham Yatra 2026. Please share rates and availability.')}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book Cab on WhatsApp</a>
          <a href='tel:+917817996730' style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>📞 {SITE.phone}</a>
        </div>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        <span>Char Dham Cab Booking</span>
      </div>
    </nav>

    <div style={{ maxWidth:960, margin:'0 auto', padding:'40px 20px 60px' }}>

      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Shiv Ganga Travels provides dedicated cab service for Char Dham Yatra 2026 from Haridwar, Rishikesh, and Delhi. All our vehicles are AC, hill-terrain certified, and driven by experienced Garhwali drivers who know every curve of the Kedarnath, Badrinath, Gangotri, and Yamunotri routes. You can book a cab as a standalone service or as part of our all-inclusive Char Dham Yatra package.</p>

      <div style={{ background:'#dcfce7', border:'1px solid #86efac', borderRadius:12, padding:'14px 18px', marginBottom:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'#15803d', marginBottom:4 }}>✅ What's included in every cab booking</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:10, fontSize:13, color:'var(--text-mid)' }}>
          {['AC vehicle throughout','Hill-experienced driver','Toll & parking paid','Fuel included','Driver allowance included','10+ years mountain driving experience'].map(f => <span key={f}>✓ {f}</span>)}
        </div>
      </div>

      <h2 style={h2}>Vehicle Options & Rates</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(270px,100%),1fr))', gap:14, marginBottom:32 }}>
        {vehicles.map(v => (
          <div key={v.name} style={{ background:'#fff', borderRadius:14, border:`${v.popular ? '2px solid var(--navy)' : '1px solid var(--border)'}`, padding:'18px', position:'relative', overflow:'hidden' }}>
            {v.popular && <div style={{ position:'absolute', top:0, right:0, background:'var(--navy)', color:'#fff', fontSize:10, fontWeight:700, padding:'4px 12px', borderRadius:'0 14px 0 8px', letterSpacing:'0.06em' }}>MOST POPULAR</div>}
            <div style={{ fontSize:32, marginBottom:8 }}>{v.img}</div>
            <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:2 }}>{v.name}</div>
            <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:10 }}>{v.type} · {v.seats} seats · {v.luggage}</div>
            <div style={{ fontWeight:800, fontSize:20, color:'var(--navy)', fontFamily:'var(--font-display)', marginBottom:8 }}>{v.price}</div>
            <div style={{ fontSize:11.5, color:'var(--text-muted)', marginBottom:12 }}>Full Char Dham circuit (10–12 days)</div>
            <ul style={{ listStyle:'none', marginBottom:14 }}>
              {v.features.map(f => <li key={f} style={{ fontSize:12.5, color:'var(--text-mid)', padding:'3px 0', display:'flex', gap:6 }}><span style={{ color:'var(--teal)' }}>✓</span>{f}</li>)}
            </ul>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book a ${v.name} for Char Dham Yatra 2026.`)}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: v.popular ? 'var(--navy)' : 'var(--navy-light)', color: v.popular ? '#fff' : 'var(--navy)', padding:'9px 16px', borderRadius:8, fontWeight:700, fontSize:12.5, textDecoration:'none', display:'block', textAlign:'center' }}>
              Book {v.name} →
            </a>
          </div>
        ))}
      </div>

      <h2 style={h2}>Key Routes & Distances</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:32 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
          <thead>
            <tr style={{ background:'var(--navy-light)' }}>
              <th style={{ padding:'10px 16px', textAlign:'left', fontWeight:700, fontSize:11.5, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Route</th>
              <th style={{ padding:'10px 16px', textAlign:'center', fontWeight:700, fontSize:11.5, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Distance</th>
              <th style={{ padding:'10px 16px', textAlign:'center', fontWeight:700, fontSize:11.5, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Drive Time</th>
              <th style={{ padding:'10px 16px', textAlign:'left', fontWeight:700, fontSize:11.5, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Note</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r, i) => (
              <tr key={r.to} style={{ borderTop:'1px solid var(--border)', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                <td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)' }}>
                  <Link href={r.href} style={{ color:'var(--navy)', textDecoration:'none' }}>{r.from} → {r.to}</Link>
                </td>
                <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)' }}>{r.dist}</td>
                <td style={{ padding:'11px 16px', textAlign:'center', fontWeight:600, color:'var(--navy)' }}>{r.time}</td>
                <td style={{ padding:'11px 16px', color:'var(--text-muted)', fontSize:12.5 }}>{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>Frequently Asked Questions</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:32 }}>
        {[
          { q:'What is the cab fare for Char Dham Yatra from Haridwar?', a:'Full Char Dham Yatra cab fares start at ₹18,000 for a Swift Dzire (4-seater) and go up to ₹46,000 for a 12-seater Tempo Traveller for the complete 10–12 day circuit. Innova Crysta — the most popular choice — costs ₹26,000–32,000. All fares include fuel, toll, parking, and driver allowance.' },
          { q:'Which vehicle is best for Char Dham Yatra?', a:'Innova Crysta is best for families of 4–6. Tempo Traveller is ideal for groups of 7–12. Swift Dzire is economical for couples or small groups. All vehicles are hill-terrain certified with drivers who have 5+ years of mountain driving experience on Char Dham routes.' },
          { q:'Can I book just the cab without a full package?', a:'Yes. We offer standalone cab-only service for the Char Dham circuit if you have your own accommodation arranged. Contact us on WhatsApp with your dates, group size, and pickup point to get an exact quote.' },
          { q:'What happens if the road is blocked due to landslide?', a:'Mountain roads in Uttarakhand are subject to weather disruptions. Our drivers are experienced in alternate routes and we stay connected with local traffic authorities. We do not charge extra for unavoidable detours or delays.' },
        ].map((faq, i, arr) => (
          <div key={i} style={{ padding:'16px 20px', borderBottom: i < arr.length-1 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:7 }}>Q. {faq.q}</div>
            <div style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7 }}>{faq.a}</div>
          </div>
        ))}
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
        <h2 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book Your Char Dham Cab Today</h2>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free quote in 30 minutes · Fixed rates · No hidden charges · 2026 season open</p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a cab for Char Dham Yatra 2026. Please share vehicle options and rates.')}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background:'#25D366', color:'#fff', padding:'12px 26px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp for Quote</a>
          <a href='tel:+917817996730' style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'12px 26px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>📞 {SITE.phone}</a>
        </div>
      </div>
    </div>
  </>);
}
