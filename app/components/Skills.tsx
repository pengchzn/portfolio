'use client'

import { useSkillsConfig } from '../context/ConfigContext'
import IconCloud from './IconCloud'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import { 
  FiBox,
  FiUsers, 
  FiMessageSquare, 
  FiTarget,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiTrendingUp
} from 'react-icons/fi'

// 将 react-icons 的图标名称转换为 simple-icons 的 slug
const convertToSimpleIconSlug = (iconName: string): string => {
  // 移除 "Si" 前缀并转换为小写
  const slug = iconName.replace(/^Si/, '').toLowerCase()
  
  // 特殊情况处理
  const specialCases: Record<string, string> = {
    'nextdotjs': 'nextdotjs',
    'nodedotjs': 'nodedotjs',
    'amazonaws': 'amazonwebservices',  // 修正为正确的 slug
    'tailwindcss': 'tailwindcss'
  }

  return specialCases[slug] || slug
}

const softSkillsDetails = [
  {
    icon: <FiBox size={24} />,
    skill: "Problem Solving",
    description: "Analytical thinking and creative solutions"
  },
  {
    icon: <FiUsers size={24} />,
    skill: "Team Leadership",
    description: "Guiding and empowering teams"
  },
  {
    icon: <FiMessageSquare size={24} />,
    skill: "Communication",
    description: "Clear and effective collaboration"
  },
  {
    icon: <FiTarget size={24} />,
    skill: "Project Management",
    description: "Delivering results on time"
  },
  {
    icon: <FiClock size={24} />,
    skill: "Time Management",
    description: "Efficient task prioritization"
  },
  {
    icon: <FiAward size={24} />,
    skill: "Adaptability",
    description: "Embracing change and learning"
  },
  {
    icon: <FiRefreshCw size={24} />,
    skill: "Agile Mindset",
    description: "Iterative improvement focus"
  },
  {
    icon: <FiTrendingUp size={24} />,
    skill: "Growth Mindset",
    description: "Continuous self-improvement"
  }
]

export default function Skills() {
  const skills = useSkillsConfig()
  const { technical } = skills

  // 将技术图标名称转换为 simple-icons slugs
  const iconSlugs = technical.map(skill => convertToSimpleIconSlug(skill.icon))

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my skills and areas of expertise
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <AnimatedSection delay={0.2} className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Technical Skills</h3>
            <div className="aspect-square relative">
              <IconCloud iconSlugs={iconSlugs} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkillsDetails.map((item, index) => (
                <motion.div
                  key={item.skill}
                  className="p-4 rounded-lg glass-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-cyan-600 dark:text-cyan-400 p-2 rounded-full glass-effect">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold">{item.skill}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pl-12">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
