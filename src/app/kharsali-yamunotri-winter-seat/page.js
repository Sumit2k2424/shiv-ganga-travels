import Link from 'next/link';
import { SITE } from '@/data/packages';
import { SEATS, SEASON } from '@/data/winterSeats';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

const S = SEATS.kharsali;

export const metadata = {
  title: { absolute: 'Kharsali — Yamunotri\'s Winter Seat & Shani Dev Temple' },
  description: 'Yamuna winters at Kharsali, opposite Janki Chatti. The village also holds one of India\'s oldest Shani Dev temples — and Shani is her brother.',
  keywords: ['kharsali','kharsali village','yamunotri winter seat','khushimath','yamuna winter abode','kharsali shani dev temple','yamunotri in winter','kharsali how to reach'],
  alternates: { canonical: `${SITE.baseUrl}/kharsali-yamunotri-winter-seat` },
  openGraph: {
    title: 'Kharsali — Yamunotri\'s Winter Seat & Shani Dev Temple',
    description: 'Yamuna winters here, in the same village as her brother Shani. One of the oldest Shani temples in India.',
    url: `${SITE.baseUrl}/kharsali-yamunotri-winter-seat`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kharsali village — winter seat of Goddess Yamuna' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kharsali — Yamunotri\'s Winter Seat & Shani Dev Temple',
    description: 'Yamuna winters here, in the same village as her brother Shani.',
    images: [{ url: '/opengraph-image', alt: 'Kharsali, Yamunotri Winter Seat | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is Kharsali?',
    a:'Kharsali, also called Khushimath, is the winter seat of Yamunotri. On Bhai Dooj — the day the Yamunotri doors close — the idol of Goddess Yamuna is carried down to Kharsali and worshipped there through the winter, returning to Yamunotri on Akshaya Tritiya. The village sits opposite Janki Chatti in Uttarkashi district at around 2,675 m, and is the last permanent settlement before the Yamunotri trek.' },
  { q:'Why does Yamuna winter in the same village as Shani Dev?',
    a:'Because in the tradition they are brother and sister — both children of Surya. Kharsali holds what is widely regarded as one of the oldest Shani Dev temples in India, a multi-storey stone and timber structure in the old Garhwali style, and Yamuna spends the winter months in her brother\'s village. The connection to Bhai Dooj, the festival of the bond between brother and sister, and the fact that she arrives on precisely that day, is the kind of coherence that makes this place worth understanding rather than just visiting.' },
  { q:'Is Kharsali reachable in winter?',
    a:'Usually, with caution. It is reached via Barkot and Janki Chatti, and the road is generally kept open, but the last stretch above Barkot is high enough to be closed by heavy snowfall for a few days at a time in January and February. It is somewhat more dependable than Mukhba and considerably less so than Ukhimath. Call before you fix dates.' },
  { q:'How far is Kharsali from Yamunotri?',
    a:'About 6 km, but that 6 km is the Yamunotri trek — a steep climb from Janki Chatti that is closed and snowbound in winter. Kharsali is the road head. In season you drive to Janki Chatti and walk or take a pony up; in winter the deity comes down to you instead.' },
  { q:'What is the Shani Dev temple like?',
    a:'A tall multi-storey structure in wood and stone, built in the traditional Garhwali koti-banal style, and quite unlike the plastered concrete temples most visitors have seen elsewhere in Uttarakhand. It is a working village temple rather than a monument, and it is the main reason to spend an hour in Kharsali rather than twenty minutes.' },
  { q:'Where can I stay near Kharsali?',
    a:'Janki Chatti has guesthouses and a GMVN rest house, Barkot has more choice and is lower and warmer, and there are homestays in Kharsali itself. In winter many places close, so ring ahead. Most visitors base at Barkot and come up for the day, which is the sensible arrangement in cold weather.' },
  { q:'Can I visit Kharsali and Mukhba on one trip?',
    a:'Yes, and you should — they are the two western winter seats and it makes no sense to do them separately. A loop from Haridwar via Barkot for Kharsali, then across to Uttarkashi and up to Harsil for Mukhba, takes about five days at a winter pace. Adding Ukhimath and Joshimath in the eastern valleys makes it seven to nine.' },
  { q:'Is there hot spring bathing like at Yamunotri?',
    a:'Not at Kharsali. The Surya Kund hot spring, where pilgrims cook rice in the boiling water, is at Yamunotri itself and is inaccessible in winter. Kharsali has the temples and the village; the thermal springs stay up the mountain.' },
];

export default function KharsaliWinterSeat() {
  const blocks = buildSchema({
    slug:'kharsali-yamunotri-winter-seat',
    name:'Kharsali (Khushimath), winter seat of Yamunotri',
    description:'Village opposite Janki Chatti in Uttarkashi district, Uttarakhand, at about 2,675 m, where Goddess Yamuna is worshipped from Bhai Dooj until Akshaya Tritiya. Also holds one of India\'s oldest Shani Dev temples.',
    geo:[31.0170, 78.4600],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Kharsali, Yamunotri Winter Seat','/kharsali-yamunotri-winter-seat']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Winter seat of Yamunotri · ${S.altitude}`} title="Kharsali, Winter Seat of Yamuna">
        Yamuna comes down on Bhai Dooj and winters here — in the village of{' '}
        <strong style={{ color:'#FFD166' }}>her brother Shani</strong>, who has one of the oldest temples
        in India a few steps away.
      </Hero>

      <Crumbs trail={[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Kharsali', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Kharsali is Yamuna's winter home</strong> — when Yamunotri closes on Bhai Dooj the idol is brought down to this village opposite Janki Chatti, where worship continues through the winter until the shrine reopens on Akshaya Tritiya. Kharsali sits at about 2,675m, is motorable year-round, and also holds one of the oldest Shani temples in the region. It is a short drive from Barkot.
        </AnswerBox>
        <P>
          Yamunotri closes on {SEASON.closing.yamunotri.date}, Bhai Dooj, and the idol of Goddess Yamuna
          is carried down the 6 km of trek to Kharsali, where she is worshipped until Akshaya Tritiya.
          The village sits opposite Janki Chatti at {S.altitude} and is the road head for the Yamunotri
          trek. It also holds a Shani Dev temple that is among the oldest in the country — and the reason
          those two facts belong in the same sentence is the best story in the Winter Char Dham.
        </P>

        <H2>Brother and Sister</H2>
        <P>{S.why}</P>
        <P>
          Bhai Dooj is the festival of the bond between brother and sister. Yamuna arrives in Shani&apos;s
          village on precisely that day, every year, and stays for the winter. Whatever you make of the
          theology, the arrangement has an internal logic that most pilgrimage circuits lack, and standing
          in the village in January with both temples a hundred metres apart is the moment the Winter
          Char Dham stops being a substitute itinerary and starts making its own sense.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🛕 Winter seat of', S.seatOf],
          ['⛰️ Altitude', S.altitude],
          ['📍 From Haridwar', S.fromHaridwar],
          ['🗓️ Deity arrives', S.arrives],
          ['↩️ Returns', 'Akshaya Tritiya, April/May'],
          ['🛣️ Winter access', 'Via Barkot. Snow can close the last stretch.'],
          ['🎟️ Entry', 'Free'],
          ['🛏️ Stay', 'Barkot (lower, warmer) or Janki Chatti'],
        ]}/>

        <H2>The Shani Dev Temple</H2>
        <P>
          The temple is a tall multi-storey building in stone and timber, built in the traditional
          Garhwali style — the same koti-banal construction that has survived earthquakes in these
          valleys for centuries. It looks nothing like the plastered, painted temples most visitors
          encounter along the Char Dham route, and it is the main reason to give Kharsali an hour rather
          than a quick stop.
        </P>
        <Note tone="info" title="It is a village temple, not a monument">
          Nobody has arranged Kharsali for visitors. There is no ticket, no guide, no signage worth the
          name. What there is, is a working temple in a working village, and in winter you will probably
          be shown around by whoever happens to be there. Treat it accordingly.
        </Note>

        <H2>Kharsali and Yamunotri, Compared</H2>
        <Table
          head={['','Yamunotri (summer)','Kharsali (winter)']}
          rows={[
            ['Altitude','3,293 m','About 2,675 m'],
            ['Access','6 km trek from Janki Chatti','Road head — no walking'],
            ['Season','Akshaya Tritiya to Bhai Dooj','Bhai Dooj to Akshaya Tritiya'],
            ['Hot springs','Surya Kund, rice cooked in the water','None — they stay up the mountain'],
            ['Crowds','Heavy in May–June','Almost none'],
            ['Effort','The hardest of the four dham approaches','Step out of the car'],
          ]}
        />
        <P>
          That last row is worth dwelling on. Yamunotri has the steepest and least forgiving approach of
          the four dhams, and it defeats a lot of older pilgrims every season. Kharsali asks nothing of
          you but the drive.
        </P>

        <H2>Getting There</H2>
        <Table
          head={['From','Distance','Time','Note']}
          rows={[
            ['Haridwar','~200 km','8–9 hrs','Via Dehradun, Mussoorie or Vikasnagar, then Barkot'],
            ['Barkot','~40 km','1.5–2 hrs','The practical winter base'],
            ['Janki Chatti','~1 km','5 min','Directly opposite, across the river'],
            ['Yamunotri','~6 km','Trek — closed in winter','The deity comes down instead'],
            ['Mukhba','~150 km','6–7 hrs','The other western winter seat'],
          ]}
        />

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Uttarkashi','https://uttarakhandtourism.gov.in/'],
          ['Uttarakhand State Disaster Management Authority — winter advisories','https://usdma.uk.gov.in/'],
        ]}/>

        <CTA
          title="Yamuna darshan without the trek"
          blurb="Kharsali from Haridwar via Barkot, on its own or looped with Mukhba. Ask us what the Barkot road is doing in your week."
          waMessage="Namaste! I want to visit Kharsali for Yamuna winter darshan. Please share the itinerary and road conditions."
        />

        <Related links={[
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Mukhba, Gangotri Winter Seat','/mukhba-gangotri-winter-seat'],
          ['Yamunotri Temple','/yamunotri-temple'],
          ['Yamunotri Yatra','/yamunotri-yatra'],
          ['How to Reach Yamunotri','/how-to-reach-yamunotri'],
          ['Char Dham Road Status','/char-dham-road-status'],
        ]}/>
      </Article>
    </>
  );
}
