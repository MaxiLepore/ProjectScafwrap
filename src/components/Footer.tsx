// src/components/Footer.tsx
import Image from "next/image"
import TransitionLink from "@/components/TransitionLink";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#f3f4f6] to-[#ffffff] w-full pt-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-0 relative">
          {/* DIRECTORY */}
          <div className="flex-1 mb-8 md:mb-0 md:pr-8 md:border-r md:border-gray-300 flex flex-col h-full">
            <h3 className="text-[#36c6f4] text-xl font-bold uppercase tracking-wide mb-2 flex items-center gap-2 relative">
              DIRECTORY
              <span className="absolute left-0 -bottom-1 w-10 h-1 bg-[#36c6f4] rounded transition-all duration-300 group-hover:w-20" />
            </h3>
            <ul className="space-y-1 text-sm mt-6">
              <li><TransitionLink href="/" className="hover:text-[#36c6f4] transition-colors duration-200">HOME</TransitionLink></li>
              <li><TransitionLink href="/marine" className="hover:text-[#36c6f4] transition-colors duration-200">MARINE</TransitionLink></li>
              <li><TransitionLink href="/construction" className="hover:text-[#36c6f4] transition-colors duration-200">CONSTRUCTION</TransitionLink></li>
              <li><TransitionLink href="/reclads" className="hover:text-[#36c6f4] transition-colors duration-200">RECLADS</TransitionLink></li>
              <li><TransitionLink href="/recycling" className="hover:text-[#36c6f4] transition-colors duration-200">RECYCLING</TransitionLink></li>
              <li><TransitionLink href="/contact" className="hover:text-[#36c6f4] transition-colors duration-200">CONTACT</TransitionLink></li>
            </ul>
          </div>
          {/* GET IN TOUCH */}
          <div className="flex-1 mb-8 md:mb-0 md:px-8 md:border-r md:border-gray-300 flex flex-col h-full">
            <h3 className="text-[#36c6f4] text-xl font-bold uppercase tracking-wide mb-2 flex items-center gap-2 relative">
              GET IN TOUCH
              <span className="absolute left-0 -bottom-1 w-10 h-1 bg-[#36c6f4] rounded transition-all duration-300 group-hover:w-20" />
            </h3>
            <div className="text-sm space-y-2 mt-6">
              <div>
                <span className="font-semibold">MOBILE:</span> 021 774 534 (CHRIS) 027 223 9727 (KRIS)
              </div>
              <div>
                <span className="font-semibold">EMAIL:</span> <a href="mailto:chris@scaf-wrap.co.nz" className="text-[#36c6f4] hover:underline">CHRIS@SCAF-WRAP.CO.NZ</a>
              </div>
            </div>
          </div>
          {/* FOLLOW US */}
          <div className="flex-1 flex flex-col items-start justify-between md:pl-8 h-full">
            <h3 className="text-[#36c6f4] text-xl font-bold uppercase tracking-wide mb-2 flex items-center gap-2 relative">
              FOLLOW US
              <span className="absolute left-0 -bottom-1 w-10 h-1 bg-[#36c6f4] rounded transition-all duration-300 group-hover:w-20" />
            </h3>
            <div className="flex gap-3 mb-6 mt-6">
              <a href="https://www.facebook.com/scafwrap/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-transform duration-200 hover:scale-110 hover:shadow-lg">
                <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
              </a>
              <a href="https://www.linkedin.com/company/scafwrap-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform duration-200 hover:scale-110 hover:shadow-lg">
                <Image src="/linkeding.svg" alt="LinkedIn" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer inferior */}
        <div className="bg-[#222] text-white py-2 px-4 mt-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-xs relative">
            <span>© {new Date().getFullYear()} SCAFWRAP. All rights reserved.</span>
            <div className="absolute right-4 flex items-center gap-1">
              <span>Designed by</span>
              <span className="font-semibold text-[#36c6f4]">Mate Studio</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
