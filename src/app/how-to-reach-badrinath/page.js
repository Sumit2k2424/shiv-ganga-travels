import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/cabs';
import { ROUTES } from '@/data/distances';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';
import { pageDates } from '@/lib/pageDates';

const PAGE_DATES = pageDates('/how-to-reach-badrinath');
const PAGE = '/how-to-reach-badrinath';

/* Badrinath is the longest single leg of the circuit and the one people most
   often plan as a day trip. There is no trek — the road delivers you to the
   temple — so every question that lands here is about the drive: how far,
   how long, where the road is slow, and where to sleep on the way.

   Deepened 21 Sep 2026. Legs come from ROUTES['haridwar-badrinath'] and the
   fares from getRoute('haridwar-to-badrinath-cab'); the city distances are
   the cab routes' own figures (Rishikesh 295, Dehradun 320, Delhi 530). */
const R = ROUTES['haridwar-badrinath'];

const fromCities = [
  { city:'Haridwar',   dist:'320 km', time:'10–11 hrs', via:'Rishikesh, Devprayag, Rudraprayag, Karnaprayag, Chamoli, Joshimath' },
  { city:'Rishikesh',  dist:'295 km', time:'10–11 hrs', via:'Same road, the Haridwar–Rishikesh leg saved' },
  { city:'Dehradun',   dist:'320 km', time:'11–12 hrs', via:'Rishikesh (40 km), then the route above' },
  { city:'Rudraprayag',dist:'160 km', time:'5–6 hrs',   via:'Karnaprayag, Chamoli, Joshimath — where the Kedarnath road branches off' },
  { city:'Joshimath',  dist:'45 km',  time:'2 hrs',     via:'Vishnuprayag, Govindghat, Pandukeshwar; gate-controlled' },
  { city:'Delhi',      dist:'530 km', time:'2–3 days',  via:'Haridwar (210 km), Joshimath — never in one push' },
];

const faqs = [
  { q:'How far is Badrinath from Haridwar?', a:'320 km by road, and ten to eleven hours of driving. On a plains highway 320 km is four hours; here the road climbs 2,800 m along the Alaknanda gorge, the Chamoli–Joshimath stretch is under near-permanent widening, and night driving is banned from 10 PM to 4 AM. It is the longest single leg of the Char Dham and the one pilgrims most often underestimate. Almost every itinerary breaks it with a night at Joshimath or Pipalkoti.' },
  { q:'Is there a trek to Badrinath?', a:'No. Badrinath and Gangotri are the two dhams where the motor road reaches the temple. The vehicle drops you a few minutes\' walk from the shrine, across the Alaknanda footbridge. That makes Badrinath the most realistic dham for elderly pilgrims and wheelchair users — the constraint is the length of the drive and the 3,133 m altitude, not walking.' },
  { q:'What is the nearest airport to Badrinath?', a:'Jolly Grant, Dehradun, about 320 km away — the same distance as from Haridwar, because you join the same road at Rishikesh 40 km out. From the airport it is 11–12 hours of driving with a Joshimath halt. Badrinath also has a helipad beside the temple, and the Dehradun–Badrinath helicopter sector is about 45 minutes in the air.' },
  { q:'What is the nearest railway station to Badrinath?', a:'Haridwar, 320 km, and Rishikesh, 295 km. Haridwar has far more trains from across India; Rishikesh saves 25 km of road. There is no railway anywhere in the Alaknanda valley — the Rishikesh–Karnaprayag line is under construction and not due to open for several years.' },
  { q:'Is there a bus from Haridwar to Badrinath?', a:'Yes, in season. Uttarakhand Transport Corporation and GMOU run direct buses from Haridwar and Rishikesh to Badrinath, leaving between roughly 4 am and 7 am, and there are more frequent services as far as Joshimath with a change there. The full run is 12–14 hours on a bus. Budget about ₹600–800 for the seat. It is the cheapest way up and by far the slowest; four people in a shared taxi pay about the same per head.' },
  { q:'How long does Haridwar to Badrinath take by car?', a:'Ten to eleven hours at the wheel, twelve with meal stops, and it cannot be done overnight because of the 10 PM to 4 AM driving ban. Leave Haridwar at 5 am and you reach Joshimath around 3 pm; the last 45 km to Badrinath is gate-controlled and best left for the next morning. Two comfortable days is the honest answer.' },
  { q:'What is the Joshimath gate system?', a:'The 45 km Joshimath–Badrinath road has single-lane sections, so traffic is released in one direction at a time from gates at Joshimath and Badrinath, roughly every hour and a half through the day. Miss a slot and you wait for the next one. Vehicles are not released after dark. It is one more reason to sleep at Joshimath and go up with the first morning gate.' },
  { q:'Do I need a permit for Badrinath?', a:'Only the free Char Dham yatra registration, which is checked at barriers on the way up. No separate permit is needed for the temple or for Mana village 3 km beyond it. Foreign nationals need an Inner Line Permit only to go past Mana towards the Tibet border, which is not part of a normal visit.' },
];

export const metadata = {
  title: { absolute: 'How to Reach Badrinath | Distance, Road Route & Bus Guide' },
  description: 'Haridwar to Badrinath is 320 km and 10–11 hours by road, with no trek. Stage-by-stage route, distances from Rishikesh, Dehradun and Delhi, bus and taxi fares, the Joshimath gate system and where to break the journey.',
  keywords: ['how to reach badrinath','haridwar to badrinath distance','badrinath route from haridwar','rishikesh to badrinath distance','joshimath to badrinath','badrinath by road','nearest airport to badrinath','haridwar to badrinath bus'],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: 'How to Reach Badrinath — Distance, Road Route & Bus Guide',
    description: 'Haridwar to Badrinath is 320 km and 10–11 hours by road, with no trek. Stage-by-stage route, bus and taxi fares, the Joshimath gate system and where to break the journey.',
    url: `${SITE.baseUrl}${PAGE}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `How to Reach Badrinath — Road Route & Guide | ${SITE.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach Badrinath — Distance, Road Route & Bus Guide',
    description: 'Haridwar to Badrinath is 320 km and 10–11 hours by road, with no trek. Route, bus and taxi fares, and where to break the journey.',
    images: [{ url: '/opengraph-image', alt: `How to Reach Badrinath — Road Route & Guide | ${SITE.name}` }],
  },
};

const th = { padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' };

export default function HowToReachBadrinath() {
  const cab = getRoute('haridwar-to-badrinath-cab');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Article',
        headline:'How to Reach Badrinath — Distance, Road Route & Bus Guide',
        description:'Road, bus, helicopter and train routes to Badrinath, with a stage-by-stage drive table, the Joshimath gate system and where to break the journey.',
        image:`${SITE.baseUrl}/opengraph-image`,
        datePublished:PAGE_DATES.createdISO, dateModified:PAGE_DATES.modifiedISO,
        author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
        publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
        mainEntityOfPage:`${SITE.baseUrl}${PAGE}`,
        about:{ '@type':'Place', name:'Badrinath Temple', geo:{ '@type':'GeoCoordinates', latitude:30.7446, longitude:79.4938, elevation:'3133' } },
      })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
          { '@type':'ListItem', position:2, name:'Badrinath Yatra', item:`${SITE.baseUrl}/badrinath-yatra` },
          { '@type':'ListItem', position:3, name:'How to Reach Badrinath', item:`${SITE.baseUrl}${PAGE}` },
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🗺️ Travel Guide · Badrinath</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            How to Reach Badrinath Dham
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Distance and driving time from Haridwar, Rishikesh, Dehradun and Delhi — by car, bus or helicopter
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link prefetch={false} href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link prefetch={false} href="/badrinath-yatra" style={{ color:'var(--teal)', textDecoration:'none' }}>Badrinath Yatra</Link><span>›</span>
          <span>How to Reach</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:10 }}>
          {[['Altitude','3,133 m'],['From Haridwar','320 km by road'],['Driving time','10–11 hrs'],['Trek required','None (motor road)'],['Nearest town','Joshimath (45 km)'],['Season','23 Apr – 13 Nov 2026']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <AnswerBox>
          <strong>Haridwar to Badrinath is 320 km by road and takes 10–11 hours of driving</strong> via Rishikesh,
          Devprayag, Rudraprayag, Karnaprayag, Chamoli and Joshimath — normally split over two days with a night at
          Joshimath or Pipalkoti. There is no trek: the road runs to the temple. The nearest railhead is Haridwar, the
          nearest airport Dehradun (320 km), and Badrinath has its own helipad beside the temple. The last 45 km from
          Joshimath is gate-controlled and closed after dark.
        </AnswerBox>

        <p style={p}>
          Badrinath has the same advantage as Gangotri — you can drive to the door — and one thing neither of the
          others has: distance. It is the longest single leg of the Char Dham, the furthest point of the circuit from
          Haridwar, and the drive people most often plan as a day trip because a map app says eight hours. It is not
          eight hours. From Rudraprayag onward you are on a road that follows the Alaknanda gorge while climbing
          2,800 m, and the Chamoli–Joshimath section has been under widening and slide repair for years.
        </p>
        <p style={p}>
          What that buys you is the temple itself: the vehicle parks a few minutes&rsquo; walk from the shrine, so
          Badrinath is the realistic dham for elderly pilgrims, wheelchair users and anyone who cannot manage the
          Kedarnath or Yamunotri treks. The planning problem is the road, not the walking, and the rest of this page
          is about the road.
        </p>

        <h2 style={h2}>Distance to Badrinath from Haridwar, Rishikesh, Dehradun and Delhi</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:600 }}>
            <caption className="sr-only">Road distance and driving time to Badrinath from major starting points</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['From','Road distance','Driving time','Via'].map(x=> <th key={x} scope="col" style={th}>{x}</th>)}
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
          Road distances, not straight-line ones. The return leg is the same 320 km; downhill is usually an hour
          quicker. If you are coming from Kedarnath, Gaurikund to Badrinath is about 230 km and 8–9 hours via
          Rudraprayag — the Do Dham leg, and a full day on its own.
        </p>

        <h2 style={h2}>Road route — Haridwar to Badrinath, stage by stage</h2>
        <p style={p}>
          The route is <strong>Haridwar → Rishikesh → Devprayag → Rudraprayag → Karnaprayag → Chamoli → Joshimath →
          Badrinath</strong>, NH7 the whole way. It follows the Ganga to Devprayag and the Alaknanda from there,
          passing four of the five Prayags — Devprayag, Rudraprayag, Karnaprayag and Nandprayag — before Joshimath.
          The Kedarnath road branches off left at Rudraprayag; everything after that is Badrinath traffic only.
        </p>

        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:660 }}>
            <caption className="sr-only">Haridwar to Badrinath road route, stage by stage, with distance and driving time</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Stage','Distance','Time','Road notes'].map(x=> <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {R.legs.map(([stage, dist, time, note], i)=>(
                <tr key={stage} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left', whiteSpace:'nowrap' }}>{stage}</th>
                  <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, fontFamily:'monospace', whiteSpace:'nowrap' }}>{dist}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', whiteSpace:'nowrap' }}>{time}</td>
                  <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>{note}</td>
                </tr>
              ))}
              <tr style={{ borderTop:'2px solid var(--navy)', background:'var(--navy-light)' }}>
                <th scope="row" style={{ padding:'10px 12px', fontWeight:800, color:'var(--navy)', fontSize:13, textAlign:'left' }}>Haridwar → Badrinath</th>
                <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:800, fontFamily:'monospace' }}>{R.kmLabel}</td>
                <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:700 }}>{R.time}</td>
                <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>12 hrs elapsed with stops. Split over two days in practice.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          The Chamoli–Joshimath stretch through Helang is the first to close in rain and the slowest in every month.
          Check <Link prefetch={false} href="/char-dham-road-status" style={{ color:'var(--teal)' }}>today&rsquo;s road status</Link>{' '}
          before you leave Rudraprayag. Joshimath has had ground subsidence since 2023 and remains monitored; the
          highway runs and the town functions, but ask about conditions before fixing dates.
        </p>

        <h3 style={h3}>The Joshimath gate system</h3>
        <p style={p}>
          The last 45 km has single-lane sections, so traffic is released in one direction at a time from gates at
          Joshimath and at Badrinath, roughly every hour and a half through the day and not at all after dark. In
          practice that means the morning gate from Joshimath, darshan by late morning, and either the afternoon gate
          back down or a night at Badrinath. Arriving at Joshimath at 6 pm hoping to push on is how people end up
          sleeping in the car park.
        </p>

        <h2 style={h2}>Where to break the journey</h2>
        <p style={p}>
          Trying to do Haridwar to Badrinath in a single day is the most common planning mistake on this route, and
          the 10 PM to 4 AM driving ban makes it impossible to fix by leaving at night. Every itinerary we run breaks
          it once on the way up.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap:12, marginBottom:24 }}>
          {[
            { town:'Joshimath', alt:'1,890 m', why:'The standard halt, 275 km in, 45 km short of the temple. Full range of hotels, the winter seat of Badrinath, the Auli ropeway, and the first morning gate is a few minutes from your bed.', href:'/joshimath-narsingh-temple' },
            { town:'Pipalkoti', alt:'1,260 m', why:'30 km before Joshimath, lower and warmer, and where groups go when Joshimath is full in May–June. Adds an hour to the morning but sleeps better.' },
            { town:'Rudraprayag', alt:'895 m', why:'Only 165 km in, so the second day is long — but it is the split that works for a Do Dham, because the Kedarnath road leaves from here.', href:'/panch-prayag' },
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
          A private car is how most families do this road, because it is the only way to control the timing around
          the gates: leave Haridwar early, sleep at Joshimath, take the first gate up, and be at the temple before the
          buses. These are our one-way bands for Haridwar to Badrinath; a round trip with the overnight halt is quoted
          as one all-in figure on enquiry.
        </p>
        {cab?.fares?.length > 0 && (
          <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:420 }}>
              <caption className="sr-only">Haridwar to Badrinath one-way taxi fare by vehicle</caption>
              <thead>
                <tr style={{ background:'var(--navy-light)' }}>
                  {['Vehicle','Seats','One-way fare'].map(x=> <th key={x} scope="col" style={th}>{x}</th>)}
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

        <h2 style={h2}>By bus</h2>
        <p style={p}>
          Badrinath is the one dham with direct buses from the plains. Uttarakhand Transport Corporation and the GMOU
          cooperative run Haridwar–Badrinath and Rishikesh–Badrinath services through the season, and there are more
          frequent buses to Joshimath with shared jeeps for the last 45 km. Departures are concentrated between 4 am
          and 7 am; the full run takes 12–14 hours and arrives at Joshimath for the evening gate or Badrinath after
          dark, depending on the road.
        </p>
        <p style={p}>
          Budget roughly ₹600–800 for a Haridwar–Badrinath seat and ₹150–250 for the Joshimath–Badrinath jeep. It is
          the cheapest way up and comfortably the slowest; a group of four usually finds a private vehicle costs about
          the same per head and gains a day.
        </p>

        <h3 style={h3}>Registration</h3>
        <p style={p}>
          Char Dham yatra registration is mandatory, free, and checked at barriers on the way up — do it{' '}
          <Link prefetch={false} href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)' }}>online before you travel</Link>{' '}
          rather than queueing at Rishikesh. No separate permit is needed for the temple or for Mana village.
        </p>

        <h2 style={h2}>Helicopter to Badrinath</h2>
        <p style={p}>
          Badrinath is the one dham where the helicopter lands at the temple: the helipad is beside the complex, a
          few minutes on foot from the shrine, so there is no road transfer. The Dehradun–Badrinath sector flies from
          Sahastradhara Helipad in about 45 minutes and is sold as a leg of the{' '}
          <Link prefetch={false} href="/char-dham-helicopter" style={{ color:'var(--teal)' }}>Char Dham helicopter circuit</Link>{' '}
          rather than as a standalone hop. Book only through the official IRCTC HeliYatra portal — no agent can sell
          you a seat, and the helicopter-ticket scam is the most common fraud on this circuit.
        </p>

        <h2 style={h2}>By train</h2>
        <p style={p}>
          There is no railway in the Alaknanda valley yet — the Rishikesh–Karnaprayag line is under construction and
          not due to open for several years. The two practical railheads are Haridwar, 320 km from Badrinath, and
          Rishikesh, 295 km. Haridwar has far more connections from across India, which makes it the usual start;
          Dehradun works for NCR pilgrims on the Shatabdi, but it is 40 km further from the temple than Rishikesh.
        </p>

        <h2 style={h2}>Beyond the temple — Mana village</h2>
        <p style={p}>
          Mana, 3 km past Badrinath at 3,310 m, is the last village before the Tibet border and the one side trip
          worth building into the day: the Vyas and Ganesh caves, Bhim Pul over the Saraswati, and the last tea shop
          in India. The road is open to private vehicles and it takes an hour or two. Read the{' '}
          <Link prefetch={false} href="/blog/mana-village-badrinath" style={{ color:'var(--teal)' }}>Mana village guide</Link>{' '}
          before you go — it is windier and colder than Badrinath even though it is only 3 km on.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Badrinath as part of a yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We run the road, the Joshimath night, the gate timing and the Tapt Kund arrangements — you only do the darshan.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Badrinath. Please share the route plan and vehicle options.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link prefetch={false} href="/badrinath-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>Badrinath yatra package →</Link>
          </div>
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Badrinath Temple','/badrinath-temple'],['Badrinath Weather','/badrinath-weather'],['Joshimath, the winter seat','/joshimath-narsingh-temple'],['Panch Prayag','/panch-prayag'],['How to Reach Kedarnath','/blog/how-to-reach-kedarnath'],['How to Reach Gangotri','/how-to-reach-gangotri'],['Char Dham Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link prefetch={false} key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
