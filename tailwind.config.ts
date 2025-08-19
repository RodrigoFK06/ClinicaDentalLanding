import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

// Tailwind config: extend tokens and add utilities for edge fades and the aura background.
const config: Config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Map tokens to CSS variables for dynamic theming
        brand: "hsl(var(--brand-hsl) / <alpha-value>)",
        accent: "hsl(var(--accent-hsl) / <alpha-value>)",
        aura1: "oklch(var(--aura-1) / <alpha-value>)",
        aura2: "oklch(var(--aura-2) / <alpha-value>)",
        aura3: "oklch(var(--aura-3) / <alpha-value>)",
      },
      backgroundImage: {
        aura:
          "radial-gradient(60% 60% at var(--blob-x-1,20%) var(--blob-y-1,70%), oklch(var(--aura-1) / 0.24) 0%, transparent 60%)," +
          "radial-gradient(50% 50% at var(--blob-x-2,80%) var(--blob-y-2,20%), oklch(var(--aura-2) / 0.20) 0%, transparent 60%)," +
          "radial-gradient(40% 40% at var(--blob-x-3,50%) var(--blob-y-3,20%), oklch(var(--aura-3) / 0.16) 0%, transparent 60%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const fadeSizeVar = "var(--edge-fade-size, 96px)"
      addUtilities({
        ".edge-fade-top": {
          "-webkit-mask-image": `linear-gradient(to bottom, transparent, #000 ${fadeSizeVar})`,
          "mask-image": `linear-gradient(to bottom, transparent, #000 ${fadeSizeVar})`,
          "mask-mode": "alpha",
        },
        ".edge-fade-bottom": {
          "-webkit-mask-image": `linear-gradient(to top, transparent, #000 ${fadeSizeVar})`,
          "mask-image": `linear-gradient(to top, transparent, #000 ${fadeSizeVar})`,
          "mask-mode": "alpha",
        },
        ".edge-fade-both": {
          "-webkit-mask-image": `linear-gradient(to bottom, transparent, #000 ${fadeSizeVar}, #000 calc(100% - ${fadeSizeVar}), transparent)`,
          "mask-image": `linear-gradient(to bottom, transparent, #000 ${fadeSizeVar}, #000 calc(100% - ${fadeSizeVar}), transparent)`,
          "mask-mode": "alpha",
        },
  ".bg-aura": {
          "background-image":
            "radial-gradient(60% 60% at var(--blob-x-1,20%) var(--blob-y-1,70%), oklch(var(--aura-1) / 0.24) 0%, transparent 60%)," +
            "radial-gradient(50% 50% at var(--blob-x-2,80%) var(--blob-y-2,20%), oklch(var(--aura-2) / 0.20) 0%, transparent 60%)," +
            "radial-gradient(40% 40% at var(--blob-x-3,50%) var(--blob-y-3,20%), oklch(var(--aura-3) / 0.16) 0%, transparent 60%)",
          "background-attachment": "fixed",
          "background-repeat": "no-repeat",
          "background-color": "var(--background)",
        },
      })
    }),
  ],
}

export default config
