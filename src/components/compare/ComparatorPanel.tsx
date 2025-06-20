"use client";

import { CircleIcon } from "lucide-react";
import { ArrowUp, ArrowDown } from "@gravity-ui/icons";
import Image from "next/image";
import { Car } from "@/types/car";
import BrandLogo from "@components/compare/BrandLogo";
import Battery_01 from "@components/compare/icons/Battery_01";
import Battery_02 from "@components/compare/icons/Battery_02";
import Battery_03 from "@components/compare/icons/Battery_03";
import Battery_04 from "@components/compare/icons/Battery_04";

interface ComparatorPanelProps {
  selectedCars: Car[];
  isOpen: boolean;
  toggleOpen: () => void;
}

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

export default function ComparatorPanel({
  selectedCars,
  isOpen,
  toggleOpen,
}: ComparatorPanelProps) {
  if (selectedCars.length === 0) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-darkBlue text-white transition-all duration-500 z-50 shadow-[0_-8px_24px_rgba(0,0,0,0.35)]
 ${isOpen ? "h-[75vh]" : "h-[42px]"} rounded-t-[16rem]`}
    >
      {/* Borde superior con botón circular */}
      <div className="flex items-center justify-center h-12 cursor-pointer" onClick={toggleOpen}>
        <div className="w-13 h-13 flex items-center justify-center rounded-full bg-navy text-white shadow-md hover:bg-periwinkle transition-colors">
          {isOpen ? <ArrowDown className="w-8 h-8" /> : <ArrowUp className="w-8 h-8" />}
        </div>
      </div>

      {/* Contenido expandido */}
      {isOpen && (
        <div className="flex flex-col items-center w-full">
          {/* Componente VS con círculos concéntricos - visible solo cuando hay 2 coches */}
          {selectedCars.length === 2 && (
            <div className="absolute top-[20%] left-0 right-0 flex justify-center items-center z-0 pointer-events-none">
              <div className="relative flex items-center justify-center">
                {/* Círculos concéntricos mucho más grandes y con opacidad completa */}
                <div className="w-80 h-80 rounded-full border-2 border-white absolute"></div>
                <div className="w-64 h-64 rounded-full border-2 border-white absolute"></div>
                <div className="w-48 h-48 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">VS</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-around items-start px-4 py-6 overflow-y-auto h-[calc(75vh-48px)] w-full z-10">
            {selectedCars.map((car, index) => {
              const categoryColor = categoryColors[car.category] || "#777777";
              const priceRange = getPriceRange(car.price);

              return (
                <div
                  key={car.id}
                  className="flex flex-col items-center w-full max-w-sm text-sm text-center"
                >
                  <h2 className="text-lg font-semibold mb-2">
                    {car.brand} {car.model}
                  </h2>
                  <div className="w-[420px] h-[260px] bg-white rounded-xl overflow-hidden mb-4 px-4">
                    <Image
                      src={`/carImages/${car.image_url}`}
                      alt={car.model}
                      width={420}
                      height={260}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* IconBox debajo de la imagen, alineados a la izquierda para el primer coche y a la derecha para el segundo */}
                  <div className={`flex gap-2 mb-3 ${index === 0 ? "self-start" : "self-end"}`}>
                    <IconBox title={car.brand}>
                      <BrandLogo brand={car.brand} />
                    </IconBox>

                    <IconBox title={`Tipo: ${car.category}`}>
                      <CircleIcon className="w-4 h-4" fill={categoryColor} color={categoryColor} />
                    </IconBox>

                    <IconBox title={`Precio: ${car.price.toLocaleString()} €`}>
                      <div className="flex items-center justify-center font-reddit">
                        <span className="text-sm font-reddit font-bold text-navy">
                          {priceRange}
                        </span>
                      </div>
                    </IconBox>

                    <IconBox title={`Batería: ${car.battery_range} km`}>
                      {getBatteryIcon(car.battery_range)}
                    </IconBox>
                  </div>

                  <ul
                    className={`leading-6 text-lg space-y-1 w-full max-w-[420px] mx-auto ${index === 0 ? "text-left" : "text-right"}`}
                  >
                    <li>
                      <strong>Tipo: </strong>
                      {car.category}
                    </li>
                    <li>
                      <strong>Precio: </strong>
                      {car.price.toLocaleString()} €
                    </li>
                    <li>
                      <strong>Batería: </strong>
                      {car.battery_range} km
                    </li>
                    <li>
                      <strong>Potencia: </strong>
                      {car.power} CV
                    </li>
                    {car.drivetrain && (
                      <li>
                        <strong>Tracción: </strong>
                        {car.drivetrain}
                      </li>
                    )}
                    {car.seats && (
                      <li>
                        <strong>Plazas: </strong>
                        {car.seats}
                      </li>
                    )}
                    {car.trunk_capacity && (
                      <li>
                        <strong>Maletero: </strong>
                        {car.trunk_capacity} L
                      </li>
                    )}
                    {car.fast_charging_power && (
                      <li>
                        <strong>Potencia carga rápida: </strong>
                        {car.fast_charging_power} kW
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
