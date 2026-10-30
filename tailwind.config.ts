/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#05070D',
          secondary: '#0A0E1A',
          card: 'rgba(10, 14, 26, 0.7)',
        },
        accent: {
          cyan: '#00F0FF',
          blue: '#0066FF',
          purple: '#8B5CF6',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'typing': 'typing 3.5s steps(40) 1s forwards, blink 0.75s step-end infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
      },
    },
  },
  plugins: [],
};
