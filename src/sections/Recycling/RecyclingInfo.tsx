// src/sections/Recycling/RecyclingInfo.tsx
export default function RecyclingInfo() {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-6xl">
        {/* Contenido en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              <span className="font-semibold text-gray-800">ScafWrap</span> is committed to environmental 
              sustainability and responsible waste management across all our marine and construction services 
              in Auckland and throughout New Zealand. Our comprehensive recycling program ensures that 
              materials from shrink wrap projects are processed through certified environmental channels.
            </p>
          </div>
          
          {/* Columna derecha */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              We partner with licensed recycling facilities and maintain strict environmental compliance 
              standards, ensuring all waste materials are sorted, processed, and recycled according to 
              New Zealand environmental regulations and circular economy principles.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              ScafWrap also provides comprehensive environmental documentation and certification to help 
              your projects achieve sustainability goals and reduce carbon footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
