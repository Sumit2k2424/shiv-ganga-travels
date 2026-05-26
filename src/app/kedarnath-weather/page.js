import Link from 'next/link';
import { SITE } from '@/data/packages';
export const metadata = {
  title: 'Kedarnath Weather 2026 — Monthly Temperature & Best Time',
  description: 'Kedarnath weather guide 2026. Month-by-month temperatures, rainfall, snowfall. Best time to visit: May–June and Sept–Oct. What to wear at 3,583m altitude.',
  keywords: ['kedarnath weather','kedarnath temperature','kedarnath weather in may','kedarnath weather in june','kedarnath best time to visit 2026','kedarnath snowfall'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-weather` },
};
const weather = [
  {month:'April',temp:'−2°C to 8°C',snow:'Heavy snow possible',rain:'Low',visit:'⚠️ Temple opens Apr 22 — cold, off-peak, less crowded',wear:'Heavy wool, thermals, snow boots'},
  {month:'May',temp:'5°C to 15°C',snow:'Occasional',rain:'Low–Medium',visit:'✅ Best time — flowers in bloom, clear skies',wear:'Fleece + windproof jacket + wool cap'},
  {month:'June',temp:'8°C to 18°C',snow:'None',rain:'Medium',visit:'✅ Peak season — crowded but pleasant',wear:'Light jacket + layers + rain poncho'},
  {month:'July',temp:'10°C to 17°C',snow:'None',rain:'Heavy (monsoon)',visit:'⚠️ Landslide risk — not recommended',wear:'Full rain gear, waterproof boots'},
  {month:'August',temp:'10°C to 16°C',snow:'None',rain:'Heavy (monsoon)',visit:'⚠️ Avoid — road closures frequent',wear:'Full rain gear mandatory'},
  {month:'September',temp:'8°C to 15°C',snow:'None at lower elevations',rain:'Low–Medium',visit:'✅ Excellent — post-monsoon clarity',wear:'Fleece + jacket + layers'},
  {month:'October',temp:'2°C to 10°C',snow:'Upper peaks',rain:'Very low',visit:'✅ Best for photography — crystal clear views',wear:'Heavy jacket + thermals + warm hat'},
  {month:'November',temp:'−5°C to 3°C',snow:'Heavy',rain:'Very low',visit:'⚠️ Temple closes Nov 11 — extreme cold',wear:'Full winter gear, expedition quality'},
];
const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
export default function KedarnathWeather() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({'@context':'https://schema.org','@type':'WebPage',name:'Kedarnath Weather Guide 2026',description:'Month-by-month Kedarnath weather guide with temperatures, snowfall, and best time to visit.',url:`${SITE.baseUrl}/kedarnath-weather`}) }}/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,583m</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Kedarnath Weather 2026 — Month-wise Guide</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Temperature, snowfall, rainfall and best visiting windows for each month</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Kedarnath Yatra<span>›</span><span>Weather Guide</span>
      </div>
    </nav>
    <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Kedarnath sits at 3,583 metres — one of the highest motorable pilgrimage destinations in India. The weather here is dramatically different from the plains below. Even in peak summer (May–June), temperatures at night can drop to 4–5°C. Understanding the weather cycle is essential for planning a safe and comfortable yatra.</p>
      <div style={{ background:'#dcfce7', border:'1px solid #86efac', borderRadius:12, padding:'14px 18px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'#15803d', marginBottom:6 }}>✅ Best months to visit Kedarnath</div>
        <p style={{ margin:0, fontSize:13.5, color:'var(--text-mid)' }}><strong>May–June</strong> and <strong>September–October</strong> are the two ideal windows. May–June has clear skies, mild temperatures, and blooming rhododendrons. September–October has crystal-clear post-monsoon visibility — best for Himalayan photography. Avoid July–August (monsoon, landslides).</p>
      </div>
      <h2 style={h2}>Month-by-Month Weather</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
          <thead>
            <tr style={{ background:'var(--navy-light)' }}>
              {['Month','Temperature','Snow','Rain','Visit?','What to Wear'].map(h=>(
                <th key={h} style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weather.map((w,i)=>(
              <tr key={w.month} style={{ borderTop:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)' }}>{w.month}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)' }}>{w.temp}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12 }}>{w.snow}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12 }}>{w.rain}</td>
                <td style={{ padding:'10px 12px', fontSize:12 }}>{w.visit.slice(0,2)}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12 }}>{w.wear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 style={h2}>Essential Packing List for Kedarnath Weather</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10, marginBottom:28 }}>
        {[{cat:'Clothing',items:['Thermal inners (2 sets)','Fleece jacket','Windproof outer jacket','Warm cap & gloves','Wool socks (3–4 pairs)']},{cat:'Footwear',items:['Waterproof trekking boots','Extra dry socks','Gaiters (if visiting Oct–Nov)']},{cat:'Essentials',items:['Sunscreen SPF 50+','Lip balm','Reusable water bottle','High-calorie snacks','Personal medicines']},{cat:'Safety',items:['Oxygen can (from Gaurikund)','Rain poncho','Trekking poles','Headtorch with spare batteries']}].map(c=>(
          <div key={c.cat} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:8 }}>{c.cat}</div>
            {c.items.map(it=><div key={it} style={{ fontSize:12.5, color:'var(--text-mid)', padding:'2px 0', display:'flex', gap:5 }}><span style={{ color:'var(--teal)' }}>✓</span>{it}</div>)}
          </div>
        ))}
      </div>
      <h2 style={h2}>What Each Season Actually Feels Like</h2>
      <p style={p}><strong>May:</strong> The opening weeks are crisp and cold — mornings near freezing, days warming to 12–15°C with the strong mountain sun. The trail still has patches of melting snow in shaded sections during the first two weeks. By mid-May, rhododendrons bloom along the lower trek, painting the valley red. This is the month of best light for photography and the lightest crowds before peak season.</p>
      <p style={p}><strong>June:</strong> The warmest month at Kedarnath. Daytime temperatures touch 18°C, comfortable enough for the trek without heavy layers. Pre-monsoon showers start in the last week — usually short afternoon bursts. This is the peak crowd month; pilgrims start at 3 AM from Gaurikund to beat the queues. Helicopter slots book out 30 days ahead.</p>
      <p style={p}><strong>July–August (monsoon):</strong> We genuinely advise pilgrims to avoid these two months unless they have flexible dates. The trail gets slippery, leeches appear in the lower forest sections, fog reduces visibility to under 50 metres on many afternoons, and the road between Sonprayag and Gaurikund closes for hours at a time after heavy rain. Helicopter operations are suspended on most days. We have completed yatras in July, but always with built-in buffer days.</p>
      <p style={p}><strong>September:</strong> The Himalayan reveal. As the monsoon withdraws, the air clears completely and the peaks behind Kedarnath — Bharat Punj, Kedar Dome — emerge with a sharpness you do not get in any other season. Temperatures drop a little (10–14°C days, 3–6°C nights) but the visibility is unmatched. We send most photography enthusiasts in mid-to-late September.</p>
      <p style={p}><strong>October:</strong> The cold rises sharply. By mid-October, nights touch 0°C and frost forms on the trail. The golden grass of the Mandakini valley contrasts with snow appearing on the peaks above 4,500m. The temple closes around Bhai Dooj (typically mid-November). The last 10 days before closing have the most reverent atmosphere — fewer crowds, longer darshan time, deepening cold.</p>

      <h2 style={h2}>Altitude & Weather Combined — What You Need to Know</h2>
      <p style={p}>The single most underestimated risk at Kedarnath is the combination of cold and altitude. At 3,583 metres, oxygen levels are 35% lower than at sea level. Cold air worsens altitude symptoms (headache, breathlessness, nausea) because the body works harder to stay warm. This is why our standard advice is: spend one night at Guptkashi (1,319m) before the trek — even one day of acclimatisation cuts altitude problems dramatically. Drink 4+ litres of water daily, eat warming high-calorie food (we recommend the Garhwali thali at any roadside dhaba), and do not push through if you feel sick. Coming down 500 metres solves most AMS within hours.</p>

      <h2 style={h2}>Frequently Asked Questions</h2>
      <div style={{ marginBottom:24 }}>
        {[
          { q:'What is the temperature in Kedarnath right now?', a:'In May–June, daytime temperatures range 8–18°C and nights drop to 4–8°C. Use the month-by-month table above for any specific month. We update this guide every season based on actual conditions our teams report from the ground.' },
          { q:'Is Kedarnath open in winter?', a:'No. The temple closes around mid-November (Bhai Dooj) and reopens around late April or early May (Akshaya Tritiya). During winter, the deity is moved to Ukhimath and worship continues there. The 16km trek is also impassable in winter due to heavy snow.' },
          { q:'Does it snow at Kedarnath in May?', a:'Occasionally, yes — particularly in early May (first 7–10 days after opening). The trek can have packed snow in shaded sections. By mid-May, the trail is mostly clear. Always carry warm layers regardless of the month.' },
          { q:'What is the best month to visit Kedarnath for darshan?', a:'For weather: May 15–June 15 (peak comfort) or September 15–October 15 (clearest visibility). For shortest queues: late September and early October. For lowest hotel rates: October after the 10th.' },
          { q:'Can I do the Kedarnath trek in October?', a:'Yes — October is one of the best months for the trek if you can handle cold temperatures (0–10°C). The trail is dry, views are exceptional, and crowds thin significantly. Bring proper winter gear: down jacket, thermals, wool gloves, and a beanie.' },
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
          {'@type':'Question',name:'What is the temperature in Kedarnath right now?',acceptedAnswer:{'@type':'Answer',text:'In May–June, daytime temperatures range 8–18°C and nights drop to 4–8°C.'}},
          {'@type':'Question',name:'Is Kedarnath open in winter?',acceptedAnswer:{'@type':'Answer',text:'No. The temple closes around mid-November and reopens around late April or early May (Akshaya Tritiya). During winter, the deity is moved to Ukhimath.'}},
          {'@type':'Question',name:'Does it snow at Kedarnath in May?',acceptedAnswer:{'@type':'Answer',text:'Occasionally, yes — particularly in early May. The trek can have packed snow in shaded sections. By mid-May, the trail is mostly clear.'}},
          {'@type':'Question',name:'What is the best month to visit Kedarnath for darshan?',acceptedAnswer:{'@type':'Answer',text:'May 15–June 15 (peak comfort) or September 15–October 15 (clearest visibility) are the two best windows.'}},
          {'@type':'Question',name:'Can I do the Kedarnath trek in October?',acceptedAnswer:{'@type':'Answer',text:'Yes — October is one of the best months for the trek if you can handle cold temperatures (0–10°C). The trail is dry, views are exceptional, and crowds thin significantly.'}},
        ],
      }) }} />

      <div style={{ background:'var(--navy-light)', borderRadius:10, padding:'14px 18px', marginBottom:20, fontSize:13, color:'var(--text-muted)' }}>
        ✍️ Last updated: May 22, 2026 by <strong>Sumit Mishra</strong>, Co-Founder & Operations Manager, Shiv Ganga Travels · Verified with current district administration reports
      </div>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Kedarnath Guides</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Kedarnath Yatra Guide',h:'/kedarnath-yatra'},{l:'Kedarnath Trek Guide',h:'/blog/kedarnath-trek-guide'},{l:'Kedarnath Hotels',h:'/kedarnath-hotels'},{l:'Char Dham Packing List',h:'/blog/char-dham-yatra-packing-list'}].map(l => (
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Plan Your Kedarnath Yatra</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Best dates: May 1–June 15 and Sept 10–Oct 31 · Packages from ₹6,499</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Kedarnath Yatra 2026. Please suggest best dates.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          View Packages →
        </div>
      </div>
    </div>
  </>);
}
