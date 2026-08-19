import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Janki Chatti — The Yamunotri Road Head | Full Guide' },
  description: 'Janki Chatti at 2,650 m is where the road ends and the Yamunotri trek starts. Parking, the prepaid pony counter, the hot spring, and whether to sleep here or at Barkot.',
  keywords: ['janki chatti','jankichatti','janki chatti to yamunotri','janki chatti yamunotri distance','janki chatti altitude','yamunotri road head','janki chatti hotels','janki chatti parking','barkot to janki chatti','janki chatti pony','kharsali'],
  alternates: { canonical: `${SITE.baseUrl}/janki-chatti` },
  openGraph: {
    title: 'Janki Chatti — The Yamunotri Road Head',
    description: 'Where the road ends and the 5–6 km Yamunotri trek begins. Parking, prepaid pony counter, hot spring, and where to actually sleep.',
    url: `${SITE.baseUrl}/janki-chatti`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Janki Chatti — road head for the Yamunotri trek, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janki Chatti — The Yamunotri Road Head',
    description: 'Where the road ends and the Yamunotri trek starts. Parking, pony counter, hot spring, where to sleep.',
    images: [{ url: '/opengraph-image', alt: 'Janki Chatti, Uttarakhand' }],
  },
};

const FAQS = [
  {
    q: 'What is Janki Chatti?',
    a: 'Janki Chatti is the last motorable point on the Yamunotri route, in Uttarkashi district at about 2,650 m. Every vehicle stops here. From the parking you walk, ride a pony or take a palki the remaining 5–6 km to the Yamunotri temple. It is a road head with a prepaid transport counter, a strip of small hotels and dhabas, a hot spring and a medical post — a working staging post rather than a destination.',
  },
  {
    q: 'How far is Janki Chatti from Yamunotri temple?',
    a: 'About 5 to 6 km on foot, climbing to 3,293 m. Most reasonably fit people walk it in two to three hours going up and rather less coming down. It is the gentler of the two Char Dham treks — Kedarnath is 16 km — but the gradient is steady and the last stretch is exposed, so it is not a stroll.',
  },
  {
    q: 'How far is Barkot from Janki Chatti?',
    a: 'About 36 km by road, roughly an hour and a half on mountain road. That drive is why Yamunotri days start at 4 or 5 in the morning for almost everyone. Barkot sits at 1,220 m and is where the majority of Char Dham groups spend the night before.',
  },
  {
    q: 'Should I stay at Janki Chatti or Barkot?',
    a: 'Barkot for almost everyone. It has far more rooms, better food, reliable mobile signal and pharmacies, and at 1,220 m you sleep properly before going up. Janki Chatti saves you the 36 km pre-dawn drive but the accommodation is limited and basic, it fills first, and at 2,650 m some people sleep badly. Stay at Janki Chatti only if you want the earliest possible start on the trail and you know altitude does not bother you.',
  },
  {
    q: 'Is there parking at Janki Chatti?',
    a: 'Yes, and it is the pinch point of the whole route. Vehicles park in the designated area near the bridge and in the overflow along the approach road. In peak May and June that fills by mid-morning and drivers end up parking well back down the road, which adds a walk before your walk. Arriving before 7 AM solves it.',
  },
  {
    q: 'Where do you book a pony or palki for Yamunotri?',
    a: 'At the government prepaid counter at Janki Chatti, not from whoever approaches you in the car park. The counter issues a printed slip with a fixed rate for pony, palki, dandi or kandi. Book there, keep the slip, and note the handler\'s ID number. Full rates are on our Yamunotri pony and palki rates page.',
  },
  {
    q: 'Is there a hot spring at Janki Chatti?',
    a: 'Yes. There is a thermal spring at Janki Chatti itself, and it is separate from the far better-known Surya Kund at the temple, where pilgrims cook rice and potatoes in the boiling water. The Janki Chatti spring is used for bathing and is a genuine comfort if you have come off the trail cold and wet, which happens often enough.',
  },
  {
    q: 'What is Kharsali and how far is it from Janki Chatti?',
    a: 'Kharsali, also called Khushimath, sits directly across the Yamuna from Janki Chatti — around a kilometre by the bridge. It is the winter seat of Goddess Yamuna, where the idol is worshipped from Bhai Dooj until Akshaya Tritiya, and it holds one of the oldest Shani Dev temples in India. Most pilgrims drive past without knowing it is there.',
  },
  {
    q: 'Is Char Dham registration checked at Janki Chatti?',
    a: 'Yes. Uttarakhand registration is verified on the Yamunotri route and you should assume it will be asked for before you start the trek. It is free on the state portal. Arriving at the road head without it after a long drive is an avoidable and fairly miserable way to lose a day.',
  },
  {
    q: 'Can you reach Yamunotri by helicopter from Janki Chatti?',
    a: 'Not from Janki Chatti itself. Yamunotri helicopter services operate from the helipad at Kharsali across the river, and even then the flight lands short of the temple — there is still a walk or pony ride at the top. Anyone offering a helicopter that puts you at the Yamunotri temple door is misdescribing it.',
  },
];

const PAA = [
  { q: 'Why is it called Janki Chatti?', a: 'A chatti in the Garhwal hills was a halting place on a pilgrim road — a spot with shelter, water and food where walkers broke a stage. The old Yamunotri route was lined with them, and Janki Chatti is the one that survived and grew because the motor road eventually reached it. The name records what it was doing long before cars arrived.' },
  { q: 'How long does the Yamunotri trek take from Janki Chatti?', a: 'Two to three hours up for most people, an hour and a half to two coming down. Add an hour at the temple for darshan and Surya Kund, and longer in peak season when the queue is real. A Janki Chatti to Yamunotri round trip is a comfortable half-day if you start early and a stressful full day if you do not.' },
  { q: 'Are there hotels at Janki Chatti?', a: 'A handful of small hotels, guesthouses and a GMVN property, plus rooms at Kharsali across the bridge. It is basic stock — clean enough, thin walls, unreliable hot water, and it sells out. If comfort matters to you, sleep at Barkot and drive up early.' },
  { q: 'Can you drive beyond Janki Chatti?', a: 'No. The road ends here and there is no vehicle access towards the temple. Everything past this point is on foot, pony, palki, dandi or kandi. That is the whole reason the place exists in its current form.' },
  { q: 'Is the Yamunotri trek harder than Kedarnath?', a: 'No. It is a third of the distance — 5–6 km against 16 km — and tops out about 200 m lower. What catches people is that it is steeper in places than they expect and often done on the first or second day of a Char Dham trip, before anyone has adjusted to altitude. Easier trek, worse timing.' },
];

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Yamunotri Yatra', item: `${SITE.baseUrl}/yamunotri-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Janki Chatti', item: `${SITE.baseUrl}/janki-chatti` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Janki Chatti',
    alternateName: ['Jankichatti', 'Yamunotri Road Head'],
    description: 'The last motorable point on the Yamunotri pilgrimage route, in Uttarkashi district, Uttarakhand, at about 2,650 m. Starting point of the 5–6 km trek to the Yamunotri temple.',
    url: `${SITE.baseUrl}/janki-chatti`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Janki Chatti', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 31.0122, longitude: 78.4517, elevation: '2650 m' },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Families', 'Senior citizens'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Janki Chatti — The Yamunotri Road Head',
    description: 'A guide to Janki Chatti: parking, the prepaid pony and palki counter, the hot spring, Kharsali across the river, and whether to sleep here or at Barkot.',
    mainEntityOfPage: `${SITE.baseUrl}/janki-chatti`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 540 };

export default function JankiChatti() {
  const waText = encodeURIComponent('Namaste! I want a Yamunotri trip with the Barkot night and Janki Chatti timing handled properly. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Uttarkashi · ~2,650 m · Yamunotri road head
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Janki Chatti — Where the Road to Yamunotri Ends
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Every vehicle stops here · 5–6 km on foot to the temple · prepaid pony counter · 36 km from Barkot
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚗 Last motorable point', '🥾 5–6 km to Yamunotri', '🐎 Prepaid pony counter', '♨️ Hot spring'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>Janki Chatti</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '~2,650 m'], ['District', 'Uttarkashi'], ['To Yamunotri', '5–6 km on foot'], ['From Barkot', '36 km'], ['Kharsali', '~1 km'], ['Season', 'Late Apr – Nov']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Janki Chatti is where the driving stops.</strong> The road up the Yamuna valley ends here at about 2,650 m, and whatever you arrived in — car, tempo traveller, bus — waits in the parking while you cover the last five or six kilometres to <Link href="/yamunotri-temple">Yamunotri</Link> on foot or on a pony. Almost nobody plans for Janki Chatti as a place. They plan for the temple, and then spend two of the most consequential hours of the trip standing in a car park working out logistics they could have sorted in advance.
        </p>

        <h2 style={h2}>What Is Janki Chatti?</h2>
        <AnswerBox>
          Janki Chatti is the last motorable point on the Yamunotri route, in Uttarkashi district,
          Uttarakhand, at roughly 2,650 m. All vehicles stop here and the remaining 5–6 km to the
          Yamunotri temple at 3,293 m is covered on foot, pony, palki, dandi or kandi. It has a
          prepaid transport counter, basic hotels, a hot spring and a medical post.
        </AnswerBox>
        <p style={p}>
          The word <em>chatti</em> tells you what it used to be. On the old pilgrim roads of Garhwal a chatti was a halting place — shelter, water, food, somewhere to break a day&rsquo;s walk. The Yamunotri route had a string of them and most have faded. Janki Chatti survived because the motor road eventually arrived at it, which turned a rest stop into a terminus.
        </p>

        <h2 style={h2}>The Parking Problem Nobody Mentions</h2>
        <p style={p}>
          Everything about a Yamunotri day comes back to when you arrive at this car park. The designated parking near the bridge is not large, and in <strong>May and June it is full by mid-morning</strong>. When it fills, drivers park back down the approach road, which means you walk half a kilometre or more before you even reach the trailhead — uphill, on the way back, at the end of a day when you have already done ten or twelve kilometres.
        </p>
        <p style={p}>
          This is the entire reason Char Dham groups leave <Link href="/barkot">Barkot</Link> at four in the morning. It is not devotional enthusiasm. It is a car park.
        </p>

        <ExpertNote variant="insider">
          Our drivers aim to be through the Janki Chatti barrier before 7 AM in peak season, and we tell groups plainly that the alternative is an extra kilometre on tired legs. If a Yamunotri itinerary you have been sold has a relaxed 7 AM breakfast at Barkot, ask what time the vehicle actually reaches Janki Chatti. The honest answer is usually about 10, and by then you are parking a long way back.
        </ExpertNote>

        <h2 style={h2}>Janki Chatti to Yamunotri: the Trek</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['', 'Detail'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Distance', '5–6 km one way'],
                ['Start altitude', '~2,650 m (Janki Chatti)'],
                ['Finish altitude', '3,293 m (Yamunotri temple)'],
                ['Time up', '2–3 hours walking'],
                ['Time down', '1.5–2 hours'],
                ['Surface', 'Paved and stepped for most of it, shared with ponies'],
                ['Options', 'Walk · pony · palki · dandi · kandi'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          It is the easier of the two Char Dham treks by a wide margin — <Link href="/blog/kedarnath-trek-guide">Kedarnath is 16 km</Link> and finishes higher. What catches people out is timing rather than difficulty. Yamunotri is usually the first dham on a Char Dham circuit, which means you are climbing 650 vertical metres on day two or three of the trip, before your body has done any adjusting. Our <Link href="/altitude-sickness-char-dham">altitude guide</Link> covers why that order makes an easy trek feel harder than it is.
        </p>
        <p style={p}>
          The path is shared with ponies for its whole length. Walk on the inside — the hill side, not the drop side — when a train of them comes past, and do not try to squeeze by on a corner. This is the most common cause of injury on the route and it is completely avoidable.
        </p>

        <h2 style={h2}>The Prepaid Counter: Pony, Palki, Dandi and Kandi</h2>
        <p style={p}>
          There is a <strong>government prepaid counter at Janki Chatti</strong>, and it is the only place you should be arranging a ride. You get a printed slip with a fixed rate. Anyone who intercepts you in the car park with a better offer is working outside that system, and the price they quote at the bottom has a way of changing halfway up.
        </p>
        <p style={p}>
          Four options, roughly in order of cost. <strong>Pony</strong> — you ride, a handler leads. <strong>Kandi</strong> — a porter carries you in a back-mounted basket, mostly used for small children and very frail passengers. <strong>Dandi or palki</strong> — a seat or palanquin carried by four men, the choice for anyone who cannot sit a horse. Full current rates, weight slabs and the complaint numbers are on our <Link href="/yamunotri-pony-palki-rates">Yamunotri pony and palki rates page</Link>.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Travelling with elderly parents?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We arrange the Barkot night, an early departure and the palki at the counter, so nobody negotiates in a car park at dawn.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Where to Sleep: Janki Chatti or Barkot?</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['', 'Janki Chatti', 'Barkot'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Altitude', '~2,650 m', '1,220 m'],
                ['Distance to trailhead', 'You are at it', '36 km, ~1.5 hrs'],
                ['Room supply', 'Very limited, fills first', 'Much larger, more choice'],
                ['Room standard', 'Basic guesthouses, GMVN', 'Hotels with hot water and heating'],
                ['Mobile signal', 'Patchy', 'Reliable'],
                ['Sleep quality', 'Some people sleep badly at this height', 'Comfortable'],
                ['Best for', 'Earliest possible start, altitude-hardened walkers', 'Almost everyone else'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          We put groups at <Link href="/barkot-hotels">Barkot</Link> and drive up early, and we would give you the same advice if you were booking it yourself. The 36 km at 4 AM buys a proper night&rsquo;s sleep at a height where sleep is easy, and a bad night before a 650 m climb costs more than the drive does. The exception is a small, fit group who want to be on the trail at first light and do not mind a thin mattress to get it.
        </p>

        <h2 style={h2}>The Hot Spring, and the One at the Top</h2>
        <p style={p}>
          There is a thermal spring at Janki Chatti, used for bathing, and it is worth knowing about because coming off that trail wet and cold is a normal outcome, not a rare one. It is a separate thing from <strong>Surya Kund</strong> at the temple, which is the famous one — water hot enough to cook in, where pilgrims lower rice and potatoes in muslin and carry them away as prasad. Both are geothermal, both are on the same fault system, and only one of them will boil your lunch.
        </p>

        <h2 style={h2}>Kharsali, Across the Bridge</h2>
        <p style={p}>
          A kilometre across the Yamuna from Janki Chatti is <strong>Kharsali</strong>, also called Khushimath, and most pilgrims never set foot in it. It is the winter seat of Yamunotri: when the temple doors close on Bhai Dooj, the idol of the goddess comes down here and is worshipped through the winter until Akshaya Tritiya. It also holds one of the oldest Shani Dev temples in the country, in a tall stacked-timber Garhwali style you will not see much of elsewhere.
        </p>
        <p style={p}>
          If you have an afternoon at Janki Chatti after coming down, spend it there rather than in the car park. Our <Link href="/kharsali-yamunotri-winter-seat">Kharsali winter seat page</Link> covers the doli journey and the temple in detail.
        </p>

        <h2 style={h2}>Getting to Janki Chatti</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Barkot', '36 km', '~1.5 hrs', 'The standard overnight base'],
                ['Uttarkashi', '~130 km', '5–6 hrs', 'Via Barkot; long, winding'],
                ['Dehradun', '~175 km', '7–8 hrs', 'Nearest airport, Jolly Grant'],
                ['Haridwar', '~215 km', '8–9 hrs', 'Not a same-day drive plus trek'],
                ['Rishikesh', '~195 km', '7–8 hrs', 'Most groups break at Barkot'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Distances on this route vary by a few kilometres depending on which road is open, and the Yamuna valley stretch takes closures badly in the monsoon. Check the <Link href="/char-dham-road-status">road status page</Link> before you set out, and see <Link href="/how-to-reach-yamunotri">how to reach Yamunotri</Link> for the full route from the plains.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 10, padding: '12px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', cursor: 'pointer', lineHeight: 1.5 }}>{f.q}</summary>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, margin: '10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>Founder &amp; Director, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He sets the Barkot departure at 4 AM every season for one reason — the Janki Chatti car park — and has stopped apologising for it. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning Yamunotri?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Barkot night · early Janki Chatti start · palki arranged at the counter · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>On the Yamunotri route</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['Yamunotri Pony & Palki Rates', '/yamunotri-pony-palki-rates'], ['How to Reach Yamunotri', '/how-to-reach-yamunotri'], ['Barkot Guide', '/barkot'], ['Barkot Hotels', '/barkot-hotels'], ['Kharsali Winter Seat', '/kharsali-yamunotri-winter-seat'], ['Yamunotri Weather', '/yamunotri-weather'], ['Haridwar to Yamunotri', '/haridwar-to-yamunotri-distance'], ['Gangotri to Yamunotri', '/gangotri-to-yamunotri-distance'], ['Char Dham Yatra', '/char-dham-yatra'], ['Altitude Sickness Guide', '/altitude-sickness-char-dham'], ['Road Status', '/char-dham-road-status'], ['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Uttarkashi Hotels', '/uttarkashi-hotels']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>
      </article>
    </>
  );
}
