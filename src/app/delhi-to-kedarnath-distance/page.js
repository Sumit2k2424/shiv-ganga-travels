import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/distances';
import { H2, P, LI, Table, Note, SchemaBlocks } from '@/components/LocalPageKit';
import DistancePage, { distanceSchema } from '@/components/DistancePage';

const R = getRoute('delhi-kedarnath');

export const metadata = {
  title: { absolute: 'Delhi to Kedarnath Distance — 445 km + 16 km Trek' },
  description: 'Delhi to Gaurikund is 445 km and 12–14 hours of driving, then a 16 km trek. Why it needs two days, where to break, and the Shravan road closures.',
  keywords: ['delhi to kedarnath distance','delhi to kedarnath km','delhi to kedarnath by road','kedarnath distance from delhi','delhi to kedarnath route','delhi to kedarnath how many days','delhi to gaurikund distance'],
  alternates: { canonical: `${SITE.baseUrl}/${R.slug}` },
  openGraph: {
    title: 'Delhi to Kedarnath Distance — 445 km + 16 km Trek',
    description: 'Why this cannot be done in one day, and where to break the journey.',
    url: `${SITE.baseUrl}/${R.slug}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Delhi to Kedarnath road distance and route' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi to Kedarnath Distance — 445 km + 16 km Trek',
    description: 'Why this cannot be done in one day, and where to break it.',
    images: [{ url: '/opengraph-image', alt: 'Delhi to Kedarnath Distance' }],
  },
};

const FAQS = [
  { q:'How far is Kedarnath from Delhi?',
    a:'445 km by road to Gaurikund, the trailhead, of which the first 210 km to Haridwar is fast highway and the remaining 235 km is mountain road. That is 12 to 14 hours of driving, followed by a 16 km trek to the temple. Vehicles actually stop at Sonprayag, 5 km short of Gaurikund, because the last stretch is a police-controlled shuttle.' },
  { q:'Can I go Delhi to Kedarnath in one day?',
    a:'No, and you should be wary of anyone who says otherwise. Twelve to fourteen hours of driving ending at a trailhead at 1,982 m, followed by a 16 km climb the next morning, is how pilgrims end up with altitude sickness at Rambara. The night-driving ban between 10 PM and 4 AM on Char Dham routes also makes a single push physically impossible if anything slows you down.' },
  { q:'How many days does Delhi to Kedarnath take?',
    a:'Four days minimum as a round trip, five comfortably. Day one Delhi to Haridwar or Rishikesh. Day two on to Guptkashi or Sonprayag. Day three trek up, darshan, and either stay at Kedarnath or come down. Day four return. Compressing it below four means either driving through the night, which is banned, or trekking on no rest, which is unwise.' },
  { q:'Where should I break the journey?',
    a:'Night one at Haridwar or Rishikesh — both are on the route, both have every grade of accommodation, and Haridwar lets you do the Ganga Aarti, which is the traditional start of the yatra anyway. Night two at Guptkashi or Sonprayag. Guptkashi has better rooms and is 30 km from Sonprayag; Sonprayag is closer to the trailhead but basic. Most of our pilgrims prefer Guptkashi.' },
  { q:'Is it better to take a train or fly part of the way?',
    a:'Often, yes. The Delhi to Haridwar leg is the least interesting driving of the whole trip and the Shatabdi covers it in 4 hours 10 minutes for ₹680 to ₹1,285, which beats a car on both time and cost for one or two people. Flying to Dehradun is the fastest option. Either way you pick up a vehicle at Haridwar or Dehradun for the mountain section, which is where a car genuinely earns its keep.' },
  { q:'Does the Kanwar Yatra affect this route?',
    a:'Heavily, and it is the single most important seasonal warning for anyone driving from Delhi. Through Shravan, roughly late July into August, millions of kanwariyas walk the Delhi–Haridwar corridor and NH-58 is progressively closed to vehicles. Journey times double or worse and on peak days the route effectively shuts. In that window, take the train to Haridwar and start from there.' },
  { q:'Can I avoid the 16 km trek?',
    a:'Partly. Pony costs ₹3,500 to ₹4,500 one way, palki ₹8,000 to ₹12,000, and helicopter shuttles run from Phata, Sersi and Guptkashi — but from 2026 those seats are sold only on the IRCTC HeliYatra portal, and DGCA cut the number of flights by around 30%. Book the helicopter well in advance or plan on pony. Our helicopter booking guide covers the current rules.' },
  { q:'What is the altitude, and should I worry about it?',
    a:'Kedarnath temple sits at 3,583 m and Gaurikund at 1,982 m, so the trek gains about 1,600 m in 16 km. That is enough for altitude sickness to be a real risk, particularly for anyone who has driven fourteen hours from sea-level Delhi and started climbing the next morning. Building in a night at Guptkashi at 1,319 m helps more than most people realise.' },
];

export default function DelhiToKedarnathDistance() {
  const blocks = distanceSchema({
    route: R, faqs: FAQS,
    crumbs: [['Char Dham from Delhi','/char-dham-yatra-from-delhi'],['Delhi to Kedarnath Distance',`/${R.slug}`]],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>
      <DistancePage
        route={R}
        faqs={FAQS}
        crumbTrail={[['Char Dham from Delhi','/char-dham-yatra-from-delhi'],['Delhi to Kedarnath', null]]}
        sources={[
          ['National Highways Authority of India','https://nhai.gov.in/'],
          ['IRCTC — trains and HeliYatra booking','https://www.irctc.co.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
        ]}
        cta={{
          title: 'Coming from Delhi?',
          blurb: 'We run pickups from Delhi and receive pilgrims at Haridwar station. Tell us your dates and we will tell you honestly whether to drive or take the train.',
          waMessage: 'Namaste! I am travelling from Delhi to Kedarnath. Please share options and timing.',
        }}
        related={[
          ['Char Dham from Delhi','/char-dham-yatra-from-delhi'],
          ['Delhi to Haridwar Cab','/cabs/delhi-to-haridwar-cab'],
          ['Haridwar to Delhi Taxi','/haridwar-to-delhi-taxi'],
          ['Kedarnath Yatra Package','/kedarnath-yatra'],
          ['Helicopter Booking Guide','/char-dham-helicopter-booking-guide'],
          ['Pony & Palki Rates','/kedarnath-pony-palki-kandi-rates'],
          ['Guptkashi Guide','/guptkashi-guide'],
        ]}
      >
        <H2>A Realistic Four-Day Plan</H2>
        <Table
          head={['Day','Route','Night','Note']}
          rows={[
            ['1', 'Delhi → Haridwar, 210 km', 'Haridwar', 'Arrive by afternoon. Ganga Aarti at 6:30 PM.'],
            ['2', 'Haridwar → Guptkashi, 205 km', 'Guptkashi', 'The real mountain day. Leave by 6 AM.'],
            ['3', 'Guptkashi → Sonprayag → trek → Kedarnath', 'Kedarnath or Guptkashi', 'Start the trek by 6 AM. Darshan same day.'],
            ['4', 'Descend and return', '—', 'Long day back. Or split it again at Haridwar.'],
          ]}
        />
        <P>
          Sleeping at Kedarnath on night three is worth considering if you can get a room — the evening
          aarti with a fraction of the daytime crowd is the thing pilgrims remember. It also removes the
          pressure to descend 16 km on the same legs that just climbed them.
        </P>

        <H2>Drive, Train or Fly the First Leg?</H2>
        <Table
          head={['Option','Cost','Time to Haridwar','Verdict']}
          rows={[
            ['Shatabdi Express', '₹680–1,285', '4 hrs 10 min', 'Best for 1–2 people. Faster and cheaper than driving.'],
            ['Overnight train', '₹245–950', '6–7 hrs', 'Arrive early morning, start the hills the same day.'],
            ['Fly to Dehradun', '₹2,500–5,000', '1 hr + 1 hr transfer', 'Fastest. Good if you are short on days.'],
            ['Drive / taxi', 'From ₹3,800 sedan', '4–5 hrs', 'Worth it for 4+ people, luggage, or odd hours.'],
            ['Volvo bus', '₹600–1,100', '6–8 hrs', 'Cheapest. No booking hassle, least comfortable.'],
          ]}
        />
        <Note tone="good" title="What most of our Delhi pilgrims actually do">
          Train to Haridwar, then pick up the vehicle with us for the mountain section. You skip the
          dullest driving of the trip, arrive fresh, and the car is where it is genuinely needed — on the
          235 km of hill road where a train cannot help you. See our{' '}
          <Link href="/char-dham-yatra-from-delhi" style={{ color:'#15803D', fontWeight:700 }}>Char Dham from Delhi package</Link>.
        </Note>

        <H2>The Last Five Kilometres Nobody Expects</H2>
        <P>
          Private vehicles stop at Sonprayag. The final 5 km to Gaurikund is a police-controlled shuttle
          in shared jeeps, and there is no exception to this — not for a private taxi, not for a
          helicopter package, not for anyone. Parking at Sonprayag fills early in season. Factor twenty
          to forty minutes for the shuttle plus queueing, and do not plan to reach Gaurikund at a precise
          time.
        </P>
      </DistancePage>
    </>
  );
}
