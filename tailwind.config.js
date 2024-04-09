/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1621",
        primary_alt: "#8259c0",
        primary_alt_dark: "#2c2339",
        secondary: "#302640",
        secondary_alt: "#350084",
      },
      boxShadow: {
        button: "0 0 17px 0 #7030f7",
        button_hover: "inset 0 0 0 100px rgba(0, 0, 0, 0.15)",
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [],
};
