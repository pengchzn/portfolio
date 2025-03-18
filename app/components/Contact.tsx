'use client'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { useUserConfig, useSocialConfig } from '../context/ConfigContext'

export default function Contact() {
  const user = useUserConfig()
  const social = useSocialConfig()

  const contactMethods = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      description: 'Let\'s discuss your project',
      action: 'Send a message',
      link: `mailto:${user.email}`
    },
    {
      icon: <FiGithub size={24} />,
      title: 'GitHub',
      description: 'Check out my repositories',
      action: 'View Profile',
      link: social.github
    },
    {
      icon: <FiLinkedin size={24} />,
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      action: 'Connect',
      link: social.linkedin
    },
    {
      icon: <FiInstagram size={24} />,
      title: 'Instagram',
      description: 'Follow my journey',
      action: 'Follow',
      link: social.instagram
    }
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
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-lg text-center"
            >
              <motion.div
                className="inline-block p-3 rounded-full glass-effect mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {method.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <motion.a
                href={method.link}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{method.action}</span>
                <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300">
            Based in <span className="text-white font-medium">{user.location}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
