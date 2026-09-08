import { Metadata } from 'next'
import { PortfolioShell } from '@/components/portfolio-shell'
import { PageIntro } from '@/components/page-intro'
import { ExperienceContent } from '@/components/experience-content'
import { CollaborationCta } from '@/components/collaboration-cta'
import { experiences, organizationExperiences } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Work Experience',
  description: 'My experience and work in software development',
}

export default function ExperiencePage() {
  return (
    <PortfolioShell section="experience">
      <PageIntro
        label="WORK HISTORY"
        title="WORK"
        accent="EXPERIENCE"
        description="My experience and work in software development"
      />

      <ExperienceContent
        experiences={experiences}
        organizations={organizationExperiences}
      />

      <CollaborationCta />
    </PortfolioShell>
  )
}
