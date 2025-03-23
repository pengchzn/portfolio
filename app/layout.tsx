import './globals.css'
import type { Metadata } from 'next'
import { getServerConfig } from './config/server'
import { ConfigProvider } from './context/ConfigContext'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './components/Footer'
import type { FontConfig } from './types'

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
  const fontConfig = config.site.fonts[config.site.fonts.default]
  
  // Type guard to check if the value is a FontConfig
  const isFontConfig = (value: any): value is FontConfig => {
    return value && 'src' in value && 'weight' in value && 'style' in value && 'display' in value
  }
  
  return (
    <html lang="en">
      <head>
        {isFontConfig(fontConfig) && (
          <style dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: '${config.site.fonts.default}';
                src: url('${fontConfig.src[0].path}') format('${fontConfig.src[0].format}');
                font-weight: ${fontConfig.weight};
                font-style: ${fontConfig.style};
                font-display: ${fontConfig.display};
              }
            `
          }} />
        )}
        {isFontConfig(fontConfig) && (
          <link 
            rel="preload" 
            href={fontConfig.src[0].path}
            as="font" 
            type="font/woff2" 
            crossOrigin="anonymous"
          />
        )}
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
