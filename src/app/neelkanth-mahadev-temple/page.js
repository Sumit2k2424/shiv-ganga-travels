import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

export const metadata = {
  title: { absolute: 'Neelkanth Mahadev Temple — 32 km from Rishikesh' },
  description: 'Where Shiva drank the poison from the churning of the ocean. 32 km from Rishikesh, 1.5–2 hours on a hill road. Route, trek and Shravan crowds.',
  keywords: ['neelkanth mahadev temple','neelkanth mahadev rishikesh','neelkanth temple distance from rishikesh','neelkanth mahadev timings','rishikesh to neelkanth','neelkanth mahadev trek','neelkanth temple road route'],
  alternates: { canonical: `${SITE.baseUrl}/neelkanth-mahadev-temple` },
  openGraph: {
    title: 'Neelkanth Mahadev Temple — 32 km from Rishikesh',
    description: 'Where Shiva drank the halahal. Route, timings, the 12 km trek and what Shravan does to the place.',
    url: `${SITE.baseUrl}/neelkanth-mahadev-temple`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Neelkanth Mahadev Temple near Rishikesh' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neelkanth Mahadev Temple — 32 km from Rishikesh',
    description: 'Where Shiva drank the halahal. Route, timings and Shravan crowds.',
    images: [{ url: '/opengraph-image', alt: 'Neelkanth Mahadev Temple' }],
  },
};

const FAQS = [
  { q:'How far is Neelkanth Mahadev from Rishikesh?',
    a:'About 32 km by road, taking 1.5 to 2 hours. The distance is short but the road climbs steadily through forest with continuous bends, so the time has little to do with the kilometres. From Haridwar it is roughly 55 km and around 2.5 hours. There is also a 12 km trekking route from Ram Jhula for those who want the walk.' },
  { q:'What are the Neelkanth Mahadev temple timings?',
    a:'Roughly 5 AM to 8 PM with a break around the middle of the day. Entry is free. Morning is considerably better than afternoon — the road is clearer, the temple is quieter, and you avoid both the heat and the day-tripper rush that builds from Rishikesh after breakfast.' },
  { q:'What is the story behind Neelkanth Mahadev?',
    a:'This is where Shiva is said to have drunk the halahal, the poison that emerged during the churning of the ocean, to save creation from it. Parvati held his throat to stop the poison descending, and it turned his throat blue — neel kanth, the blue throat. The temple marks that spot. It is one of the more consequential episodes in the same story that gives Haridwar its amrit and its Kumbh.' },
  { q:'Can I trek to Neelkanth instead of driving?',
    a:'Yes. The main trekking route is about 12 km from Ram Jhula through forest, taking four to five hours up, and there is a shorter route of roughly 10 km from Garud Chatti. Both are genuine forest walks rather than paved pilgrim paths, and you should not do either alone or late in the day — this is Rajaji country and wildlife encounters are not theoretical. Most visitors drive.' },
  { q:'What happens during Shravan?',
    a:'Neelkanth becomes one of the busiest Shiva shrines in North India. Through the month of Shravan, usually late July into August, lakhs of kanwariyas walk here, many barefoot, to offer Ganga water. The road is heavily congested, the queue is long, and the atmosphere is extraordinary. If you want the temple quiet, avoid Shravan entirely. If you want to see something remarkable, that is exactly when to come — but come with patience.' },
  { q:'Is the road suitable for a regular car?',
    a:'Yes. It is a sealed hill road, narrow in places with tight bends and steep drops, but it is driven daily by ordinary taxis and there is nothing technical about it. Anyone prone to motion sickness should sit in front and take something beforehand. We would not recommend driving it after dark if you do not know it.' },
  { q:'What else can I combine with Neelkanth in one day?',
    a:'It pairs naturally with a Rishikesh day. Ram Jhula, Lakshman Jhula and Triveni Ghat in the morning, Neelkanth in the afternoon, or the reverse if you want the temple early. That combination pushes you past the 80 km slab on a day hire, so expect the extra-kilometre charge — we tell you before you leave rather than at drop-off.' },
  { q:'Is there anywhere to eat or stay at Neelkanth?',
    a:'Basic dhabas and tea stalls near the temple serving vegetarian food, and a few simple guesthouses and an ashram. Almost nobody stays overnight; it is a half-day trip from Rishikesh. Carry water, particularly if you are trekking.' },
];

export default function NeelkanthMahadev() {
  const blocks = buildSchema({
    slug:'neelkanth-mahadev-temple',
    name:'Neelkanth Mahadev Temple',
    description:'Shiva temple in the Pauri Garhwal hills about 32 km from Rishikesh, marking the spot where Shiva is said to have drunk the halahal poison from the churning of the ocean.',
    geo:[30.1633, 78.4283],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Rishikesh','/rishikesh-tour-packages'],['Neelkanth Mahadev Temple','/neelkanth-mahadev-temple']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Pauri Garhwal · 32 km from Rishikesh" title="Neelkanth Mahadev Temple">
        Where Shiva drank the poison and his throat turned blue.{' '}
        <strong style={{ color:'#FFD166' }}>1.5–2 hours of hill road</strong> from Rishikesh, free entry,
        open roughly 5 AM to 8 PM.
      </Hero>

      <Crumbs trail={[['Rishikesh','/rishikesh-tour-packages'],['Neelkanth Mahadev', null]]}/>

      <Article>
        <Updated/>

        <P>
          Neelkanth Mahadev sits at about 1,330 m in the hills above Rishikesh, 32 km by road and an hour
          and a half to two hours of continuous bends. It marks the place where Shiva is said to have
          swallowed the halahal — the poison thrown up by the churning of the ocean — and held it in his
          throat, which turned blue. It is one of the most visited Shiva shrines in Uttarakhand and, for
          one month a year, one of the most crowded places in North India.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎟️ Entry', 'Free'],
          ['🕐 Timings', 'About 5 AM – 8 PM, midday break'],
          ['📍 From Rishikesh', '32 km, 1.5–2 hrs'],
          ['📍 From Haridwar', 'About 55 km, 2.5 hrs'],
          ['⛰️ Altitude', 'About 1,330 m'],
          ['🥾 Trek option', '12 km from Ram Jhula, 4–5 hrs'],
          ['⏱️ Allow', 'Half a day from Rishikesh'],
          ['🚗 Road', 'Sealed, narrow, many bends'],
        ]}/>

        <H2>The Story</H2>
        <P>
          During the churning of the ocean, before the amrit emerged, the sea threw up halahal — a poison
          potent enough to destroy creation. Shiva drank it. Parvati held his throat so it would not
          descend into him, and it stayed there, staining the throat blue. Neel kanth: blue throat.
        </P>
        <P>
          It is worth noticing how closely this ties to Haridwar. The same churning produced the amrit
          whose falling drop makes Brahmakund sacred and brings the{' '}
          <Link href="/kumbh-mela-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>Kumbh Mela</Link>{' '}
          to Har Ki Pauri. Two shrines fifty kilometres apart, marking two moments of the same episode —
          the poison and the nectar.
        </P>

        <H2>Driving or Trekking</H2>
        <Table
          head={['','By road','Trek from Ram Jhula']}
          rows={[
            ['Distance', '32 km from Rishikesh', 'About 12 km'],
            ['Time', '1.5–2 hrs', '4–5 hrs up'],
            ['Difficulty', 'None, but bendy', 'Moderate forest walk'],
            ['Best for', 'Almost everyone', 'Fit walkers with a full day'],
            ['Watch for', 'Motion sickness on the climb', 'Wildlife — this is Rajaji country'],
          ]}
        />
        <Note tone="warn" title="If you do trek, do it properly">
          The Ram Jhula and Garud Chatti routes run through genuine forest, not a paved pilgrim path.
          Do not walk alone, do not start late in the day, and do not plan to come down in the dark.
          Elephant and leopard encounters on these trails are uncommon but entirely real, and every
          season somebody underestimates that.
        </Note>

        <H2>Shravan Changes Everything</H2>
        <P>
          Through Shravan — usually late July into August — Neelkanth becomes a destination for lakhs of
          kanwariyas, many walking barefoot from Haridwar carrying Ganga water to pour over the lingam.
          The road congests badly, the darshan queue runs for hours, and the whole hillside is saffron.
        </P>
        <P>
          Whether that is a reason to come or a reason to stay away depends entirely on what you want. It
          is one of the great sights of North Indian devotion. It is also an extremely hard day if you
          arrived expecting a quiet hill temple. Note too that the same month disrupts the{' '}
          <Link href="/haridwar-to-delhi-taxi" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar–Delhi highway</Link>,
          so Shravan affects your whole trip, not just this temple.
        </P>

        <H2>Fitting It Into a Rishikesh Day</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Best version:</strong> leave Rishikesh by 7 AM,
          Neelkanth by 9, back down by noon, and spend the afternoon at{' '}
          <Link href="/triveni-ghat-rishikesh" style={{ color:'var(--teal)', fontWeight:600 }}>Triveni Ghat</Link>{' '}
          and the footbridges, finishing with the evening aarti.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>From Haridwar:</strong> it is a long day but doable
          — see our{' '}
          <Link href="/haridwar-to-rishikesh-taxi" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar–Rishikesh day hire</Link>,
          and expect to cross the 80 km slab.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Avoid:</strong> arriving mid-afternoon in summer.
          Hot, crowded with day-trippers, and the light for the drive back is worse.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Rishikesh','https://uttarakhandtourism.gov.in/destination/rishikesh'],
          ['Rajaji Tiger Reserve','https://rajajitigerreserve.uk.gov.in/'],
        ]}/>

        <CTA
          title="Neelkanth in a day from Rishikesh or Haridwar"
          blurb="We run this road regularly and will tell you honestly whether to attempt it in Shravan. Car waits at the temple while you take darshan."
          waMessage="Namaste! I want to visit Neelkanth Mahadev temple. Please share the cab options and timing."
        />

        <Related links={[
          ['Triveni Ghat, Rishikesh','/triveni-ghat-rishikesh'],
          ['Haridwar to Rishikesh Taxi','/haridwar-to-rishikesh-taxi'],
          ['Rishikesh Tour Packages','/rishikesh-tour-packages'],
          ['Rishikesh Adventure Guide','/blog/rishikesh-adventure-guide'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Kumbh Mela Haridwar','/kumbh-mela-haridwar'],
        ]}/>
      </Article>
    </>
  );
}
