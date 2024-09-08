/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}',
    ],
    theme: {
        fontFamily: { sans: ['Roboto', 'sans-serif'] },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/src/assets/Background-web-4.png')",
            },
        },
    },
    plugins: [],
}
