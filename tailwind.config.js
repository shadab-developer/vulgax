/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screen: {
      xm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xll: "1440px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-img":
          "url('https://shadab-developer.github.io/vulgax/assets/img/header_img.png')",

        "shape-img":
          "url('https://shadab-developer.github.io/vulgax/assets/img/shape.png')",

        "login-reg--bg-img":
          "url('https://shadab-developer.github.io/vulgax/assets/img/background_login_reg.png')",
      },

      colors: {
        white: "#ffffff",
        grey: "#efefef",
        greyDark: "#d9d9db",
        springWood: "#f9f0ea",
        coralReef: "#C7AFA5",
        tuatara: "#403f3d",
        teak: "#d2d3c1",
        teakDark: "#fef5ed",
        black: "#000000",
        orangeLight: "#FDE6D4",
        orangeLight1: "#f89855",
        brownDark: "#564131",
        orangeDark: "#FA8632",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        JustSignature: ["Just Signature", "sans-serif"],
      },
    },
  },
  plugins: [],
};
