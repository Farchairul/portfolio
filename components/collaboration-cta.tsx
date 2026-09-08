import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CollaborationCta() {
  return (
    <section className="collaboration-cta-wrapper">
      <div className="collaboration-cta-card">
        <div className="collaboration-cta-text">
          <h3>Have a Project or Want to Collaborate?</h3>
          <p>I'm always open to discussing new opportunities and building great things together.</p>
        </div>
        <Link href="/contact" className="collaboration-cta-button">
          Contact Me Now <ArrowRight aria-hidden="true" style={{ width: 18, height: 18 }} />
        </Link>
      </div>
    </section>
  )
}
