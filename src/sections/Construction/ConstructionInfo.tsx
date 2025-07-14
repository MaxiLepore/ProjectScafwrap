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
              <span className="font-semibold text-gray-800">Scafwrap</span> collaborates with a diverse range of partners, 
              including major construction companies, builders, scaffolding firms, homeowners, and event 
              organisers, on projects of varying sizes and complexities. While our base is in Central Auckland, 
              our services extend across New Zealand.

            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light mt-6">
            In the construction and building sector, we specialise in weatherproofing construction 
            sites for renovations, new buildings/developments, and repairs to leaky buildings. Our 
            primary method often involves shrink wrapping scaffolding, although we are equipped to 
            implement other customised solutions as required.
            </p>
          </div>
          
          {/* Columna derecha */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
            We have established a strong reputation within the industry for the ability of our 
            wraps to withstand the frequent harsh weather conditions that Auckland and New Zealand 
            experience. However, our most notable attribute is our reliability. We take pride in our 
            commitment to punctuality and maintain open lines of communication with our clients, 
            keeping them informed about the progress of each project and its current status.

            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
            At Scafwrap, we understand the importance of protecting your investment and ensuring that 
            construction timelines are met, regardless of external conditions. Our dedicated team work 
            hard to provide a dependable, high-quality service that meets the unique needs of every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
