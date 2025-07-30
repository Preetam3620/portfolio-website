'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-accent-teal/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-accent-teal to-accent-amber bg-clip-text text-transparent">
              Preetam Maske
            </h3>
            <p className="text-text-secondary mt-2">
              Full Stack Developer & Software Engineer
            </p>
          </motion.div>

          {/* Center - Built with love */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <span>Built with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>using</span>
              <Code size={16} className="text-accent-teal" />
              <span>Next.js &</span>
              <Coffee size={16} className="text-accent-amber" />
            </div>
            <p className="text-sm text-text-secondary mt-2">
              © {currentYear} Preetam Maske. All rights reserved.
            </p>
          </motion.div>

          {/* Right - Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a 
                href="mailto:preetam.a.maske@gmail.com"
                className="text-text-secondary hover:text-accent-teal transition-colors duration-300"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/preetam-maske-b83a851a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-teal transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Preetam3620"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-teal transition-colors duration-300"
              >
                GitHub
              </a>
              <a 
                href="/resume.pdf"
                className="text-text-secondary hover:text-accent-amber transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-surface-hover text-center"
        >
          <p className="text-text-secondary text-sm">
            Designed and developed with passion for creating exceptional digital experiences.
            <br />
            Always open to new opportunities and interesting conversations.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer