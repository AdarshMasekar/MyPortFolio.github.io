/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#ff9494",
            secondary: "#31E1F7",
            third: "#9ED5C5",
            "text-base": "white",
        },
        screens: {
            'xxs': '350px',
            // => @media (min-width: 350px) { ... }
            'xs': '450px',
            // => @media (min-width: 450px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true })
    ],
}