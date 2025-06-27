// src/sections/Recycling/Banner.tsx
import Image from "next/image";
import RecyclingInfo from "./RecyclingInfo";

export default function Banner() {
  // Imágenes simples para la galería
  const recyclingImages = [
    {
      src: "/images/recycling.jpg",
      alt: "Recycling facility processing shrink wrap"
    },
    {
      src: "/images/construction.jpg",
      alt: "Sustainable construction practices"
    },
    {
      src: "/images/recycling.jpg",
      alt: "Environmental waste management"
    },
    {
      src: "/images/marine.jpg",
      alt: "Marine recycling services"
    },
    {
      src: "/images/recycling.jpg",
      alt: "Circular economy solutions"
    },
    {
      src: "/images/construction.jpg",
      alt: "Green building practices"
    },
    {
      src: "/images/recycling.jpg",
      alt: "Sustainable shrink wrap disposal"
    },
    {
      src: "/images/marine.jpg",
      alt: "Eco-friendly marine solutions"
    },
    {
      src: "/images/recycling.jpg",
      alt: "Environmental compliance services"
    }
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <h1 className="text-4xl md:text-7xl font-bold text-gray-800 font-heading mb-10 tracking-wide">
          RECYCLING
        </h1>
        
        {/* Contenido descriptivo */}
        <div className="mb-16">
          <RecyclingInfo />
        </div>
        
        {/* Galería de imágenes simple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recyclingImages.map((image, index) => (
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
