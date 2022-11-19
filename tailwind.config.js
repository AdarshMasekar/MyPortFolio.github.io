/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#DA0037",
            secondary: "#FA7D09",
            third: "#EDEDED",
            "text-base": "white",
        },
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true })
    ],
}