'use client'

import { motion } from 'framer-motion'
import { Github, Users, Award } from 'lucide-react'

const Projects = () => {

  const projects = [
    {
      title: 'AlphaRescue: AI Emergency Dispatch',
      description: 'AI-driven autonomous emergency dispatch system with voice-based assistant powered by Gemini. Features real-time incident dashboard, specialized uAgents for situation evaluation, and automated ambulance dispatch coordination.',
      image: '🚨',
      technologies: ['Python', 'Gemini AI', 'Fetch.ai', 'Mapbox', 'Vercel', 'Supabase', 'RAG Pipeline'],
      githubUrl: 'https://github.com/Preetam3620/Alpha-Rescue.git',
      highlights: ['Voice transcription & analysis', 'Real-time emergency mapping', 'Multi-agent coordination'],
      status: 'Featured Project'
    },
    {
      title: 'BookTable - Restaurant Reservation',
      description: 'End-to-end restaurant reservation platform similar to OpenTable. Features customer booking, restaurant management, admin dashboard, and real-time availability tracking with email/SMS confirmations.',
      image: '🍽️',
      technologies: ['React', 'Python FastAPI', 'PostgreSQL', 'AWS EC2', 'CircleCI', 'Terraform'],
      githubUrl: 'https://github.com/Preetam3620/BookTable-App.git',
      highlights: ['Multi-role access control', 'Cloud deployment with auto-scaling', 'CI/CD pipeline integration'],
      status: 'Production Ready'
    },
    {
      title: 'Reflectra - AI Journaling Companion',
      description: 'AI-powered journaling platform with voice companion for task management and emotional support. Features personalized AI interactions, semantic search, mood analysis, and modular agent architecture.',
      image: '📔',
      technologies: ['Python', 'Reflex', 'OpenAI', 'Deepgram', 'ChromaDB', 'Redis', 'Fetch.ai'],
      githubUrl: 'https://github.com/somesh-bagadiya/Reflectra.git',
      highlights: ['Voice-to-text processing', 'Context-aware conversations', 'Semantic memory recall'],
      status: 'AI Integration'
    },
    {
      title: 'Fluento - Language Learning App',
      description: 'Cross-platform language learning application with interactive tutorials, quizzes, and gamified elements. Winner of ISTE Hack-SPRINT v3.0. Features social elements, leaderboards, and multi-language support.',
      image: '🌍',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Android', 'Web'],
      githubUrl: 'https://github.com/Preetam3620/fluento_app_web.git',
      highlights: ['Cross-platform compatibility', 'Gamified learning experience', 'Real-time leaderboards'],
      status: 'Award Winner'
    },
    {
      title: 'IRIS - OCR Invoice Processing',
      description: 'Enterprise OCR-based invoice processing system developed at Volkswagen. Supports 1000+ users across multiple locations with automated deployment pipelines and Microsoft Computer Vision integration.',
      image: '📄',
      technologies: ['Angular', 'Node.js', 'Flask', 'MongoDB', 'Microsoft OCR', 'Atlassian Bamboo'],
      githubUrl: '#',
      highlights: ['Enterprise-scale deployment', '1000+ active users', 'Automated CI/CD pipeline'],
      status: 'Enterprise Solution'
    },
    {
      title: 'Real-time Sensor Dashboard',
      description: 'IoT sensor data monitoring dashboard with real-time visualization and analysis capabilities. Built during internship with daily data tracking, custom charts, and automated reporting features.',
      image: '📊',
      technologies: ['Node.js', 'HTML5', 'ExtendedJS', 'Real-time APIs'],
      githubUrl: '#',
      highlights: ['Real-time data visualization', 'Custom dashboard design', 'Automated reporting'],
      status: 'IoT Solution'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured Project': return 'bg-accent-teal/20 text-accent-teal'
      case 'Production Ready': return 'bg-green-500/20 text-green-400'
      case 'AI Integration': return 'bg-purple-500/20 text-purple-400'
      case 'Award Winner': return 'bg-accent-amber/20 text-accent-amber'
      case 'Enterprise Solution': return 'bg-blue-500/20 text-blue-400'
      case 'IoT Solution': return 'bg-orange-500/20 text-orange-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Award Winner': return <Award size={16} />
      case 'Enterprise Solution': return <Users size={16} />
      default: return null
    }
  }

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-amber mx-auto rounded-full"></div>
          <p className="text-text-secondary text-lg mt-6 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, web development, mobile apps, and enterprise systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl overflow-hidden border border-accent-teal/10 hover:border-accent-teal/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-teal/10 hover:transform hover:-translate-y-2 group flex flex-col h-full"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-accent-teal/20 to-accent-amber/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-xl font-semibold mb-3 text-text-primary group-hover:text-accent-teal transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-4 md:line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-accent-amber/10 text-accent-amber px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6 flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-accent-teal/10 text-accent-teal px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs bg-surface text-text-secondary px-2 py-1 rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="mt-auto">
                  <a 
                    href={project.githubUrl}
                    className="w-full border border-accent-teal/30 hover:bg-accent-teal hover:text-white text-accent-teal px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn min-h-[44px]"
                  >
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/50 rounded-2xl p-8 border border-accent-teal/20">
            <h3 className="font-display text-2xl font-semibold text-accent-teal mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              I&apos;m constantly working on new projects and exploring cutting-edge technologies. 
              Follow my journey on GitHub to see the latest developments.
            </p>
            <a 
              href="https://github.com/Preetam3620"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-teal to-accent-amber text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-accent-teal/25 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              View All Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects