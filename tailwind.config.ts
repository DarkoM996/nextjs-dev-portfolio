import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // add this line
  theme: {
    extend: {
      colors: {
        primary_backgroundLighterColor: {
          50: "#FAFAFA",
          100: "#F1F1F1",
          200: "#EDEDED",
          300: "#E6E6E6",
          400: "#E0E0E0",
          500: "#D9D9D9",
        },
        primary_customGray: {
          50: "#BFBFBF",
          100: "#B3B3B3",
          200: "#A6A6A6",
          300: "#999999",
          400: "#8C8C8C",
          500: "#808080",
          600: "#737373",
          700: "#666666",
          800: "#595959",
          900: "#4D4D4D",
          950: "#404040",
        },
        primary_backgroundDarkerColor: {
          600: "#262626",
          700: "#1F1F1F",
          800: "#191919",
          850: "#121212",
          900: "#0D0C0C",
          950: "#050505",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
