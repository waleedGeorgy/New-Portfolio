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
          ripe: "#fbbf24"
        },
        border: "rgb(255 255 255 / 0.05)",
      },
      backgroundImage: {
        "noise": "url(/assets/images/noise-bg.webp)",
      },
      animation: {
        "noise-bg": "noise 1s steps(2) infinite",
        "grow_in": "grow_in 0.5s ease-in-out",
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        grow_in: {
          '0%': { scale: '0%' },
          '100%': { scale: '100%' },
        },

        wiggle: {
          '0%, 100%': {
              transform: 'rotate(-3deg)'
          },
          '50%': {
              transform: 'rotate(3deg)'
          },
        },
        
        noise: {
          "0%": {
            transform: "translate3d(0, 9rem, 0)",
          },
          "10%": {
            transform: "translate3d(-1rem, -4rem, 0)",
          },
          "20%": {
            transform: "translate3d(-8rem, 2rem, 0)",
          },
          "30%": {
            transform: "translate3d(9rem, -9rem, 0)",
          },
          "40%": {
            transform: "translate3d(-2rem, 7rem, 0)",
          },
          "50%": {
            transform: "translate3d(-9rem, -4rem, 0)",
          },
          "60%": {
            transform: "translate3d(2rem, 6rem, 0)",
          },
          "70%": {
            transform: "translate3d(7rem, -8rem, 0)",
          },
          "80%": {
            transform: "translate3d(-9rem, 1rem, 0)",
          },
          "90%": {
            transform: "translate3d(6rem, -5rem, 0)",
          },
          to: {
            transform: "translate3d(-7rem, 0, 0)",
          },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;