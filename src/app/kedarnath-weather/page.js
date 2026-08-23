import Link from 'next/link';
import { SITE } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';

/**
 * Kedarnath weather, month by month.
 *
 * WHY THE NUMBERS ARE BANDS, NOT POINT VALUES
 * There is no long-run IMD observing station at Kedarnath itself. Published
 * "Kedarnath temperature" figures are almost always interpolated from
 * Rudraprayag (690m) or Ukhimath (1,311m) and then lapse-rate adjusted, which
 * is why competitor pages disagree with each other by 5–8°C for the same month.
 * Rather than pick one and present it as measured, this page publishes ranges
 * and says where they come from — which is both honest and, in practice, the
 * thing that gets it quoted, because it is the only page on the topic that
 * explains the discrepancy instead of adding to it.
 *
 * The altitude ladder section exists for the same reason: nearly every query
 * that reaches this page is really about what to pack, and the useful answer
 * depends on where on the route you are, not just the month.
 */

const PAGE = '/kedarnath-weather';
const VERIFIED = 'August 22, 2026';
const VERIFIED_ISO = '2026-08-22';

export const metadata = {
  title: { absolute: `Kedarnath Weather ${SITE.season} — Month-by-Month Temperature & Best Time` },
  description: `Kedarnath weather ${SITE.season} at 3,583m — month-by-month day and night temperatures, snow, rainfall and the honest verdict on each month. Includes temperature by altitude from Gaurikund to the temple.`,
  keywords: ['kedarnath weather', 'kedarnath temperature', 'kedarnath weather in may', 'kedarnath weather in june', `kedarnath best time to visit ${SITE.season}`, 'kedarnath snowfall', 'kedarnath weather in september', 'kedarnath temperature at night'],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: `Kedarnath Weather ${SITE.season} — Month-by-Month Guide`,
    description: 'Day and night temperatures, snow, rain and crowd levels for every month of the Kedarnath season, plus how cold it gets at each stage of the trek.',
    url: `${SITE.baseUrl}${PAGE}`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Kedarnath weather guide ${SITE.season}` }],
  },
};

/* Day/night split matters more than a single range — the complaint we hear is
   almost always about the night, not the day. */
const weather = [
  { month: 'April',     day: '4°C to 8°C',   night: '−6°C to −2°C', snow: 'Heavy, lying snow on the trek', rain: 'Low', crowd: 'Light',        verdict: 'caution', note: 'Temple opens 22 April. Snow is still being cleared from the upper trek; it is genuinely cold and the darshan queue moves in the open.' },
  { month: 'May',       day: '10°C to 15°C', night: '2°C to 5°C',   snow: 'Occasional above Linchauli', rain: 'Low to medium', crowd: 'Very heavy', verdict: 'best',    note: 'The classic window. Clear mornings, rhododendrons in flower, trek fully open. Also the single most crowded month — book accommodation well ahead.' },
  { month: 'June',      day: '12°C to 18°C', night: '6°C to 9°C',   snow: 'None',                       rain: 'Medium, rising late month', crowd: 'Very heavy', verdict: 'best',    note: 'Warmest month and the easiest trekking. Monsoon usually arrives in the last week — after about 20 June the risk profile changes.' },
  { month: 'July',      day: '11°C to 17°C', night: '8°C to 10°C',  snow: 'None',                       rain: 'Heavy — peak monsoon', crowd: 'Light',       verdict: 'avoid',   note: 'Landslides close the Rudraprayag–Sonprayag road repeatedly. The yatra is not suspended, but multi-day delays are normal and helicopters are frequently grounded.' },
  { month: 'August',    day: '11°C to 16°C', night: '8°C to 10°C',  snow: 'None',                       rain: 'Heavy — peak monsoon', crowd: 'Light',       verdict: 'avoid',   note: 'The wettest stretch. Trek surfaces stay slick, leeches appear in the lower forest, and cloud cover means you often see nothing of the peaks.' },
  { month: 'September', day: '10°C to 15°C', night: '4°C to 7°C',   snow: 'None at trek level',         rain: 'Low to medium, clearing', crowd: 'Moderate',    verdict: 'best',    note: 'Monsoon withdraws through the first fortnight. From mid-September the air is washed clean and the mountain views are the best of the year, with a fraction of May’s crowds.' },
  { month: 'October',   day: '6°C to 10°C',  night: '−2°C to 2°C',  snow: 'On surrounding peaks',       rain: 'Very low', crowd: 'Moderate',    verdict: 'best',    note: 'Coldest of the comfortable months and the finest for photography — visibility is routinely 100km. Nights drop below freezing, so bring real cold-weather gear.' },
  { month: 'November',  day: '0°C to 3°C',   night: '−9°C to −5°C', snow: 'Heavy, first closures',      rain: 'Very low', crowd: 'Light',       verdict: 'caution', note: 'Temple closes 11 November on Bhai Dooj. The final week is severe: expedition-grade clothing, and the trek can be snowbound at short notice.' },
];

const VERDICT = {
  best:    { label: 'Good time to go', bg: '#dcfce7', ink: '#15803d', mark: '✅' },
  caution: { label: 'Go prepared',     bg: '#fef3c7', ink: '#92400e', mark: '⚠️' },
  avoid:   { label: 'Not advised',     bg: '#fee2e2', ink: '#991b1b', mark: '⛔' },
};

/* The altitude ladder — the answer to "how cold will it actually be for me". */
const ladder = [
  { place: 'Haridwar',   alt: '314m',   may: '24°C to 38°C', oct: '16°C to 30°C', note: 'Plains heat. You start the yatra in a t-shirt.' },
  { place: 'Guptkashi',  alt: '1,319m', may: '13°C to 24°C', oct: '8°C to 20°C',  note: 'Most Kedarnath packages overnight here. A fleece is enough.' },
  { place: 'Sonprayag',  alt: '1,829m', may: '10°C to 21°C', oct: '5°C to 17°C',  note: 'Vehicle road ends. Shuttle to Gaurikund from here.' },
  { place: 'Gaurikund',  alt: '1,982m', may: '9°C to 20°C',  oct: '4°C to 16°C',  note: 'Trek starts. Warm by day even in October.' },
  { place: 'Linchauli',  alt: '3,048m', may: '4°C to 13°C',  oct: '0°C to 9°C',   note: 'Roughly 3km short of the temple. The cold starts to bite here.' },
  { place: 'Kedarnath',  alt: '3,583m', may: '2°C to 15°C',  oct: '−2°C to 10°C', note: 'A 30°C swing from where you started that morning in the valley.' },
];

const faqs = [
  {
    q: 'What is the weather like in Kedarnath right now?',
    a: 'It depends on the month, and the day/night gap is larger than most people expect. Across the season, daytime temperatures at the temple run from about 4°C in April to 18°C in June, while nights range from −9°C in November to about 9°C in July. The two most comfortable stretches are May to mid-June and mid-September to October.',
  },
  {
    q: 'What is the best month to visit Kedarnath?',
    a: 'Late September and October, if you want clear views and manageable crowds. May and early June are warmer and are the traditional choice, but they are also the most crowded weeks of the year. Both windows are good; September–October is the better one for photography and for anyone who dislikes queues.',
  },
  {
    q: 'How cold does Kedarnath get at night?',
    a: 'Below freezing for most of the season. Nights sit around −6°C to −2°C in April, 2°C to 5°C in May, 6°C to 9°C in June and July, and drop back to −2°C in October and −9°C in November. If you are staying overnight at Kedarnath rather than descending the same day, pack for genuine sub-zero conditions in every month except June, July and August.',
  },
  {
    q: 'Can you visit Kedarnath during the monsoon?',
    a: 'The temple stays open through July and August and the yatra is not formally suspended, but we do not recommend those months. Landslides close the Rudraprayag–Sonprayag road repeatedly, helicopter services are grounded for days at a time, the trek surface is slick, and cloud cover means you often see nothing of the mountains you came for. If your dates are fixed in the monsoon, build two spare days into the plan.',
  },
  {
    q: 'Does it snow in Kedarnath in May?',
    a: 'Occasionally, above Linchauli, and it usually does not settle on the trek. Lying snow on the path is an April problem rather than a May one — the route is normally cleared by the time the temple opens on 22 April, but the last stretch can still hold packed snow into the first week of May.',
  },
  {
    q: 'Where do the temperature figures for Kedarnath come from?',
    a: 'There is no long-running weather station at Kedarnath itself. Published figures are interpolated from the nearest observing stations at Rudraprayag and Ukhimath and then adjusted for altitude, which is why different websites quote figures that disagree by 5–8°C for the same month. The ranges on this page are the bands our drivers and guides have recorded on the route since 2010, cross-checked against IMD regional data, and they are presented as bands for that reason.',
  },
  {
    q: 'What should I wear for the Kedarnath trek?',
    a: 'Layers, because you will pass through a 30°C temperature swing in a single day. Start from Gaurikund in a t-shirt and light fleece, carry a windproof outer shell and a warm cap for the top, and add thermals if you are staying overnight or travelling in April, October or November. Waterproof boots with grip matter more than any other single item — the trek is stone, and it is wet in patches in every month.',
  },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Kedarnath Weather ${SITE.season}: Month-by-Month Temperature Guide`,
    description: 'Month-by-month day and night temperatures, snow, rainfall and crowd levels for Kedarnath at 3,583m, with temperature by altitude along the route.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-02-14',
    dateModified: VERIFIED_ISO,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, '@id': `${SITE.baseUrl}/#organization` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` } },
    mainEntityOfPage: `${SITE.baseUrl}${PAGE}`,
    about: { '@type': 'Place', name: 'Kedarnath Temple', geo: { '@type': 'GeoCoordinates', latitude: 30.7346, longitude: 79.0669, elevation: '3583' } },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] },
  };
  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `Kedarnath monthly temperature and conditions, ${SITE.season} season`,
    description: 'Month-by-month daytime and night-time temperature bands, snow, rainfall and crowd levels for Kedarnath (3,583m), plus temperature by altitude from Haridwar to the temple.',
    url: `${SITE.baseUrl}${PAGE}`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    dateModified: VERIFIED_ISO,
    creator: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, '@id': `${SITE.baseUrl}/#organization` },
    variableMeasured: ['Daytime temperature', 'Night-time temperature', 'Snowfall', 'Rainfall', 'Crowd level', 'Elevation'],
    spatialCoverage: { '@type': 'Place', name: 'Kedarnath, Rudraprayag district, Uttarakhand, India', geo: { '@type': 'GeoCoordinates', latitude: 30.7346, longitude: 79.0669 } },
    temporalCoverage: '2026-04-22/2026-11-11',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Weather Guide', item: `${SITE.baseUrl}${PAGE}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

const th = { padding: '10px 12px', textAlign: 'left', fontWeight: 700, fontSize: 11, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' };
const td = { padding: '10px 12px', color: 'var(--text-mid)', fontSize: 12.5, verticalAlign: 'top' };

export default function KedarnathWeather() {
  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding: '56px 20px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>Weather guide · 3,583m</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.8rem,4.5vw,3rem)', marginBottom: 14 }}>Kedarnath Weather {SITE.season} — Month by Month</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>Day and night temperatures, snow, rain and crowd levels for every month of the season — plus how much colder it gets at each stage of the climb.</p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>Weather Guide</span>
        </div>
      </nav>

      <article style={{ maxWidth: 940, margin: '0 auto', padding: '32px 20px 60px' }}>

        <AnswerBox>
          <strong>Kedarnath sits at 3,583m, and the season runs 22 April to 11 November 2026.</strong> Daytime
          temperatures at the temple range from about 4°C in April to 18°C in June; nights run from −9°C in
          November to about 9°C in July. The two best windows are <strong>May to mid-June</strong> (warmest,
          busiest) and <strong>mid-September to October</strong> (clearest views, far fewer people).
          July and August are peak monsoon — the temple stays open, but landslides and grounded
          helicopters make those weeks genuinely difficult.
        </AnswerBox>

        <p style={p}>
          Almost everyone underestimates Kedarnath in the same way: they plan for the daytime figure and get
          caught out by the night. A May afternoon at the temple is pleasant in a fleece. That same night is
          close to freezing, and you will have started the morning in the plains at 38°C. The gap between those
          two numbers — not the average — is what determines whether the trip is comfortable.
        </p>

        <h2 id="month-by-month" style={h2}>Month-by-month conditions</h2>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid hsl(var(--border))', overflowX: 'auto', marginBottom: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 720 }}>
            <caption className="sr-only">Kedarnath monthly day and night temperatures, snow, rain and crowd levels</caption>
            <thead>
              <tr style={{ background: 'var(--navy-light)' }}>
                {['Month', 'Day', 'Night', 'Snow', 'Rain', 'Crowds', 'Verdict'].map((x) => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {weather.map((w, i) => {
                const v = VERDICT[w.verdict];
                return (
                  <tr key={w.month} style={{ borderTop: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                    <th scope="row" style={{ ...td, fontWeight: 700, color: 'var(--navy)', fontSize: 13, textAlign: 'left' }}>{w.month}</th>
                    <td style={td}>{w.day}</td>
                    <td style={td}>{w.night}</td>
                    <td style={td}>{w.snow}</td>
                    <td style={td}>{w.rain}</td>
                    <td style={td}>{w.crowd}</td>
                    <td style={td}>
                      <span style={{ background: v.bg, color: v.ink, fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 100, whiteSpace: 'nowrap' }}>{v.mark} {v.label}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* The notes column would wreck the table on mobile, so it lives below it. */}
        <div style={{ display: 'grid', gap: 8, marginBottom: 30 }}>
          {weather.map((w) => (
            <div key={w.month} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderLeft: `3px solid ${VERDICT[w.verdict].ink}`, borderRadius: '0 10px 10px 0', padding: '11px 15px' }}>
              <span style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)' }}>{w.month} — </span>
              <span style={{ fontSize: 13.5, color: 'var(--text-mid)', lineHeight: 1.7 }}>{w.note}</span>
            </div>
          ))}
        </div>

        <h2 id="altitude" style={h2}>How cold it gets at each stage of the route</h2>
        <p style={p}>
          The month is only half the answer. On a single day of the yatra you climb from 314m to 3,583m, and
          the temperature falls roughly 6°C for every 1,000m you gain. This is the table people actually need
          when they are deciding what to put in the daypack versus what to leave in the vehicle at Sonprayag.
        </p>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid hsl(var(--border))', overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 640 }}>
            <caption className="sr-only">Temperature by elevation along the Kedarnath route, May and October</caption>
            <thead>
              <tr style={{ background: 'var(--navy-light)' }}>
                {['Stop', 'Elevation', 'May (night–day)', 'October (night–day)', 'What that means'].map((x) => <th key={x} scope="col" style={th}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {ladder.map((l, i) => (
                <tr key={l.place} style={{ borderTop: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <th scope="row" style={{ ...td, fontWeight: 700, color: 'var(--navy)', fontSize: 13, textAlign: 'left' }}>{l.place}</th>
                  <td style={{ ...td, fontFamily: 'monospace' }}>{l.alt}</td>
                  <td style={td}>{l.may}</td>
                  <td style={td}>{l.oct}</td>
                  <td style={td}>{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="daily-pattern" style={h2}>The daily pattern, and why you start early</h2>
        <p style={p}>
          Kedarnath weather is more predictable within a day than it is across a week. Mornings are usually
          clear. Cloud builds from the valley through the late morning, and by early afternoon the peaks are
          typically hidden; on monsoon days the rain arrives with it. This is why guides push groups out of
          Gaurikund before first light and why helicopter sorties are concentrated in the morning slots — by
          2pm the visibility minimums often stop being met.
        </p>
        <p style={p}>
          It also means a same-day return trek is a weather decision as much as a fitness one. Leaving
          Gaurikund at 4am gives you a clear-sky darshan and a descent finished before the afternoon
          deteriorates. Leaving at 9am, which is what happens when a group is slow to assemble, routinely ends
          with the last two hours walked in rain and failing light.
        </p>

        <h3 style={h3}>Where these figures come from</h3>
        <p style={{ ...p, fontSize: '0.97em' }}>
          There is no long-running IMD observing station at Kedarnath itself. Nearly every published
          &ldquo;Kedarnath temperature&rdquo; is interpolated from Rudraprayag (690m) or Ukhimath (1,311m) and then
          adjusted for altitude, which is why sites disagree by 5–8°C for the same month. The bands above are
          what our drivers and guides have recorded on the route since {SITE.established}, cross-checked
          against IMD regional data — published as ranges rather than single figures because a single figure
          would be a false precision.
        </p>

        <h2 id="packing" style={h2}>What to pack, by season</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(230px,100%),1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { cat: 'Always', items: ['Waterproof boots with real grip', 'Rain poncho (fits over a daypack)', 'Sunscreen SPF 50+ and lip balm', 'Refillable water bottle', 'Personal medicines, in the daypack not the luggage'] },
            { cat: 'April, Oct & Nov', items: ['Thermal base layers, two sets', 'Down or heavy fleece mid-layer', 'Windproof shell', 'Wool cap and gloves', 'Wool socks, 3–4 pairs'] },
            { cat: 'May & June', items: ['Fleece plus a light windproof', 'Wool cap for the evening', 'Sunglasses — snow glare is real', 'Light layers for the valley heat'] },
            { cat: 'Monsoon (Jul–Aug)', items: ['Full rain gear, not just a poncho', 'Dry bag for phone and documents', 'Quick-dry trousers', 'Spare socks in a sealed bag', 'Two buffer days in the itinerary'] },
          ].map((c) => (
            <div key={c.cat} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 8 }}>{c.cat}</div>
              {c.items.map((it) => (
                <div key={it} style={{ fontSize: 12.5, color: 'var(--text-mid)', padding: '3px 0', display: 'flex', gap: 6, lineHeight: 1.55 }}>
                  <span style={{ color: 'var(--teal)', flexShrink: 0 }}>✓</span>{it}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={p}>
          Weather is also the main driver of altitude sickness on this route, because cold pushes people to
          climb faster to stay warm. If you are travelling in April, October or November, read the{' '}
          <Link href="/altitude-sickness-char-dham" style={{ color: 'var(--teal)' }}>altitude sickness guide</Link>{' '}
          before you go. For live conditions during the season, check{' '}
          <Link href="/char-dham-road-status" style={{ color: 'var(--teal)' }}>road status</Link>, and for the
          trek itself see the{' '}
          <Link href="/blog/kedarnath-trek-guide" style={{ color: 'var(--teal)' }}>Kedarnath trek guide</Link>.
        </p>

        <h2 id="faq" style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ marginTop: 32, borderTop: '1px solid hsl(var(--border))', paddingTop: 18, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.8 }}>
          <strong>Last verified:</strong> {VERIFIED} · <strong>Season:</strong> 22 April – 11 November 2026 ·{' '}
          <strong>Sources:</strong> Shiv Ganga Travels route records ({SITE.established}–{SITE.season}), IMD
          regional data, Shri Badarinath Kedarnath Temple Committee season notifications. Published under{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow noopener" target="_blank" style={{ color: 'var(--teal)' }}>CC BY 4.0</a> — free to cite with attribution.
        </div>

        <div style={{ marginTop: 28, background: 'var(--navy)', borderRadius: 16, padding: '26px 24px', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.35rem', margin: '0 0 10px' }}>Plan your Kedarnath yatra around the weather</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13.5, marginBottom: 18 }}>Best windows: 1 May – 15 June and 10 September – 31 October · Packages from ₹5,250</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Kedarnath Yatra 2026. Please suggest the best dates.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>WhatsApp us</a>
            <Link href="/kedarnath-tour-package" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>View packages →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
