module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '10.8/12': '88%',
        '71': '17.675rem',
        '73': '18.875rem',
        '104': '35rem'
      },
      zIndex: {
        'neg-10': '-10',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'xss': '0.625rem',
        'font-title': '1.6rem',
      },
      colors: {
        'very-dark-gray': '#2B2B2B',
        'dark-gray': '#969696',
      },
      padding: {
        'input-icon': '1.4rem',
      },
      maxWidth: {
        '104': '35rem',
        '208': '68rem'
      }
    },
  },
  plugins: [],
}