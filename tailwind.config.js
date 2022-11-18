module.exports = {
  purge: ['./build/*.html', './public/*.html', './src/**/*.js', './src/**/*.ts', './src/**/*.tsx', './src/**/*.jsx'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
