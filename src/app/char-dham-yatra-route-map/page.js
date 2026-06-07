import Link from 'next/link';
import { SITE } from '@/data/packages';
import RouteMapInteractive from './RouteMapInteractive';

export const metadata = {
  title: 'Char Dham Yatra Route Map 2026 — Complete Road',
  description: 'Char Dham Yatra route map 2026. Interactive distances from Haridwar — Yamunotri, Gangotri, Kedarnath, Badrinath. Day-wise road distances and driving times.',
  keywords: ['char dham yatra route map','char dham route map 2026','char dham yatra road map','haridwar to char dham route','char dham yatra distance chart','char dham yatra map'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-route-map` },
  openGraph: {
    title: 'Char Dham Yatra Route Map 2026 — Distances, Times & Key Stops',
    description: 'Complete road map for Char Dham Yatra 2026 — all distances, altitudes, and key stops from Haridwar.',
    url: `${SITE.baseUrl}/char-dham-yatra-route-map`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Route Map 2026 from Haridwar — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Route Map 2026 — Distances, Times & Key Stops',
    description: 'Complete road map for Char Dham Yatra 2026 — all distances, altitudes, and key stops from Haridwar.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Route Map 2026 — Distances, Times & Key Stop | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is the correct sequence of the Char Dham Yatra?',
    a:'The traditional order is Yamunotri first, then Gangotri, then Kedarnath, and Badrinath last. It runs west to east, which is how the temples are arranged across the Garhwal Himalayas and the way Adi Shankaracharya laid out the circuit. Going in this order also means you finish at Badrinath, the most easily road-accessible of the four.' },
  { q:'How many days does the full Char Dham Yatra route take by road?',
    a:'A comfortable road yatra from Haridwar takes 10 to 12 days. You can compress it to 9 days if you are fit and do not mind long driving hours, or cut it to 5–6 days by adding a Kedarnath helicopter leg. Doing all four in under 8 days by road is rushed and hard on senior pilgrims.' },
  { q:'What is the total distance of the Char Dham Yatra circuit?',
    a:'From Haridwar and back, the full circuit is roughly 860 km of driving plus about 22 km of trekking (6 km to Yamunotri and 16 km to Kedarnath). Badrinath and Gangotri need no trek — the road goes to both.' },
  { q:'Which Char Dham temples need a trek and which are reachable by road?',
    a:'Only two need walking: Yamunotri (about 6 km from Janki Chatti) and Kedarnath (about 16 km from Gaurikund, or a helicopter from Phata/Sersi/Guptkashi). Gangotri and Badrinath are fully road-connected — your vehicle drops you near the temple.' },
  { q:'Where do most people break the journey overnight?',
    a:'The usual night halts are Barkot (for Yamunotri), Uttarkashi (for Gangotri), Guptkashi or Sonprayag (for Kedarnath) and Joshimath/Pipalkoti or Badrinath (for Badrinath). We book these along the route so you are never hunting for a room after dark.' },
  { q:'Do I need registration to follow the Char Dham route in 2026?',
    a:'Yes. Char Dham registration through the Tourist Care Uttarakhand portal is compulsory in 2026 and is checked at points along the route, especially before the Yamunotri and Kedarnath treks. If you travel with us we complete the registration for every pilgrim and hand you the slips at Haridwar.' },
];

function Schema() {
  const ld = {
    '@context':'https://schema.org', '@type':'TouristAttraction',
    '@id': `${SITE.baseUrl}/char-dham-yatra-route-map#attraction`,
    name:'Char Dham Yatra Route — Complete Map',
    description:'Route map for the Char Dham Yatra pilgrimage circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath from Haridwar.',
    url: `${SITE.baseUrl}/char-dham-yatra-route-map`,
    isPartOf: { '@type':'WebSite', name:SITE.name, url:SITE.baseUrl },
    address:{ '@type':'PostalAddress', addressRegion:'Uttarakhand', addressCountry:'IN' },
    touristType:'Pilgrim',
    isAccessibleForFree:true,
  };
  const bc = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Char Dham Yatra',item:`${SITE.baseUrl}/char-dham-yatra`},
    {'@type':'ListItem',position:3,name:'Route Map',item:`${SITE.baseUrl}/char-dham-yatra-route-map`},
  ]};
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: FAQS.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
  </>);
}

const stops = [
  {
    id:0, name:'Haridwar', alt:'314m', dist:'0 km', time:'Start', type:'base',
    desc:'Base city. Ganga Aarti at Har Ki Pauri. Pick up by our vehicle.',
    temple: null, color:'#0F2B5B',
  },
  {
    id:1, name:'Barkot', alt:'1,220m', dist:'165 km', time:'4–5 hrs', type:'stop',
    desc:'Overnight base for Yamunotri. Drive via Mussoorie or direct.',
    temple: null, color:'#888',
  },
  {
    id:2, name:'Yamunotri', alt:'3,291m', dist:'201 km + 6km trek', time:'6–7 hrs + trek', type:'dham',
    desc:'First dham. Trek 6km from Janki Chatti. Surya Kund hot spring. Goddess Yamuna.',
    temple:'Yamunotri Temple', color:'#0B7B8B',
  },
  {
    id:3, name:'Uttarkashi', alt:'1,158m', dist:'240 km', time:'5–6 hrs from Barkot', type:'stop',
    desc:'Overnight halt. Kashi Vishwanath temple en route. Base for Gangotri.',
    temple: null, color:'#888',
  },
  {
    id:4, name:'Gangotri', alt:'3,415m', dist:'300 km', time:'3 hrs from Uttarkashi', type:'dham',
    desc:'Second dham. No trek — motor road. Source of Ganga. Bhagirathi gorge.',
    temple:'Gangotri Temple', color:'#0B7B8B',
  },
  {
    id:5, name:'Guptkashi', alt:'1,319m', dist:'390 km', time:'7–8 hrs from Uttarkashi', type:'stop',
    desc:'Best overnight base before Kedarnath. Mountain views. Vishwanath temple.',
    temple: null, color:'#888',
  },
  {
    id:6, name:'Gaurikund', alt:'1,982m', dist:'420 km', time:'1.5 hrs from Guptkashi', type:'stop',
    desc:'Trek starting point for Kedarnath. Hot spring. Last motor vehicle point.',
    temple: null, color:'#888',
  },
  {
    id:7, name:'Kedarnath', alt:'3,583m', dist:'420 km + 16km trek', time:'5–7 hrs trek', type:'dham',
    desc:'Third dham. 12th Jyotirlinga. 16km trek from Gaurikund. Lord Shiva.',
    temple:'Kedarnath Temple', color:'#E8920A',
  },
  {
    id:8, name:'Joshimath', alt:'1,890m', dist:'510 km', time:'5–6 hrs from Gaurikund', type:'stop',
    desc:'Overnight halt before Badrinath. Auli cable car. Shankaracharya math.',
    temple: null, color:'#888',
  },
  {
    id:9, name:'Badrinath', alt:'3,133m', dist:'560 km', time:'2 hrs from Joshimath', type:'dham',
    desc:'Fourth and final dham. Motor road to temple. Lord Vishnu. Tapt Kund.',
    temple:'Badrinath Temple', color:'#0B7B8B',
  },
  {
    id:10, name:'Haridwar', alt:'314m', dist:'860 km', time:'8–9 hrs from Badrinath', type:'base',
    desc:'Return to Haridwar via Devprayag and Rishikesh. Journey complete.',
    temple: null, color:'#0F2B5B',
  },
];

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };

export default function RouteMap() {
  return (
    <>
      <Schema/>

      {/* Full-screen interactive animated route map (loads first) */}
      <RouteMapInteractive />

      {/* H1 + intro now sit just below the immersive map */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'40px 20px 36px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Free Resource · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Char Dham Yatra Route Map 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Complete route from Haridwar · All distances · Altitudes · Key stops · Travel times
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Char Dham Yatra<span>›</span>
          <span>Route Map 2026</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>

        {/* Booking nudge — route map visitors are actively planning */}
        <div style={{ background:'var(--navy)', borderRadius:12, padding:'14px 20px', marginBottom:28, display:'flex', flexWrap:'wrap', gap:12, alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ color:'rgba(255,255,255,0.85)', fontSize:13.5 }}>
            <strong style={{ color:'#FFD166' }}>Planning this route?</strong> Book with the operator who drives it every day — Shiv Ganga Travels, Haridwar.
          </div>
          <div style={{ display:'flex', gap:8, flexShrink:0 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I was looking at the Char Dham route map. I want to know about packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'8px 16px', borderRadius:8, fontWeight:700, fontSize:12.5, textDecoration:'none' }}>
              💬 Get Quote
            </a>
            <a href="/char-dham-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'8px 16px', borderRadius:8, fontWeight:700, fontSize:12.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>
              View Packages →
            </a>
          </div>
        </div>

        {/* Summary stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:12, marginBottom:36 }}>
          {[
            { label:'Total Distance', val:'~860 km', icon:'📏' },
            { label:'Total Days', val:'9–12 days', icon:'📅' },
            { label:'Max Altitude', val:'3,583m', icon:'🏔️' },
            { label:'Treks Required', val:'2 of 4 dhams', icon:'🥾' },
            { label:'Base City', val:'Haridwar', icon:'📍' },
            { label:'Season', val:'Apr 19 – Nov 13 · Season Open', icon:'🌤️' },
          ].map(s => (
            <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'14px', textAlign:'center' }}>
              <div style={{ fontSize:20, marginBottom:4 }}>{s.icon}</div>
              <div style={{ fontWeight:800, fontSize:15, color:'var(--navy)', marginBottom:3 }}>{s.val}</div>
              <div style={{ fontSize:11, color:'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Route timeline */}
        <h2 style={h2}>Complete Route — Stop by Stop</h2>
        <div style={{ position:'relative' }}>
          {stops.map((stop, idx) => (
            <div key={stop.id} style={{ display:'grid', gridTemplateColumns:'56px 1fr', gap:0, marginBottom: idx < stops.length-1 ? 4 : 0 }}>
              {/* Left — icon + line */}
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                <div style={{
                  width:36, height:36, borderRadius:'50%', flexShrink:0,
                  background: stop.type === 'dham' ? stop.color : stop.type === 'base' ? '#0F2B5B' : 'var(--border)',
                  border: stop.type === 'dham' ? `3px solid ${stop.color}` : '2px solid var(--border)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#fff', fontSize:stop.type === 'dham' ? 16 : 13, fontWeight:700,
                  zIndex:1,
                }}>
                  {stop.type === 'dham' ? '🙏' : stop.type === 'base' ? '●' : '○'}
                </div>
                {idx < stops.length-1 && (
                  <div style={{ width:2, flex:1, minHeight:40, background: stop.type === 'dham' ? '#0F2B5B' : 'var(--border)', marginTop:2 }}/>
                )}
              </div>

              {/* Right — content */}
              <div style={{
                marginLeft:12, marginBottom:16,
                padding:'14px 18px',
                background: stop.type === 'dham' ? 'var(--navy-light)' : '#fff',
                borderRadius:12,
                border: stop.type === 'dham' ? '1.5px solid rgba(15,43,91,0.15)' : '1px solid var(--border)',
              }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:6, marginBottom:6 }}>
                  <div>
                    <span style={{ fontWeight:700, fontSize:15, color:'var(--navy)' }}>{stop.name}</span>
                    {stop.type === 'dham' && (
                      <span style={{ marginLeft:8, background:'var(--gold)', color:'#fff', fontSize:10.5, fontWeight:700, padding:'2px 9px', borderRadius:100 }}>
                        {stop.id === 2 ? '1st' : stop.id === 4 ? '2nd' : stop.id === 7 ? '3rd' : '4th'} Dham
                      </span>
                    )}
                  </div>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                    <span style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--text-muted)', fontSize:11.5, fontWeight:600, padding:'2px 8px', borderRadius:6 }}>
                      ⬆️ {stop.alt}
                    </span>
                    <span style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--text-muted)', fontSize:11.5, fontWeight:600, padding:'2px 8px', borderRadius:6 }}>
                      📏 {stop.dist}
                    </span>
                    <span style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--text-muted)', fontSize:11.5, fontWeight:600, padding:'2px 8px', borderRadius:6 }}>
                      ⏱ {stop.time}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}>{stop.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Distance table */}
        <h2 style={h2}>Distance Reference Table</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                <th style={{ padding:'10px 16px', textAlign:'left', fontWeight:700, fontSize:12, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Segment</th>
                <th style={{ padding:'10px 16px', textAlign:'right', fontWeight:700, fontSize:12, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Distance</th>
                <th style={{ padding:'10px 16px', textAlign:'right', fontWeight:700, fontSize:12, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>Drive Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Haridwar → Barkot (via Mussoorie)', '165 km', '4–5 hrs'],
                ['Barkot → Janki Chatti (Yamunotri base)', '45 km', '1.5 hrs'],
                ['Janki Chatti → Yamunotri (trek)', '6 km', '2–3 hrs'],
                ['Barkot → Uttarkashi', '92 km', '3 hrs'],
                ['Uttarkashi → Gangotri', '100 km', '3 hrs'],
                ['Uttarkashi → Guptkashi', '200 km', '6–7 hrs'],
                ['Guptkashi → Gaurikund', '30 km', '1.5 hrs'],
                ['Gaurikund → Kedarnath (trek)', '16 km', '5–7 hrs'],
                ['Gaurikund → Joshimath', '90 km', '3.5 hrs'],
                ['Joshimath → Badrinath', '46 km', '1.5–2 hrs'],
                ['Badrinath → Haridwar (return)', '300 km', '8–9 hrs'],
                ['Total Circuit', '~860 km + 22km trek', '9–12 days'],
              ].map(([seg, dist, time], i) => (
                <tr key={i} style={{ borderTop:'1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding:'10px 16px', color:'var(--text)' }}>{seg}</td>
                  <td style={{ padding:'10px 16px', textAlign:'right', fontWeight:600, color:'var(--navy)' }}>{dist}</td>
                  <td style={{ padding:'10px 16px', textAlign:'right', color:'var(--text-muted)' }}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Per-dham detail */}
        <h2 style={h2}>Each Dham on the Route — at a glance</h2>
        <div style={{ display:'grid', gap:12, marginBottom:28 }}>
          {[
            { n:'1 · Yamunotri', alt:'3,291 m', deity:'Goddess Yamuna', motor:'Janki Chatti', trek:'≈ 6 km on foot / pony / palki', road:'Narrow and steep past Barkot; the last stretch is a climb, not a drive.' },
            { n:'2 · Gangotri', alt:'3,100 m', deity:'Goddess Ganga', motor:'Gangotri (temple gate)', trek:'None — road to the temple', road:'Good highway to Uttarkashi, then a slow mountain road via Harsil. No walking.' },
            { n:'3 · Kedarnath', alt:'3,583 m', deity:'Lord Shiva (Jyotirlinga)', motor:'Gaurikund', trek:'≈ 16 km on foot / pony / palki, or helicopter', road:'Drive ends at Sonprayag; a link cab takes you to Gaurikund where the trek starts.' },
            { n:'4 · Badrinath', alt:'3,133 m', deity:'Lord Vishnu', motor:'Badrinath (temple gate)', trek:'None — road to the temple', road:'Tarred road right to the town. The easiest darshan of the four.' },
          ].map(d=>(
            <div key={d.n} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:15, marginBottom:8 }}>{d.n}</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,150px),1fr))', gap:8, fontSize:13 }}>
                <div><span style={{ color:'var(--text-muted)' }}>Altitude:</span> <strong style={{ color:'var(--text)' }}>{d.alt}</strong></div>
                <div><span style={{ color:'var(--text-muted)' }}>Deity:</span> <strong style={{ color:'var(--text)' }}>{d.deity}</strong></div>
                <div><span style={{ color:'var(--text-muted)' }}>Last motorable:</span> <strong style={{ color:'var(--text)' }}>{d.motor}</strong></div>
                <div><span style={{ color:'var(--text-muted)' }}>Trek:</span> <strong style={{ color:'var(--text)' }}>{d.trek}</strong></div>
              </div>
              <div style={{ fontSize:13, color:'var(--text-mid)', marginTop:8, lineHeight:1.6 }}><span style={{ color:'var(--text-muted)' }}>Road:</span> {d.road}</div>
            </div>
          ))}
        </div>

        {/* Distances from start city */}
        <h2 style={h2}>Distance to the route from your city</h2>
        <p style={{ fontSize:15, color:'var(--text-mid)', lineHeight:1.8, marginBottom:14 }}>
          Almost everyone joins the Char Dham circuit at Haridwar or Rishikesh, because that is where the mountain road begins. Here is how far the gateway is from the common starting points:
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:420 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['From','To Haridwar (gateway)','Drive time'].map(th=>(
                <th key={th} style={{ padding:'10px 16px', textAlign:'left', fontWeight:700, fontSize:12, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.06em' }}>{th}</th>
              ))}
            </tr></thead>
            <tbody>
              {[['Delhi','≈ 240 km','5–6 hrs'],['Dehradun / Jolly Grant Airport','≈ 55 km','1.5 hrs'],['Rishikesh','≈ 25 km','45 min'],['Chandigarh','≈ 200 km','5 hrs'],['Lucknow','≈ 540 km','10–11 hrs']].map(([f,d,t],i)=>(
                <tr key={f} style={{ borderTop:'1px solid var(--border)', background:i%2?'var(--bg)':'#fff' }}>
                  <td style={{ padding:'10px 16px', color:'var(--text)', fontWeight:600 }}>{f}</td>
                  <td style={{ padding:'10px 16px', color:'var(--navy)', fontWeight:600 }}>{d}</td>
                  <td style={{ padding:'10px 16px', color:'var(--text-muted)' }}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Suggested itinerary */}
        <h2 style={h2}>How the route splits into days (10-day plan)</h2>
        <p style={{ fontSize:15, color:'var(--text-mid)', lineHeight:1.8, marginBottom:14 }}>
          This is the plan we run most often from Haridwar. It keeps driving days under control and gives senior pilgrims a sane pace.
        </p>
        <div style={{ display:'grid', gap:8, marginBottom:28 }}>
          {[
            ['Day 1','Haridwar → Barkot'],
            ['Day 2','Barkot → Yamunotri trek → Barkot'],
            ['Day 3','Barkot → Uttarkashi'],
            ['Day 4','Uttarkashi → Gangotri → Uttarkashi'],
            ['Day 5','Uttarkashi → Guptkashi'],
            ['Day 6','Guptkashi → Gaurikund → Kedarnath (trek/heli)'],
            ['Day 7','Kedarnath → Guptkashi'],
            ['Day 8','Guptkashi → Joshimath/Pipalkoti'],
            ['Day 9','Drive to Badrinath → darshan → Mana village'],
            ['Day 10','Badrinath → Haridwar'],
          ].map(([d,plan])=>(
            <div key={d} style={{ display:'flex', gap:12, background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'10px 14px' }}>
              <span style={{ minWidth:54, fontWeight:700, color:'var(--gold-dark)', fontSize:13 }}>{d}</span>
              <span style={{ fontSize:13.5, color:'var(--text-mid)' }}>{plan}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.8, marginBottom:28 }}>
          Want it shorter? A <Link href="/char-dham-helicopter" style={{ color:'var(--navy)', fontWeight:600 }}>Char Dham by helicopter</Link> trip does all four in 5–6 days. Want only two? See the <Link href="/do-dham-yatra" style={{ color:'var(--navy)', fontWeight:600 }}>Do Dham route</Link>. You can also price any version on our <Link href="/char-dham-yatra-cost-calculator" style={{ color:'var(--navy)', fontWeight:600 }}>cost calculator</Link>.
        </p>

        {/* Registration & road status */}
        <h2 style={h2}>Before you set off — 2026 registration &amp; road status</h2>
        <p style={{ fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:14 }}>
          Two things decide whether your route actually goes to plan. First, <strong>registration is compulsory in 2026</strong> and is checked on the road — you can read the rules on the <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="noopener nofollow" style={{ color:'var(--navy)', fontWeight:600 }}>official Tourist Care Uttarakhand portal</a>. Book with us and we handle it for every pilgrim. Second, hill roads change with the weather; before you lock dates, check our live <Link href="/char-dham-road-status" style={{ color:'var(--navy)', fontWeight:600 }}>Char Dham road status</Link> page and the temple <Link href="/blog/char-dham-yatra-opening-dates-2026" style={{ color:'var(--navy)', fontWeight:600 }}>opening dates for 2026</Link>. The yatra opens with Yamunotri and Gangotri on 19 April 2026; Kedarnath and Badrinath follow within days.
        </p>

        {/* FAQ */}
        <h2 style={h2}>Char Dham route map — FAQ</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {FAQS.map(f=>(
            <details key={f.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'14px 16px' }}>
              <summary style={{ fontWeight:700, color:'var(--navy)', fontSize:14.5, cursor:'pointer' }}>{f.q}</summary>
              <p style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.8, marginTop:10 }}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* Author / E-E-A-T */}
        <div style={{ display:'flex', gap:14, alignItems:'flex-start', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', marginBottom:24 }}>
          <div style={{ width:46, height:46, borderRadius:'50%', background:'linear-gradient(135deg,var(--navy),var(--teal))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0 }}>🪖</div>
          <div>
            <div style={{ fontWeight:700, color:'var(--navy)', fontSize:14 }}>Mapped by Dhanesh Chandra Mishra</div>
            <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.65, marginTop:3 }}>
              Founder of Shiv Ganga Travels, Haridwar — a retired Army officer who has driven the full Char Dham circuit for 15 seasons. Distances here are from our own trip sheets, cross-checked each season. <span style={{ color:'var(--text-muted)' }}>Last updated: {SITE.lastUpdated}.</span>
            </div>
          </div>
        </div>

        {/* Embed/share note */}
        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 18px', marginBottom:24, border:'1px solid rgba(15,43,91,0.1)' }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>📋 Free to use</div>
          <p style={{ fontSize:13, color:'var(--text-muted)', margin:0, lineHeight:1.7 }}>
            Travel bloggers and yatra guides are welcome to reference or link to this route map page. Credit: <a href={SITE.baseUrl} style={{ color:'var(--navy)', fontWeight:600 }}>Shiv Ganga Travels, Haridwar</a> — Char Dham operator since 2010.
          </p>
        </div>

        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[
            {label:'Book This Route →', href:'/char-dham-yatra'},
            {label:'Kedarnath Trek Details', href:'/blog/kedarnath-trek-guide'},
            {label:'Cost Calculator', href:'/char-dham-yatra-cost-calculator'},
            {label:'Packing List', href:'/blog/char-dham-yatra-packing-list'},
          ].map(l=>(
            <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label}</Link>
          ))}
        </div>
      </div>
    </>
  );
}
