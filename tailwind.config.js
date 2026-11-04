/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#0b4f6c',
          950: '#062d3e',
        },
        gold: {
          100: '#fef9c3',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          luxury: '#D4AF37',
          warm: '#DFBA51',
        },
        pearl: '#F8FAFC',
        ivory: '#FCFDFD',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(11, 79, 108, 0.05)',
        'soft-md': '0 8px 30px rgba(11, 79, 108, 0.08)',
        'soft-lg': '0 16px 45px rgba(11, 79, 108, 0.12)',
        'glow-teal': '0 0 25px rgba(20, 184, 166, 0.35)',
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
