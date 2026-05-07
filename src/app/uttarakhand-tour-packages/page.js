import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Uttarakhand Tour Packages 2026 — Hills, Wildlife, Adventure & Pilgrimage',
  description: 'Book Uttarakhand tour packages 2026 from Haridwar. Mussoorie, Nainital, Rishikesh, Corbett, Valley of Flowers, Auli skiing. Packages from ₹4,999.',
  keywords: ['uttarakhand tour packages, uttarakhand tour packages 2026, uttarakhand tourism packages, best uttarakhand packages from haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/uttarakhand-tour-packages` },
  openGraph: { title:'Uttarakhand Tour Packages 2026 — Hills, Wildlife, Adventure & Pilgrimage', description:'Book Uttarakhand tour packages 2026 from Haridwar. Mussoorie, Nainital, Rishikesh, Corbett, Valley of Flowers, Auli skiing. Packages from ₹4,999.', url:`${SITE.baseUrl}/uttarakhand-tour-packages`, type:'website' },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    address:{ '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating:{ '@type':'AggregateRating', ratingValue:4.3, reviewCount:30, bestRating:5 },
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
      {'@type':'ListItem',position:2,name:'Uttarakhand Tour Packages 2026 — Beyond the Dhams',item:`${SITE.baseUrl}/uttarakhand-tour-packages`},
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
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Uttarakhand Tour Packages 2026 — Beyond the Dhams</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Mussoorie · Nainital · Rishikesh · Jim Corbett · Valley of Flowers · Auli · From ₹4,999</p>
        </div>
      </section>
      {/* SEO Content section */}
      <section style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px 48px' }}>
        <div style={{ background:'var(--bg)', borderRadius:14, padding:'24px 28px', border:'1px solid var(--border)' }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:700, color:'var(--navy)', marginBottom:12 }}>
            Uttarakhand — The Land of the Gods
          </h2>
          <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:14 }}>
            Uttarakhand is home to four of Hinduism's most sacred shrines — the Char Dham — as well as the Panch Kedar, Panch Prayag, and some of India's most dramatic Himalayan landscapes. The state sits between the plains of Uttar Pradesh and the border with Tibet, stretching from the terai forests of Jim Corbett in the south to the glaciers of Kedarnath and Badrinath in the north.
          </p>
          <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:14 }}>
            As a Haridwar-based operator since 2010, Shiv Ganga Travels covers the entire state — from the spiritual circuits of the Char Dham and Panch Kedar, to the adventure destinations of Rishikesh and Auli, the hill stations of Mussoorie and Nainital, and the wildlife reserves of Jim Corbett. Every package is operated directly — no agents, no commission, no markup.
          </p>
          <p style={{ fontSize:15, color:'#334155', lineHeight:1.85 }}>
            Uttarakhand's yatra season runs from late April to early November. Rishikesh and Haridwar are accessible year-round. Auli's skiing season is December to March. Planning your visit to match the right season makes the difference between a comfortable journey and a challenging one — our team is available to advise on the best timing for any destination in the state.
          </p>
        </div>
      </section>


      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Uttarakhand Tour Packages 2026 — Beyond the Dhams</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Uttarakhand is vastly more than its four sacred dhams. The state is home to some of India’s most spectacular hill stations, dense wildlife reserves, adrenaline-inducing adventure sports, and UNESCO-designated natural wonders. If you've done the Char Dham Yatra and want to explore more of this incredible state — or if you’re visiting with a family that includes both pilgrims and adventure seekers — our Uttarakhand tour packages cover all of it.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Our Uttarakhand Package Categories</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'12px',marginBottom:'24px'}}>
          <a href="/packages/mussoorie-dehradun-dhanaulti-3n-4d" style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)',textDecoration:'none'}}>
            <div style={{fontWeight:700,fontSize:'13.5px',color:'var(--navy)',marginBottom:'4px'}}>🏔️ Mussoorie + Rishikesh</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>3N/4D · From ₹8,499 · Hill station + spiritual</div>
          </a>
          <a href="/packages/nainital-kausani-ranikhet-4n-5d" style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)',textDecoration:'none'}}>
            <div style={{fontWeight:700,fontSize:'13.5px',color:'var(--navy)',marginBottom:'4px'}}>🌊 Nainital + Kausani</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>4N/5D · From ₹9,999 · Lakes + Kumaon views</div>
          </a>
          <a href="/packages/rishikesh-adventure-rafting-camping-2n-3d" style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)',textDecoration:'none'}}>
            <div style={{fontWeight:700,fontSize:'13.5px',color:'var(--navy)',marginBottom:'4px'}}>🏄 Rishikesh Adventure</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>2N/3D · From ₹4,999 · Rafting + camping</div>
          </a>
          <a href="/packages/valley-of-flowers-hemkund-sahib-5n-6d" style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)',textDecoration:'none'}}>
            <div style={{fontWeight:700,fontSize:'13.5px',color:'var(--navy)',marginBottom:'4px'}}>🌸 Valley of Flowers</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>5N/6D · From ₹13,499 · UNESCO Heritage</div>
          </a>
          <a href="/packages/auli-joshimath-skiing-3n-4d" style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)',textDecoration:'none'}}>
            <div style={{fontWeight:700,fontSize:'13.5px',color:'var(--navy)',marginBottom:'4px'}}>⛷️ Auli Skiing</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>3N/4D · From ₹12,499 · India’s best ski resort</div>
          </a>
          <a href="/packages/jim-corbett-nainital-wildlife-5n-6d" style={{background:'#fff',borderRadius:'10px',padding:'14px',border:'1px solid var(--border)',textDecoration:'none'}}>
            <div style={{fontWeight:700,fontSize:'13.5px',color:'var(--navy)',marginBottom:'4px'}}>🐯 Jim Corbett</div>
            <div style={{fontSize:'12.5px',color:'var(--text-mid)'}}>5N/6D · From ₹13,999 · Tiger reserve + Nainital</div>
          </a>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:12}}>📦 Browse All Packages:</div>
          <Link href="/packages/uttarakhand" style={{display:'inline-flex',alignItems:'center',gap:6,background:'var(--navy)',color:'#fff',padding:'10px 20px',borderRadius:8,fontWeight:700,fontSize:13.5,textDecoration:'none'}}>View Uttarakhand Packages →</Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/blog/valley-of-flowers-trek" href="/blog/valley-of-flowers-trek" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Valley of Flowers Trek Guide"}<span> →</span></Link>
              <Link key="/blog/rishikesh-adventure-guide" href="/blog/rishikesh-adventure-guide" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Rishikesh Adventure Guide"}<span> →</span></Link>
              <Link key="/blog/best-time-char-dham" href="/blog/best-time-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Best Time to Visit Uttarakhand"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Uttarakhand Tour Packages 2026 — Beyond the Dhams.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>
    </>
  );
}
