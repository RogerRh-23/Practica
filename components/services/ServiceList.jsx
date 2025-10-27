export default function ServiceList() {
    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold text-green-600 mb-4">Pague sus servicios con nosotros</h2>
            <ul className="space-y-2">
                <li className="bg-gray-100 rounded p-2 flex items-center">
                    <img src="/assets/icons/receipt-alt-3-svgrepo-com.svg" alt="Recibo de luz" className="w-8 h-8 mr-2" />
                    <span>Pago de recibo de luz</span>
                </li>
                <li className="bg-gray-100 rounded p-2 flex items-center">
                    <img src="/assets/icons/key-alt-svgrepo-com.svg" alt="Recibo de agua" className="w-8 h-8 mr-2" />
                    <span>Pago de recibo del agua</span>
                </li>
                <li className="bg-gray-100 rounded p-2 flex items-center">
                    <img src="/assets/icons/tag-svgrepo-com.svg" alt="Otro servicio" className="w-8 h-8 mr-2" />
                    <span>Pago de otro servicio</span>
                </li>
            </ul>
        </div>
    );
}