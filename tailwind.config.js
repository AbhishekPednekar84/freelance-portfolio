module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans"],
        gilroySemiBold: ["Gilroy Semi Bold", "sans"],
        gilroyBold: ["Gilroy Bold", "sans"],
        gilroyExtraBold: ["Gilroy Extra Bold", "sans"],
        gilroyBlack: ["Gilroy Black", "sans"],
        gilroyHeavy: ["Gilroy Heavy", "sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
