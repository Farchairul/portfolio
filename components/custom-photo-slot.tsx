'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'motion/react'
import { User } from 'lucide-react'

export function CustomPhotoSlot() {
  const [hasError, setHasError] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setRotate({ x: -(y / rect.height) * 12, y: (x / rect.width) * 12 })
  }

  return (
    <motion.div
      ref={cardRef}
      className="custom-photo-card neo-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{ transformPerspective: 1000 }}
    >
      {/* Main Image or Placeholder */}
      <div className="photo-inner-canvas">
        {!hasError ? (
          <img
            src="/profile/my-photo.jpg"
            alt="Farid Chairul Azhar Profile Photo"
            className="custom-photo-img"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="custom-photo-placeholder">
            <div className="avatar-icon-ring">
              <User aria-hidden="true" style={{ width: 68, height: 68 }} />
            </div>
            <div className="placeholder-info">
              <span className="placeholder-name">FARID CHAIRUL AZHAR</span>
              <span className="placeholder-hint">Fullstack Developer &amp; AI Engineer</span>
            </div>
          </div>
        )}
      </div>

      {/* Subtle Holographic Glare */}
      <div className="photo-glare-effect" aria-hidden="true" />
    </motion.div>
  )
}
