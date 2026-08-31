import Link from 'next/link';
import { SITE } from '@/data/packages';
import { SEATS, SEASON } from '@/data/winterSeats';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

const S = SEATS.mukhba;

export const metadata = {
  title: { absolute: 'Mukhba — Gangotri\'s Winter Seat in the Harsil Valley' },
  description: 'Goddess Ganga leaves Gangotri on Diwali and winters at Mukhba near Harsil. One of the most beautiful valleys in Garhwal, and empty from November to April.',
  keywords: ['mukhba','mukhba village','gangotri winter seat','mukhimath','ganga winter abode','harsil valley winter','gangotri in winter','mukhba how to reach'],
  alternates: { canonical: `${SITE.baseUrl}/mukhba-gangotri-winter-seat` },
  openGraph: {
    title: 'Mukhba — Gangotri\'s Winter Seat in the Harsil Valley',
    description: 'Ganga leaves Gangotri on Diwali and winters here. The Harsil valley in winter is almost empty.',
    url: `${SITE.baseUrl}/mukhba-gangotri-winter-seat`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Mukhba village near Harsil — winter seat of Goddess Ganga' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukhba — Gangotri\'s Winter Seat in the Harsil Valley',
    description: 'Ganga leaves Gangotri on Diwali and winters here, in an almost empty valley.',
    images: [{ url: '/opengraph-image', alt: 'Mukhba, Gangotri Winter Seat | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is Mukhba?',
    a:'Mukhba, also called Mukhimath, is the winter seat of Gangotri. On Diwali — the same day the Gangotri doors close — the idol of Goddess Ganga is carried down the valley in procession to the temple at Mukhba, where she is worshipped through the winter. She returns to Gangotri on Akshaya Tritiya in April or May. The village sits near Harsil in Uttarkashi district at around 2,620 m.' },
  { q:'How far is Mukhba from Gangotri?',
    a:'About 20 km down the valley, and the difference in feel is complete. Gangotri in season is a busy pilgrimage town with queues and shops; Mukhba is a stone-and-timber Garhwali village of a few hundred people where the temple sits among houses. The road between them is closed above Harsil in deep winter, which is precisely why the deity comes down.' },
  { q:'Can I visit Mukhba in winter, and is the road open?',
    a:'You can, but this is the winter seat that most needs a phone call before you commit. The Harsil valley is high and genuinely snow-affected — the road from Uttarkashi can close for days at a time in January and February, and the last stretch is the first to go. December and March are considerably more reliable than midwinter. Ask us what the road is doing in the week you are considering rather than trusting any published schedule.' },
  { q:'Why is Harsil valley worth the journey?',
    a:'Because it is one of the most beautiful places in Garhwal and in winter you will have it almost entirely to yourself. Deodar forest, the Bhagirathi running below, apple orchards bare with snow on them, and the Bandarpunch and Srikanth peaks over the top. In June this valley has traffic. In January it has woodsmoke and silence.' },
  { q:'Where do I stay near Mukhba?',
    a:'Harsil, a couple of kilometres away, has guesthouses, a GMVN rest house and homestays, and there are homestays in Mukhba itself. Standards are simple and heating is wood or a bukhari. In winter you should ring ahead — several places shut for the coldest weeks, and turning up in a snowbound valley expecting a room is not a plan.' },
  { q:'Is there an army presence, and does that affect visitors?',
    a:'Harsil is close to the border zone and there is an established army presence in the valley. It does not restrict ordinary pilgrim and tourist movement to Harsil and Mukhba, but carry photo ID as a matter of course, and be aware that access further up towards Nelong and the Gartang Gali area is controlled and needs permits arranged in advance.' },
  { q:'Can I combine Mukhba with Kharsali?',
    a:'Yes, and it is the sensible way to do the western pair. Kharsali above Barkot and Mukhba above Uttarkashi are both in the western valleys, so a single loop from Haridwar takes in both — roughly five days at a comfortable winter pace. Ukhimath and Joshimath are in the eastern valleys and are a separate leg; doing all four is seven to nine days.' },
];

export default function MukhbaWinterSeat() {
  const blocks = buildSchema({
    slug:'mukhba-gangotri-winter-seat',
    name:'Mukhba (Mukhimath), winter seat of Gangotri',
    description:'Village near Harsil in Uttarkashi district, Uttarakhand, at about 2,620 m, where Goddess Ganga is worshipped from Diwali until Akshaya Tritiya.',
    geo:[31.0350, 78.7400],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Mukhba, Gangotri Winter Seat','/mukhba-gangotri-winter-seat']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Winter seat of Gangotri · ${S.altitude}`} title="Mukhba, Winter Seat of Ganga">
        Ganga leaves Gangotri on Diwali and spends the winter here, in a village in the Harsil valley —{' '}
        <strong style={{ color:'#FFD166' }}>one of the most beautiful and least visited places in Garhwal</strong>.
      </Hero>

      <Crumbs trail={[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Mukhba', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Mukhba is where Goddess Ganga spends the winter</strong> — when Gangotri closes on Diwali, the idol is carried down to this village near Harsil and worshipped there daily until the shrine reopens on Akshaya Tritiya. It sits at about 2,600m, is reachable by road all winter, and receives a fraction of Gangotri's summer crowds. The procession down from Gangotri, and back up in spring, is the thing worth timing a visit around.
        </AnswerBox>
        <P>
          On {SEASON.closing.gangotri.date}, the day the Gangotri doors close, the idol of Goddess Ganga
          is carried 20 km down the valley to Mukhba and installed in the village temple. She stays until
          Akshaya Tritiya. The Ganga that people queue to see at Gangotri in June is here all winter, in a
          stone-and-timber village at {S.altitude}, usually with nobody else in the room.
        </P>

        <Note tone="warn" title="Read this before planning anything">
          Mukhba is the hardest of the four winter seats to reach and the one most likely to be cut off.
          The Harsil valley road can close for days in January and February. December and March are much
          more reliable. Do not build a fixed itinerary around Mukhba in midwinter — build a flexible one
          and call us the week before. We would rather move your dates than have you stuck at Uttarkashi.
        </Note>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🛕 Winter seat of', S.seatOf],
          ['⛰️ Altitude', S.altitude],
          ['📍 From Haridwar', S.fromHaridwar],
          ['🗓️ Deity arrives', S.arrives],
          ['↩️ Returns', 'Akshaya Tritiya, April/May'],
          ['🛣️ Winter access', 'Snow-affected. Call before you travel.'],
          ['🎟️ Entry', 'Free'],
          ['🛏️ Stay', 'Harsil (2 km) or Mukhba homestays — ring ahead'],
        ]}/>

        <H2>The Valley Is the Reason</H2>
        <P>{S.why}</P>
        <P>
          Harsil in winter is deodar forest, bare apple orchards under snow, the Bhagirathi running green
          and cold below the village, and the Bandarpunch massif over the ridge. It has a small permanent
          population, an army presence, and in January almost no visitors at all. If your idea of a
          pilgrimage includes some silence, this is where you find it — the same valley in June has
          traffic queues.
        </P>

        <H2>Mukhba and Gangotri, Compared</H2>
        <Table
          head={['','Gangotri (summer)','Mukhba (winter)']}
          rows={[
            ['Altitude','3,100 m','About 2,620 m'],
            ['Season','May to Diwali','Diwali to Akshaya Tritiya'],
            ['Setting','Pilgrimage town, shops, queues','Village temple among houses'],
            ['Visitors','Thousands a day in peak season','Often a handful'],
            ['Access','Open road, busy','Snow-dependent'],
            ['What you get','The source shrine, the crowd','The deity, the quiet'],
          ]}
        />

        <H2>Getting There</H2>
        <Table
          head={['From','Distance','Time','Note']}
          rows={[
            ['Haridwar','~230 km','9–10 hrs','Via Rishikesh, Chamba, Uttarkashi'],
            ['Uttarkashi','~75 km','3–4 hrs','The last town of any size'],
            ['Harsil','~2 km','5 min','Where you will actually stay'],
            ['Gangotri','~20 km','1 hr in season','Road closed above Harsil in deep winter'],
            ['Kharsali','~150 km','6–7 hrs','The other western winter seat'],
          ]}
        />
        <P>
          It is two days from Haridwar in winter and should be treated that way — a night at Uttarkashi,
          then up the valley in daylight. Anyone who tells you it is a comfortable single-day drive in
          January has not done it in January.
        </P>

        <H2>Beyond Mukhba</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Harsil village</strong> — see our{' '}
          <Link href="/harsil-valley" style={{ color:'var(--teal)', fontWeight:600 }}>Harsil valley guide</Link>{' '}
          for the fuller picture of the area.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Dharali</strong> — a few kilometres on, with an old
          Kalp Kedar temple that is worth the stop.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Gartang Gali and Nelong</strong> — the restored
          wooden staircase cut into a cliff on the old Indo-Tibet trade route. Access is controlled and
          needs permits arranged in advance, and it is generally a summer proposition.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Uttarkashi</strong> — Vishwanath temple and the
          natural overnight stop coming and going.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — Uttarkashi','https://uttarakhandtourism.gov.in/'],
          ['Uttarakhand State Disaster Management Authority — winter road advisories','https://usdma.uk.gov.in/'],
          ['India Meteorological Department — Uttarakhand forecasts','https://mausam.imd.gov.in/'],
        ]}/>

        <CTA
          title="Ganga darshan in the winter valley"
          blurb="Mukhba with Harsil, on its own or looped with Kharsali. We will tell you straight what the Uttarkashi–Harsil road is doing before you book a thing."
          waMessage="Namaste! I want to visit Mukhba for Ganga winter darshan. Please share the itinerary and current road conditions."
        />

        <Related links={[
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Kharsali, Yamunotri Winter Seat','/kharsali-yamunotri-winter-seat'],
          ['Harsil Valley','/harsil-valley'],
          ['Gangotri Temple','/gangotri-temple'],
          ['Gangotri Yatra','/gangotri-yatra'],
          ['Char Dham Road Status','/char-dham-road-status'],
        ]}/>
      </Article>
    </>
  );
}
