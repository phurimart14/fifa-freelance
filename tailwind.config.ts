import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#10b981",
          dark: "#059669",
          light: "#d1fae5",
        },
        ink: {
          900: "#0a0a0a",
          800: "#0d0d0d",
          700: "#141414",
          600: "#1a1a1a",
          500: "#262626",
          400: "#525252",
          300: "#737373",
          200: "#a3a3a3",
          100: "#d4d4d4",
          50: "#e5e5e5",
          0: "#fafafa",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Noto Sans Thai",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      animation: {
        pulse: "pulseRing 2s ease-out infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.6)", opacity: "0.5" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
