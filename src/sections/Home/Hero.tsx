// src/sections/Home/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-primary text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          SHRINK WRAP FOR MARINE REFITS
        </h1>
        <p className="text-lg font-sans mb-6">
          Scafwrap works closely with yacht captains and Auckland shipyards to deliver weatherproof marine shrink wrap solutions.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow font-heading"
        >
          More Info
        </a>
      </div>
    </section>
  )
}
