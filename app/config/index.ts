import type { Config } from '../types'
export type { Config }

// Default configuration
export const defaultConfig: Config = {
  user: {
    name: "Luoshen",
    title: "Software Engineer",
    location: "San Francisco, CA",
    email: "your.email@example.com",
    bio: "A passionate software engineer dedicated to crafting elegant solutions through code"
  },
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
  },
  projects: [
    {
      title: "AI Chatbot Platform",
      description: "An intelligent conversational AI platform built with Next.js and OpenAI API, featuring real-time responses and conversation history.",
      tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
      image: "/projects/chatbot.png",
      github: "https://github.com/yourusername/ai-chatbot",
      demo: "https://demo-url.com/chatbot",
      featured: true
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for managing online store operations, featuring real-time analytics and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Docker"],
      image: "/projects/dashboard.png",
      github: "https://github.com/yourusername/ecommerce-dashboard",
      demo: "https://demo-url.com/dashboard",
      featured: true
    },
    {
      title: "Task Management System",
      description: "A collaborative task management solution with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tags: ["React", "Firebase", "Material-UI", "TypeScript"],
      image: "/projects/taskmanager.png",
      github: "https://github.com/yourusername/task-manager",
      demo: "https://demo-url.com/tasks",
      featured: true
    }
  ],
  skills: {
    technical: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Python", icon: "SiPython" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Docker", icon: "SiDocker" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Redis", icon: "SiRedis" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "AWS", icon: "SiAmazonaws" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "TailwindCSS", icon: "SiTailwindcss" },
      { name: "GraphQL", icon: "SiGraphql" }
    ],
    soft: ["Problem Solving", "Team Leadership", "Communication", "Project Management"]
  },
  site: {
    theme: {
      gradients: {
        light: {
          from: "#4F46E5",
          to: "#06B6D4"
        },
        dark: {
          from: "#00DC82",
          to: "#36E4DA"
        }
      },
      background: "#000000",
      text: "#FFFFFF"
    },
    meta: {
      title: "Luoshen - Portfolio",
      description: "Welcome to my personal portfolio showcasing my work and skills in software development",
      keywords: "software engineer, web developer, full-stack developer, react developer",
      ogImage: "/og-image.png"
    },
    features: {
      darkMode: true,
      animations: true,
      contactForm: true,
      newsletter: false,
      blog: false
    },
    navigation: [
      { label: "Home", path: "/" },
      { label: "Skills", path: "#skills" },
      { label: "Projects", path: "#projects" },
      { label: "Contact", path: "#contact" }
    ]
  }
}

// Export individual config sections for convenience
export const getUserConfig = () => defaultConfig.user
export const getSocialConfig = () => defaultConfig.social
export const getProjectsConfig = () => defaultConfig.projects
export const getSkillsConfig = () => defaultConfig.skills
export const getSiteConfig = () => defaultConfig.site

// Helper function to get theme gradient variables
export const getThemeGradient = (isDark: boolean = false) => {
  const { gradients } = defaultConfig.site.theme
  const colors = isDark ? gradients.dark : gradients.light
  return `linear-gradient(45deg, ${colors.from}, ${colors.to})`
}
