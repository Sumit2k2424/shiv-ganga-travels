import Link from 'next/link';
import { SITE } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from "@/lib/prose";

const PAGE = '/how-to-reach-gangotri';
const VERIFIED_ISO = '2026-08-22';

/* Gangotri is the one dham you can drive to the door of, and nearly every
   query that lands here is really one of three questions: how far, how long,
   and can my parents do it. The stage table and the "where to break the
   journey" section answer all three; the HowTo node makes the sequence
   machine-readable, which is what gets a route lifted into an AI answer. */
const stages = [
  { from:'Haridwar',   to:'Rishikesh',   dist:'25 km',  time:'45 min',   note:'NH34. Traffic through Rishikesh is the slow part.' },
  { from:'Rishikesh',  to:'Chamba',      dist:'60 km',  time:'2 hr',     note:'Climb begins. Tehri Dam viewpoints on the left.' },
  { from:'Chamba',     to:'Dharasu',     dist:'45 km',  time:'1.5 hr',   note:'Ridge road above the Tehri reservoir.' },
  { from:'Dharasu',    to:'Uttarkashi',  dist:'35 km',  time:'1 hr',     note:'Drops to the Bhagirathi valley. Last full-service town.' },
  { from:'Uttarkashi', to:'Harsil',      dist:'75 km',  time:'2.5 hr',   note:'Narrow, deodar forest, the prettiest stretch of the drive.' },
  { from:'Harsil',     to:'Gangotri',    dist:'25 km',  time:'45 min',   note:'River gorge. Road ends at the temple car park.' },
];

const faqs = [
  { q:'How to reach Gangotri from Haridwar?', a:'Haridwar to Gangotri is about 265km by road via Rishikesh, Chamba, Dharasu and Uttarkashi, and takes 9–10 hours of actual driving. Almost nobody does it in one day: the standard plan is an overnight halt at Uttarkashi, 165km in, leaving a comfortable 100km run to the temple the next morning. Gangotri is directly accessible by road — there is no trek to the temple.' },
  { q:'What is the nearest airport to Gangotri?', a:'Jolly Grant Airport, Dehradun, roughly 230km away. From there it is a taxi to Uttarkashi (about 145km, 4–5 hours) and on to Gangotri (100km, 3 hours). Flights into Dehradun are frequently cancelled or diverted in the monsoon, so if you are flying in during July or August, keep a spare day.' },
  { q:'Is there a helicopter to Gangotri?', a:'Not to Gangotri itself. Helicopters for this sector land at Harsil, about 25km short of the temple, and you transfer by road for the last 45 minutes. Harsil sorties run from Sahastradhara Helipad in Dehradun and are usually sold as part of a Char Dham helicopter package rather than as a standalone hop.' },
  { q:'Can you drive right up to Gangotri temple?', a:'Yes. Gangotri is the only one of the four dhams where the motor road reaches the temple. The car park is a few minutes\' walk from the shrine, across the Bhagirathi footbridge. That makes it the most realistic dham for elderly pilgrims, wheelchair users and families with small children — the constraint here is the altitude at 3,415m, not the walking.' },
  { q:'Is there a bus to Gangotri?', a:'Yes, in season. Uttarakhand Transport Corporation and private operators run buses from Rishikesh bus stand to Uttarkashi daily, and shared jeeps cover Uttarkashi to Gangotri. Buses leave Rishikesh early — most departures are between 4am and 7am, and there is little after mid-morning, because drivers will not take the upper Bhagirathi road in the dark.' },
  { q:'How long does the Haridwar to Gangotri drive take?', a:'Nine to ten hours of driving for 265km, which surprises people who divide distance by speed. The average works out under 30km/h because of the gradient, the hairpins above Chamba and the single-lane sections past Harsil. Add an hour in the monsoon for slow-moving stretches at landslide-prone points.' },
  { q:'Do I need a permit for Gangotri?', a:'Not for the temple — Char Dham yatra registration is all that is required, and it is free. A permit is needed only if you continue past Gangotri towards the Gaumukh glacier inside Gangotri National Park, which is issued at the park office in Uttarkashi and capped at 150 trekkers a day. Foreign nationals need an Inner Line Permit for areas beyond Bhairon Ghati.' },
];

export const metadata = {
  title: { absolute: `How to Reach Gangotri ${SITE.season} | Road Route & Helicopter Guide` },
  description: `Road route, helicopter, train options — complete guide to reach Gangotri Dham from Haridwar, Delhi and Dehradun.`,
  keywords: ['how to reach gangotri','gangotri route from haridwar','haridwar to gangotri distance','uttarkashi to gangotri','gangotri by road',`nearest airport gangotri ${SITE.season}`],
  alternates: { canonical: `${SITE.baseUrl}/how-to-reach-gangotri` },
  openGraph: {
    title: `How to Reach Gangotri ${SITE.season} — Road Route & Guide`,
    description: 'Road route, helicopter, train options — complete guide to reach Gangotri Dham from Haridwar, Delhi and Dehradun.',
    url: `${SITE.baseUrl}/how-to-reach-gangotri`, type: 'article',
  
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `How to Reach Gangotri ${SITE.season} — Road Route & Guide | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `How to Reach Gangotri ${SITE.season} — Road Route & Guide`,
    description: 'Road route, helicopter, train options — complete guide to reach Gangotri Dham from Haridwar, Delhi and Dehradun.',
    images: [{ url: '/opengraph-image', alt: `How to Reach Gangotri ${SITE.season} — Road Route & Guide | Shiv Ganga Travels` }],
  },
};


export default function HowToReachGangotri() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity: faqs.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
      })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'HowTo',
        name:'How to reach Gangotri Dham from Haridwar',
        description:'The road route from Haridwar to Gangotri temple, stage by stage — 265km, 9–10 hours of driving, normally split over two days with an overnight halt at Uttarkashi.',
        totalTime:'PT10H',
        estimatedCost:{ '@type':'MonetaryAmount', currency:'INR', value:'8500' },
        supply:[{ '@type':'HowToSupply', name:'Char Dham yatra registration (free)' }],
        step: stages.map((s, i) => ({
          '@type':'HowToStep',
          position: i + 1,
          name:`${s.from} to ${s.to}`,
          text:`${s.from} to ${s.to} — ${s.dist}, about ${s.time}. ${s.note}`,
        })),
      })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Article',
        headline:`How to Reach Gangotri Dham ${SITE.season}`,
        description:'Road, helicopter, bus and train routes to Gangotri, with a stage-by-stage drive table and where to break the journey.',
        image:`${SITE.baseUrl}/opengraph-image`,
        datePublished:'2026-01-28', dateModified:VERIFIED_ISO,
        author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
        publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
        mainEntityOfPage:`${SITE.baseUrl}${PAGE}`,
        about:{ '@type':'Place', name:'Gangotri Temple', geo:{ '@type':'GeoCoordinates', latitude:30.9947, longitude:78.9398, elevation:'3415' } },
        speakable:{ '@type':'SpeakableSpecification', cssSelector:['.speakable-answer'] },
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
            How to Reach Gangotri Dham 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Road, helicopter and train options — all routes from Haridwar, Delhi and Dehradun
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/gangotri-yatra" style={{ color:'var(--teal)', textDecoration:'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>How to Reach</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: {SITE.lastUpdated}</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:10 }}>
          {[['Altitude','3,415m'],['From Haridwar','265km by road'],['Drive Time','9–10 hrs'],['Trek Required','None (motor road)'],['Nearest City','Uttarkashi (100km)'],['Temple Opens','Apr 19, 2026']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <AnswerBox>
          <strong>Gangotri is 265km from Haridwar and is the only Char Dham you can drive to the door of.</strong>{' '}
          The route runs Haridwar → Rishikesh → Chamba → Dharasu → Uttarkashi → Harsil → Gangotri, and takes
          <strong> 9–10 hours</strong> of driving — normally split over two days with an overnight halt at
          Uttarkashi. There is no trek to the temple. The nearest airport is Dehradun (230km) and the nearest
          railhead is Haridwar. Helicopters serve Harsil, 25km short, not Gangotri itself.
        </AnswerBox>

        <p style={p}>
          Gangotri has one significant advantage over the other three Char Dhams — you can drive all the way to the temple itself. There is no mandatory trek. The Gangotri temple sits directly beside the motorable road at 3,415 metres on the banks of the Bhagirathi River. This makes it the most accessible dham for elderly pilgrims and families with children. The 265km drive from Haridwar passes through some of the most dramatic Himalayan scenery in India.
        </p>
        <p style={p}>
          The catch is not the walking, it is the altitude and the driving day. At 3,415m Gangotri is higher
          than Badrinath, and pilgrims who sail through the road journey sometimes struggle at the temple
          itself. And 265km sounds like a half-day until you do the arithmetic: the average speed on this road
          works out under 30km/h, which is why the itinerary below breaks the journey rather than pushing
          through.
        </p>

        <h2 style={h2}>Road Route — Haridwar to Gangotri</h2>
        <p style={p}>
          The route follows: <strong>Haridwar → Rishikesh → Devprayag → Tehri → Dharasu → Uttarkashi → Gangotri</strong>. The road is NH94 until Uttarkashi, and then a state highway for the final 100km to Gangotri. The Uttarkashi–Gangotri stretch runs alongside the Bhagirathi River through narrow gorges — it is scenic but requires an experienced hill driver.
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
                <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:700 }}>8.5 hrs driving</td>
                <td style={{ padding:'10px 12px', fontSize:12.5, color:'var(--text-muted)' }}>9–10 hrs elapsed with stops. Split over two days in practice.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Beyond the temple, the 18km trek to the <Link href="/gaumukh" style={{ color:'var(--teal)' }}>Gaumukh glacier</Link>{' '}
          is a separate expedition needing its own permit and at least a full day — it is not part of a
          standard Gangotri visit.
        </p>

        <h2 style={h2}>Where to break the journey</h2>
        <p style={p}>
          Trying to do Haridwar to Gangotri in a single day is the most common planning mistake on this
          route. It is physically possible if you leave at 4am, but it means arriving at 3,415m having gained
          3,100m of altitude in one push, which is precisely the profile that produces a headache and a
          sleepless night. Every itinerary we run breaks it.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap:12, marginBottom:24 }}>
          {[
            { town:'Uttarkashi', alt:'1,158m', why:'The standard halt, 165km in. Full range of hotels, ATMs, a district hospital and the Gangotri National Park permit office. Leaves an easy 100km for the morning.' },
            { town:'Harsil', alt:'2,620m', why:'25km short of the temple. Far prettier than Uttarkashi and better for acclimatisation, but limited rooms and they sell out. Book ahead or do not count on it.' },
            { town:'Barkot', alt:'1,220m', why:'Only if you are combining Gangotri with Yamunotri. It is off the direct line to Gangotri, so it costs you distance unless the Yamunotri leg comes first.' },
          ].map(s=>(
            <div key={s.town} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:2 }}>{s.town}</div>
              <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:700, fontFamily:'monospace', marginBottom:8 }}>{s.alt}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{s.why}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>By bus and shared jeep</h2>
        <p style={p}>
          There is no direct bus from Haridwar to Gangotri. The journey is done in two legs: a bus from
          Rishikesh bus stand to Uttarkashi, then a shared jeep from Uttarkashi to Gangotri. Uttarakhand
          Transport Corporation and private operators both run the first leg through the season.
        </p>
        <p style={p}>
          The thing to know is that everything on this road leaves early. Rishikesh departures are
          concentrated between 4am and 7am and thin out to nothing by late morning, because drivers will not
          be on the upper Bhagirathi road after dark. Shared jeeps from Uttarkashi work the same way — go to
          the stand at first light, and expect to wait until the jeep fills. Budget roughly ₹400–600 for the
          bus and ₹500–800 for the jeep seat. It is the cheapest way to reach Gangotri and comfortably the
          slowest; a group of four will usually find a private vehicle costs about the same per head and saves
          most of a day.
        </p>

        <h3 style={h3}>Registration and permits</h3>
        <p style={p}>
          Char Dham yatra registration is mandatory, free, and checked at barriers on the way up — do it at{' '}
          <Link href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)' }}>registration</Link>{' '}
          before you travel rather than queueing at Uttarkashi. A separate permit is required only if you
          continue past the temple towards Gaumukh, inside Gangotri National Park; it is issued at the park
          office in Uttarkashi and capped at 150 trekkers a day, so it is worth arranging in advance in peak
          season.
        </p>

        <h2 style={h2}>Helicopter to Gangotri (Harsil Helipad)</h2>
        <p style={p}>
          The helicopter for the Gangotri sector lands at Harsil Helipad, approximately 25km from the Gangotri temple. From Harsil, a road transfer takes you to the temple (about 45 minutes). This option is available as part of the Char Dham helicopter package from Sahastradhara Helipad in Dehradun. Individual helicopter bookings for Gangotri are available via the IRCTC heliyatra portal.
        </p>

        <h2 style={h2}>Trains to Reach Gangotri</h2>
        <p style={p}>
          There is no railway line to Gangotri or Uttarkashi. The two practical railheads are Haridwar (265km from Gangotri) and Dehradun (230km). From both, you hire a taxi or join a package vehicle. Haridwar has far more train connections from cities across India, making it the preferred railhead for most pilgrims. The Dehradun Shatabdi Express from New Delhi is comfortable for NCR pilgrims heading to Gangotri.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Book Gangotri as Part of Char Dham Yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We manage all road transport, accommodation at Uttarkashi, and darshan arrangements — you only focus on the darshan.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Gangotri as part of Char Dham Yatra 2026. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/gangotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>View Gangotri packages →</Link>
          </div>
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Yamunotri','/how-to-reach-yamunotri'],['How to Reach Badrinath','/how-to-reach-badrinath'],['Gangotri Weather','/gangotri-weather'],['Haridwar to Kedarnath Cab','/cabs/haridwar-to-kedarnath-cab'],['Char Dham Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
