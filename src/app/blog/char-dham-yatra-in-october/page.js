import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra in October 2026 – Weather, Crowds, Closing Dates & Is It Worth It?',
  description: 'Is October a good time for Char Dham Yatra? Fewer crowds, cheaper hotels, clear skies — but cold nights and temple closing dates to plan around. Complete October 2026 guide with honest advice.',
  keywords: ['char dham yatra in october 2026', 'kedarnath yatra october', 'char dham yatra october weather', 'char dham october closing dates', 'char dham off season october', 'best time char dham october'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-in-october` },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p = { fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>October · Off-Season Honest Guide</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Char Dham Yatra in October 2026 — Is It Worth It?</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Less crowd · Cheaper hotels · Early snowfall risk · Closing dates · Our honest assessment</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Char Dham in October</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, border:'2px solid var(--teal)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>Short answer from our team</div>
          <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.7 }}>October is excellent if you go in the first two weeks. The monsoon has cleared, mountains are freshly washed and crystal clear, crowds are gone, and hotels are cheaper. The risk is early snowfall in the third and fourth week of October that can disrupt the Kedarnath trek. We would rather send you in early October than late October. Here is the full picture.</div>
        </div>

        <h2 style={h2}>2026 Closing Dates — What You Are Working Against</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Dham','Opening 2026','Closing 2026','Notes'].map(h=>(<th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>))}
            </tr></thead>
            <tbody>
              {[
                ['Yamunotri','April 19','Nov 11, 2026','Usually closes on Diwali / Yama Dwitiya'],
                ['Gangotri','April 19','Nov 10, 2026','Closes on Diwali'],
                ['Kedarnath','April 22','Nov 11, 2026','Closes on Bhai Dooj — exact date announced annually'],
                ['Badrinath','April 23','Nov 13, 2026','Last to close — usually 2 days after Kedarnath'],
              ].map(([dham,open,close,note],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>{dham}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{open}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--gold-dark)', fontSize:13 }}>{close}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>For October, this means you have most of the month available. A group starting October 1 can comfortably complete all four dhams and be back in Haridwar by October 12–14. Starting October 15 is still fine but getting closer to the risk zone. We do not recommend starting the full Char Dham circuit after October 20.</p>

        <h2 style={h2}>Why October Can Be the Best Month</h2>
        <p style={p}>September and early October are genuinely our favourite window to send pilgrims. Here is why we tell our regular customers to consider it seriously:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { icon:'🏔️', title:'Crystal clear skies', desc:'The monsoon has just ended. The air is washed clean. Snow has freshly dusted the peaks. The views from the trek path to Kedarnath and from the Badrinath valley in October are arguably better than any other time of year.' },
            { icon:'👥', title:'No crowds', desc:'May-June sees lakhs of pilgrims on the same roads and in the same queues. In October, you walk into the temple with 30 people in front of you instead of 300. The darshan is slower, more personal, more contemplative.' },
            { icon:'🏨', title:'Hotels 30–40% cheaper', desc:'Off-season rates at our partner hotels are significantly lower than peak season. The same room at Guptkashi that costs ₹3,500 in May costs ₹2,200 in October. We pass these savings on directly.' },
            { icon:'🛣️', title:'Better roads', desc:'The heaviest vehicle traffic on the Char Dham route is May–June. In October, the roads are far less congested. Our drivers consistently report shorter travel times and less stress on October trips.' },
          ].map(c=>(
            <div key={c.title} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontSize:24, marginBottom:8 }}>{c.icon}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{c.title}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.65 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>The Risks — Be Honest with Yourself</h2>
        <p style={p}>We are a Haridwar operator that depends on pilgrims having a good experience. So we will not oversell October without giving you the full picture.</p>
        <p style={p}><strong>Snowfall risk:</strong> Kedarnath can receive early snowfall from mid-October onwards. Heavy snowfall can close the trek for 1–2 days at a time. If you have a fixed return date with no buffer, and snowfall delays you at Kedarnath, you will miss flights or trains. We always build a 1-day buffer into October itineraries and strongly recommend you do the same.</p>
        <p style={p}><strong>Temperature:</strong> October nights at Kedarnath can drop to -5°C or below. Badrinath nights hover around 0–5°C. Yamunotri and Gangotri are similar. You need proper warm clothing — a thin fleece jacket is not enough. We share a packing list when you book.</p>
        <p style={p}><strong>Some facilities close early:</strong> A few dhabas and shops on the Kedarnath trek route begin to close in early October as operators head home. Tea stalls at the midpoint may be shut. Carry your own snacks and water for the trek.</p>

        <h2 style={h2}>Our Recommendation for October Travel</h2>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'20px 22px', border:'1px solid var(--border)', marginBottom:24 }}>
          {[
            ['Start date','October 1–10 is ideal. October 11–18 is fine with a buffer day. After October 18, we strongly advise against starting.'],
            ['Buffer day','Always keep 1 extra day in the itinerary for weather. Do not book a flight home the day after Badrinath darshan.'],
            ['Kedarnath option','If you are anxious about the trek in October, the helicopter option from Phata/Sersi is excellent — and helicopter operators actually run more reliably in October because there is less monsoon cloud.'],
            ['Warm clothes','We share a full packing list for October travel. Minimum: 2 heavy sweaters, a down or heavy synthetic jacket, thermal inner layers, gloves, and a woollen hat.'],
            ['Group size','October is ideal for smaller groups and couples — you get more personal attention and the roads are quieter. Large groups (15+) might find some facilities limited.'],
          ].map(([k,v],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 1fr', gap:12, borderTop:i>0?'1px solid var(--border)':'none', padding:'10px 0' }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{k}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Planning October Char Dham? Talk to Us First</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>We have run October yatras every year since 2010. We know which dates are safe and which are risky. Free 10-minute consultation.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am planning Char Dham Yatra in October 2026. Can you advise on dates and risks?')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp for Advice</a>
            <Link href="/char-dham-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Packages →</Link>
          </div>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Best Time for Char Dham',h:'/blog/best-time-char-dham'},{l:'Char Dham Opening Dates',h:'/blog/char-dham-yatra-opening-dates-2026'},{l:'Uttarakhand Weather Guide',h:'/blog/uttarakhand-weather-guide'},{l:'Packing List',h:'/blog/char-dham-yatra-packing-list'}].map(l=>(
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
