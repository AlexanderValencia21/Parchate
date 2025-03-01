"use client";

import { useEffect, useState } from "react";
import { getEventos } from "@/utils/api";
import EventCard from "@/components/EventCard";
import ExploraHeader from "@/components/ExploraHeader";
import Navbar from "@/components/Navbar";

export default function Explora() {
  const [eventos, setEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEventos() {
      try {
        setIsLoading(true);
        const data = await getEventos();
        console.log("Datos recibidos:", data);
        
        // Si tienes al menos un evento, examina su estructura
        if (data && data.length > 0) {
          console.log("Estructura del primer evento:", data[0]);
        }
        
        setEventos(data);
      } catch (error) {
        console.error("Error al cargar eventos:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEventos();
    document.documentElement.style.zoom = "1";
  }, []);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-[url('/blur.png')] md:bg-[url('/frame=3.jpg')]bg-cover bg-center overflow-hidden">
      <ExploraHeader/>
    <div className="flex flex-wrap justify-center gap-6 p-6 ">
    {eventos && eventos.length > 0 ? (
        [...Array(3)].flatMap(() => eventos).map((evento, index) => {
          console.log("Renderizando evento:", evento);
          
          if (!evento) return null;
          
          let title, organizer, description, imageUrl;
          
          if (evento.Titulo) {
            title = evento.Titulo;
            organizer = evento.Organizador;
            description = evento.Descripcion;
            imageUrl = evento.Imagen ? `http://localhost:1337${evento.Imagen.url}` : "https://placehold.co/600x400?text=No+Image";
          } else if (evento.attributes) {
            title = evento.attributes.Titulo;
            organizer = evento.attributes.Organizador;
            description = evento.attributes.Descripcion;
            imageUrl = evento.attributes.Imagen?.data?.attributes?.url
              ? `http://localhost:1337${evento.attributes.Imagen.data.attributes.url}`
              : "https://placehold.co/600x400?text=No+Image";
          } else {
            console.error("Estructura de evento desconocida:", evento);
            return null;
          }
          
          return (
            <EventCard
              key={`${evento.id || index}-${Math.random()}`}
              title={title || "Sin título"}
              organizer={organizer || "Sin organizador"}
              description={description || []}
              imageUrl={imageUrl || "https://placehold.co/600x400?text=No+Image"}
            />
          );
        })
      ) : (
        <p className="text-center text-gray-500">No hay eventos disponibles</p>
      )}
    </div>
    </div>
  );
}