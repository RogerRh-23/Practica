module.exports = {
    plugins: [
        // Use the Tailwind PostCSS adapter which will read `tailwind.config.js` in project root
        require('@tailwindcss/postcss')(),
        require('autoprefixer'),
    ],
};
