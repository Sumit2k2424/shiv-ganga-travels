import { SITE } from '@/data/packages';

/**
 * DirectOperatorStrip — one-line trust bar rendered site-wide (from layout.js,
 * directly under the Navbar), so every one of the ~200 pages states the core
 * differentiator: direct operator, zero commission, pay the operator not a
 * middleman. Server component, static markup, zero CLS/JS cost.
 */
export default function DirectOperatorStrip() {
  return (
    <div role="note" aria-label="Direct operator — zero commission" style={{
      background: 'var(--navy)',
      borderBottom: '2px solid var(--gold)',
      padding: '7px 16px',
      textAlign: 'center',
    }}>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}>
        <span style={{ color: 'var(--gold)' }}>✓</span> Direct Char Dham Operator in Haridwar since {SITE.established}
        <span style={{ color: 'rgba(255,255,255,0.35)', margin: '0 8px' }}>·</span>
        <span style={{ color: '#FFD166' }}>Zero Commission</span>
        <span style={{ color: 'rgba(255,255,255,0.35)', margin: '0 8px' }}>·</span>
        <span className="dos-long">You pay the operator, not a middleman</span>
        <a href={`tel:${SITE.phone}`} style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3, marginLeft: 10, whiteSpace: 'nowrap' }} className="dos-long">📞 {SITE.phone}</a>
      </p>
    </div>
  );
}
