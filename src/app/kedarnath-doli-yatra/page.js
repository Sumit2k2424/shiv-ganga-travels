import Link from 'next/link';
import { SITE } from '@/data/packages';
import { SEASON, DOLI_LEGS } from '@/data/winterSeats';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Kedarnath Doli Yatra — The Three-Day Winter Procession' },
  description: 'After Kedarnath closes on Bhai Dooj, the Panchmukhi Doli walks to Ukhimath over three days via Rampur and Guptkashi. Route, dates and how to see it.',
  keywords: ['kedarnath doli yatra','panchmukhi doli kedarnath','kedarnath utsav doli','kedarnath doli route','kedarnath kapat band','kedarnath winter procession','doli yatra ukhimath','kedarnath doli dates'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-doli-yatra` },
  openGraph: {
    title: 'Kedarnath Doli Yatra — The Three-Day Winter Procession',
    description: 'The Panchmukhi Doli walks from Kedarnath to Ukhimath over three days. Almost no outside visitor sees it.',
    url: `${SITE.baseUrl}/kedarnath-doli-yatra`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Panchmukhi Doli procession to Ukhimath' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Doli Yatra — The Three-Day Winter Procession',
    description: 'The Panchmukhi Doli walks from Kedarnath to Ukhimath over three days.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Doli Yatra | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is the Kedarnath Doli Yatra?',
    a:'It is the procession that carries the Panchmukhi Utsav Doli — the five-faced processional image of Lord Kedarnath — from the temple down to its winter seat at Ukhimath after the doors close on Bhai Dooj. It takes three days, halting at Rampur and Guptkashi, and is accompanied by the temple priests, the temple committee, drummers and villagers who join along the route. In spring the same procession runs in reverse to reopen the shrine.' },
  { q:'When does the doli leave Kedarnath in 2026?',
    a:'Kedarnath closes on 11 November 2026, Bhai Dooj, and the doli departs immediately after the kapat band ceremony that morning. It reaches Ukhimath on the third day. Exact timings are set by the temple committee close to the date and can move by a day, so if you are travelling specifically to see it, confirm with us or with the committee in the week before rather than booking on an assumption.' },
  { q:'What route does the doli take?',
    a:'Kedarnath to Rampur on day one, descending the trek route. Rampur to Guptkashi on day two, with the night halt at the Vishwanath temple — this is where the largest crowds gather. Guptkashi to Ukhimath on day three, where the deity is installed at the Omkareshwar Temple for the winter. Total descent is from 3,583 m to 1,311 m.' },
  { q:'Can ordinary visitors watch the doli yatra?',
    a:'Yes. It is a public procession, not a closed ceremony, and villagers line the route throughout. The practical difficulty is that it happens the week everyone leaves — the season is over, hotels are shutting, and most operators have gone home for winter. That is exactly why so few outside visitors see it, and why it is one of the most striking things in the Garhwal calendar that almost nobody photographs.' },
  { q:'Where is the best place to see it?',
    a:'Guptkashi on the second evening. The doli halts at the Vishwanath temple, the crowds are largest, and it is a road-accessible town where you can actually get a bed. Watching the departure from Kedarnath itself means being at 3,583 m in mid-November and walking down with the procession, which is a serious undertaking. Ukhimath on the third day, for the installation, is the other good option.' },
  { q:'Is there a spring procession too?',
    a:'Yes, and it is the same event in reverse. In late April or early May the doli leaves Ukhimath and travels up over several days — Phata, then Gaurikund, then Kedarnath — arriving in time for the kapat opening, which is declared at Mahashivratri. The spring procession is better attended because the season is starting and everyone is arriving rather than leaving.' },
  { q:'Why five faces?',
    a:'The Panchmukhi doli carries the five-faced form of Shiva, connected in the Kedar valley tradition to the Panch Kedar — the five shrines of Kedarnath, Madmaheshwar, Tungnath, Rudranath and Kalpeshwar, where different parts of Shiva as the bull are said to have surfaced. Kedarnath is the hump. Our Panch Kedar page sets out the full circuit.' },
  { q:'Can you arrange a trip around the doli yatra?',
    a:'Yes, and it needs planning rather than a last-minute booking, because accommodation along the route is closing for the season exactly when you want it. The workable version is basing at Guptkashi or Ukhimath for two or three nights around the dates and meeting the procession, rather than trying to follow it from Kedarnath. Tell us early and we will hold rooms.' },
];

export default function KedarnathDoliYatra() {
  const blocks = buildSchema({
    slug:'kedarnath-doli-yatra',
    name:'Kedarnath Doli Yatra',
    description:'The three-day procession carrying the Panchmukhi Utsav Doli of Lord Kedarnath from the temple to its winter seat at Omkareshwar Temple, Ukhimath, after the shrine closes on Bhai Dooj.',
    types:null,
    faqs:FAQS,
    crumbs:[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Kedarnath Doli Yatra','/kedarnath-doli-yatra']],
  });

  const event = {
    '@context':'https://schema.org', '@type':'Event',
    name:'Kedarnath Doli Yatra — winter procession to Ukhimath',
    description:'Three-day procession of the Panchmukhi Utsav Doli of Lord Kedarnath from Kedarnath temple to the Omkareshwar Temple at Ukhimath, departing after the kapat band ceremony on Bhai Dooj.',
    startDate:'2026-11-11',
    eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    eventStatus:'https://schema.org/EventScheduled',
    isAccessibleForFree:true,
    location:[
      { '@type':'Place', name:'Kedarnath Temple', address:{ '@type':'PostalAddress', addressRegion:'Uttarakhand', addressCountry:'IN' } },
      { '@type':'Place', name:'Guptkashi', address:{ '@type':'PostalAddress', addressRegion:'Uttarakhand', addressCountry:'IN' } },
      { '@type':'Place', name:'Omkareshwar Temple, Ukhimath', address:{ '@type':'PostalAddress', addressRegion:'Uttarakhand', addressCountry:'IN' } },
    ],
    image:[`${SITE.baseUrl}/opengraph-image`],
    organizer:{
      '@type':'Organization',
      name:'Shri Badarinath Kedarnath Temple Committee',
      // BKTC's own .gov.in property — the same source the emergency contact
      // directory's pilgrim helpline numbers were verified against.
      url:'https://badrinath-kedarnath.gov.in',
    },
  };

  return (
    <>
      <SchemaBlocks blocks={[...blocks, event]}/>

      <Hero eyebrow={`${SEASON.closing.kedarnath.date} · Three days · 3,583 m to 1,311 m`} title="Kedarnath Doli Yatra">
        When the doors shut, <strong style={{ color:'#FFD166' }}>Kedarnath walks down the mountain</strong>.
        Three days, two night halts, and almost no outside visitor there to see it.
      </Hero>

      <Crumbs trail={[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Kedarnath Doli Yatra', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>The Kedarnath doli is the ceremonial procession that carries the deity between the shrine and Ukhimath each season.</strong> It leaves Kedarnath a day or two after the temple closes in November, halting at Rampur, Guptkashi and Phata before reaching Omkareshwar Temple at Ukhimath, and makes the reverse journey in April before the doors reopen. Anyone can walk with it. It is free, and for many local families it is the more meaningful half of the yatra.
        </AnswerBox>
        <P>
          On {SEASON.closing.kedarnath.date}, after the kapat band ceremony, the Panchmukhi Utsav Doli of
          Lord Kedarnath leaves the temple and is carried down to Ukhimath over three days, halting at
          Rampur and then Guptkashi. Priests, the temple committee, drummers and villagers travel with
          it, and people join at every village along the route. It is a public procession, it happens
          every year, and hardly any visitor from outside Garhwal has ever seen it — because it takes
          place in the week the season ends and everybody goes home.
        </P>

        <H2>The Three Legs</H2>
        <Table
          head={['','From','To','What happens']}
          rows={DOLI_LEGS.map(l => [l.day, l.from, l.to, l.note])}
        />
        <P>
          The descent is from 3,583 m at the temple to 1,311 m at Ukhimath. Day one follows the trek
          route down to Rampur on foot. From Guptkashi onwards the going is road, and the procession
          gathers numbers as it drops into inhabited country.
        </P>

        <Note tone="good" title="Where to actually stand">
          Guptkashi on the second evening. The doli halts at the Vishwanath temple, it draws the biggest
          crowd of the three days, and unlike Kedarnath it is a town with beds in it. The alternative is
          Ukhimath on day three for the installation at{' '}
          <Link href="/ukhimath" style={{ color:'#15803D', fontWeight:700 }}>Omkareshwar Temple</Link>.
          Trying to watch the departure from Kedarnath means being at 3,583 m in mid-November and walking
          down with the procession — possible, but a serious undertaking rather than a sightseeing trip.
        </Note>

        <H2>What the Doli Is</H2>
        <P>
          The Panchmukhi doli carries the five-faced processional form of Shiva. In the Kedar valley the
          five faces connect to the Panch Kedar — Kedarnath, Madmaheshwar, Tungnath, Rudranath and
          Kalpeshwar — the five shrines where parts of Shiva, having taken the form of a bull to evade
          the Pandavas, are said to have surfaced. Kedarnath is the hump. Our{' '}
          <Link href="/panch-kedar-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>Panch Kedar page</Link>{' '}
          covers the full circuit.
        </P>
        <P>
          The doli is not a replica or a stand-in. It is the image that receives worship at Kedarnath
          during the season and continues to receive it at Ukhimath through the winter. That continuity —
          the same object, the same priests, an unbroken daily ritual moved 2,000 metres down a valley
          and back again every year — is the thing worth understanding about how these shrines actually
          work.
        </P>

        <H2>The Spring Procession</H2>
        <P>
          The same journey runs in reverse in late April or early May, on a date declared at
          Mahashivratri. The doli leaves Ukhimath, halts at Phata and then Gaurikund, and reaches
          Kedarnath for the kapat opening. The spring version is much better attended — the season is
          beginning, the road is filling with pilgrims, and the mood is entirely different from the
          quiet, end-of-things feeling of November.
        </P>
        <Table
          head={['','Autumn descent','Spring ascent']}
          rows={[
            ['When','Bhai Dooj, November','Late April / early May'],
            ['Direction','Kedarnath → Ukhimath','Ukhimath → Kedarnath'],
            ['Halts','Rampur, Guptkashi','Phata, Gaurikund'],
            ['Crowds','Local, sparse','Large — the season is starting'],
            ['Feel','The valley closing down','The valley waking up'],
          ]}
        />

        <H2>If You Want to See It</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Book early.</strong> Accommodation along the route
          is shutting for winter in exactly the week you need it. This is the one thing that catches
          people out.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Confirm the date late.</strong> The closing date is
          declared on Vijayadashami and the procession follows it, but timings shift. Check in the week
          before.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Base, do not chase.</strong> Two or three nights at
          Guptkashi or Ukhimath and let the procession come to you. Following it from the top is a
          different kind of trip.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Dress for November at altitude.</strong> Guptkashi
          is mild; the upper route is not.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Stay on afterwards.</strong> You are already in the
          Kedar valley — Ukhimath, Chopta and Deoria Tal are right there, and the{' '}
          <Link href="/winter-char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>winter seats circuit</Link>{' '}
          starts from here.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Shri Badarinath Kedarnath Temple Committee','https://badrinath-kedarnath.gov.in/'],
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
        ]}/>

        <CTA
          title="See the doli yatra this November"
          blurb="Kedarnath closes on 11 November 2026. Rooms at Guptkashi and Ukhimath for that week need holding now, not in October."
          waMessage="Namaste! I want to see the Kedarnath Doli Yatra in November 2026. Please share the plan and availability."
        />

        <Related links={[
          ['Omkareshwar Ukhimath','/ukhimath'],
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Guptkashi Guide','/guptkashi-guide'],
          ['Panch Kedar Yatra','/panch-kedar-yatra'],
          ['Kedarnath Temple','/kedarnath-temple'],
          ['Char Dham Closing Dates 2026','/blog/char-dham-yatra-closing-dates-2026'],
        ]}/>
      </Article>
    </>
  );
}
