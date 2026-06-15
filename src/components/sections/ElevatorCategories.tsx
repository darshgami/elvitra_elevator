import { ArrowUpDown, Building2, Home, Truck, Gauge, Eye, Box, Package } from 'lucide-react'
import { categories } from '../../data/brochure'
import ScrollReveal from '../animations/ScrollReveal'

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

export default function ElevatorCategories() {
  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Our Elevator Range
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-gold" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-elvitra-text">
            From luxury home lifts to heavy-duty freight elevators, we offer a complete range
            of vertical mobility solutions for every need.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.id] || ArrowUpDown

            return (
              <ScrollReveal key={category.id} delay={index * 0.08}>
                <div className="group flex h-full flex-col rounded-lg bg-elvitra-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-elvitra-gold/10">
                    <IconComponent className="h-7 w-7 text-elvitra-gold" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-elvitra-dark">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium italic text-elvitra-gold">
                    {category.subtitle}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-elvitra-text">
                    {category.description}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-elvitra-silver pt-4">
                    {category.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-elvitra-gold" />
                        <span className="text-xs text-elvitra-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-md bg-elvitra-pearl p-3">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                        Capacity
                      </span>
                      <p className="text-xs font-medium text-elvitra-dark">
                        {category.specifications.capacity}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-elvitra-text-light">
                        Speed
                      </span>
                      <p className="text-xs font-medium text-elvitra-dark">
                        {category.specifications.speed}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
