import CompareButton from "@components/page/CompareButton";
import Image from "next/image";
import { Car, BarsDescendingAlignCenter, Shapes4 } from '@gravity-ui/icons';
import React from "react";

export default function Home() {
  return (
    <main className="mt-18 mx-50 mb-14">
        <div className="flex flex-row items-center justify-between">
        <div className="space-y-2">
      <h1 className="font-changa font-bold text-7xl leading-tight text-green01 ">¡Compara los mejores <br />coches eléctricos!</h1>
            <h2 className="font-groteske font-bold text-4xl text-green01 mb-12">Tu coche ideal a un <br />solo vistazo</h2>
            <CompareButton />
        </div>
        <div className="flex items-center justify-center w-1/2">
            <Image
                src="/generic_car.png"
                alt="Coche genérico"
                width={700}
                height={500}
                priority
                className="object-contain"
            />
        </div>
        </div>

        <div className="flex justify-between bg-white rounded-3xl px-20 py-14 mt-18 mb-14 shadow-md mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center px-4 gap-2">
        <span className="bg-darkBlue rounded-full p-3 mb-4">
            <Car className="w-6 h-6 text-white" />
        </span>
                <p className="font-groteske font-medium text-2xl">Compara entre<br />más de mil<br />coches</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 gap-2">
        <span className="bg-darkBlue rounded-full p-3 mb-4">
            <BarsDescendingAlignCenter className="w-6 h-6 text-white" />
        </span>
                <p className="font-groteske font-medium text-2xl">Selecciona a<br />través de los<br />filtros</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 gap-2">
        <span className="bg-darkBlue rounded-full p-3 mb-4">
            <Shapes4 className="w-6 h-6 text-white" />
        </span>
                <p className="font-groteske font-medium text-2xl">Con una guía de<br />iconos<br />reconocibles</p>
            </div>
        </div>
    </main>
  );
}
