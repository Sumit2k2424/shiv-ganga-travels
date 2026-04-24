import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Yamunotri Yatra 2026 — Trek, Package, Surya Kund & Temple Guide',
  description: 'Plan Yamunotri Yatra 2026 from Haridwar. ₹5,499 per person. 6km trek from Janki Chatti, Surya Kund hot spring, Divya Shila. Pony available.',
  keywords: ['yamunotri yatra, yamunotri yatra 2026, yamunotri trek, haridwar to yamunotri, yamunotri yatra package'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-yatra` },
  openGraph: { title:'Yamunotri Yatra 2026 — Trek, Package, Surya Kund & Temple Guide', description:'Plan Yamunotri Yatra 2026 from Haridwar. ₹5,499 per person. 6km trek from Janki Chatti, Surya Kund hot spring, Divya Shila. Pony available.', url:`${SITE.baseUrl}/yamunotri-yatra`, type:'website' },
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
      {'@type':'ListItem',position:2,name:'Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit',item:`${SITE.baseUrl}/yamunotri-yatra`},
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
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>6km trek · Surya Kund 94°C hot spring · Pony available · First stop in Char Dham</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Yamunotri, at 3,291 metres in the Uttarkashi district, is the source of the Yamuna river and the westernmost of the four Char Dhams. It is always the first shrine visited in the traditional Char Dham Yatra circuit, before Gangotri, Kedarnath, and Badrinath. The temple enshrines a black marble idol of Goddess Yamuna.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>The Yamunotri Trek</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The trek starts at <strong>Janki Chatti</strong> (2,650m) and covers <strong>6 km one way</strong> to the temple (3,291m), with an elevation gain of about 640 metres. Most pilgrims take 2–3 hours to ascend and 1.5–2 hours to descend. Compared to the Kedarnath trek, this is considerably shorter and gentler.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Ponies are available at Janki Chatti for those who cannot or prefer not to trek, at approximately ₹1,800–2,500 one way. Palki (palanquin) is also available at ₹4,000–6,000 one way.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Surya Kund — The Boiling Hot Spring</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>One of the most unusual experiences at Yamunotri is the <strong>Surya Kund</strong> — a natural hot spring that remains at approximately 94°C year-round. Pilgrims traditionally cook rice and potatoes wrapped in cloth by submerging them in the Surya Kund, and offer the cooked food as prasad to Goddess Yamuna. It's a ritual you won't find anywhere else in the four dhams.</p>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/yamunotri-yatra-package-2n-3d-haridwar`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 2N/3D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹5,499</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Yatra 2026"}<span> →</span></Link>
              <Link key="/blog/best-time-char-dham" href="/blog/best-time-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Best Time for Char Dham"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-packing-list" href="/blog/char-dham-yatra-packing-list" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Packing List"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-registration" href="/blog/char-dham-yatra-registration" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Registration Guide"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>
    </>
  );
}
