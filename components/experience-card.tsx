'use client'

import React from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, ExternalLink, Play, Calendar, Briefcase } from 'lucide-react'
import { Experience } from '@/types/portfolio'
import { ModalContent } from './experience-modal'

export function ExperienceCard({
  item,
  index,
  onAction,
}: {
  item: Experience
  index: number
  onAction: (content: ModalContent) => void
}) {
  return (
    <motion.div
      className="timeline-entry"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="timeline-node" aria-hidden="true" />

      <motion.article
        className="neo-card experience-card-enhanced"
        whileHover={{ y: -6, boxShadow: '10px 10px 0 var(--border)' }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      >
        {/* Clean Unified Header: Company & Role on Left, Date Badge on Right */}
        <div className="experience-header-row">
          <div className="experience-title-group">
            <div className="experience-company-kicker">
              <Briefcase aria-hidden="true" style={{ width: 15, height: 15, color: 'var(--coral)' }} />
              <span className="experience-company-mono">{item.company}</span>
            </div>
            <h3 className="experience-role-title">{item.role}</h3>
          </div>

          <motion.div
            className="experience-date-badge"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Calendar aria-hidden="true" style={{ width: 14, height: 14 }} />
            <span>{item.period}</span>
          </motion.div>
        </div>

        {/* Location with coral accent */}
        {item.location && <p className="experience-location-text">{item.location}</p>}

        {/* Subtle separator divider */}
        {(item.location || item.description) && <div className="experience-role-divider" aria-hidden="true" />}

        {/* Description */}
        {item.description && <p className="experience-desc-text">{item.description}</p>}

        {/* Action Callout Rows (Production / Video Demo) */}
        {item.actions && item.actions.length > 0 && (
          <div className="experience-actions-list">
            {item.actions.map((act, idx) => {
              const isVideo = act.type === 'demo'
              return (
                <motion.div
                  key={idx}
                  className={`experience-action-callout ${isVideo ? 'action-row-demo' : 'action-row-prod'}`}
                  whileHover={{ scale: 1.015, x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="experience-action-left">
                    <div className={`action-icon-tile ${isVideo ? 'tile-demo' : 'tile-prod'}`}>
                      {isVideo ? (
                        <Play
                          aria-hidden="true"
                          style={{ width: 15, height: 15, fill: '#ffffff', color: '#ffffff' }}
                        />
                      ) : (
                        <ExternalLink
                          aria-hidden="true"
                          style={{ width: 17, height: 17, color: '#080808' }}
                        />
                      )}
                    </div>
                    <div>
                      <span className={`action-tag-label ${isVideo ? 'tag-demo' : 'tag-prod'}`}>
                        {act.tag}
                      </span>
                      <h4 className="action-title-text">{act.title}</h4>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    className="action-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() =>
                      onAction({
                        type: act.type,
                        title: act.title,
                        company: item.company,
                        url: act.url,
                      })
                    }
                  >
                    {isVideo && (
                      <Play
                        aria-hidden="true"
                        style={{ width: 12, height: 12, fill: '#080808', color: '#080808' }}
                      />
                    )}
                    <span>{act.buttonText}</span>
                    {!isVideo && (
                      <ExternalLink aria-hidden="true" style={{ width: 13, height: 13 }} />
                    )}
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Key Highlights Box */}
        <div className="experience-highlights-box">
          <span className="highlights-header-label">KEY HIGHLIGHTS:</span>
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

        {/* Tech Stack Tags with spring hover UX */}
        <div className="experience-tags-wrapper">
          <span className="highlights-header-label">TOOLS &amp; TECHNOLOGIES:</span>
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
        </div>
      </motion.article>
    </motion.div>
  )
}
