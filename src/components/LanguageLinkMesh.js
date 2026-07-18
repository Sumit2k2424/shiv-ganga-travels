import Link from 'next/link';
import { LANGUAGE_PAGES } from '@/data/languages';

const chip = {
  background: '#fff', border: '1px solid var(--border)', color: 'var(--navy)',
  padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none',
};
const heading = { fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', margin: '0 0 10px' };
const row = { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 };

// Shown at the bottom of every language page. `current` = slug to exclude.
export default function LanguageLinkMesh({ current = '' }) {
  const others = LANGUAGE_PAGES.filter(l => l.slug !== current);
  return (
    <nav aria-label="Char Dham Yatra in other Indian languages" style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 36 }}>
      <p style={heading}>Read this in another language</p>
      <div style={row}>
        {others.map(l => (
          <Link key={l.slug} href={`/${l.slug}`} style={chip} lang={l.code}>{l.native} · {l.label} →</Link>
        ))}
        <Link href="/char-dham-yatra" style={chip}>English / हिन्दी →</Link>
      </div>

      <p style={heading}>Plan &amp; book your yatra</p>
      <div style={row}>
        <Link href="/packages/char-dham-yatra-9n-10d-haridwar" style={chip}>9N/10D Package — ₹18,500 →</Link>
        <Link href="/char-dham-yatra-cost-calculator" style={chip}>Cost Calculator →</Link>
        <Link href="/char-dham-helicopter" style={chip}>By Helicopter →</Link>
        <Link href="/char-dham-hotels" style={chip}>Char Dham Hotels →</Link>
        <Link href="/blog/char-dham-yatra-registration" style={chip}>2026 Registration →</Link>
      </div>
    </nav>
  );
}
