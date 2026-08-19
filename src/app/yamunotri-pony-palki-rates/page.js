import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Yamunotri Pony, Palki & Kandi Rates ${SITE.season} | Janki Chatti Counter` },
  description: `Yamunotri pony, palki, dandi and kandi rates ${SITE.season} from the Janki Chatti prepaid counter — what each option costs, weight slabs, how to book, and who to call if you are overcharged.`,
  keywords: [`yamunotri pony palki rates ${SITE.season}`, 'yamunotri pony price', 'janki chatti to yamunotri pony rate', 'yamunotri palki charges', 'yamunotri dandi rate', 'yamunotri kandi rate', 'ponies and palkies rates for yamunotri dham', 'yamunotri horse price', 'yamunotri doli charges', 'yamunotri pitthu rate', 'yamunotri prepaid counter'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-pony-palki-rates` },
  openGraph: {
    title: `Yamunotri Pony, Palki & Kandi Rates ${SITE.season} — The Janki Chatti Counter Guide`,
    description: 'What pony, palki, dandi and kandi actually cost at the Janki Chatti prepaid counter, the weight slabs, and how to avoid being overcharged on the trail.',
    url: `${SITE.baseUrl}/yamunotri-pony-palki-rates`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Yamunotri pony, palki and kandi rates ${SITE.season} — Janki Chatti prepaid counter` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Yamunotri Pony, Palki & Kandi Rates ${SITE.season}`,
    description: 'Janki Chatti prepaid counter rates, weight slabs, and how to book without being overcharged.',
    images: [{ url: '/opengraph-image', alt: `Yamunotri pony and palki rates ${SITE.season}` }],
  },
};

const FAQS = [
  {
    q: `What is the pony price from Janki Chatti to Yamunotri in ${SITE.season}?`,
    a: 'Expect somewhere in the region of ₹1,000–1,600 one way and ₹2,000–2,700 round trip for a pony over the 5–6 km from Janki Chatti, with a higher slab once the rider is over about 60 kg. The Uttarkashi district administration fixes and revises these rates each season, and the printed slip you get at the prepaid counter is the only figure that actually binds anyone. Treat every number on this page, including ours, as a planning estimate.',
  },
  {
    q: 'What is the palki or dandi rate for Yamunotri?',
    a: 'A dandi or palki — a seat carried by four men — is the most expensive option because it is four wages rather than one animal. Budget roughly ₹2,500–3,500 one way and ₹5,000–6,500 round trip. It is the right choice for anyone who cannot sit a pony safely: hip or knee problems, poor balance, or the very elderly. Book it at the counter, not from someone who approaches you in the car park.',
  },
  {
    q: 'What is a kandi at Yamunotri and what does it cost?',
    a: 'A kandi, sometimes called pitthu, is a back-mounted basket in which a porter carries a person. It is used mainly for small children and for light adults who cannot walk or ride. Reckon on about ₹1,200–1,800 one way and ₹2,500–3,500 return. There is a separate, much cheaper rate if you only want luggage carried rather than a person.',
  },
  {
    q: 'Can I book a Yamunotri pony or palki online?',
    a: 'No. Pony, palki, dandi and kandi at Yamunotri are booked in person at the government prepaid counter at Janki Chatti, and nowhere else. Any website selling advance online pony or palki bookings for Yamunotri is not operating an official service. What a tour operator can legitimately do is send someone to the counter early on your behalf, which is a different thing.',
  },
  {
    q: 'Why do quoted Yamunotri pony rates vary so much online?',
    a: 'Three reasons. The district administration revises the rate card between seasons, so older pages carry stale figures. Some sources quote one way and others round trip without saying which. And the weight slabs mean two people on the same pony route legitimately pay different amounts. If you see a very low figure, it is usually an old one-way rate being passed off as current.',
  },
  {
    q: 'Is there a weight limit for a Yamunotri pony?',
    a: 'In practice yes, and it works through price slabs rather than a hard refusal. Rates step up above roughly 60 kg and again higher, and handlers can decline a rider they judge too heavy for the animal. Be straightforward about your weight at the counter. It is a safety question for you on a stepped path with a drop on one side, and for the pony.',
  },
  {
    q: 'What if someone charges more than the counter rate?',
    a: 'Only ever book at the prepaid counter, where the rate is printed on a slip. If a handler demands more on the trail, note the ID card number — every registered operator carries one — and report it to the tourist police at Janki Chatti or the Uttarkashi district control room. Do not hand over a child, luggage or money to anyone whose ID you have not looked at.',
  },
  {
    q: 'Should I tip the pony handler or palki carriers?',
    a: 'It is not part of the counter rate and it is not compulsory. If they did a careful job, ₹100–200 for a pony handler or around ₹100 per carrier for a palki at the end is normal and fairly given — four men carrying an adult up 650 vertical metres is hard labour. Pay it at the finish, not upfront, and never under pressure at the start.',
  },
  {
    q: 'What time should I reach the Janki Chatti counter?',
    a: 'Before 7 AM in May and June. Ponies and palkis are finite, the counter works through a queue, and by mid-morning in peak season the wait is long and the good handlers are already out. This is the practical reason Char Dham groups leave Barkot at 4 AM.',
  },
  {
    q: 'Is a pony or palki needed at all for Yamunotri?',
    a: 'For a reasonably fit adult, no. It is 5–6 km on a mostly paved and stepped path and most people walk it in two to three hours. The riding options exist for those who genuinely cannot — and for families who would rather spend their energy at the temple than on the climb. Plenty of groups have half their party walking and half riding.',
  },
];

const PAA = [
  { q: 'How much is the Yamunotri trek by horse?', a: 'Horse and pony are the same option in local usage — ghoda or khachar. Plan on roughly ₹2,000–2,700 for the round trip from Janki Chatti in the current season, more if you are over about 60 kg. The exact figure is printed on the prepaid counter slip and is fixed by the Uttarkashi administration, not by the handler.' },
  { q: 'Which is better at Yamunotri, pony or palki?', a: 'Pony if you can sit on a moving animal for two hours without anxiety and have reasonable balance. Palki if you cannot — it costs roughly double but four carriers and a seat is far safer for someone with a knee replacement, vertigo or a weight problem. Most families with elderly parents end up on palki and are glad they did.' },
  { q: 'Can children ride a pony to Yamunotri?', a: 'Small children are usually carried in a kandi rather than put on a pony, because a child cannot reliably hold on for the whole climb. Older children who can ride confidently are fine on a pony with a handler leading. Never let a child ride unaccompanied, whatever you are told at the counter.' },
  { q: 'Are pony rates the same at Kedarnath and Yamunotri?', a: 'No, and they are not close. Kedarnath is a 16 km trek in Rudraprayag district and its pony rates run several times higher than Yamunotri\'s 5–6 km in Uttarkashi district. Different distance, different administration, different rate card. Our Kedarnath pony, palki and kandi rates page covers that one separately.' },
  { q: 'Do rates go up in peak season at Yamunotri?', a: 'The counter rate is fixed by the district administration and does not rise with the rush. What changes is availability and the wait. Any price that moves with demand is by definition not the official rate — which is the clearest signal you are dealing with someone outside the prepaid system.' },
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
      { '@type': 'ListItem', position: 3, name: 'Pony, Palki & Kandi Rates', item: `${SITE.baseUrl}/yamunotri-pony-palki-rates` },
    ],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: `Yamunotri Pony, Palki & Kandi Rates ${SITE.season}`,
    description: 'Indicative prepaid-counter rates for pony, palki, dandi and kandi on the Janki Chatti to Yamunotri trek, with weight slabs, booking guidance and complaint channels.',
    mainEntityOfPage: `${SITE.baseUrl}/yamunotri-pony-palki-rates`,
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
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 560 };

const RATES = [
  { mode: 'Pony / horse (ghoda)', one: '₹1,000 – 1,600', ret: '₹2,000 – 2,700', who: 'Anyone who can sit a moving animal and hold on for two hours' },
  { mode: 'Kandi / pitthu (basket)', one: '₹1,200 – 1,800', ret: '₹2,500 – 3,500', who: 'Small children, very light adults who cannot walk or ride' },
  { mode: 'Dandi / palki (4 carriers)', one: '₹2,500 – 3,500', ret: '₹5,000 – 6,500', who: 'Elderly, knee or hip problems, poor balance, anyone a pony is unsafe for' },
  { mode: 'Porter — luggage only', one: '₹500 – 900', ret: '₹900 – 1,500', who: 'You walk, your bag does not' },
];

export default function YamunotriPonyPalkiRates() {
  const waText = encodeURIComponent('Namaste! I need a Yamunotri trip with palki arranged at the Janki Chatti counter for elderly travellers. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Janki Chatti prepaid counter · Season {SITE.season}
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Yamunotri Pony, Palki &amp; Kandi Rates {SITE.season}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            What each option costs over the 5–6 km from Janki Chatti · weight slabs · how to book · who to call if you are overcharged
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🐎 Pony', '🪑 Palki / dandi', '🧺 Kandi', '🎫 Counter only, no online booking'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>Pony &amp; Palki Rates</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={p}>
          <strong>All of it is booked at one counter, in person, at Janki Chatti.</strong> There is no online booking for a Yamunotri pony or palki, whatever a search result tells you. You reach the road head, you queue at the government prepaid counter, you get a printed slip with a fixed rate on it, and that slip is what protects you for the next five or six kilometres. Everything else on this page is detail around that one fact.
        </p>

        <h2 style={h2}>What Does a Pony or Palki Cost at Yamunotri?</h2>
        <AnswerBox>
          At the Janki Chatti prepaid counter, expect roughly ₹1,000–1,600 one way for a pony and
          ₹2,000–2,700 round trip; ₹2,500–3,500 one way for a dandi or palki and ₹5,000–6,500 return;
          and ₹1,200–1,800 one way for a kandi. Rates step up by weight slab and are revised each
          season by the Uttarkashi district administration — the counter slip is the binding figure.
        </AnswerBox>

        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Option', 'One way', 'Round trip', 'Who it is for'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {RATES.map((r, i) => (
                <tr key={r.mode} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r.mode}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r.one}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r.ret}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ExpertNote variant="warning">
          These are planning ranges, not a published rate card. The Uttarkashi district administration
          revises Yamunotri prepaid rates between seasons and the figures circulating online are a mess
          of old one-way prices, current return prices and invented ones. Use these to budget. Use the
          printed slip at the counter to pay. If the counter figure differs materially from what you
          read here, the counter is right and we would be glad to be told so we can correct this page.
        </ExpertNote>

        <h2 style={h2}>Why the Numbers You Find Online Disagree</h2>
        <p style={p}>
          Search for Yamunotri pony rates and you will get figures from ₹640 to ₹6,400, which looks like chaos and mostly is not. Three things are going on. <strong>One:</strong> the rate card gets revised, and pages written three seasons ago never get updated — a lot of the very low numbers are genuine, just old. <strong>Two:</strong> some sources quote one way and others round trip, without ever saying which. <strong>Three:</strong> the weight slabs mean two people making the identical journey pay different amounts, both correctly.
        </p>
        <p style={p}>
          So a page confidently stating &ldquo;₹640&rdquo; and a page confidently stating &ldquo;₹2,500&rdquo; can both be describing something real. Neither is describing what you will pay this week at the counter.
        </p>

        <h2 style={h2}>The Four Options, Honestly Compared</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { t: 'Pony (ghoda / khachar)', d: 'The default and the cheapest ride. A handler leads the animal the whole way; you sit and hold the pommel. Fine for most people. Not fine if you have never sat on a horse, have vertigo, or cannot grip for two hours — the path is stepped, it is shared, and there is a drop on one side for parts of it.' },
            { t: 'Dandi / palki', d: 'A seat or palanquin on poles, carried by four men. Twice the price of a pony and worth every rupee for the right passenger. This is what we book for anyone with a knee or hip replacement, balance problems, or serious weight concerns. Four humans making judgements about footing is safer than one animal.' },
            { t: 'Kandi (pitthu)', d: 'A basket carried on a porter\'s back. Mostly for children, occasionally for a very light adult. It looks alarming and is perfectly stable in practice. Do not put a heavy adult in one — the porter will usually refuse anyway, and they are right to.' },
            { t: 'Porter for luggage only', d: 'Cheap, underused, and the single best value on the mountain. Most people do not need a ride; they need to not be carrying eight kilos of bags while climbing 650 metres. Hand the bag over, walk unburdened, and the trek becomes a different experience.' },
          ].map(x => (
            <div key={x.t} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--teal)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{x.t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{x.d}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Booking for elderly parents?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We send someone to the Janki Chatti counter early so the palki is arranged before your group reaches the road head.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>How the Weight Slabs Work</h2>
        <p style={p}>
          Rates are not flat. They step up once the rider passes roughly 60 kg, and again at a higher band, because a heavier rider means a slower animal, more rest stops and a harder day for the handler. Palki rates work the same way, for the more obvious reason that four men are lifting the weight directly.
        </p>
        <p style={p}>
          Be honest at the counter. Understating your weight to save a few hundred rupees puts you on an animal that is struggling on a stepped path with exposure — and handlers can tell within the first hundred metres anyway, at which point you are renegotiating halfway up a mountain instead of at a desk.
        </p>

        <h2 style={h2}>Booking It Without Getting Stung</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            ['Go to the counter, not the car park', 'People will approach you the moment you step out of the vehicle. Some are legitimate handlers touting; some are not. The counter is the only place a fixed printed rate exists.'],
            ['Reach it before 7 AM in May–June', 'Finite animals, finite carriers, a queue that grows all morning. This is why groups leave Barkot at 4.'],
            ['Keep the slip', 'It is your receipt and your proof of the agreed rate. Photograph it as well, because paper gets wet.'],
            ['Note the ID card number', 'Every registered operator carries one. Write the number down before you hand over a child, a bag or money.'],
            ['Agree return arrangements upfront', 'If you have booked round trip, establish where and until when the handler waits at the top. Most disputes are about the return leg, not the price.'],
            ['Pay the tip at the end', 'Never upfront, never under pressure at the start. ₹100–200 for a pony handler, around ₹100 per palki carrier, if they did well.'],
          ].map(([t, d]) => (
            <div key={t} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid #E8920A' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{d}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>If You Are Overcharged</h2>
        <p style={p}>
          Report it. The prepaid system only works because people use it and complain when it is bypassed. On the Yamunotri route, raise it with the <strong>tourist police post at Janki Chatti</strong> or the <strong>Uttarkashi district control room</strong>, quoting the operator&rsquo;s ID number and showing your counter slip. For anything involving injury or an emergency on the trail, the state disaster response helpline is <strong>1070</strong>. Our <Link href="/char-dham-yatra-emergency-contacts">Char Dham emergency contacts page</Link> has the current numbers in one place.
        </p>
        <p style={p}>
          The wider pattern of fake booking sites, inflated trail pricing and impostor operators across the yatra is covered on our <Link href="/char-dham-yatra-scams">Char Dham scams page</Link>. Pony pricing is one of the most common versions of it, because it happens when you are tired, at altitude, and in no position to walk away.
        </p>

        <h2 style={h2}>Yamunotri Compared With Kedarnath</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['', 'Yamunotri', 'Kedarnath'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Trek distance', '5–6 km', '16 km'],
                ['Road head', 'Janki Chatti', 'Gaurikund'],
                ['District', 'Uttarkashi', 'Rudraprayag'],
                ['Pony, round trip', '₹2,000 – 2,700 (indicative)', 'Several times higher'],
                ['Counter location', 'Janki Chatti', 'Sonprayag and Gaurikund'],
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
          They are separate systems run by separate district administrations, so do not carry a Kedarnath figure across in your head. The <Link href="/kedarnath-pony-palki-kandi-rates">Kedarnath pony, palki and kandi rates</Link> are on their own page.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has watched the Janki Chatti counter rate change most seasons since, which is why this page gives ranges and tells you to trust the slip. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Want the palki sorted before you arrive?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Barkot night · 4 AM departure · counter handled for you · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Janki Chatti Guide', '/janki-chatti'], ['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['How to Reach Yamunotri', '/how-to-reach-yamunotri'], ['Kedarnath Pony & Palki Rates', '/kedarnath-pony-palki-kandi-rates'], ['Barkot Guide', '/barkot'], ['Barkot Hotels', '/barkot-hotels'], ['Kharsali Winter Seat', '/kharsali-yamunotri-winter-seat'], ['Char Dham Scams', '/char-dham-yatra-scams'], ['Emergency Contacts', '/char-dham-yatra-emergency-contacts'], ['Senior Citizen Char Dham', '/blog/senior-citizen-char-dham'], ['Char Dham for Divyang', '/blog/char-dham-yatra-for-divyang'], ['Altitude Sickness Guide', '/altitude-sickness-char-dham'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
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
