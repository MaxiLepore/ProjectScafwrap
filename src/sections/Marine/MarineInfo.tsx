// src/sections/Marine/MarineInfo.tsx
export default function MarineInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          What We Do in Marine
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Logistics</h3>
            <p className="text-gray-700">
              Efficient coastal and international shipping coordination, port services and vessel handling.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Sustainability</h3>
            <p className="text-gray-700">
              Eco-friendly operations that reduce emissions and preserve marine biodiversity.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Consulting</h3>
            <p className="text-gray-700">
              Strategic advice for marine infrastructure development and environmental compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
