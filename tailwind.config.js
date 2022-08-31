/** @type {import('tailwindcss').Config} */ 
module.exports = {
  daisyui: {
    themes: ["night","cupcake"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "4rem",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}