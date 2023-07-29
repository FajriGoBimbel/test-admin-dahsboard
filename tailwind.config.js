/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./example/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {
      colors: {
        red: "#C7172C",
        yellow: "#FBC21F",
        dark: "#111827",
        light: "#ffffff",
        blue: "#223DEE",
      },
    },
  },
  darkMode: "class",
};
