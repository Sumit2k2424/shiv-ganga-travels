import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Barkot Hotels ${SITE.season} | Where to Stay for Yamunotri` },
  description: `Where to stay for Yamunotri ${SITE.season} — Barkot, Janki Chatti, Hanuman Chatti and Purola compared on altitude, rooms and how early you must leave.`,
  keywords: ['barkot hotels','hotels in barkot','barkot accommodation','janki chatti hotels','hanuman chatti hotels','yamunotri hotels','where to stay yamunotri','barkot hotel booking','barkot gmvn'],
  alternates: { canonical: `${SITE.baseUrl}/barkot-hotels` },
  openGraph: {
    title: `Barkot Hotels ${SITE.season} — Where to Stay for Yamunotri`,
    description: 'Barkot, Janki Chatti, Hanuman Chatti and Purola compared — altitude, rooms, and how early you have to leave from each.',
    url: `${SITE.baseUrl}/barkot-hotels`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Barkot hotels ${SITE.season} — where to stay for Yamunotri` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Barkot Hotels ${SITE.season} — Where to Stay for Yamunotri`,
    description: 'Four bases compared on altitude, rooms and departure time.',
    images: [{ url: '/opengraph-image', alt: 'Barkot hotels' }],
  },
};

const STAYS = [
  {
    loc: 'Barkot', alt: '1,220 m', toTrail: '36 km', leave: '4:00–4:30 AM',
    band: '₹1,200–₹4,000', tier: 'Recommended base',
    desc: 'The main pilgrim halt and where we put essentially every group. Widest choice of rooms on this leg, proper attached bathrooms, geyser hot water, kitchens that cook to order, and mobile signal that actually works. Low enough that nobody has altitude trouble on night one.',
    rec: 'Right for almost everyone. The 36 km pre-dawn drive is the trade, and it is worth it.',
    good: true,
  },
  {
    loc: 'Janki Chatti', alt: '~2,650 m', toTrail: 'At the trailhead', leave: '6:00 AM',
    band: '₹800–₹2,500', tier: 'Closest, hardest',
    desc: 'Right at the roadhead where the Yamunotri trek starts. Basic guesthouses and a GMVN property, limited in number and first to sell out. Cold at night, thin air, patchy signal, simple food. What you gain is ninety minutes of sleep and no dawn drive.',
    rec: 'Only if Barkot is full, or you are travelling light and want the earliest possible start.',
    good: false,
  },
  {
    loc: 'Hanuman Chatti', alt: '~2,400 m', toTrail: '~8 km', leave: '5:30 AM',
    band: '₹800–₹2,000', tier: 'Middle ground',
    desc: 'Between Barkot and Janki Chatti on the same road. A handful of small guesthouses and a GMVN rest house. Quieter than both, and a reasonable fallback in peak season when the other two are booked out.',
    rec: 'A fallback rather than a first choice. Check what is actually open before relying on it.',
    good: false,
  },
  {
    loc: 'Purola / Naugaon', alt: '~1,500 m', toTrail: '~60–75 km', leave: '3:00 AM',
    band: '₹1,000–₹3,000', tier: 'Overflow',
    desc: 'Further back down the valley towards Mussoorie. More rooms and often available when Barkot is not, but the extra distance turns an early start into a brutal one.',
    rec: 'Peak-season overflow only. We would rather move your dates than put you here.',
    good: false,
  },
  {
    loc: 'Mussoorie', alt: '~2,000 m', toTrail: '~100 km', leave: 'Not viable same-day',
    band: '₹2,500–₹12,000', tier: 'Comfort, different trip',
    desc: 'Proper hotels, proper restaurants, and about four hours from Janki Chatti. Some people build the Yamunotri leg around a Mussoorie night on the way up, stopping at Kempty Falls.',
    rec: 'Fine as a night on the journey. Not a base for the trek day.',
    good: false,
  },
];

const FAQS = [
  {
    q: 'Where should I stay for Yamunotri — Barkot or Janki Chatti?',
    a: 'Barkot, in almost every case. It has far more rooms, better food, working mobile signal and pharmacies, and it sits at 1,220 m against Janki Chatti\'s 2,650 m. On night one nobody is acclimatised, and that 1,400 m difference matters more than the 36 km drive you save. Janki Chatti makes sense only if Barkot is full or you want the absolute earliest start.',
  },
  {
    q: 'How far in advance should I book a hotel in Barkot?',
    a: 'Forty-five to sixty days for May and June. Barkot has a fixed and fairly small room stock serving every Char Dham group heading to Yamunotri, and it sells out completely in peak weeks. September and October are easier — three to four weeks is usually enough.',
  },
  {
    q: 'What do hotels in Barkot cost?',
    a: 'Roughly ₹1,200 to ₹4,000 a room a night depending on season and standard, with peak May–June rates at the top of that and shoulder season well below it. GMVN and the simpler guesthouses sit at the lower end. Package rates are usually better than walk-in because rooms are blocked months ahead.',
  },
  {
    q: 'Is there a GMVN guest house at Barkot?',
    a: 'Yes, and there are GMVN properties at Janki Chatti and Hanuman Chatti too. GMVN is the Uttarakhand state tourism corporation — the rooms are plain but clean and the pricing is honest. You can book directly through their site, though peak-season availability is tight.',
  },
  {
    q: 'What time do I need to leave Barkot for Yamunotri?',
    a: 'Between 4 and 4:30 AM. It is 36 km and about ninety minutes to Janki Chatti, then a 5–6 km trek of two to three hours. Leave at seven and you will be walking down in the dark. This is the single most important logistical decision on the Yamunotri leg and most people get it wrong.',
  },
  {
    q: 'Do Barkot hotels have hot water and heating?',
    a: 'Hot water yes, almost universally by geyser. Heating rarely — at 1,220 m it is not usually needed, though April and late October nights get cold and extra blankets are standard on request. Do not expect room heaters outside the more expensive properties.',
  },
  {
    q: 'Is there mobile network and Wi-Fi at Barkot?',
    a: 'Network yes, reasonably reliable, which is worth knowing because it is the last place on this leg where that is true. Signal degrades badly on the road to Janki Chatti and is largely absent on the trek. Wi-Fi exists at some hotels and is generally slow. Make your calls from Barkot.',
  },
  {
    q: 'Can I stay two nights at Barkot?',
    a: 'Yes, and for older groups we recommend it — arrive, sleep, do Yamunotri on the full middle day, sleep again, then move on to Uttarkashi. It costs one extra night and removes the compounding tiredness that makes the rest of a Char Dham circuit hard.',
  },
  {
    q: 'Are there ATMs and pharmacies in Barkot?',
    a: 'A few of each, and the ATMs run dry in peak season. Draw cash at Rishikesh or Dehradun before coming up. Everything on the Yamunotri leg above Barkot — ponies, palkis, dhabas, prasad — is cash, and UPI fails as soon as the signal does.',
  },
  {
    q: 'Do you book Barkot hotels as part of a package?',
    a: 'Yes. Every Char Dham and Yamunotri itinerary we run includes a pre-blocked Barkot room with guaranteed check-in, plus the departure timing built around the trek rather than around breakfast service. That timing is the part people cannot arrange for themselves after arriving.',
  },
];

const PAA = [
  { q: 'Which is the best hotel in Barkot?', a: 'There is no single answer worth giving, because the stock changes hands and standards shift season to season. What matters more is location on the Barkot–Janki Chatti road, whether the kitchen will cook at 3:30 AM, and whether the property will hold your booking in peak week. We choose on those three, not on star ratings.' },
  { q: 'Is Barkot cold at night?', a: 'Cool rather than cold — it sits at 1,220 m. April and late October nights drop noticeably and you will want a blanket, but it is nothing like Janki Chatti or the dhams above. This is a large part of why it works as a first-night halt.' },
  { q: 'Can I find a hotel in Barkot on arrival?', a: 'In May and June, frequently not. The town fills with Char Dham groups and the rooms are pre-blocked by operators weeks ahead. In September or a shoulder week you will usually find something. Arriving in peak season without a booking is a genuine risk, not a caution.' },
  { q: 'Are there dharamshalas at Barkot?', a: 'Yes, a few, and more at Janki Chatti closer to the trek. They are basic and inexpensive and generally do not take advance bookings, so they suit flexible solo travellers rather than groups working to a schedule.' },
  { q: 'What food is available at Barkot hotels?', a: 'Simple North Indian vegetarian — dal, sabzi, roti, rice, and usually poha or paratha at breakfast. No meat and no alcohol anywhere on the yatra route. If you need an early breakfast before a 4 AM departure, arrange it the night before; most kitchens will do it if asked.' },
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
      { '@type': 'ListItem', position: 2, name: 'Barkot', item: `${SITE.baseUrl}/barkot` },
      { '@type': 'ListItem', position: 3, name: 'Barkot Hotels', item: `${SITE.baseUrl}/barkot-hotels` },
    ],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: `Barkot Hotels ${SITE.season} — Where to Stay for Yamunotri`,
    description: 'Barkot, Janki Chatti, Hanuman Chatti and Purola compared on altitude, room availability, price band and how early you have to leave for the Yamunotri trek.',
    mainEntityOfPage: `${SITE.baseUrl}/barkot-hotels`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 660 };

export default function BarkotHotels() {
  const waText = encodeURIComponent('Namaste! I need a Barkot hotel and the Yamunotri departure timing sorted. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Yamunotri leg · Uttarkashi district
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Barkot Hotels — Where to Stay for Yamunotri
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Four bases compared on the three things that decide it: altitude, room supply, and what time you have to be in the car
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛏️ ₹1,200–4,000 typical', '🏔️ 1,220 m — sleep low', '🚗 36 km to the trailhead', '📅 Book 45–60 days ahead'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/barkot" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Barkot</Link><span>›</span>
          <span>Hotels</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={p}>
          <strong>Stay at Barkot, not at Janki Chatti.</strong> That is the whole answer, and the rest of this page is why. The choice looks like a trade between comfort and proximity, and it is really a trade between sleeping at 1,220 m and sleeping at 2,650 m on the one night when nobody in your group is acclimatised yet. The 36 km you save is not worth what it costs you.
        </p>

        <h2 style={h2}>Where to Stay for Yamunotri</h2>
        <AnswerBox>
          Barkot at 1,220 m is the standard and best base for Yamunotri &mdash; the widest choice of
          rooms, working mobile signal, and 36 km from the Janki Chatti trailhead. Expect ₹1,200&ndash;4,000
          a night and book 45&ndash;60 days ahead for May and June. Leave at 4 AM on trek day.
        </AnswerBox>

        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Base', 'Altitude', 'To trailhead', 'Leave by', 'Typical rate', 'Verdict'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {STAYS.map((s, i) => (
                <tr key={s.loc} style={{ borderBottom: '1px solid hsl(var(--border))', background: s.good ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: s.good ? 800 : 600, color: 'var(--navy)' }}>{s.loc}</td>
                  <td style={TD}>{s.alt}</td>
                  <td style={TD}>{s.toTrail}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#93701C' }}>{s.leave}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{s.band}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{s.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 28 }}>
          Rates are typical per-room bands for the 2026 season and move sharply with demand &mdash; May and June sit at the top, September and October well below. Treat them as a planning guide, not a quote.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {STAYS.map(s => (
            <div key={s.loc} style={{ background: '#fff', borderRadius: 10, padding: '15px 17px', border: '1px solid hsl(var(--border))', borderLeft: `4px solid ${s.good ? '#1D9E75' : 'var(--navy)'}` }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 14.5, color: 'var(--navy)' }}>{s.loc}</strong>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.alt} · {s.band}</span>
                {s.good && <span style={{ background: 'rgba(29,158,117,0.12)', color: '#1D9E75', fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 20 }}>Our pick</span>}
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, margin: '0 0 6px' }}>{s.desc}</p>
              <div style={{ fontSize: 12.5, color: '#64748b' }}><strong>Verdict:</strong> {s.rec}</div>
            </div>
          ))}
        </div>

        <ExpertNote variant="warning">
          One thing that is not obvious from a booking site: ask whether the kitchen will serve at 3:30 AM. A hotel that will not is a hotel that starts your trek day with no food and a ninety-minute drive, and by the time you reach Janki Chatti the queue for the pony stand has formed. We choose properties on three things &mdash; position on the Barkot&ndash;Janki Chatti road, whether they will cook before dawn, and whether they will hold a booking in peak week. Star ratings tell you none of that.
        </ExpertNote>

        <h2 style={h2}>When to Book</h2>
        <p style={p}>
          Barkot has a fixed and fairly small room stock serving every Char Dham group heading to <Link href="/yamunotri-yatra">Yamunotri</Link>, which is most of them. In <strong>May and June it sells out completely</strong>, and operators block rooms months ahead. Forty-five to sixty days is the realistic lead time for peak weeks; three to four weeks is usually enough in September and October.
        </p>
        <p style={p}>
          If you are arriving without a booking in peak season, understand that you may not find a room at any price, and the fallbacks &mdash; Purola, Naugaon &mdash; add an hour to an already brutal morning. We would rather move your dates than put you there.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want the room and the 4 AM start handled together?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Every itinerary we run includes a pre-blocked Barkot room and a departure time built around the trek, not around breakfast.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>What to Expect in the Room</h2>
        <div style={SCROLL}>
          <table style={{ ...TABLE, minWidth: 520 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['', 'At Barkot', 'At Janki Chatti'].map((x, i) => <th key={i} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Hot water', 'Geyser, standard', 'Often bucket, limited hours'],
                ['Heating', 'Rare; blankets on request', 'Rare; it is genuinely cold'],
                ['Food', 'Cooked to order, veg only', 'Simple, fixed, veg only'],
                ['Mobile signal', 'Reliable', 'Patchy at best'],
                ['Wi-Fi', 'Sometimes, slow', 'Assume none'],
                ['Attached bathroom', 'Standard', 'Not guaranteed at the cheaper end'],
                ['Lift', 'No', 'No'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          No hotel anywhere on this leg has a lift, and stairs are worth asking about if anyone in the group struggles with them &mdash; ground-floor rooms exist but need requesting in advance. Alcohol and meat are unavailable across the yatra route, not just here.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Fifteen seasons of blocking Barkot rooms in February for groups travelling in June, which is the only way it works. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Yamunotri with the Barkot room pre-blocked</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Guaranteed check-in · pre-dawn breakfast arranged · registration handled · direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Yamunotri leg</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Barkot Guide', '/barkot'], ['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['How to Reach Yamunotri', '/how-to-reach-yamunotri'], ['Yamunotri Weather', '/yamunotri-weather'], ['Uttarkashi Hotels', '/uttarkashi-hotels'], ['Char Dham Hotels', '/char-dham-hotels'], ['Haridwar Hotels', '/haridwar-hotels'], ['Char Dham Yatra', '/char-dham-yatra'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Ek Dham Yatra', '/ek-dham-yatra'], ['Packing List', '/blog/char-dham-yatra-packing-list'], ['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Road Status', '/char-dham-road-status'], ['Mussoorie Packages', '/mussoorie-tour-packages'], ['Char Dham from Haridwar', '/char-dham-yatra-from-haridwar']].map(([l, href]) => (
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
