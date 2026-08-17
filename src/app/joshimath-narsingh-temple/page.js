import Link from 'next/link';
import { SITE } from '@/data/packages';
import { SEATS, SEASON } from '@/data/winterSeats';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

const S = SEATS.joshimath;

export const metadata = {
  title: { absolute: 'Narsingh Temple Joshimath — Badrinath\'s Winter Seat' },
  description: 'Badri Vishal is worshipped at Joshimath from November to April. The Narsingh idol with the thinning arm, and how to reach in winter.',
  keywords: ['narsingh temple joshimath','joshimath narsingh mandir','badrinath winter seat','badrinath winter abode','joshimath temple','narsingh temple arm legend','pandukeshwar yogadhyan badri','badrinath in winter'],
  alternates: { canonical: `${SITE.baseUrl}/joshimath-narsingh-temple` },
  openGraph: {
    title: 'Narsingh Temple Joshimath — Badrinath\'s Winter Seat',
    description: 'Where Badri Vishal spends the winter. The thinning-arm legend, the Shankaracharya math, and winter access.',
    url: `${SITE.baseUrl}/joshimath-narsingh-temple`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Narsingh Temple, Joshimath — winter seat of Badrinath' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narsingh Temple Joshimath — Badrinath\'s Winter Seat',
    description: 'Where Badri Vishal spends the winter, and the legend of the thinning arm.',
    images: [{ url: '/opengraph-image', alt: 'Narsingh Temple Joshimath | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'What is the Narsingh Temple at Joshimath?',
    a:'It is the winter seat of Badrinath. When the Badrinath doors close in mid-November, Badri Vishal is worshipped at the Narsingh Temple in Joshimath until the shrine reopens in spring. The utsav murtis of Uddhav and Kubera go a little further up the valley to the Yogadhyan Badri temple at Pandukeshwar. The temple is dedicated to Narsingh, the man-lion avatar of Vishnu, and is attributed to Adi Shankaracharya.' },
  { q:'What is the legend of the thinning arm?',
    a:'The Narsingh idol here is said to have a left arm that grows thinner with each passing year. Tradition holds that when the arm finally breaks, the mountains at Vishnuprayag will close, the road to Badrinath will be blocked, and the deity will instead be worshipped at Bhavishya Badri — the "future Badri" near Subhain. It is one of the more specific prophecies attached to any Indian temple, and it is taken seriously enough locally that people check.' },
  { q:'Can I take Badrinath darshan at Joshimath in winter?',
    a:'Yes. From mid-November until the doors reopen in late April or early May, the winter worship of Badri Vishal happens here, performed by the same priestly establishment. You can visit on any winter day. Joshimath is a town rather than a village, so there is proper accommodation and the temple is easy to reach on foot from most of it.' },
  { q:'Why is Joshimath significant beyond being a winter seat?',
    a:'It is Jyotirmath, one of the four cardinal maths established by Adi Shankaracharya — the northern seat, alongside Puri, Dwarka and Sringeri. That makes it a major centre of Hindu monastic authority in its own right, and it is where Shankaracharya is said to have attained enlightenment under the Kalpavriksha, a mulberry tree still standing in the town and reckoned to be well over a thousand years old.' },
  { q:'Is Joshimath safe to visit after the 2023 subsidence?',
    a:'Joshimath experienced significant ground subsidence in early 2023, with cracks appearing in buildings and some structures declared unsafe and evacuated. Remediation and monitoring have continued since. The town remains open, functioning and reachable, and the Narsingh Temple and the Badrinath highway are in use. That said, it is a live geological situation and conditions change — check current advisories before you travel, and we will tell you what we are seeing on the ground when you book.' },
  { q:'How do I reach Joshimath in winter?',
    a:'About 275 km from Haridwar, nine to ten hours via Rishikesh, Devprayag, Srinagar, Rudraprayag, Karnaprayag and Chamoli. It sits at 1,875 m on the main Badrinath highway, which stays open through the winter — the closures happen above Joshimath, on the stretch towards Badrinath itself, not below it. Snow can slow the last few hours.' },
  { q:'What else is there to see around Joshimath?',
    a:'Auli is 12 km up, or a cable car ride, and is India\'s best-known ski slope with a full view of Nanda Devi. Pandukeshwar with the Yogadhyan Badri temple is on the way up the valley. Vishnuprayag, where the Alaknanda and Dhauliganga meet, is nearby. And the Kalpavriksha and the Shankaracharya math are in the town itself.' },
];

export default function JoshimathNarsinghTemple() {
  const blocks = buildSchema({
    slug:'joshimath-narsingh-temple',
    name:'Narsingh Temple, Joshimath',
    description:'Winter seat of Badrinath at Joshimath (Jyotirmath), Chamoli district, Uttarakhand, at 1,875 m. Badri Vishal is worshipped here from November to April.',
    geo:[30.5550, 79.5646],
    types:['PlaceOfWorship','HinduTemple','TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Narsingh Temple Joshimath','/joshimath-narsingh-temple']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Winter seat of Badrinath · ${S.altitude}`} title="Narsingh Temple, Joshimath">
        Badri Vishal spends the winter here, from mid-November until the doors reopen.
        A <strong style={{ color:'#FFD166' }}>Shankaracharya math, not just a winter address</strong>.
      </Hero>

      <Crumbs trail={[['Winter Char Dham Yatra','/winter-char-dham-yatra'],['Narsingh Temple Joshimath', null]]}/>

      <Article>
        <Updated/>

        <P>
          Badrinath closes on {SEASON.closing.badrinath.date}, the last of the four dhams to shut. From
          the following day Badri Vishal is worshipped at the Narsingh Temple in Joshimath, at{' '}
          {S.altitude} on the main highway, while Uddhav and Kubera go up the valley to Pandukeshwar.
          Joshimath is the largest and most comfortable of the four winter seats to visit, and it is the
          only one that would be a significant place even if Badrinath had never closed.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🛕 Winter seat of', S.seatOf],
          ['⛰️ Altitude', S.altitude],
          ['📍 From Haridwar', S.fromHaridwar],
          ['🗓️ Deity arrives', S.arrives],
          ['🙏 Also at Pandukeshwar', 'Uddhav and Kubera, Yogadhyan Badri'],
          ['🛣️ Winter access', 'Main highway, open. Closures are above the town.'],
          ['🎟️ Entry', 'Free'],
          ['🛏️ Stay', 'A proper town — hotels and guesthouses year-round'],
        ]}/>

        <H2>The Thinning Arm</H2>
        <P>{S.why}</P>
        <P>
          The prophecy is unusually concrete. Bhavishya Badri, the shrine that is supposed to take over,
          exists — it is a real temple near Subhain, north-east of Joshimath, and it sits there waiting.
          You can visit it. Few people do, and there is something genuinely arresting about standing in a
          functioning temple whose entire purpose is to be ready for a day that has not come.
        </P>

        <H2>Jyotirmath — the Northern Seat</H2>
        <P>
          Joshimath&apos;s older name is Jyotirmath, and it is one of the four cardinal maths Adi
          Shankaracharya established in the eighth century to anchor the four corners of the
          subcontinent — the northern seat, with Puri in the east, Dwarka in the west and Sringeri in the
          south. Shankaracharya is said to have attained enlightenment here beneath the Kalpavriksha, a
          mulberry tree still standing in the town and reckoned to be well over a thousand years old.
        </P>
        <Note tone="info" title="Why the winter seats sit where they do">
          These are not arbitrary villages chosen for having a road. Joshimath was a seat of religious
          authority centuries before it was Badrinath&apos;s winter address, and Ukhimath has a similar
          standing in the Kedar valley. The winter arrangement follows lines of authority that were
          already there.
        </Note>

        <H2>An Honest Word About the Subsidence</H2>
        <P>
          In early 2023 Joshimath suffered serious ground subsidence. Cracks opened in hundreds of
          buildings, some structures were declared unsafe and evacuated, and the town was in the national
          news for weeks. Remediation, drainage work and monitoring have gone on since.
        </P>
        <P>
          The town is open and functioning, the highway runs, and the temple receives pilgrims. We are
          not going to tell you the matter is closed, because it is a live geological situation that is
          still being monitored. What we will do is tell you what we are seeing on the road when you ask,
          and point you at current official advisories rather than a page written months earlier. If that
          makes you decide to visit Ukhimath instead, that is a reasonable decision and we will arrange
          it.
        </P>

        <H2>Getting There</H2>
        <Table
          head={['From','Distance','Time','Note']}
          rows={[
            ['Haridwar','~275 km','9–10 hrs','Via Devprayag, Srinagar, Rudraprayag, Karnaprayag, Chamoli'],
            ['Rishikesh','~250 km','8–9 hrs','Same road'],
            ['Ukhimath','~130 km','5 hrs','The natural pairing for a winter trip'],
            ['Auli','12 km','30 min, or the cable car','India\'s best-known ski slope'],
            ['Pandukeshwar','~20 km','45 min','Yogadhyan Badri, where Uddhav and Kubera winter'],
            ['Badrinath','~45 km','2 hrs in season','Closed to pilgrims in winter'],
          ]}
        />
        <P>
          It is a long day from Haridwar and we break it at Srinagar or Rudraprayag rather than pushing
          through — mountain driving after dark in December is not something we do. Check the{' '}
          <Link href="/char-dham-road-status" style={{ color:'var(--teal)', fontWeight:600 }}>road status page</Link>{' '}
          before you finalise dates.
        </P>

        <H2>Around Joshimath</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Auli</strong> — 12 km or a cable car ride, with
          Nanda Devi filling the skyline. Skiing from January, and the reason many people come up here at
          all in winter.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Pandukeshwar</strong> — Yogadhyan Badri, where the
          utsav murtis of Uddhav and Kubera spend the winter. Named for Pandu, who is said to have
          meditated here.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Vishnuprayag</strong> — the confluence of the
          Alaknanda and Dhauliganga, and the place the thinning-arm prophecy names.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Kalpavriksha and the math</strong> — in the town
          itself, ten minutes on foot from the temple.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Shri Badarinath Kedarnath Temple Committee','https://badrinath-kedarnath.gov.in/'],
          ['Uttarakhand State Disaster Management Authority — Joshimath advisories','https://usdma.uk.gov.in/'],
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
        ]}/>

        <CTA
          title="Badrinath darshan in winter"
          blurb="Joshimath with Auli and Pandukeshwar, or paired with Ukhimath for both winter seats. We will give you the current road and town picture before you book."
          waMessage="Namaste! I want to visit Joshimath for Badrinath winter darshan. Please share the itinerary and current road conditions."
        />

        <Related links={[
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Omkareshwar Ukhimath','/ukhimath'],
          ['Badrinath Temple','/badrinath-temple'],
          ['Panch Badri Yatra','/panch-badri-yatra'],
          ['Char Dham Road Status','/char-dham-road-status'],
          ['Badrinath Yatra','/badrinath-yatra'],
        ]}/>
      </Article>
    </>
  );
}
