import type { Config } from '../types'
export type { Config }

// Helper function to get theme gradient variables
export const getThemeGradient = (config: Config, isDark: boolean = false) => {
  const { gradients } = config.site.theme
  const colors = isDark ? gradients.dark : gradients.light
  return `linear-gradient(45deg, ${colors.from}, ${colors.to})`
}

// Placeholder config for type checking and development
export const defaultConfig: Config = {
  githubSnake: { enabled: false, username: '' },
  user: {
    name: '',
    title: '',
    location: '',
    email: '',
    bio: ''
  },
  social: {
    github: '',
    linkedin: '',
    twitter: '',
    instagram: ''
  },
  projects: [],
  skills: {
    technical: [],
    soft: []
  },
  site: {
    fonts: {
      default: 'system-ui',
      alternatives: ['sans-serif']
    },
    theme: {
      gradients: {
        light: { from: '', to: '' },
        dark: { from: '', to: '' }
      },
      background: '',
      text: ''
    },
    meta: {
      title: '',
      description: '',
      keywords: '',
      ogImage: ''
    },
    features: {
      darkMode: true,
      animations: true,
      contactForm: false,
      newsletter: false,
      blog: false
    },
    navigation: []
  }
}
