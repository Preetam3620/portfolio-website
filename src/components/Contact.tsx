'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create a hidden iframe to submit the form without leaving the page
      const iframe = document.createElement('iframe')
      iframe.name = 'hidden-form-frame'
      iframe.style.display = 'none'
      document.body.appendChild(iframe)

      // Create form and submit to iframe
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://script.google.com/macros/s/AKfycbyI70pA2D8mLfikoIw8hpEo7j5shjBtyafjXLi7Z_s3QrdMBOf-IRid7MiSaDKRKTmsIQ/exec'
      form.target = 'hidden-form-frame'
      form.style.display = 'none'

      // Add form data
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'subject', value: formData.subject },
        { name: 'message', value: formData.message }
      ]

      fields.forEach(field => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = field.name
        input.value = field.value
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()

      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(form)
        document.body.removeChild(iframe)
      }, 2000)

      // Show success message
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'preetam.a.maske@gmail.com',
      href: 'mailto:preetam.a.maske@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '(669) 340-6332',
      href: 'tel:+16693406332'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'San Jose, CA',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/preetam-maske/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/Preetam3620',
      color: 'hover:text-purple-400'
    },
    {
      icon: <FileText size={24} />,
      label: 'Resume',
      href: '/Preetam_Maske.pdf',
      color: 'hover:text-accent-amber'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-accent-amber mx-auto rounded-full"></div>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always excited to collaborate on innovative solutions and challenging problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-accent-teal mb-6">
                Get In Touch
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                I'm currently open to new opportunities, freelance projects, and collaborations. 
                Whether you're looking for a full-stack developer, need consultation on cloud architecture, 
                or want to discuss innovative AI solutions, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-surface rounded-xl hover:bg-surface-hover transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="text-accent-teal group-hover:text-accent-amber transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{contact.label}</p>
                    <p className="text-lg font-medium text-text-primary group-hover:text-accent-teal transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-display text-lg font-semibold text-accent-amber mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 bg-surface rounded-xl text-text-secondary ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:bg-surface-hover group`}
                    title={social.label}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 border border-accent-teal/10"
          >
            <h3 className="font-display text-2xl font-semibold text-accent-amber mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary border border-surface-hover rounded-xl text-text-primary placeholder-text-secondary focus:border-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary border border-surface-hover rounded-xl text-text-primary placeholder-text-secondary focus:border-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal/20 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-surface-hover rounded-xl text-text-primary placeholder-text-secondary focus:border-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal/20 transition-colors"
                  placeholder="Project collaboration, job opportunity, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-primary border border-surface-hover rounded-xl text-text-primary placeholder-text-secondary focus:border-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal/20 transition-colors resize-none"
                  placeholder="Tell me about your project, requirements, or just say hello!"
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400">
                  <CheckCircle size={20} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
                  <AlertCircle size={20} />
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                  isSubmitting 
                    ? 'bg-surface text-text-secondary cursor-not-allowed' 
                    : 'bg-gradient-to-r from-accent-teal to-accent-amber text-white hover:shadow-2xl hover:shadow-accent-teal/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-6 p-4 bg-primary/50 rounded-xl border border-accent-amber/20">
              <p className="text-sm text-text-secondary text-center">
                <span className="text-accent-amber font-semibold">Quick response guarantee:</span> I typically respond to messages within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-surface/50 rounded-2xl p-8 border border-accent-teal/20">
            <h3 className="font-display text-xl font-semibold text-accent-teal mb-4">
              Looking for a reliable development partner?
            </h3>
            <p className="text-text-secondary mb-6">
              From MVP development to enterprise solutions, I bring expertise in modern technologies and best practices to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:preetam.a.maske@gmail.com"
                className="bg-accent-teal hover:bg-accent-teal/80 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Start a Project
              </a>
              <a 
                href="/Preetam_Maske.pdf"
                className="border-2 border-accent-amber text-accent-amber hover:bg-accent-amber hover:text-primary px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact