/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#202C36",
        balanceGray: "#2B3844",
      },
      padding: {
        pre8: "30px",
      },
      screens: {
        mxs: "320px",
        xs: "375px",
      },
      width: {
        pre5: "18px",
      },
      height: {
        pre5: "18px",
      },
    },
  },
  plugins: [],
};
