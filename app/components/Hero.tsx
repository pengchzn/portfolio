'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'
import { useUserConfig, useSocialConfig } from '../context/ConfigContext'
import AnimatedSection from './AnimatedSection'
import { Config } from '../types'

export default function Hero() {
  const { name, bio, email } = useUserConfig()
  const social = useSocialConfig()
  
  const socialLinks = [
    { icon: <FiGithub size={24} />, url: social.github, label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, url: social.linkedin, label: 'LinkedIn' },
    { icon: <FiMail size={24} />, url: `mailto:${email}`, label: 'Email' },
    { icon: <FiInstagram size={24} />, url: social.instagram, label: 'Instagram' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <AnimatedSection className="floating">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">{name}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
              {bio}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.a
              href="#projects"
              className="glass-effect px-8 py-3 rounded-full text-gray-900 dark:text-white font-medium hover:bg-opacity-90 transition-all duration-200 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
