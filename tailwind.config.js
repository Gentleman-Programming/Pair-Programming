/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#46435f",
        secondary: {
          100: "#eb6f92",
          200: "#d65a7a",
        },
        warning: "#ff0000",
        success: "#00ff06",
      },
    },
  },
  plugins: [],
};
