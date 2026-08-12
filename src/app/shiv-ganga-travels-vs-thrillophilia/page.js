import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

export const metadata = {
  title: { absolute: 'Shiv Ganga Travels vs Thrillophilia — Char Dham 2026' },
  description: 'Thrillophilia is a marketplace that lists local operators. We are one of the operators. What that difference means for your booking, honestly set out.',
  keywords: ['shiv ganga travels vs thrillophilia','thrillophilia char dham review','thrillophilia char dham yatra','book char dham direct or thrillophilia','thrillophilia alternative char dham','char dham marketplace vs operator'],
  alternates: { canonical: `${SITE.baseUrl}/shiv-ganga-travels-vs-thrillophilia` },
  openGraph: {
    title: 'Shiv Ganga Travels vs Thrillophilia — Char Dham 2026',
    description: 'A marketplace lists operators. We are an operator. What that actually changes for your yatra.',
    url: `${SITE.baseUrl}/shiv-ganga-travels-vs-thrillophilia`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Shiv Ganga Travels compared with Thrillophilia for Char Dham Yatra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiv Ganga Travels vs Thrillophilia — Char Dham 2026',
    description: 'A marketplace lists operators. We are an operator. What that changes.',
    images: [{ url: '/opengraph-image', alt: 'Shiv Ganga Travels vs Thrillophilia | Char Dham' }],
  },
};

const FAQS = [
  { q:'Is Thrillophilia a tour operator or a booking platform?',
    a:'It is a marketplace. Thrillophilia lists tours and experiences that are operated by third-party companies, and takes a margin on the booking. For a Char Dham package that means a local Uttarakhand operator — someone with vehicles, driver contracts and hotel relationships in Garhwal — actually runs your yatra. The platform handles discovery, the listing and the payment.' },
  { q:'So who actually runs the trip if I book through a marketplace?',
    a:'A local operator, and which one depends on the listing. That is not a criticism — plenty of good operators list on marketplaces, and the platform gives them reach they could not build alone. It just means the company you paid is not the company driving your vehicle. If you want to know who will be, ask before you pay; a straight answer is a good sign either way.' },
  { q:'Does booking direct actually cost less?',
    a:'Usually, because there is one fewer party taking a margin. Our 9N/10D Char Dham from Haridwar is ₹13,900 per person and that is the operator price with nothing stacked on it. What we will not do is quote you a Thrillophilia figure on this page, because marketplace prices change with the listing, the season and whatever promotion is running, and a stale number here would be worse than no number. Compare our published rate against whatever you are quoted today.' },
  { q:'What do marketplaces do better?',
    a:'Three things, genuinely. Discovery — you can see many options in one place, which is hard to replicate. Payment protection and a formal dispute process, which matters if you are booking a company you know nothing about. And review volume large enough to be statistically meaningful. If you are choosing between operators you cannot verify, a marketplace is a reasonable way to reduce risk.' },
  { q:'When should I use a marketplace instead of booking direct?',
    a:'When you cannot verify the operator yourself, when you want the platform sitting between you and a company you have never spoken to, or when a promotion genuinely undercuts the direct rate. We would rather tell you that than pretend there is never a case for it. Where direct wins is when something changes on the road — and on the Char Dham routes, something usually does.' },
  { q:'What happens when the itinerary changes mid-yatra?',
    a:'This is the real difference and it is worth understanding before you book. Landslides, weather holds and road closures are routine on these routes. When one happens, the decision has to be made in the valley, that day — a different hotel at Guptkashi, reordering the dhams, holding for a road to reopen. Our driver and our office make that call directly. Through a platform, the chain runs from you to platform support to the operator to the driver, and the driver is the only one who can actually act.' },
  { q:'How can I check whether an operator is real?',
    a:'Ask for the office address and look it up. Ask who owns the vehicles. Ask for the hotel names in writing, not the category. Ask for the driver\'s name the evening before. Any legitimate operator answers all four without hesitating, us included. We have written the longer version of this on our how to choose a Char Dham operator page.' },
];

export default function VsThrillophilia() {
  const blocks = buildSchema({
    slug:'shiv-ganga-travels-vs-thrillophilia',
    name:'Shiv Ganga Travels vs Thrillophilia — Char Dham Yatra',
    description:'Comparison of booking a Char Dham Yatra through the Thrillophilia marketplace versus booking directly with Shiv Ganga Travels, a Haridwar-based operator.',
    types:null,
    faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['vs Thrillophilia','/shiv-ganga-travels-vs-thrillophilia']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Comparison · Marketplace vs direct operator" title="Shiv Ganga Travels vs Thrillophilia">
        Thrillophilia is a <strong style={{ color:'#FFD166' }}>marketplace that lists operators</strong>.
        We are one of the operators. This page sets out what that difference actually changes — including
        where the marketplace is the better choice.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['vs Thrillophilia', null]]}/>

      <Article>
        <Updated/>

        <P>
          The honest version of this comparison is not &quot;we are good and they are bad&quot;. It is
          that these are two different kinds of company. Thrillophilia is a marketplace: it lists tours
          run by third-party operators, handles discovery and payment, and takes a margin. We are a
          Haridwar tour operator that has run vehicles on the Char Dham routes since 2010. When you book
          a Char Dham package on any marketplace, a company like ours runs it.
        </P>
        <P>
          Whether that layer is worth paying for depends entirely on your situation, and this page tries
          to give you a straight answer rather than a sales pitch.
        </P>

        <H2>The Structural Difference</H2>
        <Table
          head={['','Marketplace listing','Direct operator (us)']}
          rows={[
            ['What the company is','A platform that lists third-party tours','The company that owns the vehicles and runs the trip'],
            ['Who drives your vehicle','A local operator, assigned to the listing','Our driver, on our payroll'],
            ['Who books your hotels','The operating partner','Us, on direct contracts'],
            ['Margins in the price','Operator price plus platform margin','Operator price'],
            ['Who answers at 6 AM in Guptkashi','Platform support, who relay to the operator','The office, and the driver directly'],
            ['Who decides when a road closes','The operator on the ground','The same person — you just reach them faster'],
          ]}
        />

        <Note tone="info" title="What a marketplace is genuinely better at">
          Discovery, payment protection and review volume. If you are choosing between operators you
          have no way to verify, a platform sitting in the middle is a reasonable way to reduce your
          risk, and it has a formal dispute process that a small family firm cannot match. We are not
          going to pretend otherwise. If you have never heard of us and cannot check us out, that
          protection has real value.
        </Note>

        <H2>Our Price, and Why We Are Not Quoting Theirs</H2>
        <P>
          Our 9N/10D Char Dham from Haridwar is{' '}
          <strong style={{ color:'var(--navy)' }}>₹13,900 per person</strong>, direct, with the
          inclusions listed on the{' '}
          <Link href="/char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>package page</Link>.
          That is the operator rate.
        </P>
        <P>
          We are deliberately not putting a Thrillophilia figure next to it. Marketplace prices move with
          the listing, the season and whatever promotion is live, and a number we scraped in August would
          be wrong by October — which would make this page dishonest even if it flattered us. Look up
          whatever you are quoted today and compare it against our published rate yourself. If theirs is
          lower for a comparable inclusion list, take it, and we will still answer the phone if you have
          questions about the route.
        </P>

        <H2>Where the Difference Actually Bites</H2>
        <P>
          Not at booking. At booking, everything looks the same — a nice itinerary, a confirmation email,
          a payment receipt. The difference shows up on day four, when the road above Sonprayag closes
          and something has to change.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>The decision has to be local.</strong> Whether to
          wait for a road to clear, divert, or reorder the dhams is a judgement made in the valley, that
          morning, by someone who knows the route. No support desk anywhere can make it.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Every extra link adds delay.</strong> You to
          platform support to operator to driver is three handoffs. You to us to driver is one, and quite
          often you simply call the driver.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Rebooking a hotel needs a relationship.</strong>
          Finding four rooms in Guptkashi at short notice in peak season is a phone call between people
          who have done business for years. It is not a booking-engine query.</LI>
        </ul>
        <P>
          This is why we keep saying the same thing across the site: the Char Dham routes are high
          mountain roads and the plan changes. Our{' '}
          <Link href="/direct-operator-vs-travel-aggregator-char-dham" style={{ color:'var(--teal)', fontWeight:600 }}>direct operator vs aggregator page</Link>{' '}
          goes into the general version of this argument, and our{' '}
          <Link href="/shiv-ganga-travels-vs-makemytrip-char-dham" style={{ color:'var(--teal)', fontWeight:600 }}>MakeMyTrip comparison</Link>{' '}
          covers the OTA case specifically.
        </P>

        <H2>Which Should You Choose?</H2>
        <Table
          head={['Your situation','Our honest recommendation']}
          rows={[
            ['You cannot verify any operator and want a middleman','Use the marketplace. The protection is worth it.'],
            ['A promotion genuinely beats the direct rate for the same inclusions','Take the promotion.'],
            ['You are travelling with elderly parents or young children','Book direct. You want one phone number, not a queue.'],
            ['You have a fixed return flight or train','Book direct. Changes need someone who can act same-day.'],
            ['You want a customised itinerary','Book direct. Marketplace listings are fixed products.'],
            ['You are comparing on price alone, same inclusions','Whichever is cheaper. Check the inclusions line by line first.'],
          ]}
        />

        <H2>How to Check Us Out</H2>
        <P>
          Everything we ask you to check about anyone else applies to us:
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>Our office is at Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar 249410.
          It is a real address and you can walk into it.</LI>
          <LI>We have been operating since 2010. Founder: Dhanesh Chandra Mishra, a retired Indian Army
          officer. Our <Link href="/about" style={{ color:'var(--teal)', fontWeight:600 }}>about page</Link> has the background.</LI>
          <LI>Our reviews are on Google under our own name, not curated by us.</LI>
          <LI>We will give you hotel names in writing before you pay, and the driver&apos;s name and
          vehicle number the evening before departure.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — registered operators','https://uttarakhandtourism.gov.in/'],
          ['Uttarakhand Transport Department','https://transport.uk.gov.in/'],
        ]}/>

        <CTA
          title="Compare us on the actual numbers"
          blurb="Send us your dates and group size. You get a written quote with hotels named — compare it line by line against anything else you are looking at."
          waMessage="Namaste! Please send me a written Char Dham quote so I can compare it with other options."
        />

        <Related links={[
          ['Char Dham Yatra Package','/char-dham-yatra'],
          ['How to Choose an Operator','/how-to-choose-char-dham-tour-operator'],
          ['Booking Sites Compared','/char-dham-yatra-booking-sites-compared'],
          ['vs MakeMyTrip','/shiv-ganga-travels-vs-makemytrip-char-dham'],
          ['Direct Operator vs Aggregator','/direct-operator-vs-travel-aggregator-char-dham'],
          ['Char Dham Yatra Scams','/char-dham-yatra-scams'],
        ]}/>
      </Article>
    </>
  );
}
