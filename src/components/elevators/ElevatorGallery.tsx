import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ElevatorGalleryProps {
  images: string[]
  elevatorId: string
}

// Premium elevator images based on type
const elevatorImageStyles: Record<string, { gradient: string; accent: string; pattern: string }> = {
  passenger: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
    accent: '#c9a84c',
    pattern: 'Modern stainless steel cabin interior',
  },
  hospital: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #1a2332 50%, #0f0f1a 100%)',
    accent: '#3b82f6',
    pattern: 'Spacious medical-grade elevator',
  },
  home: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #1a2e1a 50%, #0f0f1a 100%)',
    accent: '#10b981',
    pattern: 'Elegant home lift with wood finish',
  },
  freight: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2e2a1a 50%, #0f0f1a 100%)',
    accent: '#f59e0b',
    pattern: 'Heavy-duty industrial elevator',
  },
  hydraulic: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2e1a1a 50%, #0f0f1a 100%)',
    accent: '#ef4444',
    pattern: 'Hydraulic power system',
  },
  capsule: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #261a2e 50%, #0f0f1a 100%)',
    accent: '#8b5cf6',
    pattern: 'Panoramic glass elevator',
  },
  mrl: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #1a2a2e 50%, #0f0f1a 100%)',
    accent: '#06b6d4',
    pattern: 'Machine-room-less system',
  },
  goods: {
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #222e1a 50%, #0f0f1a 100%)',
    accent: '#84cc16',
    pattern: 'Goods lift platform',
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
    <div className="space-y-3">
      {/* Main image display */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          aspectRatio: '16/10',
          background: style.gradient,
          border: '1px solid rgba(201,168,76,0.12)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
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
                  background: `radial-gradient(circle, ${style.accent}15 0%, transparent 70%)`,
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
                className="relative z-10 flex flex-col items-center justify-center rounded-xl"
                style={{
                  width: 120,
                  height: 160,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  border: `2px solid ${style.accent}40`,
                  boxShadow: `0 0 30px ${style.accent}15, inset 0 0 20px rgba(0,0,0,0.3)`,
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
                    background: `linear-gradient(180deg, transparent, ${style.accent}40, transparent)`,
                  }}
                />
              </div>

              {/* Floor label */}
              <div
                className="mt-4 rounded-md px-4 py-1.5"
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: `1px solid ${style.accent}30`,
                }}
              >
                <span
                  className="font-sans text-xs font-medium tracking-wider uppercase"
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
              className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(201,168,76,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <ChevronLeft className="h-4 w-4 text-elvitra-white/70" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(201,168,76,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <ChevronRight className="h-4 w-4 text-elvitra-white/70" />
            </button>
          </>
        )}

        {/* Top-right badge */}
        <div
          className="absolute right-4 top-4 rounded-full px-3 py-1"
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(201,168,76,0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span className="text-[10px] font-semibold text-elvitra-gold">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative h-1.5 rounded-full transition-all duration-300"
              style={{
                width: index === activeIndex ? 24 : 8,
                background:
                  index === activeIndex
                    ? 'linear-gradient(90deg, #dfc173, #c9a84c)'
                    : 'rgba(138,138,154,0.3)',
                boxShadow:
                  index === activeIndex
                    ? '0 0 6px rgba(201,168,76,0.4)'
                    : 'none',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
