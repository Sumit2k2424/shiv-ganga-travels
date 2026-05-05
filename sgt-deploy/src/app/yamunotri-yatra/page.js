import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Yamunotri Yatra 2026 — Trek, Package, Surya Kund & Temple Guide',
  description: 'Plan Yamunotri Yatra 2026 from Haridwar. ₹5,499 per person. 6km trek from Janki Chatti, Surya Kund hot spring, Divya Shila. Pony available.',
  keywords: ['yamunotri yatra, yamunotri yatra 2026, yamunotri trek, haridwar to yamunotri, yamunotri yatra package'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-yatra` },
  openGraph: { title:'Yamunotri Yatra 2026 — Trek, Package, Surya Kund & Temple Guide', description:'Plan Yamunotri Yatra 2026 from Haridwar. ₹5,499 per person. 6km trek from Janki Chatti, Surya Kund hot spring, Divya Shila. Pony available.', url:`${SITE.baseUrl}/yamunotri-yatra`, type:'website' },
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
      {'@type':'ListItem',position:2,name:'Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit',item:`${SITE.baseUrl}/yamunotri-yatra`},
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
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>6km trek · Surya Kund 94°C hot spring · Pony available · First stop in Char Dham</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
          <div style={{fontSize:12,color:'var(--text-muted)',marginBottom:16,textAlign:'right'}}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Yamunotri, at 3,291 metres in the Uttarkashi district, is the source of the Yamuna river and the westernmost of the four Char Dhams. It is always the first shrine visited in the traditional Char Dham Yatra circuit, before Gangotri, Kedarnath, and Badrinath. The temple enshrines a black marble idol of Goddess Yamuna.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>The Story of Yamunotri — The Sage, the Goddess, and a River's Origin</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Yamunotri is the least visited of the four dhams, and in some ways the most intimate. The legend attached to it is a story of devotion rather than cosmic drama. The sage Asit Muni lived his entire life near the source of the Yamuna, meditating and bathing daily in both the Yamuna and the Ganga. When he grew too old and frail to make the long journey to the Ganga, the river is said to have appeared here beside the Yamuna — so that the old sage would not have to die without completing his ritual. That is why even today a small stream appears alongside the Yamuna at Yamunotri, known as Submerged Ganga, and pilgrims consider bathing here equivalent to bathing in both sacred rivers.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Yamuna herself is the daughter of Surya (the sun god) and the twin sister of Yama, the god of death. Devotion to Yamuna is said to free one from the fear of death — which is why the Surya Kund here, fed by the sun's heat, is considered particularly auspicious. The goddess is depicted in black, representing the dark, fertile soil of the Yamuna plains that has fed Indian civilisation for centuries.</p>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>Places to Visit Around Yamunotri</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
          {[
            { name:'Surya Kund', dist:'At the temple', desc:'The star attraction of Yamunotri. This natural hot spring bubbles at 94°C — you can cook rice in a cloth bag here, which pilgrims then offer as prasad to the goddess. It is the only place in the four dhams where your offering literally comes from the land itself. A custom that is ancient, tactile, and deeply personal.' },
            { name:'Divya Shila', dist:'Just before the temple', desc:'A sacred rock pillar that pilgrims worship before entering the main temple. The tradition is to circumambulate it and offer water before proceeding to the inner sanctum. It stands alone against the mountain backdrop in a way that makes it impossible to walk past without pausing.' },
            { name:'Janki Chatti', dist:'Trek base — 6km below', desc:'The lively base of the Yamunotri trek. Named after Janki (another name for Sita), who is said to have rested here on her way to the mountains. There are dhabas, pony handlers, and small guesthouses — and a hot spring here too, where trekkers soak their feet after descending. Warmer and more comfortable than the temple area.' },
            { name:'Kharsali Village', dist:'1km from Janki Chatti', desc:'This small Garhwali village is where the Yamunotri goddess is "housed" during the winter months when the temple closes. Every October, in a ceremony called Doli, the idol is brought down from the shrine and carried to Kharsali in a palanquin accompanied by the village priests. The village feels almost unchanged by time — stone houses, terraced fields, a 900-year-old Shani temple.' },
            { name:'Hanuman Chatti', dist:'13km from Janki Chatti', desc:'An important confluence where the Hanuman Ganga meets the Yamuna. A large temple, a GMVN rest house, and one of the greener stretches of the entire Yamunotri route. Many pilgrims overnight here if they miss the last cab back to Barkot.' },
            { name:'Barkot', dist:'13km from Janki Chatti', desc:'The main overnight base for Yamunotri yatris. A small hill town at 1,220m with a pleasant market street and views of the lower Himalayan ridges. Our drivers know the best dhabas here. The Barkot bazaar in the evening — chai, fresh parathas, pilgrims exchanging notes about the day — has a friendly, end-of-day warmth to it.' },
          ].map(pl => (
            <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
              <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:8 }}>📍 {pl.dist}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>What First-Time Trekkers Say About This Trek</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The Yamunotri trek is often underestimated. At 6km each way, it sounds short — but the path climbs steadily through oak and rhododendron forest, crossing small streams on wooden bridges, passing through clusters of tea stalls where pilgrims rest on charpoys and share stories. In April and early May, the rhododendron trees bloom red and pink, and the path is literally carpeted with fallen flowers.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Many of our guests are surprised by how personal the Yamunotri experience feels compared to the other dhams. There are no helicopters, no cable cars, no bypasses. Everyone walks the same path. A 72-year-old grandmother from Rajasthan walks the same trail as a 28-year-old from Bengaluru. The pace is the same — slow, deliberate, step by step. Several pilgrims on our groups have told us that the conversation they had with a stranger on this trek was one of the most meaningful of their lives. Mountains have a way of doing that.</p>

        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'36px 0 12px'}}>Wildlife & Natural Sightings</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The lower forest section of the Yamunotri trek is alive with birds. <strong>Himalayan whistling thrushes</strong> — deep blue birds with a flute-like call — are almost always heard before dawn near the streams. <strong>Kalij pheasants</strong> (dark with a white crest) dart across the path in the mornings. The forest here is less trafficked than Kedarnath and the birding is notably better for it. Higher up, past the treeline, <strong>marmots</strong> — round, sociable creatures the size of a small dog — pop in and out of their burrows alongside the path and are a favourite with children.</p>


        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>The trek starts at <strong>Janki Chatti</strong> (2,650m) and covers <strong>6 km one way</strong> to the temple (3,291m), with an elevation gain of about 640 metres. Most pilgrims take 2–3 hours to ascend and 1.5–2 hours to descend. Compared to the Kedarnath trek, this is considerably shorter and gentler.</p>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>Ponies are available at Janki Chatti for those who cannot or prefer not to trek, at approximately ₹1,800–2,500 one way. Palki (palanquin) is also available at ₹4,000–6,000 one way.</p>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:600,color:'var(--navy)',margin:'28px 0 12px'}}>Surya Kund — The Boiling Hot Spring</h2>
        <p style={{fontSize:'15px',color:'var(--text-mid)',lineHeight:1.85,marginBottom:'16px'}}>One of the most unusual experiences at Yamunotri is the <strong>Surya Kund</strong> — a natural hot spring that remains at approximately 94°C year-round. Pilgrims traditionally cook rice and potatoes wrapped in cloth by submerging them in the Surya Kund, and offer the cooked food as prasad to Goddess Yamuna. It's a ritual you won’t find anywhere else in the four dhams.</p>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginBottom:28,marginTop:28}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:8}}>📦 Our Featured Package:</div>
          <Link href={`/packages/yamunotri-yatra-package-2n-3d-haridwar`} style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fff',padding:'16px 18px',borderRadius:10,border:'1px solid var(--border)',textDecoration:'none',gap:12}}>
            <div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--text)',marginBottom:3}}>View 2N/3D Package →</div>
              <div style={{fontSize:12.5,color:'var(--text-muted)'}}>Full itinerary · Inclusions · FAQs · Book online</div>
            </div>
            <div style={{fontWeight:800,fontSize:22,color:'var(--navy)',whiteSpace:'nowrap'}}>From ₹5,499</div>
          </Link>
        </div>

        <div style={{background:'var(--navy-light)',borderRadius:14,padding:'20px 22px',marginTop:28,marginBottom:8}}>
          <div style={{fontWeight:700,fontSize:14,color:'var(--navy)',marginBottom:14}}>📖 Related Guides:</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
              <Link key="/char-dham-yatra" href="/char-dham-yatra" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Yatra 2026"}<span> →</span></Link>
              <Link key="/blog/best-time-char-dham" href="/blog/best-time-char-dham" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Best Time for Char Dham"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-packing-list" href="/blog/char-dham-yatra-packing-list" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Char Dham Packing List"}<span> →</span></Link>
              <Link key="/blog/char-dham-yatra-registration" href="/blog/char-dham-yatra-registration" style={{background:'#fff',color:'var(--navy)',padding:'8px 16px',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none',border:'1px solid var(--border)'}}>{"Registration Guide"}<span> →</span></Link>
          </div>
        </div>


        <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:700,color:'var(--navy)',marginBottom:14,marginTop:32}}>
          Recommended Hotels Near Yamunotri (Barkot / Janki Chatti)
        </h2>
        <p style={{fontSize:'14.5px',color:'var(--text-muted)',marginBottom:16}}>Motor road ends at Janki Chatti. Stay at Barkot (13km before) for better facilities or Janki Chatti for closest access.</p>
        <div style={{overflowX:'auto',marginBottom:28}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:13.5}}>
            <thead><tr style={{background:'var(--navy)'}}>
              {['Hotel','Location','Rating','Price/Night','Notes'].map(h=>(
                <th key={h} style={{padding:'10px 12px',textAlign:'left',color:'#fff',fontWeight:700,fontSize:12}}></th>
              ))}
            </tr></thead>
            <tbody>
              <tr style={{borderBottom:'1px solid var(--border)',background:'#fff'}}>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>GMVN Barkot</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:13}}>Barkot</td>
                <td style={{padding:'10px 12px',color:'#E8920A',fontWeight:700,fontSize:13}}>★★</td>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>₹1,200–1,800/night</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:12.5}}>Government rest house. Barkot has best facilities on Yamunotri route. 13km from Janki Chatti.</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--bg)'}}>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>Hotel Himalayan Inn</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:13}}>Barkot</td>
                <td style={{padding:'10px 12px',color:'#E8920A',fontWeight:700,fontSize:13}}>★★</td>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>₹1,500–2,500/night</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:12.5}}>Best private option in Barkot. Hot water, restaurant, mountain views. Popular with yatra groups.</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'#fff'}}>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>Hotel Janki Palace</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:13}}>Janki Chatti</td>
                <td style={{padding:'10px 12px',color:'#E8920A',fontWeight:700,fontSize:13}}>★</td>
                <td style={{padding:'10px 12px',fontWeight:700,color:'var(--navy)',fontSize:13.5}}>₹1,000–1,800/night</td>
                <td style={{padding:'10px 12px',color:'var(--text-muted)',fontSize:12.5}}>Closest hotel to trek start point. Basic amenities. Ideal if starting trek at dawn.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book Your Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Reply in 2 hours</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Yamunotri Yatra 2026 — First Dham of the Char Dham Circuit.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>

      <section style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'32px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>Useful Resources</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['Road Status','/char-dham-road-status'],['Opening Dates','/blog/char-dham-yatra-opening-dates-2026'],['Weather Guide','/blog/uttarakhand-weather-guide']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
