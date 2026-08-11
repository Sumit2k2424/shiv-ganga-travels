import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/distances';
import { H2, P, LI, Table, SchemaBlocks } from '@/components/LocalPageKit';
import DistancePage, { distanceSchema } from '@/components/DistancePage';

const R = getRoute('haridwar-badrinath');

export const metadata = {
  title: { absolute: 'Haridwar to Badrinath Distance — 320 km, 10–11 Hours' },
  description: 'Haridwar to Badrinath is 320 km and takes 10–11 hours via Devprayag, Rudraprayag and Joshimath. Leg-by-leg timings, where to break the drive, taxi fare.',
  keywords: ['haridwar to badrinath distance','haridwar to badrinath km','haridwar to badrinath by road','haridwar badrinath route','haridwar to badrinath time','haridwar to badrinath taxi','badrinath distance from haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/${R.slug}` },
  openGraph: {
    title: 'Haridwar to Badrinath Distance — 320 km, 10–11 Hours',
    description: 'The longest single leg of the Char Dham. Leg-by-leg timings and where to break the drive.',
    url: `${SITE.baseUrl}/${R.slug}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Haridwar to Badrinath road distance and route' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haridwar to Badrinath Distance — 320 km, 10–11 Hours',
    description: 'The longest single leg of the Char Dham, broken down by section.',
    images: [{ url: '/opengraph-image', alt: 'Haridwar to Badrinath Distance' }],
  },
};

const FAQS = [
  { q:'How far is Badrinath from Haridwar?',
    a:'320 km by road, taking 10 to 11 hours in normal conditions. The route runs Haridwar, Rishikesh, Devprayag, Rudraprayag, Karnaprayag, Chamoli, Joshimath and finally Badrinath. Unlike Kedarnath and Yamunotri there is no trek at the end — the road goes to the temple, which is why Badrinath suits pilgrims who cannot walk far.' },
  { q:'Can I drive Haridwar to Badrinath in one day?',
    a:'It is possible and we do run it, but you must leave Haridwar by 4 or 5 AM and you will arrive tired. The night-driving ban between 10 PM and 4 AM on all Char Dham routes means there is no catching up if you fall behind. Most families are better off breaking at Rudraprayag, Karnaprayag or Joshimath. Anyone travelling with elderly parents should treat the two-day version as the default rather than the fallback.' },
  { q:'Where is the best place to break the Haridwar to Badrinath drive?',
    a:'Joshimath if you want the shortest second day — it leaves only 45 km to Badrinath, so you reach in time for the morning abhishek. Karnaprayag or Rudraprayag if you prefer a longer first day and cheaper rooms. Srinagar works if you got a late start out of Haridwar. We usually put pilgrims at Joshimath because arriving at Badrinath before the afternoon closure matters more than the extra hour of driving.' },
  { q:'Which section of the road is the slowest?',
    a:'Chamoli to Joshimath, without question. Fifty kilometres that takes a full two hours. The Helang stretch has been under widening and slide repair for years, it is the first section to close in heavy rain, and single-lane gate control is common. If a day is going to go wrong on this route, it goes wrong here.' },
  { q:'Is the road open all year?',
    a:'The road to Joshimath stays open through the winter. The stretch above Joshimath to Badrinath closes once the temple shuts — 13 November in 2026 — and reopens with the doors in late April. In winter Badri Vishal is worshipped at the Narsingh Temple in Joshimath instead, which is reachable on this same road.' },
  { q:'How much does a Haridwar to Badrinath taxi cost?',
    a:'Our cab page carries the current fare by vehicle. It is a full-day hire on hill roads, so it is priced accordingly and includes toll, parking, state tax and driver allowance. What you should not do is negotiate this route on the pavement outside Haridwar station — a ten-hour mountain drive quoted in two minutes is a number that moves later.' },
  { q:'What about the Joshimath subsidence?',
    a:'Joshimath suffered serious ground subsidence in early 2023 and remains under monitoring and remediation. The highway runs, the town functions and pilgrims pass through daily. It is a live geological situation rather than a closed matter, so check current advisories close to your travel date. If you would rather not overnight there, Chamoli and Pipalkoti are alternatives on the same road.' },
  { q:'Is Badrinath easier than Kedarnath?',
    a:'Considerably, for anyone worried about the walking. Badrinath has a motorable road right to the temple and sits at 3,133 m, the lowest of the four dhams. Kedarnath is 3,583 m with a 16 km trek from Gaurikund. Families who cannot manage Kedarnath frequently do Badrinath comfortably, and pairing them as a Do Dham is the most common combination we run.' },
];

export default function HaridwarToBadrinathDistance() {
  const blocks = distanceSchema({
    route: R, faqs: FAQS,
    crumbs: [['Char Dham Yatra','/char-dham-yatra'],['Haridwar to Badrinath Distance',`/${R.slug}`]],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>
      <DistancePage
        route={R}
        faqs={FAQS}
        crumbTrail={[['Char Dham Yatra','/char-dham-yatra'],['Haridwar to Badrinath', null]]}
        sources={[
          ['National Highways Authority of India','https://nhai.gov.in/'],
          ['Uttarakhand State Disaster Management Authority — road advisories','https://usdma.uk.gov.in/'],
          ['Shri Badarinath Kedarnath Temple Committee','https://badrinath-kedarnath.gov.in/'],
        ]}
        cta={{
          title: 'Driving to Badrinath?',
          blurb: 'We run this road through the season. Tell us your dates and we will say honestly whether one day or two makes sense for your group.',
          waMessage: 'Namaste! I want to travel Haridwar to Badrinath. Please share the cab options and timing.',
        }}
        related={[
          ['Haridwar to Badrinath Cab','/cabs/haridwar-to-badrinath-cab'],
          ['Badrinath Yatra Package','/badrinath-yatra'],
          ['How to Reach Badrinath','/how-to-reach-badrinath'],
          ['Kedarnath to Badrinath Distance','/kedarnath-to-badrinath-distance'],
          ['Narsingh Temple, Joshimath','/joshimath-narsingh-temple'],
          ['Char Dham Road Status','/char-dham-road-status'],
          ['Badrinath Hotels','/badrinath-hotels'],
        ]}
      >
        <H2>One Day or Two?</H2>
        <Table
          head={['','One day','Two days']}
          rows={[
            ['Departure', '4–5 AM from Haridwar', 'A civilised 7–8 AM'],
            ['Arrival', 'Late afternoon, tired', 'Late morning day two, fresh'],
            ['Night halt', 'None', 'Joshimath, Karnaprayag or Rudraprayag'],
            ['Darshan same day', 'Tight — depends on the afternoon closure', 'Comfortable'],
            ['Suits', 'Fit adults, flexible schedule', 'Families, seniors, anyone with fixed onward travel'],
            ['Risk if the road slows', 'You are driving in the dark or stopping unplanned', 'Absorbed by the buffer'],
          ]}
        />
        <P>
          The night-driving ban is what decides this. Between 10 PM and 4 AM nobody moves on the Char
          Dham routes, so a one-day run that loses two hours at Helang does not simply arrive late — it
          stops wherever it happens to be. The two-day version costs you a hotel night and removes that
          entire class of problem.
        </P>

        <H2>What You Pass on the Way</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Devprayag</strong> — where the Bhagirathi and
          Alaknanda meet and become the Ganga. Ten minutes well spent.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>The Panch Prayag</strong> — you pass Devprayag,
          Rudraprayag, Karnaprayag and Nandprayag on this single road. Four of the five sacred
          confluences in one drive, which few pilgrims realise.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Joshimath</strong> — Jyotirmath, one of Adi
          Shankaracharya's four cardinal seats, and Badrinath's winter home. The{' '}
          <Link href="/joshimath-narsingh-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Narsingh Temple</Link>{' '}
          is a fifteen-minute stop.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Vishnuprayag</strong> — the fifth confluence, below
          the road between Joshimath and Badrinath.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Pandukeshwar</strong> — Yogadhyan Badri, where
          Uddhav and Kubera winter.</LI>
        </ul>
        <P>
          If you have an extra hour, Mana village beyond Badrinath is the last settlement before Tibet
          and holds Vyas Gufa, Bhim Pul and the Saraswati source.
        </P>
      </DistancePage>
    </>
  );
}
