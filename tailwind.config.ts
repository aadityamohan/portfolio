import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: "#D4AF37",
          darkGold: "#B8941E",
          dark: "#0A0A0A",
          darker: "#050505",
          light: "#F5F5F5",
          lightBg: "#FAFAFA",
          lightCard: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow": {
          "from": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "to": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
