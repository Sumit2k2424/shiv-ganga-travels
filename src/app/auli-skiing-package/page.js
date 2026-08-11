import Link from 'next/link';
import { SITE } from '@/data/packages';
import { PACKAGES } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, FactGrid, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

const PKG = PACKAGES.find(p => p.slug === 'auli-joshimath-skiing-3n-4d');

export const metadata = {
  title: { absolute: 'Auli Skiing Package — Slopes, Ropeway & Winter Guide' },
  description: 'Auli skis January to March with Nanda Devi on the skyline. The 4.15 km Joshimath ropeway, beginner slopes, and when snow is reliable.',
  keywords: ['auli skiing package','auli skiing','auli ropeway','auli joshimath','skiing in auli cost','auli tour package','auli snow season','auli cable car ticket'],
  alternates: { canonical: `${SITE.baseUrl}/auli-skiing-package` },
  openGraph: {
    title: 'Auli Skiing Package — Slopes, Ropeway & Winter Guide',
    description: 'India\'s best-known ski slope, with Nanda Devi in view. Season, ropeway and what it actually costs.',
    url: `${SITE.baseUrl}/auli-skiing-package`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Auli skiing slopes and ropeway, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auli Skiing Package — Slopes, Ropeway & Winter Guide',
    description: 'India\'s best-known ski slope, with Nanda Devi in view.',
    images: [{ url: '/opengraph-image', alt: 'Auli Skiing Package' }],
  },
};

const FAQS = [
  { q:'When is the skiing season in Auli?',
    a:'Roughly January to March, with February the most reliable month for snow cover. December can be good in a strong year and thin in a weak one, and by late March the lower slopes go patchy. Snow in the Himalaya is not a schedule — if skiing is the entire point of your trip, keep your dates flexible and ask us what the slope is actually doing the week before you travel.' },
  { q:'How much does the Auli ropeway cost?',
    a:'Around ₹1,000 per adult for a return and about ₹500 for children under 12, running roughly 9 AM to 5 PM. It covers 4.15 km from Joshimath to Auli in about 25 minutes and is among the longest and highest ropeways in Asia. Tickets are sold at the Joshimath base station — there is no official online booking, whatever some sites suggest. Queues get long in the December–January peak, so arrive early.' },
  { q:'Can complete beginners ski at Auli?',
    a:'Yes, and most visitors are beginners. There are gentle nursery slopes, instructors available locally, and equipment hire on site. A day or two is enough to get comfortable on the easier runs. Auli also has a chairlift and a ski lift serving the main slopes, so you are not walking back up. Serious skiers will find the terrain limited; first-timers will find it ideal.' },
  { q:'Do I need to bring equipment?',
    a:'No. Skis, boots, poles and jackets are all available for hire at Auli, and GMVN and private operators run instruction. Bring good gloves, sunglasses or goggles, sunscreen and warm layers — the sun at 2,500 to 3,000 m reflects off snow and burns much faster than people expect.' },
  { q:'How do I get to Auli?',
    a:'Auli sits above Joshimath, which is about 275 km and 9 to 10 hours from Haridwar on the Badrinath highway. From Joshimath you take the ropeway or drive the 12 km road up. It is a long journey and we break it overnight rather than pushing through — the night-driving ban between 10 PM and 4 AM applies on this road too.' },
  { q:'Is Auli worth visiting outside the ski season?',
    a:'Genuinely, yes. From April to June the slopes become alpine meadow with Nanda Devi, Kamet and Mana Parvat across the skyline, and it is one of the finest viewpoints in Garhwal without any snow at all. September and October are clear and quiet. The artificial lake and the meadow walks work year-round. Only the monsoon months are worth avoiding.' },
  { q:'What is the altitude, and will I feel it?',
    a:'Auli runs roughly 2,500 to 3,050 m across the slopes, with Joshimath at 1,875 m below. That is high enough that some visitors notice breathlessness on the first day, particularly if they have come up quickly from the plains. It is well below the Char Dham shrines, so it is much less of a concern — but take the first day gently, and our altitude guide is worth reading if anyone in your group has heart or breathing trouble.' },
  { q:'Can I combine Auli with the winter Char Dham seats?',
    a:'That is the pairing we most often recommend in winter. Joshimath is the winter seat of Badrinath, so you are already there — the Narsingh Temple is in the town below the ropeway. Add Ukhimath, where Kedarnath winters, and you have a four to five day winter circuit combining skiing with two of the four winter dhams. Very few operators put those together.' },
];

export default function AuliSkiingPackage() {
  const blocks = buildSchema({
    slug:'auli-skiing-package',
    name:'Auli Skiing Package',
    description:'Guide to skiing at Auli, Uttarakhand — season, the Joshimath ropeway, beginner slopes, and combining Auli with the winter Char Dham seats.',
    geo:[30.5300, 79.5700],
    types:['TouristAttraction'],
    faqs:FAQS,
    crumbs:[['Uttarakhand Tours','/uttarakhand-tour-packages'],['Auli Skiing','/auli-skiing-package']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Chamoli · Skiing Jan–Mar · 2,500–3,050 m" title="Auli Skiing Package">
        India&apos;s best-known ski slope, with{' '}
        <strong style={{ color:'#FFD166' }}>Nanda Devi filling the skyline</strong>. Season runs January
        to March, and the 4.15 km ropeway from Joshimath is worth the trip on its own.
      </Hero>

      <Crumbs trail={[['Uttarakhand Tours','/uttarakhand-tour-packages'],['Auli Skiing', null]]}/>

      <Article>
        <Updated/>

        <P>
          Auli sits above Joshimath in Chamoli district, between roughly 2,500 and 3,050 metres, and is
          the closest thing India has to an established ski resort. The season runs January to March with
          February the most dependable. What makes it worth the nine-hour drive is not the skiing, which
          is modest by alpine standards, but the setting — Nanda Devi, Kamet and Mana Parvat across the
          horizon from the top of the slope.
        </P>

        <H2>The Practical Details</H2>
        <FactGrid facts={[
          ['🎿 Ski season', 'January – March, best in February'],
          ['⛰️ Altitude', 'About 2,500–3,050 m'],
          ['🚡 Ropeway', '4.15 km from Joshimath, ~25 min'],
          ['🎫 Ropeway fare', 'About ₹1,000 adult return, ₹500 child'],
          ['🕐 Ropeway hours', 'About 9 AM – 5 PM'],
          ['📍 From Haridwar', 'About 275 km to Joshimath, 9–10 hrs'],
          ['🎒 Equipment', 'Hire available on site'],
          ['👨‍🏫 Instruction', 'Available locally for beginners'],
        ]}/>

        {PKG && (
          <Note tone="good" title={`Our package: ${PKG.name}`}>
            {PKG.duration.nights}N/{PKG.duration.days}D from {PKG.startCity}, {PKG.price.currency}
            {PKG.price.discounted.toLocaleString('en-IN')} per person.{' '}
            <Link href={`/packages/${PKG.slug}`} style={{ color:'#15803D', fontWeight:700 }}>
              Full itinerary and inclusions →
            </Link>
          </Note>
        )}

        <H2>Snow Is Not a Schedule</H2>
        <P>
          The single most useful thing we can tell you about Auli is that the season is a probability,
          not a guarantee. A strong year gives good cover from late December; a weak one leaves the lower
          slopes patchy into January. Operators who promise skiing on fixed February dates in September
          are selling you weather they cannot control.
        </P>
        <Table
          head={['Month','Snow','What it is like']}
          rows={[
            ['December', 'Variable', 'Good in a strong year, thin in a weak one. Fewer people.'],
            ['January', 'Usually good', 'Cold, reliable cover, peak ropeway queues.'],
            ['February', 'Best', 'The most dependable month for skiing.'],
            ['March', 'Declining', 'Upper slopes hold, lower slopes go patchy.'],
            ['April–June', 'None', 'Alpine meadow, the big peaks clear. Excellent for walking.'],
            ['July–Sept', 'None', 'Monsoon. Cloud, and the road below is slide-prone. Avoid.'],
            ['Oct–Nov', 'None', 'Clear, quiet, cold nights. Underrated.'],
          ]}
        />

        <H2>The Ropeway</H2>
        <P>
          The gondola from Joshimath to Auli covers 4.15 km in about 25 minutes and is among the longest
          and highest ropeways in Asia. It is a genuine attraction rather than just transport — the
          ascent gives you the whole valley and, in clear weather, the Nanda Devi massif opening up as
          you rise.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Tickets at the Joshimath base station only.</strong>
          There is no official online booking, whatever some sites imply.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Arrive early in peak season.</strong> December and
          January queues get long by mid-morning.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>You can drive instead.</strong> A 12 km road runs up
          from Joshimath — useful if the ropeway is closed for weather or maintenance.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Confirm the fare at the counter.</strong> Published
          prices vary between sources and change; the board is what binds.</LI>
        </ul>

        <H2>Auli With the Winter Dhams</H2>
        <P>
          This is the itinerary almost nobody offers and it is the best reason to come. Joshimath, at the
          bottom of the ropeway, is the winter seat of Badrinath — Badri Vishal is worshipped at the{' '}
          <Link href="/joshimath-narsingh-temple" style={{ color:'var(--teal)', fontWeight:600 }}>Narsingh Temple</Link>{' '}
          there from mid-November until the doors reopen. You are already in the town.
        </P>
        <Table
          head={['Day','Route','Night']}
          rows={[
            ['1', 'Haridwar → Joshimath', 'Joshimath'],
            ['2', 'Narsingh Temple, then ropeway up to Auli', 'Joshimath or Auli'],
            ['3', 'Full day at Auli — skiing or the meadow walk', 'Joshimath'],
            ['4', 'Joshimath → Ukhimath via Chopta', 'Ukhimath'],
            ['5', 'Omkareshwar Temple, then Haridwar', '—'],
          ]}
        />
        <P>
          That gives you skiing, two of the four{' '}
          <Link href="/winter-char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>winter Char Dham seats</Link>,
          and{' '}
          <Link href="/chopta-tungnath" style={{ color:'var(--teal)', fontWeight:600 }}>Chopta</Link>{' '}
          under snow in between. In a season when the high shrines are shut and most operators have gone
          home, it is the trip worth taking.
        </P>

        <Note tone="warn" title="On Joshimath">
          Joshimath has experienced significant ground subsidence since early 2023 and remains under
          monitoring and remediation. The town functions, the highway runs and the ropeway operates, but
          it is a live situation rather than a closed matter. Ask us what we are seeing before you fix
          dates, and check current advisories.
        </Note>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['GMVN — Auli ropeway and accommodation','https://gmvnonline.com/'],
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
        ]}/>

        <CTA
          title="Auli this winter?"
          blurb="Tell us your window and we will tell you honestly what the snow is doing and whether to pair it with the winter dhams. We drive this road through the season."
          waMessage="Namaste! I want to plan an Auli skiing trip. Please share the package and current snow conditions."
        />

        <Related links={[
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Narsingh Temple, Joshimath','/joshimath-narsingh-temple'],
          ['Chopta Tungnath','/chopta-tungnath'],
          ['Uttarakhand Tour Packages','/uttarakhand-tour-packages'],
          ['Haridwar to Badrinath Distance','/haridwar-to-badrinath-distance'],
          ['Altitude Sickness Guide','/altitude-sickness-char-dham'],
        ]}/>
      </Article>
    </>
  );
}
