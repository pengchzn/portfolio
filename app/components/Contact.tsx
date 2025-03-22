'use client'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { useUserConfig, useSocialConfig } from '../context/ConfigContext'
import AnimatedSection from './AnimatedSection'
import { animations, styles, sizes } from '../config/ui'

type ContactMethod = {
  icon: JSX.Element
  title: string
  description: string
  action: string
  link: string
}

const ContactMethodCard = ({ method, index }: { method: ContactMethod; index: number }) => (
  <AnimatedSection key={method.title} delay={index * 0.1}>
    <div className={`${styles.glassEffect} p-6 rounded-lg text-center h-full`}>
      <motion.div
        className={`inline-block p-3 rounded-full ${styles.glassEffect} mb-4`}
        whileHover={animations.rotate.hover}
        transition={animations.rotate.transition}
      >
        {method.icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
      <p className={`${styles.defaultText} mb-4`}>{method.description}</p>
      <motion.a
        href={method.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 ${styles.linkTransition}`}
        whileHover={animations.scale.hover}
        whileTap={animations.scale.tap}
      >
        <span>{method.action}</span>
        <span>→</span>
      </motion.a>
    </div>
  </AnimatedSection>
)

export default function Contact() {
  const { email, location } = useUserConfig()
  const social = useSocialConfig()

  const contactMethods: ContactMethod[] = [
    {
      icon: <FiMail size={sizes.icon.md} />,
      title: 'Email',
      description: 'Let\'s discuss your project',
      action: 'Send a message',
      link: `mailto:${email}`
    },
    {
      icon: <FiGithub size={sizes.icon.md} />,
      title: 'GitHub',
      description: 'Check out my repositories',
      action: 'View Profile',
      link: social.github
    },
    {
      icon: <FiLinkedin size={sizes.icon.md} />,
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      action: 'Connect',
      link: social.linkedin
    },
    {
      icon: <FiInstagram size={sizes.icon.md} />,
      title: 'Instagram',
      description: 'Follow my journey',
      action: 'Follow',
      link: social.instagram
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className={styles.container}>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className={styles.gradientText}>Touch</span>
          </h2>
          <p className={`${styles.defaultText} text-lg max-w-2xl mx-auto`}>
            Have a project in mind? Let's create something amazing together
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <ContactMethodCard key={method.title} method={method} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <p className={styles.defaultText}>
            Based in <span className="text-gray-900 dark:text-white font-medium">{location}</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
