/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        background: "#020617",
      },
    },
  },
  plugins: [],
}
