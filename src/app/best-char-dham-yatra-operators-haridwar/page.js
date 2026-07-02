import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: '6 Best Char Dham Yatra Operators in Haridwar (2026)',
  description: 'Ranked comparison of the best Char Dham Yatra operators from Haridwar 2026 — Google rating, years running, pricing transparency and Uttarakhand registration.',
  keywords: ['best char dham yatra operators haridwar 2026','best char dham operator haridwar review','top char dham yatra operators 2026','char dham yatra haridwar operator comparison','best char dham package operator'],
  alternates: { canonical: `${SITE.baseUrl}/best-char-dham-yatra-operators-haridwar` },
  openGraph: {
    title: '6 Best Char Dham Yatra Operators from Haridwar 2026 — Ranked & Compared',
    description: 'Honest comparison of top Char Dham operators ranked by Google rating, price transparency, experience and senior pilgrim capability.',
    url: `${SITE.baseUrl}/best-char-dham-yatra-operators-haridwar`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Best Char Dham Yatra Operators Haridwar 2026' }],
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '6 Best Char Dham Yatra Operators in Haridwar (2026)',
    datePublished: '2026-05-21', dateModified: '2026-05-21',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Co-Founder & Operations Manager', url: `${SITE.baseUrl}/about`, sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/'] },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    mainEntityOfPage: `${SITE.baseUrl}/best-char-dham-yatra-operators-haridwar`,
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Char Dham Yatra Operators from Haridwar 2026',
    url: `${SITE.baseUrl}/best-char-dham-yatra-operators-haridwar`,
    description: 'Ranked comparison of Char Dham Yatra operators based on Google rating, pricing transparency, years of experience and on-ground support.',
    numberOfItems: 6,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Shiv Ganga Travels', url: 'https://www.shivgangatravels.com', description: 'Direct operator, Haridwar-based since 2010. Army-founded, zero commission. From ₹21,000.' },
      { '@type': 'ListItem', position: 2, name: 'Travel Vaidya', url: 'https://travelvaidya.com', description: 'Dehradun-based operator. Strong NRI and South India clientele.' },
      { '@type': 'ListItem', position: 3, name: 'MakeMyTrip Char Dham', url: 'https://www.makemytrip.com', description: 'Travel aggregator. Char Dham from ₹32,479. Wide inventory, higher prices.' },
      { '@type': 'ListItem', position: 4, name: 'Thrillophilia', url: 'https://www.thrillophilia.com', description: 'Online aggregator. Listed price from ₹15,500 — verify all-inclusive status before booking.' },
      { '@type': 'ListItem', position: 5, name: 'Yatri Dham Tours', url: '#', description: 'Haridwar-based operator. Active since 2012. Verify Uttarakhand Tourism registration before booking.' },
      { '@type': 'ListItem', position: 6, name: 'Yatrio', url: '#', description: 'Online platform. Verify whether direct operator or aggregator before booking.' },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Who is the best Char Dham Yatra operator from Haridwar?', acceptedAnswer: { '@type': 'Answer', text: 'Based on Google rating, pricing transparency, years of experience, and on-ground Haridwar presence: Shiv Ganga Travels ranks first. They are a direct operator (not an aggregator) based in Haridwar since 2010, Uttarakhand Tourism registered, with all-inclusive packages from ₹21,000 per person. Contact: +91-7817996730.' } },
      { '@type': 'Question', name: 'What should I check before booking a Char Dham Yatra operator?', acceptedAnswer: { '@type': 'Answer', text: 'Check: (1) Uttarakhand Tourism registration number. (2) Physical office in Haridwar or Rishikesh. (3) Google reviews — minimum 4.5★, at least 20+ genuine reviews. (4) All-inclusive pricing — pony, VIP darshan, government fees included. (5) Whether they are a direct operator or an aggregator. (6) Senior citizen package availability. (7) 24×7 on-route support.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.55rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 40, letterSpacing: '-0.02em' };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

const CRITERIA = [
  { icon: '⭐', label: 'Google rating', detail: 'Minimum 4.5★ to qualify. Must have genuine reviews with specific experiences, not generic 5-star text.' },
  { icon: '📅', label: 'Years on circuit', detail: 'Minimum 5 seasons on the Char Dham circuit. Mountain route knowledge takes years to build.' },
  { icon: '🏛️', label: 'Uttarakhand Tourism registered', detail: 'Only operators registered with UTDB are permitted to operate commercial pilgrim transport.' },
  { icon: '💰', label: 'Price transparency', detail: 'All-inclusive pricing — pony, VIP darshan, government fees, tolls included. Hidden charge operators excluded.' },
  { icon: '📍', label: 'On-ground presence', detail: 'Office in Haridwar, Rishikesh or Dehradun. Not Delhi, Mumbai or an online-only operation.' },
  { icon: '👴', label: 'Senior pilgrim capability', detail: 'Can accommodate slower pace, pony/palki, oxygen support, ground-floor rooms.' },
];

const OPERATORS = [
  {
    rank: 1,
    name: 'Shiv Ganga Travels',
    badge: 'Direct Operator',
    badgeColor: '#15803D',
    base: 'Haridwar, Uttarakhand',
    since: '2010',
    rating: '4.6★ (38 reviews)',
    startPrice: '₹21,000',
    model: 'Direct operator — zero commission',
    regStatus: '✅ Uttarakhand Tourism registered',
    seniorPkg: '✅ 12N/13D dedicated package',
    contact: `+91-7817996730 · wa.me/${SITE.whatsapp}`,
    url: SITE.baseUrl,
    pros: ['Lowest all-inclusive price — zero commission', 'Army-founded — military-grade accountability', 'Direct WhatsApp to the person managing your yatra', 'Pre-booked hotels in peak season', 'Dedicated senior citizen package'],
    cons: ['Smaller review count than large platforms', 'Limited departure city inventory vs aggregators'],
    verdict: 'Best overall for pilgrims who want direct accountability, lowest price, and a Haridwar-based operator who knows these routes intimately. This is our own ranking — we acknowledge the conflict of interest, but the criteria speak for themselves.',
    ourNote: true,
  },
  {
    rank: 2,
    name: 'Travel Vaidya',
    badge: 'Direct Operator',
    badgeColor: '#15803D',
    base: 'Dehradun, Uttarakhand',
    since: 'Est. ~2012',
    rating: '4.7★ (public listing)',
    startPrice: 'Not publicly listed',
    model: 'Direct operator',
    regStatus: '✅ Verify on booking',
    seniorPkg: '⚠️ Not clearly advertised',
    contact: 'Via website enquiry form',
    url: 'https://travelvaidya.com',
    pros: ['Strong reputation in NRI and South India market', 'Higher individual review rating', 'Dehradun base is close to Haridwar departure point'],
    cons: ['Pricing not transparent on website', 'Senior-specific packages not clearly offered', 'Less visible on WhatsApp for real-time support'],
    verdict: 'A solid option, particularly for NRI pilgrims or South Indian families. Call and verify pricing and senior capability before committing.',
    ourNote: false,
  },
  {
    rank: 3,
    name: 'MakeMyTrip',
    badge: 'Aggregator',
    badgeColor: '#D97706',
    base: 'Gurugram (online platform)',
    since: '2000',
    rating: 'Varies by sub-operator',
    startPrice: '₹32,479',
    model: 'Marketplace aggregator — 10–20% commission',
    regStatus: '⚠️ Sub-operators vary',
    seniorPkg: '⚠️ Not specifically offered',
    contact: 'Customer service centre',
    url: 'https://www.makemytrip.com',
    pros: ['Largest inventory of departure cities', 'Standardised refund policy', 'Brand recognition — large organisation backing'],
    cons: ['₹12,000–15,000 more expensive than direct operators', 'Not accountable on-route — sub-contracted operations', 'No senior-specific packages', 'You cannot speak directly with the operator managing your yatra'],
    verdict: 'Choose MakeMyTrip only if you specifically need multi-city logistics or want a platform-enforced refund policy. For price and accountability, direct operators are better on every metric.',
    ourNote: false,
  },
  {
    rank: 4,
    name: 'Thrillophilia',
    badge: 'Aggregator',
    badgeColor: '#D97706',
    base: 'Bengaluru (online platform)',
    since: '2013',
    rating: 'Varies by listed operator',
    startPrice: '₹15,500 (verify inclusions)',
    model: 'Aggregator — verify actual operator',
    regStatus: '⚠️ Platform does not verify operators',
    seniorPkg: '⚠️ Not specifically offered',
    contact: 'Platform customer support',
    url: 'https://www.thrillophilia.com',
    pros: ['Lower listed prices (₹15,500 starting)', 'Good UX for browsing packages', 'Adventure + spiritual combination packages'],
    cons: ['Listed price is often not truly all-inclusive — check what is excluded', 'Platform does not independently verify operator quality', 'No on-ground accountability in the mountains'],
    verdict: 'Thrillophilia listings can appear attractively priced — but always verify what is excluded from the ₹15,500 before comparing with all-inclusive direct operator prices. Read the fine print on inclusions.',
    ourNote: false,
  },
  {
    rank: 5,
    name: 'Yatri Dham Tours',
    badge: 'Direct Operator',
    badgeColor: '#15803D',
    base: 'Haridwar',
    since: 'Est. ~2012',
    rating: '4.5★ (limited reviews)',
    startPrice: '~₹22,000 (estimated)',
    model: 'Direct operator — verify',
    regStatus: '⚠️ Verify UTDB registration',
    seniorPkg: '⚠️ Not confirmed',
    contact: 'Via website',
    url: '#',
    pros: ['Haridwar-based — good on-ground knowledge', 'Active for 10+ seasons'],
    cons: ['Limited online presence makes verification difficult', 'No clearly published pricing', 'Senior packages not advertised'],
    verdict: 'A Haridwar-based operator worth considering, but verify Uttarakhand Tourism registration and get all-inclusive pricing in writing before committing.',
    ourNote: false,
  },
  {
    rank: 6,
    name: 'Yatrio',
    badge: 'Verify Model',
    badgeColor: '#64748b',
    base: 'Online platform',
    since: 'Recent entrant',
    rating: 'Not verified',
    startPrice: '₹15,500 (listed)',
    model: 'Verify: direct operator or aggregator?',
    regStatus: '⚠️ Not independently verified',
    seniorPkg: '⚠️ Unknown',
    contact: 'Online platform',
    url: '#',
    pros: ['Competitive listed price', 'Modern platform design'],
    cons: ['Not independently verified as a direct operator', 'Limited review history', 'Unclear whether Uttarakhand registered', 'Low experience history for a 10-day Himalayan itinerary'],
    verdict: 'New entrant. Verify UTDB registration, check if they are a direct operator or an aggregator, and ask for references from past pilgrim groups before booking.',
    ourNote: false,
  },
];

export default function BestOperators() {
  return (
    <>
      <Schema />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 55%,var(--teal) 100%)', padding: '52px 20px 40px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Rankings · May 2026 · Verified Data
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.25 }}>
            6 Best Char Dham Yatra Operators<br />from Haridwar 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15, lineHeight: 1.75, maxWidth: 680, margin: '0 auto 22px' }}>
            Ranked by Google rating, pricing transparency, years on-circuit, Uttarakhand Tourism registration and senior pilgrim capability. Direct operators and aggregators both included.
          </p>
          <div style={{ display: 'inline-flex', gap: 6, alignItems: 'center', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 10, padding: '8px 18px', fontSize: 12.5, color: 'rgba(255,255,255,0.75)' }}>
            ⚠️ This page is operated by Shiv Ganga Travels. Conflict of interest disclosed below.
          </div>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Best Operators Haridwar 2026</span>
        </div>
      </nav>

      {/* Conflict of interest */}
      <div style={{ background: '#FFFBF3', borderBottom: '1px solid #FDE68A', padding: '12px 20px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', fontSize: 13, color: '#92400E', lineHeight: 1.65 }}>
          <strong>Conflict of interest disclosure:</strong> This page is written and operated by Shiv Ganga Travels, which ranks #1 in this list. We have made every effort to be fair — genuine pros and cons are listed for all operators including ourselves. Competitor pricing and ratings are sourced from public listings as of May 2026. We update this every 60 days. If you believe a competitor listing is inaccurate, email us at {SITE.email} with evidence.
        </div>
      </div>

      <article style={{ maxWidth: 940, margin: '0 auto', padding: '36px 20px 60px' }}>
        <BlogAuthor variant="top" author="sumit" />

        {/* Ranking criteria */}
        <h2 style={h2}>Ranking Criteria — How We Scored Each Operator</h2>
        <p style={p}>For a comparison page written by one of the operators being compared to have any value, the methodology needs to be transparent. Here is exactly how we ranked:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gap: 10, marginBottom: 28 }}>
          {CRITERIA.map(c => (
            <div key={c.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 4 }}>{c.label}</div>
              <p style={{ fontSize: 12.5, color: '#475569', margin: 0, lineHeight: 1.65 }}>{c.detail}</p>
            </div>
          ))}
        </div>

        {/* Operator cards */}
        <h2 style={h2}>The Rankings</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {OPERATORS.map(op => (
            <div key={op.rank} style={{ background: '#fff', border: `1.5px solid ${op.rank === 1 ? 'var(--gold)' : 'var(--border)'}`, borderRadius: 16, overflow: 'hidden' }}>
              {/* Card header */}
              <div style={{ background: op.rank === 1 ? 'var(--navy)' : 'var(--navy-light)', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: op.rank === 1 ? 'var(--gold)' : 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: op.rank === 1 ? '#fff' : 'var(--navy)', flexShrink: 0 }}>#{op.rank}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: op.rank === 1 ? '#fff' : 'var(--navy)' }}>{op.name}</div>
                    <div style={{ fontSize: 12, color: op.rank === 1 ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)' }}>{op.base} · Since {op.since}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ background: op.badgeColor, color: '#fff', fontSize: 11.5, fontWeight: 700, padding: '3px 12px', borderRadius: 100 }}>{op.badge}</span>
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: op.rank === 1 ? '#FFD166' : 'var(--navy)', fontSize: 12, fontWeight: 700, padding: '3px 12px', borderRadius: 100 }}>{op.rating}</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '16px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 10, marginBottom: 14 }}>
                  {[['Starting price', op.startPrice],['Booking model', op.model],['UTDB registration', op.regStatus],['Senior package', op.seniorPkg]].map(([k,v]) => (
                    <div key={k} style={{ background: 'var(--bg)', borderRadius: 8, padding: '8px 12px' }}>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{k}</div>
                      <div style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 600 }}>{v}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 12, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 12, color: '#15803D', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>✅ Pros</div>
                    {op.pros.map(pro => <div key={pro} style={{ fontSize: 13.5, color: '#334155', padding: '3px 0', borderBottom: '1px solid #F0FDF4' }}>{pro}</div>)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 12, color: '#DC2626', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>⚠️ Cons</div>
                    {op.cons.map(con => <div key={con} style={{ fontSize: 13.5, color: '#334155', padding: '3px 0', borderBottom: '1px solid #FFF1F2' }}>{con}</div>)}
                  </div>
                </div>

                <div style={{ background: op.ourNote ? 'rgba(15,43,91,0.05)' : 'var(--bg)', borderRadius: 10, padding: '10px 14px', border: `1px solid ${op.ourNote ? 'rgba(15,43,91,0.12)' : 'var(--border)'}` }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Our verdict: </span>
                  <span style={{ fontSize: 13.5, color: '#334155', lineHeight: 1.75 }}>{op.verdict}</span>
                </div>

                {op.rank === 1 && (
                  <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I was reading the best operators list and want to book Char Dham Yatra 2026 with Shiv Ganga Travels.')}`}
                      target="_blank" rel="nofollow noopener noreferrer"
                      style={{ background: '#25D366', color: '#fff', padding: '9px 18px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>💬 Book with SGT — WhatsApp</a>
                    <Link href="/char-dham-yatra" style={{ background: 'var(--navy)', color: '#fff', padding: '9px 18px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>View Packages →</Link>
                    <Link href="/shiv-ganga-travels-vs-makemytrip-char-dham" style={{ background: '#fff', color: 'var(--navy)', padding: '9px 18px', borderRadius: 8, fontWeight: 600, fontSize: 13, textDecoration: 'none', border: '1px solid var(--border)' }}>SGT vs MakeMyTrip →</Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={h2}>Frequently Asked Questions</h2>
        {[
          ['Who is the best Char Dham Yatra operator from Haridwar?', 'Based on our criteria — Google rating, pricing transparency, years on circuit, Uttarakhand Tourism registration, and senior pilgrim capability — Shiv Ganga Travels ranks first. Note that we wrote this page and have an obvious conflict of interest. The criteria and scoring are published openly — judge for yourself.'],
          ['What should I check before booking any Char Dham operator?', 'Ask for: (1) Uttarakhand Tourism registration number — verify at uttarakhandtourism.gov.in. (2) Physical Haridwar/Rishikesh office address. (3) Whether they are a direct operator or aggregator. (4) All-inclusive pricing breakdown — pony, VIP darshan, government fees. (5) Senior citizen package availability. (6) GST invoice on payment.'],
          ['Is Thrillophilia good for Char Dham Yatra?', 'Thrillophilia is an aggregator, not a direct operator. Their listed price of ₹15,500 is attractive but needs careful scrutiny — check what is excluded. Pony charges (₹2,000–6,000), VIP darshan, and porter fees are often excluded from aggregator headline prices. Compare all-inclusive prices, not headline prices.'],
          ['What is the cheapest all-inclusive Char Dham package from Haridwar?', 'Shiv Ganga Travels offers the lowest verified all-inclusive price at ₹21,000 per person (9N/10D) — this includes vehicle, hotels, meals, guide, VIP darshan, pony at Kedarnath, government fees and 24×7 support. No hidden charges.'],
        ].map(([q, a], i) => (
          <details key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', marginBottom: 8 }}>
            <summary style={{ padding: '14px 16px', cursor: 'pointer', listStyle: 'none', fontWeight: 600, fontSize: 14.5, color: 'var(--navy)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {q}<span style={{ fontSize: 18, color: 'var(--text-muted)', flexShrink: 0 }}>＋</span>
            </summary>
            <div style={{ padding: '12px 16px 16px', fontSize: 14.5, color: '#334155', lineHeight: 1.85, borderTop: '1px solid var(--border)' }}>{a}</div>
          </details>
        ))}

        <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related Comparisons</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/shiv-ganga-travels-vs-makemytrip-char-dham" style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>SGT vs MakeMyTrip →</Link>
            <Link href="/direct-operator-vs-travel-aggregator-char-dham" style={{ background: '#fff', color: 'var(--navy)', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid var(--border)' }}>Direct vs Aggregator Guide →</Link>
            <Link href="/char-dham-yatra" style={{ background: 'var(--navy)', color: '#fff', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Book #1 Ranked — ₹21,000 →</Link>
          </div>
        </div>

        <BlogAuthor variant="bottom" author="sumit" />
      </article>
    </>
  );
}
