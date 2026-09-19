import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import KedarnathFareCalc from '@/components/KedarnathFareCalc';
import { h2, h3, p } from "@/lib/prose";
import { pageDates } from '@/lib/pageDates';

const PATH = '/kedarnath-pony-palki-kandi-rates';
const URL = `${SITE.baseUrl}${PATH}`;
const PAGE_DATES = pageDates(PATH);

// Our own photo, shot at the Gaurikund stand. The 1200×630 crop exists for
// the social card; the 1200×800 one is the in-page figure.
const PHOTO_WIDE = '/images/kedarnath-pony-palki-rates-hero-wide.jpg';
const PHOTO_CARD = '/images/kedarnath-pony-palki-rates-hero.jpg';
const PHOTO_ALT = 'Three decorated mules with beaded headbands and bells, their handlers behind them, waiting under a shelter at the Gaurikund stand before the Kedarnath climb';

const H1 = 'Kedarnath Pony, Palki & Kandi Rates 2026: Official Price vs What Touts Actually Charge';

export const metadata = {
  title: { absolute: 'Kedarnath Pony, Palki & Kandi Rates 2026 | Official Price' },
  description: 'Pony ₹3,000–4,500, Palki ₹8,000–12,000, Kandi ₹3,500–5,000 one-way. The 2026 rate table, weight slabs, and how to avoid overpaying touts at Gaurikund.',
  keywords: [`kedarnath pony palki kandi rates ${SITE.season}`,`kedarnath pony charges ${SITE.season}`,'kedarnath horse price','kedarnath khachar price','gaurikund to kedarnath by horse price','ponies and palkies rates for kedarnath','kedarnath palki charges','kedarnath palki rate','kedarnath kandi pitthu rate','kedarnath palki booking online','kedarnath ghoda price','sonprayag to kedarnath by horse','kedarnath palki price per person','kedarnath dandi rate','kedarnath porter charges'],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Kedarnath Pony, Palki & Kandi Rates 2026 | Official Price',
    description: 'Real 2026 rates for pony, palki and kandi from Gaurikund to Kedarnath, plus the prepaid-counter system that keeps you from being overcharged.',
    url: URL,
    type: 'article',
    images: [{ url: PHOTO_CARD, width: 1200, height: 630, alt: PHOTO_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Pony, Palki & Kandi Rates 2026 | Official Price',
    description: 'Pony ₹3,000–4,500 · Palki ₹8,000–12,000 · Kandi ₹3,500–5,000. Weight slabs, prepaid counters, timings, and how not to get overcharged.',
    images: [{ url: PHOTO_CARD, alt: PHOTO_ALT }],
  },
};

// No FAQPage node here on purpose — FAQ markup came off the whole site on
// 17 Sep 2026, and no Offer nodes either: the prepaid counter sells the ride,
// not us, and Product/Offer markup on non-product pages is what GSC flagged.
function Schema() {
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Pony, Palki & Kandi Rates', item: URL },
  ] };
  // GSC's Image Metadata report (19 Sep 2026) wants the four licensing fields
  // on any ImageObject; without them it files a non-critical issue per image.
  const image = { '@type': 'ImageObject', '@id': `${URL}#photo`, url: `${SITE.baseUrl}${PHOTO_WIDE}`, width: 1200, height: 800, caption: PHOTO_ALT,
    creditText: SITE.name, creator: { '@id': `${SITE.baseUrl}/#organization` }, copyrightHolder: { '@id': `${SITE.baseUrl}/#organization` },
    copyrightNotice: `© ${SITE.season} ${SITE.name}`, license: `${SITE.baseUrl}/terms-and-conditions`, acquireLicensePage: `${SITE.baseUrl}/contact` };
  const article = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${URL}#article`,
    headline: H1,
    description: metadata.description,
    url: URL,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${URL}#webpage` },
    image: [image],
    inLanguage: 'en-IN',
    datePublished: PAGE_DATES.createdISO,
    dateModified: PAGE_DATES.modifiedISO,
    author: { '@id': `${SITE.baseUrl}/#founder` },
    publisher: { '@id': `${SITE.baseUrl}/#organization` },
    about: { '@type': 'Place', name: 'Gaurikund to Kedarnath trek, Rudraprayag district, Uttarakhand' } };
  const wp = { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${URL}#webpage`,
    url: URL, name: 'Kedarnath Pony, Palki & Kandi Rates 2026', inLanguage: 'en-IN',
    dateModified: PAGE_DATES.modifiedISO, primaryImageOfPage: { '@id': `${URL}#photo` },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
  </>);
}

const wrap = { maxWidth: 820, margin: '0 auto', padding: '0 20px' };
const tableWrap = { overflowX: 'auto', margin: '14px 0 8px', border: '1px solid hsl(var(--border))', borderRadius: 12 };
const table = { width: '100%', borderCollapse: 'collapse', minWidth: 560, fontSize: 14 };
const th = { textAlign: 'left', padding: '11px 14px', background: 'var(--navy)', color: '#fff', fontWeight: 700, fontSize: 12.5, whiteSpace: 'nowrap' };
const td = { padding: '11px 14px', borderTop: '1px solid hsl(var(--border))', color: '#334155', verticalAlign: 'top' };
const link = { color: 'var(--teal)', fontWeight: 600 };

const FAQS = [
  { q: 'What are the current pony, palki and kandi rates for Kedarnath in 2026?', a: 'From Gaurikund, a pony runs ₹3,000–4,500 one-way (₹6,000–9,000 return), a palki (dandi) ₹8,000–9,200 up and about ₹12,000 with a same-day return, and a kandi/pitthu ₹3,500–5,000 one-way (₹7,000–9,000 return). These are the counter ranges for the 2026 season. Always match them against the printed card at Gaurikund before you pay, since the exact figure moves within that band depending on your weight and the day\'s demand.' },
  { q: 'Is pony or palki better for senior citizens?', a: 'Palki, in most cases. A pony asks the rider to balance and grip for three to four hours on a stony, switch-backed trail, which is hard on anyone with knee, hip or balance issues. A palki is carried, so there\'s no balance requirement, though it costs roughly double and takes longer. If there\'s any cardiac history, get a fitness check at the Gaurikund medical camp before booking either; the altitude, not the mode of transport, is usually the bigger risk.' },
  { q: 'How do official rates differ from what touts quote on the trail, and how do I avoid getting overcharged?', a: 'The Gaurikund and Sonprayag prepaid counters post the season\'s rate card and issue a printed, numbered receipt. Anyone who approaches you outside that counter and quotes a round number with no receipt is almost always asking above the card rate. Book only at the counter, take the receipt, and check that the registration number on it matches the animal or palki you\'re actually given. Mismatches are the most common trick.' },
  { q: 'What is the weight limit for a pony or palki, and what is the surcharge over it?', a: 'The free limit is 75 kg. Above that, a surcharge of ₹200 applies for every additional 15 kg slab, rounded up. A 90 kg rider pays one slab (₹200 extra); a 95 kg rider still pays one slab, since 20 kg over rounds up to the next 15 kg block, not two.' },
  { q: 'Is Kedarnath or Char Dham registration required before booking a pony or palki?', a: 'Yes. Registration is mandatory for the Kedarnath yatra and is checked at Sonprayag before you\'re allowed onto the trail, and pony and palki operators will ask to see it too. Register in advance at registrationandtouristcare.uk.gov.in rather than relying on the on-spot biometric counters, which back up badly in peak season (May–June and September–October).' },
  { q: 'Can I go up by pony or palki and come down by helicopter (or the reverse)?', a: 'Yes, mixed itineraries are common and none of the operators mind. Book each leg separately (the heli seat through the official IRCTC Heliyatra portal, the pony or palki at the Gaurikund counter) and don\'t assume one booking covers the other. Weather cancels helicopter legs more often than it disrupts pony or palki service, so it\'s worth having the trail leg as your fallback if you\'re on a tight schedule.' },
  { q: 'What\'s the difference between a kandi (pitthu) and a palki (dandi)?', a: 'A kandi is a wicker basket strapped to a porter\'s back, and you sit inside it with knees drawn up; it suits smaller or lighter pilgrims and children. A palki (also called dandi) is a cloth seat slung on a pole and carried by four men. It\'s steadier and more comfortable over the full 16 km, and priced accordingly higher.' },
  { q: 'Do rates change during peak season?', a: 'The printed card rate doesn\'t move; it holds for the season. What changes in peak weeks (May–June, and again around the opening and closing dates) is availability: fewer animals and porters are free, so touts get more aggressive about quoting above-card rates to travellers who show up without a booking. Reaching Gaurikund early morning gets you the printed rate with far less hassle.' },
  { q: 'How much should I tip the pony or palki handler?', a: 'There\'s no fixed rule, but ₹100–200 for a pony handler and ₹200–400 split among a palki\'s four bearers is standard for good service on a hard trail. Tip at the end, once you\'re safely at the temple or back at Gaurikund, not in advance, whatever anyone tells you about it being customary.' },
  { q: 'What happens if I\'ve booked and the weather turns bad?', a: 'Pony and palki operations rarely stop for weather short of an active landslide warning or a trail closure ordered by the district administration, unlike helicopters, which ground easily. If the trail is officially closed, the prepaid counter holds your booking or refunds it; ask for a written note on your receipt if you\'re rebooking for the next day.' },
  { q: 'Is there a group discount for pony or palki bookings?', a: 'Not at the government counter. Rates are per person, per animal or palki, fixed by the printed card regardless of group size. Some private operators outside the counter system offer bundled family rates, but that\'s exactly the arrangement that tends to skip the receipt and registration checks this page keeps telling you to insist on.' },
];

const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export default function KedarnathPonyPalkiKandiRates() {
  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>Gaurikund → Kedarnath · 16 km · Updated {PAGE_DATES.modifiedHuman}</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.6rem,4.2vw,2.5rem)', marginBottom: 14 }}>{H1}</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7 }}>The prepaid-counter prices for the Gaurikund trek — pony, palki, kandi and pitthu — how the counter system works, and how to pay the card rate and nothing more.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <a href={wa('Namaste! I want help planning Kedarnath — pony/palki and a yatra package.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Get a Free Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <article style={{ background: 'var(--bg)', padding: '24px 0 56px' }}>
        <div style={wrap}>

          <BlogAuthor variant="top" author="dhanesh" />

          <AnswerBox>
            A pony from Gaurikund to Kedarnath costs ₹3,000–4,500 one-way in 2026, a palki (dandi) ₹8,000–12,000, and a kandi (pitthu porter) ₹3,500–5,000 one-way — but only at the government prepaid counter. Off that counter, on the open trail, touts routinely ask 30–50% more from anyone who looks unsure. Everything below is how to get the counter price, not the tout price.
          </AnswerBox>

          <p style={p}>
            I've walked this stretch more times than I can count, in and out of season, and the pattern never really changes: the pilgrims who lose money aren't careless, they're just rushed. They land in Gaurikund tired from the drive, someone offers to sort a pony &ldquo;right now, no waiting,&rdquo; and the printed rate card never enters the conversation. This page exists so that doesn't happen to you.
          </p>

          <figure style={{ margin: '22px 0', borderRadius: 14, overflow: 'hidden', border: '1px solid hsl(var(--border))' }}>
            <Image
              src={PHOTO_WIDE}
              alt={PHOTO_ALT}
              width={1200}
              height={800}
              sizes="(max-width: 820px) 100vw, 780px"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
            <figcaption style={{ padding: '10px 14px', fontSize: 12.5, color: '#64748b', background: '#F8FAFC' }}>
              Mules (khachar) and their handlers waiting at the Gaurikund stand before the climb. Most of what the counter books as a &ldquo;pony&rdquo; is a mule — they are steadier on the stone trail. Photo: Shiv Ganga Travels.
            </figcaption>
          </figure>

          <h2 style={h2}>The 2026 rate table — pony, palki, kandi</h2>
          <p style={p}>
            These are one-way and same-day-return ranges for the full Gaurikund–Kedarnath stretch, 16 km each way. The spread within each range comes down to your weight slab and, on the trail, how much you negotiate — though at the counter there's nothing to negotiate, which is the point.
          </p>
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr><th style={th}>Service</th><th style={th}>One-way</th><th style={th}>Return (same day)</th><th style={th}>Time (up)</th></tr>
              </thead>
              <tbody>
                <tr><td style={td}><strong>Pony / Horse</strong> (ghoda, usually a mule)</td><td style={td}>₹3,000–4,500</td><td style={td}>₹6,000–9,000</td><td style={td}>3–4 hrs</td></tr>
                <tr><td style={td}><strong>Palki / Dandi</strong> (4 bearers)</td><td style={td}>₹8,000–9,200</td><td style={td}>up to ₹12,000*</td><td style={td}>5–7 hrs</td></tr>
                <tr><td style={td}><strong>Kandi / Pitthu</strong> (person)</td><td style={td}>₹3,500–5,000</td><td style={td}>₹7,000–9,000</td><td style={td}>6–7 hrs</td></tr>
                <tr><td style={td}><strong>Pitthu</strong> (luggage only)</td><td style={td}>₹1,000–1,500</td><td style={td}>—</td><td style={td}>—</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>
            *A palki is priced per booking, not per leg: ₹8,000–9,200 gets you up, and a same-day return booking runs to about ₹12,000 because the four bearers wait at the top rather than taking another fare. Weight surcharge on palki and kandi: <strong>₹200 for every 15 kg over 75 kg</strong>. Sonprayag to Gaurikund by shared jeep is an extra ₹50–100 per person and isn't part of the fare — pay it at the Sonprayag stand.
          </p>

          <h2 style={h2}>Official rate vs what touts actually charge</h2>
          <p style={p}>
            Every season, the Rudraprayag district administration sets the rate card that the Gaurikund and Sonprayag prepaid counters operate on, and that card is what's printed on your receipt. It's the only figure that's binding: an operator who charges above it is breaking the terms of their registration, and you have a receipt to prove it if you need to complain.
          </p>
          <p style={p}>
            Outside that counter, on the trail itself, unregistered or loosely affiliated operators quote whatever the moment allows. It's rarely a huge markup on a single ride, but it adds up over a family group, and it comes with none of the recourse a printed receipt gives you. The fix isn't complicated: book at the counter, first thing in the morning, before the day's animals are gone and before anyone on the trail has a reason to approach you.
          </p>
          <p style={p}>
            A useful habit: photograph the rate card at the counter before you walk off with your receipt. If a handler tries to add a &ldquo;return supplement&rdquo; or a &ldquo;rest-stop charge&rdquo; halfway up (both are common asks that aren't on any official card), you have the printed rate in your pocket to point back to.
          </p>

          <h2 style={h2}>Work out your own fare</h2>
          <p style={p}>
            This mirrors the counter's own weight-slab arithmetic, so you can check the number before you're standing in the queue. It's a planning figure, not a quote.
          </p>
          <KedarnathFareCalc />

          <h2 style={h2}>Pony vs palki vs kandi vs helicopter — which to pick</h2>
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr><th style={th}>Option</th><th style={th}>Best for</th><th style={th}>Trade-off</th></tr>
              </thead>
              <tbody>
                <tr><td style={td}><strong>Pony</strong></td><td style={td}>Fit riders comfortable balancing for hours</td><td style={td}>Sore thighs and back by the end; not ideal with knee or hip issues</td></tr>
                <tr><td style={td}><strong>Palki</strong></td><td style={td}>Seniors, anyone with balance or joint concerns</td><td style={td}>Roughly double the pony fare, and slower</td></tr>
                <tr><td style={td}><strong>Kandi</strong></td><td style={td}>Children and lighter pilgrims, budget trips</td><td style={td}>Cramped for anyone over medium build; longest ride time</td></tr>
                <tr><td style={td}><strong>Helicopter</strong></td><td style={td}>Time-limited trips, medical caution</td><td style={td}>Weather-dependent, books out weeks ahead, most expensive — see our <Link prefetch={false} href="/blog/kedarnath-helicopter-booking" style={link}>helicopter booking guide</Link></td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>
            Torn between the two most common choices? Our <Link prefetch={false} href="/blog/kedarnath-pony-vs-helicopter" style={link}>pony vs helicopter comparison</Link> goes through it leg by leg.
          </p>

          <h2 style={h2}>Two things people search for that do not exist</h2>
          <h3 style={h3}>&ldquo;Sonprayag to Kedarnath by horse&rdquo;</h3>
          <p style={p}>
            Private vehicles stop at Sonprayag, and the shared jeep covers the last 5 km to Gaurikund. <strong>Every pony, palki and kandi starts at Gaurikund</strong>, not Sonprayag. So the real cost of &ldquo;Sonprayag to Kedarnath by horse&rdquo; is the ₹50–100 jeep fare plus the ₹3,000–4,500 ride from Gaurikund. Budget for both.
          </p>
          <h3 style={h3}>&ldquo;Gaurikund to Kedarnath by helicopter&rdquo;</h3>
          <p style={p}>
            There is no helipad at Gaurikund. Helicopters fly from <strong>Phata, Sersi and Guptkashi</strong>, all of which are below Gaurikund on the road, and land at the Kedarnath helipad above the temple. If you are already at Gaurikund, your options are on foot, pony, palki or kandi — the helicopter decision has to be made before you leave the road head.
          </p>

          <h2 style={h2}>Route facts at a glance</h2>
          <ul style={{ ...p, paddingLeft: 22 }}>
            <li>Gaurikund to Kedarnath: 16 km, gaining roughly 1,600 m</li>
            <li>Kedarnath sits at about 3,583 m above sea level</li>
            <li>Sonprayag to Gaurikund: a short jeep ride, not walked</li>
            <li>Trail is stone-paved most of the way, with a few steep switchback sections in the upper stretch</li>
          </ul>
          <p style={p}>
            The trail runs through a couple of natural rest points, Jungle Chatti and Linchouli being the two most pilgrims stop at, with tea stalls and basic toilets. Pony and palki handlers know these stops well and will pause there without being asked; if yours doesn't and you need a break, just say so. Nobody's paid by the hour, and a reasonable rest doesn't cost you extra.
          </p>

          <h2 style={h2}>How to book — step by step</h2>
          <ol style={{ ...p, paddingLeft: 22 }}>
            <li style={{ marginBottom: 10 }}>Complete Char Dham registration in advance at registrationandtouristcare.uk.gov.in — it's checked at the <strong>Sonprayag checkpost</strong> before you reach Gaurikund.</li>
            <li style={{ marginBottom: 10 }}>Reach Gaurikund early — the prepaid counter opens before sunrise in peak season, and the day's better animals go first.</li>
            <li style={{ marginBottom: 10 }}>State your weight honestly at the counter; the slab surcharge is calculated there, not negotiated.</li>
            <li style={{ marginBottom: 10 }}>Take the printed receipt and check the registration number matches the pony, palki team or porter you're handed over to.</li>
            <li style={{ marginBottom: 0 }}>Pay the amount on the receipt — nothing extra unless you're adding a return or changing service mid-route, which goes through the counter too.</li>
          </ol>
          <p style={p}>
            In peak weeks — mid-May to mid-June, and again through late September into October — the counter queue can run past an hour by 8 a.m. If you're not staying overnight at Gaurikund, arriving the evening before and booking first thing saves you the wait and gets first pick of animals. During the monsoon lull (July–August) the queue is short but the trail turns slick in places; rates don't change for it, but factor in extra time.
          </p>

          <h2 style={h2}>How to avoid scams</h2>
          <p style={p}>
            Almost every complaint about being overcharged on this trek traces back to one of a handful of habits. Fix these and you're largely covered:
          </p>
          <ul style={{ ...p, paddingLeft: 22 }}>
            <li style={{ marginBottom: 8 }}><strong>Book at the counter, not on the trail.</strong> Anyone who approaches you directly, especially near the Sonprayag or Gaurikund entry points, is working outside the registered system.</li>
            <li style={{ marginBottom: 8 }}><strong>Insist on the printed receipt</strong> with a registration number, and check that number against the animal or team you're actually given before you set off.</li>
            <li style={{ marginBottom: 8 }}><strong>Don't pay the full amount upfront</strong> to anyone without a receipt in hand. A verbal promise on the trail isn't enforceable.</li>
            <li style={{ marginBottom: 8 }}><strong>Confirm return pricing before you start</strong> if you're booking a round trip in two parts; some operators quote a low one-way fare and then raise the return price once you're stuck at the top.</li>
            <li style={{ marginBottom: 0 }}><strong>Watch for fake helicopter and Char Dham booking websites.</strong> Book heli seats only through the official IRCTC Heliyatra portal. A wave of look-alike booking sites appears every season and takes advance payments for seats that don't exist.</li>
          </ul>
          <div style={{ background: '#FEF3F2', border: '1px solid #FECACA', borderRadius: 12, padding: '16px 18px', margin: '18px 0 26px' }}>
            <div style={{ fontWeight: 800, color: '#B42318', fontSize: 15, marginBottom: 6 }}>If it goes wrong on the day</div>
            <p style={{ ...p, marginBottom: 0, fontSize: 14.5 }}>
              Note the operator's ID-card number (every registered operator wears one) and go to the tourist police booth at <strong>Sonprayag or Gaurikund</strong> with your receipt. Emergencies: <strong>112</strong> (police / medical) · <strong>1070</strong> (state disaster helpline).
            </p>
          </div>

          <h2 style={h2}>Total cost breakdown</h2>
          <p style={p}>
            Pony/palki/kandi fare is one line item in the day, not the whole cost. Roughly, for one pilgrim doing the up-and-down from Gaurikund:
          </p>
          <ul style={{ ...p, paddingLeft: 22 }}>
            <li style={{ marginBottom: 8 }}><strong>Budget (kandi, no overnight stay):</strong> ₹7,000–9,000 kandi return + ₹500–800 meals and jeep to Gaurikund + tip. A long single-day trip, best for fit younger travellers.</li>
            <li style={{ marginBottom: 8 }}><strong>Mid-range (pony return, one night at Kedarnath):</strong> ₹6,000–9,000 pony return + ₹1,500–3,000 guesthouse + ₹800–1,200 meals for two days + tip. The most common pattern among our own groups.</li>
            <li style={{ marginBottom: 0 }}><strong>Comfort (palki up, helicopter down):</strong> ₹8,000–9,200 palki one-way + a heli seat booked separately through IRCTC Heliyatra (fares vary by operator and season, so check the portal directly) + meals. The fastest option for anyone short on time or trail-averse.</li>
          </ul>
          <p style={p}>
            For full per-person figures across a multi-day Char Dham itinerary, our <Link prefetch={false} href="/blog/char-dham-yatra-cost" style={link}>Char Dham Yatra cost breakdown</Link> walks through budget, mid-range and luxury planning in detail.
          </p>

          <h2 style={h2}>What can go wrong — and it's not always about money</h2>
          <p style={p}>
            Overcharging gets most of the attention, but it's not the only thing worth watching for. Ponies on this route work long, repeated days in thin air on a steep trail, and a tired or overloaded animal is a safety problem for you, not just a welfare one, since a stumble on the switchbacks with a rider aboard is how most trail injuries here actually happen. A well-run counter rotates its animals and won't load beyond the posted weight limit; if a handler pushes you to ignore your stated weight or seems to be rushing an obviously tired animal, that's a reason to ask for a different one, not to just get on and hope.
          </p>
          <p style={p}>
            The same goes for porters carrying a kandi or a palki pole for six or seven hours at altitude, and a short pause when they ask for one isn't a delay tactic; it's the job. Treat the people and animals doing the actual carrying with that in mind, and the trip goes better for everyone, including you.
          </p>

          <h2 style={h2}>Senior citizens &amp; medical fitness</h2>
          <p style={p}>
            The altitude, not the pony or palki itself, is what catches people out. Anyone over 60, or with a history of heart or lung trouble, should get checked at the Gaurikund medical camp before starting; it's free and takes a few minutes. Palki is the gentler option for joints and balance, but it doesn't reduce altitude risk; carry any regular medication with you, not in luggage sent ahead by pitthu. If you're travelling with elderly parents, our <Link prefetch={false} href="/kedarnath-yatra" style={link}>Kedarnath yatra packages</Link> arrange the registration, hotel and counter logistics so your family isn't doing this cold at 4 AM.
          </p>

          <h2 style={h2}>Frequently asked questions</h2>
          <PeopleAlsoAsk items={FAQS} heading={null} subtext={null} />

          <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3E75)', borderRadius: 14, padding: '26px 22px', margin: '34px 0 10px', textAlign: 'center' }}>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Want this handled for you?</div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14.5, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 16px' }}>
              We've run the Gaurikund route. Tell us who's travelling and we'll plan the trek, pony/palki and registration around them — ₹0 to enquire, no advance to talk.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={wa('Namaste! Please help plan Kedarnath with pony/palki for my group.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp Us</a>
              <Link prefetch={false} href="/kedarnath-yatra" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>View Kedarnath Packages →</Link>
            </div>
          </div>

          <h2 style={{ ...h2, fontSize: 'var(--fs-h3)' }}>Related reading</h2>
          <ul style={{ ...p, paddingLeft: 22, fontSize: 15 }}>
            <li><Link prefetch={false} href="/blog/kedarnath-trek-guide" style={link}>Kedarnath trek guide</Link> — distance, difficulty &amp; what to expect</li>
            <li><Link prefetch={false} href="/gaurikund" style={link}>Gaurikund</Link> — where the Kedarnath trek starts</li>
            <li><Link prefetch={false} href="/kedarnath-vip-darshan" style={link}>Kedarnath VIP darshan</Link> — price &amp; booking</li>
            <li><Link prefetch={false} href="/blog/char-dham-yatra-registration" style={link}>Kedarnath registration 2026</Link></li>
            <li><Link prefetch={false} href="/blog/haridwar-to-kedarnath" style={link}>Haridwar to Kedarnath</Link> — routes &amp; fares</li>
            <li><Link prefetch={false} href="/char-dham-road-status" style={link}>Char Dham road status</Link> — live route updates</li>
          </ul>

          <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 18, lineHeight: 1.7 }}>
            Rate ranges are the prepaid-counter figures at Gaurikund and Sonprayag for the 2026 season, as seen by our groups on the route; the printed card at the counter is final. Registration: <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: '#94a3b8' }}>registrationandtouristcare.uk.gov.in</a>. Helicopter bookings: <a href="https://heliyatra.irctc.co.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: '#94a3b8' }}>heliyatra.irctc.co.in</a>.
          </p>

          <BlogAuthor author="dhanesh" variant="bottom" />
        </div>
      </article>
    </>
  );
}
