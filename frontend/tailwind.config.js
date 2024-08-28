/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bg_primary: { 
          100: "#f9f6f3",
          DEFAULT: "#EAE0D5",
          300: "#e2d4c6"
        },
        primary: "#EF4A3C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
