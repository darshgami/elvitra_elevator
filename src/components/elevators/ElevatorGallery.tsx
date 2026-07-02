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

        {/* Elevator Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${elevatorId}-${activeIndex}`}
            className="absolute inset-0 flex flex-col items-center justify-end"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <img 
              src={`/images/elevators/${elevatorId}/${activeIndex + 1}.png`} 
              alt={images[activeIndex]}
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
              onError={(e) => {
                // Keep the placeholder gradient if image fails to load
                e.currentTarget.style.opacity = '0';
              }}
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
            
            {/* Caption */}
            <div className="relative z-10 w-full p-6 text-center">
              <span className="font-sans text-sm md:text-base font-medium tracking-wide text-white drop-shadow-md">
                {images[activeIndex]}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
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
              aria-label="Next image"
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
              aria-label={`Go to image ${index + 1}`}
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

      {/* Download Brochure Button */}
      {/* <div className="flex justify-center pt-2">
        <a
          href="/ELVITRA ELEVATOR CATALOGUE 2021.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          style={{
            background: `${style.accent}15`,
            color: style.accent,
            border: `1.5px solid ${style.accent}40`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${style.accent}25`
            e.currentTarget.style.borderColor = `${style.accent}80`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${style.accent}15`
            e.currentTarget.style.borderColor = `${style.accent}40`
          }}
        >
          <FileDown className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          Download Brochure
        </a>
      </div> */}
    </div>
  )
}
