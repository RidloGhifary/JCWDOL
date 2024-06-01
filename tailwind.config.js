/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        mainColor: "#f4791f",
        secondaryTextGray: "#737373",
        backgroundLightGray: "rgb(245, 245, 245)",
      },
    },
  },
  plugins: [],
};
