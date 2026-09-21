'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Play, X, Video } from 'lucide-react'

interface ProjectVideoPreviewProps {
  videoUrl: string
  projectTitle: string
}

export function ProjectVideoPreview({ videoUrl, projectTitle }: ProjectVideoPreviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openModal = useCallback(() => setIsModalOpen(true), [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, closeModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isModalOpen])

  return (
    <>
      {/* Banner Strip */}
      <div className="pvp-banner">
        <div className="pvp-banner-left">
          <span className="pvp-icon-box" aria-hidden="true">
            <Video className="pvp-icon" />
          </span>
          <div className="pvp-banner-info">
            <span className="pvp-label">LIVE VIDEO PREVIEW</span>
            <span className="pvp-title">{projectTitle}</span>
          </div>
        </div>

        <button
          className="pvp-play-btn"
          onClick={openModal}
          aria-label={`Putar video demo ${projectTitle}`}
        >
          <Play className="pvp-play-btn-icon" aria-hidden="true" />
          <span>Putar Video Demo</span>
        </button>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="pvp-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Video preview ${projectTitle}`}
        >
          <div className="pvp-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pvp-modal-header">
              <div className="pvp-modal-header-left">
                <span className="pvp-modal-label">VIDEO PREVIEW</span>
                <p className="pvp-modal-title">{projectTitle}</p>
              </div>
              <button className="pvp-modal-close" onClick={closeModal} aria-label="Tutup video">
                <X aria-hidden="true" />
              </button>
            </div>

            <div className="pvp-modal-body">
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="pvp-video"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
