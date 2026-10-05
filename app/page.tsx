'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Download, ArrowRight, Rocket } from 'lucide-react'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageIntro } from '@/components/page-intro'
import { CustomPhotoSlot } from '@/components/custom-photo-slot'
import { EducationCard } from '@/components/education-card'
import { TechStack } from '@/components/tech-stack'
import { ExperienceContent } from '@/components/experience-content'
import { ProjectCard } from '@/components/project-card'
import { CertificateCard, CertificateModal } from '@/components/certificate-card'
import { ContactContent } from '@/components/contact-content'
import { CollaborationCta } from '@/components/collaboration-cta'
import { experiences, organizationExperiences, projects, certificates } from '@/lib/data'
import { Certificate, PageSection } from '@/types/portfolio'

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

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<PageSection>('about')
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  // Track active section based on scroll position
  useEffect(() => {
    const sections: PageSection[] = ['about', 'experience', 'projects', 'certificates', 'contact']
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle certificate modal keyboard dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedCert])

  return (
    <ThemeProvider>
      <div className="neo-shell">
        <Header currentSection={activeSection} />
        <main>

          {/* ═══════════ ABOUT SECTION ═══════════ */}
          <div id="about">
            <PageIntro
              label="PROFILE & BIOGRAPHY"
              title="ABOUT"
              accent="ME"
              description="Software engineer focused on building reliable, scalable, and maintainable solutions."
            />

            <section className="about-grid" aria-labelledby="about-title">
              <div className="about-visual-column">
                <CustomPhotoSlot />

                <div className="profile-social-actions">
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
                      I'm an Informatics Engineering graduate from Gunadarma University (GPA 3.51/4.00) with a strong focus on <strong>data analysis</strong> and business intelligence. During my 5-month internship at <strong>VINIX7</strong>, I processed over 5,500 outpatient records and built interactive Tableau dashboards that surfaced critical operational insights revealing that 27.7% of patient visits faced wait times over 60 minutes.
                    </p>

                    <p className="about-sub-desc" style={{ marginTop: '14px' }}>
                      My core stack centers on <strong>SQL, Python, Tableau, and Excel</strong>. Alongside data analytics, I developed an ECG-based heart disease classifier on 21,000 records (PTB-XL) achieving 85.16% accuracy for my thesis. I also bring practical leadership and collaboration experience from heading student events, coordinating 14 media partners, and managing programs for 640+ attendees.
                    </p>
                  </div>

                  <div className="about-hero-actions">
                    <a href="#contact" className="neo-button hubungi-btn" id="btn-contact">
                      Contact Me <Rocket aria-hidden="true" style={{ width: 16, height: 16 }} />
                    </a>
                    <a href="#experience" className="profile-action-btn experience-btn" id="btn-experience">
                      View Work Experience <ArrowRight aria-hidden="true" style={{ width: 15, height: 15 }} />
                    </a>
                  </div>
                </motion.article>
              </div>
            </section>

            <EducationCard />
            <TechStack />
          </div>

          {/* ═══════════ EXPERIENCE SECTION ═══════════ */}
          <div id="experience" className="single-page-section">
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
          </div>

          {/* ═══════════ PROJECTS SECTION ═══════════ */}
          <div id="projects" className="single-page-section">
            <PageIntro
              label="SELECTED WORKS"
              title="FEATURED"
              accent="PROJECTS"
              description="A selection of software projects I've built and worked on"
            />

            <section className="content-section">
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </section>
          </div>

          {/* ═══════════ CERTIFICATES SECTION ═══════════ */}
          <div id="certificates" className="single-page-section">
            <PageIntro
              label="CREDENTIALS & LICENSES"
              title="CERTIFICATES"
              description="Certificates from courses and learning programs I've completed."
            />

            <section className="content-section">
              <div className="certificates-grid">
                {certificates.map((item, index) => (
                  <CertificateCard
                    key={item.title + item.certNo}
                    item={item}
                    index={index}
                    onOpenModal={setSelectedCert}
                  />
                ))}
              </div>
            </section>

            {selectedCert && (
              <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
            )}
          </div>

          {/* ═══════════ CONTACT SECTION ═══════════ */}
          <div id="contact" className="single-page-section">
            <PageIntro
              label="GET IN TOUCH"
              title="LET'S"
              accent="CONNECT"
              description="Let's get coffee and talk about what we can build together."
            />
            <section className="content-section contact-section">
              <div className="contact-hero-rule" />
              <ContactContent />
            </section>
          </div>

          {/* ═══════════ CTA BANNER ═══════════ */}
          <CollaborationCta />

        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
