/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forestGreen: '#228B22',
        earthyBrown: '#8B4513',
        warmYellow: '#FFD700',
        oliveGreen: '#808000',
        softBeige: '#F5F5DC',
        rustOrange: '#D2691E',
        charcoalGrey: '#36454F',
        lightGrey: '#D3D3D3',
        white: '#FFFFFF'
      }
    },
  },
  plugins: [],
}
