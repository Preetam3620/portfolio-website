'use client'

import { useState, useEffect } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-4 right-4 md:top-8 md:right-8 z-50 bg-surface/90 backdrop-blur-md rounded-full p-2 flex gap-1 whitespace-nowrap overflow-x-auto scrollbar-hide max-w-[calc(100vw-2rem)]">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`px-4 py-3 md:px-3 md:py-2 rounded-full text-sm md:text-xs font-medium transition-all duration-300 transform hover:scale-105 flex-shrink-0 min-h-[44px] ${
            activeSection === id
              ? 'bg-accent-teal text-white shadow-lg'
              : 'text-text-secondary hover:bg-accent-teal hover:text-white'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation