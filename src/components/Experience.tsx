'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Volkswagen Group Technology Solutions',
      location: 'Pune, India',
      duration: 'Aug 2022 - Jul 2024',
      type: 'Full-time',
      achievements: [
        'Developed interactive user interfaces using Angular and backend APIs with NodeJS for IRIS, an OCR-based invoice processing system, while also providing end-to-end application support for over 1000 users across two locations',
        'Managed Flask-based REST APIs integrated with Microsoft\'s Computer Vision OCR and MongoDB; automated deployments via Atlassian Bamboo and Shell scripting, delivering code from Bitbucket to IIS servers efficiently',
        'Handled AWS infrastructure tasks including setup and administration of EC2 instances, configuration of security groups, and deployment of a Flask application ensuring secure, scalable, and production-ready cloud hosting',
        'Owned complete development lifecycle of Spare Parts Portal, handling requirement gathering, development, deployment, documentation, and feedback integration to deliver a fully functional, client-facing solution'
      ],
      technologies: ['Angular', 'Node.js', 'Flask', 'Python', 'MongoDB', 'AWS EC2', 'Microsoft OCR', 'Atlassian Bamboo'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Software Developer Intern',
      company: 'Whiz Key (OPC) Pvt Ltd',
      location: 'Remote',
      duration: 'Oct 2021 - Dec 2021',
      type: 'Internship',
      achievements: [
        'Engineered a real-time dashboard using Node.js, HTML, and ExtendedJS to monitor and visualize sensor data, enabling daily tracking, analysis, and reporting for improved operational insights',
        'Implemented backend logic and data flow for the dashboard to ensure accurate, real-time updates from sensors; collaborated with the team to integrate visual components and improve performance',
        'Designed and implemented a wireframe for a home automation app using Flutter, contributing to the project\'s initial user interface design and ensuring a smooth, user-friendly experience across mobile platforms'
      ],
      technologies: ['Node.js', 'HTML5', 'ExtendedJS', 'Flutter', 'Real-time APIs', 'IoT'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Application Developer Intern',
      company: 'Simba Developers',
      location: 'Remote',
      duration: 'Jan 2021 - Jul 2021',
      type: 'Internship',
      achievements: [
        'Built and tested core features of a cross-platform social media application using Flutter and Dart, focusing on performance, UI consistency, and seamless user experience across devices',
        'Collaborated on application integration, conducted thorough code reviews to maintain quality standards, and assisted fellow developers in debugging and enhancing key modules of the app',
        'Led technical training sessions and mentored a team of six interns in Flutter, GitHub, and Firebase; conducted research to identify optimal backend architecture and database solutions for scalable implementation'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'GitHub', 'Mobile Development'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent-amber mx-auto rounded-full"></div>
          <p className="text-text-secondary text-lg mt-6 max-w-3xl mx-auto">
            Professional journey spanning full-stack development, cloud infrastructure, and team leadership across innovative technology companies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 w-1 h-full bg-gradient-to-b from-accent-teal via-accent-amber to-accent-teal rounded-full transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-4 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-8 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-accent-teal to-accent-amber rounded-full border-2 md:border-4 border-primary shadow-lg z-10"></div>

                {/* Content card */}
                <div className="flex-1 ml-8 md:ml-20">
                  <div className="bg-surface rounded-2xl p-4 md:p-8 border border-accent-teal/10 hover:border-accent-teal/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-teal/10 group min-h-[300px] md:min-h-[400px] flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-accent-teal transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-accent-amber">
                          <Building size={18} />
                          <span className="font-semibold text-lg">{exp.company}</span>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:text-right">
                        <div className="inline-flex items-center gap-2 bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-sm font-medium mb-2">
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary text-sm">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Type badge */}
                    <div className="mb-6">
                      <span className={`inline-block bg-gradient-to-r ${exp.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6 flex-grow">
                      <h4 className="font-display text-lg font-semibold text-accent-amber mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-text-secondary leading-relaxed"
                          >
                            <ChevronRight size={16} className="text-accent-teal mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-auto">
                      <h4 className="font-display text-sm font-semibold text-accent-amber mb-3 uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                            viewport={{ once: true }}
                            className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-sm font-medium hover:bg-accent-teal/20 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-surface/50 rounded-2xl p-6 border border-accent-teal/20">
            <div className="text-3xl font-bold text-accent-teal mb-2">2+</div>
            <div className="text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center bg-surface/50 rounded-2xl p-6 border border-accent-amber/20">
            <div className="text-3xl font-bold text-accent-amber mb-2">1000+</div>
            <div className="text-text-secondary">Users Supported</div>
          </div>
          <div className="text-center bg-surface/50 rounded-2xl p-6 border border-accent-teal/20">
            <div className="text-3xl font-bold text-accent-teal mb-2">3</div>
            <div className="text-text-secondary">Companies</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience