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
        term: {
          bg: "rgb(var(--term-bg) / <alpha-value>)",
          surface: "rgb(var(--term-surface) / <alpha-value>)",
          border: "rgb(var(--term-border) / <alpha-value>)",
          text: "rgb(var(--term-text) / <alpha-value>)",
          muted: "rgb(var(--term-muted) / <alpha-value>)",
          green: "rgb(var(--term-green) / <alpha-value>)",
          blue: "rgb(var(--term-blue) / <alpha-value>)",
          yellow: "rgb(var(--term-yellow) / <alpha-value>)",
          red: "rgb(var(--term-red) / <alpha-value>)",
          magenta: "rgb(var(--term-magenta) / <alpha-value>)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
