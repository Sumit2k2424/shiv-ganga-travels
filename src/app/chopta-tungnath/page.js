import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Chopta Tungnath 2026 — Trek, Best Time & Guide',
  description: 'Chopta Tungnath Chandrashila trek 2026. Highest Shiva temple at 3,680m. Best time, how to reach and packages from Haridwar.',
  keywords: ['chopta uttarakhand','tungnath temple','chopta tungnath trek','chopta best time to visit 2026','chopta from haridwar','chandrashila trek','mini switzerland india'],
  alternates: { canonical: `${SITE.baseUrl}/chopta-tungnath` },
  openGraph: {
    title: 'Chopta Tungnath 2026 — Complete Travel Guide',
    description: 'Complete guide to Chopta and Tungnath — India\'s highest Shiva temple, Chandrashila summit, best time, how to reach, and packages from Haridwar.',
    url: `${SITE.baseUrl}/chopta-tungnath`, type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chopta Tungnath 2026 — Complete Travel Guide',
    description: 'Complete guide to Chopta and Tungnath — India\',
    images: [{ url: '/opengraph-image', alt: 'Chopta Tungnath 2026 — Complete Travel Guide | Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function ChoptaTungnath() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity: [
          { '@type':'Question', name:'What is the best time to visit Chopta?',
            acceptedAnswer:{ '@type':'Answer', text:'February–April for snowfall and frozen landscapes (trek requires snow gear). May–June for blooming rhododendrons. September–November for clear skies and Himalayan views. Winter (Dec–Jan) is extreme cold but offers the best snow photography.' }},
          { '@type':'Question', name:'How to reach Chopta from Haridwar?',
            acceptedAnswer:{ '@type':'Answer', text:'Haridwar to Chopta is approximately 235km via Rishikesh–Rudraprayag–Ukhimath–Chopta. The drive takes 7–8 hours. Chopta is 13km from Ukhimath on a winding mountain road. No public bus service directly to Chopta — taxi is recommended.' }},
          { '@type':'Question', name:'What is the Tungnath Chandrashila trek?',
            acceptedAnswer:{ '@type':'Answer', text:'The Tungnath-Chandrashila trek starts from Chopta and covers 3.5km to Tungnath temple (3,680m) and another 1.5km to Chandrashila summit (4,000m). Total one-way trek is 5km (3–4 hours up). The Chandrashila summit offers 360° panoramic views of Nanda Devi, Trishul, Chaukhamba and Kedarnath range.' }},
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🏔️ Chopta · Tungnath · Chandrashila</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Chopta Tungnath 2026 — Complete Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            India's "Mini Switzerland" · Highest Shiva temple in the world · 360° Himalayan summit views
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/uttarakhand-tour-packages" style={{ color:'var(--navy)', textDecoration:'none' }}>Uttarakhand Tours</Link><span>›</span>
          <span>Chopta Tungnath</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: May 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Chopta Altitude','2,680m'],['Tungnath','3,680m (temple)'],['Chandrashila','4,000m (summit)'],['Trek Distance','5km one way'],['From Haridwar','235km · 7–8 hrs'],['Best Season','May–June, Oct–Nov']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          Chopta is the kind of place you discover and immediately wonder why it's not more famous. Set at 2,680 metres in the Rudraprayag district, this small alpine meadow is the base for the Tungnath–Chandrashila trek — and one of the few places in Uttarakhand where you can sit in a rhododendron forest at 3,000 metres with unobstructed views of the Kedarnath, Chaukhamba, and Trishul ranges. It's also the gateway to Tungnath, the highest Shiva temple in the world at 3,680 metres.
        </p>

        <h2 style={h2}>Tungnath Temple — The Highest Shiva Temple in the World</h2>
        <p style={p}>
          Tungnath is one of the Panch Kedar — the five sacred Shiva shrines of Uttarakhand. At 3,680 metres, it holds the record as the world's highest temple dedicated to Lord Shiva. The temple, over 1,000 years old and attributed to Adi Shankaracharya, is a compact stone structure that feels intimate despite its dramatic setting. In the foreground: a high-altitude meadow called Deoriatal pasture. Behind it: the Kedarnath range in full view on clear mornings. The trek from Chopta to Tungnath is 3.5km — gentle enough for reasonably fit families.
        </p>

        <h2 style={h2}>The Chandrashila Summit (4,000m)</h2>
        <p style={p}>
          From Tungnath, an additional 1.5km steep climb brings you to the Chandrashila summit at 4,000 metres. This is where the trek becomes truly spectacular. On a clear morning, you can see Nanda Devi (7,817m), Trishul (7,120m), Chaukhamba (7,138m), Kedarnath (6,940m), and the Gangotri group — all in a single panorama. Most trekkers start from Chopta at 5–6 AM to reach the summit for sunrise. By 9 AM the cloud cover rolls in.
        </p>

        <h2 style={h2}>Best Time to Visit Chopta</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { season:'Feb–Apr (Winter)', icon:'❄️', desc:'Chopta is under snow. The trek to Tungnath requires crampons and snow gear. Dramatic, photogenic — but only for experienced trekkers or those with a guide. Camping in this season is extraordinary.' },
            { season:'May–Jun (Spring)', icon:'🌸', desc:'Peak rhododendron season — the trail from Chopta to Tungnath is lined with crimson and pink forests. Moderate temperatures. This is the easiest and most beautiful window for casual trekkers and families.' },
            { season:'Sep–Nov (Autumn)', icon:'🍂', desc:'Post-monsoon clarity — Himalayan peaks are sharp and fully visible. Fewer tourists than May–June. Best photographic season for the Chandrashila summit. October is spectacular.' },
            { season:'Jul–Aug (Monsoon)', icon:'🌧️', desc:'Heavy rain, leeches on the trail, and persistent cloud cover blocking the summit views. Not recommended unless you enjoy the moody misty aesthetic and are comfortable with wet conditions.' },
          ].map(s => (
            <div key={s.season} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px' }}>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:13.5, marginBottom:6 }}>{s.icon} {s.season}</div>
              <p style={{ margin:0, fontSize:13, color:'#475569', lineHeight:1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>How to Reach Chopta from Haridwar</h2>
        <p style={p}>
          Haridwar to Chopta is 235km by road — a 7–8 hour drive via Rishikesh, Devprayag, Rudraprayag, and Ukhimath. The final 13km from Ukhimath to Chopta is a narrow mountain road that requires an experienced driver. There is no direct bus service. A private cab from Haridwar is the most practical option for most visitors. Our Chopta packages include door-to-door transport from Haridwar.
        </p>

        <h2 style={h2}>Combining Chopta with Char Dham Yatra</h2>
        <p style={p}>
          Chopta is geographically positioned between Kedarnath and Badrinath — making it a natural add-on to a Char Dham circuit. Pilgrims who have completed Kedarnath and are heading to Badrinath can detour via Ukhimath, spend a night in Chopta, do the Tungnath trek the next morning, and continue to Badrinath the same day. We design this as an optional extension on our premium Char Dham packages.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Chopta Tungnath — Weekend or Combined Package</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            Available as a standalone 2N/3D package from Haridwar or as an add-on to your Char Dham tour.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Chopta Tungnath trip 2026. Please share packages from Haridwar.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp — Get a Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Panch Kedar Yatra','/panch-kedar-yatra'],['Kedarnath Yatra','/kedarnath-yatra'],['Valley of Flowers','/blog/valley-of-flowers-trek'],['Uttarakhand Tours','/uttarakhand-tour-packages'],['Kedarnath Weather','/kedarnath-weather']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
