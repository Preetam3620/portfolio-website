'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary to-surface">
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-amber bg-clip-text text-transparent"
        >
          Preetam Maske
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Full Stack Developer & Software Engineer specializing in modern web technologies, 
          cloud solutions, and scalable applications
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-accent-teal to-accent-amber text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-accent-teal/25 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a 
            href="/resume.pdf" 
            className="border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-teal hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View Resume
          </a>
        </motion.div>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-teal animate-bounce cursor-pointer hover:scale-110 transition-transform"
      >
        <ChevronDown size={32} />
        <p className="text-sm mt-2">Scroll to explore</p>
      </motion.button>
    </section>
  )
}

export default Hero