import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: null as unknown as "media" | "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1500px",
      "2xl": "1700px",
    },

    extend: {
      colors: {
        dark: "#000000",
        light: "#FFFFFF",
        primary: "#32a8a0",
        primaryDark: "#273b39",
      },
    },
  },
  plugins: [],
};
export default config;
