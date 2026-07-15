/**
 * AnswerBox — a visually distinct, self-contained direct answer placed right
 * under a question-style H1/H2.
 *
 * Why this exists (User Intent Matching + AI citations):
 * AI engines (AI Overviews, ChatGPT, Perplexity) and featured snippets extract
 * a single self-contained passage that answers the query directly. Burying the
 * answer three paragraphs down means it doesn't get pulled. A 40–60 word lead
 * answer that resolves the user's specific question — before the narrative —
 * is what gets cited. The `.speakable-answer` class also feeds the page's
 * SpeakableSpecification schema.
 *
 * Usage:
 *   <AnswerBox>
 *     Kedarnath Yatra from Haridwar costs ₹6,999 per person for a 3N/4D
 *     all-inclusive package — AC cab, Guptkashi hotel, meals and VIP darshan.
 *     The temple opens 22 April 2026; the trek is 16km from Gaurikund.
 *   </AnswerBox>
 */
export default function AnswerBox({ children, label = 'Quick answer' }) {
  return (
    <div
      className="speakable-answer"
      style={{
        background: 'var(--navy-light, #f1f5f9)',
        borderLeft: '4px solid var(--teal, #0B7B8B)',
        borderRadius: '0 10px 10px 0',
        padding: '14px 18px',
        margin: '18px 0 24px',
        fontSize: 15.5,
        lineHeight: 1.7,
        color: 'var(--text, #1e293b)',
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: 11.5,
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--teal, #0B7B8B)',
          marginBottom: 6,
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
