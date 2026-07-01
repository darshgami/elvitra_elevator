import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  className?: string
  bgColor?: string
  children: React.ReactNode
  noPadding?: boolean
}

export default function SectionWrapper({
  id,
  className = '',
  bgColor,
  children,
  noPadding = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${noPadding ? '' : 'px-6 py-16 md:py-20 lg:py-24'} ${bgColor || ''} ${className}`}
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
