import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Patanjali Yogpeeth Haridwar — Visiting Guide' },
  description: 'Patanjali Yogpeeth is at Bahadrabad, 20 km from Har Ki Pauri. What you can actually visit, and why treatment needs arranging well in advance.',
  keywords: ['patanjali yogpeeth haridwar','patanjali haridwar','patanjali yogpeeth address','patanjali ayurveda treatment haridwar','baba ramdev ashram haridwar','patanjali yogpeeth visiting','patanjali wellness centre'],
  alternates: { canonical: `${SITE.baseUrl}/patanjali-yogpeeth-haridwar` },
  openGraph: {
    title: 'Patanjali Yogpeeth Haridwar — Visiting & Treatment Guide',
    description: 'At Bahadrabad, 20 km from Har Ki Pauri. What you can visit, and what needs arranging first.',
    url: `${SITE.baseUrl}/patanjali-yogpeeth-haridwar`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Patanjali Yogpeeth, Bahadrabad, Haridwar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patanjali Yogpeeth Haridwar — Visiting & Treatment Guide',
    description: 'At Bahadrabad, 20 km from Har Ki Pauri. What to arrange first.',
    images: [{ url: '/opengraph-image', alt: 'Patanjali Yogpeeth Haridwar' }],
  },
};

const FAQS = [
  { q:'Where is Patanjali Yogpeeth and how far is it from Haridwar?',
    a:'At Bahadrabad, on the Haridwar–Delhi highway roughly 20 km from Har Ki Pauri, which is about 30 to 40 minutes by road. It is on the opposite side of Haridwar from Shantikunj and the Rishikesh road, so the two are not near each other despite both being described as "the ashram" by rickshaw drivers.' },
  { q:'Can anyone just turn up and visit?',
    a:'You can visit the campus and see the scale of it, and the shops and food court are open to the public. What you cannot do is walk in and expect a consultation, a treatment slot or accommodation. Anything involving the wellness or treatment side needs arranging in advance directly with Patanjali. Turning up hoping to be seen is the single most common wasted trip we hear about.' },
  { q:'How do I book ayurvedic treatment there?',
    a:'Through Patanjali directly — their wellness and treatment programmes have their own admission process, their own waiting lists and their own medical assessment. We are a travel operator, not an agent for them, and we would be misleading you if we implied we could secure a slot. What we can do is get you there and arrange your stay in Haridwar around whatever dates they give you.' },
  { q:'Is Patanjali the same as Shantikunj?',
    a:'No, and people conflate them constantly. Shantikunj is the All World Gayatri Pariwar, founded 1971 by Pandit Shriram Sharma Acharya, on the Sapt Sarovar road towards Rishikesh — its focus is the Gayatri Mantra, yagya and social reform. Patanjali is Baba Ramdev and Acharya Balkrishna\'s institution at Bahadrabad, focused on yoga, ayurveda and manufacturing. They are about 15 km apart and completely separate organisations.' },
  { q:'Is it worth visiting if I am not there for treatment?',
    a:'Honestly, it depends what interests you. It is an impressive campus and a significant modern institution, and if the scale of contemporary Indian ayurveda and yoga is something you want to see, an hour or two there is interesting. If you are in Haridwar for two days on a pilgrimage, we would put Har Ki Pauri, Kankhal and the hill temples well ahead of it. It is not a religious site in the way the rest of Haridwar is.' },
  { q:'Are there yoga sessions visitors can join?',
    a:'Patanjali runs yoga programmes and camps, but they operate to their own schedule and registration process rather than as drop-in classes for tourists. Check with them directly before planning a trip around attending one. Rishikesh, 25 km away, is far better set up for visitors who simply want to join a yoga class at short notice.' },
  { q:'How do I get there from Haridwar?',
    a:'Any taxi or auto — it is a straightforward 20 km on the Delhi highway with no hills involved. Shared autos and buses run the route cheaply. If you are combining it with anything else in Haridwar, note that it is in the opposite direction from Shantikunj and the Rishikesh road, so plan it as its own half-day rather than a stop on the way to somewhere.' },
  { q:'Can I buy Patanjali products there?',
    a:'Yes, there are retail outlets on the campus and a food court, and many visitors come primarily for that. Prices are broadly what you would pay at any Patanjali store elsewhere in India — do not expect factory pricing. It is a convenient stop if you want a range that a local shop may not stock.' },
];

export default function PatanjaliYogpeeth() {
  const blocks = buildSchema({
    slug:'patanjali-yogpeeth-haridwar',
    name:'Patanjali Yogpeeth, Haridwar',
    description:'Yoga and ayurveda institution at Bahadrabad, Haridwar, founded by Baba Ramdev and Acharya Balkrishna. About 20 km from Har Ki Pauri.',
    geo:[29.8760, 78.0470],
    types:['TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Patanjali Yogpeeth','/patanjali-yogpeeth-haridwar']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Bahadrabad · 20 km from Har Ki Pauri" title="Patanjali Yogpeeth, Haridwar">
        Campus and shops are open to anyone.{' '}
        <strong style={{ color:'#FFD166' }}>Treatment and yoga programmes are not walk-in</strong> —
        they need arranging with Patanjali directly, well before you travel.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Patanjali Yogpeeth', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Patanjali Yogpeeth is about 20km from Haridwar on the Delhi–Haridwar highway at Bahadrabad</strong>, and is one of India's largest yoga and Ayurveda institutions. It runs a hospital, research centre and treatment facilities, and visitors can tour the campus and the herbal gardens. Most Haridwar itineraries fit it in as a half-day, usually paired with the drive in or out rather than as a separate trip.
        </AnswerBox>
        <P>
          Patanjali Yogpeeth sits at Bahadrabad on the Haridwar–Delhi highway, about 20 km and half an
          hour from Har Ki Pauri. It is a yoga and ayurveda institution founded by Baba Ramdev and
          Acharya Balkrishna, and it is one of the more visited addresses in the district. We should be
          clear about our role: we can drive you there and arrange your stay in Haridwar. We are not
          agents for Patanjali and cannot secure you a treatment slot.
        </P>

        <Note tone="warn" title="The wasted trip we hear about most">
          Families arrive in Haridwar assuming they can turn up at Patanjali and be seen for a
          consultation or admitted for treatment. You cannot. The wellness and treatment side has its own
          admission process, assessment and waiting lists, run entirely by Patanjali. Contact them and
          get dates <em>before</em> you book travel, not after.
        </Note>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['📍 Location', 'Bahadrabad, on the Delhi highway'],
          ['📏 From Har Ki Pauri', 'About 20 km, 30–40 min'],
          ['🎟️ Campus visit', 'Open to the public'],
          ['🏥 Treatment', 'By prior arrangement with Patanjali only'],
          ['🧘 Yoga programmes', 'Own schedule and registration'],
          ['🛍️ Retail & food court', 'Open to visitors'],
          ['⏱️ Allow', '1–2 hours for a look around'],
          ['🚗 Getting there', 'Taxi, auto, shared auto or bus'],
        ]}/>

        <H2>Patanjali and Shantikunj Are Not the Same Place</H2>
        <P>
          This confusion costs visitors half a day with some regularity, because both get called
          &quot;the ashram&quot; and they are on opposite sides of Haridwar.
        </P>
        <Table
          head={['','Patanjali Yogpeeth','Shantikunj']}
          rows={[
            ['Founded by', 'Baba Ramdev and Acharya Balkrishna', 'Pandit Shriram Sharma Acharya, 1971'],
            ['Organisation', 'Patanjali', 'All World Gayatri Pariwar'],
            ['Where', 'Bahadrabad, Delhi highway side', 'Sapt Sarovar road, Rishikesh side'],
            ['Distance apart', '—', 'Roughly 15 km, opposite directions'],
            ['Focus', 'Yoga, ayurveda, treatment, manufacturing', 'Gayatri Mantra, yagya, social reform'],
            ['Stay', 'Treatment admission only', 'Free sadhak accommodation by registration'],
          ]}
        />
        <P>
          If you want the quiet, ritual, live-in ashram experience, that is{' '}
          <Link href="/shantikunj-haridwar-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Shantikunj</Link>,
          and our office is at its Gate No. 1. If you want ayurvedic treatment or Patanjali products, that
          is Bahadrabad. Name the one you mean when you ask a driver.
        </P>

        <H2>Is It Worth Your Time?</H2>
        <P>
          A straight answer, since we have no stake in it either way. If you have a specific interest in
          ayurveda, or a treatment appointment, or you want to see the scale of a modern Indian wellness
          institution, it is genuinely interesting and an hour or two well spent.
        </P>
        <P>
          If you are in Haridwar for two days on a pilgrimage, we would put{' '}
          <Link href="/har-ki-pauri-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Har Ki Pauri</Link>,{' '}
          <Link href="/daksh-mahadev-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Kankhal</Link>{' '}
          and the two hill temples ahead of it without hesitation. Patanjali is a modern campus, not an
          ancient site, and it does not carry the religious weight of the rest of the town. That is not a
          criticism — it is simply a different kind of visit, and worth knowing before you spend half a
          day on it.
        </P>

        <H2>Where It Fits in a Haridwar Trip</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Treat it as its own half day.</strong> It is on the
          Delhi side, away from everything else worth seeing.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Good on an arrival or departure day</strong> if you
          are driving in from or out towards Delhi — it is roughly on that road.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Do not pair it with Shantikunj</strong> expecting
          them to be close. Opposite ends of the district.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>For drop-in yoga, go to Rishikesh instead</strong> —
          25 km away and far better set up for visitors who want a class tomorrow morning.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="Getting to Bahadrabad"
          blurb="We will drive you and wait, or fold it into an arrival day from Delhi. Sort your treatment dates with Patanjali first — then tell us and we will build the trip around them."
          waMessage="Namaste! I want to visit Patanjali Yogpeeth in Haridwar. Please share transport and stay options."
        />

        <Related links={[
          ['Shantikunj Guide','/shantikunj-haridwar-guide'],
          ['Places to Visit in Haridwar','/haridwar-sightseeing-places'],
          ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
          ['Haridwar Hotels','/haridwar-hotels'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Haridwar to Delhi Taxi','/haridwar-to-delhi-taxi'],
        ]}/>
      </Article>
    </>
  );
}
