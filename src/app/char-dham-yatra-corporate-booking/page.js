import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Corporate Char Dham Yatra Booking — GST Invoice & MSA' },
  description: 'Employee pilgrimage trips, CSR-sponsored yatras and incentive programmes. Proper GST invoicing, written SLAs, insurance and a single point of contact.',
  keywords: ['corporate char dham yatra','char dham yatra gst invoice','employee pilgrimage tour india','csr pilgrimage sponsorship','corporate group tour uttarakhand','char dham incentive trip','company char dham booking'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-corporate-booking` },
  openGraph: {
    title: 'Corporate Char Dham Yatra Booking — GST Invoice & MSA',
    description: 'Employee pilgrimage, CSR-sponsored yatras and incentive trips. GST invoicing, written SLAs, one contact.',
    url: `${SITE.baseUrl}/char-dham-yatra-corporate-booking`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Corporate Char Dham Yatra booking' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Char Dham Yatra Booking — GST Invoice & MSA',
    description: 'Employee pilgrimage, CSR yatras and incentive trips with proper invoicing.',
    images: [{ url: '/opengraph-image', alt: 'Corporate Char Dham Booking' }],
  },
};

const FAQS = [
  { q:'Do you provide a GST invoice for corporate bookings?',
    a:'Yes. Corporate bookings are invoiced to the company with GST, so the expense can be booked and input credit claimed where your accounting treatment allows it. Send us your GSTIN, registered name and billing address at booking rather than after the trip — retrospective invoice changes are painful for both sides. Ask your finance team how they intend to treat the expense before you commit, because the treatment differs between staff welfare, CSR and incentive spending.' },
  { q:'Can you work to a purchase order and a written agreement?',
    a:'Yes. We work to a PO and can sign a straightforward service agreement covering scope, deliverables, payment schedule, cancellation and liability. We are a family operator rather than a large corporate vendor, so a complex hundred-page MSA with unlimited indemnity is not something we would sign in good faith — but a clear, proportionate agreement is normal and we do it regularly.' },
  { q:'What is different about a corporate yatra versus a private group?',
    a:'Three things in practice. Documentation — POs, GST invoices, written SLAs and often a vendor onboarding process. Duty of care — the company carries responsibility for employees at altitude, so the health screening and insurance conversation is more formal. And reporting — somebody usually needs a written account of what happened, particularly for CSR-funded trips. The yatra itself is the same yatra.' },
  { q:'Can we sponsor a pilgrimage for employees or their parents under CSR?',
    a:'Companies do sponsor pilgrimage trips, most often for workers, retired staff or employees\' parents, and it is a genuinely well-received benefit. Whether a particular programme qualifies as CSR expenditure under the Companies Act is a question for your compliance team, not for us — we can provide the documentation and reporting they will need, but we are not going to advise you that something qualifies when that is not our call.' },
  { q:'How do you handle health and fitness for an employee group?',
    a:'More formally than for a private group, because the company carries duty of care. We ask for declared medical conditions at booking, recommend the health screening the Uttarakhand authorities may require, plan pony or palki for anyone who needs it, and carry oxygen and first aid on every vehicle. We will also tell you directly if someone on your list should not be attempting Kedarnath — which is a conversation better had in an office than at Gaurikund.' },
  { q:'Is insurance included?',
    a:'Not in our package price, and we would rather say so plainly than bury it. We strongly recommend the company arranges group travel insurance covering trip interruption and medical evacuation for any corporate yatra — most companies already have a policy that can be extended. Evacuation from the Kedarnath valley is expensive and the possibility is real.' },
  { q:'What group sizes do you handle for corporate trips?',
    a:'From a handful of senior staff up to a hundred plus. Above about 45 the trip runs as a convoy with vehicles split and usually two hotels per night, because inventory on the Kedarnath route makes anything else impossible. Our temple groups page explains the convoy logistics in detail — the operational reality is the same, only the paperwork differs.' },
  { q:'How far ahead do corporate bookings need to be made?',
    a:'Four to six months for the May–June peak, which is usually longer than corporate planning cycles allow, so start the conversation early even if the budget is not signed off. September and October need two to three months and are frankly a better window for a group trip — better weather, shorter darshan queues, lower rates.' },
];

export default function CorporateBooking() {
  const blocks = buildSchema({
    slug:'char-dham-yatra-corporate-booking',
    name:'Corporate Char Dham Yatra Booking',
    description:'Char Dham Yatra arrangements for companies — employee pilgrimage trips, CSR-sponsored yatras and incentive programmes, with GST invoicing, written agreements and duty-of-care planning.',
    types:null,
    faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['Corporate Booking','/char-dham-yatra-corporate-booking']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Employee · CSR · Incentive programmes" title="Corporate Char Dham Yatra Booking">
        <strong style={{ color:'#FFD166' }}>GST invoicing, POs and written agreements</strong> — with the
        same operator who owns the vehicles and answers the phone from the valley at six in the morning.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['Corporate Booking', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Corporate and incentive groups on the Char Dham circuit book the same route with different logistics</strong> — GST invoicing, a single point of contact, written itineraries ahead of travel, and vehicles held in reserve for schedule slippage. Rates from about ₹15,000–16,600 per person for thirty. The constraint corporates most often underestimate is weather: this is a mountain route where a landslide can cost a day, so a fixed return flight on the final evening is a risk rather than a plan.
        </AnswerBox>
        <P>
          Companies book the Char Dham for three reasons: as a benefit for employees or their parents, as
          a CSR-funded programme for workers or a supported community, or as an incentive trip. The yatra
          itself is the same one we run every week. What differs is the paperwork, the duty-of-care
          obligations, and the fact that somebody in finance needs a proper invoice at the end of it.
        </P>

        <H2>What Corporate Booking Includes</H2>
        <Table
          head={['Requirement','How we handle it']}
          rows={[
            ['GST invoice','Invoiced to the company with GST. Send GSTIN and registered address at booking.'],
            ['Purchase order','We work to a PO and reference it on the invoice.'],
            ['Written agreement','A proportionate service agreement — scope, schedule, payment, cancellation, liability.'],
            ['Single point of contact','A named person here for the whole engagement, not a rotating queue.'],
            ['Vendor onboarding','We can complete standard vendor forms and provide registration and bank documents.'],
            ['Payment terms','Negotiable within reason. Hotels need blocking, so some advance is unavoidable.'],
            ['Post-trip reporting','A written account of the itinerary as delivered. Standard for CSR-funded trips.'],
          ]}
        />

        <Note tone="info" title="Where we will be straight with you">
          We are a family operator that has run these routes since 2010, not a large corporate travel
          vendor. We will sign a clear, proportionate agreement and we will meet it. We are not going to
          sign a hundred-page MSA with unlimited indemnity and a twenty-page security annexe, because we
          could not honestly commit to it. If your procurement process requires that, we would rather
          tell you now than three weeks into an onboarding portal.
        </Note>

        <H2>Duty of Care — the Part That Matters Most</H2>
        <P>
          When a company sends employees to 3,583 metres, the responsibility sits differently than when a
          family goes on its own. This is the conversation we want to have early, in an office, rather
          than at Gaurikund with a group waiting.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Declared medical conditions at booking.</strong>
          Heart conditions, respiratory illness, diabetes, recent surgery, pregnancy. Collected properly,
          not asked casually on the bus.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Health screening.</strong> The Uttarakhand
          authorities may require a medical certificate for some pilgrims. We will tell you what is
          currently required.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Honest fitness advice.</strong> If someone on your
          list should not attempt the Kedarnath trek, we will say so before you book, not after.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Oxygen and first aid</strong> on every vehicle, and
          drivers who know where the medical posts are.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Insurance, which we do not sell.</strong> Arrange
          group cover including medical evacuation. Most companies can extend an existing policy.
          Evacuation from the Kedarnath valley is expensive and the possibility is real.</LI>
        </ul>

        <H2>Three Programme Types</H2>
        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:14 }}>
          {[
            ['Employee and family pilgrimage','Usually 20 to 60 people, often including employees\' parents. September and October work best — better weather, shorter queues, and easier to release staff than in the May peak.'],
            ['CSR-sponsored yatra','Frequently for workers, retired staff or a supported community. Needs the most documentation: named beneficiary lists, itinerary as delivered, and a written post-trip report. Whether it qualifies as CSR expenditure is your compliance team\'s determination, not ours.'],
            ['Incentive and reward trips','Smaller, usually 8 to 20, higher specification — Innova Crysta rather than Tempo Traveller, better hotels, and often a helicopter leg. See the helicopter booking guide, because 2026 capacity is tighter than previous seasons.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'16px 18px' }}>
              <div style={{ fontWeight:700, fontSize:15.5, color:'var(--navy)', marginBottom:7 }}>{t}</div>
              <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>{d}</p>
            </div>
          ))}
        </div>

        <H2>Timing, Honestly</H2>
        <P>
          Corporate planning cycles and Himalayan hotel inventory are badly matched. Blocking 40 beds at
          Guptkashi for May needs committing in January; most budgets are not signed off by then.
        </P>
        <Table
          head={['Window','Lead time','Our recommendation']}
          rows={[
            ['May–June','4–6 months','Peak. Book very early or choose a different window.'],
            ['September–October','2–3 months','Best window for corporate groups. Clear weather, short queues.'],
            ['July–August','Short','Monsoon. We would advise against a corporate group in this window.'],
            ['November onward','Flexible','Dhams closed. Winter seats are an option — see our winter yatra page.'],
          ]}
        />
        <P>
          If your dates are fixed and short-notice, tell us immediately and we will say honestly whether
          it is deliverable. We would rather decline than accept a group we cannot house properly.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Ministry of Corporate Affairs — CSR framework','https://www.mca.gov.in/'],
          ['GST portal — invoicing and input credit','https://www.gst.gov.in/'],
          ['Char Dham Yatra registration — Tourist Care Uttarakhand','https://registrationandtouristcare.uk.gov.in/'],
        ]}/>

        <CTA
          title="Start the conversation early"
          blurb="Send headcount, target window and whether you need a PO and vendor onboarding. We will tell you what is deliverable before anybody signs anything."
          waMessage="Namaste! We are planning a corporate Char Dham Yatra. Please send a proposal with GST invoicing details."
        />

        <Related links={[
          ['Temple & Mandir Groups','/char-dham-yatra-for-temple-groups'],
          ['Group Package (10–30)','/blog/char-dham-group-package'],
          ['Helicopter Booking Guide','/char-dham-helicopter-booking-guide'],
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Terms & Conditions','/terms-and-conditions'],
          ['Contact Us','/contact'],
        ]}/>
      </Article>
    </>
  );
}
