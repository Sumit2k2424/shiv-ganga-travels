import { SITE } from '@/data/packages';

/**
 * TrustStrip — the two facts that separate us from every aggregator listing,
 * pinned to the top of every page inside the sticky header so they are on
 * screen the moment a page opens and stay there while the visitor scrolls.
 *
 * 1. Founded by a retired Indian Army officer  → credibility
 * 2. You pay us directly, zero commission      → the money objection
 *
 * Server component. No JavaScript, no state, no hydration cost. The entrance
 * animation and the mobile message rotation are pure CSS (see globals.css,
 * "TRUST STRIP" block) and both switch off under prefers-reduced-motion.
 * Height is fixed, so it contributes nothing to CLS.
 */
export default function TrustStrip() {
  return (
    <div className="trust-strip" role="note" aria-label="Founded by a retired Indian Army officer — pay the operator directly">
      <div className="trust-strip-inner">

        {/* Desktop / tablet: both facts side by side */}
        <p className="trust-strip-full">
          <span className="trust-strip-item trust-strip-a">
            <span className="trust-strip-icon" aria-hidden="true">🎖️</span>
            Founded {SITE.established} by a <strong>retired Indian Army officer</strong>
          </span>
          <span className="trust-strip-sep" aria-hidden="true" />
          <span className="trust-strip-item trust-strip-b">
            <span className="trust-strip-icon" aria-hidden="true">₹</span>
            <strong className="trust-strip-hi">You pay us directly</strong> — zero commission, no middleman
          </span>
        </p>

        {/* Mobile: the same two facts, alternating on a CSS timer */}
        <p className="trust-strip-rotator" aria-hidden="true">
          <span className="trust-strip-rot trust-strip-rot-1">
            🎖️ Founded {SITE.established} by a <strong>retired Army officer</strong>
          </span>
          <span className="trust-strip-rot trust-strip-rot-2">
            ₹ <strong className="trust-strip-hi">You pay us directly</strong> — zero commission
          </span>
        </p>

        <a href={`tel:${SITE.phone}`} className="trust-strip-phone">{SITE.phone}</a>
      </div>
    </div>
  );
}
