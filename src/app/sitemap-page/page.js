import Link from 'next/link';
import { PACKAGES, SITE, CATEGORIES } from '@/data/packages';

export const metadata = {
  title: 'Sitemap — Shiv Ganga Travels | All Pages & Packages',
  description: 'Complete sitemap of Shiv Ganga Travels — all Char Dham Yatra packages, travel guides, weather pages, city packages, blog posts and tools.',
  alternates: { canonical: `${SITE.baseUrl}/sitemap-page` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: 'Yatra Packages',
    links: [
      { label: 'Char Dham Yatra 2026', href: '/char-dham-yatra' },
      { label: 'Char Dham by Helicopter', href: '/char-dham-helicopter' },
      { label: 'Do Dham Yatra', href: '/do-dham-yatra' },
      { label: 'Kedarnath Yatra', href: '/kedarnath-yatra' },
      { label: 'Gangotri Yatra', href: '/gangotri-yatra' },
      { label: 'Yamunotri Yatra', href: '/yamunotri-yatra' },
      { label: 'Panch Kedar Yatra', href: '/panch-kedar-yatra' },
      { label: 'Panch Badri Yatra', href: '/panch-badri-yatra' },
      { label: 'Uttarakhand Tour Packages', href: '/uttarakhand-tour-packages' },
      { label: 'Chopta & Tungnath', href: '/chopta-tungnath' },
      { label: 'All Packages', href: '/packages' },
    ],
  },
  {
    title: 'Temple & Pilgrimage Guides',
    links: [
      { label: 'Kedarnath Temple Guide', href: '/kedarnath-temple' },
      { label: 'Badrinath Temple Guide', href: '/badrinath-temple' },
      { label: 'Online Puja Booking', href: '/online-puja-booking' },
      { label: 'Emergency Contacts', href: '/char-dham-yatra-emergency-contacts' },
      { label: 'Char Dham Road Status', href: '/char-dham-road-status' },
    ],
  },
  {
    title: 'Weather Guides',
    links: [
      { label: 'Kedarnath Weather 2026', href: '/kedarnath-weather' },
      { label: 'Yamunotri Weather 2026', href: '/yamunotri-weather' },
      { label: 'Gangotri Weather 2026', href: '/gangotri-weather' },
      { label: 'Badrinath Weather 2026', href: '/badrinath-weather' },
    ],
  },
  {
    title: 'How to Reach',
    links: [
      { label: 'How to Reach Haridwar', href: '/how-to-reach-haridwar' },
      { label: 'How to Reach Kedarnath', href: '/how-to-reach-kedarnath' },
      { label: 'How to Reach Yamunotri', href: '/how-to-reach-yamunotri' },
      { label: 'How to Reach Gangotri', href: '/how-to-reach-gangotri' },
      { label: 'How to Reach Badrinath', href: '/how-to-reach-badrinath' },
    ],
  },
  {
    title: 'Hotel Guides',
    links: [
      { label: 'Hotels Near Kedarnath', href: '/kedarnath-hotels' },
      { label: 'Hotels Near Badrinath', href: '/badrinath-hotels' },
    ],
  },
  {
    title: 'Cab & Transport',
    links: [
      { label: 'Char Dham Cab Booking', href: '/char-dham-yatra-cab-booking' },
      { label: 'Haridwar to Kedarnath Cab', href: '/haridwar-to-kedarnath-cab' },
      { label: 'Haridwar to Badrinath Cab', href: '/haridwar-to-badrinath-cab' },
      { label: 'Haridwar to Gangotri Cab', href: '/haridwar-to-gangotri-cab' },
      { label: 'Delhi to Haridwar Cab', href: '/delhi-to-haridwar-cab' },
    ],
  },
  {
    title: 'Planning Tools',
    links: [
      { label: 'Char Dham Cost Calculator', href: '/char-dham-yatra-cost-calculator' },
      { label: 'Char Dham Route Map 2026', href: '/char-dham-yatra-route-map' },
    ],
  },
  {
    title: 'Book from Your City',
    links: [
      { label: 'Char Dham Yatra from Delhi', href: '/char-dham-yatra-from-delhi' },
      { label: 'Char Dham Yatra from Noida', href: '/char-dham-yatra-from-noida' },
      { label: 'Char Dham Yatra from Mumbai', href: '/char-dham-yatra-from-mumbai' },
      { label: 'Char Dham Yatra from Bangalore', href: '/char-dham-yatra-from-bangalore' },
      { label: 'Char Dham Yatra from Hyderabad', href: '/char-dham-yatra-from-hyderabad' },
      { label: 'Char Dham Yatra from Chennai', href: '/char-dham-yatra-from-chennai' },
      { label: 'Char Dham Yatra from Pune', href: '/char-dham-yatra-from-pune' },
      { label: 'Char Dham Yatra from Kolkata', href: '/char-dham-yatra-from-kolkata' },
      { label: 'Char Dham Yatra from Ahmedabad', href: '/char-dham-yatra-from-ahmedabad' },
      { label: 'Char Dham Yatra from Lucknow', href: '/char-dham-yatra-from-lucknow' },
      { label: 'Char Dham Yatra from Jaipur', href: '/char-dham-yatra-from-jaipur' },
      { label: 'Char Dham Yatra from Chandigarh', href: '/char-dham-yatra-from-chandigarh' },
      { label: 'Char Dham Yatra from Indore', href: '/char-dham-yatra-from-indore' },
      { label: 'Char Dham Yatra from Bhopal', href: '/char-dham-yatra-from-bhopal' },
      { label: 'Char Dham Yatra from Surat', href: '/char-dham-yatra-from-surat' },
      { label: 'Char Dham Yatra from Varanasi', href: '/char-dham-yatra-from-varanasi' },
      { label: 'Char Dham Yatra from Nagpur', href: '/char-dham-yatra-from-nagpur' },
      { label: 'Char Dham Yatra from Patna', href: '/char-dham-yatra-from-patna' },
    ],
  },
  {
    title: 'Blog & Travel Guides',
    links: [
      { label: 'Char Dham Yatra Complete Guide', href: '/blog/char-dham-guide' },
      { label: 'Best Time for Char Dham 2026', href: '/blog/best-time-char-dham' },
      { label: 'Char Dham Yatra Cost Breakdown', href: '/blog/char-dham-yatra-cost' },
      { label: 'Packing List for Char Dham', href: '/blog/char-dham-yatra-packing-list' },
      { label: 'Registration Guide 2026', href: '/blog/char-dham-yatra-registration' },
      { label: 'New Rules 2026', href: '/blog/char-dham-yatra-2026-new-rules' },
      { label: 'Kedarnath Trek Guide', href: '/blog/kedarnath-trek-guide' },
      { label: 'Kedarnath Helicopter Booking', href: '/blog/kedarnath-helicopter-booking' },
      { label: 'Kedarnath Yatra Complete Guide', href: '/blog/kedarnath-yatra-complete-guide' },
      { label: 'Senior Citizen Char Dham Guide', href: '/blog/senior-citizen-char-dham' },
      { label: 'Char Dham for Heart Patients', href: '/blog/char-dham-yatra-for-heart-patients' },
      { label: 'Kedarnath Pony vs Helicopter', href: '/blog/kedarnath-pony-vs-helicopter' },
      { label: 'Kedarnath Darshan Timings', href: '/blog/kedarnath-darshan-timing' },
      { label: 'Badrinath Yatra Guide', href: '/blog/badrinath-yatra-guide' },
      { label: 'Char Dham in October', href: '/blog/char-dham-yatra-in-october' },
      { label: 'Char Dham in 7 Days', href: '/blog/char-dham-yatra-7-days' },
      { label: 'Char Dham with Kids', href: '/blog/char-dham-yatra-with-kids' },
      { label: 'Char Dham Budget vs Premium', href: '/blog/char-dham-yatra-budget-vs-premium' },
      { label: 'Char Dham vs Do Dham', href: '/blog/char-dham-vs-do-dham' },
      { label: 'Char Dham Group Package', href: '/blog/char-dham-group-package' },
      { label: 'Package vs Self-Planned', href: '/blog/char-dham-yatra-package-vs-self-planned' },
      { label: 'First Timer Guide', href: '/blog/char-dham-yatra-first-timer-guide' },
      { label: 'Char Dham FAQ', href: '/blog/char-dham-yatra-faq' },
      { label: 'Medical Certificate Guide', href: '/blog/char-dham-yatra-medical-certificate' },
      { label: 'Opening Dates 2026', href: '/blog/char-dham-yatra-opening-dates-2026' },
      { label: 'Haridwar to Kedarnath Guide', href: '/blog/haridwar-to-kedarnath' },
      { label: 'Haridwar to Kedarnath Road Trip', href: '/blog/haridwar-to-kedarnath-road-trip' },
      { label: 'Valley of Flowers Trek', href: '/blog/valley-of-flowers-trek' },
      { label: 'Rishikesh Adventure Guide', href: '/blog/rishikesh-adventure-guide' },
      { label: 'Mana Village Badrinath', href: '/blog/mana-village-badrinath' },
      { label: 'Triyuginarayan Temple', href: '/blog/triyuginarayan-temple' },
      { label: 'Uttarakhand Weather Guide', href: '/blog/uttarakhand-weather-guide' },
      { label: 'All Blog Posts', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Shiv Ganga Travels', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Cancellation Policy', href: '/cancellation-policy' },
    ],
  },
];

export default function SitemapPage() {
  const catEntries = Object.entries(CATEGORIES);

  return (
    <>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--teal) 100%)', padding:'44px 20px 32px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,4vw,2.4rem)', marginBottom:10 }}>
            Sitemap — Shiv Ganga Travels
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14 }}>
            All pages, packages, guides and tools — indexed and linked from here
          </p>
        </div>
      </section>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'40px 20px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:28 }}>
          {sections.map(sec => (
            <div key={sec.title}>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:12, paddingBottom:8, borderBottom:'2px solid var(--gold)' }}>
                {sec.title}
              </h2>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:5 }}>
                {sec.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6, padding:'3px 0' }}>
                      <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Package categories */}
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:12, paddingBottom:8, borderBottom:'2px solid var(--gold)' }}>
              Package Categories
            </h2>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:5 }}>
              {catEntries.map(([slug, cat]) => (
                <li key={slug}>
                  <Link href={`/packages/${slug}`} style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All packages */}
          <div style={{ gridColumn:'1 / -1' }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:12, paddingBottom:8, borderBottom:'2px solid var(--gold)' }}>
              All Packages ({PACKAGES.length})
            </h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:4 }}>
              {PACKAGES.map(pkg => (
                <Link key={pkg.slug} href={`/packages/${pkg.slug}`}
                  style={{ fontSize:13, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6, padding:'3px 0' }}>
                  <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                  {pkg.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
