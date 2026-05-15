import Link from 'next/link';
import { PACKAGES, SITE } from '@/data/packages';

export const metadata = {
  title: '2 Dham Yatra 2026 — Kedarnath & Badrinath',
  description: 'Do Dham Yatra 2026 — Kedarnath + Badrinath from Haridwar. 5N/6D from ₹10,999/person. Who should choose 2 dham vs Char Dham, what each costs.',
  keywords: ['do dham yatra','2 dham yatra','2 dham yatra package','kedarnath badrinath package','do dham yatra 2026','kedarnath and badrinath tour package','2 dham yatra from haridwar','do dham yatra package from haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/do-dham-yatra` },
  openGraph: {
    title: '2 Dham Yatra 2026 — Kedarnath & Badrinath from ₹10,999 | Do Dham',
    description: 'Do Dham Yatra (Kedarnath + Badrinath) 2026 from Haridwar. 5N/6D from ₹10,999. Includes 16km Kedarnath trek, VIP darshan, hotels, meals. Zero commission.',
    url: `${SITE.baseUrl}/do-dham-yatra`, type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Do Dham Yatra 2026 — Kedarnath & Badrinath Package from Haridwar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Do Dham Yatra 2026 — Kedarnath & Badrinath from ₹10,999',
    description: 'Kedarnath + Badrinath from Haridwar. 5N/6D from ₹10,999. VIP darshan, AC vehicle. Zero commission.',
    images: [{ url: '/opengraph-image', alt: 'Do Dham Yatra 2026 — Kedarnath & Badrinath Package' }],
  },
};

function Schema() {
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:'What is Do Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Do Dham Yatra (also called 2 Dham Yatra) covers two of the four Char Dhams — Kedarnath (Lord Shiva, 3,583m) and Badrinath (Lord Vishnu, 3,133m). Both are in Uttarakhand. The circuit takes 5 nights and 6 days from Haridwar, covers approximately 800km of driving, and includes the 16km Kedarnath trek. It is the most popular partial Char Dham option for pilgrims with limited time or who have done Yamunotri and Gangotri previously.' } },
      { '@type':'Question', name:'Should I do Do Dham or Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'If you have 10–11 days available, do Char Dham (all 4 dhams). If you have 6–7 days, or if you have already visited Yamunotri and Gangotri, Do Dham (Kedarnath + Badrinath) is ideal. Kedarnath and Badrinath are considered the two most spiritually significant dhams — Kedarnath for Shaiva devotees and Badrinath for Vaishnavas. Neither is "lesser" — both are Jyotirlinga/Vishnu kshetra of the highest order.' } },
      { '@type':'Question', name:'What is the Do Dham Yatra package cost from Haridwar?', acceptedAnswer:{ '@type':'Answer', text:'Do Dham Yatra (Kedarnath + Badrinath) from Haridwar starts at ₹10,999 per person for a 5N/6D all-inclusive package with Shiv Ganga Travels. This includes AC vehicle, hotels, breakfast and dinner, VIP darshan at both dhams, experienced guide, and registration. The Kedarnath pony (₹3,500–4,500 one way) is optional extra. Zero commission.' } },
      { '@type':'Question', name:'Is the Kedarnath trek mandatory in the Do Dham package?', acceptedAnswer:{ '@type':'Answer', text:'The 16km trek from Gaurikund to Kedarnath is the only way to reach the temple by road access (Gaurikund is the roadhead). You can do this trek on foot (5–7 hrs), by pony (₹3,500–4,500 one way), palki/doli (₹8,000–12,000 round trip), or by helicopter from Phata/Sersi helipad (₹7,500–9,500 round trip). The trek itself is not mandatory — alternatives exist for seniors and those with health concerns.' } },
    ],
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl },
      { '@type':'ListItem',position:2,name:'Char Dham Yatra',item:`${SITE.baseUrl}/char-dham-yatra` },
      { '@type':'ListItem',position:3,name:'2 Dham Yatra — Kedarnath & Badrinath',item:`${SITE.baseUrl}/do-dham-yatra` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

export default function DoDhamYatra() {
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Kedarnath · Badrinath · 5N/6D
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Do Dham Yatra 2026 — Kedarnath & Badrinath
          </h1>
          <p style={{ color:'rgba(255,255,255,0.85)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            2 Dham Yatra from Haridwar · <strong style={{ color:'#FFD166' }}>₹10,999/person</strong> · 5N/6D · Kedarnath 16km trek · Badrinath darshan · Zero commission
          </p>
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap', marginBottom:22 }}>
            {['🏔️ Kedarnath 3,583m','🕌 Badrinath 3,133m','🎖️ 15 yrs · 50k pilgrims','⭐ 4.9/5 · 850+ reviews'].map(t=>(
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Do Dham Yatra 2026 — Kedarnath + Badrinath. Please share details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book Now</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'13px 24px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Do Dham — Kedarnath & Badrinath</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Duration','5N/6D'],['Kedarnath','3,583m'],['Badrinath','3,133m'],['Trek','16km Kedarnath'],['Package from','₹10,999/person'],['Season','Apr 22 – Nov 2026']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        {/* Intent-first answer */}
        <p style={p}>
          <strong>Do Dham Yatra covers Kedarnath and Badrinath</strong> — the two highest and most sacred dhams on the circuit. The 5N/6D package from Haridwar is ₹10,999/person all-inclusive. You get the 16km Kedarnath trek, a night at the temple at 3,583m, early morning Mahabhishek darshan, and then Badrinath with Mana Village and Tapt Kund. This is the package most of our repeat pilgrims choose — those who have done Char Dham and want to go back to the two that moved them most.
        </p>

        {/* Do Dham vs Char Dham — the decision most searchers are making */}
        <h2 style={h2}>Do Dham or Char Dham? — Honest Comparison</h2>
        <p style={p}>Most people searching for "2 dham yatra" or "do dham yatra" are deciding between two options. Here is the honest answer from 15 years of sending pilgrims to the mountains:</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:12, marginBottom:28 }}>
          {[
            {
              title:'Do Dham — Choose this if:',
              color:'#1D9E75',
              bg:'rgba(29,158,117,0.06)',
              points:[
                'You have only 6–8 days available',
                'You have already visited Yamunotri and Gangotri',
                'You are primarily a Shiva or Vishnu devotee (Kedarnath + Badrinath)',
                'Your group has seniors who cannot do 2 treks in one trip',
                'You want the raw Himalayan experience without the extra 4 days',
                'Budget is tight and ₹10,999 fits better than ₹19,500',
              ],
            },
            {
              title:'Char Dham — Choose this if:',
              color:'var(--navy)',
              bg:'rgba(11,35,75,0.05)',
              points:[
                'You have 10–12 days — the complete circuit takes that long properly',
                'This is your first time doing the Himalayan pilgrimage',
                'You want the full spiritual scope — all 4 dhams in one trip',
                'Your family is fit for 2 treks (Kedarnath 16km, Yamunotri 6km)',
                'You may not get another chance for several years',
                'You want to say "I did Char Dham" — not just half of it',
              ],
            },
          ].map(card=>(
            <div key={card.title} style={{ background:card.bg, borderRadius:12, padding:'16px', border:`1px solid ${card.color}`, borderTop:`3px solid ${card.color}` }}>
              <div style={{ fontWeight:700, fontSize:14, color:card.color, marginBottom:12 }}>{card.title}</div>
              {card.points.map(pt=>(
                <div key={pt} style={{ display:'flex', gap:8, fontSize:13.5, color:'#334155', padding:'5px 0', borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ color:card.color, fontWeight:700, flexShrink:0 }}>→</span>{pt}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p style={{ fontSize:13.5, color:'#64748b', fontStyle:'italic', marginBottom:24 }}>
          Our honest take: if you are physically fit and have 10 days, do Char Dham. But Do Dham done properly — overnight at Kedarnath, dawn Mahabhishek darshan, Mana Village at sunrise — is a more complete spiritual experience than Char Dham rushed in 8 days.
        </p>

        {/* Itinerary */}
        <h2 style={h2}>Do Dham Yatra Itinerary — 5N/6D from Haridwar</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {[
            { day:'Day 1', route:'Haridwar → Guptkashi', km:'220km · 7–8 hrs', alt:'1,319m', desc:'Depart Haridwar early morning. Drive via Devprayag (Ganga confluence — worth a 20-min stop), Rudraprayag, Tilwara. Arrive Guptkashi by evening. Overnight. Optional: evening darshan at Ardh Narishwar Temple (Shiva-Parvati combined deity — uncommon in India).' },
            { day:'Day 2', route:'Guptkashi → Kedarnath', km:'30km drive + 16km trek', alt:'3,583m', desc:'Early start (3 AM). Drive to Sonprayag, local jeep to Gaurikund (₹40), ritual dip in Gaurikund hot spring (48°C), begin 16km trek. Stages: Jungle Chatti (4km), Bheembali (6.5km), Lincholi (9km), Base Camp (13km), Kedarnath (16km). Arrive by noon. Afternoon/evening darshan. Overnight at Kedarnath.' },
            { day:'Day 3', route:'Kedarnath darshan → Rudraprayag', km:'Trek 16km + 30km drive', alt:'—', desc:'Wake at 4 AM for the Mahabhishek puja (4:30 AM — milk, curd, honey on Shivling). This is the most sacred ritual at Kedarnath — you can touch the Shivling directly. Trek down after darshan. Drive to Rudraprayag. Overnight.' },
            { day:'Day 4', route:'Rudraprayag → Badrinath', km:'160km · 5–6 hrs', alt:'3,133m', desc:'Drive via Karnaprayag, Nandprayag, Vishnuprayag (all sacred river confluences), Joshimath (Narsingh Temple — highly recommended stop), and on to Badrinath. Check in. Tapt Kund ritual bath (45°C natural spring). Evening darshan at Badrinath temple and aarti at 7 PM.' },
            { day:'Day 5', route:'Badrinath darshan → Joshimath', km:'46km', alt:'1,890m', desc:'Early morning darshan at 6 AM (shorter queue than daytime). Visit Brahma Kapal (Pind Daan ancestral rites on the river bank — significant even if not performing). Mana Village: last Indian village (3km from Badrinath), Vyas Gufa (Mahabharata composed here), Bhim Pul natural rock bridge, Saraswati river source. Drive to Joshimath. Overnight.' },
            { day:'Day 6', route:'Joshimath → Haridwar', km:'280km · 7–8 hrs', alt:'249m', desc:'Return via Rudraprayag, Devprayag (second stop — worth seeing the confluence from the other bank this time). Arrive Haridwar by evening. End of Do Dham Yatra. Trip ends at Haridwar station/hotel.' },
          ].map((item,i)=>(
            <div key={item.day} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)', borderLeft:'4px solid var(--navy)' }}>
              <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:8, flexWrap:'wrap' }}>
                <span style={{ background:'var(--navy)', color:'#FFD166', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:20 }}>{item.day}</span>
                <strong style={{ fontSize:14, color:'var(--navy)' }}>{item.route}</strong>
                <span style={{ fontSize:12, color:'var(--text-muted)' }}>{item.km}</span>
                {item.alt !== '—' && <span style={{ fontSize:12, color:'#1D9E75', fontWeight:600 }}>↑ {item.alt}</span>}
              </div>
              <p style={{ fontSize:13.5, color:'#475569', lineHeight:1.75, margin:0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <h2 style={h2}>Do Dham Yatra Package Prices 2026</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Package','Duration','Price/person','Vehicle','Best for'].map(h=>(
                <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Do Dham Standard','5N/6D','₹10,999','Shared Tempo Traveller','Solo, groups'],
                ['Do Dham Private','5N/6D','₹14,999','Private Innova Crysta','Couples, small families'],
                ['Do Dham + Helicopter','5N/6D','₹22,999','Innova + Kedarnath heli','Seniors, premium'],
                ['Do Dham Senior Special','6N/7D','₹13,999','Private Innova, slow pace','60+ pilgrims'],
              ].map(([pkg,dur,price,vehicle,best],i)=>(
                <tr key={pkg} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)' }}>{pkg}</td>
                  <td style={{ padding:'10px 12px', color:'#475569' }}>{dur}</td>
                  <td style={{ padding:'10px 12px', fontWeight:800, color:'#1D9E75', fontSize:15 }}>{price}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{vehicle}</td>
                  <td style={{ padding:'10px 12px', color:'#64748b', fontSize:13 }}>{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:24 }}>All prices include AC vehicle, hotel twin sharing, breakfast + dinner, VIP darshan, guide, toll, parking. Kedarnath pony/helicopter extra. 5% GST included. Zero commission.</p>

        {/* What makes it special */}
        <h2 style={h2}>Why Most Pilgrims Remember Do Dham Longer Than Char Dham</h2>
        <p style={p}>
          This is something we have heard from hundreds of our repeat pilgrims over 15 years, and it surprises people: many who have done Char Dham multiple times say the Do Dham they did with an overnight at Kedarnath was more powerful than any full circuit. Here is why.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {[
            { title:'Overnight at Kedarnath changes everything', desc:'The standard Char Dham itinerary visits Kedarnath in a day and descends. But those who stay overnight experience the temple after the tour buses leave — just a few hundred pilgrims, absolute silence, the Shivling glowing in candlelight at 9 PM with snow peaks visible through the doorway. The 4:30 AM Mahabhishek is only accessible if you are there the night before.' },
            { title:'The Kedarnath boulder — something to touch', desc:'Directly behind the main temple stands a large boulder that deflected the 2013 floodwaters that killed over 5,000 people in the valley. The temple was untouched. You can walk up and put your hand on this rock. It is not on the official darshan route — most pilgrims in the rush queue never see it. Staying overnight means you have time.' },
            { title:'Mana Village at sunrise — the India very few see', desc:'Badrinath at 7 AM before the tourist buses arrive, walking through Mana Village (the last Indian village before Tibet) while locals are milking yaks and opening chai shops — this is Himalayan India that does not exist in photographs. The Do Dham schedule, which stays overnight in Joshimath on Day 5, allows this. The Char Dham rush itinerary typically does not.' },
          ].map(item=>(
            <div key={item.title} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{item.title}</div>
              <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.75 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:8 }}>Book Do Dham Yatra 2026 — ₹10,999/person</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Free itinerary in 2 hours · Zero commission · Registration handled · 5N/6D all-inclusive</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Do Dham Yatra 2026 — Kedarnath + Badrinath. Please share details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related pages</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Yatra','/char-dham-yatra'],['Kedarnath Yatra','/kedarnath-yatra'],['Badrinath Yatra','/badrinath-yatra'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Pony vs Helicopter','/blog/kedarnath-pony-vs-helicopter'],['Cost Breakdown','/blog/char-dham-yatra-cost']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
