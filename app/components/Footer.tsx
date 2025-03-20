'use client'
import { useUserConfig } from '../context/ConfigContext'
import Avatar from './Avatar'

export default function Footer() {
  const { name } = useUserConfig()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Avatar and Name */}
          <div className="flex items-center space-x-3">
            <Avatar size={48} />
            <span className="text-xl font-medium gradient-text">{name}</span>
          </div>

          {/* Links and Copyright */}
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 dark:text-gray-300">Built with</span>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                Next.js
              </a>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} {name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
