'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Download, ArrowRight, Rocket } from 'lucide-react'
import { PortfolioShell } from '@/components/portfolio-shell'
import { PageIntro } from '@/components/page-intro'
import { EducationCard } from '@/components/education-card'
import { TechStack } from '@/components/tech-stack'
import { CollaborationCta } from '@/components/collaboration-cta'
import { CustomPhotoSlot } from '@/components/custom-photo-slot'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <PortfolioShell section="about">
      <PageIntro
        label="PROFILE & BIOGRAPHY"
        title="ABOUT"
        accent="ME"
        description="Software engineer focused on building reliable, scalable, and maintainable solutions."
      />

      {/* Hero Profile Section */}
      <section className="about-grid" aria-labelledby="about-title">
        {/* Left Column: Photo Card */}
        <div className="about-visual-column">
          <CustomPhotoSlot />
        </div>

        {/* Right Column: Bio Content */}
        <div className="about-main-column">
          <motion.article
            className="neo-card about-card"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="about-card-body">
              <p className="hero-welcome-text">
                WELCOME TO MY PORTFOLIO
              </p>

              <h2 id="about-title" className="about-hero-title">
                Hi, I'm Farid Chairul Azhar.
              </h2>

              <p className="about-lead-desc">
                I'm an Informatics Engineering graduate with a background in web development, databases, and data.
                Most of my experience comes from working on freelance and academic projects, building web applications,
                managing databases, and processing data using tools like Laravel, PHP, MySQL, SQL, and Python.
              </p>
            </div>

            <div className="about-hero-actions">
              <Link href="/contact" className="neo-button hubungi-btn" id="btn-contact">
                Contact Me <Rocket aria-hidden="true" style={{ width: 16, height: 16 }} />
              </Link>
              <Link href="/experience" className="profile-action-btn experience-btn" id="btn-experience">
                View Work Experience <ArrowRight aria-hidden="true" style={{ width: 15, height: 15 }} />
              </Link>
            </div>
          </motion.article>

          {/* Action Buttons: Download CV, GitHub, LinkedIn — OUTSIDE and BELOW the card */}
          <div className="profile-social-actions about-external-actions">
            <a
              href="/profile/CV_Farid_Chairul_Azhar.pdf"
              download="CV_Farid_Chairul_Azhar.pdf"
              className="profile-action-btn btn-download"
              id="btn-download-cv"
            >
              <Download aria-hidden="true" style={{ width: 15, height: 15 }} />
              Download CV
            </a>
            <a
              href="https://github.com/Farchairul"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-action-btn"
              id="btn-github"
            >
              <GithubIcon aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/farid-chairul-azhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-action-btn"
              id="btn-linkedin"
            >
              <LinkedInIcon aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <EducationCard />

      {/* Tech Stack 3 Columns */}
      <TechStack />

      {/* Collaboration Banner */}
      <CollaborationCta />
    </PortfolioShell>
  )
}
