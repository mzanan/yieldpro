/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        surface: "#FEFEFE",
        primary: "#0E2549",
        secondary: "#66CCCC",
        white: "#F8F7F7",
      },
      backgroundImage: {
        "header-background": "url('/assets/images/header-background.png')",
      },
    },
  },
  plugins: [],
};
