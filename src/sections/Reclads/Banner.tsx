// src/sections/Reclads/Banner.tsx
import Image from "next/image";
import RecladInfo from "./RecladInfo";

export default function Banner() {
  // Imágenes para la galería de reclads
  const recladImages = [
    {
      src: "/images/construction.jpg",
      alt: "Reclad project - building facade renovation"
    },
    {
      src: "/images/marine.jpg",
      alt: "Commercial building reclad services"
    },
    {
      src: "/images/construction.jpg",
      alt: "Weathertightness reclad solutions"
    },
    {
      src: "/images/marine.jpg",
      alt: "Building envelope upgrade"
    },
    {
      src: "/images/construction.jpg",
      alt: "Reclad installation process"
    },
    {
      src: "/images/marine.jpg",
      alt: "Modern building reclad finish"
    },
    {
      src: "/images/construction.jpg",
      alt: "Professional reclad services"
    },
    {
      src: "/images/marine.jpg",
      alt: "Building weatherproofing"
    },
    {
      src: "/images/construction.jpg",
      alt: "Quality reclad solutions"
    }
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="relative inline-block mb-10">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 font-heading tracking-wide">
            RECLADS
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full absolute left-0 -bottom-3"></div>
        </div>
        
        {/* Contenido descriptivo */}
        <div className="mb-16">
          <RecladInfo />
        </div>
        
        {/* Galería de imágenes simple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recladImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md"
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
