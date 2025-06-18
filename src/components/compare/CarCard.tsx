import { CarIcon, UsersIcon, BatteryIcon, CircleIcon, EuroIcon } from 'lucide-react';
import { ThunderboltFill } from '@gravity-ui/icons';

interface Car {
    id: string;
    brand: string;
    model: string;
    price: number;
    battery_range: number;
    power: number;
    category: string;
    image_url: string;
    drivetrain?: string;
    seats?: number;
    trunk_capacity?: number;
    fast_charging_power?: number;
}

// Configuración para los tipos de vehículo y sus colores
const categoryColors: Record<string, string> = {
    "SUV": "#E82127",
    "Berlina": "#3366CC",
    "Crossover": "#FF9900",
    "Compacto": "#33CC33",
    "Sedan": "#9933CC",
    "Coupe": "#CC0066",
    "Furgoneta": "#808080",
    "Pickup": "#996633",
};

interface IconProps {
    children: React.ReactNode;
    title?: string;
}

// Componente para los iconos cuadrados con fondo blanco
const IconBox = ({ children, title }: IconProps) => (
    <div
        className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md"
        title={title}
    >
        {children}
    </div>
);

// Función para determinar cuántos símbolos de euro mostrar según el precio
const getPriceRange = (price: number) => {
    if (price < 30000) return '€';
    if (price < 60000) return '€€';
    return '€€€';
};

// Función para determinar el nivel de la batería según la autonomía
const getBatteryLevel = (range: number) => {
    if (range < 300) return 'low';
    if (range < 500) return 'medium';
    return 'high';
};

export default function CarCard({ car }: { car: Car }) {
    // Obtener color según la categoría del vehículo
    const categoryColor = categoryColors[car.category] || "#777777";

    // Determinar el nivel de precio
    const priceRange = getPriceRange(car.price);

    // Determinar el nivel de batería
    const batteryLevel = getBatteryLevel(car.battery_range);

    return (
        <div className="relative pt-6 mt-4">
            {/* Iconos encima de la tarjeta */}
            <div className="absolute -top-4 left-4 flex gap-2 z-10">
                {/* Icono de la marca */}
                <IconBox title={car.brand}>
                    {car.brand === "Kia" ? (
                        <img src="/kia-logo.svg" alt="Kia" className="w-6 h-6" />
                    ) : car.brand === "Tesla" ? (
                        <svg className="w-6 h-6" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
                        </svg>
                    ) : car.brand === "Volkswagen" ? (
                        <span className="text-xs font-bold">VW</span>
                    ) : car.brand === "Hyundai" ? (
                        <span className="text-xs font-bold">HYU</span>
                    ) : (
                        <span className="text-xs font-bold">{car.brand.substring(0, 3).toUpperCase()}</span>
                    )}
                </IconBox>

                {/* Icono con color para el tipo de coche */}
                <IconBox title={`Tipo: ${car.category}`}>
                    <CircleIcon
                        className="w-4 h-4"
                        fill={categoryColor}
                        color={categoryColor}
                    />
                </IconBox>

                {/* Icono para el rango de precio */}
                <IconBox title={`Precio: ${car.price.toLocaleString()} €`}>
                    <div className="flex items-center justify-center font-reddit">
                        <span className="text-sm font-bold">{priceRange}</span>
                    </div>
                </IconBox>

                {/* Icono para el nivel de batería */}
                <IconBox title={`Batería: ${car.battery_range} km`}>
                    {batteryLevel === 'low' && (
                        <BatteryIcon className="w-6 h-6 text-red-500" strokeWidth={1.5} />
                    )}
                    {batteryLevel === 'medium' && (
                        <BatteryIcon className="w-6 h-6 text-orange-500" strokeWidth={1.5} data-level="medium" />
                    )}
                    {batteryLevel === 'high' && (
                        <BatteryIcon className="w-6 h-6 text-green-500" strokeWidth={1.5} data-level="high" />
                    )}
                </IconBox>
            </div>

            {/* Tarjeta principal - solo la imagen sin borde */}
            <div className="relative group rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow">
                {/* Imagen - ocupando toda la tarjeta */}
                <div className="relative">
                    <img
                        src={car.image_url}
                        alt={`${car.brand} ${car.model} - ${car.category}`}
                        className="w-full h-48 object-cover"
                    />
                </div>

                {/* Hover con información según la captura */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity text-white flex flex-col justify-center items-center text-center px-4 py-6">
                    <h3 className="text-lg font-reddit border-b border-white/30 pb-1 mb-2 w-full">
                        {car.model}
                    </h3>
                    <div className="space-y-1 text-sm">
                        <p>Marca: {car.brand}</p>
                        <p>Tipo: {car.category}</p>
                        <p>Precio: {car.price.toLocaleString()}€</p>
                        <p>Batería: {car.battery_range} km</p>
                        {car.seats && <p>Plazas: {car.seats}</p>}
                        {car.trunk_capacity && <p>Maletero: {car.trunk_capacity}L</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
