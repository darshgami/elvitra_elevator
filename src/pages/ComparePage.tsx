import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, ChevronDown, ChevronUp, ArrowLeft, BarChart3 } from 'lucide-react'
import { elevators, type Elevator } from '../data/elevators'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/animations/ScrollReveal'
import { useSEO } from '../hooks/useSEO'

const categories = [
  { label: 'Overview', key: 'overview' },
  { label: 'Specifications', key: 'specifications' },
  { label: 'Features', key: 'features' },
  { label: 'Safety', key: 'safety' },
] as const

type CategoryKey = (typeof categories)[number]['key']

const specLabels: Record<string, string> = {
  capacity: 'Capacity',
  speed: 'Speed',
  travel: 'Travel Range',
  operation: 'Operation',
  doorType: 'Door Type',
  driveSystem: 'Drive System',
  powerRequirement: 'Power Requirement',
  machineType: 'Machine Type',
}

export default function ComparePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const compareSlugs = searchParams.get('compare')?.split(',').filter(Boolean) || []

  const [activeCategory, setActiveCategory] = useState<CategoryKey>('overview')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const selectedElevators = useMemo(
    () => compareSlugs.map((slug) => elevators.find((e) => e.slug === slug)).filter((e): e is Elevator => e !== undefined),
    [compareSlugs],
  )

  function updateCompare(slug: string) {
    let updated: string[]
    if (compareSlugs.includes(slug)) {
      updated = compareSlugs.filter((s) => s !== slug)
    } else {
      if (compareSlugs.length >= 3) return
      updated = [...compareSlugs, slug]
    }
    const params = new URLSearchParams()
    if (updated.length > 0) params.set('compare', updated.join(','))
    setSearchParams(params)
  }

  useSEO({
    title: 'Compare Elevators | Elvitra Elevators',
    description: 'Compare premium elevator models side-by-side to find the perfect vertical mobility solution for your project.',
    canonicalUrl: 'https://www.elvitra.com/compare'
  })

  return (
    <main className="min-h-screen bg-elvitra-white">
      <section className="relative overflow-hidden bg-elvitra-dark px-6 py-20 lg:py-24">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/elevators"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium tracking-wider text-elvitra-pink-dark/70 uppercase transition-colors hover:text-elvitra-pink-dark"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Elevators
            </Link>
            <h1 className="font-serif text-4xl font-bold text-elvitra-white md:text-5xl lg:text-6xl">
              Compare{' '}
              <span className="text-elvitra-pink-dark">Elevators</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-elvitra-text-light">
              Select up to 3 elevator models to compare their specifications, features, and safety aspects side by side.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-elvitra-text-light">
                Select to compare:
              </span>
              {elevators.map((elevator) => {
                const isSelected = compareSlugs.includes(elevator.slug)
                const isDisabled = compareSlugs.length >= 3 && !isSelected
                return (
                  <motion.button
                    key={elevator.slug}
                    onClick={() => updateCompare(elevator.slug)}
                    disabled={isDisabled}
                    whileHover={!isDisabled ? { scale: 1.04 } : {}}
                    whileTap={!isDisabled ? { scale: 0.96 } : {}}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      isSelected
                        ? 'border-elvitra-pink-dark bg-elvitra-pink-dark text-elvitra-dark'
                        : isDisabled
                          ? 'cursor-not-allowed border-elvitra-silver/40 text-elvitra-text-light/40'
                          : 'border-elvitra-silver bg-elvitra-white text-elvitra-text hover:border-elvitra-pink-dark/50 hover:text-elvitra-pink-dark'
                    }`}
                  >
                    {elevator.title}
                  </motion.button>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {selectedElevators.length > 0 ? (
        <>
          <section className="px-6 pb-12 md:pb-16">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal delay={0.1}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {selectedElevators.map((elevator, index) => (
                    <motion.div
                      key={elevator.slug}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="rounded-lg border border-elvitra-silver bg-elvitra-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                    >
                      <h3 className="font-serif text-xl font-bold text-elvitra-dark">
                        {elevator.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium italic text-elvitra-pink-dark">
                        {elevator.subtitle}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-3 rounded-md bg-elvitra-pearl p-4">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Capacity
                          </span>
                          <p className="text-sm font-medium text-elvitra-dark">
                            {elevator.specifications.capacity}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Speed
                          </span>
                          <p className="text-sm font-medium text-elvitra-dark">
                            {elevator.specifications.speed}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Travel
                          </span>
                          <p className="text-sm font-medium text-elvitra-dark">
                            {elevator.specifications.travel}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                            Machine
                          </span>
                          <p className="text-sm font-medium text-elvitra-dark">
                            {elevator.specifications.machineType}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          <section className="px-6 pb-16 md:pb-24">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal delay={0.2}>
                <div className="mb-6 hidden items-center gap-2 border-b border-elvitra-silver pb-4 md:flex">
                  <BarChart3 className="h-5 w-5 text-elvitra-pink-dark" />
                  <span className="font-sans text-sm font-semibold uppercase tracking-widest text-elvitra-text-light">
                    Category:
                  </span>
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                        activeCategory === cat.key
                          ? 'bg-elvitra-pink-dark text-elvitra-dark'
                          : 'bg-elvitra-pearl text-elvitra-text hover:bg-elvitra-silver'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="md:hidden">
                  {categories.map((cat) => {
                    const isOpen = expandedSection === cat.key
                    return (
                      <div key={cat.key} className="border-b border-elvitra-silver">
                        <button
                          onClick={() =>
                            setExpandedSection(isOpen ? null : cat.key)
                          }
                          className="flex w-full items-center justify-between px-1 py-3 text-left text-sm font-semibold uppercase tracking-wider text-elvitra-dark"
                        >
                          {cat.label}
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4 text-elvitra-pink-dark" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-elvitra-pink-dark" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="overflow-x-auto pb-4">
                            <RenderCategory
                              category={cat.key}
                              elevators={selectedElevators}
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="hidden overflow-x-auto md:block">
                  <RenderCategory
                    category={activeCategory}
                    elevators={selectedElevators}
                  />
                </div>
              </ScrollReveal>
            </div>
          </section>
        </>
      ) : (
        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center rounded-lg border border-dashed border-elvitra-silver bg-elvitra-pearl/50 px-6 py-20"
            >
              <BarChart3 className="mb-4 h-12 w-12 text-elvitra-pink-dark/50" />
              <p className="text-center font-serif text-2xl font-medium text-elvitra-text-light">
                Select elevators above to compare
              </p>
              <p className="mt-2 text-center text-sm text-elvitra-text-light/70">
                Choose 2–3 models to see a side-by-side comparison
              </p>
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-elvitra-dark px-6 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-elvitra-white md:text-4xl">
              Ready to Elevate Your Space?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-elvitra-text-light">
              Get in touch with our team for a personalized quote and consultation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/contact">
                Get a Quote
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-elvitra-white/20 text-elvitra-white hover:border-elvitra-pink-dark/50 hover:text-elvitra-pink-dark"
                href="/elevators"
              >
                View All Elevators
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

function getIcon(present: boolean) {
  return present ? (
    <Check className="h-4 w-4 flex-shrink-0 text-green-500" />
  ) : (
    <X className="h-4 w-4 flex-shrink-0 text-red-400" />
  )
}

function RenderCategory({
  category,
  elevators: selected,
}: {
  category: CategoryKey
  elevators: Elevator[]
}) {
  if (selected.length === 0) return null

  const columnCount = selected.length

  return (
    <table className="w-full min-w-[600px] border-collapse">
      <thead>
        <tr>
          <th className="sticky left-0 z-10 w-[200px] bg-elvitra-white px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-elvitra-text-light" />
          {selected.map((elevator) => (
            <th
              key={elevator.slug}
              className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${
                columnCount === 3 ? 'w-[calc((100%-200px)/3)]' : 'w-[calc((100%-200px)/2)]'
              }`}
            >
              <div className="font-serif text-base font-bold text-elvitra-dark normal-case">
                {elevator.title}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {category === 'overview' && (
          <>
            <tr className="border-t border-elvitra-silver">
              <td className="bg-elvitra-pearl/50 px-4 py-3 text-sm font-semibold text-elvitra-pink-dark">
                Description
              </td>
              {selected.map((elevator) => (
                <td key={elevator.slug} className="px-4 py-3 text-sm leading-relaxed text-elvitra-text">
                  {elevator.description}
                </td>
              ))}
            </tr>
            <tr className="border-t border-elvitra-silver">
              <td className="bg-elvitra-pearl/50 px-4 py-3 text-sm font-semibold text-elvitra-pink-dark">
                Category
              </td>
              {selected.map((elevator) => (
                <td key={elevator.slug} className="px-4 py-3 text-sm capitalize text-elvitra-text">
                  {elevator.category}
                </td>
              ))}
            </tr>
            <tr className="border-t border-elvitra-silver">
              <td className="bg-elvitra-pearl/50 px-4 py-3 text-sm font-semibold text-elvitra-pink-dark">
                Applications
              </td>
              {selected.map((elevator) => (
                <td key={elevator.slug} className="px-4 py-3 text-sm text-elvitra-text">
                  <ul className="list-inside list-disc space-y-1">
                    {elevator.applications.slice(0, 4).map((app) => (
                      <li key={app.title}>{app.title}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </>
        )}

        {category === 'specifications' && (
          <>
            {Object.keys(specLabels).map((key) => (
              <tr key={key} className="border-t border-elvitra-silver">
                <td className="bg-elvitra-pearl/50 px-4 py-3 text-sm font-semibold text-elvitra-pink-dark">
                  {specLabels[key]}
                </td>
                {selected.map((elevator) => (
                  <td
                    key={elevator.slug}
                    className="px-4 py-3 text-sm text-elvitra-text"
                  >
                    {elevator.specifications[key as keyof typeof elevator.specifications]}
                  </td>
                ))}
              </tr>
            ))}
          </>
        )}

        {category === 'features' && (
          <>
            {selected[0].features.map((feat, featIndex) => {
              const allPresent = selected.every(
                (e) => e.features[featIndex] !== undefined,
              )
              return (
                <tr key={featIndex} className="border-t border-elvitra-silver">
                  <td className="bg-elvitra-pearl/50 px-4 py-2.5 text-sm font-semibold text-elvitra-pink-dark">
                    {allPresent ? feat.title : `Feature ${featIndex + 1}`}
                  </td>
                  {selected.map((elevator) => (
                    <td key={elevator.slug} className="px-4 py-2.5">
                      <span className="flex items-center gap-2 text-sm text-elvitra-text">
                        {getIcon(elevator.features[featIndex] !== undefined)}
                        {elevator.features[featIndex]?.description || '—'}
                      </span>
                    </td>
                  ))}
                </tr>
              )
            })}
          </>
        )}

        {category === 'safety' && (
          <>
            {selected[0].safetyFeatures.map((_, safetyIndex) => (
              <tr key={safetyIndex} className="border-t border-elvitra-silver">
                <td className="bg-elvitra-pearl/50 px-4 py-2.5 text-sm text-elvitra-text">
                  {selected[0].safetyFeatures[safetyIndex] ||
                    `Safety ${safetyIndex + 1}`}
                </td>
                {selected.map((elevator) => (
                  <td key={elevator.slug} className="px-4 py-2.5">
                    <span className="flex items-center gap-2 text-sm text-elvitra-text">
                      {getIcon(elevator.safetyFeatures[safetyIndex] !== undefined)}
                      {elevator.safetyFeatures[safetyIndex] || '—'}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  )
}
