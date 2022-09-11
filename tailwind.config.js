/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xll: "1440px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('assets/img/header_img.png')",
      },

      colors: {
        springWood: "#F8F5F2",
        bizarre: "#EADDD1",
        coralReef: "#C7AFA5",
        tuatara: "#403f3d",
        teak: "#d2d3c1",
        black: "#000000",
        orangeDark: "#FA8632",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
