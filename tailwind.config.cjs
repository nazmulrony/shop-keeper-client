/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FE7F2D",
        brand2: "#F01105",
        dark: "#202020",
        light: "#f8f8f8",
      },
      backgroundImage: (theme) => ({
        "gradient-brand": `linear-gradient(to right bottom, ${theme('colors.brand')}, ${theme('colors.brand2')})`,
        "gradient-brand2": `linear-gradient(to right bottom, ${theme('colors.brand2')}, ${theme('colors.brand')})`
      }),
      fontFamily: {
        roboto: "'Roboto', 'sans-serif'",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FE7F2D",
          "secondary": "#A8D0DB",
          "accent": "#3730a3",
          "neutral": "#191D24",
          "base-100": "#ffffff",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#f97316",
          "error": "#e11d48",
        },
      },
      false,
    ],
  },
  plugins: [require("daisyui")],
}