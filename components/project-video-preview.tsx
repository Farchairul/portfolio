'use client'

import { useRef, useState, useCallback } from 'react'
import { Play } from 'lucide-react'

interface ProjectVideoPreviewProps {
  videoUrl: string
  projectTitle: string
}

export function ProjectVideoPreview({ videoUrl, projectTitle }: ProjectVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleMouseEnter = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {
      // Autoplay blocked by browser policy — silently ignore
    })
    setIsPlaying(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
    setIsPlaying(false)
  }, [])

  return (
    <div
      className="project-video-preview"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Video preview of ${projectTitle}`}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        preload="none"
        className="project-video-element"
      />

      {/* Play button overlay — hidden while video is playing */}
      <div className={`project-video-overlay${isPlaying ? ' project-video-overlay--hidden' : ''}`}>
        <span className="project-video-play-btn" aria-hidden="true">
          <Play className="project-video-play-icon" />
        </span>
        <span className="project-video-hover-hint">Hover to preview</span>
      </div>
    </div>
  )
}
