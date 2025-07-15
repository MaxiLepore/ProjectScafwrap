"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";

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
  {
    image: "/images/reclads.jpg",
    title: "Shrink Wrap for Reclads",
    description:
      "Scafwrap provide a unique, full encapsulation shrink wrap solution for weatherproofing leaky homes and all types of building reclads",
    buttonText: "MORE INFO",
    buttonLink: "reclads",
  },
  {
    image: "/images/recycling.jpg",
    title: "Shrink Wrap for Recycling",
    description:
      "Scafwrap actively work with a local recycling facility in Auckland to recycle our Shrinkwrap",
    buttonText: "MORE INFO",
    buttonLink: "recycling",
  },
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

              {/* Overlays celestes modernos en cada esquina - Mejorado pero similar */}
              <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
                {/* Triángulos principales */}
                <div className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-cyan-400/80 to-cyan-500/60 clip-top-left-triangle transition-all duration-700" />
                <div className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tl from-cyan-400/80 to-cyan-500/60 clip-bottom-right-triangle transition-all duration-700" />

                {/* Triángulos adicionales más pequeños para efecto layered */}
                <div className="absolute left-8 top-8 w-20 h-20 bg-gradient-to-br from-white/20 to-cyan-300/40 clip-top-left-triangle transition-all duration-500 delay-100" />
                <div className="absolute right-8 bottom-8 w-20 h-20 bg-gradient-to-tl from-white/20 to-cyan-300/40 clip-bottom-right-triangle transition-all duration-500 delay-100" />
              </div>

              {/* Overlay oscuro mejorado */}
              <div className="absolute inset-0 bg-black/40 sm:bg-black/35 lg:bg-black/30 z-10 transition-opacity duration-700" />

              {/* Contenido responsive mejorado */}
              <div className="absolute bottom-10 sm:bottom-8 lg:bottom-32 left-4 sm:left-6 lg:right-50 lg:left-auto flex flex-col items-start lg:items-end justify-end z-20 p-4 sm:p-6 lg:p-8 w-full max-w-full sm:max-w-2xl lg:max-w-5xl">
                <h1 className="font-heading font-bold uppercase text-white drop-shadow-lg text-left lg:text-right text-[23px] sm:text-[32px] lg:text-[50px] leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-2 pr-10 lg:pr-0 sm:mt-3 lg:mt-4 font-body text-white drop-shadow-md text-left lg:text-right max-w-full sm:max-w-sm lg:max-w-2xl text-[12px] sm:text-[13px] lg:text-[16px] leading-relaxed">
                  {slide.description}
                </p>
                <TransitionLink
                  href={`/${slide.buttonLink}`}
                  className="mt-3 sm:mt-4 lg:mt-3 px-3 sm:px-4 py-2 bg-secondary text-white uppercase tracking-wide text-[10px] sm:text-xs shadow-lg hover:bg-white hover:text-secondary border-2 border-secondary transition-colors duration-300 transform hover:scale-105"
                >
                  {slide.buttonText}
                </TransitionLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom CSS para los triángulos celestes modernos y bullets mejorados */}
      <style jsx global>{`
        .clip-top-left-triangle {
          clip-path: polygon(0 0, 100% 0, 0 100%);
          filter: drop-shadow(0 4px 8px rgba(34, 211, 238, 0.3));
        }
        .clip-bottom-right-triangle {
          clip-path: polygon(100% 100%, 100% 0, 0 100%);
          filter: drop-shadow(0 -4px 8px rgba(34, 211, 238, 0.3));
        }
        /* Swiper bullets mejorados - mantiene simpleza anterior */
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8) !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          border: 1px solid rgba(255, 255, 255, 0.6) !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 1) !important;
          border-color: rgba(255, 255, 255, 0.9) !important;
          transform: scale(1.1) !important;
        }
        .swiper-pagination-bullet-active {
          background: #22d3ee !important;
          border-color: #22d3ee !important;
          box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.3) !important;
          transform: scale(1.3) !important;
        }
        .swiper-pagination {
          position: absolute !important;
          bottom: 20px !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 30 !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          padding: 10px !important;
        }
        @media (min-width: 640px) {
          .swiper-pagination {
            bottom: 24px !important;
            gap: 10px !important;
          }
          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
          }
        }
        @media (min-width: 1024px) {
          .swiper-pagination {
            bottom: 30px !important;
            gap: 12px !important;
          }
          .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
