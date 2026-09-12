/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1E130E",
        ivory: "#F8ECD4",
        cream: "#FCF3E0",
        sindoor: "#C1401F",
        copper: "#D69A3E",
        umber: "#3D2413",
        mist: "#E3B978",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans: ["'Manrope'", "sans-serif"],
        deva: ["'Noto Serif Devanagari'", "serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
