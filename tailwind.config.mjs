/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#f5f2ec',
        navy: '#0a2063',
        green: '#18e059',
        terra: '#d8826a',
        red: '#b01010',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
    },
  },
  plugins: [],
};
