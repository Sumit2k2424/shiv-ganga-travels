import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days | Shiv Ganga Travels',
  description: 'Book Char Dham by helicopter 2026. All 4 dhams in 5N/6D from Dehradun. ₹85,000 per person. VIP darshan, luxury hotels, no queues.',
  keywords: ['char dham helicopter package, char dham helicopter tour 2026, char dham yatra by helicopter, helicopter char dham price 2026'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-helicopter` },
  openGraph: { title:'Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days | Shiv Ganga Travels', description:'Book Char Dham by helicopter 2026. All 4 dhams in 5N/6D from Dehradun. ₹85,000 per person. VIP darshan, luxury hotels, no queues.', url:`${SITE.baseUrl}/char-dham-helicopter`, type:'website' },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    address:{ '@type':'PostalAddress', streetAddress:'Near Har Ki Pauri', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249401', addressCountry:'IN' },
    aggregateRating:{ '@type':'AggregateRating', ratingValue:'4.9', reviewCount:'850', bestRating:'5' },
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
      {'@type':'ListItem',position:2,name:'Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days',item:`${SITE.baseUrl}/char-dham-helicopter`},
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
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>5N/6D · Dehradun base · ₹85,000/person · VIP darshan · Luxury hotels · No queues</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The <strong>Char Dham Helicopter Package</strong> is for pilgrims who want to complete all four sacred dhams — Yamunotri, Gangotri, Kedarnath, and Badrinath — in maximum comfort, minimum time, and with VIP darshan at every shrine. You fly by helicopter between each dham. No long mountain drives. No queues. Luxury hotels at every stop.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>This package is popular with senior pilgrims, corporate executives, and families where members have medical conditions that make mountain travel difficult. It's also a genuinely incredible experience — seeing the Himalayas from the air, watching Kedarnath temple appear below you in the snow, is something that sticks with you for life.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>What Makes This Package Different</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'12px',marginBottom:'20px'}}>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>🚁 Helicopter Between All Dhams</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>No road travel between shrines. Each dham by air — 7–20 minute flights.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>🎫 VIP Darshan Guaranteed</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>Pre-arranged priority darshan at all 4 temples. No 3-hour queues.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>🏨 Luxury Hotels</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>Best available hotels at each overnight stop. All meals included.</div>
          </div>
          <div style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)'}}>
            <div style={{fontWeight:700,fontSize:'13px',color:'var(--navy)',marginBottom:'4px'}}>💊 Medical Support</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>Oxygen equipment, pulse oximeters, medical attendant throughout.</div>
          </div>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/char-dham-yatra-helicopter-5n-6d-dehradun`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 5N/6D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹85,000</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/blog/kedarnath-helicopter-booking" href="/blog/kedarnath-helicopter-booking" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Kedarnath Helicopter Booking Guide"}<span> →</span></Link>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham 2026 Complete Guide"}<span> →</span></Link>
              <Link key="/blog/senior-citizen-char-dham" href="/blog/senior-citizen-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Senior Citizen Char Dham"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-cost" href="/blog/char-dham-yatra-cost" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Cost Breakdown"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Helicopter Package 2026 — All 4 Dhams in 6 Days.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>
    </>
  );
}
