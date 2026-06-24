import { motion, AnimatePresence } from 'framer-motion'

interface FloorIndicatorProps {
  currentFloor: number
  totalFloors: number
  className?: string
}

export default function FloorIndicator({
  currentFloor,
  totalFloors,
  className = '',
}: FloorIndicatorProps) {
  // Show only 5 floors at a time centered on current floor
  const visibleCount = 7
  const halfVisible = Math.floor(visibleCount / 2)
  const startFloor = Math.max(1, Math.min(currentFloor - halfVisible, totalFloors - visibleCount + 1))
  const endFloor = Math.min(totalFloors, startFloor + visibleCount - 1)

  const visibleFloors = []
  for (let i = endFloor; i >= startFloor; i--) {
    visibleFloors.push(i)
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Compact floor panel */}
      <div
        className="relative flex flex-col items-center gap-0.5 rounded-lg"
        style={{
          padding: '8px 6px',
          background: 'linear-gradient(180deg, #161626 0%, #0d0d18 100%)',
          border: '1px solid rgba(214,122,146,0.25)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(214,122,146,0.1)',
        }}
      >
        {/* Top arrow indicator */}
        {startFloor > 1 && (
          <motion.div
            className="mb-1"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M4 0L8 5H0L4 0Z" fill="rgba(214,122,146,0.4)" />
            </svg>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {visibleFloors.map((floorNumber) => {
            const isActive = floorNumber === currentFloor

            return (
              <motion.div
                key={floorNumber}
                className="flex items-center gap-1.5"
                style={{ padding: '2px 4px' }}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: isActive ? '#d67a92' : 'rgba(138,138,154,0.25)',
                    boxShadow: isActive
                      ? '0 0 6px rgba(214,122,146,0.6), 0 0 12px rgba(214,122,146,0.3)'
                      : 'none',
                  }}
                  animate={isActive ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />

                <span
                  className="font-sans leading-none"
                  style={{
                    fontSize: 9,
                    fontWeight: isActive ? 700 : 400,
                    color: isActive ? '#d67a92' : 'rgba(138,138,154,0.4)',
                    textShadow: isActive ? '0 0 4px rgba(214,122,146,0.4)' : 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    minWidth: 12,
                    textAlign: 'right',
                  }}
                >
                  {floorNumber}
                </span>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Bottom arrow indicator */}
        {endFloor < totalFloors && (
          <motion.div
            className="mt-1"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M0 0H8L4 5L0 0Z" fill="rgba(214,122,146,0.4)" />
            </svg>
          </motion.div>
        )}

        {/* Subtle side accent lines */}
        <div
          className="absolute"
          style={{
            top: '20%',
            left: -1,
            bottom: '20%',
            width: 1,
            background: 'linear-gradient(180deg, transparent, rgba(214,122,146,0.3), transparent)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '20%',
            right: -1,
            bottom: '20%',
            width: 1,
            background: 'linear-gradient(180deg, transparent, rgba(214,122,146,0.3), transparent)',
          }}
        />
      </div>
    </div>
  )
}
