/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#34353A',
        yellow: '#F6CA79',
        darkBg: '#31333A',
        geryTextColor: '#A4A4A5',
        containerBg: '#3D3E42',
        lightText:'#C2C1C2'
    
      },
    },
  },
  plugins: [],
}