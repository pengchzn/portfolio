import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { getServerConfig } from './config/server'
import { ConfigProvider } from './context/ConfigContext'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const config = await getServerConfig()
  const { meta } = config.site
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      images: [meta.ogImage],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const config = await getServerConfig()
  
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}>
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
