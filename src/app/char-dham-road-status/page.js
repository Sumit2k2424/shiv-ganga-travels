import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import CharDhamRoadChecker from '@/components/CharDhamRoadChecker';
import { h2, p } from "@/lib/prose";
import AnswerBox from '@/components/AnswerBox';

const UPDATED = 'September 1, 2026';
const UPDATED_ISO = '2026-09-01';

export const metadata = {
  title: { absolute: `Char Dham Road Status ${SITE.season} | Live Route Updates | All 4 Routes` },
  description: `Which Char Dham stretches are open, closed or slow today across all four routes — landslide zones, diversions and the official links to verify before you drive.`,
  keywords: ['char dham road status','char dham yatra road condition today','char dham highway completion date','kedarnath road condition today live','badrinath road condition today','yamunotri road condition today','gangotri road condition today','char dham road project current status'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-road-status` },
  openGraph: {
    title: `Char Dham Road Status Today (${SITE.season}) — All Four Routes`,
    description: 'Route-by-route road conditions, highway completion %, landslide zones and the official links to verify live status before you travel.',
    url: `${SITE.baseUrl}/char-dham-road-status`,
    type: 'article',
  
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham road status — live highway conditions' }],
  },
};

const MONSOON_NOTE = `Monsoon update (${UPDATED}): the yatra is running and is now into its second phase, the post-monsoon stretch that runs to the November closing dates. The headline change since our last check is the helicopter: on August 29 the Rudraprayag District Magistrate, Vishal Mishra, confirmed that Kedarnath heli services — suspended since July 1 for the monsoon under DGCA guidance — are being prepared to resume on September 15, with a DGCA team inspecting in the first week of September and booking dates announced after that. Treat September 15 as the plan rather than a guarantee, because it depends on that inspection clearing. Until then the ways up are the trek, pony and palki. The rain has not finished: IMD put Dehradun, Bageshwar, Chamoli and Nainital under heavy-to-very-heavy rain on August 31, with thunderstorms and intense spells, and heavy rain across Tehri, Pauri, Rudraprayag, Pithoragarh, Uttarkashi, Champawat and Udham Singh Nagar the same day. For September 1 the forecast keeps heavy rain at isolated places over Pauri, Uttarkashi, Rudraprayag, Chamoli, Bageshwar, Nainital, Champawat and Haridwar — which this time does include all three districts the yatra routes actually run through. The State Emergency Operations Centre direction that trekking not be permitted while rain is falling still stands, so expect a Gaurikund start to be held at the barrier during a downpour. On roads, we have found no report of a state-wide halt since the two-day administrative pause of July 28–29, and no confirmed highway blockage since August 6, when debris cut the Badrinath highway near Helang (Chamoli), the Gangotri highway (NH-34) near Dharasu Nalu Pani and the Yamunotri highway (NH-134) near Silai Bend and at Syanachatti — all cleared the same day. That is an absence of reports rather than a guarantee of clear tarmac, so keep the buffer day. Night driving on Char Dham routes remains banned between 10 PM and 4 AM, and passenger vehicles still need a valid Green Card for hill routes. On footfall, registrations have crossed 50 lakh and roughly 45 lakh pilgrims have now visited the four shrines, so book September and October hotels and vehicles earlier than you normally would. Confirm conditions on the morning you travel — our drivers report road status daily, or check the official links below.`;

// Dated bulletins from the field & official advisories (most recent first)
const LATEST_UPDATES = [
  { date:'Sep 1, 2026',  text:'IMD Dehradun keeps heavy rain at isolated places in the forecast for September 1 across Pauri, Uttarkashi, Rudraprayag, Chamoli, Bageshwar, Nainital, Champawat and Haridwar. Unlike the mid-August spell, this one does name all three yatra districts — Uttarkashi, Chamoli and Rudraprayag. The standing State Emergency Operations Centre direction applies: trekking is not to be permitted while rain is actually falling, so a Gaurikund start can be held at the barrier and released when it eases. State control room 0135-2710306, toll-free 1070.' },
  { date:'Aug 31, 2026', text:'A wet end to the month. IMD forecast heavy to very heavy rain at isolated places over Dehradun, Bageshwar, Chamoli and Nainital, with thunderstorms, lightning and very intense to extremely intense spells in the same four districts, plus heavy rain across Tehri, Pauri, Rudraprayag, Pithoragarh, Uttarkashi, Champawat and Udham Singh Nagar. The standing warning with this pattern is small-to-moderate landslides blocking hill highways across Garhwal and Kumaon.' },
  { date:'Aug 29, 2026', text:'Kedarnath helicopter services are being prepared to resume on September 15. Rudraprayag District Magistrate Vishal Mishra confirmed that a DGCA team will inspect in the first week of September and that services resume after it, with heli-ticket booking dates announced separately. The services have been suspended since July 1 for the monsoon. This is the second phase of the Kedarnath Yatra, running from September until the temple closes in November — treat September 15 as the plan rather than a fixed date, since it depends on the inspection clearing.' },
  { date:'Aug 14–17, 2026', text:'IMD Dehradun issued a fresh multi-day warning on the afternoon of August 14. The orange alert moves district to district: August 14 covered Dehradun, Pauri, Haridwar, Pithoragarh, Bageshwar and Nainital; August 15 narrowed to Pithoragarh and Bageshwar; August 16 covers Dehradun, Champawat, Bageshwar, Udham Singh Nagar and Nainital; August 17 covers Dehradun, Pauri and Tehri. Uttarkashi, Chamoli and Rudraprayag — the three districts the yatra routes actually run through — are on yellow alert rather than orange for this spell. The State Emergency Operations Centre ordered that trekking not be permitted during active rainfall, put road-clearing crews on standby for national and state highways, and arranged food and medical kits for anyone stranded. State control room 0135-2710306, toll-free 1070.' },
  { date:'Aug 13, 2026', text:'Char Dham registrations for the 2026 season crossed 50 lakh — Kedarnath 19.34 lakh and Badrinath 17.79 lakh between them. The two shrines have taken more than ₹74.5 crore in offerings and revenue so far, roughly ₹37 crore of it at Kedarnath. Officials confirmed arrangements were running normally despite the seasonal rain.' },
  { date:'Aug 11, 2026', text:'The state reported the yatra continuing smoothly through the monsoon, with 30,62,228 pilgrims having completed darshan at the two main shrines — 16,12,112 at Kedarnath and 14,50,116 at Badrinath. Worth knowing if you are planning a September trip: this is already a record-pace season, so book hotels and vehicles earlier than you normally would for the post-monsoon window.' },
  { date:'Aug 7, 2026',  text:'Asan Barrage near Dehradun released roughly 39,000 cusecs into the Yamuna for about three hours after debris clogged the trash-rack screen; five warning sirens sounded at 8:15 AM. No Char Dham highway was cut, but it is a fair marker of how much water the catchments were carrying this week.' },
  { date:'Aug 6, 2026',  text:'A heavy-rain day that hit three of the four routes. The Badrinath highway was blocked near Helang (Chamoli) when debris and loose rock came down; the Chamoli administration asked pilgrims, tourists and residents to avoid unnecessary travel on the stretch until it was declared safe. The Gangotri highway (NH-34) was blocked near Dharasu Nalu Pani, then reopened for small vehicles near Papdagad with heavy vehicles restored after. The Yamunotri highway (NH-134) was blocked near Silai Bend in the Durbil area and again near Silaiband at Syanachatti. NHAI, BRO and PWD crews worked all three with heavy machinery.' },
  { date:'Aug 5, 2026',  text:'IMD placed ten Uttarakhand districts on alert through August 10 — orange alert for Dehradun and Bageshwar, heavy rain forecast for Tehri, Pauri Garhwal, Chamoli, Uttarkashi, Rudraprayag, Nainital, Champawat and Pithoragarh. Schools shut in Dehradun and Bageshwar. CM Dhami directed SDRF, NDRF and district administrations to stay on immediate-response footing; pilgrims were asked to follow advisories and keep clear of rivers and drains.' },
  { date:'Aug 3–4, 2026', text:'The Karnaprayag–Nainisain motor road in Chamoli was cut for more than 24 hours after a section of hillside collapsed near Peepalsera. This is a district link road, not one of the four dham highways, but it is the connection dozens of villages depend on and it has come down repeatedly since late July — worth knowing if your itinerary uses Karnaprayag as a halt.' },
  { date:'Jul 30, 2026', text:'Char Dham Yatra resumed at 6 AM across all four routes after a two-day administrative halt. The Special Officer on Duty confirmed the pilgrimage restarted smoothly on directions from the Garhwal Commissioner; minor blockages from ongoing rain are still being cleared as they occur.' },
  { date:'Jul 28–29, 2026', text:'Yatra paused for two days as heavy rain triggered fresh landslides: the Badrinath highway (NH-58) was blocked near Bhanerpani in the Pipalkoti area (Chamoli district), and the Pokhari–Rudraprayag motor road was blocked about 1 km before Guniyala Khal by large rocks and debris. NDRF, SDRF, police and road-clearing crews were deployed; rivers in Rudraprayag district (Alaknanda, Mandakini) neared warning levels and IMD issued red/orange alerts.' },
  { date:'Jul 12, 2026', text:'Landslide blocked the Kedarnath highway at Munkatiya, near Sonprayag (Rudraprayag), after continuous heavy rain. JCBs deployed and vehicular movement restored; the district disaster control room confirmed the yatra continued. Debris also fell near Mussoorie Bend (Kempty) on the Tehri side, briefly suspending the Nainbagh route.' },
  { date:'Jul 3, 2026',  text:'IMD issued an orange alert for heavy-to-very-heavy rain across Uttarakhand. Authorities advised pilgrims to avoid unnecessary night travel and expect 3–5 hour delays on major highways; NH-58 near Joshimath reported partial blockage, with Patalganga and Tangni points shutting intermittently.' },
  { date:'Jul 1, 2026',  text:'Kedarnath helicopter services suspended due to poor visibility and high winds; shuttle and pony/palki operations from Gaurikund continued as weather allowed.' },
  { date:'Apr 2026',     text:'Government sanctioned ₹461 crore for landslide mitigation at 17 sensitive locations on the Yamunotri route (NH-134) — slope and drainage work is ongoing, so expect single-lane stretches this season.' },
];

const ROUTES = [
  { dham:'Yamunotri', via:'NH-134, Dharasu → Barkot → Janki Chatti', status:'Open · last cleared Aug 6 · yellow alert', tone:'caution',
    note:'The slowest-progressing route under the all-weather project (~57% widened). Expect narrow single-lane patches between Dharasu Bend and Janki Chatti, plus the most frequent monsoon landslide closures of the four. The last 5–6 km from Janki Chatti to the temple is a steep trek or pony/palki. Current watch (August 2026): NH-134 was blocked twice on August 6 — near Silai Bend in the Durbil area after continuous rockfall, and near Silaiband at Syanachatti under debris — with NHAI crews clearing both. This is the route where a rain day is most likely to cost you hours, so build the buffer here.' },
  { dham:'Gangotri', via:'NH-34, Uttarkashi → Harsil → Gangotri', status:'Open · last cleared Aug 6 · yellow alert', tone:'caution',
    note:'Largely motorable right up to the temple. The Uttarkashi–Gangotri stretch is scenic but has a handful of chronic slide spots near Gangnani and Sungar that get cleared quickly. Snow can briefly shut the road in early and late season. Current watch (August 2026): NH-34 was blocked near Dharasu Nalu Pani on August 6 and reopened near Papdagad for small vehicles first, with heavy vehicles restored after — the usual sequence here, so a car gets through well before a bus does.' },
  { dham:'Kedarnath', via:'NH-109, Rudraprayag → Sonprayag → Gaurikund', status:'Open to Gaurikund · then 16 km trek', tone:'caution',
    note:'The road end is Sonprayag; from there a shuttle runs to Gaurikund, and the 16–18 km trek (or pony/palki) begins. The Fata–Sitapur section is now about 99% widened, so the drive up is far smoother than it used to be. Current watch (early September 2026): this route has had no reported highway blockage since the August 6 rain day, but Rudraprayag is named in the IMD heavy-rain forecast for both August 31 and September 1, so it is back in the wet districts rather than out of them. The Munkatiya point near Sonprayag stays the one to watch — a landslide blocked it on July 12 and JCBs cleared it the same day. The other thing to plan for is the trek itself: the State Emergency Operations Centre has directed that trekking not be allowed while rain is actually falling, so a Gaurikund start can be held at the barrier for a few hours during a downpour and released when it eases. Set off early and you usually walk before the afternoon rain builds. On the helicopter: services have been suspended since July 1 for the monsoon under DGCA guidance, and on August 29 the Rudraprayag DM confirmed they are being prepared to resume on September 15, after a DGCA inspection in the first week of September. Booking dates follow separately. Until that inspection clears, plan on the trek, pony or palki.' },
  { dham:'Badrinath', via:'NH-58, Joshimath → Govindghat → Badrinath', status:'Open · last cleared Aug 6 · yellow alert', tone:'caution',
    note:'You can drive to the temple gate — no trek. The one stretch to respect is the gated section around Joshimath–Badrinath, where the army/BRO regulate one-way traffic through narrow cuttings. Current watch (August 2026): the highway was blocked near Helang (Chamoli) on August 6 when debris and loose rock came down, and the district administration asked people to avoid the stretch until it was declared safe; BRO, NHAI and PWD crews cleared it. Helang, Patalganga, Tangni, Lambagad and Pipalkoti are the recurring boulder-fall points during heavy rain. Time your run with the gate timings and check the morning status.' },
];

const DISTANCES = [
  ['Haridwar → Janki Chatti (Yamunotri base)', '~225 km', '8–9 hrs', '+ 5–6 km trek to temple'],
  ['Haridwar → Gangotri', '~250 km', '9–10 hrs', 'Motorable to temple'],
  ['Haridwar → Sonprayag (Kedarnath base)', '~245 km', '8–9 hrs', '+ 16–18 km trek to temple'],
  ['Haridwar → Badrinath', '~320 km', '10–11 hrs', 'Motorable to temple'],
];

const SOURCES = [
  { l:'Uttarakhand Tourism (UTDB) — official advisories', h:'https://uttarakhandtourism.gov.in/' },
  { l:'Uttarakhand SDMA — road status & State Emergency Operation Centre', h:'https://usdma.uk.gov.in/' },
  { l:'Char Dham registration portal (URN before you travel)', h:'https://registrationandtouristcare.uk.gov.in/' },
  { l:'IMD — Uttarakhand district weather warnings', h:'https://mausam.imd.gov.in/' },
  { l:'Ministry of Road Transport & Highways (project status)', h:'https://morth.nic.in/' },
];

const PAA = [
  { q:'Is the Char Dham road open today?', a:`As of ${UPDATED}, yes — all four routes (Yamunotri, Gangotri, Kedarnath up to Gaurikund, and Badrinath) are open, and there has been no state-wide suspension since the two-day administrative pause of July 28–29. What you should expect instead is single-point blockages that clear within hours: on August 6, debris cut the Badrinath highway near Helang in Chamoli, the Gangotri highway near Dharasu Nalu Pani, and the Yamunotri highway near Silai Bend and at Syanachatti, and crews reopened all three the same day — those remain the last blockages we can confirm. The live weather picture is still wet: IMD had Dehradun, Bageshwar, Chamoli and Nainital under heavy-to-very-heavy rain on August 31, and for September 1 forecast heavy rain at isolated places across Pauri, Uttarkashi, Rudraprayag, Chamoli, Bageshwar, Nainital, Champawat and Haridwar. The State Emergency Operations Centre has directed that trekking not be permitted while rain is actually falling, so a Kedarnath trek start can be held at the barrier during a downpour. Kedarnath helicopter services, suspended since July 1, are being prepared to resume on September 15 subject to a DGCA inspection in the first week of September. Confirm on the day with UTDB or the police helpline (112 / 1070) before you set off.` },
  { q:'Can I travel Char Dham routes at night?', a:'No. Vehicle movement on all Char Dham routes is banned between 10 PM and 4 AM — for private and commercial vehicles alike. The rule cuts accident risk from fog, landslide debris and poor visibility on narrow hill roads, and violations attract penalties. Plan each leg so you reach your night halt before 8–9 PM.' },
  { q:'What is the Green Card rule for Char Dham vehicles?', a:'Every commercial passenger vehicle running on Uttarakhand hill routes — Char Dham, Chopta and other hill destinations — must carry a valid Green Card issued after a fitness check by the transport department. Vehicles without one are turned back at checkpoints. All Shiv Ganga Travels vehicles carry current Green Cards and trip cards, so our guests never face this issue.' },
  { q:'Which Char Dham route has the worst roads in 2026?', a:'Yamunotri (NH-134) is the roughest. It is only about 57% widened under the all-weather project, has narrow single-lane sections between Dharasu and Janki Chatti, and historically sees the most landslide closures. The government approved ₹461 crore in April 2026 for slope and drainage work at 17 sensitive spots on this stretch, but it is not finished yet.' },
  { q:'Is the Char Dham highway project complete?', a:'No. The Chardham Mahamarg Vikas Pariyojana covers about 825 km across 53 packages. Roughly 629 km were complete by mid-2025, so most of the network is done but pockets — chiefly the Yamunotri route — are still under construction. The Kedarnath route (Fata–Sitapur) is about 99% complete.' },
  { q:'How do I check live road conditions before travelling?', a:'Use official sources, not random social posts: the UTDB tourism site for advisories, the IMD site for district rain warnings, and the Uttarakhand Police / district control room helplines (112 and 1070) for live closures. We also call our drivers on the ground each morning — that is usually the fastest read on what is actually moving.' },
  { q:'Which stretches are most prone to landslides?', a:'The usual trouble spots are the Dharasu–Janki Chatti section on the Yamunotri route, patches near Gangnani on the Gangotri road, the Rudraprayag–Sonprayag stretch toward Kedarnath, and the gated Joshimath–Badrinath cuttings. These get cleared fast by JCB teams, but they cause the delays you hear about.' },
  { q:'Is Char Dham Yatra safe by road for senior citizens?', a:'Yes, with planning. Badrinath needs no trek at all and Gangotri is motorable to the temple, so both suit elderly pilgrims. For Kedarnath, a pony or palki avoids the trek — note that the helicopter option is unavailable right now, suspended since July 1 for the monsoon, so do not build an elderly pilgrim\'s itinerary around a chopper until services resume. Build in a rest day to acclimatise, travel by daylight, and keep medication and a charged phone handy. There are 177 ambulances on the routes and an AIIMS Rishikesh helicopter ambulance for emergencies.' },
];

function Schemas() {
  const article = {
    '@context':'https://schema.org', '@type':'Article',
    headline:'Char Dham Road Status Today: Live Route Conditions for All Four Dhams (2026)',
    description: metadata.description,
    image:[`${SITE.baseUrl}/opengraph-image`],
    mainEntityOfPage:`${SITE.baseUrl}/char-dham-road-status`,
    datePublished: UPDATED_ISO, dateModified: UPDATED_ISO,
    author:{ '@type':'Organization', name:`${SITE.name} Route Desk`, url:SITE.baseUrl },
    publisher:{ '@id':`${SITE.baseUrl}/#organization` },
  };
  const faq = { '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  const bc = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Char Dham Yatra',item:`${SITE.baseUrl}/char-dham-yatra`},
    {'@type':'ListItem',position:3,name:'Road Status',item:`${SITE.baseUrl}/char-dham-road-status`},
  ]};
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(article) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/>
  </>);
}

const STATUS_COLOR = { open:'#15803d', caution:'#b45309' };

export default function CharDhamRoadStatus() {
  return (<>
    <Schemas/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:840, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🛣️ Live route conditions · 2026 season</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.7rem,4.5vw,2.9rem)', marginBottom:14 }}>Char Dham Road Status Today — All Four Routes (2026)</h1>
        <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15, lineHeight:1.7 }}>Yamunotri · Gangotri · Kedarnath · Badrinath — open/closed status, highway completion, landslide stretches and the official links to verify before you drive.</p>
      </div>
    </section>

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/char-dham-yatra" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
        <span>Road Status</span>
      </div>
    </nav>


        <AnswerBox>
          <strong>The Char Dham highways are open through the season but they are mountain roads and they close without notice.</strong> The most delay-prone stretches are Rudraprayag to Sonprayag for Kedarnath and Barkot to Janki Chatti for Yamunotri, both of which shut for hours after heavy rain. A night-driving ban runs 10pm to 4am on all four routes. For live status call the state control room on 1070, the district on 1077, or 112 in an emergency.
        </AnswerBox>
    <article style={{ maxWidth:900, margin:'0 auto', padding:'34px 20px 60px' }}>

      <div style={{ display:'flex', flexWrap:'wrap', gap:10, alignItems:'center', fontSize:12.5, color:'var(--text-muted)', marginBottom:22 }}>
        <span>📅 Last verified: <strong style={{ color:'var(--navy)' }}>{UPDATED}</strong></span>
        <span>·</span>
        <span>✍️ By the {SITE.name} Route Desk, Haridwar</span>
      </div>

      <p style={{ ...p, fontSize:16.5, background:'var(--navy-light)', borderRadius:12, padding:'16px 18px' }}>
        <strong>Short answer:</strong> as of {UPDATED}, all four Char Dham routes are open and motorable — Yamunotri, Gangotri, Kedarnath (road runs to Gaurikund, then a 16 km trek) and Badrinath (drive to the gate) — and the yatra has run without a state-wide halt since the two-day pause of July 28–29. The monsoon has not finished: IMD forecast heavy to very heavy rain over Dehradun, Bageshwar, Chamoli and Nainital on August 31, and for September 1 heavy rain at isolated places across Pauri, Uttarkashi, Rudraprayag, Chamoli, Bageshwar, Nainital, Champawat and Haridwar — this spell does name all three yatra districts. The last confirmed highway blockages were on August 6, when single points on the Badrinath, Gangotri and Yamunotri highways were cut by debris and cleared the same day. Kedarnath helicopter services are being prepared to resume on September 15 after a DGCA inspection. Treat the table below as the season picture, not a live feed, and confirm status on the morning you drive using the <a href="#live" style={{ color:'var(--teal)', fontWeight:600 }}>official sources here</a>.
      </p>

      <div style={{ background:'#fff8ed', border:'1px solid #f5d9a8', borderRadius:12, padding:'14px 18px', marginBottom:22 }}>
        <div style={{ fontSize:12, fontWeight:700, color:'#9a6b1f', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:6 }}>⛈️ Monsoon advisory</div>
        <p style={{ ...p, margin:0, fontSize:14 }}>{MONSOON_NOTE}</p>
      </div>

      <h2 style={h2}>Latest road updates ({UPDATED})</h2>
      <p style={p}>Dated bulletins from our route desk and official advisories — most recent first. These are point-in-time events; a stretch that shut in the morning is often cleared by afternoon, so always confirm live before you roll.</p>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflow:'hidden', marginBottom:22 }}>
        {LATEST_UPDATES.map((u,i) => (
          <div key={u.date} style={{ display:'grid', gridTemplateColumns:'96px 1fr', gap:12, padding:'12px 16px', borderTop: i===0?'none':'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
            <div style={{ fontSize:12, fontWeight:700, color:'var(--teal)', whiteSpace:'nowrap' }}>{u.date}</div>
            <div style={{ fontSize:13.5, color:'#334155', lineHeight:1.7 }}>{u.text}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>Sources: Uttarakhand district disaster control rooms, IMD advisories and on-ground driver reports. For anything happening right now, call the helplines listed under <a href="#live" style={{ color:'var(--teal)', fontWeight:600 }}>live road status</a>.</p>

      <h2 style={h2}>Char Dham road status today — quick view</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:12, marginBottom:14 }}>
        {ROUTES.map(r => (
          <div key={r.dham} style={{ background:'#fff', borderRadius:12, padding:'14px 16px', border:'1px solid hsl(var(--border))', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)', marginBottom:4 }}>{r.dham}</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:STATUS_COLOR[r.tone], marginBottom:6 }}>● {r.status}</div>
            <div style={{ fontSize:11.5, color:'var(--text-muted)' }}>{r.via}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>Status reflects the typical {UPDATED} season picture, not a minute-by-minute feed. Always verify live before travel.</p>

      <CharDhamRoadChecker/>

      <h2 style={h2}>Route-by-route road condition</h2>
      {ROUTES.map(r => (
        <div key={r.dham} style={{ marginBottom:18 }}>
          <h3 style={{ fontSize:16, fontWeight:700, color:'var(--navy)', marginBottom:6 }}>{r.dham} road condition <span style={{ fontSize:12.5, fontWeight:700, color:STATUS_COLOR[r.tone] }}>— {r.status}</span></h3>
          <p style={{ ...p, marginBottom:8 }}>{r.note}</p>
        </div>
      ))}

      <h2 style={h2}>Char Dham route map, distances & driving times</h2>
      <p style={p}>Most pilgrims base out of Haridwar or Rishikesh. Here are the approximate road distances and realistic driving times from Haridwar — mountain roads are slow, so budget more than a flatland map suggests.</p>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.6fr 0.8fr 0.9fr 1.3fr', minWidth:560, background:'var(--navy)', color:'#fff', fontSize:12, fontWeight:700, padding:'10px 14px' }}>
          <div>Route</div><div>Distance</div><div>Drive time</div><div>At the end</div>
        </div>
        {DISTANCES.map((row,i) => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1.6fr 0.8fr 0.9fr 1.3fr', minWidth:560, borderTop:'1px solid hsl(var(--border))', padding:'10px 14px', background: i%2===0?'#fff':'var(--bg)', fontSize:13 }}>
            <div style={{ fontWeight:600, color:'var(--navy)' }}>{row[0]}</div>
            <div style={{ color:'var(--text-mid)' }}>{row[1]}</div>
            <div style={{ color:'var(--text-mid)' }}>{row[2]}</div>
            <div style={{ color:'var(--text-mid)' }}>{row[3]}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>Distances are approximate and vary with diversions. See our <Link href="/char-dham-yatra-route-map" style={{ color:'var(--teal)', fontWeight:600 }}>full Char Dham route map</Link> for the stop-by-stop plan.</p>

      <h2 style={h2}>Char Dham highway project — where it actually stands</h2>
      <p style={p}>The roads keep improving because of the <strong>Chardham Mahamarg Vikas Pariyojana</strong> (the all-weather road project), launched in 2016 by the Ministry of Road Transport & Highways. It widens about <strong>825 km</strong> of national highways to the four shrines, split into 53 packages and built by Uttarakhand PWD, the BRO and NHIDCL.</p>
      <p style={p}>By mid-2025, roughly <strong>629 km</strong> were complete. That is why the drive to Kedarnath and Badrinath feels so much smoother than it did a decade ago — the Kedarnath-side Fata–Sitapur section is now about 99% done. The laggard is the <strong>Yamunotri route (NH-134)</strong>, only ~57% widened, with land acquisition still pending in patches. In April 2026 the government sanctioned <strong>₹461 crore</strong> for landslide mitigation at 17 sensitive locations on NH-134, but that slope and drainage work isn't finished, so the Yamunotri leg stays the bumpiest of the four.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10, marginBottom:18 }}>
        {[{n:'825 km',l:'total project'},{n:'53',l:'packages'},{n:'~629 km',l:'done (mid-2025)'},{n:'~57%',l:'Yamunotri NH-134'}].map(s=>(
          <div key={s.l} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
            <div style={{ fontSize:18, fontWeight:800, color:'var(--navy)' }}>{s.n}</div>
            <div style={{ fontSize:11, color:'var(--text-muted)' }}>{s.l}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>Road conditions by season</h2>
      <p style={p}><strong>Summer (Apr–Jun):</strong> the easiest window. Roads are clear and dry; the only real friction is traffic at peak darshan dates and the odd queue at single-lane stretches. Start early each morning to beat both.</p>
      <p style={p}><strong>Monsoon (Jul–Aug):</strong> the risky stretch. Heavy rain triggers landslides and short closures, and the Yamunotri and Kedarnath approaches are the first to shut. The yatra doesn't stop, but you build in buffer days and never drive these roads after dark.</p>
      <p style={p}><strong>Post-monsoon (Sep–Nov):</strong> our favourite. Skies clear, slides ease off, crowds thin out, and the mountains look their best before the temples close for winter. Carry warm layers — nights get cold fast.</p>

      <h2 style={h2}>Landslide-prone stretches & alternative routes</h2>
      <p style={p}>The spots that cause most delays are Dharasu–Janki Chatti (Yamunotri, with Silai Bend and Syanachatti both coming down on August 6), around Gangnani and Dharasu Nalu Pani (Gangotri), Rudraprayag–Sonprayag and Munkatiya (Kedarnath), and Helang, Patalganga, Tangni and Lambagad on the run up to Badrinath. JCB teams clear them quickly, but a blockage can cost you a couple of hours.</p>
      <p style={p}>When the main highway shuts toward Kedarnath or Badrinath, drivers fall back on these approaches:</p>
      <ul style={{ ...p, paddingLeft:20 }}>
        <li style={{ marginBottom:6 }}><strong>Alternative 1:</strong> Delhi → Kotdwar → Pauri → Srinagar (Garhwal) — skips the Rishikesh bottleneck.</li>
        <li style={{ marginBottom:6 }}><strong>Alternative 2:</strong> Delhi → Rishikesh → Gaja → Devprayag — a parallel line back onto NH-7.</li>
      </ul>

      <h2 style={h2}>Mountain driving rules on the Char Dham routes</h2>
      <p style={p}>These are enforced at checkposts, not advisory. The night ban in particular catches out drivers who plan to make up time after dark.</p>
      <div style={{ display:'grid', gap:10, marginBottom:24 }}>
        {[
          { rule:'10 PM–4 AM vehicle ban', detail:'All vehicles, private and commercial, are banned from every Char Dham route between 10 PM and 4 AM. Plan to reach your overnight stop by 9 PM at the latest.' },
          { rule:'Heavy vehicle restrictions', detail:'Commercial trucks over 7.5 tonnes are restricted on several sections, and large tourist buses are often directed via alternate routes in peak season.' },
          { rule:'Vehicle fitness and permits', detail:'Commercial vehicles need valid Uttarakhand Tourism permits. Private vehicles need a valid PUC certificate and should carry a spare tyre.' },
          { rule:'No stopping in rockfall zones', detail:'Yellow and red marked stretches mean active rockfall risk. Do not stop, photograph or walk there. Keep moving.' },
          { rule:'No overtaking on narrow sections', detail:'On single-lane stretches follow the traffic marshal. Overtaking on mountain bends is the single biggest cause of accidents on these roads.' },
          { rule:'Green Card for non-Uttarakhand vehicles', detail:'Vehicles registered outside Uttarakhand need the ₹50 Green Card from greencard.uk.gov.in. It is checked at entry checkposts.' },
        ].map(item => (
          <div key={item.rule} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderLeft:'3px solid var(--teal)', borderRadius:10, padding:'12px 16px' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{item.rule}</div>
            <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>{item.detail}</div>
          </div>
        ))}
      </div>
      <h2 id="live" style={h2}>How to check live road status today</h2>
      <p style={p}>Don't plan around a forwarded WhatsApp clip. Check the sources that actually carry verified advisories, and call a local control room for anything happening right now:</p>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', padding:'14px 18px', marginBottom:14 }}>
        <ul style={{ listStyle:'none', padding:0, margin:0 }}>
          {SOURCES.map(s => (
            <li key={s.h} style={{ padding:'8px 0', borderBottom:'1px solid hsl(var(--border))', fontSize:13.5 }}>
              🔗 <a href={s.h} target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>{s.l}</a>
            </li>
          ))}
          <li style={{ padding:'8px 0', fontSize:13.5 }}>📞 <strong style={{ color:'var(--navy)' }}>Uttarakhand emergency / disaster helpline: 112 and 1070.</strong> District police control rooms give the fastest read on a live closure.</li>
          <li style={{ padding:'8px 0', fontSize:13.5 }}>📞 <strong style={{ color:'var(--navy)' }}>Rudraprayag (Kedarnath route) control room: 01364-233727</strong> · State control room: 0135-2722002 — call before moving on a monsoon morning.</li>
        </ul>
      </div>
      <p style={p}>There are also 177 ambulances stationed along the routes and an AIIMS Rishikesh helicopter ambulance for emergencies — useful to know if you're travelling with elderly pilgrims. Honestly, the quickest real-time check we have is calling our own drivers each morning before they roll; if you're booked with us, just ask and we'll tell you exactly what's moving.</p>

      <h2 style={h2}>Is the road safe for senior citizens and children?</h2>
      <p style={p}>For the most part, yes — if you choose the right legs. Badrinath needs no trek and Gangotri is motorable to the temple, so both are comfortable for elderly pilgrims and small kids. Kedarnath is the one to plan: arrange a pony or palki rather than attempting the 16 km trek with seniors. The helicopter shortcut is not an option at the moment — services have been suspended since July 1 for the monsoon and operators have returned to base — so plan the ground route now and treat a chopper as a bonus if it resumes. Give yourself a rest day to adjust to altitude, travel only in daylight on the hill sections, and keep medicines and a power bank within reach.</p>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:30, marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Plan the rest of your yatra:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Monsoon Safety Guide',h:'/blog/char-dham-monsoon-safety'},{l:'Char Dham Yatra Packages',h:'/char-dham-yatra'},{l:'Char Dham Route Map',h:'/char-dham-yatra-route-map'},{l:'Kedarnath Yatra',h:'/kedarnath-yatra'},{l:'Badrinath Temple Guide',h:'/badrinath-temple'},{l:'Badrinath Weather',h:'/badrinath-weather'},{l:'Char Dham Cab Booking',h:'/char-dham-yatra-cab-booking'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} →</Link>
          ))}
        </div>
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Want the road called before you leave?</h3>
        <p style={{ color:'rgba(255,255,255,0.78)', fontSize:13.5, marginBottom:18 }}>We run Char Dham trips out of Haridwar daily — our drivers know which stretch is moving today. Ask us to plan around it.</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! What is the Char Dham road status today? I want to plan my yatra.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <div style={{ marginTop:36 }}>
        <PeopleAlsoAsk items={PAA}/>
      </div>
    </article>
  </>);
}
