import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
export const metadata = {
  title: 'Haridwar to Kedarnath Distance, Route & Travel Guide 2026 – All Options Explained',
  description: 'Haridwar to Kedarnath is 228km by road + 16km trek. Complete 2026 guide: journey time, best stops, cab vs bus options, accommodation at Sonprayag and Guptkashi. Packages from ₹6,499.',
  keywords: ['haridwar to kedarnath distance 2026', 'haridwar to kedarnath route', 'haridwar to kedarnath by road', 'haridwar to kedarnath travel guide', 'haridwar kedarnath trip 2026', 'haridwar to kedarnath cab fare'],
  alternates: { canonical: `${SITE.baseUrl}/blog/haridwar-to-kedarnath` },
};
function Schema() {
  const a = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Haridwar to Kedarnath Distance, Route & Travel Guide 2026', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, datePublished:'2025-03-10', dateModified:'2026-01-01', mainEntityOfPage:`${SITE.baseUrl}/blog/haridwar-to-kedarnath` };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
}
const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
export default function HaridwarToKedarnath() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Route Guide · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Haridwar to Kedarnath — Complete Route Guide 2026</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>228km by road + 16km trek · Journey time · Key stops · Best route</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Blog<span>›</span>
        <span>Haridwar to Kedarnath Route</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The road from Haridwar to Kedarnath is not just a journey — it’s a preparation. By the time you reach Gaurikund and take your first steps on the 16km trail, the mountains have already begun their work on you. The river gorges, the Devprayag confluence, the narrow mountain roads — they peel away the city before you even reach the temple.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Here is the complete route guide from <strong>Haridwar to Kedarnath</strong>, including distances, journey times, the best places to stop, and exactly what to expect at each stage.</p>

      <h2 style={h2}>Total Distance: Haridwar to Kedarnath</h2>
      <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', marginBottom:24, fontSize:14.5, lineHeight:2.2 }}>
        🚗 <strong>By Road:</strong> Haridwar → Rishikesh → Devprayag → Rudraprayag → Agastyamuni → Guptkashi → Sonprayag → Gaurikund = <strong>228 km (~8–9 hours driving)</strong><br/>
        🥾 <strong>By Trek:</strong> Gaurikund → Kedarnath = <strong>16 km (5–7 hours)</strong><br/>
        📏 <strong>Total journey:</strong> 228km + 16km = approximately <strong>244 km and 13–16 hours total</strong>
      </div>

      <h2 style={h2}>Day-by-Day Route Breakdown</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
        {[
          { day:'Day 1', route:'Haridwar → Guptkashi (220 km | 7–8 hrs)', desc:'Start early — 5 AM ideally. The drive follows the Ganga through Rishikesh, passes the sacred Devprayag confluence (Bhagirathi + Alaknanda), continues through Srinagar Garhwal, Rudraprayag, and Agastyamuni to Guptkashi. Overnight in Guptkashi — best base for Kedarnath.' },
          { day:'Day 2', route:'Guptkashi → Gaurikund → Kedarnath (8 km drive + 16 km trek)', desc:'Drive from Guptkashi to Sonprayag (30 min), then shared jeep to Gaurikund (7 km). Hot spring dip at Gauri Kund. Begin the 16km trek by 6–7 AM for a comfortable ascent. Arrive Kedarnath by early afternoon. Evening darshan.' },
          { day:'Day 3', route:'Kedarnath → Gaurikund → Return (16 km descent)', desc:'4:30 AM Brahma Muhurta puja — the most auspicious time. Trek down or take the descent services. Continue journey to the next dham or return base.' },
        ].map(d => (
          <div key={d.day} style={{ background:'#fff', borderRadius:10, padding:'16px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:6 }}>{d.day}: {d.route}</div>
            <div style={{ fontSize:15, color:'#334155', lineHeight:1.85 }}>{d.desc}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>Key Stops Along the Route</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:24 }}>
        {[
          { place:'Devprayag', why:'Sacred confluence of Bhagirathi + Alaknanda = Ganga. Photo stop. Temple visit. 10–15 min.' },
          { place:'Rudraprayag', why:'Confluence of Mandakini + Alaknanda. Koteshwar Mahadev cave temple. Lunch break point.' },
          { place:'Guptkashi', why:'Best overnight base for Kedarnath. Vishwanath Temple. Mountain views. Good hotels.' },
          { place:'Sonprayag', why:'Last motor vehicle point before Gaurikund. Mandakini + Songannga confluence.' },
          { place:'Gaurikund', why:'Trek starting point. Hot spring. Gauri Temple. Last food and supplies point.' },
        ].map(s => (
          <div key={s.place} style={{ background:'var(--bg)', borderRadius:10, padding:'12px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>{s.place}</div>
            <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.5 }}>{s.why}</div>
          </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />
        ))}
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Kedarnath Package from Haridwar</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:18 }}>₹6,499 all-inclusive · Pickup from Haridwar · Expert guide</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra from Haridwar 2026.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:8, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Book Now</a>
          View Package →
        </div>
      </div>
    
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
  </>);
}
