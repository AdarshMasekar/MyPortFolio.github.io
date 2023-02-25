/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#E9A6A6",
            secondary: "#DFFFD8",
            third: "#9ED5C5",
            "text-base": "white",
            Bg: "#1F1D36",
            underline: "#F7C8E0"
        },
        screens: {
            'xxs': '320px',
            // => @media (min-width: 320px) { ... }
            'xs': '375px',
            // => @media (min-width: 375px) { ... }

            'sm': '425px',
            // => @media (min-width: 425px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1440px',
            // => @media (min-width: 1440px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true })
    ],
}