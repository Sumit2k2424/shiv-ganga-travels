import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/distances';
import { H2, P, LI, Table, Note, SchemaBlocks } from '@/components/LocalPageKit';
import DistancePage, { distanceSchema } from '@/components/DistancePage';

const R = getRoute('haridwar-yamunotri');

export const metadata = {
  title: { absolute: 'Haridwar to Yamunotri Distance — 222 km + 6 km Trek' },
  description: 'Haridwar to Janki Chatti is 222 km, 8–9 hours via Barkot. Then a 6 km trek — the steepest of the four dhams. Timings, halts and why to sleep at Barkot.',
  keywords: ['haridwar to yamunotri distance','haridwar to yamunotri km','haridwar to janki chatti distance','yamunotri distance from haridwar','haridwar yamunotri route','yamunotri trek distance','haridwar to barkot distance'],
  alternates: { canonical: `${SITE.baseUrl}/${R.slug}` },
  openGraph: {
    title: 'Haridwar to Yamunotri Distance — 222 km + 6 km Trek',
    description: 'The shortest drive of the four dhams and the hardest finish. Why you should sleep at Barkot.',
    url: `${SITE.baseUrl}/${R.slug}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Haridwar to Yamunotri road distance and trek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haridwar to Yamunotri Distance — 222 km + 6 km Trek',
    description: 'The shortest drive of the four dhams and the hardest finish.',
    images: [{ url: '/opengraph-image', alt: 'Haridwar to Yamunotri Distance' }],
  },
};

const FAQS = [
  { q:'How far is Yamunotri from Haridwar?',
    a:'222 km to Janki Chatti, the roadhead, taking 8 to 9 hours via Rishikesh, Narendra Nagar, Chamba, Brahmakhal and Barkot. From Janki Chatti it is a 6 km trek each way to the temple, roughly 2 to 3 hours up and 1.5 to 2 down. No vehicle goes beyond Janki Chatti.' },
  { q:'How hard is the Yamunotri trek?',
    a:'Harder than most people expect, and steeper per kilometre than the Kedarnath trek even though it is a quarter of the length. Six kilometres of sustained climb with few flat sections. Fit walkers manage it in two to three hours. Pony costs roughly ₹1,500 to ₹2,500 return and palki ₹4,000 to ₹6,000 depending on season and bargaining. There is no helicopter to Yamunotri.' },
  { q:'Should I stay at Barkot or push on to Janki Chatti?',
    a:'Barkot, almost always. It is lower, warmer, has far better rooms and sits 45 km from Janki Chatti — an easy pre-dawn run. Janki Chatti has basic accommodation and gets cold. The pattern that works is: reach Barkot in the evening, leave at 5 AM, park at Janki Chatti, trek in the cool of the morning, and be back down by early afternoon.' },
  { q:'Why is Yamunotri usually done first in the Char Dham?',
    a:'Geography. Yamunotri is the westernmost dham, and the traditional order runs west to east — Yamunotri, Gangotri, Kedarnath, Badrinath. Doing it in that order means each leg moves you forward. Reversing it means driving back down whole valleys, which on these roads costs entire days rather than hours.' },
  { q:'What is at Yamunotri besides the temple?',
    a:'Surya Kund, a hot spring beside the temple hot enough to cook in — pilgrims boil rice and potatoes in cloth bundles and take it as prasad. Divya Shila, the sacred rock pillar worshipped before entering. And the Yamuna itself, emerging from the glacier above. The whole complex is small; an hour is enough once you have arrived.' },
  { q:'Can elderly pilgrims manage Yamunotri?',
    a:'With a pony or palki, yes, and we book them in advance rather than negotiating at the trailhead. What we will say plainly is that Yamunotri defeats more elderly pilgrims than any of the other dhams, because the drive is easy and lulls people into underestimating the climb. If someone in your group has heart or knee trouble, decide the pony question before you leave Barkot, not at the bottom of the path.' },
  { q:'When does Yamunotri close?',
    a:'11 November 2026, on Bhai Dooj. The idol of Goddess Yamuna is then carried down to Kharsali, directly across the river from Janki Chatti, where she winters until Akshaya Tritiya. Kharsali is road-accessible, so winter darshan asks nothing of you physically.' },
  { q:'Is there mobile network at Yamunotri?',
    a:'Patchy. Barkot is fine, Janki Chatti is workable on BSNL and Jio, and the trek itself and the temple area drop in and out. Do not plan on being reachable during the climb. Our mobile network guide covers coverage across all four dhams.' },
];

export default function HaridwarToYamunotriDistance() {
  const blocks = distanceSchema({
    route: R, faqs: FAQS,
    crumbs: [['Char Dham Yatra','/char-dham-yatra'],['Haridwar to Yamunotri Distance',`/${R.slug}`]],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>
      <DistancePage
        route={R}
        faqs={FAQS}
        crumbTrail={[['Char Dham Yatra','/char-dham-yatra'],['Haridwar to Yamunotri', null]]}
        sources={[
          ['Uttarakhand Tourism Development Board — Yamunotri','https://uttarakhandtourism.gov.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
        ]}
        cta={{
          title: 'Planning the Yamunotri leg?',
          blurb: 'Tell us who is in your group and we will advise on pony or palki before you get there — booking at the trailhead is the expensive way to do it.',
          waMessage: 'Namaste! I want to travel Haridwar to Yamunotri. Please share cab options, timing and pony/palki.',
        }}
        related={[
          ['Haridwar to Yamunotri Cab','/cabs/haridwar-to-yamunotri-cab'],
          ['Yamunotri Yatra Package','/yamunotri-yatra'],
          ['How to Reach Yamunotri','/how-to-reach-yamunotri'],
          ['Yamunotri Temple','/yamunotri-temple'],
          ['Kharsali — Winter Seat','/kharsali-yamunotri-winter-seat'],
          ['Gangotri to Yamunotri Distance','/gangotri-to-yamunotri-distance'],
          ['Altitude Sickness Guide','/altitude-sickness-char-dham'],
        ]}
      >
        <H2>The Easy Drive, the Hard Finish</H2>
        <P>
          This route catches people out in a specific way. The drive is the gentlest of the four dhams —
          222 km on decent road through pleasant country, arriving mid-afternoon with energy left. That
          is exactly what causes the mistake: pilgrims arrive at Janki Chatti at 3 PM feeling fine, start
          the trek, and are climbing in fading light on the steepest path of the whole yatra.
        </P>
        <Note tone="warn" title="Do not start the trek the afternoon you arrive">
          Six kilometres sounds trivial after Kedarnath's sixteen. It is not. The Yamunotri path climbs
          more sharply per kilometre than any other dham approach, and the last stretch above Bhairav
          Mandir is relentless. Sleep at Barkot, leave at 5 AM, and do it in the cool with the whole day
          ahead of you.
        </Note>

        <H2>Trek Options from Janki Chatti</H2>
        <Table
          head={['Option','Typical cost','Time up','Suits']}
          rows={[
            ['On foot', 'Free', '2–3 hrs', 'Reasonably fit adults, early start'],
            ['Pony', '₹1,500–2,500 return', '1.5–2 hrs', 'Most pilgrims over 55, or anyone with knee trouble'],
            ['Palki (4 bearers)', '₹4,000–6,000 return', '2 hrs', 'Elderly or mobility-limited pilgrims'],
            ['Pithu (porter carry)', '₹2,000–3,000 return', '2 hrs', 'Children, or one adult who cannot walk'],
            ['Helicopter', 'Not available', '—', 'There is no helipad at Yamunotri'],
          ]}
        />
        <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:8 }}>
          Rates vary with season and demand and are negotiated at the trailhead unless pre-booked. We
          arrange them in advance for package pilgrims.
        </p>
        <P>
          The absence of a helicopter option is worth planning around. At Kedarnath, a pilgrim who cannot
          walk still has an air route. At Yamunotri the choice is pony, palki, or not going — which is
          why{' '}
          <Link href="/kharsali-yamunotri-winter-seat" style={{ color:'var(--teal)', fontWeight:600 }}>Kharsali</Link>{' '}
          matters so much for those who genuinely cannot manage a climb.
        </P>

        <H2>Where the Route Splits</H2>
        <P>
          At Brahmakhal, roughly 130 km in, the Yamunotri and Gangotri roads separate. Everything before
          that point is shared with the{' '}
          <Link href="/haridwar-to-gangotri-distance" style={{ color:'var(--teal)', fontWeight:600 }}>Gangotri route</Link>.
          That split is the reason the two western dhams are done as a pair and why the traditional order
          starts here — see{' '}
          <Link href="/gangotri-to-yamunotri-distance" style={{ color:'var(--teal)', fontWeight:600 }}>Gangotri to Yamunotri</Link>{' '}
          for what happens if you do them the wrong way round.
        </P>
      </DistancePage>
    </>
  );
}
