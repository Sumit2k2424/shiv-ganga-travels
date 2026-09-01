import Link from 'next/link';
import { SITE } from '@/data/packages';
import Breadcrumb from '@/components/Breadcrumb';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import BlogCTA from '@/components/BlogCTA';
import FAQAccordion from '@/components/FAQAccordion';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import SightseeingLinkMesh from '@/components/SightseeingLinkMesh';
import { h2, h3, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Places to Visit in Rishikesh ${SITE.season} — Ghats, Jhulas & Neelkanth` },
  description: 'Rishikesh in the order that works — Triveni Ghat in town, Ram Jhula and Parmarth Niketan for the aarti, the Beatles Ashram, and Neelkanth Mahadev 32 km up the hill.',
  keywords: ['places to visit in rishikesh','rishikesh sightseeing','rishikesh tourist places','things to do in rishikesh','triveni ghat rishikesh','beatles ashram','neelkanth mahadev temple','ram jhula lakshman jhula'],
  alternates: { canonical: `${SITE.baseUrl}/rishikesh-sightseeing-places` },
  openGraph: {
    title: `Places to Visit in Rishikesh ${SITE.season} — Ghats, Jhulas & Neelkanth Mahadev`,
    description: 'Triveni Ghat, Ram Jhula, Lakshman Jhula, Parmarth Niketan aarti, the Beatles Ashram, Vashishta Gufa and Neelkanth Mahadev — with distances and the order that saves you backtracking.',
    url: `${SITE.baseUrl}/rishikesh-sightseeing-places`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Places to Visit in Rishikesh ${SITE.season} | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Places to Visit in Rishikesh ${SITE.season}`,
    description: 'The ghats, the two jhulas, the Beatles Ashram and Neelkanth Mahadev — what to see in Rishikesh and in what order.',
    images: [{ url: '/opengraph-image', alt: `Places to Visit in Rishikesh | ${SITE.name}` }],
  },
};

const SIGHTS = [
  {
    name: 'Triveni Ghat',
    dist: 'Main town',
    time: '1 hr (evening)',
    href: '/triveni-ghat-rishikesh',
    what: 'The main bathing ghat, and the one place in Rishikesh a vehicle can drop you at the steps. Evening aarti here is smaller and more local than at Parmarth, and considerably easier to reach.',
  },
  {
    name: 'Parmarth Niketan aarti',
    dist: 'Ram Jhula, ~3 km',
    time: '1.5 hrs',
    href: null,
    what: 'The bigger, more theatrical Ganga Aarti, held on the ashram steps at Ram Jhula. If you are choosing one aarti and have never seen either, this is the one. Arrive forty minutes early in season or you will be standing at the back.',
  },
  {
    name: 'Ram Jhula',
    dist: '~3 km',
    time: '1 hr',
    href: null,
    what: 'A pedestrian suspension bridge over the Ganga linking Sivananda Ashram to Swarg Ashram. Park on one bank and walk across — the bazaar on the far side is where most of Rishikesh’s foot traffic actually is.',
  },
  {
    name: 'Lakshman Jhula',
    dist: '~5 km',
    time: '1 hr',
    href: null,
    what: 'The older and more photographed of the two bridges, upriver from Ram Jhula, with the thirteen-storey Trayambakeshwar temple beside it. Check locally before planning around it — access has been restricted at times for structural work.',
  },
  {
    name: 'Beatles Ashram',
    dist: '~4 km',
    time: '1.5–2 hrs',
    href: null,
    what: 'Chaurasi Kutia, the abandoned Maharishi Mahesh Yogi ashram where the Beatles stayed in 1968. Now inside Rajaji forest land with a ticket counter, painted meditation domes and a lot of overgrown concrete. Worth it if you like ruins; skip it if you do not.',
  },
  {
    name: 'Neelkanth Mahadev',
    dist: '~32 km',
    time: 'Half a day',
    href: '/neelkanth-mahadev-temple',
    what: 'The Shiva temple at 1,330 m where the poison from the churning of the ocean is said to have been swallowed. A winding hill drive of about an hour and a half each way. Busy on Mondays and through Shravan.',
  },
  {
    name: 'Vashishta Gufa',
    dist: '~21 km',
    time: '2 hrs',
    href: null,
    what: 'A meditation cave on the Badrinath road, on a quiet stretch of the Ganga below the highway. Silence is expected inside. It is the calmest thing within an hour of Rishikesh and is usually near-empty.',
  },
  {
    name: 'Kunjapuri Devi',
    dist: '~25 km',
    time: 'Sunrise trip',
    href: null,
    what: 'A hilltop Shakti Peeth reached by road plus a short flight of steps, known for the sunrise view over the Himalaya on clear mornings. Leave Rishikesh around 4:30 AM if you want the light.',
  },
  {
    name: 'Shivpuri',
    dist: '~16 km',
    time: 'Half a day',
    href: null,
    what: 'The main put-in for white water rafting on the Ganga, and where most riverside camps are. Rafting runs roughly late September to June and shuts through the monsoon.',
  },
  {
    name: 'Rajaji National Park',
    dist: 'Chilla gate, ~25 km',
    time: 'Half a day',
    href: '/rajaji-national-park',
    what: 'Elephant and leopard country on the Haridwar side of the river. Safaris run mid-November to mid-June and the park closes through the monsoon.',
  },
];

const FAQS = [
  { q: 'How many days do you need in Rishikesh?',
    a: 'Two days and one night covers the basics — Triveni Ghat, both jhulas, an evening aarti and the Beatles Ashram. Add a third day if you want Neelkanth Mahadev, a rafting run or a Kunjapuri sunrise, because each of those takes half a day on its own.' },
  { q: 'Which Ganga Aarti is better, Triveni Ghat or Parmarth Niketan?',
    a: 'Parmarth Niketan at Ram Jhula is the bigger spectacle and the easier one to follow if you have never seen an aarti. Triveni Ghat in the main town is smaller, more local, and far easier to reach by vehicle. If you are only in Rishikesh for one evening and are staying in town, Triveni Ghat costs you no travel.' },
  { q: 'How far is Neelkanth Mahadev from Rishikesh?',
    a: 'About 32 km by road, roughly an hour and a half each way on a winding hill route. It is a half-day trip whichever way you plan it. Mondays and the month of Shravan are extremely busy — go early or go on another day.' },
  { q: 'Is Rishikesh worth adding to a Char Dham trip?',
    a: 'It is on the road anyway. Every Char Dham itinerary from Haridwar passes through Rishikesh within the first hour of driving, so a night here at the start or the end costs almost nothing in travel time. Most of our groups use it on the return leg, when nobody minds a slow morning.' },
  { q: 'When can you go rafting in Rishikesh?',
    a: 'Roughly late September to June. The river is closed to rafting through the monsoon months of July and August, and operators shut down entirely. Shivpuri is the usual starting point for the popular stretches.' },
  { q: 'Is the Beatles Ashram open to visitors?',
    a: 'Yes, it operates as a ticketed site inside Rajaji forest land with fixed daytime hours. It is a ruin rather than a restored museum — painted domes, roofless meditation cells and a lot of graffiti. People either find it atmospheric or find it a waste of an afternoon; there is not much middle ground.' },
];

const PAA = [
  { q: 'What is Rishikesh famous for?', a: 'The Ganga ghats and evening aarti, the Ram Jhula and Lakshman Jhula suspension bridges, yoga ashrams, white water rafting from Shivpuri, and Neelkanth Mahadev temple in the hills above the town.' },
  { q: 'What is the distance between Haridwar and Rishikesh?', a: 'About 25 km, roughly forty-five minutes by road. The two are close enough that many pilgrims see Har Ki Pauri aarti one evening and Parmarth Niketan the next.' },
  { q: 'Can you visit Rishikesh and Haridwar in one day?', a: 'You can, but it is tight. Haridwar temples in the morning, Rishikesh in the afternoon and one aarti in the evening is the realistic version. Doing both aartis in a single day means missing one of them.' },
  { q: 'Is Lakshman Jhula open?', a: 'Access has been restricted at times for structural work on the old bridge. Ram Jhula, a few kilometres downstream, has stayed open throughout — check locally before building a day around Lakshman Jhula specifically.' },
  { q: 'What is the best time to visit Rishikesh?', a: 'February to May and September to November. Summer before the monsoon is hot but the river is running; the monsoon closes rafting and brings landslide risk on the hill roads to Neelkanth and Kunjapuri.' },
];

function Schema() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places to Visit in Rishikesh ${SITE.season}`,
    itemListElement: SIGHTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: s.name,
        description: s.what,
        address: { '@type': 'PostalAddress', addressLocality: 'Rishikesh', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
      },
    })),
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function RishikeshSightseeingPlaces() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Rishikesh · Sightseeing Guide</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Places to Visit in Rishikesh
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto' }}>
            Triveni Ghat · Ram Jhula · Lakshman Jhula · Beatles Ashram · Neelkanth Mahadev
          </p>
        </div>
      </section>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'20px 20px 60px' }}>
        <Breadcrumb items={[{ label:'Rishikesh', href:'/rishikesh-tour-packages' }, { label:'Places to Visit' }]} />

        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          Two days covers Rishikesh properly. Triveni Ghat is in the main town and a vehicle reaches
          the steps; Ram Jhula and Lakshman Jhula are three and five kilometres upriver and are
          walked, not driven. Parmarth Niketan at Ram Jhula holds the larger evening aarti. Neelkanth
          Mahadev at 1,330 m is about 32 km up the hill and takes half a day on its own.
        </AnswerBox>

        <p style={p}>
          The thing that catches out first-time visitors is that Rishikesh is not one place. The
          town with the ghats, and the ashram-and-bazaar strip around the two bridges, are several
          kilometres apart and the bridges themselves are pedestrian-only. Plan around that and the
          days work; ignore it and you spend them in a car.
        </p>

        <h2 style={h2}>What to see, and how long each takes</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:640 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Place','From town','Time needed','What it is'].map(hd => (
                  <th key={hd} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{hd}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SIGHTS.map((s, i) => (
                <tr key={s.name} style={{ borderBottom:'1px solid hsl(var(--border))', background: i % 2 ? 'var(--bg)' : '#fff', verticalAlign:'top' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5, whiteSpace:'nowrap' }}>
                    {s.href ? <Link href={s.href} style={{ color:'var(--navy)' }}>{s.name}</Link> : s.name}
                  </td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12, whiteSpace:'nowrap' }}>{s.dist}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12, whiteSpace:'nowrap' }}>{s.time}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5, lineHeight:1.65, minWidth:280 }}>{s.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BlogCTA variant="inline" intent="info" />

        <h2 style={h2}>A two-day order that avoids backtracking</h2>
        <p style={p}>
          Day one: arrive, spend the afternoon at Ram Jhula, walk across to the Swarg Ashram side,
          and stay for the Parmarth Niketan aarti at dusk. Day two: Beatles Ashram in the morning
          while it is cool, then either Neelkanth Mahadev for the afternoon or a rafting run from
          Shivpuri, and Triveni Ghat aarti in the evening if you are sleeping in town.
        </p>
        <p style={p}>
          Kunjapuri only fits if you are willing to leave at half past four, and it only rewards you
          on a clear morning. In June haze or through the monsoon it is a long drive to see nothing.
        </p>

        <h3 style={h3}>If Rishikesh is a stop on a Char Dham trip</h3>
        <p style={p}>
          It is twenty-five kilometres from Haridwar and every yatra vehicle passes through it
          inside the first hour. We generally put the Rishikesh night on the return leg rather than
          the outbound one — after ten days on hill roads nobody objects to a slow morning by the
          river, whereas on day one everyone is impatient to get to Barkot.
        </p>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', margin:'24px 0' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>What we tell our own groups</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>
            Do not try to see both the Har Ki Pauri aarti and a Rishikesh aarti on the same evening.
            They run at the same time, forty-five minutes of driving apart, and people who attempt it
            end up rushing out of one to arrive late for the other. One each night is the answer.
          </div>
        </div>

        <h2 style={h2}>Nearby, on the way in or out</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10, marginBottom:24 }}>
          {[
            ['/triveni-ghat-rishikesh', 'Triveni Ghat', 'The in-town ghat and its evening aarti'],
            ['/neelkanth-mahadev-temple', 'Neelkanth Mahadev', 'The hill temple 32 km above Rishikesh'],
            ['/rajaji-national-park', 'Rajaji National Park', 'Safari seasons and the Chilla gate'],
            ['/haridwar-sightseeing-places', 'Places to visit in Haridwar', 'The temple circuit 25 km downstream'],
            ['/har-ki-pauri-guide', 'Har Ki Pauri', 'Haridwar’s main ghat and aarti timings'],
            ['/haridwar-to-rishikesh-taxi', 'Haridwar to Rishikesh', 'Fares and drive time between the two'],
          ].map(([href, title, sub]) => (
            <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:10, padding:'12px 14px', textDecoration:'none', display:'block' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{title} →</div>
              <div style={{ fontSize:12.5, color:'#64748b', lineHeight:1.6 }}>{sub}</div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={FAQS} />

        <div style={{ marginTop:36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>

        <BlogAuthor variant="bottom" author="dhanesh" />
        <BlogCTA variant="footer" intent="booking" />

        <nav aria-label="Related Rishikesh pages" style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:36 }}>
          <p style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', margin:'0 0 10px' }}>More around Rishikesh</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[
              ['/rishikesh-tour-packages', 'Rishikesh tour packages'],
              ['/blog/rishikesh-adventure-guide', 'Rafting & adventure guide'],
              ['/haridwar-tour-packages', 'Haridwar tour packages'],
              ['/haridwar-hotels', 'Where to stay'],
              ['/char-dham-yatra-from-haridwar', 'Char Dham from Haridwar'],
              ['/taxi-service-in-haridwar', 'Local taxi service'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{label} →</Link>
            ))}
          </div>
        </nav>
        <SightseeingLinkMesh current="rishikesh" />
      </article>
    </>
  );
}
