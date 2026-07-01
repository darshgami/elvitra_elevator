import { HardHat, Wrench, FileCheck, RefreshCw } from 'lucide-react'
import { services } from '../../data/brochure'
import ScrollReveal from '../animations/ScrollReveal'

const iconMap: Record<string, React.ElementType> = {
  HardHat,
  Wrench,
  FileCheck,
  RefreshCw,
}

export default function Services() {
  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Our Services
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-elvitra-text">
            End-to-end elevator solutions from expert installation to<br /> Annual maintenance and
            modernization.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench

            return (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="group rounded-lg border-l-4 border-transparent bg-elvitra-pearl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-l-elvitra-pink-dark hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-elvitra-pink-dark/10">
                    <IconComponent className="h-7 w-7 text-elvitra-pink-dark" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-elvitra-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-elvitra-text">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-elvitra-pink-dark" />
                        <span className="text-sm text-elvitra-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
