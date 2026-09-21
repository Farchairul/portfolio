'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Play, X } from 'lucide-react'

interface ProjectVideoPreviewProps {
  videoUrl: string
  projectTitle: string
}

export function ProjectVideoPreview({ videoUrl, projectTitle }: ProjectVideoPreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const open = useCallback(() => setIsOpen(true), [])

  const close = useCallback(() => {
    setIsOpen(false)
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <button className="pvp-trigger-btn" onClick={open} aria-label={`Putar video demo ${projectTitle}`}>
        <Play className="pvp-trigger-icon" aria-hidden="true" />
        Video Demo
      </button>

      {isOpen && (
        <div className="pvp-modal-overlay" onClick={close} role="dialog" aria-modal="true">
          <div className="pvp-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pvp-modal-header">
              <div>
                <span className="pvp-modal-label">VIDEO PREVIEW</span>
                <p className="pvp-modal-title">{projectTitle}</p>
              </div>
              <button className="pvp-modal-close" onClick={close} aria-label="Tutup video">
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="pvp-modal-body">
              <video ref={videoRef} src={videoUrl} controls autoPlay playsInline className="pvp-video" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
