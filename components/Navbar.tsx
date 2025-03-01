"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Parisienne } from "next/font/google";
const parisienne = Parisienne({ subsets: ["latin"], weight: "400" });
const Navbar=()=>{
  const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] lg:w-[95%] h-12 lg:h-14 font-thin tracking-wide bg-white shadow-md rounded-full flex justify-between items-center px-6 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/LogoNav.png" alt="Parchate Logo" width={35} height={35} className="object-contain" />
      </div>
      {/* Menú hamburguesa */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <Image src={isOpen ? "/close.png" : "/menu.png"} alt="Menu" width={30} height={30} />
      </button>

      {/* Links */}
      <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
        <a href="/" className="hover:text-gray-500">Inicio</a>
        <a href="/eventos" className="hover:text-gray-500">Explora</a>
        <a href="/contacto" className="hover:text-gray-500">Contacto</a>
      </div>
      {/* Menú móvil */}
      {isOpen && (
        <div className={`absolute top-16 left-0 w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-4 md:hidden transition-opacity duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
          <Link href="/" className="text-gray-800 hover:text-gray-500">Inicio</Link>
          <Link href="/eventos" className="text-gray-800 hover:text-gray-500">Explora</Link>
          <Link href="/contacto" className="text-gray-800 hover:text-gray-500">Contacto</Link>
        </div>
      )}
    </nav>
    );
};

export default Navbar