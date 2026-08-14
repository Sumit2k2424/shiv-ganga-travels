import GuideArticle, { H2, P, UL, Callout } from '@/components/GuideArticle';
import { SITE } from '@/data/packages';

export const metadata = {
  title: { absolute: `Char Dham Yatra by Bus ${SITE.season} — Fares & Honest Advice` },
  description: `Char Dham Yatra by bus ${SITE.season} — GMOU and GMVN fares from Haridwar, where big buses genuinely cannot go, and when the cheapest option stops being the best one.`,
  keywords: ['char dham yatra by bus', `char dham bus package ${SITE.season}`, 'gmou bus char dham', 'gmvn char dham yatra bus', 'char dham yatra bus fare haridwar', 'cheapest char dham yatra'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-by-bus` },
  openGraph: {
    title: `Char Dham Yatra by Bus ${SITE.season} — Fares, Routes & Reality`,
    description: 'What a bus yatra really costs, which stretches buses cannot reach, and the transfers nobody mentions before you board.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-by-bus`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra by Bus ${SITE.season}` }],
  },
};

export default function Page() {
  const faqs = [
    { q: 'How much does Char Dham Yatra by bus cost?',
      a: 'The bare transport on the Common Rotation Service buses runs roughly ₹3,200–3,500 for the circuit, which is the cheapest way to physically cover the route. A GMVN packaged bus tour bundling transport, lodging and meals typically lands between ₹15,000 and ₹25,000 per person. Hiring a whole bus is a different market again — a 27-seat GMVN bus from Haridwar is in the region of ₹15,000 for the vehicle, and private operators charge considerably more.',
      plain: 'CRS bus tickets run about ₹3,200–3,500 for transport only. GMVN packaged bus tours with lodging and meals run about ₹15,000–25,000 per person.' },
    { q: 'What is the GMOU bus and how is it different from GMVN?',
      a: 'GMOU is the Garhwal Motor Owners Union, the transporters cooperative that has run the hill routes for decades — these are the workhorse buses locals use. GMVN is Garhwal Mandal Vikas Nigam, the state tourism corporation, which sells organised packaged tours including its own rest houses. GMOU moves you; GMVN sells you a trip.',
      plain: 'GMOU is the transporters cooperative running regular hill route buses. GMVN is the state tourism corporation selling packaged tours with its own rest houses.' },
    { q: 'Can a bus go all the way to all four dhams?',
      a: 'No, and this is the part that catches people out. Large buses are restricted on the narrow upper stretches. For Kedarnath you get no further than Sonprayag and then take a shared jeep to Gaurikund before a 16 km trek. For Yamunotri the road to Janki Chatti is tight and big buses often stop short. Gangotri and Badrinath are the two a bus can genuinely serve to the end.',
      plain: 'No. Big buses stop at Sonprayag for Kedarnath and often short of Janki Chatti for Yamunotri. Only Gangotri and Badrinath are reachable by bus to the end.' },
    { q: 'Is bus travel safe on the Char Dham route?',
      a: 'The regular services are driven by people who know these roads intimately and have done so for years, which counts for a great deal. The genuine risks are the same for any vehicle: landslides in monsoon, single-lane sections with drops, and long days. What a bus adds is less flexibility — you cannot stop when someone feels unwell or wait out weather on your own schedule.',
      plain: 'Regular services use experienced hill drivers. The main trade-off is flexibility: you cannot stop for illness or wait out weather on your own schedule.' },
    { q: 'Who should take the bus, and who should not?',
      a: 'Take the bus if you are fit, travelling light, comfortable with basic lodging and long days, and the budget is the deciding factor. Avoid it if you are travelling with elderly parents, small children, anyone with a medical condition, or a group that needs to keep its own pace. On this route the bus saves real money and costs real comfort.',
      plain: 'Good for fit, budget-focused travellers. Poor for elderly parents, small children, anyone with a medical condition, or groups needing their own pace.' },
    { q: 'Do buses need the Green Card for Char Dham?',
      a: 'Yes. Every commercial vehicle on the yatra routes needs the Green Card or Trip Card, buses included, and non-Uttarakhand vehicles especially. It certifies the vehicle and driver for hill routes. Booking a seat on a scheduled service means this is the operator problem, not yours; hiring a bus from outside the state means checking it before you set off.',
      plain: 'Yes — all commercial vehicles including buses need the Green Card/Trip Card. On scheduled services it is the operator responsibility; on hired buses, verify it.' },
    { q: 'Where do bus yatras start from?',
      a: 'Haridwar and Rishikesh are the two main departure points, with Rishikesh bus stand handling most of the hill services. Both are where the circuit naturally begins, which is why almost every yatra itinerary regardless of vehicle starts there.',
      plain: 'Mainly Haridwar and Rishikesh, with Rishikesh bus stand handling most hill services.' },
  ];

  return (
    <GuideArticle
      slug="char-dham-yatra-by-bus"
      badge={`Transport Guide · ${SITE.season}`}
      title="Char Dham Yatra by Bus — Fares and Honest Advice"
      subtitle="The cheapest way to do the circuit, what it genuinely costs, and the stretches where a bus simply cannot take you the last mile."
      pills={['🚌 From ~₹3,200 transport', '🏔️ Transfers required', '💰 Cheapest option']}
      facts={[['CRS bus ticket', '₹3,200–3,500'], ['GMVN packaged tour', '₹15,000–25,000 pp'], ['Main departure', 'Haridwar / Rishikesh'], ['Kedarnath limit', 'Sonprayag'], ['Full bus access', 'Gangotri, Badrinath'], ['Green Card', 'Mandatory']]}
      readTime="7 min read"
      takeaways={[
        <>Transport-only bus tickets run about <strong>₹3,200–3,500</strong> for the circuit — genuinely the cheapest way to cover it.</>,
        <>A bus <strong>cannot reach Kedarnath or Yamunotri</strong> fully — you transfer to shared jeeps for the final stretches.</>,
        <><strong>GMOU</strong> moves you between towns; <strong>GMVN</strong> sells organised tours with lodging included.</>,
        <>The saving is real and so is the cost — <strong>flexibility</strong> is what you give up, which matters most with elderly pilgrims.</>,
      ]}
      ctaIntent="char-dham"
      faqs={faqs}
      related={[['Char Dham by train', '/blog/char-dham-yatra-by-train'], ['Cost breakdown', '/blog/char-dham-yatra-cost'], ['Green Card guide', '/blog/green-card-char-dham-yatra-2026'], ['Route map', '/char-dham-yatra-route-map'], ['Char Dham packages', '/char-dham-yatra'], ['Char Dham 2027', '/char-dham-yatra-2027']]}
    >
      <P>Doing Char Dham by bus is the cheapest honest way to complete the circuit, and for a certain kind of pilgrim it is genuinely the right call. It is also the option most misrepresented online, because the pages selling it rarely mention the transfers. So here is the whole picture, including the parts that make people change their minds.</P>

      <H2>What it actually costs</H2>
      <P>There are three different things people mean by &ldquo;bus yatra&rdquo;, and they differ by a factor of five.</P>
      <UL items={[
        'Scheduled service buses — the Common Rotation Service that locals and pilgrims share. Roughly ₹3,200–3,500 for the circuit. Transport only: you sort your own beds and food.',
        'GMVN packaged bus tours — the state tourism corporation bundles seats, its own rest houses and meals. Typically ₹15,000–25,000 per person depending on duration and category.',
        'Hiring a whole bus — for a group travelling together. A 27-seat GMVN bus from Haridwar sits around ₹15,000 for the vehicle; private operators with smaller coaches charge substantially more per seat.',
      ]} />
      <P>If you are a group of twenty or more, hiring works out well. If you are two people, the scheduled service is unbeatable on price and the packaged tour is the sane middle.</P>

      <H2>Where a bus cannot take you</H2>
      <P>This is the part worth reading twice. The Char Dham roads were not built for large vehicles, and the upper sections have width restrictions that no amount of booking gets you around.</P>
      <UL items={[
        'Kedarnath — buses stop at Sonprayag. From there it is a shared jeep to Gaurikund, then the 16 km trek. No vehicle of any size goes further.',
        'Yamunotri — the road to Janki Chatti is narrow and twisting. Large buses frequently stop short and transfer passengers to smaller vehicles for the last stretch, before the 6 km trek.',
        'Gangotri — reachable. The road runs almost to the temple and buses manage it.',
        'Badrinath — reachable. The temple sits beside the road, which makes this the easiest dham by any vehicle.',
      ]} />
      <Callout>The short version: a bus fully serves two of the four dhams. For the other two you are transferring to jeeps regardless of what you paid. Budget for those transfers in both money and time — they are not included in a bus ticket.</Callout>

      <H2>GMOU and GMVN — knowing which is which</H2>
      <P><strong>GMOU</strong>, the Garhwal Motor Owners Union, is the transporters cooperative that has run these hill routes for generations. Their drivers know every hairpin between Rishikesh and Badrinath, often literally by feel in bad light. These are working buses, not tourist coaches, and they are the backbone of movement in the region.</P>
      <P><strong>GMVN</strong> is Garhwal Mandal Vikas Nigam, the Uttarakhand state tourism corporation. They sell organised yatra tours including stays at their own rest houses across the circuit. If you want the cheap option without doing the logistics yourself, this is usually the answer.</P>

      <H2>The trade-off nobody puts in the brochure</H2>
      <P>Money saved on a bus is real. So is what it costs you, and it is not comfort — it is control.</P>
      <P>On a bus you move when the bus moves. If your mother is struggling with the altitude at Guptkashi and needs an extra hour, the bus does not wait. If the weather turns and you would rather sit tight for half a day, that decision is not yours. If someone needs a doctor, you are dependent on where the schedule puts you.</P>
      <P>Over fifteen seasons, the pilgrims I have seen regret the bus are almost always the ones travelling with elderly parents. The ones who love it are fit, travelling light, and treat the discomfort as part of the yatra. Both groups are right about their own trip.</P>

      <H2>If you take the bus, do these things</H2>
      <UL items={[
        'Book the scheduled services early in the morning — hill buses fill and depart at dawn, and a missed bus can cost you a day.',
        'Carry your own water, dry food and any medication in a daypack, not in the luggage hold.',
        'Keep your yatra registration on your phone AND on paper. Signal on these routes is unreliable and checkposts will ask.',
        'Have a plan for the Sonprayag and Janki Chatti transfers, including the cost, before you are standing there.',
        'Travel light. You will be moving your own bags more often than you expect.',
      ]} />

      <H2>When to spend a bit more</H2>
      <P>I run a vehicle operation, so treat this with appropriate scepticism — but the honest line is that the gap between a bus yatra and a shared-vehicle package is smaller than most people assume once you add the transfers, the meals and the beds a bus ticket does not cover. If the difference works out at a few thousand rupees across ten days, and you are travelling with anyone who is not comfortably fit, that is a good few thousand rupees to spend.</P>
      <P>If it does not, the bus is a perfectly respectable way to reach all four dhams, and it has carried pilgrims up these valleys for far longer than any tour operator has existed.</P>
    </GuideArticle>
  );
}
