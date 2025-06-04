'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
                isScrolling
                    ? 'bg-white opacity-50 py-1 px-4'
                    : 'bg-white shadow-xs mt-8 mx-32 rounded-4xl'
            }`}
        >
            <div className="flex items-center justify-center px-4 py-2 transition-all duration-300">
                 {/* Logo */}
                <Link href="/" className="shrink-0">
                    <div className={`flex items-center justify-center transition-all duration-300 ${
                        isScrolling ? 'w-10 h-10' : 'w-12 h-12'
                    }`}>
                        <span className="font-groteske font-bold text-navy">LOGO</span>
                    </div>
                </Link>

                <div className={`absolute right-4 transition-all duration-300 ${
                    isScrolling
                        ? 'opacity-0 max-h-0 overflow-hidden'
                        : 'opacity-100 max-h-20'
                }`}>
                </div>
            </div>
        </header>
    )
}

export default Header;