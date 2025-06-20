import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-24 relative z-10">
      <div className="text-center max-w-3xl mx-auto bg-black/50 p-8 rounded-xl backdrop-blur-sm">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-changa">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-changa">
          Página no encontrada
        </h2>
        <div className="mb-8">
          <Image
            src="/generic_car.png"
            alt="Coche eléctrico"
            width={300}
            height={180}
            className="mx-auto opacity-80"
          />
        </div>
        <p className="text-lg text-gray-300 mb-8 font-reddit">
          Lo sentimos, parece que has tomado un desvío.
            La página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-reddit"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
