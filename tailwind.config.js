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
          DEFAULT: "16px",
          sm: "1.5rem",
          md:"1.7rem",
          lg:"2rem",
          xl: "2.6rem",
          "2xl": "3.6rem",
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
