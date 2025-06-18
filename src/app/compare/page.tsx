"use client";

import React, { useState } from 'react';
import FilterDropdown from '../../components/compare/FilterDropdown';
import CarCard from '../../components/compare/CarCard';

// Datos de ejemplo para los coches
const exampleCars = [
    {
        id: "tesla-model-3",
        brand: "Tesla",
        model: "Model 3",
        price: 42990,
        battery_range: 513,
        power: 325,
        category: "Berlina",
        image_url: "https://www.coches.com/fotos_historicas/tesla/Model-3/high_e45b25fe6a0d64e4f37d0b42c6dd1387.jpg",
        drivetrain: "AWD",
        seats: 5,
        trunk_capacity: 561,
        fast_charging_power: 250
    },
    {
        id: "volkswagen-id4",
        brand: "Volkswagen",
        model: "ID.4",
        price: 43990,
        battery_range: 450,
        power: 204,
        category: "SUV",
        image_url: "https://www.coches.com/fotos_historicas/volkswagen/ID.4-Pro-Performance/high_volkswagen_id4-pro-performance-2021_r1.jpg",
        drivetrain: "RWD",
        seats: 5,
        trunk_capacity: 543,
        fast_charging_power: 135
    },
    {
        id: "hyundai-ioniq5",
        brand: "Hyundai",
        model: "IONIQ 5",
        price: 41990,
        battery_range: 507,
        power: 217,
        category: "Crossover",
        image_url: "https://www.coches.com/fotos_historicas/hyundai/IONIQ-5/high_hyundai_ioniq-5-2021_r3.jpg",
        drivetrain: "RWD",
        seats: 5,
        trunk_capacity: 527,
        fast_charging_power: 220
    }
];

export default function ComparePage() {
    // Estados para los filtros (ahora como arrays para selección múltiple)
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedRanges, setSelectedRanges] = useState<string[]>([]);
    const [selectedPowers, setSelectedPowers] = useState<string[]>([]);

    // Opciones para los filtros
    const brandOptions = [
        {id: "tesla", label: "Tesla", colorIndicator: "#E82127"},
        {id: "volkswagen", label: "Volkswagen", colorIndicator: "#151F5D"},
        {id: "hyundai", label: "Hyundai", colorIndicator: "#003469"},
        {id: "kia", label: "Kia", colorIndicator: "#BB162B"},
        {id: "polestar", label: "Polestar", colorIndicator: "#333333"},
    ];

    const rangeOptions = [
        {id: "under300", label: "Menos de 300 km"},
        {id: "300-500", label: "300 - 500 km"},
        {id: "500-700", label: "500 - 700 km"},
        {id: "over700", label: "Más de 700 km"},
    ];

    const powerOptions = [
        {id: "under150", label: "Menos de 150 CV"},
        {id: "150-300", label: "150 - 300 CV"},
        {id: "300-500", label: "300 - 500 CV"},
        {id: "over500", label: "Más de 500 CV"},
    ];

    // Funciones para manejar cambios (ahora con toggle para agregar/quitar)
    const handleBrandSelect = (optionId: string) => {
        setSelectedBrands(prev =>
            prev.includes(optionId)
                ? prev.filter(id => id !== optionId)
                : [...prev, optionId]
        );
    };

    const handleRangeSelect = (optionId: string) => {
        setSelectedRanges(prev =>
            prev.includes(optionId)
                ? prev.filter(id => id !== optionId)
                : [...prev, optionId]
        );
    };

    const handlePowerSelect = (optionId: string) => {
        setSelectedPowers(prev =>
            prev.includes(optionId)
                ? prev.filter(id => id !== optionId)
                : [...prev, optionId]
        );
    };

    // Función para limpiar todos los filtros
    const clearAllFilters = () => {
        setSelectedBrands([]);
        setSelectedRanges([]);
        setSelectedPowers([]);
    };

    // Función para eliminar un filtro específico
    const removeFilter = (type: 'brand' | 'range' | 'power', id: string) => {
        switch (type) {
            case 'brand':
                setSelectedBrands(prev => prev.filter(item => item !== id));
                break;
            case 'range':
                setSelectedRanges(prev => prev.filter(item => item !== id));
                break;
            case 'power':
                setSelectedPowers(prev => prev.filter(item => item !== id));
                break;
        }
    };

    // Función para limpiar un tipo de filtro completo
    const clearFilterType = (type: 'brand' | 'range' | 'power') => {
        switch (type) {
            case 'brand':
                setSelectedBrands([]);
                break;
            case 'range':
                setSelectedRanges([]);
                break;
            case 'power':
                setSelectedPowers([]);
                break;
        }
    };

    // Función para obtener las etiquetas de texto de los IDs seleccionados
    const getSelectedLabels = (ids: string[], options: { id: string, label: string }[]) => {
        return ids.map(id => options.find(opt => opt.id === id)?.label || id);
    };

    return (
        <main>

        </main>
    );
}