import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Medical Certificate 2026 – Who Needs It, How to Get It & What Tests',
  description: 'Char Dham Yatra 2026 medical certificate is mandatory for pilgrims aged 55+. SpO2 below 85% at checkpoints means being turned back. Find out which tests, which doctors, and how to prepare.',
  keywords: ['char dham yatra medical certificate 2026', 'char dham yatra fitness certificate', 'medical certificate kedarnath 2026', 'char dham yatra age limit medical', 'char dham oxygen level requirement', 'char dham yatra doctor certificate'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-medical-certificate` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is medical certificate mandatory for Char Dham Yatra 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. A medical fitness certificate is mandatory for all pilgrims aged 55 years and above for Char Dham Yatra 2026. It must be issued by a registered MBBS doctor and must state the pilgrim is fit for high-altitude travel. Without it, pilgrims aged 55+ will be turned back at biometric registration checkpoints.' }},
      { '@type': 'Question', name: 'What should the Char Dham Yatra medical certificate say?',
        acceptedAnswer: { '@type': 'Answer', text: 'The certificate must include: (1) Pilgrim name as per Aadhaar, (2) Age and date of birth, (3) Statement: "The above patient is physically and medically fit for high-altitude travel to Kedarnath/Char Dham Yatra", (4) Any current medications being taken, (5) Doctor name, registration number, clinic address, signature, and date. The date must be within 30 days of the yatra start date.' }},
      { '@type': 'Question', name: 'Which doctor can issue the Char Dham Yatra medical certificate?',
        acceptedAnswer: { '@type': 'Answer', text: 'Any registered MBBS doctor can issue the Char Dham Yatra medical certificate — government or private hospital. The doctor should be an allopathic practitioner with a valid registration number. Ayurvedic, homeopathic, or dental doctors cannot issue this certificate. A general physician at any government hospital, private clinic, or family doctor with MBBS qualification is acceptable.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const H2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.55rem)', fontWeight:700, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };

export default function MedicalCertificate() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Health Guide · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Medical Certificate 2026<br/><em style={{ color:'#FFD166' }}>Who Needs It & How to Get It</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.75, maxWidth:700, margin:'0 auto' }}>
            Mandatory for all pilgrims 55+. Without it, you will be turned back at the checkpoint. Here is exactly what you need, in what format, and from which doctor.
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Registration<span>›</span>
          <span>Medical Certificate</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        <div style={{ background:'#FFF3CD', border:'2px solid var(--gold)', borderRadius:12, padding:'16px 20px', marginBottom:28, display:'flex', gap:14, alignItems:'flex-start' }}>
          <span style={{ fontSize:26, flexShrink:0 }}>⚠️</span>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:'#7B3F00', marginBottom:6 }}>Critical — Do Not Skip This</div>
            <p style={{ fontSize:14, color:'#7B3F00', lineHeight:1.75, margin:0 }}>Pilgrims aged 55 and above will be turned back at biometric registration checkpoints without a valid medical fitness certificate. There is no on-the-spot arrangement. Get your certificate at least 1 week before your yatra start date.</p>
          </div>
        </div>

        <h2 style={H2}>Who Needs the Medical Certificate?</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:12, marginBottom:20 }}>
          <div style={{ background:'#FFF1F2', borderRadius:12, padding:'14px 16px', border:'1px solid #FECDD3' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#9F1239', marginBottom:8 }}>❌ Must have certificate</div>
            {['All pilgrims aged 55 years and above (mandatory)','Any age with heart disease, diabetes, hypertension (strongly recommended)','Pilgrims on blood thinners or cardiac medication','Anyone with a history of high-altitude sickness','Pilgrims with COPD, asthma, or respiratory conditions'].map(s=>(
              <div key={s} style={{ fontSize:13.5, color:'#9F1239', padding:'4px 0', borderBottom:'1px solid rgba(159,18,57,0.1)' }}>• {s}</div>
            ))}
          </div>
          <div style={{ background:'#F0FDF4', borderRadius:12, padding:'14px 16px', border:'1px solid #86EFAC' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'#15803D', marginBottom:8 }}>✅ Certificate recommended (not mandatory)</div>
            {['Pilgrims aged 40–54 with any health history','First-time high-altitude travellers of any age','Pilgrims who are overweight or sedentary','Women who are pregnant or recently delivered'].map(s=>(
              <div key={s} style={{ fontSize:13.5, color:'#15803D', padding:'4px 0', borderBottom:'1px solid rgba(21,128,61,0.1)' }}>• {s}</div>
            ))}
          </div>
        </div>

        <h2 style={H2}>Exact Format — What the Certificate Must Say</h2>
        <div style={{ background:'var(--navy-light)', borderRadius:14, border:'2px solid var(--navy)', padding:'20px 24px', marginBottom:20, fontFamily:'monospace', fontSize:13.5 }}>
          <div style={{ fontWeight:700, color:'var(--navy)', marginBottom:12, fontFamily:'var(--font)' }}>Sample Certificate Format (Copy this for your doctor)</div>
          <div style={{ lineHeight:2, color:'#334155' }}>
            <div><strong>Date:</strong> [Date — must be within 30 days of yatra]</div>
            <div><strong>Patient Name:</strong> [Full name as on Aadhaar]</div>
            <div><strong>Age / DOB:</strong> [Age] years / [Date of Birth]</div>
            <div><strong>ID Proof:</strong> Aadhaar No. [XXXX XXXX XXXX]</div>
            <div style={{ marginTop:12, background:'rgba(15,43,91,0.06)', padding:'12px', borderRadius:8, fontSize:14.5, fontStyle:'italic' }}>
              "This is to certify that the above-named patient has been examined by me and is found to be physically and medically fit for high-altitude travel as part of the Char Dham / Kedarnath Yatra. The patient has been informed of the risks of high-altitude travel and has no contraindication to the same."
            </div>
            <div style={{ marginTop:12 }}><strong>Current medications:</strong> [List any medications or "None"]</div>
            <div><strong>Blood Pressure:</strong> [Reading] &nbsp;|&nbsp; <strong>Heart Rate:</strong> [BPM]</div>
            <div style={{ marginTop:12 }}><strong>Doctor Name:</strong> Dr. [Full name]</div>
            <div><strong>Qualification:</strong> MBBS [+ any specialisation]</div>
            <div><strong>Registration No.:</strong> [Medical council registration number]</div>
            <div><strong>Clinic/Hospital:</strong> [Name and address]</div>
            <div><strong>Signature + Stamp</strong></div>
          </div>
        </div>

        <h2 style={H2}>Which Doctor Can Issue It?</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
          {[
            { ok:true, type:'Government MBBS Doctor (District Hospital, PHC)', note:'Best option — stamp is widely accepted. Free or nominal charge. Long queue possible.' },
            { ok:true, type:'Private MBBS Doctor / General Physician', note:'Most common option. Typically ₹200–500 consultation fee. Quick. Accepted everywhere.' },
            { ok:true, type:'Specialist — Cardiologist, Medicine, Physician', note:'Ideal if you have a heart condition or BP. Their certification carries additional weight.' },
            { ok:false, type:'Ayurvedic / BAMS / Homeopathic Doctor', note:'NOT accepted. Must be an allopathic MBBS practitioner only.' },
            { ok:false, type:'Dentist / BDS', note:'NOT accepted. Dental degree is not relevant for medical fitness certification.' },
            { ok:false, type:'Nurse / Pharmacist', note:'NOT accepted. Must be a licensed doctor with MBBS degree.' },
          ].map(item=>(
            <div key={item.type} style={{ display:'flex', gap:12, padding:'12px 16px', borderRadius:10, background:item.ok?'#F0FDF4':'#FFF1F2', border:`1px solid ${item.ok?'#86EFAC':'#FECDD3'}` }}>
              <span style={{ fontSize:20, flexShrink:0 }}>{item.ok?'✅':'❌'}</span>
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:item.ok?'#15803D':'#9F1239' }}>{item.type}</div>
                <div style={{ fontSize:13.5, color:item.ok?'#15803D':'#9F1239', marginTop:3 }}>{item.note}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={H2}>When to Get the Certificate</h2>
        <p>Get the certificate <strong>no more than 30 days before your yatra start date</strong> and <strong>at least 7 days before departure</strong>. Do not get it too far in advance — checkpoints may question a certificate dated 60+ days before travel.</p>
        <p>If any correction is needed (wrong name spelling, missing information), you have time to go back to the doctor. Shiv Ganga Travels sends a reminder to all pilgrims 30 days before departure with the exact format the doctor should use.</p>

        <h2 style={H2}>What Happens Without the Certificate?</h2>
        <p>Biometric registration checkpoints at Sonprayag (for Kedarnath), Joshimath (for Badrinath), Barkot (for Yamunotri), and Uttarkashi (for Gangotri) check documents. A pilgrim aged 55+ without a valid medical certificate will be denied entry and must return to the nearest town.</p>
        <p>There is <strong>no on-the-spot doctor</strong> at these checkpoints who can issue the certificate. There is no way to "explain your way through." The rule has been strictly enforced since 2023 and is even stricter in 2026 following several high-altitude health incidents in previous seasons.</p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:28 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>We Guide All Our Pilgrims on the Certificate Process</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Shiv Ganga Travels sends a pre-departure checklist 30 days before your yatra — including the exact certificate format for your doctor.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help with the medical certificate for Char Dham Yatra 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            Registration Guide →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Registration Guide','/blog/char-dham-yatra-registration'],['Senior Citizen Guide','/blog/senior-citizen-char-dham'],['Char Dham FAQ','/blog/char-dham-yatra-faq'],['Packing List','/blog/char-dham-yatra-packing-list']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
