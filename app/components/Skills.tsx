'use client'
import { FiBox, FiUsers, FiMessageSquare, FiTarget,
  FiClock, FiAward, FiRefreshCw, FiTrendingUp } from 'react-icons/fi'
import { useSkillsConfig } from '../context/ConfigContext'
import IconCloud from './IconCloud'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'
import { animations, styles, sizes } from '../config/ui'

type SoftSkill = {
  icon: JSX.Element
  skill: string
  description: string
}

const slugMap: Record<string, string> = {
  'nextdotjs': 'nextdotjs',
  'nodedotjs': 'nodedotjs',
  'amazonaws': 'amazonwebservices',
  'tailwindcss': 'tailwindcss'
}

const convertToSimpleIconSlug = (iconName: string): string => 
  slugMap[iconName.toLowerCase()] || iconName.replace(/^Si/, '').toLowerCase()

const SoftSkillCard = ({ item, index }: { item: SoftSkill; index: number }) => (
  <motion.div
    key={item.skill}
    className={`p-4 rounded-lg ${styles.glassEffect}`}
    whileHover={animations.scale.hover}
    whileTap={animations.scale.tap}
    {...animations.fadeInUp}
    transition={{ ...animations.fadeInUp.transition, delay: index * 0.1 }}
  >
    <div className="flex items-center space-x-3 mb-2">
      <div className={`text-cyan-600 dark:text-cyan-400 p-2 rounded-full ${styles.glassEffect}`}>
        {item.icon}
      </div>
      <h4 className="font-semibold">{item.skill}</h4>
    </div>
    <p className={`text-sm ${styles.defaultText} pl-12`}>
      {item.description}
    </p>
  </motion.div>
)

const softSkillsDetails: SoftSkill[] = [
  {
    icon: <FiBox size={sizes.icon.md} />,
    skill: "Problem Solving",
    description: "Analytical thinking and creative solutions"
  },
  {
    icon: <FiUsers size={sizes.icon.md} />,
    skill: "Team Leadership",
    description: "Guiding and empowering teams"
  },
  {
    icon: <FiMessageSquare size={sizes.icon.md} />,
    skill: "Communication",
    description: "Clear and effective collaboration"
  },
  {
    icon: <FiTarget size={sizes.icon.md} />,
    skill: "Project Management",
    description: "Delivering results on time"
  },
  {
    icon: <FiClock size={sizes.icon.md} />,
    skill: "Time Management",
    description: "Efficient task prioritization"
  },
  {
    icon: <FiAward size={sizes.icon.md} />,
    skill: "Adaptability",
    description: "Embracing change and learning"
  },
  {
    icon: <FiRefreshCw size={sizes.icon.md} />,
    skill: "Agile Mindset",
    description: "Iterative improvement focus"
  },
  {
    icon: <FiTrendingUp size={sizes.icon.md} />,
    skill: "Growth Mindset",
    description: "Continuous self-improvement"
  }
]

export default function Skills() {
  const skills = useSkillsConfig()
  const { technical } = skills

  const iconSlugs = technical.map(skill => convertToSimpleIconSlug(skill.icon))

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
              {softSkillsDetails.map((item, index) => (
                <SoftSkillCard key={item.skill} item={item} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
