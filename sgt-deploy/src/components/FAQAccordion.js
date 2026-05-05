'use client';
import { useState, useRef, useEffect } from 'react';

function FAQItem({ q, a, idx, openIdx, setOpenIdx }) {
  const isOpen = openIdx === idx;
  const answerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) setHeight(answerRef.current.scrollHeight);
  }, [a]);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        aria-expanded={isOpen}
        onClick={() => setOpenIdx(isOpen ? -1 : idx)}
      >
        <span>{q}</span>
        <span className="faq-icon">+</span>
      </button>
      <div
        className="faq-answer"
        style={{ maxHeight: isOpen ? height : 0 }}
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
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow)',
      overflow: 'hidden',
    }}>
      {faqs.map((f, i) => (
        <FAQItem key={i} q={f.q} a={f.a} idx={i} openIdx={openIdx} setOpenIdx={setOpenIdx} />
      ))}
    </div>
  );
}
