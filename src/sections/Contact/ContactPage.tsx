// src/sections/Contact/ContactPage.tsx
export default function ContactPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Send us a message and we get back to you as soon as possible.
        </p>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <textarea
            rows={5}
            placeholder="Your message"
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
