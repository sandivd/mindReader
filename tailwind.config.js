/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line is crucial
  ],
  theme: {
    extend: {
      colors: {
        'neo-bg': 'var(--neo-bg)',
        'neo-text': 'var(--neo-text)',
        'neo-black': '#1a1a1a',
        'neo-white': '#ffffff',
        'neo-yellow': '#FFE600',
        'neo-pink': '#FF0099',
        'neo-blue': '#00FFFF',
        'neo-purple': '#9D4EDD',
        'neo-green': '#00FF66',
        'neo-orange': '#FF5500'
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #1a1a1a',
        'hard-lg': '8px 8px 0px 0px #1a1a1a',
        'hard-xl': '12px 12px 0px 0px #1a1a1a',
        'hard-hover': '2px 2px 0px 0px #1a1a1a',
        'none-active': '0px 0px 0px 0px #1a1a1a',
        'hard-white': '4px 4px 0px 0px #ffffff',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}