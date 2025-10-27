export default function ProductList() {
    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold text-green-600 mb-4">Productos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Ejemplo de producto */}
                <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                    <img src="/assets/images/icon.jpeg" alt="Manzana Roja" className="w-16 h-16 mb-2" />
                    <span className="font-semibold">Manzana Roja</span>
                    <span className="text-sm text-gray-500">Disponible</span>
                    <span className="text-green-600 font-bold">$25.00/kg</span>
                    <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded flex items-center gap-2">
                        <img src="/assets/images/icon.jpeg" alt="Agregar" className="w-5 h-5" />
                        Agregar
                    </button>
                </div>
                {/* Agrega más productos aquí */}
            </div>
        </div>
    );
}