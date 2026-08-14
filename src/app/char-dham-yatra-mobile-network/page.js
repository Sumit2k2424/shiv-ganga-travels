import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

export const metadata = {
  title: { absolute: 'Mobile Network on Char Dham Yatra — Coverage by Dham' },
  description: 'BSNL and Jio carry the hills; Airtel is patchy and Vi barely works. Where the signal drops, what to download before you leave, and how to stay reachable.',
  keywords: ['mobile network char dham yatra','network coverage kedarnath','bsnl char dham','jio network kedarnath','mobile signal badrinath','internet on char dham yatra','phone network gangotri yamunotri'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-mobile-network` },
  openGraph: {
    title: 'Mobile Network on Char Dham Yatra — Coverage by Dham',
    description: 'Where the signal drops, which operator survives, and what to download before you go.',
    url: `${SITE.baseUrl}/char-dham-yatra-mobile-network`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Mobile network coverage on the Char Dham Yatra route' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Network on Char Dham Yatra — Coverage by Dham',
    description: 'Where the signal drops and which operator survives.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Mobile Network Coverage' }],
  },
};

const FAQS = [
  { q:'Which mobile network works best on the Char Dham Yatra?',
    a:'BSNL has the widest reach in the Garhwal hills because it inherited towers in places no private operator found commercially worthwhile, and it is often the only signal at the smaller settlements. Jio is the strongest of the private networks and covers most of the towns and a good part of the highway. Airtel works in the larger towns and drops out between them. Vi is unreliable beyond Rishikesh. If one person in your group can carry a BSNL number, do it.' },
  { q:'Is there mobile network at Kedarnath?',
    a:'There is intermittent signal at the temple area, largely BSNL and Jio, and it degrades badly when the valley is full of pilgrims because the towers cannot carry the load. The 16 km trek from Gaurikund is mostly dead, with occasional patches. Treat Kedarnath as unreachable and be pleasantly surprised if a call connects.' },
  { q:'Can I get internet at Badrinath?',
    a:'Badrinath is the best-connected of the four dhams because it is a road-head town with a permanent population, so Jio and BSNL data usually work, if slowly. Do not expect to upload photographs or hold a video call. Messages, a voice call and a maps refresh are realistic; anything heavier is not.' },
  { q:'What should I download before leaving Haridwar?',
    a:'Offline maps for the whole Garhwal region, your yatra registration slip and any hotel confirmations as PDFs or screenshots, your train or flight tickets, and the emergency numbers saved as contacts rather than sitting in a browser tab. Anything you might need to show at a checkpoint should exist on the phone as an image, because the moment you need it is the moment there is no signal.' },
  { q:'Will my family be able to reach me?',
    a:'Not reliably, and it is worth telling them that before you go rather than having them worry. The pattern that works is a daily check-in from wherever you have signal — usually the evening halt, since the towns have coverage even when the shrines do not. Give them our office number as a backstop; we can usually reach a driver even when a pilgrim is unreachable.' },
  { q:'Do phones work during the Kedarnath helicopter flight?',
    a:'No, and phones should be put away during the flight in any case. More relevantly, phones and cameras are now banned inside the temple premises at all four shrines, so you will be depositing your phone before darshan regardless of whether it has signal.' },
  { q:'Is there wifi at the hotels?',
    a:'In Haridwar, Rishikesh, Srinagar and Uttarkashi, usually yes and usually workable. At Guptkashi, Barkot and Joshimath, sometimes, and slow. At Kedarnath and the higher stops, effectively no. Hotels advertise wifi far more confidently than they deliver it — assume it will not work and treat it as a bonus.' },
  { q:'Should I buy a local SIM?',
    a:'No need if you already have Jio or BSNL. If you are on Vi or a corporate plan with poor rural roaming, a prepaid Jio or BSNL SIM bought in Haridwar before you head up is cheap insurance. Foreign visitors should arrange an Indian SIM in Delhi or Dehradun — buying one in a hill town is slower and needs paperwork.' },
];

const COVERAGE = [
  ['Haridwar / Rishikesh', '314 m', 'All networks, 4G', 'Full', 'Do everything here — downloads, uploads, banking.'],
  ['Barkot', '1,220 m', 'BSNL, Jio good; Airtel patchy', 'Good', 'Last comfortable connectivity before Yamunotri.'],
  ['Janki Chatti', '2,650 m', 'BSNL, Jio weak', 'Weak', 'Signal comes and goes. The trek above is dead.'],
  ['Yamunotri temple', '3,291 m', 'Largely none', 'None', 'Assume unreachable.'],
  ['Uttarkashi', '1,158 m', 'All networks', 'Good', 'Best connectivity on the Gangotri arm.'],
  ['Harsil', '2,620 m', 'BSNL, Jio patchy', 'Weak', 'Army presence helps; still unreliable.'],
  ['Gangotri temple', '3,415 m', 'BSNL, Jio intermittent', 'Weak', 'Occasional calls connect. Data rarely.'],
  ['Srinagar / Rudraprayag', '600 m', 'All networks, 4G', 'Full', 'Good halt for a proper check-in.'],
  ['Guptkashi', '1,319 m', 'BSNL, Jio, Airtel', 'Good', 'The night halt where you should call home.'],
  ['Sonprayag / Gaurikund', '1,982 m', 'BSNL, Jio congested', 'Weak', 'Works at odd hours, jams in the morning rush.'],
  ['Kedarnath trek', '2,000–3,500 m', 'Mostly none', 'None', 'Isolated patches only. Do not rely on it.'],
  ['Kedarnath temple', '3,583 m', 'BSNL, Jio intermittent', 'Weak', 'Congested when the valley is full.'],
  ['Joshimath', '1,875 m', 'All networks', 'Good', 'Solid. Last dependable signal before Badrinath.'],
  ['Badrinath', '3,133 m', 'Jio, BSNL usable', 'Moderate', 'Best-connected of the four dhams.'],
];

export default function MobileNetwork() {
  const blocks = buildSchema({
    slug:'char-dham-yatra-mobile-network',
    name:'Mobile Network Coverage on the Char Dham Yatra',
    description:'Mobile and data coverage across the Char Dham route by location and operator, with guidance on what to download before travelling.',
    types:null, faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['Mobile Network','/char-dham-yatra-mobile-network']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Connectivity · All four dhams" title="Mobile Network on the Char Dham Yatra">
        <strong style={{ color:'#FFD166' }}>BSNL and Jio carry the hills.</strong> Airtel is patchy past
        the towns and Vi barely works. Here is where the signal actually drops, stop by stop.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['Mobile Network', null]]}/>

      <Article>
        <Updated/>

        <P>
          Nobody plans a pilgrimage around phone signal, and then spends four days unable to tell their
          family they are safe. Coverage on the Char Dham route is better than it was five years ago and
          still absent exactly where you most want it. The short version: the towns have signal, the
          shrines mostly do not, and BSNL reaches places the private networks never bothered with.
        </P>

        <H2>Coverage, Stop by Stop</H2>
        <Table
          head={['Location','Altitude','Networks','Signal','Note']}
          rows={COVERAGE}
        />
        <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:8 }}>
          Based on what our drivers report season to season. Coverage genuinely varies with weather,
          crowd load and tower maintenance — treat this as a planning guide, not a guarantee.
        </p>

        <H2>Which Network to Carry</H2>
        <Table
          head={['Operator','Hills performance','Verdict']}
          rows={[
            ['BSNL', 'Widest reach — signal in villages nobody else covers', 'The one to have if you can. Slow data, but it connects.'],
            ['Jio', 'Strong in towns and along much of the highway', 'Best of the private networks. Usable data where it works.'],
            ['Airtel', 'Good in larger towns, gone between them', 'Fine as a second number, not as your only one.'],
            ['Vi', 'Unreliable beyond Rishikesh', 'Do not depend on it. Carry a second SIM.'],
          ]}
        />
        <Note tone="good" title="The trick that works for groups">
          Have at least one person in the group on BSNL and one on Jio. Between them you will have signal
          in almost every settlement on the route, even though neither works everywhere alone. If your
          whole family is on the same network, you all lose signal at the same moment.
        </Note>

        <H2>Download These Before You Leave Haridwar</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Offline maps</strong> for the whole Garhwal region,
          not just your next stop.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Your yatra registration slip</strong> as an image.
          It gets checked at Sonprayag and other posts, and that is not a place to be loading a website.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Hotel and package confirmations</strong> as PDFs or
          screenshots, with the property names visible.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Return train or flight tickets.</strong></LI>
          <LI><strong style={{ color:'var(--navy)' }}>Emergency numbers saved as contacts</strong> — police
          112, the state emergency operations centre 1070, your driver, and our office. Our{' '}
          <Link href="/char-dham-yatra-emergency-contacts" style={{ color:'var(--teal)', fontWeight:600 }}>emergency contacts page</Link>{' '}
          has the full list.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Enough cash.</strong> UPI needs signal. ATMs above
          Guptkashi and Joshimath are scarce and frequently empty in season.</LI>
        </ul>

        <H2>Telling People at Home What to Expect</H2>
        <P>
          The most useful thing you can do before departing is set expectations. Tell your family you
          will check in once a day from the evening halt and that silence in between is normal, not
          alarming. Every season we take calls from worried relatives whose parents are simply at
          Kedarnath with no bars — and because our drivers stay in contact with the office, we can
          usually confirm a group is fine when the pilgrims themselves cannot.
        </P>
        <Note tone="info" title="Phones are banned inside the temples now">
          From the 2026 season, phones and cameras are not permitted inside the temple premises at any of
          the four shrines. You will deposit your phone before darshan regardless of signal, so plan your
          photographs for the approach rather than the sanctum.
        </Note>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Department of Telecommunications, Government of India','https://dot.gov.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
          ['Char Dham Yatra registration — Tourist Care Uttarakhand','https://registrationandtouristcare.uk.gov.in/'],
        ]}/>

        <CTA
          title="We stay reachable when you cannot"
          blurb="Our drivers check in with the office daily. Give your family our number as a backstop — we can usually confirm a group is safe when their own phones have no signal."
          waMessage="Namaste! I want to know about connectivity and staying in touch during the Char Dham Yatra."
        />

        <Related links={[
          ['Emergency Contacts','/char-dham-yatra-emergency-contacts'],
          ['Char Dham Road Status','/char-dham-road-status'],
          ['Altitude Sickness Guide','/altitude-sickness-char-dham'],
          ['Food on the Yatra','/char-dham-yatra-food-guide'],
          ['Packing List','/blog/char-dham-yatra-packing-list'],
          ['Char Dham Yatra Checklist','/blog/char-dham-yatra-packing-list'],
        ]}/>
      </Article>
    </>
  );
}
