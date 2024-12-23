/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Funnel_Display: ['"Funnel Display"', 'sans-serif']
      }
    },
  },
  plugins: [],
}