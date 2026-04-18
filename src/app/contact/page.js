import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Contact Us — Book Your Char Dham Yatra',
  description:
    'Contact Shiv Ganga Travels for Char Dham Yatra packages. Call, WhatsApp or email us. Office in Haridwar, Uttarakhand.',
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '88px', background: '#fef9f0', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="py-16 text-center px-4"
        style={{ background: 'linear-gradient(160deg, #142742 0%, #1e3a5f 100%)' }}
      >
        <h1
          className="text-white mb-3"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600 }}
        >
          Get in Touch
        </h1>
        <p className="text-blue-200 max-w-md mx-auto">
          Our yatra experts are available 7 days a week to help you plan your sacred journey.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-display)', color: '#142742' }}>
              Reach Us
            </h2>
            <div className="space-y-5">
              {[
                { icon: '📞', label: 'Phone / WhatsApp', value: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: '✉️', label: 'Email',            value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: '📍', label: 'Office',           value: SITE.address },
                { icon: '🕐', label: 'Working Hours',    value: 'Mon – Sun: 7 AM – 9 PM IST' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: '#fff', border: '1px solid #e2d8c8' }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-navy-800 hover:text-orange-600 transition-colors" style={{ color: '#142742' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium" style={{ color: '#142742' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Namaste! I would like to enquire about Char Dham Yatra packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold text-white text-sm transition-all hover:scale-105"
              style={{ background: '#25D366' }}
            >
              💬 Start Chat on WhatsApp
            </a>
          </div>

          {/* Enquiry form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-display)', color: '#142742' }}>
              Send an Enquiry
            </h2>
            {/* Static form — wire up to Formspree / EmailJS / Resend in production */}
            <form
              action={`https://formspree.io/f/YOUR_FORM_ID`}
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ramesh Kumar"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ background: '#fff', border: '1px solid #d1c8b8', color: '#142742' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91-98765-43210"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#fff', border: '1px solid #d1c8b8', color: '#142742' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Package Interested In</label>
                <select
                  name="package"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#fff', border: '1px solid #d1c8b8', color: '#142742' }}
                >
                  <option value="">— Select a package —</option>
                  <option>Char Dham Classic (11N/12D)</option>
                  <option>Char Dham Helicopter (5N/6D)</option>
                  <option>Char Dham Senior Special (14N/15D)</option>
                  <option>Kedarnath–Badrinath (5N/6D)</option>
                  <option>Yamunotri–Gangotri (4N/5D)</option>
                  <option>Kedarnath Only (3N/4D)</option>
                  <option>Badrinath Only (2N/3D)</option>
                  <option>Not decided yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Travel Month</label>
                <select
                  name="month"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#fff', border: '1px solid #d1c8b8', color: '#142742' }}
                >
                  <option value="">— Select month —</option>
                  <option>May 2025</option>
                  <option>June 2025</option>
                  <option>September 2025</option>
                  <option>October 2025</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Number of Pilgrims</label>
                <input
                  type="number"
                  name="pilgrims"
                  min="1"
                  placeholder="e.g. 4"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#fff', border: '1px solid #d1c8b8', color: '#142742' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Message (optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Any specific requirements, senior pilgrims, dietary needs..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: '#fff', border: '1px solid #d1c8b8', color: '#142742' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
                style={{ background: '#e8620c' }}
              >
                Send Enquiry →
              </button>
              <p className="text-xs text-gray-400 text-center">
                We reply within 2 hours during working hours. No spam ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
