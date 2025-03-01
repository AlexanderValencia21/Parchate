import React from "react";
import Image from "next/image";
import Link from "next/link";

const ActionSection = () => {
  return (
    <div className="relative w-full bg-black text-white py-32 md:py-48 lg:py-64 overflow-hidden">
      {/* Grupo de imágenes izquierda - distribuidas verticalmente */}
      <div className="absolute left-5 top-12 transform -rotate-6 z-10">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/picnic.png"
            alt="Evento de picnic"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute left-10 top-60 transform rotate-3 z-20">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/stargazing.png"
            alt="Evento nocturno"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute left-5 top-125 transform -rotate-3 z-10">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hiking.png"
            alt="Excursión"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute left-10 top-[50rem] transform rotate-50 z-20">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/sport.png"
            alt="Aventura de montaña"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      {/* Grupo de imágenes derecha - distribuidas verticalmente */}
      <div className="absolute right-10 top-16 transform rotate-6 z-10">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/cafe.png"
            alt="Café social"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute right-5 top-60 transform -rotate-3 z-20">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/sport.png"
            alt="Partido de fútbol"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute right-10 top-[28rem] transform rotate-6 z-10">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hiking.png"
            alt="Escalada en interior"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute right-5 top-[45rem] transform -rotate-3 z-20">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/stargazing.png"
            alt="Concierto"
            width={350}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      {/* Contenido central */}
      <div className="container mx-auto px-4 z-30 relative flex flex-col items-center justify-center min-h-[40rem]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className=" text-center text-4xl md:text-4xl font-bold mb-4">
            ¡Explora todo lo que tenemos para ti!
          </h2>
          <Link href="/eventos" className="inline-block">
            <button className="bg-[#4C3980] hover:bg-[#5A4496] text-white py-3 px-8 rounded-full font-medium transition duration-300 mt-4">
              ¡Descubre!
            </button>
          </Link>
        </div>
      </div>

      {/* Gradiente sutiles para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 pointer-events-none"></div>
    </div>
  );
};

export default ActionSection;
