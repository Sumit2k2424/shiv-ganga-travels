import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: 'Gaurikund — Kedarnath Trek Base: How to Reach, Stay & Tips',
  description: 'Gaurikund (1,982 m) is where the 16 km Kedarnath trek begins. How to reach from Haridwar and Sonprayag, the shuttle system, Gauri Kund temple, hot spring status, stay options and pony/palki rates.',
  keywords: ['gaurikund','gauri kund','gaurikund to kedarnath','gaurikund temple','gaurikund uttarakhand','sonprayag to gaurikund'],
  alternates: { canonical: `${SITE.baseUrl}/gaurikund-guide` },
};

const PAA = [
  { q:'What is Gaurikund famous for?', a:'Gaurikund is the roadhead of the Kedarnath yatra — the 16 km trek to the temple starts here. It is named after Goddess Gauri (Parvati), who according to legend performed penance here to win Lord Shiva. The village has the ancient Gauri Devi temple and was known for its natural hot spring.' },
  { q:'How do I reach Gaurikund from Haridwar?', a:'Drive 235 km to Sonprayag (8–9 hours via Rishikesh, Devprayag, Srinagar and Guptkashi). Private vehicles stop at Sonprayag; from there local shuttle jeeps cover the final 5 km to Gaurikund for about ₹50 per person.' },
  { q:'Can I take my own car to Gaurikund?', a:'No. All private and tourist vehicles park at Sonprayag. Only registered local shuttles run the narrow 5 km Sonprayag–Gaurikund stretch. During peak season the shuttle queue starts before 4 AM.' },
  { q:'What is the distance from Gaurikund to Kedarnath?', a:'16 km on the rebuilt post-2013 trail via Jungle Chatti, Bheembali, Lincholi and Kedarnath base camp. On foot it takes 6–9 hours up; ponies, palkis, kandis and porters are available at the trailhead at BKTC-fixed rates.' },
  { q:'Is the Gaurikund hot spring open?', a:'The original hot water kund was largely destroyed in the 2013 floods. A smaller rebuilt bathing point operates with a much reduced flow. Pilgrims still take a symbolic dip or sprinkle before starting the trek, but do not plan the old full bathing experience.' },
  { q:'Should I stay at Gaurikund or Sonprayag before the trek?', a:'If you want the earliest possible trek start, sleep at Gaurikund — basic lodges near the trail gate. For better rooms and food, stay at Sonprayag or Sitapur and take the first shuttle up. Our packages use Sitapur/Sonprayag hotels and time the shuttle for a pre-dawn start.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'TouristAttraction',
    '@id':`${SITE.baseUrl}/gaurikund-guide#attraction`,
    name:'Gaurikund', url:`${SITE.baseUrl}/gaurikund-guide`,
    description:'Gaurikund (1,982 m) in Rudraprayag district, Uttarakhand — the roadhead and starting point of the 16 km Kedarnath trek, with the ancient Gauri Devi temple.',
    geo:{ '@type':'GeoCoordinates', latitude:'30.6549', longitude:'79.0166' },
    touristType:'Pilgrim',
    sameAs:['https://en.wikipedia.org/wiki/Gaurikund'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Rudraprayag, Uttarakhand, India' },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function GaurikundGuide() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🥾 1,982 m · Kedarnath trek base</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Gaurikund — Where the Kedarnath Yatra Begins</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>How to reach · shuttle system · temple & hot spring · stay options — updated {SITE.lastUpdated}</p>
      </div>
    </section>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <AnswerBox>
        Gaurikund is a small village at <strong>1,982 m</strong> in Rudraprayag district where the
        <strong> 16 km Kedarnath trek starts</strong>. Private vehicles stop 5 km earlier at Sonprayag;
        local shuttles cover the last stretch. The village holds the ancient Gauri Devi temple, and its
        famous hot spring survives in reduced form after the 2013 floods.
      </AnswerBox>

      <h2 style={h2}>Quick Facts</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10, marginBottom:28 }}>
        {[{icon:'🏔️',label:'Altitude',val:'1,982 m'},{icon:'🥾',label:'Trek to Kedarnath',val:'16 km'},{icon:'🚙',label:'From Sonprayag',val:'5 km shuttle'},{icon:'🛕',label:'Temple',val:'Gauri Devi'},{icon:'🕐',label:'Trek gate opens',val:'~4 AM'},{icon:'📍',label:'District',val:'Rudraprayag'}].map(s=>(
          <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
            <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
            <div style={{ fontSize:10.5, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>How to Reach Gaurikund</h2>
      <p style={p}>From Haridwar it is 235 km to Sonprayag — figure 8–9 hours via Rishikesh, Devprayag, Srinagar, Rudraprayag and Guptkashi. Every private car, taxi and bus stops at the Sonprayag parking; the final 5 km to Gaurikund runs on a narrow cliff road that only registered local jeeps are allowed to ply. The shuttle costs around ₹50 per seat and takes fifteen minutes, but in May–June the queue for it can take an hour or more — which is why serious pilgrims are standing in line at 3:30 AM.</p>
      <p style={p}>By rail, the nearest stations are Rishikesh and Haridwar; by air, Jolly Grant (Dehradun). There is no way to shortcut the road journey except by helicopter to the Kedarnath-side helipads at Phata, Sersi or Guptkashi. Full route details are in our <Link href="/blog/haridwar-to-kedarnath" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar to Kedarnath guide</Link>.</p>

      <h2 style={h2}>The Legend of Gauri Kund</h2>
      <p style={p}>The name comes from Goddess Gauri — Parvati — who is said to have meditated and performed penance at this spot to win Lord Shiva as her husband. Local tradition also places the story of Ganesha receiving his elephant head here: Parvati created the boy Ganesha to guard her bathing place, Shiva beheaded the unknown guard in anger, and then restored him with the head of an elephant. The small Gauri Devi temple in the village marks the site, and many pilgrims offer a short prayer here before starting the climb — asking the mother for permission, as locals put it, before walking to the father.</p>

      <h2 style={h2}>The Hot Spring — What Remains</h2>
      <p style={p}>Gaurikund was famous for its tapt kund, a natural hot spring where pilgrims bathed before beginning the trek. The 2013 Kedarnath floods destroyed most of the original bathing complex, and the spring's flow has never fully recovered. A smaller rebuilt bathing point functions today with warm rather than hot water. Most pilgrims now take a symbolic sprinkle or quick dip. If a proper hot-spring bath matters to you, plan for Badrinath's Tapt Kund later in the circuit — that one thunders on as it always has.</p>

      <h2 style={h2}>Gaurikund to Kedarnath — the Trek in Brief</h2>
      <p style={p}>The rebuilt trail runs 16 km via Jungle Chatti (4 km), Bheembali (7 km), Lincholi (11 km) and Kedarnath base camp (15 km), climbing from 1,982 m to 3,583 m. On foot it takes 6–9 hours up and 5–7 down. Ponies, palkis and kandis operate from the trailhead at BKTC-fixed rates — our <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color:'var(--teal)', fontWeight:600 }}>current rate table is here</Link>, and the full trail description with preparation advice is in the <Link href="/blog/kedarnath-trek-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Kedarnath trek guide</Link>.</p>

      <h2 style={h2}>Staying: Gaurikund vs Sonprayag vs Sitapur</h2>
      <p style={p}>Gaurikund itself has basic lodges and dharamshalas within walking distance of the trek gate — the advantage is a pre-dawn start without depending on the shuttle. Sonprayag and Sitapur, 5–7 km back down the road, have the better hotels and food, which is where we put our package guests; the trade-off is joining the shuttle queue early. In peak season, room pressure at all three is intense — hotels sell out 45–60 days ahead. Whatever you do, don't arrive in May without a confirmed booking.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Kedarnath Trek Guide',h:'/blog/kedarnath-trek-guide'},{l:'Pony/Palki Rates 2026',h:'/kedarnath-pony-palki-kandi-rates'},{l:'Kedarnath Temple',h:'/kedarnath-temple'},{l:'Haridwar to Kedarnath',h:'/blog/haridwar-to-kedarnath'},{l:'Guptkashi Guide',h:'/guptkashi-guide'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Kedarnath Package with Sonprayag Hotel & Shuttle Timing Handled</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>15+ seasons on this route · Direct Haridwar operator</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want details for a Kedarnath package with hotel near Gaurikund/Sonprayag.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <div style={{ marginTop:36 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
