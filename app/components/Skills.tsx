'use client'
import { motion } from 'framer-motion'
import * as SiIcons from 'react-icons/si'
import { useSkillsConfig } from '../context/ConfigContext'
import type { Skill } from '../types'
import IconCloud from './IconCloud'

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12">
          {/* Soft Skills - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center h-full md:pr-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
              Soft <span className="gradient-text">Skills</span>
            </h3>
            <div className="flex flex-wrap gap-4 md:justify-start justify-center">
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

          {/* Technical Skills Cloud - Right Side */}
          <motion.div
            variants={containerVariants}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:pl-8 aspect-square"
          >
            <IconCloud
              iconSlugs={skills.map((skill) => {
                // 从 react-icons 的 Si 前缀映射到 simple-icons 的 slug
                const iconMap: { [key: string]: string } = {
                  SiJavascript: "javascript",
                  SiTypescript: "typescript",
                  SiReact: "react",
                  SiNextdotjs: "nextdotjs",
                  SiPython: "python",
                  SiDocker: "docker",
                  SiNodedotjs: "nodedotjs",
                  SiHtml5: "html5",
                  SiCss3: "css3",
                  SiGit: "git",
                  SiGithub: "github",
                  SiTailwindcss: "tailwindcss",
                  SiMongodb: "mongodb",
                  SiFirebase: "firebase",
                  SiPostgresql: "postgresql",
                  SiRedis: "redis",
                  SiNginx: "nginx",
                  SiVuedotjs: "vuedotjs",
                  SiAngular: "angular",
                  SiDjango: "django",
                  SiFlask: "flask",
                  SiJava: "java",
                  SiKubernetes: "kubernetes",
                  SiAmazonaws: "amazonaws",
                  SiGooglecloud: "googlecloud",
                  SiMicrosoftazure: "microsoftazure"
                };
                return iconMap[skill.icon] || skill.name.toLowerCase();
              })}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
