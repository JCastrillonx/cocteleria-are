/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'secondary': ["Lobster", 'sans-serif'],
        'primary': ["Fjalla One", 'sans-serif'],
        'text': ["Poppins", 'sans-serif']
    
      },
      colors: {
        'primary': '#fff0dd',
        'secondary': '#1c1c1c',
        'tertiary': '#fc5202',
        'text': '#cfcfcf'
      }
    },
  },
  plugins: [],
}