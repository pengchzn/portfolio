'use client'
import { createContext, useContext } from 'react'
import type { Config } from '../types'
import { defaultConfig } from '../config'

const ConfigContext = createContext<Config>(defaultConfig)

export function ConfigProvider({ 
  children, 
  config 
}: { 
  children: React.ReactNode
  config?: Config 
}) {
  return (
    <ConfigContext.Provider value={config ?? defaultConfig}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext)
}

// Export convenience hooks for different config sections
export const useUserConfig = () => useConfig().user ?? defaultConfig.user
export const useSocialConfig = () => useConfig().social ?? defaultConfig.social
export const useProjectsConfig = () => useConfig().projects ?? defaultConfig.projects
export const useSkillsConfig = () => useConfig().skills ?? defaultConfig.skills
export const useSiteConfig = () => useConfig().site ?? defaultConfig.site
