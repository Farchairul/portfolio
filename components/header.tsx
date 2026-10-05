'use client'

import { useState, useEffect } from 'react'
import { Rocket, UserRound, BriefcaseBusiness, FolderKanban, Award, Mail, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
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
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navItems = [
    { label: 'About', key: 'about', href: '#about' },
    { label: 'Experience', key: 'experience', href: '#experience' },
    { label: 'Projects', key: 'projects', href: '#projects' },
    { label: 'Certificates', key: 'certificates', href: '#certificates' },
    { label: 'Contact', key: 'contact', href: '#contact' },
  ] as const

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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

      {/* Desktop Navigation */}
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

      {/* Header Actions */}
      <div className="header-actions">
        <ThemeToggle />
        <a
          href="#contact"
          className="neo-button hire-button desktop-only-hire"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Hire Me <Rocket aria-hidden="true" />
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="neo-mobile-menu-toggle"
          aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="neo-mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav className="mobile-nav-list" aria-label="Mobile navigation">
              {navItems.map(({ label, key, href }) => {
                const Icon = navIcons[key]
                const isActive = currentSection === key
                return (
                  <a
                    key={key}
                    href={href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    <div className="mobile-nav-icon-wrap">
                      <Icon aria-hidden="true" />
                    </div>
                    <span className="mobile-nav-label">{label}</span>
                  </a>
                )
              })}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href="#contact"
                className="neo-button mobile-hire-btn"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Hire Me <Rocket aria-hidden="true" style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
