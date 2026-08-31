import Link from 'next/link';
import { SITE } from '@/data/packages';
import { PLACES } from '@/data/haridwarPlaces';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

const C = PLACES['chandi-devi'];

export const metadata = {
  title: { absolute: 'Chandi Devi Temple Haridwar — Ropeway, Trek & Timings' },
  description: 'Chandi Devi sits on Neel Parvat. Ropeway from Chandighat, or a 3 km trek taking 60–90 minutes. Quieter than Mansa Devi with a far better view.',
  keywords: ['chandi devi temple','chandi devi temple haridwar','chandi devi ropeway','chandi devi temple timing','neel parvat haridwar','chandi devi trek','chandighat ropeway','chandi devi haridwar darshan'],
  alternates: { canonical: `${SITE.baseUrl}/chandi-devi-temple` },
  openGraph: {
    title: 'Chandi Devi Temple Haridwar — Ropeway, Trek & Timings',
    description: 'On Neel Parvat above the Ganga. Ropeway from Chandighat or a 3 km climb. Quieter than Mansa Devi, better view.',
    url: `${SITE.baseUrl}/chandi-devi-temple`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Chandi Devi Temple on Neel Parvat, Haridwar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandi Devi Temple Haridwar — Ropeway, Trek & Timings',
    description: 'On Neel Parvat. Ropeway from Chandighat or a 3 km climb.',
    images: [{ url: '/opengraph-image', alt: 'Chandi Devi Temple Haridwar | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What are the Chandi Devi temple timings?',
    a:'Darshan runs roughly 6 AM to noon and again from 3 PM to 6 PM, with the temple closed for bhog in between. The ropeway operates around 7 AM to 6 PM. Both shift seasonally by up to an hour. The closure in the middle of the day catches out visitors who arrive at 1 PM having done Mansa Devi first — plan around it.' },
  { q:'How much is the Chandi Devi ropeway ticket?',
    a:'Roughly ₹250 to ₹350 for a return, and a combined Mansa Devi and Chandi Devi ticket runs about ₹290 to ₹340, which is why almost everybody buys the combined one. Published prices vary considerably between sources, so confirm at the Chandighat counter. There is no official online booking.' },
  { q:'How long is the Chandi Devi trek?',
    a:'About 3 km from Chandighat, taking 60 to 90 minutes uphill. It is noticeably harder than the Mansa Devi walk — steeper, longer, and with less shade. It is a proper hill path rather than a stepped temple approach. Fit walkers enjoy it; anyone who found the Mansa Devi climb tiring should take the ropeway here.' },
  { q:'Is Chandi Devi worth visiting if I have already done Mansa Devi?',
    a:'Yes, and for a specific reason: it is quieter. Mansa Devi is the temple everyone climbs, so its courtyard is dense from mid-morning. Chandi Devi gets a fraction of the same footfall, sits higher, and the view back across the Ganga and the plains from Neel Parvat is the better of the two by some distance. If you only have time for one and you value calm over convenience, choose this one.' },
  { q:'What is the story behind Chandi Devi?',
    a:'The temple marks the spot where the goddess Chandi is said to have rested after killing the demon generals Shumbha and Nishumbha. The present structure was built in 1929 by Suchat Singh, then king of Kashmir, though the site itself is far older and the principal idol is traditionally attributed to Adi Shankaracharya in the 8th century. Neel Parvat is counted among the Panch Tirth of Haridwar.' },
  { q:'Can I visit Chandi Devi and Mansa Devi on the same day?',
    a:'Comfortably, and most people do. Mansa Devi first thing, then cross to Chandighat for Chandi Devi late morning, and you are done before the afternoon closure. Allow four to five hours for both including travel between them. The combined ropeway ticket is designed for exactly this and saves roughly fifteen percent over buying separately.' },
  { q:'How do I get to Chandighat from Har Ki Pauri?',
    a:'It is about 4 km, ten minutes by car or auto. The ropeway base station is at Chandighat on the far side of the Ganga canal. Vehicles cannot go up Neel Parvat — the ropeway and the footpath are the only ways up, so any taxi drops you at the base and waits. Our temple circuit does exactly that.' },
  { q:'Is there anything else near Chandi Devi worth stopping for?',
    a:'Neel Dhara Pakshi Vihar, the bird sanctuary on the Ganga just below Chandighat, is a genuinely good half-hour in winter when the migratory birds are in. Most visitors drive straight past it. If you are here between November and February with any interest in birds, it is the best-value stop in Haridwar.' },
];

export default function ChandiDeviTemple() {
  const blocks = buildSchema({
    slug:'chandi-devi-temple',
    name:'Chandi Devi Temple, Haridwar',
    description:'Shakti temple on Neel Parvat above Haridwar, built in 1929 by Suchat Singh of Kashmir. Reached by ropeway from Chandighat or a 3 km trek.',
    geo:[29.9394, 78.1795],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Haridwar','/haridwar-sightseeing-places'],['Chandi Devi Temple','/chandi-devi-temple']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Neel Parvat · ${C.distanceFromHarKiPauri} from Har Ki Pauri`} title="Chandi Devi Temple, Haridwar">
        Ropeway from Chandighat, or a <strong style={{ color:'#FFD166' }}>3 km climb taking 60–90 minutes</strong>.
        Fewer people than Mansa Devi, and the better view of the two.
      </Hero>

      <Crumbs trail={[['Haridwar','/haridwar-sightseeing-places'],['Chandi Devi Temple', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Chandi Devi stands on Neel Parvat across the Ganga from Haridwar</strong>, reached by a 3km trek from Chandi Ghat or by ropeway in about 10 minutes. Built in 1929 on a much older shrine, it is one of Haridwar's three Siddh Peeths alongside Mansa Devi and Maya Devi. Ropeway hours run roughly 8am to 6pm and it is busiest during Navratri.
        </AnswerBox>
        <P>
          Chandi Devi stands on Neel Parvat, {C.distanceFromHarKiPauri} from Har Ki Pauri on the far side
          of the Ganga canal. You reach it by ropeway from Chandighat or on foot in an hour to ninety
          minutes. Entry is free, darshan runs {C.darshan}, and the thing worth knowing before you go is
          that it closes in the middle of the day — which is exactly when most people arrive, having
          done Mansa Devi first.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎟️ Entry', C.entry],
          ['🚡 Ropeway return', C.ropeway.roundTrip],
          ['🎫 Combined ticket', C.ropeway.combo],
          ['🕐 Ropeway hours', C.ropeway.operates],
          ['🛕 Darshan hours', C.darshan],
          ['🥾 Trek', C.trek],
          ['⏳ Queue', C.ropeway.wait],
          ['📍 Base station', 'Chandighat, 4 km from Har Ki Pauri'],
        ]}/>

        <Note tone="warn" title="The midday closure catches people out">
          Darshan stops around noon and resumes about 3 PM. A visitor who does Mansa Devi at 10 AM,
          takes lunch, and arrives at Chandighat at 1:30 PM will find the ropeway running and the temple
          shut. Either be up here before noon or plan for mid-afternoon. Timings also move seasonally, so
          treat the hours above as close rather than exact.
        </Note>

        <H2>Why This One Is Worth the Extra Effort</H2>
        <P>
          {C.why}
        </P>
        <P>
          Most Haridwar itineraries treat Chandi Devi as the optional second temple, and that is exactly
          why it is worth doing. Mansa Devi receives the overwhelming share of visitors, so its courtyard
          is packed from mid-morning onward. Chandi Devi sits higher, gets a fraction of that footfall,
          and gives you the long view back over the Ganga spilling out onto the plains. If you have one
          temple in you and you would rather have space than convenience, come here.
        </P>

        <H2>Ropeway or Trek?</H2>
        <Table
          head={['','Ropeway','Trek from Chandighat']}
          rows={[
            ['Cost', C.ropeway.roundTrip, 'Free'],
            ['Time up', 'Under 10 minutes', '60–90 minutes'],
            ['Difficulty', 'None', 'Moderate — steeper and longer than Mansa Devi'],
            ['Shade', 'n/a', 'Patchy. Unpleasant after 10 AM in summer'],
            ['Best for', 'Most visitors, families, anyone on a schedule', 'Fit walkers on a cool morning'],
          ]}
        />
        <P>
          Be honest with yourself about this one. The Chandi Devi climb is a real hill walk, not the
          stepped pilgrim path you get at Mansa Devi. People who breezed up Bilwa Parvat in the morning
          regularly find this harder than they expected in the afternoon heat.
        </P>

        <H2>Chandi Devi and Mansa Devi Together</H2>
        <P>
          The two are almost always done as a pair and the combined ropeway ticket exists for that
          reason. The sequence that works:
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>7:30 AM</strong> — at the{' '}
            <Link href="/mansa-devi-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Mansa Devi</Link>{' '}
            base station as it opens, before the queue forms.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>9:30 AM</strong> — back down, drive to Chandighat, roughly fifteen minutes.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>10:00 AM</strong> — Chandi Devi ropeway up. Shorter queue at this hour.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>11:30 AM</strong> — down and out before the midday closure.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Afternoon</strong> —{' '}
            <Link href="/daksh-mahadev-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Daksh Mahadev</Link>{' '}
            at Kankhal, then the Ganga Aarti at{' '}
            <Link href="/har-ki-pauri-guide" style={{ color:'var(--teal)', fontWeight:600 }}>Har Ki Pauri</Link>.</LI>
        </ul>
        <P>
          That is a full, unhurried Haridwar day and it is the shape our drivers run most often.
        </P>

        <H2>Neel Dhara Bird Sanctuary — the Stop Nobody Makes</H2>
        <P>
          Directly below Chandighat, where the Ganga spreads out before the barrage, is Neel Dhara Pakshi
          Vihar. Between November and February it fills with migratory birds — Siberian cranes and a long
          list of waterfowl — and almost every Haridwar itinerary drives straight past it. If you are here
          in winter and have half an hour, it is the most underrated thing in the town.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Haridwar','https://uttarakhandtourism.gov.in/destination/haridwar'],
          ['Uttarakhand Forest Department — Neel Dhara Pakshi Vihar','https://forest.uk.gov.in/'],
          ['Haridwar District Administration','https://haridwar.nic.in/'],
        ]}/>

        <CTA
          title="Both hill temples in one morning"
          blurb="Our temple circuit runs Mansa Devi and Chandi Devi in the right order, with the car waiting at each base station. Five to six hours, done before the afternoon closure."
          waMessage="Namaste! I want to visit Chandi Devi and Mansa Devi in Haridwar. Please share the circuit and rates."
        />

        <Related links={[
          ['Mansa Devi Temple','/mansa-devi-temple'],
          ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
          ['Daksh Mahadev Temple','/daksh-mahadev-temple'],
          ['Maya Devi Temple','/maya-devi-temple'],
          ['Haridwar Sightseeing','/haridwar-sightseeing-places'],
          ['Rajaji National Park','/rajaji-national-park'],
        ]}/>
      </Article>
    </>
  );
}
