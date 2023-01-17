/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "med-450": { raw: "(max-width: 450px)" },
        "med-850": { raw: "(max-width: 850px)" },
        "med-1100": { raw: "(max-width: 1100px)" },
        "med-1060": { raw: "(max-width: 1060px)" },
      },
      dropShadow: {
        normal: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      },
      boxShadow: {
        light: "2px 4px 10px rgba(0, 0, 0, 0.1)",
      },
      textColor: {
        gray: "#6B6B6B",
      },
      gradientColorStops: {
        "main-gradient": "linear-gradient(90deg, #53B7F2 0%, #97FFFF 94.27%)",
      },
      backgroundImage: {
        gradientPurple: "linear-gradient(90deg, #7764fb 0%, #f364f3 100%)",
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
