'use client'
import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss, 
  SiPython,
  SiGit,
  SiDocker
} from 'react-icons/si'

export default function Skills() {
  const skills = [
    { icon: <SiJavascript size={48} />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <SiTypescript size={48} />, name: 'TypeScript', color: 'text-blue-400' },
    { icon: <SiReact size={48} />, name: 'React', color: 'text-cyan-400' },
    { icon: <SiNextdotjs size={48} />, name: 'Next.js', color: 'text-white' },
    { icon: <SiTailwindcss size={48} />, name: 'Tailwind', color: 'text-teal-400' },
    { icon: <SiPython size={48} />, name: 'Python', color: 'text-yellow-300' },
    { icon: <SiGit size={48} />, name: 'Git', color: 'text-orange-500' },
    { icon: <SiDocker size={48} />, name: 'Docker', color: 'text-blue-500' },
  ]

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
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of technologies I've worked with and mastered throughout my journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass-effect p-6 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform duration-200"
            >
              <div className={skill.color}>
                {skill.icon}
              </div>
              <h3 className="mt-4 font-medium text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
