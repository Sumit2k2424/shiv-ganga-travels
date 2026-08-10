import Link from 'next/link';
import { SITE } from '@/data/packages';
import { PLACES } from '@/data/haridwarPlaces';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

const S = PLACES['shantikunj'];

export const metadata = {
  title: { absolute: 'Shantikunj Haridwar — Visiting, Stay & Timings Guide' },
  description: 'Shantikunj is a working ashram, not a tourist temple. Free entry and free sadhak accommodation by prior registration. What to expect, from 200 metres away.',
  keywords: ['shantikunj haridwar','shantikunj ashram','gayatri pariwar haridwar','shantikunj room booking','shantikunj timings','shantikunj haridwar stay','all world gayatri pariwar','shriram sharma acharya'],
  alternates: { canonical: `${SITE.baseUrl}/shantikunj-haridwar-guide` },
  openGraph: {
    title: 'Shantikunj Haridwar — Visiting, Stay & Timings Guide',
    description: 'A working ashram with a daily discipline, not a sightseeing stop. Free entry, free sadhak stay by registration.',
    url: `${SITE.baseUrl}/shantikunj-haridwar-guide`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Shantikunj, Gayatri Pariwar headquarters, Haridwar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shantikunj Haridwar — Visiting, Stay & Timings Guide',
    description: 'A working ashram, not a sightseeing stop. Free entry, free sadhak stay by registration.',
    images: [{ url: '/opengraph-image', alt: 'Shantikunj Haridwar | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What are Shantikunj visiting hours?',
    a:'Broadly 5 AM to 8 PM. The ashram runs to a daily schedule rather than tourist opening hours — the morning yagya and the evening sessions are the fixed points of the day, and visitors are welcome to attend them. Entry is free and there is no ticket counter. Arrive in the morning if you want to see the place working rather than resting.' },
  { q:'Can I stay at Shantikunj, and what does it cost?',
    a:'Yes. Accommodation for sadhaks is provided free, but it must be arranged in advance through the ashram — you cannot turn up at the gate with luggage and expect a room, particularly in yatra season. Rooms are simple and shared, the food is satvik ashram food served at fixed hours, and residents are expected to take part in the daily programme. It is not a hotel and it is a mistake to treat it as one.' },
  { q:'How do I reach Shantikunj from Haridwar station?',
    a:'It is about 6 km on the Sapt Sarovar road towards Rishikesh, roughly 20 to 30 minutes. A shared auto costs a few rupees, a private auto or taxi ₹200 to ₹350. Our office is on Saptrishi Road right by Gate No. 1, so if you are booking a car with us this is a road our drivers use every single day.' },
  { q:'What actually happens at Shantikunj?',
    a:'It is the headquarters of the All World Gayatri Pariwar, founded by Pandit Shriram Sharma Acharya in 1971. The core of it is the Gayatri Mantra and a programme of yagya, self-discipline and social reform work. There are training camps, a publishing operation, the Dev Sanskriti Vishwavidyalaya nearby, and a steady flow of sadhaks on short residential programmes. The Gayatri Mata temple and the Sapt Rishi idols are what most day visitors come to see.' },
  { q:'Is Shantikunj suitable for a short sightseeing stop?',
    a:'It is, but manage your expectations. This is a working spiritual institution with a daily discipline, and it is not arranged for tourists — there is no guided circuit, no ticket, no gift shop experience. An hour walking the grounds and sitting in the temple is a genuinely calming stop between the noise of Har Ki Pauri and the road to Rishikesh. If you are looking for spectacle, the hill temples will serve you better.' },
  { q:'What should I wear and how should I behave?',
    a:'Modest dress, shoulders and legs covered, shoes off in the temple areas. No smoking, no alcohol, no non-vegetarian food anywhere on the campus. Photography is fine on the grounds but be careful around people in sessions or meditation. The general rule is to fit into what is happening rather than expecting it to accommodate you.' },
  { q:'Is Shantikunj connected to Patanjali Yogpeeth?',
    a:'No, they are separate organisations with different founders, different teachings and different campuses. Shantikunj is the Gayatri Pariwar, founded by Shriram Sharma Acharya in 1971 on the Sapt Sarovar road. Patanjali Yogpeeth is Baba Ramdev\'s institution at Bahadrabad, on the other side of Haridwar. Visitors conflate them constantly, and asking a rickshaw driver for "the ashram" will get you to whichever is closer.' },
];

export default function ShantikunjGuide() {
  const blocks = buildSchema({
    slug:'shantikunj-haridwar-guide',
    name:'Shantikunj, Haridwar',
    description:'Headquarters of the All World Gayatri Pariwar on the Sapt Sarovar road, Haridwar. Founded 1971 by Pandit Shriram Sharma Acharya. Free entry; free sadhak accommodation by prior registration.',
    geo:[29.9896, 78.1927],
    types:['PlaceOfWorship','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Shantikunj','/shantikunj-haridwar-guide']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Sapt Sarovar Road · ${S.distanceFromHarKiPauri}`} title="Shantikunj, Haridwar">
        A <strong style={{ color:'#FFD166' }}>working ashram, not a tourist temple</strong>. Free to
        enter, open roughly 5 AM to 8 PM, with free accommodation for sadhaks arranged in advance.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Shantikunj', null]]}/>

      <Article>
        <Updated/>

        <P>
          Shantikunj is the headquarters of the All World Gayatri Pariwar, on the Sapt Sarovar road about
          6 km from Har Ki Pauri. Entry is free, the grounds are open roughly {S.darshan}, and
          accommodation for sadhaks is provided at no charge by prior arrangement. We should declare an
          interest before going further: our office sits on Saptrishi Road at Gate No. 1, so this is the
          road we drive several times a day and the ashram our pilgrims most often ask us about.
        </P>

        <Note tone="warn" title="The one thing to understand before you go">
          This is a functioning spiritual institution running to a daily discipline, not an attraction
          arranged for visitors. There is no ticket, no guided circuit, and no schedule built around
          tourists. You are welcome — genuinely welcome — but the expectation is that you fit in with
          what is happening rather than the other way round. Visitors who arrive expecting a sightseeing
          experience tend to leave disappointed, and it is not the ashram&apos;s fault.
        </Note>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎟️ Entry', 'Free. No ticket counter.'],
          ['🕐 Hours', S.darshan],
          ['📍 Distance', `${S.distanceFromHarKiPauri}, 20–30 min`],
          ['🛏️ Stay', 'Free for sadhaks, by prior registration only'],
          ['🍲 Food', 'Satvik, served at fixed hours'],
          ['👕 Dress', 'Modest. Shoulders and legs covered'],
          ['🚭 Rules', 'No smoking, alcohol or non-veg on campus'],
          ['⏱️ Day visit', 'About an hour'],
        ]}/>

        <H2>What Shantikunj Is</H2>
        <P>
          {S.why}
        </P>
        <P>
          The work centres on the Gayatri Mantra, a programme of yagya and personal discipline, and a
          long-running social reform agenda — the Pariwar has been unusually active on caste reform,
          women officiating at yagyas, and rural education. There is a publishing operation, residential
          training camps that run through the year, and the Dev Sanskriti Vishwavidyalaya nearby. For a
          day visitor, the Gayatri Mata temple and the Sapt Rishi idols are the focus.
        </P>

        <H2>Staying There</H2>
        <P>
          Free accommodation is one of the things Shantikunj is known for, and it is genuine — but the
          conditions matter and they are frequently misreported:
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Arrange it in advance.</strong> Contact the ashram
          directly before you travel. Turning up at the gate with bags, particularly in Char Dham season,
          is how people end up looking for a hotel at 9 PM.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>It is for sadhaks, not tourists.</strong> The
          accommodation exists to support people undertaking the ashram&apos;s programmes. Using it as
          free lodging while you sightsee is not the arrangement.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Rooms are simple and often shared.</strong> Clean,
          basic, no frills. Meals are at fixed hours and you eat what is served.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>You join the daily routine.</strong> Early mornings,
          the yagya, the sessions. That is the point of being there.</LI>
        </ul>
        <Note tone="info" title="If you need a hotel instead">
          Plenty of pilgrims want to visit Shantikunj but need a normal hotel to sleep in, especially
          travelling with family. Bhupatwala, the area around the ashram, has a good range of pilgrim
          hotels and is quieter than the streets around Har Ki Pauri. We can arrange rooms here as part of
          a Haridwar stay — ask when you enquire.
        </Note>

        <H2>Shantikunj or Patanjali? They Are Not the Same</H2>
        <P>
          This confusion comes up almost daily, so it is worth stating plainly.
        </P>
        <Table
          head={['','Shantikunj','Patanjali Yogpeeth']}
          rows={[
            ['Organisation','All World Gayatri Pariwar','Patanjali / Baba Ramdev'],
            ['Founded','1971, Pandit Shriram Sharma Acharya','2006'],
            ['Location','Sapt Sarovar road, 6 km from Har Ki Pauri','Bahadrabad, other side of Haridwar'],
            ['Focus','Gayatri Mantra, yagya, social reform','Yoga, ayurveda, treatment and products'],
            ['Visit for','Quiet, ritual, spiritual training','Yoga sessions, ayurvedic treatment'],
          ]}
        />
        <P>
          They are roughly 15 km apart and ask a rickshaw driver for &quot;the ashram&quot; and you will
          get whichever is nearer. Name the one you want.
        </P>

        <H2>Getting There</H2>
        <P>
          Sapt Sarovar road, heading out of Haridwar towards Rishikesh. Shared autos run the route for a
          few rupees; a private auto or taxi is ₹200 to ₹350 from the station or Har Ki Pauri. It sits
          naturally on the way out of town, so the efficient move is to fold it into a Rishikesh day
          rather than making a separate trip — see our{' '}
          <Link href="/haridwar-to-rishikesh-taxi" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar to Rishikesh day hire</Link>,
          which passes the gate.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="We are on this road every day"
          blurb="Our office is at Saptrishi Road by Shantikunj Gate No. 1. Ask us about a car, a Bhupatwala hotel, or just what the ashram is like this week."
          waMessage="Namaste! I want to visit Shantikunj in Haridwar. Please share travel and stay options."
        />

        <Related links={[
          ['Haridwar Sightseeing','/haridwar-sightseeing-places'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Haridwar to Rishikesh Taxi','/haridwar-to-rishikesh-taxi'],
          ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
          ['Haridwar Tour Packages','/haridwar-tour-packages'],
          ['Contact Us','/contact'],
        ]}/>
      </Article>
    </>
  );
}
