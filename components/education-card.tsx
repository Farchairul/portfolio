'use client'

import { GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'

export function EducationCard() {
  return (
    <section className="content-section" aria-labelledby="education-title">
      <span className="neo-label">ACADEMIC BACKGROUND</span>
      <h2 id="education-title">Education </h2>
      <motion.article
        className="neo-card edu-minimal-card"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Header row: icon + university */}
        <div className="edu-header-row">
          <div className="icon-tile institution-icon">
            <GraduationCap aria-hidden="true" />
          </div>
          <div className="edu-header-info">
            <h3 className="edu-university">Gunadarma University</h3>
            <p className="education-degree-text">S1 — Bachelor of Informatics</p>
          </div>
          <div className="edu-year-pill">2022 - 2026</div>
        </div>

        <div className="edu-divider" />

        {/* Info grid: IPK only */}
        <div className="edu-info-grid-single">
          <div className="edu-info-block">
            <span className="edu-info-label">CUMULATIVE GPA</span>
            <p className="edu-ipk-large">3.51 <span className="edu-ipk-sub">/ 4.00</span></p>
          </div>
        </div>
      </motion.article>
    </section>
  )
}
