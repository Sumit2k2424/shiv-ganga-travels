import Link from 'next/link';
import { SITE } from '@/data/packages';
import { SEATS, SEASON } from '@/data/winterSeats';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

const S = SEATS.ukhimath;

export const metadata = {
  title: { absolute: 'Omkareshwar Temple Ukhimath — Kedarnath\'s Winter Home' },
  description: 'Kedarnath is worshipped here from November to April. Ukhimath sits at 1,311 m, is road-accessible all winter, and almost nobody goes.',
  keywords: ['omkareshwar temple ukhimath','ukhimath','kedarnath winter seat','kedarnath winter abode','ukhimath temple timing','omkareshwar mandir ukhimath','kedarnath in winter','ukhimath how to reach'],
  alternates: { canonical: `${SITE.baseUrl}/omkareshwar-temple-ukhimath` },
  openGraph: {
    title: 'Omkareshwar Temple Ukhimath — Kedarnath\'s Winter Home',
    description: 'Where Kedarnath actually is from November to April. 1,311 m, road-accessible, and empty.',
    url: `${SITE.baseUrl}/omkareshwar-temple-ukhimath`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Omkareshwar Temple, Ukhimath — winter seat of Kedarnath' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkareshwar Temple Ukhimath — Kedarnath\'s Winter Home',
    description: 'Where Kedarnath actually is from November to April.',
    images: [{ url: '/opengraph-image', alt: 'Omkareshwar Temple Ukhimath | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is Omkareshwar Temple at Ukhimath?',
    a:'It is the winter seat of Kedarnath. When the Kedarnath doors close on Bhai Dooj each November, the Panchmukhi Utsav Doli of Lord Kedarnath is carried down over three days and installed here, and every ritual, aarti and puja that would happen at Kedarnath happens at Ukhimath instead until the doors reopen in late April. It is also the winter seat of Madmaheshwar, one of the Panch Kedar.' },
  { q:'Can I have Kedarnath darshan at Ukhimath in winter?',
    a:'Yes, and that is the entire point of the place. From roughly mid-November to late April the deity is here, the same priests serve it, and you can take darshan on any day of the winter. The temple is open through the day with the usual midday break. You will often be one of very few visitors, which at Kedarnath in June is unimaginable.' },
  { q:'How do I reach Ukhimath?',
    a:'About 200 km from Haridwar, seven to eight hours by road via Rishikesh, Devprayag, Srinagar and Rudraprayag. It sits at 1,311 m on the Rudraprayag–Gopeshwar road, and unlike the higher winter seats it is reliably reachable all winter. From Guptkashi it is about 12 km, and from Chopta roughly 40 km.' },
  { q:'Is Ukhimath open in winter, and is the road clear?',
    a:'Yes on both counts, with normal Himalayan caveats. Ukhimath is low enough at 1,311 m that it does not get snowed in the way Mukhba or Kharsali can. The highway from Rudraprayag stays open through the season. Heavy snowfall higher up can slow things and the road is mountain road in winter conditions, so we drive it in daylight only — but this is the most dependable of the four winter seats to plan around.' },
  { q:'What else is near Ukhimath?',
    a:'Chopta and Tungnath are about 40 km away and spectacular under snow. Deoria Tal, the lake with the Chaukhamba reflection, is a short trek from Sari village nearby. Guptkashi with its Vishwanath temple is 12 km. Kalimath, one of the Siddha Peethas, is close too. A winter trip built around Ukhimath has more in reach than most people expect.' },
  { q:'When does the deity return to Kedarnath?',
    a:'In late April or early May, on a date declared at Mahashivratri. The doli leaves Ukhimath and travels up over several days — Phata, then Gaurikund, then Kedarnath — arriving for the kapat opening. Both the descent in November and the ascent in spring are public processions and both are worth seeing if your dates happen to line up.' },
  { q:'Is there anywhere to stay in Ukhimath?',
    a:'Yes. Ukhimath has guesthouses, a GMVN rest house and a growing number of homestays, and in winter you will have no trouble finding a room. Standards are simple — clean, wood-heated, hot water often by bucket. It is a working hill town rather than a resort, and priced accordingly.' },
];

export default function OmkareshwarUkhimath() {
  const blocks = buildSchema({
    slug:'omkareshwar-temple-ukhimath',
    name:'Omkareshwar Temple, Ukhimath',
    description:'Winter seat of Kedarnath and Madmaheshwar in Rudraprayag district, Uttarakhand, at 1,311 m. Kedarnath is worshipped here from November to April.',
    geo:[30.5150, 79.0900],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Omkareshwar Temple Ukhimath','/omkareshwar-temple-ukhimath']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Winter seat of Kedarnath · ${S.altitude}`} title="Omkareshwar Temple, Ukhimath">
        From November to April, <strong style={{ color:'#FFD166' }}>Kedarnath is here</strong>. Same
        deity, same priests, same rituals — at {S.altitude} on an open road, with no queue.
      </Hero>

      <Crumbs trail={[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Omkareshwar Temple Ukhimath', null]]}/>

      <Article>
        <Updated/>

        <P>
          When Kedarnath closes on {SEASON.closing.kedarnath.date}, the deity does not go into storage.
          The Panchmukhi Utsav Doli is carried down over three days and installed at the Omkareshwar
          Temple in Ukhimath, and for the next six months every ritual that belongs to Kedarnath is
          performed here. If you cannot make the trek to 3,583 m, or cannot travel in season, this is
          where you take Kedarnath darshan — and you will very likely have the place to yourself.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🛕 Winter seat of', `${S.seatOf} and ${S.alsoSeatOf}`],
          ['⛰️ Altitude', S.altitude],
          ['📍 From Haridwar', S.fromHaridwar],
          ['🗓️ Deity arrives', S.arrives],
          ['🙏 Worship', 'Full Kedarnath rituals, Nov–Apr'],
          ['🛣️ Winter access', 'Reliable. The most dependable of the four seats.'],
          ['🎟️ Entry', 'Free'],
          ['🛏️ Stay', 'Guesthouses, GMVN, homestays — easy in winter'],
        ]}/>

        <H2>Why Ukhimath Matters</H2>
        <P>{S.why}</P>
        <P>
          There is a common assumption that winter Kedarnath worship is a symbolic stand-in — a token
          arrangement until the real temple reopens. It is not. The rawal of Kedarnath relocates for the
          season. The Utsav Doli that receives worship here is the same one carried in procession at the
          shrine. In the tradition, Kedarnath in January is at Ukhimath, in the same sense that Kedarnath
          in June is at Kedarnath.
        </P>
        <Note tone="good" title="What this means if you cannot do the trek">
          The 16 km climb from Gaurikund rules out a large number of pilgrims — heart patients, people
          with knee trouble, anyone over eighty who does not want a pony. Every season we have families
          who make the journey and then send one member up while the rest wait at Sonprayag. Ukhimath is
          a road-head temple at 1,311 m. Everybody in the family gets darshan.
        </Note>

        <H2>The Doli That Brings Him Down</H2>
        <P>
          The descent is a three-day public procession from the temple to Ukhimath via Rampur and
          Guptkashi, accompanied by priests, the temple committee, drummers and villagers along the whole
          route. It is one of the most striking things in the Garhwal calendar and almost no outside
          visitor sees it, because it happens the week everyone leaves. We have written it up in detail
          on the{' '}
          <Link href="/kedarnath-doli-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>Kedarnath doli yatra page</Link>.
        </P>

        <H2>Getting There</H2>
        <Table
          head={['From','Distance','Time','Note']}
          rows={[
            ['Haridwar','~200 km','7–8 hrs','Via Rishikesh, Devprayag, Srinagar, Rudraprayag'],
            ['Rishikesh','~180 km','6–7 hrs','Same road, one hour less'],
            ['Rudraprayag','~40 km','1.5 hrs','The last main junction'],
            ['Guptkashi','~12 km','30 min','Closest town of any size'],
            ['Chopta','~40 km','2 hrs','Spectacular under snow'],
            ['Joshimath','~130 km','5 hrs','If you are doing both winter seats'],
          ]}
        />
        <P>
          Our drivers run this road through the winter. We start early and we do not drive these
          gradients after dark — see the{' '}
          <Link href="/char-dham-road-status" style={{ color:'var(--teal)', fontWeight:600 }}>road status page</Link>{' '}
          for current conditions, and call us if you want the honest version for a particular week.
        </P>

        <H2>What Else Is Within Reach</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Chopta and Tungnath</strong> — 40 km. The highest
          Shiva temple in the world, and under snow it is a different place entirely. See our{' '}
          <Link href="/chopta-tungnath" style={{ color:'var(--teal)', fontWeight:600 }}>Chopta Tungnath guide</Link>.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Deoria Tal</strong> — a short trek from Sari
          village, with the Chaukhamba range reflected in the water on a still morning.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Kalimath</strong> — one of the Siddha Peethas, and
          far less visited than it deserves.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Guptkashi</strong> — 12 km, with the Vishwanath
          temple where the doli halts on its way down. Our{' '}
          <Link href="/guptkashi-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Guptkashi guide</Link>{' '}
          covers it.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Shri Badarinath Kedarnath Temple Committee','https://badrinath-kedarnath.gov.in/'],
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
        ]}/>

        <CTA
          title="Kedarnath darshan in winter"
          blurb="Ukhimath from Haridwar, on its own or with Joshimath and Chopta. We drive this road through the season and will tell you what it is doing this week."
          waMessage="Namaste! I want to visit Ukhimath for Kedarnath winter darshan. Please share the itinerary and cost."
        />

        <Related links={[
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Kedarnath Doli Yatra','/kedarnath-doli-yatra'],
          ['Narsingh Temple Joshimath','/joshimath-narsingh-temple'],
          ['Chopta Tungnath','/chopta-tungnath'],
          ['Guptkashi Guide','/guptkashi-guide'],
          ['Kedarnath Temple','/kedarnath-temple'],
          ['Panch Kedar Yatra','/panch-kedar-yatra'],
        ]}/>
      </Article>
    </>
  );
}
