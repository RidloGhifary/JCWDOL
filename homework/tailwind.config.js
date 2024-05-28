/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        almostBlack: "#1a202c",
        grassGreen: "#468c6e",
        pinkPig: "#f6b3b7",
        blueSky: "#8dcef7",
        textGray: "#b2b5b7",
      },
    },
  },
  plugins: [],
};
