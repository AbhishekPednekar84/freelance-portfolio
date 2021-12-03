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
      width: {
        96: "96%",
      },
      backgroundImage: (theme) => ({
        "ndd-proj-background":
          "url(https://ik.imagekit.io/ykidmzssaww/Portfolio/Projects/ndd_WYuOrliWW6P.jpg?updatedAt=1638436160660)",
        "mesaa-proj-background":
          "url(https://ik.imagekit.io/ykidmzssaww/Portfolio/Projects/mesaa_OCU96718t.jpg?updatedAt=1638437292373)",
        "sup-proj-background":
          "url(https://ik.imagekit.io/ykidmzssaww/Portfolio/Projects/supkenny_xerIKJEyH.jpg?updatedAt=1638437972836)",
        "contact-background": "url(/images/contact-bg.png)",
      }),
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
