import Link from 'next/link';
import { SITE } from '@/data/packages';
import { PLACES } from '@/data/haridwarPlaces';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

const D = PLACES['daksh-mahadev'];

export const metadata = {
  title: { absolute: 'Daksh Mahadev Temple, Kankhal — Timings & History' },
  description: 'Where Sati entered the fire. Daksheshwar Mahadev at Kankhal, 4 km from Har Ki Pauri, open 6 AM–8 PM, free. The yajnashala is still on the site.',
  keywords: ['daksh mahadev temple','daksheshwar mahadev temple','daksh prajapati temple kankhal','daksh mahadev haridwar timing','kankhal temple haridwar','sati temple haridwar','daksheswar mahadev history'],
  alternates: { canonical: `${SITE.baseUrl}/daksh-mahadev-temple` },
  openGraph: {
    title: 'Daksh Mahadev Temple, Kankhal — Timings & History',
    description: 'The site of Daksha\'s yajna and Sati\'s self-immolation. 4 km from Har Ki Pauri, free, open 6 AM–8 PM.',
    url: `${SITE.baseUrl}/daksh-mahadev-temple`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Daksh Mahadev Temple at Kankhal, Haridwar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daksh Mahadev Temple, Kankhal — Timings & History',
    description: 'The site of Daksha\'s yajna and Sati\'s self-immolation, 4 km from Har Ki Pauri.',
    images: [{ url: '/opengraph-image', alt: 'Daksh Mahadev Temple Kankhal | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What are the Daksh Mahadev temple timings?',
    a:'Roughly 6 AM to 8 PM daily, with a break in the middle of the day at some times of year. Entry is free. Unlike the hill temples there is no ropeway, no ticket and no queue for most of the year — you can walk in, sit, and leave when you want. On Mahashivratri that changes completely and the whole of Kankhal fills.' },
  { q:'What is the story of Daksh Mahadev temple?',
    a:'This is where the Sati story takes place. Daksha Prajapati, Sati\'s father, ruled Kankhal and held a great yajna to which he pointedly did not invite Shiva, his son-in-law, whom he considered beneath the family. Sati attended anyway. When Daksha insulted Shiva in front of the assembly, she entered the sacrificial fire. What followed — Shiva\'s grief, the destruction of the yajna, and the scattering of Sati\'s body across the subcontinent — is the origin of the Shakti Peethas. The yajnashala is still on the site.' },
  { q:'How far is Daksh Mahadev from Har Ki Pauri?',
    a:'About 4 km south, at Kankhal, which is fifteen minutes by car or auto. Unlike Mansa Devi and Chandi Devi it is flat ground with vehicle access right up to the entrance, so it is the easiest of the four main Haridwar temples to reach and the only one that presents no difficulty at all for elderly visitors or wheelchair users.' },
  { q:'Is Daksh Mahadev worth visiting?',
    a:'If you have any interest in why Haridwar matters rather than just what it looks like, yes. Most visitors do Har Ki Pauri and the two hill temples and skip this one, which is a mistake — it is the single most historically significant site in the town and it is quiet enough that you can actually sit in it. If you are collecting photographs, it is less immediately striking than the hill temples.' },
  { q:'When is the best time to visit?',
    a:'Any morning is pleasant. Mahashivratri, usually February or March, is when Kankhal comes fully alive and the temple sees enormous numbers — worth seeing if you are here for it and worth avoiding if you want quiet. Shravan, roughly late July to August, also brings heavy footfall as kanwariyas pass through.' },
  { q:'What else is there to see at Kankhal?',
    a:'Kankhal is an old settlement in its own right, older than much of modern Haridwar, with a cluster of ashrams and the Anandamayi Ma ashram among them. It is a quieter, less commercial part of town than the area around Har Ki Pauri. Half a morning here is a genuinely different experience from the ghat.' },
  { q:'Can I combine Daksh Mahadev with the hill temples in one day?',
    a:'Yes, and it is the standard circuit. Mansa Devi first thing, Chandi Devi late morning, lunch, then Daksh Mahadev in the afternoon while the hill temples are closed for bhog, finishing at Har Ki Pauri for the evening aarti. That uses the midday closure productively instead of losing two hours to it.' },
];

export default function DakshMahadevTemple() {
  const blocks = buildSchema({
    slug:'daksh-mahadev-temple',
    name:'Daksh Mahadev Temple, Kankhal',
    description:'Shiva temple at Kankhal, Haridwar, on the site of Daksha Prajapati\'s yajna and Sati\'s self-immolation. Built 1810 by Queen Dhankaur, rebuilt 1962.',
    geo:[29.9271, 78.1447],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Daksh Mahadev Temple','/daksh-mahadev-temple']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Kankhal · ${D.distanceFromHarKiPauri}`} title="Daksh Mahadev Temple, Kankhal">
        Where Sati entered the fire, and where the story of the Shakti Peethas begins.
        Open {D.darshan}, free, on flat ground with vehicle access to the gate.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Daksh Mahadev Temple', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Daksh Mahadev at Kankhal, about 4km from Har Ki Pauri, marks the site of Daksha's yagna</strong> — the sacrifice Sati entered and did not leave, and the reason Shiva destroyed the ritual. It is one of Haridwar's most significant Shiva temples and is busiest during Shivratri and the month of Shravan. Open through the day, no ticket, and usually visited alongside Kankhal's other shrines.
        </AnswerBox>
        <P>
          Daksh Mahadev — also called Daksheshwar Mahadev or the Daksha Prajapati temple — stands at
          Kankhal, {D.distanceFromHarKiPauri} from Har Ki Pauri. It is open {D.darshan}, entry is free,
          and it is the flattest and easiest to reach of Haridwar&apos;s four principal temples. It is
          also the one most visitors skip, which is a shame, because this is where the events that give
          Haridwar its religious weight actually happened.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎟️ Entry', D.entry],
          ['🕐 Hours', D.darshan],
          ['📍 Distance', D.distanceFromHarKiPauri],
          ['🚗 Access', 'Vehicle right to the gate — no climb, no ropeway'],
          ['♿ Accessibility', 'The easiest of the Haridwar temples for wheelchairs and elderly visitors'],
          ['⏱️ Allow', 'About an hour, longer if you sit'],
          ['📸 Photography', 'Permitted in the complex, restricted in the sanctum'],
          ['🔥 Peak day', 'Mahashivratri — extraordinary, and extraordinarily crowded'],
        ]}/>

        <H2>The Story This Place Tells</H2>
        <P>
          {D.why}
        </P>
        <P>
          The consequences are what matter. Shiva, in his grief and rage, destroyed the yajna and carried
          Sati&apos;s body across the world. To end his wandering, Vishnu cut the body apart, and the
          places where the pieces fell became the Shakti Peethas — the network of goddess shrines that
          runs from Kashmir to Assam to Bengal, including{' '}
          <Link href="/maya-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Maya Devi here in Haridwar</Link>,
          where her heart and navel are said to have landed.
        </P>
        <Note tone="info" title="Why this matters for a Char Dham pilgrim">
          People often ask why the yatra starts at Haridwar rather than somewhere closer to the mountains.
          Part of the answer is logistical. But part of it is this: Kankhal is where the divine family
          drama that underpins Shaivism took place, and Haridwar is where the Ganga reaches the plains.
          Starting here is not an accident of road geography.
        </Note>

        <H2>What You Actually See</H2>
        <P>
          The present building was raised by Queen Dhankaur in 1810 and rebuilt in 1962, so the fabric is
          not ancient — the significance is in the ground, not the stone. The yajnashala, the sacrificial
          fire pit at the centre of the story, is on the site. There is a Shiva lingam in the main shrine
          and a set of smaller shrines around the courtyard.
        </P>
        <P>
          It is a working neighbourhood temple rather than a monument. On an ordinary weekday morning
          there will be a handful of local worshippers, a priest, and very few tourists. That is the
          appeal.
        </P>

        <H2>Fitting It Into a Haridwar Day</H2>
        <Table
          head={['Time','Where','Why then']}
          rows={[
            ['7:30–9:30 AM','Mansa Devi','Shortest ropeway queue of the day'],
            ['10:00–11:30 AM','Chandi Devi','Beat the midday darshan closure'],
            ['12:30–2:00 PM','Lunch','Hill temples are shut anyway'],
            ['2:30–3:30 PM','Daksh Mahadev, Kankhal','Open through the afternoon, and quiet'],
            ['4:00–4:45 PM','Maya Devi','Ten minutes, on the way back in'],
            ['5:30 PM onward','Har Ki Pauri','Ganga Aarti to close the day'],
          ]}
        />
        <P>
          The point of putting Kankhal in the afternoon is that it is open when the hill temples are not.
          Most itineraries waste the midday closure sitting around. Our{' '}
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar temple circuit</Link>{' '}
          is built around exactly this sequence.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['Haridwar District Administration — Kankhal','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="See Haridwar properly, not just the ghat"
          blurb="Our temple circuit covers Kankhal alongside the hill temples and Maya Devi, timed around the midday closures. Five to six hours with the car waiting."
          waMessage="Namaste! I want to visit Daksh Mahadev and the Haridwar temples. Please share the circuit and rates."
        />

        <Related links={[
          ['Maya Devi Temple','/maya-devi-temple'],
          ['Mansa Devi Temple','/mansa-devi-temple'],
          ['Chandi Devi Temple','/chandi-devi-temple'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Haridwar Sightseeing','/haridwar-sightseeing-places'],
          ['Haridwar Tour Packages','/haridwar-tour-packages'],
        ]}/>
      </Article>
    </>
  );
}
