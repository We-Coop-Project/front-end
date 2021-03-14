module.exports = {
  purge: [],
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#283B8A",
        secondary: "#0C122D",
      },
      fontFamily: {
        sanspro: ["Source Sans Pro", "sans-serif"],
        serifpro: ["Source Serif Pro", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
