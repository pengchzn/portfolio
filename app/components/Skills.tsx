'use client'
import { motion } from 'framer-motion'
import * as SiIcons from 'react-icons/si'
import { useSkillsConfig } from '../context/ConfigContext'
import type { Skill } from '../types'

export default function Skills() {
  const { technical: skills, soft: softSkills }: { technical: Skill[], soft: string[] } = useSkillsConfig()

  const getIcon = (iconName: string) => {
    const Icon = (SiIcons as any)[iconName]
    return Icon ? <Icon size={48} /> : null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of technologies I've mastered, with a focus on modern web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill: Skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass-effect p-6 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform duration-200"
            >
              <div className={typeof skill.color === 'string' ? skill.color : `${skill.color.light} dark:${skill.color.dark}`}>
                {getIcon(skill.icon)}
              </div>
              <h3 className="mt-4 font-medium text-lg text-gray-900 dark:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill: string, index: number) => (
              <motion.span
                key={skill}
                className="glass-effect px-4 py-2 rounded-full text-sm text-gray-900 dark:text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
