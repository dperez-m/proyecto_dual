import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

const CompareButton = () => {
    return (
        <Link className="inline-flex items-center justify-between bg-white rounded-full transition-shadow shadow-sm px-2 py-2 w-90" href="/">  {/* TODO: Update href to the correct comparison page */}
            <span className="flex items-center justify-center p-3 bg-darkBlue rounded-full">
                <ArrowRight className="w-5 h-5 text-white" />
            </span>
            <span className="flex-grow text-center font-reddit text-charcoal">Compara aquí</span>
            <span className="invisible">
                <ArrowRight className="w-4 h-4" />
            </span>
        </Link>
    );
};

export default CompareButton;
