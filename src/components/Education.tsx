'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, BookOpen, Award, Users } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Master of Science (MS)',
      field: 'Computer Software Engineering',
      institution: 'San Jose State University',
      location: 'San Jose, California',
      duration: 'Aug 2024 - Present',
      status: 'In Progress',
      coursework: [
        'Systems Software Engineering',
        'Cloud Technologies', 
        'Mobile Application Development',
        'Cloud Services',
        'Enterprise Software Platforms',
        'Virtualization Technologies',
        'Data Mining'
      ],
      achievements: [
        'Currently pursuing advanced studies in software engineering',
        'Focus on cloud-native application development',
        'Research in AI-driven systems and modern architectures'
      ],
      color: 'from-accent-teal to-blue-500',
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Engineering (BE)',
      field: 'Computer Engineering',
      institution: 'Savitribai Phule Pune University',
      location: 'Pune, India',
      duration: 'Jul 2018 - Jul 2022',
      status: 'Completed',
      coursework: [
        'Data Structures & Algorithms',
        'Object Oriented Programming',  
        'Database Management',
        'Cloud Computing',
        'Machine Learning',
        'Data Analytics',
        'Operating Systems',
        'Computer Networks'
      ],
      achievements: [
        'Graduated with strong foundation in computer science fundamentals',
        'Active participant in hackathons and coding competitions',
        'Led multiple academic projects and technical workshops',
        'Runner-up in ISTE Hack-SPRINT v3.0 with Fluento language app'
      ],
      color: 'from-accent-amber to-orange-500',
      icon: '🏛️'
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: 'December 2024',
      icon: '☁️',
      color: 'text-orange-400'
    },
    {
      title: 'The Complete 2021 Flutter Development Bootcamp with Dart',
      issuer: 'Udemy',
      date: 'September 2021',
      icon: '📱',
      color: 'text-blue-400'
    },
    {
      title: 'The Complete 2021 Web Development Bootcamp',
      issuer: 'Udemy', 
      date: 'May 2021',
      icon: '🌐',
      color: 'text-green-400'
    },
    {
      title: 'Google Cloud Skills Boost Program',
      issuer: 'Google Cloud',
      date: 'January 2021',
      icon: '🔗',
      color: 'text-accent-teal'
    }
  ]

  return (
    <section id="education" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Education & Learning</h2>
          <div className="w-20 h-1 bg-accent-amber mx-auto rounded-full"></div>
          <p className="text-text-secondary text-lg mt-6 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey in computer science, software engineering, and emerging technologies
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-accent-amber via-accent-teal to-accent-amber rounded-full"></div>

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-accent-amber to-accent-teal rounded-full border-4 border-surface shadow-lg z-10 flex items-center justify-center text-2xl">
                  {edu.icon}
                </div>

                {/* Content card */}
                <div className="flex-1 ml-20">
                  <div className="bg-primary rounded-2xl p-8 border border-accent-amber/20 hover:border-accent-amber/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-amber/10 group min-h-[500px] flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-accent-amber transition-colors mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl font-semibold text-accent-teal mb-3">
                          {edu.field}
                        </h4>
                        <div className="flex items-center gap-2 text-text-secondary mb-2">
                          <GraduationCap size={18} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:text-right">
                        <div className="inline-flex items-center gap-2 bg-accent-amber/10 text-accent-amber px-4 py-2 rounded-full text-sm font-medium mb-2">
                          <Calendar size={14} />
                          {edu.duration}
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.status === 'In Progress' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {edu.status}
                        </div>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div className="mb-6 flex-grow">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen size={18} className="text-accent-teal" />
                        <h4 className="font-display text-lg font-semibold text-accent-teal">Relevant Coursework</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                        {edu.coursework.map((course, courseIndex) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: (index * 0.3) + (courseIndex * 0.05) }}
                            viewport={{ once: true }}
                            className="bg-accent-teal/10 text-accent-teal px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-accent-teal/20 transition-colors duration-200"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-4">
                        <Award size={18} className="text-accent-amber" />
                        <h4 className="font-display text-lg font-semibold text-accent-amber">Key Highlights</h4>
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.3) + (achievementIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-text-secondary"
                          >
                            <div className="w-2 h-2 bg-accent-amber rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-3xl font-bold text-center mb-8 text-accent-teal">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/50 rounded-xl p-6 border border-accent-teal/10 hover:border-accent-teal/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary group-hover:text-accent-teal transition-colors mb-2">
                      {cert.title}
                    </h4>
                    <p className={`text-sm font-medium mb-1 ${cert.color}`}>
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-primary/30 rounded-2xl p-8 border border-accent-amber/20"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="font-display text-2xl font-semibold text-accent-amber mb-4">
            Continuous Learning Mindset
          </h3>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            My educational journey reflects a commitment to staying at the forefront of technology. 
            From foundational computer science principles to cutting-edge cloud technologies and AI, 
            I believe in continuous learning as the key to innovation and professional growth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education