import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Panch Kedar Yatra 2026 — All 5 Shiva Temples Trek Guide & Package',
  description: 'Complete Panch Kedar Yatra guide 2026. Kedarnath, Tungnath, Rudranath, Madmaheshwar & Kalpeshwar — all 5 Shiva temples. Package ₹21,999. 8N/9D.',
  keywords: ['panch kedar yatra, panch kedar yatra 2026, panch kedar trek, 5 kedar yatra, tungnath yatra, rudranath trek'],
  alternates: { canonical: `${SITE.baseUrl}/panch-kedar-yatra` },
  openGraph: { title:'Panch Kedar Yatra 2026 — All 5 Shiva Temples Trek Guide & Package', description:'Complete Panch Kedar Yatra guide 2026. Kedarnath, Tungnath, Rudranath, Madmaheshwar & Kalpeshwar — all 5 Shiva temples. Package ₹21,999. 8N/9D.', url:`${SITE.baseUrl}/panch-kedar-yatra`, type:'website' },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    address:{ '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating:{ '@type':'AggregateRating', ratingValue:'4.3', reviewCount:'30', bestRating:'5' },
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
      {'@type':'ListItem',position:2,name:'Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines',item:`${SITE.baseUrl}/panch-kedar-yatra`},
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
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Kedarnath · Tungnath · Rudranath · Madmaheshwar · Kalpeshwar · 8N/9D · ₹21,999</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The <strong>Panch Kedar</strong> is a circuit of five sacred Shiva temples in the Garhwal Himalayas of Uttarakhand, each believed to enshrine a different part of Lord Shiva’s body that fell here after the Mahabharata. According to legend, the Pandavas sought Shiva’s blessing after the Kurukshetra war, but Shiva evaded them by hiding as a bull. When cornered, he dived into the earth — different body parts emerging at five locations now known as the Panch Kedar.</p>
        <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'24px'}}>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>1️⃣ Kedarnath (3,583m) — Shiva&apos;s Hump</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>The most famous of the five. 16km trek from Gaurikund. 12th Jyotirlinga.</div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>2️⃣ Tungnath (3,680m) — Shiva&apos;s Arms</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>World's highest Shiva temple. 3.5km trek from Chopta. Stunning 360° Himalayan views.</div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>3️⃣ Rudranath (2,286m) — Shiva&apos;s Face</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>Most remote of the five. 20km forest trek. Ancient temple with dramatic setting.</div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>4️⃣ Madmaheshwar (3,497m) — Shiva&apos;s Navel</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>22km trek through alpine meadows. Located between Kedarnath and Rudranath valleys.</div>
          </div>
          <div style={{background:'var(--navy-light)',borderRadius:'10px',padding:'14px 16px',border:'1px solid rgba(15,43,91,0.1)'}}>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--navy)',marginBottom:'4px'}}>5️⃣ Kalpeshwar (2,134m) — Shiva&apos;s Hair</div>
            <div style={{fontSize:'13px',color:'var(--text-mid)'}}>The only Panch Kedar open all year. 2km trek. Located in Urgam valley near Joshimath.</div>
          </div>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/panch-kedar-yatra-8n-9d-haridwar`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 8N/9D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹21,999</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/blog/kedarnath-trek-guide" href="/blog/kedarnath-trek-guide" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Kedarnath Trek Guide"}<span> →</span></Link>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Yatra 2026"}<span> →</span></Link>
              <Link key="/blog/best-time-char-dham" href="/blog/best-time-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Best Time to Visit"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-packing-list" href="/blog/char-dham-yatra-packing-list" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Packing List"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Panch Kedar Yatra 2026 — Five Sacred Shiva Shrines.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>
    </>
  );
}
