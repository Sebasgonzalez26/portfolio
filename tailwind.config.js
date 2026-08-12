/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#000000',
        'paper-soft': '#0F0F0F',
        ink: '#FFFFFF',
        'ink-soft': '#B4B4B4',
        'ink-faint': '#7A7A7A',
        'near-black': '#0A0A0A',
        accent: {
          cyan: '#2AC4EA',
          pink: '#FF0089',
          purple: '#734BEB',
          coral: '#FF455A',
          lime: '#ECFE88',
          sky: '#AFE7FD',
          blue: '#3054FF',
          'blue-hover': '#2040E0',
          'blue-soft': '#B4C0FF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        'instrument-sans': ['"Instrument Sans"', 'sans-serif'],
        'instrument-serif': ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
