import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Kedarnath Pony vs Helicopter 2026 — Which is Better? Cost, Pros & Cons',
  description: 'Complete comparison: Kedarnath by pony vs helicopter in 2026. Cost, time, availability, IRCTC booking, pony booking, and which option suits which pilgrim. Expert analysis.',
  keywords: ['kedarnath pony vs helicopter','kedarnath helicopter or pony','kedarnath pony cost 2026','kedarnath helicopter cost 2026','kedarnath trek alternatives','best way to reach kedarnath'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-pony-vs-helicopter` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does a pony cost at Kedarnath in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pony (horse) at Kedarnath costs ₹3,000–5,000 one way from Gaurikund to Kedarnath in 2026. Return (Kedarnath to Gaurikund) is separately priced at ₹2,500–4,000. The Uttarakhand government sets fixed rates at the start of each season. Palki (palanquin carried by 4 porters) costs ₹8,000–12,000 one way. Book through your operator in advance — pony queues at Gaurikund during peak season are 2–3 hours long.' }},
      { '@type': 'Question', name: 'How much does Kedarnath helicopter cost in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath helicopter costs ₹7,000–9,000 per person one way in 2026 from Phata or Sersi helipads. Return is ₹7,000–9,000 again (total ₹14,000–18,000 return). Must be booked through the official IRCTC portal (irctc.co.in) — walk-in bookings at helipads are not permitted in 2026. Shiv Ganga Travels assists all pilgrims with IRCTC helicopter booking at no extra charge.' }},
      { '@type': 'Question', name: 'Is pony or helicopter better for Kedarnath?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pony is better for: pilgrims who want the full mountain experience, those who are moderately fit, budget-conscious pilgrims (₹3,000–5,000 vs ₹7,000–9,000 helicopter), and those not pressed for time. Helicopter is better for: senior pilgrims (65+), those with knee/heart conditions, anyone doing Kedarnath as a same-day visit, and those who want to save 4–5 hours of trek time.' }},
      { '@type': 'Question', name: 'Can I book Kedarnath pony in advance?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and you should. Pony booking for Kedarnath can be done through your tour operator or at the Gaurikund pony stand in person. During peak season (May–June), the pony stand has long queues. Shiv Ganga Travels pre-books pony slots for our pilgrims as part of our package — ask us when booking your yatra.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const H2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.55rem)', fontWeight:700, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };

export default function PonyVsHelicopter() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Kedarnath Guide · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Kedarnath Pony vs Helicopter 2026<br/><em style={{ color:'#FFD166' }}>Complete Comparison Guide</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.75, maxWidth:700, margin:'0 auto' }}>
            Cost, time, availability, booking process, and which option suits which pilgrim. Honest analysis from 15 years of operating Kedarnath Yatra from Haridwar.
          </p>
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12.5, color:'var(--text-muted)', display:'flex', gap:20, flexWrap:'wrap' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>Shiv Ganga Travels</strong> · Haridwar · 15 years on Kedarnath route</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Updated:</strong> May 2026</span>
        </div>
      </div>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>Pony vs Helicopter</span>
        </div>
      </nav>

      <article className="blog-container">

        {/* Quick comparison table */}
        <h2 style={H2}>At a Glance — Pony vs Helicopter vs Trek vs Palki</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Feature','Trek (Walk)','Pony','Helicopter','Palki (Doli)'].map(h=>(
                <th key={h} style={{ padding:'11px 14px', textAlign:'left', color:h==='Helicopter'?'#FFD166':'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['One-way cost','Free','₹3,000–5,000','₹7,000–9,000','₹8,000–12,000'],
                ['One-way time','5–7 hrs','3–4 hrs','8 minutes','4–5 hrs'],
                ['Distance','16km on foot','16km on pony','Phata to temple','16km carried'],
                ['Physical effort','High','Low','None','None'],
                ['Booking','No booking needed','Advance recommended','IRCTC mandatory','Advance booking needed'],
                ['Availability','Always available','Limited in peak season','Slot-based','Limited'],
                ['Best for','Fit pilgrims under 55','Moderate fitness, all ages','Seniors, time-pressed','Pilgrims who cannot walk or ride'],
              ].map((row,i)=>(
                <tr key={row[0]} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  {row.map((cell,j)=>(
                    <td key={j} style={{ padding:'10px 14px', fontWeight:j===0?700:400, color:j===0?'var(--navy)':j===3?'var(--teal)':'var(--text-mid)', fontSize:j===0?14:13.5 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={H2}>Kedarnath Pony — Everything You Need to Know</h2>
        <p>The pony (locally called <strong>ghoda</strong>) is the most popular alternative to trekking at Kedarnath. About 2,000+ ponies operate on the Gaurikund–Kedarnath route during peak season. Here is what you need to know:</p>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
          {[
            { t:'The pony route', d:'Ponies travel the same 16km stone path as trekkers. The route is wide enough for ponies in most sections. The Kedarnath route from Gaurikund passes through Jungle Chatti (6km), Bhimbali (9km), and Kedarnath (16km). The pony typically takes 3–4 hours one way.' },
            { t:'2026 official pony rates (government fixed)', d:'Gaurikund to Kedarnath: ₹3,000–5,000 (one way). Kedarnath to Gaurikund: ₹2,500–4,000 (one way). Children sharing adult saddle: reduced rate. Prices are regulated by the Uttarakhand government and displayed at the Gaurikund pony stand. Do not pay above the listed rate.' },
            { t:'Pony stand location', d:'The official pony stand is at Gaurikund (the road end, 5km from Sonprayag). You must reach Gaurikund first (by shared jeep from Sonprayag, ₹40–80 per person). The pony stand issues tickets. You are assigned a pony handler who accompanies you.' },
            { t:'Is it safe?', d:'Yes — ponies on this route have done the Kedarnath trail thousands of times. Handlers are experienced local Garhwalis. However, if you have severe vertigo or fear of heights, it may feel uncomfortable on certain steep sections. Most pilgrims find it comfortable.' },
            { t:'Physical requirements', d:'No fitness requirement — this is suitable for all ages including senior citizens. The only condition: you must be able to mount and dismount the pony (handlers assist). Maximum weight capacity is approximately 90kg.' },
          ].map(item=>(
            <details key={item.t} style={{ background:'#fff', borderRadius:10, border:'1px solid var(--border)', overflow:'hidden' }}>
              <summary style={{ padding:'13px 16px', cursor:'pointer', listStyle:'none', fontWeight:600, fontSize:14.5, color:'var(--navy)', display:'flex', justifyContent:'space-between' }}>
                {item.t} <span>＋</span>
              </summary>
              <div style={{ padding:'12px 16px', borderTop:'1px solid var(--border)', fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>{item.d}</div>
            </details>
          ))}
        </div>

        <h2 style={H2}>Kedarnath Helicopter — Everything You Need to Know in 2026</h2>
        <div style={{ background:'#FEF3E2', border:'2px solid var(--gold)', borderRadius:12, padding:'14px 18px', marginBottom:16 }}>
          <strong style={{ color:'#7B3F00' }}>⚠️ Critical 2026 Rule:</strong>
          <span style={{ color:'#7B3F00', fontSize:14 }}> All Kedarnath helicopter bookings must be made through irctc.co.in — walk-in bookings at Phata, Sersi, and Guptkashi helipads are not permitted. Shiv Ganga Travels assists with IRCTC booking for all our pilgrims.</span>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
          {[
            { t:'Which helipads operate to Kedarnath?', d:'Phata (primary — most flights), Sersi (secondary), and Guptkashi (third option). All three are accessible from Guptkashi town. The helicopter lands at the Kedarnath helipad, approximately 500m from the temple. You walk the remaining distance on flat ground.' },
            { t:'How to book via IRCTC', d:'Go to irctc.co.in → Tourism → Helicopter Services → Select Kedarnath → Choose helipad and date → Enter Aadhaar details for each passenger → Pay online. Booking opens approximately 30 days in advance. Slots fill within hours during peak May–June season. Book as early as possible. Cancellation through IRCTC is available.' },
            { t:'What is the weight limit?', d:'80kg per passenger including hand luggage. Passengers above 80kg pay for an additional seat. Carry only a small day pack (5kg max) for the helicopter trip. Leave main luggage in your vehicle at the helipad parking.' },
            { t:'What is included in the helicopter ticket?', d:'The IRCTC helicopter ticket covers the flight only. VIP darshan at Kedarnath, hotel, meals, and ground transfers are not included. A full Char Dham package from Shiv Ganga Travels includes helicopter coordination, ground transfers, hotel, and VIP darshan arrangement.' },
            { t:'What if my slot is cancelled?', d:'IRCTC cancels helicopter slots due to weather, technical reasons, or official order. Full refund is issued within 7 days. In bad weather, helicopter operations stop for the day and all booked passengers are rescheduled. This is why we recommend building a buffer day into your Kedarnath itinerary.' },
          ].map(item=>(
            <details key={item.t} style={{ background:'#fff', borderRadius:10, border:'1px solid var(--border)', overflow:'hidden' }}>
              <summary style={{ padding:'13px 16px', cursor:'pointer', listStyle:'none', fontWeight:600, fontSize:14.5, color:'var(--navy)', display:'flex', justifyContent:'space-between' }}>
                {item.t} <span>＋</span>
              </summary>
              <div style={{ padding:'12px 16px', borderTop:'1px solid var(--border)', fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>{item.d}</div>
            </details>
          ))}
        </div>

        <h2 style={H2}>Who Should Choose What — Our Recommendation</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap:14, marginBottom:28 }}>
          {[
            { title:'Trek (Walk)', emoji:'🥾', for:'Fit pilgrims under 50 who want the full spiritual experience of the mountain', why:'The trek itself is part of the pilgrimage. The physical challenge creates a deeper sense of arrival at the temple.', cost:'Free', book:'No advance booking needed', col:'var(--teal)' },
            { title:'Pony', emoji:'🐴', for:'Pilgrims of all ages who want an alternative to walking — including seniors with moderate fitness', why:'Comfortable, affordable, and still gives you the mountain experience. Most popular choice at Kedarnath.', cost:'₹3,000–5,000 one way', book:'Advance booking through operator recommended', col:'#D97706' },
            { title:'Helicopter', emoji:'🚁', for:'Senior pilgrims (65+), those with health conditions, and time-pressed pilgrims doing same-day Kedarnath', why:'8-minute flight vs 5-hour trek. Saves the day for those who physically cannot do the trek or pony.', cost:'₹7,000–9,000 one way via IRCTC', book:'Book on irctc.co.in — slots fill fast', col:'#7C3AED' },
            { title:'Palki / Doli', emoji:'🪑', for:'Pilgrims who cannot walk or ride — very senior, disabled, or health conditions preventing both', why:'4 porters carry you in a chair. Slower than pony. More expensive. Most accessible option for those with severe mobility limitations.', cost:'₹8,000–12,000 one way', book:'Pre-book through operator', col:'var(--navy)' },
          ].map(opt=>(
            <div key={opt.title} style={{ border:`2px solid ${opt.col}`, borderRadius:14, padding:'16px', background:'#fff' }}>
              <div style={{ fontSize:28, marginBottom:8 }}>{opt.emoji}</div>
              <div style={{ fontWeight:800, fontSize:15, color:opt.col, marginBottom:6 }}>{opt.title}</div>
              <div style={{ fontSize:12.5, color:'var(--navy)', fontWeight:700, marginBottom:4 }}>Best for:</div>
              <div style={{ fontSize:13, color:'var(--text-muted)', marginBottom:10, lineHeight:1.5 }}>{opt.for}</div>
              <div style={{ fontSize:12.5, color:'var(--navy)', fontWeight:700, marginBottom:2 }}>Why:</div>
              <div style={{ fontSize:13, color:'var(--text-muted)', marginBottom:10, lineHeight:1.5 }}>{opt.why}</div>
              <div style={{ fontSize:13, color:opt.col, fontWeight:700 }}>Cost: {opt.cost}</div>
              <div style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:2 }}>{opt.book}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'18px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>💡 Our honest recommendation after 15 years:</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
            If you are under 55 and in reasonable health — <strong>walk the trek</strong>. The physical challenge is manageable, the views are extraordinary, and the arrival at Kedarnath after climbing 16km is an emotion that the helicopter simply cannot replicate. If you are above 65 or have any health condition — <strong>book the helicopter</strong>. It is the responsible choice. The darshan at the temple is equally powerful either way.
          </p>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>We Handle Pony and Helicopter Booking for You</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Both pony pre-booking and IRCTC helicopter coordination included in all our packages — no extra charge.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help with Kedarnath helicopter or pony booking 2026.')}`}
              target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/kedarnath-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Kedarnath Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Helicopter Booking','/blog/kedarnath-helicopter-booking'],['Kedarnath Darshan Timing','/blog/kedarnath-darshan-timing'],['Kedarnath Yatra Package','/kedarnath-yatra']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
