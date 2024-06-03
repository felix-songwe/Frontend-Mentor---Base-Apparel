/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "810px",
      lg: "1280px",
      xl: "1440px",
    },
    colors: {
      brown: "#cfa0a0",
      beige: "#d7a7ab",
      orange: "#f96464",
      white: "#fffff",
      black: "#000000",
      gray: "#808080",
      lightgray: "#999999",
    },
    textColor: {
      brown: "#cfa0a0",
      beige: "#d7a7ab",
      orange: "#f96464",
      white: "#fffff",
      black: "#000000",
      lightgray: "#999999",
    },
    fontFamily: {
      Josef: ["Josefin Sans", "sans-serif"],
    },
    plugins: [],
  },
};
