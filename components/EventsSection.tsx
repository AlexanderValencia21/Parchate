// components/EventsSection.tsx
import React from "react";
import Image from "next/image";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const EventsSection = () => {
  return (
    <div className="w-full bg-black text-white py-16">
      {/* Título principal */}
      <div className="container mx-auto px-4 mb-12">
        <h2
          className={`${montserrat.className} text-lg md:text-2xl font-bold text-center`}
        >
          ¿Desparchado? ¡Aquí te armamos parche!
        </h2>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="rounded-2xl border-3 border-[#820263] p-8 flex flex-col items-center text-center h-80">
            <div className="mb-6">
              <Image
                src="/volunteer_activism.png"
                alt="Icono de amor"
                width={84}
                height={84}
              />
            </div>
            <h3 className={`${montserrat.className} text-xl font-bold mb-2`}>
              Eventos seleccionados con amor
            </h3>
            <p className={`${montserrat.className} text-sm`}>Encontramos eventos que resuenen contigo</p>
          </div>

          {/* Tarjeta 2 */}
          <div className="rounded-2xl border-3 border-[#820263] p-8 flex flex-col items-center text-center h-80">
            <div className="mb-6">
            <Image
                src="/person_play.png"
                alt="Icono de amor"
                width={84}
                height={84}
              />
            </div>
            <h3 className={`${montserrat.className} text-xl font-bold mb-2`}>
              Para todos los gustos e intereses
            </h3>
            <p className={`${montserrat.className} text-ms`}>
              Desde rumbas épicas hasta tardeaditas tranquilas
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="rounded-2xl border-3 border-[#820263] p-8 flex flex-col items-center text-center h-80">
            <div className="mb-6">
            <Image
                src="/self_improvement.png"
                alt="Icono de amor"
                width={84}
                height={84}
              />
            </div>
            <h3 className={`${montserrat.className} text-xl font-bold mb-2`}>
              Piensa, explora, ¡arma parche!
            </h3>
            <p className={`${montserrat.className} text-sm`}>
              Todo en un solo lugar, diseñado para tu comodidad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
