import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Char Dham Yatra from Delhi 2026 — Train, Flight',
  description: 'Char Dham Yatra from Delhi 2026. 250–335 km depending on pickup point. Trains, flights, pickups explained. All-inclusive packages from ₹22,999.',
  keywords: ['char dham yatra from delhi','char dham yatra package from delhi','delhi to haridwar char dham','char dham tour from delhi 2026','chardham yatra delhi','delhi char dham yatra package'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-delhi` },
  openGraph: {
    title: 'Char Dham Yatra from Delhi 2026 — Trains, Flights & Packages from ₹22,999',
    description: '250–335 km depending on pickup point. Char Dham packages from ₹22,999/person. Zero commission, direct Haridwar operator.',
    url: `${SITE.baseUrl}/char-dham-yatra-from-delhi`, type:'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 from Delhi — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra from Delhi 2026 — Trains, Flights & Packages from ₹22,',
    description: '250–335 km depending on pickup point. Char Dham packages from ₹22,999/person. Zero commission, direct Haridwar operator.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Delhi — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:'How to reach Haridwar from Delhi for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Delhi to Dehradun (DED) — 40 min flight (₹2,500–5,000). Jolly Grant Airport is 35km from Haridwar. Total door-to-door: 2.5 hrs. Fastest if you book early.' } },
      { '@type':'Question', name:'What is the Char Dham Yatra package cost from Delhi?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra from Delhi starts at ₹22,999/person for a 9N/10D all-inclusive package — AC vehicle, hotels, meals, VIP darshan at all 4 dhams, guide, registration. Zero commission.' } },
      { '@type':'Question', name:'How many days for Char Dham Yatra from Delhi?', acceptedAnswer:{ '@type':'Answer', text:'Plan 11–13 days from Delhi: 1 day travel to Haridwar + 9–10 days Char Dham circuit + 1–2 days return.' } },
    ],
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Char Dham Yatra', item:`${SITE.baseUrl}/char-dham-yatra` },
      { '@type':'ListItem', position:3, name:'From Delhi', item:`${SITE.baseUrl}/char-dham-yatra-from-delhi` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

const PAA = [
  { q:'How far is Char Dham Yatra from Delhi?', a:'Delhi to Haridwar — the gateway — is about 220 km (5–6 hours by road). From there the full circuit covers roughly 1,100–1,400 km. Many pilgrims fly or take a train to Haridwar/Dehradun first and start the yatra from there.' },
  { q:'How many days for Char Dham Yatra from Delhi?', a:'Plan 11–13 days from Delhi: about a day to reach Haridwar, 9–10 days for the circuit, and a day to return. By helicopter (flying from Dehradun) the total drops to around 6–7 days including Delhi travel.' },
  { q:'How do I reach Haridwar from Delhi?', a:'By train (5–6 hours; Jan Shatabdi and Nanda Devi Express are popular), by road on NH-334 via Meerut and Roorkee (about 5.5 hours), or by a 40-minute flight to Dehradun\'s Jolly Grant Airport, which is 35 km from Haridwar.' },
  { q:'What is the cost of Char Dham Yatra from Delhi?', a:'Road packages from Delhi start around ₹22,999–24,500 per person for 10–11 days all-inclusive, with deluxe options higher. The helicopter package runs about ₹2.2–2.4 lakh. Train or flight tickets to Haridwar are usually separate.' },
  { q:'What is the best time for Char Dham Yatra from Delhi?', a:'May–June and September–October, matching the temple season (opens April 19–23, 2026). Leave Delhi well before the July–August monsoon to avoid landslide delays on the mountain stretches.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'QAPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>);
}

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Delhi · Char Dham 2026 · Direct Operator
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra from Delhi 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.85)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            250–335 km depending on pickup point · All-inclusive from <strong style={{ color:'#FFD166' }}>{ '₹22,999' }/person</strong> · Zero commission
          </p>
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap', marginBottom:22 }}>
            {['🚂 Train / Road','✅ Zero commission','🙏 VIP darshan included','⭐ 4.6/5 · 38 reviews'].map(t=>(
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Delhi.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'13px 24px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Char Dham Yatra<span>›</span>
          <span>From Delhi</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · Season open: Apr 19 – Nov 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance','250 km'],['Best route','Road or direct train'],['Total trip','11–13 days'],['Package from','₹22,999/person'],['Season 2026','Apr 19 – Nov'],['Registration','FREE · We handle']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Char Dham Yatra from Delhi 2026:</strong> The distance from Delhi to Haridwar is approximately 250km. Delhi to Dehradun (DED) — 40 min flight (₹2,500–5,000). Jolly Grant Airport is 35km from Haridwar. Total door-to-door: 2.5 hrs. Fastest if you book early. Our all-inclusive 9N/10D package from Delhi is ₹22,999/person — covers the full circuit with AC vehicle, hotels, meals, VIP darshan, and guide. Everything on this page is specific to Delhi pilgrims.</p>

        <h2 style={h2}>How to Reach Haridwar from Delhi</h2>
        <p style={p}>All our packages start from Haridwar. Getting there from Delhi is your first step. Actual train names, timings and costs below:</p>

        
        <div style={{ overflowX:'auto', marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','From','Departs','Arrives','Duration','Cost','Tip'].map(h=>(
                <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Mussoorie Express (14041)','Hazrat Nizamuddin','09:55 PM','Haridwar','08:05 AM','10h 10m','Best overnight option'],
                ['Jan Shatabdi (12055)','New Delhi','06:45 AM','Haridwar','12:10 PM','5h 25m','Best daytime, fast'],
                ['Dehradun Express (12687)','H. Nizamuddin','09:00 PM','Haridwar','05:30 AM','8h 30m','Budget overnight'],
                ['Nanda Devi Express (12205)','New Delhi','11:50 PM','Haridwar','05:30 AM','5h 40m','Late night option'],
              ].map(([train,from_,dep,arr,dur,cost,tip],i)=>(
                <tr key={train} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{train}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{from_}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{dep}</td>
                  <td style={{ padding:'8px 12px', color:'#1D9E75', fontWeight:600, fontSize:12 }}>{arr}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{dur}</td>
                  <td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12 }}>{cost}</td>
                  <td style={{ padding:'8px 12px', color:'#64748b', fontSize:12 }}>{tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ background:'#EEF6FF', border:'1px solid #B5D4F4', borderRadius:10, padding:'12px 16px', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#0C447C', marginBottom:4 }}>✈️ Flight from Delhi</div>
          <div style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7 }}>Delhi to Dehradun (DED) — 40 min flight (₹2,500–5,000). Jolly Grant Airport is 35km from Haridwar. Total door-to-door: 2.5 hrs. Fastest if you book early.</div>
        </div>

        <div style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)', borderLeft:'3px solid var(--teal)', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>🚗 By Road from Delhi</div>
          <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Leave Delhi before 6 AM to beat Meerut traffic on NH58. The route is smooth after Muzaffarnagar. Stops: Meerut (1.5 hrs), Muzaffarnagar (2.5 hrs), Roorkee (3.5 hrs), Haridwar (5.5 hrs). Avoid Friday evenings.</div>
        </div>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>💡 What we know about Delhi pilgrims (15 years of experience)</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.7 }}>Delhi has the most Char Dham Yatra pilgrims of any city — over 40% of our pilgrims board from Delhi, Noida, or Gurugram. This means every May, Delhi-origin batches get priority slots.</div>
        </div>

        <h2 style={h2}>What's Included — Delhi Char Dham Package</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:8, marginBottom:24 }}>
          {['✅ AC vehicle (Innova / Tempo Traveller)','✅ Station or airport pickup in Delhi or Haridwar','✅ Hotel accommodation all 9 nights (twin sharing)','✅ Breakfast + dinner every day','✅ VIP darshan — no queue at all 4 dhams','✅ Experienced Garhwali guide throughout','✅ Biometric registration handled — completely free','✅ All tolls, parking, driver allowance included','✅ Oxygen cylinder + first aid kit on vehicle','✅ 24hr WhatsApp support during the entire yatra'].map(item=>(
            <div key={item} style={{ background:'#fff', borderRadius:8, padding:'9px 12px', border:'1px solid var(--border)', fontSize:13, color:'#334155' }}>{item}</div>
          ))}
        </div>
        <div style={{ background:'rgba(29,158,117,0.08)', border:'1px solid #1D9E75', borderRadius:10, padding:'12px 16px', marginBottom:24, fontSize:13.5, color:'#0F5132' }}>
          <strong>Package from Delhi:</strong> ₹22,999/person · 9N/10D · All-inclusive · 5% GST included · Zero commission — you pay us directly
        </div>

        <h2 style={h2}>Our Pickup Points in Delhi</h2>
        <p style={p}>We pick up from these Delhi locations. If you are at a different address, WhatsApp us — we accommodate almost all requests.</p>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:28 }}>
          <span key='Connaught Place' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Connaught Place</span>
          <span key='Nizamuddin Station' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Nizamuddin Station</span>
          <span key='Kashmere Gate ISBT' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Kashmere Gate ISBT</span>
          <span key='Anand Vihar ISBT' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Anand Vihar ISBT</span>
          <span key='Noida Sector 18' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Noida Sector 18</span>
          <span key='Gurugram Cyber Hub' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Gurugram Cyber Hub</span>
        </div>

        <h2 style={h2}>2026 Season — All 4 Dhams Are Open</h2>
        <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:12, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:12 }}>
          {[['🌊 Yamunotri','Open Apr 19','Closes Nov 2026'],['🌿 Gangotri','Open Apr 19','Closes Nov 2026'],['🏔️ Kedarnath','Open Apr 22','Closes Nov 2026'],['🕌 Badrinath','Open Apr 23','Closes Nov 2026']].map(([d,o,c])=>(
            <div key={d} style={{ textAlign:'center' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{d}</div>
              <div style={{ fontSize:12.5, color:'#15803D', fontWeight:600 }}>{o}</div>
              <div style={{ fontSize:12, color:'#64748b' }}>{c}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <div style={{ color:'#FFD166', fontSize:13, fontWeight:700, marginBottom:6 }}>🙏 Delhi → Haridwar → Char Dham</div>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:8 }}>Book Your Char Dham Yatra from Delhi</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Free itinerary in 2 hrs · ₹22,999/person · Zero commission · Registration handled free</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Delhi.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp — Book Now</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>More guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Yatra 2026','/char-dham-yatra'],['Registration Guide','/blog/char-dham-yatra-registration'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Kedarnath Trek','/blog/kedarnath-trek-guide'],['Best Time to Visit','/blog/best-time-char-dham'],['Packing List','/blog/char-dham-yatra-packing-list']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
              <div style={{ marginTop:36 }}>
          <PAASchema/>
          <PeopleAlsoAsk items={PAA}/>
        </div>
      </article>
    </>
  );
}
