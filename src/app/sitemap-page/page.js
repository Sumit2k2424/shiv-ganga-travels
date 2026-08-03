import Link from 'next/link';
import { PACKAGES, SITE, CATEGORIES } from '@/data/packages';
import { getPublishedRoutes, getPublishedOrigins, getPublishedDestinations, routeFrom, routeTo } from '@/data/cabs';
import { LANGUAGE_PAGES } from '@/data/languages';

export const metadata = {
  title: 'Sitemap — All Char Dham Pages',
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
      { label: 'Kedarnath Tour Package 3N/4D', href: '/kedarnath-tour-package' },
      { label: 'Badrinath Tour Package 2N/3D', href: '/badrinath-tour-package' },
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
      { label: 'Kedarnath Height & Facts', href: '/kedarnath-height' },
      { label: 'Dhari Devi Temple', href: '/dhari-devi-temple' },
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
      { label: 'How to Reach Kedarnath', href: '/blog/how-to-reach-kedarnath' },
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
      { label: 'All Uttarakhand Cabs', href: '/cabs' },
      { label: 'Cabs from Haridwar', href: '/cabs/from/haridwar' },
      { label: 'Kedarnath Taxi Service', href: '/cabs/to/kedarnath' },
      { label: 'Badrinath Taxi Service', href: '/cabs/to/badrinath' },
      { label: 'Delhi to Haridwar Cab', href: '/cabs/delhi-to-haridwar-cab' },
    ],
  },
  {
    title: 'Planning Tools',
    links: [
      { label: 'Kedarnath VIP Darshan Guide', href: '/kedarnath-vip-darshan' },
      { label: 'Kedarnath Pony, Palki & Kandi Rates', href: '/kedarnath-pony-palki-kandi-rates' },
      { label: 'Char Dham Yatra Scams to Avoid', href: '/char-dham-yatra-scams' },
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
      { label: 'Char Dham Yatra from Chandigarh', href: '/char-dham-yatra-from-chandigarh' },
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
      { label: 'Badrinath Yatra Guide', href: '/badrinath-yatra' },
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
    title: 'Temples & Destinations',
    links: [
      { label: 'Gangotri Temple Guide', href: '/gangotri-temple' },
      { label: 'Yamunotri Temple Guide', href: '/yamunotri-temple' },
      { label: 'Gaurikund Guide', href: '/gaurikund-guide' },
      { label: 'Guptkashi Guide', href: '/guptkashi-guide' },
      { label: 'Kedarnath to Badrinath Distance', href: '/kedarnath-to-badrinath-distance' },
      { label: 'Harsil Valley Guide', href: '/harsil-valley' },
      { label: 'Surkanda Devi Temple', href: '/surkanda-devi-temple' },
      { label: 'Chitai Golu Devta Temple', href: '/chitai-golu-devta-temple' },
      { label: 'Rajaji National Park', href: '/rajaji-national-park' },
      { label: 'Adi Kailash Yatra', href: '/adi-kailash-yatra' },
    ],
  },
  {
    title: 'Regional Tour Packages',
    links: [
      { label: 'Haridwar Tour Packages', href: '/haridwar-tour-packages' },
      { label: 'Rishikesh Tour Packages', href: '/rishikesh-tour-packages' },
      { label: 'Char Dham Hotels', href: '/char-dham-hotels' },
      { label: 'Char Dham Yatra from Haridwar', href: '/char-dham-yatra-from-haridwar' },
    ],
  },
  {
    title: 'Why Book Direct',
    links: [
      { label: 'Best Char Dham Operators in Haridwar', href: '/best-char-dham-yatra-operators-haridwar' },
      { label: 'Shiv Ganga Travels vs MakeMyTrip', href: '/shiv-ganga-travels-vs-makemytrip-char-dham' },
      { label: 'Direct Operator vs Aggregator', href: '/direct-operator-vs-travel-aggregator-char-dham' },
      { label: 'Char Dham Yatra Statistics', href: '/char-dham-yatra-statistics' },
      { label: 'Char Dham Yatra Scams to Avoid', href: '/char-dham-yatra-scams' },
    ],
  },
  {
    title: 'More Guides',
    links: [
      { label: 'Char Dham Yatra Complete Reference', href: '/blog/char-dham-yatra-complete-guide' },
      { label: 'History & Spiritual Significance', href: '/blog/char-dham-yatra-significance' },
      { label: 'Char Dham Yatra History', href: '/blog/char-dham-yatra-history' },
      { label: 'Closing Dates 2026', href: '/blog/char-dham-yatra-closing-dates-2026' },
      { label: 'Road Conditions 2026', href: '/blog/char-dham-yatra-road-conditions-2026' },
      { label: 'Green Card / Trip Card 2026', href: '/blog/green-card-char-dham-yatra-2026' },
      { label: 'Kedarnath Registration 2026', href: '/blog/kedarnath-registration-2026' },
      { label: 'Kedarnath Trek Timings 2026', href: '/blog/kedarnath-trek-timings-2026' },
      { label: 'Kedarnath Places to See', href: '/blog/kedarnath-places-to-see' },
      { label: 'Kedarnath Pehli Baar (Hindi)', href: '/blog/kedarnath-pehli-baar' },
      { label: 'Places to Visit on the Yatra', href: '/blog/places-to-visit-during-char-dham-yatra' },
      { label: 'Types of Char Dham Packages', href: '/blog/types-of-char-dham-yatra-packages' },
      { label: 'Char Dham Yatra by Train', href: '/blog/char-dham-yatra-by-train' },
      { label: 'Char Dham Yatra Hotels', href: '/blog/char-dham-yatra-hotels' },
      { label: 'Solo Women Travellers', href: '/blog/char-dham-yatra-solo-women' },
      { label: 'Monsoon Safety Guide', href: '/blog/char-dham-monsoon-safety' },
      { label: 'September Char Dham Yatra', href: '/blog/september-char-dham-yatra' },
      { label: 'Char Dham Weather Guide', href: '/blog/char-dham-weather-guide' },
      { label: 'Char Dham Kab Jayen (Hindi)', href: '/blog/char-dham-kab-jayen' },
      { label: 'Kitna Kharcha Aayega (Hindi)', href: '/blog/char-dham-yatra-kitna-kharcha' },
      { label: 'Bujurg Char Dham Yatra (Hindi)', href: '/blog/bujurg-char-dham-yatra' },
      { label: 'Registration Guide (Hindi)', href: '/blog/char-dham-registration-hindi' },
      { label: 'Packing List (Hindi)', href: '/blog/char-dham-packing-list-hindi' },
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

          {/* Cab routes */}
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:12, paddingBottom:8, borderBottom:'2px solid var(--gold)' }}>
              Cab & Taxi Routes
            </h2>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:5 }}>
              <li>
                <Link href="/cabs" style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
                  <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                  All Cab Routes
                </Link>
              </li>
              {getPublishedDestinations().map(d => (
                <li key={`to-${d.slug}`}>
                  <Link href={`/cabs/to/${d.slug}`} style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                    {d.name} Taxi Service
                  </Link>
                </li>
              ))}
              {getPublishedOrigins().map(o => (
                <li key={`from-${o.slug}`}>
                  <Link href={`/cabs/from/${o.slug}`} style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                    Cab Service in {o.name}
                  </Link>
                </li>
              ))}
              {getPublishedRoutes().map(r => (
                <li key={r.slug}>
                  <Link href={`/cabs/${r.slug}`} style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                    {routeFrom(r)} to {routeTo(r)} Cab
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language pages */}
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:12, paddingBottom:8, borderBottom:'2px solid var(--gold)' }}>
              Char Dham in Your Language
            </h2>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:5 }}>
              {LANGUAGE_PAGES.map(l => (
                <li key={l.slug}>
                  <Link href={`/${l.slug}`} style={{ fontSize:13.5, color:'var(--navy)', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ color:'var(--gold)', fontSize:10 }}>▸</span>
                    Char Dham Yatra in {l.label}
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
