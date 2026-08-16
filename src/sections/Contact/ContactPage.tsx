// src/sections/Contact/ContactPage.tsx
"use client"
import { useState, useEffect } from "react"
import { useFormValidation } from '@/hooks/useFormValidation';

const CheckIcon = (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function ContactPage() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  };

  const {
    formData,
    errors,
    updateField,
    validateAll,
    resetForm,
    getFieldError,
    isFieldValid,
    isFormValid
  } = useFormValidation(initialFormData);

  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  // Honeypot anti-bot: campo oculto que un humano nunca rellena.
  const [botField, setBotField] = useState('');

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateField(name as keyof typeof formData, value);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setServerError(null);

    // Validate form before submission
    if (!validateAll()) {
      setLoading(false);
      return;
    }

    // Honeypot anti-bot: si viene relleno es un bot. Simulamos éxito sin
    // enviar nada para no revelarle que fue detectado.
    if (botField) {
      setStatus('success');
      resetForm();
      setLoading(false);
      return;
    }

    try {
      // El servidor valida y aplica rate limiting.
      const validationResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: botField })
      });

      if (!validationResponse.ok) {
        const errorData = await validationResponse.json().catch(() => ({}));
        setServerError(errorData.message || 'Please check the form and try again');
        setStatus('error');
        return;
      }

      // Validación OK → enviar el email desde el cliente vía EmailJS.
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Guard: si falta alguna env var, probablemente el dev server no se
      // reinició tras editar .env.local, o las vars no se están inyectando.
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS config missing:', {
          serviceId,
          templateId,
          publicKey,
        });
        setStatus('error');
        setServerError(
          'Email configuration is missing. Restart the dev server after editing .env.local.'
        );
        setLoading(false);
        return;
      }

      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        serviceId,
        templateId,
        {
          // `title` -> template Subject ({{title}}), `subject` kept for clarity
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message
        },
        { publicKey }
      );

      setStatus('success');
      resetForm();
    } catch (error) {
      setStatus('error');

      // Surface the real EmailJS error so failures are diagnosable.
      // EmailJS rejects with an object like { status, text }.
      let detail = 'Failed to send message. Please try again later.';
      if (error && typeof error === 'object' && 'text' in error) {
        const e = error as { status?: number; text?: string };
        detail = `EmailJS error${e.status ? ` (${e.status})` : ''}: ${e.text}`;
      } else if (error instanceof Error && error.message) {
        detail = `Error: ${error.message}`;
      }

      setServerError(detail);
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl md:text-7xl font-bold text-gray-800 font-heading tracking-wide">
              CONTACT
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full absolute left-0 -bottom-3"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch and let us give you a free no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">
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
                    <p className="text-gray-700">027 223 9727 (Kris)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email:</p>
                    <a href="mailto:kris@scaf-wrap.co.nz" className="text-accent hover:underline">
                      kris@scaf-wrap.co.nz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">
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
              <h3 className="text-2xl font-bold text-accent mb-4">
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
              {/* Honeypot anti-bot: oculto para humanos; los bots lo rellenan */}
              <div
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
              >
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                        getFieldError('name')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="Please enter your full name"
                    />
                    {isFieldValid('name') && formData.name && !getFieldError('name') ? (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {CheckIcon}
                      </div>
                    ) : null}
                  </div>
                  {getFieldError('name') ? (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                        getFieldError('email')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="Please enter your email address"
                    />
                    {isFieldValid('email') && formData.email && !getFieldError('email') ? (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {CheckIcon}
                      </div>
                    ) : null}
                  </div>
                  {getFieldError('email') ? (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                        getFieldError('phone')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="Your phone number (optional)"
                    />
                    {isFieldValid('phone') && formData.phone && !getFieldError('phone') ? (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {CheckIcon}
                      </div>
                    ) : null}
                  </div>
                  {getFieldError('phone') ? (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                        getFieldError('company')
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      placeholder="Your company name (optional)"
                    />
                    {isFieldValid('company') && formData.company && !getFieldError('company') ? (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {CheckIcon}
                      </div>
                    ) : null}
                  </div>
                  {getFieldError('company') ? (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('company')}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                      getFieldError('subject')
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300'
                    }`}
                    placeholder="Please enter a subject for your message"
                  />
                  {isFieldValid('subject') && formData.subject && !getFieldError('subject') ? (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      {CheckIcon}
                    </div>
                  ) : null}
                </div>
                {getFieldError('subject') ? (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('subject')}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={10}
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none ${
                      getFieldError('message')
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300'
                    }`}
                    placeholder="Please enter your message"
                  />
                  {isFieldValid('message') && formData.message && !getFieldError('message') ? (
                    <div className="absolute top-3 right-3">
                      {CheckIcon}
                    </div>
                  ) : null}
                </div>
                {getFieldError('message') ? (
                  <p className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
                ) : null}
                <div className="mt-1 text-right text-sm text-gray-500">
                  {formData.message.length}/1000 characters
                </div>
              </div>

              <button
                type="submit"
                className={`w-full font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${
                  loading
                    ? 'bg-accent bg-opacity-60 text-white cursor-not-allowed'
                    : isFormValid
                    ? 'bg-accent hover:bg-secondary text-white'
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
                disabled={loading || !isFormValid}
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' ? (
                <div role="status" className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                  <p className="text-green-800 text-center font-semibold">
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : null}

              {status === 'error' ? (
                <div role="alert" className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center font-semibold">
                    {serverError || 'Failed to send message. Please try again.'}
                  </p>
                </div>
              ) : null}

              {/* Form validation summary */}
              {Object.keys(errors).length > 0 ? (
                <div role="alert" className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    Please fix the errors above before submitting the form.
                  </p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
