/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/framework7/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #A03D8C, #4C2CCA)',
      },
      colors: {
        "primary": "#A03D8C",
        "secondary": "#4C2CCA",
        "inactive": "#AD9DCE",
      },
      fontFamily : {
        sans: ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
};
