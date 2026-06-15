import { certifications } from '../../data/brochure'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" bgColor="bg-elvitra-white">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
            Certifications &{' '}
            <span className="text-elvitra-gold">Accreditations</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-gold" />
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.name} delay={index * 0.08}>
            <div className="group relative flex flex-col items-center rounded-lg border border-elvitra-gold/30 bg-gradient-to-b from-elvitra-gold-pale/30 to-elvitra-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-elvitra-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-elvitra-gold/30 bg-elvitra-gold-pale/50">
                <svg
                  className="h-8 w-8 text-elvitra-gold-dark"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>

              <h3 className="relative font-sans text-lg font-bold uppercase tracking-wider text-elvitra-dark">
                {cert.name}
              </h3>
              <p className="relative mt-2 font-sans text-sm text-elvitra-text-light">
                {cert.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
