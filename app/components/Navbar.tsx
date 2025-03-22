'use client'
import { motion } from 'framer-motion'
import { useState, memo } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useUserConfig, useSiteConfig } from '../context/ConfigContext'
import type { NavigationItem } from '../types'
import { ThemeToggle } from './ThemeToggle'
import Avatar from './Avatar'
import { animations, styles, sizes } from '../config/ui'

type NavLinkProps = {
  item: NavigationItem
  isMobile?: boolean
  onClick?: () => void
}

const MenuButton = memo(({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`${styles.defaultText} hover:text-gray-900 dark:hover:text-white p-2`}
  >
    {isOpen ? <FiX size={sizes.icon.md} /> : <FiMenu size={sizes.icon.md} />}
  </button>
))
MenuButton.displayName = 'MenuButton'

const NavLink = memo(({ item, isMobile, onClick }: NavLinkProps) => (
  <motion.a
    href={item.path}
    className={`${styles.defaultText} hover:text-gray-900 dark:hover:text-white ${
      isMobile
        ? 'block px-3 py-2 rounded-md text-base font-medium'
        : 'px-3 py-2 rounded-md text-sm font-medium'
    }`}
    whileHover={animations.scale.hover}
    whileTap={animations.scale.tap}
    onClick={onClick}
  >
    {item.label}
  </motion.a>
))
NavLink.displayName = 'NavLink'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const siteConfig = useSiteConfig()
  const userConfig = useUserConfig()
  const menuItems = siteConfig?.navigation ?? []
  const name = userConfig?.name ?? ''

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.nav 
      className={`fixed w-full z-50 ${styles.glassEffect}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={scrollToTop}
          >
            <Avatar onClick={scrollToTop} />
            <span className={`text-2xl font-bold ${styles.gradientText}`}>{name}</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map(item => (
                <NavLink key={item.label} item={item} />
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Theme Toggle and Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            {...animations.fadeInUp}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(item => (
                <NavLink 
                  key={item.label} 
                  item={item} 
                  isMobile 
                  onClick={() => setIsOpen(false)} 
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default memo(Navbar)
