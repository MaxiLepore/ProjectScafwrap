// src/sections/Home/Services.tsx
export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8 font-heading">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {["Marine Logistics", "Renewable Energy", "Sustainability Consulting"].map((service) => (
            <div key={service} className="bg-white p-6 rounded shadow text-left">
              <h3 className="text-xl font-semibold mb-2 text-primary font-heading">
                {service}
              </h3>
              <p className="text-gray-600 font-body">
                We offer world-class solutions in {service.toLowerCase()} across NZ.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
