export default function RecladInfo() {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-6xl">
        {/* Contenido en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              <span className="font-semibold text-gray-800">Scafwrap</span> specialises in comprehensive building envelope solutions and reclad services 
              throughout Auckland and New Zealand, working with property owners, developers, and building contractors on weathertightness and facade 
              upgrade projects.
            </p>
          </div>
          
          {/* Columna derecha */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              We provide complete building envelope upgrades including residential reclads, commercial facade 
              renovations, weathertightness remediation for leaky buildings, and heritage restoration projects 
              that maintain character while improving performance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              Our modern cladding systems and proven installation methods come with comprehensive warranties, 
              ensuring your building is protected against Auckland&apos;s challenging climate conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
