import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

export const metadata = {
  title: { absolute: 'How to Choose a Char Dham Tour Operator — 12 Checks' },
  description: 'Twelve questions that separate a real operator from a broker, and the four answers that should end the conversation. Written to be used on us too.',
  keywords: ['how to choose char dham tour operator','best char dham tour operator','char dham operator checklist','verify char dham travel agency','char dham yatra which operator','trusted char dham operator','char dham agent verification'],
  alternates: { canonical: `${SITE.baseUrl}/how-to-choose-char-dham-tour-operator` },
  openGraph: {
    title: 'How to Choose a Char Dham Tour Operator — 12 Checks',
    description: 'Twelve questions that separate a real operator from a broker. Use them on us too.',
    url: `${SITE.baseUrl}/how-to-choose-char-dham-tour-operator`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'How to choose a Char Dham tour operator — verification checklist' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a Char Dham Tour Operator — 12 Checks',
    description: 'Twelve questions that separate a real operator from a broker.',
    images: [{ url: '/opengraph-image', alt: 'How to Choose a Char Dham Operator' }],
  },
};

const CHECKS = [
  ['Is there a real office address?','Look it up on a map. A registered address you could walk into is the single strongest signal. A mobile number and a Gmail address is not an office.','Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar 249410.'],
  ['How long have they run these routes?','Garhwal road knowledge is cumulative. Somebody who has driven the Kedarnath route for fifteen seasons knows which stretch goes first in rain.','Since 2010. Sixteen seasons.'],
  ['Who owns the vehicles?','An operator names the vehicle and can give you a registration number. A broker says "our partner will confirm".','Our own fleet, our drivers on our payroll.'],
  ['Will they name the hotels in writing?','"3-star equivalent" is not an answer. Property names, before you pay, in the confirmation.','Named in every written confirmation.'],
  ['Are the drivers licensed for hill routes?','A commercial licence with a hill endorsement is required by the Uttarakhand Transport Department for these roads.','Every driver, plus 8–20 years on-route.'],
  ['What exactly is excluded?','Pony, palki, helicopter and AC in hilly areas are the four that surprise people. A straight operator volunteers these.','Listed on every package page, not buried.'],
  ['How is the yatra registration handled?','Registration is mandatory. If they shrug at this question, they have not done many.','We complete it for you — see our registration guide.'],
  ['What is the payment structure?','A reasonable advance and a named business account. Full payment upfront to a personal account is the warning sign.','25% advance, balance before departure, business account on your confirmation.'],
  ['What happens if the road closes?','Every honest operator will tell you it happens and describe what they do. Anyone who says it will not happen is lying or new.','Substitute hotels, reorder dhams, refund recoverable costs. Driver\'s call on safety is final.'],
  ['Can I speak to the driver before departure?','Name and number the evening before is standard practice among real operators.','Sent by WhatsApp the evening before.'],
  ['Where are the reviews, and under what name?','On a platform they do not control, under the company name, with enough volume and some criticism in it.','Google, under Shiv Ganga Travels.'],
  ['Will they tell you not to book something?','The strongest signal of all. An operator who talks you out of Kedarnath in monsoon, or tells you the train beats their taxi, is not optimising for this one sale.','We tell people to take the Shatabdi, skip Mukhba in January, and use the prepaid counter at Jolly Grant.'],
];

const FAQS = [
  { q:'How do I know if a Char Dham operator is genuine?',
    a:'Four checks settle it in about ten minutes. A real office address you can look up on a map. Willingness to name your hotels in writing before you pay. A named driver and vehicle registration the evening before departure. And payment to a business account printed on your written confirmation. An operator who does all four is almost certainly real. One who resists any of them is telling you something.' },
  { q:'Should I book a Haridwar-based operator or one from my own city?',
    a:'Base the decision on who runs the vehicle, not where the office is. A Delhi or Mumbai agency will usually subcontract the Garhwal leg to a local operator anyway, so you are paying for a layer. That said, a local agency you can visit in person has real value if you cannot verify anyone in Uttarakhand. Ask any city-based agency directly: who operates the ground portion?' },
  { q:'Is a cheaper Char Dham quote always worse?',
    a:'Not always, but a large gap is almost never a discount — it is a difference in the product. Nine nights against seven. Shared Tempo Traveller against private Innova. Breakfast-only against breakfast and dinner. AC extra in the hills. Registration excluded. Compare the seven lines on our booking comparison page before concluding anybody is cheap.' },
  { q:'What are the biggest red flags?',
    a:'A price quoted in two minutes outside a railway station. Refusal to name hotels. Pressure to pay the full amount immediately. Payment to a personal account. And any request to change bank details by WhatsApp — that last one is how most pilgrims who lose money lose it, and no legitimate operator ever does it.' },
  { q:'Does government registration guarantee an operator is good?',
    a:'It guarantees they exist and are accountable to somebody, which is worth having. It does not guarantee competence or good service. Treat registration as a floor to clear, not a recommendation — plenty of registered operators are mediocre and a few unregistered ones are excellent. Use it alongside the other checks, not instead of them.' },
  { q:'How far in advance should I book?',
    a:'For May and June, three to four months, because hotel inventory at Guptkashi and Badrinath genuinely runs out. For September and October, six to eight weeks is usually comfortable. Helicopter components need longer — the 2026 DGCA flight reduction has tightened availability considerably.' },
  { q:'Should I pay the full amount in advance?',
    a:'No. A reasonable advance — 25% is standard — confirms the booking and lets the operator commit to hotels. Anyone demanding the full amount before you travel, particularly to a personal account, should be declined. You have almost no leverage once the money is gone, and legitimate operators do not need it.' },
];

export default function HowToChooseOperator() {
  const blocks = buildSchema({
    slug:'how-to-choose-char-dham-tour-operator',
    name:'How to Choose a Char Dham Tour Operator',
    description:'A twelve-point checklist for verifying a Char Dham Yatra tour operator, including the red flags that should end a conversation.',
    types:null,
    faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['How to Choose an Operator','/how-to-choose-char-dham-tour-operator']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Buyer's guide · 12 checks" title="How to Choose a Char Dham Tour Operator">
        Twelve questions that separate an operator from a broker — and{' '}
        <strong style={{ color:'#FFD166' }}>our own answer to every one of them</strong>, so you can use
        this list on us as easily as on anybody else.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['How to Choose an Operator', null]]}/>

      <Article>
        <Updated/>

        <P>
          Choosing a Char Dham operator is harder than choosing almost any other kind of travel, because
          the trip is long, the roads are unpredictable, and most pilgrims do it once and have no basis
          for comparison. The industry knows that. It is why the scam problem exists.
        </P>
        <P>
          Below are twelve questions worth asking anybody you are considering. We have put our own answer
          beside each one, because a checklist you cannot apply to the person who wrote it is worth
          nothing.
        </P>

        <H2>The Twelve Checks</H2>
        {CHECKS.map(([q, why, ours], i) => (
          <div key={q} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'16px 18px', marginBottom:12 }}>
            <div style={{ display:'flex', gap:12, marginBottom:8 }}>
              <span style={{ background:'var(--navy)', color:'#fff', width:24, height:24, borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, flexShrink:0 }}>{i+1}</span>
              <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)' }}>{q}</div>
            </div>
            <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:9, paddingLeft:36 }}>{why}</p>
            <div style={{ marginLeft:36, background:'var(--navy-light)', borderRadius:8, padding:'9px 13px', fontSize:13.5, color:'var(--text-mid)' }}>
              <strong style={{ color:'var(--navy)' }}>Our answer:</strong> {ours}
            </div>
          </div>
        ))}

        <H2>The Four Answers That Should End the Conversation</H2>
        <Note tone="alert" title="Walk away if you hear any of these">
          <ul style={{ paddingLeft:18, margin:0 }}>
            <li style={{ marginBottom:8 }}><strong>&quot;Pay the full amount now to confirm.&quot;</strong> No legitimate operator needs 100% upfront. Once it is gone you have no leverage at all.</li>
            <li style={{ marginBottom:8 }}><strong>&quot;Send it to this personal account instead.&quot;</strong> Pay only into the business account named on your written confirmation. A mid-booking change of account details, especially by WhatsApp, is the single most common way pilgrims lose money.</li>
            <li style={{ marginBottom:8 }}><strong>&quot;Hotels will be confirmed later, don&apos;t worry.&quot;</strong> Property names before payment, or no payment.</li>
            <li style={{ margin:0 }}><strong>&quot;The road never closes, we guarantee all four dhams.&quot;</strong> Nobody can guarantee that. Anyone who does is either lying or has not worked a full season.</li>
          </ul>
        </Note>

        <H2>The Signal Most People Miss</H2>
        <P>
          The best indicator that an operator is worth trusting is that they will occasionally tell you
          not to buy something. An operator optimising for this one booking says yes to everything. An
          operator who expects you to come back, or to tell your relatives, will tell you the Shatabdi
          beats their taxi to Delhi for two people, or that Kedarnath in late July is a bad idea, or that
          the prepaid counter at Jolly Grant is fine if you land at 2 PM.
        </P>
        <P>
          We say all three of those things on this site, on the{' '}
          <Link href="/haridwar-to-delhi-taxi" style={{ color:'var(--teal)', fontWeight:600 }}>Delhi taxi page</Link>,
          the{' '}
          <Link href="/blog/char-dham-monsoon-safety" style={{ color:'var(--teal)', fontWeight:600 }}>monsoon safety guide</Link>{' '}
          and the{' '}
          <Link href="/dehradun-airport-to-haridwar-taxi" style={{ color:'var(--teal)', fontWeight:600 }}>airport transfer page</Link>.
          Test whoever you are talking to the same way: ask what they would advise against.
        </P>

        <H2>City Agency or Local Operator?</H2>
        <Table
          head={['','Agency in your city','Operator in Uttarakhand']}
          rows={[
            ['You can visit the office','Yes — real value if you cannot verify anyone else','Only if you are in Garhwal'],
            ['Who runs the ground portion','Usually subcontracted to a local operator','Themselves'],
            ['Margins','Their margin plus the operator\'s','Operator only'],
            ['Decisions on the road','Relayed','Direct'],
            ['Best when','You want a local face and cannot verify anyone in Uttarakhand','You can verify them and want the operator price'],
          ]}
        />
        <P>
          Neither is automatically right. The question to put to any city agency is simply: who operates
          the ground portion, and can I have their name? A straight answer is fine. Evasion is the
          answer.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board — registered operators','https://uttarakhandtourism.gov.in/'],
          ['Char Dham Yatra registration — Tourist Care Uttarakhand','https://registrationandtouristcare.uk.gov.in/'],
          ['Uttarakhand Transport Department — commercial permits','https://transport.uk.gov.in/'],
        ]}/>

        <CTA
          title="Run the twelve checks on us"
          blurb="Ask us all of them. If any answer is unsatisfactory, book somebody else — we would rather that than a family having a bad yatra with our name on it."
          waMessage="Namaste! I have some questions before booking Char Dham — about hotels, vehicles and payment. Please advise."
        />

        <Related links={[
          ['Char Dham Yatra Scams','/char-dham-yatra-scams'],
          ['Booking Sites Compared','/char-dham-yatra-booking-sites-compared'],
          ['Best Operators in Haridwar','/best-char-dham-yatra-operators-haridwar'],
          ['Direct Operator vs Aggregator','/direct-operator-vs-travel-aggregator-char-dham'],
          ['vs Thrillophilia','/shiv-ganga-travels-vs-thrillophilia'],
          ['Cost Calculator','/char-dham-yatra-cost-calculator'],
          ['About Us','/about'],
        ]}/>
      </Article>
    </>
  );
}
