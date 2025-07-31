'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-amber mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I&apos;m a <span className="text-accent-teal font-semibold">passionate Software Engineer</span> currently pursuing my Master&apos;s in Computer Software Engineering at San Jose State University. With over 2 years of professional experience at Volkswagen Group Technology Solutions, I&apos;ve developed expertise in building scalable web applications and cloud infrastructure.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              My journey spans from developing <span className="text-accent-teal font-semibold">OCR-based invoice processing systems</span> supporting 1000+ users to creating innovative projects like AlphaRescue, an AI-driven emergency dispatch system. I specialize in full-stack development with technologies like React, Node.js, Python, and AWS.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              I believe in continuous learning and have a track record of mentoring teams, winning hackathons, and delivering end-to-end solutions from requirement gathering to deployment. My goal is to become a lead developer overseeing large-scale technical projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-primary/50 px-4 py-2 rounded-full">
                <span className="text-accent-amber font-semibold">📍</span>
                <span className="ml-2">San Jose, CA</span>
              </div>
              <div className="bg-primary/50 px-4 py-2 rounded-full">
                <span className="text-accent-amber font-semibold">🎓</span>
                <span className="ml-2">MS Computer Software Engineering</span>
              </div>
              <div className="bg-primary/50 px-4 py-2 rounded-full">
                <span className="text-accent-amber font-semibold">💼</span>
                <span className="ml-2">2+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-primary/30 rounded-2xl p-6 border border-accent-teal/20">
              <h3 className="font-display text-xl font-semibold text-accent-amber mb-4">Current Focus</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-teal rounded-full mr-3"></span>
                  Advanced Cloud Technologies & Microservices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-teal rounded-full mr-3"></span>
                  AI/ML Integration in Web Applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-teal rounded-full mr-3"></span>
                  System Design & Architecture Patterns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-teal rounded-full mr-3"></span>
                  Mobile Application Development
                </li>
              </ul>
            </div>

            <div className="bg-primary/30 rounded-2xl p-6 border border-accent-amber/20">
              <h3 className="font-display text-xl font-semibold text-accent-amber mb-4">Achievements</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-amber rounded-full mr-3"></span>
                  AWS Certified Solutions Architect (2024)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-amber rounded-full mr-3"></span>
                  ISTE Hack-SPRINT v3.0 Runner Up (2021)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-amber rounded-full mr-3"></span>
                  Led team of 6 interns in mobile development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-amber rounded-full mr-3"></span>
                  End-to-end ownership of multiple production systems
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About