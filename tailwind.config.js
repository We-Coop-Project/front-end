module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#283B8A",
        secondary: "#090E21",
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
