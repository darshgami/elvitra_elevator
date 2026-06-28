import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../../data/brochure'
import ScrollReveal from '../animations/ScrollReveal'

function parseStatValue(value: string): { prefix: string; num: number; suffix: string } {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { prefix: '', num: 0, suffix: '' }
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] }
}

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [displayNum, setDisplayNum] = useState(0)
  const { prefix, num, suffix } = parseStatValue(value)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = num / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(increment * step, num)
      setDisplayNum(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, num])

  return (
    <ScrollReveal direction="up" delay={index * 0.15}>
      <div ref={ref} className="flex flex-col items-center text-center">
        <span className="font-serif text-5xl font-bold text-elvitra-pink-dark md:text-6xl">
          {prefix}
          {Math.round(displayNum)}
          {suffix}
        </span>
        <span className="mt-2 font-sans text-sm font-medium tracking-wider text-elvitra-text uppercase">
          {label}
        </span>
      </div>
    </ScrollReveal>
  )
}

export default function Stats() {
  return (
    <section className="relative bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 md:gap-8 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative flex items-center justify-center">
              <AnimatedStat value={stat.value} label={stat.label} index={i} />
              {i < stats.length - 1 && (
                <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-elvitra-pink-dark/30 to-transparent md:absolute md:right-0 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
