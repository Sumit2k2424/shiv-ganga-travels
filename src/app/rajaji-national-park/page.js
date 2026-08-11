import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: { absolute: 'Rajaji National Park Safari 2026 | Zones, Fees & Timings' },
  description: 'Rajaji National Park jungle safari — entry fees, zones, tiger sightings. Trusted operator, 15+ yrs experience, instant confirmation.',
  keywords: ['rajaji national park','rajaji national park safari','rajaji national park entry fee','rajaji national park timings','rajaji national park zones','chilla range safari','rajaji national park booking','rajaji national park from haridwar','rajaji national park from rishikesh','rajaji tiger reserve','best time to visit rajaji national park'],
  alternates: { canonical: `${SITE.baseUrl}/rajaji-national-park` },
  openGraph: {
    title: 'Rajaji National Park Safari — Zones, Fees, Timings & How to Book',
    description: 'A tiger reserve and elephant corridor 8 km from Rishikesh. Real entry fees, zone comparison, booking steps and how to reach from Haridwar.',
    url: `${SITE.baseUrl}/rajaji-national-park`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Jeep safari inside Rajaji National Park, Uttarakhand' }],
  },
  twitter: { card: 'summary_large_image', title: 'Rajaji National Park Safari 2026 — Zones, Fees & Timings', description: 'Real entry fees, zone comparison, booking steps and the route from Haridwar.', images: [{ url: '/opengraph-image', alt: 'Rajaji National Park, Uttarakhand' }] },
};

const PAA = [
  { q:'What are the entry fees for Rajaji National Park in 2026?', a:'Budget roughly ₹150–200 per person for Indian visitors and ₹600–800 for foreign visitors for a safari of about 3 hours, plus a Gypsy hire charge of around ₹3,500 (₹3,800 for the Gohri range), a vehicle entry fee of ₹250–300 (Indian) or ₹500 (foreign), and a guide fee of ₹800 for a general guide or ₹1,200–1,800 for an experienced wildlife or bird guide. Fees are set by the forest department and do shift year to year, so treat these as a close estimate and confirm at booking.' },
  { q:'What is the best safari zone to choose — Chilla, Motichur, Ranipur or Gohri?', a:'Chilla is the easiest first choice if you’re coming from Rishikesh — it’s the closest gate, has the most safari traffic, and is the strongest zone for elephant and hornbill sightings. Motichur and Ranipur (bundled with Mohand under the Chillawali range) offer a quieter, less-crowded alternative with similar terrain. Gohri is the specialist’s choice — open nearly year-round (except August–September) and best for Goral sightings and twilight birdwatching. Jhilmil Zone, open mid-October to July, is the one to pick specifically for swamp deer and wild elephants.' },
  { q:'How do I book a Rajaji National Park safari?', a:'The forest department runs an online booking portal where you pick your zone (Chilla, Motichur, Ranipur or Jhilmil), choose a date and a morning or evening slot, select a vehicle, enter visitor details, and pay online — then print the permit and report at the gate about 20 minutes before your slot. On-the-spot booking at the gate is also possible, but during peak season (weekends, October–March) Gypsies sell out, so booking ahead is the safer bet. We handle this end-to-end when you book a safari through us.' },
  { q:'When is Rajaji National Park open, and what are the timings?', a:'The park is open from 15 November to 15 June and closed through the monsoon (mid-June to mid-November). Within the season, safaris run twice a day: roughly 6–9 AM and 3–6 PM from March to October, shifting to about 7–10 AM and 2:30–5:30 PM in the colder months of November to February. The Gohri range is the exception — it stays open through most of the year except August and September.' },
  { q:'How do I reach Rajaji National Park from Haridwar or Rishikesh?', a:'The Chilla Gate, the most-used entry point, is about 8 km from Rishikesh and roughly 20 km from Haridwar — 20–40 minutes by road either way. Motichur and Ranipur gates sit closer to Dehradun and Haridwar. Whichever gate you’re booked into, arrive by taxi or your own vehicle at least 30 minutes before your slot to complete permit formalities.' },
  { q:'Can I actually see a tiger at Rajaji?', a:'It’s possible but not guaranteed — Rajaji became Uttarakhand’s second tiger reserve in 2015, and the population, while growing, is still small compared to Corbett’s. Most visitors go home having seen elephants, deer, langurs and a strong variety of birds rather than a tiger. Treat a tiger sighting as a genuine bonus, not the point of the trip, and you won’t be disappointed.' },
  { q:'Is Rajaji National Park good for elephants?', a:'Yes — this is Rajaji’s real headline draw. Estimates for the park’s Asian elephant population range from around 350 to over 600, and it sits at the northwestern edge of the species’ range in India, making it one of the more reliable places in the country to see wild elephants, often in herds, from a safari jeep.' },
  { q:'Which zone is best for birdwatching?', a:'Chilla and Gohri both stand out. Chilla alone has recorded 3 species of hornbill, 9 species of woodpecker, 5 species of barbet and 4 species of kingfisher, and the park overall counts over 300 recorded bird species. Gohri is particularly good at twilight. If birding is your main reason for visiting, mention it when you book — some guides specialise in it.' },
  { q:'Is the Beatles Ashram inside Rajaji National Park?', a:'Yes — the Chaurasi Kutia ashram where the Beatles stayed in 1968, now popularly called the Beatles Ashram, falls within the Rajaji Tiger Reserve boundary and has its own separate entry fee (around ₹150). It’s a short, easy add-on if you’re already in Rishikesh, though it’s a heritage/graffiti-art visit rather than part of the jungle safari itself.' },
  { q:'Can I visit Rajaji National Park during monsoon?', a:'No — the park closes completely from mid-June to mid-November for the monsoon season, both for visitor safety on the flooded forest tracks and to give the wildlife an undisturbed breeding period. Plan any Rajaji visit for the November–June window, and if you can, aim for the cooler months either side of the peak summer heat in April–May.' },
];

function Schema() {
  const ld = [{
    '@context':'https://schema.org','@type':'TouristAttraction',
    '@id':`${SITE.baseUrl}/rajaji-national-park#place`,
    name:'Rajaji National Park',
    alternateName:['Rajaji Tiger Reserve','Rajaji National Park Chilla Range'],
    url:`${SITE.baseUrl}/rajaji-national-park`,
    description:'A national park and tiger reserve of 820 sq km across the Shivalik foothills of Haridwar, Dehradun and Pauri Garhwal districts, Uttarakhand. Known for Asian elephants, tigers, leopards and 300+ bird species, with safari zones at Chilla, Motichur, Ranipur, Gohri and Jhilmil.',
    address:{ '@type':'PostalAddress', addressLocality:'Chilla Range', addressRegion:'Uttarakhand', addressCountry:'IN' },
    geo:{ '@type':'GeoCoordinates', latitude:'29.9667', longitude:'78.2333' },
    touristType:['Wildlife enthusiast','Birdwatcher','Family','Photographer'],
    hasMap:'https://www.google.com/maps?q=29.9667,78.2333',
    sameAs:['https://en.wikipedia.org/wiki/Rajaji_National_Park'],
    containedInPlace:{ '@type':'AdministrativeArea', name:'Haridwar, Dehradun and Pauri Garhwal districts, Uttarakhand, India' },
    isPartOf:{ '@type':'TouristAttraction', name:'Rishikesh Tour Packages', url:`${SITE.baseUrl}/rishikesh-tour-packages` },
  },{
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, acceptedAnswer:{ '@type':'Answer', text:x.a } })),
  },{
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Rishikesh Tour Packages', item:`${SITE.baseUrl}/rishikesh-tour-packages` },
      { '@type':'ListItem', position:3, name:'Rajaji National Park', item:`${SITE.baseUrl}/rajaji-national-park` },
    ],
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(ld) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:34 };
const h3 = { fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:600, color:'var(--navy)', marginBottom:8, marginTop:20 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };
const td = { padding:'10px 14px', borderBottom:'1px solid hsl(var(--border))', fontSize:14 };
const teal = { color:'var(--teal)', fontWeight:600 };

const FACTS = [
  ['Location', 'Haridwar, Dehradun & Pauri Garhwal districts, Shivalik foothills, Uttarakhand'],
  ['Core area', '820 sq km (~1,075 sq km with buffer)'],
  ['Established', '1983 as a national park; 2015 as Uttarakhand’s 2nd tiger reserve'],
  ['Named after', 'C. Rajagopalachari ("Rajaji"), freedom fighter and India’s last Governor-General'],
  ['Known for', 'Asian elephants (est. 350–600+), tigers, leopards, 300+ bird species'],
  ['Nearest gate to Rishikesh', 'Chilla Gate, ~8 km'],
  ['Nearest gate to Haridwar', 'Chilla or Ranipur, ~20 km'],
  ['Open season', '15 November – 15 June (closed for monsoon)'],
  ['Entry fee (Indian)', '₹150–200 per person / visit'],
  ['Entry fee (Foreign)', '₹600–800 per person / visit'],
  ['Safari duration', 'About 3 hours per session'],
  ['Best time', 'March–April for elephants; Nov–Feb for cooler comfortable safaris'],
];

const ZONES = [
  ['Chilla', 'Closest to Rishikesh (~8 km)', 'Elephants, hornbills, first-timers', 'Busiest, best-connected gate'],
  ['Motichur', 'Near Dehradun/Haridwar side', 'Quieter alternative to Chilla', 'Similar terrain, fewer crowds'],
  ['Ranipur', 'Near Haridwar', 'Quieter alternative to Chilla', 'Bundled with Mohand/Chillawali range'],
  ['Gohri', 'Open ~year-round (not Aug–Sep)', 'Goral (mountain goat), twilight birding', 'Best for dedicated birders'],
  ['Jhilmil', 'Open mid-Oct to July-end', 'Swamp deer, wild elephants', 'A distinct wetland zone, separate ticket'],
];

const FEES = [
  ['Entry (Indian)', '₹150–200 / person / ~3-hr visit'],
  ['Entry (Foreign)', '₹600–800 / person / ~3-hr visit'],
  ['Gypsy hire (Chilla/Motichur/Ranipur)', '~₹3,500 for the vehicle'],
  ['Gypsy hire (Gohri)', '~₹3,800 for the vehicle'],
  ['Jhilmil Zone entry', '₹200 (Indian) / ₹800 (foreign), separate ticket'],
  ['Vehicle entry fee', '₹250–300 (Indian) / ₹500 (foreign)'],
  ['Guide (general)', '~₹800'],
  ['Guide (experienced wildlife/bird)', '₹1,200–1,800'],
  ['Still camera', 'Free (Indian) / ~₹50 (foreign)'],
];

const TIMINGS = [
  ['March – October (summer slots)', '6:00 AM – 9:00 AM', '3:00 PM – 6:00 PM'],
  ['November – February (winter slots)', '7:00 AM – 10:00 AM', '2:30 PM – 5:30 PM'],
];

const DIST = [
  ['Rishikesh → Chilla Gate', '~8 km', '20–30 min'],
  ['Haridwar → Chilla Gate', '~20 km', '30–40 min'],
  ['Haridwar → Ranipur/Motichur Gate', '~15–20 km', '30–40 min'],
  ['Dehradun → Motichur Gate', '~15 km', '30 min'],
  ['Delhi → Rishikesh/Haridwar (then to gate)', '~230 km', '5–6 hrs'],
];

export default function RajajiNationalPark() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🐘 Tiger Reserve · 8km from Rishikesh</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Rajaji National Park — Safari Zones, Fees, Timings &amp; How to Book</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>An elephant corridor and tiger reserve right on the Rishikesh doorstep — updated {SITE.lastUpdated}</p>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>&rsaquo;</span>
        <Link href="/rishikesh-tour-packages" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Rishikesh Tour Packages</Link><span>&rsaquo;</span>
        <span>Rajaji National Park</span>
      </div>
    </nav>

    <article style={{ maxWidth:820, margin:'0 auto', padding:'32px 20px 60px' }}>
      <BlogAuthor variant="top" author="sumit" article={{ slug:'rajaji-national-park', title:'Rajaji National Park Safari 2026 — Zones, Fees & Timings', description:'Rajaji National Park jungle safari: entry fees, Chilla/Motichur/Ranipur zones, booking steps, elephant and tiger sightings, and the route from Haridwar.', datePublished:'2026-07-28', dateModified: SITE.lastUpdatedISO, lang:'en-IN' }} />

      <AnswerBox>
        Rajaji National Park is an 820 sq km tiger reserve across the Shivalik foothills, with its busiest gate, <strong>Chilla</strong>, just <strong>8 km from Rishikesh</strong>. Entry runs <strong>₹150&ndash;200 for Indians, ₹600&ndash;800 for foreigners</strong>, plus a Gypsy hire of around <strong>₹3,500</strong>. The park is open <strong>15 November&ndash;15 June</strong> with two safari slots a day, and is best known for its large <strong>Asian elephant</strong> population.
      </AnswerBox>

      <h2 style={h2}>A Tiger Reserve You Can Reach Before Breakfast</h2>
      <p style={p}>Most people doing the Haridwar-Rishikesh circuit never realise there's a genuine tiger reserve a 20-minute drive away. Rajaji National Park doesn't get the same billing as Corbett, and it shouldn't have to &mdash; it's a different kind of safari, closer, cheaper, and easier to slot into a spiritual or rafting trip without losing a full day.</p>
      <p style={p}>The park was formed in 1983 by merging three older sanctuaries &mdash; Rajaji (1948), Motichur (1936) and the Chilla range of the Pauri forest division &mdash; and named after C. Rajagopalachari, India's last Governor-General, who is said to have suggested a sanctuary here instead of a hunt he'd been invited to. In 2015 it became Uttarakhand's second tiger reserve after Corbett. What that history adds up to today is 820 sq km of Shivalik forest, split by the Ganga into an eastern half (Chilla, Gohri) and a western half (Motichur, Ranipur, Ramgarh, and more), each with its own gate, own permit, and own character.</p>

      <h2 style={h2}>Rajaji National Park at a Glance</h2>
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

      <h2 style={h2}>Safari Zones Compared — Which Gate Should You Pick?</h2>
      <p style={p}>This is the one thing almost nobody lays out clearly, and it's the first real decision you have to make. Five zones, five different experiences.</p>
      <div style={{ overflowX:'auto', marginBottom:10 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:560 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Zone','Access','Best for','Notes'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {ZONES.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[1]}</td>
                <td style={{ ...td, ...teal }}>{r[2]}</td>
                <td style={{ ...td, color:'#334155', fontSize:12.5 }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>If this is your first Rajaji safari and you're coming from Rishikesh or Haridwar, Chilla is the sensible default. Go to Gohri specifically if birdwatching is the whole point of your trip.</p>

      <h2 style={h2}>Entry Fees &amp; Safari Costs 2026 — The Real Numbers</h2>
      <p style={p}>Fee information for Rajaji is scattered and inconsistent across the web &mdash; the one genuinely authoritative source is an old, unstyled forest-department-adjacent site with no images or FAQ, and even it lists two timing blocks without labelling which season each belongs to. Here's the reconciled picture:</p>
      <div style={{ overflowX:'auto', marginBottom:10 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))' }}>
          <tbody>
            {FEES.map(([k,v]) => (
              <tr key={k}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)', width:'55%' }}>{k}</td>
                <td style={{ ...td, ...teal }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>Forest department fees are revised periodically &mdash; treat these as a close, current estimate rather than a fixed price, and confirm at booking.</p>

      <h2 style={h2}>Timings — Which Slot Is Summer, Which Is Winter</h2>
      <p style={p}>The park runs two safari sessions a day, and the exact clock times shift with the season &mdash; something the source data rarely spells out plainly:</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:480 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Season','Morning slot','Evening slot'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
          </tr></thead>
          <tbody>
            {TIMINGS.map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ ...td, color:'#475569' }}>{r[1]}</td>
                <td style={{ ...td, color:'#334155' }}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>What a Rajaji Safari Actually Feels Like</h2>
      <p style={p}>You arrive at the gate before sunrise, cold enough for a jacket even in April, and the forest is still and grey until the Gypsy engine turns over. The tracks are unpaved and uneven, crossing shallow riverbeds and climbing low ridges through Sal forest that closes overhead like a tunnel. Nobody promises you a tiger, and the guides won't either &mdash; what they will tell you, honestly, is where the elephant herds have been feeding that week, and that's usually where the morning heads first.</p>
      <p style={p}>The forest itself does a lot of the work. Rajaji sits in classic Shivalik terrain &mdash; ravines, low ridges, riverine belts and open grassland, with over 110 recorded tree species from dense Sal canopy near the rivers to drier Khair-Sissoo stands further out. It's this mix of habitat, more than any one animal, that makes the park worth the early start: you go from thick forest to open grassland to riverbed within a single three-hour drive, and the wildlife changes with it.</p>

      <h2 style={h2}>Rajaji or Corbett — Which Should You Choose?</h2>
      <p style={p}>This comes up often enough to answer directly. Corbett is the bigger name, the larger reserve, and the better bet if seeing a tiger is genuinely the point of your trip. Rajaji's case is different: it's a fraction of the distance from Rishikesh and Haridwar (an hour versus most of a day to reach Corbett's gates), the safari itself costs less, and its elephant sightings are, if anything, more reliable than Corbett's. If you're already in the Haridwar-Rishikesh area for a yatra, a rafting trip or a few days of yoga, Rajaji is the safari that fits into your schedule without reshaping it. If wildlife is the entire reason for your trip and you have the extra day or two to spend, Corbett remains the stronger draw for tigers specifically.</p>

      <h2 style={h2}>Sample Half-Day Safari from Rishikesh</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:460 }}>
          <tbody>
            {[
              ['5:15 AM', 'Pickup from your Rishikesh hotel'],
              ['5:45 AM', 'Arrive Chilla Gate, complete permit formalities'],
              ['6:00 AM', 'Safari begins — Chilla range, ~3 hours'],
              ['9:00 AM', 'Exit the park, breakfast stop nearby'],
              ['9:45 AM', 'Optional: Beatles Ashram visit on the way back'],
              ['11:00 AM', 'Drop back in Rishikesh'],
            ].map(([time,desc],i)=>(
              <tr key={time} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ ...td, fontWeight:600, color:'var(--navy)', width:'30%' }}>{time}</td>
                <td style={{ ...td, color:'#334155' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>The evening slot runs the same way in reverse — most people prefer the morning for better light and cooler temperatures on the drive out.</p>

      <h2 style={h2}>How to Book a Safari — Online vs at the Gate</h2>
      <p style={p}>Only one competing guide explains this end to end, and it's buried deep in a very long page. The short version: the forest department runs an online portal where you pick your zone, choose a morning or evening slot, select a vehicle, enter every visitor's name, age and ID proof, and pay online. Print the permit and be at the gate about 20 minutes before your slot. On-the-spot booking at the gate is possible too, but Gypsies run out fast on weekends and through the October&ndash;March peak season, so book ahead if you can. When you book a safari through us, we handle the zone selection and permit paperwork as part of the package.</p>

      <h2 style={h2}>Wildlife You Can Actually See</h2>
      <p style={p}>Rajaji's real headline is its <strong>elephants</strong>. Estimates for the park's Asian elephant population range from around 350 to over 600, and it sits at the northwestern limit of the species' range in India &mdash; which makes a herd sighting here more likely than at most other Indian reserves. Alongside them: leopards, sloth bears, striped hyenas, barking deer, sambar, chital, wild boar, langurs, and since 2015, a small but growing population of tigers.</p>
      <p style={p}>Set your expectations honestly on the tiger front. It's genuinely possible, but Rajaji's tiger numbers are nowhere near Corbett's, and most visitors leave having seen elephants, deer and birds rather than a tiger. Treat any big-cat sighting as a bonus. On the bird side, the park has recorded over 300 species &mdash; Chilla alone counts 3 hornbill species, 9 woodpecker species, 5 barbet species and 4 kingfisher species, and Gohri is the pick for twilight birding.</p>

      <h2 style={h2}>Best Time to Visit, Season by Season</h2>
      <p style={p}>The park is shut completely from mid-June to mid-November for the monsoon &mdash; both for visitor safety on flooded tracks and to give the forest an undisturbed breeding season. Within the open window, <strong>April</strong> is when animal sightings peak, as the heat pushes wildlife toward waterholes near the safari tracks, though daytime temperatures climb accordingly. <strong>November to February</strong> is more comfortable for a morning safari, with a lower but still solid chance of good sightings. Early morning slots, in any month, consistently beat the afternoon for both light and animal activity.</p>

      <h2 style={h2}>How to Reach Rajaji National Park</h2>
      <p style={p}>Every gate is close by regional standards &mdash; this is one of the easiest wildlife safaris to add onto a Haridwar or Rishikesh trip without restructuring your whole itinerary.</p>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid hsl(var(--border))', minWidth:480 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Route','Distance','Time'].map(hd=>(<th key={hd} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{hd}</th>))}
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
      <p style={p}>The nearest airport is Jolly Grant, Dehradun, and the nearest well-connected railway station is Haridwar or Dehradun, both served by regular trains from Delhi. From either, it's a straightforward taxi ride to whichever gate your permit is booked for &mdash; arrive at least 30 minutes early to clear formalities.</p>

      <h2 style={h2}>Rules, What to Carry &amp; Where to Eat Nearby</h2>
      <p style={p}>A few park rules worth knowing before you go: no firearms, no loud music, no feeding or chasing the animals, and you can only get down from your vehicle at the two designated points inside the park. Permits are single-day and non-transferable, and only biodegradable litter goes into the park's own bins &mdash; carry the rest back out.</p>
      <p style={p}>The park itself has almost nowhere to eat, so plan around it. In Rishikesh, that's not a problem &mdash; and if you're driving out via Haridwar, the riverside Ganga Lahari restaurant on the Ganges is worth the stop for a proper meal with a view rather than another roadside dhaba.</p>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>Carry water and snacks.</strong> Refreshment options inside the park are minimal to non-existent.</li>
        <li style={{ marginBottom:8 }}><strong>Wear neutral colours.</strong> Bright clothing and strong scents both reduce your odds of a good sighting.</li>
        <li style={{ marginBottom:8 }}><strong>Book the morning slot if you can.</strong> Cooler temperatures mean more animal movement near the tracks.</li>
        <li style={{ marginBottom:8 }}><strong>Carry ID proof</strong> for every visitor &mdash; it's checked at booking and again at the gate.</li>
      </ul>

      <h2 style={h2}>What to Pack</h2>
      <ul style={{ ...p, paddingLeft:22 }}>
        <li style={{ marginBottom:8 }}><strong>A jacket or shawl for the morning slot</strong> &mdash; open Gypsies are cold before sunrise, even in April.</li>
        <li style={{ marginBottom:8 }}><strong>Binoculars,</strong> if you have them. With 300+ recorded bird species, half the sightings on any given drive are birds, not mammals.</li>
        <li style={{ marginBottom:8 }}><strong>A telephoto lens or a good zoom,</strong> if photography matters to you &mdash; elephant herds are often at a genuine distance, not roadside.</li>
        <li style={{ marginBottom:8 }}><strong>Sunscreen and a cap</strong> for the return leg, once the early cold burns off.</li>
      </ul>

      <h2 style={h2}>Where It Is on the Map</h2>
      <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid hsl(var(--border))', marginBottom:10 }}>
        <iframe
          title="Rajaji National Park, Chilla Gate location map"
          src="https://www.google.com/maps?q=29.9667,78.2333&hl=en&z=11&output=embed"
          width="100%" height="320" style={{ border:0, display:'block' }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>29.9667&deg; N, 78.2333&deg; E &middot; Chilla Gate, the closest and busiest entry point, 8 km from Rishikesh.</p>

      <h2 style={h2}>Pairing a Rajaji Safari with Your Rishikesh Trip</h2>
      <p style={p}>Because Chilla Gate is barely 20 minutes from central Rishikesh, a morning safari fits cleanly around a Ganga Aarti evening or a day of rafting &mdash; it doesn't need its own separate trip. If you're staying near Rishikesh, our <Link href="/rishikesh-tour-packages" style={teal}>Rishikesh tour packages</Link> already route past the Beatles Ashram, which sits inside the Rajaji Tiger Reserve boundary and makes an easy joint outing with the safari itself.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24, marginTop:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related on this route:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Rishikesh Tour Packages',h:'/rishikesh-tour-packages'},{l:'Uttarakhand Tour Packages',h:'/uttarakhand-tour-packages'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} &rarr;</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Your Rajaji National Park Safari</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Zone selection &amp; permit handled for you &middot; Easy add-on to any Rishikesh or Haridwar stay</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a Rajaji National Park jungle safari.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href="tel:+917817996730" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <p style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:20, lineHeight:1.7 }}>
        Sources: <a href="https://en.wikipedia.org/wiki/Rajaji_National_Park" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Wikipedia &mdash; Rajaji National Park</a>, official park fee and zone information, <a href="https://www.google.com/maps?q=29.9667,78.2333" target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)' }}>Google Maps</a> (coordinates and drive times). One source covering safari tips, hotels and permits (Cond&eacute; Nast Traveller India) was inaccessible while researching this page and is worth a manual cross-check before publishing. Fees and timings are set by the forest department and revised periodically &mdash; confirm at booking.
      </p>

      <div style={{ marginTop:32 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
