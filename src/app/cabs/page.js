import Link from 'next/link';
import { SITE } from '@/data/packages';
import { CAB_BASES, getCabRoutesByBase } from '@/data/cabRoutes';

export const metadata = {
  title: 'Uttarakhand Taxi Service: Haridwar & Char Dham',
  description: 'Book cabs from Haridwar, Rishikesh & Dehradun to Kedarnath, Badrinath, Yamunotri, Mussoorie, Auli, Chopta & Nainital. Fixed 2026 fares, hill drivers, AC vehicles.',
  keywords: ['uttarakhand taxi service', 'haridwar cab booking', 'rishikesh taxi', 'dehradun cab', 'char dham taxi 2026', 'uttarakhand cab fare'],
  alternates: { canonical: `${SITE.baseUrl}/cabs` },
  openGraph: { title: 'Uttarakhand Cab & Taxi Service 2026', description: 'Cabs from Haridwar, Rishikesh & Dehradun across Uttarakhand. Fixed fares, hill drivers.', url: `${SITE.baseUrl}/cabs`, type: 'website' },
};

function Schema() {
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Cabs', item: `${SITE.baseUrl}/cabs` },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />;
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.8vw,1.5rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 14, marginTop: 32 };

export default function CabsIndexPage() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4.5vw,2.6rem)', fontWeight: 700, marginBottom: 12 }}>Uttarakhand Cab &amp; Taxi Service 2026</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>Fixed-fare cabs from Haridwar, Rishikesh and Dehradun to every dham and hill station — driven by people who know these mountain roads.</p>
        </div>
      </section>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '8px 16px 80px' }}>
        <div style={{ background: 'var(--navy-light)', borderLeft: '4px solid var(--gold)', borderRadius: 12, padding: '16px 18px', marginTop: 18 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>Quick Answer</div>
          <p style={{ fontSize: 14.5, color: 'var(--navy)', lineHeight: 1.75, margin: 0 }}>Shiv Ganga Travels runs fixed-fare cabs across Uttarakhand from three base cities — Haridwar, Rishikesh and Dehradun (Jolly Grant airport) — to Kedarnath, Badrinath, Yamunotri, Mussoorie, Auli, Chopta and Nainital. Sedans, SUVs, Innova Crysta and Tempo Travellers, all with experienced hill drivers. Pick your route below for distance, fare and the full road map.</p>
        </div>

        {CAB_BASES.map(base => {
          const routes = getCabRoutesByBase(base);
          if (!routes.length) return null;
          return (
            <section key={base}>
              <h2 style={h2}>Cabs from {base}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(260px,100%),1fr))', gap: 12 }}>
                {routes.map(r => (
                  <Link key={r.slug} href={`/cabs/${r.slug}`} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '16px', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)' }}>{r.from} → {r.to}</div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: 12, color: 'var(--text-muted)' }}>
                      <span>📏 {r.distance}</span><span>⏱ {r.time}</span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--teal)' }}>from {r.fares[0][2].split('–')[0]}</div>
                    <span style={{ fontSize: 12.5, color: 'var(--gold-dark)', fontWeight: 600 }}>View fare &amp; route →</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 36 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Char Dham cab routes</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Haridwar → Kedarnath', '/haridwar-to-kedarnath-cab'], ['Haridwar → Badrinath', '/haridwar-to-badrinath-cab'], ['Haridwar → Gangotri', '/haridwar-to-gangotri-cab'], ['Delhi → Haridwar', '/delhi-to-haridwar-cab'], ['Full Char Dham Cab', '/char-dham-yatra-cab-booking']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
