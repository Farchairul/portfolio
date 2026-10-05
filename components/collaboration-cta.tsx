'use client'

import { ArrowRight } from 'lucide-react'

export function CollaborationCta() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="collaboration-cta-wrapper">
      <div className="collaboration-cta-card">
        <div className="collaboration-cta-text">
          <h3>Have a Project or Want to Collaborate?</h3>
          <p>I'm always open to discussing new opportunities and building great things together.</p>
        </div>
        <a href="#contact" className="collaboration-cta-button" onClick={handleClick}>
          Contact Me Now <ArrowRight aria-hidden="true" style={{ width: 18, height: 18 }} />
        </a>
      </div>
    </section>
  )
}
