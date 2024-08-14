/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bg_primary: "#EAE0D5",
        primary: "#EF4A3C",
       
      },
    },
  },
  plugins: [],
};
