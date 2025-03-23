'use client'
import { createContext, useContext } from 'react'
import type { Config } from '../types'
import { defaultConfig } from '../config'

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
  const config = useContext(ConfigContext)
  if (!config) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }
  return config
}

// Export convenience hooks for different config sections
export const useUserConfig = () => useConfig().user
export const useSocialConfig = () => useConfig().social
export const useProjectsConfig = () => useConfig().projects
export const useSkillsConfig = () => useConfig().skills
export const useSiteConfig = () => useConfig().site
