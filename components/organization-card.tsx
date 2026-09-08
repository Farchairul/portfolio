'use client'

import React from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, Calendar, Users } from 'lucide-react'
import { OrganizationExperience } from '@/types/portfolio'

export function OrganizationCard({
  item,
  index,
}: {
  item: OrganizationExperience
  index: number
}) {
  return (
    <motion.div
      className="timeline-entry"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="timeline-node timeline-node-org" aria-hidden="true" />

      <motion.article
        className="neo-card experience-card-enhanced org-card-enhanced"
        whileHover={{ y: -6, boxShadow: '10px 10px 0 var(--border)' }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      >
        {/* Clean Unified Header: Organization & Role on Left, Date Badge on Right */}
        <div className="experience-header-row">
          <div className="experience-title-group">
            <div className="experience-company-kicker">
              <Users aria-hidden="true" style={{ width: 15, height: 15, color: 'var(--coral)' }} />
              <span className="experience-company-mono">{item.organization}</span>
            </div>
            <h3 className="experience-role-title">{item.role}</h3>
          </div>

          <motion.div
            className="experience-date-badge org-date-badge"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Calendar aria-hidden="true" style={{ width: 14, height: 14 }} />
            <span>{item.period}</span>
          </motion.div>
        </div>

        {/* Location with coral accent */}
        {item.location && <p className="experience-location-text">{item.location}</p>}

        {/* Subtle separator divider under location */}
        {(item.location || item.description) && <div className="experience-role-divider" aria-hidden="true" />}

        {/* Description */}
        {item.description && <p className="experience-desc-text">{item.description}</p>}

        {/* Key Highlights Box */}
        <div className="experience-highlights-box">
          <span className="highlights-header-label">KEY CONTRIBUTIONS:</span>
          <ul className="highlights-list">
            {item.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="highlight-interactive-item"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              >
                <CheckCircle2 aria-hidden="true" className="highlight-check-icon" />
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Competency / Focus Tags with spring hover UX */}
        {item.tags && item.tags.length > 0 && (
          <div className="experience-tags-row">
            {item.tags.map((tag) => (
              <motion.span
                key={tag}
                className="tech-pill-tag"
                whileHover={{ y: -3, scale: 1.08, borderColor: 'var(--coral)' }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 450, damping: 20 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
      </motion.article>
    </motion.div>
  )
}
