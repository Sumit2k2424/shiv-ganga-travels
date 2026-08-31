import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Triveni Ghat Rishikesh — Ganga Aarti Timings & Guide' },
  description: 'Rishikesh has two evening aartis and most visitors go to the wrong one. Triveni Ghat is the local one, free, around 6 PM in summer. Where to sit and when.',
  keywords: ['triveni ghat rishikesh','triveni ghat aarti timing','rishikesh ganga aarti','triveni ghat vs parmarth niketan','rishikesh aarti time','triveni ghat rishikesh guide','ganga aarti rishikesh timing'],
  alternates: { canonical: `${SITE.baseUrl}/triveni-ghat-rishikesh` },
  openGraph: {
    title: 'Triveni Ghat Rishikesh — Ganga Aarti Timings & Guide',
    description: 'Two aartis, two very different experiences. Which one to choose, and where to sit.',
    url: `${SITE.baseUrl}/triveni-ghat-rishikesh`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Triveni Ghat, Rishikesh — Ganga Aarti' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triveni Ghat Rishikesh — Ganga Aarti Timings & Guide',
    description: 'Two aartis, two very different experiences. Which to choose.',
    images: [{ url: '/opengraph-image', alt: 'Triveni Ghat Rishikesh' }],
  },
};

const FAQS = [
  { q:'What time is the Ganga Aarti at Triveni Ghat?',
    a:'Around 6 PM in summer and closer to 5:30 PM in winter, following sunset, and running roughly 30 to 45 minutes. There is a morning aarti too, at about 6 AM, which almost no visitor attends and which is quietly one of the better half-hours in Rishikesh. Times drift by fifteen minutes through the year and change on festival days.' },
  { q:'What is the difference between the Triveni Ghat and Parmarth Niketan aartis?',
    a:'They are genuinely different events. Parmarth Niketan at Ram Jhula is the famous one — structured, led by the ashram\'s students, with chanting, a large seated audience and a strong sense of performance. Triveni Ghat is the town\'s own aarti: less orchestrated, more local families, more people simply getting on with their own puja. Visitors chasing the photograph go to Parmarth. Visitors who want the ordinary evening devotion of a river town go to Triveni.' },
  { q:'Which one should I go to?',
    a:'If you have one evening, Parmarth Niketan is the more striking spectacle and the easier one to understand as an outsider. If you have two, or if you have already seen the big aarti at Har Ki Pauri in Haridwar, come to Triveni instead — it is the same river and a completely different feeling. If you are travelling with elderly parents, Triveni is easier: flat access, no footbridge crossing, less crush.' },
  { q:'Is there any entry fee or booking?',
    a:'No. Both aartis are free and open to everyone, with no ticket, no reserved seating and no booking. Anyone offering to sell you a seat is selling something that does not exist. Donations to the temple trust are voluntary and receipted.' },
  { q:'Why is it called Triveni — are three rivers really meeting?',
    a:'Triveni means the confluence of three, and the tradition holds that the Ganga, Yamuna and the mythical Saraswati meet here. Visibly you see one river. The Saraswati is the invisible third in this tradition, as at Prayagraj. Whether you take that literally or symbolically, it is why the ghat carries the significance it does and why pind daan and shraddh rituals are performed here.' },
  { q:'Can I bathe at Triveni Ghat?',
    a:'Yes, and many pilgrims do. The steps are proper bathing ghats and the water here is calmer than at Har Ki Pauri in Haridwar, which is canal-fed and much faster. That said it is still a Himalayan river — cold, with current, and deeper than it looks a few steps out. Stay on the steps and within the chains.' },
  { q:'How do I get to Triveni Ghat?',
    a:'It is in the main town, unlike Ram Jhula and Lakshman Jhula which are a few kilometres upriver. A vehicle can drop you close to the ghat road, which is the main practical advantage over the footbridge ghats — no crossing, no long walk. From Haridwar it is about 25 km and 40 to 55 minutes.' },
  { q:'What else is nearby?',
    a:'Bharat Mandir, the oldest temple in Rishikesh, is a short walk from the ghat and gets very few visitors. The main market is right there for puja items and food. Ram Jhula is about 3 km upriver, Lakshman Jhula a little further, and Neelkanth Mahadev is 32 km up into the hills.' },
];

export default function TriveniGhat() {
  const blocks = buildSchema({
    slug:'triveni-ghat-rishikesh',
    name:'Triveni Ghat, Rishikesh',
    description:'The principal bathing ghat in Rishikesh town and site of the daily Ganga Aarti, at the traditional confluence of the Ganga, Yamuna and Saraswati.',
    geo:[30.1069, 78.2947],
    types:['PlaceOfWorship','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Rishikesh','/rishikesh-tour-packages'],['Triveni Ghat','/triveni-ghat-rishikesh']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Rishikesh town · Free · Aarti twice daily" title="Triveni Ghat, Rishikesh">
        Rishikesh has <strong style={{ color:'#FFD166' }}>two evening aartis</strong> and most visitors
        only hear about one. Triveni is the town&apos;s own — around 6 PM in summer, 5:30 PM in winter.
      </Hero>

      <Crumbs trail={[['Rishikesh','/rishikesh-tour-packages'],['Triveni Ghat', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Triveni Ghat is Rishikesh's main bathing ghat and the site of its evening Ganga Aarti</strong>, held daily at sunset — roughly 6pm in summer, 5.30pm in winter, and free to attend. The name marks the confluence of the Ganga, Yamuna and the mythical Saraswati. Morning is the quieter time to bathe; the aarti is the crowded one, and worth arriving half an hour early for a seat on the steps.
        </AnswerBox>
        <P>
          Triveni Ghat is the main bathing ghat in Rishikesh town and the site of its daily Ganga Aarti.
          It is free, it happens twice a day, and it is the one most visitors miss because every
          itinerary points them at Parmarth Niketan instead. Both are worth seeing. They are not the same
          experience, and which suits you depends on what you came for.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎟️ Entry', 'Free'],
          ['🪔 Evening aarti', 'About 6 PM summer, 5:30 PM winter'],
          ['🌅 Morning aarti', 'About 6 AM — almost empty'],
          ['⏱️ Duration', '30–45 minutes'],
          ['📍 Location', 'Rishikesh main town'],
          ['🚗 Access', 'Vehicle drops close — no bridge crossing'],
          ['🛕 Nearby', 'Bharat Mandir, main market'],
          ['📍 From Haridwar', '25 km, 40–55 min'],
        ]}/>

        <H2>Triveni or Parmarth Niketan?</H2>
        <Table
          head={['','Triveni Ghat','Parmarth Niketan (Ram Jhula)']}
          rows={[
            ['Character', 'The town\'s own aarti, less orchestrated', 'Structured, led by ashram students'],
            ['Crowd', 'Local families, pilgrims doing their own puja', 'Large seated audience, many visitors'],
            ['Access', 'Vehicle drops near the ghat', 'Park and cross Ram Jhula on foot'],
            ['Photographs', 'Ordinary, intimate', 'The famous one'],
            ['Suits', 'Second evening, elderly parents, anyone wanting the local version', 'First visit, one evening only'],
            ['Cost', 'Free', 'Free'],
          ]}
        />
        <Note tone="good" title="If you only have one evening in Rishikesh">
          Go to Parmarth Niketan. It is the more legible spectacle for someone who has not seen an aarti
          before, and it is genuinely beautiful. Come to Triveni on a second evening, or if you have
          already seen the big one at{' '}
          <Link href="/har-ki-pauri-guide" style={{ color:'#15803D', fontWeight:700 }}>Har Ki Pauri</Link>{' '}
          and want something quieter.
        </Note>

        <H2>The Morning Nobody Attends</H2>
        <P>
          The 6 AM aarti at Triveni is the best-kept ordinary secret in Rishikesh. A handful of local
          worshippers, mist on the river, no crowd at all, and the same ritual performed with none of the
          evening&apos;s audience. If you are staying overnight and can manage an early start, it is
          worth more than another evening in the crush.
        </P>

        <H2>Why &quot;Triveni&quot;</H2>
        <P>
          Triveni means the meeting of three. Tradition holds that the Ganga, the Yamuna and the
          invisible Saraswati converge here, as at Prayagraj. What you see is one river; the third is a
          matter of faith rather than hydrology. That confluence is why the ghat carries the weight it
          does, and why pind daan and shraddh rituals for ancestors are performed on these steps.
        </P>
        <P>
          If you have come to Rishikesh as part of a Char Dham trip, this is the same water you will
          follow all the way up — the Ganga here, the Bhagirathi at{' '}
          <Link href="/haridwar-to-gangotri-distance" style={{ color:'var(--teal)', fontWeight:600 }}>Gangotri</Link>,
          and the Alaknanda on the road to Badrinath, meeting at Devprayag between them.
        </P>

        <H2>Practical Notes</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Arrive 30 minutes early</strong> for the evening
          aarti in season. Less pressure than Har Ki Pauri, but the good steps still go first.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Shoes off</strong> before the steps. Minding stalls
          charge a few rupees.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Bathing is fine</strong> — calmer water than
          Haridwar, but cold and with real current. Stay on the steps.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Watch your belongings.</strong> Smaller crowd than
          Har Ki Pauri, same advice.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Bharat Mandir</strong> is a short walk and is the
          oldest temple in Rishikesh. Ten minutes, and almost nobody goes.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Rishikesh','https://uttarakhandtourism.gov.in/destination/rishikesh'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="Rishikesh in an evening, or a day"
          blurb="Tell us which aarti you want and we will get you to the right bank at the right time — the mistake most visitors make is arriving on the wrong side of the river."
          waMessage="Namaste! I want to visit Triveni Ghat and Rishikesh. Please share the options."
        />

        <Related links={[
          ['Haridwar to Rishikesh Taxi','/haridwar-to-rishikesh-taxi'],
          ['Neelkanth Mahadev Temple','/neelkanth-mahadev-temple'],
          ['Rishikesh Tour Packages','/rishikesh-tour-packages'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Rishikesh Adventure Guide','/blog/rishikesh-adventure-guide'],
          ['Char Dham from Delhi','/char-dham-yatra-from-delhi'],
        ]}/>
      </Article>
    </>
  );
}
