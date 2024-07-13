import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["black"], // Enable only the dark theme
    darkTheme: "black", // Set the dark theme as "dark"
    base: true, // Apply background color and foreground color for root element by default
    styled: true, // Include daisyUI colors and design decisions for all components
    utils: true, // Add responsive and modifier utility classes
    prefix: "", // Prefix for daisyUI classnames (components, modifiers, and responsive class names, not colors)
    logs: true, // Show info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
