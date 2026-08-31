import Link from 'next/link';
import { SITE } from '@/data/packages';
import { PLACES } from '@/data/haridwarPlaces';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

const M = PLACES['maya-devi'];

export const metadata = {
  title: { absolute: 'Maya Devi Temple Haridwar — Shakti Peeth, Timings' },
  description: 'Haridwar was called Mayapuri after this goddess. A Shakti Peeth where Sati\'s heart and navel fell, 1 km from Har Ki Pauri, free, open 6 AM–8 PM.',
  keywords: ['maya devi temple','maya devi temple haridwar','maya devi shakti peeth','mayapuri haridwar','maya devi temple timing','shakti peeth haridwar','maya devi history'],
  alternates: { canonical: `${SITE.baseUrl}/maya-devi-temple` },
  openGraph: {
    title: 'Maya Devi Temple Haridwar — Shakti Peeth, Timings',
    description: 'The goddess Haridwar is named after. A Shakti Peeth and the oldest surviving structure in town, 1 km from Har Ki Pauri.',
    url: `${SITE.baseUrl}/maya-devi-temple`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Maya Devi Temple, Haridwar — Shakti Peeth' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maya Devi Temple Haridwar — Shakti Peeth, Timings',
    description: 'The goddess Haridwar is named after, and the oldest surviving structure in town.',
    images: [{ url: '/opengraph-image', alt: 'Maya Devi Temple Haridwar | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What are the Maya Devi temple timings?',
    a:'Roughly 6 AM to 8 PM daily, free to enter, with no ticket and usually no queue. It sits about 1 km from Har Ki Pauri on flat ground, so it takes ten to fifteen minutes to walk there. Navratri is the exception — the temple fills, and the atmosphere is worth the crowd.' },
  { q:'Why is Maya Devi a Shakti Peeth?',
    a:'When Shiva carried Sati\'s body across the world after the yajna at Kankhal, Vishnu cut it apart to end his wandering. The places where the pieces fell became the Shakti Peethas. At Haridwar, tradition holds that her heart and navel fell here. That makes this one of the network of goddess shrines running from Kashmir to Assam, and it connects directly to the story told 4 km away at Daksh Mahadev.' },
  { q:'Is Haridwar really named after this goddess?',
    a:'Haridwar\'s older name is Mayapuri — the city of Maya — and it comes from this goddess, who is the adhisthatri or presiding deity of the place. Most visitors walk past the temple without knowing the town is named for the deity inside it. It is the single best piece of context for understanding Haridwar as a religious site rather than a bathing ghat with hotels around it.' },
  { q:'How old is the Maya Devi temple?',
    a:'The surviving structure is generally dated to around the 11th century, which makes it the oldest standing building most visitors to Haridwar will pass. The site itself is older. For comparison, the present Daksh Mahadev building dates from 1810 and Chandi Devi from 1929 — this is a different order of antiquity, and it does not look it from the street.' },
  { q:'Is Maya Devi worth a visit if I am short of time?',
    a:'Yes, precisely because it is short. It takes ten to fifteen minutes, it is a flat walk from Har Ki Pauri, and there is rarely a queue. If you are choosing between a third hill temple and this, come here — you get a Shakti Peeth and the origin of the town\'s name for a fraction of the time the ropeways cost you.' },
  { q:'Where exactly is it?',
    a:'In the old part of Haridwar about 1 km from Har Ki Pauri, reachable on foot in ten to fifteen minutes or by rickshaw for ₹30 to ₹50. The lanes around it are narrow and cars cannot get close, so any taxi drops you at the nearest access point and you walk the last stretch — the same arrangement as the ghat itself.' },
  { q:'Can I combine Maya Devi with Har Ki Pauri?',
    a:'They are the natural pair. Maya Devi is a short walk from the ghat, so most people fold it in either before the evening aarti or on the way back from a morning Ganga snan. Add it to the end of a temple circuit day and it costs you fifteen minutes.' },
];

export default function MayaDeviTemple() {
  const blocks = buildSchema({
    slug:'maya-devi-temple',
    name:'Maya Devi Temple, Haridwar',
    description:'Shakti Peeth in old Haridwar dedicated to Maya Devi, presiding deity of the town, from whom Haridwar\'s older name Mayapuri derives. Structure dated to around the 11th century.',
    geo:[29.9450, 78.1690],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Maya Devi Temple','/maya-devi-temple']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Old Haridwar · ${M.distanceFromHarKiPauri} from Har Ki Pauri`} title="Maya Devi Temple, Haridwar">
        Haridwar was <strong style={{ color:'#FFD166' }}>called Mayapuri after this goddess</strong>.
        A Shakti Peeth, the oldest standing building in town, and fifteen minutes of your day.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Maya Devi Temple', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Maya Devi is the oldest surviving temple in Haridwar and the Shakti Peeth the city is named for</strong> — Mayapuri, the abode of Maya. It dates to around the 11th century and marks where Sati's heart and navel are said to have fallen. It sits close to Har Ki Pauri, is open through the day without a ticket, and completes the trio of Siddh Peeths with Mansa Devi and Chandi Devi.
        </AnswerBox>
        <P>
          Maya Devi is {M.distanceFromHarKiPauri} from Har Ki Pauri, open {M.darshan}, free, and almost
          never busy. It is also a Shakti Peeth, the presiding shrine of the town, and the reason
          Haridwar&apos;s older name is Mayapuri. Thousands of pilgrims walk within a few hundred metres
          of it every evening on their way to the aarti and have no idea it is there. This page is a
          short argument for the fifteen minutes it takes.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎟️ Entry', M.entry],
          ['🕐 Hours', M.darshan],
          ['📍 Distance', `${M.distanceFromHarKiPauri} — 10–15 min walk`],
          ['⏱️ Allow', '15 minutes'],
          ['🚗 Access', 'Narrow lanes. Taxis drop nearby and you walk in'],
          ['👥 Crowds', 'Light most days. Heavy through Navratri'],
          ['🛕 Type', 'Shakti Peeth'],
          ['🏛️ Age', 'Structure dated to around the 11th century'],
        ]}/>

        <H2>The Goddess the Town Is Named For</H2>
        <P>
          {M.why}
        </P>
        <P>
          The connection to{' '}
          <Link href="/daksh-mahadev-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Daksh Mahadev at Kankhal</Link>{' '}
          is direct, and visiting both in one day is what makes either of them make sense. Kankhal is
          where Sati entered the fire. This is where a part of her came to rest. Four kilometres apart,
          one story, and between them they explain why this particular bend of the Ganga became a holy
          city rather than a river crossing.
        </P>

        <Note tone="info" title="The oldest thing you will walk past">
          The present Chandi Devi temple was built in 1929. Daksh Mahadev as it stands dates from 1810.
          Maya Devi is roughly eleventh century. It does not announce itself and it is not the most
          photogenic building in Haridwar, but in a town where almost everything visible is nineteenth
          or twentieth century, this is the real thing.
        </Note>

        <H2>Haridwar&apos;s Shrines, in Order of Age</H2>
        <Table
          head={['Site','Present structure','What it is']}
          rows={[
            ['Maya Devi','c. 11th century','Shakti Peeth, presiding deity of Haridwar'],
            ['Daksh Mahadev','1810, rebuilt 1962','Site of Daksha\'s yajna and Sati\'s death'],
            ['Har Ki Pauri','Rebuilt repeatedly; current form largely colonial-era and later','Brahmakund, the main bathing ghat'],
            ['Chandi Devi','1929','Hill temple on Neel Parvat; idol attributed to Adi Shankaracharya'],
          ]}
        />
        <P>
          Mansa Devi is harder to date confidently, which is why it is not in the table — the hill shrine
          is old but the present complex has been much rebuilt, and honest sources disagree.
        </P>

        <H2>Fitting It In</H2>
        <P>
          Maya Devi is the easiest addition to any Haridwar itinerary because it costs almost nothing in
          time. Two sensible slots:
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>After a morning Ganga snan.</strong> You are already
          at{' '}
          <Link href="/har-ki-pauri-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Har Ki Pauri</Link>{' '}
          and dressed for it. Walk over before the day heats up.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Late afternoon, before the aarti.</strong> You need
          to be near the ghat by 5 PM anyway. Arrive an hour early, see Maya Devi, then walk down and take
          your position on the steps.</LI>
        </ul>
        <P>
          Our{' '}
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>temple circuit</Link>{' '}
          includes it by default for this reason — it adds a Shakti Peeth to the day for a quarter of an hour.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="The Haridwar most visitors miss"
          blurb="Maya Devi, Kankhal, the hill temples and the aarti in one properly sequenced day. Ask us for the circuit."
          waMessage="Namaste! I want to see Maya Devi and the older temples of Haridwar. Please share the circuit."
        />

        <Related links={[
          ['Daksh Mahadev Temple','/daksh-mahadev-temple'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Mansa Devi Temple','/mansa-devi-temple'],
          ['Chandi Devi Temple','/chandi-devi-temple'],
          ['Haridwar Sightseeing','/haridwar-sightseeing-places'],
          ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
        ]}/>
      </Article>
    </>
  );
}
