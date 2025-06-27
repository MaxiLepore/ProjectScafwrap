// src/sections/Contact/ContactPage.tsx
"use client"
import { useState } from "react"
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.send(
        'service_oqpns6j',
        'template_1gjgcjg',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          title: formData.subject,
          message: formData.message
        },
        '8lC1Nuqb1a81sM6oF'
      );
      setStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setStatus('error');
      console.error('Error de EmailJS:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch and let us give you a free no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#36c6f4] mb-4">
                Get In Touch
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="space-y-3 text-base">
                  <div>
                    <p className="font-semibold text-gray-900">Free Phone:</p>
                    <p className="text-gray-700">0800 SCAFWRAP (0800 722 397)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Mobile:</p>
                    <p className="text-gray-700">021 774 534 (Chris)</p>
                    <p className="text-gray-700">027 223 9727 (Kris)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email:</p>
                    <a href="mailto:chris@scaf-wrap.co.nz" className="text-[#36c6f4] hover:underline">
                      chris@scaf-wrap.co.nz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#36c6f4] mb-4">
                Office Address
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Scafwrap Ltd</p>
                <p className="text-gray-700">Unit 11</p>
                <p className="text-gray-700">74 Upper Queen St</p>
                <p className="text-gray-700">Eden Terrace</p>
                <p className="text-gray-700">Auckland 1010</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#36c6f4] mb-4">
                Postal Address
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Scafwrap Ltd</p>
                <p className="text-gray-700">PO Box 90640</p>
                <p className="text-gray-700">Victoria Street West</p>
                <p className="text-gray-700">Auckland 1120</p>
                <p className="text-gray-700">NEW ZEALAND</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36c6f4] focus:border-transparent transition-colors"
                    placeholder="Please let us know your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36c6f4] focus:border-transparent transition-colors"
                    placeholder="Please let us know your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36c6f4] focus:border-transparent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36c6f4] focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36c6f4] focus:border-transparent transition-colors"
                  placeholder="Please write a subject for your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={10}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#36c6f4] focus:border-transparent transition-colors resize-none"
                  placeholder="Please let us know your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#36c6f4] hover:bg-[#2bb4e0] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center font-semibold mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center font-semibold mt-2">Hubo un error al enviar el mensaje. Intenta nuevamente.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
