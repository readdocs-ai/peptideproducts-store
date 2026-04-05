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
<<<<<<< HEAD
        panel: "#F4F7FB",
        accent: "#1D4ED8",
        accent2: "#0F766E",
        premium: "#B8924A",
=======
        panel: "#F6F8FB",
        accent: "#2563EB",
        accent2: "#14B8A6",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
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
<<<<<<< HEAD
        hero: "radial-gradient(circle at 15% 10%, rgba(29, 78, 216, 0.18), transparent 40%), radial-gradient(circle at 85% 20%, rgba(15, 118, 110, 0.14), transparent 42%), radial-gradient(circle at 50% 95%, rgba(184, 146, 74, 0.10), transparent 55%)",
=======
        hero: "radial-gradient(circle at 20% 10%, rgba(37, 99, 235, 0.18), transparent 40%), radial-gradient(circle at 85% 20%, rgba(20, 184, 166, 0.16), transparent 42%), radial-gradient(circle at 50% 95%, rgba(37, 99, 235, 0.10), transparent 55%)",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      },
    },
  },
  plugins: [],
};

<<<<<<< HEAD
export default config;
=======
export default config;
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
