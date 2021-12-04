module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        bOne: { max: "1000px" },
        bTwo: { max: "902px" },
        bThree: { max: "750px" },
        bFour: { max: "600px" },
        bFive: { max: "500px" },
        bFivePFive: { max: "450px" },
        bFourSevenFive: { max: "350px" },
        bSix: { max: "300px" },
      },
      colors: {
        main: "#007d6a",
        black: "#121212",
      },
      fontFamily: {
        noto: ["Noto Serif", "serif"],
        varela: ["Raleway", "sans-serif"],
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
