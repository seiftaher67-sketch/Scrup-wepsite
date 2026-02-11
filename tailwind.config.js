/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'el-messiri': ['El Messiri', 'serif'],
      },
      colors: {
        'footer-gradient-start': '#022B3A',
        'footer-gradient-end': '#1F7A8C',
      },
    },
  },
  plugins: [],
}
