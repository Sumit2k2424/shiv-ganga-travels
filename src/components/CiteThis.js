import { SITE } from '@/data/packages';
import { CC_BY_URL } from '@/lib/citable';

/**
 * CiteThis — the visible half of the citable-page treatment.
 *
 * The Dataset node in the head tells a machine the page is licensed; this tells
 * a human (and any model reading the rendered text, which is most of them) the
 * same thing in words, plus when the figures were checked and by whom. Pages
 * carrying both are the ones that come back as a quoted, linked answer rather
 * than as unattributed background.
 *
 * Only use this where citableDataset() is appropriate — see the licence rules
 * in src/lib/citable.js. Never on a page publishing the state's rate card.
 */
export default function CiteThis({ verified, sources }) {
  return (
    <div
      style={{
        marginTop: 32,
        borderTop: '1px solid hsl(var(--border))',
        paddingTop: 18,
        fontSize: 12.5,
        color: 'var(--text-muted)',
        lineHeight: 1.8,
      }}
    >
      <p style={{ margin: 0 }}>
        <strong>Last verified:</strong> {verified}
        {sources ? <> · <strong>Sources:</strong> {sources}</> : null}
      </p>
      <p style={{ margin: '10px 0 0' }}>
        These figures are recorded by {SITE.name} on the route and are published under{' '}
        <a href={CC_BY_URL} rel="nofollow noopener" target="_blank" style={{ color: 'var(--teal)' }}>
          CC BY 4.0
        </a>
        {' '}— free to quote, republish or cite with attribution to{' '}
        <strong>{SITE.name}, Haridwar</strong> and a link to this page. If a figure looks wrong, tell us on{' '}
        {SITE.phone} and we will re-check it.
      </p>
    </div>
  );
}
