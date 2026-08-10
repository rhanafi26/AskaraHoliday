/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
        accent: '#d4a843',
        gold: '#f5d67a',
        dark: '#0f0f0f',
      },
      boxShadow: {
        'neumo-dark': '8px 8px 16px #0a0a0a, -8px -8px 16px #2a2a2a',
        'neumo-dark-inset': 'inset 4px 4px 8px #0a0a0a, inset -4px -4px 8px #2a2a2a',
        'neumo-gold': '8px 8px 16px #0a0a0a, -8px -8px 16px #d4a84320',
        'neumo-sm': '4px 4px 8px #0a0a0a, -4px -4px 8px #2a2a2a',
        'neumo-lg': '12px 12px 24px #0a0a0a, -12px -12px 24px #2a2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}