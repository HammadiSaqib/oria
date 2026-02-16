/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a', // Deep navy (Slate 900)
          charcoal: '#334155', // Charcoal (Slate 700)
          gold: '#cca43b', // Muted gold for accents
          light: '#f8fafc', // Very light slate/white
          gray: '#64748b', // Slate 500 for text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
