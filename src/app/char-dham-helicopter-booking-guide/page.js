import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `Char Dham Helicopter Booking ${SITE.season} — IRCTC HeliYatra Guide` },
  description: `Kedarnath shuttle seats are sold only on IRCTC HeliYatra, and DGCA cut flights by about 30% for ${SITE.season}. How the booking actually works, and what is fake.`,
  keywords: ['char dham helicopter booking','irctc heliyatra','kedarnath helicopter booking online','heliyatra irctc portal',`char dham helicopter rules ${SITE.season}`,'kedarnath helicopter ticket booking','dgca helicopter char dham','helicopter booking scam kedarnath'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-helicopter-booking-guide` },
  openGraph: {
    title: `Char Dham Helicopter Booking ${SITE.season} — IRCTC HeliYatra Guide`,
    description: `Kedarnath shuttle seats sell only on IRCTC HeliYatra. DGCA cut flights ~30% for ${SITE.season}. How booking works.`,
    url: `${SITE.baseUrl}/char-dham-helicopter-booking-guide`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham helicopter booking guide — IRCTC HeliYatra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Char Dham Helicopter Booking ${SITE.season} — IRCTC HeliYatra Guide`,
    description: 'Kedarnath shuttle seats sell only on IRCTC HeliYatra. How booking works.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Helicopter Booking Guide' }],
  },
};

const FAQS = [
  { q:'Where do I book Kedarnath helicopter tickets?',
    a:'Kedarnath shuttle seats — the short hops from Phata, Sersi and Guptkashi — are sold through the IRCTC HeliYatra portal and nowhere else. Walk-up booking at the helipads has been discontinued. Any other website selling you a Kedarnath shuttle seat is either reselling at a markup or is not selling you a real ticket. This is the single most important thing to know about helicopter booking in 2026.' },
  { q:'What is the difference between a shuttle seat and a helicopter package?',
    a:'They are different products. A shuttle seat is a point-to-point hop to Kedarnath from Phata, Sersi or Guptkashi, sold by IRCTC at regulated fares. A Char Dham helicopter package is a multi-day charter covering all four dhams with hotels, ground transfers and darshan assistance, sold by tour operators. Confusing the two is why people arrive expecting one and find they bought the other.' },
  { q:'Do I need a yatra registration number before booking a helicopter?',
    a:'Yes, and this catches people out. You must first obtain a Yatra Registration Number, or a Group ID for a family, through the Uttarakhand Tourist Care registration system. The HeliYatra portal will reject you at the login stage without it. Do the registration first, then book the helicopter — not the other way round.' },
  { q:'What changed for helicopter services in 2026?',
    a:'DGCA and UCADA enforced a substantial reduction in Char Dham helicopter operations — reported at around 30% fewer flights, with daily Kedarnath shuttles capped in the region of 184. The reduction followed safety reviews of the sector. The practical effect is fewer seats chasing the same demand, so seats sell faster and prices across the whole helicopter market have firmed. Book earlier than you would have needed to in previous seasons.' },
  { q:'When does the HeliYatra portal open for bookings?',
    a:'Typically in the first week of April, roughly three weeks before the Kedarnath doors open. Exact dates are announced by IRCTC each season. Popular slots go quickly, particularly for May and June, so have your yatra registration completed and your traveller details ready before the portal opens rather than scrambling on the day.' },
  { q:'Are helicopter flights ever cancelled, and do I get a refund?',
    a:'Cancellations are common and are almost always weather. The Kedarnath valley closes in cloud with very little warning and operators will not fly into it, which is exactly what you want from them. Refunds for operator-cancelled flights follow the operator or IRCTC policy. What is not refundable is your time — build a spare day into any itinerary with a helicopter leg, because a weather hold can push you a full day.' },
  { q:'How do I avoid helicopter booking scams?',
    a:'Three rules. Book Kedarnath shuttle seats only on the IRCTC HeliYatra portal. Never pay for a "confirmed" shuttle seat to a personal account or through a WhatsApp link. And be suspicious of any site claiming guaranteed same-day seats in peak season, because the capacity does not exist. For a full Char Dham helicopter package booked through an operator, apply the same checks you would to any operator.' },
  { q:'Can you book the helicopter for me?',
    a:'For a full Char Dham helicopter package, yes — that is a product we sell, and the details are on our helicopter package page. For Kedarnath shuttle seats specifically, we will help you through the IRCTC process and time it properly, but the booking is made in your name on the government portal. We are not going to claim we can secure IRCTC seats that the portal allocates publicly.' },
];

export default function HelicopterBookingGuide() {
  const blocks = buildSchema({
    slug:'char-dham-helicopter-booking-guide',
    name:'Char Dham Helicopter Booking Guide 2026',
    description:'How Char Dham and Kedarnath helicopter booking works in 2026 — the IRCTC HeliYatra portal, mandatory yatra registration, DGCA flight reductions, and how to avoid fake booking sites.',
    types:null,
    faqs:FAQS,
    crumbs:[['Char Dham Helicopter','/char-dham-helicopter'],['Booking Guide','/char-dham-helicopter-booking-guide']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="2026 rules · IRCTC HeliYatra · DGCA capacity cut" title="Char Dham Helicopter Booking Guide">
        Kedarnath shuttle seats are sold <strong style={{ color:'#FFD166' }}>only on the IRCTC HeliYatra
        portal</strong>. Helipad walk-ups are gone, DGCA cut flights by roughly 30%, and you need a yatra
        registration number before you can even log in.
      </Hero>

      <Crumbs trail={[['Char Dham Helicopter','/char-dham-helicopter'],['Booking Guide', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Two different things get called a Char Dham helicopter booking.</strong> One is a full charter covering all four dhams in 5N/6D from Dehradun's Sahastradhara helipad, at roughly ₹2,30,000 per person. The other is a single Kedarnath shuttle seat from Phata, Sersi or Guptkashi at ₹7,000–9,000 one way, sold only on IRCTC's HeliYatra portal. A package advertised near ₹85,000 is a road trip with shuttle tickets bought separately, not a charter.
        </AnswerBox>
        <P>
          Helicopter booking for the Char Dham changed substantially for the 2026 season and a great many
          websites have not caught up. Kedarnath shuttle seats now sell through one government portal.
          Walk-up booking at the helipads has been discontinued. DGCA and UCADA reduced the number of
          flights by a reported 30%. And none of it works until you have a yatra registration number.
        </P>
        <P>
          This page explains the booking process. If you are looking for our own multi-day helicopter
          package with hotels and transfers, that is a different product and it lives on the{' '}
          <Link href="/char-dham-helicopter" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham helicopter package page</Link>.
        </P>

        <Note tone="alert" title="The one thing to take away">
          Kedarnath shuttle seats — the hops from Phata, Sersi and Guptkashi — are sold on{' '}
          <strong>IRCTC HeliYatra and nowhere else</strong>. Any other site selling you one is either
          adding a markup to a public ticket or is not selling you a real seat. Book it yourself, on the
          portal, in your own name.
        </Note>

        <H2>Two Different Products People Confuse</H2>
        <Table
          head={['','Kedarnath shuttle seat','Char Dham helicopter package']}
          rows={[
            ['What it is','A point-to-point hop to Kedarnath','A multi-day charter covering all four dhams'],
            ['Sold by','IRCTC HeliYatra portal only','Tour operators, including us'],
            ['Covers','The flight, both ways','Flights, hotels, ground transfers, darshan assistance'],
            ['Fare','Regulated, published by IRCTC','Operator package price'],
            ['Where to book','irctc.co.in HeliYatra','Directly with an operator you have verified'],
            ['Typical use','You are doing the yatra by road and want to skip the 16 km trek','You want the whole yatra in 5–6 days by air'],
          ]}
        />

        <H2>The Booking Sequence, in Order</H2>
        <div style={{ display:'flex', flexDirection:'column', gap:0, marginBottom:14 }}>
          {[
            ['Register for the yatra first','Get a Yatra Registration Number, or a Group ID for a family, through the Uttarakhand Tourist Care system. Without it the HeliYatra portal rejects you at login. This is the step people skip.'],
            ['Wait for the portal to open','Typically the first week of April, about three weeks before the Kedarnath doors open. IRCTC announce the date each season.'],
            ['Have your details ready','Names exactly as on ID, ages, weights, registration number. Popular slots go in minutes, not hours.'],
            ['Book in your own name','On irctc.co.in. Not through an intermediary, not via a WhatsApp link, not to a personal account.'],
            ['Build in a spare day','Weather cancellations are routine at Kedarnath. An itinerary with no slack becomes a problem the first time cloud closes the valley.'],
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

        <H2>What the 2026 Capacity Cut Means for You</H2>
        <P>
          DGCA and UCADA reduced Char Dham helicopter operations for 2026 following safety reviews of the
          sector, with reported cuts of around 30% and daily Kedarnath shuttles capped in the region of
          184 flights. Whatever the precise figure by the time you read this, the direction is settled:
          fewer seats, same demand.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Book much earlier.</strong> Timelines that worked in previous seasons do not any more.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Expect firmer prices.</strong> Across the whole helicopter market, not just shuttles.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Distrust guaranteed availability.</strong> Anyone promising same-day peak-season seats is describing capacity that does not exist.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Have a road plan.</strong> If the helicopter falls through, know what the pony, palki and trek options cost. Our{' '}
            <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color:'var(--teal)', fontWeight:600 }}>pony and palki rates page</Link>{' '}
            has the current figures.</LI>
        </ul>
        <Note tone="warn" title="Why the cuts happened, and why that is good">
          The reductions followed safety reviews of helicopter operations in the Kedarnath valley. Flying
          a crowded shuttle circuit into a narrow Himalayan valley in variable weather is genuinely
          demanding, and a regulator constraining the number of movements is a regulator doing its job.
          If your flight is cancelled for weather, that is the system working, not failing you.
        </Note>

        <H2>Helicopter Booking Scams</H2>
        <P>
          Helicopter tickets attract fraud because demand hugely exceeds supply and the sums are large.
          The patterns are consistent:
        </P>
        <Table
          head={['The pitch','What it actually is']}
          rows={[
            ['"Confirmed Kedarnath seats, pay now"','Shuttle seats come from IRCTC. Nobody holds a private stock of them.'],
            ['A booking link sent over WhatsApp','Check the domain. IRCTC bookings happen on irctc.co.in and nowhere else.'],
            ['Payment to a personal UPI or account','No legitimate operator asks for this. Business account, named on your confirmation.'],
            ['"Guaranteed same-day seats in June"','The capacity does not exist, particularly after the 2026 cuts.'],
            ['A price far below the published fare','Regulated fares are published. Well below means it is not a real ticket.'],
          ]}
        />
        <P>
          Our{' '}
          <Link href="/char-dham-yatra-scams" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham scams page</Link>{' '}
          covers the wider set, and{' '}
          <Link href="/how-to-choose-char-dham-tour-operator" style={{ color:'var(--teal)', fontWeight:600 }}>how to choose an operator</Link>{' '}
          is the verification checklist.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['IRCTC — official booking portal','https://www.irctc.co.in/'],
          ['Directorate General of Civil Aviation (DGCA)','https://www.dgca.gov.in/'],
          ['Uttarakhand Civil Aviation Development Authority (UCADA)','https://ucada.uk.gov.in/'],
          ['Char Dham Yatra registration — Tourist Care Uttarakhand','https://registrationandtouristcare.uk.gov.in/'],
        ]}/>

        <CTA
          title="Planning a helicopter yatra?"
          blurb="We will tell you which parts you should book yourself on IRCTC and which parts we can actually help with. Straight answers, including where we are not the right choice."
          waMessage="Namaste! I want to plan a Char Dham helicopter yatra. Please advise on booking and availability."
        />

        <Related links={[
          ['Char Dham Helicopter Package','/char-dham-helicopter'],
          ['Kedarnath VIP Darshan','/kedarnath-vip-darshan'],
          ['Pony & Palki Rates','/kedarnath-pony-palki-kandi-rates'],
          ['Kedarnath Helicopter Booking','/blog/kedarnath-helicopter-booking'],
          ['How to Choose an Operator','/how-to-choose-char-dham-tour-operator'],
          ['Char Dham Yatra Scams','/char-dham-yatra-scams'],
        ]}/>
      </Article>
    </>
  );
}
