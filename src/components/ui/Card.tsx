import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  onClick?: () => void
}

export default function Card({
  children,
  className = '',
  hoverable = false,
  onClick,
}: CardProps) {


  const motionProps = hoverable
    ? {
        whileHover: { y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' },
        whileTap: onClick ? { scale: 0.98 } : undefined,
      }
    : {}

  const baseClasses =
    'rounded-lg bg-elvitra-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'

  const interactiveClasses = onClick
    ? 'cursor-pointer text-left w-full'
    : ''

  return (
    <motion.div
      className={`${baseClasses} ${interactiveClasses} ${className}`}
      {...(motionProps as Record<string, unknown>)}
      {...(onClick ? { onClick, as: 'button' } : {})}
    >
      {children}
    </motion.div>
  )
}
