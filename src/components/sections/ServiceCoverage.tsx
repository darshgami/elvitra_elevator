import { Building, Building2, Hospital, Hotel, ShoppingBag, Factory, Landmark, GraduationCap } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'

const coverageAreas = [
  { icon: Building, title: 'Residential Projects' },
  { icon: Building2, title: 'Commercial Buildings' },
  { icon: Hospital, title: 'Hospitals' },
  { icon: Hotel, title: 'Hotels' },
  { icon: ShoppingBag, title: 'Shopping Malls' },
  { icon: Factory, title: 'Industrial Facilities' },
  { icon: Landmark, title: 'Government Projects' },
  { icon: GraduationCap, title: 'Educational Institutions' },
]

export default function ServiceCoverage() {
  return (
    <SectionWrapper bgColor="bg-elvitra-white">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-elvitra-dark md:text-4xl">
            Sectors We <span className="text-elvitra-pink-dark">Serve</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
          <p className="mx-auto mt-6 max-w-2xl font-sans text-sm text-elvitra-text">
            We proudly provide world-class vertical mobility solutions across diverse industries.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-4">
        {coverageAreas.map((area, index) => (
          <ScrollReveal key={area.title} delay={0.05 * index} direction="up">
            <div className="group flex h-full flex-col items-center justify-center rounded-xl border border-elvitra-silver/60 bg-elvitra-pearl/30 p-6 text-center transition-all duration-300 hover:border-elvitra-pink-dark/50 hover:bg-elvitra-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="mb-4 text-elvitra-pink-dark/70 transition-colors duration-300 group-hover:text-elvitra-pink-dark">
                <area.icon className="h-10 w-10 stroke-[1.5]" />
              </div>
              <h3 className="font-sans text-sm font-semibold tracking-wide text-elvitra-dark">
                {area.title}
              </h3>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
