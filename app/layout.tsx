import './globals.css'
import type { Metadata } from 'next'
import { getServerConfig } from './config/server'
import { ConfigProvider } from './context/ConfigContext'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './components/Footer'

export async function generateMetadata(): Promise<Metadata> {
  const config = await getServerConfig()
  return {
    title: config?.site?.meta?.title ?? 'Portfolio',
    description: config?.site?.meta?.description ?? '',
    keywords: config?.site?.meta?.keywords ?? '',
    openGraph: {
      images: config?.site?.meta?.ogImage ? [config.site.meta.ogImage] : [],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const config = await getServerConfig()
  const fontFamily = config?.site?.fonts?.default 
    ? `${config.site.fonts.default}, ${config.site.fonts.alternatives?.join(', ') ?? 'system-ui, sans-serif'}`
    : 'maple-mono, system-ui, sans-serif'
  
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="/fonts/maple-mono/MapleMonoRegular.ttf" 
          as="font" 
          type="font/ttf" 
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
