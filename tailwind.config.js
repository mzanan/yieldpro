/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        surface: "#FEFEFE",
        primary: "#0E2549",
        secondary: "#66CCCC",
        accent: "#FF6600",
        body: "#3F3F3F",
        comment: "#959595",
        smokeBlack: "#1E1E1E",
        inputs: "#F1F1F1",
      },
      backgroundImage: {
        "header-background": "url('/assets/images/header-background.png')",
      },
    },
  },
  plugins: [],
};
