'use client'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'AI Chatbot Platform',
      description: 'An intelligent conversational AI platform built with Next.js and OpenAI API, featuring real-time responses and conversation history.',
      tags: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind CSS'],
      image: '/project1.png',
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for managing online store operations, featuring real-time analytics and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
      image: '/project2.png',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management solution with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
      image: '/project3.png',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="glass-effect rounded-lg overflow-hidden">
                <div className="relative h-48 bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full glass-effect"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={20} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={20} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
