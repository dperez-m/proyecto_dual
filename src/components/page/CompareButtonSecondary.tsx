'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CompareButtonSecondaryProps {
  href: string;
}

export default function CompareButtonSecondary({
  href
}: CompareButtonSecondaryProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`bg-darkBlue text-white font-bold py-3 px-12 rounded-full transition-transform duration-300 ${
        isHovered ? 'scale-110' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Compara ahora
    </Link>
  );
}
