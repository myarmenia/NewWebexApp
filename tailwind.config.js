/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "med-800": { raw: "(max-width: 800px)" },
      "med-1100": { raw: "(max-width: 1100px)" },
    },
    extend: {
      gradientColorStops: {
        "main-gradient": "linear-gradient(90deg, #53B7F2 0%, #97FFFF 94.27%)",
      },
      boxShadow: {
        "my-lg": "0px 4px 21px #00000040;",
      },
      animation: {
        "srch-anim": "zoom 1s ease-in-out infinite",
        "grow-down": "growDown 300ms ease-in-out forwards",
        "grow-up": "growUp 300ms ease-in-out forwards",
      },
      keyframes: {
        zoom: {
          "0%, 100%": {
            transform: "rotate(3deg)",
          },
          "50%": {
            transform: "rotate(-3deg)",
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
    backgroundImage: {},
  },
  plugins: [
    {
      tailwindcss: { config: "./tailwindcss-config.js" },
    },
  ],
};
