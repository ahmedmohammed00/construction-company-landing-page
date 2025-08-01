'use client'

import { useState } from 'react'
import Image from 'next/image'

interface NavigationProps {
  isScrolled: boolean
  onScrollToSection: (sectionId: string) => void
}

export default function Navigation({ isScrolled, onScrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full top-0 z-50 glass-nav border-b border-gray-800/20 ${isScrolled ? 'backdrop-blur-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-reverse space-x-4 min-w-0">
            {/* Logo */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/ايليت تاتش.png"
                alt="إليت فينيش"
                width={64}
                height={64}
                className="w-full h-full object-contain rounded-full shadow-lg bg-white"
                priority
              />
            </div>
            {/* Company Name and Tagline - hidden on xs, truncated on sm+ */}
            <div className="hidden sm:flex flex-col min-w-0">
              <h1 className="text-2xl font-bold text-white truncate max-w-[140px] md:max-w-xs lg:max-w-sm xl:max-w-md">إليت فينيش</h1>
              <p className="text-xs text-gray-300 truncate max-w-[140px] md:max-w-xs lg:max-w-sm xl:max-w-md">تصميم داخلي وتشطيبات</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-reverse space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              الخدمات
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              المعرض
            </button>
            <button 
              onClick={() => handleNavClick('process')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              العملية
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              تواصل
            </button>
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-reverse space-x-4">
            {/* Desktop CTA Button */}
            <button 
              onClick={() => handleNavClick('contact')}
              className="hidden md:block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105"
            >
              <i className="fas fa-calendar-alt ml-2"></i>
              احجز استشارة
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-right"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-right"
              >
                الخدمات
              </button>
              <button 
                onClick={() => handleNavClick('portfolio')}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-right"
              >
                المعرض
              </button>
              <button 
                onClick={() => handleNavClick('process')}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-right"
              >
                العملية
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-right"
              >
                تواصل
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 w-full"
              >
                <i className="fas fa-calendar-alt ml-2"></i>
                احجز استشارة
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 