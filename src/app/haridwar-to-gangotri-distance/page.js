import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/distances';
import { H2, P, LI, Table, Note, SchemaBlocks } from '@/components/LocalPageKit';
import DistancePage, { distanceSchema } from '@/components/DistancePage';

const R = getRoute('haridwar-gangotri');

export const metadata = {
  title: { absolute: 'Haridwar to Gangotri Distance — 265 km, 8–9 Hours' },
  description: 'Haridwar to Gangotri is 265 km, 8–9 hours via Uttarkashi and Harsil. The road runs to the temple — no trek. Leg-by-leg timings and where it slows.',
  keywords: ['haridwar to gangotri distance','haridwar to gangotri km','haridwar to gangotri by road','gangotri distance from haridwar','haridwar gangotri route','haridwar to gangotri time','haridwar to gangotri taxi'],
  alternates: { canonical: `${SITE.baseUrl}/${R.slug}` },
  openGraph: {
    title: 'Haridwar to Gangotri Distance — 265 km, 8–9 Hours',
    description: 'The only dham with a road to the temple door. Leg-by-leg timings via Uttarkashi and Harsil.',
    url: `${SITE.baseUrl}/${R.slug}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Haridwar to Gangotri road distance and route' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haridwar to Gangotri Distance — 265 km, 8–9 Hours',
    description: 'The only dham with a road to the temple door.',
    images: [{ url: '/opengraph-image', alt: 'Haridwar to Gangotri Distance' }],
  },
};

const FAQS = [
  { q:'How far is Gangotri from Haridwar?',
    a:'265 km by road, 8 to 9 hours via Rishikesh, Chamba, Tehri, Dharasu, Uttarkashi and Harsil. Gangotri is the only one of the four dhams where the road runs all the way to the temple — there is no trek, no pony and no helicopter needed. For pilgrims who cannot walk far, this is the easiest dham of the four by a wide margin.' },
  { q:'Is there any trek at Gangotri?',
    a:'None. The vehicle parks a few hundred metres from the temple and you walk that on flat ground. The Gaumukh trek, 18 km further to the actual glacier snout where the Bhagirathi emerges, is a separate expedition requiring a forest permit and two to three days — it is not part of a standard Char Dham itinerary and most pilgrims never attempt it.' },
  { q:'Which part of the drive is slowest?',
    a:'Uttarkashi to Harsil — 73 km that takes two and a half hours. Up to Uttarkashi the road is broad and quick. Past it the Bhagirathi gorge narrows, the carriageway drops to a lane and a half in places, and you cross several slide-prone stretches. That section is also the first to close in heavy rain, which is why we plan Gangotri days to start early.' },
  { q:'Can I do Haridwar to Gangotri in one day?',
    a:'Yes, more comfortably than Badrinath. Leave Haridwar by 6 AM and you reach Gangotri by mid-afternoon with time for darshan. Many pilgrims prefer to halt at Uttarkashi and do the last 100 km fresh the next morning, which also puts you at the temple early when it is quiet. Either works; Badrinath does not offer that flexibility.' },
  { q:'What is worth stopping for on the way?',
    a:'Gangnani, between Uttarkashi and Harsil, has a natural hot spring where pilgrims traditionally bathe before Gangotri darshan. Harsil valley itself is among the most beautiful places in Garhwal — deodar forest, apple orchards and the Bhagirathi running below. Uttarkashi has the Kashi Vishwanath temple and is the last town with a proper market.' },
  { q:'When does Gangotri close, and what happens then?',
    a:'Gangotri closes on 10 November 2026, on Diwali. The idol of Goddess Ganga is then carried 20 km down the valley to Mukhba, near Harsil, where she is worshipped through the winter and returns on Akshaya Tritiya. Mukhba is on this same road, so a winter visit uses the identical route as far as Harsil.' },
  { q:'Is the Gangotri road affected by the Tehri reservoir?',
    a:'The route runs past the Tehri reservoir between Chamba and Dharasu, and that stretch is generally good, wide road with long views over the water. It is one of the more pleasant sections of any Char Dham approach. The reservoir itself does not disrupt the route; the constraints are all further up, past Uttarkashi.' },
  { q:'How much is a taxi from Haridwar to Gangotri?',
    a:'Current fares by vehicle are on our Haridwar to Gangotri cab page. It is a full-day hill hire with toll, parking, state tax and driver allowance included. If a quote seems unusually low, check whether it covers the return leg — a one-way drop to Gangotri means the driver returns 265 km empty, and that cost sits somewhere in the price whether or not it is itemised.' },
];

export default function HaridwarToGangotriDistance() {
  const blocks = distanceSchema({
    route: R, faqs: FAQS,
    crumbs: [['Char Dham Yatra','/char-dham-yatra'],['Haridwar to Gangotri Distance',`/${R.slug}`]],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>
      <DistancePage
        route={R}
        faqs={FAQS}
        crumbTrail={[['Char Dham Yatra','/char-dham-yatra'],['Haridwar to Gangotri', null]]}
        sources={[
          ['Uttarakhand Tourism Development Board — Gangotri','https://uttarakhandtourism.gov.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
          ['India Meteorological Department','https://mausam.imd.gov.in/'],
        ]}
        cta={{
          title: 'Planning the Gangotri leg?',
          blurb: 'Ask us whether to run it in one day or halt at Uttarkashi — it depends on your group and what the road above Uttarkashi is doing that week.',
          waMessage: 'Namaste! I want to travel Haridwar to Gangotri. Please share cab options and timing.',
        }}
        related={[
          ['Haridwar to Gangotri Cab','/cabs/haridwar-to-gangotri-cab'],
          ['Gangotri Yatra Package','/gangotri-yatra'],
          ['How to Reach Gangotri','/how-to-reach-gangotri'],
          ['Gangotri Temple','/gangotri-temple'],
          ['Harsil Valley','/harsil-valley'],
          ['Mukhba — Winter Seat','/mukhba-gangotri-winter-seat'],
          ['Gangotri to Yamunotri Distance','/gangotri-to-yamunotri-distance'],
        ]}
      >
        <H2>The Easiest Dham to Reach</H2>
        <P>
          Among the four, Gangotri asks the least of you physically. Yamunotri needs a 6 km climb,
          Kedarnath a 16 km one, and Badrinath is a much longer drive. Gangotri is a manageable day on
          the road with the vehicle stopping a short flat walk from the temple.
        </P>
        <Table
          head={['Dham','Drive from Haridwar','Trek at the end','Altitude']}
          rows={[
            ['Gangotri', '265 km, 8–9 hrs', 'None', '3,415 m'],
            ['Yamunotri', '222 km, 8–9 hrs', '6 km, steep', '3,291 m'],
            ['Kedarnath', '235 km, 8–9 hrs', '16 km', '3,583 m'],
            ['Badrinath', '320 km, 10–11 hrs', 'None', '3,133 m'],
          ]}
        />
        <P>
          Note that Gangotri is the highest of the four at 3,415 m despite requiring no walking. Altitude
          affects people regardless of effort — see our{' '}
          <Link href="/altitude-sickness-char-dham" style={{ color:'var(--teal)', fontWeight:600 }}>altitude sickness guide</Link>{' '}
          if anyone in your group has heart or breathing trouble.
        </P>

        <H2>Where the Road Changes Character</H2>
        <Note tone="info" title="Uttarkashi is the dividing line">
          Everything up to Uttarkashi is comfortable touring road — wide, sealed, fast enough. Everything
          past it is a Himalayan gorge road: narrower, slower, more exposed, and the first part of this
          route to shut when it rains hard. If you are judging whether to press on or halt, judge it at
          Uttarkashi, not at Chamba.
        </Note>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Gangnani</strong> — hot spring, traditional bathing
          stop before darshan. Half an hour.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Harsil</strong> — deodar and apple country, and the
          quietest overnight on the route. Our{' '}
          <Link href="/harsil-valley" style={{ color:'var(--teal)', fontWeight:600 }}>Harsil guide</Link>{' '}
          covers it.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Mukhba</strong> — two kilometres off the road at
          Harsil, and where Ganga spends the winter.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Dharasu</strong> — the junction where this route and
          the Yamunotri route part. Remember it; it explains why{' '}
          <Link href="/gangotri-to-yamunotri-distance" style={{ color:'var(--teal)', fontWeight:600 }}>Gangotri to Yamunotri</Link>{' '}
          takes a whole day.</LI>
        </ul>
      </DistancePage>
    </>
  );
}
