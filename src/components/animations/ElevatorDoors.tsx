import { motion } from 'framer-motion'

interface ElevatorDoorsProps {
  isOpen?: boolean
  onToggle?: () => void
  className?: string
  currentFloor?: number
}

export default function ElevatorDoors({
  isOpen = false,
  onToggle,
  className = '',
  currentFloor = 1,
}: ElevatorDoorsProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: 200, height: 280 }}
      onClick={onToggle}
    >
      {/* Outer frame - solid pink */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: '#d67a92',
          boxShadow: '0 0 30px rgba(214,122,146,0.2), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      />

      {/* Inner frame shadow */}
      <div
        className="absolute rounded-md"
        style={{
          top: 5,
          left: 5,
          right: 5,
          bottom: 5,
          background: 'linear-gradient(180deg, #0a0a14 0%, #12121f 100%)',
          boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.8)',
        }}
      />

      {/* Elevator interior (visible behind doors) */}
      <div
        className="absolute overflow-hidden rounded-sm"
        style={{
          top: 8,
          left: 8,
          right: 8,
          bottom: 8,
        }}
      >
        {/* Interior back wall */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #2a2a3e 0%, #1e1e30 40%, #151525 100%)',
          }}
        />

        {/* Logo inside elevator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-[35%] px-[15%]">
          <img 
            src="/images/fulllogo-removebg-preview.png" 
            alt="Elvitra Logo"
            className="w-full h-auto object-contain opacity-80 drop-shadow-[0_0_12px_rgba(214,122,146,0.2)]"
          />
        </div>

        {/* Interior mirror/panel effect */}
        <div
          className="absolute"
          style={{
            top: '10%',
            left: '15%',
            right: '15%',
            bottom: '30%',
            background: 'linear-gradient(180deg, rgba(214,122,146,0.08) 0%, rgba(214,122,146,0.03) 100%)',
            borderRadius: 3,
            border: '1px solid rgba(214,122,146,0.1)',
          }}
        />

        {/* Interior handrail */}
        <div
          className="absolute"
          style={{
            bottom: '28%',
            left: '10%',
            right: '10%',
            height: 3,
            background: 'linear-gradient(90deg, rgba(214,122,146,0.2), rgba(214,122,146,0.5), rgba(214,122,146,0.2))',
            borderRadius: 2,
            boxShadow: '0 1px 4px rgba(214,122,146,0.15)',
          }}
        />

        {/* Floor reflection */}
        <div
          className="absolute"
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            height: '25%',
            background: 'linear-gradient(180deg, transparent, rgba(214,122,146,0.04))',
          }}
        />

        {/* Interior ceiling light */}
        <motion.div
          className="absolute"
          style={{
            top: 0,
            left: '30%',
            right: '30%',
            height: 2,
            background: 'rgba(255,255,255,0.4)',
            borderRadius: '0 0 4px 4px',
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Ceiling light glow */}
        <motion.div
          className="absolute"
          style={{
            top: 0,
            left: '20%',
            right: '20%',
            height: '15%',
            background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.08), transparent)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Left door */}
        <motion.div
          className="absolute h-full"
          style={{
            left: 0,
            width: '50%',
          }}
          animate={isOpen ? { x: '-92%' } : { x: 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Door panel */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, #2d2d42 0%, #383850 40%, #3a3a52 60%, #2f2f45 100%)',
            }}
          />
          {/* Door brushed texture */}
          <div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 3px)',
            }}
          />
          {/* Door center seam highlight */}
          <div
            className="absolute"
            style={{
              top: 0,
              bottom: 0,
              right: 0,
              width: 2,
              background: 'linear-gradient(180deg, rgba(214,122,146,0.15), rgba(214,122,146,0.3), rgba(214,122,146,0.15))',
            }}
          />
          {/* Door reflection */}
          <div
            className="absolute"
            style={{
              top: 0,
              bottom: 0,
              left: '20%',
              width: '15%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
            }}
          />
        </motion.div>

        {/* Right door */}
        <motion.div
          className="absolute h-full"
          style={{
            right: 0,
            width: '50%',
          }}
          animate={isOpen ? { x: '92%' } : { x: 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Door panel */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(270deg, #2d2d42 0%, #383850 40%, #3a3a52 60%, #2f2f45 100%)',
            }}
          />
          {/* Door brushed texture */}
          <div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 3px)',
            }}
          />
          {/* Door center seam highlight */}
          <div
            className="absolute"
            style={{
              top: 0,
              bottom: 0,
              left: 0,
              width: 2,
              background: 'linear-gradient(180deg, rgba(214,122,146,0.15), rgba(214,122,146,0.3), rgba(214,122,146,0.15))',
            }}
          />
          {/* Door reflection */}
          <div
            className="absolute"
            style={{
              top: 0,
              bottom: 0,
              right: '20%',
              width: '15%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Top decorative arch */}
      <div
        className="absolute"
        style={{
          top: 2,
          left: 20,
          right: 20,
          height: 3,
          background: 'linear-gradient(90deg, transparent, rgba(244,208,217,0.6), transparent)',
          borderRadius: '0 0 50% 50%',
        }}
      />

      {/* Floor display above doors */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: -36,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 56,
          height: 28,
          background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
          border: '1.5px solid rgba(214,122,146,0.5)',
          borderRadius: 6,
          boxShadow: '0 0 12px rgba(214,122,146,0.15), inset 0 0 8px rgba(0,0,0,0.5)',
        }}
      >
        <motion.span
          key={currentFloor}
          className="font-sans font-bold"
          style={{
            fontSize: 16,
            color: '#d67a92',
            textShadow: '0 0 6px rgba(214,122,146,0.6)',
            letterSpacing: '0.1em',
          }}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {String(currentFloor).padStart(2, '0')}
        </motion.span>
      </div>

      {/* Direction arrow */}
      <motion.div
        className="absolute"
        style={{
          top: -44,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M6 0L12 8H0L6 0Z" fill="#d67a92" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Side gold trim details - left */}
      <div
        className="absolute"
        style={{
          top: 20,
          left: 2,
          width: 2,
          height: 40,
          background: 'linear-gradient(180deg, rgba(244,208,217,0.4), rgba(214,122,146,0.6), rgba(244,208,217,0.4))',
          borderRadius: 1,
        }}
      />

      {/* Side gold trim details - right */}
      <div
        className="absolute"
        style={{
          top: 20,
          right: 2,
          width: 2,
          height: 40,
          background: 'linear-gradient(180deg, rgba(244,208,217,0.4), rgba(214,122,146,0.6), rgba(244,208,217,0.4))',
          borderRadius: 1,
        }}
      />

      {/* Bottom threshold */}
      <div
        className="absolute"
        style={{
          bottom: -4,
          left: 10,
          right: 10,
          height: 4,
          background: '#d67a92',
          borderRadius: '0 0 2px 2px',
          boxShadow: '0 2px 8px rgba(214,122,146,0.2)',
        }}
      />
    </div>
  )
}
