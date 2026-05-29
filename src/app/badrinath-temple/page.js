import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
export const metadata = {
  title: 'Badrinath Temple 2026 — Darshan Timings,',
  description: 'Complete Badrinath Temple guide 2026. Opening April 23. Darshan timings 4:30 AM–9 PM. Mahabhishek at 4:30 AM. Motor road to temple — no trek. Lord',
  keywords: ['badrinath temple','badrinath temple timings 2026','badrinath darshan timings','badrinath temple opening date 2026','badrinath maha abhishek puja'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-temple` },
};
function Schema() {
  const ld = { '@context':'https://schema.org','@type':'TouristAttraction', name:'Badrinath Temple', description:'Sacred Hindu temple dedicated to Lord Vishnu, one of the Char Dhams, located at 3,133m in Chamoli district, Uttarakhand.', url:`${SITE.baseUrl}/badrinath-temple`, geo:{'@type':'GeoCoordinates',latitude:'30.7433',longitude:'79.4938'}, touristType:'Pilgrim' };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}
const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
const PAA = [
  { q:'Where is Badrinath Temple located?', a:'In Chamoli district of Uttarakhand, on the bank of the Alaknanda river between the Nar and Narayan peaks, at about 3,133 m altitude. It\'s fully motorable — no trek required.' },
  { q:'Why is Badrinath Temple famous?', a:'Dedicated to Lord Vishnu, it\'s the most important of the four Char Dham shrines and one of the 108 Divya Desams. Tradition credits Adi Shankaracharya with establishing the temple in the 8th century.' },
  { q:'What are the Badrinath darshan timings?', a:'Roughly 4:30 AM to 1:00 PM and 4:00 PM to 9:00 PM during the season, with the morning Maha Abhishek aarti at 4:30 AM and Shayan aarti around 8:30–9:00 PM. Verify on the day, as festival timings vary.' },
  { q:'When does Badrinath Temple open in 2026?', a:'April 23, 2026, at 6:15 AM (Brahma Muhurta). It stays open until roughly mid-November before closing for winter.' },
  { q:'What is Tapt Kund at Badrinath?', a:'A natural hot-water spring just below the temple, around 45–55°C. Pilgrims traditionally bathe here before darshan — it\'s believed to be purifying, and warms the body in the cold mountain air.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'QAPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>);
}

export default function BadrinathTemple() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🕌 Lord Vishnu · 3,133m</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Badrinath Temple — Complete Guide 2026</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Opening: April 23, 2026 · Darshan 4:30 AM–9 PM · Altitude 3,133m · Motor road to temple</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Badrinath Yatra<span>›</span>
        <span>Badrinath Temple</span>
      </div>
    </nav>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10, marginBottom:28 }}>
        {[{icon:'📅',label:'Opens',val:'Apr 23, 2026'},{icon:'📅',label:'Closes',val:'Nov 13, 2026'},{icon:'🏔️',label:'Altitude',val:'3,133m'},{icon:'🚗',label:'Access',val:'Motor road'},{icon:'⏰',label:'Darshan',val:'4:30 AM–9 PM'},{icon:'🙏',label:'Deity',val:'Lord Vishnu'}].map(s=>(
          <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
            <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
            <div style={{ fontSize:10.5, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
          </div>
        ))}
      </div>
      <h2 style={h2}>About Badrinath Temple</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Badrinath is one of the most revered pilgrimage sites in Hinduism — the final and perhaps most significant of the four Char Dhams. The temple, dedicated to Lord Vishnu in his Badrinarayan form, sits at 3,133 metres between the Nar and Narayan mountain ranges in Chamoli district. Unlike Kedarnath, Badrinath is accessible entirely by motor road — no trekking required — making it accessible to pilgrims of all ages and fitness levels.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The black stone idol of Badrinarayan is 1 metre tall and is believed to be <em>swayambhu</em> (self-manifested). The idol was reportedly retrieved from the Alaknanda river by Adi Shankaracharya in the 8th century and installed in the current temple. The temple was built and rebuilt several times — the current structure is from the 17th century with subsequent renovations.</p>
      <h2 style={h2}>Darshan Timings 2026</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        {[['4:30 AM','Maha Abhishek — most auspicious puja of the day'],['6:00 AM','Abhishek + Aarti'],['7:00 AM','General Darshan opens'],['12:00 PM','Madhyan Darshan'],['1:00 PM – 4:00 PM','Temple closed for rest'],['4:00 PM','Evening Darshan reopens'],['7:00 PM','Sandhya Aarti'],['9:00 PM','Shayan Aarti — temple closes'],].map(([time,desc],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'clamp(90px,32%,140px) 1fr', borderTop: i>0?'1px solid var(--border)':'none', padding:'10px 16px', background: i%2===0?'#fff':'var(--bg)' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{time}</div>
            <div style={{ fontSize:13, color:'var(--text-mid)' }}>{desc}</div>
          </div>
        ))}
      </div>
      <h2 style={h2}>Tapt Kund — The Hot Spring</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Just below the temple is <strong>Tapt Kund</strong> — a natural sulphur hot spring that maintains a temperature of around 55°C year-round, even when the surrounding air is near freezing. Pilgrims traditionally bathe in the Tapt Kund before entering the temple for darshan. The hot spring water is considered medicinal and spiritually purifying. There are separate bathing areas for men and women.</p>
      <h2 style={h2}>The Legend of Badrinath</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The name Badrinath comes from Badri — a wild berry tree (Indian jujube) that once grew abundantly in this valley. The legend goes that Lord Vishnu was meditating in severe penance at this spot, exposed to the harsh Himalayan cold. Goddess Lakshmi, unable to bear watching her husband suffer, transformed herself into a Badri tree and shaded him for thousands of years. When Vishnu finally emerged from meditation, he declared that since Lakshmi had sheltered him here, this place would forever be known as Badrikashram — the hermitage of the Badri tree.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The black stone idol worshipped here is considered <em>swayambhu</em> — self-manifested, not made by human hands. According to tradition, Adi Shankaracharya found it in the Alaknanda river, where it had been submerged to protect it during a period of Buddhist dominance in the region, and enshrined it in the current temple in the 8th century. The idol shows Vishnu in Padmasana (seated lotus posture), which is rare — most Vishnu temples show him reclining or standing.</p>

      <h2 style={h2}>Places to Visit Near Badrinath</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
        {[
          { name:'Mana Village', dist:'3km from temple', desc:'The last inhabited village before the Tibetan border. Walking through its stone lanes — past ancient cave homes, locals weaving shawls — feels like stepping several centuries back. Ask the locals about the cave where Vyas Muni is said to have dictated the Mahabharata to Ganesha.' },
          { name:'Brahma Kapal', dist:'1km from temple', desc:'A flat rock platform on the bank of the Alaknanda where Hindus perform pind-dan (last rites) for their deceased ancestors. It is said that rites performed here directly reach the ancestors. The site has an ancient, solemn quality. Many pilgrims plan their visit specifically for this ritual.' },
          { name:'Vyas Gufa & Ganesh Gufa', dist:'Mana Village, 3km', desc:'The cave where the sage Vyas Muni is said to have composed the Mahabharata. Ganesh Gufa nearby is where Lord Ganesha reportedly transcribed it as Vyas dictated. Small, dark, and extraordinary to stand inside when you know the story.' },
          { name:'Bhim Pul', dist:'Mana Village, 3km', desc:'A single massive boulder serves as a natural bridge across a roaring mountain stream. According to legend, Bhima (of the Pandavas) placed this rock to help Draupadi cross. The Saraswati river — which is said to disappear underground just ahead — rushes beneath it with tremendous force.' },
          { name:'Neelkanth Peak Viewpoint', dist:'Near Badrinath', desc:'At 6,596m, Neelkanth is the most prominent peak visible from Badrinath and is considered sacred to Lord Vishnu. Its sheer, snow-streaked face towers above the valley. The best views are from the path toward Mana at dawn, when the peak catches the first light.' },
          { name:'Tapt Kund', dist:'Below the temple steps', desc:'The natural sulphur hot spring where pilgrims bathe before darshan. Even in sub-zero temperatures, the water here stays around 55°C. Bathing in the mist while snow-dusted peaks tower overhead is a genuinely unforgettable sensory experience.' },
        ].map(pl => (
          <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
            <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:8 }}>📍 {pl.dist}</div>
            <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>What Makes Badrinath Different from the Other Dhams</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Badrinath is the only one of the four dhams where you can drive all the way to the temple gate. No trekking, no pony ride — just a walk of a few hundred metres from the parking area. This makes it uniquely accessible for elderly pilgrims, families with small children, and anyone with mobility limitations. Yet despite this accessibility, it doesn't feel like a lesser pilgrimage. The scale of the mountains around it — deep valley, sheer cliff walls, the roar of the Alaknanda — is the most dramatic of all four dhams.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The town of Badrinath itself is also different from the others. It has a village quality, with the Alaknanda running right through it and a row of ashrams and dhabas along the river bank. In peak season (May–June), the town is full and energetic. But those who come in mid-September find it quieter, the mountains dusted with early snow, and the darshan lines short. Our team considers the September window the ideal time to visit Badrinath if your schedule allows it.</p>

      <h2 style={h2}>Local Wildlife & Sightings</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The valley around Badrinath is inside the Nanda Devi Biosphere Reserve and is home to some remarkable wildlife. <strong>Himalayan ibex</strong> — large, bearded wild goats with curved horns — are commonly spotted on the rocky slopes above Mana village. <strong>Snow pigeons</strong> nest in large flocks on the cliff faces above the Alaknanda. In spring, the hillsides around the temple are covered in Brahma Kamal, the sacred alpine lotus — a protected species and considered highly auspicious. The walk to Mana village in early morning, before the crowds arrive, often yields sightings of monal pheasants in the scrub alongside the path.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Badrinath Yatra Guide',h:'/blog/badrinath-yatra-guide'},{l:'Do Dham Package',h:'/do-dham-yatra'},{l:'Online Puja Booking',h:'/online-puja-booking'},{l:'Haridwar to Badrinath Cab',h:'/haridwar-to-badrinath-cab'},{l:'Char Dham Package',h:'/char-dham-yatra'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>
      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Badrinath Yatra Package</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Maha Abhishek booking included · VIP darshan · From ₹5,999</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Badrinath Yatra with Maha Abhishek puja assistance.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
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
