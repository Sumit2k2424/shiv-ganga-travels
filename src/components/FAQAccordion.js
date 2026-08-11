'use client';
import { useState, useRef, useEffect, useId } from 'react';

function FAQItem({ q, a, idx, openIdx, setOpenIdx }) {
  const isOpen = openIdx === idx;
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const panelId = useId();

  useEffect(() => {
    if (answerRef.current) setHeight(answerRef.current.scrollHeight);
  }, [a]);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setOpenIdx(isOpen ? -1 : idx)}
      >
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </button>
      <div
        id={panelId}
        className="faq-answer"
        /* visibility (not just max-height) so links inside a collapsed
           answer leave the tab order; the CSS transition delays the hide
           until the collapse animation finishes. */
        style={{ maxHeight: isOpen ? height : 0, visibility: isOpen ? 'visible' : 'hidden' }}
        aria-hidden={!isOpen}
      >
        <div ref={answerRef} className="faq-answer-inner">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid hsl(var(--border))',
      boxShadow: 'var(--shadow)',
      overflow: 'hidden',
    }}>
      {faqs.map((f, i) => (
        <FAQItem key={i} q={f.q} a={f.a} idx={i} openIdx={openIdx} setOpenIdx={setOpenIdx} />
      ))}
    </div>
  );
}
