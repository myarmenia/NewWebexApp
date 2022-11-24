/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    gradientColorStops: {
      "main-gradient": "linear-gradient(90deg, #53B7F2 0%, #97FFFF 94.27%)",
    },
    boxShadow: {
      "my-lg": "2px 4px 10px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
