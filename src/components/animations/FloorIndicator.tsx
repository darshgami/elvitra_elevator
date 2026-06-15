import { motion } from 'framer-motion'

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
  return (
    <div
      className={`flex flex-col items-center gap-6 ${className}`}
    >
      <div
        className="relative flex items-center justify-center rounded"
        style={{
          width: 80,
          height: 56,
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: '2px solid #c9a84c',
          boxShadow: 'inset 0 0 12px rgba(0,0,0,0.6), 0 0 8px rgba(201,168,76,0.3)',
        }}
      >
        <motion.span
          key={currentFloor}
          className="font-serif font-bold tracking-widest"
          style={{
            fontSize: 28,
            color: '#c9a84c',
            textShadow: '0 0 8px rgba(201,168,76,0.5), 0 0 20px rgba(201,168,76,0.2)',
          }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {String(currentFloor).padStart(2, '0')}
        </motion.span>
      </div>

      <div
        className="relative flex flex-col items-center gap-1.5 rounded-full"
        style={{
          padding: '10px 8px',
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: '1px solid rgba(201,168,76,0.3)',
        }}
      >
        {Array.from({ length: totalFloors }, (_, i) => {
          const floorNumber = totalFloors - i
          const isActive = floorNumber === currentFloor

          return (
            <div key={floorNumber} className="flex items-center gap-2">
              <motion.div
                className="rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: isActive ? '#c9a84c' : 'rgba(138,138,154,0.3)',
                  boxShadow: isActive
                    ? '0 0 6px rgba(201,168,76,0.6)'
                    : 'none',
                }}
                animate={isActive ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: isActive ? Infinity : 0,
                  ease: 'easeInOut',
                }}
              />

              <span
                className="font-sans text-xs leading-none"
                style={{
                  color: isActive ? '#c9a84c' : 'rgba(138,138,154,0.5)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {floorNumber}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
