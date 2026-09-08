'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  CheckCircle2,
  QrCode,
  Search,
  FileCheck,
  Server,
  Layers,
  Sparkles,
} from 'lucide-react'

export interface ModalContent {
  type: 'demo' | 'production'
  title: string
  company: string
  url?: string
}

export function ExperienceModal({
  content,
  onClose,
}: {
  content: ModalContent | null
  onClose: () => void
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(25)
  const [isMuted, setIsMuted] = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)
  const [copied, setCopied] = useState(false)

  // Demo chapters for video preview
  const isBudhiWarman = content?.company?.includes('BUDHI WARMAN') || content?.title?.includes('Perpustakaan')
  const isQMS = content?.company?.includes('QMS') || content?.title?.includes('QMS')

  const chapters = isBudhiWarman
    ? [
        { id: 0, title: 'Self-Checkout QR Scanner', icon: QrCode, desc: 'Students scan their student card to instantly borrow & return books without queuing.' },
        { id: 1, title: 'Instant Catalog Search', icon: Search, desc: 'Real-time search across 25,000+ book titles with shelf and availability filters.' },
        { id: 2, title: 'Digital Clearance Certificate', icon: FileCheck, desc: 'QR-verified clearance letters issued instantly for graduation requirements.' },
      ]
    : [
        { id: 0, title: 'Split-Screen TV Display', icon: Layers, desc: 'Multi-counter queue display with auto-ducking volume when TTS audio plays.' },
        { id: 1, title: 'Thermal Kiosk 80mm', icon: Server, desc: '80mm thermal ticket printing with estimated wait time (SLA) display.' },
        { id: 2, title: 'Operator Calling Station', icon: Sparkles, desc: 'Realtime counter panel with Call Next, Recall, Complete, & Transfer actions.' },
      ]

  // Playback timer simulation
  useEffect(() => {
    if (!content || content.type !== 'demo' || !isPlaying) return
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 500)
    return () => clearInterval(interval)
  }, [content, isPlaying])

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!content) return null

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(content.url || 'https://github.com/faridchairul')
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="cert-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ zIndex: 9999 }}
      >
        <motion.div
          className="cert-modal-card"
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 350 }}
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: content.type === 'demo' ? 840 : 640 }}
        >
          {/* Header */}
          <div className="cert-modal-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    border: '2px solid var(--border)',
                    borderRadius: 6,
                    padding: '2px 8px',
                    fontSize: 10.5,
                    fontWeight: 900,
                    fontFamily: 'var(--font-mono)',
                    background: content.type === 'demo' ? '#ff666d' : '#ffd329',
                    color: content.type === 'demo' ? '#ffffff' : '#080808',
                  }}
                >
                  {content.type === 'demo' ? '▶ VIDEO PREVIEW' : '🟢 PRODUCTION SYSTEM'}
                </span>
                <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', opacity: 0.75, fontWeight: 700 }}>
                  {content.company}
                </span>
              </div>
              <h4 style={{ margin: 0, fontSize: 19, fontWeight: 900, letterSpacing: '-0.02em' }}>
                {content.title}
              </h4>
            </div>
            <button
              type="button"
              className="cert-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X style={{ width: 18, height: 18 }} />
            </button>
          </div>

          {/* Modal Body */}
          {content.type === 'demo' ? (
            <div style={{ padding: '20px 24px', background: 'var(--card)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Simulated Video Player Screen */}
              <div
                style={{
                  background: '#090d16',
                  borderRadius: 16,
                  border: '2.5px solid var(--border)',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '16/9',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.6)',
                }}
              >
                {/* Simulated App Screen Preview */}
                <div style={{ flex: 1, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#ffffff' }}>
                  {React.createElement(chapters[activeChapter].icon, {
                    style: { width: 48, height: 48, color: '#ffd329', marginBottom: 12 },
                  })}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: '#ff777d', fontWeight: 900, textTransform: 'uppercase' }}>
                    MODUL: {chapters[activeChapter].title}
                  </span>
                  <p style={{ margin: '8px 0 0', maxWidth: 440, fontSize: 13.5, color: '#cbd5e1', lineHeight: 1.5, fontWeight: 600 }}>
                    {chapters[activeChapter].desc}
                  </p>
                  <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', padding: '5px 12px', borderRadius: 999, fontSize: 11, fontFamily: 'var(--font-mono)' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: isPlaying ? '#10b981' : '#f59e0b', animation: isPlaying ? 'pulse 1.5s infinite' : 'none' }} />
                    {isPlaying ? 'Live Simulating Playback' : 'Playback Paused'}
                  </div>
                </div>

                {/* Video Control Bar */}
                <div style={{ background: 'rgba(10, 14, 23, 0.95)', borderTop: '1px solid rgba(255,255,255,0.12)', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {/* Progress Line */}
                  <div
                    style={{
                      height: 5,
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      const clickPos = (e.clientX - rect.left) / rect.width
                      setProgress(Math.round(clickPos * 100))
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${progress}%`,
                        background: '#ffd329',
                        borderRadius: 3,
                        transition: 'width 0.2s',
                      }}
                    />
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#f8f4ed' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        style={{ background: '#ffd329', border: '1.5px solid #000', borderRadius: 6, width: 28, height: 28, display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#080808' }}
                      >
                        {isPlaying ? <Pause style={{ width: 14, height: 14 }} /> : <Play style={{ width: 14, height: 14, fill: 'currentColor' }} />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setProgress(0)}
                        style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
                      >
                        <RotateCcw style={{ width: 14, height: 14 }} />
                      </button>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#94a3b8', fontWeight: 700 }}>
                        {`00:${String(Math.floor((progress / 100) * 45)).padStart(2, '0')} / 00:45`}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <button
                        type="button"
                        onClick={() => setIsMuted(!isMuted)}
                        style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
                      >
                        {isMuted ? <VolumeX style={{ width: 16, height: 16 }} /> : <Volume2 style={{ width: 16, height: 16 }} />}
                      </button>
                      <Maximize2 style={{ width: 15, height: 15, color: '#cbd5e1', cursor: 'pointer' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Chapters selector */}
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 900, letterSpacing: '0.06em', color: 'var(--foreground)', marginBottom: 8, opacity: 0.8 }}>
                  PILIH CHAPTER DEMO SISTEM:
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                  {chapters.map((ch, idx) => {
                    const Icon = ch.icon
                    const isCur = activeChapter === idx
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveChapter(idx)
                          setProgress(idx * 33 + 5)
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '8px 12px',
                          borderRadius: 10,
                          border: '2px solid var(--border)',
                          background: isCur ? 'var(--accent)' : 'var(--soft)',
                          color: isCur ? '#080808' : 'var(--foreground)',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 800,
                          fontSize: 12,
                          boxShadow: isCur ? '2px 2px 0 var(--border)' : 'none',
                          transition: 'transform 0.15s',
                        }}
                      >
                        <Icon style={{ width: 15, height: 15, flexShrink: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ch.title}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: '24px 28px', background: 'var(--card)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div
                style={{
                  background: 'var(--soft)',
                  border: '2px solid var(--border)',
                  borderRadius: 14,
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 900, letterSpacing: '0.06em' }}>
                    DEPLOYMENT ENVIRONMENT
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: '#10b981',
                      color: '#ffffff',
                      borderRadius: 999,
                      padding: '3px 10px',
                      fontSize: 11,
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffffff' }} />
                    OPERATIONAL
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13.5, fontWeight: 700, color: 'var(--foreground)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ opacity: 0.75 }}>Architecture Stack:</span>
                    <span style={{ fontWeight: 800 }}>Laravel 12 / CI4 & MySQL Engine</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ opacity: 0.75 }}>Automated Test Suite:</span>
                    <span style={{ fontWeight: 800, color: '#10b981' }}>100% Passing (0 regressions)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ opacity: 0.75 }}>Target Platform:</span>
                    <span style={{ fontWeight: 800 }}>Local Network / Production Intranet</span>
                  </div>
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--foreground)' }}>
                This system is deployed on-premise at the client's local infrastructure. To access a live demo or the source repository, please reach out directly or copy the repository link below.
              </p>

              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    background: 'var(--accent)',
                    border: '2px solid var(--border)',
                    borderRadius: 10,
                    padding: '10px 16px',
                    fontWeight: 900,
                    fontSize: 13.5,
                    cursor: 'pointer',
                    boxShadow: '3px 3px 0 var(--border)',
                    color: '#080808',
                  }}
                >
                  {copied ? <CheckCircle2 style={{ width: 16, height: 16, color: '#16a34a' }} /> : <ExternalLink style={{ width: 16, height: 16 }} />}
                  {copied ? 'Link Copied!' : 'Copy Repository Info'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    border: '2px solid var(--border)',
                    borderRadius: 10,
                    padding: '10px 20px',
                    fontWeight: 900,
                    fontSize: 13.5,
                    cursor: 'pointer',
                    background: 'var(--soft)',
                    color: 'var(--foreground)',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
