'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 
        'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter', 'Dart'
      ],
      icon: '🎨'
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js', 'Python', 'Flask', 'Express.js', 'REST APIs', 
        'GraphQL', 'Microservices', 'Shell Scripting'
      ],
      icon: '⚙️'
    },
    {
      title: 'Cloud & Database',
      skills: [
        'AWS', 'GCP', 'Docker', 'EC2', 'Cloud Architecture', 
        'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase'
      ],
      icon: '☁️'
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        'Git', 'Kafka', 'Atlassian Bamboo', 'CircleCI', 'Terraform',
        'ExtendedJS', 'Reflex', 'Bitbucket', 'IIS'
      ],
      icon: '🛠️'
    },
    {
      title: 'AI & Emerging Tech',
      skills: [
        'OpenAI', 'Gemini', 'RAG Pipelines', 'ChromaDB', 'Deepgram',
        'Fetch.ai', 'Voice Processing', 'Computer Vision OCR'
      ],
      icon: '🤖'
    },
    {
      title: 'Languages',
      skills: [
        'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 
        'C', 'SQL', 'Dart'
      ],
      icon: '💻'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-accent-amber mx-auto rounded-full"></div>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through professional experience, academic projects, and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl p-6 border border-accent-teal/10 hover:border-accent-teal/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-teal/10 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="font-display text-xl font-semibold text-accent-amber">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="bg-accent-teal/10 text-accent-teal px-3 py-1 rounded-full text-sm font-medium hover:bg-accent-teal/20 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-surface/50 rounded-2xl p-8 border border-accent-amber/20">
            <h3 className="font-display text-2xl font-semibold text-accent-amber mb-4">
              Always Learning
            </h3>
            <p className="text-text-secondary text-lg">
              Technology evolves rapidly, and so do I. Currently exploring advanced cloud architectures, 
              AI integration patterns, and modern development practices to stay at the forefront of innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills