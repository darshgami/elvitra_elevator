import { Zap, Cpu, Gem, Globe } from 'lucide-react'
import { features } from '../../data/brochure'
import ScrollReveal from '../animations/ScrollReveal'

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Cpu,
  Gem,
  Globe,
}

export default function Features() {
  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Why Choose Elvitra
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-gold" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-elvitra-text">
            We combine cutting-edge technology, superior craftsmanship, and unwavering
            commitment to quality.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Zap

            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="group rounded-lg bg-elvitra-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-elvitra-gold/10 transition-colors duration-300 group-hover:bg-elvitra-gold">
                    <IconComponent className="h-8 w-8 text-elvitra-gold transition-colors duration-300 group-hover:text-elvitra-dark" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-elvitra-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-elvitra-text">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
