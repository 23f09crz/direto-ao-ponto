import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        turquoise1: "#72EFDD",
        turquoise2: "#9BEFEC",
        turquoise3: "#D4FDF6",
        blue1: "#48BFE3",
        blue2: "#76D6E8",
        blue3: "#C7E7F2",
        purple1: "#7400B8",
        purple2: "#8D00C5",
        purple3: "#BB83DF",
        light1: "#FFFFFF",
        light2: "#F2F2F2",
        dark1: "#000000",
        dark2: "#2B2B2B",
        dark3: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
