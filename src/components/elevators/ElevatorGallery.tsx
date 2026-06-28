import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ElevatorGalleryProps {
  images: string[]
  elevatorId: string
}

// Premium light themes based on type
const elevatorImageStyles: Record<string, { gradient: string; accent: string; border: string }> = {
  passenger: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f7f7f9 50%, #eff0f2 100%)',
    accent: '#d67a92',
    border: 'rgba(214,122,146,0.2)',
  },
  hospital: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 50%, #e0effe 100%)',
    accent: '#3b82f6',
    border: 'rgba(59,130,246,0.2)',
  },
  home: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #dcfce7 100%)',
    accent: '#10b981',
    border: 'rgba(16,185,129,0.2)',
  },
  freight: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 50%, #fef3c7 100%)',
    accent: '#f59e0b',
    border: 'rgba(245,158,11,0.2)',
  },
  hydraulic: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #fef2f2 50%, #fee2e2 100%)',
    accent: '#ef4444',
    border: 'rgba(239,68,68,0.2)',
  },
  capsule: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 50%, #f3e8ff 100%)',
    accent: '#8b5cf6',
    border: 'rgba(139,92,246,0.2)',
  },
  mrl: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #ecfeff 50%, #cffafe 100%)',
    accent: '#06b6d4',
    border: 'rgba(6,182,212,0.2)',
  },
  goods: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f7fee7 50%, #ecfccb 100%)',
    accent: '#84cc16',
    border: 'rgba(132,204,22,0.2)',
  },
}

export default function ElevatorGallery({
  images,
  elevatorId,
}: ElevatorGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const style = elevatorImageStyles[elevatorId] || elevatorImageStyles.passenger

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="space-y-4">
      {/* Main image display */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
        style={{
          aspectRatio: '16/10',
          background: style.gradient,
          border: `1px solid ${style.border}`,
        }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 40px, ${style.accent} 40px, ${style.accent} 41px),
              repeating-linear-gradient(0deg, transparent, transparent 40px, ${style.accent} 40px, ${style.accent} 41px)
            `,
          }}
        />

        {/* Elevator illustration */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${elevatorId}-${activeIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 1.05, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Central elevator icon graphic */}
            <div className="relative flex flex-col items-center">
              {/* Glow ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle, ${style.accent}20 0%, transparent 70%)`,
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Elevator shape */}
              <div
                className="relative z-10 flex flex-col items-center justify-center rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                style={{
                  width: 120,
                  height: 160,
                  border: `2px solid ${style.accent}40`,
                }}
              >
                {/* Interior lines */}
                <div
                  className="mb-3 w-16"
                  style={{ height: 1, background: `${style.accent}30` }}
                />
                <div
                  className="mb-2 w-12"
                  style={{ height: 1, background: `${style.accent}20` }}
                />
                <div
                  className="w-14"
                  style={{ height: 1, background: `${style.accent}25` }}
                />

                {/* Door seam */}
                <div
                  className="absolute"
                  style={{
                    top: '10%',
                    bottom: '10%',
                    left: '50%',
                    width: 1,
                    background: `linear-gradient(180deg, transparent, ${style.accent}50, transparent)`,
                  }}
                />
              </div>

              {/* Floor label */}
              <div
                className="mt-6 rounded-md px-4 py-2 bg-white shadow-sm"
                style={{
                  border: `1px solid ${style.accent}30`,
                }}
              >
                <span
                  className="font-sans text-xs font-bold tracking-wider uppercase"
                  style={{ color: style.accent }}
                >
                  {images[activeIndex]}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <ChevronLeft className="h-5 w-5 text-elvitra-dark" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <ChevronRight className="h-5 w-5 text-elvitra-dark" />
            </button>
          </>
        )}

        {/* Top-right badge */}
        <div
          className="absolute right-4 top-4 rounded-full px-3 py-1 bg-white shadow-sm"
          style={{
            border: '1px solid rgba(0,0,0,0.05)',
          }}
        >
          <span className="text-[10px] font-bold text-elvitra-dark">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative h-2 rounded-full transition-all duration-300"
              style={{
                width: index === activeIndex ? 32 : 12,
                background:
                  index === activeIndex
                    ? style.accent
                    : 'rgba(0,0,0,0.15)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
