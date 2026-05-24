# 🙏 Shiv Ganga Travels — Website

A lightning-fast, SEO-first pilgrimage travel website built with **Next.js 14**, **Tailwind CSS**, and hosted on **Vercel** (free).

---

## 🚀 Getting Started (Step-by-Step for Beginners)

### Prerequisites
- **Node.js 18+** — Download from https://nodejs.org (choose LTS version)
- **VS Code** (recommended) — https://code.visualstudio.com

### Step 1 — Install dependencies
Open a terminal in this folder and run:
```bash
npm install
```
This downloads all required packages (takes 1–2 minutes first time).

### Step 2 — Run the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser. You will see your website live!

### Step 3 — Make changes
- Edit `src/data/packages.js` to add/update tour packages
- Edit `src/app/page.js` to update the homepage
- All changes appear instantly in the browser (hot reload)

---

## 📁 Project Structure

```
shiv-ganga-travels/
├── src/
│   ├── app/                        # All pages live here
│   │   ├── layout.js               # Global layout (Navbar + Footer on every page)
│   │   ├── page.js                 # Homepage (/)
│   │   ├── globals.css             # Global styles + fonts
│   │   ├── sitemap.js              # Auto-generated sitemap for Google
│   │   ├── robots.js               # robots.txt for search engines
│   │   ├── packages/
│   │   │   ├── page.js             # All packages listing (/packages)
│   │   │   └── [slug]/
│   │   │       └── page.js         # Individual package detail (/packages/char-dham-classic-11n-12d)
│   │   ├── about/
│   │   │   └── page.js             # About us page
│   │   └── contact/
│   │       └── page.js             # Contact + enquiry form
│   ├── components/
│   │   ├── Navbar.js               # Top navigation bar
│   │   ├── Footer.js               # Footer with links and contact
│   │   ├── PackageCard.js          # Reusable package card component
│   │   └── WhatsAppButton.js       # Floating WhatsApp button
│   └── data/
│       └── packages.js             # ★ ALL PACKAGE DATA IS HERE ★
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS + brand colors
└── package.json                    # Project dependencies
```

---

## ✏️ How to Add a New Package

Open `src/data/packages.js` and add a new object to the `PACKAGES` array:

```js
{
  slug: 'kedarnath-helicopter-1d',           // URL: /packages/kedarnath-helicopter-1d
  category: 'single-dham',                   // 'char-dham' | 'do-dham' | 'single-dham'
  name: 'Kedarnath Helicopter Day Trip',
  subtitle: 'Same Day Return',
  duration: { nights: 0, days: 1 },
  groupSize: '2–6 people',
  difficulty: 'Easy',
  season: 'May – June, Sept – Oct',
  transport: 'Helicopter',
  startCity: 'Phata / Guptkashi',
  endCity: 'Phata / Guptkashi',
  price: { original: 9000, discounted: 8000, currency: '₹', perPerson: true },
  highlights: ['Helicopter to Kedarnath', 'Temple darshan', 'Same day return'],
  inclusions: ['Helicopter ticket', 'VIP darshan', 'Light breakfast'],
  exclusions: ['Personal expenses', 'Puja charges'],
  itinerary: [
    { day: 1, title: 'Helicopter day trip', desc: 'Morning flight to Kedarnath. Darshan. Return by afternoon.' },
  ],
  featured: false,
  badge: null,
  images: ['helicopter', 'kedarnath'],
  metaTitle: 'Kedarnath Helicopter Day Trip 2025 | Shiv Ganga Travels',
  metaDesc: 'Same-day Kedarnath darshan by helicopter. Starting ₹8,000. Book now.',
},
```

That's it! The page `/packages/kedarnath-helicopter-1d` is **automatically created** by Next.js.

---

## 🌐 How to Deploy to the Internet (Free on Vercel)

### Step 1 — Push code to GitHub
1. Create a free account at https://github.com
2. Create a new repository called `shiv-ganga-travels`
3. Run these commands:
```bash
git init
git add .
git commit -m "Initial website launch"
git remote add origin https://github.com/YOUR_USERNAME/shiv-ganga-travels.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click "New Project" → import your `shiv-ganga-travels` repo
3. Click "Deploy" — done!

Your website will be live at `https://shiv-ganga-travels.vercel.app` within 2 minutes.

### Step 3 — Connect your custom domain
1. Buy a domain like `shivgangatravels.com` from GoDaddy / Namecheap (₹800–1200/year)
2. In Vercel → Settings → Domains → add your domain
3. Update DNS records as Vercel instructs

---

## 📋 Checklist Before Going Live

- [ ] Update `SITE` object in `src/data/packages.js` with your real phone, email, WhatsApp number
- [ ] Update `SITE.baseUrl` with your actual domain
- [ ] Replace `https://formspree.io/f/YOUR_FORM_ID` in contact/page.js with a real Formspree ID
- [ ] Add a real `og-image.jpg` (1200×630px) to the `/public` folder
- [ ] Test on mobile
- [ ] Submit sitemap to Google Search Console: `yourdomain.com/sitemap.xml`

---

## 🛠️ Adding Future Sections (Phase 2+)

| Feature     | Where to add                              |
|-------------|-------------------------------------------|
| Cabs        | `src/app/cabs/page.js` + data in packages.js |
| Hotels      | `src/app/hotels/page.js`                  |
| Activities  | `src/app/activities/page.js`              |
| Blog        | `src/app/blog/[slug]/page.js` + MDX files |
| Gallery     | `src/app/gallery/page.js`                 |
| Reviews     | Add to packages.js and PackageCard.js     |

---

## 📞 Support

For questions about this website setup, contact your developer.
For yatra bookings: {SITE.phone}
