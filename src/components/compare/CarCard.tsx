import { CircleIcon } from "lucide-react";
import BrandLogo from "@components/compare/BrandLogo";
import Battery_01 from "@components/compare/icons/Battery_01";
import Battery_02 from "@components/compare/icons/Battery_02";
import Battery_03 from "@components/compare/icons/Battery_03";
import Battery_04 from "@components/compare/icons/Battery_04";
import React from "react";
import Image from "next/image";
import { Car } from "@/types/car";

// Configuración para los tipos de vehículo y sus colores
const categoryColors: Record<string, string> = {
  SUV: "#E82127",
  berlina: "#3366CC",
  Crossover: "#FF9900",
  compacto: "#33CC33",
  Sedan: "#9933CC",
  Coupe: "#CC0066",
  Furgoneta: "#808080",
  Pickup: "#996633",
};

interface IconProps {
  children: React.ReactNode;
  title?: string;
}

const IconBox = ({ children, title }: IconProps) => (
  <div
    className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md"
    title={title}
  >
    {children}
  </div>
);

const getPriceRange = (price: number) => {
  if (price < 30000) return "€";
  if (price < 60000) return "€€";
  return "€€€";
};

const getBatteryIcon = (range: number) => {
  if (range < 250) return <Battery_01 />;
  if (range < 350) return <Battery_02 />;
  if (range < 450) return <Battery_03 />;
  return <Battery_04 />;
};

export default function CarCard({
  car,
  isSelected = false,
  onToggleCompare,
}: {
  car: Car;
  isSelected?: boolean;
  onToggleCompare?: () => void;
}) {
  const categoryColor = categoryColors[car.category] || "#777777";
  const priceRange = getPriceRange(car.price);

  return (
    <div className="relative pt-7 mt-4 w-full max-w-sm mx-auto animate-fade-in-up">
      <div className="absolute -top-5 left-0 right-0 flex justify-between items-center z-10 px-4">
        {/* Iconos informativos a la izquierda */}
        <div className="flex gap-2">
          <IconBox title={car.brand}>
            <BrandLogo brand={car.brand} />
          </IconBox>

          <IconBox title={`Tipo: ${car.category}`}>
            <CircleIcon className="w-4 h-4" fill={categoryColor} color={categoryColor} />
          </IconBox>

          <IconBox title={`Precio: ${car.price.toLocaleString()} €`}>
            <div className="flex items-center justify-center font-reddit">
              <span className="text-sm font-reddit font-bold text-navy">{priceRange}</span>
            </div>
          </IconBox>

          <IconBox title={`Batería: ${car.battery_range} km`}>
            {getBatteryIcon(car.battery_range)}
          </IconBox>
        </div>

        {/* Icono de selección para comparar (a la derecha) */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm cursor-pointer hover:bg-gray-50"
          title={isSelected ? "Seleccionado para comparar" : "Seleccionar para comparar"}
          onClick={() => onToggleCompare && onToggleCompare()}
        >
          <div
            className={`w-6 h-6 rounded-full ${isSelected ? "bg-navy" : "bg-white border border-navy"}`}
          >
            {/* Se ha eliminado el punto blanco del centro cuando está seleccionado */}
          </div>
        </div>
      </div>

      <div className="relative group rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow">
        <div className="pt-8"></div> {/* Espacio blanco arriba (aumentado) */}
        <div className="relative h-48 mx-auto w-11/12">
          {" "}
          {/* Ancho reducido para padding lateral */}
          <Image
            src={`/carImages/${car.image_url}`}
            alt={`${car.brand} ${car.model} - ${car.category}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-lg" /* Añadido bordes redondeados */
            priority={false}
          />
        </div>
        <div className="pb-8"></div> {/* Espacio blanco abajo (igual que arriba) */}
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
