import type { Metadata } from 'next'
import { PortfolioShell } from '@/components/portfolio-shell'
import { PageIntro } from '@/components/page-intro'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Farid Chairul Azhar for project discussions, collaboration, and professional opportunities.',
}

export default function ContactPage() {
  return (
    <PortfolioShell section="contact">
      <PageIntro
        label="GET IN TOUCH"
        title="LET'S"
        accent="CONNECT"
        description="Let’s get coffee and talk about what we can build together."
      />
      <section className="content-section contact-section">
        <div className="contact-hero-rule" />
        <ContactContent />
      </section>
    </PortfolioShell>
  )
}
