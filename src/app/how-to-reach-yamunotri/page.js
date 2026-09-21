import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/cabs';
import { ROUTES } from '@/data/distances';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';
import { pageDates } from '@/lib/pageDates';
import { YAMUNOTRI_TREK } from '@/data/trekRates';

const PAGE_DATES = pageDates('/how-to-reach-yamunotri');
const PAGE = '/how-to-reach-yamunotri';

/* Yamunotri is the shortest drive of the four and the hardest finish: the
   road stops at Janki Chatti and the temple is a 6 km climb above it. Every
   query that lands here is really "how far is the drive, how bad is the walk,
   and can my parents do it" — so the page is built as a stage table, a
   trek section with the pony/doli options, and where to sleep.

   Deepened 21 Sep 2026. The earlier version carried its own figures (250 km,
   pony ₹1,000–1,500) that disagreed with src/data/distances.js and the cab
   route; the pony/doli bands now come from src/data/trekRates.js. Distances and legs now come from ROUTES['haridwar-yamunotri'] and
   the fares from getRoute('haridwar-to-yamunotri-cab'), so this page and the
   cab page cannot drift apart again. */
const R = ROUTES['haridwar-yamunotri'];

const fromCities = [
  { city:'Haridwar',   dist:'222 km', time:'8–9 hrs',   via:'Rishikesh, Chamba, Brahmakhal, Barkot' },
  { city:'Rishikesh',  dist:'197 km', time:'7.5–8 hrs', via:'Narendranagar, Chamba, Barkot' },
  { city:'Dehradun',   dist:'178 km', time:'6–7 hrs',   via:'Vikasnagar, Naugaon, Barkot — the shortest dham drive from any base' },
  { city:'Barkot',     dist:'45 km',  time:'2 hrs',     via:'Kharsali turn-off; narrow valley road' },
  { city:'Delhi',      dist:'432 km', time:'2 days',    via:'Haridwar (210 km), then the route above — always with a halt' },
];

const trekOptions = [
  { type:'On foot',          cost:'Free',                    time:'2.5–3 hrs up, 2 down', note:'Rock-paved path, steep from the first bend. Poles help on the descent. Start at first light.' },
  { type:'Pony',             cost:YAMUNOTRI_TREK.pony.oneWayLabel,    time:'2–2.5 hrs',            note:'Booked at the Janki Chatti stand, government rate card. In May–June book the evening before or expect an hour in the queue.' },
  { type:'Doli (palanquin)', cost:`${YAMUNOTRI_TREK.doli.oneWay} one way`,    time:'3–4 hrs',              note:'Four porters. The option for anyone who cannot sit a pony — hip, back or balance problems.' },
  { type:'Helicopter',       cost:'Via IRCTC HeliYatra',     time:'~1 km walk from helipad', note:'Lands at Kharsali across the river. Still a short walk or doli to the temple.' },
];

const faqs = [
  { q:'How far is Yamunotri from Haridwar?', a:'About 222 km by road to Janki Chatti, where the road ends, and then a 6 km trek to the temple. The drive is 8–9 hours via Rishikesh, Chamba, Brahmakhal and Barkot. Almost everyone sleeps at Barkot, 45 km short of the road head, and does the trek the next morning; driving up and climbing the same day is the mistake that makes people ill.' },
  { q:'Is there a road to Yamunotri temple?', a:'No. The motor road ends at Janki Chatti at 2,650 m. From there it is 6 km on foot, by pony or by doli, climbing 641 m to the temple at 3,291 m. Yamunotri and Kedarnath are the two dhams with a trek; Gangotri and Badrinath are reached by road to the temple.' },
  { q:'How long is the Yamunotri trek and how hard is it?', a:'6 km each way, and steeper per kilometre than the Kedarnath trail even though it is far shorter — 641 m of climb in 6 km. A moderately fit walker takes 2.5–3 hours up and about 2 down in dry weather; in rain the path is slick rock and the same climb stretches past four hours. There are chai stalls and rest points most of the way.' },
  { q:'What is the nearest airport to Yamunotri?', a:'Jolly Grant, Dehradun, about 178 km from Janki Chatti. Dehradun is actually the closest base city to Yamunotri — the road runs direct through Vikasnagar and Naugaon rather than looping via Rishikesh, and it is genuinely under seven hours. If you are flying in, Yamunotri is the fastest full dham you can build into a short trip.' },
  { q:'What is the nearest railway station to Yamunotri?', a:'Haridwar (222 km) and Dehradun (178 km). Haridwar has far more connections from across India; Dehradun has the Shatabdi and Jan Shatabdi from Delhi and the shorter road. There is no railway anywhere in the Yamuna valley — Rishikesh station is only 25 km closer than Haridwar and not worth changing plans for.' },
  { q:'Is there a bus from Haridwar to Yamunotri?', a:'To Barkot and Janki Chatti in season, yes, but not direct in one vehicle. Uttarakhand Transport Corporation and private buses run Rishikesh to Barkot in the early morning, and shared jeeps cover Barkot to Janki Chatti. Departures are concentrated between 4 am and 7 am because nothing drives the upper valley after dark. It is the cheapest route and comfortably the slowest.' },
  { q:'Is there a helicopter to Yamunotri?', a:'Yes, to Kharsali helipad on the far bank of the Yamuna from Janki Chatti, from Sahastradhara Helipad in Dehradun. From Kharsali it is still about a kilometre on foot or by doli to the temple. Book only through the official IRCTC HeliYatra portal; there is no other legitimate seller, and the helicopter-ticket scam is the most common one on this circuit.' },
  { q:'Can elderly pilgrims visit Yamunotri?', a:'Yes, and many do, but it is the dham that needs the most planning for them. The drive is the gentlest of the four; the trek is not. Book a pony or doli the evening before at Janki Chatti, start at first light so the climb is done before the sun is on the path, and sleep at Barkot rather than Janki Chatti so the night is spent 1,400 m lower. Anyone with a heart condition should read the medical-certificate rules before booking.' },
];

export const metadata = {
  title: { absolute: 'How to Reach Yamunotri | Distance, Road Route & Trek' },
  description: 'Haridwar to Yamunotri is 222 km to Janki Chatti, then a 6 km trek. Stage-by-stage road route, distances from Rishikesh, Dehradun and Delhi, pony and doli rates, bus, helicopter and where to sleep.',
  keywords: ['how to reach yamunotri','haridwar to yamunotri distance','yamunotri route','janki chatti to yamunotri trek','dehradun to yamunotri','yamunotri by road','nearest railway station to yamunotri','yamunotri pony rate'],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: 'How to Reach Yamunotri — Distance, Road Route & Trek Guide',
    description: 'Haridwar to Yamunotri is 222 km to Janki Chatti, then a 6 km trek. Stage-by-stage route, pony and doli rates, bus, helicopter and where to sleep.',
    url: `${SITE.baseUrl}${PAGE}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `How to Reach Yamunotri — Road Route & Trek Guide | ${SITE.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach Yamunotri — Distance, Road Route & Trek Guide',
    description: 'Haridwar to Yamunotri is 222 km to Janki Chatti, then a 6 km trek. Route, pony and doli rates, bus, helicopter and where to sleep.',
    images: [{ url: '/opengraph-image', alt: `How to Reach Yamunotri — Road Route & Trek Guide | ${SITE.name}` }],
  },
};

const th = { padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' };

export default function HowToReachYamunotri() {
  const cab = getRoute('haridwar-to-yamunotri-cab');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Article',
        headline:'How to Reach Yamunotri — Distance, Road Route & Trek Guide',
        description:'Road, trek, bus, helicopter and train routes to Yamunotri, with a stage-by-stage drive table, pony and doli rates and where to break the journey.',
        image:`${SITE.baseUrl}/opengraph-image`,
        datePublished:PAGE_DATES.createdISO, dateModified:PAGE_DATES.modifiedISO,
        author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
        publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
        mainEntityOfPage:`${SITE.baseUrl}${PAGE}`,
        about:{ '@type':'Place', name:'Yamunotri Temple', geo:{ '@type':'GeoCoordinates', latitude:31.0139, longitude:78.4600, elevation:'3291' } },
      })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
          { '@type':'ListItem', position:2, name:'Yamunotri Yatra', item:`${SITE.baseUrl}/yamunotri-yatra` },
          { '@type':'ListItem', position:3, name:'How to Reach Yamunotri', item:`${SITE.baseUrl}${PAGE}` },
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🗺️ Travel Guide · Yamunotri</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            How to Reach Yamunotri Dham
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Distance and driving time from Haridwar, Rishikesh, Dehradun and Delhi — then the 6 km trek, on foot, pony or doli
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link prefetch={false} href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link prefetch={false} href="/yamunotri-yatra" style={{ color:'var(--teal)', textDecoration:'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>How to Reach</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:10 }}>
          {[['Altitude','3,291 m'],['Road ends at','Janki Chatti (2,650 m)'],['From Haridwar','222 km by road'],['Driving time','8–9 hrs'],['Trek','6 km, 641 m climb'],['Season','19 Apr – 11 Nov 2026']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <AnswerBox>
          <strong>Haridwar to Yamunotri is 222 km by road to Janki Chatti, then a 6 km trek to the temple.</strong> The
          drive takes 8–9 hours via Rishikesh, Chamba, Brahmakhal and Barkot, and the road ends at Janki Chatti at
          2,650 m. The final 6 km climbs 641 m and takes 2.5–3 hours on foot, or 2 hours by pony from the road head.
          Almost everyone sleeps at Barkot and walks the next morning. Nearest railhead Haridwar, nearest airport
          Dehradun (178 km — the shortest dham drive from any base), helicopter to Kharsali across the river.
        </AnswerBox>

        <p style={p}>
          Yamunotri is the first shrine of the clockwise Char Dham circuit and, of the four, the one with the gentlest
          drive and the hardest last hour. Nothing about the road through Chamba and the Yamuna valley is frightening,
          and 222 km is a comfortable day. The catch is that the road stops. The temple sits at 3,291 m at the head of
          the valley, and the only way up from Janki Chatti is a 6 km path that climbs 641 m — steeper per kilometre
          than the Kedarnath trail, even though it is a third of the length.
        </p>
        <p style={p}>
          That shape decides the plan. Pilgrims who drive up from Haridwar and attempt the climb the same afternoon
          regularly regret it: they arrive at the road head tired, start in the heat, and reach 3,291 m having gained
          the altitude of the whole day in one push. Every itinerary we run sleeps at Barkot and starts the trek at
          first light. The rest of this page is the drive, the trek options, and where to break the journey.
        </p>

        <h2 style={h2}>Distance to Yamunotri from Haridwar, Rishikesh, Dehradun and Delhi</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:600 }}>
            <caption className="sr-only">Road distance and driving time to Janki Chatti, the Yamunotri road head, from major starting points</caption>
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
          All distances are to Janki Chatti, where the road ends; add the 6 km trek to reach the temple. These are
          road figures, not straight-line ones — a map app will show something shorter. The return leg is the same
          distance, so Yamunotri to Haridwar is also 222 km.
        </p>

        <h2 style={h2}>Road route — Haridwar to Janki Chatti, stage by stage</h2>
        <p style={p}>
          The route is <strong>Haridwar → Rishikesh → Chamba → Brahmakhal → Barkot → Janki Chatti</strong>. You share
          the road with Gangotri traffic as far as Brahmakhal, where the two valleys part — Gangotri goes on to Dharasu
          and the Bhagirathi, Yamunotri drops into the Yamuna valley at Barkot. From Barkot the road narrows and
          follows the river up past Hanuman Chatti to Janki Chatti, with Kharsali, the winter seat, on the far bank.
        </p>

        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:660 }}>
            <caption className="sr-only">Haridwar to Yamunotri road route, stage by stage, with distance and driving time</caption>
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
                <th scope="row" style={{ padding:'10px 12px', fontWeight:800, color:'var(--navy)', fontSize:13, textAlign:'left' }}>Haridwar → Janki Chatti</th>
                <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:800, fontFamily:'monospace' }}>{R.kmLabel.replace(' to Janki Chatti','')}</td>
                <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:700 }}>{R.time}</td>
                <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>Then 6 km on foot. Split over two days in practice.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          The Barkot–Janki Chatti stretch is the most landslide-prone road on the whole circuit in July and August.
          Check <Link prefetch={false} href="/char-dham-road-status" style={{ color:'var(--teal)' }}>today&rsquo;s road status</Link>{' '}
          the morning you leave Barkot. Night driving is banned on all Char Dham routes between 10 PM and 4 AM.
        </p>

        <h2 style={h2}>The trek — Janki Chatti to Yamunotri temple</h2>
        <p style={p}>
          Six kilometres, 641 metres of climb, a paved but steep path that starts climbing from the first bend and does
          not level out until the temple. It runs above the Yamuna through pine and, in May, flowering rhododendron,
          with chai stalls and rest platforms most of the way. The path is rock, which is fine dry and slick wet; in
          rain the same climb stretches past four hours and the descent is the dangerous half.
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:620 }}>
            <caption className="sr-only">Ways up the 6 km Janki Chatti to Yamunotri trek, with cost and time</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['How','Cost','Time','Notes'].map(x=> <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {trekOptions.map((t,i)=>(
                <tr key={t.type} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left', whiteSpace:'nowrap' }}>{t.type}</th>
                  <td style={{ padding:'10px 12px', color:'var(--gold-dark)', fontWeight:700, whiteSpace:'nowrap' }}>{t.cost}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', whiteSpace:'nowrap' }}>{t.time}</td>
                  <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Pony and doli rates are the Janki Chatti stand&rsquo;s government rate card for the season and move a little
          year to year; the bands above are what our groups paid through {SITE.season}. Pay at the counter, keep the
          slip, and do not pay a tout on the road in.
        </p>

        <h3 style={h3}>Start early — the reason is the sun, not the crowd</h3>
        <p style={p}>
          The path faces the morning sun from about nine. Groups that leave Janki Chatti at six climb in shade and
          reach the temple by nine; groups that leave at nine climb in full sun and reach it at noon, which is also
          when the Surya Kund darshan queue is longest. The pony stand opens at first light. If you have slept at
          Barkot, that means leaving the hotel at four; if that sounds early, it is still the plan that works.
        </p>

        <h2 style={h2}>Where to break the journey</h2>
        <p style={p}>
          Haridwar to the temple in one day is physically possible and a bad idea for the same reason as at Gangotri:
          you would gain 3,000 m of altitude in a single push and then start a climb. Sleep low, walk early.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap:12, marginBottom:24 }}>
          {[
            { town:'Barkot', alt:'1,220 m', why:'The standard halt, 45 km and 2 hours short of the road head. Hotels at every price, a market, ATMs, and low enough to sleep properly. This is where we put every group — the stay comparison is on the Yamunotri yatra page.', href:'/yamunotri-yatra' },
            { town:'Janki Chatti', alt:'2,650 m', why:'Right at the trailhead, so the morning is shorter — but rooms are few and basic, it is cold, and you sleep 1,400 m higher than Barkot. Only if you are fit and want the earliest possible start.' },
            { town:'Kharsali', alt:'2,675 m', why:'Across the river from Janki Chatti, where the deity winters and the helipad is. Quieter than Janki Chatti with a handful of guesthouses; the same altitude caveat applies.', href:'/kharsali-yamunotri-winter-seat' },
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
          A private car is how most families do this road. The driver takes you to Barkot, waits overnight, runs you
          the 45 km to Janki Chatti before dawn and waits there while you climb. These are our one-way bands for
          Haridwar to Janki Chatti; the round trip with the Barkot night is quoted as one all-in figure on enquiry.
        </p>
        {cab?.fares?.length > 0 && (
          <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:420 }}>
              <caption className="sr-only">Haridwar to Yamunotri (Janki Chatti) one-way taxi fare by vehicle</caption>
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

        <h2 style={h2}>By bus and shared jeep</h2>
        <p style={p}>
          There is no single bus from Haridwar to Janki Chatti. The journey is two legs: a bus from Rishikesh bus stand
          to Barkot, then a shared jeep from Barkot to Janki Chatti. Uttarakhand Transport Corporation and private
          operators both run the first leg through the season, and there are also direct Dehradun–Barkot buses via
          Vikasnagar for anyone arriving by air.
        </p>
        <p style={p}>
          Everything on this road leaves early. Rishikesh departures cluster between 4 am and 7 am and are gone by
          late morning, because no driver will be in the Yamuna valley after dark. Shared jeeps at Barkot fill and go
          from first light. Budget roughly ₹350–500 for the bus and ₹300–500 for the jeep seat. It is the cheapest
          way up and comfortably the slowest; a group of four usually finds a private vehicle costs about the same
          per head and saves most of a day.
        </p>

        <h2 style={h2}>Helicopter to Yamunotri (Kharsali helipad)</h2>
        <p style={p}>
          The helicopter for this sector flies from Sahastradhara Helipad in Dehradun and lands at Kharsali, on the
          far bank of the Yamuna from Janki Chatti, about a kilometre from the temple. From the helipad it is still a
          short walk or a doli. It is sold as a leg of the{' '}
          <Link prefetch={false} href="/char-dham-helicopter" style={{ color:'var(--teal)' }}>Char Dham helicopter circuit</Link>{' '}
          rather than as a standalone hop, and it is the one dham where the helicopter does not save you the walk
          entirely. Book only through the official IRCTC HeliYatra portal — the helicopter-ticket scam is the most
          common fraud on this circuit, and no agent can sell you a seat.
        </p>

        <h2 style={h2}>By train</h2>
        <p style={p}>
          There is no railway in the Yamuna valley. The two practical railheads are Haridwar, 222 km from Janki Chatti,
          and Dehradun, 178 km. Haridwar has far more trains from across India and is where the classic circuit
          starts; Dehradun has the Shatabdi and Jan Shatabdi from New Delhi and, for Yamunotri specifically, the
          shorter road — the direct route through Vikasnagar makes Dehradun the closest base city to this dham.
        </p>

        <h3 style={h3}>Registration and the medical certificate</h3>
        <p style={p}>
          Char Dham yatra registration is mandatory, free, and checked at the barrier below Barkot — do it{' '}
          <Link prefetch={false} href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)' }}>online before you travel</Link>.
          Yamunotri is one of the two trek dhams, so the{' '}
          <Link prefetch={false} href="/blog/char-dham-yatra-medical-certificate" style={{ color:'var(--teal)' }}>medical-certificate rules</Link>{' '}
          for older pilgrims apply here; health desks at Janki Chatti can turn back anyone with a heart condition
          who does not have one.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Yamunotri as part of a yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We run the road, the Barkot night, the dawn start and the pony booking — you only do the darshan.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Yamunotri. Please share the route plan and vehicle options.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link prefetch={false} href="/yamunotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>Yamunotri yatra package →</Link>
          </div>
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Yamunotri Temple','/yamunotri-temple'],['Yamunotri Weather','/yamunotri-weather'],['Yamunotri Yatra & where to stay','/yamunotri-yatra'],['Kharsali, the winter seat','/kharsali-yamunotri-winter-seat'],['How to Reach Gangotri','/how-to-reach-gangotri'],['How to Reach Badrinath','/how-to-reach-badrinath'],['Char Dham Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link prefetch={false} key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
