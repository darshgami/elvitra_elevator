import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { company } from '../../data/brochure'
import ScrollReveal from '../animations/ScrollReveal'
import { lazy, Suspense } from 'react'
import Button from '../ui/Button'

const HeroElevatorAnimation = lazy(() => import('./HeroElevatorAnimation'))

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-elvitra-dark pt-32 md:pt-40 pb-20 lg:pt-32"
    >
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

      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-50">
        <img 
          src="/hero-bg.png" 
          alt="Logo Background"
          width="760"
          height="760"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-[760px] w-full object-contain opacity-10" 
        />
      </div>

      {/* Decorative vertical lines */}
      <div className="pointer-events-none absolute w-px h-[70%] bg-gradient-to-b from-transparent via-elvitra-pink-dark/10 to-transparent left-[8%] top-0" />
      <div className="pointer-events-none absolute w-px h-[50%] bg-gradient-to-b from-transparent via-elvitra-pink-dark/10 to-transparent left-[15%] top-[10%]" />
      <div className="pointer-events-none absolute w-px h-[60%] bg-gradient-to-b from-transparent via-elvitra-pink-dark/10 to-transparent left-[85%] top-[5%]" />
      <div className="pointer-events-none absolute w-px h-[45%] bg-gradient-to-b from-transparent via-elvitra-pink-dark/10 to-transparent left-[92%] top-[15%]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12 my-auto">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 font-sans text-sm font-semibold tracking-[0.25em] text-elvitra-pink-dark uppercase">
            Since {company.founded}
          </p>

          <h1 className="font-audiowide text-3xl leading-tight tracking-tight text-elvitra-white md:text-6xl lg:text-7xl">
            {company.tagline}{' '}
            <br /><span className="font-stack-notch font-semibold tracking-[0.10em] text-elvitra-pink-dark">RISE HIGH</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-elvitra-text-light lg:mx-0">
            {company.description}
          </p>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                className='rounded-full'
                onClick={() => scrollToSection('elevators')}
              >
                <span className="flex items-center gap-2 font-bold">
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-elvitra-white/20 text-elvitra-white hover:border-elvitra-pink-dark/50 hover:text-elvitra-pink-dark rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Elevator visualization Component */}
        <Suspense fallback={<div className="flex-1 min-h-[500px]" />}>
          <HeroElevatorAnimation />
        </Suspense>
      </div>

      <motion.button
        onClick={() => scrollToSection('elevators')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-elvitra-pink-dark/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  )
}
