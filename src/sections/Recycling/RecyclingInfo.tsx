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
              <span className="font-semibold text-gray-800">Scafwrap</span>  takes pride in our 
              partnership with Safesmart Access NZ and Safeseal Shrinkwrap, a product we have played 
              a pivotal role in developing and fine-tuning for the New Zealand market. We are committed to sustainability 
              and can confidently state that 100% of the used shrinkwrap we dismantle is recycled through Safesmart&apos;s &apos;Wrap Cycle&apos; program. 
            </p>
          </div>
          
          {/* Columna derecha */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
            This initiative transforms our discarded materials into a variety of innovative products, promoting environmental responsibility and reducing waste.
            By collaborating with these industry leaders, Scafwrap not only supports 
            eco-friendly practices but also contributes to a circular economy, ensuring that our 
            operations have a positive impact on the environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
