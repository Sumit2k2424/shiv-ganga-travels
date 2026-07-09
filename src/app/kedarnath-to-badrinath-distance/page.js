import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: 'Kedarnath to Badrinath Distance — Route, Time & Taxi Fare',
  description: 'Kedarnath to Badrinath is 218 km by road (via Guptkashi–Chopta–Joshimath), 8–10 hours by taxi. Route breakdown, halts, fares and the one shortcut most pilgrims miss.',
  keywords: ['kedarnath to badrinath distance','badrinath to kedarnath distance','kedarnath to badrinath','badrinath to kedarnath','kedarnath to badrinath taxi','kedarnath to badrinath route'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-to-badrinath-distance` },
};

const PAA = [
  { q:'What is the distance between Kedarnath and Badrinath?', a:'By road it is about 218 km from Gaurikund (the Kedarnath roadhead) to Badrinath, taking 8–10 hours. Add the 16 km trek down from Kedarnath temple to Gaurikund first. Aerially the two temples are only 41 km apart, which is why helicopter transfers take minutes.' },
  { q:'Can I travel from Kedarnath to Badrinath in one day?', a:'Only if you start the trek down from Kedarnath by 5–6 AM. Most pilgrims reach Gaurikund by 10–11 AM and then drive as far as Joshimath or Pipalkoti by evening, doing Badrinath darshan the next morning. Night driving is banned on these routes between 10 PM and 4 AM, so a single-day push is tight.' },
  { q:'Which route goes from Kedarnath to Badrinath?', a:'Gaurikund → Guptkashi → Ukhimath → Chopta → Gopeshwar → Chamoli → Pipalkoti → Joshimath → Badrinath. The Chopta stretch is the highlight — meadows at 2,700 m with Chaukhamba views, and the Tungnath trailhead right on the road.' },
  { q:'Is there a helicopter from Kedarnath to Badrinath?', a:'There is no scheduled shuttle between the two shrines. Charter services connect them during peak season at charter pricing. Most pilgrims fly Kedarnath→Phata/Sersi, then drive to Badrinath the same day.' },
  { q:'What is the taxi fare from Kedarnath (Gaurikund/Sonprayag) to Badrinath?', a:'A dedicated sedan runs roughly ₹7,500–9,000 and an Innova ₹10,000–12,500 for the Sonprayag–Badrinath leg. In a multi-day Char Dham package the leg is already included, which usually works out cheaper than hiring point-to-point.' },
  { q:'Where should I halt between Kedarnath and Badrinath?', a:'Chopta if you want mountain scenery and the Tungnath trek, Pipalkoti or Joshimath if you want to be positioned for early Badrinath darshan. Our drivers usually recommend Pipalkoti — lower altitude, better sleep, and only 75 km from Badrinath.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'Article',
    headline:'Kedarnath to Badrinath Distance — Route, Time & Taxi Fare',
    author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl },
    publisher:{ '@id':`${SITE.baseUrl}/#organization` },
    image:[`${SITE.baseUrl}/opengraph-image`],
    datePublished:'2026-07-09', dateModified: SITE.lastUpdatedISO,
    mainEntityOfPage:`${SITE.baseUrl}/kedarnath-to-badrinath-distance`,
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function KedarnathToBadrinath() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🚗 218 km · 8–10 hrs</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Kedarnath to Badrinath Distance & Route</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Via Guptkashi · Chopta · Joshimath — updated {SITE.lastUpdated}</p>
      </div>
    </section>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <AnswerBox>
        Kedarnath to Badrinath is <strong>218 km by road</strong> from Gaurikund, the Kedarnath roadhead
        — an <strong>8–10 hour drive</strong> via Guptkashi, Ukhimath, Chopta, Gopeshwar, Chamoli and
        Joshimath. Add the 16 km trek down from the temple to Gaurikund first. Aerially the shrines are
        just 41 km apart. Most pilgrims split the journey with a night halt at Chopta or Pipalkoti.
      </AnswerBox>

      <h2 style={h2}>Distance at a Glance</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        {[
          ['Kedarnath Temple → Gaurikund','16 km trek','5–7 hrs down (walk / pony / palki)'],
          ['Gaurikund → Guptkashi','31 km','1–1.5 hrs'],
          ['Guptkashi → Ukhimath → Chopta','41 km','1.5–2 hrs'],
          ['Chopta → Gopeshwar → Chamoli','62 km','2–2.5 hrs'],
          ['Chamoli → Pipalkoti → Joshimath','40 km','1.5 hrs'],
          ['Joshimath → Badrinath','44 km','1.5–2 hrs (gated one-way sections)'],
          ['Total road distance','218 km','8–10 hrs driving'],
        ].map(([leg,dist,time],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr clamp(70px,20%,110px) clamp(110px,32%,200px)', borderTop: i>0?'1px solid var(--border)':'none', padding:'10px 16px', background: i===6?'var(--navy-light)':(i%2===0?'#fff':'var(--bg)') }}>
            <div style={{ fontWeight: i===6?800:600, fontSize:13, color:'var(--navy)' }}>{leg}</div>
            <div style={{ fontSize:13, fontWeight:700, color:'var(--text)' }}>{dist}</div>
            <div style={{ fontSize:12.5, color:'var(--text-mid)' }}>{time}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>Why the Road Takes a Full Day for 41 Aerial Kilometres</h2>
      <p style={p}>Look at a map and the two temples sit almost side by side — 41 km apart as the crow flies. But the Kedarnath and Badrinath valleys are separated by a wall of 5,000-metre ridges with no motorable pass, so the road drops all the way down the Mandakini valley, crosses over the Chopta ridge, and climbs back up the Alaknanda valley. That detour is what turns 41 km into 218.</p>
      <p style={p}>The upside is that the detour happens to be one of the prettiest drives in Uttarakhand. The Chopta stretch runs through deodar forest and open meadows at 2,700 m, with Chaukhamba filling the windscreen on clear mornings. Our drivers time the Chopta crossing for daylight whenever the schedule allows — guests who sleep through it on an overnight-style push always regret it.</p>

      <h2 style={h2}>One-Day vs Two-Day Plan</h2>
      <p style={p}>A one-day Kedarnath-to-Badrinath transfer is possible on paper but rarely pleasant. You would need to leave the temple by 5 AM, reach Gaurikund by 10, and then sit in a car for nine hours after a 16 km downhill trek — with the 10 PM night-driving ban as a hard deadline. Knees and patience both suffer.</p>
      <p style={p}>The plan that works, and the one we build into our packages: trek down in the morning, drive as far as <strong>Pipalkoti</strong> (about 6 hours from Gaurikund), sleep at a comfortable 1,260 m, and do the final 75 km to Badrinath early next morning — arriving in time for darshan before the day crowd. Pilgrims who want the Tungnath trek halt at <strong>Chopta</strong> instead.</p>

      <h2 style={h2}>Taxi Fare for This Leg</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:16 }}>
        {[
          ['Vehicle','Seats','Sonprayag → Badrinath (approx.)'],
          ['Swift Dzire (sedan)','4','₹7,500–9,000'],
          ['Ertiga','6','₹8,500–10,500'],
          ['Innova Crysta','6','₹10,000–12,500'],
          ['Tempo Traveller','12','₹14,000–17,000'],
        ].map((row,i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 60px 1.2fr', borderTop:i>0?'1px solid var(--border)':'none', padding:'10px 16px', background:i===0?'var(--navy)':(i%2?'var(--bg)':'#fff') }}>
            {row.map((c,j)=><div key={j} style={{ fontSize:13, fontWeight:i===0?700:(j===0?600:500), color:i===0?'#fff':'var(--text-mid)' }}>{c}</div>)}
          </div>
        ))}
      </div>
      <p style={{ ...p, fontSize:13.5, color:'var(--text-muted)' }}>Fares are indicative for a dedicated one-way transfer with a night halt, verified {SITE.lastUpdated}. If you are doing the full Char Dham circuit, this leg is already inside our <Link href="/char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>package pricing</Link> — booking it separately almost always costs more.</p>

      <h2 style={h2}>What You Pass on the Way</h2>
      <p style={p}><strong>Ukhimath</strong> is where the Kedarnath deity spends the winter — the Omkareshwar temple here is worth twenty minutes even mid-journey. <strong>Chopta</strong> is the trailhead for Tungnath, the highest Shiva temple in the world, a 3.5 km walk off the road. And from <strong>Chamoli</strong> onward you are driving beside the Alaknanda through the prayag country — Nandprayag and then the gorge road to Joshimath. Pilgrims doing this drive are, without planning it, seeing more of Garhwal than most tourists ever do.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Do Dham Package (Kedar+Badri)',h:'/do-dham-yatra'},{l:'Guptkashi Guide',h:'/guptkashi-guide'},{l:'Gaurikund Guide',h:'/gaurikund-guide'},{l:'Chopta Tungnath',h:'/chopta-tungnath'},{l:'Char Dham Route Map',h:'/char-dham-yatra-route-map'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Kedarnath + Badrinath Do Dham Package</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>This transfer, hotels and darshan planning included · Direct Haridwar operator</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need details for the Kedarnath + Badrinath Do Dham package / transfer.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <div style={{ marginTop:36 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
