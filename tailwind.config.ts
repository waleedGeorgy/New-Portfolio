import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        homenaje: ["var(--font-homenaje)"],
      },
      screens: { xs: "520px", "2xl": "1400px" },
      colors: {
        primary: {
          background: "rgba(255, 255, 255, .055)",
          foreground: "#F5F5F5",
        },
        secondary: {
          background: "rgba(255, 255, 255, .03)",
          foreground: "rgba(255,255,255,0.4)",
        },
        blue: {
          cosmos: "#003049",
        },
        green: {
          benzol: "#00d372",
        },
        purple: {
          darkness: "#7c3aed",
        },
        yellow: {
          ripe: "#fbbf24",
        },
        border: "rgb(255 255 255 / 0.05)",
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-2deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
