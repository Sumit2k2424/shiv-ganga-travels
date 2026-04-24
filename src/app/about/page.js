import { SITE, TRUST } from '@/data/packages';

export const metadata = {
  title: 'About Us — Trusted Char Dham Yatra Specialists Since 2010',
  description: 'Shiv Ganga Travels is a Haridwar-based pilgrimage specialist trusted by 50,000+ devotees. Learn our story, meet our team, and discover why we are the top choice for Char Dham.',
};

const TEAM = [
  { name: 'Pandit Shiv Prasad Sharma', role: 'Founder & Head Pujari',     since: 'Since 2010', bio: 'Third-generation Kedarnath pujari family. Personally leads every major yatra.' },
  { name: 'Rajesh Nautiyal',           role: 'Head of Operations',         since: 'Since 2012', bio: 'Garhwali native. 15 years of route knowledge. Speaks Hindi, English & Garhwali.' },
  { name: 'Deepa Rawat',               role: 'Customer Relations Manager', since: 'Since 2016', bio: 'Handles every enquiry personally. Ensures seamless communication.' },
  { name: 'Mohan Bhatt',               role: 'Senior Mountain Guide',      since: 'Since 2014', bio: 'Over 200 Kedarnath treks. Trained in first-aid & high-altitude safety.' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background:'linear-gradient(145deg, var(--deep) 0%, var(--deep-mid) 60%, var(--gold-dark) 100%)',
        padding:'60px 16px 50px', textAlign:'center',
      }}>
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          <span style={{
            background:'rgba(6,182,212,0.18)', color:'var(--teal)',
            fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase',
            padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:18,
            border:'1px solid rgba(6,182,212,0.3)',
          }}>Our Story</span>
          <h1 className="font-display" style={{
            color:'#fff', fontWeight:600, fontSize:'clamp(2rem, 5vw, 3rem)',
            lineHeight:1.15, marginBottom:14, letterSpacing:'-0.02em',
          }}>
            About <em style={{ fontStyle:'italic', color:'var(--teal)', fontWeight:700 }}>{SITE.name}</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:15, lineHeight:1.7 }}>
            {SITE.tagline}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background:'#fff', padding:'60px 16px' }}>
        <div style={{ maxWidth:780, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:36 }}>
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Serving Pilgrims Since <em>{SITE.established}</em></h2>
          </div>
          <div style={{ color:'var(--mid)', fontSize:15, lineHeight:1.85, display:'flex', flexDirection:'column', gap:18 }}>
            <p>
              <strong style={{ color:'var(--text)' }}>Shiv Ganga Travels</strong> was born in the holy city of Haridwar in {SITE.established}, founded by <strong style={{ color:'var(--text)' }}>Pandit Shiv Prasad Sharma</strong> — a lifelong devotee of Lord Shiva and the son of a Kedarnath pujari family. What began as helping pilgrims from his village reach the dhams safely has grown into one of Uttarakhand&apos;s most trusted yatra operators.
            </p>
            <p>
              Over <strong style={{ color:'var(--navy)' }}>15 years</strong>, we have guided more than <strong style={{ color:'var(--navy)' }}>50,000 pilgrims</strong> across all four dhams — from young families doing their first yatra to elderly devotees fulfilling a lifelong dream. Every journey we undertake carries the same sense of devotion with which we started.
            </p>
            <p>
              We are not just a travel agency. We are fellow pilgrims. Our team — most of whom are Garhwali and Kumaoni locals — understands the terrain, the weather, the temple customs, and most importantly, the spiritual significance of every stop on the yatra route.
            </p>
            <p style={{
              padding:'18px 22px', background:'var(--navy-light)',
              borderLeft:'4px solid var(--blue)', borderRadius:'0 10px 10px 0',
              fontStyle:'italic', color:'var(--text)',
            }}>
              &ldquo;Every pilgrim who travels with us is family. Their safety, their darshan, their memories — these are our responsibility.&rdquo;
              <br/>
              <strong style={{ color:'var(--navy)', fontSize:13, fontStyle:'normal', marginTop:8, display:'block' }}>
                — Pandit Shiv Prasad Sharma, Founder
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section style={{ background:'var(--bg)', padding:'60px 16px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:36 }}>
            <span className="section-tag">Our Commitments</span>
            <h2 className="section-title">What We <em>Promise</em> You</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:16 }}>
            {[
              { icon:'🙏', title:'Divine First',    desc:'Your darshan is our priority. VIP arrangements at every dham.' },
              { icon:'🛡️', title:'Your Safety',    desc:'Medical kits, oxygen, trained staff, GPS-tracked vehicles.' },
              { icon:'💚', title:'Honest Prices',   desc:'Zero hidden costs. Transparent breakdown before you book.' },
              { icon:'🏔️', title:'Local Expertise', desc:'Garhwali guides who know every bend, every weather pattern.' },
              { icon:'🕉️', title:'Spiritual Care',  desc:'Pre-yatra briefing, puja arrangements, traditional rites.' },
              { icon:'📱', title:'Always Reachable', desc:'24/7 WhatsApp support during your journey. No abandonment.' },
            ].map(v => (
              <div key={v.title} style={{
                background:'#fff', borderRadius:14, padding:'22px 20px',
                border:'1px solid var(--border)', boxShadow:'var(--shadow)',
              }}>
                <div style={{
                  width:44, height:44, background:'var(--navy-light)', borderRadius:10,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:22, marginBottom:14,
                }}>{v.icon}</div>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--text)', marginBottom:5 }}>{v.title}</div>
                <div style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background:'#fff', padding:'50px 16px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">Credentials</span>
            <h2 className="section-title">Officially <em>Registered</em> & Trusted</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:12 }}>
            {TRUST.certifications.map(cert => (
              <div key={cert} style={{
                background:'var(--navy-light)', padding:'14px 18px',
                borderRadius:10, display:'flex', alignItems:'center', gap:10,
                border:'1px solid rgba(18,96,204,0.1)',
              }}>
                <span style={{
                  width:28, height:28, background:'var(--navy)', color:'#fff',
                  borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:14, fontWeight:700, flexShrink:0,
                }}>✓</span>
                <span style={{ fontSize:12.5, color:'var(--text)', fontWeight:500 }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background:'var(--bg)', padding:'60px 16px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:36 }}>
            <span className="section-tag">The People</span>
            <h2 className="section-title">Behind Your <em>Yatra</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Meet the people dedicated to making your pilgrimage seamless and sacred.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:16 }}>
            {TEAM.map(p => (
              <div key={p.name} style={{
                background:'#fff', padding:'26px 20px', borderRadius:16,
                textAlign:'center', border:'1px solid var(--border)', boxShadow:'var(--shadow)',
              }}>
                <div style={{
                  width:68, height:68, margin:'0 auto 14px',
                  borderRadius:'50%',
                  background:'linear-gradient(135deg, var(--blue), var(--teal))',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:28, color:'#fff',
                  boxShadow:'0 4px 14px rgba(18,96,204,0.3)',
                }}>🙏</div>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--text)', marginBottom:3 }}>{p.name}</div>
                <div style={{ fontSize:12, color:'var(--navy)', fontWeight:600, marginBottom:6 }}>{p.role}</div>
                <div style={{ fontSize:11, color:'var(--cyan-dark)', marginBottom:10 }}>{p.since}</div>
                <p style={{ fontSize:12, color:'var(--muted)', lineHeight:1.5 }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background:'linear-gradient(135deg, var(--deep) 0%, var(--gold-dark) 100%)',
        padding:'56px 16px', textAlign:'center',
      }}>
        <div style={{ maxWidth:640, margin:'0 auto' }}>
          <h2 className="font-display" style={{
            color:'#fff', fontWeight:600, fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            marginBottom:12, letterSpacing:'-0.02em',
          }}>
            Ready to Travel With Us?
          </h2>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:24, lineHeight:1.7 }}>
            Join 50,000+ pilgrims who have trusted us with their sacred journey.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`tel:${SITE.phone}`} style={{
              background:'#fff', color:'var(--navy)', padding:'13px 26px',
              borderRadius:10, fontWeight:700, fontSize:13.5, textDecoration:'none',
              display:'inline-flex', alignItems:'center', gap:8,
            }}>📞 {SITE.phone}</a>
            <a href="/packages" style={{
              background:'var(--teal)', color:'#fff', padding:'13px 26px',
              borderRadius:10, fontWeight:700, fontSize:13.5, textDecoration:'none',
            }}>View Packages</a>
          </div>
        </div>
      </section>
    </>
  );
}
