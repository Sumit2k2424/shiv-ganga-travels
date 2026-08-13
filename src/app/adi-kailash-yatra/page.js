import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import { h2, p } from "@/lib/prose";

export const metadata = {
  title: { absolute: `Adi Kailash Yatra Package ${SITE.season} | Price Starts at ₹27,000 | Permit & Om Parvat` },
  description: `Adi Kailash Yatra ${SITE.season} — 7N/8D road package from Kathgodam, ₹27,000/person. Trusted operator, 15+ yrs experience, permit assistance & fixed departures.`,
  keywords: ['adi kailash yatra','adi kailash permit','how to reach adi kailash','adi kailash cost','adi kailash yatra itinerary','om parvat yatra','adi kailash best time to visit','chhota kailash yatra','adi kailash from haridwar','adi kailash inner line permit'],
  alternates: { canonical: `${SITE.baseUrl}/adi-kailash-yatra` },
  openGraph: {
    title: 'Adi Kailash Yatra — Permit, Route, Cost & Om Parvat',
    description: 'The primordial Kailash, inside Indian territory. Real permit steps, the road-vs-trek route, cost breakdown, and how to reach from Haridwar.',
    url: `${SITE.baseUrl}/adi-kailash-yatra`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Adi Kailash peak reflected in Parvati Sarovar, Pithoragarh, Uttarakhand' }],
  },
  twitter: { card: 'summary_large_image', title: `Adi Kailash Yatra ${SITE.season} — Permit, Route & Om Parvat Guide`, description: 'Real permit steps, road-vs-trek route, cost breakdown and the route from Haridwar.', images: [{ url: '/opengraph-image', alt: 'Adi Kailash, Uttarakhand' }] },
};

const PAA = [
  { q:'Do I need a permit for the Adi Kailash Yatra, and how do I get it?', a:'Yes — an Inner Line Permit (ILP) is mandatory for every Indian citizen, since the region sits in a restricted border zone near the India-Nepal-Tibet trijunction. It is issued at the SDM office in Dharchula, and can also be applied for online through the official Pithoragarh district portal. You will need a valid ID (Aadhaar plus a second proof like voter ID or passport), 3-4 passport-size photos, a medical fitness certificate from a registered doctor, and increasingly, police verification completed within the last 15 days. Most tour operators, us included, handle the paperwork once you send your documents — but the police verification step is worth starting early, since it is the one piece pilgrims most often leave too late.' },
  { q:'How much does the Adi Kailash Yatra actually cost?', a:'You will see numbers anywhere from ₹21,000 to over ₹1,50,000 quoted for what sounds like the same trip, and the spread is real, not a typo. A standard 7-9 day road package with shared accommodation and a fixed group departure runs roughly ₹27,000-45,000 per person. A self-drive or small-group adventure format can push past ₹60,000. Helicopter-assisted itineraries that skip several days of road travel start around ₹58,000 for a much shorter 4-day trip and climb well past ₹1,00,000 for full-service premium versions. Our own 7N/8D road package from Kathgodam is priced at ₹27,000 per person, on the value end of that range because we run it as a direct operator rather than through several layers of resellers.' },
  { q:'Is the Adi Kailash Yatra a trek or a road trip now?', a:'Mostly a road trip today. Before the Border Roads Organisation extended the Gunji-Lampiya Dhura Pass Road, this was a genuine 15-18 day trek covering roughly 75 km on foot. Now the route is largely motorable all the way to Gunji and on to Jolingkong, the base for Adi Kailash, and the whole yatra fits into 7-9 days. What is left on foot is short: a 2-4 km walk from Jolingkong to Parvati Sarovar and on to Gauri Kund, easy to moderate, at altitude. You will still see a wide "8-12 km" range quoted elsewhere — that usually includes the Gunji-Kuti-Jolingkong stretch some operators cover on foot rather than by jeep, depending on road conditions that year.' },
  { q:'What is the best time to visit Adi Kailash and Om Parvat?', a:'May to June, or mid-September to October. Both windows give stable weather and the clearest mountain views — September-October is specifically the best stretch for seeing the Om symbol on Om Parvat clearly, since fresh snow settles cleanly on the rock face. Avoid July-August: the monsoon brings landslide risk on the Pithoragarh-Dharchula-Gunji stretch, and several operators pause departures. The yatra is closed completely from November to April, when snow blocks the roads.' },
  { q:'How do I reach Adi Kailash from Haridwar?', a:'Budget 2-3 days of travel each way. From Haridwar it is roughly 185 km (5-6 hours) to Kathgodam, then a further 196 km (7-8 hours) on to Pithoragarh, 100-110 km (3-4 hours) to Dharchula for permits, and finally 70-71 km (about 4 hours) by 4x4 to Gunji, with the last 34 km to Jolingkong taking another 1.5-2 hours. Almost nobody attempts this in one push — the sane plan, and the one we build into our own itinerary, spreads it over three driving days with overnight stops at Pithoragarh and Dharchula.' },
  { q:'What is the difference between Adi Kailash and Om Parvat?', a:'Adi Kailash is the sacred pyramid-shaped peak itself, believed to be the first earthly abode of Lord Shiva and one of the five Panch Kailash. Om Parvat is a separate mountain nearby, near Nabhidhang, famous for snow that naturally settles into the shape of the "ॐ" symbol. Most yatra itineraries, including ours, visit both as part of the same trip, since they sit within a short drive of each other from the Gunji base.' },
  { q:'Can foreign nationals do the Adi Kailash Yatra?', a:'No, not currently. The Adi Kailash Yatra is open to Indian citizens only, because it passes through a restricted border area near the India-Nepal-Tibet trijunction. Foreign nationals, including Persons of Indian Origin and OCI cardholders, are not issued the Inner Line Permit for this route at present.' },
  { q:'Is there a weight or age limit?', a:'Age limits vary a little by source and by year, but the commonly cited range is a minimum of 9 years and a maximum of around 70, subject to a medical fitness certificate. There is no formal body-weight limit, but you should be in reasonably good physical condition — this is a high-altitude trip above 3,000m for several days running, and the permit process itself requires a doctor to sign off on your fitness.' },
  { q:'Is mobile network available en route?', a:'Barely, and only in patches. BSNL has some coverage in pockets around Gunji and Dharchula, but once you are past Dharchula, expect long stretches with no signal at all. Carry cash — ATMs and digital payments stop working reliably beyond Dharchula — and let family know your rough schedule before you lose signal, since tour operators typically carry satellite communication for genuine emergencies only.' },
  { q:'Can senior citizens do this yatra?', a:'Yes, with proper medical clearance and realistic expectations about the altitude. May-June tends to be the more forgiving window for older travellers, since the weather is more stable. The road-heavy nature of the modern route helps — there is far less walking than the old trekking version required — but the altitude itself, above 4,000m at several points, is the real factor, not fitness for walking. A frank conversation with your doctor before booking matters more than your age on paper.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'TouristAttraction',
    '@id':`${SITE.baseUrl}/adi-kailash-yatra#place`,
    name:'Adi Kailash',
    alternateName:['Chhota Kailash','Little Kailash','Baba Kailash'],
    url:`${SITE.baseUrl}/adi-kailash-yatra`,
    description:'A sacred pyramid-shaped peak at 5,945m in Pithoragarh district, Uttarakhand, believed to be the first earthly abode of Lord Shiva and one of the five Panch Kailash. Reached via Kathgodam, Pithoragarh, Dharchula and Gunji, with an Inner Line Permit required for the final stretch.',
    address:{ '@type':'PostalAddress', addressLocality:'Dharchula', addressRegion:'Uttarakhand', addressCountry:'IN' },
    geo:{ '@type':'GeoCoordinates', latitude:'30.3194', longitude:'80.6328', elevation:'5945' },
    touristType:['Pilgrim','Trekker','Photographer'],
    hasMap:'https://www.google.com/maps?q=30.3194,80.6328',
    sameAs:['https://en.wikipedia.org/wiki/Adi_Kailash'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Pithoragarh district, Uttarakhand, India' },
    isPartOf:{ '@type':'TouristTrip', name:'Adi Kailash + Om Parvat Yatra 7N/8D', url:`${SITE.baseUrl}/packages/adi-kailash-om-parvat-yatra-7n-8d` },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  },{
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Uttarakhand Tour Packages', item:`${SITE.baseUrl}/uttarakhand-tour-packages` },
      { '@type':'ListItem', position:3, name:'Adi Kailash Yatra', item:`${SITE.baseUrl}/adi-kailash-yatra` },
    ],
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const td = { padding:'10px 14px', borderBottom:'1px solid hsl(var(--border))', fontSize:14 };
const teal = { color:'var(--teal)', fontWeight:600 };

const FACTS = [
  ['Location', 'Pithoragarh district, Kumaon Himalaya — near the India-Nepal-Tibet trijunction'],
  ['Altitude', '5,945 m (19,505 ft)'],
  ['Also known as', 'Chhota Kailash, Little Kailash, Baba Kailash'],
  ['Significance', 'The Primordial Kailash — first earthly abode of Shiva & Parvati, one of the 5 Panch Kailash'],
  ['Base town', 'Dharchula (permit office here)'],
  ['Yatra base camp', 'Gunji / Nabi (3,200 m)'],
  ['Last motorable point', 'Jolingkong (~4,500-4,800 m, sources vary)'],
  ['Permit', 'Inner Line Permit mandatory — Indian citizens only'],
  ['Yatra season', 'Mid-May to October (closed Nov-April)'],
  ['Typical duration', '7-9 days road-based (was 15-18 days trek before the road)'],
  ['Typical cost', '₹27,000-70,000 per person, road-based packages'],
  ['Nearest railhead / airport', 'Kathgodam · Pantnagar (both ~270-310 km from Dharchula)'],
];

const WEATHER = [
  ['May – June', '5-18°C day / -2-5°C night', 'Best window. Snow melting, roads open, pleasant.'],
  ['July – August', '6-14°C', 'Avoid if possible. Monsoon, landslide risk on the Dharchula-Gunji stretch.'],
  ['September – October', '-2-14°C day / -10--2°C night', 'The other best window. Clearest Om Parvat views of the year.'],
  ['November – April', '-15-5°C', 'Closed. Heavy snow, roads blocked, villages evacuated.'],
];

const ROUTE = [
  ['Haridwar → Kathgodam', '~185 km', '5-6 hrs', 'Plains driving, good highway'],
  ['Kathgodam → Pithoragarh', '~196 km', '7-8 hrs', 'Via Almora, Kainchi Dham, Jageshwar Dham'],
  ['Pithoragarh → Dharchula', '~100-110 km', '3-4 hrs', 'Hilly terrain, permit town'],
  ['Dharchula → Gunji/Nabi', '~70-71 km', '~4 hrs', '4x4 required, permit checkpoint'],
  ['Gunji → Jolingkong (Adi Kailash base)', '~34 km', '1.5-2 hrs', '4x4 only, last motorable stretch'],
];

const COST = [
  ['Standard road package (7-9 days)', '₹27,000 – ₹33,800', 'Shared group departure, hotels/homestays, permits and meals included'],
  ['Self-drive / small-group adventure', '₹55,000 – ₹65,000', 'Own vehicle or small convoy, more flexible schedule'],
  ['Helicopter-assisted (4-5 days)', '₹58,000 – ₹80,000', 'Skips several road days, shorter overall trip'],
  ['Premium / fully customised', '₹80,000 – ₹1,50,000+', 'Deluxe stays, private vehicles, dedicated guide'],
];

export default function AdiKailashYatra() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🏔️ Panch Kailash · Inside India — No Passport Needed</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Adi Kailash Yatra — Permit, Route, Cost &amp; Om Parvat</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>The primordial Kailash, entirely within Indian territory — updated {SITE.lastUpdated}</p>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>&rsaquo;</span>
        <Link href="/uttarakhand-tour-packages" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Uttarakhand Tour Packages</Link><span>&rsaquo;</span>
        <span>Adi Kailash Yatra</span>
      </div>
    </nav>

    <article style={{ maxWidth:820, margin:'0 auto', padding:'32px 20px 60px' }}>
      <BlogAuthor variant="top" author="dhanesh" article={{ slug:'adi-kailash-yatra', title:'Adi Kailash Yatra 2026 — Permit, Route & Om Parvat Guide', description:'Adi Kailash Yatra: real Inner Line Permit steps, the road-vs-trek route from Kathgodam, Om Parvat, cost, and how to reach from Haridwar.', datePublished:'2026-07-28', dateModified: SITE.lastUpdatedISO, lang:'en-IN' }} />

      <AnswerBox>
        Adi Kailash is a sacred peak at <strong>5,945 m</strong> in Pithoragarh district, believed to be the first earthly abode of Shiva and Parvati &mdash; one of the five <strong>Panch Kailash</strong>, and unlike Mount Kailash in Tibet, reachable entirely within India, <strong>no passport needed</strong>. An <strong>Inner Line Permit</strong> is mandatory, issued at Dharchula. The yatra now runs largely by road via Kathgodam and Pithoragarh, taking <strong>7-9 days</strong>, best done <strong>May-June or September-October</strong>.
      </AnswerBox>

      <h2 style={h2}>The Kailash You Don't Need a Passport For</h2>
      <p style={p}>Every year, thousands of pilgrims plan for years to attempt the Kailash Mansarovar Yatra in Tibet &mdash; the visas, the altitude, the sheer logistics of crossing into China. Fewer know that a peak believed to be Shiva's <em>first</em> earthly home sits entirely inside Indian territory, a few days' drive from Haridwar.</p>
      <p style={p}>Adi Kailash bears a genuine resemblance to Mount Kailash &mdash; the same pyramid silhouette, the same sense of a mountain that doesn't belong to the ordinary landscape around it. For decades this region was closed to civilians after the 1962 war with China. Road improvements over the last several years have reopened it, and what used to be a gruelling 15-18 day trek is now, for most pilgrims, a well-organised road journey with a short walk at the end.</p>

      <h2 style={h2}>Adi Kailash at a Glance</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))' }}>
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

      <h2 style={h2}>The Inner Line Permit — What You Actually Need</h2>
      <p style={p}>This is the one step that trips people up more than the altitude does. Because the route runs through a restricted border zone, every Indian citizen needs an <strong>Inner Line Permit (ILP)</strong> before going past Dharchula. It's issued at the <strong>SDM office in Dharchula</strong>, and can also be applied for in advance through the official Pithoragarh district portal &mdash; a detail most guides to this yatra skip entirely.</p>
      <p style={p}>You'll need a valid government ID (Aadhaar plus a second proof such as a voter ID or passport), <strong>3-4 passport-size photographs</strong>, and a <strong>medical fitness certificate</strong> from a registered doctor. Increasingly, operators also ask for <strong>police verification completed within the last 15 days</strong> &mdash; the single most commonly missed requirement, because most pilgrims don't think to arrange it until they're already packing. Start that piece early.</p>
      <p style={p}>On age: you'll see a minimum of 9 years and a maximum of 70 quoted most often, though the exact figures shift slightly by source and by year, so treat it as a close guide rather than a fixed rule and confirm the current-season cutoff when you register. <strong>Foreign nationals, including OCI cardholders, are not currently permitted</strong> on this yatra at all &mdash; it is open to Indian citizens only. Most tour operators, including us, handle the permit paperwork once you send your documents, but the police verification timeline is worth starting the moment you decide to go.</p>

      <h2 style={h2}>The Legend — Panch Kailash, Parvati Sarovar &amp; the Pandava Connection</h2>
      <p style={p}>According to the Skanda Purana, Adi Kailash was the <strong>first</strong> earthly residence of Lord Shiva &mdash; the name "Adi" itself means primordial, or first. It's one of five sacred peaks together called the <strong>Panch Kailash</strong>: Adi Kailash here in Uttarakhand, Kinnaur Kailash and Srikhand Kailash in Himachal Pradesh, Manimahesh Kailash also in Himachal, and Mount Kailash itself in Tibet. Local tradition holds that Shiva and Parvati rested here during their celestial travels, and that this is where their divine union was blessed.</p>
      <p style={p}>At the mountain's base lies <strong>Parvati Sarovar</strong>, also called Jolingkong Lake or Gauri Kund &mdash; an emerald glacial lake believed to be a miniature version of the real Mansarovar in Tibet, where Goddess Parvati is said to have meditated. A small temple to Shiva and Parvati stands on its shore, and on a clear morning the peak reflects in the water almost perfectly.</p>
      <p style={p}>The route also carries its own layer of Mahabharata lore. The village of <strong>Kuthi</strong>, along the way, is said to take its name from "kutia" (hut) &mdash; local belief holds that the sage Vyasa lived here while composing the epic, and that the ruined fort nearby was built by the Pandavas during their exile. Nearby, <strong>Bheem ki Kheti</strong> ("Bheem's Field") marks a spot where Bheem is said to have tilled the land with his own strength &mdash; a detail almost none of the competing guides to this yatra mention, but one that adds real texture to the walk from Gunji.</p>

      <h2 style={h2}>Road or Trek? What the Yatra Actually Involves Today</h2>
      <p style={p}>This distinction matters more than almost anything else when you're deciding whether this trip is for you. Before the Border Roads Organisation extended the <strong>Gunji-Lampiya Dhura Pass Road</strong>, reaching Adi Kailash meant a genuine 15-18 day trek covering roughly 75 km on foot. That version of the yatra barely exists anymore.</p>
      <p style={p}>Today the route is largely motorable all the way to <strong>Jolingkong</strong>, the last point a 4x4 can reach, and the whole yatra &mdash; permits, acclimatisation, darshan and return &mdash; fits into <strong>7-9 days</strong>. What's left on foot is short and specific: a <strong>2-4 km walk from Jolingkong to Parvati Sarovar and on to Gauri Kund</strong>, rated easy to moderate. You'll see a wider "8-12 km" figure quoted on a few sites &mdash; that usually folds in the Gunji-Kuti-Jolingkong stretch some operators still cover partly on foot depending on that year's road conditions, not a separate trekking requirement layered on top.</p>

      <h2 style={h2}>How to Reach Adi Kailash from Haridwar</h2>
      <p style={p}>Every published route guide for this yatra benchmarks distances from Delhi. Since we're a Haridwar-based operator, here's the leg that actually matters if that's where your trip starts.</p>
      <div style={{ overflowX:'auto', marginBottom:10 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:560 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Leg','Distance','Time','Notes'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {ROUTE.map((r,i)=>(
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
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>That's roughly 490 km and 3 driving days from Haridwar to Gunji. Almost nobody should attempt this in one push &mdash; spread it over overnight stops at Pithoragarh and Dharchula, which is exactly how we build our own itinerary.</p>
      <p style={p}>The nearest railway station is <strong>Kathgodam</strong>, well connected to Delhi, and the nearest airport is <strong>Pantnagar</strong>, both roughly 270-310 km from Dharchula depending on the exact route measured. From either, the road journey above picks up from Kathgodam onward.</p>

      <h2 style={h2}>Cost of the Adi Kailash Yatra — Reconciling the Numbers</h2>
      <p style={p}>Search around and you'll find quoted prices anywhere from ₹21,000 to over ₹1,50,000 for what looks like the same trip, with almost nobody explaining why the range is so wide. It isn't a typo &mdash; it's four genuinely different products wearing the same name.</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))' }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Package type','Typical cost','What you get'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {COST.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, ...teal, fontWeight:700 }}>{r[1]}</td>
                <td style={{ ...td, color:'#334155', fontSize:13 }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={p}>Our own <Link href="/packages/adi-kailash-om-parvat-yatra-7n-8d" style={teal}>Adi Kailash + Om Parvat Yatra, 7N/8D from Kathgodam</Link>, is priced at <strong>₹27,000 per person</strong> &mdash; on the value end of the standard road-package range, because we run it directly rather than through several layers of resellers, and it already includes the Inner Line Permit processing.</p>

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
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>A sunny 14&deg;C afternoon can fall to below freezing within hours after sunset &mdash; don't judge your packing by the daytime forecast alone.</p>

      <h2 style={h2}>Om Parvat &amp; What Else to See En Route</h2>
      <p style={p}><strong>Om Parvat</strong>, near Nabhidhang, is where snow naturally settles into the shape of the sacred "ॐ" symbol on the rock face &mdash; a genuine, photographed phenomenon, not a trick of the light, best seen in September-October when fresh snow sits cleanest on the mountain. It's a separate peak from Adi Kailash itself, reached by a short drive from the Gunji base, and almost every itinerary, ours included, visits both in the same trip.</p>
      <p style={p}>Along the way: <strong>Gunji</strong>, a Bhotia village at 3,200m and the last major halt before the high-altitude stretch; <strong>Kuthi</strong>, tied to the Vyasa and Pandava legends above; the <strong>Kali Temple</strong> in Dharchula, overlooking the river that forms the India-Nepal border; and <strong>Narayan Ashram</strong>, a quiet spiritual retreat about 40 km from Gunji, known for its wildflowers.</p>

      <h2 style={h2}>Where to Stay &amp; What to Eat</h2>
      <p style={p}>Accommodation gets progressively simpler as you climb. Kathgodam, Pithoragarh and Dharchula all have proper hotels and guesthouses with hot water. <strong>Gunji</strong> steps down to homestays and government rest houses &mdash; basic, clean, multiple-sharing, with blankets provided. At <strong>Jolingkong and Nabhidhang</strong>, it's tented camps with sleeping bags and eco-toilets; there's no room heating anywhere past Dharchula, so warm layers matter more than the room you're booked into.</p>
      <p style={p}>Food on the yatra itself is simple, pure vegetarian and repeated by design: dal-chawal-roti, seasonal vegetable curry, parathas for breakfast, Maggi and chai throughout the day, and a warm soup at the higher camps in the evening. Before or after the high-altitude stretch, look for Kumaoni specialities in Pithoragarh or Almora &mdash; <strong>aloo ke gutke</strong> (spiced fried potatoes), <strong>bhatt ki churkani</strong> (black soybean curry), <strong>gahat ki dal</strong> (horse gram lentil soup), <strong>mandua roti</strong>, and <strong>bal mithai</strong>, the region's well-known sweet.</p>

      <h2 style={h2}>Health &amp; Who Should Think Twice</h2>
      <p style={p}>This is a genuine high-altitude trip, with several nights above 3,000m and daytime stops well past 4,000m. Build in acclimatisation &mdash; at least one night each at Dharchula and Gunji before pushing higher &mdash; drink more water than feels necessary, and dress in layers, since the swing between a sunny afternoon and a freezing night is dramatic and fast. Headache, nausea and dizziness are early signs of altitude sickness; descend if they worsen rather than pushing through.</p>
      <p style={p}>People with serious heart or lung conditions, uncontrolled blood pressure or diabetes, pregnant women, and anyone recently recovering from surgery or serious illness are generally advised not to attempt this yatra. A frank conversation with your doctor before booking, not after, is the right order of operations here.</p>

      <h2 style={h2}>Sample 8-Day Itinerary from Kathgodam</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))' }}>
          <tbody>
            {[
              ['Day 1', 'Kathgodam → Pithoragarh (~196 km, via Jageshwar Dham)'],
              ['Day 2', 'Pithoragarh → Dharchula (~100-110 km) — permit processing'],
              ['Day 3', 'Dharchula → Gunji/Nabi (~70-71 km) — acclimatisation'],
              ['Day 4', 'Gunji → Jolingkong → Adi Kailash & Parvati Sarovar darshan → Gunji'],
              ['Day 5', 'Gunji → Om Parvat (Nabhidhang) darshan → Gunji'],
              ['Day 6', 'Gunji → Dharchula (descent)'],
              ['Day 7', 'Dharchula → Chaukori (scenic drive, tea gardens)'],
              ['Day 8', 'Chaukori → Kathgodam — departure'],
            ].map(([day,desc],i)=>(
              <tr key={day} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)', width:'18%' }}>{day}</td>
                <td style={{ ...td, color:'#334155' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>Add a day at Gunji for extra acclimatisation, or a night at Patal Bhuvaneshwar's cave temple near Chaukori, if your schedule allows.</p>

      <h2 style={h2}>What to Pack</h2>
      <p style={p}>Layers matter more than any single heavy item. A short list that covers what most first-timers get wrong: thermal base layers plus a down jacket for camp nights, a windproof outer shell (it's the wind at Nabhidhang and Jolingkong that bites, not just the cold), sturdy trekking shoes broken in well before the trip, UV-protection sunglasses (snow glare at this altitude is intense even on a cloudy day), a torch or headlamp, a personal medical kit with any prescription medicine plus basic altitude-sickness tablets after a doctor's sign-off, and cash in small denominations &mdash; ATMs and digital payments stop working reliably past Dharchula.</p>

      <h2 style={h2}>Nearby Places Worth the Detour</h2>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Jageshwar Dham</strong> — one of the 12 Jyotirlingas, 124 ancient stone temples in a deodar forest, on the road between Kathgodam and Pithoragarh.</li>
        <li style={{ marginBottom:8 }}><strong>Pithoragarh</strong> — the district headquarters, nicknamed "Little Kashmir" for its Himalayan views; worth a stop at Pithoragarh Fort and Chandak Hill.</li>
        <li style={{ marginBottom:8 }}><strong>Chaukori</strong> — sunrise and sunset views over Nanda Devi and Panchachuli, plus tea gardens; a natural acclimatisation stop on the return leg.</li>
        <li style={{ marginBottom:8 }}><strong>Patal Bhuvaneshwar</strong> — a mystical underground limestone cave temple near Chaukori, with naturally formed Shivlings.</li>
      </ul>

      <h2 style={h2}>Where It Is on the Map</h2>
      <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid hsl(var(--border))', marginBottom:10 }}>
        <iframe
          title="Adi Kailash region location map — Pithoragarh, Uttarakhand"
          src="https://www.google.com/maps?q=30.3194,80.6328&hl=en&z=9&output=embed"
          width="100%" height="320" style={{ border:0, display:'block' }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>30.3194&deg; N, 80.6328&deg; E &middot; Pithoragarh district, near the India-Nepal-Tibet trijunction.</p>

      <h2 style={h2}>Booking Your Adi Kailash Yatra</h2>
      <p style={p}>Because the permit process, acclimatisation schedule and 4x4 logistics all have to line up correctly, this isn't a yatra most people should try to piece together solo on a first attempt. Our <Link href="/packages/adi-kailash-om-parvat-yatra-7n-8d" style={teal}>Adi Kailash + Om Parvat Yatra, 7N/8D</Link> handles the Inner Line Permit paperwork, builds in proper acclimatisation nights at Dharchula and Gunji, and covers both Adi Kailash and Om Parvat in one trip from Kathgodam.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24, marginTop:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Adi Kailash + Om Parvat Yatra Package',h:'/packages/adi-kailash-om-parvat-yatra-7n-8d'},{l:'Uttarakhand Tour Packages',h:'/uttarakhand-tour-packages'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} &rarr;</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Plan Your Adi Kailash Yatra</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Permit paperwork handled &middot; Acclimatisation built in &middot; Direct Haridwar operator since 2010</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan an Adi Kailash Yatra. Please share details.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:20, lineHeight:1.7 }}>
        Sources: <a href="https://en.wikipedia.org/wiki/Adi_Kailash" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Wikipedia &mdash; Adi Kailash</a>, the official Pithoragarh district Inner Line Permit portal, kumaon.gov.in, <a href="https://www.google.com/maps?q=30.3194,80.6328" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Google Maps</a> (coordinates and drive times). One source in our competitive review (triptotemples.com) returned only a generic homepage with no Adi Kailash-specific content and was excluded from analysis. Distances, permit rules and costs shift by season — confirm current figures at booking.
      </p>

      <div style={{ marginTop:32 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
