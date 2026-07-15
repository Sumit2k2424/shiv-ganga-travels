import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE } from '@/data/packages';
import { getCabRoute, getCabRouteSlugs, getCabRoutesByBase } from '@/data/cabRoutes';

export function generateStaticParams() {
  return getCabRouteSlugs();
}

export async function generateMetadata({ params }) {
  const { route } = await params;
  const r = getCabRoute(route);
  if (!r) return {};
  const title = `${r.from} to ${r.to} Cab 2026 — Fare & Distance`;
  const desc = `${r.from} to ${r.to} taxi 2026: ${r.distance}, ${r.time}. Fares from ${r.fares[0][2].split('–')[0]}. Experienced hill drivers, fixed price, pickup from ${r.from}.`;
  return {
    title, description: desc,
    keywords: [`${r.from} to ${r.to} cab`, `${r.from} to ${r.to} taxi fare`, `${r.from} to ${r.to} distance`, `${r.from} to ${r.to} taxi 2026`, `cab from ${r.from} to ${r.to}`],
    alternates: { canonical: `${SITE.baseUrl}/cabs/${r.slug}` },
    openGraph: { title, description: desc, url: `${SITE.baseUrl}/cabs/${r.slug}`, type: 'website', siteName: SITE.name, locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

function Schema({ r }) {
  const service = {
    '@context': 'https://schema.org', '@type': 'TaxiService',
    name: `${r.from} to ${r.to} Taxi Service`,
    provider: { '@type': 'TravelAgency', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone },
    areaServed: ['Uttarakhand', r.from, r.to],
    description: `${r.from} to ${r.to} cab service — ${r.distance}, ${r.time}, fixed fares with experienced hill drivers.`,
    url: `${SITE.baseUrl}/cabs/${r.slug}`,
    offers: { '@type': 'Offer', price: r.fares[0][2].replace(/[^0-9]/g, '').slice(0, 4), priceCurrency: 'INR', url: `${SITE.baseUrl}/cabs/${r.slug}` },
  };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: r.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Cabs', item: `${SITE.baseUrl}/cabs` },
    { '@type': 'ListItem', position: 3, name: `${r.from} to ${r.to}`, item: `${SITE.baseUrl}/cabs/${r.slug}` },
  ]};
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
  </>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.8vw,1.5rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15, color: '#334155', lineHeight: 1.85, marginBottom: 16 };

export default async function CabRoutePage({ params }) {
  const { route } = await params;
  const r = getCabRoute(route);
  if (!r) notFound();
  const msg = encodeURIComponent(`Namaste! I want a cab from ${r.from} to ${r.to}.`);
  const siblings = getCabRoutesByBase(r.base).filter(x => x.slug !== r.slug).slice(0, 4);
  const lowFare = r.fares[0][2].split('–')[0];

  return (
    <>
      <Schema r={r} />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding: '52px 20px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <nav style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>Home › Cabs › {r.from} to {r.to}</nav>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,4vw,2.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>{r.from} to {r.to} Cab — Fare, Distance &amp; Route 2026</h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['📏', r.distance], ['⏱', r.time], ['💰', `from ${lowFare}`], ['📍', r.endPoint]].map(([i, v]) => (
              <span key={v} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 12.5, padding: '5px 12px', borderRadius: 100 }}>{i} {v}</span>
            ))}
          </div>
        </div>
      </section>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '8px 16px 80px' }}>
        {/* Quick Answer — extractable for AI / snippet */}
        <div style={{ background: 'var(--navy-light)', borderLeft: '4px solid var(--gold)', borderRadius: 12, padding: '16px 18px', marginTop: 18 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>Quick Answer</div>
          <p style={{ fontSize: 14.5, color: 'var(--navy)', lineHeight: 1.75, margin: 0 }}>{r.from} to {r.to} is <strong>{r.distance}</strong>, about <strong>{r.time}</strong> by cab. One-way fares start at <strong>{lowFare}</strong> (sedan) and the route runs {r.via}. Booked with Shiv Ganga Travels, a Haridwar operator since 2010, with fixed fares and experienced hill drivers.</p>
        </div>

        <p style={{ ...p, marginTop: 22 }}>{r.intro}</p>

        <h2 style={h2}>{r.from} to {r.to} Taxi Fare (by vehicle)</h2>
        <div style={{ overflowX: 'auto', marginBottom: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 420 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Vehicle', 'Seats', 'One-way fare'].map(hd => (
                <th key={hd} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{hd}</th>
              ))}
            </tr></thead>
            <tbody>
              {r.fares.map((f, i) => (
                <tr key={f[0]} style={{ background: i % 2 ? 'var(--bg)' : '#fff' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)' }}>{f[0]}</td>
                  <td style={{ padding: '9px 12px', color: '#475569' }}>{f[1]}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', whiteSpace: 'nowrap' }}>{f[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.7 }}>Indicative 2026 one-way rates. We confirm a fixed all-in price on enquiry — no per-km surprises, no hidden hill charges. Round trips with halts are quoted as packages.</p>

        <h2 style={h2}>The Route — Stops Along the Way</h2>
        <div style={{ background: 'var(--bg)', borderRadius: 12, padding: '14px 18px', border: '1px solid var(--border)', marginBottom: 16, fontSize: 14, color: '#334155', lineHeight: 1.7 }}>🗺️ <strong>Via:</strong> {r.via}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 10, marginBottom: 8 }}>
          {r.stops.map(([place, why]) => (
            <div key={place} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 4 }}>{place}</div>
              <div style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.55 }}>{why}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Why Book This Cab With Us</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'grid', gap: 8 }}>
          {r.highlights.map(h => (
            <li key={h} style={{ fontSize: 14.5, color: '#334155', lineHeight: 1.6, paddingLeft: 22, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--teal)', fontWeight: 700 }}>✓</span>{h}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 10, padding: '12px 16px', background: 'var(--navy-light)', borderRadius: 10, fontSize: 13.5, color: 'var(--navy)', lineHeight: 1.6, marginBottom: 8 }}><span style={{ flexShrink: 0 }}>💡</span><span><strong>Local tip:</strong> {r.tip}</span></div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {r.faqs.map(([q, a]) => (
            <div key={q} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 6 }}>{q}</div>
              <div style={{ fontSize: 14, color: '#475569', lineHeight: 1.75 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '26px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book your {r.from} → {r.to} cab</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Fixed fare · clean AC vehicle · experienced hill driver · pickup from {r.from}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        {siblings.length > 0 && (
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More cabs from {r.base}</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {siblings.map(s => (
                <Link key={s.slug} href={`/cabs/${s.slug}`} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{s.from} → {s.to} →</Link>
              ))}
              <Link href="/cabs" style={{ background: 'var(--navy)', color: '#fff', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>All cab routes →</Link>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
