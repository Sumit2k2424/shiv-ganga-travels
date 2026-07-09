import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import KedarnathFareCalc from '@/components/KedarnathFareCalc';

export const metadata = {
  title: 'Kedarnath Pony, Palki & Kandi Rates 2026 — Gaurikund Prices',
  description: 'Kedarnath pony ₹3,000–4,500 one way, palki ₹8,000–12,000, kandi ₹3,500–5,000 from Gaurikund in 2026. Weight slabs, booking and avoiding overcharging.',
  keywords: ['kedarnath pony palki kandi rates 2026','kedarnath pony charges 2026','kedarnath horse price','gaurikund to kedarnath by horse price','ponies and palkies rates for kedarnath','kedarnath palki charges','kedarnath palki rate','kedarnath kandi pitthu rate','kedarnath palki booking online','kedarnath ghoda price','sonprayag to kedarnath by horse','kedarnath palki price per person','kedarnath dandi rate','kedarnath porter charges'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-pony-palki-kandi-rates` },
  openGraph: {
    title: 'Kedarnath Pony, Palki & Kandi Rates 2026 — The Honest Gaurikund Price Guide',
    description: 'Pony ₹3,000–4,500 one way · Palki ₹8,000–12,000 · Kandi ₹3,500–5,000. Weight slabs, prepaid counters, timings and how not to get overcharged. Written by a Haridwar operator.',
    url: `${SITE.baseUrl}/kedarnath-pony-palki-kandi-rates`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Pony, Palki & Kandi Rates 2026 — Gaurikund Prices | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Pony, Palki & Kandi Rates 2026 — Gaurikund Prices',
    description: 'Pony ₹3,000–4,500 one way · Palki ₹8,000–12,000 · Kandi ₹3,500–5,000. Weight slabs, prepaid counters, timings, scam-proof booking.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Pony & Palki Rates 2026 | Shiv Ganga Travels' }],
  },
};

const UPDATED = 'July 2026';

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the pony/horse price from Gaurikund to Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The prepaid-counter rate for a pony (ghoda) from Gaurikund to Kedarnath in 2026 is about ₹3,000–4,500 one way for the full 16 km, and roughly ₹6,000–9,000 round trip. A weight surcharge of around ₹200 applies for every 15 kg over 75 kg. The Rudraprayag administration revises these each season, so confirm the figure on the slip at the Gaurikund counter.' } },
      { '@type': 'Question', name: 'What are Kedarnath palki (dandi) charges in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'A palki (dandi), carried by four men, costs about ₹8,000–12,000 round trip from Gaurikund to Kedarnath in 2026, depending on weight and whether you return the same day or stay overnight. One-way ranges roughly ₹8,000–9,200 for up to 60 kg, rising with weight slabs. It is the most comfortable ground option for anyone who cannot ride a pony.' } },
      { '@type': 'Question', name: 'What is the kandi or pitthu rate at Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'Kandi (pitthu) — a porter carrying a person in a back-mounted basket — costs about ₹3,500–5,000 one way from Gaurikund to Kedarnath in 2026. It is mainly used for small children, very elderly pilgrims, or anyone who cannot sit a pony. A separate pitthu for luggage only is far cheaper, around ₹1,000–1,500.' } },
      { '@type': 'Question', name: 'Can I book Kedarnath pony or palki online?', acceptedAnswer: { '@type': 'Answer', text: 'No. Pony, palki and kandi cannot be booked online. They are booked only in person at the government prepaid counters in Sonprayag and Gaurikund, where you get a printed slip with a fixed rate. Anyone selling online pony/palki bookings is not official. Reach the counter by 4:00–5:00 AM in peak season, as numbers run out.' } },
      { '@type': 'Question', name: 'How long does the pony or palki take to reach Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'A pony takes about 3–4 hours uphill to Kedarnath and 2.5–3 hours down. A palki takes 5–7 hours up because four men carry it on foot. Kandi is similar to walking pace, 6–7 hours. The pony trail is slightly longer (18–19 km) than the 16 km pedestrian path because of the zig-zag route.' } },
      { '@type': 'Question', name: 'Is there a horse from Sonprayag to Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'No. Ponies start from Gaurikund, not Sonprayag. From Sonprayag you take a 5 km shared jeep (₹50–100) to Gaurikund, then hire the pony there. There is no horse on the Sonprayag–Gaurikund road, and there is no helicopter from Gaurikund — heli flights run from Phata, Sersi and Guptkashi.' } },
      { '@type': 'Question', name: 'What if a pony or palki operator charges more than the official rate?', acceptedAnswer: { '@type': 'Answer', text: 'Only book at the prepaid counter, where the rate is printed and fixed. If an operator on the trail demands more than the counter rate, note their ID-card number and complain to the SDRF helpline 1070, the Rudraprayag District Control Room (0135-2722002), or the tourist police at Sonprayag/Gaurikund. Never hand luggage or a child to an operator without checking their ID card.' } },
    ],
  };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Pony, Palki & Kandi Rates', item: `${SITE.baseUrl}/kedarnath-pony-palki-kandi-rates` },
  ] };
  const svc = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Kedarnath pony, palki and kandi trek-support guidance',
    provider: { '@type': 'TravelAgency', name: SITE.name, telephone: SITE.phone, url: SITE.baseUrl, image: `${SITE.baseUrl}/opengraph-image` },
    areaServed: { '@type': 'Place', name: 'Kedarnath, Gaurikund, Rudraprayag, Uttarakhand' },
    description: 'Practical 2026 rates and booking guidance for pony, palki, kandi and pitthu services on the Gaurikund–Kedarnath trek, plus Kedarnath yatra packages.' };
  const wp = { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${SITE.baseUrl}/kedarnath-pony-palki-kandi-rates#webpage`,
    url: `${SITE.baseUrl}/kedarnath-pony-palki-kandi-rates`, name: 'Kedarnath Pony, Palki & Kandi Rates 2026', inLanguage: 'en-IN',
    dateModified: '2026-06-29', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
  </>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 40 };
const h3 = { fontSize: 'clamp(1rem,2vw,1.2rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 22 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };
const wrap = { maxWidth: 820, margin: '0 auto', padding: '0 20px' };
const tableWrap = { overflowX: 'auto', margin: '14px 0 8px', border: '1px solid var(--border)', borderRadius: 12 };
const table = { width: '100%', borderCollapse: 'collapse', minWidth: 560, fontSize: 14 };
const th = { textAlign: 'left', padding: '11px 14px', background: 'var(--navy)', color: '#fff', fontWeight: 700, fontSize: 12.5, whiteSpace: 'nowrap' };
const td = { padding: '11px 14px', borderTop: '1px solid var(--border)', color: '#334155' };

const PAA = [
  { q: 'Is pony or palki better for senior citizens at Kedarnath?', a: 'Palki for the frailest, pony for those who can sit upright and hold a saddle. A palki keeps the pilgrim seated and level the whole way, carried by four men, so there is no balance or mounting involved — best for very elderly parents or anyone with knee, hip or heart issues. A pony is faster and cheaper but you must hold on for 3–4 hours over steep, exposed sections. From 2026, pilgrims above 55 should carry a medical fitness certificate either way.' },
  { q: 'How much should I tip the pony or palki handlers?', a: 'Tipping is not compulsory and is never part of the counter rate. If the handler did a good, careful job, ₹100–200 for a pony or ₹100 per palki carrier at the end of the journey is normal and appreciated. Pay it once you have safely reached the temple or returned — not upfront. Do not let anyone pressure you into a tip before the ride.' },
  { q: 'Do pony and palki rates change in peak season?', a: 'The prepaid-counter rate is fixed by the Rudraprayag administration and does not change with the rush. What changes is availability: in May–June, ponies and palkis sell out by mid-morning. Operators who approach you on the trail may quote inflated, negotiation-based prices — those are not official. Book at the counter, early, and you pay the printed rate.' },
  { q: 'Can I go up by pony and come down by helicopter?', a: 'You can go up by pony and fly down only if you have a confirmed return heli ticket from the Kedarnath helipad — and those are booked separately on the official IRCTC heliyatra portal, not at the pony counter. Many pilgrims do pony up, walk or pony down. There is no helicopter from Gaurikund itself; heli runs Phata/Sersi/Guptkashi to the Kedarnath helipad.' },
  { q: 'What is the weight limit for a Kedarnath pony?', a: 'Most ponies carry up to about 80–90 kg comfortably. Above that, handlers may refuse or the counter routes you to a palki or a higher weight slab. Palki and kandi rates rise in slabs — roughly ₹200 more for every 15 kg over 75 kg. Be honest about your weight at the counter; it is a safety matter for both you and the animal.' },
  { q: 'Is Kedarnath registration needed to book a pony or palki?', a: 'Yes. Your Kedarnath yatra e-pass (from registrationandtouristcare.uk.gov.in) is checked at Sonprayag before you even reach Gaurikund, and you need it to use the prepaid pony/palki counters. Carry the printed QR slip and a photo ID. Without registration you are turned back at the Sonprayag checkpost.' },
];

function PAASchema() {
  const paa = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: PAA.map(x => ({ '@type': 'Question', name: x.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: x.a } })) };
  return null; // one FAQPage per page — PAA answers stay visible in the accordion, schema lives in the main FAQ node
}

const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export default function KedarnathPonyPalkiKandiRates() {
  return (
    <>
      <Schema />
      <PAASchema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>Gaurikund → Kedarnath · 16 km · Updated {UPDATED}</span>
          <h1 className="display-title speakable-answer" style={{ color: '#fff', fontSize: 'clamp(1.7rem,4.5vw,2.8rem)', marginBottom: 14 }}>Kedarnath Pony, Palki &amp; Kandi Rates 2026</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7 }}>The real, prepaid-counter prices for the Gaurikund trek — pony, palki, kandi and pitthu — with how to book and how not to get overcharged.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <a href={wa('Namaste! I want help planning Kedarnath — pony/palki and a yatra package.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Get a Free Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <article style={{ background: 'var(--bg)', padding: '32px 0 56px' }}>
        <div style={wrap}>

          <AnswerBox>
            In 2026 a Kedarnath pony costs about ₹3,000–4,500 one way from Gaurikund (₹6,000–9,000 round trip), a palki ₹8,000–12,000 round trip, and a kandi/pitthu ₹3,500–5,000. All three are booked only at the government prepaid counters in Sonprayag and Gaurikund — never online — and rates rise by roughly ₹200 per 15 kg over 75 kg. There is no horse from Sonprayag and no helicopter from Gaurikund.
          </AnswerBox>

          <p style={p}>
            I run yatra groups on this route every season, and the single thing that trips first-timers up is money at Gaurikund. People arrive expecting to pay one figure, hear another on the trail, and end up haggling at 5 AM with a 16 km climb ahead of them. So here are the numbers as they actually stand for 2026, where they come from, and the few rules that keep you from being overcharged.
          </p>

          <h2 style={h2}>The 2026 rate table — pony, palki, kandi</h2>
          <p style={p}>
            These are the prepaid-counter ranges from <strong>Gaurikund to Kedarnath (16 km)</strong>. The Rudraprayag district administration fixes them and revises them each season, so treat them as planning ranges and read the printed rate on your slip as final.
          </p>
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr><th style={th}>Service</th><th style={th}>One way</th><th style={th}>Round trip</th><th style={th}>Time (up)</th><th style={th}>Best for</th></tr>
              </thead>
              <tbody>
                <tr><td style={td}><strong>Pony / Horse (Ghoda)</strong></td><td style={td}>₹3,000–4,500</td><td style={td}>₹6,000–9,000</td><td style={td}>3–4 hrs</td><td style={td}>Most pilgrims who can sit a saddle</td></tr>
                <tr><td style={td}><strong>Palki / Dandi</strong> (4 carriers)</td><td style={td}>₹8,000–9,200</td><td style={td}>₹8,000–12,000</td><td style={td}>5–7 hrs</td><td style={td}>Elderly, unwell, can't ride</td></tr>
                <tr><td style={td}><strong>Kandi / Pitthu</strong> (person)</td><td style={td}>₹3,500–5,000</td><td style={td}>₹7,000–9,000</td><td style={td}>6–7 hrs</td><td style={td}>Small children, very frail</td></tr>
                <tr><td style={td}><strong>Pitthu</strong> (luggage only)</td><td style={td}>₹1,000–1,500</td><td style={td}>—</td><td style={td}>—</td><td style={td}>Carrying bags, not people</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>
            Weight surcharge: about <strong>₹200 for every 15 kg over 75 kg</strong> on palki and kandi. Round-trip palki is cheaper per leg if you stay overnight at Kedarnath versus same-day return, because the carriers are committed for longer. Children under 5 usually ride free on a parent's pony where the handler allows it.
          </p>

          <h2 style={h2}>Work out your own fare</h2>
          <p style={p}>
            Weight changes the palki and kandi price, so a flat number is misleading. Set your service, weight and trip below for a realistic counter estimate. It's a planning figure, not a quote — but it tells you roughly what to expect before you stand at the window.
          </p>
          <KedarnathFareCalc />

          <h2 style={h2}>Pony vs palki vs kandi vs helicopter — which to pick</h2>
          <p style={p}>
            Pick on three things: can you sit upright, what's your budget, and how much time you have. Here's the honest version.
          </p>
          <h3 style={h3}>Pony (ghoda) — the default</h3>
          <p style={p}>
            Cheapest seated option and the fastest on the ground at 3–4 hours up. You ride a trained mountain pony led by a handler. The catch: you have to hold the saddle for hours on steep, exposed edges, and it's a genuine workout for the core and nerves. Fine for most reasonably fit adults; not ideal if you can't grip or balance.
          </p>
          <h3 style={h3}>Palki (dandi) — most comfortable</h3>
          <p style={p}>
            Four men carry you seated and level the whole way. No mounting, no balance, no fear of edges — which is why it's the right call for elderly parents and anyone with heart, knee or hip trouble. It's the priciest ground option and the slowest, but for the people who need it, nothing else comes close.
          </p>
          <h3 style={h3}>Kandi / pitthu — for the smallest</h3>
          <p style={p}>
            A single porter carries the person in a back-mounted basket. Used mainly for small children and very frail, lightweight pilgrims. It's slower and only suits lighter passengers, but it's reliable and personal.
          </p>
          <h3 style={h3}>Helicopter — skip the climb entirely</h3>
          <p style={p}>
            If trekking and ponies are both off the table, fly. Helicopters run from <Link href="/blog/kedarnath-helicopter-booking" style={{ color: 'var(--teal)', fontWeight: 600 }}>Phata, Sersi and Guptkashi</Link> to the Kedarnath helipad, roughly ₹7,500–9,500 round trip per person, booked only on the official IRCTC heliyatra portal. Remember: there is <strong>no helicopter from Gaurikund</strong>. See our <Link href="/blog/kedarnath-pony-vs-helicopter" style={{ color: 'var(--teal)', fontWeight: 600 }}>pony vs helicopter comparison</Link> if you're torn.
          </p>

          <h2 style={h2}>How to book — step by step</h2>
          <ol style={{ ...p, paddingLeft: 22 }}>
            <li style={{ marginBottom: 10 }}>Clear the <strong>Sonprayag checkpost</strong> with your registered yatra e-pass (QR slip + photo ID). No registration, no entry.</li>
            <li style={{ marginBottom: 10 }}>Take the <strong>shared jeep Sonprayag → Gaurikund</strong> (5 km, ₹50–100). This is the only stretch; there is no pony here.</li>
            <li style={{ marginBottom: 10 }}>At Gaurikund, go to the <strong>government prepaid counter</strong>. In May–June, be there by <strong>4:00–5:00 AM</strong> — numbers run out.</li>
            <li style={{ marginBottom: 10 }}>State your service and weight honestly. Pay at the window and take the <strong>printed slip</strong> with the fixed rate and the operator's number.</li>
            <li style={{ marginBottom: 0 }}>Match the <strong>operator's ID card</strong> to your slip before you hand over a child or luggage. Tip, if any, only at the end.</li>
          </ol>

          <div style={{ background: '#FEF3F2', border: '1px solid #FECACA', borderRadius: 12, padding: '18px 18px', margin: '26px 0' }}>
            <div style={{ fontWeight: 800, color: '#B42318', fontSize: 15.5, marginBottom: 8 }}>⚠️ Don't get overcharged — and who to call</div>
            <p style={{ ...p, marginBottom: 10 }}>
              The counter rate is printed and fixed. The overcharging happens when pilgrims skip the counter and deal with operators who approach them on the trail, quoting "peak rush" or "bad weather" prices. Don't. If a fixed-rate dispute comes up, you have real recourse:
            </p>
            <ul style={{ ...p, marginBottom: 0, paddingLeft: 20 }}>
              <li>Note the operator's <strong>ID-card number</strong> (every official operator wears one).</li>
              <li><strong>SDRF helpline: 1070</strong> · <strong>Rudraprayag District Control Room: 0135-2722002</strong> · <strong>Police / medical: 112</strong>.</li>
              <li>Tourist police booths sit at <strong>Sonprayag and Gaurikund</strong> — report on the spot.</li>
              <li>Never pay the full fare upfront on the trail, and never book "online pony/palki" — it doesn't exist officially.</li>
            </ul>
          </div>

          <h2 style={h2}>Three things competitors get wrong</h2>
          <p style={p}>
            A lot of pages copy old rate lists. Here's what's actually true on the ground in 2026:
          </p>
          <ul style={{ ...p, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>"Sonprayag to Kedarnath by horse"</strong> — there isn't one. Ponies start at Gaurikund. Sonprayag to Gaurikund is a jeep ride.</li>
            <li style={{ marginBottom: 8 }}><strong>"Gaurikund to Kedarnath by helicopter"</strong> — there isn't one either. Heli flies from Phata, Sersi and Guptkashi only.</li>
            <li style={{ marginBottom: 0 }}><strong>"Book pony online"</strong> — not possible. The only legitimate booking is in person at the prepaid counter. Online "pony booking" offers are best ignored.</li>
          </ul>

          <h2 style={h2}>Senior citizens &amp; medical fitness (2026)</h2>
          <p style={p}>
            From the 2026 season, pilgrims above 55 are advised to carry a <strong>medical fitness certificate</strong> — the altitude gain to 3,583 m is no joke, and health screening at the route has tightened after recent seasons. If you're travelling with elderly parents, plan the palki, build in a rest day at Guptkashi or Sonprayag to acclimatise, and don't attempt a same-day round trip. Our <Link href="/kedarnath-yatra" style={{ color: 'var(--teal)', fontWeight: 600 }}>Kedarnath yatra packages</Link> arrange the registration, hotel and counter logistics so your family isn't doing this cold at 4 AM.
          </p>

          <h2 style={h2}>Frequently asked questions</h2>
          <PeopleAlsoAsk items={PAA} />

          <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3E75)', borderRadius: 14, padding: '26px 22px', margin: '34px 0 10px', textAlign: 'center' }}>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Want this handled for you?</div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14.5, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 16px' }}>
              We've run the Gaurikund route since 2010. Tell us who's travelling and we'll plan the trek, pony/palki and registration around them — ₹0 to enquire, no advance to talk.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={wa('Namaste! Please help plan Kedarnath with pony/palki for my group.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp Us</a>
              <Link href="/kedarnath-yatra" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>View Kedarnath Packages →</Link>
            </div>
          </div>

          <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 18 }}>
            Related: <Link href="/kedarnath-vip-darshan" style={{ color: 'var(--teal)' }}>VIP darshan &amp; puja rates</Link> · <Link href="/blog/kedarnath-trek-guide" style={{ color: 'var(--teal)' }}>Kedarnath trek guide</Link> · <Link href="/blog/kedarnath-registration-2026" style={{ color: 'var(--teal)' }}>Kedarnath registration 2026</Link> · <Link href="/blog/how-to-reach-kedarnath" style={{ color: 'var(--teal)' }}>How to reach Kedarnath</Link> · <Link href="/kedarnath-weather" style={{ color: 'var(--teal)' }}>Kedarnath weather</Link>
          </p>

          <BlogAuthor author="sumit" variant="bottom" />
        </div>
      </article>
    </>
  );
}
