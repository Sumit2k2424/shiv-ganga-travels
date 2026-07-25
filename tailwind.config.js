/** @type {import('tailwindcss').Config} */
module.exports = {
  // Class-based only — the site never sets `dark` on <html>, so every
  // dark: variant stays inert. Present so shadcn components compile.
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Shiv Ganga brand (original — unchanged) ──
        navy:  { DEFAULT:'#0F2B5B', mid:'#1A3E75', light:'#E8F0FB' },
        gold:  { DEFAULT:'#E8920A', dark:'#C67A08', light:'#FEF3E2' },
        teal:  { DEFAULT:'#0B7B8B', dark:'#09666F', light:'#E3F5F7' },
        bg:    '#F8F9FC',

        // ── shadcn/ui semantic tokens (additive) ──
        // Standard shadcn semantics, so components copied from either
        // registry work verbatim. Safe because the site renders entirely
        // through inline styles + globals.css classes — an audit found
        // zero Tailwind colour utilities in use anywhere in src/.
        // `text-muted-foreground` resolves to #64748B, the exact value
        // the site's own `--text-muted` variable already uses.
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },

      // Makes a bare `border` class use --border. Zero bare-`border`
      // usages existed before this install, so nothing shifts.
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      fontFamily: {
        sans:    ['Plus Jakarta Sans','system-ui','sans-serif'],
        display: ['Playfair Display','Georgia','serif'],
      },

      boxShadow: {
        card: '0 4px 6px rgba(15,43,91,0.07)',
        lg:   '0 20px 25px rgba(15,43,91,0.12)',
        gold: '0 4px 14px rgba(232,146,10,0.35)',
      },

      keyframes: {
        // shadcn — accordion
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        // MagicUI — marquee
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to:   { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        // MagicUI — shimmer button
        'spin-around': {
          '0%':       { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%':     { transform: 'translateZ(0) rotate(360deg)' },
        },
        'shimmer-slide': {
          to: { transform: 'translate(calc(100cqw - 100%), 0)' },
        },
      },

      animation: {
        'accordion-down':   'accordion-down 0.2s ease-out',
        'accordion-up':     'accordion-up 0.2s ease-out',
        marquee:            'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'spin-around':      'spin-around calc(var(--speed) * 2) infinite linear',
        'shimmer-slide':    'shimmer-slide var(--speed) ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
