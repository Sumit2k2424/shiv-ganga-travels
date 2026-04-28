import Link from 'next/link';
import { SITE, GLOBAL_FAQS } from '@/data/packages';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Char Dham Yatra Complete Guide 2026 — Route, Cost, Tips | Shiv Ganga Travels',
  description: 'Complete Char Dham Yatra guide 2026. Detailed route, day-by-day itinerary, cost breakdown, what to pack, registration, and expert travel tips from Haridwar.',
  keywords: ['char dham yatra guide','char dham yatra complete information','char dham yatra tips','char dham yatra route map','char dham yatra packing list','char dham yatra 2026 guide'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-guide` },
  openGraph: {
    title: 'Char Dham Yatra Complete Guide 2026',
    description: 'Everything you need to know before planning your Char Dham Yatra — route, cost, registration, tips.',
    url: `${SITE.baseUrl}/blog/char-dham-guide`,
    type: 'article',
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Char Dham Yatra Complete Guide 2026',
    description: 'Complete guide to planning Char Dham Yatra 2026 from Haridwar.',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` } },
    datePublished: '2025-01-15',
    dateModified: '2026-01-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-guide`,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG',
    keywords: 'Char Dham Yatra 2026, char dham guide, char dham route, char dham cost',
    articleSection: 'Travel Guide',
    wordCount: '1200',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function CharDhamGuide() {
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Travel Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Char Dham Yatra Complete Guide 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Route · Itinerary · Cost · Registration · Packing List · Expert Tips
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link>
          <span>›</span>
          <span>Char Dham Yatra Guide</span>
        </div>
      </nav>

      <article style={className='blog-container'}>

        <p style={p}>Planning a <strong>Char Dham Yatra</strong> can feel overwhelming — four high-altitude shrines, 10–12 days of travel, mountain weather, and complex logistics. This complete guide covers everything from the route and cost to registration and what to pack, so you arrive fully prepared for one of Hinduism's most sacred journeys.</p>

        <h2 style={h2}>What is the Char Dham Yatra?</h2>
        <p style={p}>The Char Dham Yatra consists of four sacred shrines in the Garhwal Himalayas of Uttarakhand state, India. The four dhams are:</p>
        <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10, marginBottom:20 }}>
          {[
            { name:'Yamunotri', alt:'3,291m', god:'Goddess Yamuna', desc:'Source of the Yamuna river. First stop on the circuit.' },
            { name:'Gangotri', alt:'3,415m', god:'Goddess Ganga', desc:'Origin of the holy Ganga river. Accessible by road.' },
            { name:'Kedarnath', alt:'3,583m', god:'Lord Shiva', desc:'12th Jyotirlinga. Requires a 16 km trek from Gaurikund.' },
            { name:'Badrinath', alt:'3,133m', god:'Lord Vishnu', desc:'Final dham. Motor road to temple. Mana village nearby.' },
          ].map(d => (
            <li key={d.name} style={{ background:'var(--bg)', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>{d.name} <span style={{ fontSize:11, fontWeight:500, color:'var(--text-muted)' }}>({d.alt})</span></div>
              <div style={{ fontSize:12, color:'var(--gold-dark)', fontWeight:600, marginBottom:4 }}>{d.god}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)' }}>{d.desc}</div>
            </li>
          ))}
        </ul>

        <h2 style={h2}>Best Time for Char Dham Yatra 2026</h2>
        <p style={p}>The temples open in <strong>May</strong> (Akshaya Tritiya) and close in <strong>November</strong> (Bhai Dooj). The ideal windows are:</p>
        <ul style={{ paddingLeft:20, marginBottom:16, color:'var(--text-mid)', fontSize:14.5, lineHeight:2 }}>
          <li><strong style={{ color:'var(--navy)' }}>May – Mid June</strong> — Spring season, post-opening rush, pleasant weather. Book 90 days ahead.</li>
          <li><strong style={{ color:'var(--navy)' }}>Mid September – October</strong> — Post-monsoon, crystal-clear views, less crowded. Best season overall.</li>
          <li><strong style={{ color:'var(--red)' }}>July – August</strong> — Heavy monsoon, landslide risk. Avoid.</li>
          <li><strong style={{ color:'var(--red)' }}>November – April</strong> — Temples closed, snow-covered roads. Not accessible.</li>
        </ul>

        <h2 style={h2}>Char Dham Yatra Route from Haridwar</h2>
        <p style={p}>The complete route follows a clockwise direction and covers approximately <strong>1,200 km</strong> by road plus trekking:</p>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', fontSize:14, lineHeight:2.2, marginBottom:20 }}>
          <strong>Haridwar</strong> → Rishikesh → Barkot → <strong>Yamunotri</strong> → Uttarkashi → <strong>Gangotri</strong> → Guptkashi → Gaurikund → <strong>Kedarnath</strong> (16km trek) → Rudraprayag → Joshimath → <strong>Badrinath</strong> → Mana Village → Devprayag → Rishikesh → <strong>Haridwar</strong>
        </div>

        <h2 style={h2}>Char Dham Yatra Cost Breakdown 2026</h2>
        <p style={p}>A complete Char Dham Yatra package from a reputable operator like Shiv Ganga Travels costs between <strong>₹19,500 and ₹85,000 per person</strong> depending on the package type. Here is what is typically included:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:20 }}>
          {[
            { item:'Hotel Accommodation', type:'Included', note:'All nights, twin sharing' },
            { item:'Daily Meals', type:'Included', note:'Breakfast + dinner, veg' },
            { item:'Private AC Vehicle', type:'Included', note:'Innova / Tempo Traveller' },
            { item:'Local Guide', type:'Included', note:'Experienced Garhwali guide' },
            { item:'Biometric Registration', type:'Included', note:'Mandatory, handled for you' },
            { item:'Toll & Parking', type:'Included', note:'All charges covered' },
            { item:'Kedarnath Trek', type:'Included', note:'Pony/helicopter extra' },
            { item:'Train Tickets', type:'Not Included', note:'Delhi/city → Haridwar' },
          ].map(r => (
            <div key={r.item} style={{ background: r.type === 'Included' ? '#dcfce7' : '#fee2e2', borderRadius:8, padding:'10px 12px', border:`1px solid ${r.type === 'Included' ? '#86efac' : '#fca5a5'}` }}>
              <div style={{ fontWeight:600, fontSize:12.5, color:'var(--text)', marginBottom:3 }}>{r.item}</div>
              <div style={{ fontSize:11.5, fontWeight:700, color: r.type === 'Included' ? 'var(--green)' : 'var(--red)', marginBottom:2 }}>{r.type === 'Included' ? '✅ Included' : '❌ Extra'}</div>
              <div style={{ fontSize:11, color:'var(--text-muted)' }}>{r.note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Char Dham Yatra Registration 2026</h2>
        <p style={p}>Since 2017, all Char Dham Yatra pilgrims must complete <strong>mandatory biometric registration</strong> on the Uttarakhand Tourism portal. Daily pilgrim limits are enforced at Kedarnath and Badrinath. <strong>Shiv Ganga Travels handles the complete registration</strong> for all our pilgrims — just provide your Aadhaar/passport, a photo, and travel dates.</p>

        <h2 style={h2}>Char Dham Yatra Packing List</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { cat:'👗 Clothing', items:['Heavy jacket / fleece', 'Rain poncho', 'Thermal innerwear', 'Trekking shoes', 'Woollen socks & cap'] },
            { cat:'💊 Health', items:['Your regular medicines', 'Diamox (altitude)', 'ORS sachets', 'Sunscreen SPF 50', 'Lip balm'] },
            { cat:'📋 Documents', items:['Aadhaar / Passport (original)', 'Yatra registration card', 'Emergency contact list', 'Cash ₹5,000+ extra'] },
            { cat:'🎒 Essentials', items:['Power bank', 'Reusable water bottle', 'Dry snacks & energy bars', 'Small torch / headlamp'] },
          ].map(c => (
            <div key={c.cat} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:8 }}>{c.cat}</div>
              <ul style={{ paddingLeft:14, margin:0 }}>
                {c.items.map(i => <li key={i} style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={GLOBAL_FAQS}/>

        {/* Internal links */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:32, marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Articles & Packages:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              { label:'Char Dham Packages 2026 →',        href:'/char-dham-yatra' },
              { label:'Kedarnath Yatra Guide →',          href:'/kedarnath-yatra' },
              { label:'Char Dham Yatra 2026 Dates →',     href:'/char-dham-yatra-2025' },
              { label:'Helicopter Char Dham →',           href:'/packages/char-dham-yatra-helicopter-5n-6d-dehradun' },
              { label:'Senior Citizen Package →',         href:'/packages/char-dham-yatra-senior-citizen-12n-13d' },
              { label:'Best Time Blog →',                 href:'/blog/best-time-char-dham' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Char Dham Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Expert guidance. Zero commission. Free custom itinerary in 2 hours.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Char Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp Us</a>
            <Link href="/char-dham-yatra"
              style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>View Packages →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
