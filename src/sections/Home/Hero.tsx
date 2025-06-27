"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    image: "/images/marine.jpg",
    title: "Shrink Wrap for Marine Refits",
    description:
      "Scafwrap work closely with yacht captains and Auckland shipyards, supplying weatherproof shrink wrapping solutions for boats, yachts and all marine refits",
    buttonText: "MORE INFO",
    buttonLink: "marine",
  },
  {
    image: "/images/construction.jpg",
    title: "Shrink Wrap for Construction",
    description:
      "Scafwrap provide shrink wrap solutions for large construction & scaffolding companies, small builders and home owners on all types of building projects",
    buttonText: "MORE INFO",
    buttonLink: "construction",
  },
  // Puedes agregar más slides aquí
];

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={700}
        className="h-full"
      >
        {slides.map((slide, index) => ( 
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh] sm:h-[60vh] lg:h-[70vh] transition-transform duration-700 will-change-transform">
              {/* Imagen de fondo */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700 scale-100 swiper-slide-active:scale-105"
                priority
              />

              {/* Overlays azules pequeños en cada esquina - Solo en dispositivos grandes */}
              <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
                <div className="absolute left-0 top-0 w-46 h-46 bg-primary/90 clip-top-left-triangle transition-opacity duration-500" />
                <div className="absolute right-0 bottom-0 w-46 h-46 bg-primary/90 clip-bottom-right-triangle transition-opacity duration-500" />
              </div>

              {/* Overlay oscuro para mejorar contraste */}
              <div className="absolute inset-0 bg-black/40 sm:bg-black/35 lg:bg-black/30 z-10 transition-opacity duration-700" />

              {/* Contenido responsive */}
              <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-4 sm:left-6 lg:right-25 lg:left-auto flex flex-col items-start lg:items-end justify-end z-20 p-4 sm:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl lg:max-w-4xl">
                <h1 className="font-heading font-bold uppercase text-white drop-shadow-lg text-left lg:text-right text-[24px] sm:text-[32px] lg:text-[40px] leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-2 sm:mt-3 lg:mt-4 font-body text-white drop-shadow-md text-left lg:text-right max-w-full sm:max-w-lg lg:max-w-md text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="mt-3 sm:mt-4 lg:mt-3 px-3 sm:px-4 py-2 bg-secondary text-white uppercase tracking-wide text-[10px] sm:text-xs shadow-lg hover:bg-white hover:text-secondary border-2 border-secondary transition-colors duration-300 transform hover:scale-105"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom CSS para los triángulos azules pequeños y bullets azules */}
      <style jsx global>{`
        .clip-top-left-triangle {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .clip-bottom-right-triangle {
          clip-path: polygon(100% 100%, 100% 0, 0 100%);
        }
        /* Swiper bullets personalizados en azul */
        .swiper-pagination-bullet {
          background: #2563eb !important;
          opacity: 0.5;
          transition: box-shadow 0.3s, opacity 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          box-shadow: 0 0 0 4px #2563eb44;
        }
        .swiper-pagination {
          position: absolute !important;
          bottom: 16px !important;
          left: 0;
          right: 0;
          z-index: 30 !important;
          display: flex;
          justify-content: center;
          gap: 6px;
        }
        @media (min-width: 640px) {
          .swiper-pagination {
            bottom: 20px !important;
            gap: 8px;
          }
        }
        @media (min-width: 1024px) {
          .swiper-pagination {
            bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}