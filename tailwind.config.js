/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        'paper-soft': '#FAFAFA',
        ink: '#111111',
        'ink-soft': '#6B6B6B',
        'ink-faint': '#9A9A9A',
        'near-black': '#0A0A0A',
        accent: {
          cyan: '#2AC4EA',
          pink: '#FF0089',
          purple: '#734BEB',
          coral: '#FF455A',
          lime: '#ECFE88',
          sky: '#AFE7FD',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
