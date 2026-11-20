/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wina: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
          },
          teal: {
            50: '#ecfeff',
            100: '#cffafe',
            600: '#0891b2',
            700: '#0e7490',
          },
          cream: '#fdfbf7',
          dark: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Nyala', 'Noto Sans Ethiopic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
