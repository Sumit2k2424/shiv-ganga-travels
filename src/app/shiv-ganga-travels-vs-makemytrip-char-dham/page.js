import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Shiv Ganga Travels vs MakeMyTrip Char Dham Yatra 2026 — Price, Inclusions & Who Wins',
  description: 'Shiv Ganga Travels starts from ₹19,500 direct. MakeMyTrip starts from ₹32,479 with commission. Full comparison of price, inclusions, accountability and post-booking support for Char Dham Yatra 2026.',
  keywords: ['shiv ganga travels vs makemytrip char dham','char dham yatra direct booking vs makemytrip','char dham yatra no commission','makemytrip char dham price','char dham yatra hidden charges','book char dham without agent'],
  alternates: { canonical: `${SITE.baseUrl}/shiv-ganga-travels-vs-makemytrip-char-dham` },
  openGraph: {
    title: 'Shiv Ganga Travels vs MakeMyTrip Char Dham Yatra 2026 — Price & Honest Comparison',
    description: 'Direct operator at ₹19,500 vs aggregator at ₹32,479. The ₹12,979 gap is the commission layer. Full breakdown.',
    url: `${SITE.baseUrl}/shiv-ganga-travels-vs-makemytrip-char-dham`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Shiv Ganga Travels vs MakeMyTrip Char Dham Yatra 2026' }],
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Shiv Ganga Travels vs MakeMyTrip Char Dham Yatra 2026 — Price, Inclusions & Who Wins',
    datePublished: '2026-05-21',
    dateModified: '2026-05-21',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Co-Founder & Operations Manager', url: `${SITE.baseUrl}/about`, sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/'] },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    mainEntityOfPage: `${SITE.baseUrl}/shiv-ganga-travels-vs-makemytrip-char-dham`,
    about: [{ '@type': 'Thing', name: 'Shiv Ganga Travels' }, { '@type': 'Thing', name: 'MakeMyTrip' }, { '@type': 'Thing', name: 'Char Dham Yatra' }],
    description: 'Comparison of direct operator Shiv Ganga Travels vs travel aggregator MakeMyTrip for Char Dham Yatra 2026 — pricing, inclusions, accountability and customer support.',
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is MakeMyTrip good for Char Dham Yatra?', acceptedAnswer: { '@type': 'Answer', text: 'MakeMyTrip is a marketplace — it connects you with local operators but adds a commission margin of 10–20% to the operator price. Their Char Dham packages start from ₹32,479 as of May 2026. The underlying service (vehicle, hotels, guide) is provided by a third-party operator. If something goes wrong on-route, you deal with MakeMyTrip customer service, not the operator directly. For transparency and direct accountability on a Himalayan route, booking with a local Haridwar operator is generally better.' } },
      { '@type': 'Question', name: 'How to book Char Dham Yatra without an agent or aggregator?', acceptedAnswer: { '@type': 'Answer', text: 'Book directly with a Haridwar-based operator like Shiv Ganga Travels. Call or WhatsApp +91-7817996730. You get the same vehicles and service without the 10–20% commission markup. Prices start from ₹19,500 per person (9N/10D, all-inclusive). You also get a direct phone number for the operator managing your yatra — not a call centre.' } },
      { '@type': 'Question', name: 'What are the hidden charges in Char Dham Yatra packages?', acceptedAnswer: { '@type': 'Answer', text: 'Common hidden charges in aggregator packages include: pony/palki charges at Yamunotri and Kedarnath (₹2,000–8,000), porter charges (₹500–1,500/day), government permit fees, VIP darshan fees (₹500–2,000), and service charges. Shiv Ganga Travels includes all of these in the quoted package price — what you see is what you pay.' } },
    ],
  };

  const comparison = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Shiv Ganga Travels vs MakeMyTrip — Char Dham Yatra 2026 Comparison',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Shiv Ganga Travels', description: 'Direct operator, Haridwar-based since 2010. From ₹19,500, zero commission.' },
      { '@type': 'ListItem', position: 2, name: 'MakeMyTrip', description: 'Travel aggregator. Char Dham from ₹32,479. Commission-based marketplace model.' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparison) }} />
    </>
  );
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.55rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 40, letterSpacing: '-0.02em' };
const h3 = { fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 10, marginTop: 24 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

const ROWS = [
  ['Starting price (9N/10D)', '₹19,500', '₹32,479', 'sgt'],
  ['Booking model', 'Direct operator', 'Marketplace aggregator', 'sgt'],
  ['Commission layer', 'Zero — you pay the operator', '10–20% added to operator price', 'sgt'],
  ['Based in', 'Haridwar (on-route)', 'Gurugram (off-route)', 'sgt'],
  ['Founded', '2010', '2000', 'tie'],
  ['Your point of contact', 'Direct WhatsApp + phone', 'Customer service centre', 'sgt'],
  ['On-route emergency response', 'Operator in Haridwar, 24×7', 'Escalated via platform', 'sgt'],
  ['VIP darshan arrangements', 'Included in all packages', 'Varies by sub-operator', 'sgt'],
  ['Senior citizen package', 'Yes — 12N/13D ₹27,999', 'Not specifically offered', 'sgt'],
  ['Customisable itinerary', 'Yes — call/WhatsApp directly', 'Limited — fixed packages', 'sgt'],
  ['Uttarakhand Tourism registered', 'Yes', 'Sub-operators vary', 'sgt'],
  ['Cancellation policy', 'Stated on website, direct refund', 'Platform-enforced policy', 'mmt'],
  ['Multi-city departure inventory', 'Limited to key cities', 'All India departures', 'mmt'],
];

export default function VsMakeMyTrip() {
  return (
    <>
      <Schema />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 55%,var(--teal) 100%)', padding: '52px 20px 40px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Comparison · May 2026 Data
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.25 }}>
            Shiv Ganga Travels vs MakeMyTrip<br />Char Dham Yatra 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15, lineHeight: 1.75, maxWidth: 680, margin: '0 auto 22px' }}>
            The core difference is the booking model. MakeMyTrip adds a commission layer between you and the actual operator. That is where the ₹12,979 per-person price gap comes from.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '12px 20px', textAlign: 'center', minWidth: 150 }}>
              <div style={{ fontWeight: 800, fontSize: 22, color: '#4ADE80' }}>₹19,500</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>Shiv Ganga Travels · Direct</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.4)', fontSize: 24 }}>vs</div>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '12px 20px', textAlign: 'center', minWidth: 150 }}>
              <div style={{ fontWeight: 800, fontSize: 22, color: '#FCA5A5' }}>₹32,479</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>MakeMyTrip · With commission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Shiv Ganga Travels vs MakeMyTrip</span>
        </div>
      </nav>

      {/* Disclosure */}
      <div style={{ background: '#FFFBF3', borderBottom: '1px solid #FDE68A', padding: '10px 20px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', fontSize: 12.5, color: '#92400E' }}>
          <strong>Disclosure:</strong> Shiv Ganga Travels operates this website. Competitor pricing and package data sourced from MakeMyTrip.com public listings as of May 2026. We update this page every 60 days — prices change seasonally.
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '36px 20px 60px' }}>
        <BlogAuthor variant="top" author="sumit" />

        {/* Quick answer */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '20px 22px', marginBottom: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#FFD166', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Quick Answer</div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            MakeMyTrip is a marketplace — it adds a commission layer between you and the actual operator running your yatra. Shiv Ganga Travels is that operator. Same vehicles, same route, no middleman. That is where the ₹12,979 per-person gap comes from. If something goes wrong in the hills — a road block, a hotel change, a medical situation — you want to be talking to the person holding the keys to the vehicle, not a customer service centre in Gurugram.
          </p>
        </div>

        {/* Comparison table */}
        <h2 style={h2}>Full Comparison Table</h2>
        <div style={{ overflowX: 'auto', marginBottom: 28, borderRadius: 12, border: '1px solid var(--border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Feature', 'Shiv Ganga Travels', 'MakeMyTrip'].map((h, i) => (
                  <th key={h} style={{ padding: '11px 16px', textAlign: i === 0 ? 'left' : 'center', color: '#fff', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([feature, sgt, mmt, winner], i) => (
                <tr key={feature} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '10px 16px', fontWeight: 600, color: 'var(--navy)', fontSize: 13 }}>{feature}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', color: winner === 'sgt' ? '#15803D' : '#334155', fontWeight: winner === 'sgt' ? 700 : 500, fontSize: 13 }}>
                    {winner === 'sgt' && <span style={{ marginRight: 4 }}>✅</span>}{sgt}
                  </td>
                  <td style={{ padding: '10px 16px', textAlign: 'center', color: winner === 'mmt' ? '#15803D' : '#64748b', fontWeight: winner === 'mmt' ? 700 : 400, fontSize: 13 }}>
                    {winner === 'mmt' && <span style={{ marginRight: 4 }}>✅</span>}{mmt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 1: Price */}
        <h2 style={h2}>1. Price — Where the ₹12,979 Gap Actually Comes From</h2>
        <p style={p}>MakeMyTrip&apos;s lowest Char Dham package starts at ₹32,479 per person as of May 2026. Shiv Ganga Travels starts at ₹19,500. That is a ₹12,979 difference on a package where the underlying service — vehicle, hotels, guide, meals — is essentially the same.</p>
        <p style={p}>The gap is the commission structure. MakeMyTrip operates as a marketplace: local operators list their packages, and MakeMyTrip adds a margin before showing you the final price. That margin is typically 10–20% depending on the season and the operator. You pay it without knowing. There is no itemised breakdown of what goes to the operator and what goes to the platform.</p>
        <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#15803D', marginBottom: 8 }}>What ₹19,500 covers at Shiv Ganga Travels</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 8 }}>
            {['✅ AC vehicle (Innova / Tempo Traveller)','✅ Hotels — all 9 nights (twin sharing)','✅ Breakfast + dinner every day','✅ Experienced Garhwali guide throughout','✅ VIP darshan at all 4 dhams','✅ Biometric registration handled — free','✅ Pony/palki charges included','✅ All government tolls and parking','✅ Oxygen cylinder + first aid kit','✅ 24×7 WhatsApp support on-route'].map(item => (
              <div key={item} style={{ fontSize: 13, color: '#15803D', fontWeight: 500 }}>{item}</div>
            ))}
          </div>
        </div>
        <p style={p}>There is no service fee added on top. The price on the page is the price you pay. No hidden charges for pony bookings, no VIP darshan surcharges, no porter costs buried in fine print.</p>

        {/* Section 2: Accountability */}
        <h2 style={h2}>2. Accountability — Who Picks Up When Things Go Wrong</h2>
        <p style={p}>The Char Dham circuit runs through some of India&apos;s most unpredictable mountain terrain. Kedarnath sits at 3,583 metres. Gangotri road can close without warning due to landslides. Hotels at Guptkashi fill up on peak dates. These are not edge cases — they happen every season.</p>
        <p style={p}>When you book through MakeMyTrip, your contract is with MakeMyTrip, not with the operator actually running the tour. If your vehicle breaks down on the Rishikesh–Uttarkashi highway at 6 PM, the person you call is a customer service agent who will escalate to a local vendor they may have never spoken to before.</p>
        <div style={{ background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 20px', marginBottom: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 16 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 8 }}>✅ Shiv Ganga Travels</div>
            <p style={{ fontSize: 13.5, color: '#334155', lineHeight: 1.75, margin: 0 }}>You have Sumit Mishra&apos;s direct WhatsApp. The office is in Haridwar — 45 minutes from where your yatra begins. The drivers have been on the Kedarnath road dozens of times. On-ground presence is not something a platform can replicate.</p>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#64748b', marginBottom: 8 }}>⚠️ MakeMyTrip</div>
            <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.75, margin: 0 }}>Customer service is based in Gurugram. If your sub-operator fails to show up, MakeMyTrip&apos;s policy is to &quot;make reasonable efforts to arrange an alternate&quot; — but the response time on a mountain road is very different from a hotel booking in a metro city.</p>
          </div>
        </div>

        {/* Section 3: Senior pilgrims */}
        <h2 style={h2}>3. Senior Pilgrims — A Real Difference</h2>
        <p style={p}>One area where the comparison is especially clear is senior citizen packages. Shiv Ganga Travels offers a dedicated 12N/13D Senior Citizen Char Dham package at ₹27,999 — a slower-paced circuit with extra rest days built in, lower-altitude halt choices, pony and palki charges pre-included, and vehicles suited to older knees and backs.</p>
        <p style={p}>MakeMyTrip lists fixed packages by duration and price tier, but no senior-specific package appeared in their current Char Dham offering as of May 2026. A senior pilgrim who needs a gentler pace has to call and negotiate with a sub-operator through a platform intermediary — with no guarantee the sub-operator has specific senior experience.</p>

        {/* Section 4: Where MMT is better — fairness */}
        <h2 style={h2}>4. Where MakeMyTrip Has the Edge</h2>
        <p style={p}>Fairness matters here. MakeMyTrip has a broader inventory of departure cities than any single operator. If you are booking from a Tier-3 city with no direct train to Haridwar, their multi-modal packages that combine flights, trains, and the tour may simplify logistics significantly.</p>
        <p style={p}>Their cancellation and refund process is also more standardised — the platform enforces a clear refund policy regardless of which sub-operator you were assigned. Shiv Ganga Travels&apos; cancellation terms are clearly stated on the website and honoured directly, but there is no third-party enforcement mechanism if a dispute arises.</p>
        <p style={p}>MakeMyTrip also has a larger customer review volume — seeing 200+ reviews of a specific operator before booking has value. Shiv Ganga Travels has 38 verified Google reviews, which is a smaller number even if the quality (4.6★) is strong.</p>

        {/* Social proof */}
        <div style={{ background: 'var(--navy-light)', borderRadius: 12, padding: '18px 20px', marginBottom: 28, borderLeft: '4px solid var(--gold)' }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>From our Google reviews</div>
          <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 6px' }}>
            &ldquo;We almost booked through MakeMyTrip but a friend told us to call Shiv Ganga directly. Saved ₹14,000 for a family of four. Same vehicle, same route — but we had the operator&apos;s number and they answered at 7 AM when we had a question at Kedarnath base camp.&rdquo;
          </p>
          <div style={{ fontSize: 12.5, color: 'var(--text-muted)', fontWeight: 600 }}>— Verified Google Review · Shiv Ganga Travels</div>
        </div>

        {/* Verdict */}
        <h2 style={h2}>Verdict — Who Should Book Where</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 14, marginBottom: 28 }}>
          <div style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: 12, padding: '16px 18px' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: '#15803D', marginBottom: 8 }}>✅ Book Shiv Ganga Travels if:</div>
            {['You want the lowest all-inclusive price', 'You want to talk to the person on-route if something goes wrong', 'You are a senior pilgrim needing a slower pace', 'You want a customised itinerary', 'You prefer paying the operator directly with zero commission'].map(item => (
              <div key={item} style={{ fontSize: 13.5, color: '#334155', padding: '4px 0', borderBottom: '1px solid #BBF7D0' }}>{item}</div>
            ))}
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: '#64748b', marginBottom: 8 }}>Consider MakeMyTrip if:</div>
            {['You are booking from a city with no direct Haridwar train and need a multi-modal package', 'You want a standardised refund policy backed by a large platform', 'You want to compare multiple operators in one place before deciding'].map(item => (
              <div key={item} style={{ fontSize: 13.5, color: '#64748b', padding: '4px 0', borderBottom: '1px solid var(--border)' }}>{item}</div>
            ))}
          </div>
        </div>

        {/* FAQ accordion */}
        <h2 style={h2}>Frequently Asked Questions</h2>
        {[
          ['Is MakeMyTrip good for Char Dham Yatra?', 'MakeMyTrip is a marketplace — it connects you with local operators but adds a 10–20% commission margin. Their Char Dham packages start from ₹32,479 as of May 2026. For transparency, direct accountability on a Himalayan route, and lower cost, booking with a local Haridwar operator is generally better.'],
          ['How to book Char Dham Yatra without an agent?', 'Book directly with a Haridwar-based operator like Shiv Ganga Travels. Call or WhatsApp +91-7817996730. You get the same vehicles and service without the commission markup. Packages from ₹19,500/person all-inclusive.'],
          ['What are hidden charges in Char Dham Yatra?', 'Common hidden charges in aggregator packages include pony/palki at Yamunotri and Kedarnath (₹2,000–8,000), porter charges, government permit fees, VIP darshan fees, and platform service charges. Shiv Ganga Travels includes all of these in the quoted package price.'],
          ['Can I negotiate price with Shiv Ganga Travels?', 'For groups of 6+ or for repeat bookings, we offer group discounts. WhatsApp us your group size and travel dates and we will send you the best rate available for that batch. We do not have dynamic pricing — the price is the same whether you call at 9 AM or 9 PM.'],
        ].map(([q, a], i) => (
          <details key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', marginBottom: 8 }}>
            <summary style={{ padding: '14px 16px', cursor: 'pointer', listStyle: 'none', fontWeight: 600, fontSize: 14.5, color: 'var(--navy)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {q}<span style={{ fontSize: 18, color: 'var(--text-muted)', flexShrink: 0 }}>＋</span>
            </summary>
            <div style={{ padding: '12px 16px 16px', fontSize: 14.5, color: '#334155', lineHeight: 1.85, borderTop: '1px solid var(--border)' }}>{a}</div>
          </details>
        ))}

        {/* Related */}
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related Comparisons</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/best-char-dham-yatra-operators-haridwar" style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>Best Operators Haridwar 2026 →</Link>
            <Link href="/direct-operator-vs-travel-aggregator-char-dham" style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>Direct vs Aggregator Guide →</Link>
            <Link href="/char-dham-yatra" style={{ background: 'var(--navy)', color: '#fff', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>View Packages from ₹19,500 →</Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 36 }}>
          <div style={{ color: '#FFD166', fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Book direct. No commission. No middleman.</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Start with a free itinerary — ready in 2 hours</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>₹19,500/person · All-inclusive · Zero commission · You deal with the operator directly</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I was comparing options for Char Dham Yatra 2026 and want to book directly with Shiv Ganga Travels.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Book on WhatsApp</a>
            <Link href="/char-dham-yatra" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 22px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>View All Packages →</Link>
          </div>
        </div>

        <BlogAuthor variant="bottom" author="sumit" />
      </article>
    </>
  );
}
