import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'About Shiv Ganga Travels — Founded by Army',
  description: 'Shiv Ganga Travels, Haridwar. Founded 2010 by Retd. Army Officer. Zero commission, direct Char Dham operator. 50,000+ pilgrims served across 15 seasons.',
  keywords: ['about shiv ganga travels','shiv ganga travels haridwar','char dham yatra operator haridwar','dhanesh chandra mishra','char dham yatra since 2010'],
  alternates: { canonical: `${SITE.baseUrl}/about` },
  openGraph: {
    title: 'About Shiv Ganga Travels — Our Story, Ethics & Vision',
    description: 'Founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer from Roorkee. Military discipline, zero commission, 50,000+ pilgrims served.',
    url: `${SITE.baseUrl}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Shiv Ganga Travels — Our Story, Ethics & Vision',
    description: 'Founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer from Roorkee. Military discipline, zero commission, 50,000+ pilgrims served.',
    images: [{ url: '/opengraph-image', alt: 'About Shiv Ganga Travels — Our Story, Ethics & Vision | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const dhanesh = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.baseUrl}/about#dhanesh-mishra`,
    name: 'Dhanesh Chandra Mishra',
    jobTitle: 'Founder & Director',
    description: 'Retired Indian Army Officer. Founded Shiv Ganga Travels in Roorkee, Uttarakhand in 2010. Has led Char Dham Yatra operations for 15 seasons, serving 50,000+ pilgrims.',
    worksFor: {
      '@type': 'Organization',
      name: 'Shiv Ganga Travels',
      url: SITE.baseUrl,
      '@id': `${SITE.baseUrl}/#organization`,
    },
    alumniOf: 'Indian Army',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      addressCountry: 'IN',
    },
    knowsAbout: ['Char Dham Yatra', 'Kedarnath', 'Badrinath', 'Himalayan Travel', 'Pilgrim Safety'],
    sameAs: [
      SITE.baseUrl,
      `https://www.google.com/maps?cid=16074078434377735602`,
    ],
  };

  const sumit = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.baseUrl}/about#sumit-mishra`,
    name: 'Sumit Mishra',
    jobTitle: 'Operations Manager & Content Lead',
    description: 'Manages operations at Shiv Ganga Travels. Has accompanied pilgrim groups on the Char Dham circuit since 2015, coordinating 500+ groups annually.',
    worksFor: {
      '@type': 'Organization',
      name: 'Shiv Ganga Travels',
      url: SITE.baseUrl,
      '@id': `${SITE.baseUrl}/#organization`,
    },
    sameAs: [
      'https://www.linkedin.com/in/sumit-mishra-863734171/',
      'https://www.facebook.com/sumi2112',
    ],
    knowsAbout: ['Char Dham Yatra', 'Kedarnath Trek', 'Badrinath', 'Yatra Registration', 'Mountain Travel'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      addressCountry: 'IN',
    },
  };

  const org = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE.baseUrl}/#organization`,
    name: SITE.name,
    url: SITE.baseUrl,
    foundingDate: '2010',
    founder: { '@type': 'Person', '@id': `${SITE.baseUrl}/about#dhanesh-mishra`, name: 'Dhanesh Chandra Mishra' },
    employee: [
      { '@type': 'Person', '@id': `${SITE.baseUrl}/about#sumit-mishra`, name: 'Sumit Mishra' },
    ],
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249410',
      addressCountry: 'IN',
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.7, reviewCount: 54, bestRating: 5 },
    award: 'Uttarakhand Tourism Registered Tour Operator',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dhanesh) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sumit) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
    </>
  );
}


const h2 = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.8vw,1.9rem)',
  fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.03em',
  marginBottom: 14, marginTop: 0,
};
const p = { fontSize: 15.5, color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: 18 };
const pullQuote = {
  borderLeft: '4px solid var(--gold)', paddingLeft: 22, margin: '28px 0',
  fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--navy)',
  fontStyle: 'italic', lineHeight: 1.65,
};

export default function AboutPage() {
  return (
    <>
      <Schema/>

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)',
        padding: '60px 20px 50px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <span style={{
            background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11,
            fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 18,
          }}>Our Story · Est. 2010</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1.12, marginBottom: 16 }}>
            About <em style={{ color: '#FFD166', fontStyle: 'italic' }}>Shiv Ganga Travels</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15.5, lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
            From a retired Army officer&apos;s single vehicle in Roorkee to one of Haridwar&apos;s most trusted Char Dham Yatra operators — this is our story.
          </p>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <div style={{ background: 'var(--navy)', padding: '0' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))' }}>
          {[
            { num: '2010', label: 'Year Founded' },
            { num: '15+', label: 'Years of Service' },
            { num: '50,000+', label: 'Pilgrims Served' },
            { num: '20+', label: 'Fleet Vehicles' },
            { num: '2', label: 'Offices (Roorkee & Haridwar)' },
          ].map((s, i, arr) => (
            <div key={s.label} style={{
              padding: '20px 16px', textAlign: 'center',
              borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#FFD166', fontFamily: 'var(--font-display)' }}>{s.num}</div>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN STORY ── */}
      <section style={{ background: '#fff', padding: '64px 20px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>

          {/* Founder intro */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28, marginBottom: 40, flexWrap: 'wrap' }}>
            <div style={{
              width: 90, height: 90, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg,var(--navy),var(--teal))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36, border: '3px solid var(--gold)',
            }}>🙏</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--navy)', marginBottom: 3 }}>Dhanesh Chandra Mishra</div>
              <div style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 600, marginBottom: 6 }}>Founder & Director · Retired Indian Army Officer</div>
              <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>Retired Indian Army Officer · Roorkee, Uttarakhand · Founded 2010</div>
            </div>
          </div>

          <h2 style={h2}>Where It All Began — Roorkee, 2010</h2>

          <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
            Shiv Ganga Travels was founded in 2010 by <strong>Dhanesh Chandra Mishra</strong>, a retired officer of the Indian Army, in Roorkee, Uttarakhand. Dhanesh served his country in uniform before turning to another form of service — helping pilgrims reach the sacred Himalayan dhams with dignity, honesty, and care. After retirement, he had a vehicle, a deep familiarity with the Uttarakhand mountains earned through years of military posting in the region, and a personal commitment to doing things with integrity. Army jawans and officers stationed in Roorkee needed reliable transport to the dhams — and they needed it from someone they could trust.
          </p>

          <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
            Military culture runs on discipline, punctuality, and zero tolerance for shortcuts. Dhanesh had not merely absorbed those values — he had lived them through years of service in the Indian Army. He brought them directly into how he operated. Pick-up times were kept to the minute. Vehicles were always serviced before a long mountain run. No pilgrim was ever overcharged. The jawans and officers noticed — and they started coming back, and bringing their families.
          </p>

          <blockquote style={pullQuote}>
            &ldquo;Army jawans taught me that discipline and fair pricing are not optional — they are the only way to operate. That lesson became the foundation of everything we do.&rdquo;
            <div style={{ fontSize: 13, color: 'var(--text-muted)', fontStyle: 'normal', marginTop: 8, fontFamily: 'var(--font)' }}>— Dhanesh Chandra Mishra, Founder</div>
          </blockquote>

          <h2 style={h2}>The Belief That Changed Everything</h2>

          <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
            As word spread and the business grew steadily through Roorkee&apos;s military community, Dhanesh began to see a pattern in the wider pilgrimage travel market that troubled him. Most tour operators charged one price to well-connected customers and a very different price to first-time pilgrims who didn&apos;t know any better. Aggregator platforms added commissions on commissions. The holy journey to the Char Dhams — something millions of ordinary Indian families saved up for years to undertake — had become an industry where the pilgrim was often the last person being looked after.
          </p>

          <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
            Dhanesh&apos;s conviction was straightforward: <strong>everyone deserves fair pricing and the same quality of service</strong> — whether you are a senior Army officer, a schoolteacher from Agra, or a retired farmer from rural Maharashtra taking his once-in-a-lifetime yatra. This belief was not a marketing slogan. It was the reason he expanded beyond the military community and opened the business to all pilgrims.
          </p>

          <h2 style={h2}>Growth — From Roorkee to Haridwar</h2>

          <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
            The growth through the 2010s was steady and earned — not driven by advertising but by word of mouth from satisfied pilgrims. A family from Delhi who had a good experience told their neighbours. A WhatsApp group for a Kedarnath pilgrims&apos; batch shared Dhanesh&apos;s number. Repeat bookings became the norm rather than the exception. By the mid-2010s, the fleet had expanded from a single vehicle to several, and the team had grown to include experienced Garhwali guides, a dedicated operations team, and a customer relations desk.
          </p>

          <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>
            The logical next step was Haridwar — the official gateway to the Char Dham circuit and the city where every yatra truly begins. Shiv Ganga Travels opened its Haridwar office, positioning itself at the heart of pilgrimage activity. Today we operate from both Roorkee and Haridwar, with a full fleet of over <strong>20 vehicles</strong> — Innova Crysta, Ertiga, Tempo Travellers of various capacities — all maintained to a standard that Dhanesh himself inspects regularly.
          </p>

        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section style={{ background: 'var(--bg)', padding: '60px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="section-tag">Where We Operate</span>
            <h2 className="section-title">Our <em>Coverage</em></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Every dham, every route, every major city — we cover the complete Char Dham circuit and beyond.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
            {[
              {
                icon: '🏔️', title: 'The Four Dhams',
                items: ['Yamunotri — 3,291m', 'Gangotri — 3,415m', 'Kedarnath — 3,583m', 'Badrinath — 3,133m'],
                color: 'var(--navy)', bg: 'var(--navy-light)',
              },
              {
                icon: '🛕', title: 'Additional Shrines',
                items: ['Panch Kedar circuit', 'Panch Badri circuit', 'Hemkund Sahib', 'Tungnath & Chandrashila'],
                color: 'var(--teal)', bg: '#e6f7f9',
              },
              {
                icon: '🌳', title: 'Uttarakhand Tours',
                items: ['Mussoorie & Dehradun', 'Nainital & Kausani', 'Rishikesh adventure', 'Jim Corbett & Auli'],
                color: '#15803d', bg: '#f0fdf4',
              },
              {
                icon: '🚙', title: 'Cab Routes',
                items: ['Delhi → Haridwar', 'Haridwar → Kedarnath', 'Haridwar → Badrinath', 'Haridwar → Gangotri'],
                color: '#92400e', bg: '#fff8e8',
              },
              {
                icon: '🌆', title: 'Pickup Cities',
                items: ['Delhi & NCR', 'Mumbai & Pune', 'Bangalore & Hyderabad', 'Chennai & all major cities'],
                color: '#6d28d9', bg: '#f5f3ff',
              },
              {
                icon: '👴', title: 'Special Groups',
                items: ['Senior citizens (60–85+)', 'Army & defence personnel', 'Corporate groups', 'School & college groups'],
                color: '#9f1239', bg: '#fff1f2',
              },
            ].map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 14, padding: '20px', border: '1px solid var(--border)' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: card.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 12,
                }}>
                  {card.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: card.color, marginBottom: 10 }}>{card.title}</div>
                {card.items.map(item => (
                  <div key={item} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '4px 0', display: 'flex', gap: 7, alignItems: 'center' }}>
                    <span style={{ color: card.color, fontWeight: 700, fontSize: 11 }}>✓</span>{item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETHICS ── */}
      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-tag">How We Operate</span>
            <h2 className="section-title">Our <em>Ethics</em></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              The values we inherited from serving the Indian Army — and the principles we refuse to compromise on.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                num: '01', title: 'Zero Commission, Zero Middlemen',
                body: 'Every rupee you pay goes directly to Shiv Ganga Travels. We are not aggregators. We do not use sub-agents or commission-based booking platforms. When you pay ₹18,500 for a package, that is the final amount — no hidden facilitation fee, no "agent service charge" added at the end. This was a non-negotiable principle from day one and it has never changed.',
                icon: '🚫',
              },
              {
                num: '02', title: 'Fair Pricing — The Same for Everyone',
                body: 'A retired government employee from Bhopal and a corporate executive from Gurugram pay exactly the same price for the same package. We publish our prices publicly on this website. We do not negotiate special deals that disadvantage other customers. Dhanesh started this company because he saw how ordinary pilgrims were routinely overcharged — that practice has no place in how we operate.',
                icon: '⚖️',
              },
              {
                num: '03', title: 'Military-Grade Discipline',
                body: 'Our drivers are the backbone of the yatra experience. We select only drivers with 5+ years of mountain driving experience and zero incident records on Char Dham routes. Vehicles are serviced before every major trip — not just annually, before every trip. Departure times are kept. If we say pickup at 5:30 AM, the vehicle is at your location at 5:30 AM.',
                icon: '🎖️',
              },
              {
                num: '04', title: 'Transparency About What We Can and Cannot Do',
                body: 'Mountain travel involves uncertainty — weather, road conditions, landslides, government restrictions. We tell our pilgrims exactly what might go wrong and how we handle it. We do not promise guaranteed darshan on a specific date without qualifying the statement. Honest communication, even when it is inconvenient, is part of how we work.',
                icon: '🔍',
              },
              {
                num: '05', title: 'The Pilgrim Comes First — Always',
                body: 'This sounds obvious but is rarely practised. When a road gets blocked and a pilgrim needs to be re-routed overnight, we absorb the hotel cost. When a senior pilgrim cannot complete the Kedarnath trek, we arrange a pony or helicopter at cost price with no markup. When a group wants to extend their stay at a dham, we rearrange the vehicle without a penalty fee. The yatra is sacred — we treat it that way.',
                icon: '🙏',
              },
            ].map(e => (
              <div key={e.num} style={{ display: 'flex', gap: 20, padding: '22px', background: 'var(--bg)', borderRadius: 14, border: '1px solid var(--border)', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 4 }}>{e.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{e.num}</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)', marginBottom: 8 }}>{e.title}</div>
                  <div style={{ fontSize: 14.5, color: 'var(--text-mid)', lineHeight: 1.8 }}>{e.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section style={{ background: 'linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding: '60px 20px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ background: 'rgba(232,146,10,0.2)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>Where We Are Going</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 600, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em' }}>
              Our <em style={{ color: '#FFD166', fontStyle: 'italic' }}>Vision</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 40 }}>
            {[
              {
                icon: '🎯', title: 'The Definitive Uttarakhand Operator',
                body: 'Our goal is to become the most trusted name in Uttarakhand pilgrimage and adventure travel — not the biggest, but the most trusted. Every family that books with us should feel they could not have found a better operator at any price.',
              },
              {
                icon: '🌱', title: 'Responsible Mountain Tourism',
                body: 'The Himalayas are under growing pressure from mass tourism. We are committed to practices that respect the ecology — no plastic in our vehicles, no littering policies enforced on every trip, and supporting local Garhwali economies rather than importing everything from the plains.',
              },
              {
                icon: '📱', title: 'Technology That Serves Pilgrims',
                body: 'Our investment in digital — this website, the AI chatbot, the cost calculator, real-time WhatsApp support — is driven by one goal: making the yatra easier to plan and book for every Indian family, regardless of how tech-savvy they are.',
              },
              {
                icon: '👥', title: 'Growing the Team, Not Just the Fleet',
                body: 'Our drivers, guides, and operations staff are the company. We invest in their training, fair compensation, and wellbeing. A Garhwali guide who is well-paid and respected brings a quality of care to every pilgrimage that no management system can replicate.',
              },
            ].map(v => (
              <div key={v.title} style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', borderRadius: 14, padding: '20px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{v.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 8 }}>{v.title}</div>
                <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{v.body}</div>
              </div>
            ))}
          </div>

          <blockquote style={{
            borderLeft: '4px solid #FFD166', paddingLeft: 24, margin: '0 0 36px',
            fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#fff',
            fontStyle: 'italic', lineHeight: 1.7,
          }}>
            &ldquo;Every pilgrim who trusts us with their Char Dham Yatra is giving us something sacred — their time, their faith, and often the savings of years. We do not take that lightly. Our vision is simple: to be worthy of that trust, every single time.&rdquo;
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontStyle: 'normal', marginTop: 10, fontFamily: 'var(--font)' }}>— Dhanesh Chandra Mishra, Founder, Shiv Ganga Travels</div>
          </blockquote>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 24 }}>
              Ready to plan your Char Dham Yatra with us?
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 with Shiv Ganga Travels.')}`}
                target="_blank" rel="nofollow noopener noreferrer"
                style={{ background: '#25D366', color: '#fff', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                💬 Book on WhatsApp
              </a>
              
                View Packages →
              
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND US / MAP SECTION ─────────────────────── */}
      <section style={{ background: '#fff', padding: '64px 20px 56px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{ background: 'var(--navy-light)', color: 'var(--navy)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
              Visit Us
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 10 }}>
              Come Meet Dhanesh Ji in Person
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto' }}>
              Our office is open 7 days a week. Walk in, sit down, and plan your Char Dham Yatra over a cup of chai — no appointment needed.
            </p>
          </div>

          {/* Two-col: address card + map */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px,340px) 1fr', gap: 24, alignItems: 'stretch' }} className="about-map-grid">

            {/* Address card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Address */}
              <div style={{ background: 'var(--bg)', borderRadius: 16, border: '1px solid var(--border)', padding: '22px 20px' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, background: 'var(--navy)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 4 }}>Office Address</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                      Saptrishi Road<br/>
                      Near Shantikunj Gate No. 1, Bhupatwala<br/>
                      Haridwar, Uttarakhand 249410<br/>
                      India
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { icon: '📞', label: 'Call / WhatsApp', value: SITE.phone, href: 'tel:+917817996730' },
                    { icon: '✉️', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                    { icon: '⏰', label: 'Office Hours', value: 'Mon–Sun: 7 AM – 9 PM', href: null },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, borderTop: '1px solid var(--border)', paddingTop: 8 }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                        {item.href ? (
                          <a href={item.href} style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'none', fontSize: 13 }}>{item.value}</a>
                        ) : (
                          <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: 13 }}>{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmark note */}
              <div style={{ background: 'var(--navy-light)', borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>🗺️</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12.5, color: 'var(--navy)', marginBottom: 4 }}>How to find us</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    We are right next to Shantikunj (Gayatri Pariwar) — one of Haridwar's most recognisable landmarks. Take Saptrishi Road from Har Ki Pauri direction. Look for Gate No. 1 of Shantikunj.
                  </div>
                </div>
              </div>

              {/* Directions CTA */}
              <a href="https://www.google.com/maps/place/?q=place_id:ChIJcbRpbaBHCTkRsh3aBCyZEt8"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--navy)', color: '#fff', padding: '13px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Get Directions on Google Maps
              </a>
            </div>

            {/* Google Maps iframe — lightweight, no JS required */}
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', minHeight: 380, position: 'relative' }}>
              <iframe
                title="Shiv Ganga Travels Office Location — Saptrishi Road, Bhupatwala, Haridwar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.32!2d78.1927454!3d29.9896838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909474da469b49b%3A0xd812999c1ada1db2!2sShiv%20Ganga%20Travels!5e0!3m2!1sen!2sin!4v1714203600000!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
