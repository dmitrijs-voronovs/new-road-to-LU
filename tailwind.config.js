module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        p1: "#6C4897",
        p2: "#B85093",
        p3: "#EE6681",
        p4: "#FF8F6A",
        p5: "#FFC35D",
        p6: "#F9F871",
      },
    },
    fontFamily: {
      krona: ["Krona One", "Roboto", "Arial"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
