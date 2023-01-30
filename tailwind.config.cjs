/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAC7C7",
        secondary: "#A0C3D2",
        creamy: "#F7F5EB",
        smoochy: "#EAE0DA",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
