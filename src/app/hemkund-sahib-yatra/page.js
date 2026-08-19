import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import FAQAccordion from '@/components/FAQAccordion';
import BlogCTA from '@/components/BlogCTA';
import { h2, h3, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Hemkund Sahib Yatra ${SITE.season} — Trek, Dates & Route` },
  description: 'Hemkund Sahib yatra guide — 19 km trek from Govindghat via Ghangaria, opening dates, helicopter option, registration and what 4,572m altitude really demands.',
  keywords: ['hemkund sahib yatra', 'hemkund sahib trek', 'hemkund sahib opening date', 'govindghat to hemkund sahib', 'ghangaria trek', 'hemkund sahib helicopter', 'hemkund sahib package haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/hemkund-sahib-yatra` },
  openGraph: {
    title: `Hemkund Sahib Yatra ${SITE.season} — Trek, Dates & Route Guide`,
    description: 'The 19 km climb from Govindghat to a glacial lake at 4,572m — dates, route, helicopter, altitude and how to combine it with Badrinath.',
    url: `${SITE.baseUrl}/hemkund-sahib-yatra`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Hemkund Sahib Yatra — Trek and Route Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hemkund Sahib Yatra ${SITE.season} — Trek, Dates & Route`,
    description: 'Govindghat to Ghangaria to Hemkund Sahib: 19 km, 4,572m, and the steepest final 6 km in the Garhwal.',
    images: [{ url: '/opengraph-image', alt: 'Hemkund Sahib Yatra' }],
  },
};

const LEGS = [
  { leg: 'Haridwar → Govindghat', dist: '~275 km', time: '9–10 hrs', mode: 'Road', note: 'Via Devprayag, Rudraprayag, Joshimath. Full driving day.' },
  { leg: 'Govindghat → Pulna', dist: '4 km', time: '20 min', mode: 'Shared jeep', note: 'Saves the flattest, dullest stretch of the walk.' },
  { leg: 'Pulna → Ghangaria', dist: '~9 km', time: '5–6 hrs', mode: 'Trek / pony', note: 'Steady climb along the Lakshman Ganga. Ponies and porters available.' },
  { leg: 'Ghangaria → Hemkund Sahib', dist: '6 km', time: '4–5 hrs up', mode: 'Trek / pony', note: 'The hard part. Relentless stone staircase, 1,100m of gain.' },
];

const PAA = [
  { q: 'How difficult is the Hemkund Sahib trek?',
    a: 'Harder than Kedarnath, and most people are not told that. The final 6 km from Ghangaria climbs about 1,100 vertical metres on a stone staircase with very few flat stretches, finishing at 4,572m where the air is genuinely thin. The Kedarnath trek is longer at 16 km but gains less height and tops out lower. If you can manage Kedarnath comfortably you can manage Hemkund, but do not expect it to feel easier because the distance is shorter.' },
  { q: 'When does Hemkund Sahib open?',
    a: 'Usually the fourth week of May, once the Indian Army has cleared the snow off the upper trail. The 2026 yatra opened on 23 May and ran to 10 October. For 2027 expect around 25 May. The date is announced by the Gurudwara Committee at Govindghat, not by the Uttarakhand temple committees that handle Char Dham.' },
  { q: 'Is there a helicopter to Hemkund Sahib?',
    a: 'Not to Hemkund itself. Helicopters fly Govindghat to Ghangaria, roughly ₹10,800 per person return, which removes the 13 km approach. The final 6 km to the gurudwara has to be walked or done by pony — there is no helipad at the top and there will not be one, given the terrain and the lake.' },
  { q: 'Can I do Hemkund Sahib and Valley of Flowers together?',
    a: 'Yes, and most people should. Both start from Ghangaria, in opposite directions. The usual pattern is to reach Ghangaria, spend one day on Hemkund Sahib and the next in the Valley of Flowers, then walk out. Budget a minimum of two nights at Ghangaria. Doing both in a single day is not realistic.' },
  { q: 'Do I need registration for Hemkund Sahib?',
    a: 'Yes. It is free and mandatory, on the same Uttarakhand portal used for Char Dham — registrationandtouristcare.uk.gov.in — with Aadhaar verification. There are also offline biometric counters at Haridwar, Rishikesh and Rudraprayag. Checkposts on the Joshimath road do ask for it.' },
  { q: 'What is the best month for Hemkund Sahib?',
    a: 'Late June through mid September. Open early and you get snow on the upper steps; the Valley of Flowers is also barely in bloom before July. The flowers peak from mid July to mid August, which unfortunately overlaps with the heaviest monsoon on the Joshimath road. September is the quiet compromise — clear air, fewer people, flowers fading.' },
];

const FAQS = [
  { q: 'How long is the Hemkund Sahib trek from Govindghat?',
    a: 'About 19 km one way — roughly 13 km from Govindghat to Ghangaria, then 6 km from Ghangaria up to the gurudwara. Nearly everyone takes a shared jeep for the first 4 km to Pulna, which cuts the walking to about 15 km. Split across two days it is manageable; attempted in one it is punishing.',
    plain: 'About 19 km one way: 13 km Govindghat to Ghangaria, then 6 km to the gurudwara. A jeep covers the first 4 km to Pulna.' },
  { q: 'What is the altitude of Hemkund Sahib?',
    a: 'The Survey of India puts the gurudwara at 4,572 metres, about 15,000 feet. You will see other figures quoted — Uttarakhand Tourism lists 4,329 m and several travel sites repeat 4,632 m — so treat any precise number with mild suspicion. What matters practically is that it is roughly a thousand metres above Kedarnath, and altitude rather than distance is what makes this trek hard.',
    plain: 'The Survey of India gives 4,572 m (about 15,000 ft). Uttarakhand Tourism lists 4,329 m and some sites say 4,632 m. Either way it is about 1,000 m higher than Kedarnath.' },
  { q: 'Where do you stay on the Hemkund Sahib yatra?',
    a: 'Ghangaria, and there is no alternative. Nobody stays at Hemkund Sahib itself — the gurudwara has no overnight accommodation and the site clears by late afternoon for good reason at that altitude. Ghangaria has the Gurudwara sarai, GMVN rooms and a handful of private lodges. Standards are basic; book ahead in July and August.',
    plain: 'You stay at Ghangaria — gurudwara sarai, GMVN or private lodges. No overnight stay is permitted at Hemkund Sahib itself.' },
  { q: 'What time should I start the climb from Ghangaria?',
    a: 'Leave by 5 to 6 am. The gurudwara stops admitting pilgrims in the early afternoon and everyone must descend the same day, so a late start means either a rushed darshan or being turned back. Weather also deteriorates through the afternoon up there with dependable regularity.',
    plain: 'Start by 5–6 am. Entry closes in the early afternoon and all pilgrims must descend the same day.' },
  { q: 'Are ponies and porters available?',
    a: 'Yes, on both stretches. Ponies run Pulna to Ghangaria and Ghangaria to Hemkund Sahib, and porters or pithoo carriers will take children and luggage. Rates are posted and change seasonally. Note that the last section near the top is steep enough that many riders choose to dismount and walk the final stretch anyway.',
    plain: 'Ponies run on both stretches and porters are available. The steepest section near the top is often walked even by those who hired a pony.' },
  { q: 'How does Hemkund Sahib fit with a Badrinath trip?',
    a: 'Very naturally — Govindghat sits on the Badrinath road, about 25 km short of the temple. Many pilgrims do Badrinath darshan first, then base at Govindghat for Hemkund Sahib and the Valley of Flowers. It adds three days to a Badrinath itinerary and is the most efficient way to combine the two.',
    plain: 'Govindghat is on the Badrinath road, 25 km before the temple, so the two combine easily — about three extra days.' },
  { q: 'What should I carry for Hemkund Sahib?',
    a: 'A proper waterproof — it rains at Ghangaria most afternoons in season. Warm layers for the top even in July, because the lake is near freezing and the wind comes off it. Broken-in shoes with grip for wet stone steps. Basic altitude medication if your doctor agrees. Keep the pack light; every extra kilo is felt on that staircase.',
    plain: 'Waterproof jacket, warm layers for the summit, grippy broken-in shoes for wet stone, and a deliberately light pack.' },
  { q: 'Is Hemkund Sahib suitable for elderly pilgrims?',
    a: 'With honesty and planning, sometimes. The combination of 4,572m and a sustained staircase is a real cardiac and respiratory load. Pony to Ghangaria and pony onward helps, but the altitude does not care how you arrived. For parents over 70 or anyone with heart or lung conditions, we usually suggest Badrinath darshan at Govindghat level and a frank conversation with a doctor before committing to the climb.',
    plain: 'Possible with ponies and planning, but 4,572m is a genuine cardiac and respiratory load. Medical advice first for elderly pilgrims or anyone with heart or lung conditions.' },
  { q: 'Do we run Hemkund Sahib packages from Haridwar?',
    a: 'Yes. We run the road leg from Haridwar to Govindghat in our own vehicles, arrange Ghangaria stays, and coordinate the Valley of Flowers day if you want both. It is the same road our Badrinath groups have driven for fifteen seasons, so the drivers know it in the dark and in the rain, which on the Joshimath stretch matters more than it sounds.',
    plain: 'Yes — Haridwar to Govindghat by road in our own vehicles, Ghangaria stays arranged, with the Valley of Flowers day optional.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.baseUrl}/hemkund-sahib-yatra#article`,
    headline: 'Hemkund Sahib Yatra — Trek, Dates and Route Guide',
    description: 'Route, opening dates, helicopter option, altitude and preparation for the Hemkund Sahib pilgrimage from Govindghat via Ghangaria.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-08-13',
    dateModified: SITE.lastUpdatedISO,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Person',
      '@id': `${SITE.baseUrl}/#founder`,
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/dhanesh-chandra-635564429/'],
    },
    publisher: { '@id': `${SITE.baseUrl}/#organization` },
    mainEntityOfPage: `${SITE.baseUrl}/hemkund-sahib-yatra`,
  };

  const place = {
    '@context': 'https://schema.org',
    '@type': 'PlaceOfWorship',
    name: 'Gurudwara Sri Hemkund Sahib',
    description: 'Sikh gurudwara beside a glacial lake at 4,572m in Chamoli district, Uttarakhand, reached by a 19 km trek from Govindghat via Ghangaria.',
    address: { '@type': 'PostalAddress', addressLocality: 'Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.7043, longitude: 79.6103 },
    isAccessibleForFree: true,
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...PAA, ...FAQS].map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.plain || f.a },
    })),
  };

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Hemkund Sahib Yatra', item: `${SITE.baseUrl}/hemkund-sahib-yatra` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

const cell = { padding: '10px 12px', borderBottom: '1px solid hsl(var(--border))', fontSize: 14, color: '#334155', textAlign: 'left', verticalAlign: 'top' };
const head = { ...cell, fontWeight: 700, color: 'var(--navy)', background: 'var(--navy-light)', whiteSpace: 'nowrap' };

export default function HemkundSahibYatra() {
  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,#0F3B5C 0%,#14507A 55%,var(--teal) 100%)', padding: '54px 20px 42px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Pilgrimage Guide · Chamoli
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.22 }}>
            Hemkund Sahib Yatra
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15.5, lineHeight: 1.75, maxWidth: 700, margin: '0 auto 20px' }}>
            Nineteen kilometres from Govindghat to a glacial lake at 4,572 metres, with the last six the steepest sustained climb on any Garhwal pilgrimage. Here is the route, the season, and an honest read on what it asks of you.
          </p>
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {['⛰️ 4,572 m', '🥾 19 km one way', '🚁 Heli to Ghangaria', '🌸 Valley of Flowers nearby'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 100, padding: '6px 14px', fontSize: 12.5, color: 'rgba(255,255,255,0.88)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <span>Hemkund Sahib Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '34px 20px 60px' }}>
        <BlogAuthor variant="top" author="dhanesh" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 22, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Verified for current season
        </div>

        <AnswerBox>
          Hemkund Sahib is a Sikh gurudwara beside a glacial lake at <strong>4,572 m</strong> in Chamoli district, Uttarakhand, reached by a <strong>19 km trek from Govindghat via Ghangaria</strong>. The yatra runs roughly from the fourth week of May to the second week of October, once the Army clears snow from the upper trail. Registration is free and mandatory, and the final 6 km must be walked or ridden — there is no helicopter to the top.
        </AnswerBox>

        <h2 style={h2} id="what">What Hemkund Sahib is</h2>
        <p style={p}>
          A star-shaped gurudwara on the shore of a dark glacial lake, ringed by seven peaks, at an altitude where a brisk walk leaves you breathing hard. Sikhs revere it as the place described in the Dasam Granth where Guru Gobind Singh Ji meditated in a previous birth. Beside it stands the Lokpal temple to Lakshman, which makes the site sacred to Hindu pilgrims too — one of the few high Himalayan shrines that draws both traditions to the same water.
        </p>
        <p style={p}>
          What surprises first-time visitors is the sheer ordinariness of the devotion up there. Volunteers serve hot langar at 4,572 m, in weather that would send most trekkers into a tent. Pilgrims in their sixties take the steps in stages, resting on every landing, and get there.
        </p>

        <h2 style={h2} id="route">The route, leg by leg</h2>
        <p style={p}>
          Everything starts at Govindghat, on the Badrinath road. From Haridwar it is a full day of driving before you take a single step.
        </p>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 0 18px', border: '1px solid hsl(var(--border))', borderRadius: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
            <caption className="sr-only">Hemkund Sahib yatra route legs with distance, time and mode</caption>
            <thead>
              <tr><th scope="col" style={head}>Leg</th><th scope="col" style={head}>Distance</th><th scope="col" style={head}>Time</th><th scope="col" style={head}>Mode</th><th scope="col" style={head}>Notes</th></tr>
            </thead>
            <tbody>
              {LEGS.map(l => (
                <tr key={l.leg}>
                  <th scope="row" style={{ ...cell, fontWeight: 700, color: 'var(--navy)' }}>{l.leg}</th>
                  <td style={cell}>{l.dist}</td>
                  <td style={cell}>{l.time}</td>
                  <td style={cell}>{l.mode}</td>
                  <td style={cell}>{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={h3}>The final six kilometres</h3>
        <p style={p}>
          This is the section that defines the trek. From Ghangaria at roughly 3,050 m you climb about 1,100 m in 6 km, almost entirely on stone steps cut into the mountainside. There is no easing off. Above 4,000 m most people slow to a rhythm of twenty steps and a pause, which is completely normal and not a sign you are unfit.
        </p>
        <p style={p}>
          Compare it honestly to Kedarnath: that trek is 16 km, more than twice as long, but gains less height and finishes 1,000 m lower. Hemkund is shorter and harder. Pilgrims who arrive expecting an easier day because of the distance are the ones who struggle.
        </p>

        <h2 style={h2} id="season">Opening dates and the season</h2>
        <p style={p}>
          The yatra opens when the Army finishes clearing snow off the upper steps, which puts it in the fourth week of May most years. The 2026 season opened on <strong>23 May</strong> and closed on <strong>10 October</strong>. For 2027, expect an opening around <strong>25 May</strong> — later than the Char Dham shrines, which are themselves opening late next year on 8 May.
        </p>
        <p style={p}>
          The date is set by the Gurudwara Committee at Govindghat rather than the Uttarakhand temple committees that handle Char Dham, so it is announced separately and does not track Akshaya Tritiya. If you are planning both, read the{' '}
          <Link href="/char-dham-yatra-2027" style={{ color: 'var(--teal)', fontWeight: 600 }}>Char Dham 2027 dates</Link>{' '}
          alongside this.
        </p>

        <h3 style={h3}>Which month to pick</h3>
        <ul style={{ margin: '0 0 18px', paddingLeft: 22, color: '#334155', fontSize: 15.5, lineHeight: 1.85 }}>
          <li style={{ marginBottom: 8 }}><strong>Late May to mid June</strong> — snow still lying on the upper steps, dramatic and cold. The Valley of Flowers is not yet in bloom.</li>
          <li style={{ marginBottom: 8 }}><strong>Mid July to mid August</strong> — the flowers peak, and so does the monsoon. The Joshimath road is at its least reliable. Beautiful and risky in equal measure.</li>
          <li style={{ marginBottom: 8 }}><strong>September</strong> — my pick. Clear air after the rains, thinner crowds, flowers fading but the lake at its best.</li>
        </ul>

        <BlogCTA
          variant="note"
          intent="info"
          eyebrow="Coming from Haridwar?"
          line="We drive the Govindghat road all season for Badrinath. Same drivers, same vehicles, for Hemkund."
          href="/contact"
          linkLabel="Ask about a Hemkund plan"
        />

        <h2 style={h2} id="helicopter">The helicopter question</h2>
        <p style={p}>
          There is a helicopter, but it does not go where most people assume. It flies <strong>Govindghat to Ghangaria</strong>, around ₹10,800 per person return, and lands you at the base of the hard part. The 6 km to the gurudwara still has to be walked or ridden.
        </p>
        <p style={p}>
          That still makes it worth considering. Removing the 13 km approach means you arrive at Ghangaria fresh instead of spent, which is exactly the state you want to be in for the climb. For older pilgrims especially, it converts a punishing three-day effort into something realistic. What it does not do is remove the altitude.
        </p>

        <h2 style={h2} id="registration">Registration and permits</h2>
        <p style={p}>
          Free and mandatory, on the same Uttarakhand system as Char Dham — <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>registrationandtouristcare.uk.gov.in</a>, with Aadhaar verification, or at the biometric counters in Haridwar, Rishikesh and Rudraprayag. Carry a printout or a screenshot; mobile signal on that stretch is unreliable and a checkpost will not take your word for it.
        </p>
        <p style={p}>
          The Valley of Flowers is a separate matter. It sits inside a national park with its own entry fee and its own timings, paid at the gate at Ghangaria. Budget for it separately and note that overnight stays inside the park are not permitted.
        </p>

        <h2 style={h2} id="altitude">Altitude, honestly</h2>
        <p style={p}>
          Published altitudes for Hemkund Sahib disagree, which is worth knowing before you trust any single figure: the{' '}
          <a href="https://uttarakhandtourism.gov.in/destination/hemkunt-sahib" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>Uttarakhand Tourism listing</a>{' '}
          gives 4,329 m, the Survey of India records 4,572 m, and a great many travel sites repeat 4,632 m. We use the Survey of India figure here. The practical point is unaffected: it is roughly a kilometre above Kedarnath and high enough to matter.
        </p>
        <p style={p}>
          At 4,572 m the air holds a little over half the oxygen it does at sea level. Headache, breathlessness and poor sleep at Ghangaria are common and usually harmless. What is not harmless is pushing upward while feeling genuinely unwell — confusion, vomiting or a cough that will not settle mean you go down, not up, and that is not a decision to negotiate on the mountain.
        </p>
        <p style={p}>
          Practical things that help: sleep a night at Ghangaria rather than climbing straight through, drink far more water than feels necessary, start early, and keep your pack light. If you have a heart or lung condition, talk to your doctor before booking, not after arriving. Our{' '}
          <Link href="/blog/char-dham-yatra-for-heart-patients" style={{ color: 'var(--teal)', fontWeight: 600 }}>guide for pilgrims with heart conditions</Link>{' '}
          applies here with more force than it does on the Char Dham circuit, because Hemkund is higher than any of the four dhams.
        </p>

        <h2 style={h2} id="combine">Combining with Badrinath and the Valley of Flowers</h2>
        <p style={p}>
          Govindghat sits on the Badrinath highway roughly 25 km short of the temple, which makes the combination almost too convenient to skip. The pattern that works: drive up from Haridwar, take Badrinath darshan, come back down to Govindghat, then give Hemkund Sahib and the Valley of Flowers three days from there.
        </p>
        <p style={p}>
          If you only have time for one of the two Ghangaria walks, choose by season. Before July, Hemkund. Mid July to August, the flowers are the reason to be there. From September, Hemkund again.
        </p>

        <h2 style={h2} id="paa">People also ask</h2>
        <PeopleAlsoAsk items={PAA} />

        <h2 style={h2} id="faq">Hemkund Sahib FAQ</h2>
        <FAQAccordion faqs={FAQS} />

        <h2 style={h2} id="related">Related routes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '0 0 8px' }}>
          {[
            ['Govindghat base guide', '/govindghat'],
            ['Valley of Flowers trek', '/blog/valley-of-flowers-trek'],
            ['Badrinath yatra', '/badrinath-yatra'],
            ['How to reach Badrinath', '/how-to-reach-badrinath'],
            ['Mana village', '/blog/mana-village-badrinath'],
            ['Char Dham 2027 dates', '/char-dham-yatra-2027'],
            ['Uttarakhand weather', '/blog/uttarakhand-weather-guide'],
          ].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', background: 'var(--navy-light)', border: '1px solid hsl(var(--border))', borderRadius: 8, padding: '7px 13px', textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>

        <BlogAuthor variant="bottom" author="dhanesh" />
        <BlogCTA variant="footer" intent="info" />
      </article>
    </>
  );
}
