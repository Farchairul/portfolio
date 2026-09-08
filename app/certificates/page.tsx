'use client'

import { useState, useEffect } from 'react'
import { PortfolioShell } from '@/components/portfolio-shell'
import { PageIntro } from '@/components/page-intro'
import { CertificateCard, CertificateModal } from '@/components/certificate-card'
import { certificates } from '@/lib/data'
import { Certificate } from '@/types/portfolio'

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedCert])

  return (
    <PortfolioShell section="certificates">
      <PageIntro
        label="CREDENTIALS & LICENSES"
        title="CERTIFICATES"
        description="Certificates from courses and learning programs I've completed."
      />

      <section className="content-section">
        <div className="certificates-grid">
          {certificates.map((item, index) => (
            <CertificateCard
              key={item.title + item.certNo}
              item={item}
              index={index}
              onOpenModal={setSelectedCert}
            />
          ))}
        </div>
      </section>

      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </PortfolioShell>
  )
}
