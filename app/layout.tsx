import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { getSiteConfig } from './config'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata(): Metadata {
  const { meta } = getSiteConfig()
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      images: [meta.ogImage],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
