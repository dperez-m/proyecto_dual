import React from 'react';

interface BrandLogoProps {
    brand: string;
    className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ brand, className = 'w-6 h-6' }) => {
    const normalized = brand.trim().toLowerCase();
    const imagePath = `/brand_logos/${normalized}.svg`;

    return (
        <img
            src={imagePath}
            alt={brand}
            className={className}
            onError={(e) => {
                const fallback = document.createElement('span');
                fallback.textContent = brand.slice(0, 3).toUpperCase();
                fallback.className = 'text-xs font-reddit font-bold';
                e.currentTarget.replaceWith(fallback);
            }}
        />
    );
};

export default BrandLogo;
