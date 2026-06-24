import { categories } from '../../data/brochure'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'

interface SpecItemProps {
  label: string
  value: string
}

function SpecItem({ label, value }: SpecItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-elvitra-silver/40 py-3 last:border-b-0">
      <span className="font-sans text-sm font-semibold uppercase tracking-widest text-elvitra-pink-dark">
        {label}
      </span>
      <span className="font-sans text-right text-sm font-medium text-elvitra-text">
        {value}
      </span>
    </div>
  )
}

const specKeys: { label: string; key: keyof (typeof categories)[number]['specifications'] }[] = [
  { label: 'Capacity', key: 'capacity' },
  { label: 'Speed', key: 'speed' },
  { label: 'Travel', key: 'travel' },
  { label: 'Operation', key: 'operation' },
]

export default function Specifications() {
  return (
    <SectionWrapper id="specifications" bgColor="bg-elvitra-white">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
            Technical{' '}
            <span className="text-elvitra-pink-dark">Specifications</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((cat, index) => (
          <ScrollReveal key={cat.id} delay={index * 0.06}>
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-elvitra-silver/50 bg-elvitra-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
              <div className="bg-gradient-to-r from-elvitra-pink-dark/10 to-elvitra-pink-pale/50 px-6 py-4">
                <h3 className="font-sans text-base font-bold uppercase tracking-wider text-elvitra-dark">
                  {cat.title}
                </h3>
              </div>
              <div className="flex-1 px-6 py-4">
                {specKeys.map(({ label, key }) => (
                  <SpecItem
                    key={key}
                    label={label}
                    value={cat.specifications[key]}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
