module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './posts/**/*.{mdx}'],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
};
