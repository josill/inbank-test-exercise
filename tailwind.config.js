/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'md': '1083px',
      'lg': '1390px',
      'xl': '1810px'
    },
    extend: {
      colors: {
        'white-lilac': '#F8F5FC',
        'tundora': '#413C3C',
        'grey-3': '#9C9C9C',
        'grey-5': '#E9E9E9',
        'pale-white': '#FDFDFD',
        'royal-purple': '#2B0A57',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

