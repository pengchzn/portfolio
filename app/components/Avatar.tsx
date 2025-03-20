'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type AvatarProps = {
  size?: number
  className?: string
  onClick?: () => void
}

export default function Avatar({ size = 40, className = '', onClick }: AvatarProps) {
  return (
    <motion.div
      className={`rounded-full overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1 }}
      whileTap={onClick ? { scale: 0.95 } : undefined}
      onClick={onClick}
    >
      <Image
        src="/assets/avatar.png"
        alt="avatar"
        width={size}
        height={size}
        className="object-cover w-full h-full"
      />
    </motion.div>
  )
}
