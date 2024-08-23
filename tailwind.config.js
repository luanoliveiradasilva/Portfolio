/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#965DF1',
        'purple-black': '#7F51C9',
      },
      fontFamily: {
        sans: ['PoetsenOne-Regular', ...defaultTheme.fontFamily.sans],
        serif: ['Rancho-Regular', ...defaultTheme.fontFamily.serif]
      },
      cursor: {
        'pointer': 'url(/assets/icons/Cursor.svg), pointer',
      },
      keyframes: {
        appear: {
          '0%': { opacity: "0", scale: "0.5"},
          '100%': { opacity: "1", scale: "1" },
        }
      },
      animation: {
        "appear": "appear 1s linear",
      }

    },
  },
  plugins: [],
}

