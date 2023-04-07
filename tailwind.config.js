/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: 'Assistant, system-ui, BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;',
    },
    textColor: {
      textColor: "#FCC8B2",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
