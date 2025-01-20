import { COLORS, FONTS, MARGINS } from "./src/constants/Constansts";

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hover: COLORS.hover,
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        backgroundLight: COLORS.backgroundLight,
        backgroundDark: COLORS.backgroundDark,
        textLight: COLORS.textLight,
        textDark: COLORS.textDark,
      },
      fontFamily: {
        body: FONTS.body,
        heading: FONTS.heading,
      },
      margin: {
        componentMargin: MARGINS.componentMargin,
      },
    },
  },
  plugins: [],
};
