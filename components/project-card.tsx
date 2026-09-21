'use client'

import { motion } from 'motion/react'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { Project } from '@/types/portfolio'
import { ProjectVideoPreview } from '@/components/project-video-preview'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasActions = project.liveUrl || project.githubUrl || project.previewVideoUrl

  return (
    <motion.article
      className="neo-card project-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
    >
      <div className="project-top-row">
        <span className="mono-label">{project.category}</span>
        <span className="project-number-badge">0{index + 1}</span>
      </div>

      <div className="project-heading">
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
      </div>

      {project.description && <p className="project-desc">{project.description}</p>}

      <div className="project-highlights-box">
        <span className="highlights-header-label">CORE HIGHLIGHTS:</span>
        <ul className="highlights-list">
          {project.highlights.map((h, i) => (
            <motion.li
              key={i}
              className="highlight-interactive-item"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            >
              <CheckCircle2 aria-hidden="true" className="highlight-check-icon" />
              <span>{h}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="project-tags-wrapper">
        <span className="highlights-header-label">TOOLS &amp; TECHNOLOGIES:</span>
        <div className="project-tags-row">
          {project.tags.map((t) => (
            <motion.span
              key={t}
              className="tech-pill-tag"
              whileHover={{ y: -3, scale: 1.08, borderColor: 'var(--coral)' }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 450, damping: 20 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {hasActions && (
        <div className="project-actions-row">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-btn">
              Live Preview <ExternalLink aria-hidden="true" style={{ width: 14, height: 14 }} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-git-btn">
              <GithubIcon aria-hidden="true" /> Source Code
            </a>
          )}
          {project.previewVideoUrl && (
            <ProjectVideoPreview videoUrl={project.previewVideoUrl} projectTitle={project.title} />
          )}
        </div>
      )}
    </motion.article>
  )
}
