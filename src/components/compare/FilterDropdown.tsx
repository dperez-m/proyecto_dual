import React, { useState, useRef, useEffect } from 'react';
import { CaretRight, CaretDown } from '@gravity-ui/icons';

interface FilterOption {
  id: string;
  label: string;
  colorIndicator?: string;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  selectedOptions: string[];
  onOptionSelect: (optionId: string) => void;
  className?: string;
  multiSelect?: boolean;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  selectedOptions,
  onOptionSelect,
  className = '',
  multiSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionId: string) => {
    onOptionSelect(optionId);
    if (!multiSelect) {
      setIsOpen(false);
    }
  };

  // Cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Agregar el event listener solo cuando el dropdown está abierto
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Determinar el texto que se mostrará en el botón
  const getButtonText = () => {
    if (selectedOptions.length === 0) {
      return label;
    } else {
      return `${label} (${selectedOptions.length})`;
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full px-4 py-2 bg-white shadow-sm ${
          isOpen 
            ? 'rounded-t-2xl'
            : 'rounded-full'
        }`}
      >
        <span className="font-reddit">{getButtonText()}</span>
        {isOpen ? <CaretDown className="w-7 h-7" /> : <CaretRight className="w-7 h-7" />}
      </button>

      {isOpen && (
        <div className="absolute z-15 w-full bg-white rounded-b-2xl shadow-lg">
          <ul>
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-periwinkle ${selectedOptions.includes(option.id) ? 'bg-blue-100 font-bold' : ''}`}
              >
                <span className={`${selectedOptions.includes(option.id) ? 'font-reddit' : ''}`}>
                  {option.label}
                </span>
                {option.colorIndicator && (
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: option.colorIndicator }}
                  />
                )}
              </li>
            ))}
          </ul>
          {/*{multiSelect && selectedOptions.length > 0 && (*/}
          {/*  <div className="px-4 py-2 flex justify-between">*/}
          {/*    <button*/}
          {/*      onClick={() => {*/}
          {/*        // Limpiar todas las selecciones*/}
          {/*        selectedOptions.forEach(id => onOptionSelect(id));*/}
          {/*        setIsOpen(false);*/}
          {/*      }}*/}
          {/*      className="text-sm text-darkBlue hover:text-navy"*/}
          {/*    >*/}
          {/*      Limpiar selección*/}
          {/*    </button>*/}
          {/*    <button*/}
          {/*      onClick={() => setIsOpen(false)}*/}
          {/*      className="text-sm text-darkBlue hover:text-navy"*/}
          {/*    >*/}
          {/*      Aceptar*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;