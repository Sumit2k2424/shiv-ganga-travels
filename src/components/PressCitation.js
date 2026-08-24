'use client';

import { useRef, useState } from 'react';

// ── "Cite this release" ────────────────────────────────────────────────────
//
// WHY THIS IS ON THE PAGE
// The difference between a story that says "Shiv Ganga Travels, a Haridwar
// operator" and one that says "one tour operator" is usually not goodwill — it
// is whether the exact string was sitting there to be copied at 6pm on
// deadline. The same is true of answer engines: a page that states its own
// citation line gets attributed far more consistently than one that leaves the
// model to assemble a byline from a footer.
//
// Two targets, because they are the two things people actually take:
//   1. The citation line, for a credit or a footnote.
//   2. The figures block with sources attached — so that when a number is
//      lifted, the attribution to Uttarakhand Tourism or the Devasthanam Board
//      travels with it rather than being silently reassigned to us. That
//      matters: we do not want to be cited as the source of a government
//      figure, and a desk that discovers we were is done with us.
//
// The copy handler degrades rather than lies. If the clipboard API is
// unavailable (insecure context, older browser, permissions), the text is
// selected instead and the button says so — the one behaviour to avoid is a
// confident "Copied!" when nothing reached the clipboard.

function useCopy() {
  const [state, setState] = useState('idle'); // idle | copied | manual

  async function copy(text, node) {
    try {
      if (!navigator?.clipboard?.writeText) throw new Error('no clipboard api');
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      // Select the text so the user can hit Ctrl/Cmd+C themselves.
      try {
        const el = node?.current;
        if (el) {
          const range = document.createRange();
          range.selectNodeContents(el);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      } catch { /* selection is a nicety, not a requirement */ }
      setState('manual');
    }
    setTimeout(() => setState('idle'), 2600);
  }

  return [state, copy];
}

const LABEL = {
  idle: 'Copy',
  copied: '✓ Copied',
  manual: 'Press Ctrl+C',
};

const BTN = {
  border: '1px solid hsl(var(--border))',
  background: '#fff',
  color: 'var(--navy)',
  padding: '7px 14px',
  borderRadius: 8,
  fontSize: 12.5,
  fontWeight: 700,
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  whiteSpace: 'nowrap',
};

const BLOCK = {
  background: '#fff',
  border: '1px solid hsl(var(--border))',
  borderRadius: 10,
  padding: '12px 14px',
  fontSize: 13,
  color: '#334155',
  lineHeight: 1.7,
  fontFamily: 'var(--font-sans)',
  overflowWrap: 'anywhere',
};

function CopyRow({ title, hint, text, children }) {
  const [state, copy] = useCopy();
  const ref = useRef(null);

  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 7, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)' }}>{title}</div>
          {hint ? <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{hint}</div> : null}
        </div>
        <button
          type="button"
          style={BTN}
          onClick={() => copy(text, ref)}
          aria-live="polite"
        >
          {LABEL[state]}
        </button>
      </div>
      <div ref={ref} style={BLOCK}>
        {children}
      </div>
    </div>
  );
}

export default function PressCitation({ citation, facts, permalink }) {
  // Plain-text figures table. Tabs rather than pipes: pasting into a document
  // or a spreadsheet keeps the columns, which is where these usually end up.
  const factsText = [
    'Figure\tValue\tSource',
    ...facts.map((f) => `${f.fact}\t${f.value}\t${f.source}`),
    '',
    `Source: ${permalink}`,
  ].join('\n');

  return (
    <section
      aria-label="Cite this release"
      style={{
        background: 'var(--bg)',
        border: '1px solid hsl(var(--border))',
        borderLeft: '4px solid var(--teal)',
        borderRadius: 12,
        padding: '18px 20px',
        marginBottom: 24,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 4 }}>
        Citing this release
      </div>
      <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: '0 0 14px' }}>
        Everything here is free to reproduce with attribution. No permission
        email needed.
      </p>

      <CopyRow
        title="Citation"
        hint="For a credit line or footnote"
        text={citation}
      >
        {citation}
      </CopyRow>

      <CopyRow
        title="Figures, with sources"
        hint="Tab-separated — pastes into a doc or a sheet with columns intact"
        text={factsText}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {facts.map((f) => (
            <div key={f.fact} style={{ fontSize: 12.5 }}>
              <strong style={{ color: 'var(--navy)' }}>{f.fact}:</strong>{' '}
              {f.value}{' '}
              <span style={{ color: 'var(--text-muted)' }}>({f.source})</span>
            </div>
          ))}
        </div>
      </CopyRow>

      <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7, margin: '10px 0 0' }}>
        Where a figure is sourced to Uttarakhand Tourism, the Devasthanam Board
        or another third party, please carry that attribution rather than ours.
      </p>
    </section>
  );
}
