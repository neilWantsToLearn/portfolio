export interface Artwork {
  id: string
  title: string
  category: 'pets' | 'portraits' | 'stickers'
  categoryLabel: string
  image: string
  description: string
  tools: string
  dimensions?: string
  highlights: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  category: 'fullstack' | 'frontend' | 'creative'
  role: string
  image: string
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  metrics?: { label: string; value: string }[]
  keyFeatures: { title: string; desc: string }[]
  techStack: { category: string; items: string[] }[]
}

export interface SkillCategory {
  title: string
  icon: string
  description: string
  skills: { name: string; level: string; icon?: string }[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  instructor?: string
  image: string
  pdfUrl?: string
  description: string
  skills: string[]
}
