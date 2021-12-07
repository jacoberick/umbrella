const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        hardline: "-5px 5px #121212",
      },
      keyframes: {
        rainbowFlash: {
          "0%": { color: "#FF0000" },
          "14%": { color: "#FF7F00" },
          "28%": { color: "#FFFF00" },
          "42%": { color: "#00FF00" },
          "56%": { color: "#0000FF" },
          "70%": { color: "#2E2B5F" },
          "84%": { color: "#8B00FF" },
          "100%": { color: "#FF0000" },
        },
      },
      animation: {
        rainbowFlash: "rainbowFlash 3s infinite linear",
      },
      screens: {
        b1250: { max: "1250px" },
        b1000: { max: "1000px" },
        b850: { max: "850px" },
        b750: { max: "750px" },
        b675: { max: "675px" },
      },
      colors: {
        gray: colors.trueGray,
      },
      fontFamily: {
        source: ["Source Sans Pro", "sans-serif"],
        maven: ["Maven Pro", "sans-serif"],
        jSans: ["Josefin Sans", "sans-serif"],
        rbto: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
