import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Hotels in Haridwar — Which Area to Stay In, by Budget' },
  description: 'Where you sleep in Haridwar matters more than the star rating. Har Ki Pauri, Bhupatwala, Kankhal and the highway compared, with honest price bands.',
  keywords: ['hotels in haridwar','haridwar hotels near har ki pauri','where to stay in haridwar','haridwar hotel booking','bhupatwala hotels','kankhal hotels haridwar','budget hotels haridwar','dharamshala in haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/haridwar-hotels` },
  openGraph: {
    title: 'Hotels in Haridwar — Which Area to Stay In, by Budget',
    description: 'The area decides your trip more than the star rating does. Four areas compared honestly.',
    url: `${SITE.baseUrl}/haridwar-hotels`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Where to stay in Haridwar — hotel areas compared' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels in Haridwar — Which Area to Stay In, by Budget',
    description: 'The area decides your trip more than the star rating does.',
    images: [{ url: '/opengraph-image', alt: 'Hotels in Haridwar' }],
  },
};

const FAQS = [
  { q:'Which area is best to stay in Haridwar?',
    a:'It depends on why you are here. For the Ganga Aarti and the old town, stay near Har Ki Pauri — you walk everywhere and you are in the middle of it. For a quieter night with easier vehicle access, Bhupatwala on the Rishikesh road is better, and it is where most Char Dham groups stay because departures are early and the road out is right there. Kankhal is calmer still and cheaper. Highway hotels near Jwalapur suit a one-night stop if you are driving through.' },
  { q:'How much do hotels in Haridwar cost?',
    a:'Broadly ₹800 to ₹1,500 for a clean budget room, ₹1,500 to ₹3,000 for a comfortable mid-range hotel with reliable hot water and a lift, and ₹3,000 to ₹6,000 for the better properties with river views or proper facilities. Dharamshalas run ₹300 to ₹800. These bands move sharply in yatra season and during festivals, and during a Kumbh they cease to mean anything at all.' },
  { q:'Should I stay near Har Ki Pauri?',
    a:'It is wonderful for the aarti and awkward for everything else. The lanes around the ghat are pedestrianised, so your vehicle drops you some distance away and you walk in with luggage. Rooms are older and noise carries late. If your priority is stepping out of your hotel into the evening aarti, it is worth every inconvenience. If you have elderly parents, heavy bags or a 5 AM departure, Bhupatwala is the better call.' },
  { q:'Where do Char Dham groups usually stay?',
    a:'Bhupatwala, almost always. Departures for the dhams leave at 4 or 5 AM and the Rishikesh road runs straight out from there, so you avoid threading a Tempo Traveller through the old town at dawn. It is also quieter, the rooms tend to be newer, and it is close to Shantikunj. Our own office is on Saptrishi Road in Bhupatwala for the same reasons.' },
  { q:'Do I need to book in advance?',
    a:'For ordinary dates, no — Haridwar has plenty of rooms and walking in works. For yatra season weekends, Navratri, Shivratri and Kartik Purnima, yes, book ahead. For the Ardh Kumbh in January to April 2027, book six to twelve months out; that is not a normal booking situation and rooms genuinely run out.' },
  { q:'Are there good dharamshalas in Haridwar?',
    a:'Many, and some are excellent value at ₹300 to ₹800. They are simple, often run by community or regional trusts, sometimes restricted to particular communities, and rules on timings and behaviour are stricter than a hotel. Bring your own toiletries and do not expect service. For pilgrims travelling on a tight budget they are the sensible option and there is no stigma to using them.' },
  { q:'Do hotels in Haridwar serve non-vegetarian food?',
    a:'No. Haridwar is a pure vegetarian city by custom and largely by regulation — no meat, no eggs in most kitchens, and alcohol is not served. This surprises visitors who have not been to a pilgrimage town before. If that is a problem for your group, plan around it rather than expecting to find an exception.' },
  { q:'Can you book hotels for us?',
    a:'For pilgrims travelling with us, yes — accommodation is part of every package and the property is named in your written confirmation before you pay. We do not run a standalone hotel booking service, so if you only want a room and no travel, you are better off booking direct or through a platform. We would rather say that than take a booking we add nothing to.' },
];

export default function HaridwarHotels() {
  const blocks = buildSchema({
    slug:'haridwar-hotels',
    name:'Hotels in Haridwar',
    description:'Guide to where to stay in Haridwar by area — Har Ki Pauri, Bhupatwala, Kankhal and the highway — with honest price bands and who each area suits.',
    types:null, faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Haridwar Hotels','/haridwar-hotels']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Where to stay · By area, not by star rating" title="Hotels in Haridwar">
        In Haridwar the <strong style={{ color:'#FFD166' }}>area decides your trip</strong> more than the
        star rating does. Four areas, what each is actually like, and honest price bands.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Haridwar Hotels', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Haridwar accommodation splits by how close you want to be to Har Ki Pauri.</strong> Rooms near the ghat are convenient for the evening aarti but noisy and hard to reach by car; the Bhupatwala and Jwalapur belts are quieter and better value, and most Char Dham packages use them because vehicles can actually park. Expect ₹800–2,500 for budget and ₹3,000–7,000 for a good 3-star. Book ahead for Kumbh, Kanwar season and the yatra peak in May.
        </AnswerBox>
        <P>
          Most hotel advice for Haridwar is a list of properties with star ratings, which is close to
          useless because a three-star near Har Ki Pauri and a three-star in Bhupatwala give you
          completely different trips. What matters here is the area: how far your vehicle can get, how
          early you are leaving, and whether you want to be inside the noise or outside it. Here is the
          version we give pilgrims on the phone.
        </P>

        <H2>The Four Areas</H2>
        <Table
          head={['Area','Character','Typical price','Best for','The catch']}
          rows={[
            ['Har Ki Pauri / old town', 'Dense, noisy, in the middle of everything', '₹800–3,000', 'Aarti every evening, walking to the ghats', 'Vehicles cannot reach. You walk in with luggage.'],
            ['Bhupatwala', 'Quieter, on the Rishikesh road', '₹1,000–4,000', 'Char Dham departures, families, early starts', 'A 10-minute drive from the ghat.'],
            ['Kankhal', 'Calm, older, residential', '₹700–2,500', 'Budget, longer stays, Daksh Mahadev nearby', 'Furthest from the aarti.'],
            ['Highway / Jwalapur', 'Functional roadside hotels', '₹1,200–3,500', 'One-night stops when driving through', 'No atmosphere at all.'],
          ]}
        />

        <Note tone="good" title="If you are starting a Char Dham yatra, stay in Bhupatwala">
          Yatra vehicles leave at 4 or 5 AM and the Rishikesh road runs straight out of Bhupatwala, so
          you skip threading a Tempo Traveller through the old town in the dark. Rooms tend to be newer,
          nights are quieter, and it is where the majority of groups stay. Our own office is on Saptrishi
          Road here, next to{' '}
          <Link href="/shantikunj-haridwar-guide" style={{ color:'#15803D', fontWeight:700 }}>Shantikunj</Link>{' '}
          Gate No. 1.
        </Note>

        <H2>What the Price Bands Actually Buy</H2>
        <Table
          head={['Band','What to expect']}
          rows={[
            ['₹300–800 (dharamshala)', 'Simple room, shared or basic bath, strict timings. Clean, no service. Some are community-restricted.'],
            ['₹800–1,500', 'Clean budget hotel. Hot water often by geyser or bucket. Lift unlikely. Perfectly fine for a night.'],
            ['₹1,500–3,000', 'Comfortable mid-range. Reliable hot water, lift in newer buildings, room service, usually a restaurant.'],
            ['₹3,000–6,000', 'The better properties. River views in some, proper facilities, consistent standards.'],
            ['Above ₹6,000', 'A handful of premium options. Haridwar is not a luxury destination and you hit the ceiling quickly.'],
          ]}
        />
        <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:8 }}>
          Indicative bands for ordinary dates, from what our pilgrims pay. Yatra season, festivals and
          Kumbh move all of these considerably.
        </p>

        <H2>When You Must Book Ahead</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Ardh Kumbh, Jan–Apr 2027</strong> — six to twelve
          months. This is not a normal booking window; see our{' '}
          <Link href="/kumbh-mela-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>Kumbh guide</Link>.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Char Dham season weekends, May–June</strong> —
          three to four weeks.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Navratri, Shivratri, Kartik Purnima</strong> — a
          month.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Shravan</strong> — the town fills with kanwariyas
          and everything is affected for weeks.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Ordinary weekdays October–March</strong> — walk in.
          You will find something within your budget in half an hour.</LI>
        </ul>

        <H2>Two Things Visitors Are Not Told</H2>
        <Note tone="info" title="It is a pure vegetarian city">
          No meat, no eggs in most kitchens, no alcohol served. Not a hotel policy — a town-wide norm,
          and in places a regulation. If someone in your group is expecting otherwise, tell them before
          you arrive rather than at dinner.
        </Note>
        <Note tone="warn" title="Book the property, not the promise">
          Whoever you book through, get the property name in writing before you pay, and pay to a
          business account rather than a personal one. Fake hotel bookings are a recurring problem in
          pilgrimage towns and the pattern is always the same — see our{' '}
          <Link href="/char-dham-yatra-scams" style={{ color:'#9A3412', fontWeight:700 }}>scams page</Link>.
        </Note>

        <H2>Where We Are Useful and Where We Are Not</H2>
        <P>
          If you are travelling with us, accommodation is included and the property is named in your
          confirmation before you pay a rupee. If you only want a hotel room in Haridwar and no travel,
          we are not the right people — book direct or through a platform and keep the difference. We
          would rather tell you that than take a booking where we add nothing.
        </P>
        <P>
          Where we do add something is the season and the Kumbh, when availability is the whole problem
          rather than price. We hold rooms in Bhupatwala on annual arrangements, which is a different
          thing from searching a booking site in March for a May date.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['GMVN — government tourist rest houses','https://gmvnonline.com/'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="Travelling with us?"
          blurb="Accommodation is part of every package, with the property named in your written confirmation before you pay. Tell us your dates and group size."
          waMessage="Namaste! I need accommodation in Haridwar as part of a yatra package. Please share options."
        />

        <Related links={[
          ['Places to Visit in Haridwar','/haridwar-sightseeing-places'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Kumbh Mela 2027','/kumbh-mela-haridwar'],
          ['Char Dham Hotels','/char-dham-hotels'],
          ['Haridwar Tour Packages','/haridwar-tour-packages'],
          ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
          ['How to Reach Haridwar','/how-to-reach-haridwar'],
        ]}/>
      </Article>
    </>
  );
}
