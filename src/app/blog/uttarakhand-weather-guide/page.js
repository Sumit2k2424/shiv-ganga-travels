import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';
import AnswerBox from '@/components/AnswerBox';
import { pageDates } from '@/lib/pageDates';

const PAGE = '/blog/uttarakhand-weather-guide';
const PAGE_DATES = pageDates(PAGE);

/* Deepened 21 Sep 2026. This page is the roll-up of the four per-dham weather
   guides, and until now it duplicated their tables without doing the one
   thing a roll-up can do that they cannot: compare. Google showed it 1,559
   times in three months and 3 people clicked. The rewrite keeps the
   four-shrine table but adds the three-zone ladder from Haridwar to the
   temples, the "which dham is coldest and why" answer, the halt-town
   temperatures, and links out to the four deep pages for the per-month
   detail. The per-dham bands below match the four sibling pages exactly;
   change them there first. */

const WEATHER = [
  { month:'April (19–30)',    kedarnath:'−2 to 8°C · lying snow on the trek',     badrinath:'7 to 13°C · nights −3°C',        gangotri:'5 to 10°C · snow in the precinct',   yamunotri:'6 to 12°C · snow on the upper trek', pilgrim:'Very low',            suitability:'Cold, clear and empty. Not for 55+ or first-timers. Full winter gear.', verdict:'⭐⭐⭐' },
  { month:'May (1–20)',       kedarnath:'2 to 12°C · snow melting, clear trails', badrinath:'12 to 18°C · Nilkantha clear',   gangotri:'10 to 16°C · peaks clear till noon', yamunotri:'13 to 18°C · rhododendrons',        pilgrim:'Building to peak',    suitability:'Excellent. The best trekking weather of the year, comfortable for most ages.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'May (21–31)',      kedarnath:'4 to 14°C · peak crowds',                badrinath:'13 to 18°C · gate queues',       gangotri:'12 to 16°C · busy',                  yamunotri:'14 to 18°C · pony queue 1 hr',       pilgrim:'Peak (15,000+/day at Kedarnath)', suitability:'Best weather, busiest fortnight. Book 60+ days ahead.', verdict:'⭐⭐⭐⭐' },
  { month:'June (1–15)',      kedarnath:'5 to 16°C · excellent',                  badrinath:'15 to 21°C · warmest',           gangotri:'13 to 20°C · warmest',               yamunotri:'16 to 22°C · warmest',               pilgrim:'Peak, tapering',      suitability:'Very good. Usually dry until mid-month. Warmest fortnight at all four.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'June (16–30)',     kedarnath:'8 to 18°C · pre-monsoon showers',        badrinath:'15 to 21°C · showers',           gangotri:'13 to 20°C · watch the gorge road',  yamunotri:'16 to 22°C · first rain',            pilgrim:'Moderate, declining', suitability:'Manageable. Monsoon usually arrives in the last week; Gangotri road first to close.', verdict:'⭐⭐⭐⭐' },
  { month:'July',             kedarnath:'10 to 18°C · monsoon',                   badrinath:'14 to 19°C · Helang road closes', gangotri:'12 to 18°C · gorge slides',         yamunotri:'14 to 20°C · trek a watercourse',    pilgrim:'Low',                 suitability:'Not for first-timers or seniors. The risk is the road, not the temple.', verdict:'⭐⭐' },
  { month:'August',           kedarnath:'10 to 18°C · peak monsoon',              badrinath:'13 to 18°C · wettest',           gangotri:'11 to 17°C · frequent blockages',    yamunotri:'13 to 19°C · most landslide-prone',  pilgrim:'Very low',            suitability:'Monsoon peak. Highest landslide risk on every approach. Dhams open but schedules are provisional.', verdict:'⭐' },
  { month:'September',        kedarnath:'5 to 12°C · post-monsoon clarity',       badrinath:'11 to 16°C · clearest',          gangotri:'9 to 15°C · peaks out all day',      yamunotri:'12 to 17°C · dry trek',              pilgrim:'Low–moderate',        suitability:'Best overall month. Washed air, full Himalayan views, thin crowds, dry roads.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'October',          kedarnath:'0 to 10°C · sharp and clear',            badrinath:'7 to 12°C · nights to −1°C',     gangotri:'4 to 10°C · nights to −3°C',         yamunotri:'8 to 12°C · nights to 0°C',          pilgrim:'Low',                 suitability:'Excellent for views, cold at night. Thermals at every dham from mid-month.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'November (to close)', kedarnath:'−5 to 5°C · snow likely',             badrinath:'2 to 6°C · closes ~13 Nov',       gangotri:'−1 to 4°C · closes 10 Nov',          yamunotri:'2 to 5°C · closes 11 Nov',           pilgrim:'Very low',            suitability:'Severe. Closing ceremonies on Annakut and Bhai Dooj; roads can shut for snow with a day\'s notice.', verdict:'⭐⭐' },
];

/* Three weather zones, one ladder. The plains figure is the one people
   pack for; the shrine figure is the one they meet. */
const ZONES = [
  { zone:'Plains',      place:'Haridwar / Rishikesh',        alt:'314 m',   may:'24°C to 38°C', oct:'18°C to 32°C', note:'Hot. Cotton and a sun hat. The reason people arrive at the halts with no fleece.' },
  { zone:'Plains',      place:'Dehradun',                    alt:'640 m',   may:'22°C to 36°C', oct:'16°C to 30°C', note:'A degree or two cooler than Haridwar. Still plains weather.' },
  { zone:'Hill halts',  place:'Barkot (Yamunotri)',          alt:'1,220 m', may:'12°C to 26°C', oct:'6°C to 20°C',  note:'Pleasant. Warm enough to sleep without heating in every month.' },
  { zone:'Hill halts',  place:'Uttarkashi (Gangotri)',       alt:'1,158 m', may:'14°C to 28°C', oct:'9°C to 23°C',  note:'Almost plains weather — and 2,250 m below the temple you drive to next morning.' },
  { zone:'Hill halts',  place:'Guptkashi (Kedarnath)',       alt:'1,320 m', may:'11°C to 24°C', oct:'6°C to 19°C',  note:'The Kedarnath night halt. Cool evenings; the fleece comes out here.' },
  { zone:'Hill halts',  place:'Joshimath (Badrinath)',       alt:'1,890 m', may:'10°C to 24°C', oct:'6°C to 19°C',  note:'Highest of the four halts, 1,250 m under Badrinath. Cold mornings from October.' },
  { zone:'Shrines',     place:'Badrinath',                   alt:'3,133 m', may:'2°C to 18°C',  oct:'−1°C to 12°C', note:'Lowest and warmest of the four. Road to the door. The evening aarti is the cold hour.' },
  { zone:'Shrines',     place:'Yamunotri',                   alt:'3,291 m', may:'4°C to 18°C',  oct:'0°C to 12°C',  note:'6 km trek from Janki Chatti. The pre-dawn start is the cold hour.' },
  { zone:'Shrines',     place:'Gangotri',                    alt:'3,415 m', may:'1°C to 16°C',  oct:'−3°C to 10°C', note:'Highest and coldest. North-facing gorge; loses the sun by mid-afternoon.' },
  { zone:'Shrines',     place:'Kedarnath',                   alt:'3,583 m', may:'2°C to 12°C',  oct:'0°C to 10°C',  note:'16 km trek. Highest temple, but the walk warms you; the wind at the top does not.' },
];

const faqs = [
  { q:'Which of the four dhams is the coldest?', a:'Gangotri, in the temple precinct, in every month — it is the highest at 3,415 m and sits in a north-facing gorge that loses the sun by mid-afternoon, so evenings are colder than the altitude alone suggests. Kedarnath is 170 m higher but you arrive on foot, warm from a 16 km climb. Badrinath at 3,133 m is the warmest of the four by 3–4 degrees and has no trek, which is why it suits elderly pilgrims first.' },
  { q:'What is the best month for the whole Char Dham circuit?', a:'September, from the second week. The monsoon has withdrawn, the air is washed clean, every peak is out all day, the roads are dry and the crowds have gone home. May and early June are the warm alternative, at the cost of the busiest queues of the year. October is excellent for views but cold at night at all four shrines.' },
  { q:'How much colder are the temples than Haridwar?', a:'Twenty to thirty degrees, depending on the month. Haridwar in May is 24–38°C; Badrinath the same week is 2–18°C and Gangotri 1–16°C. The mistake is packing in Haridwar heat and discovering the difference at 3,000 m. Pack for the shrine, not for where you start.' },
  { q:'Which approach road is the worst in the monsoon?', a:'The Barkot–Janki Chatti road to Yamunotri is the most landslide-prone stretch on the whole circuit, and the Uttarkashi–Gangotri gorge road is the first to close when rain starts. On the Badrinath side it is Chamoli–Joshimath through Helang; on the Kedarnath side, Rudraprayag–Sonprayag. In July and August all four close at some point; the question is only for how long.' },
  { q:'Does it snow at the dhams during the season?', a:'At the start and the end. Snow lies in the Gangotri precinct and on the upper Yamunotri and Kedarnath treks for the first week or two after opening in April, and fresh falls come from late October at Gangotri and Kedarnath and early November at Badrinath. Between mid-May and mid-October it is rain, not snow, that disrupts the yatra.' },
  { q:'Is October too cold for elderly pilgrims?', a:'Not if they are dressed for it and sleeping low. Daytime at all four shrines is 4–12°C in October, which is pleasant walking weather; nights are at or below freezing everywhere above 3,000 m. The plan is thermals, a proper jacket, and halts at Barkot, Uttarkashi, Guptkashi and Joshimath rather than at the temples themselves. The reward is the clearest skies of the year and empty darshan lines.' },
];

export const metadata = {
  title: { absolute: 'Uttarakhand Weather | All Four Char Dham Shrines Compared' },
  description: `Month-by-month weather at all four Char Dham shrines side by side, the temperature ladder from Haridwar to the temples, which dham is coldest and why, and which approach road closes first in the monsoon.`,
  keywords: ['uttarakhand weather month by month', 'char dham yatra weather', 'char dham temperature', 'which dham is coldest', 'kedarnath vs badrinath temperature', 'uttarakhand climate chart', 'char dham yatra weather september'],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: 'Uttarakhand Weather — All Four Char Dham Shrines Compared',
    description: 'Month-by-month weather at all four Char Dham shrines side by side, the ladder from Haridwar to the temples, and which dham is coldest.',
    url: `${SITE.baseUrl}${PAGE}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Uttarakhand Weather — All Four Char Dham Shrines Compared' }],
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Uttarakhand Weather — All Four Char Dham Shrines Compared',
    description: 'Month-by-month weather at all four Char Dham shrines side by side, the temperature ladder from the plains to the temples, and which dham is coldest and why.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: PAGE_DATES.createdISO,
    dateModified: PAGE_DATES.modifiedISO,
    author: {
      '@type': 'Person',
      '@id': `${SITE.baseUrl}/#founder`,
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}${PAGE}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />;
}

const th = { padding:'9px 10px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' };
const td = { padding:'9px 10px', color:'#334155', fontSize:12, verticalAlign:'top' };

export default function WeatherGuide() {
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge={`Climate Guide · ${SITE.season} Season`}
        title="Uttarakhand Weather, Month by Month — All Four Dhams Compared"
        dek="The same week at Haridwar, at the night halts and at the four shrines, side by side — which dham is coldest, which road closes first, and what that means for packing"
        author="Dhanesh Chandra Mishra"
        updated={`Updated ${PAGE_DATES.modifiedHuman}`}
        readTime="9 min read"
        facts={[
          { label:'Best months', value:'Sep & May' },
          { label:'Avoid',       value:'July–August' },
          { label:'Coldest dham', value:'Gangotri' },
          { label:'Warmest dham', value:'Badrinath' },
        ]}
      />

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link prefetch={false} href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link prefetch={false} href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Uttarakhand Weather Guide</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          <strong>Uttarakhand runs three distinct weather zones, and treating it as one place is the usual planning mistake.</strong>{' '}
          The plains around Haridwar and Rishikesh reach 38°C in May; the night-halt towns at 1,200–1,900 m sit 10 to
          15 degrees cooler; the four shrines above 3,100 m are cold in every month and closed from November to
          April. Badrinath is the warmest of the four and Gangotri the coldest. July and August are monsoon
          everywhere, heavy enough in the hills to close every approach road at some point. September and May work
          almost everywhere.
        </AnswerBox>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10, marginBottom:28 }}>
          {[['April–early May','Cold, quiet, beautiful','⭐⭐⭐'],['Mid May–June 15','Warm, peak, excellent','⭐⭐⭐⭐⭐'],['July–August','Monsoon risk, avoid','⭐'],['September','Best overall','⭐⭐⭐⭐⭐'],['October','Cold, spectacular','⭐⭐⭐⭐⭐'],['November','Closing, severe','⭐⭐']].map(([period, desc, stars]) => (
            <div key={period} style={{ background:'var(--bg)', borderRadius:10, padding:'12px', border:'1px solid hsl(var(--border))', textAlign:'center' }}>
              <div style={{ fontSize:11, fontWeight:700, color:'var(--navy)', marginBottom:4 }}>{period}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:4 }}>{desc}</div>
              <div style={{ fontSize:14 }}>{stars}</div>
            </div>
          ))}
        </div>

        <BlogTOC items={[
          { id:'zones',          label:'Three zones, one ladder' },
          { id:'month-by-month', label:'Month by month, all four shrines' },
          { id:'which-dham',     label:'Which dham is coldest, and why' },
          { id:'roads',          label:'Which road closes first' },
          { id:'what-to-pack',   label:'What to pack, by month' },
          { id:'faq',            label:'Questions' },
        ]}/>

        <h2 id="zones" style={h2}>Three zones, one ladder — Haridwar to the temples</h2>
        <p style={p}>
          Every Char Dham itinerary climbs the same ladder: a night on the plains, a night in a hill town, a
          morning at a shrine. Each rung is ten to fifteen degrees colder than the last, and the whole ladder is
          twenty to thirty degrees top to bottom. The table is the same week in May and the same week in October at
          every rung, which is the comparison none of the individual weather pages can make.
        </p>
        <div style={{ overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:12.5, minWidth:720 }}>
            <caption className="sr-only">Temperature by zone and elevation from Haridwar to the four Char Dham shrines, May and October</caption>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Zone','Place','Elevation','May','October','What that means'].map(x => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {ZONES.map((z, i) => (
                <tr key={z.place} style={{ borderBottom:'1px solid hsl(var(--border))', background: z.zone==='Shrines' ? '#EFF6FF' : i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...td, fontWeight:700, color:'var(--teal)', whiteSpace:'nowrap' }}>{z.zone}</td>
                  <th scope="row" style={{ ...td, fontWeight:700, color:'var(--navy)', fontSize:12.5, textAlign:'left', whiteSpace:'nowrap' }}>{z.place}</th>
                  <td style={{ ...td, fontFamily:'monospace', whiteSpace:'nowrap' }}>{z.alt}</td>
                  <td style={{ ...td, whiteSpace:'nowrap' }}>{z.may}</td>
                  <td style={{ ...td, whiteSpace:'nowrap' }}>{z.oct}</td>
                  <td style={td}>{z.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          Ranges are night low to day high. The plains and halt-town figures are IMD station data; the shrine
          figures are the bands from our four per-dham guides, which explain where they come from.
        </p>

        <h2 id="month-by-month" style={h2}>Month by month, all four shrines side by side</h2>
        <p style={p}>
          Daytime bands at the temple, with the thing that defines that fortnight at each shrine. For the day/night
          split, the crowd verdicts and the packing lists, use the per-dham pages:{' '}
          <Link prefetch={false} href="/badrinath-weather" style={{ color:'var(--teal)' }}>Badrinath</Link>,{' '}
          <Link prefetch={false} href="/gangotri-weather" style={{ color:'var(--teal)' }}>Gangotri</Link>,{' '}
          <Link prefetch={false} href="/yamunotri-weather" style={{ color:'var(--teal)' }}>Yamunotri</Link>; Kedarnath
          is on the <Link prefetch={false} href="/kedarnath-yatra" style={{ color:'var(--teal)' }}>Kedarnath yatra page</Link>.
        </p>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:12.5, minWidth:860 }}>
            <caption className="sr-only">Month-by-month daytime temperature and conditions at Kedarnath, Badrinath, Gangotri and Yamunotri</caption>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Month','Kedarnath (3,583 m)','Badrinath (3,133 m)','Gangotri (3,415 m)','Yamunotri (3,291 m)','Crowds','Verdict'].map(x => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {WEATHER.map((w,i)=>(
                <tr key={w.month} style={{ borderBottom:'1px solid hsl(var(--border))', background:w.verdict==='⭐⭐⭐⭐⭐'?'#F0FDF4':w.verdict==='⭐'||w.verdict==='⭐⭐'?'#FFF1F2':i%2===0?'#fff':'var(--bg)' }}>
                  <th scope="row" style={{ ...td, fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left', whiteSpace:'nowrap' }}>{w.month}</th>
                  <td style={td}>{w.kedarnath}</td>
                  <td style={td}>{w.badrinath}</td>
                  <td style={td}>{w.gangotri}</td>
                  <td style={td}>{w.yamunotri}</td>
                  <td style={{ ...td, color:'#475569' }}>{w.pilgrim}</td>
                  <td style={{ ...td, fontSize:14, whiteSpace:'nowrap' }}>{w.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display:'grid', gap:8, marginBottom:30 }}>
          {WEATHER.map(w => (
            <div key={w.month} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:10, padding:'10px 14px', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7 }}>
              <span style={{ fontWeight:700, color:'var(--navy)' }}>{w.month} — </span>{w.suitability}
            </div>
          ))}
        </div>

        <h2 id="which-dham" style={h2}>Which dham is coldest, and why it isn&rsquo;t the highest one</h2>
        <p style={p}>
          Kedarnath is the highest temple at 3,583 m, and it is not the coldest place you will stand. Gangotri is.
          Three things decide how cold a shrine feels, and only one of them is altitude.
        </p>
        <h3 style={h3}>Aspect</h3>
        <p style={p}>
          Gangotri sits in a north-facing gorge under the Bhagirathi peaks and loses direct sun by mid-afternoon,
          so a noon reading of 16°C is 6°C by the evening aarti. Kedarnath sits in an open bowl facing south and
          holds the sun until it sets. Badrinath is in a wide valley with the afternoon sun on the temple; Yamunotri
          is in a tight side valley with the same afternoon shadow problem as Gangotri, though 120 m lower.
        </p>
        <h3 style={h3}>How you arrive</h3>
        <p style={p}>
          At Kedarnath and Yamunotri you arrive on foot, warm from a climb, and the cold hits when you stop moving.
          At Gangotri and Badrinath you arrive by car, already cold, with 1,250–2,250 m of altitude gained since
          breakfast and no exercise to show for it — which is also why altitude headaches are commoner at the two
          road dhams than at the two trek dhams.
        </p>
        <h3 style={h3}>The hour you are there</h3>
        <p style={p}>
          The cold hour is different at each. At Badrinath it is the 7 pm aarti; at Yamunotri the pre-dawn trek
          start at Janki Chatti; at Gangotri the shadowed late afternoon; at Kedarnath the wind on the temple
          steps after sunset. Pack for that hour, not for the daytime band in the table.
        </p>

        <h2 id="roads" style={h2}>Which approach road closes first</h2>
        <p style={p}>
          In the monsoon the weather at the temples is mild and irrelevant; the weather on the roads is the whole
          story. Each dham has one stretch that closes before the others:
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap:12, marginBottom:24 }}>
          {[
            { dham:'Yamunotri', road:'Barkot → Janki Chatti', why:'The most landslide-prone road on the entire circuit. Closes repeatedly in July–August; the trek itself turns into a watercourse.', href:'/how-to-reach-yamunotri' },
            { dham:'Gangotri', road:'Uttarkashi → Gangotri', why:'A gorge road a lane and a half wide. The first to close when rain starts, at the usual slide points near Gangnani and Sunagar.', href:'/how-to-reach-gangotri' },
            { dham:'Badrinath', road:'Chamoli → Joshimath (Helang)', why:'Under widening and slide repair for years. Shuts for a day at a time in the monsoon; the gate road above Joshimath shuts for snow at either end of the season.', href:'/how-to-reach-badrinath' },
            { dham:'Kedarnath', road:'Rudraprayag → Sonprayag', why:'The Mandakini valley road. Slides at Banswara and Phata; when it closes, the Gaurikund shuttle stops with it.', href:'/blog/how-to-reach-kedarnath' },
          ].map(r=>(
            <div key={r.dham} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:2 }}><Link prefetch={false} href={r.href} style={{ color:'var(--navy)' }}>{r.dham}</Link></div>
              <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:700, marginBottom:8 }}>{r.road}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{r.why}</div>
            </div>
          ))}
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          All four are on the <Link prefetch={false} href="/char-dham-road-status" style={{ color:'var(--teal)' }}>road status page</Link>,
          updated through the season. Night driving is banned on every Char Dham route from 10 PM to 4 AM regardless
          of weather.
        </p>

        <h2 id="what-to-pack" style={h2}>What to pack, by month</h2>
        <p style={p}>
          One list for the whole circuit, because you carry the same bag to all four. Pack for the coldest hour at
          the coldest shrine on your route, and accept that it will feel absurd in Haridwar.
        </p>
        {[
          { months:'April–early May', pack:['Heavy thermal inners (nights −5 to 2°C at the shrines)','Thick fleece + windproof outer jacket','Woollen cap, gloves, scarf','Waterproof trekking boots with grip — ice on the Gangotri precinct and the upper treks','Wool socks (4+ pairs)','Sunscreen SPF 50+ — the UV at altitude is fierce','Rain poncho for late-April showers'] },
          { months:'Mid May–June', pack:['Light thermal inners (nights still 1–10°C)','Medium fleece','Warm cap and light gloves for aartis and trek starts','Waterproof trekking boots','Sunscreen and sunglasses','Light rain jacket — mandatory from mid-June','Cotton for the plains days at Haridwar'] },
          { months:'September–October', pack:['Heavy thermals (September nights 2–8°C, October −3 to 3°C)','Thick fleece + heavy outer jacket','Cap, gloves, scarf — October especially','Waterproof boots','Heavy wool socks (4+ pairs)','Hand-warmer packets for the October aartis','A camera: the clearest skies of the year'] },
        ].map(item => (
          <div key={item.months} style={{ marginBottom:18 }}>
            <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)', marginBottom:10 }}>📦 {item.months}</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:6 }}>
              {item.pack.map(x => (
                <div key={x} style={{ display:'flex', gap:8, fontSize:13.5, color:'#334155', padding:'6px 0', borderBottom:'1px solid hsl(var(--border))' }}>
                  <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span>{x}
                </div>
              ))}
            </div>
          </div>
        ))}

        <BlogCTA variant="inline" intent="info" />

        <h2 id="faq" style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Per-dham weather guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Badrinath Weather','/badrinath-weather'],['Gangotri Weather','/gangotri-weather'],['Yamunotri Weather','/yamunotri-weather'],['Kedarnath Yatra','/kedarnath-yatra'],['Best Time for Char Dham','/blog/best-time-char-dham'],['Char Dham in October','/blog/char-dham-yatra-in-october'],['Packing List','/blog/char-dham-yatra-packing-list'],['Road Status','/char-dham-road-status']].map(([l,h])=>(
              <Link prefetch={false} key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <BlogCTA variant="footer" intent="info" />
      </article>
    </>
  );
}
