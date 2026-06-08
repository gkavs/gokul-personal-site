import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
