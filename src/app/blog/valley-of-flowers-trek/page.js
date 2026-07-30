import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
export const metadata = {
  title: { absolute: 'Valley of Flowers Trek 2026 | Price Starts at ₹150 | Best Time & Route' },
  description: 'Valley of Flowers trek 2026 — UNESCO site, 17km route from Govindghat. Trusted operator, 15+ yrs experience, instant confirmation.',
  keywords: ['valley of flowers trek 2026', 'valley of flowers best time', 'valley of flowers trek guide', 'govindghat to valley of flowers', 'valley of flowers uttarakhand', 'valley of flowers entry fee 2026', 'valley of flowers flowers list'],
  alternates: { canonical: `${SITE.baseUrl}/blog/valley-of-flowers-trek` },
};
function Schema() {
  const a = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Valley of Flowers Trek Guide 2026', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, datePublished:'2025-03-25', dateModified:'2026-01-01', mainEntityOfPage:`${SITE.baseUrl}/blog/valley-of-flowers-trek` };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
}
const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
export default function ValleyOfFlowersTrek() {
  return (<>
    <Schema/>
    <ReadingProgress/>

    <BlogHero
      badge="UNESCO Heritage Trek · 2026"
      title="Valley of Flowers Trek 2026 — Best Time & Complete Guide"
      dek="UNESCO World Heritage · 500+ wildflower species · Best July–September · 5N/6D from Haridwar"
      author="Sumit Mishra"
      updated="Updated 2026"
      readTime="7 min read"
      facts={[
        { label:'Peak bloom', value:'August' },
        { label:'Core trek',  value:'13 km to Ghangaria' },
        { label:'Species',    value:'500+ wildflowers' },
        { label:'Package',    value:'₹13,499 · 5N/6D' },
      ]}
    />

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
        <span>Valley of Flowers Trek Guide</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
      <p className="blog-lede">There are landscapes that photographs cannot do justice to. The Valley of Flowers is one of them. Imagine a valley so wide you can’t see its edges, blanketed in thousands of wildflowers in colours so vivid they seem painted — cobalt Himalayan blue poppies, crimson cobra lilies, soft lavender primulas, waxy white Brahma Kamals. And overhead, glacier peaks. And the only sound is the Pushpawati stream and the wind.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This is a <strong>UNESCO World Heritage Site</strong> since 1982, and rightly so. It's one of the most genuinely extraordinary places in India. This complete guide covers when to go, how to get there, what you'll see, and how to combine it with the equally magnificent Hemkund Sahib pilgrimage.</p>

      <BlogTOC items={[
        { id:'best-time', label:'Best time to visit' },
        { id:'route',     label:'Trek route & distance' },
        { id:'flowers',   label:'What flowers you will see' },
        { id:'hemkund',   label:'Hemkund Sahib combo' },
      ]}/>

      <h2 id="best-time" style={h2}>Best Time to Visit Valley of Flowers</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The valley is in full bloom from <strong>mid-July to mid-September</strong>. This is also the monsoon season in most of India, but in the high Himalayas the rain brings the flowers rather than destroying them. The peak bloom is typically in <strong>August</strong>. The valley is officially open from June to October.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:10, marginBottom:20 }}>
        {[
          { month:'June', bloom:'Early – sparse', note:'Accessible. Some early flowers.' },
          { month:'July', bloom:'Building to peak', note:'Good wildflowers, rains start.' },
          { month:'August', bloom:'⭐ PEAK BLOOM', note:'Maximum flowers. Best time.' },
          { month:'September', bloom:'Good – thinning', note:'Clear weather, fewer crowds.' },
          { month:'Oct–May', bloom:'Closed', note:'Snow-covered. Not accessible.' },
        ].map(m => (
          <div key={m.month} style={{ background: m.bloom.includes('PEAK') ? '#dcfce7' : '#fff', borderRadius:10, padding:'11px', border:`1px solid ${m.bloom.includes('PEAK') ? '#86efac' : 'var(--border)'}`, textAlign:'center' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{m.month}</div>
            <div style={{ fontSize:11.5, fontWeight:600, color: m.bloom.includes('PEAK') ? '#15803D' : 'var(--text-mid)', marginBottom:3 }}>{m.bloom}</div>
            <div style={{ fontSize:11, color:'var(--text-muted)' }}>{m.note}</div>
          </div>
        ))}
      </div>

      <h2 id="route" style={h2}>Trek Route & Distance</h2>
      <div style={{ background:'var(--bg)', borderRadius:12, padding:'16px 20px', border:'1px solid var(--border)', fontSize:14, lineHeight:2.2, marginBottom:20 }}>
        <strong>Haridwar</strong> → Joshimath (300km, overnight) → Govindghat → <strong>Ghangaria base camp</strong> (13km trek) → <strong>Valley of Flowers</strong> (4km day trek) → <strong>Hemkund Sahib</strong> (6km day trek) → Govindghat → <strong>Badrinath</strong> → Haridwar
      </div>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The core trek from Govindghat to Ghangaria (base camp) is <strong>13km</strong> and takes 4–6 hours. From Ghangaria, the Valley of Flowers is a 4km one-way day trek, and Hemkund Sahib is a steep 6km one-way day trek. Most people do both on separate days.</p>

      <h2 id="flowers" style={h2}>What Flowers Will You See?</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The valley contains over <strong>500 species of wildflowers</strong>, many of them Himalayan endemics found nowhere else in the world. Some highlights:</p>
      <ul style={{ paddingLeft:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.2, marginBottom:20 }}>
        <li><strong>Brahma Kamal</strong> — The state flower of Uttarakhand. Sacred in Hindu tradition. Found on high slopes.</li>
        <li><strong>Blue Himalayan Poppy (Meconopsis)</strong> — Extraordinarily rare. The most photographed flower in the valley.</li>
        <li><strong>Cobra Lily (Arisaema)</strong> — Unusual, dramatically shaped. Deep red and green.</li>
        <li><strong>Primula</strong> — Carpets the meadow floor in lavender and purple.</li>
        <li><strong>Anemone, Geranium, Marsh Marigold</strong> — In abundance throughout August.</li>
      </ul>


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
      <h2 id="hemkund" style={h2}>Hemkund Sahib — Combine for the Perfect 5-Day Trip</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Hemkund Sahib (4,329m) is a Sikh pilgrimage site of extraordinary beauty — a glacial lake surrounded by snow peaks with a pristine gurudwara on its shores. It is said that Guru Gobind Singh meditated here in a previous life. The <strong>Langar</strong> (free kitchen) serves dal, roti and kheer to everyone regardless of faith — one of the most moving expressions of community in any religious place in India.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Our <strong>Valley of Flowers + Hemkund Sahib + Badrinath package (5N/6D)</strong> covers all three in one trip from Haridwar for ₹13,499 per person.</p>

      <div style={{ background:'linear-gradient(135deg,#0B7B8B,#15803D)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Valley of Flowers Package</h3>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:14, marginBottom:18 }}>₹13,499 per person · 5N/6D · Includes Hemkund Sahib + Badrinath darshan</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Valley of Flowers + Hemkund Sahib package 2026.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#fff', color:'var(--navy)', padding:'11px 22px', borderRadius:8, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Book Now</a>
          <Link href="/char-dham-yatra" style={{ background:'rgba(255,255,255,0.14)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.28)' }}>View Package →</Link>
        </div>
      </div>
    
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
  </>);
}
