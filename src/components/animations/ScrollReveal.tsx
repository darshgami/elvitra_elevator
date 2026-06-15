import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  duration?: number
  distance?: number
}

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  fade: { x: 0, y: 0 },
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const offset = directionOffset[direction]

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          x: offset.x * distance,
          y: offset.y * distance,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : {
                opacity: 0,
                x: offset.x * distance,
                y: offset.y * distance,
              }
        }
        transition={{
          duration,
          delay,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
