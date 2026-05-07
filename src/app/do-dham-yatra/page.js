import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Do Dham Yatra 2026 — Kedarnath & Badrinath Package from Haridwar',
  description: 'Book Do Dham Yatra 2026 — Kedarnath + Badrinath from Haridwar. Starting ₹10,999 per person. 5N/6D. Perfect for pilgrims with limited time.',
  keywords: ['do dham yatra, do dham yatra 2026, kedarnath badrinath package, do dham yatra from haridwar, do dham yatra package price'],
  alternates: { canonical: `${SITE.baseUrl}/do-dham-yatra` },
  openGraph: { title:'Do Dham Yatra 2026 — Kedarnath & Badrinath Package from Haridwar', description:'Book Do Dham Yatra 2026 — Kedarnath + Badrinath from Haridwar. Starting ₹10,999 per person. 5N/6D. Perfect for pilgrims with limited time.', url:`${SITE.baseUrl}/do-dham-yatra`, type:'website' },
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
      {'@type':'ListItem',position:2,name:'Do Dham Yatra 2026 — Kedarnath & Badrinath from Haridwar',item:`${SITE.baseUrl}/do-dham-yatra`},
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
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Do Dham Yatra 2026 — Kedarnath & Badrinath from Haridwar</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Two of the holiest shrines · 5N/6D · From ₹10,999 per person · Perfect if time is limited</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Do Dham Yatra 2026 — Kedarnath & Badrinath from Haridwar</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The <strong>Do Dham Yatra</strong> covers two of the four Char Dhams — <strong>Kedarnath</strong> (Lord Shiva, 3,583m) and <strong>Badrinath</strong> (Lord Vishnu, 3,133m). This is the most popular combination for pilgrims who want a deeply meaningful yatra but have 5–7 days rather than 10–12 days for the complete Char Dham circuit.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Many pilgrims choose to do Do Dham first — particularly Kedarnath and Badrinath as the Shiva-Vishnu pairing considered most auspicious — and then return for Yamunotri and Gangotri in a subsequent season. This is a perfectly valid approach, and we help hundreds of families plan it this way every year.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Why Kedarnath + Badrinath is the Most Popular Combination</h2>
        <ul style={{paddingLeft:'20px',color:'var(--text-mid)',fontSize:'14.5px',lineHeight:2.3,marginBottom:'20px'}}>
          <li>The two shrines are geographically close — both in the Chamoli/Rudraprayag district of Garhwal</li>
          <li>Shiva and Vishnu together — the two most significant deities in the Sanatana tradition</li>
          <li>One trek (Kedarnath 16km) and one motor road (Badrinath) — a good balance</li>
          <li>Can be done in 5–7 days from Haridwar</li>
          <li>Also available as a same-day helicopter package (₹28,000/person)</li>
        </ul>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>The Shiva-Vishnu Connection — Why This Pairing is Theologically Significant</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Kedarnath and Badrinath sit in neighbouring valleys, less than 50km apart as the crow flies, yet separated by a 5,000-metre ridge that takes two full days to drive around. The two shrines represent the two pillars of Vaishnava and Shaiva tradition in Hinduism — and together, they are sometimes described as the two lungs of Garhwal's spiritual geography.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>There is a beautiful legend that connects them directly. Adi Shankaracharya, who is credited with establishing Kedarnath as one of the Char Dhams, is also said to have attained samadhi (final liberation) at Kedarnath at age 32. His samadhi shrine sits directly behind the Kedarnath temple. He had also re-established the Badrinath temple decades earlier after it had fallen into neglect. Walking between these two shrines — as pilgrims have done for over a thousand years — is walking through his life's work in the mountains.</p>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>Notable Places Along the Do Dham Route</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
          {[
            { name:'Rudraprayag Confluence', dist:'140km from Haridwar', desc:'The Mandakini river — which you will follow all the way to Kedarnath — meets the Alaknanda here. Rudraprayag is a quiet town with a famous suspension bridge and a Rudra (Shiva) temple at the confluence. Named after Shiva\'s fierce Rudra form. The evening there has a completely different energy from the bustling roadside towns.' },
            { name:'Chopta & Tungnath', dist:'Near Guptkashi', desc:'A detour of about 35km from the main route takes you to Chopta — the "Mini Switzerland of Uttarakhand" — and from there a 3.5km trek to Tungnath, the highest Shiva temple in the world at 3,680m. Most Do Dham groups miss this. Our custom itineraries can add it if you have an extra day.' },
            { name:'Joshimath', dist:'270km from Haridwar, near Badrinath', desc:'The last town before Badrinath, and the winter seat of the Badrinath deity. In winter, the idol is brought to Joshimath\'s Narasimha Temple with great ceremony. The town is also the base for the Valley of Flowers and Hemkund Sahib treks. A charming hill town that most pilgrims only see from the bus window.' },
            { name:'Mana Village', dist:'3km beyond Badrinath', desc:'Do not leave Badrinath without walking to Mana. The village has the Vyas Gufa (cave where the Mahabharata was written), Bhim Pul (a single boulder spanning a roaring river), and some of the warmest local hospitality anywhere on the Char Dham circuit. A plate of rajma-rice from the last dhaba before Tibet costs ₹80.' },
          ].map(pl => (
            <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
              <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:8 }}>📍 {pl.dist}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
            </div>
          ))}
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/kedarnath-badrinath-do-dham-5n-6d`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 5N/6D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹10,999</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/kedarnath-yatra" href="/kedarnath-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Kedarnath Yatra Guide"}<span> →</span></Link>
              <Link key="/blog/kedarnath-trek-guide" href="/blog/kedarnath-trek-guide" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Kedarnath Trek Guide"}<span> →</span></Link>
              <Link key="/blog/badrinath-yatra-guide" href="/blog/badrinath-yatra-guide" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Badrinath Yatra Guide"}<span> →</span></Link>
              <Link key="/blog/haridwar-to-kedarnath" href="/blog/haridwar-to-kedarnath" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Haridwar to Kedarnath Route"}<span> →</span></Link>
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Do Dham Yatra 2026 — Kedarnath & Badrinath from Haridwar.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>

      <section style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'32px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>Useful Resources</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham vs Do Dham','/blog/char-dham-vs-do-dham'],['Kedarnath Packages','/kedarnath-yatra'],['Char Dham Packages','/char-dham-yatra'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Best Time','/blog/best-time-char-dham']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
