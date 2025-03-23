'use client'
import { memo } from 'react'
import { useUserConfig } from '../context/ConfigContext'
import Avatar from './Avatar'

const avatarSize = 48
const defaultTextStyle = 'text-gray-600 dark:text-gray-300'

const ExternalLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${defaultTextStyle} hover:text-gray-900 dark:hover:text-white transition-colors`}
  >
    {children}
  </a>
))
ExternalLink.displayName = 'ExternalLink'

const Footer = () => {
  const { name } = useUserConfig()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3">
            <Avatar size={avatarSize} />
            <span className="text-xl font-medium gradient-text">{name}</span>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-2">
              <span className={defaultTextStyle}>Built with</span>
              <ExternalLink href="https://nextjs.org">Next.js</ExternalLink><span className={defaultTextStyle}>&</span><ExternalLink href="https://vercel.com">Vercel</ExternalLink>

            </div>
            <div className={`text-sm ${defaultTextStyle}`}>
              © {currentYear} {name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
