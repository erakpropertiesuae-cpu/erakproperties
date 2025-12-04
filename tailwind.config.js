/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      colors: {
        beige: {
          DEFAULT: '#EAE7DC',
          light: '#F0E0D2',
        },
        brown: {
          light: '#8D6E63',
          DEFAULT: '#7B5E57',
          dark: '#5D4037',
        },
      },},
  },
  plugins: [],
}
