// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false, // disable Tailwind's reset so it doesn't conflict with docusaurus
    },
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./docs/**/*.{html,mdx,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: "var(--accent-1)",
                    1: "var(--accent-1)",
                    2: "var(--accent-2)",
                }
            }
        },
    },
    plugins: [],
}