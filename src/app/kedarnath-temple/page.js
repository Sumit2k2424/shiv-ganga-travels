import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
export const metadata = {
  title: 'Kedarnath Temple 2026 — History, Timings,',
  description: 'Complete Kedarnath Temple guide 2026. Temple history, darshan timings (4 AM–9 PM), dress code, puja types, altitude 3,583m, trek route from Gaurikund',
  keywords: ['kedarnath temple','kedarnath temple timings 2026','kedarnath temple history','kedarnath darshan 2026','kedarnath temple opening date 2026'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-temple` },
  openGraph: { title: 'Kedarnath Temple 2026 — Darshan Timings, History & Complete Guide', description: 'Everything about Kedarnath Temple — 12th Jyotirlinga, darshan timings, history, trek, puja & 2026 opening dates.', url: `${SITE.baseUrl}/kedarnath-temple`, type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Temple 2026 — Darshan Timings, History & Complete Guide',
    description: 'Everything about Kedarnath Temple — 12th Jyotirlinga, darshan timings, history, trek, puja & 2026 opening dates.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Temple 2026 — Darshan Timings, History & Complete  | Shiv Ganga Travels' }],
  },
};
function Schema() {
  const ld = { '@context':'https://schema.org','@type':'TouristAttraction', name:'Kedarnath Temple', description:'One of the 12 Jyotirlingas of Lord Shiva, located at 3,583m in the Garhwal Himalayas of Uttarakhand.', url:`${SITE.baseUrl}/kedarnath-temple`, address:{'@type':'PostalAddress',addressLocality:'Kedarnath',addressRegion:'Uttarakhand',addressCountry:'IN'}, geo:{'@type':'GeoCoordinates',latitude:'30.7352',longitude:'79.0669'}, openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],opens:'04:00',closes:'21:00'}], aggregateRating:{'@type':'AggregateRating',ratingValue:4.6,reviewCount:5000,bestRating:5}, touristType:'Pilgrim' };
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:[
    {'@type':'Question',name:'What time does Kedarnath Temple open?',acceptedAnswer:{'@type':'Answer',text:'Kedarnath Temple opens at 4:00 AM for the Mahabhishek puja and closes at 9:00 PM. General darshan is from 6 AM to 3 PM and 5 PM to 9 PM. The temple is closed between 3 PM and 5 PM for a break.'}},
    {'@type':'Question',name:'When does Kedarnath Temple open in 2026?',acceptedAnswer:{'@type':'Answer',text:'Kedarnath Temple opens on April 22, 2026 at 8:00 AM for the 2026 season. The temple closes for winter on November 11, 2026.'}},
    {'@type':'Question',name:'What is the dress code for Kedarnath Temple?',acceptedAnswer:{'@type':'Answer',text:'Traditional Indian attire is recommended — dhoti/kurta for men, saree or salwar kameez for women. Western shorts and sleeveless clothing are discouraged. Shoes must be removed at the temple entrance.'}},
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/></>);
}
const h2 = { fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
const PAA = [
  { q:'Where is Kedarnath Temple located?', a:'In Rudraprayag district of Uttarakhand, near the source of the Mandakini river, at about 3,583 m altitude in the Garhwal Himalayas. It\'s reached by a 16 km trek from Gaurikund or by helicopter.' },
  { q:'Why is Kedarnath Temple famous?', a:'It\'s one of the twelve Jyotirlingas of Shiva and one of the four Char Dham shrines. Believed to be where Shiva appeared as a bull and left his hump, the stone temple has stood for centuries and survived the 2013 floods, deepening its significance.' },
  { q:'What are the Kedarnath darshan timings?', a:'General darshan typically runs from 6:00 AM, with the early Maha Abhishek aarti around 4:00 AM for VIP ticket holders. The temple closes briefly in the afternoon and reopens for evening aarti. Timings vary slightly on festival days.' },
  { q:'When does Kedarnath Temple open in 2026?', a:'April 22, 2026, with the date announced on Maha Shivratri. It closes around mid-November (Bhai Dooj), after which the deity is worshipped at Ukhimath for winter.' },
  { q:'How do I reach Kedarnath Temple?', a:'Drive to Sonprayag/Gaurikund (the road-head), then trek 16 km, or take a pony, palki or helicopter shuttle from Phata/Sersi. From Haridwar it\'s roughly a 2-day journey including the climb.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'QAPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>);
}

export default function KedarnathTemple() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🕌 12th Jyotirlinga · 3,583m</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Kedarnath Temple — Complete Guide 2026</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Opening: April 22, 2026 · Darshan 4 AM–9 PM · Altitude 3,583m · 16km trek from Gaurikund</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Kedarnath Yatra<span>›</span>
        <span>Kedarnath Temple</span>
      </div>
    </nav>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10, marginBottom:28 }}>
        {[{icon:'📅',label:'Opens',val:'Apr 22, 2026'},{icon:'📅',label:'Closes',val:'Nov 11, 2026'},{icon:'🏔️',label:'Altitude',val:'3,583m'},{icon:'🚶',label:'Trek',val:'16km from Gaurikund'},{icon:'⏰',label:'Darshan',val:'4 AM – 9 PM'},{icon:'🙏',label:'Deity',val:'Lord Shiva'}].map(s=>(
          <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
            <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
            <div style={{ fontSize:10.5, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
          </div>
        ))}
      </div>
      <h2 style={h2}>About Kedarnath Temple</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Kedarnath is one of the twelve <strong>Jyotirlingas</strong> of Lord Shiva — the most sacred manifestations of the divine in Shaivite tradition. Located at 3,583 metres above sea level in the Rudraprayag district of Uttarakhand, the temple sits at the head of the Mandakini river valley, surrounded by snow-capped peaks. The existing stone temple is believed to have been built by Adi Shankaracharya in the 8th century CE, though the site's spiritual significance dates to the Mahabharata period — the Pandavas are said to have worshipped Lord Shiva here after the Kurukshetra war.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The temple survived the catastrophic 2013 floods with remarkably little structural damage — a massive boulder from the mountain behind acted as a natural shield, deflecting the floodwaters around the shrine. Many devotees see this as a divine miracle. The temple has since been restored with a stronger infrastructure including a wider trek path, proper drainage, and emergency facilities.</p>
      <h2 style={h2}>Darshan Timings 2026</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
        {[['4:00 AM – 6:00 AM','Mahabhishek Puja — premium puja, advance booking required'],['6:00 AM – 7:00 AM','Balabhog (morning offering)'],['7:00 AM – 8:00 AM','Madhyan Darshan (general)'],['8:00 AM – 12:00 PM','General Darshan — peak hours'],['12:00 PM – 2:00 PM','Madhyan Mahabhishek + Sahastra Naam Archana'],['2:00 PM – 5:00 PM','Temple closed for break'],['5:00 PM – 7:00 PM','Panchomukhi Darshan'],['7:30 PM – 8:30 PM','Shringaar Aarti'],['8:30 PM – 9:00 PM','Shayan Aarti — temple closes for the night'],].map(([time,desc],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'clamp(100px,35%,160px) 1fr', borderTop: i>0?'1px solid var(--border)':'none', padding:'11px 16px', background: i%2===0?'#fff':'var(--bg)' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{time}</div>
            <div style={{ fontSize:13, color:'var(--text-mid)' }}>{desc}</div>
          </div>
        ))}
      </div>
      <h2 style={h2}>Types of Puja at Kedarnath</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10, marginBottom:28 }}>
        {[{puja:'Mahabhishek',price:'₹3,100',desc:'Pre-dawn ritual with milk, curd, honey, ghee — most auspicious',time:'4–6 AM'},{puja:'Rudrabhishek',price:'₹1,500',desc:'Abhishek with Panchagavya — powerful Shiva puja',time:'Morning'},{puja:'Sahastra Naam',price:'₹1,200',desc:'Recitation of 1,000 names of Lord Shiva',time:'Afternoon'},{puja:'Shringaar Aarti',price:'₹2,100',desc:'Evening aarti — Shiva adorned in flowers & jewels',time:'7:30 PM'}].map(pu=>(
          <div key={pu.puja} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{pu.puja}</div>
            <div style={{ fontWeight:800, fontSize:16, color:'var(--gold)', marginBottom:4 }}>{pu.price}</div>
            <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:4 }}>{pu.time}</div>
            <div style={{ fontSize:12.5, color:'var(--text-mid)' }}>{pu.desc}</div>
          </div>
        ))}
      </div>
      <h2 style={h2}>The Story Behind the Temple</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The story of Kedarnath goes back to the Mahabharata. After the Kurukshetra war, the Pandavas were tormented by guilt — they had killed their own kin, including their guru Dronacharya and granduncle Bhishma. They sought Lord Shiva's forgiveness and came to the Himalayas to find him. But Shiva, who was reluctant to absolve them easily, disguised himself as a bull and disappeared into the earth at Kedarnath.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>When Bhima tried to catch the bull, it began to sink into the ground. Bhima grabbed its hump — and that's the hump still worshipped in the form of the Kedarnath Shivalinga today. The rest of Shiva's body parts are said to have emerged at four other sites — Tungnath (arms), Rudranath (face), Madhyamaheshwar (navel), and Kalpeshwar (hair) — together forming the Panch Kedar pilgrimage.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Then there is the miracle of 2013. During the catastrophic Uttarakhand floods that killed thousands and wiped out entire villages, a massive boulder rolled down from the mountain directly behind the temple. Instead of crushing it, the boulder split the water flow and sat there like a shield. The temple itself had water flowing around it but the sanctum remained almost untouched. Many of our pilgrims who visit today specifically go behind the temple to see that boulder — and the emotion on their faces is something our team has described as unlike anything else on the yatra.</p>

      <h2 style={h2}>Places to Visit Near Kedarnath</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
        {[
          { name:'Bhairavnath Temple', dist:'500m from main temple', desc:'The guardian deity of Kedarnath. It is believed you must seek Bhairav\'s permission before leaving — even today pilgrims stop here on the way out. A small, ancient shrine with a powerful atmosphere.' },
          { name:'Gandhi Sarovar (Chorabari Lake)', dist:'3km trek from temple', desc:'Also called Chorabari Lake, this glacial lake sits at 3,900m. The trail passes through alpine meadows with views of Kedarnath peak. The lake was dramatically impacted in 2013 but has largely recovered. A quiet, meditative place early morning.' },
          { name:'Vasuki Tal', dist:'8km trek from temple', desc:'A high-altitude lake at 4,135m surrounded by glaciers. On a clear day you can see Chaukhamba peak reflected in the water. This is for physically fit trekkers and should not be attempted without a guide. The reward is extraordinary.' },
          { name:'Shankaracharya Samadhi', dist:'Behind main temple', desc:'Adi Shankaracharya, who is credited with establishing Kedarnath as one of the four sacred dhams, is believed to have attained samadhi (liberation) here at the age of 32. His tomb sits just behind the temple. A moment of real historical gravity.' },
          { name:'Gaurikund', dist:'14km below (trek base)', desc:'The base of the Kedarnath trek at 1,982m. Named after Goddess Gauri (Parvati), there is a hot spring here where she is said to have bathed. The Gaurikund temple and the kund itself are worth visiting before starting the trek up.' },
          { name:'Triyuginarayan Temple', dist:'12km from Sonprayag', desc:'The mythological site where Lord Shiva and Parvati were married. The eternal flame in the temple courtyard is said to have been burning since their wedding. A remarkable detour, rarely crowded, with a deeply human story attached to it.' },
        ].map(pl => (
          <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
            <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:8 }}>📍 {pl.dist}</div>
            <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>What You'll Actually Experience on the Trek</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The 16km trek from Gaurikund to Kedarnath takes most pilgrims 6–8 hours. The first few kilometres pass through tea stalls and horse handlers — it can feel chaotic and commercial. But by the time you cross the 5km mark and the forest gives way to open alpine terrain, something shifts. The Mandakini river roars below, the Kedarnath peak comes into view, and you start to understand why people have been making this journey for over a thousand years.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The last 2km before the temple, the path straightens and widens. Pilgrims who have been walking in silence for hours sometimes begin to chant spontaneously. By the time the temple comes into view — grey stone, simple, ancient, tucked between peaks — it genuinely stops people in their tracks. We have had pilgrims in their 70s tell us this moment alone made the entire journey worth every rupee and every aching step.</p>

      <h2 style={h2}>Wildlife & Natural Sightings</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The Kedarnath Wildlife Sanctuary that surrounds the valley is one of the most biodiverse high-altitude ecosystems in India. On the trek, keep your eyes on the rocky slopes — <strong>Bharal (Himalayan blue sheep)</strong> are frequently spotted above the treeline, and their sure-footedness on near-vertical rock is genuinely humbling. The <strong>Himalayan monal</strong>, Uttarakhand's state bird, with its iridescent blue-green plumage, is spotted regularly near the base of the valley.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Snow leopards live in the higher reaches of the sanctuary. You are unlikely to spot one on the main trail, but pugmarks have been reported near Gandhi Sarovar and Vasuki Tal. In spring, the slopes below Kedarnath are blanketed with Brahma Kamal — a rare lotus-like alpine flower that blooms at high altitude and holds deep religious significance. Pilgrims who spot it in bloom consider it an especially auspicious sign.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Kedarnath Yatra Package',h:'/kedarnath-yatra'},{l:'Kedarnath Trek Guide',h:'/blog/kedarnath-trek-guide'},{l:'Helicopter Booking',h:'/blog/kedarnath-helicopter-booking'},{l:'Online Puja Booking',h:'/online-puja-booking'},{l:'Haridwar to Kedarnath Cab',h:'/haridwar-to-kedarnath-cab'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>
      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Kedarnath Yatra Package</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Puja booking assistance included · VIP darshan · Helicopter option · From ₹6,499</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra with puja booking assistance.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
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
