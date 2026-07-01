import { useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { elevators } from '../data/elevators'
import ElevatorSidebar from '../components/elevators/ElevatorSidebar'
import ElevatorDetails from '../components/elevators/ElevatorDetails'
import { useSEO } from '../hooks/useSEO'

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

  useSEO({
    title: `${activeElevator.title} | Elvitra Elevators`,
    description: activeElevator.description || `Discover Elvitra's premium ${activeElevator.title.toLowerCase()} solutions for modern buildings.`,
    canonicalUrl: `https://www.elvitra.com/elevators/${activeElevator.id}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": activeElevator.title,
      "description": activeElevator.description,
      "brand": {
        "@type": "Brand",
        "name": "Elvitra Elevators"
      }
    }
  })

  return (
    <main className="min-h-screen bg-elvitra-pearl pt-16">
      <section className="px-6 py-16 md:py-20 lg:py-24">
        <div className="relative z-10 mx-auto max-w-7xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-sans text-xs font-bold tracking-[0.2em] text-elvitra-pink-dark uppercase">
              Premium Vertical Mobility
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight text-elvitra-dark md:text-5xl">
              Elevator <span className="text-elvitra-pink-dark">Types</span>
            </h1>
            <div className="mt-4 h-1 w-20 rounded bg-elvitra-pink-dark" />
          </motion.div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row lg:gap-12">
          {/* Left Sidebar */}
          <ElevatorSidebar
            elevators={elevators}
            activeId={activeId}
            onSelect={handleSelect}
          />

          {/* Right Content Area */}
          <div className="relative flex-1 min-w-0">
            {/* Ambient glow matching the premium light theme */}
            <motion.div
              className="pointer-events-none absolute -top-40 -right-40 -z-10 h-96 w-96 rounded-full blur-[100px]"
              animate={{
                background: `radial-gradient(circle, #d67a92 0%, transparent 70%)`,
              }}
              style={{ opacity: 0.05 }}
              transition={{ duration: 1 }}
            />
            
            <ElevatorDetails elevator={activeElevator} />
          </div>
        </div>
      </section>
    </main>
  )
}
