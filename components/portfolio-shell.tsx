'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageSection } from '@/types/portfolio'

export function PortfolioShell({
  section,
  children,
}: {
  section: PageSection
  children: ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="neo-shell">
        <Header currentSection={section} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
