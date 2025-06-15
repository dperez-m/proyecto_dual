import CompareButton from "@components/page/CompareButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-14 mx-50 mb-14">
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
    </main>
  );
}
