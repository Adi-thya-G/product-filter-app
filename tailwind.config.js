/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_blue: "#010F1C",
        fresh_green: "#3BB77E",
        neutral_gray: "#999999",
        soft_lavender_gray: "#EDE9EF",
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens:{
        'mobile':'425px'
      }
    },
  },
  plugins: [],
};
