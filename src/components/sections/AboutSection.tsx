import { motion } from 'framer-motion'
import { company, stats } from '../../data/brochure'
import ScrollReveal from '../animations/ScrollReveal'

function ElevatorShaftGraphic() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[200px]">
      <div className="relative mx-auto h-full w-16">
        <div className="absolute inset-0 flex flex-col items-center justify-between">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-0.5 w-full bg-elvitra-gold/30"
            />
          ))}
        </div>
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-elvitra-gold/40" />
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-elvitra-gold/40" style={{ left: 'calc(50% - 16px)' }} />
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-elvitra-gold/40" style={{ left: 'calc(50% + 16px)' }} />
        <motion.div
          className="absolute left-1/2 h-12 w-12 -translate-x-1/2 rounded border border-elvitra-gold/60 bg-elvitra-gold/10"
          animate={{ y: ['0%', '500%', '0%'] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%' }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="h-3 w-3 rotate-45 border border-elvitra-gold/40" />
          </div>
        </motion.div>
      </div>
      <div className="absolute -bottom-4 left-1/2 h-3 w-20 -translate-x-1/2 rounded bg-elvitra-gold/20" />
      <div className="absolute -top-4 left-1/2 h-3 w-20 -translate-x-1/2 rounded bg-elvitra-gold/20" />
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-4 text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Who We Are
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-gold" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-elvitra-text">
                {company.description}
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-elvitra-dark">
                    Our Vision
                  </h3>
                  <p className="italic text-elvitra-text-light">
                    &ldquo;{company.vision}&rdquo;
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-elvitra-dark">
                    Our Mission
                  </h3>
                  <p className="italic text-elvitra-text-light">
                    &ldquo;{company.mission}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex items-center justify-center">
            <div className="h-80 w-full max-w-[260px]">
              <ElevatorShaftGraphic />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="rounded-lg border border-elvitra-gold/20 bg-elvitra-pearl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <div className="font-serif text-3xl font-bold text-elvitra-gold md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-elvitra-text-light">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
