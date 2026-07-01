import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../ui/Button'
import ScrollReveal from '../animations/ScrollReveal'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-elvitra-dark pt-20 lg:pt-24">
      {/* Background Gradients & Patterns */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px),
            repeating-linear-gradient(0deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d67a92 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-elvitra-dark/0 via-elvitra-dark/50 to-elvitra-dark" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-elvitra-pink-dark/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.p
              className="mb-4 font-sans text-sm font-semibold tracking-[0.25em] text-elvitra-pink-dark uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contact Us
            </motion.p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="font-sans text-3xl font-bold leading-tight tracking-tight text-elvitra-white md:text-5xl lg:text-6xl">
              Let's Build Together
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-elvitra-text-light">
              Reach out to Elvitra Elevators for expert installations, modernization, meticulous maintenance, AMC services, technical consultation, and competitive quotations.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="mt-10 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                className="rounded-full"
                onClick={() => scrollToSection('contact-form')}
              >
                Get a Free Quote
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection('contact-info')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-elvitra-pink-dark/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8" />
      </motion.button>
    </section>
  )
}
