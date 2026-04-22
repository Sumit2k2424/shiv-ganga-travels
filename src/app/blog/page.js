import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Travel Blog — Guides, Tips & Updates | Shiv Ganga Travels',
  description: 'Char Dham Yatra travel guides, expert tips, itinerary advice, and pilgrimage information from Shiv Ganga Travels — Haridwar\'s trusted yatra specialist since 2010.',
  alternates: { canonical: `${SITE.baseUrl}/blog` },
};

const POSTS = [
  {
    slug: 'char-dham-guide',
    title: 'Char Dham Yatra Complete Guide 2026',
    excerpt: 'Everything you need to know — route, itinerary, cost, registration, packing list, and expert tips.',
    tag: 'Complete Guide',
    readTime: '8 min read',
    icon: '🏔️',
  },
  {
    slug: 'best-time-char-dham',
    title: 'Best Time for Char Dham Yatra 2026',
    excerpt: 'Month-by-month weather guide, temple opening dates, and peak vs off-season comparison.',
    tag: 'Travel Tips',
    readTime: '5 min read',
    icon: '📅',
  },
];

export default function Blog() {
  return (
    <>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>
            Yatra Knowledge Hub
          </span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>
            Char Dham Yatra <em style={{ color:'#FFD166', fontStyle:'italic' }}>Travel Blog</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Expert guides, tips, and pilgrimage insights from 15+ years of yatra experience
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
            {POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                style={{ textDecoration:'none', color:'inherit' }}>
                <article className="pkg-card" style={{
                  background:'#fff', borderRadius:16, overflow:'hidden',
                  border:'1px solid var(--border)', boxShadow:'var(--shadow)',
                  height:'100%', display:'flex', flexDirection:'column',
                }}>
                  <div style={{ background:'linear-gradient(135deg,var(--navy),var(--teal))', padding:'32px 24px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:48 }}>
                    {post.icon}
                  </div>
                  <div style={{ padding:'20px 22px', flex:1, display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                      <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:100 }}>{post.tag}</span>
                      <span style={{ fontSize:11.5, color:'var(--text-muted)' }}>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:600, color:'var(--text)', lineHeight:1.3, margin:0 }}>{post.title}</h2>
                    <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6, flex:1, margin:0 }}>{post.excerpt}</p>
                    <div style={{ color:'var(--navy)', fontSize:13, fontWeight:600, marginTop:4 }}>Read Guide →</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
