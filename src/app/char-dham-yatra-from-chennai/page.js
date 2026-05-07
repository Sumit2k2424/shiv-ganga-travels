import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Chennai 2026 — Packages',
  description: 'Char Dham Yatra from Chennai 2026. Flight to Dehradun or Haridwar, all-inclusive packages from ₹19,500. Direct operator, zero commission.',
  keywords: ['char dham yatra from chennai, char dham yatra package from chennai, chennai to char dham yatra 2026, char dham tour from chennai'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-chennai` },
  openGraph: { title: 'Char Dham Yatra Package from Chennai 2026 — Flight, Train & All-Inclusive Tours', description: 'Char Dham Yatra from Chennai 2026. Flight to Dehradun (2.5 hrs). Packages from ₹27,499. Tamil-speaking guide available on request. VIP darshan. Zero', url: `${SITE.baseUrl}/char-dham-yatra-from-chennai`, type:'website' },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone,
    address:{'@type':'PostalAddress',streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',addressLocality:'Haridwar',addressRegion:'Uttarakhand',postalCode:'249410',addressCountry:'IN'},
    aggregateRating:{'@type':'AggregateRating',ratingValue:4.9,reviewCount:850,bestRating:5},
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>From Chennai · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Char Dham Yatra Package from Chennai 2026</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>All-inclusive from <strong style={{color:'#FFD166'}}>From ₹27,499</strong> · Pickup from Chennai · VIP darshan · Zero commission</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginTop:24 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Chennai.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Chennai</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
          {/* Last updated */}
          <div style={{fontSize:12,color:'var(--text-muted)',marginBottom:16,textAlign:'right'}}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        <p style={{...p}}>Planning a <strong>Char Dham Yatra from Chennai</strong> in 2026? You are in the right place. Shiv Ganga Travels, based in Haridwar since 2010, has helped thousands of pilgrims from Chennai and across India complete the sacred four-dham circuit — Yamunotri, Gangotri, Kedarnath, and Badrinath — safely and comfortably. This page covers everything specific to Chennai pilgrims: how to get to Haridwar, what our packages include, and exactly what to expect.</p>

        <h2 style={{...h2}}>How to Reach Haridwar from Chennai</h2>
        <p style={{...p}}>Most Chennai pilgrims travel to Haridwar first, which is the official starting point of the Char Dham Yatra. From Haridwar, our vehicle picks you up and the journey begins. Here are your best travel options:</p>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
                    <div style={{display:'flex', gap:14, padding:'12px 16px', background:'#fff', borderRadius:10, border:'1px solid var(--border)', alignItems:'flex-start'}}>
            <span style={{fontSize:20, flexShrink:0}}>✈️</span>
            <div><div style={{fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3}}>✈️ Chennai → Dehradun</div><div style={{fontSize:13, color:'var(--text-mid)', lineHeight:1.5}}>Via Delhi or Bangalore · Total 3.5–5 hrs · ₹5,000–10,000</div></div>
          </div>
          <div style={{display:'flex', gap:14, padding:'12px 16px', background:'#fff', borderRadius:10, border:'1px solid var(--border)', alignItems:'flex-start'}}>
            <span style={{fontSize:20, flexShrink:0}}>✈️</span>
            <div><div style={{fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3}}>✈️ Chennai → Delhi → Haridwar</div><div style={{fontSize:13, color:'var(--text-mid)', lineHeight:1.5}}>Chennai to Delhi 2.5 hrs + Delhi to Haridwar by train 5 hrs</div></div>
          </div>
          <div style={{display:'flex', gap:14, padding:'12px 16px', background:'#fff', borderRadius:10, border:'1px solid var(--border)', alignItems:'flex-start'}}>
            <span style={{fontSize:20, flexShrink:0}}>🚂</span>
            <div><div style={{fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3}}>🚂 Train Chennai → Haridwar</div><div style={{fontSize:13, color:'var(--text-mid)', lineHeight:1.5}}>36–42 hrs · Grand Trunk Express routes · Budget but very long</div></div>
          </div>
        </div>
        <p style={{...p}}>Chennai and Tamil Nadu have a large Shaivite community with deep devotion to Kedarnath. We offer Tamil-speaking guide assistance and Jain meal options for our South Indian pilgrims.</p>

        <h2 style={{...h2}}>Our Char Dham Package from Chennai — ₹27,499 Per Person</h2>
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'20px 22px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>📦 Char Dham Package from Chennai includes:</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10 }}>
            {[
              {icon:'🚌', item:'AC private vehicle from Chennai airport or Haridwar station'},
              {icon:'🏨', item:'Hotel accommodation — all nights on twin sharing'},
              {icon:'🍱', item:'Daily breakfast + dinner throughout the tour'},
              {icon:'🎫', item:'VIP darshan at all 4 dhams — skip the queue'},
              {icon:'👤', item:'Experienced local Garhwali guide'},
              {icon:'📋', item:'Complete biometric registration handled for you'},
              {icon:'💊', item:'Oxygen cylinder + first aid kit on vehicle'},
              {icon:'🚫', item:'Zero commission — you pay us directly'},
            ].map(f=>(
              <div key={f.item} style={{ display:'flex', gap:10, padding:'10px 12px', background:'#fff', borderRadius:8, border:'1px solid var(--border)', alignItems:'center', fontSize:13, color:'var(--text-mid)' }}>
                <span style={{flexShrink:0,fontSize:18}}>{}</span>{f.icon}{f.item}
              </div>
            ))}
          </div>
        </div>

        <h2 style={{...h2}}>2026 Char Dham Opening Dates — Season is Open</h2>
        <div style={{ background:'#dcfce7', border:'1px solid #86efac', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'#15803d', marginBottom:10 }}>✅ 2026 Season Confirmed Open</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:8, fontSize:13.5, color:'var(--text-mid)' }}>
            <div>🌊 <strong>Yamunotri</strong><br/>Open: Apr 19 | Closes: Nov 11</div>
            <div>🌿 <strong>Gangotri</strong><br/>Open: Apr 19 | Closes: Nov 10</div>
            <div>🏔️ <strong>Kedarnath</strong><br/>Open: Apr 22 | Closes: Nov 11</div>
            <div>🕌 <strong>Badrinath</strong><br/>Open: Apr 23 | Closes: Nov 13</div>
          </div>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              {label:'Complete Yatra Guide', href:'/char-dham-yatra'},
              {label:'Kedarnath Trek Guide', href:'/blog/kedarnath-trek-guide'},
              {label:'Packing List', href:'/blog/char-dham-yatra-packing-list'},
              {label:'2026 New Rules', href:'/blog/char-dham-yatra-2026-new-rules'},
              {label:'Cost Breakdown', href:'/blog/char-dham-yatra-cost'},
            ].map(l=>(
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label} →</Link>
            ))}
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book Your Chennai Char Dham Package</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free itinerary within 2 hours. Pickup from Chennai International Airport or Haridwar railway station. Zero commission. ₹27,499 all-inclusive.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Chennai.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp Us</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 Call Now</a>
          </div>
        </div>
      </article>
    </>
  );
}
