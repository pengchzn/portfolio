'use client'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useProjectsConfig } from '../context/ConfigContext'
import type { Project } from '../types'
import AnimatedSection from './AnimatedSection'
import { animations, styles, sizes } from '../config/ui'

type ProjectLink = {
  href: string
  icon: JSX.Element
  label: string
}

const ProjectLinkButton = ({ href, icon, label }: ProjectLink) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center space-x-2 ${styles.defaultText} hover:text-gray-900 dark:hover:text-white ${styles.linkTransition}`}
    whileHover={animations.scale.hover}
    whileTap={animations.scale.tap}
  >
    {icon}
    <span>{label}</span>
  </motion.a>
)

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <AnimatedSection key={project.title} delay={index * 0.2}>
    <div className={`${styles.glassEffect} rounded-lg overflow-hidden h-full`}>
      <div 
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className={`${styles.defaultText} mb-4`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={`px-3 py-1 text-sm rounded-full ${styles.glassEffect}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <ProjectLinkButton 
            href={project.github}
            icon={<FiGithub size={sizes.icon.sm} />}
            label="Code"
          />
          <ProjectLinkButton 
            href={project.demo}
            icon={<FiExternalLink size={sizes.icon.sm} />}
            label="Demo"
          />
        </div>
      </div>
    </div>
  </AnimatedSection>
)

export default function Projects() {
  const projects = useProjectsConfig().filter((project: Project) => project.featured)

  return (
    <section id="projects" className="py-20">
      <div className={styles.container}>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className={styles.gradientText}>Projects</span>
          </h2>
          <p className={`${styles.defaultText} text-lg max-w-2xl mx-auto`}>
            A selection of my featured projects and technical accomplishments
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
