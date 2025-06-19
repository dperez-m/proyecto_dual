"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BackgroundImage() {
  const pathname = usePathname();

  // Solo mostrar la imagen de fondo en la página principal
  if (pathname !== "/" && pathname !== "/home") {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <Image
        src="/bg_img.png"
        alt="Background Image"
        fill
        priority
        className="bg-[size:100vw_auto]"
        quality={100}
      />
    </div>
  );
}
