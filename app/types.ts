export type ThemeColor = string | {
  light: string
  dark: string
}

export interface Skill {
  name: string
  icon: string
  color: ThemeColor
  level: number
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

export interface Config {
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
    technical: Skill[]
    soft: string[]
  }
  site: {
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
