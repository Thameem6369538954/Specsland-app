/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        heading: ["GeosansLight", "sans-serif"],
        copydesk: ["Smothy Bubble", "sans-serif"],
      },
      colors: {
        primary: "#00f46a",
        secondary: "#84CFEF",
      },
    },
  },
  plugins: [],
};
