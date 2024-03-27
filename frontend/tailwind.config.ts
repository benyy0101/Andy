import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
    },
    extend: {
      colors: {
        green: "#295F2E",
        orange: "#ed8b0e",
        yellow: "#FFE67C",
        lightorange: "#EFC287",
        red: "#ff3b5b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "namespace-buzz": "namespace-buzz 0.15s linear infinite",
        spinner: "spinner 1.5s linear infinite",
      },
      keyframes: {
        "namespace-buzz": {
          "50%": { transform: "translateX(3px) rotate(2deg)" },
          "100%": { transform: "translateX(-3px) rotate(-2deg)" },
        },
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
