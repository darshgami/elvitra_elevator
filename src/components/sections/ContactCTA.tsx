import { ArrowRight, Phone } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'
import Button from '../ui/Button'
import { contact } from '../../data/brochure'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function ContactCTA() {
  return (
    <SectionWrapper bgColor="bg-elvitra-dark" className="relative overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d67a92 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-br from-elvitra-pink-dark/[0.05] via-transparent to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal direction="up">
          <h2 className="font-serif text-3xl font-bold text-elvitra-white md:text-5xl">
            Ready to <span className="text-elvitra-pink-dark">Upgrade</span> Your Building?
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-elvitra-text-light">
            Contact us today to discuss your vertical mobility needs. Our expert team is ready to provide tailored solutions and competitive quotations.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('contact-form')}
            >
              <span className="flex items-center gap-2">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button> */}
            
            <a href={`tel:${contact.phone[0].number.replace(/\s/g, '')}`}>
              <Button
                variant="ghost"
                size="lg"
                className="w-full border border-elvitra-white/20 text-elvitra-white hover:border-elvitra-pink-dark/50 hover:text-elvitra-pink-dark sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </span>
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
