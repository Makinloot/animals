/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoBold: ["roboto-bold", "sans-serif"],
        robotoLight: ["roboto-light", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["dracula", "autumn"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
