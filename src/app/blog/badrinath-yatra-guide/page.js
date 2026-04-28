import Link from 'next/link';
import { SITE } from '@/data/packages';
export const metadata = {
  title: 'Badrinath Yatra Guide 2026 — Darshan Timings, Route, Package & Travel Tips',
  description: 'Complete Badrinath Yatra guide 2026. Temple timings, route from Haridwar, Mana village, Tapt Kund, package from ₹5,999. Everything you need for a perfect Badrinath pilgrimage.',
  keywords: ['badrinath yatra 2026','badrinath yatra guide','badrinath temple darshan timings','badrinath yatra package','haridwar to badrinath','badrinath yatra tips 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/badrinath-yatra-guide` },
};
function Schema() {
  const a = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Badrinath Yatra Guide 2026 — Darshan Timings, Route, Package & Travel Tips', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, datePublished:'2025-03-20', dateModified:'2026-01-01', mainEntityOfPage:`${SITE.baseUrl}/blog/badrinath-yatra-guide` };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
}
const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
export default function BadrinathYatraGuide() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Yatra Guide · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Badrinath Yatra Guide 2026 — Temple, Timings, Mana Village & Everything In Between</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>3,133m · Lord Vishnu · No trek needed · Mana village · Tapt Kund · From ₹5,999</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
        <span>Badrinath Yatra Guide 2026</span>
      </div>
    </nav>
    <article className="blog-container">
      <p style={p}>If Kedarnath is Shiva in all his fierce and formidable mountain glory, Badrinath is Vishnu at complete peace — meditative, still, and somehow deeply reassuring. The Badrinath Temple, with its colourful facade against the stark Himalayan backdrop, is one of the most photographed temples in India. And unlike Kedarnath, you can drive straight to it.</p>
      <p style={p}>This guide covers everything you need to know about the <strong>Badrinath Yatra in 2026</strong> — temple darshan timings, the route from Haridwar, what to see beyond the temple, and honest travel tips from people who have guided thousands of pilgrims here.</p>

      <h2 style={h2}>Badrinath Temple — Quick Facts</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:24 }}>
        {[
          { label:'Altitude', value:'3,133 metres' },
          { label:'Deity', value:'Lord Vishnu (Badrivishal)' },
          { label:'Trek Required', value:'No — motor road to temple' },
          { label:'District', value:'Chamoli, Uttarakhand' },
          { label:'Nearest City', value:'Joshimath (45 km)' },
          { label:'Season', value:'May to November' },
        ].map(f => (
          <div key={f.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', border:'1px solid rgba(15,43,91,0.1)', textAlign:'center' }}>
            <div style={{ fontSize:11.5, color:'var(--text-muted)', marginBottom:4 }}>{f.label}</div>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)' }}>{f.value}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>Badrinath Temple Darshan Timings 2026</h2>
      <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', marginBottom:20, fontSize:14 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          {[
            { session:'Morning Opening', time:'4:30 AM' },
            { session:'Mahabhishek Puja', time:'4:30 – 6:30 AM' },
            { session:'Morning Darshan', time:'7:00 AM – 1:00 PM' },
            { session:'Afternoon Closure', time:'1:00 PM – 4:00 PM' },
            { session:'Evening Darshan', time:'4:00 PM – 9:00 PM' },
            { session:'Evening Aarti', time:'8:00 PM' },
          ].map(t => (
            <div key={t.session} style={{ display:'flex', justifyContent:'space-between', padding:'8px 12px', background:'#fff', borderRadius:8, border:'1px solid var(--border)' }}>
              <span style={{ fontWeight:600, color:'var(--text)', fontSize:13 }}>{t.session}</span>
              <span style={{ fontWeight:700, color:'var(--navy)', fontSize:13 }}>{t.time}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ ...p, fontSize:13.5 }}>💡 <strong>Pro tip:</strong> The <strong>Mahabhishek Puja at 4:30 AM</strong> is the most spiritually powerful. Book in advance through us — it requires advance registration and involves witnessing the lord being bathed and adorned for the day.</p>

      <h2 style={h2}>Beyond the Temple — What Else to See</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
        {[
          { place:'Tapt Kund', desc:'The natural hot spring right outside the temple. Pilgrims take a holy dip here before entering the temple. Temperature stays around 45°C even in snow. Sacred and purifying.' },
          { place:'Mana Village', desc:'Just 3km from the temple, Mana is the last Indian village before the Tibet border. Visit Vyas Gufa (where Vyas wrote the Mahabharata), Ganesh Gufa, and the Bhim Pul — a massive natural rock bridge over the roaring Saraswati river.' },
          { place:'Brahamakapal Ghat', desc:'A sacred platform on the banks of the Alaknanda river where Pitru Puja (prayers for ancestors) is performed. Deeply moving for many pilgrims.' },
          { place:'Neelkanth Peak', desc:'The majestic 6,596m peak visible from Badrinath. On clear days (early morning is best), the snow-covered summit glows in the dawn light. One of the most breathtaking views in the Himalayas.' },
          { place:'Satopanth Lake', desc:'20km trek from Mana — a high-altitude glacial lake at 4,402m shaped like an equilateral triangle. Only for fit trekkers. Available as an add-on.' },
        ].map(s => (
          <div key={s.place} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:5 }}>📍 {s.place}</div>
            <div style={{ fontSize:15, color:'#334155', lineHeight:1.85 }}>{s.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Badrinath Yatra Package</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:18 }}>₹5,999 per person · 2N/3D from Haridwar · All-inclusive · VIP darshan arranged</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Badrinath Yatra 2026.')}`} target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:8, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Book Now</a>
          <Link href="/packages/badrinath-yatra-package-2n-3d-haridwar" style={{ background:'var(--gold)', color:'#fff', padding:'11px 22px', borderRadius:8, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>View Package →</Link>
        </div>
      </div>
    </article>
  </>);
}
