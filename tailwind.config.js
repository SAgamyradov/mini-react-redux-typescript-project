/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-black": ["Montserrat-Black"],
        montserrat: ["Monserrat-Medium"],
        montserratAlternates: ["MontserratAlternates-Medium"],
      },
    },
  },
  plugins: [],
};
