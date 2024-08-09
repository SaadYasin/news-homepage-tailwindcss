/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "Jost",
      ara: "Readex Pro",
    },
    extend: {
      colors: {
        darkBg: {
          DEFAULT: "#06252b",
        },
        primary: {
          DEFAULT: "#013d5a",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#ebe6e0",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};

