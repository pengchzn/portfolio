export interface TechnicalSkill {
  name: string
  icon: string
}

export interface SoftSkill {
  name: string
  icon: string
  description: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
  featured: boolean
}

export interface NavigationItem {
  label: string
  path: string
}

export interface FontConfig {
  src: Array<{
    path: string
    format: string
  }>
  weight: string
  style: string
  display: string
}

export interface Config {
  githubSnake?: {
    enabled: boolean
    username: string
  }
  user: {
    name: string
    title: string
    location: string
    email: string
    bio: string
  }
  social: {
    github: string
    linkedin: string
    twitter: string
    instagram: string
  }
  projects: Project[]
  skills: {
    technical: TechnicalSkill[]
    soft: SoftSkill[]
  }
  site: {
    fonts: {
      default: string
      alternatives: string[]
      [key: string]: FontConfig | string | string[]
    }
    theme: {
      gradients: {
        light: {
          from: string
          to: string
        }
        dark: {
          from: string
          to: string
        }
      }
      background: string
      text: string
    }
    meta: {
      title: string
      description: string
      keywords: string
      ogImage: string
    }
    features: {
      darkMode: boolean
      animations: boolean
      contactForm: boolean
      newsletter: boolean
      blog: boolean
    }
    navigation: NavigationItem[]
  }
}
