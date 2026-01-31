/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dentsis: {
          primary: '#2F6FED',
          secondary: '#7BCBFF',
          accent: '#35D0BA',
          background: '#F7FAFF',
          surface: '#FFFFFF',
          text: '#0F172A',
          'text-muted': '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Thai', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
