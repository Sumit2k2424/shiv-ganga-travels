import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Direct Operator vs Aggregator: Char Dham Booking',
  description: 'Book Char Dham Yatra without an agent: direct operators vs aggregators — what you pay extra for, who is accountable, and how to verify a local operator.',
  keywords: ['char dham yatra direct operator vs aggregator','how to book char dham yatra without agent','char dham yatra hidden charges','direct booking char dham haridwar','char dham yatra no commission','char dham local operator vs online portal'],
  alternates: { canonical: `${SITE.baseUrl}/direct-operator-vs-travel-aggregator-char-dham` },
  openGraph: {
    title: 'Direct Operator vs Travel Aggregator — Char Dham Yatra 2026',
    description: 'What you pay extra for when booking through an aggregator vs a local operator. How the Char Dham booking market works.',
    url: `${SITE.baseUrl}/direct-operator-vs-travel-aggregator-char-dham`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Direct vs Aggregator Char Dham Yatra Booking Guide' }],
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Direct Operator vs Aggregator: Char Dham Booking',
    datePublished: '2026-05-21',
    dateModified: '2026-05-21',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Co-Founder & Operations Manager', url: `${SITE.baseUrl}/about`, sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/'] },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    mainEntityOfPage: `${SITE.baseUrl}/direct-operator-vs-travel-aggregator-char-dham`,
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the difference between a direct operator and a travel aggregator for Char Dham Yatra?', acceptedAnswer: { '@type': 'Answer', text: 'A direct operator owns and operates the vehicles, employs the guides, and manages the hotels directly. When you call them, you reach the person responsible for your yatra. A travel aggregator (MakeMyTrip, Thrillophilia, Yatra.com) is a marketplace — they list packages from multiple operators, add their commission margin, and act as an intermediary. Your money passes through the platform before reaching the actual operator.' } },
      { '@type': 'Question', name: 'Is booking Char Dham Yatra directly cheaper than using an aggregator?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, typically by 15–30%. Aggregators add a commission of 10–20% to the operator price before showing it to you. For a ₹21,000 operator price, that translates to ₹22,000–24,000 on an aggregator. For a deluxe ₹30,000 package, you might pay ₹35,000–36,000. Book directly with Shiv Ganga Travels at +91-7817996730 to get the operator price without any markup.' } },
      { '@type': 'Question', name: 'How do I verify if a Char Dham Yatra operator is legitimate?', acceptedAnswer: { '@type': 'Answer', text: 'Check: (1) Uttarakhand Tourism Development Board registration — ask the operator for their registration number and verify at uttarakhandtourism.gov.in. (2) GST registration — legitimate operators invoice with GST. (3) Google Business Profile with genuine reviews — check photo consistency and review patterns. (4) Physical office in Haridwar or Rishikesh — not a Delhi or Mumbai address for a "Haridwar specialist". Shiv Ganga Travels is Uttarakhand Tourism registered and has its office at Saptrishi Road, Haridwar.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.55rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 40, letterSpacing: '-0.02em' };
const h3 = { fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 10, marginTop: 24 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

const FLOW = [
  { step: '1', who: 'You', action: 'Pay ₹32,479 on the aggregator platform' },
  { step: '2', who: 'Aggregator', action: 'Keeps 10–20% commission (₹3,247–6,495) · Passes rest to operator' },
  { step: '3', who: 'Local operator', action: 'Receives ₹25,984–29,232 · Runs your yatra on this budget' },
  { step: '4', who: 'Problem arises?', action: 'You call aggregator → they escalate to operator → operator responds' },
];

const DIRECT_FLOW = [
  { step: '1', who: 'You', action: 'Pay ₹21,000 directly to Shiv Ganga Travels' },
  { step: '2', who: 'Operator', action: 'Receives full ₹21,000 · Allocates to vehicle, hotels, guide, margins' },
  { step: '3', who: 'Problem arises?', action: 'You call / WhatsApp the operator directly — they respond immediately' },
];

export default function DirectVsAggregator() {
  return (
    <>
      <Schema />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 55%,var(--teal) 100%)', padding: '52px 20px 40px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Booking Guide · 2026 Season
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.25 }}>
            Direct Operator vs Travel Aggregator<br />Char Dham Yatra 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15, lineHeight: 1.75, maxWidth: 680, margin: '0 auto 22px' }}>
            How the Char Dham booking market actually works, what you pay extra for when using a platform, and how to find and verify a direct operator in Haridwar.
          </p>
          <div style={{ display: 'inline-flex', gap: 6, alignItems: 'center', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '8px 18px', fontSize: 12.5, color: 'rgba(255,255,255,0.75)' }}>
            ✍️ Written by Sumit Mishra, Co-Founder · Shiv Ganga Travels, Haridwar
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Direct Operator vs Aggregator</span>
        </div>
      </nav>

      <div style={{ background: '#FFFBF3', borderBottom: '1px solid #FDE68A', padding: '10px 20px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', fontSize: 12.5, color: '#92400E' }}>
          <strong>Disclosure:</strong> This page is written and operated by Shiv Ganga Travels, a direct operator. We have a commercial interest in helping you understand why direct booking is better — but every claim here is factual and verifiable. Competitor data sourced from public listings, May 2026.
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '36px 20px 60px' }}>
        <BlogAuthor variant="top" author="sumit" />

        <h2 style={h2}>How the Char Dham Yatra Booking Market Works</h2>
        <p style={p}>Before you book anything, it helps to understand the structure of the market. There are essentially three types of entities selling Char Dham packages:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {[
            { type: '1. Direct Operators', desc: 'Own the vehicles, employ the guides, manage the hotel relationships. Based in Haridwar, Rishikesh or Dehradun. When you pay them, 100% of the money goes to the operation. Examples: Shiv Ganga Travels, Travel Vaidya.', color: '#15803D', bg: '#F0FDF4', border: '#86EFAC' },
            { type: '2. Travel Aggregators', desc: 'Online marketplaces that list packages from multiple operators and add a commission margin. MakeMyTrip, Thrillophilia, Yatra.com, Goibibo. When you book here, 10–20% of your payment goes to the platform. The rest goes to whichever operator they assigned to your batch.', color: '#D97706', bg: '#FFFBF3', border: '#FDE68A' },
            { type: '3. Delhi/Mumbai Agents', desc: 'Travel agents who are not in Uttarakhand. They book through operators the way aggregators do, but offline. Often charging more than even aggregators because the chain has two intermediaries. Avoid for Char Dham — the value add is zero.', color: '#DC2626', bg: '#FFF1F2', border: '#FECACA' },
          ].map(item => (
            <div key={item.type} style={{ background: item.bg, border: `1.5px solid ${item.border}`, borderRadius: 12, padding: '14px 18px' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: item.color, marginBottom: 6 }}>{item.type}</div>
              <p style={{ fontSize: 14, color: '#334155', margin: 0, lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>The Money Flow — Where Your ₹32,479 Actually Goes</h2>
        <p style={p}>Here is what happens when you book a Char Dham package through an aggregator versus directly:</p>

        <h3 style={h3}>Via Aggregator (e.g. MakeMyTrip)</h3>
        <div style={{ marginBottom: 20 }}>
          {FLOW.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '12px 0', borderBottom: i < FLOW.length - 1 ? '1px dashed var(--border)' : 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12, color: '#fff', flexShrink: 0 }}>{item.step}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 2 }}>{item.who}</div>
                <div style={{ fontSize: 13.5, color: '#475569' }}>{item.action}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={h3}>Direct with Shiv Ganga Travels</h3>
        <div style={{ marginBottom: 24 }}>
          {DIRECT_FLOW.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '12px 0', borderBottom: i < DIRECT_FLOW.length - 1 ? '1px dashed #86EFAC' : 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#15803D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12, color: '#fff', flexShrink: 0 }}>{item.step}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#15803D', marginBottom: 2 }}>{item.who}</div>
                <div style={{ fontSize: 13.5, color: '#475569' }}>{item.action}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>The Hidden Charges Problem</h2>
        <p style={p}>Even after paying the aggregator price, many pilgrims discover additional charges on arrival. The most common ones that are quietly excluded from aggregator packages:</p>
        <div style={{ overflowX: 'auto', marginBottom: 24, borderRadius: 12, border: '1px solid var(--border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Charge', 'Typical cost', 'In SGT package', 'In aggregator packages'].map(h => (
                  <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 11.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Pony / mule at Kedarnath', '₹2,000–6,000', '✅ Included', '⚠️ Often excluded'],
                ['Palki / palanquin', '₹5,000–10,000', '✅ Included (senior pkg)', '⚠️ Extra'],
                ['VIP darshan (Kedarnath, Badrinath)', '₹500–2,000', '✅ Included', '⚠️ Not always'],
                ['Government pilgrim tax', '₹100–200/person', '✅ Included', '⚠️ Some exclude'],
                ['Haridwar arrival hotel', '₹800–1,500/night', '✅ Included', '⚠️ Sometimes extra'],
                ['Porter at Yamunotri', '₹500–1,200', '✅ Included', '⚠️ Extra'],
                ['Platform service fee', '₹500–2,000', '✅ N/A (direct)', '⚠️ Always charged'],
              ].map(([charge, cost, sgt, agg], i) => (
                <tr key={charge} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 14px', fontWeight: 600, color: 'var(--navy)', fontSize: 13 }}>{charge}</td>
                  <td style={{ padding: '9px 14px', color: '#475569', fontSize: 13 }}>{cost}</td>
                  <td style={{ padding: '9px 14px', color: '#15803D', fontWeight: 700, fontSize: 13 }}>{sgt}</td>
                  <td style={{ padding: '9px 14px', color: '#D97706', fontSize: 13 }}>{agg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>How to Verify a Direct Operator Before Booking</h2>
        <p style={p}>The main risk of going direct is booking with an unregistered or inexperienced operator. Here is how to verify before you pay:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {[
            { num: '1', title: 'Ask for Uttarakhand Tourism registration', detail: 'Every legitimate operator in Uttarakhand is registered with the UTDB. Ask for the registration number and verify at uttarakhandtourism.gov.in. Shiv Ganga Travels is registered — we can provide our number on request.' },
            { num: '2', title: 'Check their physical address in Haridwar or Rishikesh', detail: 'A genuine Haridwar operator has an office in Haridwar — not a call centre in Delhi or a registered address in Mumbai. Ask for the office address and call to verify. Our office is at Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar.' },
            { num: '3', title: 'Verify Google reviews — look for patterns', detail: 'Check the review dates, text quality, and photos. A genuine review mentions specific details (driver name, hotel, a specific experience). Watch for batches of generic 5-star reviews posted in the same week — a classic fake review pattern.' },
            { num: '4', title: 'Ask for a GST-compliant invoice', detail: 'Registered operators issue GST invoices. If an operator says they cannot give a GST invoice, they are either unregistered or trying to run an off-book transaction. Both are red flags.' },
            { num: '5', title: 'Request vehicle registration documents', detail: 'Ask if the vehicles are company-owned or sub-contracted. On a 10-day Himalayan trip, a sub-contracted vehicle from a third party is a significant accountability risk.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: 14, background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px', alignItems: 'flex-start' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#fff', flexShrink: 0 }}>{item.num}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{item.title}</div>
                <p style={{ fontSize: 13.5, color: '#475569', margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>When an Aggregator Makes Sense</h2>
        <p style={p}>We said this on the other comparison page and we will say it here too: aggregators are not always the wrong choice. If you are booking from a city where no direct Haridwar operator has a local agent, an aggregator gives you a wider selection. If you need a multi-modal package that combines flights, train, and the tour, an aggregator&apos;s logistics engine can save significant coordination effort.</p>
        <p style={p}>The key is knowing what you are paying for. On a ₹32,479 aggregator package, roughly ₹3,000–6,000 is going to the platform. If that convenience is worth it to you, that is a fair trade. But if you have the time to make two phone calls, the direct route saves you enough money to pay for two extra nights at a good hotel.</p>

        {/* FAQ */}
        <h2 style={h2}>Frequently Asked Questions</h2>
        {[
          ['What is a direct operator for Char Dham Yatra?', 'A direct operator owns and operates the tour. They have their own vehicles, guides, and hotel relationships. When you book with them, you pay the operator price with no intermediary markup. Shiv Ganga Travels is a direct operator based in Haridwar — not an aggregator, not a Delhi agent.'],
          ['Is booking Char Dham directly cheaper than using MakeMyTrip?', 'Yes, typically by 15–30%. Aggregators add 10–20% commission. For a ₹21,000 operator price, you pay ₹22,000–24,000 on an aggregator. Direct with Shiv Ganga Travels you pay ₹21,000 and get the same — often better — service.'],
          ['How do I know Shiv Ganga Travels is a legitimate direct operator?', 'We are registered with the Uttarakhand Tourism Development Board. Our office is at Saptrishi Road, Bhupatwala, Haridwar — you can visit. We have 38 verified Google reviews. We issue GST-compliant invoices. Our WhatsApp number (+91-7817996730) is answered by the same people running your yatra.'],
          ['Can I cancel if I book directly with Shiv Ganga Travels?', 'Yes. Our cancellation policy is stated on the website and applies directly. 25% is non-refundable (covers pre-booking costs). 60–90 days notice: 75% refund. 30–60 days: 50%. Less than 30 days: no refund. These terms are clearly communicated at booking — no hidden clauses.'],
        ].map(([q, a], i) => (
          <details key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', marginBottom: 8 }}>
            <summary style={{ padding: '14px 16px', cursor: 'pointer', listStyle: 'none', fontWeight: 600, fontSize: 14.5, color: 'var(--navy)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {q}<span style={{ fontSize: 18, color: 'var(--text-muted)', flexShrink: 0 }}>＋</span>
            </summary>
            <div style={{ padding: '12px 16px 16px', fontSize: 14.5, color: '#334155', lineHeight: 1.85, borderTop: '1px solid var(--border)' }}>{a}</div>
          </details>
        ))}

        <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related Pages</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/shiv-ganga-travels-vs-makemytrip-char-dham" style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>SGT vs MakeMyTrip →</Link>
            <Link href="/best-char-dham-yatra-operators-haridwar" style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>Best Operators 2026 →</Link>
            <Link href="/char-dham-yatra-scams" style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>Yatra Scams to Avoid →</Link>
            <Link href="/char-dham-yatra" style={{ background: 'var(--navy)', color: '#fff', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Book Direct — ₹21,000 →</Link>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 36 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Skip the aggregator. Talk to the operator.</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Direct booking · ₹21,000/person · Zero commission · Haridwar office</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 directly — no middleman. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Book Direct on WhatsApp</a>
            <Link href="/char-dham-yatra" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 22px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>View Packages →</Link>
          </div>
        </div>

        <BlogAuthor variant="bottom" author="sumit" />
      </article>
    </>
  );
}
