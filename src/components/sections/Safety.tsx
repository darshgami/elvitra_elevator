import {
  Shield,
  Zap,
  DoorOpen,
  Weight,
  Phone,
  Flame,
} from 'lucide-react'
import { safetyFeatures } from '../../data/brochure'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<number, LucideIcon> = {
  0: Shield,
  1: Zap,
  2: DoorOpen,
  3: Weight,
  4: Phone,
  5: Flame,
}

export default function Safety() {
  return (
    <SectionWrapper id="safety" bgColor="bg-elvitra-pearl">
      <div className="relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-elvitra-gold/30 bg-elvitra-gold-pale/80 px-5 py-1.5">
            <Shield className="h-4 w-4 text-elvitra-gold-dark" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-elvitra-gold-dark">
              Your Safety Is Our Priority
            </span>
          </div>
        </div>
      </div>

      <ScrollReveal>
        <div className="mb-14 mt-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
            Safety{' '}
            <span className="text-elvitra-gold">First, Always</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-gold" />
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {safetyFeatures.map((feature, index) => {
          const Icon = iconMap[index] || Shield
          return (
            <ScrollReveal key={feature.title} delay={index * 0.08}>
              <div className="group flex h-full flex-col rounded-lg border border-elvitra-silver/50 border-t-4 border-t-elvitra-gold bg-elvitra-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-elvitra-gold/10 text-elvitra-gold-dark transition-colors duration-300 group-hover:bg-elvitra-gold group-hover:text-elvitra-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-sans text-base font-bold text-elvitra-dark">
                  {feature.title}
                </h3>
                <p className="flex-1 font-sans text-sm leading-relaxed text-elvitra-text">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
