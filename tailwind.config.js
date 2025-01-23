/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Added for Flowbite support
    "./node_modules/flowbite-react/**/*.js", // Added for Flowbite React components
  ],
  theme: {
    extend: {
      screens: {
        custom: "1200px",
        tricky: "1100px",
      },
      colors: {
        primary: "#6c80d8",
        secondary: "#3d4750",
        defaultText: "#3d4750",
        lighttext: "#777",
      },
      textColor: {
        DEFAULT: "#3d4750",
      },
      fontFamily: {
        londrina: ["Londrina Outline", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [
    daisyui,
    flowbitePlugin, // Added Flowbite plugin
  ],
};
