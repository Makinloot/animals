/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        robotoBold: ["roboto-bold", "sans-serif"],
        robotoLight: ["roboto-light", "sans-serif"],
        helveticaCaps: ["helvetica-caps", "sans-serif"],
        helvetica: ["helvetica", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        // todo: create your own light theme
        customLight: {
          // primary: "#a991f7",
          // secondary: "#f6d860",
          // accent: "#37cdbe",
          neutral: "#F8FAFC",
          "base-100": "#ffffff",
        },
      },
      "dracula",
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
