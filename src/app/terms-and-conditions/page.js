import Link from 'next/link';
import { SITE } from '@/data/packages';
import { h2 } from "@/lib/prose";

export const metadata = {
  title: { absolute: 'Terms & Conditions | Shiv Ganga Travels, Haridwar' },
  description: 'Booking terms for Char Dham and Uttarakhand tours — payment, itinerary changes on mountain roads, helicopter rules, health requirements and liability.',
  alternates: { canonical: `${SITE.baseUrl}/terms-and-conditions` },
  openGraph: {
    title: 'Terms & Conditions — Shiv Ganga Travels',
    description: 'What you agree to when you book a yatra with us, in plain language.',
    url: `${SITE.baseUrl}/terms-and-conditions`,
    type: 'article',
  
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Terms and conditions — Shiv Ganga Travels' }],
  },
};

const EFFECTIVE = '10 August 2026';

function Schema() {
  const page = {
    '@context':'https://schema.org', '@type':'WebPage',
    '@id': `${SITE.baseUrl}/terms-and-conditions#webpage`,
    name:'Terms & Conditions',
    url:`${SITE.baseUrl}/terms-and-conditions`,
    description:'Booking terms and conditions for Shiv Ganga Travels — Char Dham Yatra and Uttarakhand tour packages.',
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    inLanguage:'en-IN',
    datePublished:'2026-08-10',
    dateModified:'2026-08-10',
  };
  const crumbs = {
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Terms & Conditions', item:`${SITE.baseUrl}/terms-and-conditions` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}/>
    </>
  );
}

const H2 = ({ children }) => (
  <h2 style={h2}>{children}</h2>
);
const P = ({ children }) => (
  <p style={{ fontSize:15, lineHeight:1.85, color:'var(--text-mid)', marginBottom:14 }}>{children}</p>
);
const LI = ({ children }) => (
  <li style={{ fontSize:15, lineHeight:1.85, color:'var(--text-mid)', marginBottom:9 }}>{children}</li>
);

export default function TermsAndConditions() {
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 100%)', padding:'46px 20px 34px' }}>
        <div style={{ maxWidth:820, margin:'0 auto', textAlign:'center' }}>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,3.6vw,2.3rem)', fontWeight:700, marginBottom:10 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14.5, margin:0 }}>
            Effective {EFFECTIVE} · Shiv Ganga Travels, Haridwar
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span style={{ color:'var(--navy)', fontWeight:600 }}>Terms &amp; Conditions</span>
        </div>
      </nav>

      <article style={{ maxWidth:820, margin:'0 auto', padding:'34px 20px 60px' }}>

        <P>
          These are the terms you agree to when you book a tour with Shiv Ganga Travels. We have kept
          them readable on purpose. The parts that matter most in practice are section 6 on itinerary
          changes and section 8 on fitness, because the Char Dham routes are high-altitude mountain roads
          and both come up every season.
        </P>

        <H2>1. Who these terms are between</H2>
        <P>
          &quot;We&quot;, &quot;us&quot; and &quot;Shiv Ganga Travels&quot; mean the travel agency at
          Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410, operating
          since 2010. &quot;You&quot; means the person making the booking, who confirms they have
          authority to accept these terms on behalf of everyone named on it. Paying the booking advance
          means you accept these terms for your whole group.
        </P>

        <H2>2. Quotes and confirmation</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>Prices shown on this website are indicative starting rates for the stated group size,
          season and hotel tier. Your actual quote depends on dates, numbers and vehicle.</LI>
          <LI>A quote holds for 7 days unless we say otherwise. Hotel and helicopter availability in peak
          season moves faster than that.</LI>
          <LI>A booking is confirmed only when we have received the advance and sent you a written
          confirmation naming your hotels, vehicle and dates. A verbal assurance from anyone, including a
          driver, is not a confirmed booking.</LI>
        </ul>

        <H2>3. Payment</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>25% of the package cost as advance to confirm. The balance is due before departure unless
          we have agreed otherwise in writing.</LI>
          <LI>Bank transfer, UPI, cash or card at our office. We do not take payments through this
          website.</LI>
          <LI>Pay only into the account named on your written confirmation, or in person at our office
          against a receipt. If somebody sends you different bank details claiming to be us, stop and
          call {SITE.phone}. We will never change account details by WhatsApp message alone.</LI>
          <LI>Government taxes and any statutory levy introduced after booking are payable by you.</LI>
        </ul>

        <H2>4. What is included</H2>
        <P>
          Every quote lists its own inclusions and exclusions, and that list governs. As a general rule
          our packages include accommodation, the stated meals, the vehicle with driver and fuel, tolls,
          parking, state taxes, driver allowance and yatra registration assistance. They exclude
          airfare and train fare, personal expenses, pony, palki and kandi charges, helicopter tickets
          unless stated, entry donations, and anything caused by circumstances outside our control.
        </P>

        <H2>5. Cancellation and refunds</H2>
        <P>
          Cancellation charges, refund slabs and the processing timeline are set out in full on our{' '}
          <Link href="/cancellation-policy" style={{ color:'var(--teal)', fontWeight:600 }}>cancellation and refund policy</Link>,
          which forms part of these terms. In summary: cancel 30 or more days before departure and 80% is
          refunded; 15 to 29 days, 50%; and the advance becomes non-refundable within 7 days of
          departure. Refunds are made to the original payment method within 7 working days of the
          cancellation being confirmed.
        </P>
        <P>
          Third-party components booked in your name — most often helicopter seats — follow the
          operator&apos;s own cancellation rules, which are usually stricter than ours and frequently
          non-refundable. We will tell you which parts of your package those are before you pay.
        </P>

        <H2>6. Changes to the itinerary — read this one</H2>
        <P>
          The Char Dham routes cross high-altitude terrain where landslides, snow, cloudbursts and road
          closures are ordinary events, not rare ones. We may have to change hotels, reorder dhams,
          shorten a leg or, occasionally, abandon part of the route. When that happens:
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>We will substitute accommodation of a similar standard wherever it exists.</LI>
          <LI>We will refund the genuinely unused, recoverable cost of any component we cannot deliver.
          We cannot refund what a hotel or operator has already charged us and will not return.</LI>
          <LI>We are not liable for your consequential costs — a missed connecting flight, a rebooked
          train, an extra hotel night at the end of the trip.</LI>
          <LI>Decisions about whether a road is safe rest with our driver and the local administration,
          and on that point the driver&apos;s judgement is final. Every season somebody asks us to push
          on through weather. The answer is no.</LI>
        </ul>
        <P>
          We strongly recommend travel insurance covering trip interruption and medical evacuation. We do
          not sell it and earn nothing from saying so.
        </P>

        <H2>7. Helicopter services</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>Helicopter flights are operated by DGCA-approved operators, not by us. We book seats on
          your behalf and act as agent only.</LI>
          <LI>Flights are entirely weather-dependent. Cancellation and rescheduling are common at
          Kedarnath and are nobody&apos;s fault.</LI>
          <LI>Operators enforce strict weight limits and charge for excess. Declare passenger weights
          accurately at booking.</LI>
          <LI>Refunds for cancelled flights follow the operator&apos;s policy and their timeline, which
          we will chase for you but do not control.</LI>
        </ul>

        <H2>8. Health, fitness and your own responsibility</H2>
        <P>
          Kedarnath sits at 3,583 metres and the trek from Gaurikund is 16 km. Badrinath, Gangotri and
          Yamunotri all involve sustained time above 3,000 metres. Altitude sickness is a real risk for
          people of any age and fitness level.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>You must tell us about heart conditions, respiratory illness, diabetes, mobility limits,
          pregnancy, or recent surgery at the time of booking. This is so we can plan properly, not so we
          can refuse you.</LI>
          <LI>The Uttarakhand health authorities may require a medical certificate or health screening
          for some pilgrims. Complying is your responsibility.</LI>
          <LI>You travel at your own risk. We carry a first-aid kit and oxygen on the vehicle and our
          drivers know where the medical posts are, but we are not a medical service.</LI>
          <LI>If a doctor or the administration declares someone unfit to continue, their decision
          stands and we will arrange the descent.</LI>
        </ul>

        <H2>9. What we need from you</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>Valid original ID for every traveller — Aadhaar for Indian nationals, passport and visa for
          foreign nationals. Yatra registration cannot be completed without it.</LI>
          <LI>Be ready at the agreed time. Mountain departures are early for good reason, and a group
          held up an hour at Haridwar can lose a darshan slot at the far end.</LI>
          <LI>Respect temple customs, dress codes and photography restrictions at the shrines.</LI>
          <LI>Alcohol and smoking are not permitted in our vehicles or at the dhams.</LI>
          <LI>Damage to a vehicle or hotel room caused by a member of your group is payable by you.</LI>
          <LI>We may end a trip without refund in cases of behaviour that endangers or seriously
          disrupts others. This is a last resort and we have very rarely needed it.</LI>
        </ul>

        <H2>10. Our liability</H2>
        <P>
          We arrange and operate the transport and the ground itinerary, and we are responsible for doing
          that competently. Hotels, helicopter operators, pony and palki contractors and temple
          authorities are independent providers; where we book them on your behalf we act as agent, and
          our liability for their acts is limited to the amount you paid us for that component. Nothing
          in these terms limits liability for death or personal injury caused by our own negligence,
          which Indian law does not permit us to exclude.
        </P>

        <H2>11. Complaints</H2>
        <P>
          Tell us while you are still on the trip if something is wrong — a room, a vehicle, a driver. We
          can usually fix it that day, and we can do nothing about it three weeks later. If it is not
          resolved, write to {SITE.email} within 30 days of returning and we will respond within 15
          working days.
        </P>

        <H2>12. Website content</H2>
        <P>
          Text, photographs, itineraries, route data and rate charts on shivgangatravels.com belong to
          Shiv Ganga Travels. You are welcome to quote or link to them with attribution. Copying pages
          wholesale onto another travel site is not welcome, and we do check. Prices, timings, opening
          dates and road conditions published here are accurate as far as we know at the time of writing
          and can change without notice — always confirm current details with us before relying on them.
        </P>

        <H2>13. Governing law</H2>
        <P>
          These terms are governed by the laws of India. Any dispute is subject to the exclusive
          jurisdiction of the courts at Haridwar, Uttarakhand.
        </P>

        <H2>14. Changes to these terms</H2>
        <P>
          We may update these terms and will change the effective date at the top when we do. The version
          in force when you paid your advance is the one that applies to your booking.
        </P>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 19px', marginTop:30 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:7 }}>Questions before you book?</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
            Call {SITE.phone} or email {SITE.email}. If any clause here worries you, ask about it before
            paying rather than after — that is what we are here for.
          </p>
        </div>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:22, marginTop:30, display:'flex', gap:10, flexWrap:'wrap' }}>
          {[
            ['Cancellation Policy','/cancellation-policy'],
            ['Privacy Policy','/privacy-policy'],
            ['Contact Us','/contact'],
            ['Char Dham Yatra','/char-dham-yatra'],
          ].map(([label,href])=>(
            <Link key={href} href={href} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </article>
    </>
  );
}
