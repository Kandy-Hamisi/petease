import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        peteaseBlack: "#131415",
        peteaseGrey: "#323539",
        peteaseLightGrey: "#55585C",
        peteaseBlue: "#d9e4ed",
        peteaseYellow: "#ffd37d",
      },
    },
  },
  plugins: [],
};
export default config;
