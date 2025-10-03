import TransitionLink from '@/components/TransitionLink'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Scafwrap NZ',
  description: 'The page you are looking for could not be found. Return to Scafwrap homepage or explore our shrinkwrap services.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00AEEF] to-[#008CD2] leading-none font-heading">
            404
          </h1>
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 font-body max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        {/* Quick Links */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <TransitionLink
              href="/"
              className="px-6 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF] font-body"
            >
              Home
            </TransitionLink>
            <TransitionLink
              href="/marine"
              className="px-6 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF] font-body"
            >
              Marine
            </TransitionLink>
            <TransitionLink
              href="/construction"
              className="px-6 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF] font-body"
            >
              Construction
            </TransitionLink>
            <TransitionLink
              href="/reclads"
              className="px-6 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF] font-body"
            >
              Reclads
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="px-6 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF] font-body"
            >
              Contact
            </TransitionLink>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <TransitionLink
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#008CD2] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-heading"
          >
            Back to Home
          </TransitionLink>
          
          <TransitionLink
            href="/contact"
            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 font-heading"
          >
            Get in Touch
          </TransitionLink>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-30">
          <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-[#008CD2] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
