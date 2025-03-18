'use client'
import { useUserConfig } from '../context/ConfigContext'

export default function Footer() {
  const { name } = useUserConfig()
  
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto py-8 text-center">
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <span>Built with</span>
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
    </footer>
  )
}
