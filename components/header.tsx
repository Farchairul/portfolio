'use client'

import Link from 'next/link'
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
    { label: 'About', key: 'about', href: '/about' },
    { label: 'Experience', key: 'experience', href: '/experience' },
    { label: 'Projects', key: 'projects', href: '/projects' },
    { label: 'Certificates', key: 'certificates', href: '/certificates' },
    { label: 'Contact', key: 'contact', href: '/contact' },
  ] as const

  return (
    <header className="neo-header">
      <Link href="/about" className="neo-brand" aria-label="Farid Chairul Azhar home">
        <span className="terminal-mark" aria-hidden="true">›_</span>
        <span className="brand-name">FARID<span>CHAIRUL</span></span>
      </Link>

      <nav className="neo-nav" aria-label="Main navigation">
        {navItems.map(({ label, key, href }) => {
          const Icon = navIcons[key]
          const isActive = currentSection === key
          return (
            <Link key={key} href={href} className={isActive ? 'active' : ''}>
              <Icon aria-hidden="true" />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <Link href="/contact" className="neo-button hire-button">
          Hire Me <Rocket aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}
