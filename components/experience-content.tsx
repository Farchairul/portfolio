'use client'

import React, { useState } from 'react'
import { Experience, OrganizationExperience } from '@/types/portfolio'
import { ExperienceCard } from '@/components/experience-card'
import { OrganizationCard } from '@/components/organization-card'
import { ExperienceModal, ModalContent } from '@/components/experience-modal'

export function ExperienceContent({
  experiences,
  organizations = [],
}: {
  experiences: Experience[]
  organizations?: OrganizationExperience[]
}) {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)

  const openModal = (content: ModalContent) => {
    setModalContent(content)
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalContent(null)
    if (typeof document !== 'undefined') document.body.style.overflow = ''
  }

  return (
    <>
      {/* 1. Work & Professional Experience Timeline (Clean & Polos without filter tabs) */}
      <section className="content-section" aria-label="Professional Work Experience">
        <div className="timeline-container" role="feed" aria-label="Work experience list">
          <div className="timeline-line" aria-hidden="true" />

          {experiences.map((item, index) => (
            <ExperienceCard
              key={item.company + item.role}
              item={item}
              index={index}
              onAction={openModal}
            />
          ))}
        </div>
      </section>

      {/* 2. Organizational Experience Section */}
      {organizations && organizations.length > 0 && (
        <section className="content-section org-experience-section" aria-labelledby="org-title">
          <div className="org-section-header">
            <span className="neo-label">ORGANIZATIONAL EXPERIENCE</span>
            <h2 id="org-title">Organization <em>&amp; Leadership</em></h2>
            <p className="section-lede">
              My experience in organizations and team leadership
            </p>
          </div>

          <div className="timeline-container org-timeline-container" role="feed" aria-label="Organizational experience list">
            <div className="timeline-line org-timeline-line" aria-hidden="true" />

            {organizations.map((org, index) => (
              <OrganizationCard
                key={org.organization + org.role}
                item={org}
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* Interactive Modal for Live Web & Video Demo */}
      <ExperienceModal content={modalContent} onClose={closeModal} />
    </>
  )
}
