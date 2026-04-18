import { SITE } from '@/data/packages';

export const metadata = {
  title: 'About Us — Trusted Char Dham Yatra Specialists Since 2010',
  description:
    'Shiv Ganga Travels is a Haridwar-based pilgrimage specialist trusted by 50,000+ devotees. Learn our story and our commitment to safe, blessed yatras.',
};

const TEAM = [
  { name: 'Pandit Shiv Prasad Sharma', role: 'Founder & Head Pujari',    since: 'Since 2010' },
  { name: 'Rajesh Nautiyal',           role: 'Head of Operations',        since: 'Since 2012' },
  { name: 'Deepa Rawat',               role: 'Customer Relations Manager', since: 'Since 2016' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '88px', background: '#fef9f0', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="py-16 text-center px-4"
        style={{ background: 'linear-gradient(160deg, #142742 0%, #1e3a5f 100%)' }}
      >
        <p className="text-orange-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
          Our Story
        </p>
        <h1
          className="text-white mb-3"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600 }}
        >
          About {SITE.name}
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto">{SITE.tagline}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

        {/* Story */}
        <section>
          <p className="divider-om mb-6" />
          <h2 className="text-3xl font-semibold text-center mb-8" style={{ fontFamily: 'var(--font-display)', color: '#142742' }}>
            Our Journey Since {SITE.established}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              <strong style={{ color: '#142742' }}>Shiv Ganga Travels</strong> was born in the holy city of Haridwar
              in {SITE.established}, founded by Pandit Shiv Prasad Sharma — a lifelong devotee of Shiva and son of a
              Kedarnath pujari family. What began as helping pilgrims from his village reach the dhams safely has
              grown into one of Uttarakhand's most trusted yatra operators.
            </p>
            <p>
              Over 15 years, we have guided more than 50,000 pilgrims across all four dhams — from young families
              doing their first yatra to elderly devotees fulfilling a lifelong dream. Every journey we undertake
              carries the same sense of devotion with which we started.
            </p>
            <p>
              We are not just a travel agency. We are fellow pilgrims. Our team — most of whom are Garhwali and
              Kumaoni locals — understands the terrain, the weather, the temple customs, and most importantly,
              the spiritual significance of every stop on the yatra route.
            </p>
          </div>
        </section>

        {/* Values */}
        <section
          className="rounded-2xl p-8"
          style={{ background: '#142742' }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Our Commitments to You
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🙏', title: 'Divine First', desc: 'We prioritise your darshan, not the clock. VIP arrangements at every dham.' },
              { icon: '🛡️', title: 'Your Safety',  desc: 'Medical kits, oxygen cylinders, and trained staff on every trip.' },
              { icon: '💚', title: 'Honest Prices', desc: 'No hidden costs. Everything is transparent before you book.' },
              { icon: '🏔️', title: 'Local Expertise', desc: 'Our guides know the Himalayas like their backyard.' },
            ].map((v) => (
              <div key={v.title} className="flex gap-4 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.07)' }}>
                <span className="text-2xl">{v.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{v.title}</p>
                  <p className="text-blue-200 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8" style={{ fontFamily: 'var(--font-display)', color: '#142742' }}>
            The People Behind Your Yatra
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {TEAM.map((person) => (
              <div
                key={person.name}
                className="text-center p-6 rounded-2xl"
                style={{ background: '#fff', border: '1px solid #e2d8c8' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                  style={{ background: '#fff4ee' }}
                >
                  🙏
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#142742' }}>{person.name}</p>
                <p className="text-xs text-gray-500 mb-1">{person.role}</p>
                <p className="text-xs text-orange-500">{person.since}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
