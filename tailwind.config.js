module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    colors: {
      offset: '#b8aec8',
      backdrop: '#3c345c',
      pop: '#d30cb8',
      rich: '#5c2c6d',
      'accent-light': '#6df1d8',
      'accent-dark': '#5da4a6',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
};
