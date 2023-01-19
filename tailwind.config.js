const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          sm: "1rem",
          md:"1.2",
          lg:"1.5rem",
          xl: "2rem",
          "2xl": "3rem",
        },
      },
    },
    colors: {
      midBlue: "#071849",
      sky: {
        100: colors.sky[100],
        300: colors.sky[300],
        400: colors.sky[400],
      },
      green: {
        300:colors.green[300],
        500:colors.green[500]
      },
      blue: colors.blue[900],
      white: colors.white,
    },
    fontFamily:{
      'poppins':['Poppins','sans-serif'],
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
};
