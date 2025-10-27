
import MainLayout from '../components/layout/MainLayout';
import ProductList from '../components/products/ProductList';

export default function Home() {
    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="bg-green-100 rounded-lg p-8 mb-6 flex flex-col items-center justify-center relative overflow-hidden">
                <img src="/assets/images/banner.jpeg" alt="Banner" className="absolute left-0 top-0 w-full h-full object-cover opacity-40" />
                <div className="relative z-10 flex flex-col items-center">
                    <img src="/assets/images/logo.jpeg" alt="Logo VermiMarket" className="w-32 h-32 mb-4" />
                    <h1 className="text-4xl font-bold text-green-700 mb-2">Bienvenido</h1>
                    <nav className="flex gap-4 mt-4">
                        <a href="#productos" className="text-green-600 font-semibold hover:underline">Productos</a>
                        <a href="#servicios" className="text-green-600 font-semibold hover:underline">Servicios</a>
                        <a href="#login" className="text-green-600 font-semibold hover:underline">Iniciar Sesión</a>
                        <a href="#carrito" className="text-green-600 font-semibold hover:underline">Carrito</a>
                    </nav>
                </div>
            </section>
            {/* Main Products Section */}
            <section id="productos" className="mb-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4">¡Lo más vendido!</h2>
                <ProductList />
            </section>
            {/* Home Products Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Para el Hogar</h2>
                <ProductList />
            </section>
        </MainLayout>
    );
}
