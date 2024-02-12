import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "#00050d",
        hover: "#252e39",
        hover2: "#02ccf5",
        primary: "#ffffff",
        secondary: "#aaaaaa",
        tertiary: "#ffd62c",
        quarternary: "#f3f3f3",
        chitenarian: "#f2f4f6",
        footer: "#8197a4",
        prime: "#025a6e",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
