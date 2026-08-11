import Link from 'next/link';
import { SITE } from '@/data/packages';
import { getRoute } from '@/data/distances';
import { H2, P, LI, Table, Note, SchemaBlocks } from '@/components/LocalPageKit';
import DistancePage, { distanceSchema } from '@/components/DistancePage';

const R = getRoute('gangotri-yamunotri');

export const metadata = {
  title: { absolute: 'Gangotri to Yamunotri Distance — 225 km, a Full Day' },
  description: 'Gangotri to Yamunotri is about 225 km and 8–9 hours, despite being 80 km apart. There is no direct road — you descend to Dharasu and climb a second valley.',
  keywords: ['gangotri to yamunotri distance','yamunotri to gangotri distance','gangotri yamunotri road','gangotri to yamunotri km','gangotri to barkot distance','char dham yatra order','yamunotri gangotri route'],
  alternates: { canonical: `${SITE.baseUrl}/${R.slug}` },
  openGraph: {
    title: 'Gangotri to Yamunotri Distance — 225 km, a Full Day',
    description: '80 km apart, 225 km by road. Why there is no direct route, and why the yatra order matters.',
    url: `${SITE.baseUrl}/${R.slug}`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Gangotri to Yamunotri road distance and route' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gangotri to Yamunotri Distance — 225 km, a Full Day',
    description: '80 km apart, 225 km by road. Why there is no direct route.',
    images: [{ url: '/opengraph-image', alt: 'Gangotri to Yamunotri Distance' }],
  },
};

const FAQS = [
  { q:'How far is Yamunotri from Gangotri?',
    a:'About 225 km by road to Janki Chatti, taking 8 to 9 hours, plus the 6 km trek to the temple. The two shrines are only around 80 km apart in a straight line, but the Bandarpunch massif sits between them and there is no road across it. You descend the entire Bhagirathi valley to Dharasu, cross to the Yamuna valley, and climb again.' },
  { q:'Why is there no direct road between Gangotri and Yamunotri?',
    a:'Terrain. Both shrines sit at the head of separate glacial valleys, separated by the Bandarpunch range, which rises above 6,300 m. Building a road across it is not a realistic proposition. Every journey between the two western dhams goes down one valley and up the other, and that is why a distance that looks like a two-hour hop is a full day.' },
  { q:'Which should I visit first, Yamunotri or Gangotri?',
    a:'Yamunotri first. The traditional Char Dham order — Yamunotri, Gangotri, Kedarnath, Badrinath — runs west to east and every leg moves you forward. Starting with Gangotri means driving this 225 km leg backwards and then heading east anyway, which costs you the better part of a day for nothing. The tradition is good logistics as well as good practice.' },
  { q:'Where do I break this journey?',
    a:'Uttarkashi or Barkot. Uttarkashi is roughly 130 km from Gangotri and has the best accommodation on the route. Barkot is further along and leaves only 45 km to Janki Chatti the next morning, which is the better position if you want an early trek start. If you are doing the full Char Dham in the traditional order you would not drive this leg at all — you would come up from Barkot to Yamunotri first.' },
  { q:'Can I do Gangotri and Yamunotri in one day?',
    a:'No. The drive alone is 8 to 9 hours, and Yamunotri needs a 6 km trek each way on top. Attempting both shrines in a single day means arriving at Janki Chatti in the afternoon and climbing the steepest path of the yatra in fading light. Two days minimum for the western pair, three if you want to enjoy them.' },
  { q:'What is at Dharasu, and why does it keep coming up?',
    a:'Dharasu is a junction, not a destination — a small settlement where the Bhagirathi valley road meets the road across to the Yamuna valley. It matters because every combination of the two western dhams passes through it. If you understand that Dharasu is the hinge, the whole geography of the western Char Dham makes sense.' },
  { q:'Is this leg risky in monsoon?',
    a:'It crosses two slide-prone valley roads rather than one, so yes, it carries roughly double the exposure of a single-valley leg. Through July and into mid-September we would avoid scheduling it at all. The Uttarkashi–Dharasu stretch and the Barkot approach both close periodically in heavy rain.' },
  { q:'How does the winter route compare?',
    a:'Considerably easier, oddly. In winter the deities are at Mukhba near Harsil and Kharsali opposite Janki Chatti, and both villages are road-accessible with no trek at all. The drive between them is the same 225 km, but you skip the 6 km Yamunotri climb entirely. Our winter Char Dham guide covers the western pair as a single loop.' },
];

export default function GangotriToYamunotriDistance() {
  const blocks = distanceSchema({
    route: R, faqs: FAQS,
    crumbs: [['Char Dham Yatra','/char-dham-yatra'],['Gangotri to Yamunotri Distance',`/${R.slug}`]],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>
      <DistancePage
        route={R}
        faqs={FAQS}
        crumbTrail={[['Char Dham Yatra','/char-dham-yatra'],['Gangotri to Yamunotri', null]]}
        sources={[
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
        ]}
        cta={{
          title: 'Getting the yatra order right'
          , blurb: 'The sequence you travel in decides how many days the trip takes. Send us your dates and we will build the route that does not double back.'
          , waMessage: 'Namaste! Please help me plan the Char Dham route order — I want to avoid wasted driving days.'
        }}
        related={[
          ['Haridwar to Gangotri Distance','/haridwar-to-gangotri-distance'],
          ['Haridwar to Yamunotri Distance','/haridwar-to-yamunotri-distance'],
          ['Char Dham Route Map','/char-dham-yatra-route-map'],
          ['Yamunotri Gangotri Do Dham','/packages/yamunotri-gangotri-do-dham-4n-5d'],
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Mukhba — Ganga’s Winter Seat','/mukhba-gangotri-winter-seat'],
          ['Kharsali — Yamuna’s Winter Seat','/kharsali-yamunotri-winter-seat'],
        ]}
      >
        <H2>80 Kilometres Apart, 225 by Road</H2>
        <P>
          This is the single most useful fact in Char Dham route planning, and almost nobody checks it
          before booking. Look at a map and Gangotri and Yamunotri appear close — near neighbours at the
          top of adjacent valleys. Look at the contours and the Bandarpunch massif is in between, rising
          past 6,300 m. There is no road over it and there never will be.
        </P>
        <Table
          head={['','Straight line','By road']}
          rows={[
            ['Gangotri → Yamunotri', 'about 80 km', 'about 225 km'],
            ['Travel time', '—', '8–9 hrs driving'],
            ['Lowest point en route', '—', 'Dharasu, around 1,100 m'],
            ['Valleys crossed', '—', 'Two — Bhagirathi and Yamuna'],
          ]}
        />
        <Note tone="warn" title="This figure is derived, not measured">
          We sell Haridwar to Gangotri and Haridwar to Yamunotri as cab routes, so those distances come
          from our own running. Gangotri to Yamunotri is not a leg we sell on its own, so the 225 km here
          is reasoned from the shared sections of those two routes. Treat it as accurate to about 15 km,
          and ask us if you need it exact for planning.
        </Note>

        <H2>Why the Traditional Order Is Also the Efficient One</H2>
        <P>
          The prescribed sequence is Yamunotri, Gangotri, Kedarnath, Badrinath — westernmost to
          easternmost. Pilgrims sometimes ask whether it can be reordered for convenience. It can, but it
          costs you.
        </P>
        <Table
          head={['Order','What happens','Cost']}
          rows={[
            ['Yamunotri → Gangotri → east', 'Each leg moves forward. Dharasu crossed once.', 'The standard 9–10 day circuit'],
            ['Gangotri → Yamunotri → east', 'You descend to Dharasu, climb the Yamuna valley, then come back down it to head east.', 'Roughly a full extra day'],
            ['Kedarnath or Badrinath first', 'You cross the whole state twice.', 'Two days or more'],
          ]}
        />
        <P>
          The tradition predates the roads by centuries, and the roads were built along the valleys that
          pilgrims already walked. That is why following the old order still produces the shortest
          modern itinerary — see the{' '}
          <Link href="/char-dham-yatra-route-map" style={{ color:'var(--teal)', fontWeight:600 }}>route map</Link>{' '}
          for the full circuit.
        </P>

        <H2>The Winter Version Is Easier</H2>
        <P>
          Once the shrines close in November the two goddesses move down to{' '}
          <Link href="/mukhba-gangotri-winter-seat" style={{ color:'var(--teal)', fontWeight:600 }}>Mukhba</Link>{' '}
          near Harsil and{' '}
          <Link href="/kharsali-yamunotri-winter-seat" style={{ color:'var(--teal)', fontWeight:600 }}>Kharsali</Link>{' '}
          opposite Janki Chatti. The drive between them is the same 225 km through Dharasu, but both
          villages sit on the road and neither asks you to walk. For pilgrims who cannot manage the
          Yamunotri climb, the winter pairing delivers both goddesses with no trek at all.
        </P>
      </DistancePage>
    </>
  );
}
