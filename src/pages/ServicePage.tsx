import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  ChevronDown,
  Phone,
  ArrowRight,
  Shield,
  Zap,
  Users,
  BarChart3,
  HardHat,
  Wrench,
  FileCheck,
  RefreshCw,
} from 'lucide-react'
import { servicesData } from '../data/services'
import { contact } from '../data/brochure'
import ScrollReveal from '../components/animations/ScrollReveal'
import Button from '../components/ui/Button'

const iconMap: Record<string, React.ElementType> = {
  HardHat,
  Wrench,
  FileCheck,
  RefreshCw,
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = servicesData.find((s) => s.slug === slug) ?? null

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-elvitra-dark px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-8xl font-bold text-elvitra-gold"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 font-serif text-2xl text-elvitra-white"
          >
            Service Not Found
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-elvitra-text-light"
          >
            The service you are looking for does not exist or may have been removed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8"
          >
            <Link to="/">
              <Button variant="primary" size="lg">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3)
  const ServiceIcon = iconMap[service.icon] || Wrench

  return (
    <main>
      <HeroSection service={service} Icon={ServiceIcon} />
      <OverviewSection service={service} />
      {service.process.length > 0 && <ProcessSection process={service.process} />}
      <BenefitsSection service={service} />
      <FaqSection faq={service.faqs} />
      <CTASection />
      <RelatedSection related={relatedServices} />
    </main>
  )
}

function HeroSection({ service, Icon }: { service: typeof servicesData[0]; Icon: React.ElementType }) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-elvitra-dark px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
        />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute h-full w-px opacity-[0.04]"
            style={{
              left: `${15 + i * 30}%`,
              background: 'linear-gradient(to bottom, transparent, #c9a84c, transparent)',
            }}
          />
        ))}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[20%] top-[25%] h-40 w-40 rounded-full border border-elvitra-gold/10"
        />
        <motion.div
          animate={{ y: [0, 25, 0], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute right-[15%] top-[55%] h-56 w-56 rounded-full border border-elvitra-gold/10"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <ScrollReveal direction="left">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-elvitra-gold/10">
                  <Icon className="h-7 w-7 text-elvitra-gold" />
                </div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-elvitra-gold">
                  Our Services
                </span>
              </div>
              <h1 className="font-serif text-5xl font-bold leading-tight text-elvitra-white md:text-7xl">
                {service.title}
              </h1>
              <div className="mt-4 h-1 w-24 rounded bg-elvitra-gold" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-elvitra-text-light md:text-lg">
                {service.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  Request Quote
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="hidden lg:block">
            <ScrollReveal direction="right">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto h-[400px] w-[350px]"
              >
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-elvitra-gold/20 bg-gradient-to-b from-elvitra-gold/5 to-transparent p-8 backdrop-blur-sm">
                  <Icon className="mb-6 h-24 w-24 text-elvitra-gold/30" />
                  <span className="font-serif text-3xl font-bold text-elvitra-white/80">
                    {service.title}
                  </span>
                  <div className="mt-4 h-px w-16 bg-elvitra-gold/40" />
                  <div className="mt-6 space-y-3">
                    {service.benefits.slice(0, 4).map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-elvitra-gold/60" />
                        <span className="text-xs text-elvitra-text-light">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-b from-elvitra-gold/5 to-transparent opacity-50 blur-2xl" />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-elvitra-text-light">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-elvitra-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function OverviewSection({ service }: { service: typeof servicesData[0] }) {
  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
                Overview
              </h2>
              <div className="mt-3 h-1 w-20 rounded bg-elvitra-gold" />
              <p className="mt-6 text-base leading-relaxed text-elvitra-text lg:text-lg">
                {service.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h3 className="mt-12 font-serif text-2xl font-bold text-elvitra-dark">
                Key Benefits
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 rounded-lg border border-elvitra-silver/40 bg-elvitra-pearl/50 p-4"
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-elvitra-gold/10">
                      <CheckCircle className="h-3.5 w-3.5 text-elvitra-gold" />
                    </div>
                    <span className="text-sm text-elvitra-text">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal direction="right" delay={0.1}>
              <h3 className="font-serif text-2xl font-bold text-elvitra-dark">
                Key Benefits
              </h3>
              <div className="mt-6 space-y-3">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 rounded-lg border border-elvitra-silver/30 bg-elvitra-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-elvitra-gold/10 text-xs font-bold text-elvitra-gold">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-elvitra-dark">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection({ process }: { process: { step: string; description: string }[] }) {
  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Our <span className="text-elvitra-gold">Process</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-gold" />
            <p className="mx-auto mt-4 max-w-2xl text-elvitra-text">
              Our proven methodology ensures consistent quality and timely delivery at every stage
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-[29px] top-0 hidden h-full w-px bg-gradient-to-b from-elvitra-gold/60 via-elvitra-gold/30 to-transparent md:block lg:left-[39px]" />

          <div className="space-y-12">
            {process.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex flex-shrink-0 items-start">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-elvitra-gold shadow-[0_0_20px_rgba(201,168,76,0.3)] md:h-16 md:w-16 lg:h-20 lg:w-20"
                    >
                      <span className="font-serif text-xl font-bold text-elvitra-dark md:text-2xl lg:text-3xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                  </div>

                  <div className="flex-1 rounded-xl border border-elvitra-silver/40 bg-elvitra-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-8">
                      <h3 className="font-serif text-xl font-bold text-elvitra-dark md:text-2xl">
                        {step.step}
                      </h3>
                    <p className="mt-3 text-sm leading-relaxed text-elvitra-text md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection({ service }: { service: typeof servicesData[0] }) {
  const benefitCards = [
    { icon: Shield, title: 'Reliable & Trusted', desc: 'Backed by years of industry experience and thousands of successful projects across multiple countries.' },
    { icon: Zap, title: 'Fast Response', desc: 'Priority response times ensure minimal downtime with strategically located service teams ready around the clock.' },
    { icon: Users, title: 'Expert Team', desc: 'Certified engineers and technicians with specialized training in all major elevator systems and brands.' },
    { icon: BarChart3, title: 'Performance Focused', desc: 'Data-driven maintenance approach with detailed performance reporting and proactive issue detection.' },
  ]

  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Why Choose Our{' '}
              <span className="text-elvitra-gold">{service.title.replace(' Services', '')}</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-gold" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefitCards.map((card, index) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.title} delay={index * 0.1}>
                <div className="group rounded-lg bg-elvitra-pearl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-elvitra-gold/10 transition-colors duration-300 group-hover:bg-elvitra-gold">
                    <Icon className="h-8 w-8 text-elvitra-gold transition-colors duration-300 group-hover:text-elvitra-dark" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-elvitra-dark">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-elvitra-text">{card.desc}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FaqSection({ faq }: { faq: { question: string; answer: string }[] }) {
  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Frequently Asked <span className="text-elvitra-gold">Questions</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-gold" />
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-4">
          {faq.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string
  answer: string
  index: number
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 0.06}>
      <motion.div
        className={`overflow-hidden rounded-xl border transition-all duration-300 ${
          isOpen
            ? 'border-elvitra-gold/40 bg-elvitra-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
            : 'border-elvitra-silver/50 bg-elvitra-white/70 hover:border-elvitra-gold/20'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
        >
          <span className="pr-4 font-serif text-base font-bold text-elvitra-gold md:text-lg">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-elvitra-gold/10"
          >
            <ChevronDown className="h-4 w-4 text-elvitra-gold" />
          </motion.div>
        </button>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="border-t border-elvitra-gold/10 px-6 pb-5 pt-4">
            <p className="text-sm leading-relaxed text-elvitra-text">{answer}</p>
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  )
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-elvitra-dark px-6 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #c9a84c 1px, transparent 1px),
            linear-gradient(-45deg, #c9a84c 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl font-bold text-elvitra-white md:text-5xl lg:text-6xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-elvitra-text-light md:text-lg">
            Contact our team today to discuss your service requirements. We offer free consultations
            and customized service plans for every need.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              Request Quote
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <p className="mt-8 font-serif text-xl text-elvitra-gold md:text-2xl">
            {contact.phone[2].number}
          </p>
          <p className="mt-2 text-sm text-elvitra-text-light">{contact.hours}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}

function RelatedSection({
  related,
}: {
  related: typeof servicesData
}) {
  const iconMapLocal: Record<string, React.ElementType> = {
    HardHat,
    Wrench,
    FileCheck,
    RefreshCw,
  }

  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Explore Other <span className="text-elvitra-gold">Services</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-gold" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {related.map((item, index) => {
            const Icon = iconMapLocal[item.icon] || Wrench
            return (
              <ScrollReveal key={item.slug} delay={index * 0.08}>
                <Link to={`/services/${item.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col rounded-lg border border-elvitra-silver/40 bg-elvitra-pearl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-elvitra-gold/10">
                      <Icon className="h-7 w-7 text-elvitra-gold" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-elvitra-dark">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-elvitra-text">
                      {item.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-elvitra-gold transition-all duration-300 group-hover:gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
