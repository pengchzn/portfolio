'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  const socialLinks = [
    { icon: <FiGithub size={24} />, url: '#', label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, url: '#', label: 'LinkedIn' },
    { icon: <FiMail size={24} />, url: '#', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="floating"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Luoshen</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            A passionate software engineer dedicated to crafting elegant solutions through code
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="glass-effect px-8 py-3 rounded-full text-white font-medium hover:bg-opacity-90 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
