'use client'

import { Rocket, UserRound, BriefcaseBusiness, FolderKanban, Award, Mail } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { PageSection } from '@/types/portfolio'

const navIcons = {
  about: UserRound,
  experience: BriefcaseBusiness,
  projects: FolderKanban,
  certificates: Award,
  contact: Mail,
}

export function Header({ currentSection }: { currentSection?: PageSection }) {
  const navItems = [
    { label: 'About', key: 'about', href: '#about' },
    { label: 'Experience', key: 'experience', href: '#experience' },
    { label: 'Projects', key: 'projects', href: '#projects' },
    { label: 'Certificates', key: 'certificates', href: '#certificates' },
    { label: 'Contact', key: 'contact', href: '#contact' },
  ] as const

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="neo-header">
      <a
        href="#about"
        className="neo-brand"
        aria-label="Farid Chairul Azhar home"
        onClick={(e) => handleNavClick(e, '#about')}
      >
        <span className="terminal-mark" aria-hidden="true">›_</span>
        <span className="brand-name">FARID<span>CHAIRUL</span></span>
      </a>

      <nav className="neo-nav" aria-label="Main navigation">
        {navItems.map(({ label, key, href }) => {
          const Icon = navIcons[key]
          const isActive = currentSection === key
          return (
            <a
              key={key}
              href={href}
              className={isActive ? 'active' : ''}
              onClick={(e) => handleNavClick(e, href)}
            >
              <Icon aria-hidden="true" />
              {label}
            </a>
          )
        })}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <a
          href="#contact"
          className="neo-button hire-button"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Hire Me <Rocket aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
