import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Char Dham Yatra from Surat 2026 — Train, Flight',
  description: 'Char Dham Yatra from Surat 2026. 1,250 km — train (18–20 hrs) or fly. Trains, flights, pickups explained. All-inclusive packages from ₹23,999.',
  keywords: ['char dham yatra from surat','char dham yatra package from surat','surat to haridwar char dham','char dham tour from surat 2026','chardham yatra surat','surat char dham yatra package'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-surat` },
  openGraph: {
    title: 'Char Dham Yatra from Surat 2026 — Trains, Flights & Packages from ₹23,999',
    description: '1,250 km — train (18–20 hrs) or fly. Char Dham packages from ₹23,999/person. Zero commission, direct Haridwar operator.',
    url: `${SITE.baseUrl}/char-dham-yatra-from-surat`, type:'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 from Surat — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra from Surat 2026 — Trains, Flights & Packages from ₹23,',
    description: '1,250 km — train (18–20 hrs) or fly. Char Dham packages from ₹23,999/person. Zero commission, direct Haridwar operator.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Surat — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:'How to reach Haridwar from Surat for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Surat (STV) to Dehradun — no direct flight. Fly Surat to Delhi or Mumbai and connect. Flying Surat–Delhi (2h, ₹3,000–5,000) + Shatabdi is 10 hours total and much better than a 20-hour train.' } },
      { '@type':'Question', name:'What is the Char Dham Yatra package cost from Surat?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra from Surat starts at ₹23,999/person for a 9N/10D all-inclusive package — AC vehicle, hotels, meals, VIP darshan at all 4 dhams, guide, registration. Zero commission.' } },
      { '@type':'Question', name:'How many days for Char Dham Yatra from Surat?', acceptedAnswer:{ '@type':'Answer', text:'Plan 11–13 days from Surat: 1 day travel to Haridwar + 9–10 days Char Dham circuit + 1–2 days return.' } },
    ],
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Char Dham Yatra', item:`${SITE.baseUrl}/char-dham-yatra` },
      { '@type':'ListItem', position:3, name:'From Surat', item:`${SITE.baseUrl}/char-dham-yatra-from-surat` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

const PAA = [
  { q:'How far is Char Dham Yatra from Surat?', a:'Surat to Haridwar — the gateway to the dhams — is roughly 1,250 km. The full Char Dham circuit then covers about 1,100–1,400 km from Haridwar and back.' },
  { q:'How do I reach Haridwar from Surat?', a:'From Surat it\'s about 1,250 km to Haridwar. Best options: train (18–20 hrs) or fly via Delhi/Dehradun. Jolly Grant Airport, Dehradun is the nearest airport (35 km from Haridwar); Haridwar Junction is the nearest railhead. From there the circuit begins.' },
  { q:'How many days are needed for Char Dham Yatra from Surat?', a:'Plan 10–12 days for the full road circuit including travel from Surat. By helicopter (flying from Dehradun) the on-ground portion drops to 5–6 days. Senior citizens should allow a couple of extra days for acclimatisation.' },
  { q:'What is the cost of Char Dham Yatra from Surat?', a:'Our all-inclusive road packages start from ₹23,999 per person, covering vehicle from Haridwar, hotels, meals, guide, VIP darshan and free registration. The helicopter package runs about ₹2.2–2.4 lakh. Train or flight fare to Haridwar/Dehradun is usually separate.' },
  { q:'What is the best time for Char Dham Yatra from Surat?', a:'May–June and September–October, matching the temple season — the 2026 dhams open between April 19 and 23. Book early for these peak windows and avoid the July–August monsoon, when landslides can delay the mountain stretches.' },
  { q:'Is Char Dham Yatra registration mandatory?', a:'Yes. Free biometric registration is compulsory for all four dhams and checked at police barriers like Sonprayag. Register online at registrationandtouristcare.uk.gov.in before travelling — we complete it free for everyone in our packages.' },
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
            Surat · Char Dham 2026 · Direct Operator
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra from Surat 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.85)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            1,250 km — train (18–20 hrs) or fly · All-inclusive from <strong style={{ color:'#FFD166' }}>{ '₹23,999' }/person</strong> · Zero commission
          </p>
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap', marginBottom:22 }}>
            {['✈️ Fly via Dehradun','✅ Zero commission','🙏 VIP darshan included','⭐ 4.6/5 · 38 reviews'].map(t=>(
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Surat.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'13px 24px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Char Dham Yatra<span>›</span>
          <span>From Surat</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · Season open: Apr 19 – Nov 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance','1250 km'],['Best route','Fly to Dehradun/Delhi'],['Total trip','11–13 days'],['Package from','₹23,999/person'],['Season 2026','Apr 19 – Nov'],['Registration','FREE · We handle']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Char Dham Yatra from Surat 2026:</strong> The distance from Surat to Haridwar is approximately 1250km. Surat (STV) to Dehradun — no direct flight. Fly Surat to Delhi or Mumbai and connect. Flying Surat–Delhi (2h, ₹3,000–5,000) + Shatabdi is 10 hours total and much better than a 20-hour train. Our all-inclusive 9N/10D package from Surat is ₹23,999/person — covers the full circuit with AC vehicle, hotels, meals, VIP darshan, and guide. Everything on this page is specific to Surat pilgrims.</p>

        <h2 style={h2}>How to Reach Haridwar from Surat</h2>
        <p style={p}>All our packages start from Haridwar. Getting there from Surat is your first step. Actual train names, timings and costs below:</p>

        
        <div style={{ overflowX:'auto', marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','From','Departs','Arrives','Duration','Cost','Tip'].map(h=>(
                <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Haridwar Express (19019 segment)','Surat','PM','Haridwar','~20–22h','₹400–₹1,400',''],
                ['Surat–Delhi AC Express + Shatabdi','Surat','Evening','Haridwar','18–20h total','₹600–₹2,000',''],
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
          <div style={{ fontWeight:700, fontSize:13.5, color:'#0C447C', marginBottom:4 }}>✈️ Flight from Surat</div>
          <div style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7 }}>Surat (STV) to Dehradun — no direct flight. Fly Surat to Delhi or Mumbai and connect. Flying Surat–Delhi (2h, ₹3,000–5,000) + Shatabdi is 10 hours total and much better than a 20-hour train.</div>
        </div>

        <div style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)', borderLeft:'3px solid var(--teal)', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>🚗 By Road from Surat</div>
          <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Surat to Haridwar is 1,250km. If travelling by train, the overnight option via Mumbai is the cleanest route. Many Surat pilgrims prefer flying via Delhi — pay the extra ₹3,000 and save a full day.</div>
        </div>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>💡 What we know about Surat pilgrims (15 years of experience)</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.7 }}>Surat has a large Jain community alongside Hindu pilgrims. Swaminarayan devotees from Surat are among the most organised Char Dham pilgrim groups — many come in batches of 30–50 booked through their mandal.</div>
        </div>

        <h2 style={h2}>What's Included — Surat Char Dham Package</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:8, marginBottom:24 }}>
          {['✅ AC vehicle (Innova / Tempo Traveller)','✅ Station or airport pickup in Surat or Haridwar','✅ Hotel accommodation all 9 nights (twin sharing)','✅ Breakfast + dinner every day','✅ VIP darshan — no queue at all 4 dhams','✅ Experienced Garhwali guide throughout','✅ Biometric registration handled — completely free','✅ All tolls, parking, driver allowance included','✅ Oxygen cylinder + first aid kit on vehicle','✅ 24hr WhatsApp support during the entire yatra'].map(item=>(
            <div key={item} style={{ background:'#fff', borderRadius:8, padding:'9px 12px', border:'1px solid var(--border)', fontSize:13, color:'#334155' }}>{item}</div>
          ))}
        </div>
        <div style={{ background:'rgba(29,158,117,0.08)', border:'1px solid #1D9E75', borderRadius:10, padding:'12px 16px', marginBottom:24, fontSize:13.5, color:'#0F5132' }}>
          <strong>Package from Surat:</strong> ₹23,999/person · 9N/10D · All-inclusive · 5% GST included · Zero commission — you pay us directly
        </div>

        <h2 style={h2}>Our Pickup Points in Surat</h2>
        <p style={p}>We pick up from these Surat locations. If you are at a different address, WhatsApp us — we accommodate almost all requests.</p>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:28 }}>
          <span key='Surat Railway Station' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Surat Railway Station</span>
          <span key='Surat Airport' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Surat Airport</span>
          <span key='Varachha Road' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Varachha Road</span>
          <span key='Adajan' style={{ background:'#fff',border:'1px solid var(--border)',color:'var(--navy)',padding:'7px 14px',borderRadius:8,fontSize:12.5,fontWeight:600 }}>📍 Adajan</span>
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
          <div style={{ color:'#FFD166', fontSize:13, fontWeight:700, marginBottom:6 }}>🙏 Surat → Haridwar → Char Dham</div>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:8 }}>Book Your Char Dham Yatra from Surat</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Free itinerary in 2 hrs · ₹23,999/person · Zero commission · Registration handled free</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Surat.')}`} target="_blank" rel="nofollow noopener noreferrer"
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
