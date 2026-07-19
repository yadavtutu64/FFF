import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B15",
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#FF4D6D",
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      backdropBlur: {
        glass: "24px",
      },
      borderRadius: {
        glass: "24px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(59, 130, 246, 0.3)",
      }
    },
  },
  plugins: [],
};
export default config;
