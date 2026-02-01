/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0a0a0a',
          dark: '#121212',
          surface: '#1E1E1E',
          accent: '#D4FF00',
          muted: '#888888',
        }
      },
      backgroundImage: {
        noise: "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}