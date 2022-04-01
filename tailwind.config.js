module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        realPurple: "#1f133e",
        realOrange: "#ff4b28",
        realBlue: "#0c0f2b",
      },
      boxShadow: {
        "3xl": "0px 0px 50px 2px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
