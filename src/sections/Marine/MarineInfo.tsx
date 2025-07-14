// src/sections/Marine/MarineInfo.tsx
export default function MarineInfo() {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-6xl">
        {/* Contenido en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              <span className="font-semibold text-gray-800">Scafwrap</span>  proudly stands as Auckland&apos;s premier marine 
              shrinkwrap specialists, dedicated to delivering tried and tested weatherproofing solutions for 
              yacht refits, maintenance And repairs. We collaborate closely with yacht captains and 
              exclusively partner with Auckland&apos;s largest and most esteemed shipyards, offering tailored 
              shrinkwrap systems suitable for vessels of all sizes.

            </p>
          </div>
          
          {/* Columna derecha */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
            Whether you need to cover a specific 
            area or the entire vessel, we can accommodate your requirements.
            Moreover, Scafwrap provides protective coverings for various marine applications during transport 
            and storage, ensuring that your vessel is safeguarded at all stages of its journey.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
