'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { animations, AnimationDelay } from '../config/ui'

type AnimatedSectionProps = AnimationDelay & {
  children: React.ReactNode
  className?: string
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      initial={animations.fadeInUp.initial}
      animate={isInView ? animations.fadeInUp.animate : animations.fadeInUp.initial}
      transition={{ ...animations.fadeInUp.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
