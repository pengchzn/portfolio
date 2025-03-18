'use client'
import { createContext, useContext } from 'react'
import type { Config } from '../types'

const ConfigContext = createContext<Config | null>(null)

export function ConfigProvider({ 
  children, 
  config 
}: { 
  children: React.ReactNode
  config: Config 
}) {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }
  return context
}

// Export convenience hooks for different config sections
export const useUserConfig = (): Config['user'] => useConfig().user
export const useSocialConfig = (): Config['social'] => useConfig().social
export const useProjectsConfig = (): Config['projects'] => useConfig().projects
export const useSkillsConfig = (): Config['skills'] => useConfig().skills
export const useSiteConfig = (): Config['site'] => useConfig().site
