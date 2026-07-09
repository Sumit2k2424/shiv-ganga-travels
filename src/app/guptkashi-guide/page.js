import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: 'Guptkashi — Kedarnath Night Halt: Temples, Hotels & Helipad',
  description: 'Guptkashi (1,319 m) is the main night halt on the Kedarnath route — 31 km from Sonprayag. Vishwanath temple, Ardhnarishwar shrine, Manikarnika Kund, helicopter base, hotels and why every Kedarnath itinerary passes through it.',
  keywords: ['guptkashi','guptkashi uttarakhand','guptkashi to kedarnath','guptkashi temple','guptkashi to kedarnath distance','guptkashi helipad'],
  alternates: { canonical: `${SITE.baseUrl}/guptkashi-guide` },
};

const PAA = [
  { q:'Why is Guptkashi famous?', a:'Guptkashi ("hidden Kashi") is where Lord Shiva is said to have hidden from the Pandavas before appearing at Kedarnath as a bull. Its Vishwanath temple mirrors the Kashi Vishwanath of Varanasi, and the Manikarnika Kund here joins streams named for the Ganga and Yamuna. Today it is also the main night halt and helicopter base for the Kedarnath yatra.' },
  { q:'What is the distance from Guptkashi to Kedarnath?', a:'Guptkashi to Sonprayag is 31 km by road (about 1.5 hours), then 5 km by shuttle to Gaurikund and a 16 km trek to the temple. By helicopter from the Guptkashi helipad it is roughly 15 minutes of flying.' },
  { q:'Is Guptkashi a good night halt for the Kedarnath yatra?', a:'It is the standard one. At 1,319 m it is low enough for comfortable sleep, has the widest choice of hotels on the route, and puts you 1.5 hours from the Sonprayag shuttle. Most organized packages, including ours, use Guptkashi or nearby Sitapur/Phata for the pre-trek night.' },
  { q:'Which temples should I visit in Guptkashi?', a:'The Vishwanath temple (a form of Kashi Vishwanath) and the adjacent Ardhnarishwar temple, showing Shiva and Parvati as one half-male half-female deity. In winter the utsava murti of Kedarnath rests at Ukhimath across the valley, and Guptkashi joins the winter worship circuit.' },
  { q:'Does the Kedarnath helicopter fly from Guptkashi?', a:'Yes — Guptkashi is one of the three helicopter bases along with Phata and Sersi. The Guptkashi–Kedarnath round trip is the longest and costs about ₹12,700 return, booked only on the official IRCTC HeliYatra portal.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'TouristAttraction',
    '@id':`${SITE.baseUrl}/guptkashi-guide#attraction`,
    name:'Guptkashi', url:`${SITE.baseUrl}/guptkashi-guide`,
    description:'Guptkashi (1,319 m) in Rudraprayag district, Uttarakhand — temple town on the Kedarnath route with the Vishwanath and Ardhnarishwar temples, Manikarnika Kund, and a Kedarnath helicopter base.',
    geo:{ '@type':'GeoCoordinates', latitude:'30.5220', longitude:'79.0790' },
    touristType:'Pilgrim',
    sameAs:['https://en.wikipedia.org/wiki/Guptakashi'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Rudraprayag, Uttarakhand, India' },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function GuptkashiGuide() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🛕 1,319 m · The hidden Kashi</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Guptkashi — The Kedarnath Route's Sacred Night Halt</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Temples · hotels · helipad · distances — updated {SITE.lastUpdated}</p>
      </div>
    </section>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <AnswerBox>
        Guptkashi is a temple town at <strong>1,319 m</strong> in Rudraprayag district, <strong>31 km
        before Sonprayag</strong> on the Kedarnath road. It holds the Vishwanath and Ardhnarishwar
        temples and the Manikarnika Kund, serves as the yatra's main night halt, and hosts one of the
        three Kedarnath helicopter bases. Nearly every Kedarnath itinerary sleeps here or nearby.
      </AnswerBox>

      <h2 style={h2}>Why "Hidden Kashi"</h2>
      <p style={p}>The name records one of the central legends of the Kedarnath story. After the Kurukshetra war, the Pandavas came to the Himalaya seeking Lord Shiva's forgiveness. Shiva, unwilling to absolve them easily, concealed himself — gupt — at this spot before taking the form of a bull and diving into the ground at Kedarnath. The town's Vishwanath temple is held to carry the same sanctity as Kashi Vishwanath in Varanasi, and tradition says a darshan here carries a portion of a Kashi pilgrimage's merit. For pilgrims heading up to Kedarnath, stopping at the place where Shiva hid before finding him where he appeared makes narrative and spiritual sense — most don't realize their night halt is itself a tirtha.</p>

      <h2 style={h2}>The Temples and the Kund</h2>
      <p style={p}>The <strong>Vishwanath temple</strong> stands in the old bazaar, a stone shikhara shrine of genuine antiquity. Beside it, the <strong>Ardhnarishwar temple</strong> enshrines Shiva and Parvati fused as one deity — half male, half female — a form you will rarely find as the principal murti anywhere else on the Char Dham circuit. In the temple courtyard is <strong>Manikarnika Kund</strong>, where two spouts, said to carry the Ganga and the Yamuna, pour into a single tank. Twenty minutes covers all three, and early morning — before the vehicle convoys leave for Sonprayag — is when the courtyard is at its best.</p>

      <h2 style={h2}>Guptkashi as Your Night Halt</h2>
      <p style={p}>Practical reasons make Guptkashi the standard overnight stop. At 1,319 m the nights are mild — you sleep properly before a trek day, which matters more than pilgrims expect. The hotel spread is the widest anywhere on the Kedarnath road, from dharamshalas to genuinely comfortable properties with valley views toward Chaukhamba. And the arithmetic works: leave Guptkashi at 3:30–4 AM, reach the Sonprayag shuttle line by 5:30, and you are on the trail by first light. Our own packages use Guptkashi, Sitapur or Phata depending on the batch — details in the <Link href="/kedarnath-hotels" style={{ color:'var(--teal)', fontWeight:600 }}>Kedarnath hotels guide</Link>.</p>

      <h2 style={h2}>Distances from Guptkashi</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        {[
          ['Sonprayag (vehicle limit)','31 km','~1.5 hrs'],
          ['Gaurikund (trek start)','36 km','shuttle after Sonprayag'],
          ['Kedarnath temple','52 km','road + 16 km trek'],
          ['Kedarnath by helicopter','—','~15 min flight'],
          ['Ukhimath (winter seat)','13 km','~40 min'],
          ['Haridwar','204 km','7–8 hrs'],
        ].map(([to,dist,time],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr clamp(70px,22%,120px) clamp(110px,30%,180px)', borderTop:i>0?'1px solid var(--border)':'none', padding:'10px 16px', background:i%2===0?'#fff':'var(--bg)' }}>
            <div style={{ fontWeight:600, fontSize:13, color:'var(--navy)' }}>{to}</div>
            <div style={{ fontSize:13, fontWeight:700, color:'var(--text)' }}>{dist}</div>
            <div style={{ fontSize:12.5, color:'var(--text-mid)' }}>{time}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>The Helicopter Base</h2>
      <p style={p}>Guptkashi hosts one of the three official Kedarnath helipads (the others are Phata and Sersi, further up the valley). Being furthest from the shrine, the Guptkashi sector has the longest flight and the highest fare — about ₹12,700 round trip on the official IRCTC HeliYatra portal, against roughly ₹10,200 from Phata and ₹6,400 from Sersi. Slots open in batches and vanish quickly; monsoon-season flights get suspended whenever visibility drops. Booking steps, fare table and weather caveats are in our <Link href="/blog/kedarnath-helicopter-booking" style={{ color:'var(--teal)', fontWeight:600 }}>helicopter booking guide</Link>.</p>

      <h2 style={h2}>Ukhimath, Across the Valley</h2>
      <p style={p}>Thirteen kilometres from Guptkashi is Ukhimath, where the Kedarnath deity is carried each November to spend the winter at the Omkareshwar temple. If your itinerary has a spare hour — often it does, on the drive between Kedarnath and Badrinath — the detour is worth it: the temple courtyard looks straight across the valley to the peaks you have just come from. Winter pilgrims who cannot make the summer trek do their Kedarnath darshan here.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Gaurikund Guide',h:'/gaurikund-guide'},{l:'Kedarnath Hotels',h:'/kedarnath-hotels'},{l:'Helicopter Booking',h:'/blog/kedarnath-helicopter-booking'},{l:'Kedarnath to Badrinath',h:'/kedarnath-to-badrinath-distance'},{l:'Kedarnath Package',h:'/kedarnath-yatra'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Kedarnath Package with Guptkashi Night Halt</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Hotels booked · shuttle timed · 15+ seasons on this road</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want a Kedarnath package with Guptkashi night halt details.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <div style={{ marginTop:36 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
