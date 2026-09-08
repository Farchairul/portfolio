export type PageSection = 'about' | 'experience' | 'projects' | 'certificates' | 'contact'

export type SkillGroup = {
  title: string
  label: string
  items: string[]
}

export type ExperienceAction = {
  type: 'production' | 'demo'
  tag: string
  title: string
  buttonText: string
  url?: string
}

export type Experience = {
  company: string
  role: string
  location?: string
  period: string
  description?: string
  actions?: ExperienceAction[]
  highlights: string[]
  tags: string[]
}

export type OrganizationExperience = {
  organization: string
  role: string
  location?: string
  period: string
  description?: string
  highlights: string[]
  tags?: string[]
}

export type Project = {
  id: string
  title: string
  tagline: string
  category: string
  description?: string
  highlights: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

export type Certificate = {
  badge?: { label: string; styleClass: string }
  year?: string
  date: string
  title: string
  issuer: string
  certNo: string
  regNo?: string
  description?: string
  competencies?: string[]
  image: string
  page2Image?: string
  pdfUrl?: string
}
