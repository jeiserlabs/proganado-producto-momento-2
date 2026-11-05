/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pg: {
          primary: '#198754',
          'primary-dark': '#0f5132',
          'primary-light': '#d1e7dd',
          accent: '#ffc107',
          'dark-emerald': '#0b291b',
          surface: '#f8fbf9',
          card: '#ffffff',
          border: '#e2ece6',
          'border-hover': '#a3cfbb',
          'text-main': '#2b3b32',
          'text-muted': '#52665a',
          'success-dark': '#0a3622',
          'warning-bg': '#fff3cd',
          'warning-text': '#664d03',
          'warning-border': '#ffe69c',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'pg-card': '0 4px 18px rgba(11, 41, 27, 0.05)',
        'pg-hover': '0 10px 28px rgba(25, 135, 84, 0.12)',
      }
    },
  },
  plugins: [],
}
