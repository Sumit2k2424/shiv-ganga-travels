import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Route Map 2026 — Complete Road Map, Distances & Stops',
  description: 'Complete Char Dham Yatra route map 2026. Haridwar to all 4 dhams with distances, travel times, key stops, and altitude. Printable road map for Yamunotri, Gangotri, Kedarnath, Badrinath.',
  keywords: ['char dham yatra route map','char dham route map 2026','char dham yatra road map','haridwar to char dham route','char dham yatra distance chart','char dham yatra map'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-route-map` },
  openGraph: {
    title: 'Char Dham Yatra Route Map 2026 — Distances, Times & Key Stops',
    description: 'Complete road map for Char Dham Yatra 2026 — all distances, altitudes, and key stops from Haridwar.',
    url: `${SITE.baseUrl}/char-dham-yatra-route-map`,
    type: 'website',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG'],
  },
};

function Schema() {
  const ld = {
    '@context':'https://schema.org', '@type':'TouristAttraction',
    name:'Char Dham Yatra Route — Complete Map',
    description:'Route map for the Char Dham Yatra pilgrimage circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath from Haridwar.',
    url: `${SITE.baseUrl}/char-dham-yatra-route-map`,
    address:{ '@type':'PostalAddress', addressRegion:'Uttarakhand', addressCountry:'IN' },
    touristType:'Pilgrim',
    isAccessibleForFree:true,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
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
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
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
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Route Map 2026</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>

        {/* Summary stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:12, marginBottom:36 }}>
          {[
            { label:'Total Distance', val:'~860 km', icon:'📏' },
            { label:'Total Days', val:'9–12 days', icon:'📅' },
            { label:'Max Altitude', val:'3,583m', icon:'🏔️' },
            { label:'Treks Required', val:'2 of 4 dhams', icon:'🥾' },
            { label:'Base City', val:'Haridwar', icon:'📍' },
            { label:'Season', val:'Apr 19 – Nov 13', icon:'🌤️' },
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
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden', marginBottom:28 }}>
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
