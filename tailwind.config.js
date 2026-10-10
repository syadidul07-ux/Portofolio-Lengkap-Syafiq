/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'typing': 'typing 3s steps(40, end)',
        'blink': 'blink .75s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      colors: {
        background: '#020617',
        accent: {
          gold: '#f59e0b', // amber-500
          amber: '#d97706', // amber-600
          cyan: '#22d3ee', // cyan-400
          blue: '#2563eb', // blue-600
        }
      }
    },
  },
  plugins: [],
}
