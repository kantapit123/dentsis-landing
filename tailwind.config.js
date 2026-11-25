/** @type {import('tailwindcss').Config} */
// Layout concept: the clinic's appointment book. Pages are ruled like a
// day sheet, sections follow the clock, and the brand blue marks "now".
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2F6F6', // cool sheet, slight teal bias
        card: '#FFFFFF',
        ink: '#0C2330', // deep navy-teal text
        'ink-2': '#4A5F6C', // secondary text
        rule: '#D4DEE1', // grid lines
        'rule-soft': '#E6EDEF',
        blue: { DEFAULT: '#2F6FED', deep: '#1A4FC2', wash: '#E7EFFE' },
        mint: { DEFAULT: '#35D0BA', ink: '#0B7A6A', wash: '#DDF6F1' },
        amber: { DEFAULT: '#D9822B', ink: '#9A5410', wash: '#FBEEDD' },
        night: { DEFAULT: '#0A1D28', 2: '#12303F', rule: '#21475A' },
        chat: '#06C755',
      },
      fontFamily: {
        display: ['"Bai Jamjuree"', '"IBM Plex Sans Thai"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans Thai"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { page: '1200px' },
    },
  },
  plugins: [],
}
