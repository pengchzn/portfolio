'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'
import { useUserConfig, useSocialConfig } from '../context/ConfigContext'
import AnimatedSection from './AnimatedSection'
import { animations, styles, sizes } from '../config/ui'

type SocialLink = {
  icon: JSX.Element
  url: string
  label: string
}

const SocialIcon = ({ link }: { link: SocialLink }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.defaultText} hover:text-gray-900 dark:hover:text-white ${styles.linkTransition}`}
    {...animations.fadeInUp}
    whileHover={animations.scale.hover}
    whileTap={animations.scale.tap}
  >
    {link.icon}
  </motion.a>
)

export default function Hero() {
  const { name, bio, email } = useUserConfig()
  const social = useSocialConfig()
  
  const socialLinks: SocialLink[] = [
    { icon: <FiGithub size={sizes.icon.md} />, url: social.github, label: 'GitHub' },
    { icon: <FiLinkedin size={sizes.icon.md} />, url: social.linkedin, label: 'LinkedIn' },
    { icon: <FiMail size={sizes.icon.md} />, url: `mailto:${email}`, label: 'Email' },
    { icon: <FiInstagram size={sizes.icon.md} />, url: social.instagram, label: 'Instagram' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className={styles.container}>
        <div className="flex flex-col items-center text-center space-y-8">
          <AnimatedSection className="floating">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className={styles.gradientText}>{name}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className={`text-xl md:text-2xl ${styles.defaultText} max-w-2xl`}>
              {bio}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex space-x-6">
              {socialLinks.map(link => (
                <SocialIcon key={link.label} link={link} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.a
              href="#projects"
              className={`${styles.glassEffect} px-8 py-3 rounded-full text-gray-900 dark:text-white font-medium hover:bg-opacity-90 ${styles.linkTransition} inline-block`}
              whileHover={animations.scale.hover}
              whileTap={animations.scale.tap}
            >
              View My Work
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
