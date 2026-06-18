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
            mint: "var(--mint)",
            peach: "var(--peach)",
        },
        boxShadow: {
            card: "var(--shadow-card)",
        },
        fontFamily: {
            sans: ['var(--font-sans)'],
            heading: ['var(--font-heading)'],
        },
    },
  },
  plugins: [],
}
