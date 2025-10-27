// Import the generated CSS files (Tailwind already processed to styles/css/tailwind.css)
import '../styles/css/tailwind.css'
import '../styles/css/main.css' // CSS generado por SCSS

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
