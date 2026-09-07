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
        navy: {
          DEFAULT: "#06264A",
          dark: "#03172E",
          light: "#0A3563",
          subtle: "#0F4680",
          surface: "#0D2E55",
        },
        green: {
          brand: "#45B649",
          hover: "#39993D",
          light: "#EAF8EB",
          muted: "#D2F0D4",
        },
        cyan: {
          tech: "#00A8C6",
          hover: "#008EA7",
          light: "#E3F8FC",
        },
        brandText: {
          primary: "#10213B",
          secondary: "#4B5563",
          muted: "#6B7280",
        },
        brandBg: {
          white: "#FFFFFF",
          secondary: "#F6F8FA",
          dark: "#06264A",
        },
        brandBorder: {
          DEFAULT: "#E5E7EB",
          light: "#F0F2F5",
          dark: "#143763",
        },
      },
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(6, 38, 74, 0.06), 0 1px 4px -1px rgba(6, 38, 74, 0.04)",
        cardHover: "0 12px 24px -6px rgba(6, 38, 74, 0.12), 0 4px 8px -2px rgba(6, 38, 74, 0.06)",
        header: "0 2px 10px rgba(6, 38, 74, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
