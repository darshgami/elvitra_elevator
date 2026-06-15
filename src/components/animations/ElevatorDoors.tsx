import { motion } from 'framer-motion'

interface ElevatorDoorsProps {
  isOpen?: boolean
  onToggle?: () => void
  className?: string
}

export default function ElevatorDoors({
  isOpen = false,
  onToggle,
  className = '',
}: ElevatorDoorsProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: 200, height: 320 }}
      onClick={onToggle}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #b8953a 0%, #dfc173 30%, #c9a84c 50%, #b8953a 70%, #8a7530 100%)',
          borderRadius: 4,
        }}
      />

      <div
        className="absolute"
        style={{
          top: 4,
          left: 4,
          right: 4,
          bottom: 4,
          borderRadius: 2,
          border: '2px solid #b8953a',
          overflow: 'hidden',
        }}
      >
        <motion.div
          className="absolute h-full w-1/2 bg-gradient-to-b from-[#3a3a4a] via-[#2d2d3a] to-[#1a1a2e]"
          style={{ left: 0 }}
          animate={isOpen ? { x: '-100%' } : { x: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px)',
            }}
          />
        </motion.div>

        <motion.div
          className="absolute h-full w-1/2 bg-gradient-to-b from-[#3a3a4a] via-[#2d2d3a] to-[#1a1a2e]"
          style={{ right: 0 }}
          animate={isOpen ? { x: '100%' } : { x: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 21px)',
            }}
          />
        </motion.div>
      </div>

      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'linear-gradient(180deg, #dfc173, #b8953a)',
          borderRadius: '4px 4px 0 0',
        }}
      />

      <div
        className="absolute"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'linear-gradient(0deg, #dfc173, #b8953a)',
          borderRadius: '0 0 4px 4px',
        }}
      />

      <div
        className="absolute"
        style={{
          top: 6,
          bottom: 6,
          left: 0,
          width: 6,
          background: 'linear-gradient(90deg, #dfc173, #b8953a)',
        }}
      />

      <div
        className="absolute"
        style={{
          top: 6,
          bottom: 6,
          right: 0,
          width: 6,
          background: 'linear-gradient(270deg, #dfc173, #b8953a)',
        }}
      />
    </div>
  )
}
