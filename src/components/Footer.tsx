// src/components/Footer.tsx
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f3f4f6] to-[#ffffff] w-full pt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-0 relative">
        {/* DIRECTORY */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8 md:border-r md:border-gray-300 flex flex-col h-full">
          <h3 className="text-[#36c6f4] text-2xl font-bold uppercase tracking-wide mb-2 flex items-center gap-2 relative">
            DIRECTORY
            <span className="absolute left-0 -bottom-1 w-10 h-1 bg-[#36c6f4] rounded transition-all duration-300 group-hover:w-20" />
          </h3>
          <ul className="space-y-1 text-base mt-6">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/marine">MARINE</Link></li>
            <li><Link href="/construction">CONSTRUCTION</Link></li>
            <li><Link href="/reclads">RECLADS</Link></li>
            <li><Link href="/recycling">RECYCLING</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </div>
        {/* GET IN TOUCH */}
        <div className="flex-1 mb-8 md:mb-0 md:px-8 md:border-r md:border-gray-300 flex flex-col h-full">
          <h3 className="text-[#36c6f4] text-2xl font-bold uppercase tracking-wide mb-2 flex items-center gap-2 relative">
            GET IN TOUCH
            <span className="absolute left-0 -bottom-1 w-10 h-1 bg-[#36c6f4] rounded transition-all duration-300 group-hover:w-20" />
          </h3>
          <div className="text-base space-y-2 mt-6">
            <div>
              <span className="font-bold">FREE PHONE:</span> 0800 SCAFWrap<br />
              (0800 722 397)
            </div>
            <div>
              <span className="font-bold">MOBILE:</span> 021 774 534 (CHRIS) 027 223 9727 (KRIS)
            </div>
            <div>
              <span className="font-bold">EMAIL:</span> <a href="mailto:chris@scaf-wrap.co.nz" className="text-[#36c6f4] hover:underline">CHRIS@SCAF-WRAP.CO.NZ</a>
            </div>
          </div>
        </div>
        {/* FOLLOW US */}
        <div className="flex-1 flex flex-col items-start justify-between md:pl-8 h-full">
          <h3 className="text-[#36c6f4] text-2xl font-bold uppercase tracking-wide mb-2 flex items-center gap-2 relative">
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
      <div className="bg-[#222] text-white text-center py-2 text-xs mt-8">
        © {new Date().getFullYear()} SCAFWRAP. All rights reserved.
      </div>
    </footer>
  )
}
