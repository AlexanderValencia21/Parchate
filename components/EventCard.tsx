"use client";

import Image from "next/image";

interface DescriptionBlock {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}

interface EventCardProps {
  title: string;
  organizer: string;
  description: DescriptionBlock[];
  imageUrl: string;
}

export default function EventCard({ title, organizer, description, imageUrl }: EventCardProps) {
  // Función para extraer el texto de la descripción
  const getDescriptionText = () => {
    // Toma solo el primer párrafo para la vista previa
    if (description && description.length > 0 && description[0].children) {
      return description[0].children
        .map(child => child.text)
        .join("");
    }
    return "";
  };

  return (
    <div className="bg-transparent p-6 rounded-2xl max-w-sm">
      <div className="overflow-hidden rounded-xl">
        <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-60 object-cover" />
      </div>
      <h2 className="text-lg font-semibold text-[#2E294E] mt-3">{title}</h2>
      <p className="text-[#2E294E] text-sm font-bold">Organizado por:{" "} <span className="font-normal">{organizer}</span></p>
      <p className="text-[#2E294E] text-sm mt-2 line-clamp-2">{getDescriptionText()}</p>
      <button className="mt-3 bg-pink-500 text-white px-3 py-1.5 rounded-md font-medium hover:bg-pink-600 transition-all">
        ¡Me interesa!
      </button>
    </div>
  );
}