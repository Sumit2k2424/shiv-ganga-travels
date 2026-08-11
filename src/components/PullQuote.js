/**
 * PullQuote — editorial emphasis break in italic Source Serif 4 (the one reserved
 * use of italic serif per the design-system typography note in globals.css).
 *
 * Props:
 *   children — the quote text
 *   cite     — optional attribution line
 */
export default function PullQuote({ children, cite }) {
  return (
    <blockquote className="pull-quote">
      {children}
      {cite && <cite>— {cite}</cite>}
    </blockquote>
  );
}
