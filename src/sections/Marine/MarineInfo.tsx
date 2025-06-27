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
              <span className="font-semibold text-gray-800">Scaf Wrap</span> are Auckland&apos;s leading marine shrink wrap specialists, providing weather proofing 
              solutions during marine refits of boats and yachts. Scafwrap work closely with yacht 
              captains and local shipyards, supplying shrink wrap systems for vessels of any size. We can 
              cover just a particular area or the entire yacht or boat as required.
            </p>
          </div>
          
          {/* Columna derecha */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              As well as weatherproofing the yacht or boat itself, we also shrink wrap structures for boat 
              building and repair and have created contained facilities making it possible for the marine 
              industry to undertake multiple international super yacht refits.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              Scafwrap also provide protective coverings for marine applications during transport or 
              storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
