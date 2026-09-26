import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/cabs';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';
import { pageDates } from '@/lib/pageDates';
import OfficialLink from '@/components/OfficialLink';

const PAGE_DATES = pageDates('/how-to-reach-gangotri');
const PAGE = '/how-to-reach-gangotri';

/* Gangotri is the one dham you can drive to the door of, and nearly every
   query that lands here is really one of three questions: how far, how long,
   and can my parents do it. The stage table and the "where to break the
   journey" section answer all three.

   Restored 20 Sep 2026. The page was 410'd on 15 Sep on the never-clicked
   rule, but "haridwar to gangotri distance / by road / gangotri to haridwar"
   was 29 queries and 10,800 impressions in the three months before, and the
   Yamunotri and Badrinath siblings were kept — so Gangotri was the one dham
   with no route page. Figures below are the site's own: 265 km via the
   Chamba–Dharasu road, 3,415 m at the temple (Wikipedia infobox), and the
   fare bands from src/data/cabs/routes.js so the two never drift apart. */
const stages = [
  { from:'Haridwar',   to:'Rishikesh',   dist:'25 km',  time:'45 min',   note:'NH34. Traffic through Rishikesh is the slow part.' },
  { from:'Rishikesh',  to:'Chamba',      dist:'60 km',  time:'2 hr',     note:'Climb begins. Tehri Dam viewpoints on the left.' },
  { from:'Chamba',     to:'Dharasu',     dist:'45 km',  time:'1.5 hr',   note:'Ridge road above the Tehri reservoir; the new bypass has taken the worst bends out of it.' },
  { from:'Dharasu',    to:'Uttarkashi',  dist:'35 km',  time:'1 hr',     note:'Drops to the Bhagirathi valley. Last full-service town.' },
  { from:'Uttarkashi', to:'Harsil',      dist:'75 km',  time:'2.5 hr',   note:'Narrow, deodar forest, the prettiest stretch of the drive.' },
  { from:'Harsil',     to:'Gangotri',    dist:'25 km',  time:'45 min',   note:'River gorge. Road ends at the temple car park.' },
];

/* Straight-line-free, road-only. Rishikesh is the Haridwar figure minus the
   first stage; Dehradun comes in over the Mussoorie–Dharasu road and joins
   the same route at Uttarkashi; Delhi is Delhi–Haridwar plus this page. */
const fromCities = [
  { city:'Haridwar',   dist:'265 km', time:'9–10 hrs',  via:'Rishikesh, Chamba, Uttarkashi, Harsil' },
  { city:'Rishikesh',  dist:'240 km', time:'8–9 hrs',   via:'Chamba, Uttarkashi, Harsil' },
  { city:'Dehradun',   dist:'245 km', time:'8–9 hrs',   via:'Mussoorie, Dharasu (145 km to Uttarkashi, then 100 km)' },
  { city:'Uttarkashi', dist:'100 km', time:'3–3.5 hrs', via:'Harsil' },
  { city:'Delhi',      dist:'≈490 km', time:'2 days',   via:'Haridwar (225 km), then the route above — always with a halt' },
];

const faqs = [
  { q:'How far is Gangotri from Haridwar?', a:'About 265 km by road via Rishikesh, Chamba, Dharasu and Uttarkashi — the same figure whichever direction you drive it, so "Gangotri to Haridwar" is the same 265 km back. It is 9–10 hours of actual driving. Almost nobody does it in one day: the standard plan is an overnight halt at Uttarkashi, 165 km in, leaving a comfortable 100 km run to the temple the next morning. Gangotri is directly accessible by road — there is no trek to the temple.' },
  { q:'What is the nearest airport to Gangotri?', a:'Jolly Grant Airport, Dehradun, roughly 245 km away. From there it is a taxi to Uttarkashi (about 145 km, 4–5 hours) and on to Gangotri (100 km, 3 hours). Flights into Dehradun are frequently cancelled or diverted in the monsoon, so if you are flying in during July or August, keep a spare day.' },
  { q:'Is there a helicopter to Gangotri?', a:'Not to Gangotri itself. Helicopters for this sector land at Harsil, about 25 km short of the temple, and you transfer by road for the last 45 minutes. Harsil sorties run from Sahastradhara Helipad in Dehradun and are usually sold as part of a Char Dham helicopter package rather than as a standalone hop.' },
  { q:'Can you drive right up to Gangotri temple?', a:'Yes. Gangotri is the only one of the four dhams where the motor road reaches the temple. The car park is a few minutes\' walk from the shrine, across the Bhagirathi footbridge. That makes it the most realistic dham for elderly pilgrims, wheelchair users and families with small children — the constraint here is the altitude at 3,415 m, not the walking.' },
  { q:'Is there a bus to Gangotri?', a:'Yes, in season, in two legs. Uttarakhand Transport Corporation and private operators run buses from Rishikesh bus stand to Uttarkashi daily, and shared jeeps cover Uttarkashi to Gangotri. Buses leave Rishikesh early — most departures are between 4 am and 7 am, and there is little after mid-morning, because drivers will not take the upper Bhagirathi road in the dark.' },
  { q:'How long does the Haridwar to Gangotri drive take?', a:'Nine to ten hours for 265 km, which surprises people who divide distance by speed. The average works out under 30 km/h because of the gradient, the hairpins above Chamba and the single-lane sections past Harsil. Add an hour in the monsoon for slow-moving stretches at landslide-prone points, and check the road-status page the morning you leave.' },
  { q:'Do I need a permit for Gangotri?', a:'Not for the temple — Char Dham yatra registration is all that is required, and it is free. A permit is needed only if you continue past Gangotri towards the Gaumukh glacier inside Gangotri National Park, which is issued at the park office in Uttarkashi and capped at 150 trekkers a day. Foreign nationals need an Inner Line Permit for areas beyond Bhairon Ghati.' },
];

export const metadata = {
  title: { absolute: 'How to Reach Gangotri | Distance, Road Route & Bus Guide' },
  description: 'Haridwar to Gangotri is 265 km and 9–10 hours by road, with no trek. Stage-by-stage route, distances from Rishikesh, Dehradun and Delhi, bus and taxi fares, and where to break the journey.',
  keywords: ['how to reach gangotri','haridwar to gangotri distance','gangotri to haridwar distance','haridwar to gangotri by road','uttarkashi to gangotri','gangotri route from haridwar','nearest airport to gangotri'],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: 'How to Reach Gangotri — Distance, Road Route & Bus Guide',
    description: 'Haridwar to Gangotri is 265 km and 9–10 hours by road, with no trek. Stage-by-stage route, bus and taxi fares, and where to break the journey.',
    url: `${SITE.baseUrl}${PAGE}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `How to Reach Gangotri — Road Route & Guide | ${SITE.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach Gangotri — Distance, Road Route & Bus Guide',
    description: 'Haridwar to Gangotri is 265 km and 9–10 hours by road, with no trek. Route, bus and taxi fares, and where to break the journey.',
    images: [{ url: '/opengraph-image', alt: `How to Reach Gangotri — Road Route & Guide | ${SITE.name}` }],
  },
};

export default function HowToReachGangotri() {
  const cab = getRoute('haridwar-to-gangotri-cab');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Article',
        headline:'How to Reach Gangotri — Distance, Road Route & Bus Guide',
        description:'Road, bus, helicopter and train routes to Gangotri, with a stage-by-stage drive table and where to break the journey.',
        image:`${SITE.baseUrl}/opengraph-image`,
        datePublished:PAGE_DATES.createdISO, dateModified:PAGE_DATES.modifiedISO,
        author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
        publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
        mainEntityOfPage:`${SITE.baseUrl}${PAGE}`,
        about:{ '@type':'Place', name:'Gangotri Temple', geo:{ '@type':'GeoCoordinates', latitude:30.9947, longitude:78.9398, elevation:'3415' } },
      })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
          { '@type':'ListItem', position:2, name:'Gangotri Yatra', item:`${SITE.baseUrl}/gangotri-yatra` },
          { '@type':'ListItem', position:3, name:'How to Reach Gangotri', item:`${SITE.baseUrl}${PAGE}` },
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🗺️ Travel Guide · Gangotri</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            How to Reach Gangotri Dham
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Distance and driving time from Haridwar, Rishikesh, Dehradun and Delhi — by car, bus or helicopter
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link prefetch={false} href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link prefetch={false} href="/gangotri-yatra" style={{ color:'var(--teal)', textDecoration:'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>How to Reach</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:10 }}>
          {[['Altitude','3,415 m'],['From Haridwar','265 km by road'],['Driving time','9–10 hrs'],['Trek required','None (motor road)'],['Nearest town','Uttarkashi (100 km)'],['Season','Akshaya Tritiya to Diwali']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <AnswerBox>
          <strong>Haridwar to <OfficialLink k="ut-gangotri">Gangotri</OfficialLink> is 265 km by road and takes 9–10 hours of driving</strong> via Rishikesh, Chamba,
          Dharasu, Uttarkashi and Harsil — normally split over two days with a night at Uttarkashi or Harsil. It is the
          only Char Dham where the road reaches the temple, so there is no trek. The nearest railhead is Haridwar, the
          nearest airport Dehradun (about 245 km), and the helicopter for this sector lands at Harsil, 25 km short.
        </AnswerBox>

        <p style={p}>
          Gangotri has one clear advantage over the other three dhams: you can drive to the door. The temple sits beside
          the motor road at 3,415 metres on the bank of the Bhagirathi, a few minutes&rsquo; walk from the car park across the
          footbridge. That makes it the most realistic dham for elderly pilgrims and families with small children, and
          the natural pairing with Yamunotri for a western{' '}
          <Link prefetch={false} href="/do-dham-yatra" style={{ color:'var(--teal)' }}>Do Dham</Link>.
        </p>
        <p style={p}>
          The catch is not the walking, it is the altitude and the driving day. At 3,415 m Gangotri is higher than
          Badrinath, and pilgrims who sail through the road journey sometimes struggle at the temple itself. And 265 km
          sounds like a half-day until you do the arithmetic: the average speed on this road works out under 30 km/h,
          which is why every itinerary below breaks the journey rather than pushing through.
        </p>

        <h2 style={h2}>Distance to Gangotri from Haridwar, Rishikesh, Dehradun and Delhi</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:600 }}>
            <caption className="sr-only">Road distance and driving time to Gangotri from major starting points</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['From','Road distance','Driving time','Via'].map(x=>(
                  <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fromCities.map((c,i)=>(
                <tr key={c.city} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left', whiteSpace:'nowrap' }}>{c.city}</th>
                  <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, fontFamily:'monospace', whiteSpace:'nowrap' }}>{c.dist}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', whiteSpace:'nowrap' }}>{c.time}</td>
                  <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>{c.via}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Road distances, not straight-line ones — a map app will show a shorter figure. The return leg is the same
          distance, so Gangotri to Haridwar is also 265 km; only the driving time changes, and downhill is usually
          half an hour quicker.
        </p>

        <h2 style={h2}>Road route — Haridwar to Gangotri, stage by stage</h2>
        <p style={p}>
          The route is <strong>Haridwar → Rishikesh → Chamba → Dharasu → Uttarkashi → Harsil → Gangotri</strong>. It is
          NH34 as far as Uttarkashi and a state highway for the final 100 km, which runs beside the Bhagirathi through
          narrow gorges — scenic, and a road for an experienced hill driver. Note that it is a completely different
          set of valleys from the Kedarnath and Badrinath road: you do not pass Devprayag or Rudraprayag on the way to
          Gangotri.
        </p>

        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:660 }}>
            <caption className="sr-only">Haridwar to Gangotri road route, stage by stage, with distance and driving time</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Stage','Distance','Driving time','Road notes'].map(x=>(
                  <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stages.map((s,i)=>(
                <tr key={s.from} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left', whiteSpace:'nowrap' }}>{s.from} → {s.to}</th>
                  <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, fontFamily:'monospace' }}>{s.dist}</td>
                  <td style={{ padding:'10px 12px', color:'#475569' }}>{s.time}</td>
                  <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>{s.note}</td>
                </tr>
              ))}
              <tr style={{ borderTop:'2px solid var(--navy)', background:'var(--navy-light)' }}>
                <th scope="row" style={{ padding:'10px 12px', fontWeight:800, color:'var(--navy)', fontSize:13, textAlign:'left' }}>Haridwar → Gangotri</th>
                <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:800, fontFamily:'monospace' }}>265 km</td>
                <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:700 }}>8.5 hrs at the wheel</td>
                <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>9–10 hrs elapsed with stops. Split over two days in practice.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Beyond the temple, the 18 km trek to the Gaumukh glacier is a separate expedition needing its own permit and
          at least a full day — it is not part of a standard Gangotri visit. Check{' '}
          <Link prefetch={false} href="/char-dham-road-status" style={{ color:'var(--teal)' }}>today&rsquo;s road status</Link>{' '}
          the morning you leave; the Uttarkashi–Gangotri stretch is the one that closes in rain.
        </p>

        <h2 style={h2}>Where to break the journey</h2>
        <p style={p}>
          Trying to do Haridwar to Gangotri in a single day is the most common planning mistake on this route. It is
          physically possible if you leave at 4 am, but it means arriving at 3,415 m having gained 3,100 m of altitude
          in one push, which is precisely the profile that produces a headache and a sleepless night. Every itinerary
          we run breaks it.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap:12, marginBottom:24 }}>
          {[
            { town:'Uttarkashi', alt:'1,158 m', why:'The standard halt, 165 km in. Full range of hotels, ATMs, a district hospital and the Gangotri National Park permit office. Leaves an easy 100 km for the morning.' },
            { town:'Harsil', alt:'2,620 m', why:'25 km short of the temple. Far prettier than Uttarkashi and better for acclimatisation, but limited rooms and they sell out. Book ahead or do not count on it.', href:'/harsil-valley' },
            { town:'Barkot', alt:'1,220 m', why:'Only if you are combining Gangotri with Yamunotri. It is off the direct line to Gangotri, so it costs you distance unless the Yamunotri leg comes first.' },
          ].map(s=>(
            <div key={s.town} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:2 }}>
                {s.href ? <Link prefetch={false} href={s.href} style={{ color:'var(--navy)' }}>{s.town}</Link> : s.town}
              </div>
              <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:700, fontFamily:'monospace', marginBottom:8 }}>{s.alt}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{s.why}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>By taxi from Haridwar</h2>
        <p style={p}>
          A private car is how most families do this road, because the timing is yours: leave Haridwar after breakfast,
          sleep at Uttarkashi or Harsil, and be at the temple before the day-trippers. These are our one-way bands for
          Haridwar to Gangotri; a round trip with the overnight halt is quoted as one all-in figure on enquiry.
        </p>
        {cab?.fares?.length > 0 && (
          <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:420 }}>
              <caption className="sr-only">Haridwar to Gangotri one-way taxi fare by vehicle</caption>
              <thead>
                <tr style={{ background:'var(--navy-light)' }}>
                  {['Vehicle','Seats','One-way fare'].map(x=>(
                    <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cab.fares.map(([v, seats, fare], i)=>(
                  <tr key={v} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
                    <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{v}</th>
                    <td style={{ padding:'10px 12px', color:'#475569' }}>{seats}</td>
                    <td style={{ padding:'10px 12px', color:'var(--gold-dark)', fontWeight:700, whiteSpace:'nowrap' }}>{fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Fuel, driver, tolls and state taxes included; the vehicle waits at the halt. All routes and vehicles are on
          the <Link prefetch={false} href="/cabs" style={{ color:'var(--teal)' }}>cab fares page</Link>.
        </p>

        <h2 style={h2}>By bus and shared jeep</h2>
        <p style={p}>
          There is no direct bus from Haridwar to Gangotri. The journey is done in two legs: a bus from Rishikesh bus
          stand to Uttarkashi, then a shared jeep from Uttarkashi to Gangotri. Uttarakhand Transport Corporation and
          private operators both run the first leg through the season.
        </p>
        <p style={p}>
          The thing to know is that everything on this road leaves early. Rishikesh departures are concentrated between
          4 am and 7 am and thin out to nothing by late morning, because drivers will not be on the upper Bhagirathi road
          after dark. Shared jeeps from Uttarkashi work the same way — go to the stand at first light, and expect to wait
          until the jeep fills. Budget roughly ₹400–600 for the bus and ₹500–800 for the jeep seat. It is the cheapest
          way to reach Gangotri and comfortably the slowest; a group of four will usually find a private vehicle costs
          about the same per head and saves most of a day.
        </p>

        <h3 style={h3}>Registration and permits</h3>
        <p style={p}>
          <OfficialLink k="registration">Char Dham yatra registration</OfficialLink> is mandatory, free, and checked at barriers on the way up — do it{' '}
          <Link prefetch={false} href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)' }}>online before you travel</Link>{' '}
          rather than queueing at Uttarkashi. A separate permit is required only if you continue past the temple
          towards Gaumukh, inside Gangotri National Park; it is issued at the park office in Uttarkashi and capped at
          150 trekkers a day, so it is worth arranging in advance in peak season.
        </p>

        <h2 style={h2}>Helicopter to Gangotri (Harsil helipad)</h2>
        <p style={p}>
          The helicopter for the Gangotri sector lands at Harsil, about 25 km from the temple, and a road transfer covers
          the last 45 minutes. It is sold as a leg of the{' '}
          <Link prefetch={false} href="/char-dham-helicopter" style={{ color:'var(--teal)' }}>Char Dham helicopter circuit</Link>{' '}
          from Sahastradhara Helipad in Dehradun rather than as a standalone hop, and it is grounded in cloud — a lost
          morning shifts the whole circuit.
        </p>

        <h2 style={h2}>By train</h2>
        <p style={p}>
          There is no railway to Gangotri or Uttarkashi. The two practical railheads are Haridwar (265 km from Gangotri)
          and Dehradun (245 km). Haridwar has far more connections from across India, which makes it the usual start;
          the Shatabdi from New Delhi to Dehradun suits NCR pilgrims who want the shorter road day.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Gangotri as part of a yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We run the road, the Uttarkashi or Harsil night and the darshan timing — you only do the darshan.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Gangotri. Please share the route plan and vehicle options.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link prefetch={false} href="/gangotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>Gangotri yatra package →</Link>
          </div>
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Gangotri Temple','/gangotri-temple'],['Gangotri Weather','/gangotri-weather'],['Harsil Valley','/harsil-valley'],['Mukhba, the winter seat','/mukhba-gangotri-winter-seat'],['How to Reach Yamunotri','/how-to-reach-yamunotri'],['How to Reach Badrinath','/how-to-reach-badrinath'],['Char Dham Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link prefetch={false} key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
