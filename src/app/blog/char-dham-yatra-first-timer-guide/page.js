import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';

export const metadata = {
  title: 'Char Dham Yatra for First Timers 2026 – Complete Planning Guide from Start to Finish',
  description: 'Planning your first Char Dham Yatra in 2026? Everything you need: registration, packing, fitness prep, total cost, route order, do\'s and don\'ts — written by a 15-year Haridwar yatra operator.',
  keywords: ['char dham yatra for first timers', 'char dham yatra beginners guide 2026', 'first time char dham yatra tips', 'char dham yatra what to expect', 'char dham yatra complete planning guide'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-first-timer-guide` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How difficult is Char Dham Yatra for first timers?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra is moderately challenging for first timers. The Kedarnath trek (16km one way from Gaurikund) is the toughest part — it takes 5–7 hours ascending. Badrinath and Gangotri are accessible by motor road with no trekking. Yamunotri requires a 6km trek. With proper preparation, the right operator, and a 10–11 day itinerary, first timers complete the yatra successfully. Shiv Ganga Travels has guided thousands of first-time pilgrims safely through the circuit.' }},
      { '@type': 'Question', name: 'How many days should a first timer plan for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'A first timer should plan 10–12 days for Char Dham Yatra from Haridwar. 10 nights / 11 days is the comfortable minimum. Rushing it in less time — especially the Kedarnath trek — causes exhaustion and spoils the experience. For pilgrims above 55 or with any health condition, 12 nights / 13 days is recommended with a slower pace.' }},
      { '@type': 'Question', name: 'What is the biggest mistake first time Char Dham pilgrims make?',
        acceptedAnswer: { '@type': 'Answer', text: 'The most common mistake is under-estimating hotel booking. During May–June peak season, hotels at Guptkashi (Kedarnath base), Uttarkashi (Gangotri base), and Joshimath (Badrinath base) fill up 45–60 days in advance. First timers who plan late find their preferred hotels unavailable. Booking through a direct operator like Shiv Ganga Travels solves this — we pre-block rooms from January each year.' }},
      { '@type': 'Question', name: 'Is Char Dham Yatra safe for someone doing it alone?',
        acceptedAnswer: { '@type': 'Answer', text: 'Solo Char Dham Yatra is possible but not recommended for first timers. The mountain roads, Kedarnath trek, altitude effects, and daily pilgrim limits require experience to navigate confidently. Solo pilgrims should travel with an organised group or hire a private guide. Shiv Ganga Travels accepts solo pilgrims and places them in small groups of compatible travellers.' }},
      { '@type': 'Question', name: 'How much should I budget for my first Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'A complete 10-night Char Dham Yatra from Haridwar costs ₹19,500–28,000 per person all-inclusive with Shiv Ganga Travels. Add ₹8,000–12,000 for personal expenses (pony at Kedarnath, personal pujas, tips, snacks). Total realistic budget: ₹27,000–40,000 per person. MakeMyTrip and Thrillophilia charge ₹30,000–35,000 for the same package due to agent commissions. Direct operator booking with us saves 10–20%.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const H2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.55rem)', fontWeight:700, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const H3 = { fontFamily:'var(--font-display)', fontSize:'clamp(1rem,2vw,1.2rem)', fontWeight:700, color:'var(--teal)', marginBottom:8, marginTop:24 };

export default function FirstTimerGuide() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Beginner&apos;s Guide · 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra for First Timers 2026<br/>
            <em style={{ color:'#FFD166' }}>Complete Step-by-Step Guide</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.75, maxWidth:700, margin:'0 auto' }}>
            Everything a first-time pilgrim needs to know — from registration to packing to what happens on the trek. No fluff. Real advice from 15 years of guiding 50,000+ pilgrims through the circuit.
          </p>
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12.5, color:'var(--text-muted)', display:'flex', gap:20, flexWrap:'wrap' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>Shiv Ganga Travels</strong> · 15 years · 50,000+ pilgrims</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Updated:</strong> May 2026</span>
          <span>⏱️ 12 min read</span>
        </div>
      </div>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Char Dham Yatra First Timer Guide</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>📋 What this guide covers</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:6 }}>
            {['Is Char Dham Yatra right for you?','How many days you need','What to do 3 months before','Registration step by step','Packing — what to carry and what not to','The Kedarnath trek — what to expect','Altitude sickness — how to prevent it','Costs — realistic budget breakdown','10 common mistakes and how to avoid them','How to choose the right operator'].map(t=>(
              <div key={t} style={{ fontSize:13, color:'var(--navy)', fontWeight:500, display:'flex', gap:6, alignItems:'center' }}>
                <span style={{ color:'var(--gold)', fontWeight:700, fontSize:10 }}>→</span> {t}
              </div>
            ))}
          </div>
        </div>

        <h2 style={H2}>Is Char Dham Yatra Right for You?</h2>
        <p>The Char Dham Yatra — Yamunotri, Gangotri, Kedarnath, and Badrinath — is not a holiday. It is a pilgrimage that takes you to altitudes between 3,133m and 3,583m on narrow Himalayan mountain roads, in weather that can change from sunshine to snow in a single afternoon. If you are prepared for that, it becomes one of the most profound experiences of your life. If you are not, it can become a difficult and stressful journey.</p>
        <p>The good news: with 15 years of operating Char Dham Yatra from Haridwar, we have guided pilgrims aged 14 to 83, people with knee replacements, people on blood pressure medication, people who had never trekked a day in their life. Almost all of them completed the circuit successfully — because they planned properly and travelled with an experienced operator.</p>
        <p>The one type of person we advise to reconsider: anyone with unstable heart disease, severe COPD, or who cannot walk 500 metres without stopping. The high altitude genuinely poses risk for these conditions. Speak to your doctor before booking.</p>

        <h2 style={H2}>How Many Days Does Char Dham Yatra Take?</h2>
        <div style={{ overflowX:'auto', marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Itinerary','Best For','Note'].map(h=><th key={h} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['9 Nights / 10 Days','Fit pilgrims under 55, returning visitors','Minimum comfortable duration. Fast pace.'],
                ['10 Nights / 11 Days','Most pilgrims — first timers, families','Recommended for first timers. Good balance.'],
                ['11 Nights / 12 Days','Senior pilgrims, those who want relaxed pace','Slow start, more rest, extra day at dhams.'],
                ['12 Nights / 13 Days','60+ pilgrims, anyone with health conditions','Senior package. Medical attendant included.'],
              ].map(([a,b,c],i)=>(
                <tr key={a} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 14px', fontWeight:700, color:'var(--navy)', fontSize:14 }}>{a}</td>
                  <td style={{ padding:'10px 14px', color:'var(--text-mid)', fontSize:13.5 }}>{b}</td>
                  <td style={{ padding:'10px 14px', color:'var(--text-muted)', fontSize:13 }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={H2}>3 Months Before — Your Pre-Yatra Checklist</h2>
        {[
          { n:'1', t:'Book your package', d:'Book with a direct operator 60–90 days before peak season (May–June) or 30–45 days before September–October. Hotels at Guptkashi and Joshimath fill 60 days ahead. Do not wait.' },
          { n:'2', t:'Get a medical check-up', d:'Mandatory for 55+ (medical certificate from MBBS doctor). Recommended for anyone with BP, diabetes, or heart history. Your doctor should specifically clear you for high-altitude travel.' },
          { n:'3', t:'Start physical preparation', d:'If you are not regularly active, begin daily 30-minute walks. Increase to 45 minutes over 6 weeks. Practice climbing stairs with a day pack. The Kedarnath trek is 16km at steep gradient — preparation makes it manageable.' },
          { n:'4', t:'Complete biometric registration', d:'Register at registrationandtouristcare.uk.gov.in. Free. Takes 15 minutes. Mandatory for all 4 dhams. Shiv Ganga Travels handles this for all our package pilgrims.' },
          { n:'5', t:'Arrange your travel to Haridwar', d:'Book train or flight. Best trains from Delhi: Shatabdi Express (06:45 NDLS → 10:55 HW) or Mussoorie Express (overnight). See our guide: ' },
        ].map(item=>(
          <div key={item.n} style={{ display:'flex', gap:0, borderRadius:12, overflow:'hidden', border:'1px solid var(--border)', marginBottom:10 }}>
            <div style={{ background:'var(--navy)', minWidth:44, display:'flex', alignItems:'center', justifyContent:'center', color:'#FFD166', fontWeight:800, fontSize:16, padding:'14px 8px', flexShrink:0 }}>{item.n}</div>
            <div style={{ padding:'14px 16px', flex:1 }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:4 }}>{item.t}</div>
              <div style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.7 }}>
                {item.d}
                {item.n==='5' && <a href="/how-to-reach-haridwar" style={{ color:'var(--teal)', textDecoration:'none', fontWeight:600 }}>How to Reach Haridwar →</a>}
              </div>
            </div>
          </div>
        ))}

        <h2 style={H2}>Packing List — What to Carry (and What to Leave Behind)</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:16, marginBottom:20 }}>
          <div style={{ background:'#F0FDF4', borderRadius:12, padding:'16px', border:'1px solid #86EFAC' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#15803D', marginBottom:10 }}>✅ Must Carry</div>
            {['Thermal inners (2 sets) — even in June','Fleece jacket + windproof outer layer','Waterproof trekking shoes','Rain poncho','Warm cap and gloves','Aadhaar card (original)','Yatra registration card — printed','Medical certificate (if 55+)','Personal medicines + 2 extra days supply','ORS sachets — 10 minimum','Sunscreen SPF 50+ and lip balm','Cash ₹10,000+ in small notes','Powerbank (fully charged)','Trekking poles for Kedarnath','Headtorch with spare batteries'].map(i=>(
              <div key={i} style={{ fontSize:13, color:'#15803D', padding:'3px 0', borderBottom:'1px solid rgba(21,128,61,0.1)' }}>• {i}</div>
            ))}
          </div>
          <div style={{ background:'#FFF1F2', borderRadius:12, padding:'16px', border:'1px solid #FECDD3' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#9F1239', marginBottom:10 }}>❌ Leave Behind</div>
            {['Heavy suitcases (only 5kg allowed in helicopter)','Valuables (leave at hotel safe)','Non-vegetarian food or alcohol','Jeans (wet and heavy when cold)','City shoes or sandals','Non-essential electronics','Large amounts of cash (ATMs available till Sonprayag)','Excessive clothing — pack light','Plastic bags (banned in many areas)','Non-essential items beyond 7kg total'].map(i=>(
              <div key={i} style={{ fontSize:13, color:'#9F1239', padding:'3px 0', borderBottom:'1px solid rgba(159,18,57,0.1)' }}>• {i}</div>
            ))}
          </div>
        </div>

        <h2 style={H2}>The Kedarnath Trek — What First Timers Need to Know</h2>
        <p>This is the part most first timers are most nervous about — and the part most people end up proud of completing. Here is an honest breakdown.</p>
        <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:20 }}>
          {[
            { q:'How long is the trek?', a:'16 kilometres one way from Gaurikund to Kedarnath temple. The trail is paved stone for most of the route. Total elevation gain: approximately 1,600 metres over 16km. It is a genuine physical challenge.' },
            { q:'How long does it take?', a:'First timers: 5–7 hours ascending, 3–4 hours descending. The pace depends entirely on your fitness and whether you stop at rest points. Go slow — altitude makes everything harder.' },
            { q:'What are the alternatives?', a:'Pony (₹3,000–5,000 one way from Gaurikund), Palki/Doli (₹8,000–12,000 one way, 4 porters carry you), Helicopter (₹7,000–9,000 one way via IRCTC from Phata/Sersi). Book pony/helicopter in advance — do not decide on the day.' },
            { q:'What should I eat the day before the trek?', a:'Eat light the evening before — dal, rice, roti, nothing heavy. Drink 3 litres of water the day before. Start the trek before 6 AM to avoid afternoon crowds at Sonprayag checkpoint. Carry chocolate, biscuits, and ORS for the trek itself.' },
            { q:'What is the steepest part?', a:'The section from Jungle Chatti (9km) to Kedarnath (16km) is the steepest. This is where most pilgrims need to rest frequently. Tea stalls at Jungle Chatti and Bhimbali (12km) are your rest points.' },
          ].map((item,i)=>(
            <details key={i} style={{ background:'#fff', borderRadius:10, border:'1px solid var(--border)', overflow:'hidden' }}>
              <summary style={{ padding:'14px 16px', cursor:'pointer', listStyle:'none', fontWeight:600, fontSize:14.5, color:'var(--navy)', display:'flex', justifyContent:'space-between' }}>
                {item.q} <span>＋</span>
              </summary>
              <div style={{ padding:'12px 16px', borderTop:'1px solid var(--border)', fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>{item.a}</div>
            </details>
          ))}
        </div>

        <h2 style={H2}>Altitude Sickness — Prevention and Recognition</h2>
        <div style={{ background:'#FEF3E2', border:'2px solid var(--gold)', borderRadius:12, padding:'16px 20px', marginBottom:16 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'#7B3F00', marginBottom:8 }}>⚠️ Know These Symptoms</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:8, fontSize:13.5, color:'#7B3F00' }}>
            {['Headache (first sign — take seriously)','Nausea or vomiting','Dizziness when standing','Breathlessness at rest','Loss of appetite','Fatigue beyond what walking explains','Confusion or difficulty walking (severe — descend immediately)','Blue lips or fingertips (emergency — call 108)'].map(s=>(
              <div key={s} style={{ display:'flex', gap:6 }}><span>•</span>{s}</div>
            ))}
          </div>
        </div>
        <p><strong>Prevention:</strong> Acclimatise at Guptkashi (1,319m) for one night before ascending to Kedarnath. Drink 3–4 litres of water daily. Avoid alcohol. Ascend slowly — do not rush. Shiv Ganga Travels carries oxygen cylinders in all our vehicles and advises all pilgrims on acclimatisation protocol before the trek.</p>

        <h2 style={H2}>Realistic Cost Breakdown for First Timers</h2>
        <div style={{ overflowX:'auto', marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Item','Cost (Budget)','Cost (Mid)','Notes'].map(h=><th key={h} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['10N/11D Package (Shiv Ganga Travels)','₹19,500','₹24,000','Vehicle, hotel, meals, guide, VIP darshan'],
                ['Pony at Kedarnath (one way)','₹3,000','₹5,000','One way from Gaurikund — optional'],
                ['Personal pujas at dhams','₹1,000','₹5,000','Prasad, offerings — personal choice'],
                ['Snacks and personal drinks','₹1,000','₹2,000','Tea stops, packaged food, ORS'],
                ['Tips (driver + guide)','₹1,000','₹2,000','Customary — both deserve it'],
                ['Miscellaneous','₹1,500','₹3,000','Medicines, shopping, emergencies'],
                ['Total (approximate)','₹27,000','₹41,000','Per person, Haridwar base'],
              ].map(([a,b,c,d],i)=>(
                <tr key={a} style={{ borderBottom:'1px solid var(--border)', background:i===6?'var(--navy-light)':i%2===0?'#fff':'var(--bg)', fontWeight:i===6?700:400 }}>
                  <td style={{ padding:'10px 14px', color:'var(--navy)', fontSize:14 }}>{a}</td>
                  <td style={{ padding:'10px 14px', color:'#15803D', fontWeight:700, fontSize:14 }}>{b}</td>
                  <td style={{ padding:'10px 14px', color:'var(--navy)', fontWeight:700, fontSize:14 }}>{c}</td>
                  <td style={{ padding:'10px 14px', color:'var(--text-muted)', fontSize:13 }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
        <p style={{ fontSize:13.5, color:'var(--text-muted)' }}>Note: These are Shiv Ganga Travels direct operator prices. Booking through MakeMyTrip or Thrillophilia adds ₹3,000–8,000 per person in platform fees and agent commissions. See our complete cost breakdown →</p>

        <h2 style={H2}>10 Mistakes First Time Pilgrims Make — And How to Avoid Them</h2>
        {[
          ['Booking too late','Hotels fill 45–60 days ahead in peak season. Book by March for May departures.'],
          ['Carrying too much luggage','You will regret every extra kilo on the Kedarnath trek. Pack for 10 days in a 7kg bag.'],
          ['Not registering for biometric in advance','You will be turned back at the checkpoint. Register at registrationandtouristcare.uk.gov.in before departure.'],
          ['Deciding on pony/helicopter at Gaurikund','Pony queues at Gaurikund are 2–3 hours long in peak season. Book in advance through your operator.'],
          ['Rushing the Kedarnath trek','Go slow. The summit is not going anywhere. Altitude fatigue comes from rushing.'],
          ['Not acclimatising at Guptkashi','One night at Guptkashi (1,319m) before Kedarnath makes the altitude far more manageable.'],
          ['Carrying no cash','ATMs work only till Sonprayag. Carry ₹8,000–10,000 cash in small denominations.'],
          ['Skipping the evening aarti at Haridwar','This is the emotional and spiritual start of your yatra. Do not skip it for an early night.'],
          ['Travelling in July–August as a first timer','Monsoon landslide risk is real. First timers should choose May–June or September–October.'],
          ['Booking through an agent without checking the actual operator','Ask: "Who owns the vehicles? Who employs the driver? What hotel is booked?" If they cannot answer, they are aggregators adding cost to your package.'],
        ].map(([mistake, fix],i)=>(
          <div key={mistake} style={{ display:'flex', gap:12, padding:'12px 0', borderBottom:'1px solid var(--border)', fontSize:14.5 }}>
            <span style={{ background:'#DC2626', color:'#fff', minWidth:26, height:26, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12.5, fontWeight:700, flexShrink:0, marginTop:1 }}>{i+1}</span>
            <div>
              <div style={{ fontWeight:700, color:'#DC2626', marginBottom:3 }}>❌ {mistake}</div>
              <div style={{ color:'var(--text-mid)', lineHeight:1.7 }}>✅ {fix}</div>
            </div>
          </div>
        ))}

        <h2 style={H2}>How to Choose the Right Char Dham Operator</h2>
        <p>This is the most important decision. A good operator makes the yatra smooth and meaningful. A bad one makes it stressful and expensive. Ask these five questions before booking:</p>
        {['Do you own the vehicles or hire them?','Can I speak to your driver before departure?','Which specific hotels are booked — can I see the names?','What is your cancellation and refund policy in writing?','Are you a registered Uttarakhand Tourism operator?'].map((q,i)=>(
          <div key={q} style={{ display:'flex', gap:10, padding:'10px 0', borderBottom:'1px solid var(--border)', fontSize:14.5, color:'var(--text-mid)' }}>
            <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>{i+1}.</span> {q}
          </div>
        ))}
        <p style={{ marginTop:16 }}>Shiv Ganga Travels has been answering all five questions since 2010. We own our fleet of 20+ AC vehicles, employ our drivers directly, pre-block hotels by name from January, and are registered with Uttarakhand Tourism. See our cancellation policy →</p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Ready for Your First Char Dham Yatra?</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>Free custom itinerary · Zero commission · Direct operator since 2010</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am planning my first Char Dham Yatra 2026. Please share packages and advice.')}`}
              target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp — Free Advice
            </a>
            <a href='tel:+917017082807' style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides for First Timers</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Yatra Cost 2026','/blog/char-dham-yatra-cost'],['Packing List','/blog/char-dham-yatra-packing-list'],['Registration Guide','/blog/char-dham-yatra-registration'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Senior Citizen Guide','/blog/senior-citizen-char-dham'],['FAQ — 50 Questions','/blog/char-dham-yatra-faq']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
