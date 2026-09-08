import { Metadata } from 'next'
import { PortfolioShell } from '@/components/portfolio-shell'
import { PageIntro } from '@/components/page-intro'
import { ProjectCard } from '@/components/project-card'
import { CollaborationCta } from '@/components/collaboration-cta'
import { projects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of software projects I’ve built and worked on',
}

export default function ProjectsPage() {
  return (
    <PortfolioShell section="projects">
      <PageIntro
        label="SELECTED WORKS"
        title="FEATURED"
        accent="PROJECTS"
        description="A selection of software projects I’ve built and worked on"
      />

      <section className="content-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <CollaborationCta />
    </PortfolioShell>
  )
}
