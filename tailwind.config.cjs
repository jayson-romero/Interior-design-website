
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: '#161616',
      lightdark:'#3D3737',
      white: '#ffffff',
      gray: '#F4F4F4',
      primary: '#D3A265',
      secondary: '#FDFBF8',
      
      
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Yeseva One', 'cursive'],
    },
  },
  plugins: [],
}