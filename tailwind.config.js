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
        blue:  { DEFAULT:'#1260CC', dark:'#0A4A9F', light:'#EBF5FF' },
        cyan:  { DEFAULT:'#06B6D4', dark:'#0891B2' },
        deep:  { DEFAULT:'#07142A', mid:'#0D2748' },
        ocean: '#0D1F38',
        muted: '#7B90B0',
        border:'#D6E4F7',
        bg:    '#F5F9FF',
      },
      fontFamily: { sans: ['Poppins','system-ui','sans-serif'] },
      boxShadow: {
        card:  '0 2px 12px rgba(18,96,204,0.10)',
        lg:    '0 8px 32px rgba(18,96,204,0.16)',
        xl:    '0 16px 48px rgba(18,96,204,0.22)',
      },
      borderRadius: {
        card: '10px',
        lg:   '16px',
      },
    },
  },
  plugins: [],
};
