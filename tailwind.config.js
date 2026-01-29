/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-end': 'var(--bg-end)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        highlight: 'var(--highlight)',
        'text-main': 'var(--text)',
        'text-muted': 'var(--text-muted)',
      },
      letterSpacing: { tight: '-0.02em' },
      lineHeight: { tight: '1.2' },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        glow: '0 0 24px rgba(99, 102, 241, 0.35)',
        'glow-accent': '0 0 24px rgba(34, 211, 238, 0.35)',
        'glow-border': '0 0 20px rgba(99, 102, 241, 0.25)',
      },
    },
  },
  plugins: [],
}
