"use client";

import React, { useState, useEffect } from "react";
import FilterDropdown from "../../components/compare/FilterDropdown";
import CarCard from "../../components/compare/CarCard";

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

export default function ComparePage() {
  // Estados para los filtros (ahora como arrays para selección múltiple)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedRanges, setSelectedRanges] = useState<string[]>([]);
  const [selectedPowers, setSelectedPowers] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedTrunks, setSelectedTrunks] = useState<string[]>([]);

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  // Opciones para los filtros
  const brandOptions = [
    { id: "tesla", label: "Tesla" },
    { id: "volkswagen", label: "Volkswagen" },
    { id: "hyundai", label: "Hyundai" },
    { id: "kia", label: "Kia" },
    { id: "volvo", label: "Volvo" },
    { id: "byd", label: "BYD" },
    { id: "polestar", label: "Polestar" },
    { id: "citroen", label: "Citroën" },
    { id: "peugeot", label: "Peugeot" },
    { id: "cupra", label: "Cupra" },
    { id: "mg", label: "MG" },
  ];

  const categoryOptions = [
    { id: "berlina", label: "Berlina", colorIndicator: "#3366CC" },
    { id: "suv", label: "SUV", colorIndicator: "#E82127" },
    { id: "crossover", label: "Crossover", colorIndicator: "#FF9900" },
    { id: "compacto", label: "Compacto", colorIndicator: "#33CC33" },
    { id: "familiar", label: "Familiar", colorIndicator: "#9933CC" },
    { id: "deportivo", label: "Deportivo", colorIndicator: "#CC0066" },
  ];

  const priceOptions = [
    { id: "1", label: "Menos de 30.000 €" },
    { id: "2", label: "30.000 – 40.000 €" },
    { id: "3", label: "40.000 – 50.000 €" },
    { id: "4", label: "Más de 50.000 €" },
  ];

  const rangeOptions = [
    { id: "1", label: "Menos de 300 km" },
    { id: "2", label: "300 – 400 km" },
    { id: "3", label: "400 – 500 km" },
    { id: "4", label: "Más de 500 km" },
  ];

  const powerOptions = [
    { id: "1", label: "Menos de 150 CV" },
    { id: "2", label: "150 – 200 CV" },
    { id: "3", label: "200 – 300 CV" },
    { id: "4", label: "300 – 400 CV" },
    { id: "5", label: "Más de 400 CV" },
  ];

  const seatOptions = [
    { id: "2", label: "2 plazas o más" },
    { id: "4", label: "4 plazas o más" },
    { id: "5", label: "5 plazas o más" },
    { id: "6", label: "6 plazas o más" },
    { id: "7", label: "7 plazas o más" },
  ];

  const trunkOptions = [
    { id: "300", label: "300L o más" },
    { id: "400", label: "400L o más" },
    { id: "500", label: "500L o más" },
    { id: "600", label: "600L o más" },
  ];

  // Funciones para manejar cambios (toggle para agregar/quitar)
  const handleBrandSelect = (optionId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
    );
  };

  const handleCategorySelect = (optionId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
    );
  };

  const handlePriceSelect = (optionId: string) => {
    setSelectedPrices((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
    );
  };

  const handleRangeSelect = (optionId: string) => {
    setSelectedRanges((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
    );
  };

  const handlePowerSelect = (optionId: string) => {
    setSelectedPowers((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
    );
  };

  const handleSeatSelect = (optionId: string) => {
    setSelectedSeats([optionId]); // Siempre reemplaza con la nueva selección
  };

  const handleTrunkSelect = (optionId: string) => {
    setSelectedTrunks([optionId]); // Siempre reemplaza con la nueva selección
  };

  // Función para limpiar todos los filtros
  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedRanges([]);
    setSelectedPowers([]);
    setSelectedSeats([]);
    setSelectedTrunks([]);
  };

  // Función para limpiar un tipo de filtro específico
  const clearFilterType = (
    type: "brand" | "category" | "price" | "range" | "power" | "seat" | "trunk"
  ) => {
    switch (type) {
      case "brand":
        setSelectedBrands([]);
        break;
      case "category":
        setSelectedCategories([]);
        break;
      case "price":
        setSelectedPrices([]);
        break;
      case "range":
        setSelectedRanges([]);
        break;
      case "power":
        setSelectedPowers([]);
        break;
      case "seat":
        setSelectedSeats([]);
        break;
      case "trunk":
        setSelectedTrunks([]);
        break;
    }
  };

  // Función para obtener las etiquetas de texto de los IDs seleccionados
  const getSelectedLabels = (ids: string[], options: { id: string; label: string }[]) => {
    return ids.map((id) => options.find((opt) => opt.id === id)?.label || id);
  };

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      const params = new URLSearchParams();

      selectedBrands.forEach((b) => params.append("brand", b));
      selectedCategories.forEach((c) => params.append("category", c));
      selectedPrices.forEach((p) => params.append("price", p));
      selectedRanges.forEach((r) => params.append("range", r));
      selectedPowers.forEach((p) => params.append("power", p));
      selectedSeats.forEach((s) => params.append("seats", s));
      selectedTrunks.forEach((t) => params.append("trunk", t));

      const query = params.toString();
      const res = await fetch(`/api/cars?${query}`);
      const data = await res.json();
      setCars(data);
      setLoading(false);
    };

    fetchCars();
  }, [
    selectedBrands,
    selectedCategories,
    selectedPrices,
    selectedRanges,
    selectedPowers,
    selectedSeats,
    selectedTrunks,
  ]);

  return (
    <main className="mt-10 mx-25 mb-14">
      <section className="rounded-xl p-6 mb-8">
        <div className="flex flex-wrap gap-2 w-full">
          <FilterDropdown
            label="Marca"
            options={brandOptions}
            selectedOptions={selectedBrands}
            onOptionSelect={handleBrandSelect}
            multiSelect={true}
            className="flex-grow min-w-[150px]"
          />

          <FilterDropdown
            label="Categoría"
            options={categoryOptions}
            selectedOptions={selectedCategories}
            onOptionSelect={handleCategorySelect}
            multiSelect={true}
            className="flex-grow min-w-[150px]"
          />

          <FilterDropdown
            label="Autonomía"
            options={rangeOptions}
            selectedOptions={selectedRanges}
            onOptionSelect={handleRangeSelect}
            multiSelect={true}
            className="flex-grow min-w-[150px]"
          />

          <FilterDropdown
            label="Potencia"
            options={powerOptions}
            selectedOptions={selectedPowers}
            onOptionSelect={handlePowerSelect}
            multiSelect={true}
            className="flex-grow min-w-[150px]"
          />

          <FilterDropdown
            label="Precio"
            options={priceOptions}
            selectedOptions={selectedPrices}
            onOptionSelect={handlePriceSelect}
            multiSelect={true}
            className="flex-grow min-w-[150px]"
          />

          <FilterDropdown
            label="Plazas"
            options={seatOptions}
            selectedOptions={selectedSeats}
            onOptionSelect={handleSeatSelect}
            multiSelect={false}
            className="flex-grow min-w-[150px]"
          />

          <FilterDropdown
            label="Maletero"
            options={trunkOptions}
            selectedOptions={selectedTrunks}
            onOptionSelect={handleTrunkSelect}
            multiSelect={false}
            className="flex-grow min-w-[150px]"
          />
        </div>

        {/* Etiquetas de filtros activos */}
        {(selectedBrands.length > 0 ||
          selectedCategories.length > 0 ||
          selectedPrices.length > 0 ||
          selectedRanges.length > 0 ||
          selectedPowers.length > 0 ||
          selectedSeats.length > 0 ||
          selectedTrunks.length > 0) && (
          <div className="mt-4 py-4 flex flex-wrap gap-2 items-center">
            <button
              onClick={clearAllFilters}
              className="text-sm text-darkBlue hover:text-navy bg-skylight px-3 py-1 rounded-full"
            >
              Limpiar filtros
            </button>

            {selectedBrands.length > 0 && (
              <div className="bg-skylight text-darkBlue px-3 py-1 rounded-full text-sm flex items-center">
                <span>Marca: {getSelectedLabels(selectedBrands, brandOptions).join(", ")}</span>
                <button className="ml-2 text-xs" onClick={() => clearFilterType("brand")}>
                  ✕
                </button>
              </div>
            )}

            {selectedCategories.length > 0 && (
              <div className="bg-skylight text-darkBlue px-3 py-1 rounded-full text-sm flex items-center">
                <span>
                  Categoría: {getSelectedLabels(selectedCategories, categoryOptions).join(", ")}
                </span>
                <button className="ml-2 text-xs" onClick={() => clearFilterType("category")}>
                  ✕
                </button>
              </div>
            )}

            {selectedRanges.length > 0 && (
              <div className="bg-skylight text-darkBlue px-3 py-1 rounded-full text-sm flex items-center">
                <span>Autonomía: {getSelectedLabels(selectedRanges, rangeOptions).join(", ")}</span>
                <button className="ml-2 text-xs" onClick={() => clearFilterType("range")}>
                  ✕
                </button>
              </div>
            )}

            {selectedPowers.length > 0 && (
              <div className="bg-skylight text-darkBlue px-3 py-1 rounded-full text-sm flex items-center">
                <span>Potencia: {getSelectedLabels(selectedPowers, powerOptions).join(", ")}</span>
                <button className="ml-2 text-xs" onClick={() => clearFilterType("power")}>
                  ✕
                </button>
              </div>
            )}

            {selectedPrices.length > 0 && (
              <div className="bg-skylight text-darkBlue px-3 py-1 rounded-full text-sm flex items-center">
                <span>Precio: {getSelectedLabels(selectedPrices, priceOptions).join(", ")}</span>
                <button className="ml-2 text-xs" onClick={() => clearFilterType("price")}>
                  ✕
                </button>
              </div>
            )}

            {selectedSeats.length > 0 && (
              <div className="bg-skylight text-darkBlue px-3 py-1 rounded-full text-sm flex items-center">
                <span>Plazas: {getSelectedLabels(selectedSeats, seatOptions).join(", ")}</span>
                <button className="ml-2 text-xs" onClick={() => clearFilterType("seat")}>
                  ✕
                </button>
              </div>
            )}

            {selectedTrunks.length > 0 && (
              <div className="bg-skylight text-darkBlue px-3 py-1 rounded-full text-sm flex items-center">
                <span>Maletero: {getSelectedLabels(selectedTrunks, trunkOptions).join(", ")}</span>
                <button className="ml-2 text-xs" onClick={() => clearFilterType("trunk")}>
                  ✕
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      <section className="mt-10 px-4">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div>
            <span className="ml-3 text-navy font-reddit">Cargando vehículos...</span>
          </div>
        ) : cars.length === 0 ? (
          <div className="text-center py-20 bg-skylight/30 rounded-xl">
            <h3 className="text-xl font-reddit text-darkBlue">No se encontraron vehículos</h3>
            <p className="text-slate-600 mt-2">
              Prueba a modificar los filtros para ampliar tu búsqueda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
