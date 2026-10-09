/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf4e8',
        maroon: '#8f1730',
        forest: '#07543d',
        gold: '#c8952e',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(61, 38, 19, 0.10)',
      },
    },
  },
  plugins: [],
}
