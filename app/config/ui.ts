import { MotionProps } from 'framer-motion'

// 共用类型定义
export type IconProps = {
  size?: number
  className?: string
}

export type AnimationDelay = {
  delay?: number
}

// 共用动画配置
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  },
  scale: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  },
  rotate: {
    hover: { rotate: 360 },
    transition: { duration: 0.5 }
  }
} as const

// 共用样式类名
export const styles = {
  defaultText: 'text-gray-600 dark:text-gray-300',
  gradientText: 'gradient-text',
  glassEffect: 'glass-effect',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  flexCenter: 'flex items-center justify-center',
  linkTransition: 'transition-colors duration-200'
} as const

// 共用尺寸
export const sizes = {
  icon: {
    sm: 20,
    md: 24,
    lg: 32
  },
  avatar: {
    sm: 32,
    md: 40,
    lg: 48
  }
} as const
