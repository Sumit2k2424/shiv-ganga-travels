import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Package from Delhi 2026 — Distance, Route & Booking',
  description: 'Char Dham Yatra from Delhi 2026. Complete guide — distance 335km to Haridwar, route via NH58, train options, and all-inclusive packages from ₹22,999.',
  keywords: ['char dham yatra from delhi, char dham yatra package from delhi, delhi to char dham package, char dham tour from delhi 2026'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-delhi` },
  openGraph: { title:'Char Dham Yatra Package from Delhi 2026 — Distance, Route & Booking', description:'Char Dham Yatra from Delhi 2026. Complete guide — distance 335km to Haridwar, route via NH58, train options, and all-inclusive packages from ₹22,999.', url:`${SITE.baseUrl}/char-dham-yatra-from-delhi`, type:'website' },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    address:{ '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating:{ '@type':'AggregateRating', ratingValue:'4.9', reviewCount:'850', bestRating:'5' },
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
      {'@type':'ListItem',position:2,name:'Char Dham Yatra from Delhi 2026 — Route, Distance & Packages',item:`${SITE.baseUrl}/char-dham-yatra-from-delhi`},
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Yatra Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Char Dham Yatra from Delhi 2026 — Route, Distance & Packages</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>335km Delhi → Haridwar · NH58 route · Train options · Packages from ₹22,999</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Char Dham Yatra from Delhi 2026 — Route, Distance & Packages</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Delhi is the most common starting point for <strong>Char Dham Yatra</strong> pilgrims from across North India. The city has excellent connectivity to Haridwar — the official starting point of the yatra — by road, train, and even flight to Dehradun. This guide covers everything you need to plan a Char Dham Yatra from Delhi in 2026.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Delhi to Haridwar — Your Options</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'24px'}}>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px 16px',border:'1px solid var(--border)',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px'}}>
            <div><strong style={{color:'var(--navy)',fontSize:'13px'}}>🚂 Train (Recommended)</strong><br/><span style={{fontSize:'12.5px',color:'var(--text-mid)'}}>Haridwar Express / Shatabdi. 4–6 hours. ₹250–800. Trains daily from NDLS/NZM.</span></div>
            <div><strong style={{color:'var(--navy)',fontSize:'13px'}}>🚗 Private Car</strong><br/><span style={{fontSize:'12.5px',color:'var(--text-mid)'}}>NH58 via Meerut–Muzaffarnagar. 5–6 hours driving. 250 km. We arrange from Delhi at extra cost.</span></div>
            <div><strong style={{color:'var(--navy)',fontSize:'13px'}}>✈️ Flight to Dehradun</strong><br/><span style={{fontSize:'12.5px',color:'var(--text-mid)'}}>40 min flight to Jolly Grant Airport. Then 1.5 hrs by road to Haridwar/Rishikesh.</span></div>
          </div>
        </div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Our Delhi Pickup Service</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Our <strong>Char Dham Package from Delhi (10N/11D)</strong> includes pickup from any location in Delhi in our AC vehicle, transfer to Haridwar, and then the complete Char Dham circuit. This is a premium service — you don't worry about trains or connections. We handle everything from your front door.</p>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/char-dham-yatra-from-delhi-10n-11d`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 10N/11D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹22,999</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Yatra 2026 Guide"}<span> →</span></Link>
              <Link key="/blog/best-time-char-dham" href="/blog/best-time-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Best Time for Char Dham"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-cost" href="/blog/char-dham-yatra-cost" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Cost Breakdown"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-registration" href="/blog/char-dham-yatra-registration" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Registration Guide"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra from Delhi 2026 — Route, Distance & Packages.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>
    </>
  );
}
