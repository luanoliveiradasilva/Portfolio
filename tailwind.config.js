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
      fontFamily:{
        sans: ['PoetsenOne-Regular', ...defaultTheme.fontFamily.sans], 
        serif: ['Rancho-Regular', ...defaultTheme.fontFamily.serif]        
      },
      cursor: {
        'pointer': 'url(/assets/icons/Cursor.svg), pointer',
      },
    },
  },
  plugins: [],
}

