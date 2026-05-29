import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Gangotri Temple 2026 — Timings, History, Aarti & Guide',
  description: 'Complete Gangotri Temple guide 2026 — darshan timings, Ganga aarti, history, dress code, altitude 3,415m, opening April 19 & closing Nov 10. Source of the Ganga.',
  keywords: ['gangotri temple','gangotri temple timings 2026','gangotri dham','gangotri opening date 2026','gangotri ganga aarti','gangotri temple history'],
  alternates: { canonical: `${SITE.baseUrl}/gangotri-temple` },
  openGraph: { title: 'Gangotri Temple 2026 — Darshan Timings, History & Complete Guide', description: 'Source of the Ganga. Darshan timings, Ganga aarti, history, dress code and 2026 opening dates for Gangotri Dham.', url: `${SITE.baseUrl}/gangotri-temple`, type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Gangotri Temple 2026 — Timings, History & Complete Guide',
    description: 'Source of the Ganga. Darshan timings, Ganga aarti, history and 2026 opening dates for Gangotri Dham.',
    images: [{ url: '/opengraph-image', alt: 'Gangotri Temple 2026 — Char Dham Yatra | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const ld = { '@context':'https://schema.org','@type':'TouristAttraction', name:'Gangotri Temple', description:'The origin shrine of the river Ganga, dedicated to Goddess Ganga, at 3,415m in Uttarkashi district, Uttarakhand. One of the four Char Dham shrines.', url:`${SITE.baseUrl}/gangotri-temple`, address:{'@type':'PostalAddress',addressLocality:'Gangotri',addressRegion:'Uttarakhand',addressCountry:'IN'}, geo:{'@type':'GeoCoordinates',latitude:'30.9947',longitude:'78.9398'}, openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],opens:'06:15',closes:'21:30'}], touristType:'Pilgrim' };
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
    {'@type':'Question',name:'What are the darshan timings at Gangotri Temple?',acceptedAnswer:{'@type':'Answer',text:'Gangotri Temple opens around 6:15 AM and stays open until about 9:30 PM, with a midday break roughly between 2 PM and 3 PM. The morning and evening Ganga aarti on the riverbank are the most moving times to be there. Timings shift slightly on festival days.'}},
    {'@type':'Question',name:'When does Gangotri Temple open in 2026?',acceptedAnswer:{'@type':'Answer',text:'Gangotri Temple opens on April 19, 2026 (Akshaya Tritiya). It closes for winter on November 10, 2026 (Diwali/Annakut), after which the idol of Goddess Ganga is carried to Mukhba village for winter worship.'}},
    {'@type':'Question',name:'What is the dress code for Gangotri Temple?',acceptedAnswer:{'@type':'Answer',text:'Modest traditional clothing is expected — kurta-pyjama or dhoti for men, saree or salwar kameez for women. Carry warm layers; even in summer the temperature at 3,415m drops sharply once the sun is behind the peaks. Footwear is removed before the sanctum.'}},
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };

const PAA = [
  { q:'Where is Gangotri Temple located?', a:'In Uttarkashi district of Uttarakhand, at 3,415m on the banks of the Bhagirathi river. It is fully motorable — unlike Kedarnath and Yamunotri, you can drive right up to the temple, which makes it the easiest of the four dhams to reach.' },
  { q:'Why is Gangotri famous?', a:'It marks the symbolic origin of the Ganga, the holiest river in Hinduism. The actual glacial source, Gaumukh, lies about 18km further up the valley, but the temple at Gangotri is where the river is worshipped as Goddess Ganga descending to earth.' },
  { q:'Is the Ganga aarti at Gangotri worth seeing?', a:'Yes — for many pilgrims it is the highlight of the entire Char Dham. The evening aarti on the riverbank, with lamps floating on the fast-moving Bhagirathi against the backdrop of the peaks, is something our travellers consistently describe as unforgettable.' },
  { q:'Can senior citizens visit Gangotri easily?', a:'Gangotri is the most senior-friendly of the four shrines because the road goes right to the temple — there is no trek. The only consideration is altitude; we build a rest day into our itineraries so older pilgrims acclimatise before the climb continues.' },
  { q:'How far is Gaumukh glacier from Gangotri?', a:'About 18km on foot. Gaumukh is the true snout of the Gangotri glacier and the physical source of the Bhagirathi. It is a restricted, permit-only trek for fit trekkers and is separate from the standard temple darshan.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'QAPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>);
}

export default function GangotriTemple() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌊 Source of the Ganga · 3,415m</span>
        <h1 className="display-title speakable-answer" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Gangotri Temple — Complete Guide 2026</h1>
        <p className="speakable-answer" style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Opening: April 19, 2026 · Closing: November 10, 2026 · Altitude 3,415m · Fully motorable — no trek required</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Gangotri Yatra<span>›</span>
        <span>Gangotri Temple</span>
      </div>
    </nav>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10, marginBottom:28 }}>
        {[{icon:'📅',label:'Opens',val:'Apr 19, 2026'},{icon:'📅',label:'Closes',val:'Nov 10, 2026'},{icon:'🏔️',label:'Altitude',val:'3,415m'},{icon:'🚗',label:'Access',val:'Motorable to temple'},{icon:'⏰',label:'Darshan',val:'6:15 AM – 9:30 PM'},{icon:'🙏',label:'Deity',val:'Goddess Ganga'}].map(s=>(
          <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
            <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
            <div style={{ fontSize:10.5, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>About Gangotri Temple</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Gangotri is where Hindus believe the Ganga first touched the earth. The temple, a clean white granite shrine on the banks of the rushing <strong>Bhagirathi river</strong> at 3,415 metres, is dedicated to Goddess Ganga. The river is called the Bhagirathi here — it only takes the name Ganga further downstream at Devprayag, where it meets the Alaknanda. The present temple was built by the Gorkha commander Amar Singh Thapa in the early 18th century and has been repaired several times since, most notably by the royal family of Jaipur.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Of the four Char Dham shrines, Gangotri is the one most pilgrims find easiest on the body. The road runs all the way to the temple, so there is no trek — a real relief for older travellers after the climbs at Yamunotri and, later, Kedarnath. That said, the altitude is no joke. We always recommend arriving with a layer of warm clothing on hand and giving yourself an hour to settle before walking down to the river.</p>

      <h2 style={h2}>Darshan & Ganga Aarti Timings 2026</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        {[['6:15 AM','Temple opens — Mangala Aarti and morning darshan begin'],['6:30 AM – 2:00 PM','General darshan and abhishek'],['2:00 PM – 3:00 PM','Midday break (bhog) — sanctum briefly closed'],['3:00 PM – 7:00 PM','Afternoon darshan resumes'],['7:00 PM – 7:45 PM','Ganga Aarti on the riverbank — the highlight of the day'],['7:45 PM – 9:30 PM','Evening darshan, then Shayan Aarti and close'],].map(([time,desc],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'clamp(110px,38%,170px) 1fr', borderTop: i>0?'1px solid var(--border)':'none', padding:'11px 16px', background: i%2===0?'#fff':'var(--bg)' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{time}</div>
            <div style={{ fontSize:13, color:'var(--text-mid)' }}>{desc}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7, marginBottom:24, fontStyle:'italic' }}>Timings are indicative and adjusted on festival days. The evening Ganga aarti time also shifts a little with sunset through the season.</p>

      <h2 style={h2}>The Story of Bhagirath and the Descent of the Ganga</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The legend behind Gangotri is one of the most beloved in Hindu tradition. King Bhagirath, a descendant of the Suryavanshi dynasty, performed a penance lasting years to bring the celestial river Ganga down from heaven — so that her waters could liberate the souls of his 60,000 ancestors, who had been reduced to ashes by the curse of sage Kapila.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Ganga agreed to descend, but warned that the force of her fall would shatter the earth. So Lord Shiva caught her in the locks of his hair and released her gently in streams. A short walk from the temple is the <strong>Bhagirath Shila</strong> — the rock where King Bhagirath is said to have sat in meditation. Pilgrims still place their hands on it. It is a quiet spot, easy to miss, but standing there with the river thundering past, the old story stops feeling like a myth and starts feeling like a place.</p>

      <h2 style={h2}>Places to Visit Around Gangotri</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
        {[
          { name:'Bhagirath Shila', dist:'Beside the temple', desc:'The rock where King Bhagirath meditated to bring the Ganga to earth. A simple, sacred spot right by the river — most pilgrims spend a few quiet minutes here after darshan.' },
          { name:'Surya Kund & Gauri Kund', dist:'Near the temple', desc:'Two natural pools on the Bhagirathi where the river crashes down over rocks. The roar is constant. Gauri Kund in particular is a striking cascade just downstream of the shrine.' },
          { name:'Gaumukh Glacier', dist:'18km trek (permit required)', desc:'The actual snout of the Gangotri glacier and the physical source of the Bhagirathi, at 4,000m. A demanding two-day trek through Gangotri National Park for fit, well-prepared trekkers only — not part of standard darshan.' },
          { name:'Pandav Gufa', dist:'1.5km from Gangotri', desc:'A cave where the Pandavas are believed to have meditated on their way to heaven. A short, peaceful walk along the river for those who want to step away from the crowds.' },
          { name:'Harsil Valley', dist:'~25km before Gangotri', desc:'A stunning apple-growing village on the Bhagirathi, ringed by deodar forest and snow peaks. Many pilgrims break their journey here — it is one of the most beautiful spots on the entire yatra route.' },
          { name:'Mukhba Village', dist:'~20km from Gangotri', desc:'The winter home of Goddess Ganga. When the temple closes in November, the idol is carried here and worshipped through the cold months. Visiting in season gives a sense of the living rhythm of the dham.' },
        ].map(pl => (
          <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
            <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:8 }}>📍 {pl.dist}</div>
            <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>What You'll Actually Experience at Gangotri</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Because there is no trek, Gangotri tends to be the dham where pilgrims finally exhale. You park, walk a few minutes down a stone path lined with shops and ashrams, and suddenly the temple is there — white against the grey-green river and the dark peaks. The Bhagirathi is loud, cold and fast, and most people are drawn straight to its edge before they even enter the temple.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The thing our pilgrims talk about most afterwards is the evening aarti. As the light goes and the lamps come up, the whole riverbank turns gold and the chanting carries over the water. Families fill small bottles of Gangajal to carry home — it is considered the purest you can collect anywhere. We have watched grown men go quiet at that riverbank in a way they did not expect. Gangotri does that.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Gangotri Yatra Package',h:'/gangotri-yatra'},{l:'How to Reach Gangotri',h:'/how-to-reach-gangotri'},{l:'Gangotri Weather',h:'/gangotri-weather'},{l:'Haridwar to Gangotri Cab',h:'/haridwar-to-gangotri-cab'},{l:'Char Dham Yatra Package',h:'/char-dham-yatra'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>
      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Plan Your Gangotri Darshan</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Direct operator since 2010 · Acclimatisation rest day built in · Senior-friendly itineraries · Zero commission</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan a Gangotri / Char Dham Yatra. Please share details.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
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
