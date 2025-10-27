export default function Inventory() {
    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold text-green-600 mb-4">Inventario</h2>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="pb-2">Producto</th>
                        <th className="pb-2">Cantidad en inventario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Uva paladium</td><td>24u</td></tr>
                    <tr><td>Ron Bacardi (980ml)</td><td>10u</td></tr>
                    <tr><td>Papel de marranito 8pzas</td><td>32u</td></tr>
                    <tr><td>Papel higiénico Petalo</td><td>57u</td></tr>
                    <tr><td>Arroz/atole en arrozsol</td><td>5u</td></tr>
                    <tr><td>Lavatodo Salvo</td><td>16u</td></tr>
                    <tr><td>Naranja</td><td>120kg</td></tr>
                    <tr><td>Uva verde</td><td>148kg</td></tr>
                    <tr><td>Manzana verde</td><td>0</td></tr>
                </tbody>
            </table>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Actualizar inventario</button>
        </div>
    );
}