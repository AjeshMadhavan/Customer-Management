/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "dropdown": "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
      },
      fontSize: {
        "2xs": ["10px", "10px"],
        "3xs": "13px"
      },
      lineHeight: {
        "3.25": "14px"
      },
      colors: {
        "black-6": "rgba(0, 0, 0, 0.6)",
        "black-04": "rgba(0, 0, 0, 0.04)",
        "black-12": "rgba(0, 0, 0, 0.12)",
        "black-14": "rgba(0, 0, 0, 0.14)",
        "black-87": "rgba(0, 0, 0, 0.87)",
        "light-blue-500": "rgb(3, 169, 244)"
      },
      height: {
        "9.5": "38px",
      },
      padding: {
        "1.25": "5px",
        "2.25": "9px",
        "2.75": "11px",
        "3.75": "15px",
        "4.50": "18px"
      },
      margin: {
        "1.25": "5px"
      },
    },
  },
  plugins: [],
};