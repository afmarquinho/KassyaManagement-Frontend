/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        customMainColor: "#00bcd4",
        customBlue: "#2196f3",
        customDeepBlue: "#161638",
        customBlueGray: "#607d8b",
        customDeepBlueGray: "#455a64",
        customSoftGray:"#e0e0e0",
        customDeepGray:"#455a64",
      },
    },
  },
  plugins: [],
};
