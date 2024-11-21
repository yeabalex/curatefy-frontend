import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1DB954",
        secondary: "#212121",
        dark: "#121212",
        other: "#535353",
        spotgrey: "#b3b3b3",
      },
    },
  },
  plugins: [],
} satisfies Config;
