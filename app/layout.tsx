import './globals.css'
import type { Metadata } from 'next'
import { getServerConfig } from './config/server'
import { ConfigProvider } from './context/ConfigContext'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './components/Footer'

export async function generateMetadata(): Promise<Metadata> {
  const config = await getServerConfig()
  if (!config) throw new Error('Failed to load configuration')
  
  return {
    title: config.site.meta.title,
    description: config.site.meta.description,
    keywords: config.site.meta.keywords,
    openGraph: {
      images: config.site.meta.ogImage ? [config.site.meta.ogImage] : [],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const config = await getServerConfig()
  if (!config) throw new Error('Failed to load configuration')
  
  const fontFamily = `${config.site.fonts.default}, ${config.site.fonts.alternatives.join(', ')}`
  
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="/fonts/maple-mono/MapleMonoRegular.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
      </head>
      <body style={{fontFamily}} className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <ConfigProvider config={config}>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}
