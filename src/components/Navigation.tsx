'use client'

import { useState, useEffect, useRef } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      let currentSection = 'hero'

      // If we're at the very bottom of the page, always show contact
      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection('contact')
        return
      }

      // Find which section is most visible in the viewport
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollY
          const elementBottom = elementTop + rect.height

          // Check if section is in viewport (with some offset)
          const viewportTop = scrollY + 100
          const viewportBottom = scrollY + windowHeight - 100

          // If section overlaps with viewport, it's the current section
          if (elementTop <= viewportBottom && elementBottom >= viewportTop) {
            // Check which section has more visible area
            const visibleTop = Math.max(elementTop, viewportTop)
            const visibleBottom = Math.min(elementBottom, viewportBottom)
            const visibleHeight = Math.max(0, visibleBottom - visibleTop)
            
            if (visibleHeight > 50) { // Minimum visible height
              currentSection = sectionId
            }
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Call once on mount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Auto-scroll navbar to show active button
  useEffect(() => {
    const activeButton = navRef.current?.querySelector(`[data-section="${activeSection}"]`) as HTMLElement
    activeButton?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'center' 
    })
  }, [activeSection])

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
    <nav 
      ref={navRef}
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50 bg-surface/90 backdrop-blur-md rounded-full p-2 flex gap-1 whitespace-nowrap overflow-x-auto scrollbar-hide max-w-[calc(100vw-2rem)]"
    >
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          data-section={id}
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