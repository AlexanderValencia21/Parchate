import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <footer
  style={{ backgroundColor: "#FFD400" }}
  className="w-full text-black min-h-[40vh] py-10 px-6 flex flex-col items-center text-center md:text-left md:px-16"
>
  {/* Logo */}
  <h2 className={`${parisienne.className} text-6xl underline decoration-1 underline-offset-10`}>
    Parchate
  </h2>

  {/* Enlaces */}
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
    <div className="flex flex-col space-y-2">
      <a href="/" className="hover:text-gray-800">Nosotros</a>
      <a href="/eventos" className="hover:text-gray-800">Explora</a>
      <a href="/contacto" className="hover:text-gray-800">Contacto</a>
    </div>
    <div className="flex flex-col space-y-2">
      <a href="#" className="hover:text-gray-800">Términos de Uso</a>
      <a href="#" className="hover:text-gray-800">Privacidad y Datos</a>
      <a href="#" className="hover:text-gray-800">Uso de Cookies</a>
      <a href="https://www.google.com/maps/search/?q=Marabunta+Agencia+Creativa" target="_blank" className="hover:text-gray-800">
        Mapa del Sitio
      </a>
    </div>
  </div>

  {/* Redes Sociales */}
  <div className="mt-6 flex space-x-6">
    <a href="https://instagram.com" target="_blank">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href="https://facebook.com" target="_blank">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
  </div>
</footer>
  );
};

export default Footer;
