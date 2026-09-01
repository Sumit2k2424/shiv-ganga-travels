import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import { h2, h3, p } from "@/lib/prose";

export const metadata = {
  title: { absolute: `Harsil Valley Guide ${SITE.season} | Permits, Weather & Route | Gangotri` },
  description: `Harsil Valley on the Bhagirathi, 25 km before Gangotri — apple orchards, Gartang Gali, real permit rules, weather by month and the route from Haridwar.`,
  keywords: ['harsil valley','harsil valley travel guide','harsil valley best time to visit','how to reach harsil valley','harsil valley permit','gartang gali trek','mukhba village','dharali village harsil','harsil to gangotri distance','harsil valley weather','harsil valley uttarkashi','nelong valley permit'],
  alternates: { canonical: `${SITE.baseUrl}/harsil-valley` },
  openGraph: {
    title: 'Harsil Valley — Apple Orchards, Gartang Gali & the Road to Gangotri',
    description: 'The valley pilgrims drive through and never stop for. Apple orchards, a 150-year-old cliff trade route, real permit rules, and the Bhagirathi at 2,620m — 25 km before Gangotri.',
    url: `${SITE.baseUrl}/harsil-valley`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Harsil Valley, Uttarkashi — Bhagirathi River and apple orchards, Uttarakhand' }],
  },
  twitter: { card: 'summary_large_image', title: `Harsil Valley Guide ${SITE.season} — Permits, Weather & Route`, description: 'Apple orchards, Gartang Gali, real permit rules and the route from Haridwar — 25 km before Gangotri.', images: [{ url: '/opengraph-image', alt: 'Harsil Valley, Uttarakhand' }] },
};

const PAA = [
  { q:'Do I need a permit to visit Harsil Valley?', a:'No — not for Harsil itself. You will read on some sites that Harsil is an Army base camp requiring a permit; that was true before 2021, but the Ministry of Home Affairs lifted the Inner Line Permit requirement for Indian and foreign tourists visiting Harsil and Gangotri that year. Today a valid ID — Aadhaar, voter ID or passport — is all you need at the checkposts. The permit rule that still applies is for Nelong Valley, a separate cold-desert area 40–45 km beyond Harsil, which needs an actual Inner Line Permit from the Uttarkashi SDM office, for Indian nationals only, applied for a day or two in advance. Don’t confuse the two.' },
  { q:'What is the best time to visit Harsil Valley?', a:'April to June for apple blossom and open roads, or mid-September to November for harvest season and the clearest mountain views. Both are reliable windows. Avoid July to early September — the Uttarkashi–Harsil stretch of NH-108 takes landslides in the monsoon and the drive stops being enjoyable. December to March brings real snow and a hard quiet that some travellers love, but the road closes without warning after heavy snowfall, so build in slack.' },
  { q:'How far is Harsil from Gangotri, and how do I reach Harsil from Haridwar?', a:'Gangotri is 25 km beyond Harsil, about 45 minutes on the same road. From Haridwar, Harsil is roughly 250 km via Rishikesh, Tehri, Chamba and Uttarkashi — a 8–9 hour drive that most people break overnight at Uttarkashi (about 73 km short of Harsil) rather than push through in one day.' },
  { q:'What is Gartang Gali, and can anyone do the hike?', a:'It’s a 136-metre wooden stairway bolted into a sheer cliff above the Jadh Ganga, built more than 150 years ago by Pathan traders as part of the old India–Tibet trade route, and shut for public access from 1962 until its restoration reopened it to tourists. It is not a casual stroll: only 10 people are allowed on the walkway at a time, no running or bunching up, and you need reasonable fitness and a head for exposed heights. Most visitors do it as a 5 km round-trip hike of 2–3 hours from the Lanka Bridge access point near Harsil.' },
  { q:'Is Harsil open all year?', a:'Practically, no. The village itself doesn’t shut, but the approach road (NH-108) gets snowbound stretches after heavy winter falls, usually from late December into March, and can close without much notice. Most operators, us included, treat May to November as the reliable travel season and treat winter visits as weather-permitting only.' },
  { q:'Why is Harsil called Mini Switzerland?', a:'Because of the combination — snow-dusted peaks, deodar and pine forest, terraced apple orchards and a fast alpine river running through it. It is a fair nickname on a clear day, though the comparison flatters the roads more than the reality; this is still a mountain village, not a resort town.' },
  { q:'What is Mukhba village known for?', a:'It is the winter home of Goddess Ganga. When Gangotri Temple closes around Diwali, priests carry the idol down to the Mukhimath Temple in Mukhba, about 6 km from Harsil, where she is worshipped through the cold months until the dham reopens in spring.' },
  { q:'Is Nelong Valley open to tourists?', a:'Yes, but only to Indian nationals and only with an Inner Line Permit from the Uttarkashi SDM office, arranged a day or two in advance. It stayed closed to civilians from 1962 until relatively recently, which is part of why it still feels so untouched.' },
  { q:'What is Harsil rajma?', a:'A variety of kidney bean grown above 2,500m in the Uttarkashi hills. The altitude and cold give it a richer, denser flavour than rajma grown in the plains, and it is the one souvenir every local will tell you to carry home.' },
  { q:'Can I combine Harsil with my Char Dham or Gangotri Yatra?', a:'That is exactly how it should be done. Harsil sits directly on the Gangotri road, so it costs a night, not a detour — we build it into the Uttarkashi–Gangotri leg of our own Gangotri and Char Dham itineraries as a matter of course.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'TouristDestination',
    '@id':`${SITE.baseUrl}/harsil-valley#place`,
    name:'Harsil Valley',
    alternateName:['Harshil Valley','Harsil'],
    url:`${SITE.baseUrl}/harsil-valley`,
    description:'A high-altitude village on the Bhagirathi River in Uttarkashi district, Uttarakhand, at 2,620m, known for its apple orchards, deodar forests and the restored Gartang Gali cliffside trade route. Lies 25 km before Gangotri Temple on NH-108.',
    address:{ '@type':'PostalAddress', addressLocality:'Harsil', addressRegion:'Uttarakhand', postalCode:'249135', addressCountry:'IN' },
    geo:{ '@type':'GeoCoordinates', latitude:'30.9192', longitude:'78.7411', elevation:'2620' },
    touristType:['Pilgrim','Trekker','Nature traveller','Photographer'],
    hasMap:'https://www.google.com/maps?q=30.9192,78.7411',
    sameAs:['https://en.wikipedia.org/wiki/Harsil'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Uttarkashi district, Uttarakhand, India' },
    isPartOf:{ '@type':'TouristAttraction', name:'Gangotri Yatra', url:`${SITE.baseUrl}/gangotri-yatra` },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  },{
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Gangotri Yatra', item:`${SITE.baseUrl}/gangotri-yatra` },
      { '@type':'ListItem', position:3, name:'Harsil Valley', item:`${SITE.baseUrl}/harsil-valley` },
    ],
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const td = { padding:'10px 14px', borderBottom:'1px solid hsl(var(--border))', fontSize:14 };
const teal = { color:'var(--teal)', fontWeight:600 };

const FACTS = [
  ['Location', 'Harsil village, on NH-108, Uttarkashi district, Garhwal Himalaya'],
  ['Altitude', '2,620 m (8,600 ft)'],
  ['River', 'Bhagirathi'],
  ['Distance from Gangotri', '25 km (~45 min)'],
  ['Distance from Uttarkashi', '~73 km (2–3 hrs)'],
  ['Distance from Haridwar', '~250 km (8–9 hrs)'],
  ['Permit for Harsil itself', 'None — valid ID (Aadhaar/passport) only, since the 2021 order'],
  ['Permit for Nelong Valley', 'Required — Inner Line Permit from Uttarkashi SDM, Indian nationals only'],
  ['Season open', 'Roughly May–November; winter travel is weather-permitting'],
  ['Best time', 'April–June (blossom) or mid-Sep–Nov (harvest, clear views)'],
  ['Known for', 'Apple orchards, Gartang Gali, Mukhba (winter home of Ganga)'],
  ['Nearest railhead / airport', 'Rishikesh ≈244 km · Jolly Grant, Dehradun ≈244 km'],
];

const WEATHER = [
  ['Apr–Jun', '10–25°C day / 3–15°C night', 'Best window. Apple blossom, roads reliably open.'],
  ['Jul–early Sep', '12–20°C', 'Avoid if you can. Monsoon; landslide risk on the Uttarkashi–Harsil stretch.'],
  ['Mid-Sep–Nov', '10–20°C day / 2–10°C night', 'The other best window. Harvest season, clearest skies of the year.'],
  ['Dec–Mar', 'Below 0°C at night, occasional snow', 'Genuinely beautiful, genuinely unreliable. Road can close without much notice.'],
];

const TREKS = [
  ['Lama Top', 'Easy–moderate', '2–3 hrs, ~5 km round trip', 'Panoramic valley view; starts from Bagori'],
  ['Sattal (seven lakes)', 'Easy–moderate', '2–3 hrs, ~5 km round trip', 'Alpine lakes near Dharali'],
  ['Gartang Gali', 'Moderate (access-controlled)', '2–3 hrs, ~5 km round trip', '10 people on the walkway at a time'],
  ['Dayara Bugyal', 'Easy–moderate', '2–3 days', 'Alpine meadow, big Himalaya views'],
  ['Kedartal', 'Moderate–challenging', '4–5 days', 'High-altitude glacial lake, serious trek'],
];

const DIST = [
  ['Gangotri Temple', '25 km', '45 min'],
  ['Mukhba village', '~6 km', '15 min'],
  ['Dharali village', '~3 km', '10 min'],
  ['Gangnani hot springs', '~50 km', '1.5 hrs'],
  ['Uttarkashi town', '~73 km', '2–3 hrs'],
  ['Nelong Valley (gate)', '~40–45 km', '1.5–2 hrs (permit required)'],
  ['Rishikesh', '~244 km', '7–8 hrs'],
  ['Haridwar', '~250 km', '8–9 hrs'],
];

export default function HarsilValley() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🍎 25 km Before Gangotri</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Harsil Valley &mdash; Apple Orchards, Gartang Gali &amp; the Road to Gangotri</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>The valley most pilgrims drive straight through &mdash; updated {SITE.lastUpdated}</p>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>&rsaquo;</span>
        <Link href="/gangotri-yatra" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Gangotri Yatra</Link><span>&rsaquo;</span>
        <span>Harsil Valley</span>
      </div>
    </nav>

    <article style={{ maxWidth:820, margin:'0 auto', padding:'32px 20px 60px' }}>
      <BlogAuthor variant="top" author="dhanesh" article={{ slug:'harsil-valley', title:'Harsil Valley Guide 2026 — Permits, Weather & Route', description:'Harsil Valley on the Bhagirathi, 25 km before Gangotri — apple orchards, Gartang Gali, real permit rules, weather by month and the route from Haridwar.', datePublished:'2026-07-28', dateModified: SITE.lastUpdatedISO, lang:'en-IN' }} />

      <AnswerBox>
        Harsil Valley sits at <strong>2,620 m on the Bhagirathi River</strong> in Uttarkashi district, <strong>25 km before Gangotri</strong> on NH-108. It&rsquo;s known for apple orchards, deodar forest and <strong>Gartang Gali</strong>, a restored 150-year-old wooden cliff walkway. No permit is needed for Harsil itself &mdash; just valid ID &mdash; though the nearby Nelong Valley does require one. Best visited <strong>April&ndash;June or mid-September&ndash;November</strong>.
      </AnswerBox>

      <h2 style={h2}>The Valley Everyone Drives Past</h2>
      <p style={p}>Most people doing the Gangotri leg of the Char Dham see Harsil for about four minutes, through a windscreen, on the way to somewhere holier. That is a mistake, and it is an easy one to fix.</p>
      <p style={p}>The valley opens up after the long, winding climb from Uttarkashi: apple trees in neat terraces, deodar forest coming down to the water, and the Bhagirathi running fast and green under it all. It was Raj Kapoor&rsquo;s location for <em>Ram Teri Ganga Maili</em>, and once you see the light on the river here, you understand why. Stop for a night. It costs you almost nothing on the itinerary and it changes the whole trip.</p>

      <h2 style={h2}>Harsil Valley at a Glance</h2>
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

      <h2 style={h2}>Do You Need a Permit for Harsil?</h2>
      <p style={p}>No, and it is worth being direct about this because the internet disagrees with itself. Several sites will tell you Harsil is an Army base camp requiring a permit &mdash; that was true once, but the Ministry of Home Affairs <strong>lifted the Inner Line Permit requirement for both Indian and foreign tourists visiting Harsil and Gangotri in 2021</strong>. Today you need nothing more than a <strong>valid ID</strong> &mdash; Aadhaar, voter ID or passport &mdash; which gets checked at a couple of points along the road, standard practice this close to a border district.</p>
      <p style={p}>What does still need a real permit is <strong>Nelong Valley</strong>, the cold-desert area 40&ndash;45 km beyond Harsil, closed to civilians for 53 years after the 1962 war. That one is a genuine Inner Line Permit, issued by the <strong>Uttarkashi SDM office</strong>, available to <strong>Indian nationals only</strong>, applied for with photocopies of ID a day or two ahead. Harsil and Nelong Valley are two different destinations with two different rules &mdash; don&rsquo;t let a blog post that conflates them cost you a wasted trip to the SDM office for a place that never needed one.</p>

      <h2 style={h2}>Weather Month by Month &mdash; When to Actually Go</h2>
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
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>The road genuinely closes in a hard winter, sometimes for days at a stretch. If you are travelling December&ndash;March, build a buffer day into the plan and check road status before you leave Uttarkashi.</p>

      <h2 style={h2}>What to See &mdash; Villages, River &amp; Orchards</h2>
      <p style={p}>Harsil is really a cluster of small villages strung along the Bhagirathi, and each one earns a stop for a different reason.</p>
      <h3 style={h3}>Harsil village</h3>
      <p style={p}>The main settlement, with the Laxmi Narayan Temple and a small colourful market. This is your base for the night, and a slow evening walk along the river here, with the deodar shadows lengthening, is worth more than most of what you paid for the trip.</p>
      <h3 style={h3}>Mukhba &mdash; the winter home of Ganga</h3>
      <p style={p}>About 6 km from Harsil, Mukhba holds real spiritual weight: when Gangotri Temple closes for winter (around Diwali), the idol of Goddess Ganga is carried down and worshipped at the Mukhimath Temple here until the dham reopens in spring. If you are travelling outside the main yatra season, this is where the goddess actually is.</p>
      <h3 style={h3}>Dharali</h3>
      <p style={p}>A few kilometres on, known for its apple orchards and traditional wooden houses. Come in autumn and the whole village turns orange and gold with the harvest.</p>
      <h3 style={h3}>Bagori</h3>
      <p style={p}>Home to the Jadh Bhotiya community, with Hindu and Buddhist shrines sitting side by side and wooden architecture unlike anything else on the Char Dham route. Worth an hour if you have it.</p>

      <h2 style={h2}>Gartang Gali &mdash; The Cliffside Trade Route</h2>
      <p style={p}>This is the reason a lot of people now make the detour on purpose. <strong>Gartang Gali</strong> is a 136-metre wooden stairway bolted into a sheer granite cliff above the Jadh Ganga, built more than 150 years ago by Pathan traders from Peshawar as part of the old India&ndash;Tibet salt-and-wool trade route. The 7th-century Chinese pilgrim Hiuen Tsang is said to have passed this way, and the route later turned up in Heinrich Harrer&rsquo;s <em>Seven Years in Tibet</em>. After the 1962 war closed the border, it fell into disrepair and stayed shut for decades until a restoration reopened it to tourists.</p>
      <p style={p}>It is not a casual stroll. Access is controlled: <strong>only 10 people are allowed on the walkway at a time</strong>, no running, no bunching up, one metre of spacing, no smoking. Most visitors do it as a 5 km round trip from the Lanka Bridge access point, 2&ndash;3 hours, with real exposure to the drop below. Reasonable fitness and a head for heights matter more here than on most of the &ldquo;easy&rdquo; treks around Harsil.</p>

      <h2 style={h2}>Apple Country &mdash; and the Englishman Who Started It</h2>
      <p style={p}>Harsil grows some of the best apples in India, and the reason traces back to one man: <strong>Frederick &ldquo;Pahari&rdquo; Wilson</strong>, a British deserter who fled into these hills, made a fortune logging deodar, and was informally crowned the &ldquo;Raja of Harsil&rdquo; by locals. Wilson introduced apple and rajma cultivation to the valley in the 19th century, and both remain the local cash crop today &mdash; Harsil rajma in particular is worth carrying home.</p>
      <p style={p}>Time it right and the trip has two completely different faces: <strong>March&ndash;May</strong> for white and pink blossom across the terraces, or <strong>October</strong> for the harvest and the annual Harsil Apple Festival, when the whole valley smells like fruit.</p>

      <h2 style={h2}>What You&rsquo;ll Actually Notice at Harsil</h2>
      <p style={p}>The thing pilgrims say most often, after they finally stop for a night here instead of pushing straight to Gangotri, is that Harsil is the first place on the whole route where nobody is queuing for anything. No darshan line, no crowd control barrier, no loudspeaker. Just a river, a market street with painted wooden shopfronts, and apple trees everywhere you look.</p>
      <p style={p}>Evenings are the reason to stay. The temperature drops fast once the sun goes behind the ridge, woodsmoke starts coming off the homestay chimneys, and the Bhagirathi gets louder somehow in the dark. If you time it for September or October, ask your homestay host whether the orchard next door is picking that week &mdash; more often than not they will hand you an apple straight off the tree and refuse payment for it.</p>

      <h2 style={h2}>Where to Stay in Harsil</h2>
      <p style={p}>Accommodation here is modest by design &mdash; this is a working village, not a resort town &mdash; and that is part of the appeal.</p>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Homestays (₹1,000&ndash;₹2,500/night)</strong> &mdash; run by local Garhwali families, with home-cooked meals included. This is the experience worth having; book ahead in April&ndash;June and September&ndash;November.</li>
        <li style={{ marginBottom:8 }}><strong>GMVN Tourist Rest House (₹1,500&ndash;₹2,500/night)</strong> &mdash; the government-run option, basic but reliable, near Kalp Kedar Temple.</li>
        <li style={{ marginBottom:8 }}><strong>Riverside resorts (₹3,000&ndash;₹8,000/night)</strong> &mdash; a handful of nicer properties with Bhagirathi views for travellers who want more comfort after a long drive.</li>
        <li style={{ marginBottom:8 }}><strong>Carry cash.</strong> Card facilities are limited and the nearest ATM is in Uttarkashi, 73 km back the way you came.</li>
      </ul>

      <h2 style={h2}>Short Treks Around Harsil</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:520 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Trek','Difficulty','Time','Notes'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {TREKS.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, ...teal }}>{r[1]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[2]}</td>
                <td style={{ ...td, color:'#334155' }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>How to Reach Harsil Valley from Haridwar</h2>
      <p style={p}>Harsil sits on NH-108, the same road every Gangotri-bound pilgrim already takes. There is no separate detour to plan &mdash; you just decide whether to stop.</p>
      <h3 style={h3}>By road</h3>
      <p style={p}>From <strong>Haridwar it is roughly 250 km</strong> via Rishikesh, Tehri, Chamba and Uttarkashi &mdash; a genuine 8&ndash;9 hour drive. Almost nobody should try this in one push. The sane plan, and the one we build into our own Gangotri itineraries, is a night at <strong>Uttarkashi (about 73 km short of Harsil)</strong>, which splits the drive into two comfortable days and lets you see the Vishwanath Temple and the Nehru Institute of Mountaineering on the way through.</p>
      <h3 style={h3}>By train</h3>
      <p style={p}>The nearest railhead is <strong>Rishikesh (≈244 km)</strong>, well connected to Delhi. From the station it is road the rest of the way, ideally with the Uttarkashi overnight built in.</p>
      <h3 style={h3}>By air</h3>
      <p style={p}><strong>Jolly Grant Airport, Dehradun (≈244 km)</strong> is the nearest, with regular Delhi flights. Fuel up before you leave Uttarkashi &mdash; it is the last petrol pump before Harsil.</p>

      <h2 style={h2}>Distance Chart</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:420 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['From / To','Distance','Time'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {DIST.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, ...teal, fontWeight:700 }}>{r[1]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>Practical Notes Before You Go</h2>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Fuel up in Uttarkashi.</strong> There is no petrol pump between Uttarkashi and Harsil, and none beyond it either.</li>
        <li style={{ marginBottom:8 }}><strong>Mobile network is thin.</strong> BSNL works in patches; other carriers mostly don&rsquo;t. Tell family your plan before you lose signal, and download offline maps.</li>
        <li style={{ marginBottom:8 }}><strong>Pack proper layers even in summer.</strong> Days at 2,620m can hit 25°C; nights routinely fall into single digits.</li>
        <li style={{ marginBottom:8 }}><strong>Altitude sickness is rare here but not impossible.</strong> Drink more water than feels necessary on your first evening and take it slow if you feel light-headed.</li>
        <li style={{ marginBottom:8 }}><strong>Ask before photographing locals.</strong> This is a small, traditional village, not a tourist set.</li>
      </ul>

      <h2 style={h2}>Where It Is on the Map</h2>
      <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid hsl(var(--border))', marginBottom:10 }}>
        <iframe
          title="Harsil Valley location map — Uttarkashi, Uttarakhand"
          src="https://www.google.com/maps?q=30.9192,78.7411&hl=en&z=11&output=embed"
          width="100%" height="320" style={{ border:0, display:'block' }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>30.9192&deg; N, 78.7411&deg; E &middot; NH-108, Uttarkashi district, 25 km before Gangotri.</p>

      <h2 style={h2}>For Birdwatchers</h2>
      <p style={p}>Harsil sits inside what ornithologists recognise as an Important Bird Area, and it is the only known breeding site in the region for the <strong>Ibisbill</strong> &mdash; a strange, striking wader that needs exactly the kind of slow, stony, high-altitude river the Bhagirathi provides here. A 2023 biodiversity survey of the wider Gangotri landscape logged 203 bird species and 86 butterfly species, including the Himalayan Monal, Uttarakhand&rsquo;s state bird. Early morning along the riverside trails, before the day&rsquo;s traffic starts, is when you actually see any of this.</p>

      <h2 style={h2}>Food &mdash; What&rsquo;s Actually on the Table</h2>
      <p style={p}>Harsil food is homestay food, which is exactly the point. Expect Garhwali staples cooked simply: <strong>chainsoo</strong> (a black gram lentil curry ground down to a thick paste), <strong>kafuli</strong> (a spinach-and-fenugreek soup that turns up at almost every meal in autumn), <strong>aloo ke gutke</strong> (spiced pan-fried potatoes), and <strong>mandua roti</strong>, the local finger-millet flatbread that has more flavour than it has any right to. If a homestay offers <strong>trout</strong> caught fresh from the Bhagirathi that morning, take it. Finish with <strong>jhangora ki kheer</strong>, a barnyard-millet pudding that is sweeter and more interesting than it sounds.</p>

      <h2 style={h2}>Gangnani and the Road Beyond</h2>
      <p style={p}>About 50 km before Harsil on the way up, <strong>Gangnani</strong> is a natural hot spring stop that most people miss because they are watching the road, not the map. A short dip in the warm mineral water here is a genuinely good way to work the stiffness out of a long drive before you press on. If you have an extra half-day and the season is right, the trailhead for <strong>Dodital</strong> &mdash; a high-altitude lake with an old Ganesha temple on its bank &mdash; branches off further back toward Uttarkashi, though that one is a proper multi-hour trek, not a roadside stop.</p>

      <h2 style={h2}>Nelong Valley &mdash; the Permit-Only Extension</h2>
      <p style={p}>If Harsil has whetted your appetite for something starker, <strong>Nelong Valley</strong> is 40&ndash;45 km further on &mdash; bare rock, wind and a cold-desert terrain people call the &ldquo;Ladakh of Uttarakhand,&rdquo; closed to civilians from 1962 until relatively recently. This is the one place in the area that genuinely needs paperwork: an <strong>Inner Line Permit from the Uttarkashi SDM office</strong>, Indian nationals only, applied for with photocopied IDs a day or two before you go. Build that lead time in if it&rsquo;s on your list &mdash; it is not something you can arrange at the gate.</p>

      <h2 style={h2}>Fitting Harsil into Your Gangotri or Char Dham Yatra</h2>
      <p style={p}>Because it sits directly on the road, adding Harsil costs you a night, not a detour. On our <Link href="/gangotri-yatra" style={teal}>Gangotri Yatra</Link> and <Link href="/char-dham-yatra" style={teal}>Char Dham Yatra</Link> itineraries we build a Harsil overnight into the Uttarkashi&ndash;Gangotri leg &mdash; it also happens to be the smartest place to break the drive, so it costs nothing extra to do it well. If you want the full picture of the route first, our <Link href="/how-to-reach-gangotri" style={teal}>Gangotri route guide</Link> and <Link href="/char-dham-road-status" style={teal}>live road status page</Link> cover the rest of the drive in detail.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24, marginTop:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related on this route:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Gangotri Yatra Package',h:'/gangotri-yatra'},{l:'Uttarkashi Hotels',h:'/uttarkashi-hotels'},{l:'Gangotri Temple Guide',h:'/gangotri-temple'},{l:'How to Reach Gangotri',h:'/how-to-reach-gangotri'},{l:'Haridwar to Gangotri Cab',h:'/cabs/haridwar-to-gangotri-cab'},{l:'Char Dham Road Status',h:'/char-dham-road-status'},{l:'Do Dham Yatra',h:'/do-dham-yatra'},{l:'Teen Dham Yatra',h:'/teen-dham-yatra'},{l:'Devprayag Sangam',h:'/devprayag'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} &rarr;</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Add a Harsil Night to Your Gangotri Yatra</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Built into our Gangotri &amp; Char Dham itineraries &middot; Direct Haridwar operator since 2010</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to add a Harsil Valley night to my Gangotri / Char Dham Yatra.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:20, lineHeight:1.7 }}>
        Sources: <a href="https://en.wikipedia.org/wiki/Harsil" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Wikipedia &mdash; Harsil</a>, Ministry of Home Affairs 2021 order lifting the Inner Line Permit requirement for Harsil and Gangotri, Uttarkashi District Magistrate&rsquo;s office (Nelong Valley permit process), <a href="https://www.google.com/maps?q=30.9192,78.7411" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Google Maps</a> (coordinates and drive times). Distances are road distances and vary by route and source; road status changes seasonally &mdash; check before you travel.
      </p>

      <div style={{ marginTop:32 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
