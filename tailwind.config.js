module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
};
