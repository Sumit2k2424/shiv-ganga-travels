import Link from 'next/link';
import { SITE } from '@/data/packages';
import CiteThis from '@/components/CiteThis';
import { citableDataset } from '@/lib/citable';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';
import { pageDates } from '@/lib/pageDates';
import OfficialLink from '@/components/OfficialLink';

const PAGE_DATES = pageDates('/gangotri-weather');
const PAGE = '/gangotri-weather';
const VERIFIED = 'September 21, 2026';
const VERIFIED_ISO = '2026-09-21';

/* Deepened 21 Sep 2026 to the same shape as /yamunotri-weather. Gangotri is
   the highest of the four dhams and the coldest in every month, and the
   thing people get wrong is that the road reaches the temple so they treat
   it as the easy one. It is easy on the legs and hard on the lungs: a
   pilgrim can drive from Uttarkashi at 1,158 m to the temple at 3,415 m
   before lunch. The day/night split and the Uttarkashi–Harsil–Gangotri
   ladder are the two tables that answer the questions that land here. */
const weather = [
  { month:'April',     day:'5°C to 10°C',  night:'−5°C to 0°C',  snow:'Lying snow at the temple and above Harsil', rain:'Low',                  crowd:'Light',      verdict:'caution', note:'Temple opens 19 April. Snow still lies in the temple precinct in the first week and the Harsil–Gangotri road can ice at dawn. Clear, empty, and the coldest darshan of the season.' },
  { month:'May',       day:'10°C to 16°C', night:'1°C to 5°C',   snow:'Melting; peaks white',                      rain:'Low to medium',        crowd:'Very heavy', verdict:'best',    note:'The classic window. The Bhagirathi peaks stand clear until early afternoon and the deodar forest at Harsil is at its best. Also the busiest month, and Gangotri has less room to absorb a crowd than Badrinath.' },
  { month:'June',      day:'13°C to 20°C', night:'5°C to 9°C',   snow:'None on the route',                         rain:'Medium, rising late',  crowd:'Very heavy', verdict:'best',    note:'Warmest month at the temple. The monsoon usually arrives in the last week, and when it does the Uttarkashi–Gangotri road is the first on the circuit to close.' },
  { month:'July',      day:'12°C to 18°C', night:'7°C to 10°C',  snow:'None',                                      rain:'Heavy — peak monsoon', crowd:'Light',      verdict:'avoid',   note:'The 100 km above Uttarkashi runs in a gorge and closes for slides at Gangnani and Sunagar repeatedly. Mild at the temple, cloud on the peaks, and every schedule is provisional.' },
  { month:'August',    day:'11°C to 17°C', night:'7°C to 10°C',  snow:'None',                                      rain:'Heavy — peak monsoon', crowd:'Light',      verdict:'avoid',   note:'Wettest month. If your dates are fixed, keep the spare day at Uttarkashi, which has hotels and a hospital, not at Harsil.' },
  { month:'September', day:'9°C to 15°C',  night:'2°C to 6°C',   snow:'None',                                      rain:'Light to medium',      crowd:'Moderate',   verdict:'best',    note:'Monsoon withdraws through the first fortnight. From mid-month the Bhagirathi runs clear, the peaks are out all day and the road is dry. Our favourite month here.' },
  { month:'October',   day:'4°C to 10°C',  night:'−3°C to 1°C',  snow:'Upper peaks; first flurries late month',   rain:'Very low',             crowd:'Moderate',   verdict:'best',    note:'Sharp, dry and cold — the clearest skies of the year for the Gaumukh glacier view. Nights are below freezing from mid-month, so this is a thermals month.' },
  { month:'November',  day:'−1°C to 4°C',  night:'−8°C to −4°C', snow:'Likely; road closes at short notice',      rain:'Very low',             crowd:'Light',      verdict:'caution', note:'Temple closes 10 November, on Diwali, after which the deity moves to Mukhba near Harsil. The last week is severe and the road above Harsil can shut for snow with a day\'s notice.' },
];

const VERDICT = {
  best:    { label:'Good time to go', bg:'#dcfce7', ink:'#15803d', mark:'✅' },
  caution: { label:'Go prepared',     bg:'#fef3c7', ink:'#92400e', mark:'⚠️' },
  avoid:   { label:'Not advised',     bg:'#fee2e2', ink:'#991b1b', mark:'⛔' },
};

/* 2,250 m of gain between the usual night halt and the temple, all of it
   by road, most of it before lunch. Nowhere else on the circuit does a
   pilgrim climb that far that fast without walking. */
const ladder = [
  { place:'Uttarkashi', alt:'1,158 m', may:'14°C to 28°C', oct:'9°C to 23°C',  note:'Usual overnight halt. Warm, almost plains weather — the fleece stays in the bag.' },
  { place:'Harsil',     alt:'2,620 m', may:'5°C to 20°C',  oct:'0°C to 14°C',  note:'1,450 m higher and 8–9 degrees colder. Deodar shade keeps the village cool even at noon.' },
  { place:'Gangotri',   alt:'3,415 m', may:'1°C to 16°C',  oct:'−3°C to 10°C', note:'Another 800 m. The temple sits in the gorge and loses the sun by mid-afternoon; wind off the glacier.' },
];

const faqs = [
  { q:'What is the best month to visit Gangotri?', a:'Mid-September to October for clear views and light crowds, or May and early June if you want the warmest weather. Both windows work. September–October is the better choice for anyone who wants the glacier and the Bhagirathi peaks visible all day — in May they usually cloud over by early afternoon.' },
  { q:'How cold does Gangotri get?', a:'Daytime at the temple runs from about 5°C in April to 20°C in June. Nights are the part people underestimate: −5°C in April, 1–5°C in May, and back below freezing from mid-October to −8°C in November. Gangotri is the highest of the four dhams and the coldest in every month.' },
  { q:'Is Gangotri colder than Kedarnath?', a:'Slightly, in the temple precinct — Gangotri at 3,415 m is 170 m lower than Kedarnath but sits in a north-facing gorge that loses the sun by mid-afternoon. In practice they feel similar, and both are 3–4 degrees colder than Badrinath. The difference is that at Gangotri you arrive by car with no trek to warm you up.' },
  { q:'Can you visit Gangotri during the monsoon?', a:'You can, and the temple stays open, but July and August are the months we advise against. The 100 km above Uttarkashi runs in a river gorge and is the first road on the circuit to close for slides, at Gangnani and Sunagar in particular. The weather at the temple is mild; reaching it on schedule is the gamble.' },
  { q:'Does it snow at Gangotri?', a:'At the start and end of the season, yes. Snow lies in the temple precinct in the first week after opening in April, and the first fresh falls come in late October. From mid-November to April the temple is closed and the valley is under snow; the deity spends the winter at Mukhba, near Harsil, 25 km down the road.' },
  { q:'Is there a hot spring at Gangotri?', a:'Not at the temple. The hot spring on this route is at Gangnani, 45 km below Gangotri on the Uttarkashi road, where the Rishikund is warm enough to bathe in and most groups stop on the way up. Gangotri itself has only the Bhagirathi, which is glacier melt and a few degrees above freezing in every month.' },
  { q:'What should I wear for Gangotri?', a:'More than the drive suggests. You will leave Uttarkashi in a shirt, arrive at Harsil wanting a fleece, and stand at the temple wanting a jacket — 2,250 m of gain before lunch. Thermals, a cap and gloves for April, October and November; a windproof shell in every month for the gorge; a rain shell from mid-June. Footwear matters less than at the trek dhams, but the temple precinct is stone and ices at dawn.' },
  { q:'Is altitude sickness a problem at Gangotri?', a:'More than at any other dham, because you gain the height without walking. Driving from Uttarkashi at 1,158 m to the temple at 3,415 m in a morning is precisely the profile that produces a headache and a bad night. Sleep at Harsil rather than Uttarkashi if you can get a room, drink more than you think you need, and do not plan the Gaumukh trek for the same day you arrive.' },
];

const th = { padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' };
const td = { padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5, verticalAlign:'top' };

export const metadata = {
  title: { absolute: 'Gangotri Weather | Month-wise Temperature Guide' },
  description: 'Gangotri weather month by month at 3,415 m — day and night temperatures, snow, rain and crowds for every month of the season, how much colder it is than Uttarkashi and Harsil, and what to pack. Best windows and monsoon risk.',
  keywords: ['gangotri weather','gangotri temperature','gangotri weather in may','gangotri weather in october','gangotri best time to visit','gangotri snowfall','harsil temperature'],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: `Gangotri Weather ${SITE.season} — Month-wise Temperature Guide`,
    description: 'Day and night temperatures, snow, rain and crowds for every month at Gangotri, how much colder it is than Uttarkashi and Harsil, and what to pack.',
    url: `${SITE.baseUrl}${PAGE}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Gangotri Weather ${SITE.season} — Month-wise Temperature Guide | ${SITE.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Gangotri Weather ${SITE.season} — Month-wise Temperature Guide`,
    description: 'Day and night temperatures, snow, rain and crowds for every month at Gangotri, and what to pack.',
    images: [{ url: '/opengraph-image', alt: `Gangotri Weather ${SITE.season} — Month-wise Temperature Guide | ${SITE.name}` }],
  },
};

export default function GangotriWeather() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'Article',
        headline:`Gangotri Weather ${SITE.season}: Month-by-Month Temperature Guide`,
        description:'Month-by-month day and night temperatures, snow, rainfall and crowd levels for Gangotri at 3,415 m, with the temperature drop from Uttarkashi through Harsil to the temple.',
        image:`${SITE.baseUrl}/opengraph-image`,
        datePublished:PAGE_DATES.createdISO, dateModified:VERIFIED_ISO,
        author:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
        publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
        mainEntityOfPage:`${SITE.baseUrl}${PAGE}`,
        about:{ '@type':'Place', name:'Gangotri Temple', geo:{ '@type':'GeoCoordinates', latitude:30.9947, longitude:78.9398, elevation:'3415' } },
        speakable:{ '@type':'SpeakableSpecification', cssSelector:['.speakable-answer'] },
      })}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citableDataset({
        name: `Gangotri monthly temperature and conditions, ${SITE.season} season`,
        description: 'Month-by-month daytime and night-time temperature bands, snow, rainfall and crowd levels for Gangotri (3,415 m), plus temperature by elevation from Uttarkashi through Harsil to the temple, recorded on the route by Shiv Ganga Travels.',
        path: PAGE,
        modified: VERIFIED_ISO,
        measured: ['Daytime temperature', 'Night-time temperature', 'Snowfall', 'Rainfall', 'Crowd level', 'Elevation'],
        place: { name: 'Gangotri, Uttarkashi district, Uttarakhand, India', lat: 30.9947, lon: 78.9398 },
        temporal: '2026-04-19/2026-11-10',
      })) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'BreadcrumbList',
        itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
          { '@type':'ListItem', position:2, name:'Gangotri Yatra', item:`${SITE.baseUrl}/gangotri-yatra` },
          { '@type':'ListItem', position:3, name:'Weather Guide', item:`${SITE.baseUrl}${PAGE}` },
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,415 m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Gangotri Weather {SITE.season} — Month-wise Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Day and night temperatures, snowfall, rainfall and the best visiting windows for each month
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link prefetch={false} href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link prefetch={false} href="/gangotri-yatra" style={{ color:'var(--teal)', textDecoration:'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>Weather Guide</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'32px 20px 60px' }}>

        <AnswerBox>
          <strong>Gangotri sits at 3,415 m — the highest of the four dhams — and the season runs 19 April to 10 November 2026.</strong>{' '}
          Daytime temperatures at the temple range from about 5°C in April to 20°C in June; nights run from −8°C in
          November to 10°C in July. The best windows are <strong>May to mid-June</strong> (warmest, busiest) and{' '}
          <strong>mid-September to October</strong> (clearest, far quieter). July and August are peak monsoon and the
          Uttarkashi–Gangotri road is the first on the circuit to close. There is no hot spring at the temple; the one
          on this route is at Gangnani, 45 km below.
        </AnswerBox>

        <p style={p}>
          Gangotri is the dham people underestimate for the opposite reason to Kedarnath. The road reaches the
          temple, so it gets filed as the easy one — and it is easy on the legs. It is hard on the lungs. A pilgrim
          who slept at Uttarkashi at 1,158 m can be standing at the temple at 3,415 m before lunch, 2,250 m of gain
          in a morning without walking a step, at the highest and coldest of the four shrines. Nowhere else on the
          circuit does altitude arrive that fast.
        </p>
        <p style={p}>
          The other thing the temple&rsquo;s position does is take the sun away. Gangotri sits in a north-facing
          gorge under the Bhagirathi peaks and loses direct light by mid-afternoon, so a day that read 16°C at noon
          is 6°C by the evening aarti. Below is what to expect month by month, split into day and night for that
          reason, and how much the temperature drops between where you slept and where you are standing.
        </p>

        <h2 id="month-by-month" style={h2}>Month-by-month conditions</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:12 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:720 }}>
            <caption className="sr-only">Gangotri monthly day and night temperatures, snow, rain and crowd levels</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Month','Day','Night','Snow','Rain','Crowds','Verdict'].map(x => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {weather.map((w, i) => {
                const v = VERDICT[w.verdict];
                return (
                  <tr key={w.month} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                    <th scope="row" style={{ ...td, fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{w.month}</th>
                    <td style={td}>{w.day}</td>
                    <td style={td}>{w.night}</td>
                    <td style={td}>{w.snow}</td>
                    <td style={td}>{w.rain}</td>
                    <td style={td}>{w.crowd}</td>
                    <td style={td}><span style={{ background:v.bg, color:v.ink, fontSize:11, fontWeight:700, padding:'3px 9px', borderRadius:100, whiteSpace:'nowrap' }}>{v.mark} {v.label}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display:'grid', gap:8, marginBottom:30 }}>
          {weather.map(w => (
            <div key={w.month} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderLeft:`3px solid ${VERDICT[w.verdict].ink}`, borderRadius:'0 10px 10px 0', padding:'11px 15px' }}>
              <span style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{w.month} — </span>
              <span style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7 }}>{w.note}</span>
            </div>
          ))}
        </div>

        <h2 id="altitude" style={h2}>How much colder it gets from Uttarkashi to the temple</h2>
        <p style={p}>
          Uttarkashi, where most groups spend the night, is 2,250 m below Gangotri, and Harsil, the prettier halt
          25 km short of the temple, sits halfway up. That is the gradient people pack for badly: they judge the day
          from a warm breakfast in Uttarkashi and arrive at the temple, in the gorge, in the wind, underdressed by
          two layers.
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:600 }}>
            <caption className="sr-only">Temperature by elevation from Uttarkashi through Harsil to Gangotri temple, May and October</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Stop','Elevation','May (night–day)','October (night–day)','What that means'].map(x => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {ladder.map((l, i) => (
                <tr key={l.place} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <th scope="row" style={{ ...td, fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{l.place}</th>
                  <td style={{ ...td, fontFamily:'monospace' }}>{l.alt}</td>
                  <td style={td}>{l.may}</td>
                  <td style={td}>{l.oct}</td>
                  <td style={td}>{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          If you can get a room at{' '}
          <Link prefetch={false} href="/harsil-valley" style={{ color:'var(--teal)' }}>Harsil</Link>, sleep there
          rather than Uttarkashi: it halves the altitude gain on the temple morning and is the better night in every
          month but the coldest two.
        </p>

        <h2 style={h2}>The road, not the temple, is the weather problem</h2>
        <p style={p}>
          The 100 km above Uttarkashi runs beside the Bhagirathi in a narrowing gorge, a lane and a half wide in
          places, and it is the first road on the circuit to close when it rains. In July and August it shuts
          repeatedly for slides at the usual points near Gangnani and Sunagar, sometimes for a day. At either end of
          the season the last 25 km above Harsil can ice at dawn or shut for snow at short notice. Check{' '}
          <Link prefetch={false} href="/char-dham-road-status" style={{ color:'var(--teal)' }}>today&rsquo;s road status</Link>{' '}
          before you leave Uttarkashi, and read the{' '}
          <Link prefetch={false} href="/how-to-reach-gangotri" style={{ color:'var(--teal)' }}>route guide</Link> for
          the stage-by-stage drive.
        </p>

        <h2 style={h2}>Gangnani — the hot spring on the way up</h2>
        <p style={p}>
          Gangotri is the one dham with no hot spring at the temple; the Bhagirathi there is glacier melt, a few
          degrees above freezing in every month. The warm water on this route is at Gangnani, 45 km below the
          temple on the Uttarkashi road, where the Rishikund is hot enough to bathe in and most groups stop on the
          way up. In October, when the air at the temple is near freezing, it is worth the twenty minutes.
        </p>

        <h3 style={h3}>Where these figures come from</h3>
        <p style={{ ...p, fontSize:'0.97em' }}>
          There is no observing station at Gangotri itself. Published temperatures for the shrine are interpolated
          from Uttarkashi and Harsil and adjusted for altitude, which is why sites disagree by several degrees for
          the same month — and why the gorge&rsquo;s afternoon shadow, which no station captures, makes evenings
          colder than the tables suggest. The bands here are what our drivers and guides have recorded on the route
          over many seasons, cross-checked against <OfficialLink k="imd">IMD</OfficialLink> regional data, and are given as ranges rather than single
          figures for that reason.
        </p>

        <h2 style={h2}>What to pack for Gangotri, by month</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { season:'April & November', icon:'❄️', items:'Thermals top and bottom, heavy fleece, down or padded jacket, woollen cap, gloves, a balaclava for the aarti. Ice-grip footwear — the temple precinct is stone and ices at dawn.' },
            { season:'May–June', icon:'🌸', items:'Light fleece, a windproof shell for the gorge, a warm layer for the evening, sunscreen SPF 50+ and sunglasses (glare off the river and snow), a rain shell from mid-June.' },
            { season:'July–August', icon:'🌧️', items:'Full waterproofs, a dry bag for phone and documents, a spare pair of shoes, and a spare day at Uttarkashi — the road is the risk, not the cold.' },
            { season:'September–October', icon:'🍂', items:'Heavy fleece, warm jacket, thermal inner for October, cap and gloves. The clearest skies of the year for the glacier view, so a camera; and a towel for Gangnani on the way up.' },
          ].map(s => (
            <div key={s.season} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:10, padding:'14px' }}>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:13.5, marginBottom:8 }}>{s.icon} {s.season}</div>
              <p style={{ margin:0, fontSize:13, color:'#475569', lineHeight:1.65 }}>{s.items}</p>
            </div>
          ))}
        </div>

        <h2 id="faq" style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <CiteThis verified={VERIFIED} sources="Shiv Ganga Travels route records (multi-season), IMD regional data, Uttarakhand Tourism" />

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Planning a Gangotri Yatra in {SITE.season}?</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>Get a package quote for your dates — we&rsquo;ll tell you exactly what weather to expect and whether Harsil or Uttarkashi is the night.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Gangotri Yatra. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link prefetch={false} href="/gangotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>Gangotri yatra package →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Gangotri','/how-to-reach-gangotri'],['Gangotri Temple','/gangotri-temple'],['Harsil Valley','/harsil-valley'],['Mukhba, the winter seat','/mukhba-gangotri-winter-seat'],['Badrinath Weather','/badrinath-weather'],['Yamunotri Weather','/yamunotri-weather'],['All four shrines compared','/blog/uttarakhand-weather-guide']].map(([l,h]) => (
              <Link prefetch={false} key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
