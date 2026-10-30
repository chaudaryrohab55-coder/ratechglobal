import type { Config } from "tailwindcss";
const config: Config = {
  // Theme controlled via data-theme attribute on <html>; "dark" is the default look.
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Georgia", "serif"],
      },
      colors: {
  brand: { 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985" },
dark: { 950: "#080d1a", 900: "#0d1424", 800: "#111b2e", 700: "#1a2740" },
red: {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#0ea5e9",
  600: "#0284c7",
  700: "#0369a1",
  800: "#075985",
  900: "#0c4a6e",
  950: "#082f49",
},
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float2": "float 6s ease-in-out 2s infinite",
        "float4": "float 6s ease-in-out 4s infinite",
        "shimmer": "shimmer 2s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%,100%": { boxShadow: "0 0 8px #ef4444, 0 0 16px rgba(239,68,68,0.5)" },
          "50%": { boxShadow: "0 0 16px #ef4444, 0 0 32px rgba(239,68,68,0.8)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
