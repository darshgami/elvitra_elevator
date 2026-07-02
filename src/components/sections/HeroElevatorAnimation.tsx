import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import ElevatorDoors from '../animations/ElevatorDoors'
import FloorIndicator from '../animations/FloorIndicator'
import ScrollReveal from '../animations/ScrollReveal'

const HeroElevatorAnimation = memo(function HeroElevatorAnimation() {
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [currentFloor, setCurrentFloor] = useState(1)

  useEffect(() => {
    let openTimer: ReturnType<typeof setTimeout>
    let doorInterval: ReturnType<typeof setInterval>
    let floorInterval: ReturnType<typeof setInterval>

    const startAnimations = setTimeout(() => {
      // Continuous door open/close cycle
      const doorCycle = () => {
        setDoorsOpen(true)
        setTimeout(() => setDoorsOpen(false), 3000)
      }
      openTimer = setTimeout(doorCycle, 800)
      doorInterval = setInterval(doorCycle, 6000)

      floorInterval = setInterval(() => {
        setCurrentFloor((prev) => (prev >= 15 ? 1 : prev + 1))
      }, 3000)
    }, 3000)

    return () => {
      clearTimeout(startAnimations)
      if (openTimer) clearTimeout(openTimer)
      if (doorInterval) clearInterval(doorInterval)
      if (floorInterval) clearInterval(floorInterval)
    }
  }, [])

  return (
    <div className="mt-16 flex-shrink-0 lg:mt-0 -ml-4 pr-8 lg:-ml-12 lg:pr-24 pt-15">
      <ScrollReveal direction="right" delay={0.6}>
        <div className="flex items-center gap-6 lg:gap-10">
          {/* Floor indicator panel - left side */}
          <div className="z-10 relative ">
            <FloorIndicator
              currentFloor={currentFloor}
              totalFloors={15}
            />
          </div>

          {/* Elevator shaft assembly */}
          <div className="relative flex flex-col items-center scale-[1.15] sm:scale-[1.35] md:scale-[1.5] origin-left pl-2">
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
                  background: 'linear-gradient(180deg, rgba(214,122,146,0.1), rgba(214,122,146,0.3))',
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
                  background: 'linear-gradient(180deg, rgba(214,122,146,0.1), rgba(214,122,146,0.3))',
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
                background: 'linear-gradient(90deg, transparent, rgba(214,122,146,0.3), rgba(214,122,146,0.5), rgba(214,122,146,0.3), transparent)',
                borderRadius: 2,
              }}
            />

            {/* Ambient glow beneath */}
            <div
              style={{
                width: 180,
                height: 20,
                background: 'radial-gradient(ellipse at top, rgba(214,122,146,0.08), transparent)',
                marginTop: -2,
              }}
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
})

export default HeroElevatorAnimation
