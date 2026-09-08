'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Award, ExternalLink, ZoomIn, X, Download, CheckCircle2, FileText } from 'lucide-react'
import { Certificate } from '@/types/portfolio'

export function CertificateCard({
  item,
  index = 0,
  onOpenModal,
}: {
  item: Certificate
  index?: number
  onOpenModal: (cert: Certificate) => void
}) {
  const yearDisplay = item.year || (item.date ? item.date.split(' ').pop() : '2024')

  return (
    <motion.article
      className="neo-card cert-card-compact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: '10px 10px 0 var(--border)' }}
    >
      {/* Top Preview Image Frame */}
      <div
        className="cert-card-media"
        onClick={() => onOpenModal(item)}
        role="button"
        tabIndex={0}
        title={`View certificate ${item.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onOpenModal(item)
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="cert-card-img"
          loading="lazy"
        />
        <div className="cert-card-overlay">
          <span className="cert-card-zoom-pill">
            <ZoomIn style={{ width: 14, height: 14 }} />
            Preview
          </span>
        </div>
      </div>

      {/* Bottom Content Info */}
      <div className="cert-card-body">
        {/* Year with Ribbon Icon */}
        <div className="cert-year-row">
          <Award className="cert-ribbon-icon" aria-hidden="true" />
          <span className="cert-year-text">{yearDisplay}</span>
        </div>

        {/* Certificate Title */}
        <h3
          className="cert-card-title"
          onClick={() => onOpenModal(item)}
          title={item.title}
        >
          {item.title}
        </h3>

        {/* Issuer Name */}
        <p className="cert-card-issuer">{item.issuer}</p>

        {/* Action Button */}
        <div className="cert-card-actions">
          <button
            type="button"
            className="cert-view-btn"
            onClick={() => onOpenModal(item)}
          >
            View Details <ExternalLink style={{ width: 13, height: 13 }} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certificate
  onClose: () => void
}) {
  const [activePage, setActivePage] = useState<1 | 2>(1)

  return (
    <div className="cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span className="mono-label" style={{ fontSize: 11 }}>
                {cert.issuer}
              </span>
              {cert.year && (
                <span className="cert-badge cert-badge-yellow" style={{ fontSize: 11, padding: '2px 8px' }}>
                  {cert.year}
                </span>
              )}
            </div>
            <h4 style={{ margin: 0, fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 900 }}>{cert.title}</h4>
            <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--coral)', fontWeight: 700 }}>
              {cert.certNo} • Issued: {cert.date}
            </p>
          </div>
          <button type="button" className="cert-modal-close" onClick={onClose} aria-label="Close preview">
            <X aria-hidden="true" />
          </button>
        </div>

        {/* Dedicated Tab Switcher Bar between Header and Body */}
        {cert.page2Image && (
          <div className="cert-modal-tabs-bar">
            <button
              type="button"
              className={`cert-tab-pill ${activePage === 1 ? 'active' : ''}`}
              onClick={() => setActivePage(1)}
            >
              Page 1 (Certificate)
            </button>
            <button
              type="button"
              className={`cert-tab-pill ${activePage === 2 ? 'active' : ''}`}
              onClick={() => setActivePage(2)}
            >
              Page 2 (Syllabus &amp; Material)
            </button>
          </div>
        )}

        <div className="cert-modal-body">
          <div className="cert-modal-img-container">
            <img
              src={activePage === 2 && cert.page2Image ? cert.page2Image : cert.image}
              alt={`${cert.title} - Page ${activePage}`}
              className="cert-modal-img"
            />
          </div>

          {cert.competencies && cert.competencies.length > 0 && (
            <div className="cert-modal-competencies">
              <span className="highlights-header-label">TRAINING SYLLABUS &amp; COMPETENCIES:</span>
              <div className="cert-competencies-grid">
                {cert.competencies.map((comp) => (
                  <div key={comp} className="cert-competency-item">
                    <CheckCircle2 aria-hidden="true" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="cert-modal-footer">
          {cert.pdfUrl && (
            <a
              href={cert.pdfUrl}
              download={`${cert.title.replace(/\s+/g, '_')}.pdf`}
              className="neo-button"
              style={{ fontSize: 14, padding: '10px 20px', borderRadius: 12 }}
            >
              <Download style={{ width: 15, height: 15 }} /> Download PDF Document
            </a>
          )}
          <button
            type="button"
            className="profile-action-btn"
            onClick={onClose}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
