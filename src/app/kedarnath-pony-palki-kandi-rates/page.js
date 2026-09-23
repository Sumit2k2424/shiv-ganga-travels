import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import KedarnathFareCalc from '@/components/KedarnathFareCalc';
import { h2, h3, p } from "@/lib/prose";
import { pageDates } from '@/lib/pageDates';
import { KEDARNATH_TREK, ZP_DANDI_2026 as DANDI, ZP_KANDI_2026 as KANDI } from '@/data/trekRates';

const PATH = '/kedarnath-pony-palki-kandi-rates';
const URL = `${SITE.baseUrl}${PATH}`;
const PAGE_DATES = pageDates(PATH);
const CARD = KEDARNATH_TREK.officialCard;
const inr = (n) => '₹' + n.toLocaleString('en-IN');
const dandi = (id) => DANDI.routes.find((r) => r.id === id).totals;
const kandi = (id) => KANDI.routes.find((r) => r.id === id).totals;
const MULE_BOTH_WAYS = inr(CARD.gaurikundUp + CARD.gaurikundDown);
// What a same-day return saves against two one-way dandi fares, lightest and heaviest slab.
const RETURN_SAVES = [0, 4].map((i) => inr(dandi('up')[i] + dandi('down')[i] - dandi('return')[i]));

// The Zila Panchayat's 2026 boards, photographed by our team at Gaurikund.
const SHOT = DANDI.photographed;
const SHOT_CREDIT = `Photo: Shiv Ganga Travels, ${SHOT.place}, ${SHOT.human}.`;
const BOARD_PHOTOS = {
  dandi: {
    src: DANDI.photo,
    alt: 'Zila Panchayat Rudraprayag board of 2026 dandi (doli) rates for the Gaurikund–Kedarnath footpath, listing fares by route across five passenger-weight slabs from 0–60 kg to 101–120 kg',
    caption: `The 2026 dandi (doli) board, Zila Panchayat Rudraprayag. The table below is transcribed from it. ${SHOT_CREDIT}`,
  },
  kandi: {
    src: KANDI.photo,
    alt: 'Zila Panchayat Rudraprayag board of 2026 kandi rates for the Gaurikund–Kedarnath footpath, listing fares for up to 25 kg and up to 50 kg, hung above the dandi–kandi prepaid counter',
    caption: `The 2026 kandi board, hung above the dandi–kandi prepaid counter (the sign at the bottom of the frame). ${SHOT_CREDIT}`,
  },
};

// Our own photo, shot at the Gaurikund stand. The 1200×630 crop exists for
// the social card; the 1200×800 one is the in-page figure.
const PHOTO_WIDE = '/images/kedarnath-pony-palki-rates-hero-wide.jpg';
const PHOTO_CARD = '/images/kedarnath-pony-palki-rates-hero.jpg';
const PHOTO_ALT = 'Three decorated mules with beaded headbands and bells, their handlers behind them, waiting under a shelter at the Gaurikund stand before the Kedarnath climb';

const H1 = 'Kedarnath Pony, Palki & Kandi Rates 2026: Official Price vs What Touts Actually Charge';

export const metadata = {
  title: { absolute: 'Kedarnath Pony, Palki & Kandi Rates 2026 | Official Price' },
  description: `Official 2026 rates, photographed at Gaurikund: palki (dandi) ${KEDARNATH_TREK.palki.up} by weight, kandi ${KEDARNATH_TREK.kandi.oneWay}, mule ${CARD.gaurikundUpInr}. Every weight slab in full.`,
  keywords: [`kedarnath pony palki kandi rates ${SITE.season}`,`kedarnath pony charges ${SITE.season}`,'kedarnath horse price','kedarnath khachar price','gaurikund to kedarnath by horse price','ponies and palkies rates for kedarnath','kedarnath palki charges','kedarnath palki rate','kedarnath kandi pitthu rate','kedarnath palki booking online','kedarnath ghoda price','sonprayag to kedarnath by horse','kedarnath palki price per person','kedarnath dandi rate','kedarnath doli rate 2026','kedarnath kandi rate 2026','kedarnath porter charges'],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Kedarnath Pony, Palki & Kandi Rates 2026 | Official Price',
    description: 'The Zila Panchayat’s 2026 dandi and kandi boards, photographed and transcribed in full, the district mule card, and the prepaid-counter system that keeps you from being overcharged.',
    url: URL,
    type: 'article',
    images: [{ url: PHOTO_CARD, width: 1200, height: 630, alt: PHOTO_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Pony, Palki & Kandi Rates 2026 | Official Price',
    description: `Palki ${KEDARNATH_TREK.palki.up} · Kandi ${KEDARNATH_TREK.kandi.oneWay} · Mule ${CARD.gaurikundUpInr}. The 2026 boards, every weight slab, and how not to get overcharged.`,
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
  const licensing = { creditText: SITE.name, creator: { '@id': `${SITE.baseUrl}/#organization` }, copyrightHolder: { '@id': `${SITE.baseUrl}/#organization` },
    copyrightNotice: `© ${SITE.season} ${SITE.name}`, license: `${SITE.baseUrl}/terms-and-conditions`, acquireLicensePage: `${SITE.baseUrl}/contact` };
  const image = { '@type': 'ImageObject', '@id': `${URL}#photo`, url: `${SITE.baseUrl}${PHOTO_WIDE}`, width: 1200, height: 800, caption: PHOTO_ALT, ...licensing };
  const boards = Object.entries(BOARD_PHOTOS).map(([k, b]) => ({ '@type': 'ImageObject', '@id': `${URL}#${k}-board`,
    url: `${SITE.baseUrl}${b.src}`, width: 1280, height: 960, caption: b.alt, dateCreated: SHOT.dateISO,
    contentLocation: { '@type': 'Place', name: `${SHOT.place}, Rudraprayag district, Uttarakhand` }, ...licensing }));
  const article = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${URL}#article`,
    headline: H1,
    description: metadata.description,
    url: URL,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${URL}#webpage` },
    image: [image, ...boards],
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
const num = { ...td, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' };
const sub = { display: 'block', fontSize: 12, color: '#64748b', marginTop: 2 };
const note = { ...p, fontSize: 13.5, color: '#64748b' };

function BoardFigure({ photo }) {
  return (
    <figure style={{ margin: '18px 0 20px', borderRadius: 14, overflow: 'hidden', border: '1px solid hsl(var(--border))' }}>
      <a href={photo.src} target="_blank" rel="noopener" style={{ display: 'block' }}>
        <Image src={photo.src} alt={photo.alt} width={1280} height={960}
          sizes="(max-width: 820px) 100vw, 780px" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </a>
      <figcaption style={{ padding: '10px 14px', fontSize: 12.5, color: '#64748b', background: '#F8FAFC' }}>
        {photo.caption} <a href={photo.src} target="_blank" rel="noopener" style={link}>Open full size</a>
      </figcaption>
    </figure>
  );
}

const FAQS = [
  { q: 'What are the current pony, palki and kandi rates for Kedarnath in 2026?', a: `The Zila Panchayat Rudraprayag's 2026 boards put a dandi (palki) from Gaurikund to Kedarnath at ${KEDARNATH_TREK.palki.up} one way, depending on the passenger's weight (${KEDARNATH_TREK.palki.withReturn} for a same-day return), and a kandi at ${inr(kandi('up')[0])} up to 25 kg or ${inr(kandi('up')[1])} up to 50 kg. A mule is ${CARD.gaurikundUpInr} on the district card (${CARD.sonprayagUpInr} from Sonprayag, ${CARD.gaurikundDownInr} back down), though pilgrims usually end up paying ${KEDARNATH_TREK.pony.oneWay}. Both boards are photographed and transcribed in full on this page. Match what you are quoted against them before you pay.` },
  { q: 'Is pony or palki better for senior citizens?', a: 'Palki, in most cases. A pony asks the rider to balance and grip for three to four hours on a stony, switch-backed trail, which is hard on anyone with knee, hip or balance issues. A palki is carried, so there\'s no balance requirement, though it costs about three times the mule fare and takes longer. If there\'s any cardiac history, get a fitness check at the Gaurikund medical camp before booking either; the altitude, not the mode of transport, is usually the bigger risk.' },
  { q: 'How do official rates differ from what touts quote on the trail, and how do I avoid getting overcharged?', a: 'The Gaurikund and Sonprayag prepaid counters post the season\'s rate card and issue a printed, numbered receipt. Anyone who approaches you outside that counter and quotes a round number with no receipt is almost always asking above the card rate. Book only at the counter, take the receipt, and check that the registration number on it matches the animal or palki you\'re actually given. Mismatches are the most common trick.' },
  { q: 'Does weight change the pony, palki or kandi fare?', a: `For a palki and a kandi, yes; for a mule, no. The mule card sets one fare per leg with no weight slabs. The 2026 dandi (palki) board has ${KEDARNATH_TREK.palki.slabLabel}: each slab up to 100 kg adds ₹1,000 to the fare, and the step to 101–120 kg adds ₹3,000. The kandi board has two slabs, up to 25 kg and up to 50 kg, and nothing above that, so anyone heavier goes by dandi.` },
  { q: 'Is Kedarnath or Char Dham registration required before booking a pony or palki?', a: 'Yes. Registration is mandatory for the Kedarnath yatra and is checked at Sonprayag before you\'re allowed onto the trail, and pony and palki operators will ask to see it too. Register in advance at registrationandtouristcare.uk.gov.in rather than relying on the on-spot biometric counters, which back up badly in peak season (May–June and September–October).' },
  { q: 'Can I go up by pony or palki and come down by helicopter (or the reverse)?', a: 'Yes, mixed itineraries are common and none of the operators mind. Book each leg separately (the heli seat through the official IRCTC Heliyatra portal, the pony or palki at the Gaurikund counter) and don\'t assume one booking covers the other. Weather cancels helicopter legs more often than it disrupts pony or palki service, so it\'s worth having the trail leg as your fallback if you\'re on a tight schedule.' },
  { q: 'What\'s the difference between a kandi (pitthu) and a palki (dandi)?', a: `A kandi is a wicker basket strapped to one porter's back, and you sit inside it with knees drawn up. The 2026 board only prices it up to ${KANDI.maxKg} kg, so it is for children and very light adults. A palki (also called dandi or doli) is a seat slung on poles and carried by four men. It's steadier and more comfortable over the full 16 km, and it costs more: ${inr(dandi('up')[0])} and up for the climb, against the kandi's ${KEDARNATH_TREK.kandi.oneWay}.` },
  { q: 'Do rates change during peak season?', a: 'No. The 2026 boards are printed "for the 2026 yatra season" and hold for all of it. What changes in peak weeks (May–June, and again around the opening and closing dates) is availability: fewer animals and porters are free, so touts get more aggressive about quoting above the board to travellers who show up without a booking. Reaching Gaurikund early morning gets you the printed rate with far less hassle.' },
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
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>Gaurikund → Kedarnath · 16 km trail · Updated {PAGE_DATES.modifiedHuman}</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.6rem,4.2vw,2.5rem)', marginBottom: 14 }}>{H1}</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7 }}>The Zila Panchayat's 2026 dandi and kandi boards, photographed at Gaurikund and transcribed in full, the district's mule card, and how to pay the printed rate and nothing more.</p>
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
            The Zila Panchayat Rudraprayag's 2026 boards, which we photographed at {SHOT.place} on {SHOT.human}, put a dandi (palki) from Gaurikund to Kedarnath at {inr(dandi('up')[0])} for a passenger up to 60 kg, rising by weight slab to {inr(dandi('up')[4])} at 101–120 kg, and a kandi at {inr(kandi('up')[0])} up to 25 kg or {inr(kandi('up')[1])} up to 50 kg. A mule is {CARD.gaurikundUpInr} on the district card ({CARD.sonprayagUpInr} from Sonprayag, {CARD.gaurikundDownInr} back down). Touts on the open trail ask 30–50% more. Everything below is how to pay the printed rate, not the tout rate.
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

          <h2 style={h2}>The 2026 rates at a glance</h2>
          <p style={p}>
            Every figure in this table is printed on an official card. Dandi and kandi fares come from the Zila Panchayat&rsquo;s 2026 boards, photographed and transcribed in full below. Mule fares come from the District Magistrate&rsquo;s card, which is linked as a PDF further down. At the counter there is nothing to negotiate, which is the point.
          </p>
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr><th style={th}>Service</th><th style={th}>Up (Gaurikund → Kedarnath)</th><th style={th}>Down</th><th style={th}>Same-day return</th><th style={th}>Time up</th></tr>
              </thead>
              <tbody>
                <tr><td style={td}><strong>Mule / Pony</strong><span style={sub}>district card, any weight</span></td><td style={num}>{CARD.gaurikundUpInr}*</td><td style={num}>{CARD.gaurikundDownInr}</td><td style={num}>{MULE_BOTH_WAYS}<span style={sub}>two bookings</span></td><td style={num}>3–4 hrs</td></tr>
                <tr><td style={td}><strong>Dandi / Palki</strong><span style={sub}>passenger 0–60 kg</span></td><td style={num}>{inr(dandi('up')[0])}</td><td style={num}>{inr(dandi('down')[0])}</td><td style={num}>{inr(dandi('return')[0])}</td><td style={num}>5–7 hrs</td></tr>
                <tr><td style={td}><strong>Dandi / Palki</strong><span style={sub}>passenger 101–120 kg</span></td><td style={num}>{inr(dandi('up')[4])}</td><td style={num}>{inr(dandi('down')[4])}</td><td style={num}>{inr(dandi('return')[4])}</td><td style={num}>5–7 hrs</td></tr>
                <tr><td style={td}><strong>Kandi</strong><span style={sub}>up to 25 kg</span></td><td style={num}>{inr(kandi('up')[0])}</td><td style={num}>{inr(kandi('down')[0])}</td><td style={num}>{inr(kandi('return')[0])}</td><td style={num}>6–7 hrs</td></tr>
                <tr><td style={td}><strong>Kandi</strong><span style={sub}>up to 50 kg</span></td><td style={num}>{inr(kandi('up')[1])}</td><td style={num}>{inr(kandi('down')[1])}</td><td style={num}>{inr(kandi('return')[1])}</td><td style={num}>6–7 hrs</td></tr>
                <tr><td style={td}><strong>Pitthu</strong><span style={sub}>luggage only, no printed card</span></td><td style={num}>{KEDARNATH_TREK.luggagePitthu.oneWay}</td><td style={num}>—</td><td style={num}>—</td><td style={num}>—</td></tr>
              </tbody>
            </table>
          </div>
          <p style={note}>
            *The mule fare runs to the Kedarnath base camp, 14 km; on the trail pilgrims usually pay {KEDARNATH_TREK.pony.oneWay} for it, which is the gap this page is about. The in-between dandi slabs (61–75, 76–90 and 91–100 kg) are in the full board below. Sonprayag to Gaurikund by shared jeep is an extra ₹50–100 per person and isn&rsquo;t part of any fare; pay it at the Sonprayag stand.
          </p>

          <h2 style={h2}>The 2026 dandi (palki) board, every weight slab</h2>
          <p style={p}>
            Most pages quoting &ldquo;official&rdquo; Kedarnath palki rates give you a range and no document. Here is the board. It is the Zila Panchayat Rudraprayag&rsquo;s, headed <em lang="hi">वर्ष 2026 के यात्राकाल के लिए गौरीकुण्ड से केदारनाथ पैदल मार्ग के लिए डण्डी (डोली) की दरें</em>, which means dandi (doli) rates for the Gaurikund–Kedarnath footpath for the 2026 yatra season. Our team photographed it at {SHOT.place} on {SHOT.human}.
          </p>
          <BoardFigure photo={BOARD_PHOTOS.dandi} />
          <p style={p}>
            The fare depends on the route and on the passenger&rsquo;s weight. Every figure is the bearers&rsquo; wages plus a ₹{DANDI.arrangementFee} arrangement fee (<em>vyavastha shulk</em>) plus ₹{DANDI.dandiFee} for the dandi itself with its cushion. The table gives the total, which is what your receipt should show.
          </p>
          <div style={tableWrap}>
            <table style={{ ...table, minWidth: 600 }}>
              <thead>
                <tr><th style={th}>Route</th>{DANDI.slabs.map((s) => <th key={s} style={th}>{s}</th>)}</tr>
              </thead>
              <tbody>
                {DANDI.routes.map((r) => (
                  <tr key={r.id}>
                    <td style={td}><strong>{r.from} → {r.to}</strong><span style={sub}>{r.trip.toLowerCase()} · {r.km} km</span></td>
                    {r.totals.map((t, i) => <td key={i} style={num}>{t === null ? '—†' : inr(t)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={note}>
            Over 120 kg: the board adds ₹{DANDI.over120Extra.toLocaleString('en-IN')} to the 101–120 kg rate, so Gaurikund to Kedarnath becomes {inr(dandi('up')[4] + DANDI.over120Extra)}. The board prints the middle slab as &ldquo;75–90 kg&rdquo;; 75 kg itself falls in 61–75. †These two cells are unreadable in our photo because of a crease in the banner. Ask at the counter.
          </p>
          <p style={p}>
            Three things the board tells you that a range never will. First, <strong>book the return as one booking</strong>. A same-day return costs less than an up fare plus a down fare: {RETURN_SAVES[0]} less at 0–60 kg and {RETURN_SAVES[1]} less at 101–120 kg, because the bearers wait for you at the top instead of finding another fare. Second, keeping them overnight at the top costs exactly {inr(dandi('returnNight')[0] - dandi('return')[0])} more than the same-day return, at every weight. Third, the slabs climb by ₹1,000 each up to 100 kg and then jump ₹3,000 to the 101–120 kg slab. State the passenger&rsquo;s weight honestly. The four men carrying the dandi feel every kilo, and a dispute halfway up the trail is worse than the fare.
          </p>

          <h2 style={h2}>The 2026 kandi board</h2>
          <p style={p}>
            A kandi is a wicker basket on one porter&rsquo;s back. The Zila Panchayat&rsquo;s 2026 kandi board has only two weight slabs, up to 25 kg and up to 50 kg, and nothing above that. That makes the kandi a choice for children and very light adults; anyone heavier is on the dandi board. We photographed this one the same day, where it hangs above the dandi–kandi prepaid counter at {SHOT.place}.
          </p>
          <BoardFigure photo={BOARD_PHOTOS.kandi} />
          <div style={tableWrap}>
            <table style={{ ...table, minWidth: 0 }}>
              <thead>
                <tr><th style={th}>Route</th>{KANDI.slabs.map((s) => <th key={s} style={th}>{s}</th>)}</tr>
              </thead>
              <tbody>
                {KANDI.routes.map((r) => (
                  <tr key={r.id}>
                    <td style={td}><strong>{r.from} → {r.to}</strong><span style={sub}>{r.trip.toLowerCase()} · {r.km} km</span></td>
                    {r.totals.map((t, i) => <td key={i} style={num}>{inr(t)}{r.alt50 && i === 1 ? '‡' : ''}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={note}>
            Each total is the porter&rsquo;s wages plus a ₹{KANDI.arrangementFee} arrangement fee. ‡The board lists Kedarnath → Lincholi twice, once at {inr(kandi('lincholiDn')[1])} and once at {inr(KANDI.routes.find((r) => r.id === 'lincholiDn').alt50)} for the 50 kg slab. If you are quoted either, it is on the board.
          </p>
          <p style={p}>
            The kandi is not the budget option it is often described as. For the climb it costs {inr(kandi('up')[0])} to {inr(kandi('up')[1])}, two to two-and-a-half times the mule&rsquo;s card fare. For a passenger close to 50 kg, it is only {inr(dandi('up')[0] - kandi('up')[1])} less than a dandi, which is far steadier. Where the kandi does make sense is a small child, and on the same-day return: {inr(kandi('return')[0])} up to 25 kg, against {inr(kandi('up')[0] + kandi('down')[0])} for two one-way trips.
          </p>

          <h2 style={h2}>The mule (pony) card: the district&rsquo;s notice</h2>
          <p style={p}>
            Mule fares come from a different office. The District Magistrate, Rudraprayag fixes the ghoda–khachar fares for the Sonprayag–Gaurikund–Kedarnath trail by notice each time they are revised; the current one is <strong>{CARD.notice}</strong>. You can <a href={CARD.url} target="_blank" rel="noopener noreferrer" style={link}>read the notice (PDF, Hindi, 4 pages)</a> on the district site. Each fare below is the mule owner&rsquo;s fee plus a ₹{CARD.arrangementFee} arrangement fee, which is the total your receipt shows. Unlike the dandi board, there are no weight slabs. It is one fare per leg.
          </p>
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr><th style={th}>From</th><th style={th}>To</th><th style={th}>km</th><th style={th}>Card rate</th></tr>
              </thead>
              <tbody>
                {CARD.legs.map((l) => (
                  <tr key={l.from + l.to}><td style={td}>{l.from}</td><td style={td}>{l.to}</td><td style={td}>{l.km}</td><td style={td}><strong>₹{l.total.toLocaleString('en-IN')}</strong></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={note}>
            Source: {CARD.issuer}, {CARD.notice}. The notice covers mules only; dandi and kandi rates are the Zila Panchayat&rsquo;s, on the two 2026 boards above. No 2025 or 2026 revision of the mule card has been published on the district site as of {PAGE_DATES.modifiedHuman}; the counters are working from this card.
          </p>
          <p style={p}>
            Three things on the card that most rate pages get wrong. The mule leg from Gaurikund is measured at <strong>14 km</strong> to the base camp (the walking trail to the temple is the 16 km everyone quotes). The <strong>ride down is cheaper than the ride up</strong> — {CARD.gaurikundDownInr} against {CARD.gaurikundUpInr} — so a handler quoting the same figure for both legs is already above card. And the card&rsquo;s first row is <strong>Sonprayag to Kedarnath, {CARD.sonprayagUpInr}</strong>: mules do start at Sonprayag, and for anyone who cannot manage the jeep queue that is the leg to book.
          </p>

          <h2 style={h2}>Official rate vs what touts actually charge</h2>
          <p style={p}>
            Two bodies set the rates on this trail: the District Magistrate for mules, and the Zila Panchayat for dandi and kandi. Their cards are what the prepaid counters charge and what's printed on your receipt. They're the only figures that are binding. An operator who charges above them is breaking the terms of their licence, and you have a receipt to prove it if you need to complain.
          </p>
          <p style={p}>
            That licence is worth knowing about. The Zila Panchayat&rsquo;s own boards say every mule owner, dandi or kandi porter and hawker on the route must hold its licence (the fee is ₹{DANDI.licenceFee}), and that anyone found working without one faces penal action. So a porter who can&rsquo;t show a licence card is not someone to hand money to.
          </p>
          <p style={p}>
            Outside that counter, on the trail itself, unregistered or loosely affiliated operators quote whatever the moment allows. It's rarely a huge markup on a single ride, but it adds up over a family group, and it comes with none of the recourse a printed receipt gives you. The fix isn't complicated: book at the counter, first thing in the morning, before the day's animals are gone and before anyone on the trail has a reason to approach you.
          </p>
          <p style={p}>
            Photograph the board before you walk off with your receipt. That's how the two boards on this page got here, and it's a habit worth copying. If a handler tries to add a &ldquo;return supplement&rdquo; or a &ldquo;rest-stop charge&rdquo; halfway up (both are common asks that aren't on any official card), you have the printed rate in your pocket to point back to.
          </p>

          <h2 style={h2}>Look up your own fare</h2>
          <p style={p}>
            Pick the service, the route and the passenger&rsquo;s weight, and this reads the fare straight off the boards above, with the fee split the receipt should show. Check the number before you&rsquo;re standing in the queue.
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
                <tr><td style={td}><strong>Palki</strong></td><td style={td}>Seniors, anyone with balance or joint concerns</td><td style={td}>About three times the mule fare, priced by weight, and slower</td></tr>
                <tr><td style={td}><strong>Kandi</strong></td><td style={td}>Small children and very light adults (the board stops at {KANDI.maxKg} kg)</td><td style={td}>Cramped, the longest ride time, and not cheap: {KEDARNATH_TREK.kandi.oneWay} up</td></tr>
                <tr><td style={td}><strong>Helicopter</strong></td><td style={td}>Time-limited trips, medical caution</td><td style={td}>Weather-dependent, books out weeks ahead, most expensive — see our <Link prefetch={false} href="/blog/kedarnath-helicopter-booking" style={link}>helicopter booking guide</Link></td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>
            Torn between the two most common choices? Our <Link prefetch={false} href="/blog/kedarnath-pony-vs-helicopter" style={link}>pony vs helicopter comparison</Link> goes through it leg by leg.
          </p>

          <h2 style={h2}>Two things people search for — one exists, one doesn&rsquo;t</h2>
          <h3 style={h3}>&ldquo;Sonprayag to Kedarnath by horse&rdquo;</h3>
          <p style={p}>
            This one does exist, and it is the first row on the district card: <strong>Sonprayag to Kedarnath base camp, 19 km, {CARD.sonprayagUpInr}</strong>. Most pilgrims still take the shared jeep to Gaurikund (₹50–100) and book from there at {CARD.gaurikundUpInr}, because the mule stand at Gaurikund has more animals and the jeep is quicker than riding the road section. But if the jeep queue is long, or you are travelling with someone who cannot stand in it, booking the mule from Sonprayag is a legitimate, card-priced option — not a tout arrangement.
          </p>
          <h3 style={h3}>&ldquo;Gaurikund to Kedarnath by helicopter&rdquo;</h3>
          <p style={p}>
            There is no helipad at Gaurikund. Helicopters fly from <strong>Phata, Sersi and Guptkashi</strong>, all of which are below Gaurikund on the road, and land at the Kedarnath helipad above the temple. If you are already at Gaurikund, your options are on foot, pony, palki or kandi — the helicopter decision has to be made before you leave the road head.
          </p>

          <h2 style={h2}>Route facts at a glance</h2>
          <ul style={{ ...p, paddingLeft: 22 }}>
            <li>Gaurikund to Kedarnath: 16 km on foot to the temple, gaining roughly 1,600 m; the mule leg is measured at 14 km to the base camp</li>
            <li>Kedarnath sits at about 3,583 m above sea level</li>
            <li>Sonprayag to Gaurikund: 5 km, a shared jeep for most pilgrims; mules can also be booked from Sonprayag</li>
            <li>Trail is stone-paved most of the way, with a few steep switchback sections in the upper stretch</li>
          </ul>
          <p style={p}>
            The trail runs through a couple of natural rest points, Jungle Chatti and Linchouli being the two most pilgrims stop at, with tea stalls and basic toilets. Pony and palki handlers know these stops well and will pause there without being asked; if yours doesn't and you need a break, just say so. Nobody's paid by the hour, and a reasonable rest doesn't cost you extra.
          </p>

          <h2 style={h2}>How to book — step by step</h2>
          <ol style={{ ...p, paddingLeft: 22 }}>
            <li style={{ marginBottom: 10 }}>Complete Char Dham registration in advance at registrationandtouristcare.uk.gov.in — it's checked at the <strong>Sonprayag checkpost</strong> before you reach Gaurikund.</li>
            <li style={{ marginBottom: 10 }}>Reach Gaurikund early — the prepaid counter opens before sunrise in peak season, and the day's better animals go first.</li>
            <li style={{ marginBottom: 10 }}>For a dandi or kandi, state the passenger&rsquo;s weight honestly at the counter. The fare is set by the weight slab on the board, not negotiated.</li>
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
            <li style={{ marginBottom: 8 }}><strong>Ask to see the licence.</strong> Every mule owner and dandi or kandi porter on this route needs a Zila Panchayat licence. No licence card, no booking.</li>
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
            <li style={{ marginBottom: 8 }}><strong>Budget (walk up, mule down, same day):</strong> {CARD.gaurikundDownInr} mule down on the card + ₹500–800 meals and jeep to Gaurikund + tip. A long single-day trip, best for fit younger travellers.</li>
            <li style={{ marginBottom: 8 }}><strong>Mid-range (mule both ways, one night at Kedarnath):</strong> {MULE_BOTH_WAYS} on the card, {KEDARNATH_TREK.pony.roundTrip} as usually paid, + ₹1,500–3,000 guesthouse + ₹800–1,200 meals for two days + tip. The most common pattern among our own groups.</li>
            <li style={{ marginBottom: 8 }}><strong>Comfort (palki up, helicopter down):</strong> {KEDARNATH_TREK.palki.up} palki one way, by weight, + a heli seat booked separately through IRCTC Heliyatra (fares vary by operator and season, so check the portal directly) + meals. The fastest option for anyone short on time or trail-averse.</li>
            <li style={{ marginBottom: 0 }}><strong>Palki both ways, one night at the top:</strong> {KEDARNATH_TREK.palki.nightHalt} as a single booking, by weight, + guesthouse and meals. For anyone who can neither walk nor ride.</li>
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
            Dandi and kandi fares: {DANDI.issuer}, rate boards for the {DANDI.season} yatra season on the Gaurikund–Kedarnath footpath, photographed by our team at {SHOT.place} on {SHOT.human} (<a href={DANDI.photo} target="_blank" rel="noopener" style={{ color: '#94a3b8' }}>dandi board</a>, <a href={KANDI.photo} target="_blank" rel="noopener" style={{ color: '#94a3b8' }}>kandi board</a>). Mule fares: {CARD.issuer}, {CARD.notice} (<a href={CARD.url} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}>PDF</a>). The mule band pilgrims actually pay and the luggage-pitthu range are what our groups paid on the route; neither is on a printed card. Registration: <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: '#94a3b8' }}>registrationandtouristcare.uk.gov.in</a>. Helicopter bookings: <a href="https://heliyatra.irctc.co.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: '#94a3b8' }}>heliyatra.irctc.co.in</a>.
          </p>

          <BlogAuthor author="dhanesh" variant="bottom" />
        </div>
      </article>
    </>
  );
}
