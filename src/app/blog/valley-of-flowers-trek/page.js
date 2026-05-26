import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
export const metadata = {
  title: 'Valley of Flowers Trek 2026 – Best Time, Route from Govindghat & Complete Guide',
  description: 'Complete Valley of Flowers trek guide 2026: UNESCO World Heritage Site, best time July–September, 17km route from Govindghat, difficulty, entry fee ₹150, and 500+ wildflower species to see.',
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
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#0B7B8B 60%,#15803D 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>UNESCO Heritage Trek · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Valley of Flowers Trek 2026 — Best Time & Complete Guide</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>UNESCO World Heritage · 500+ wildflower species · Best July–September · 5N/6D from Haridwar</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Blog<span>›</span>
        <span>Valley of Flowers Trek Guide</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>There are landscapes that photographs cannot do justice to. The Valley of Flowers is one of them. Imagine a valley so wide you can’t see its edges, blanketed in thousands of wildflowers in colours so vivid they seem painted — cobalt Himalayan blue poppies, crimson cobra lilies, soft lavender primulas, waxy white Brahma Kamals. And overhead, glacier peaks. And the only sound is the Pushpawati stream and the wind.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This is a <strong>UNESCO World Heritage Site</strong> since 1982, and rightly so. It's one of the most genuinely extraordinary places in India. This complete guide covers when to go, how to get there, what you'll see, and how to combine it with the equally magnificent Hemkund Sahib pilgrimage.</p>

      <h2 style={h2}>Best Time to Visit Valley of Flowers</h2>
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

      <h2 style={h2}>Trek Route & Distance</h2>
      <div style={{ background:'var(--bg)', borderRadius:12, padding:'16px 20px', border:'1px solid var(--border)', fontSize:14, lineHeight:2.2, marginBottom:20 }}>
        <strong>Haridwar</strong> → Joshimath (300km, overnight) → Govindghat → <strong>Ghangaria base camp</strong> (13km trek) → <strong>Valley of Flowers</strong> (4km day trek) → <strong>Hemkund Sahib</strong> (6km day trek) → Govindghat → <strong>Badrinath</strong> → Haridwar
      </div>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The core trek from Govindghat to Ghangaria (base camp) is <strong>13km</strong> and takes 4–6 hours. From Ghangaria, the Valley of Flowers is a 4km one-way day trek, and Hemkund Sahib is a steep 6km one-way day trek. Most people do both on separate days.</p>

      <h2 style={h2}>What Flowers Will You See?</h2>
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
      <h2 style={h2}>Hemkund Sahib — Combine for the Perfect 5-Day Trip</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Hemkund Sahib (4,329m) is a Sikh pilgrimage site of extraordinary beauty — a glacial lake surrounded by snow peaks with a pristine gurudwara on its shores. It is said that Guru Gobind Singh meditated here in a previous life. The <strong>Langar</strong> (free kitchen) serves dal, roti and kheer to everyone regardless of faith — one of the most moving expressions of community in any religious place in India.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Our <strong>Valley of Flowers + Hemkund Sahib + Badrinath package (5N/6D)</strong> covers all three in one trip from Haridwar for ₹13,499 per person.</p>

      <h2 style={h2}>What the Valley Actually Looks Like — Month by Month</h2>
      <p style={p}><strong>Late June:</strong> The valley opens for visitors on June 1, but the flowers do not bloom in significant numbers until late June. Snow patches still dot the upper reaches. The waterfalls run at full volume from snowmelt. Good for a quieter visit, but the famous flower carpet is not yet visible.</p>
      <p style={p}><strong>July:</strong> The first wave of bloom — anemones, geraniums, dwarf rhododendrons, and the early primulas. The valley turns from green to colour-flecked over the first ten days. Daily monsoon rain is now constant; the trek is wet but manageable. By the last week of July, around 200 species are in bloom simultaneously.</p>
      <p style={p}><strong>Mid-August (peak):</strong> This is the famous moment — the valley becomes a carpet of more than 300 flowering species at once. Brahma Kamal, blue poppies, Himalayan balsam, asters, geraniums in every direction. This is what you see in photographs. Crowds peak in this window. Book your Ghangaria room 60 days ahead.</p>
      <p style={p}><strong>September:</strong> The bloom thins, but the surviving species (asters, gentians, late primulas) are striking against the now-emerging snow on the upper peaks. The post-monsoon clarity returns. Crowds drop sharply after September 15. Some of our most memorable visits have been in late September.</p>

      <h2 style={h2}>Combining with Hemkund Sahib — The Standard Pattern</h2>
      <p style={p}>Almost everyone who treks to the Valley of Flowers also visits Hemkund Sahib — the Sikh gurudwara at 4,329m beside a glacial lake. Both treks start from the same base camp at Ghangaria, but they go in different directions. The typical pattern: arrive Ghangaria Day 1, trek Hemkund Sahib Day 2 (steeper, 6km one way), trek Valley of Flowers Day 3 (gentler, 4km one way), return Govindghat Day 4.</p>
      <p style={p}>Hemkund is harder than the Valley — much steeper, higher altitude, and the lake at the top is often surrounded by snow even in August. Many of our guests find Hemkund the more transformative half of the trip precisely because of how demanding it is.</p>

      <h2 style={h2}>Permits, Photography Rules, and Ground Reality</h2>
      <p style={p}>The valley is a UNESCO World Heritage Site and is administered by the Forest Department. Entry permits are required — these are issued at the Forest Office at Ghangaria each morning. Cost is around ₹150 for Indians and ₹600 for foreign nationals (rates change annually). You must enter by 1 PM and exit by 5 PM. Camping inside the valley is strictly forbidden. Plucking flowers or removing any organic matter is a punishable offence.</p>
      <p style={p}>Photography is allowed but drones are not. The light is best between 10 AM and 12 PM — earlier and you have monsoon mist, later and the cloud cover thickens. Bring a polariser filter if you have one.</p>

      <h2 style={h2}>Frequently Asked Questions</h2>
      <div style={{ marginBottom:24 }}>
        {[
          { q:'How difficult is the Valley of Flowers trek?', a:'Moderate. The Govindghat to Ghangaria stretch (14km) is the harder part — steady uphill at altitude. The Ghangaria to Valley stretch (4km) is gentle. An averagely fit person who walks regularly can complete it. Ponies are available throughout for those who cannot trek.' },
          { q:'Is Valley of Flowers worth visiting if I have already seen Western Ghats blooms?', a:'Yes — the species and density are completely different. The Valley sits at 3,500–3,700m in a high alpine glacial valley. The combination of altitude, geography, and 300+ endemic species creates something that does not exist elsewhere in India.' },
          { q:'Can senior citizens do the Valley of Flowers trek?', a:'Yes, with planning. Take 2 nights at Ghangaria instead of 1, use ponies for both the Govindghat–Ghangaria stretch and inside the valley if needed. We have sent guests in their 70s who completed it comfortably with the right pacing.' },
          { q:'What is the best time to visit Valley of Flowers?', a:'August 1 to September 5 is peak bloom. July has lighter blooms but fewer crowds. June is too early. October is after closure (the valley closes October 4).' },
        ].map(faq => (
          <details key={faq.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'12px 16px', marginBottom:8 }}>
            <summary style={{ fontWeight:700, fontSize:14, color:'var(--navy)', cursor:'pointer' }}>{faq.q}</summary>
            <p style={{ margin:'10px 0 0', fontSize:14, color:'var(--text-mid)', lineHeight:1.75 }}>{faq.a}</p>
          </details>
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          {'@type':'Question',name:'How difficult is the Valley of Flowers trek?',acceptedAnswer:{'@type':'Answer',text:'Moderate. The Govindghat to Ghangaria stretch (14km) is the harder part. The Ghangaria to Valley stretch (4km) is gentle. Ponies are available.'}},
          {'@type':'Question',name:'What is the best time to visit Valley of Flowers?',acceptedAnswer:{'@type':'Answer',text:'August 1 to September 5 is peak bloom. July has lighter blooms but fewer crowds.'}},
          {'@type':'Question',name:'Can senior citizens do the Valley of Flowers trek?',acceptedAnswer:{'@type':'Answer',text:'Yes with planning. Take 2 nights at Ghangaria, use ponies for the harder stretches.'}},
        ],
      }) }} />

      <div style={{ background:'linear-gradient(135deg,#0B7B8B,#15803D)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Valley of Flowers Package</h3>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:14, marginBottom:18 }}>₹13,499 per person · 5N/6D · Includes Hemkund Sahib + Badrinath darshan</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Valley of Flowers + Hemkund Sahib package 2026.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#fff', color:'var(--navy)', padding:'11px 22px', borderRadius:8, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Book Now</a>
          View Package →
        </div>
      </div>
    
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
  </>);
}
