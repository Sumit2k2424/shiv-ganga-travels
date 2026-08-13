import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import { h2, h3, p } from "@/lib/prose";

export const metadata = {
  title: { absolute: `Surkanda Devi Temple ${SITE.season} | Timings, Ropeway & Route | Dhanaulti` },
  description: 'Surkanda Devi Temple near Dhanaulti — timings, ropeway fare, trek. Trusted operator, 15+ yrs experience, customizable itinerary & instant confirmation.',
  keywords: ['surkanda devi temple','surkanda devi temple timings','surkanda devi ropeway price','how to reach surkanda devi temple','surkanda devi temple trek','surkanda devi temple from haridwar','kaddukhal to surkanda devi','surkanda devi temple near dhanaulti','surkanda devi temple near mussoorie','shakti peeth triangle uttarakhand'],
  alternates: { canonical: `${SITE.baseUrl}/surkanda-devi-temple` },
  openGraph: {
    title: 'Surkanda Devi Temple — Timings, Ropeway & the Road from Kaddukhal',
    description: 'A Shakti Peeth on a fogbound ridge above Dhanaulti. Real temple timings, ropeway fare, the trek from Kaddukhal, and how to reach from Haridwar.',
    url: `${SITE.baseUrl}/surkanda-devi-temple`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Surkanda Devi Temple ridge near Dhanaulti, Tehri Garhwal, Uttarakhand' }],
  },
  twitter: { card: 'summary_large_image', title: `Surkanda Devi Temple ${SITE.season} — Timings, Ropeway & Route Guide`, description: 'Real timings, ropeway fare, the Kaddukhal trek and how to reach from Haridwar.', images: [{ url: '/opengraph-image', alt: 'Surkanda Devi Temple, Uttarakhand' }] },
};

const PAA = [
  { q:'What are the correct timings for Surkanda Devi Temple?', a:'The temple is open from 5 AM to 7 PM in summer and 7 AM to 5 PM in winter. You will see one widely-copied guide claim it stays open until 10 PM in summer — that figure does not hold up against independent sources and is almost certainly a copy-paste error, since there is no lighting on an exposed ridge reached by a mountain trek. The ropeway, which is a separate service, runs on its own schedule: roughly 8 AM to 6 PM in summer and 9 AM to 5 PM in winter. Don’t confuse the two when you’re planning your day.' },
  { q:'How much does the Surkanda Devi ropeway cost?', a:'Budget roughly ₹110 for a one-way ticket and ₹200–225 for a round trip, though you will find numbers as low as ₹100 and as high as ₹250 quoted across different sources and dates. Tickets are sold only at the counter in Kaddukhal — there is no online booking — so treat any figure you read, including this one, as an estimate and confirm it on arrival.' },
  { q:'How do I reach Surkanda Devi Temple from Haridwar?', a:'It is about 89 km, roughly 3–4 hours by road via Rishikesh, Narendra Nagar, Chamba and Dhanaulti to Kaddukhal, the last motorable point. From there it is a 1.5–2 km trek or a short ropeway ride to the temple itself. Most of the drive is on decent hill roads; the final stretch past Mussoorie is winding but scenic.' },
  { q:'Is the trek to Surkanda Devi Temple difficult?', a:'It’s a moderate steep ascent — about 1.5–2 km from Kaddukhal, taking 1.5–2.5 hours depending on fitness and how many rest stops you take. It is manageable for most reasonably fit adults and older children. If you’d rather skip the climb, the 502-metre ropeway (running since April 2022) covers the same ground in a few minutes and is the sensible choice for senior citizens or anyone with mobility concerns.' },
  { q:'Can I stay overnight at Surkanda Devi Temple?', a:'No — there is no accommodation at the temple itself, and overnight stays on the ridge are not permitted. Everyone who visits stays down in Dhanaulti (8 km), Kanatal (24 km) or Mussoorie (34–40 km) and drives or treks up for the day. This is one of the more consistently missed facts across guides to this temple, so plan your night’s stay before you arrive at Kaddukhal, not after.' },
  { q:'What is the Shakti Peeth Triangle?', a:'It’s the informal name for three Shakti Peethas within a couple of hours of each other in the Garhwal hills: Surkanda Devi (where the head of Sati is believed to have fallen), Chandrabadni (the torso, near Tehri) and Kunjapuri (the feet, near Rishikesh). Pilgrims doing a longer Garhwal circuit sometimes visit all three as one spiritual loop.' },
  { q:'Which goddess is Surkanda Devi?', a:'Surkanda Devi is a form of Goddess Sati, the first wife of Lord Shiva — not Parvati, despite what one or two lower-quality guides claim. The temple marks one of the 51 Shakti Peethas, the sites where, according to the legend, pieces of Sati’s body fell as Shiva carried her in grief across the subcontinent. At Surkanda, it is said to be her head.' },
  { q:'Is Surkanda Devi Temple open all year?', a:'Yes, the temple itself doesn’t close for the season the way the high Char Dham shrines do. Winter brings cold, fog and occasional snow on the ridge, which can make the trek slippery, but the temple stays accessible. The genuinely difficult window to avoid is the monsoon (July–August), when the approach roads are prone to landslides.' },
  { q:'What is the best time to see the Ganga Dusshera festival at the temple?', a:'Ganga Dusshera is celebrated every year between May and June, and it’s the busiest, most festive time to visit — expect real crowds, decorations, and local fairs around the temple. If you’d rather have a quieter darshan, aim for September to November instead, when the weather is just as good and the ridge is far less crowded.' },
  { q:'How far is Surkanda Devi from Mussoorie?', a:'About 34–40 km, roughly 2–2.5 hours by road via Landour and Dhanaulti. It’s an easy add-on if you’re already spending a couple of days in Mussoorie — several of our own Mussoorie tour packages already route through Kaddukhal for exactly this reason.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'HinduTemple',
    '@id':`${SITE.baseUrl}/surkanda-devi-temple#place`,
    name:'Surkanda Devi Temple',
    alternateName:['Surkanda Devi Mandir','Sirkhanda Devi Temple'],
    url:`${SITE.baseUrl}/surkanda-devi-temple`,
    description:'A Shakti Peeth temple dedicated to Goddess Surkanda Devi, a form of Sati, at 2,756m on a ridge above Kaddukhal in Tehri Garhwal district, Uttarakhand. Reached by a 1.5–2km trek or ropeway from Kaddukhal, 8km from Dhanaulti.',
    address:{ '@type':'PostalAddress', addressLocality:'Kaddukhal', addressRegion:'Uttarakhand', postalCode:'249175', addressCountry:'IN' },
    geo:{ '@type':'GeoCoordinates', latitude:'30.4114', longitude:'78.2886', elevation:'2756' },
    touristType:['Pilgrim','Trekker','Family','Nature traveller'],
    hasMap:'https://www.google.com/maps?q=30.4114,78.2886',
    sameAs:['https://en.wikipedia.org/wiki/Surkanda_Devi'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Tehri Garhwal district, Uttarakhand, India' },
    isPartOf:{ '@type':'TouristAttraction', name:'Uttarakhand Tour Packages', url:`${SITE.baseUrl}/uttarakhand-tour-packages` },
    openingHoursSpecification:[
      { '@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens:'05:00', closes:'19:00', validFrom:'2026-04-01', validThrough:'2026-10-31' },
      { '@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens:'07:00', closes:'17:00', validFrom:'2026-11-01', validThrough:'2027-03-31' },
    ],
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  },{
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Uttarakhand Tour Packages', item:`${SITE.baseUrl}/uttarakhand-tour-packages` },
      { '@type':'ListItem', position:3, name:'Surkanda Devi Temple', item:`${SITE.baseUrl}/surkanda-devi-temple` },
    ],
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const td = { padding:'10px 14px', borderBottom:'1px solid hsl(var(--border))', fontSize:14 };
const teal = { color:'var(--teal)', fontWeight:600 };

const FACTS = [
  ['Location', 'Kaddukhal, on the Mussoorie-Chamba road, Tehri Garhwal district, Garhwal Himalaya'],
  ['Altitude', '2,756 m (9,042 ft)'],
  ['Deity', 'Goddess Surkanda Devi (a form of Sati)'],
  ['Significance', 'One of the 51 Shakti Peethas — the head of Sati is said to have fallen here'],
  ['Distance from Dhanaulti', '8 km (20–30 min)'],
  ['Distance from Mussoorie', '34–40 km (2–2.5 hrs)'],
  ['Distance from Haridwar', '~89 km (3–4 hrs)'],
  ['Trek from Kaddukhal', '1.5–2 km, 1.5–2.5 hrs, moderate ascent'],
  ['Ropeway', '502 m, running since April 2022, up to 500 people/hr'],
  ['Entry fee', 'Free (ropeway is a separate paid ticket)'],
  ['Accommodation at temple', 'None — no overnight stay on the ridge'],
  ['Best time', 'March–June or September–November'],
];

const WEATHER = [
  ['Mar–Jun', '8–25°C day / 2–12°C night', 'Best window. Ganga Dusshera falls in May–June — expect crowds then.'],
  ['Jul–Aug', '15–20°C', 'Avoid if you can. Monsoon; heavy rain, fog and landslide risk on the approach roads.'],
  ['Sep–Nov', '6–18°C day / 2–10°C night', 'The quieter best window. Clear skies, autumn colour, far fewer crowds than summer.'],
  ['Dec–Feb', '0–8°C day, below 0°C at night', 'Cold and foggy, occasional snow. The trek gets slippery — the ropeway is the sensible choice.'],
];

const NEARBY = [
  ['Dhanaulti', '8 km', '20–30 min', 'Eco Park, deodar forest, the nearest base for the night'],
  ['Kanatal', '24 km', '~1 hr', 'Quieter pine-forest hill village, camping, less crowded than Mussoorie'],
  ['Chamba', '22 km', '~1 hr', 'Scenic town on the way, Tehri Dam viewpoints nearby'],
  ['Mussoorie', '34–40 km', '2–2.5 hrs', 'Mall Road, Kempty Falls, Gun Hill, Lal Tibba'],
  ['Tehri Dam / Tehri Lake', '~41 km', '1.5–2 hrs', 'Water sports — jet ski, boating, banana rides'],
  ['Dehradun', '~70 km', '2–3 hrs', 'Nearest railway station and airport town'],
];

const DIST = [
  ['Haridwar', '~89 km', '3–4 hrs', 'Haridwar → Rishikesh → Narendra Nagar → Chamba → Dhanaulti → Kaddukhal'],
  ['Rishikesh', '~80 km', '2–3 hrs', 'Rishikesh → Narendra Nagar → Chamba → Dhanaulti → Kaddukhal'],
  ['Dehradun', '~70 km', '2–3 hrs', 'Dehradun → Mussoorie → Dhanaulti → Kaddukhal'],
  ['Mussoorie', '34–40 km', '2–2.5 hrs', 'Mussoorie → Landour → Dhanaulti → Kaddukhal'],
  ['Delhi', '~290 km', '7–8 hrs', 'Delhi → Meerut → Roorkee → Dehradun → Mussoorie → Dhanaulti → Kaddukhal'],
];

export default function SurkandaDeviTemple() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>⛰️ Shakti Peeth · 2,756m Ridge</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Surkanda Devi Temple — Timings, Ropeway &amp; the Road from Kaddukhal</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>A fogbound ridge shrine above Dhanaulti — updated {SITE.lastUpdated}</p>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>&rsaquo;</span>
        <Link href="/uttarakhand-tour-packages" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Uttarakhand Tour Packages</Link><span>&rsaquo;</span>
        <span>Surkanda Devi Temple</span>
      </div>
    </nav>

    <article style={{ maxWidth:820, margin:'0 auto', padding:'32px 20px 60px' }}>
      <BlogAuthor variant="top" author="dhanesh" article={{ slug:'surkanda-devi-temple', title:'Surkanda Devi Temple 2026 — Timings, Ropeway & Route Guide', description:'Surkanda Devi Temple near Dhanaulti: real timings, ropeway fare, the Kaddukhal trek, and how to reach from Haridwar, Rishikesh or Mussoorie.', datePublished:'2026-07-28', dateModified: SITE.lastUpdatedISO, lang:'en-IN' }} />

      <AnswerBox>
        Surkanda Devi Temple sits at <strong>2,756 m on a ridge above Kaddukhal</strong>, 8 km from Dhanaulti in Tehri Garhwal. It is open <strong>5 AM&ndash;7 PM in summer and 7 AM&ndash;5 PM in winter</strong> &mdash; not the 10 PM closing some guides repeat. Reach it by a <strong>1.5&ndash;2 km trek</strong> from Kaddukhal or the <strong>502 m ropeway</strong> running since 2022. There is no accommodation at the temple and no overnight stay allowed on the ridge.
      </AnswerBox>

      <h2 style={h2}>The Head of the Goddess, on a Ridge Above the Fog</h2>
      <p style={p}>Surkanda Devi is one of those temples that shows up as a footnote in a dozen Mussoorie and Dhanaulti itineraries and rarely gets a guide of its own. That is a strange gap, because it is one of the more accessible Shakti Peethas in the Himalaya &mdash; a couple of hours off the Mussoorie-Chamba road, not a multi-day pilgrimage &mdash; and the view from the ridge, when the fog lifts, runs from Bandarpoonch and Swargarohini in the north to the whole of the Doon Valley in the south.</p>
      <p style={p}>The name comes from &ldquo;Sirkhanda,&rdquo; meaning head, and the story behind it is one of the oldest in Hindu mythology &mdash; more on that below. What most visitors actually want to know first is simpler: when is it open, what does the ropeway cost, and how do you get there from wherever you are. So we&rsquo;ll start with those.</p>

      <h2 style={h2}>Surkanda Devi Temple at a Glance</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))' }}>
          <tbody>
            {FACTS.map(([k,v]) => (
              <tr key={k}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)', width:'40%' }}>{k}</td>
                <td style={{ ...td, color:'#334155' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>Temple Timings, Ropeway Hours &amp; Price — Getting the Facts Straight</h2>
      <p style={p}>This is worth being direct about, because the ranking guides for this temple disagree with each other. One widely-cited pillar guide states the temple is open until <strong>10 PM in summer</strong>. Cross-checked against multiple independent sources, that figure doesn&rsquo;t hold up &mdash; the consistent, verifiable answer is that <strong>Surkanda Devi Temple is open 5 AM&ndash;7 PM in summer and 7 AM&ndash;5 PM in winter</strong>. A ridge temple reached by a mountain trek, with no lighting installed, simply doesn&rsquo;t stay open past dusk, and 7 PM lines up with when the light actually fails on that ridge.</p>
      <p style={p}>Separately, the <strong>ropeway runs its own schedule</strong> &mdash; roughly 8 AM to 6 PM in summer and 9 AM to 5 PM in winter &mdash; and none of the competing guides bother to point out that these are two different sets of hours. If you&rsquo;re planning to ride up late in the afternoon, check the ropeway window, not the temple window, or you may reach Kaddukhal to find the cabin service has already stopped for the day even though the temple is technically still open.</p>
      <p style={p}>On price: figures for the ropeway swing anywhere from <strong>₹100 to ₹250</strong> depending on which guide you read and when it was written. The steadiest numbers put a <strong>one-way ticket around ₹110</strong> and a <strong>round trip around ₹200&ndash;225</strong>, with tickets sold only at the Kaddukhal counter &mdash; there is no online booking. Treat any number you read, including this one, as an estimate and confirm it when you buy.</p>

      <h2 style={h2}>The Legend — Sati, Shiva&rsquo;s Tandava and the Shakti Peeth Triangle</h2>
      <p style={p}>The story goes back to Daksha, the Puranic king who disapproved of his daughter Sati&rsquo;s marriage to Shiva and held a grand yagna without inviting either of them. Sati went anyway, was publicly humiliated when Daksha insulted Shiva in front of the assembled gods, and in her grief and rage threw herself into the sacrificial fire.</p>
      <p style={p}>When Shiva learned of it, he lifted her body and began the Tandava, the cosmic dance of destruction, wandering the heavens in a grief so total that the other gods feared it would unmake creation itself. Vishnu followed him and, using the Sudarshan Chakra, cut Sati&rsquo;s body into pieces so Shiva could finally stop. Wherever a piece fell, a Shakti Peetha was born &mdash; 51 of them across the subcontinent, by the traditional count. At Surkanda, it is said, <strong>her head came to rest</strong>, and it is not the only Shakti Peetha within reach of this one temple.</p>
      <p style={p}>Surkanda Devi is part of what locals and guides call the <strong>Shakti Peeth Triangle</strong> (or Devi Darshan Triangle): Surkanda (the head), <strong>Chandrabadni</strong> near Tehri (the torso), and <strong>Kunjapuri</strong> near Rishikesh (the feet). Pilgrims doing a longer Garhwal circuit sometimes visit all three as one trip &mdash; worth knowing if a single darshan at Surkanda leaves you wanting the rest of the story.</p>
      <p style={p}>One correction worth making plainly: this is a temple to <strong>Sati, not Parvati</strong>. At least one low-quality directory listing for this temple gets the goddess wrong, which is the kind of error that&rsquo;s easy to repeat if you&rsquo;re working from a template rather than the actual mythology.</p>

      <h2 style={h2}>Trek or Ropeway — Choosing Your Ascent from Kaddukhal</h2>
      <p style={p}>Every route to the temple funnels through <strong>Kaddukhal</strong>, a small village on the Mussoorie&ndash;Chamba road and the last point a vehicle can reach. From there you have two options, and which one suits you depends more on time and fitness than on anything else.</p>
      <h3 style={h3}>The trek</h3>
      <p style={p}>A well-defined path of <strong>1.5&ndash;2 km</strong>, taking <strong>1.5&ndash;2.5 hours</strong> depending on pace, climbing steadily through deodar, oak and rhododendron forest. It&rsquo;s a moderate ascent &mdash; manageable for most reasonably fit adults, harder going for young children or anyone with knee trouble. There are resting points along the way, and local vendors sell tea and snacks at a couple of spots. Horses are available for hire if walking the whole way isn&rsquo;t an option. Start early &mdash; by 7&ndash;8 AM &mdash; both to beat the afternoon fog and to avoid the crowd that builds up by midday, especially around festival dates.</p>
      <h3 style={h3}>The ropeway</h3>
      <p style={p}>Running since <strong>April 2022</strong>, the 502-metre cable car covers the same ascent in a few minutes and can move up to 500 people an hour. It&rsquo;s the sensible choice for senior citizens, families with small children, or anyone who&rsquo;d rather spend their energy on the darshan than the climb. Tickets are counter-only at Kaddukhal, and given the swing in reported prices across other guides, budget a little flexibility into what you expect to pay.</p>

      <h2 style={h2}>Best Time to Visit, Month by Month</h2>
      <div style={{ overflowX:'auto', marginBottom:10 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:480 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Window','Temperature','What to know'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {WEATHER.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[1]}</td>
                <td style={{ ...td, color:'#334155' }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>The temple is covered in fog for much of the year, which is part of its character but also means visibility on the ridge can vanish without warning &mdash; keep that in mind if you&rsquo;re trekking rather than riding the ropeway.</p>

      <h2 style={h2}>What You&rsquo;ll Actually Notice at Surkanda</h2>
      <p style={p}>The thing that catches most first-time visitors off guard is how quickly the weather changes on that ridge. You can start the trek in clear sun and reach the temple in a wall of cloud, or the reverse &mdash; the fog burning off just as you arrive to reveal the entire Doon Valley laid out below. Locals treat this as completely ordinary. It is, understandably, the whole reason people come back.</p>
      <p style={p}>The temple itself is modest &mdash; simple Himalayan architecture, no grand gopuram, nothing that photographs like a postcard &mdash; and that plainness is part of what makes the place feel real rather than staged for tourists. Among the deodar and the <strong>Rounsli trees</strong> considered sacred here, with prayer bells cutting through the fog, it earns its reputation as one of the more atmospheric Shakti Peethas in the state, ropeway or no ropeway.</p>

      <h2 style={h2}>Nearby Places &amp; Where to Stay</h2>
      <p style={p}>There is <strong>no accommodation at the temple</strong>, and staying overnight on the ridge isn&rsquo;t permitted &mdash; a fact that only one of the competing guides for this temple bothers to state clearly. Everyone who visits bases themselves down in Dhanaulti, Kanatal or Mussoorie and comes up for the day.</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:520 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Place','Distance','Time','Why go'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {NEARBY.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, ...teal, fontWeight:700 }}>{r[1]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[2]}</td>
                <td style={{ ...td, color:'#334155' }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Dhanaulti (₹800–₹8,000/night)</strong> — the closest base, 8 km from Kaddukhal, with everything from budget guesthouses to resorts. Book ahead in peak season; options here are limited.</li>
        <li style={{ marginBottom:8 }}><strong>Kanatal (₹2,500–₹7,000/night)</strong> — a quieter pine-forest alternative, 24 km out, with a couple of camps if you want a bonfire evening.</li>
        <li style={{ marginBottom:8 }}><strong>Mussoorie (₹800–₹20,000+/night)</strong> — the widest range of options, 34–40 km away, worth it if you want to combine the temple with Mall Road and Gun Hill.</li>
      </ul>

      <h2 style={h2}>Food — What&rsquo;s Actually on the Table</h2>
      <p style={p}>The temple has basic refreshment stalls and not much else, so most meals happen down in Dhanaulti or Mussoorie. Look for the Garhwali staples while you&rsquo;re in the area: <strong>chainsoo</strong> (a thick black gram lentil curry), <strong>kafuli</strong> (spinach and fenugreek, cooked down to a warming green curry), <strong>aloo ke gutke</strong> (spiced pan-fried potatoes) and <strong>mandua roti</strong>, the local finger-millet flatbread. In Mussoorie you&rsquo;ll also find the usual hill-station staples — momos, Maggi points and small cafés along Mall Road — but the Garhwali dhabas in Dhanaulti are the more honest meal.</p>

      <h2 style={h2}>How to Reach Surkanda Devi Temple</h2>
      <p style={p}>Every route converges on Kaddukhal via Dhanaulti. Realistic drive times, not just the raw kilometre count, matter more here than on flatter routes — the roads past Mussoorie are winding.</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:560 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['From','Distance','Time','Route'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {DIST.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, ...teal, fontWeight:700 }}>{r[1]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[2]}</td>
                <td style={{ ...td, color:'#334155', fontSize:12.5 }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 style={h3}>By air</h3>
      <p style={p}>The nearest airport is <strong>Jolly Grant, Dehradun (~88 km)</strong>, with regular Delhi flights. From there it&rsquo;s about 2.5&ndash;3 hours by taxi to Kaddukhal.</p>
      <h3 style={h3}>By train</h3>
      <p style={p}>The nearest railway station is <strong>Dehradun (~63 km)</strong>, well connected to Delhi by the Shatabdi and Jan Shatabdi Express services. From the station it&rsquo;s a further 1.5&ndash;2 hours by road via Mussoorie and Dhanaulti.</p>

      <h2 style={h2}>Where It Is on the Map</h2>
      <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid hsl(var(--border))', marginBottom:10 }}>
        <iframe
          title="Surkanda Devi Temple location map — Kaddukhal, Tehri Garhwal"
          src="https://www.google.com/maps?q=30.4114,78.2886&hl=en&z=12&output=embed"
          width="100%" height="320" style={{ border:0, display:'block' }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>30.4114&deg; N, 78.2886&deg; E &middot; Kaddukhal, Tehri Garhwal district — 8 km from Dhanaulti, 35 km from Mussoorie.</p>

      <h2 style={h2}>Sample Itineraries</h2>
      <h3 style={h3}>Day trip from Haridwar or Dehradun</h3>
      <p style={p}>Leave by 7 AM, reach Kaddukhal by late morning via Dhanaulti, trek or ropeway up, spend an hour at the temple, and start back down by early afternoon to avoid the fog rolling in. You can be back in Dehradun by evening, or push on to Haridwar with a later return.</p>
      <h3 style={h3}>2N/3D combo with Mussoorie and Tehri Lake</h3>
      <p style={p}>Night one in Mussoorie for Mall Road and Gun Hill, night two in Dhanaulti or Kanatal after the Surkanda Devi darshan, with a stop at Tehri Lake for boating or jet-skiing on the way back down. This is close to how several of our existing Uttarakhand packages already route the trip — see below.</p>

      <h2 style={h2}>Practical Notes Before You Go</h2>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Carry cash.</strong> ATMs are limited in Dhanaulti and Kaddukhal; withdraw what you need in Dehradun or Mussoorie first.</li>
        <li style={{ marginBottom:8 }}><strong>Wear proper trekking shoes</strong> if you&rsquo;re walking up — the path is well-defined but steep, and can be slippery after rain.</li>
        <li style={{ marginBottom:8 }}><strong>Dress modestly</strong> and remove footwear before entering the temple; photography may be restricted inside the sanctum.</li>
        <li style={{ marginBottom:8 }}><strong>Start early.</strong> Fog rolls in most afternoons — an early morning darshan gives you the best chance of a clear view.</li>
        <li style={{ marginBottom:8 }}><strong>Network is patchy</strong> once you&rsquo;re past Dhanaulti — tell someone your plan before you lose signal.</li>
      </ul>

      <h2 style={h2}>Fitting Surkanda Devi into Your Mussoorie or Dhanaulti Trip</h2>
      <p style={p}>This temple already shows up as a stop in several of our existing Uttarakhand itineraries — the Mussoorie–Rishikesh–Kanatal circuit, the Tehri Lake and Kanatal weekend, and the longer Chopta/Badrinath route all route through Kaddukhal for exactly this darshan. If you&rsquo;re coming up via our <Link href="/cabs/haridwar-to-mussoorie-cab" style={teal}>Haridwar to Mussoorie cab</Link>, <Link href="/cabs/rishikesh-to-mussoorie-cab" style={teal}>Rishikesh to Mussoorie cab</Link> or <Link href="/cabs/dehradun-to-mussoorie-cab" style={teal}>Dehradun to Mussoorie cab</Link>, adding a Surkanda Devi detour via Dhanaulti costs a couple of hours, not a full extra day.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24, marginTop:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related on this route:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Uttarakhand Tour Packages',h:'/uttarakhand-tour-packages'},{l:'Haridwar to Mussoorie Cab',h:'/cabs/haridwar-to-mussoorie-cab'},{l:'Rishikesh to Mussoorie Cab',h:'/cabs/rishikesh-to-mussoorie-cab'},{l:'Dehradun to Mussoorie Cab',h:'/cabs/dehradun-to-mussoorie-cab'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} &rarr;</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Add Surkanda Devi to Your Mussoorie or Dhanaulti Trip</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Already built into our Mussoorie &amp; Tehri Lake itineraries &middot; Direct Haridwar operator since 2010</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to add a Surkanda Devi Temple visit to my Mussoorie / Dhanaulti trip.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:20, lineHeight:1.7 }}>
        Sources: <a href="https://en.wikipedia.org/wiki/Surkanda_Devi" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Wikipedia &mdash; Surkanda Devi</a>, independent temple-timing sources cross-checked for the correct opening hours, Tehri district tourism department (Rounsli trees, biodiversity), <a href="https://www.google.com/maps?q=30.4114,78.2886" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Google Maps</a> (coordinates and drive times). Distances are road distances and vary by route and source; ropeway prices change over time — confirm at the counter.
      </p>

      <div style={{ marginTop:32 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
