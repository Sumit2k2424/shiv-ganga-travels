/**
 * KeyTakeaways — the "quick answer" summary box placed right after the lede.
 * Hooks the skimmer, delivers value in ~10 seconds, and is featured-snippet
 * friendly. Points accept strings or JSX (bold key numbers with <strong>).
 *
 * Props:
 *   title   — heading (default "Quick Answer")
 *   points  — array of strings/JSX rendered as a checklist
 */
export default function KeyTakeaways({ title = 'Quick Answer', points = [] }) {
  if (!points.length) return null;
  return (
    <aside className="blog-keytakeaways" aria-label={title}>
      <div className="blog-keytakeaways__title">
        <span aria-hidden="true">⚡</span> {title}
      </div>
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </aside>
  );
}
