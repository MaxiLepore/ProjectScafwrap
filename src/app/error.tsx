'use client'

import { useEffect } from 'react'
import TransitionLink from '@/components/TransitionLink'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Error Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">
          Oops! Something went wrong
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 font-body max-w-md mx-auto">
          We encountered an unexpected error. Don&apos;t worry, our team has been notified and we&apos;re working to fix it.
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-xl mx-auto">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#008CD2] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-heading"
          >
            Try Again
          </button>
          
          <TransitionLink
            href="/"
            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 font-heading"
          >
            Back to Home
          </TransitionLink>
        </div>

        {/* Support Link */}
        <div className="mt-12">
          <p className="text-sm text-gray-500 mb-2">
            Need help? Get in touch with us
          </p>
          <TransitionLink
            href="/contact"
            className="text-[#00AEEF] hover:text-[#008CD2] font-semibold transition-colors duration-200"
          >
            Contact Support →
          </TransitionLink>
        </div>
      </div>
    </div>
  )
}
