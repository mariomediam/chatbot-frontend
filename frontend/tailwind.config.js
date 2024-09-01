const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bg_primary: { 
          100: "#f9f6f3",
          DEFAULT: "#EAE0D5",
          200: "#e2d4c6",
          300: "#cfb7a2",
          400: "#bb957c",
          500: "#ad7d62",
          600: "#a06b56",
          700: "#855749",
          800: "#6d493f",
          900: "#593c35",
          950: "#2f1e1b",
        },
        primary: "#EF4A3C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
