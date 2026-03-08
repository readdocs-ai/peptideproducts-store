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
        panel: "#F6F8FB",
        accent: "#2563EB",   // biotech blue
        accent2: "#14B8A6",  // teal
        warn: "#F59E0B",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,18,32,0.08)",
        lift: "0 18px 60px rgba(11,18,32,0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 20% 10%, rgba(37, 99, 235, 0.18), transparent 40%), radial-gradient(circle at 85% 20%, rgba(20, 184, 166, 0.16), transparent 42%), radial-gradient(circle at 50% 95%, rgba(37, 99, 235, 0.10), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
