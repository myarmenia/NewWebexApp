/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    gradientColorStops: {
      "main-gradient": "linear-gradient(90deg, #53B7F2 0%, #97FFFF 94.27%)",
      "gradient-news":
        "linear-gradient(178.39deg,rgba(255, 255, 255, 0.72) -23.65%,rgba(255, 255, 255, 0.32) 122.54)",
    },
    backgroundImage: {},
  },
  plugins: [],
};
