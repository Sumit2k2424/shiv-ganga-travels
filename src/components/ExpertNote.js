/**
 * ExpertNote — the signature "USP-in-between" device of the redesign.
 *
 * A short first-person note dropped between body sections. It carries authority
 * (15 seasons on the route, direct operator, zero commission) as lived
 * experience rather than a sales box — hook + value + USP in one.
 *
 * Props:
 *   variant  — 'insider' | 'tip' | 'warning' | 'usp'  (default 'insider')
 *   title    — optional label override
 *   children — the note body
 */
const PRESETS = {
  insider: { icon: '🧭', label: 'Insider Note' },
  tip:     { icon: '💡', label: 'Pro Tip' },
  warning: { icon: '⚠️', label: 'Heads-up' },
  usp:     { icon: '🤝', label: 'Why Pilgrims Book With Us' },
};

export default function ExpertNote({ variant = 'insider', title, children }) {
  const preset = PRESETS[variant] || PRESETS.insider;
  return (
    <aside className={`blog-callout blog-callout--${variant}`}>
      <div className="blog-callout__label">
        <span aria-hidden="true">{preset.icon}</span> {title || preset.label}
      </div>
      <p className="blog-callout__body">{children}</p>
    </aside>
  );
}
