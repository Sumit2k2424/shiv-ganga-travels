import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: 'Yamunotri Temple 2026 — Timings, Trek, History & Guide',
  description: 'Yamunotri Temple guide 2026 — darshan timings, 6 km trek from Janki Chatti, Surya Kund hot spring, Divya Shila and April 19 opening. First of the 4 dhams.',
  keywords: ['yamunotri temple','yamunotri temple timings 2026','yamunotri dham','yamunotri trek','yamunotri opening date 2026','surya kund yamunotri','yamunotri temple history'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-temple` },
  openGraph: { title: 'Yamunotri Temple 2026 — Trek, Timings, History & Complete Guide', description: 'The first dham of Char Dham. 6km trek from Janki Chatti, Surya Kund hot spring, Divya Shila, history and 2026 opening dates.', url: `${SITE.baseUrl}/yamunotri-temple`, type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Yamunotri Temple 2026 — Trek, Timings & Complete Guide',
    description: 'The first dham of Char Dham. 6km trek, Surya Kund hot spring, history and 2026 opening dates for Yamunotri Dham.',
    images: [{ url: '/opengraph-image', alt: 'Yamunotri Temple 2026 — Char Dham Yatra | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const ld = { '@context':'https://schema.org','@type':'TouristAttraction', name:'Yamunotri Temple', description:'The source shrine of the river Yamuna, dedicated to Goddess Yamuna, at 3,291m in Uttarkashi district, Uttarakhand. The first of the four Char Dham shrines.', url:`${SITE.baseUrl}/yamunotri-temple`, address:{'@type':'PostalAddress',addressLocality:'Yamunotri',addressRegion:'Uttarakhand',addressCountry:'IN'}, geo:{'@type':'GeoCoordinates',latitude:'31.0136',longitude:'78.4624'}, openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],opens:'06:00',closes:'20:00'}], touristType:'Pilgrim', sameAs:['https://en.wikipedia.org/wiki/Yamunotri'], containedInPlace:{'@type':'AdministrativeArea',name:'Uttarakhand, India'}, isPartOf:{'@type':'TouristAttraction',name:'Chota Char Dham',sameAs:'https://en.wikipedia.org/wiki/Chota_Char_Dham'} };
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
    {'@type':'Question',name:'What are the darshan timings at Yamunotri Temple?',acceptedAnswer:{'@type':'Answer',text:'Yamunotri Temple opens around 6:00 AM and closes by about 8:00 PM, with a midday break in the afternoon. Because the 6km trek from Janki Chatti takes 3–4 hours up, most pilgrims aim to start early and reach the temple before noon.'}},
    {'@type':'Question',name:'When does Yamunotri Temple open in 2026?',acceptedAnswer:{'@type':'Answer',text:'Yamunotri Temple opens on April 19, 2026 (Akshaya Tritiya). It closes for winter on November 11, 2026 (Bhai Dooj), after which the idol of Goddess Yamuna is carried to Kharsali (Syana Chattra) village for winter worship.'}},
    {'@type':'Question',name:'How long is the Yamunotri trek?',acceptedAnswer:{'@type':'Answer',text:'The trek to Yamunotri is about 6km from Janki Chatti, the road-head. It takes most pilgrims 3–4 hours uphill. Pony, palki (palanquin) and pittu (porter) services are available for those who cannot walk the climb.'}},
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };

const PAA = [
  { q:'Where is Yamunotri Temple located?', a:'In Uttarkashi district of Uttarakhand, at 3,291m near the source of the Yamuna river. It is the westernmost of the four Char Dham shrines and traditionally the first one visited on the yatra, reached by a 6km trek from Janki Chatti.' },
  { q:'Why is Yamunotri the first dham?', a:'The traditional Char Dham circuit runs clockwise — Yamunotri, then Gangotri, then Kedarnath, then Badrinath. Starting in the west at Yamunotri and ending in the east at Badrinath follows the established parikrama order, which is why almost every itinerary begins here.' },
  { q:'What is Surya Kund at Yamunotri?', a:'Surya Kund is a natural hot spring beside the temple where the water is hot enough to cook food. Pilgrims tie rice and potatoes in a cloth and dip them in the spring — the cooked rice is then offered to the Goddess and taken home as prasad. It is one of the most distinctive rituals on the whole yatra.' },
  { q:'Can elderly pilgrims do the Yamunotri trek?', a:'Yes, with help. The 6km climb is steep in places, but pony, palki and porter services are available at Janki Chatti for those who cannot walk it. We arrange these in advance for senior pilgrims so there is no scramble at the road-head.' },
  { q:'What is Divya Shila?', a:'Divya Shila is a revered rock pillar near the temple that pilgrims worship before entering the shrine. It is customary to offer prayers at Divya Shila first, then bathe in or touch the hot spring water, and only then proceed to the darshan of Goddess Yamuna.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>);
}

export default function YamunotriTemple() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🛕 First Dham · 3,291m</span>
        <h1 className="display-title speakable-answer" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Yamunotri Temple — Complete Guide 2026</h1>
        <p className="speakable-answer" style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Opening: April 19, 2026 · Closing: November 11, 2026 · Altitude 3,291m · 6km trek from Janki Chatti</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Yamunotri Yatra<span>›</span>
        <span>Yamunotri Temple</span>
      </div>
    </nav>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10, marginBottom:28 }}>
        {[{icon:'📅',label:'Opens',val:'Apr 19, 2026'},{icon:'📅',label:'Closes',val:'Nov 11, 2026'},{icon:'🏔️',label:'Altitude',val:'3,291m'},{icon:'🚶',label:'Trek',val:'6km from Janki Chatti'},{icon:'⏰',label:'Darshan',val:'6 AM – 8 PM'},{icon:'🙏',label:'Deity',val:'Goddess Yamuna'}].map(s=>(
          <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
            <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
            <div style={{ fontSize:10.5, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>About Yamunotri Temple</h2>
      <AnswerBox>
        Yamunotri Temple is the source shrine of the river Yamuna, dedicated to Goddess Yamuna, at
        3,291m in Uttarkashi district, Uttarakhand. The first of the four Char Dham shrines, it opens
        on Akshaya Tritiya (late April/early May 2026) and is reached by a 6km trek from Janki Chatti.
      </AnswerBox>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Yamunotri is the source shrine of the <strong>Yamuna</strong>, the second-holiest river in Hinduism after the Ganga, and traditionally the first stop on the Char Dham circuit. The temple sits at 3,291 metres in a narrow valley below the Banderpoonch massif, with the Yamuna tumbling past in icy white. The deity is Goddess Yamuna, depicted in black stone. The shrine was built in the 19th century by Maharani Gularia of Jaipur, and has been rebuilt more than once after avalanches and weather damage — a reminder of how exposed this corner of the Himalaya is.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>What sets Yamunotri apart is the trek and the hot springs. Unlike Gangotri, you cannot drive to the temple — the last 6km from Janki Chatti must be covered on foot, by pony, or by palki. For many pilgrims this is the first real test of the yatra, which is exactly why it comes first: it sets the tone. By the time you reach the temple, steam rising from the hot springs against the cold mountain air, you have earned the darshan.</p>

      <h2 style={h2}>Darshan Timings 2026</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        {[['6:00 AM','Temple opens — morning aarti and darshan begin'],['6:30 AM – 12:00 PM','General darshan — best window, trek crowds arrive late morning'],['12:00 PM – 2:00 PM','Bhog offering and short midday break'],['2:00 PM – 7:00 PM','Afternoon darshan resumes'],['7:00 PM – 8:00 PM','Evening aarti, then temple closes'],].map(([time,desc],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'clamp(110px,38%,170px) 1fr', borderTop: i>0?'1px solid var(--border)':'none', padding:'11px 16px', background: i%2===0?'#fff':'var(--bg)' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{time}</div>
            <div style={{ fontSize:13, color:'var(--text-mid)' }}>{desc}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7, marginBottom:24, fontStyle:'italic' }}>Plan your climb so you reach the temple before the midday break. Starting the trek from Janki Chatti by 7–8 AM gives you a comfortable, unhurried darshan.</p>

      <h2 style={h2}>Surya Kund & the Rice Prasad Ritual</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Right beside the temple is <strong>Surya Kund</strong>, a natural hot spring so hot the water genuinely cooks food. This is the single most distinctive ritual on the entire Char Dham. Pilgrims buy a small cloth pouch of raw rice and potatoes, tie it up, and lower it into the kund on a string. A few minutes later it comes out cooked — and that rice is offered first to Goddess Yamuna, then carried home as prasad. There is something quietly extraordinary about eating food cooked by the earth itself at over 3,000 metres.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Before entering the temple, pilgrims also offer prayers at <strong>Divya Shila</strong>, a rock pillar near the shrine, and many take a dip in <strong>Janki Kund</strong>, a warmer pool suited for bathing. The customary order is Divya Shila first, then the hot springs, then darshan. Our guides walk first-timers through the sequence so nothing feels confusing in the crowd.</p>

      <h2 style={h2}>The Story of Goddess Yamuna</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>In Hindu tradition, Yamuna is the daughter of Surya, the sun god, and the sister of Yama, the god of death. Because of this bond, it is believed that anyone who bathes in the Yamuna's waters is freed from the fear of a painful death. This is the deeper reason the Yamunotri pilgrimage matters so much to devotees — and why the festival of Bhai Dooj, which celebrates the bond between brother and sister, is linked to the day the temple closes for winter.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The temple's actual source — the Champasar glacier and Saptarishi Kund higher up the mountain — is largely inaccessible, so the shrine at the valley floor is where the river is worshipped. When the temple closes on Bhai Dooj, the idol of the Goddess is carried in a ceremonial procession to <strong>Kharsali (Syana Chattra)</strong> village, where she is worshipped through the winter until the doors reopen the following spring.</p>

      <h2 style={h2}>The Trek: What to Expect</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The 6km from Janki Chatti gains altitude steadily and the steepest stretch comes near the end. Allow 3–4 hours up and around 2 hours down. The path is paved and railed in most places, with tea stalls and rest points along the way. <strong>Ponies, palkis (four-porter palanquins) and pittus (a porter who carries a child or a small adult in a basket)</strong> are all available at the base — and for elderly pilgrims or anyone unsure of the climb, we strongly recommend pre-arranging one rather than negotiating on the spot.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>A practical tip our team gives every group: start early, wear proper grip footwear, and carry water and a light snack. The weather here turns fast — bright sun can become cold drizzle within an hour. Most pilgrims tell us afterwards that the climb, hard as it was, made reaching the temple feel like a genuine arrival rather than just a stop.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Yamunotri Yatra Package',h:'/yamunotri-yatra'},{l:'How to Reach Yamunotri',h:'/how-to-reach-yamunotri'},{l:'Yamunotri Weather',h:'/yamunotri-weather'},{l:'Char Dham Yatra Package',h:'/char-dham-yatra'},{l:'Char Dham Route Map',h:'/char-dham-yatra-route-map'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>
      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Plan Your Yamunotri Darshan</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Pony & palki pre-arranged for seniors · Direct operator since 2010 · Full Char Dham circuit · Zero commission</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan a Yamunotri / Char Dham Yatra. Please share details.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href='tel:+917817996730' style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>
      <div style={{ marginTop:36 }}>
        <PAASchema/>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
