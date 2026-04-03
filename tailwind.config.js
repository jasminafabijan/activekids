/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#0B1A3B",
            secondary: "#7C3AED",
            accent: "#F59E0B",
        },
    },
  },
  plugins: [],
}
