import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Cancellation & Refund Policy — Shiv Ganga',
  description: 'Clear cancellation and refund policy for Char Dham Yatra packages booked with Shiv Ganga Travels, Haridwar. 30-day free cancellation. Full transparency.',
  alternates: { canonical: `${SITE.baseUrl}/cancellation-policy` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can I cancel Char Dham Yatra package?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Shiv Ganga Travels allows cancellation at any time before departure. Refund percentage depends on how many days before departure you cancel: 30+ days = 80% refund, 15–29 days = 50% refund, 7–14 days = 25% refund, under 7 days = no refund. Cancellations must be made in writing via WhatsApp or email.' }},
      { '@type': 'Question', name: 'What is the refund policy for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Refunds are processed within 7 working days of the cancellation request being confirmed. Refunds are made to the original payment method. The 25% advance booking fee is non-refundable for cancellations within 7 days of departure.' }},
      { '@type': 'Question', name: 'Is advance payment refundable for Char Dham package?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, the 25% advance payment is refundable if you cancel 30 or more days before your departure date (80% of total package cost returned). For cancellations 15–29 days before departure, 50% of the total cost is refunded. This includes the advance payment.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const ROW = ({ days, pct, color, note }) => (
  <tr style={{ borderBottom: '1px solid var(--border)' }}>
    <td style={{ padding:'14px 16px', fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>{days}</td>
    <td style={{ padding:'14px 16px', textAlign:'center' }}>
      <span style={{ background: color + '22', color, fontWeight:800, fontSize:18, padding:'4px 16px', borderRadius:8, display:'inline-block' }}>{pct}</span>
    </td>
    <td style={{ padding:'14px 16px', fontSize:13.5, color:'var(--text-muted)' }}>{note}</td>
  </tr>
);

export default function CancellationPolicy() {
  return (
    <>
      <Schema/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'48px 20px 36px', textAlign:'center' }}>
        <div style={{ maxWidth:780, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Transparent Policy
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:12 }}>
            Cancellation &amp; Refund Policy
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:15 }}>
            We believe in complete transparency. No fine print. No hidden clauses.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home
          <span>›</span>
          <span>Cancellation Policy</span>
        </div>
      </nav>

      <div style={{ maxWidth:860, margin:'0 auto', padding:'40px 20px 60px' }}>

        {/* Alert */}
        <div style={{ background:'#F0FDF4', border:'2px solid #16A34A', borderRadius:12, padding:'16px 20px', marginBottom:32, display:'flex', gap:12, alignItems:'flex-start' }}>
          <span style={{ fontSize:24, flexShrink:0 }}>✅</span>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:'#15803D', marginBottom:4 }}>Free Cancellation for 30-Day Advance Bookings</div>
            <p style={{ fontSize:13.5, color:'#15803D', margin:0 }}>If you book your Char Dham Yatra package more than 30 days before your departure date and then need to cancel, you receive 80% of your total package cost back. The 25% advance you paid at booking is fully included in this refund.</p>
          </div>
        </div>

        {/* Refund table */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:16 }}>Refund Schedule</h2>
        <div style={{ overflowX:'auto', marginBottom:32 }}>
          <table style={{ width:'100%', borderCollapse:'collapse' }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                <th style={{ padding:'12px 16px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:13 }}>Cancellation Timing</th>
                <th style={{ padding:'12px 16px', textAlign:'center', color:'#fff', fontWeight:700, fontSize:13 }}>Refund</th>
                <th style={{ padding:'12px 16px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:13 }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <ROW days="30+ days before departure" pct="80%" color="#15803D" note="Recommended window. Most pilgrims who cancel do so in this period. Refund processed in 7 working days."/>
              <ROW days="15–29 days before departure" pct="50%" color="#D97706" note="Partial refund. Hotels and vehicles are pre-booked — cancellation costs apply."/>
              <ROW days="7–14 days before departure" pct="25%" color="#DC2626" note="Late cancellation. Most logistics are confirmed and non-reversible at this stage."/>
              <ROW days="Under 7 days before departure" pct="0%" color="#991B1B" note="No refund. All arrangements are locked. Consider rescheduling instead."/>
            </tbody>
          </table>
        </div>

        {/* How to cancel */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:12 }}>How to Cancel</h2>
        {[
          'Send a cancellation request via WhatsApp to +91-7017082807 or email to support@shivgangatravels.com',
          'Include your booking reference number and departure date in the message',
          'Our team will confirm receipt within 24 hours and provide the refund amount',
          'Refund is processed to your original payment method within 7 working days of confirmation',
        ].map((s,i) => (
          <div key={i} style={{ display:'flex', gap:12, padding:'10px 0', borderBottom:'1px solid var(--border)', fontSize:14.5, color:'var(--text-mid)' }}>
            <span style={{ background:'var(--navy)', color:'#fff', width:24, height:24, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, flexShrink:0, marginTop:1 }}>{i+1}</span>
            {s}
          </div>
        ))}

        {/* Rescheduling */}
        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'18px 20px', margin:'28px 0' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>🔄 Consider Rescheduling Instead</div>
          <p style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.7, margin:0 }}>
            If your plans change but you still intend to do the yatra, we strongly recommend rescheduling rather than cancelling. Date changes can be made free of charge up to 7 days before your original departure, subject to availability. WhatsApp us and we will find you a new date.
          </p>
        </div>

        {/* Force majeure */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:12 }}>Natural Calamity / Government Order Cancellations</h2>
        <p style={{ fontSize:14.5, color:'var(--text-muted)', lineHeight:1.85, marginBottom:16 }}>
          If the Uttarakhand government suspends or restricts Char Dham Yatra due to natural calamity, landslides, flood, or official order — we will reschedule your trip to the nearest available date at no extra cost. If you cannot travel in the rescheduled window, a full credit note valid for the following yatra season will be issued. Cash refunds in force majeure cases are at management discretion.
        </p>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Questions About Your Booking?</h3>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:13.5, marginBottom:18 }}>We respond to every cancellation request within 24 hours.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I have a question about my booking / cancellation.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`}
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
              ✉️ {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
