import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

const CompareButton = () => {
    return (
        <Link
            className="relative inline-flex items-center justify-between bg-darkBlue rounded-full px-2 py-2 w-90 group overflow-hidden"
            href="/"
        >
            {/* Fondo azul animado */}
            <span className="absolute inset-0 bg-white w-full group-hover:w-0 transition-all duration-200 ease-out rounded-full" aria-hidden="true"></span>

            <span className="flex items-center justify-center p-3 bg-darkBlue rounded-full z-10 relative transition-colors duration-500 group-hover:bg-white">
                <ArrowRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-charcoal" />
            </span>

            <span className="flex-grow text-center font-reddit text-charcoal z-10 relative transition-colors duration-300 group-hover:text-white">
                Compara aquí
            </span>

            <span className="invisible z-10 relative">
                <ArrowRight className="w-4 h-4" />
            </span>
        </Link>
    );
};

export default CompareButton;
