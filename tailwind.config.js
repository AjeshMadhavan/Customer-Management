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
    },
  },
  plugins: [],
};