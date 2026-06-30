import { motion, useReducedMotion, useMotionValue, animate, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { company } from '../../data/brochure'
import ScrollReveal from '../animations/ScrollReveal'

function ElevatorShaftGraphic() {
  const yVal = useMotionValue(80)
  const doorScale = useMotionValue(1)
  const prefersReducedMotion = useReducedMotion()
  const [currentFloor, setCurrentFloor] = useState('G')

  useEffect(() => {
    const unsubscribe = yVal.on('change', (latest) => {
      if (latest >= 70) setCurrentFloor('G')
      else if (latest >= 50) setCurrentFloor('1')
      else if (latest >= 30) setCurrentFloor('2')
      else if (latest >= 10) setCurrentFloor('3')
      else setCurrentFloor('4')
    })
    return unsubscribe
  }, [yVal])

  useEffect(() => {
    if (prefersReducedMotion) return

    let isMounted = true

    const runSequence = async () => {
      while (isMounted) {
        // At G
        await new Promise((r) => setTimeout(r, 800))
        if (!isMounted) break
        
        await animate(doorScale, 0, { duration: 1, ease: 'easeInOut' })
        await new Promise((r) => setTimeout(r, 1200))
        if (!isMounted) break
        await animate(doorScale, 1, { duration: 1, ease: 'easeInOut' })
        
        await new Promise((r) => setTimeout(r, 500))
        if (!isMounted) break

        // Move to 2 (40%)
        await animate(yVal, 40, { duration: 3.5, ease: 'easeInOut' })
        
        // At 2
        await new Promise((r) => setTimeout(r, 800))
        if (!isMounted) break
        
        await animate(doorScale, 0, { duration: 1, ease: 'easeInOut' })
        await new Promise((r) => setTimeout(r, 1200))
        if (!isMounted) break
        await animate(doorScale, 1, { duration: 1, ease: 'easeInOut' })
        
        await new Promise((r) => setTimeout(r, 500))
        if (!isMounted) break

        // Move to 4 (0%)
        await animate(yVal, 0, { duration: 3.5, ease: 'easeInOut' })
        
        // At 4
        await new Promise((r) => setTimeout(r, 800))
        if (!isMounted) break
        
        await animate(doorScale, 0, { duration: 1, ease: 'easeInOut' })
        await new Promise((r) => setTimeout(r, 1200))
        if (!isMounted) break
        await animate(doorScale, 1, { duration: 1, ease: 'easeInOut' })
        
        await new Promise((r) => setTimeout(r, 500))
        if (!isMounted) break

        // Move back down to G (80%)
        await animate(yVal, 80, { duration: 4.5, ease: 'easeInOut' })
      }
    }
    
    runSequence()
    
    return () => {
      isMounted = false
    }
  }, [yVal, doorScale, prefersReducedMotion])

  const cabinY = useTransform(yVal, (v) => `${v}%`)

  return (
    <div className="relative mx-auto flex h-full w-full max-w-[320px] items-center justify-center gap-4 md:gap-6 group py-4">
      {/* Shaft Container */}
      <div className="relative h-[360px] w-32 rounded-lg border border-elvitra-dark/10 bg-elvitra-dark/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden">
        
        {/* Guide Rails */}
        <div className="absolute left-2.5 top-0 h-full w-1.5 bg-gradient-to-b from-elvitra-dark/10 to-elvitra-dark/5" />
        <div className="absolute right-2.5 top-0 h-full w-1.5 bg-gradient-to-b from-elvitra-dark/10 to-elvitra-dark/5" />
        
        {/* Center Cable */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-elvitra-dark/10" />

        {/* Floor Lines */}
        {[20, 40, 60, 80, 100].map((top) => (
          <div key={top} className="absolute w-full h-[2px] bg-elvitra-dark/10" style={{ top: `${top}%` }} />
        ))}

        {/* Cabin */}
        <motion.div 
          className="absolute left-3.5 right-3.5 h-[72px] rounded-sm bg-white/95 shadow-md backdrop-blur-md border border-white/60 overflow-hidden flex flex-col z-10 transition-shadow duration-300 group-hover:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.15)] group-hover:border-elvitra-pink-dark/40"
          style={{ top: cabinY }}
        >
          {/* Cabin Roof / Light */}
          <div className="h-1.5 w-full bg-gradient-to-r from-elvitra-pink-dark/60 via-elvitra-pink-dark to-elvitra-pink-dark/60 shadow-[0_2px_10px_rgba(214,122,146,0.6)]" />
          
          {/* Interior & Doors */}
          <div className="relative flex-1 bg-gradient-to-b from-elvitra-dark/5 to-transparent flex items-center justify-center p-0.5">
            {/* Interior Glow (visible when doors open) */}
            <div className="absolute inset-x-1 bottom-0 h-3/4 bg-gradient-to-t from-elvitra-pink-dark/15 to-transparent opacity-80" />
            
            {/* Doors container */}
            <div className="absolute inset-0 flex">
              {/* Left Door */}
              <motion.div 
                className="h-full w-1/2 bg-gradient-to-r from-gray-50 to-gray-200 border-r border-gray-300 shadow-[inset_-2px_0_4px_rgba(0,0,0,0.02)] origin-left"
                style={{ scaleX: doorScale }}
              />
              {/* Right Door */}
              <motion.div 
                className="h-full w-1/2 bg-gradient-to-l from-gray-50 to-gray-200 border-l border-gray-300 shadow-[inset_2px_0_4px_rgba(0,0,0,0.02)] origin-right"
                style={{ scaleX: doorScale }}
              />
            </div>
            
            {/* Minimal Cabin Details (visible when doors close) */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ opacity: doorScale }}
            >
              <div className="h-full w-[2px] bg-elvitra-dark/10" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floor Indicator Display */}
      <div className="relative flex items-center">
        {/* Connection line connecting shaft to indicator */}
        <div className="absolute -left-6 h-[1px] w-6 bg-elvitra-dark/15 hidden md:block" />
        
        <div className="rounded-lg border border-elvitra-dark/10 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.06)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex flex-col items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-elvitra-pink-dark" style={{ boxShadow: '0 0 8px rgba(214,122,146,0.7)' }} />
            <span className="font-serif text-2xl font-bold text-elvitra-dark transition-colors duration-300">
              {currentFloor}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Who We Are
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-elvitra-text">
                {company.description}
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-elvitra-dark">
                    Our Vision
                  </h3>
                  <p className="italic text-elvitra-text-light">
                    &ldquo;{company.vision}&rdquo;
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-elvitra-dark">
                    Our Mission
                  </h3>
                  <p className="italic text-elvitra-text-light">
                    &ldquo;{company.mission}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="h-full">
            <div className="flex h-[400px] w-full items-center justify-center md:justify-end md:pr-8 lg:pr-16">
              <div className="w-full max-w-[340px]">
                <ElevatorShaftGraphic />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
