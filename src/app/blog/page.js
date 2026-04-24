import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Travel Blog — Guides, Tips & Pilgrimage Insights | Shiv Ganga Travels',
  description: 'Expert Char Dham Yatra guides, trek tips, packing lists, cost breakdowns, and pilgrimage insights from Shiv Ganga Travels — Haridwar\'s trusted yatra specialist since 2010.',
  alternates: { canonical: `${SITE.baseUrl}/blog` },
};

const POSTS = [
  { slug:'char-dham-yatra-2026-new-rules', title:'Char Dham Yatra 2026 New Rules — Phone Ban, Age 55+, IRCTC Helicopter', excerpt:'All 2026 rule changes: mobile phone ban, medical certificate for 55+, IRCTC helicopter booking, non-Hindu entry, GPS tracking. Must-read before you travel.', tag:'2026 Update', readTime:'6 min', icon:'📢' },
  { slug:'char-dham-guide', title:'Char Dham Yatra Complete Guide 2026', excerpt:'Route, itinerary, cost, registration, packing list, and expert tips — everything in one place.', tag:'Complete Guide', readTime:'8 min', icon:'🏔️' },
  { slug:'best-time-char-dham', title:'Best Time for Char Dham Yatra 2026', excerpt:'Month-by-month weather guide, temple opening dates, and honest advice on peak vs off-season.', tag:'Travel Tips', readTime:'5 min', icon:'📅' },
  { slug:'kedarnath-trek-guide', title:'Kedarnath Trek Guide 2026 — 16km from Gaurikund', excerpt:'Difficulty, waypoints, what to carry, pony vs helicopter, and how to prepare. From 15 years of guiding.', tag:'Trek Guide', readTime:'9 min', icon:'🥾' },
  { slug:'kedarnath-helicopter-booking', title:'Kedarnath Helicopter Booking 2026 — Prices & Tips', excerpt:'Prices ₹7,500–9,500, best helipads, morning slot strategy, and why weather matters more than you think.', tag:'Helicopter', readTime:'6 min', icon:'🚁' },
  { slug:'char-dham-yatra-packing-list', title:'Char Dham Yatra Packing List 2026', excerpt:'Exactly what to carry and what to leave behind — shoes, medicines, documents, gadgets. No fluff.', tag:'Preparation', readTime:'7 min', icon:'🎒' },
  { slug:'char-dham-yatra-cost', title:'Char Dham Yatra Cost 2026 — Honest Budget Breakdown', excerpt:'Complete cost breakdown — package prices, hidden extras, pony & helicopter charges, best value tips.', tag:'Budget Guide', readTime:'6 min', icon:'💰' },
  { slug:'senior-citizen-char-dham', title:'Char Dham Yatra for Senior Citizens — Yes, It\'s Possible', excerpt:'Age 60–85+ can complete Char Dham Yatra. Our senior special package, safety tips, and real stories.', tag:'Senior Travel', readTime:'7 min', icon:'👴' },
  { slug:'haridwar-to-kedarnath', title:'Haridwar to Kedarnath — Complete Route Guide 2026', excerpt:'228km by road + 16km trek. Key stops, journey times, overnight stays, and everything in between.', tag:'Route Guide', readTime:'5 min', icon:'🗺️' },
  { slug:'char-dham-yatra-registration', title:'Char Dham Yatra Registration 2026 — How It Works', excerpt:'Mandatory biometric registration explained — documents, daily limits, yatra card, and how we handle it for you.', tag:'Registration', readTime:'5 min', icon:'📋' },
  { slug:'badrinath-yatra-guide', title:'Badrinath Yatra Guide 2026 — Timings, Mana Village & Tips', excerpt:'Darshan timings, Tapt Kund, Mana village, Vyas Gufa — the complete Badrinath experience beyond the main temple.', tag:'Yatra Guide', readTime:'6 min', icon:'🕌' },
  { slug:'valley-of-flowers-trek', title:'Valley of Flowers Trek Guide 2026 — Best Time & Route', excerpt:'UNESCO World Heritage site with 500+ wildflowers. Best in August. Combined with Hemkund Sahib.', tag:'Nature Trek', readTime:'7 min', icon:'🌸' },
  { slug:'rishikesh-adventure-guide', title:'Rishikesh Adventure Guide 2026 — Rafting, Bungee & Camping', excerpt:'Honest price guide for rafting, bungee at 83m, beach camping, and the spiritual side you shouldn\'t miss.', tag:'Adventure', readTime:'7 min', icon:'🏄' },
];

const TAG_COLORS = {
  'Complete Guide': { bg:'#dbeafe', color:'#1e40af' },
  'Travel Tips': { bg:'#dcfce7', color:'#15803d' },
  'Trek Guide': { bg:'#fef3c7', color:'#92400e' },
  'Helicopter': { bg:'#ede9fe', color:'#5b21b6' },
  'Preparation': { bg:'#fee2e2', color:'#991b1b' },
  'Budget Guide': { bg:'#fef9c3', color:'#713f12' },
  'Senior Travel': { bg:'#e0f2fe', color:'#0369a1' },
  'Route Guide': { bg:'#f0fdf4', color:'#166534' },
  'Registration': { bg:'#fdf4ff', color:'#6b21a8' },
  'Yatra Guide': { bg:'#fff1f2', color:'#9f1239' },
  'Nature Trek': { bg:'#f0fdf4', color:'#14532d' },
  'Adventure': { bg:'#ecfeff', color:'#164e63' },
};

export default function Blog() {
  return (
    <>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Yatra Knowledge Hub</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>
            Char Dham Yatra <em style={{ color:'#FFD166', fontStyle:'italic' }}>Travel Blog</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            12 expert guides written by people who have guided 50,000+ pilgrims through the Himalayas
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <span>Blog</span>
        </div>
      </nav>

      <section style={{ background:'var(--bg)', padding:'48px 20px 60px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:20 }}>
            {POSTS.map(post => {
              const tc = TAG_COLORS[post.tag] || { bg:'var(--navy-light)', color:'var(--navy)' };
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  style={{ textDecoration:'none', color:'inherit', display:'block' }}>
                  <article className="pkg-card" style={{
                    background:'#fff', borderRadius:16, overflow:'hidden',
                    border:'1px solid var(--border)', height:'100%',
                    display:'flex', flexDirection:'column',
                  }}>
                    <div style={{ background:`linear-gradient(135deg,var(--navy),var(--teal))`, padding:'28px 20px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:44 }}>
                      {post.icon}
                    </div>
                    <div style={{ padding:'18px 20px', flex:1, display:'flex', flexDirection:'column', gap:10 }}>
                      <div style={{ display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
                        <span style={{ background:tc.bg, color:tc.color, fontSize:10.5, fontWeight:700, padding:'3px 9px', borderRadius:100 }}>{post.tag}</span>
                        <span style={{ fontSize:11.5, color:'var(--text-muted)' }}>{post.readTime} read</span>
                      </div>
                      <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.15rem', fontWeight:600, color:'var(--text)', lineHeight:1.3, margin:0 }}>{post.title}</h2>
                      <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6, flex:1, margin:0 }}>{post.excerpt}</p>
                      <div style={{ color:'var(--navy)', fontSize:13, fontWeight:600, marginTop:4 }}>Read Guide →</div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
