/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rampart: ['"Rampart One"', 'sans-serif'],
        lobster: ['"Lobster"', 'cursive'],
        cinzel: ['"Cinzel Decorative"', 'cursive'],
        cormorant: ["Cormorant Garamond", 'serif'],
        philosopher: ["Philosopher", 'sans-serif']
      },
      animation: {
        spinSlow: "spin 12s linear infinite",
        'pulse-slow': 'pulse 4s infinite',
        fadeInUp: 'fadeInUp 1s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
