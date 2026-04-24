import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Gangotri Yatra 2026 — Package, Route, Temple Guide | Shiv Ganga Travels',
  description: 'Plan Gangotri Yatra 2026 from Haridwar. ₹5,299 per person. Route via Uttarkashi, Harsil valley, Gaumukh glacier option. Motor road to temple — no trek needed.',
  keywords: ['gangotri yatra, gangotri yatra 2026, gangotri yatra package, haridwar to gangotri, gangotri temple guide'],
  alternates: { canonical: `${SITE.baseUrl}/gangotri-yatra` },
  openGraph: { title:'Gangotri Yatra 2026 — Package, Route, Temple Guide | Shiv Ganga Travels', description:'Plan Gangotri Yatra 2026 from Haridwar. ₹5,299 per person. Route via Uttarkashi, Harsil valley, Gaumukh glacier option. Motor road to temple — no trek needed.', url:`${SITE.baseUrl}/gangotri-yatra`, type:'website' },
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
      {'@type':'ListItem',position:2,name:'Gangotri Yatra 2026 — Sacred Origin of the Ganga',item:`${SITE.baseUrl}/gangotri-yatra`},
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
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Gangotri Yatra 2026 — Sacred Origin of the Ganga</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Motor road to temple · Bhagirathi gorge · Harsil valley · Gaumukh glacier option</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Gangotri Yatra 2026 — Sacred Origin of the Ganga</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Gangotri sits at 3,415 metres in the Uttarkashi district of Uttarakhand, on the banks of the Bhagirathi river. It is the mythological and geographical origin of the Ganga — the river that has shaped Indian civilisation for millennia. The temple here, dedicated to Goddess Ganga, is one of the Char Dham shrines and draws hundreds of thousands of pilgrims every year between May and November.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Unlike Yamunotri and Kedarnath, Gangotri requires <strong>no trekking</strong>. A well-maintained motor road leads directly to the temple town. This makes it one of the most accessible of the four dhams, suitable for all ages and fitness levels.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>What to See at Gangotri</h2>
        <ul style={{paddingLeft:'20px',color:'var(--text-mid)',fontSize:'14.5px',lineHeight:2.3,marginBottom:'20px'}}>
          <li><strong>Gangotri Temple</strong> — 18th century temple enshrining Goddess Ganga. Pre-dawn aarti at 6 AM is particularly moving.</li>
          <li><strong>Bhagirathi Shila</strong> — The sacred rock where King Bhagirath is said to have meditated to bring Ganga to earth.</li>
          <li><strong>Suryakund & Brahma Kund</strong> — Two sacred pools near the temple. Pilgrims take a holy dip before entering the shrine.</li>
          <li><strong>Harsil Valley</strong> — 25 km before Gangotri. Apple orchards, cedar forests, and the most serene stretch of the Bhagirathi. Worth a stop.</li>
          <li><strong>Gaumukh Glacier</strong> — 20 km trek from Gangotri — the actual snout of the Gangotri glacier, the source of the Bhagirathi/Ganga. A permit is required. Available as add-on.</li>
        </ul>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Route from Haridwar</h2>
        <div style={{background:'var(--bg)',borderRadius:'12px',padding:'16px 20px',border:'1px solid var(--border)',fontSize:'14px',lineHeight:2.2,marginBottom:'20px'}}>
          <strong>Haridwar</strong> → Rishikesh → Tehri → <strong>Uttarkashi</strong> (overnight, 185 km) → Harsil Valley → <strong>Gangotri</strong> Temple Darshan → return to Uttarkashi overnight → Haridwar
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/gangotri-yatra-package-2n-3d-haridwar`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 2N/3D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹5,299</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Yatra 2026"}<span> →</span></Link>
              <Link key="/blog/best-time-char-dham" href="/blog/best-time-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Best Time for Char Dham"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-registration" href="/blog/char-dham-yatra-registration" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Registration Guide"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-packing-list" href="/blog/char-dham-yatra-packing-list" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Packing List"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Gangotri Yatra 2026 — Sacred Origin of the Ganga.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>
    </>
  );
}
