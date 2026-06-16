import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { company } from '../../data/brochure'
import ElevatorDoors from '../animations/ElevatorDoors'
import FloorIndicator from '../animations/FloorIndicator'
import ScrollReveal from '../animations/ScrollReveal'
import Button from '../ui/Button'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const cableLines = [
  { left: '8%', height: '70%', top: '0%', delay: 0 },
  { left: '15%', height: '50%', top: '10%', delay: 0.3 },
  { left: '85%', height: '60%', top: '5%', delay: 0.6 },
  { left: '92%', height: '45%', top: '15%', delay: 0.2 },
]

export default function Hero() {
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [currentFloor, setCurrentFloor] = useState(1)

  useEffect(() => {
    // Continuous door open/close cycle
    const doorCycle = () => {
      setDoorsOpen(true)
      setTimeout(() => setDoorsOpen(false), 3000)
    }
    const openTimer = setTimeout(doorCycle, 800)
    const doorInterval = setInterval(doorCycle, 6000)

    const floorInterval = setInterval(() => {
      setCurrentFloor((prev) => (prev >= 15 ? 1 : prev + 1))
    }, 3000)

    return () => {
      clearTimeout(openTimer)
      clearInterval(doorInterval)
      clearInterval(floorInterval)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-elvitra-dark"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 60px, #c9a84c 60px, #c9a84c 61px),
            repeating-linear-gradient(0deg, transparent, transparent 60px, #c9a84c 60px, #c9a84c 61px)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-elvitra-dark/0 via-elvitra-dark/50 to-elvitra-dark" />

      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-elvitra-gold/[0.02] to-transparent" />

      {cableLines.map((line, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute w-px bg-gradient-to-b from-transparent via-elvitra-gold/10 to-transparent"
          style={{ left: line.left, top: line.top, height: line.height }}
          animate={{ opacity: [0.3, 0.6, 0.3], scaleY: [1, 1.02, 1] }}
          transition={{
            duration: 3,
            delay: line.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex-1 text-center lg:text-left">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.p
              className="mb-4 font-sans text-sm font-semibold tracking-[0.25em] text-elvitra-gold uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Since {company.founded}
            </motion.p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-elvitra-white md:text-6xl lg:text-7xl">
              {company.tagline}{' '}
              <span className="text-elvitra-gold">Excellence</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-elvitra-text-light lg:mx-0">
              {company.description}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('elevators')}
              >
                <span className="flex items-center gap-2">
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-elvitra-white/20 text-elvitra-white hover:border-elvitra-gold/50 hover:text-elvitra-gold"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Elevator visualization */}
        <div className="mt-16 flex-shrink-0 lg:mt-0 lg:ml-6">
          <ScrollReveal direction="right" delay={0.6}>
            <div className="flex items-start gap-3">
              {/* Floor indicator panel - left side */}
              <div className="pt-10">
                <FloorIndicator
                  currentFloor={currentFloor}
                  totalFloors={15}
                />
              </div>

              {/* Elevator shaft assembly */}
              <div className="relative flex flex-col items-center">
                {/* Cable lines above elevator */}
                <div className="relative mb-2" style={{ width: 200, height: 40 }}>
                  {/* Left cable */}
                  <motion.div
                    className="absolute"
                    style={{
                      left: '30%',
                      top: 0,
                      bottom: 0,
                      width: 1,
                      background: 'linear-gradient(180deg, rgba(201,168,76,0.1), rgba(201,168,76,0.3))',
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Right cable */}
                  <motion.div
                    className="absolute"
                    style={{
                      right: '30%',
                      top: 0,
                      bottom: 0,
                      width: 1,
                      background: 'linear-gradient(180deg, rgba(201,168,76,0.1), rgba(201,168,76,0.3))',
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />
                </div>

                {/* Elevator doors */}
                <ElevatorDoors
                  isOpen={doorsOpen}
                  currentFloor={currentFloor}
                />

                {/* Floor base / landing */}
                <div
                  className="mt-1"
                  style={{
                    width: 220,
                    height: 3,
                    background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.5), rgba(201,168,76,0.3), transparent)',
                    borderRadius: 2,
                  }}
                />

                {/* Ambient glow beneath */}
                <div
                  style={{
                    width: 180,
                    height: 20,
                    background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.08), transparent)',
                    marginTop: -2,
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection('elevators')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-elvitra-gold/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  )
}
