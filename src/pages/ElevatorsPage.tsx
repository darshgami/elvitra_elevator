import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpDown,
  Building2,
  Home,
  Truck,
  Gauge,
  Eye,
  Box,
  Package,
  BarChart3,
  ArrowRight,
} from 'lucide-react'
import { elevators } from '../data/elevators'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/animations/ScrollReveal'

const filters = [
  { label: 'All', value: 'all' as const },
  { label: 'Passenger', value: 'passenger' as const },
  { label: 'Residential', value: 'residential' as const },
  { label: 'Commercial', value: 'commercial' as const },
  { label: 'Industrial', value: 'industrial' as const },
] as const

type FilterValue = (typeof filters)[number]['value']

const iconMap: Record<string, React.ElementType> = {
  passenger: ArrowUpDown,
  hospital: Building2,
  home: Home,
  freight: Truck,
  hydraulic: Gauge,
  capsule: Eye,
  mrl: Box,
  goods: Package,
}

export default function ElevatorsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  const filteredElevators = useMemo(
    () =>
      activeFilter === 'all'
        ? elevators
        : elevators.filter((e) => e.category === activeFilter),
    [activeFilter],
  )

  return (
    <main className="min-h-screen bg-elvitra-white">
      <section className="relative overflow-hidden bg-elvitra-dark px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 60px, #c9a84c 60px, #c9a84c 61px),
              repeating-linear-gradient(0deg, transparent, transparent 60px, #c9a84c 60px, #c9a84c 61px)
            `,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-elvitra-dark/0 via-elvitra-dark/50 to-elvitra-dark" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-elvitra-gold/[0.02] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-sans text-sm font-semibold tracking-[0.25em] text-elvitra-gold uppercase">
              Premium Vertical Mobility
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-elvitra-white md:text-5xl lg:text-6xl">
              Our Elevator{' '}
              <span className="text-elvitra-gold">Range</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-elvitra-text-light">
              From luxury home lifts to heavy-duty freight elevators, discover the perfect
              vertical mobility solution for your project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    activeFilter === filter.value
                      ? 'border-elvitra-gold bg-elvitra-gold text-elvitra-dark'
                      : 'border-elvitra-silver bg-elvitra-white text-elvitra-text hover:border-elvitra-gold/50 hover:text-elvitra-gold'
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredElevators.map((elevator, index) => {
                const IconComponent = iconMap[elevator.id] || ArrowUpDown

                return (
                  <motion.div
                    key={elevator.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="group flex h-full flex-col rounded-lg border border-elvitra-silver/60 bg-elvitra-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                  >
                    <div className="px-6 pt-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-elvitra-gold/10 transition-colors duration-300 group-hover:bg-elvitra-gold/20">
                        <IconComponent className="h-6 w-6 text-elvitra-gold" />
                      </div>

                      <h3 className="font-serif text-xl font-bold text-elvitra-dark">
                        {elevator.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium italic text-elvitra-gold">
                        {elevator.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-elvitra-text line-clamp-3">
                        {elevator.description}
                      </p>
                    </div>

                    <div className="mt-4 px-6">
                      <div className="grid grid-cols-2 gap-2 rounded-md bg-elvitra-pearl p-3">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Capacity
                          </span>
                          <p className="text-xs font-medium text-elvitra-dark">
                            {elevator.specifications.capacity}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Speed
                          </span>
                          <p className="text-xs font-medium text-elvitra-dark">
                            {elevator.specifications.speed}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Travel
                          </span>
                          <p className="text-xs font-medium text-elvitra-dark">
                            {elevator.specifications.travel}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Machine
                          </span>
                          <p className="text-xs font-medium text-elvitra-dark">
                            {elevator.specifications.machineType}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-1.5 px-6">
                      {elevator.features.slice(0, 3).map((feature) => (
                        <div key={feature.title} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-elvitra-gold" />
                          <span className="text-xs text-elvitra-text-light">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2 border-t border-elvitra-silver/40 px-6 py-4">
                      <Link
                        to={`/elevators/${elevator.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wider text-elvitra-gold uppercase transition-colors hover:text-elvitra-gold-dark"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to={`/compare?compare=${elevator.slug}`}
                        className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-elvitra-text-light transition-colors hover:text-elvitra-gold"
                      >
                        <BarChart3 className="h-3.5 w-3.5" />
                        Compare
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {filteredElevators.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="font-serif text-2xl font-medium text-elvitra-text-light">
                No elevators found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-elvitra-dark px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-elvitra-white md:text-4xl">
              Can't Find What You're Looking For?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-elvitra-text-light">
              We offer custom elevator solutions tailored to your specific requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/contact">
                Contact Us
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-elvitra-white/20 text-elvitra-white hover:border-elvitra-gold/50 hover:text-elvitra-gold"
                href="/compare"
              >
                Compare Models
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
