import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Parisienne } from "next/font/google";
const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
export default function Contacto() {
  return (
    <div className="min-h-screen bg-black bg-[url('/frame1_mobile.png')] md:bg-[url('/frame=2.png')] bg-cover bg-center flex justify-center items-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        {/* Formulario */}
        <div className="bg-transparent p-4 md:p-8 rounded-xl border-0 md:border md:border-white w-full max-w-md mx-auto">
          <h2
            className={`${parisienne.className} text-6xl font-normal text-white block`}
          >
            ¿Hablamos?
          </h2>
          <p
            className={`${montserrat.className} text-center text-gray-500 font-normal mb-6 block`}
          >
            Estamos para ti, cuéntanos tus dudas, ¡las resolvemos!
          </p>

          <form className="space-y-4">
            <div>
              <label
                className={`${montserrat.className} text-white block font-semibold`}
              >
                Tu nombre
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-purple-400 text-[#2E294E] p-2"
              />
            </div>
            <div>
              <label
                className={`${montserrat.className} text-white block font-semibold`}
              >
                Tu correo
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-purple-400 text-[#2E294E] p-2"
              />
            </div>
            <div>
              <label
                className={`${montserrat.className} text-white block font-semibold`}
              >
                Déjanos tu mensaje
              </label>
              <textarea
                rows={4}
                maxLength={500}
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-purple-400 text-[#2E294E] p-2"
              />
              <span className="text-white text-xs">0/500</span>
            </div>
            <button className="w-full bg-[#820263] text-white py-2 rounded-full hover:bg-[#b485a8] transition">
              Enviar
            </button>
          </form>
        </div>

        {/* Información de Contacto */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-md">
            <h3 className="text-white text-lg font-bold text-center">
              ¡Encuéntranos!
            </h3>
            <div className="rounded-xl overflow-hidden mt-4">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6351830597346!2d-76.55008722547068!3d3.438613251306008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a681f2d96d95%3A0x8bb15a936fe040ca!2sMarabunta%20Agencia%20Creativa!5e0!3m2!1ses-419!2sco!4v1740802478001!5m2!1ses-419!2sco"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Tarjeta de Información */}
          <div className="bg-transparent p-4 rounded-xl border-3 border-white w-full max-w-md">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-[#EADEDA] ">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#2E294E] text-xl p-2 mr-3" />
              <div>
                <p className="text-black font-bold">Email</p>
                <a
                  href="mailto:prachemonos@parchate.co"
                  className="text-gray-500 hover:underline"
                >
                  prachemonos@parchate.co
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-[#EADEDA] mt-3">
            <FontAwesomeIcon icon={faPhone} className="text-[#2E294E] text-xl p-2 mr-3" />
              <div>
                <p className="text-black font-bold">Teléfono</p>
                <a
                  href="tel:+576024072035"
                  className="text-gray-500 hover:underline"
                >
                  +57 (602) 407 2035
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-[#EADEDA] mt-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#2E294E] text-xl p-2 mr-3" />

              <div>
                <p className="text-black font-bold">Dirección</p>
                <a
                  href="https://www.google.com/maps/search/?q=Marabunta+Agencia+Creativa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500  hover:underline"
                >
                  Marabunta Agencia Creativa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
