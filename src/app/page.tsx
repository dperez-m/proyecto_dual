import CompareButton from "@components/page/CompareButton";
import CompareButtonSecondary from "@components/page/CompareButtonSecondary";
import HoverVideo from "@components/page/HoverVideo";
import Image from "next/image";
import { Car, BarsDescendingAlignCenter, Shapes4 } from "@gravity-ui/icons";
import React from "react";

export default function Home() {
  return (
    <main className="mt-18 mx-50 mb-14">
      <div className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <h1 className="font-changa font-bold text-7xl leading-tight text-green01 ">
            ¡Compara los mejores <br />
            coches eléctricos!
          </h1>
          <h2 className="font-groteske font-bold text-4xl text-green01 mb-12">
            Tu coche ideal a un <br />
            solo vistazo
          </h2>
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
          <p className="font-groteske font-medium text-2xl">
            Compara entre
            <br />
            más de mil
            <br />
            coches
          </p>
        </div>
        <div className="flex flex-col items-center text-center px-4 gap-2">
          <span className="bg-darkBlue rounded-full p-3 mb-4">
            <BarsDescendingAlignCenter className="w-6 h-6 text-white" />
          </span>
          <p className="font-groteske font-medium text-2xl">
            Selecciona a<br />
            través de los
            <br />
            filtros
          </p>
        </div>
        <div className="flex flex-col items-center text-center px-4 gap-2">
          <span className="bg-darkBlue rounded-full p-3 mb-4">
            <Shapes4 className="w-6 h-6 text-white" />
          </span>
          <p className="font-groteske font-medium text-2xl">
            Con una guía de
            <br />
            iconos
            <br />
            reconocibles
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md mx-auto max-w-6xl mt-10">
        <h2 className="text-center text-3xl font-groteske font-bold mb-10">¿ Cómo funciona ?</h2>

        <div className="flex flex-row justify-between gap-4 mb-12">
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="bg-darkBlue rounded-full w-10 h-10 flex items-center justify-center text-white mb-4">
              1
            </div>
            <div className="w-full h-50 bg-gray-100 rounded-lg mb-4">
              <HoverVideo src="/home/01.mp4" poster="/home/01-poster.png" />
            </div>
            <div className="w-6 h-6 bg-skylight rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-4 h-4 text-darkBlue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="font-groteske text-sm h-24">
              Filtra por cada categoría ajustándola a las características que busques en el coche.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-1/4">
            <div className="bg-darkBlue rounded-full w-10 h-10 flex items-center justify-center text-white mb-4">
              2
            </div>
            <div className="w-full h-50 bg-gray-100 rounded-lg mb-4">
              <HoverVideo src="/home/02.mp4" poster="/home/02-poster.png" />
            </div>
            <div className="w-6 h-6 bg-skylight rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-4 h-4 text-darkBlue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="font-groteske text-sm h-24">
              Selecciona entres los dos coches que quieres comparar.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-1/4">
            <div className="bg-darkBlue rounded-full w-10 h-10 flex items-center justify-center text-white mb-4">
              3
            </div>
            <div className="w-full h-50 bg-gray-100 rounded-lg mb-4">
              <HoverVideo src="/home/03.mp4" poster="/home/03-poster.png" />
            </div>
            <div className="w-6 h-6 bg-skylight rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-4 h-4 text-darkBlue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="font-groteske text-sm h-24">
              Fíjate bien en la serie de iconos que acompaña a cada coche para determinar sus
              características.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-1/4">
            <div className="bg-darkBlue rounded-full w-10 h-10 flex items-center justify-center text-white mb-4">
              4
            </div>
            <div className="w-full h-50 bg-gray-100 rounded-lg mb-4">
              <HoverVideo src="/home/04.mp4" poster="/home/04-poster.png" />
            </div>
            <div className="w-6 h-6 bg-skylight rounded-full flex items-center justify-center mb-2">
              <svg
                className="w-4 h-4 text-darkBlue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="font-groteske text-sm h-24">
              Elige el que mejor se adapte a tus necesidades y selecciónalo para ver más
              información.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <CompareButtonSecondary href="/" />
        </div>
      </div>
    </main>
  );
}
