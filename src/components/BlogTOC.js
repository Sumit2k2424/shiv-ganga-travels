/**
 * BlogTOC — inline "In this guide" table of contents.
 * Each item links to an H2 whose `id` matches item.id, so the anchors resolve
 * to on-page jumps (globals.css gives h2[id] scroll-margin-top for the header).
 *
 * Props:
 *   title  — heading (default "In this guide")
 *   items  — array of { id, label }
 */
export default function BlogTOC({ title = 'In this guide', items = [] }) {
  if (!items.length) return null;
  return (
    <nav className="blog-toc2" aria-label={title}>
      <div className="blog-toc2__title">
        <span aria-hidden="true">🧭</span> {title}
      </div>
      <ol>
        {items.map(it => (
          <li key={it.id}>
            <a href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
