'use client'
import { FiBox, FiUsers, FiMessageSquare, FiTarget,
  FiClock, FiAward, FiRefreshCw, FiTrendingUp } from 'react-icons/fi'
import { useSkillsConfig } from '../context/ConfigContext'
import IconCloud from './IconCloud'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import { animations, styles, sizes } from '../config/ui'

import { SoftSkill } from '../types'

const getIconComponent = (iconName: string) => {
  const icons = {
    FiBox,
    FiUsers,
    FiMessageSquare,
    FiTarget,
    FiClock,
    FiAward,
    FiRefreshCw,
    FiTrendingUp
  }
  return icons[iconName as keyof typeof icons]
}

const SoftSkillCard = ({ item, index }: { item: SoftSkill; index: number }) => {
  const IconComponent = getIconComponent(item.icon)
  return (
    <motion.div
      key={item.name}
      className={`p-4 rounded-lg ${styles.glassEffect}`}
      whileHover={animations.scale.hover}
      whileTap={animations.scale.tap}
      {...animations.fadeInUp}
      transition={{ ...animations.fadeInUp.transition, delay: index * 0.1 }}
    >
      <div className="flex items-center space-x-3 mb-2">
        <div className={`text-cyan-600 dark:text-cyan-400 p-2 rounded-full ${styles.glassEffect}`}>
          <IconComponent size={sizes.icon.md} />
        </div>
        <h4 className="font-semibold">{item.name}</h4>
      </div>
      <p className={`text-sm ${styles.defaultText} pl-12`}>
        {item.description}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  const skills = useSkillsConfig()
  const { technical, soft } = skills

  const iconSlugs = technical.map(skill => skill.icon)

  return (
    <section id="skills" className="py-20">
      <div className={styles.container}>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className={`${styles.defaultText} max-w-2xl mx-auto`}>
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
              {soft.map((item, index) => (
                <SoftSkillCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
