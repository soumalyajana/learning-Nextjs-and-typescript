import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                violet: "#8B5CF6",
                indigo: "#6366F1",
                skyblue: "#0EA5E9",
                deepgray: "#111827",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "sans-serif"],
                heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "slide": "slide 20s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(139, 92, 246, 0.5)" },
                    "100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)" },
                },
                slide: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
