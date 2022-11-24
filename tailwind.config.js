/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "med-800": { raw: "(max-width: 800px)" },
      "med-1100": { raw: "(max-width: 1100px)" },
    },
    gradientColorStops: {
      "main-gradient": "linear-gradient(90deg, #53B7F2 0%, #97FFFF 94.27%)",
    },
    boxShadow: {
      "my-lg": "0px 4px 21px #00000040;",
    },
  },
  plugins: [],
};
