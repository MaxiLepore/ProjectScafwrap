"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [current, setCurrent] = useState(initialIndex);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Cerrar con Escape y navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      {/* Fondo para cerrar */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
      {/* Imagen principal */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold z-20"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <div className="flex items-center justify-center w-full h-full">
          <button
            className="text-white text-4xl px-4 py-2 focus:outline-none"
            onClick={prev}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <div className="relative w-screen h-screen flex items-center justify-center">
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              sizes="90vw"
              loading="eager"
              className="object-contain rounded-lg shadow-lg max-h-[90vh] max-w-[60vw] mx-auto"
            />
          </div>
          <button
            className="text-white text-4xl px-4 py-2 focus:outline-none"
            onClick={next}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
        {/* Miniaturas */}
        <div className="flex gap-2 mt-4 overflow-x-auto max-w-full">
          {images.map((img, idx) => (
            <button
              key={img.src}
              className={`border-2 rounded-md overflow-hidden w-16 h-12 ${idx === current ? 'border-blue-400' : 'border-transparent'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ver imagen ${idx + 1}`}
            >
              <div className="relative w-16 h-12">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="64px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
