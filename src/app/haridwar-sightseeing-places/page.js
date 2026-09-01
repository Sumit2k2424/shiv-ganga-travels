import Link from 'next/link';
import { SITE } from '@/data/packages';
import { PLACES, placeList } from '@/data/haridwarPlaces';
import { FLEET, inr } from '@/data/localTaxi';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Places to Visit in Haridwar — 1 & 2 Day Itineraries' },
  description: 'The Haridwar temples in the order that saves you queueing. Har Ki Pauri, Mansa Devi, Chandi Devi, Kankhal and Maya Devi, with timings and real costs.',
  keywords: ['places to visit in haridwar','haridwar sightseeing','haridwar tourist places','haridwar darshan places','things to do in haridwar','haridwar one day itinerary','haridwar temples list','haridwar sightseeing taxi'],
  alternates: { canonical: `${SITE.baseUrl}/haridwar-sightseeing-places` },
  openGraph: {
    title: 'Places to Visit in Haridwar — 1 & 2 Day Itineraries',
    description: 'Every temple worth your time, in the sequence that avoids the queues and the midday closures.',
    url: `${SITE.baseUrl}/haridwar-sightseeing-places`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Places to visit in Haridwar — temple circuit guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Visit in Haridwar — 1 & 2 Day Itineraries',
    description: 'Every temple worth your time, in the sequence that avoids the queues.',
    images: [{ url: '/opengraph-image', alt: 'Places to Visit in Haridwar | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'How many days do you need in Haridwar?',
    a:'One full day covers the four principal temples and the evening Ganga Aarti, which is what most Char Dham pilgrims have. Two days lets you add Rishikesh, Shantikunj and either Rajaji National Park or the Neel Dhara bird sanctuary without rushing. Three days is comfortable rather than necessary. If you are starting a yatra, arrive the evening before your one full day so you are not sightseeing on the morning of departure.' },
  { q:'What is the best order to see the Haridwar temples?',
    a:'Mansa Devi first thing, Chandi Devi late morning, lunch, Daksh Mahadev at Kankhal in the afternoon, Maya Devi on the way back, and Har Ki Pauri for the evening aarti. That order matters: the hill temples close for bhog around midday, and their ropeway queues grow through the morning. Doing Kankhal in the afternoon uses the closure instead of losing two hours to it.' },
  { q:'How much does a day of Haridwar sightseeing cost?',
    a:'The temples themselves are all free. Your real costs are the ropeways — roughly ₹290 to ₹340 for the combined Mansa Devi and Chandi Devi ticket — and transport, which is ₹1,600 for a full day in a sedan on our 8 hour, 80 km rate. Add a few hundred for food and shoe-minding and a family of four sees Haridwar properly for well under ₹3,000.' },
  { q:'Can I see Haridwar without a car?',
    a:'Yes, though it costs you time. Har Ki Pauri, Maya Devi and the Mansa Devi base are all walkable from the old town. Chandi Devi at Chandighat and Daksh Mahadev at Kankhal both need transport — shared autos serve both for ₹20 to ₹40 a seat and are perfectly usable. A car is a convenience, not a requirement, and we would rather say so than pretend otherwise.' },
  { q:'What is the best time of year to visit Haridwar?',
    a:'October to March. Clear weather, comfortable for the temple climbs, and the aarti is pleasant rather than sweltering. April to June is Char Dham season, so the town is full and the hill climbs are hard after 10 AM. Avoid Shravan, roughly late July to August, unless the Kanwar Yatra is specifically what you came for — the town is overwhelmed for weeks.' },
  { q:'Is Haridwar or Rishikesh better for a short trip?',
    a:'They answer different questions. Haridwar is the older, denser, more explicitly religious town — ghats, temples, the aarti, the start of the Char Dham route. Rishikesh is greener and more relaxed, with the ashrams, the footbridges and the adventure trade. Twenty-five kilometres apart, so the honest answer for anyone with two days is both.' },
  { q:'What should I skip in Haridwar?',
    a:'Nothing on this page, but two honest warnings. Bharat Mata Mandir gets recommended constantly and is a fairly plain multi-storey building whose appeal is the concept rather than the visit — go if you have spare time, not instead of something else. And the "wax museum" and similar attractions near the ghat are aimed squarely at day-trippers; there is nothing wrong with them, but do not let them displace Kankhal.' },
  { q:'Is the Ganga Aarti worth staying for?',
    a:'Yes, unequivocally, and it is the one thing you should plan the rest of your day around. It is at about 6:30 PM in summer and 5:30 PM in winter, it is free, and you want to be on the steps 45 minutes early — 90 in season. Everything else in Haridwar can be moved. This cannot.' },
];

export default function HaridwarSightseeingPlaces() {
  const dzire = FLEET.find(v => v.id === 'dzire');
  const blocks = buildSchema({
    slug:'haridwar-sightseeing-places',
    name:'Places to Visit in Haridwar',
    description:'Guide to Haridwar\'s principal temples and ghats with one-day and two-day itineraries, timings, ropeway costs and the sequence that avoids queues.',
    types:null,
    faqs:FAQS,
    crumbs:[['Places to Visit in Haridwar','/haridwar-sightseeing-places']],
  });

  const itemList = {
    '@context':'https://schema.org', '@type':'ItemList',
    name:'Places to visit in Haridwar',
    itemListElement: [
      ['Har Ki Pauri','/har-ki-pauri-guide','The main bathing ghat and the site of the Ganga Aarti'],
      ['Mansa Devi Temple','/mansa-devi-temple','Hill temple on Bilwa Parvat, reached by ropeway or a 45-minute walk'],
      ['Chandi Devi Temple','/chandi-devi-temple','Hill temple on Neel Parvat, quieter, with the better view'],
      ['Daksh Mahadev Temple','/daksh-mahadev-temple','Kankhal — site of Daksha\'s yajna and Sati\'s self-immolation'],
      ['Maya Devi Temple','/maya-devi-temple','Shakti Peeth and the goddess Haridwar is named for'],
      ['Shantikunj','/shantikunj-haridwar-guide','Gayatri Pariwar headquarters on the Sapt Sarovar road'],
    ].map(([name, url, desc], i) => ({
      '@type':'ListItem', position:i+1,
      item:{ '@type':'TouristAttraction', name, description:desc, url:`${SITE.baseUrl}${url}` },
    })),
  };

  return (
    <>
      <SchemaBlocks blocks={[...blocks, itemList]}/>

      <Hero eyebrow="Haridwar · One-day and two-day plans" title="Places to Visit in Haridwar">
        Six sites are worth your time, and the <strong style={{ color:'#FFD166' }}>order you do them in
        decides whether it takes one day or two</strong>. Every temple is free; the ropeways and the car
        are the only real costs.
      </Hero>

      <Crumbs trail={[['Places to Visit in Haridwar', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>A full day in Haridwar covers Har Ki Pauri, Mansa Devi, Chandi Devi and Daksh Mahadev, and that is the sensible order.</strong> Do the two hill temples in the morning by ropeway, Daksh Mahadev at Kankhal after lunch, and keep the evening for the Ganga Aarti at Har Ki Pauri, which is the thing people remember. Maya Devi, Bharat Mata Mandir and Shantikunj fit in if you have a second day.
        </AnswerBox>
        <P>
          Haridwar is small enough to see properly in a day, and almost everybody gets the sequence
          wrong. The two hill temples close for bhog around midday and their ropeway queues build through
          the morning; the flat-ground temples at Kankhal and in the old town stay open through the
          afternoon. Do it in the order below and you will see everything without standing still. Do it
          in the obvious order and you will lose two hours.
        </P>

        <H2>The One-Day Plan</H2>
        <Table
          head={['Time','Where','Why then']}
          rows={[
            ['7:30–9:30 AM', <Link key="m" href="/mansa-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Mansa Devi</Link>, 'Shortest ropeway queue of the day — 5–15 min instead of 45'],
            ['10:00–11:30 AM', <Link key="c" href="/chandi-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Chandi Devi</Link>, 'In and out before the midday darshan closure'],
            ['12:00–2:00 PM', 'Lunch', 'Both hill temples are shut anyway'],
            ['2:30–3:30 PM', <Link key="d" href="/daksh-mahadev-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Daksh Mahadev, Kankhal</Link>, 'Open all afternoon, and quiet'],
            ['4:00–4:20 PM', <Link key="my" href="/maya-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Maya Devi</Link>, 'Fifteen minutes, on the way back in'],
            ['4:45 PM onward', <Link key="h" href="/har-ki-pauri-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Har Ki Pauri</Link>, 'Take your place well before the aarti'],
          ]}
        />
        <Note tone="good" title="The two decisions that matter">
          Be at the Mansa Devi base station by 7:30 AM, and be on the steps at Har Ki Pauri by 4:45 PM.
          Everything between those two points is flexible. Those two are not, and getting them right is
          the difference between a relaxed day and a day spent queueing.
        </Note>

        <H2>The Two-Day Plan</H2>
        <P>
          With a second day you stop rushing and add the things that make Haridwar more than a temple
          checklist.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Day 1</strong> — the circuit above, ending at the aarti.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Day 2 morning</strong> — Ganga snan at Brahmakund at first light, then{' '}
            <Link href="/shantikunj-haridwar-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Shantikunj</Link>{' '}
            on the Sapt Sarovar road.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Day 2 afternoon</strong> — on to{' '}
            <Link href="/haridwar-to-rishikesh-taxi" style={{ color:'var(--teal)', fontWeight:600 }}>Rishikesh</Link>{' '}
            for Ram Jhula, Lakshman Jhula and Triveni Ghat, or{' '}
            <Link href="/rajaji-national-park" style={{ color:'var(--teal)', fontWeight:600 }}>Rajaji National Park</Link>{' '}
            if you would rather have the forest.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>In winter</strong> — swap in Neel Dhara Pakshi Vihar below Chandighat for the migratory birds. Almost nobody does, and they should.</LI>
        </ul>

        <H2>Every Site, Compared</H2>
        <Table
          head={['Place','Distance from ghat','Entry','Allow','Climb?']}
          rows={[
            ['Har Ki Pauri','—','Free','2 hrs with aarti','No'],
            ['Maya Devi','1 km','Free','15 min','No'],
            ['Mansa Devi','1.5 km','Free + ropeway','2 hrs','Ropeway or 45 min walk'],
            ['Chandi Devi','4 km','Free + ropeway','2 hrs','Ropeway or 3 km trek'],
            ['Daksh Mahadev','4 km','Free','1 hr','No'],
            ['Shantikunj','6 km','Free','1 hr','No'],
          ]}
        />
        <P>
          If mobility is a constraint, the three flat sites — Har Ki Pauri, Maya Devi and Kankhal — give
          you the full religious significance of Haridwar with no climbing at all. The hill temples are
          the photogenic ones, not the important ones.
        </P>

        <H2>What It Costs</H2>
        <Table
          head={['Item','Cost','Note']}
          rows={[
            ['All six temples','Free','No entry fee anywhere. Donations voluntary.'],
            ['Mansa + Chandi ropeway combo','₹290–340','Confirm at the counter — published prices vary'],
            ['Full-day car (sedan)', inr(dzire.local8), '8 hours / 80 km — covers the whole circuit'],
            ['Shared autos instead','₹20–40 per hop','Slower but entirely workable'],
            ['Shoe minding','₹10–20 a pair','At the ghat and the temples'],
          ]}
        />
        <P>
          Our{' '}
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar temple circuit</Link>{' '}
          runs this exact sequence with the car waiting at each base station, and the full local rate card
          is on that page.
        </P>

        <H2>When to Come</H2>
        <Table
          head={['Season','Verdict']}
          rows={[
            ['October–March','Best. Clear, cool, manageable crowds, comfortable climbs.'],
            ['April–June','Char Dham season. Full town, hard climbs after 10 AM, excellent atmosphere.'],
            ['Late July–August','Kanwar Yatra through Shravan. Avoid unless that is why you came.'],
            ['September','Quiet and green after the monsoon. Underrated.'],
          ]}
        />

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
          ['Uttarakhand Forest Department — Rajaji and Neel Dhara','https://forest.uk.gov.in/'],
        ]}/>

        <CTA
          title="One day, done in the right order"
          blurb="We run this circuit most days of the season. Car waits at every base station, and we will tell you the current aarti time before you go."
          waMessage="Namaste! I want to do Haridwar sightseeing. Please share the circuit and rates."
        />

        <Related links={[
          ['Places to Visit in Rishikesh','/rishikesh-sightseeing-places'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Mansa Devi Temple','/mansa-devi-temple'],
          ['Chandi Devi Temple','/chandi-devi-temple'],
          ['Daksh Mahadev Temple','/daksh-mahadev-temple'],
          ['Maya Devi Temple','/maya-devi-temple'],
          ['Shantikunj Guide','/shantikunj-haridwar-guide'],
          ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
          ['Haridwar Tour Packages','/haridwar-tour-packages'],
        ]}/>
      </Article>
    </>
  );
}
