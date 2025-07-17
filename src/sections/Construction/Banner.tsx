"use client";
// src/sections/Construction/Banner.tsx
import Image from "next/image";
import ConstructionInfo from "./ConstructionInfo";
import React, { useState } from "react";
import Lightbox from "@/components/Lightbox";

export default function Banner() {
  // Imágenes para la galería de construcción
  const constructionImages = [
    { src: "/images/construction/Construction1.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction2.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction3.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction4.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction5.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction6.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction7.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction8.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
    { src: "/images/construction/Construction9.jpg", alt: "Shrink wrap weatherproofing on scaffolding at a construction site in Auckland, New Zealand" },
  ];

  // Estado para el lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

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
            <button
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none group cursor-pointer"
              onClick={() => openLightbox(index)}
              aria-label={`Ver imagen ${index + 1} en grande`}
              type="button"
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:brightness-75"
                />
                {/* Ícono de lupa al hacer hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <circle cx='11' cy='11' r='8' stroke='currentColor' strokeWidth='2' fill='none'/>
                    <line x1='21' y1='21' x2='16.65' y2='16.65' stroke='currentColor' strokeWidth='2' strokeLinecap='round'/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            images={constructionImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </div>
    </section>
  );
}
