/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/lib/esm/**/*.js',    
  ],
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
  plugins: [require("flowbite/plugin")],
};
