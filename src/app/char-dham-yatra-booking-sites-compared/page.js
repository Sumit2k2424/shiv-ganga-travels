import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `Where to Book Char Dham Yatra — Sites Compared ${SITE.season}` },
  description: 'OTAs, marketplaces, local operators and doing it yourself. What each type actually is, what the margin looks like, and which one fits your trip.',
  keywords: ['where to book char dham yatra','best site to book char dham','char dham booking sites','char dham yatra online booking','book char dham yatra online','char dham travel agency comparison','char dham yatra booking platform'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-booking-sites-compared` },
  openGraph: {
    title: `Where to Book Char Dham Yatra — Sites Compared ${SITE.season}`,
    description: 'OTAs, marketplaces, local operators, DIY. What each is, what it costs you, and which fits.',
    url: `${SITE.baseUrl}/char-dham-yatra-booking-sites-compared`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra booking options compared' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Where to Book Char Dham Yatra — Sites Compared ${SITE.season}`,
    description: 'OTAs, marketplaces, local operators, DIY. Which one fits your trip.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Booking Sites Compared' }],
  },
};

const FAQS = [
  { q:'What is the best website to book Char Dham Yatra?',
    a:'There is no single best one, and anybody who tells you otherwise is selling something — including us. There are four ways to book: an online travel agency, an experience marketplace, a local operator direct, or assembling it yourself. Each wins in different circumstances. If you want the short answer: book direct with a verifiable local operator if you can check them out, and use a platform if you cannot.' },
  { q:'Is it cheaper to book Char Dham directly with an operator?',
    a:'Usually, because there is one fewer party taking a margin. The operator price is the floor — every other channel is that price plus something. What varies is how much, and occasionally a platform promotion genuinely undercuts direct rates for a while. The way to know is to get a written quote from an operator with the inclusions listed and compare it line by line, not headline against headline.' },
  { q:'Are online travel agencies safe for Char Dham packages?',
    a:'They are safe in the sense that you will not lose your money — the payment protection and dispute process are real and worth something. What they cannot do is solve a problem on a mountain road at 6 AM, because the company that can solve it is the local operator they subcontracted to. For flights and hotels an OTA is excellent. For a ten-day trip on landslide-prone roads it is a layer between you and the people who can actually act.' },
  { q:'Can I book the Char Dham Yatra myself without any agent?',
    a:'Yes, and some people should. You would need to arrange the yatra registration, a vehicle and driver for ten days, hotels in Barkot, Uttarkashi, Guptkashi, Badrinath and elsewhere, plus pony or palki at Kedarnath. It is entirely doable if you have time, patience and some Hindi. It usually saves less than people expect, because operators buy hotel rooms at rates individuals cannot get, and it costs a great deal more in effort.' },
  { q:'How do I compare two Char Dham quotes fairly?',
    a:'Line by line, never headline to headline. Check: how many nights and where; hotel names, not star ratings; which meals; vehicle type and whether it is shared or private; whether AC in hilly areas costs extra; whether registration is included; and what pony, palki and helicopter are treated as. Two quotes ₹6,000 apart usually differ in three of those, and the cheaper one is frequently the more expensive trip.' },
  { q:'What should make me walk away from a booking?',
    a:'No verifiable office address. Refusal to name hotels in writing. A price quoted in two minutes on a railway station platform. Pressure to pay the full amount immediately to a personal account. And any request to change the payment account by WhatsApp message alone — that is the single most common way pilgrims lose money, and no legitimate operator does it.' },
  { q:'Do I need a travel agent for Char Dham at all?',
    a:'Not strictly. You need the yatra registration, transport, accommodation and, for Kedarnath, a plan for the 16 km. An operator bundles those and absorbs the problems. If your group is two adults, flexible on dates and comfortable improvising, you can do it yourself. If it includes elderly parents, children, or anyone who cannot walk far, the bundling is worth paying for.' },
];

export default function BookingSitesCompared() {
  const blocks = buildSchema({
    slug:'char-dham-yatra-booking-sites-compared',
    name:'Where to Book Char Dham Yatra — Booking Options Compared',
    description:'Comparison of the four ways to book a Char Dham Yatra: online travel agencies, experience marketplaces, direct local operators and self-planning.',
    types:null,
    faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['Booking Sites Compared','/char-dham-yatra-booking-sites-compared']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Four ways to book · Honest comparison" title="Where to Book Char Dham Yatra">
        OTAs, marketplaces, local operators, or doing it yourself. We are one of those four, and we have
        written this to be <strong style={{ color:'#FFD166' }}>useful even if you do not book with us</strong>.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['Booking Sites Compared', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Most Char Dham listings online are aggregators reselling an operator's trip with 15–25% added on top.</strong> The practical test is who answers when something goes wrong at Sonprayag at 6am — the operator running the vehicle, or a call centre. Compare on what is actually included rather than headline price, check for a verifiable registered address, and confirm the vehicles carry current Green Cards. Shiv Ganga Travels has run this circuit direct from Haridwar since 2010.
        </AnswerBox>
        <P>
          There are four ways to book a Char Dham Yatra, and they are genuinely different products rather
          than the same thing at different prices. Understanding which one you are buying matters more
          than the headline number, because the cheapest quote on a comparison page is regularly the most
          expensive trip once you read the inclusions.
        </P>
        <P>
          We should say plainly that we are a direct operator, so we have a horse in this race. We have
          tried to write the section on where our own model loses as carefully as the rest.
        </P>

        <H2>The Four Options</H2>
        <Table
          head={['Type','Examples','What it is','Margin over operator price']}
          rows={[
            ['Online travel agency','MakeMyTrip, Yatra, EaseMyTrip, Cleartrip','Books flights and hotels itself; Char Dham packages are fulfilled by a partner operator','Platform margin on top'],
            ['Experience marketplace','Thrillophilia and similar','Lists third-party tours, handles discovery and payment','Platform margin on top'],
            ['Direct local operator','Us, and other Haridwar/Rishikesh firms','Owns the vehicles, contracts the hotels, runs the trip','None — this is the floor'],
            ['Do it yourself','—','You arrange registration, vehicle, hotels, pony/palki','None, but you pay retail on rooms'],
          ]}
        />

        <H2>What Each One Is Actually Good At</H2>

        <div style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'17px 19px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:15.5, color:'var(--navy)', marginBottom:8 }}>Online travel agencies</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:8 }}>
            <strong>Good at:</strong> flights and hotels, which is what they are built for. Payment
            protection, a formal complaints process, and reward points if you already use them.
          </p>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
            <strong>Weak at:</strong> anything that has to be decided on the road. Your Char Dham package
            is fulfilled by a local operator you did not choose, and when a landslide closes the route
            above Sonprayag, the chain from you to support to operator to driver is three handoffs long.
          </p>
        </div>

        <div style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'17px 19px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:15.5, color:'var(--navy)', marginBottom:8 }}>Experience marketplaces</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:8 }}>
            <strong>Good at:</strong> discovery and review volume. Seeing twenty itineraries side by side
            is genuinely hard to replicate, and enough reviews to be statistically meaningful is worth
            something when you are choosing between strangers.
          </p>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
            <strong>Weak at:</strong> customisation and same-day decisions. Listings are fixed products,
            and the operator behind one is not always disclosed until you have paid. Our{' '}
            <Link href="/shiv-ganga-travels-vs-thrillophilia" style={{ color:'var(--teal)', fontWeight:600 }}>Thrillophilia comparison</Link>{' '}
            goes into this in detail.
          </p>
        </div>

        <div style={{ background:'#fff', border:'2px solid var(--teal)', borderRadius:12, padding:'17px 19px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:15.5, color:'var(--navy)', marginBottom:8 }}>Direct local operator — our model, weaknesses included</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:8 }}>
            <strong>Good at:</strong> price, because there is no margin above the operator rate.
            Customisation. And decisions on the road, which is the one thing that reliably goes wrong on
            these routes.
          </p>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
            <strong>Weak at:</strong> being verifiable by a stranger. If you have never heard of us, you
            are trusting a family firm in Haridwar on the strength of its own website, with no platform
            standing behind the transaction and a smaller review count than a marketplace listing. That
            is a real disadvantage and it is the reason the scam problem exists at all. Check us the way
            you would check anyone — see the section below.
          </p>
        </div>

        <div style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'17px 19px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:15.5, color:'var(--navy)', marginBottom:8 }}>Doing it yourself</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:8 }}>
            <strong>Good at:</strong> total control, and a genuinely better trip for the right person —
            usually a couple with time, flexible dates and some Hindi.
          </p>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
            <strong>Weak at:</strong> saving money, oddly. Operators buy hotel rooms on annual contracts
            at rates individuals cannot get, so the saving is smaller than people expect while the effort
            is much larger. Our{' '}
            <Link href="/blog/char-dham-yatra-package-vs-self-planned" style={{ color:'var(--teal)', fontWeight:600 }}>package vs self-planned breakdown</Link>{' '}
            has the arithmetic.
          </p>
        </div>

        <H2>Which One Fits You</H2>
        <Table
          head={['If this is you','Book through']}
          rows={[
            ['You cannot verify any operator and want protection','An OTA or marketplace'],
            ['You want the lowest price for the same inclusions','A direct operator'],
            ['You are travelling with elderly parents','A direct operator — you want one number to call'],
            ['You want a custom itinerary or unusual dates','A direct operator'],
            ['You are two adults, flexible, comfortable improvising','Consider doing it yourself'],
            ['You have a fixed return flight','A direct operator, and build in a buffer day'],
            ['A promotion genuinely beats the direct rate','Take the promotion'],
          ]}
        />

        <H2>How to Compare Two Quotes Properly</H2>
        <P>
          Headline prices are close to meaningless on this route because the inclusions vary so much.
          Put any two quotes side by side and check these seven lines:
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Nights and locations.</strong> A 9N itinerary and a 7N one are not the same trip.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Hotel names, not star ratings.</strong> &quot;3-star equivalent&quot; means nothing in Guptkashi.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Which meals.</strong> Breakfast-only versus breakfast and dinner is a real difference over ten days.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Vehicle, and shared or private.</strong> A seat in a shared Tempo Traveller is not a private Innova.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>AC in the hills.</strong> Frequently an extra. Ours is ₹2,000 and we say so upfront.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Registration.</strong> Included or your problem?</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Pony, palki, helicopter.</strong> Almost always excluded. At Kedarnath that is ₹3,500 to ₹12,000 per person.</LI>
        </ul>
        <Note tone="good" title="Use our calculator on any quote">
          Our{' '}
          <Link href="/char-dham-yatra-cost-calculator" style={{ color:'#15803D', fontWeight:700 }}>cost calculator</Link>{' '}
          builds a realistic total from your group size, tier and add-ons. Run it, then compare the result
          against whatever anyone has quoted you — including us. If a quote is far below what the
          calculator produces, something has been left out of it.
        </Note>

        <H2>Checks That Apply to Everyone, Us Included</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>A real office address you can look up. Ours: Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar 249410.</LI>
          <LI>Hotel names in writing before you pay.</LI>
          <LI>Driver name and vehicle registration the evening before departure.</LI>
          <LI>Payment to a business account named on your written confirmation — never to a personal account, and never to details changed by WhatsApp.</LI>
          <LI>Reviews under the company&apos;s own name, on a platform it does not control.</LI>
        </ul>
        <P>
          The{' '}
          <Link href="/char-dham-yatra-scams" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham scams page</Link>{' '}
          covers the specific routines that cost people money every season, and{' '}
          <Link href="/how-to-choose-char-dham-tour-operator" style={{ color:'var(--teal)', fontWeight:600 }}>how to choose an operator</Link>{' '}
          is the longer buyer&apos;s guide.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — registered operators','https://uttarakhandtourism.gov.in/'],
          ['Char Dham Yatra registration — Tourist Care Uttarakhand','https://registrationandtouristcare.uk.gov.in/'],
          ['Uttarakhand Transport Department','https://transport.uk.gov.in/'],
        ]}/>

        <CTA
          title="Get a quote you can actually compare"
          blurb="Hotels named, inclusions itemised, nothing hidden below the fold. Put it next to anything else you are looking at."
          waMessage="Namaste! Please send me a detailed Char Dham quote with hotels named so I can compare options."
        />

        <Related links={[
          ['How to Choose an Operator','/how-to-choose-char-dham-tour-operator'],
          ['vs Thrillophilia','/shiv-ganga-travels-vs-thrillophilia'],
          ['vs MakeMyTrip','/shiv-ganga-travels-vs-makemytrip-char-dham'],
          ['Direct Operator vs Aggregator','/direct-operator-vs-travel-aggregator-char-dham'],
          ['Cost Calculator','/char-dham-yatra-cost-calculator'],
          ['Char Dham Yatra Scams','/char-dham-yatra-scams'],
          ['Package vs Self-Planned','/blog/char-dham-yatra-package-vs-self-planned'],
        ]}/>
      </Article>
    </>
  );
}
