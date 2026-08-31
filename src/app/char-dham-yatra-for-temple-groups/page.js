import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Char Dham Yatra for Temple & Mandir Groups — 40–100 Pax' },
  description: 'Mandir samitis, bhajan mandals and satsang groups. Convoy planning, your own pujari, bhandara arrangements and per-member collection sheets.',
  keywords: ['char dham yatra for temple groups','mandir group char dham yatra','bhajan mandal char dham','samiti char dham yatra','char dham yatra 50 people','satsang group char dham','char dham bhandara group','temple committee pilgrimage tour'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-for-temple-groups` },
  openGraph: {
    title: 'Char Dham Yatra for Temple & Mandir Groups',
    description: 'Multi-bus convoys, your own pujari, bhandara arrangements, per-member collection sheets.',
    url: `${SITE.baseUrl}/char-dham-yatra-for-temple-groups`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra for temple and mandir groups' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra for Temple & Mandir Groups',
    description: 'Multi-bus convoys, your own pujari, bhandara arrangements.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham for Temple Groups' }],
  },
};

const FAQS = [
  { q:'Can you handle a group of 50 or 100 pilgrims?',
    a:'Yes. Above roughly 45 people the trip becomes a convoy rather than a bus — two or three Tempo Travellers or a coach plus support vehicles, because the roads above Rudraprayag do not take large coaches everywhere and hotel inventory in a single property runs out. We plan it as a convoy from the start rather than discovering the problem at Guptkashi. The largest practical single-property block on the Kedarnath route is usually 40 to 60 beds.' },
  { q:'Can our own pujari travel with the group?',
    a:'Yes, and most mandir groups want this. Your pujari travels as part of the group and conducts your own rituals at each dham. We arrange the temple-side logistics — timing, access and coordination with the local pandas — around your programme rather than imposing ours. If you would rather use a local pujari at each shrine, we arrange that instead.' },
  { q:'Can you arrange a bhandara or community kitchen?',
    a:'Yes, at the hotels and dharamshalas along the route, subject to their kitchen capacity. For a group of 60 or more this genuinely needs planning — we contract the property in advance rather than asking on the day. Some groups bring their own cooks and want kitchen access; that is workable at several of the properties we use, but it must be agreed at booking, not on arrival.' },
  { q:'How do you handle payment when 60 members are each contributing?',
    a:'We invoice the samiti or the organiser as a single booking, and give you a per-member collection sheet with the amount, dates and what is included so you can circulate it. Members pay the samiti, the samiti pays us in agreed instalments. We do not chase sixty individuals for money and you should not have to either. Payment goes to our business account, named on the written confirmation.' },
  { q:'Do large groups get a discount?',
    a:'Yes, and it is real rather than a headline. Above 15 pilgrims the per-head rate drops; above 40 it drops further because we can block-book vehicles and hotel floors on a single contract. The saving comes from actual purchasing, not from cutting the inclusions. Our standard group package page covers the 10 to 30 range; above that, ask for a quote.' },
  { q:'What about members who cannot do the Kedarnath trek?',
    a:'In any group of 50 there will be ten or fifteen who cannot manage 16 km. We plan for it explicitly — pony and palki booked in advance for those who need it, and a comfortable base at Sonprayag or Guptkashi with a staff member for anyone staying behind. What we will not do is leave elderly members sitting in a parked vehicle for nine hours, which is what happens when nobody plans this in advance.' },
  { q:'Can we set our own departure dates?',
    a:'Yes. Group bookings are private departures, so the dates are yours — useful if your samiti travels on a particular tithi, around a festival, or has to work around members\' availability. Fixed departures are for individual travellers. For a group of 40 or more we build the itinerary around your calendar.' },
  { q:'How far in advance should a temple group book?',
    a:'Four to six months for May and June, and that is not a sales line — blocking 50 beds in Guptkashi and Badrinath in peak season genuinely requires it. For September and October, two to three months is comfortable. If your group has fixed dates you cannot move, book earlier rather than later; we would rather turn you away in January than disappoint you in May.' },
];

export default function TempleGroups() {
  const blocks = buildSchema({
    slug:'char-dham-yatra-for-temple-groups',
    name:'Char Dham Yatra for Temple and Mandir Groups',
    description:'Char Dham Yatra arrangements for mandir samitis, bhajan mandals and satsang groups of 40 to 100 pilgrims, including convoy planning, own pujari, bhandara and per-member collection.',
    types:null,
    faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['For Temple Groups','/char-dham-yatra-for-temple-groups']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Mandir samitis · Bhajan mandals · 40–100 pilgrims" title="Char Dham Yatra for Temple Groups">
        Convoy planning, <strong style={{ color:'#FFD166' }}>your own pujari</strong>, bhandara
        arrangements and a per-member collection sheet — so the organiser is not chasing sixty people
        for money.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['For Temple Groups', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Temple and satsang groups get the best per-person rates on this route, from about ₹13,500–15,000 for forty or more.</strong> What matters more than price is planning for the spread: a group of forty contains people who will walk Kedarnath in five hours and people who need a palki, so trek days should split and regroup rather than move as one body. We handle registration for every member, arrange group meals, and can add a pujari for collective puja at each dham.
        </AnswerBox>
        <P>
          A mandir group is not a large family booking. The differences are structural: forty to a
          hundred people, a committee making decisions rather than one person, members contributing
          individually, usually your own pujari and your own ritual programme, and often a bhandara
          somewhere along the route. Handled as an oversized standard package, it goes wrong at
          Guptkashi. Planned as what it is, it works.
        </P>
        <P>
          If your group is between 10 and 30 pilgrims, our{' '}
          <Link href="/blog/char-dham-group-package" style={{ color:'var(--teal)', fontWeight:600 }}>standard group package</Link>{' '}
          is the right starting point. This page is for the larger, organised temple groups.
        </P>

        <H2>What Changes Above 40 People</H2>
        <Table
          head={['','Standard group (10–30)','Temple group (40–100)']}
          rows={[
            ['Vehicles','One or two Tempo Travellers','Convoy — multiple vehicles plus a support car'],
            ['Hotels','Single property per night','Usually split across two properties'],
            ['Decision-making','One organiser','A samiti, needing written proposals'],
            ['Payment','One payer','Per-member collection against a shared sheet'],
            ['Rituals','Local pujari at each dham','Frequently your own pujari travelling with you'],
            ['Meals','Hotel restaurant','Often a bhandara or contracted kitchen'],
            ['Dates','Fixed or private departure','Always private — your tithi, your calendar'],
          ]}
        />
        <Note tone="warn" title="The constraint nobody mentions until you are there">
          Hotel inventory on the Kedarnath route is limited. A single property at Guptkashi or Sonprayag
          typically holds 40 to 60 beds, so a group of 80 is split across two hotels whatever anybody
          promises at booking. An operator who tells you 80 people will stay together in one property in
          peak season has not checked. We tell you which nights are split before you pay, and we keep the
          group together at breakfast and departure so it does not feel like two trips.
        </Note>

        <H2>Your Pujari, Your Programme</H2>
        <P>
          Most mandir groups travel with their own pujari and their own ritual sequence, and that is the
          part an operator should adapt to rather than override. Your pujari travels as part of the
          group. We handle the logistics around the programme — arrival timings at each dham, access,
          and coordination with the local pandas who control the sanctum — so the rituals happen when
          your programme says they should.
        </P>
        <P>
          Groups who would rather use a local pujari at each shrine can do that instead; we arrange it.
          Either way it is decided at planning, not negotiated on the temple steps with sixty people
          waiting.
        </P>

        <H2>Bhandara and Group Meals</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Contracted in advance.</strong> Hotel and
          dharamshala kitchens along the route have real capacity limits. A bhandara for 60 is arranged
          weeks ahead, not on the day.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Your own cooks.</strong> Workable at several of the
          properties we use, and popular with groups who have dietary rules beyond standard satvik. Must
          be agreed at booking.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Jain and specific-diet catering.</strong> Standard
          for us, but tell us the numbers upfront rather than at the first meal.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Altitude and food.</strong> Heavy meals at
          Kedarnath and Badrinath cause more trouble than people expect. We plan lighter menus high up,
          and groups that ignore this regret it.</LI>
        </ul>

        <H2>How the Money Works</H2>
        <P>
          The awkward part of any samiti yatra is collection, and it should not fall on the operator or
          on one exhausted volunteer.
        </P>
        <div style={{ display:'flex', flexDirection:'column', gap:0, marginBottom:14 }}>
          {[
            ['We quote the samiti as one booking','A single written quote with hotels named, inclusions itemised, and the per-head figure derived from it.'],
            ['You get a collection sheet','Per-member amount, dates, what is included and what is not — formatted to circulate to members directly.'],
            ['Members pay the samiti','Your internal process, on your timeline. We are not involved.'],
            ['The samiti pays us in instalments','25% to confirm and block the hotels, balance before departure, to the business account on your confirmation.'],
            ['One invoice, one point of contact','You get a named person here. Not a call centre and not a different reply each time.'],
          ].map(([step, detail], i) => (
            <div key={step} style={{ display:'flex', gap:14, padding:'13px 0', borderBottom:'1px solid hsl(var(--border))' }}>
              <div style={{ background:'var(--navy)', color:'#fff', width:26, height:26, borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12.5, fontWeight:700, flexShrink:0 }}>{i+1}</div>
              <div>
                <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:3 }}>{step}</div>
                <div style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.75 }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <H2>Planning for the Members Who Cannot Walk</H2>
        <P>
          In any group of fifty there will be ten or fifteen who cannot manage the 16 km from Gaurikund
          to Kedarnath. This is the single most common failure in large group yatras — nobody plans for
          it, and elderly members end up waiting in a parked vehicle for nine hours while everyone else
          takes darshan.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>Pony and palki booked in advance for named members, not scrambled for at Gaurikund. Rates on our{' '}
            <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color:'var(--teal)', fontWeight:600 }}>pony and palki page</Link>.</LI>
          <LI>A comfortable base at Sonprayag or Guptkashi with a staff member present for anyone staying back.</LI>
          <LI>Helicopter for members who can afford it and cannot walk — see the{' '}
            <Link href="/char-dham-helicopter-booking-guide" style={{ color:'var(--teal)', fontWeight:600 }}>helicopter booking guide</Link>{' '}
            for how the 2026 rules work.</LI>
          <LI>Honest advice at planning about who should attempt what. Our{' '}
            <Link href="/blog/senior-citizen-char-dham" style={{ color:'var(--teal)', fontWeight:600 }}>senior citizen guide</Link>{' '}
            covers the medical side.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Char Dham Yatra registration — Tourist Care Uttarakhand','https://registrationandtouristcare.uk.gov.in/'],
          ['Uttarakhand Transport Department — commercial vehicle permits','https://transport.uk.gov.in/'],
        ]}/>

        <CTA
          title="Tell us your numbers and your dates"
          blurb="Send the member count, your preferred tithi or window, and whether you are bringing a pujari. You get a written proposal the samiti can circulate."
          waMessage="Namaste! We are a mandir group planning Char Dham Yatra. Please send a proposal — I will share our member count and dates."
        />

        <Related links={[
          ['Group Package (10–30)','/blog/char-dham-group-package'],
          ['Corporate Booking','/char-dham-yatra-corporate-booking'],
          ['Senior Citizen Char Dham','/blog/senior-citizen-char-dham'],
          ['Pony & Palki Rates','/kedarnath-pony-palki-kandi-rates'],
          ['Char Dham Yatra Package','/char-dham-yatra'],
          ['Cost Calculator','/char-dham-yatra-cost-calculator'],
        ]}/>
      </Article>
    </>
  );
}
