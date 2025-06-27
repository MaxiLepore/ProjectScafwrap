// src/sections/Construction/ConstructionInfo.tsx
export default function ConstructionInfo() {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-6xl">
        {/* Contenido en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              <span className="font-semibold text-gray-800">Scafwrap</span> work with large construction companies, small builders, scaffolding companies, 
              home owners and event organisers on projects ranging in size and complexity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light mt-6">
              Although <span className="font-semibold text-gray-800">Scaf Wrap</span> is based in Central Auckland, we work on projects throughout New 
              Zealand.
            </p>
          </div>
          
          {/* Columna derecha */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              In the construction and building industry we specialise in weatherproofing construction sites 
              for renovation work, new buildings and repairing damage to leaky buildings. This normally 
              involves shrink wrapping the scaffolding but other customised methods can be used.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              The quality shrink wrap product we offer is a far superior product to the traditional tarp and 
              we stand by our 90 day warranty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
