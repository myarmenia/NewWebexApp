/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "med-800": { raw: "(max-width: 800px)" },
      "med-1100": { raw: "(max-width: 1100px)" },
      "med-1060": { raw: "(max-width: 1060px)" },
    },
    boxShadow: {
      my1: "2px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    extend: {
      gradientColorStops: {
        "main-gradient": "linear-gradient(90deg, #53B7F2 0%, #97FFFF 94.27%)",
      },
      animation: {
        "srch-anim": "zoom 5s ease-in-out infinite",
        "grow-down": "growDown 300ms ease-in-out forwards",
        "grow-up": "growUp 300ms ease-in-out forwards",
      },
      keyframes: {
        zoom: {
          "0%, 100%": {
            transform: "rotate(-30deg)",
          },
          "50%": {
            transform: "rotate(30deg)",
          },
        },
        growDown: {
          "0%": { top: "-100%" },
          "100%": { top: "80px" },
        },
        growUp: {
          "0%": { top: "80px" },
          "100%": { top: "-100%" },
        },
      },
    },
  },
  plugins: [
    {
      tailwindcss: { config: "./tailwindcss-config.js" },
    },
  ],
};
