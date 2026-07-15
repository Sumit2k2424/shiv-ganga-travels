/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT:'#0F2B5B', mid:'#1A3E75', light:'#E8F0FB' },
        gold:  { DEFAULT:'#E8920A', dark:'#C67A08', light:'#FEF3E2' },
        teal:  { DEFAULT:'#0B7B8B', dark:'#09666F', light:'#E3F5F7' },
        bg:    '#F8F9FC',
        card:  '#FFFFFF',
        muted: '#94A3B8',
        border:'#E2E8F0',
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
    },
  },
  plugins: [],
};
