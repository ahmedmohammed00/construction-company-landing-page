'use client'

import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  const [isNavScrolled, setIsNavScrolled] = useState(false)

  // Add scroll effect to navigation
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        setIsNavScrolled(true)
      } else {
        setIsNavScrolled(false)
      }
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="bg-white text-gray-900">
      <Navigation isScrolled={isNavScrolled} onScrollToSection={scrollToSection} />
      <HeroSection onScrollToSection={scrollToSection} />
      <ServicesSection />
  
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 