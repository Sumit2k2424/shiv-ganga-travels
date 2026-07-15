import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Dhari Devi Temple 2026 — Story, Timings & How to Reach',
  description: 'Dhari Devi Temple near Srinagar, Pauri Garhwal — the guardian goddess of Char Dham. Darshan timings 6 AM–8 PM, the 2013 flood story, how to reach, distances and the temple most pilgrims visit before Kedarnath.',
  keywords: ['dhari devi temple','dhari devi mandir','dhari devi','dhari devi temple story','dhari devi temple history','dhari devi temple timings','dhari devi temple location','dhari devi temple distance from srinagar','dhari devi kalyasaur','dhari devi temple uttarakhand'],
  alternates: { canonical: `${SITE.baseUrl}/dhari-devi-temple` },
  openGraph: {
    title: 'Dhari Devi Temple — The Guardian Goddess of Char Dham',
    description: 'The temple in the middle of the Alaknanda whose idol changes face three times a day — and the 2013 story every Uttarakhand pilgrim knows. Timings, route and darshan guide.',
    url: `${SITE.baseUrl}/dhari-devi-temple`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dhari Devi Temple on the Alaknanda, Pauri Garhwal — Shiv Ganga Travels' }],
  },
  twitter: { card: 'summary_large_image', title: 'Dhari Devi Temple 2026 — Story, Timings & How to Reach', description: 'Guardian goddess of the Char Dham. Darshan 6 AM–8 PM, the 2013 flood story, distances and route from Srinagar.', images: [{ url: '/opengraph-image', alt: 'Dhari Devi Temple, Uttarakhand' }] },
};

const PAA = [
  { q:'What is the story of Dhari Devi Temple?', a:'Dhari Devi is worshipped as the guardian deity of Uttarakhand and the protector of the Char Dham. The best-known story is recent: on the evening of 16 June 2013 the idol was moved from its rock in the Alaknanda to a raised platform to make way for a hydro project — and within hours the Kedarnath cloudburst struck, killing thousands. Locals read the disaster as the goddess\u2019s anger, and a nearly identical 1882 relocation attempt is remembered for a landslide that damaged Kedarnath. The older legend of her name tells of a flood that washed her idol against a rock near Dhari village, where villagers heard the idol cry and enshrined her on that spot.' },
  { q:'What are Dhari Devi Temple darshan timings?', a:'The temple is open roughly 6:00 AM to 8:00 PM through the year, with a short afternoon break at some times. The morning and evening aartis are the highlights — the evening aarti over the Alaknanda, with lamps and bells, is what most visitors remember. Photography inside the sanctum is strictly prohibited.' },
  { q:'Which district is Dhari Devi Temple in?', a:'Dhari Devi Temple is in Pauri Garhwal district of Uttarakhand, at Kalyasaur on the Srinagar\u2013Badrinath highway (NH-7/old NH-58), on the banks of the Alaknanda. Rudraprayag town lies about 20 km further on, which is why some sources loosely place it "between Srinagar and Rudraprayag".' },
  { q:'How far is Dhari Devi from Srinagar Garhwal?', a:'About 13\u201315 km, a 30\u201340 minute drive along the Alaknanda on the Badrinath highway. From the Kalyasaur roadside it is a short 500 m\u20131 km walk down and across a pedestrian bridge to the temple platform in the river.' },
  { q:'Why does the Dhari Devi idol change its face?', a:'By long-held local belief the stone face of the goddess changes through the day \u2014 a girl in the morning, a young woman by midday, an old woman by evening. It is an article of faith rather than a documented physical change, and it is one of the things that makes the shrine unique. Only the upper half of the idol is worshipped here; the lower half is at Kalimath, as Goddess Kali.' },
  { q:'Should I visit Dhari Devi before Kedarnath and Badrinath?', a:'Most pilgrims do. Because she is considered the guardian of the Char Dham, the custom is to seek her blessing on the way up \u2014 and the temple sits right on the Rishikesh\u2013Rudraprayag road that every Kedarnath and Badrinath traveller already takes, so it adds only 30\u201340 minutes. It is a natural stop between Srinagar and Rudraprayag.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'HinduTemple',
    '@id':`${SITE.baseUrl}/dhari-devi-temple#temple`,
    name:'Dhari Devi Temple', alternateName:['Dhari Devi Mandir','Maa Dhari Devi'],
    url:`${SITE.baseUrl}/dhari-devi-temple`,
    description:'Ancient shrine of Goddess Dhari (a form of Kali) on the banks of the Alaknanda at Kalyasaur, Pauri Garhwal, Uttarakhand — revered as the guardian deity of Uttarakhand and protector of the Char Dham. One of 108 Shakta pithas; the upper half of the idol is worshipped here, the lower half at Kalimath.',
    address:{ '@type':'PostalAddress', addressLocality:'Kalyasaur, Srinagar', addressRegion:'Uttarakhand', addressCountry:'IN' },
    geo:{ '@type':'GeoCoordinates', latitude:'30.2581', longitude:'78.8774' },
    openingHoursSpecification:[{ '@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens:'06:00', closes:'20:00' }],
    touristType:'Pilgrim',
    sameAs:['https://en.wikipedia.org/wiki/Dhari_Devi','https://pauri.nic.in/tourist-place/dhari-devi-temple/'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Pauri Garhwal, Uttarakhand, India' },
    isPartOf:{ '@type':'TouristAttraction', name:'Char Dham Yatra', sameAs:'https://en.wikipedia.org/wiki/Chota_Char_Dham' },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  },{
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Char Dham Yatra', item:`${SITE.baseUrl}/char-dham-yatra` },
      { '@type':'ListItem', position:3, name:'Dhari Devi Temple', item:`${SITE.baseUrl}/dhari-devi-temple` },
    ],
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:34 };
const h3 = { fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:600, color:'var(--navy)', marginBottom:8, marginTop:20 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };
const td = { padding:'10px 14px', borderBottom:'1px solid var(--border)', fontSize:14 };

const FACTS = [
  ['Deity', 'Maa Dhari Devi — a form of Goddess Kali'],
  ['Location', 'Kalyasaur, on the Srinagar–Badrinath highway (NH-7)'],
  ['District', 'Pauri Garhwal, Uttarakhand'],
  ['On the banks of', 'Alaknanda river (temple sits on a platform in the river)'],
  ['Elevation', '≈560 m (1,837 ft) above sea level'],
  ['Distance from Srinagar Garhwal', '≈13–15 km (30–40 min)'],
  ['Distance from Rudraprayag', '≈20 km'],
  ['Timings', 'Approx. 6:00 AM – 8:00 PM (morning & evening aarti)'],
  ['Photography', 'Prohibited inside the sanctum'],
  ['Significance', 'Guardian of the Char Dham · one of 108 Shakta pithas'],
];

const DIST = [
  ['Srinagar (Garhwal)', '13–15 km', '30–40 min'],
  ['Rudraprayag', '20 km', '40 min'],
  ['Rishikesh', '≈118 km', '3.5–4 hrs'],
  ['Haridwar', '≈140 km', '4.5–5 hrs'],
  ['Dehradun (Jolly Grant Airport)', '≈135 km', '4 hrs'],
  ['Delhi', '≈340–360 km', '9–10 hrs'],
  ['Devprayag', '≈35 km', '1 hr'],
  ['Gaurikund (Kedarnath base)', '≈89 km', '3.5 hrs'],
];

export default function DhariDeviTemple() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🛕 Guardian of the Char Dham</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Dhari Devi Temple — Story, Timings &amp; How to Reach</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>The goddess in the middle of the Alaknanda who guards the four dhams — updated {SITE.lastUpdated}</p>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/char-dham-yatra" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
        <span>Dhari Devi Temple</span>
      </div>
    </nav>

    <article style={{ maxWidth:820, margin:'0 auto', padding:'32px 20px 60px' }}>
      <BlogAuthor variant="top" author="sumit" article={{ slug:'dhari-devi-temple', title:'Dhari Devi Temple 2026 — Story, Timings & How to Reach', description:'Guardian goddess of the Char Dham near Srinagar, Pauri Garhwal — story, timings, how to reach and distances.', datePublished:'2026-02-01', dateModified: SITE.lastUpdatedISO, lang:'en-IN' }} />

      <AnswerBox>
        Dhari Devi Temple sits on a platform in the middle of the <strong>Alaknanda river at Kalyasaur, Pauri Garhwal</strong>, about 15 km from Srinagar Garhwal on the Badrinath highway. Dedicated to <strong>Maa Dhari Devi, a form of Goddess Kali</strong>, she is revered as the guardian deity of Uttarakhand and the protector of the Char Dham. Darshan is roughly <strong>6 AM to 8 PM</strong>; most pilgrims stop here on the way to Kedarnath and Badrinath to seek her blessing first.
      </AnswerBox>

      <h2 style={h2}>The Temple in the Middle of a River</h2>
      <p style={p}>There is nothing else quite like it on the Char Dham road. You come down off the Srinagar–Badrinath highway at Kalyasaur, walk a few hundred metres, cross a footbridge over the Alaknanda — and there sits the shrine, raised on a platform with the green river rushing around it on all sides. No roof over the idol. That is not an oversight; it is the rule. Local belief holds that the goddess must never be kept under a roof, and every attempt over the years to cover her has, in the telling, failed.</p>
      <p style={p}>Most travellers pass this spot without knowing what it is. Those who stop find one of the most atmospheric temples in Garhwal — and, if they ask, one of its most charged stories.</p>

      <h2 style={h2}>Dhari Devi at a Glance</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid var(--border)' }}>
          <tbody>
            {FACTS.map(([k,v]) => (
              <tr key={k}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)', width:'42%' }}>{k}</td>
                <td style={{ ...td, color:'#334155' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>The Story — Guardian of the Char Dham, and the 2013 Flood</h2>
      <p style={p}>Two stories sit on top of each other here, and both matter.</p>
      <p style={p}>The <strong>older legend</strong> gives the goddess her name. Centuries ago a great flood swept the valley and carried her idol downstream until it lodged against a rock near the village of Dhari. Villagers heard a cry coming from the water, found the idol, and a divine voice told them to install her right there. They did, and she became <em>Dhari</em> Devi — the bearer, the one who holds and protects. Over time she came to be seen as the guardian deity of all of Uttarakhand and, specifically, the protector of the four dhams. This is why the custom is to seek her darshan <em>before</em> going up to Kedarnath and Badrinath: the yatra is felt to be incomplete, and unprotected, without her blessing.</p>
      <p style={p}>The <strong>recent story</strong> is the one every Uttarakhandi will tell you. On 16 June 2013, to clear the way for the Srinagar hydroelectric project, the idol was lifted from its ancient rock in the river and moved to a raised concrete platform. Priests and locals had warned against it. Within hours — the night of 16–17 June — the Kedarnath cloudburst hit, and the floods that followed killed thousands across Rudraprayag, Chamoli and Uttarkashi. To believers, the timing was not a coincidence; it was the goddess's anger at being moved from her <em>mool sthan</em>, her original seat. Older residents point out that a similar relocation attempt by a local ruler in 1882 is remembered for a landslide that damaged Kedarnath. Whether you read it as faith or as coincidence, the story is now inseparable from the place — and it is a large part of why devotion here has only deepened since.</p>

      <h2 style={h2}>Why the Idol &quot;Changes Face&quot; Three Times a Day</h2>
      <p style={p}>Ask the priests and they will tell you the stone face of Dhari Devi shifts through the day — a girl (<em>bal roop</em>) in the morning, a young woman by midday, an old woman by evening. It is a belief, not a measured physical change, and it is one of the shrine's most famous features. Alongside it runs another striking detail: only the <strong>upper half of the goddess</strong> is worshipped here. The <strong>lower half is at Kalimath</strong>, about 100 km away in Rudraprayag district, where she is worshipped as Kali. The two shrines together make one goddess — which is why devout pilgrims try to visit both.</p>
      <p style={p}>The shrine counts among the <strong>108 Shakta pithas</strong> named in the Devi Bhagavata, giving it weight well beyond its modest size. It is a small stone temple, not a grand one — and that plainness, with the river roaring underneath, is exactly its power.</p>

      <h2 style={h2}>Darshan Timings, Aarti &amp; Temple Rules</h2>
      <p style={p}>The temple is open through the year, roughly <strong>6:00 AM to 8:00 PM</strong>, with morning and evening aartis as the high points. If you can time it, come for the <strong>evening aarti</strong> — lamps, bells and the Alaknanda going gold at sunset is the memory people carry home. A few rules worth knowing before you go:</p>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Photography is prohibited</strong> inside the sanctum. Phones down at the idol — this is enforced.</li>
        <li style={{ marginBottom:8 }}>Devotees who have a wish fulfilled traditionally offer a <strong>bell</strong>; the premises are hung with hundreds of them.</li>
        <li style={{ marginBottom:8 }}>It is a short but real <strong>walk down and across the footbridge</strong> — wear proper shoes, and mind the steps in the wet.</li>
        <li style={{ marginBottom:8 }}>Prasad and offerings are sold at stalls on the highway above; buy there, not at the platform.</li>
      </ul>

      <h2 style={h2}>Best Time to Visit</h2>
      <p style={p}>Go <strong>March to June</strong> or <strong>September to November</strong> — pleasant weather, clear river views, safe roads. The temple is busiest and most alive during <strong>Chaitra Navratri</strong> (spring) and <strong>Ashwin/Sharad Navratri</strong> (autumn), when special pujas run and the shrine is decorated; if you want the atmosphere at full strength, come then and expect crowds. <strong>Avoid July–September</strong>: the monsoon brings landslides and road closures on this stretch, and in late August 2025 the swollen Alaknanda rose to touch the temple platform for the first time since 2013 — a reminder that this is a river shrine, and the river has the last word.</p>

      <h2 style={h2}>How to Reach Dhari Devi Temple</h2>
      <p style={p}>The temple sits right on the main Rishikesh–Rudraprayag–Badrinath road, so if you are doing Kedarnath or Badrinath you pass within sight of it. The last leg is always the same: reach <strong>Srinagar Garhwal</strong>, continue ~15 km on the Badrinath highway to the <strong>Kalyasaur</strong> board, then walk down and across the footbridge.</p>
      <h3 style={h3}>By road</h3>
      <p style={p}>From Delhi it is about 340–360 km via Haridwar, Rishikesh, Devprayag and Srinagar — a 9–10 hour drive, best broken with a night at Haridwar or Srinagar. Regular buses and shared taxis run Rishikesh → Srinagar → Rudraprayag and drop at the Kalyasaur stop; a private cab is far more comfortable for families and seniors, especially in monsoon.</p>
      <h3 style={h3}>By train</h3>
      <p style={p}>The nearest useful railheads are <strong>Rishikesh (~118 km)</strong> and <strong>Haridwar (~140 km)</strong>, both well connected from Delhi and beyond. From either, it is road the rest of the way.</p>
      <h3 style={h3}>By air</h3>
      <p style={p}>The nearest airport is <strong>Jolly Grant, Dehradun (~135 km)</strong>, with daily flights from Delhi, Mumbai, Bengaluru and Hyderabad. Take a taxi from there toward Srinagar.</p>

      <h2 style={h2}>Distance Chart to Dhari Devi Temple</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid var(--border)', minWidth:420 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['From','Distance','Drive time'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {DIST.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, color:'var(--teal)', fontWeight:700 }}>{r[1]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>What Else to See Nearby</h2>
      <p style={p}>Dhari Devi pairs naturally with a handful of stops on the same road. <strong>Koteshwar Mahadev</strong>, a Shiva cave temple by the Alaknanda, is about 3 km away. <strong>Srinagar Garhwal</strong> (15 km) has Kamleshwar Mahadev and an old bazaar. <strong>Rudraprayag</strong> (20 km) marks the sacred confluence of the Alaknanda and Mandakini. If you have a spare half-day, the hilltop <strong>Kartik Swami</strong> temple (~16 km, short trek) rewards you with one of the finest Himalayan viewpoints in Garhwal. And of course the road from here runs straight on to <Link href="/kedarnath-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Kedarnath</Link> and <Link href="/badrinath-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Badrinath</Link>.</p>

      <h2 style={h2}>Visiting Dhari Devi on Your Char Dham or Do Dham Yatra</h2>
      <p style={p}>Because she guards the four dhams and sits on the road everyone already drives, adding Dhari Devi costs you 30–40 minutes, not a day. On our <Link href="/char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham</Link> and <Link href="/do-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>Do Dham</Link> itineraries we build the Dhari Devi stop into the Srinagar–Rudraprayag leg, so you take her blessing before the climb to Kedarnath — the way pilgrims have done it for generations. If you only want the temple itself, a short 3N/4D Srinagar-based darshan trip from Haridwar covers it comfortably; tell us your dates and we will plan around them.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24, marginTop:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related on the route:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Char Dham Yatra',h:'/char-dham-yatra'},{l:'Do Dham Yatra',h:'/do-dham-yatra'},{l:'Kedarnath Temple',h:'/kedarnath-temple'},{l:'Badrinath Temple',h:'/badrinath-temple'},{l:'Char Dham Route Map',h:'/char-dham-yatra-route-map'},{l:'Places to Visit En Route',h:'/blog/places-to-visit-during-char-dham-yatra'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Add Dhari Devi to Your Yatra — We Plan the Whole Route</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Char Dham, Do Dham or a short Dhari Devi darshan trip · Direct Haridwar operator since 2010</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to include Dhari Devi Temple darshan in my Uttarakhand yatra.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:20, lineHeight:1.7 }}>
        Sources: <a href="https://pauri.nic.in/tourist-place/dhari-devi-temple/" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>District Pauri Garhwal (Govt. of Uttarakhand)</a>, <a href="https://en.wikipedia.org/wiki/Dhari_Devi" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Wikipedia — Dhari Devi</a>. Distances are road distances and vary slightly by route and source.
      </p>

      <div style={{ marginTop:32 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
