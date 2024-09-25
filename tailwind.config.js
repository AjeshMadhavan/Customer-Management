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
      },
      colors: {
        "black-6": "rgba(0, 0, 0, 0.6)",
        "black-04": "rgba(0, 0, 0, 0.04)",
        "black-12": "rgba(0, 0, 0, 0.12)",
        "black-14": "rgba(0, 0, 0, 0.14)",
        "light-blue-500": "rgb(3, 169, 244)"
      },
      height: {
        "9.5": "38px",
      }
    },
  },
  plugins: [],
};