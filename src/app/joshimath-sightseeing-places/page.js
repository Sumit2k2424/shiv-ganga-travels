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
  title: { absolute: `Places to Visit in Joshimath ${SITE.season} — Auli, Narsingh Temple & Kalpavriksha` },
  description: 'What to see in Joshimath at 1,875 m — the Narsingh temple that holds Badrinath through winter, the Auli ropeway, Kalpavriksha and Vishnuprayag below the town.',
  keywords: ['places to visit in joshimath','joshimath sightseeing','joshimath tourist places','things to do in joshimath','auli ropeway joshimath','narsingh temple joshimath','kalpavriksha joshimath','vishnuprayag'],
  alternates: { canonical: `${SITE.baseUrl}/joshimath-sightseeing-places` },
  openGraph: {
    title: `Places to Visit in Joshimath ${SITE.season} — Auli, Narsingh Temple & Kalpavriksha`,
    description: 'Joshimath is where Badrinath spends the winter and where the Auli ropeway starts. Narsingh temple, Kalpavriksha, the Shankaracharya math, Vishnuprayag and Tapovan — distances and times.',
    url: `${SITE.baseUrl}/joshimath-sightseeing-places`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Places to Visit in Joshimath ${SITE.season} | Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Places to Visit in Joshimath ${SITE.season}`,
    description: 'Narsingh temple, the Auli ropeway, Kalpavriksha and Vishnuprayag — what to see in the town where Badrinath winters.',
    images: [{ url: '/opengraph-image', alt: `Places to Visit in Joshimath | ${SITE.name}` }],
  },
};

const SIGHTS = [
  {
    name: 'Narsingh Temple',
    dist: 'In town',
    time: '45 min',
    href: '/joshimath-narsingh-temple',
    what: 'The winter seat of Badrinath. When the Badrinath portals close in mid-November, Badri Vishal is carried down and worshipped here until spring. The temple is also the subject of the old prophecy about the deity’s thinning arm.',
  },
  {
    name: 'Auli by ropeway',
    dist: 'Cable car from town',
    time: 'Half a day',
    href: '/auli-skiing-package',
    what: 'The ropeway climbs about 4.15 km from Joshimath to roughly 3,010 m — one of the longest cable-car rides in India. Meadows and Nanda Devi views in summer, ski slopes from January. Confirm it is running before you plan around it.',
  },
  {
    name: 'Auli by road',
    dist: '12 km',
    time: 'Half a day',
    href: null,
    what: 'The alternative to the ropeway, about forty-five minutes up by vehicle. Useful when the cable car is down for maintenance or weather, and the only option if you are carrying much luggage.',
  },
  {
    name: 'Kalpavriksha',
    dist: 'In town',
    time: '20 min',
    href: null,
    what: 'An ancient mulberry, held locally to be well over a thousand years old and the tree under which Adi Shankaracharya is said to have meditated. It stands beside the Jyotirmath complex and takes minutes to see.',
  },
  {
    name: 'Adi Shankaracharya Math & cave',
    dist: 'In town',
    time: '30 min',
    href: null,
    what: 'Jyotirmath, the northern seat Shankaracharya founded in the eighth century, with the cave where tradition places his meditation. This is the reason the town carries the name Jyotirmath on official records.',
  },
  {
    name: 'Vishnuprayag',
    dist: '~12 km below',
    time: '30 min',
    href: '/panch-prayag',
    what: 'The first of the Panch Prayag, where the Dhauliganga meets the Alaknanda at about 1,372 m. It sits on the road between Govindghat and Joshimath, so it costs you a pull-in rather than a detour.',
  },
  {
    name: 'Tapovan hot springs',
    dist: '~14 km',
    time: '1–2 hrs',
    href: null,
    what: 'Sulphur springs on the Niti valley road above Joshimath, hot enough to bathe in and far quieter than anything at Badrinath. A short run out of town on a road most pilgrims never take.',
  },
  {
    name: 'Govindghat',
    dist: '~20 km',
    time: 'Pass-through',
    href: '/govindghat',
    what: 'Where the trek to Hemkund Sahib and the Valley of Flowers begins. Not a sight in itself, but the reason a great many people are in Joshimath at all.',
  },
  {
    name: 'Pandukeshwar',
    dist: '~20 km',
    time: '30 min',
    href: '/yogdhyan-badri-temple',
    what: 'The winter seat of Yogdhyan Badri, on the road up to Badrinath. Small, old, and generally empty — a reasonable ten-minute stop on the drive.',
  },
];

const FAQS = [
  { q: 'Why is Joshimath important on the Char Dham route?',
    a: 'It is the winter seat of Badrinath. When the Badrinath portals close around 13 November, the deity is brought down and worshipped at the Narsingh temple here until the shrine reopens in late April. It is also the last real town before Badrinath, so almost every pilgrim on that arm passes through it.' },
  { q: 'How long is the Auli ropeway from Joshimath?',
    a: 'About 4.15 km, rising to roughly 3,010 m, which makes it one of the longest cable-car rides in India. The alternative is a 12 km road climb of about forty-five minutes. Check whether the ropeway is operating before you build a day around it — it goes down for maintenance and in bad weather.' },
  { q: 'Is Joshimath safe to visit after the land subsidence?',
    a: 'Parts of the town have been affected by ground subsidence since early 2023, and some buildings and hotels were closed or marked unsafe. The road to Badrinath and the pilgrimage itself have continued to operate. Conditions and which properties are open change, so confirm your stay locally or through your operator close to the date rather than relying on older information.' },
  { q: 'How many days do you need in Joshimath?',
    a: 'One night is enough for the Narsingh temple, Kalpavriksha and the Shankaracharya math, all of which are in the town itself. Add a second night if you want Auli properly, or if you are starting the Hemkund Sahib trek from Govindghat the next morning.' },
  { q: 'What is the altitude of Joshimath?',
    a: 'About 1,875 m. It is noticeably lower than Badrinath at 3,133 m, which is exactly why it works as an overnight halt — you sleep low and climb the last stretch fresh the next day.' },
  { q: 'Can you visit Auli in summer?',
    a: 'Yes. The skiing season runs roughly January to March, but the meadows in May, June, September and October are the better reason to go for most visitors, with Nanda Devi in view on clear days. The ropeway runs year-round outside maintenance and weather closures.' },
];

const PAA = [
  { q: 'What is Joshimath famous for?', a: 'Being the winter seat of Badrinath, the Narsingh temple, Adi Shankaracharya’s northern math, and the ropeway up to the ski slopes and meadows of Auli.' },
  { q: 'How far is Auli from Joshimath?', a: 'Twelve kilometres by road, about forty-five minutes, or roughly 4.15 km by cable car from the town itself.' },
  { q: 'How far is Joshimath from Badrinath?', a: 'About 45 km, taking one and a half to two hours on a mountain road. Joshimath is the standard overnight halt before the final climb to Badrinath.' },
  { q: 'What is Kalpavriksha in Joshimath?', a: 'An ancient mulberry tree beside the Jyotirmath complex, held locally to be more than a thousand years old and associated with Adi Shankaracharya’s meditation.' },
  { q: 'Is Joshimath worth staying overnight?', a: 'Yes, for most Badrinath itineraries it is the sensible halt. It sits at 1,875 m against Badrinath’s 3,133 m, so an overnight here breaks the altitude gain rather than putting the whole climb into one day.' },
];

function Schema() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places to Visit in Joshimath ${SITE.season}`,
    itemListElement: SIGHTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: s.name,
        description: s.what,
        address: { '@type': 'PostalAddress', addressLocality: 'Joshimath', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
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

export default function JoshimathSightseeingPlaces() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Joshimath · Sightseeing Guide</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Places to Visit in Joshimath
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto' }}>
            Narsingh Temple · Auli ropeway · Kalpavriksha · Shankaracharya Math · Vishnuprayag
          </p>
        </div>
      </section>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'20px 20px 60px' }}>
        <Breadcrumb items={[{ label:'Badrinath', href:'/badrinath-yatra' }, { label:'Joshimath' }]} />

        <BlogAuthor variant="top" author="dhanesh" />

        <AnswerBox>
          Joshimath sits at 1,875 m and is where Badrinath spends the winter — the deity is brought
          down to the Narsingh temple here when the portals close in November. The town itself holds
          the temple, Kalpavriksha and Adi Shankaracharya’s math within walking distance of each
          other. Auli, reached by a 4.15 km ropeway or a 12 km road climb, is the half-day trip
          worth building in.
        </AnswerBox>

        <p style={p}>
          Most pilgrims treat Joshimath as a bed for the night on the way to Badrinath, which is a
          reasonable use of it — sleeping at 1,875 m instead of 3,133 m is genuinely easier on the
          body. But the town has more in it than a hotel, and nearly all of it is a short walk from
          the main bazaar.
        </p>

        <h2 style={h2}>What to see, and how long each takes</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:640 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Place','Distance','Time needed','What it is'].map(hd => (
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

        <h2 style={h2}>The winter seat, and why it matters</h2>
        <p style={p}>
          Badrinath is only open about six months of the year. When the portals close in the middle
          of November, Badri Vishal is carried down the valley and installed at the Narsingh temple
          in Joshimath, where worship continues through the winter until the shrine reopens in late
          April. That makes this a place you can have darshan of Badrinath in January, which almost
          no visitor to Uttarakhand realises.
        </p>
        <p style={p}>
          The temple is also attached to one of the better-known Garhwali prophecies — that the
          deity’s arm is slowly thinning, and that when it finally breaks the route to Badrinath
          will close and Bhavishya Badri will become the shrine instead.
        </p>

        <h3 style={h3}>On the ground conditions</h3>
        <p style={p}>
          Joshimath has been dealing with ground subsidence since early 2023, and a number of
          buildings in the affected wards were closed or marked unsafe. The Badrinath road and the
          yatra have continued to run throughout. What changes season to season is which hotels are
          open, so confirm accommodation close to your travel date rather than booking on the basis
          of an older listing.
        </p>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', margin:'24px 0' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>What we tell our own groups</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>
            If Auli matters to you, put it on the morning rather than the afternoon. Cloud builds
            through the day at that height for most of the season, and the Nanda Devi view that
            people come for is usually gone by noon. We also do not promise the ropeway to anyone
            in advance — it stops for weather and maintenance often enough that the road is the
            honest fallback to plan for.
          </div>
        </div>

        <h2 style={h2}>Nearby, on the way in or out</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10, marginBottom:24 }}>
          {[
            ['/joshimath-narsingh-temple', 'Narsingh Temple', 'Badrinath’s winter seat and the arm prophecy'],
            ['/auli-skiing-package', 'Auli', 'Ropeway, ski season and summer meadows'],
            ['/govindghat', 'Govindghat', 'Trailhead for Hemkund and Valley of Flowers'],
            ['/bhavishya-badri-temple', 'Bhavishya Badri', 'The shrine the prophecy names as the successor'],
            ['/panch-prayag', 'Panch Prayag', 'Vishnuprayag and the other four confluences'],
            ['/badrinath-sightseeing-places', 'Places to visit in Badrinath', 'Mana, Tapt Kund and Vasudhara, 45 km up'],
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

        <nav aria-label="Related Joshimath pages" style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:36 }}>
          <p style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', margin:'0 0 10px' }}>More on this valley</p>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[
              ['/badrinath-yatra', 'Badrinath Yatra package'],
              ['/hemkund-sahib-yatra', 'Hemkund Sahib'],
              ['/pipalkoti', 'Pipalkoti'],
              ['/chamoli-town', 'Chamoli'],
              ['/panch-badri-yatra', 'Panch Badri'],
              ['/how-to-reach-badrinath', 'How to reach Badrinath'],
              ['/winter-char-dham-yatra', 'Winter Char Dham'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{label} →</Link>
            ))}
          </div>
        </nav>
        <SightseeingLinkMesh current="joshimath" />
      </article>
    </>
  );
}
