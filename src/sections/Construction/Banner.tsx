// src/sections/Construction/Banner.tsx
import Image from "next/image";
import ConstructionInfo from "./ConstructionInfo";

export default function Banner() {
  // Imágenes para la galería de construcción
  const constructionImages = [
    {
      src: "/images/construction.jpg",
      alt: "Industrial building shrink wrap"
    },
    {
      src: "/images/marine.jpg",
      alt: "Construction site weather protection"
    },
    {
      src: "/images/construction.jpg",
      alt: "Scaffolding enclosure system"
    },
    {
      src: "/images/marine.jpg",
      alt: "Building renovation cover"
    },
    {
      src: "/images/construction.jpg",
      alt: "Construction dust containment"
    },
    {
      src: "/images/marine.jpg",
      alt: "Temporary building protection"
    },
    {
      src: "/images/construction.jpg",
      alt: "Site weather barrier"
    },
    {
      src: "/images/marine.jpg",
      alt: "Industrial wrapping solutions"
    },
    {
      src: "/images/construction.jpg",
      alt: "Construction environmental control"
    }
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="relative inline-block mb-10">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-800 font-heading tracking-wide">
            CONSTRUCTION
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full absolute left-0 -bottom-3"></div>
        </div>
        
        {/* Contenido descriptivo */}
        <div className="mb-16">
          <ConstructionInfo />
        </div>
        
        {/* Galería de imágenes simple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {constructionImages.map((image, index) => (
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
