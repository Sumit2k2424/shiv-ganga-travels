import Link from 'next/link';
import { SITE } from '@/data/packages';
import { h2 } from "@/lib/prose";

export const metadata = {
  title: { absolute: 'Privacy Policy | Shiv Ganga Travels, Haridwar' },
  description: 'How Shiv Ganga Travels collects, uses and protects your data — including Aadhaar handled for Char Dham yatra registration. Your rights under the DPDP Act 2023.',
  alternates: { canonical: `${SITE.baseUrl}/privacy-policy` },
  openGraph: {
    title: 'Privacy Policy — Shiv Ganga Travels',
    description: 'What we collect, why, who we share it with, and how to have it deleted.',
    url: `${SITE.baseUrl}/privacy-policy`,
    type: 'article',
  },
};

const EFFECTIVE = '10 August 2026';

function Schema() {
  const page = {
    '@context':'https://schema.org', '@type':'WebPage',
    '@id': `${SITE.baseUrl}/privacy-policy#webpage`,
    name:'Privacy Policy',
    url:`${SITE.baseUrl}/privacy-policy`,
    description:'Privacy policy of Shiv Ganga Travels, Haridwar — data collection, use, sharing, retention and your rights under the Digital Personal Data Protection Act 2023.',
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    inLanguage:'en-IN',
    datePublished:'2026-08-10',
    dateModified:'2026-08-10',
  };
  const crumbs = {
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Privacy Policy', item:`${SITE.baseUrl}/privacy-policy` },
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

export default function PrivacyPolicy() {
  return (
    <>
      <Schema/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 100%)', padding:'46px 20px 34px' }}>
        <div style={{ maxWidth:820, margin:'0 auto', textAlign:'center' }}>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,3.6vw,2.3rem)', fontWeight:700, marginBottom:10 }}>
            Privacy Policy
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14.5, margin:0 }}>
            Effective {EFFECTIVE} · Shiv Ganga Travels, Haridwar
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span style={{ color:'var(--navy)', fontWeight:600 }}>Privacy Policy</span>
        </div>
      </nav>

      <article style={{ maxWidth:820, margin:'0 auto', padding:'34px 20px 60px' }}>

        <P>
          This policy explains what personal data Shiv Ganga Travels collects when you use{' '}
          shivgangatravels.com or book a yatra with us, why we collect it, who else sees it, and how to
          get it deleted. It is written to be read rather than to be impressive. If anything here is
          unclear, call us on {SITE.phone} and ask.
        </P>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 19px', marginBottom:10 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:7 }}>The short version</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
            We collect your name, phone number and trip details when you enquire, plus anonymous
            analytics about how the site is used. For Char Dham bookings we also handle your Aadhaar,
            because the Uttarakhand government requires it for yatra registration. We do not sell your
            data to anybody, we have no advertising trackers, and we do not take card payments on this
            website.
          </p>
        </div>

        <H2>1. Who we are</H2>
        <P>
          Shiv Ganga Travels is a travel agency registered in Uttarakhand, operating since 2010 and based
          at Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410, India.
          For the purposes of India&apos;s Digital Personal Data Protection Act 2023, we are the Data
          Fiduciary for the personal data described below. Contact: {SITE.email} · {SITE.phone}.
        </P>

        <H2>2. What we collect</H2>
        <P><strong style={{ color:'var(--navy)' }}>Information you give us directly.</strong> When you
        submit an enquiry form, use the site search, or tap a WhatsApp or call button, we record your
        name and phone number where you have provided them, along with the page you were on, the package
        you were looking at, and any message you typed. If you go on to book, we additionally collect the
        names, ages and contact details of everyone travelling, plus any medical or dietary information
        you choose to tell us so we can plan the trip safely.</P>

        <P><strong style={{ color:'var(--navy)' }}>Government ID for yatra registration.</strong> The
        Uttarakhand government requires every Char Dham pilgrim to complete biometric registration, and
        our packages include handling that for you. Doing so means we collect and submit your Aadhaar
        number and details to the official registration system. Section 4 below explains exactly how we
        treat it.</P>

        <P><strong style={{ color:'var(--navy)' }}>Information collected automatically.</strong> Like
        most websites we use Google Analytics 4, which records pages viewed, approximate location derived
        from IP address, device and browser type, and how you arrived at the site. This is aggregate
        traffic data — we use it to see which guides people actually read, not to identify you.</P>

        <P><strong style={{ color:'var(--navy)' }}>Chat assistant.</strong> The site has an AI assistant
        that answers questions about routes, costs and packages. What you type into it is sent to
        Anthropic&apos;s API to generate a reply. Do not type Aadhaar numbers, card details or anything
        else sensitive into the chat window — it is built for questions about the yatra, nothing more.</P>

        <H2>3. What we do not collect</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>No card numbers, CVVs, UPI PINs or net-banking credentials. This website does not process
          payments. Balances are settled directly with us by bank transfer, UPI, cash or card in person.</LI>
          <LI>No accounts or passwords. There is nothing to log into.</LI>
          <LI>No advertising or retargeting pixels. There is no Meta pixel, no ad network tag, and we do
          not build profiles for advertising.</LI>
          <LI>No database of visitors. The site has no database at all by design — enquiries go to a
          spreadsheet we control, and nothing else is stored server-side.</LI>
        </ul>

        <H2>4. Aadhaar and yatra registration — how we handle it</H2>
        <P>
          This deserves its own section because it is the most sensitive data we touch.
        </P>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>We collect Aadhaar details only from pilgrims who have booked with us, and only for the
          purpose of completing the mandatory Char Dham registration on the official Uttarakhand portal.</LI>
          <LI>We do not use it for anything else, and we never share it with hotels, transport partners
          or any other third party.</LI>
          <LI>We ask you to send it over WhatsApp or bring it to the office. Once registration is
          complete and your registration slip is issued, we delete the copies we hold.</LI>
          <LI>We do not store Aadhaar numbers in our enquiry spreadsheet or anywhere on this website.</LI>
          <LI>If you would rather complete the registration yourself, you can — tell us and we will send
          you the portal link and instructions instead. It is your data and it is genuinely your choice.</LI>
        </ul>

        <H2>5. Why we use your data</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI>To answer your enquiry and send you a quote.</LI>
          <LI>To make the bookings your trip requires — hotels, vehicles, helicopter seats, registration.</LI>
          <LI>To reach you before and during the yatra, including in an emergency on the route.</LI>
          <LI>To keep the accounting and tax records Indian law requires us to keep.</LI>
          <LI>To understand which pages of the site are useful, in aggregate.</LI>
        </ul>
        <P>
          We do not send marketing messages to people who merely enquired and did not book. If you have
          travelled with us we may occasionally message you about the coming season — reply STOP and it
          ends there.
        </P>

        <H2>6. Who else sees your data</H2>
        <P>
          We do not sell personal data. We share it in only two situations: with the service providers
          that make the website and the trip work, and where the law requires it.
        </P>
        <div style={{ overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:520 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Who','What they receive','Why'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Google (Analytics)','Anonymous usage data, IP-derived location','Site traffic measurement'],
                ['Google (Sheets / Apps Script)','Enquiry name, phone, page, message','Where our enquiry list lives'],
                ['Vercel','Server logs, IP addresses','Website hosting'],
                ['Anthropic','Text you type into the chat assistant','Generating the chat reply'],
                ['Meta / WhatsApp','Your number and message, if you tap WhatsApp','You are messaging us on their platform'],
                ['Hotels, transport and helicopter operators','Traveller names, ages, contact','Making your actual bookings'],
                ['Uttarakhand government portal','Aadhaar and traveller details','Mandatory yatra registration'],
              ].map(([a,b,c])=>(
                <tr key={a} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'9px 10px', fontWeight:600, color:'var(--navy)' }}>{a}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{b}</td>
                  <td style={{ padding:'9px 10px', color:'var(--text-muted)' }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          Some of these providers process data on servers outside India. We will also disclose data if a
          court, the police or a government authority lawfully requires it.
        </P>

        <H2>7. How long we keep it</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Enquiries that did not become bookings</strong> — up to 24 months, then deleted.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Booking and payment records</strong> — 8 years, because Indian tax law requires it.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Aadhaar copies</strong> — deleted as soon as registration is confirmed.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Analytics</strong> — retained by Google on our account&apos;s standard schedule; it is not linked to your identity.</LI>
        </ul>

        <H2>8. Your rights</H2>
        <P>
          Under the Digital Personal Data Protection Act 2023 you can ask us to show you the personal data
          we hold about you, correct anything wrong, delete it where we are not legally required to keep
          it, withdraw consent you previously gave, or nominate somebody to exercise these rights if you
          cannot. Email {SITE.email} or call {SITE.phone}. We will respond within 30 days, and there is no
          charge.
        </P>

        <H2>9. Grievance officer</H2>
        <P>
          If you are unhappy with how we have handled your data, raise it with our grievance officer
          before going further:
        </P>
        <div style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:11, padding:'15px 18px', marginBottom:14 }}>
          <div style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.85 }}>
            <strong style={{ color:'var(--navy)' }}>Dhanesh Chandra Mishra</strong><br/>
            Founder &amp; Director, Shiv Ganga Travels<br/>
            Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410<br/>
            {SITE.email} · {SITE.phone}<br/>
            <span style={{ color:'var(--text-muted)', fontSize:13.5 }}>Acknowledged within 72 hours, resolved within 30 days.</span>
          </div>
        </div>

        <H2>10. Cookies</H2>
        <P>
          This site sets Google Analytics cookies to measure traffic, and nothing else. There are no
          advertising or cross-site tracking cookies. You can block cookies in your browser settings and
          the site will still work normally — nothing on shivgangatravels.com depends on them.
        </P>

        <H2>11. Children</H2>
        <P>
          We do not knowingly collect data directly from anyone under 18. Children do travel with us on
          family yatras, and in those cases their details come from a parent or guardian as part of the
          booking.
        </P>

        <H2>12. Security, honestly stated</H2>
        <P>
          We take reasonable precautions: access to the enquiry sheet is limited to our own staff, the
          site runs over HTTPS, and we do not keep documents longer than we need. We are a small family
          operator, not a bank, and it would be dishonest to claim more than that. Please do not send us
          card details or passwords over WhatsApp or email — we will never ask for them.
        </P>

        <H2>13. Changes to this policy</H2>
        <P>
          If we change how we handle data we will update this page and change the effective date at the
          top. Material changes affecting people who have already booked will be told to them directly.
        </P>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:22, marginTop:30, display:'flex', gap:10, flexWrap:'wrap' }}>
          {[
            ['Terms & Conditions','/terms-and-conditions'],
            ['Cancellation Policy','/cancellation-policy'],
            ['Contact Us','/contact'],
            ['About Shiv Ganga Travels','/about'],
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
