// src/sections/Marine/Banner.tsx
import Image from "next/image";
import MarineInfo from "./MarineInfo";

export default function Banner() {
  // Imágenes simples para la galería
  const marineImages = [
    {
      src: "/images/marine.jpg",
      alt: "Yacht shrink wrapping service"
    },
    {
      src: "/images/construction.jpg",
      alt: "Boat covered with shrink wrap"
    },
    {
      src: "/images/marine.jpg",
      alt: "Marine facility wrapping"
    },
    {
      src: "/images/construction.jpg",
      alt: "Super yacht maintenance"
    },
    {
      src: "/images/marine.jpg",
      alt: "Boat transport protection"
    },
    {
      src: "/images/construction.jpg",
      alt: "Marina services"
    },
    {
      src: "/images/marine.jpg",
      alt: "Custom marine solutions"
    },
    {
      src: "/images/construction.jpg",
      alt: "Professional marine work"
    },
    {
      src: "/images/marine.jpg",
      alt: "Quality marine protection"
    }
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="relative inline-block mb-10">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 font-heading tracking-wide">
            MARINE
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full absolute left-0 -bottom-3"></div>
        </div>
        
        {/* Contenido descriptivo */}
        <div className="mb-16">
          <MarineInfo />
        </div>
        
        {/* Galería de imágenes simple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marineImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
