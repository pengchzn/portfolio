export interface Skill {
  name: string
  icon: string
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

export interface GithubSnakeTheme {
  color_snake: string
  color_dots: string
  color_grid: string
  color_contributions: string
}

export interface Config {
  githubSnake?: {
    enabled: boolean
    username: string
    theme: {
      light: GithubSnakeTheme
      dark: GithubSnakeTheme
    }
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
    technical: Skill[]
    soft: string[]
  }
  site: {
    fonts: {
      default: string
      alternatives: string[]
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
