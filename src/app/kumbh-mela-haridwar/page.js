import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

// Ardh Kumbh dates are well sourced. Shahi Snan dates are NOT yet published by
// the Mela administration — do not invent them. Add them here when the Mela
// Adhikari announces, and the page will pick them up.
const KUMBH = {
  type: 'Ardh Kumbh Mela',
  city: 'Haridwar',
  start: '14 January 2027',
  end: '20 April 2027',
  startOccasion: 'Paush Purnima',
  endOccasion: 'Mahashivratri',
  shahiSnanAnnounced: false,
};

export const metadata = {
  title: { absolute: 'Haridwar Kumbh Mela 2027 — Dates, Stay & How to Plan' },
  description: 'Ardh Kumbh Mela at Haridwar runs 14 January to 20 April 2027. Bathing at Brahmakund, why to book accommodation now, and how the city changes.',
  keywords: ['haridwar kumbh mela','kumbh mela 2027','ardh kumbh mela haridwar','haridwar kumbh 2027 dates','kumbh mela haridwar accommodation','shahi snan haridwar','kumbh mela brahmakund','haridwar kumbh booking'],
  alternates: { canonical: `${SITE.baseUrl}/kumbh-mela-haridwar` },
  openGraph: {
    title: 'Haridwar Kumbh Mela 2027 — Dates, Stay & How to Plan',
    description: 'Ardh Kumbh runs 14 January to 20 April 2027. What changes in the city, and why accommodation goes early.',
    url: `${SITE.baseUrl}/kumbh-mela-haridwar`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Haridwar Ardh Kumbh Mela 2027 — dates and planning guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haridwar Kumbh Mela 2027 — Dates, Stay & How to Plan',
    description: 'Ardh Kumbh runs 14 January to 20 April 2027.',
    images: [{ url: '/opengraph-image', alt: 'Haridwar Kumbh Mela 2027' }],
  },
};

const FAQS = [
  { q:'When is the next Kumbh Mela in Haridwar?',
    a:'The Ardh Kumbh Mela runs at Haridwar from 14 January to 20 April 2027, opening on Paush Purnima and closing on Mahashivratri. Ardh Kumbh means half Kumbh and falls roughly every six years at Haridwar and Prayagraj, sitting between the twelve-year Purna Kumbh cycles. Haridwar last held a Purna Kumbh in 2021.' },
  { q:'What are the Shahi Snan dates for 2027?',
    a:'They have not been published yet. The royal bathing dates are set by the Mela administration and the akharas, usually announced several months before the Mela opens, and they follow specific astrological conjunctions rather than a fixed calendar. Anyone quoting you confirmed 2027 Shahi Snan dates today is guessing. We will list them here when they are official — and if you are planning around a specific bathing day, that is exactly the detail worth waiting for before booking non-refundable travel.' },
  { q:'Why is the Kumbh held at Haridwar?',
    a:'Because of Brahmakund at Har Ki Pauri. Tradition holds that a drop of amrit, the nectar of immortality, fell here during the churning of the ocean — one of four places where that happened, the others being Prayagraj, Nashik and Ujjain. The Kumbh rotates between exactly those four cities for that reason. Bathing at Brahmakund during the Mela is the whole point of coming.' },
  { q:'How far in advance should I book accommodation?',
    a:'Six to twelve months, and that is not a sales line. Haridwar has a finite number of rooms and a Kumbh brings crowds measured in millions across the season, with enormous peaks on the main bathing days. Rooms that cost ₹1,200 in an ordinary October will not be available at any price on a Shahi Snan date if you start looking in December. If you are set on 2027, start now.' },
  { q:'Can I drive into Haridwar during the Mela?',
    a:'Not in the way you normally would. During the Mela the administration imposes extensive vehicle restrictions, one-way systems and parking zones well outside the city, with shuttle arrangements to the ghat areas. On peak bathing days the central area is effectively pedestrian. Plan on walking considerable distances and arriving a day early rather than driving in on the morning of a Snan.' },
  { q:'Is the Kumbh suitable for elderly pilgrims or families with small children?',
    a:'On ordinary Mela days, yes, and it is a remarkable thing to witness. On the main bathing days, we would be honest and say think carefully. The crowd density at Har Ki Pauri on a Shahi Snan is among the highest anywhere in the world, movement is slow and controlled, and getting separated from your group is a real risk. Many families come during the Mela but deliberately avoid the peak dates.' },
  { q:'What is the difference between Ardh Kumbh, Purna Kumbh and Maha Kumbh?',
    a:'Purna Kumbh is the full Kumbh, held every twelve years at each of the four cities. Ardh Kumbh is the half Kumbh, falling roughly six years between them, and is held at Haridwar and Prayagraj. Maha Kumbh is the rarest, at Prayagraj after twelve Purna Kumbh cycles. The 2027 Haridwar event is an Ardh Kumbh — smaller than a Purna Kumbh but still one of the largest gatherings on earth.' },
  { q:'Can you arrange transport and stay for the Kumbh?',
    a:'Yes, and this is a booking to make early rather than late. We are based at Bhupatwala, which is inside the Mela area, so we know how the road restrictions actually work each season rather than reading about them. Tell us your dates as soon as you have them and we will hold rooms while there are still rooms to hold.' },
];

export default function KumbhMelaHaridwar() {
  const blocks = buildSchema({
    slug:'kumbh-mela-haridwar',
    name:'Haridwar Kumbh Mela 2027',
    description:'Guide to the Ardh Kumbh Mela at Haridwar, 14 January to 20 April 2027 — dates, bathing at Brahmakund, accommodation and how the city changes during the Mela.',
    types:null, faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Kumbh Mela','/kumbh-mela-haridwar']],
  });

  const event = {
    '@context':'https://schema.org', '@type':'Event',
    name:'Ardh Kumbh Mela, Haridwar 2027',
    description:'Ardh Kumbh Mela at Haridwar, Uttarakhand — a religious gathering centred on ritual bathing at Brahmakund, Har Ki Pauri.',
    startDate:'2027-01-14', endDate:'2027-04-20',
    eventStatus:'https://schema.org/EventScheduled',
    eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
    isAccessibleForFree:true,
    location:{
      '@type':'Place', name:'Har Ki Pauri, Haridwar',
      address:{ '@type':'PostalAddress', addressLocality:'Haridwar', addressRegion:'Uttarakhand', addressCountry:'IN' },
      geo:{ '@type':'GeoCoordinates', latitude:29.95778, longitude:78.17083 },
    },
    image:[`${SITE.baseUrl}/opengraph-image`],
    // Deliberately no `url` on the organizer. Each Mela gets its own
    // administration appointed by the state, and its own site, which goes dead
    // between Melas — the 2021 one already has. The next Haridwar Kumbh is
    // around 2033, so there is no standing URL to point at and guessing one
    // would age worse than omitting it. Same rule as the bathing dates above.
    organizer:{ '@type':'Organization', name:'Mela Administration, Haridwar' },
  };

  return (
    <>
      <SchemaBlocks blocks={[...blocks, event]}/>

      <Hero eyebrow={`${KUMBH.type} · ${KUMBH.city}`} title="Haridwar Kumbh Mela 2027">
        <strong style={{ color:'#FFD166' }}>{KUMBH.start} to {KUMBH.end}</strong> — opening on{' '}
        {KUMBH.startOccasion} and closing on {KUMBH.endOccasion}. If you intend to come, the thing to
        sort out first is where you will sleep.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Kumbh Mela', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>The Haridwar Kumbh Mela is held every 12 years, with an Ardh Kumbh at the 6-year midpoint.</strong> The last full Haridwar Kumbh was in 2021, which places the next around 2033. Dates are set by the position of Jupiter in Aquarius and the Sun in Aries, and the Shahi Snan bathing days at Har Ki Pauri are the ones that draw the crowds. Outside Kumbh years, Somvati Amavasya and Kartik Purnima are the big bathing days.
        </AnswerBox>
        <P>
          The Ardh Kumbh Mela comes to Haridwar from <strong style={{ color:'var(--navy)' }}>{KUMBH.start}
          to {KUMBH.end}</strong>, opening on Paush Purnima and closing on Mahashivratri. Ardh Kumbh is
          the half Kumbh, falling roughly every six years between the twelve-year Purna Kumbh cycles, and
          it still draws crowds measured in millions. Our office is at Bhupatwala, inside the Mela area,
          so what follows is written from the inside of a city that has done this before.
        </P>

        <H2>The Dates</H2>
        <Table
          head={['','Detail']}
          rows={[
            ['Event', `${KUMBH.type}, ${KUMBH.city}`],
            ['Opens', `${KUMBH.start} — ${KUMBH.startOccasion}`],
            ['Closes', `${KUMBH.end} — ${KUMBH.endOccasion}`],
            ['Duration', 'About 14 weeks'],
            ['Main bathing site', 'Brahmakund, Har Ki Pauri'],
            ['Entry', 'Free. It is a public religious gathering.'],
          ]}
        />

        <Note tone="warn" title="Nobody knows the Shahi Snan dates yet — including us">
          The royal bathing dates are fixed by the Mela administration together with the akharas, follow
          specific astrological conjunctions, and are normally announced some months ahead. They are not
          published for 2027 at the time of writing. Several websites already list confident 2027 Shahi
          Snan dates; those are guesses. If your plans depend on being present for a particular bathing
          day, wait for the official announcement before booking anything non-refundable. We will add
          them to this page when they are real.
        </Note>

        <H2>Why Haridwar</H2>
        <P>
          Brahmakund, the bathing tank at the centre of{' '}
          <Link href="/har-ki-pauri-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Har Ki Pauri</Link>,
          is where tradition holds a drop of amrit fell during the churning of the ocean. Four places
          received a drop — Haridwar, Prayagraj, Nashik and Ujjain — and the Kumbh rotates between
          exactly those four for that reason. It is not a festival that happens to be held here. The
          location is the entire basis of it.
        </P>
        <Table
          head={['Type','Frequency','Where']}
          rows={[
            ['Ardh Kumbh', 'About every 6 years', 'Haridwar and Prayagraj'],
            ['Purna Kumbh', 'Every 12 years at each city', 'All four Kumbh cities in rotation'],
            ['Maha Kumbh', 'After 12 Purna Kumbh cycles', 'Prayagraj only'],
          ]}
        />
        <P>
          Haridwar last held a Purna Kumbh in 2021. The 2027 event is an Ardh Kumbh — smaller than a
          Purna Kumbh, and still among the largest gatherings of people anywhere on earth.
        </P>

        <H2>Book Accommodation Absurdly Early</H2>
        <P>
          This is the practical heart of the page. Haridwar has a fixed number of rooms and a Kumbh
          multiplies demand for fourteen weeks, with extreme spikes on the main bathing days. What
          happens every Kumbh is predictable: rooms that go for ₹1,200 in an ordinary month become
          unavailable at any price, dharamshalas fill months ahead, and pilgrims who left it late end up
          in Roorkee or Rishikesh commuting in.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Six to twelve months ahead</strong> for the Mela
          period generally.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>As early as possible</strong> if you want a
          specific bathing date — though see the caution above about those dates not being announced.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Consider Bhupatwala or Kankhal</strong> rather than
          the streets immediately around the ghat. Quieter, easier to get in and out of, still walkable
          on ordinary days.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Tent cities</strong> are set up by the
          administration for large Melas. Basic but organised, and worth knowing about as a fallback.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Have a written confirmation with the property
          named.</strong> Kumbh seasons attract the same booking frauds as the yatra — see our{' '}
          <Link href="/char-dham-yatra-scams" style={{ color:'var(--teal)', fontWeight:600 }}>scams page</Link>.</LI>
        </ul>

        <H2>How the City Actually Changes</H2>
        <P>
          If you have only visited Haridwar in an ordinary season, the Mela version is a different city.
        </P>
        <Table
          head={['','Ordinary day','During the Mela','On a main bathing day']}
          rows={[
            ['Vehicle access', 'Cars reach most of the town', 'Restricted zones, one-way systems', 'Central area effectively closed'],
            ['Parking', 'Near the ghat area', 'Designated lots outside the centre', 'Far out, with shuttles'],
            ['Walking', 'Optional', 'Expected', 'The only way'],
            ['Har Ki Pauri', 'Busy at aarti', 'Crowded most of the day', 'Density measured in lakhs'],
            ['Accommodation', 'Walk-in possible', 'Booked out', 'Booked out months ahead'],
          ]}
        />
        <Note tone="alert" title="On the peak days, be realistic about who you bring">
          The crowd density at Brahmakund on a major bathing day is among the highest anywhere in the
          world. Movement is slow and directed by police, phones lose signal, and separated family
          members can take hours to find each other. Agree a meeting point and a time before you go in.
          Many families deliberately visit during the Mela but away from the peak dates, and get a better
          experience for it.
        </Note>

        <H2>Coming for the Mela, Seeing the Rest</H2>
        <P>
          Fourteen weeks is a long window, and most of it is not a peak bathing day. If you are here for
          several days, the town has more than the ghat:{' '}
          <Link href="/mansa-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Mansa Devi</Link>,{' '}
          <Link href="/chandi-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Chandi Devi</Link>,{' '}
          <Link href="/daksh-mahadev-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Daksh Mahadev at Kankhal</Link>{' '}
          and{' '}
          <Link href="/maya-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Maya Devi</Link>.
          Our{' '}
          <Link href="/haridwar-sightseeing-places" style={{ color:'var(--teal)', fontWeight:600 }}>sightseeing itinerary</Link>{' '}
          sequences them around the crowds.
        </P>
        <P>
          Worth noting on timing: the Mela runs January to April 2027, and the Char Dham season opens in
          late April. Pilgrims sometimes combine the two — Kumbh in the spring, then the yatra as the
          doors open. If that appeals, tell us early, because it is a long booking to assemble.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
        ]}/>

        <CTA
          title="Planning for Kumbh 2027?"
          blurb="We are based inside the Mela area at Bhupatwala. Tell us your window now — rooms and vehicles for a Kumbh are booked in months, not weeks."
          waMessage="Namaste! I want to plan for the Haridwar Ardh Kumbh Mela 2027. Please advise on stay and transport."
        />

        <Related links={[
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Places to Visit in Haridwar','/haridwar-sightseeing-places'],
          ['Haridwar Hotels','/haridwar-hotels'],
          ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
          ['How to Reach Haridwar','/how-to-reach-haridwar'],
          ['Haridwar Tour Packages','/haridwar-tour-packages'],
          ['Char Dham Yatra','/char-dham-yatra'],
        ]}/>
      </Article>
    </>
  );
}
