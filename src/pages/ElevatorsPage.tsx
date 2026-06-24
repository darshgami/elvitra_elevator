import { useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { elevators } from '../data/elevators'
import ElevatorSidebar from '../components/elevators/ElevatorSidebar'
import ElevatorDetails from '../components/elevators/ElevatorDetails'

export default function ElevatorsPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Default to passenger elevator if no ID or invalid ID
  const activeId = id && elevators.some((e) => e.id === id) ? id : 'passenger'

  const activeElevator = useMemo(
    () => elevators.find((e) => e.id === activeId) || elevators[0],
    [activeId]
  )

  const handleSelect = (newId: string) => {
    navigate(`/elevators/${newId}`)
  }

  // Effect to scroll to top smoothly when elevator changes (optional, but good for mobile)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeId])

  return (
    <main className="min-h-screen bg-elvitra-dark pt-20">
      {/* Header section */}
      <section className="relative overflow-hidden px-6 py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px),
              repeating-linear-gradient(0deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px)
            `,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-elvitra-dark/0 via-elvitra-dark/50 to-elvitra-dark" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-sans text-xs font-semibold tracking-[0.25em] text-elvitra-pink-dark uppercase">
              Premium Vertical Mobility
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight text-elvitra-white md:text-5xl">
              Elevator <span className="text-elvitra-pink-dark">Types</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area: Master-Detail Layout */}
      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row lg:gap-12">
          {/* Left Sidebar */}
          <ElevatorSidebar
            elevators={elevators}
            activeId={activeId}
            onSelect={handleSelect}
          />

          {/* Right Content Area */}
          <div className="relative flex-1 min-w-0">
            {/* Background ambient glow matching the active elevator */}
            <motion.div
              className="pointer-events-none absolute -top-40 -right-40 -z-10 h-96 w-96 rounded-full blur-[100px]"
              animate={{
                background: `radial-gradient(circle, ${activeElevator.color}15 0%, transparent 70%)`,
              }}
              transition={{ duration: 1 }}
            />
            
            <ElevatorDetails elevator={activeElevator} />
          </div>
        </div>
      </section>
    </main>
  )
}
