// src/sections/Home/Services.tsx
"use client";

import Image from "next/image";

const services = [
  {
    id: "marine",
    title: "MARINE",
    subtitle: "Shrink wrap for boats & yachts",
    description: "Professional marine shrink wrapping services for yacht refits, boat storage, and marine protection in Auckland shipyards.",
    image: "/images/marine.jpg",
    link: "/marine",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "construction", 
    title: "CONSTRUCTION",
    subtitle: "Shrink wrap for scaffolding & construction",
    description: "Comprehensive shrink wrap solutions for construction sites, scaffolding protection, and weather-resistant building coverage.",
    image: "/images/construction.jpg",
    link: "/construction",
    color: "from-cyan-500 to-blue-400"
  },
  {
    id: "reclads",
    title: "RECLADS", 
    subtitle: "Shrink wrap for recladding & leaky buildings",
    description: "Specialized weatherproof shrink wrapping for building reclads, leaky home repairs, and structural renovations.",
    image: "/images/construction.jpg", // Usando construction temporalmente
    link: "/reclads",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "recycling",
    title: "RECYCLING",
    subtitle: "Shrink wrap services & sustainability", 
    description: "Eco-friendly shrink wrap solutions with recycling programs and sustainable materials for environmentally conscious projects.",
    image: "/images/marine.jpg", // Usando marine temporalmente
    link: "/recycling",
    color: "from-cyan-600 to-blue-500"
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-25 blur-xl"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-cyan-300 rounded-full opacity-20 blur-lg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título de la sección mejorado */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-black font-heading leading-tight">
              EXPLORE OUR{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4 mx-auto w-24"></div>
          </div>
          <p className="text-gray-700 text-lg mt-6 max-w-2xl mx-auto font-body">
            Professional shrink wrapping solutions across New Zealand for marine, construction, and specialty applications
          </p>
        </div>

        {/* Grid de servicios mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Imagen de fondo mejorada */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Overlay con gradiente personalizado */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500`} />
                
                {/* Overlay de color temático */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>

              {/* Contenido de la tarjeta mejorado */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <div className="flex items-end justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-2xl md:text-3xl font-heading mb-2 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-cyan-100 text-base md:text-lg font-medium mb-3 font-body">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Botón de flecha mejorado */}
                    <a 
                      href={service.link}
                      className="bg-white/10 backdrop-blur-sm hover:bg-cyan-400 hover:text-white text-white p-4 rounded-full transition-all duration-300 flex-shrink-0 ml-6 group-hover:scale-110 border border-white/20 hover:border-cyan-400"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <svg 
                        className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Banda inferior con gradiente */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Sección informativa adicional */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              <span className="text-gray-800">SCAF WRAP</span>{" "}
              <span className="text-cyan-400">SHRINK WRAPPING SERVICES</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 font-body leading-relaxed text-sm">
            <div>
              <p className="mb-4">
                Welcome to Scaf Wrap. We provide shrink wrap solutions to the building and 
                construction industry for shrink wrapping scaffolding during renovation, repair, re-cladding, 
                roofing and new build construction. It is often referred to as scaffolding, sheeting 
                or screening in the industry. Scaf Wrap are Auckland&apos;s leading marine shrink wrap 
                specialists, providing weather proofing solutions during marine refits of boats and 
                yachts. We also plastic wrap houses and cover temporary structures for all sorts of 
                maintenance work and events.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Our 100% weather-tight guarantee allows you to continue working in all weather. Our 
                Shrinkwrap system, service and innovative ideas have provided a broad range of New 
                Zealand industries with weatherproofing solutions, quality and service. We look forward 
                to helping you achieve the best solution for your next project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
