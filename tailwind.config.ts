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
        lime: "#F1FFC4",
        skylight: "#C6E2E9",
        periwinkle: "#A7BED3",
        slate: "#505A5B",
        charcoal: "#343F3E",
        navy: "#1D3557",
      },
      fontFamily: {
        reddit: ["var(--font-reddit-sans)"],
        groteske: ["var(--font-groteske)"],
      },
    },
  },
  plugins: [],
};

export default config;
