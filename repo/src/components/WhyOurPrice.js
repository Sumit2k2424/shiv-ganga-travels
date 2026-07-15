/**
 * WhyOurPrice — calm value-justification block.
 * Reframes a much-cheaper quote as a quality risk, without naming
 * competitors or using fear. Grounded in real differentiators.
 */
export default function WhyOurPrice({ compact = false }) {
  const points = [
    ['🏨', 'Hotels', 'Clean, well-located stays with hot water for cold mornings — not unrated rooms far from the temple.'],
    ['🚐', 'Vehicle', 'Regularly serviced cars and Tempo Travellers built for mountain gradients — not an old, tired vehicle.'],
    ['🧭', 'Driver', 'Hill-seasoned drivers who know every bend above Rishikesh — not someone new to the mountains.'],
    ['🧾', 'The quote', 'One all-inclusive price. Green tax, parking and pony/palki are accounted for, not added later.'],
  ];

  return (
    <section style={{
      background: 'var(--bg)',
      border: '1px solid var(--border)',
      borderLeft: '4px solid var(--gold-dark)',
      borderRadius: 14,
      padding: compact ? '18px 20px' : '24px 26px',
      margin: compact ? '20px 0' : '28px 0',
    }}>
      <h3 style={{
        fontSize: compact ? '1.05rem' : '1.2rem',
        fontWeight: 800,
        color: 'var(--navy)',
        margin: '0 0 8px',
        fontFamily: 'var(--font-display)',
      }}>
        Before you compare on price alone
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-mid)', lineHeight: 1.75, margin: '0 0 16px' }}>
        For most families the Char Dham is a once-in-a-lifetime journey, often with elders along.
        When a quote lands well below ours, the gap almost always shows up somewhere you will feel
        on the road:
      </p>
      <div style={{ display: 'grid', gap: 10, marginBottom: 16 }}>
        {points.map(([icon, label, text]) => (
          <div key={label} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 17, lineHeight: 1.4, flexShrink: 0 }}>{icon}</span>
            <p style={{ fontSize: 13.5, color: 'var(--text-mid)', lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: 'var(--navy)' }}>{label}.</strong> {text}
            </p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 14, color: 'var(--navy)', lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
        We quote once, all-inclusive, for a yatra that runs smoothly from Haridwar to the last
        darshan and back. That peace of mind is the real difference, and it is what you are
        actually paying for.
      </p>
    </section>
  );
}
