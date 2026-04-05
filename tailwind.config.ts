import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        muted: "#5B6475",
        line: "rgba(11,18,32,0.10)",
        bg: "#FFFFFF",
        panel: "#F4F7FB",
        accent: "#1D4ED8",
        accent2: "#0F766E",
        premium: "#B8924A",
        warn: "#F59E0B",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,18,32,0.08)",
        lift: "0 18px 60px rgba(11,18,32,0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 15% 10%, rgba(29, 78, 216, 0.18), transparent 40%), radial-gradient(circle at 85% 20%, rgba(15, 118, 110, 0.14), transparent 42%), radial-gradient(circle at 50% 95%, rgba(184, 146, 74, 0.10), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
