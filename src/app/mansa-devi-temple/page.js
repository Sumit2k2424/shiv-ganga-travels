import Link from 'next/link';
import { SITE } from '@/data/packages';
import { PLACES } from '@/data/haridwarPlaces';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

const M = PLACES['mansa-devi'];

export const metadata = {
  title: { absolute: 'Mansa Devi Temple Haridwar — Ropeway, Timings & Guide' },
  description: 'Mansa Devi ropeway is about ₹165 return, running 7 AM–6 PM with a midday break. Or walk up in 45 minutes free. Queues, thread ritual and what to skip.',
  keywords: ['mansa devi temple','mansa devi temple haridwar','mansa devi ropeway ticket price','mansa devi udan khatola','mansa devi temple timing','mansa devi haridwar trek','bilwa parvat mansa devi','mansa devi ropeway booking'],
  alternates: { canonical: `${SITE.baseUrl}/mansa-devi-temple` },
  openGraph: {
    title: 'Mansa Devi Temple Haridwar — Ropeway, Timings & Guide',
    description: 'Ropeway about ₹165 return, or a free 45-minute walk. Timings, queues and the wish-thread ritual explained.',
    url: `${SITE.baseUrl}/mansa-devi-temple`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Mansa Devi Temple on Bilwa Parvat, Haridwar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mansa Devi Temple Haridwar — Ropeway, Timings & Guide',
    description: 'Ropeway about ₹165 return, or a free 45-minute walk up Bilwa Parvat.',
    images: [{ url: '/opengraph-image', alt: 'Mansa Devi Temple Haridwar | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is the Mansa Devi ropeway ticket price?',
    a:'Around ₹165 for an adult return and ₹125 for a child, with a combined Mansa Devi and Chandi Devi ticket at roughly ₹290 to ₹340. Published figures disagree by ₹50 or more because the fare has been revised several times, so treat these as indicative and check the board at the counter — it is the only number that actually binds. Tickets are sold at the base station only; there is no official online booking despite what several websites imply.' },
  { q:'What are the Mansa Devi temple and ropeway timings?',
    a:'The temple is open roughly 5 AM to 9 PM. The ropeway runs about 7 AM to 6 PM and both temples close for bhog in the middle of the day, usually around 12 to 2 PM. Seasons shift all of this by up to an hour, and on Navratri days the schedule is extended. If you have one morning in Haridwar, be at the base station by 7:30 AM.' },
  { q:'Can I walk up to Mansa Devi instead of taking the ropeway?',
    a:'Yes, and plenty of people do. It is about 1.5 km of paved, stepped path from the base near Har Ki Pauri, taking 45 to 60 minutes at an unhurried pace. It costs nothing. The path is shaded in parts and has tea stalls, but it is a genuine climb — in May and June heat, or with anyone over seventy, take the ropeway up and walk down if you want the views.' },
  { q:'What is the thread ritual at Mansa Devi?',
    a:'Mansa Devi is the goddess who fulfils wishes. Pilgrims tie a thread to the sacred tree in the temple courtyard when making a wish, and come back to untie it once the wish is granted. That returning is the point — a large share of the people in the queue on any given day are there for the second visit, not the first. It is also why the courtyard moves slowly, so factor it into your timing rather than resenting it.' },
  { q:'How long does a Mansa Devi visit take in total?',
    a:'Budget two hours door to door from Har Ki Pauri if you take the ropeway on a weekday, and three on a weekend or during Navratri. That breaks down as 15 minutes to the base, 5 to 45 minutes queueing for the cable car, 8 minutes up, 30 to 45 minutes at the temple itself including the darshan queue, and the same again coming back.' },
  { q:'Is Mansa Devi suitable for elderly parents or wheelchair users?',
    a:'The ropeway makes the hill itself easy, but the temple complex at the top has steps and the final approach is not wheelchair accessible. Elderly visitors who can manage short flights of stairs generally do fine. If mobility is a real constraint, Maya Devi and Daksh Mahadev are both flat-ground temples with the same religious weight and none of the climbing.' },
  { q:'Which should I do first, Mansa Devi or Chandi Devi?',
    a:'Mansa Devi first, and it is not close. It is nearer to Har Ki Pauri, it opens earlier, and its queue grows through the day far faster than Chandi Devi\'s. Do Mansa Devi at opening, cross to Chandighat for Chandi Devi late morning, and you will have both done before the afternoon bhog closure. Reversing the order costs you an hour or more of queueing.' },
  { q:'Can I take photos inside the temple?',
    a:'Photography is fine on the hill and around the courtyard but is restricted in the inner sanctum, which is normal at Uttarakhand shrines and is enforced by the priests rather than by signage. Phones are not deposited at the entrance the way they are at Kedarnath. Be sensible near people who are praying.' },
];

export default function MansaDeviTemple() {
  const blocks = buildSchema({
    slug:'mansa-devi-temple',
    name:'Mansa Devi Temple, Haridwar',
    description:'Hilltop Shakti temple on Bilwa Parvat above Haridwar, reached by ropeway or a 1.5 km walk. Known for the wish-fulfilment thread ritual.',
    geo:[29.9457, 78.1642],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Mansa Devi Temple','/mansa-devi-temple']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Bilwa Parvat · ${M.distanceFromHarKiPauri} from Har Ki Pauri`} title="Mansa Devi Temple, Haridwar">
        The ropeway is <strong style={{ color:'#FFD166' }}>about ₹165 return</strong> and runs roughly
        7 AM to 6 PM. Or walk up in 45 minutes for nothing. Entry to the temple itself is free either way.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Mansa Devi Temple', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Mansa Devi sits on Bilwa Parvat above Haridwar and is reached either by a 1.5km uphill walk or by the ropeway</strong>, which runs roughly 8am to 7pm and takes a few minutes each way. The temple is one of the Siddh Peeths and is traditionally visited together with Chandi Devi across the river. Most pilgrims combine both with Har Ki Pauri in a single Haridwar day.
        </AnswerBox>
        <P>
          Mansa Devi sits on Bilwa Parvat, {M.distanceFromHarKiPauri} above Har Ki Pauri, and is the
          temple most visitors to Haridwar climb to. You get there by cable car — the Udan Khatola — for
          roughly ₹165 return, or on foot in about 45 minutes. The temple is free; only the ropeway costs
          anything. What follows is what our drivers tell pilgrims every morning, including the two
          timing decisions that determine whether this takes you two hours or four.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎟️ Entry', M.entry],
          ['🚡 Ropeway return', M.ropeway.roundTrip],
          ['🎫 Combined ticket', M.ropeway.combo],
          ['🕐 Ropeway hours', M.ropeway.operates],
          ['🛕 Temple hours', M.darshan],
          ['🥾 Walking up', M.trek],
          ['⏳ Typical queue', M.ropeway.wait],
          ['💳 Booking', M.ropeway.booking],
        ]}/>

        <Note tone="warn" title="On the fares you will see quoted elsewhere">
          Published Mansa Devi ropeway prices disagree with each other by ₹50 to ₹150, because the fare
          has been revised repeatedly and most travel sites never update. We have given the figure we
          believe is current, and we are telling you plainly to check the board at the counter rather
          than trusting any website, including this one. Several pages also advertise online booking for
          this ropeway. There is no official online booking — buy at the base station.
        </Note>

        <H2>Ropeway or Walk?</H2>
        <Table
          head={['','Ropeway','Walking up']}
          rows={[
            ['Cost', M.ropeway.roundTrip, 'Free'],
            ['Time up', 'About 8 minutes', '45–60 minutes'],
            ['Queue', '5–15 min weekday, 20–45 min weekend', 'None'],
            ['Best for', 'Seniors, children, summer heat, tight schedules', 'Anyone reasonably fit, cool mornings'],
            ['Worst for', 'Anyone in a hurry on a Navratri weekend', 'May–June afternoons, monsoon slippery steps'],
          ]}
        />
        <P>
          The combination most of our pilgrims settle on is ropeway up and walk down. You skip the worst
          of the queue, you get the view on the way up, and the descent takes half the time of the climb
          with none of the effort. It also means you are not standing in the return queue at the top,
          which on a busy day is longer than the one at the bottom.
        </P>

        <H2>The Thread Ritual</H2>
        <P>
          {M.why}
        </P>
        <P>
          Threads are sold at stalls near the temple for a few rupees. Nobody will stop you photographing
          the tree, and nobody minds if you do not take part — but if you do tie one, the understanding
          is that you come back. That is a real commitment in a town most people visit once, and it is
          worth knowing before you tie it rather than after.
        </P>

        <H2>Getting There, and the Order That Saves You an Hour</H2>
        <P>
          The ropeway base station is a short walk from Har Ki Pauri, or a five-minute drive. Vehicles
          cannot go up the hill — the ropeway and the footpath are the only routes. Our{' '}
          <Link href="/taxi-service-in-haridwar" style={{ color:'var(--teal)', fontWeight:600 }}>Haridwar temple circuit</Link>{' '}
          drops at the base and waits.
        </P>
        <Note tone="good" title="Do Mansa Devi first, then Chandi Devi">
          This is the single most useful piece of sequencing advice for a Haridwar day. Mansa Devi is
          closer, opens earlier, and its queue builds through the morning much faster than Chandi Devi&apos;s.
          Start at Mansa Devi around opening, cross to Chandighat for{' '}
          <Link href="/chandi-devi-temple" style={{ color:'#15803D', fontWeight:700 }}>Chandi Devi</Link>{' '}
          by late morning, and both are done before the midday bhog closure. Do it the other way round and
          you will spend an extra hour standing still.
        </Note>

        <H2>When to Go</H2>
        <Table
          head={['Period','What to expect']}
          rows={[
            ['October–March', 'Best conditions. Clear air, short queues, comfortable for the walk up.'],
            ['April–June', 'Char Dham season. Busy, and the climb is punishing after 10 AM. Take the ropeway.'],
            ['Navratri (twice yearly)', 'Extraordinary atmosphere, extraordinary crowds. Expect 2–3 hours for the ropeway alone.'],
            ['July–September', 'Monsoon. Fewest people, but the stepped path is slippery and the view is usually cloud.'],
          ]}
        />

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="Seeing the Haridwar temples?"
          blurb="Our temple circuit covers Mansa Devi, Chandi Devi, Daksh Mahadev and Maya Devi in five to six hours, with the car waiting at each base."
          waMessage="Namaste! I want to visit Mansa Devi and the Haridwar temples. Please share the circuit and rates."
        />

        <Related links={[
          ['Chandi Devi Temple','/chandi-devi-temple'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Maya Devi Temple','/maya-devi-temple'],
          ['Daksh Mahadev Temple','/daksh-mahadev-temple'],
          ['Haridwar Sightseeing','/haridwar-sightseeing-places'],
          ['Taxi Service in Haridwar','/taxi-service-in-haridwar'],
        ]}/>
      </Article>
    </>
  );
}
