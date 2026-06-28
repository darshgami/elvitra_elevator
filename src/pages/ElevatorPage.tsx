import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Star,
  Shield,
  Zap,
  Wind,
  Image as ImageIcon,
  ChevronDown,
  Phone,
  ArrowRight,
  Building2,
  Home,
  Truck,
  Gauge,
  Eye,
  Box,
  Package,
  ArrowUpDown,
  Thermometer,
  Users,
  DoorOpen,
  Weight,
  Maximize2,
  Ruler,
  Activity,
} from 'lucide-react'
import { elevators } from '../data/elevators'
import { safetyFeatures, contact } from '../data/brochure'
import ScrollReveal from '../components/animations/ScrollReveal'
import Button from '../components/ui/Button'

const categoryIconMap: Record<string, React.ElementType> = {
  passenger: ArrowUpDown,
  hospital: Building2,
  home: Home,
  freight: Truck,
  hydraulic: Gauge,
  capsule: Eye,
  mrl: Box,
  goods: Package,
}

const featureIconMap: Record<string, React.ElementType> = {
  'Smooth acceleration': Zap,
  'Smooth and quiet': Wind,
  'Energy-efficient': Zap,
  'Compact machine-room-less': Box,
  'Compact overhead': Box,
  'Customizable cabin': Star,
  'Emergency communication': Shield,
  'Automatic rescue': Shield,
  'Safety sensors': Shield,
  'Low maintenance': Activity,
  'Overload protection': Weight,
  'Extra-wide doors': DoorOpen,
  'Reinforced cabin': Maximize2,
  'High load-bearing': Weight,
  'Industrial-grade': Ruler,
  'Weather-resistant': Wind,
  'Premium': Star,
  'Architectural lighting': Eye,
  'Anti-glare': Eye,
}

const safetyIconMap: Record<string, React.ElementType> = {
  'Emergency Brake System': Shield,
  'Automatic Rescue Device': Zap,
  'Door Safety Sensors': DoorOpen,
  'Overload Protection': Weight,
  'Emergency Communication': Phone,
  'Fire Operation System': Thermometer,
}

const galleryPlaceholders = [
  { title: 'Premium Cabin Interior', description: 'Luxurious cabin with premium materials and ambient lighting' },
  { title: 'Installation Reference', description: 'Professional installation in a modern building project' },
  { title: 'Technical Detail', description: 'Precision-engineered components and control systems' },
  { title: 'Design Element', description: 'Elegant design details and premium finishes' },
]

const useCaseIcons = [Building2, Users, Home, Truck]

export default function ElevatorPage() {
  const { slug } = useParams<{ slug: string }>()
  const elevator = elevators.find((e) => e.id === slug) ?? null

  if (!elevator) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-elvitra-pearl px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-8xl font-bold text-elvitra-pink-dark"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 font-serif text-2xl text-elvitra-dark"
          >
            Elevator Not Found
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-elvitra-text"
          >
            The elevator type you are looking for does not exist or may have been removed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8"
          >
            <Link to="/elevators">
              <Button variant="primary" size="lg">
                Browse All Elevators
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  const relatedElevators = elevators.filter((e) => e.id !== elevator.id).slice(0, 4)
  const ElevatorIcon = categoryIconMap[elevator.id] || ArrowUpDown
  const allSpecKeys = Object.keys(elevator.specifications)

  return (
    <main className="bg-elvitra-white">
      <HeroSection elevator={elevator} Icon={ElevatorIcon} />
      <OverviewSection elevator={elevator} />
      <FeatureSection features={elevator.features.map((f) => f.title)} />
      <SpecSection
        specifications={elevator.specifications}
        specKeys={allSpecKeys}
        title={elevator.title}
      />
      <SafetySection />
      <GallerySection />
      <FaqSection faq={defaultFaq} />
      <CTASection />
      <RelatedSection related={relatedElevators} />
    </main>
  )
}

function HeroSection({ elevator, Icon }: { elevator: typeof elevators[0]; Icon: React.ElementType }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-elvitra-pearl px-6 pt-20">
      {/* Premium Light Background Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #d67a92 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #d67a92 0%, transparent 70%)' }}
        />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute h-full w-px opacity-[0.1]"
            style={{
              left: `${20 + i * 25}%`,
              background: 'linear-gradient(to bottom, transparent, #d67a92, transparent)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <ScrollReveal direction="left">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-elvitra-pink-dark/10">
                  <Icon className="h-6 w-6 text-elvitra-pink-dark" />
                </div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-elvitra-pink-dark">
                  {elevator.id} Elevator
                </span>
              </div>
              <h1 className="font-serif text-5xl font-bold leading-tight text-elvitra-dark md:text-7xl">
                {elevator.title}
              </h1>
              <p className="mt-4 font-serif text-xl italic text-elvitra-pink-dark md:text-2xl">
                {elevator.subtitle}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-elvitra-text md:text-lg">
                {elevator.description}
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
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto h-[550px] w-[400px]"
              >
                {/* Rebuilt Preview Card to match Home page style */}
                <div className="absolute inset-0 rounded-xl bg-elvitra-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                  <div className="flex h-full flex-col items-center justify-center rounded-lg border border-elvitra-silver/50 bg-elvitra-pearl/50 text-center">
                    <Icon className="mb-8 h-20 w-20 text-elvitra-pink-dark/40" />
                    <span className="font-serif text-2xl font-bold text-elvitra-dark">
                      {elevator.title}
                    </span>
                    <div className="mx-auto mt-4 h-1 w-12 rounded bg-elvitra-pink-dark/60" />
                    <span className="mt-3 font-serif text-sm italic text-elvitra-pink-dark">
                      {elevator.subtitle}
                    </span>
                    <div className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-6 px-6">
                      {Object.entries(elevator.specifications).slice(0, 4).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-elvitra-text-light">
                            {key}
                          </span>
                          <p className="mt-1 text-xs font-semibold text-elvitra-dark">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-elvitra-pink-dark">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-elvitra-pink-dark" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function OverviewSection({ elevator }: { elevator: typeof elevators[0] }) {
  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
                Overview
              </h2>
              <div className="mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
              <p className="mt-6 text-base leading-relaxed text-elvitra-text lg:text-lg">
                {elevator.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h3 className="mt-12 font-serif text-2xl font-bold text-elvitra-dark">
                Use Cases
              </h3>
              <div className="mt-6 flex flex-wrap gap-4">
                {elevator.useCases.map((useCase, i) => {
                  const UcIcon = useCaseIcons[i % useCaseIcons.length]
                  return (
                    <div
                      key={useCase}
                      className="flex items-center gap-3 rounded-lg border border-elvitra-silver/50 bg-elvitra-white px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-elvitra-pink-dark/30"
                    >
                      <UcIcon className="h-5 w-5 text-elvitra-pink-dark" />
                      <span className="text-sm font-medium text-elvitra-dark">{useCase}</span>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-xl bg-elvitra-pearl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-elvitra-silver/40">
                <h3 className="font-serif text-2xl font-bold text-elvitra-dark">
                  Applications
                </h3>
                <div className="mt-6 grid gap-6">
                  {elevator.applications.map((app, i) => (
                    <motion.div
                      key={app.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-elvitra-pink-dark/10">
                        <CheckCircle className="h-5 w-5 text-elvitra-pink-dark" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-elvitra-dark">{app.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-elvitra-text">{app.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureSection({ features }: { features: string[] }) {
  const getIcon = (feature: string) => {
    const match = Object.entries(featureIconMap).find(([key]) =>
      feature.toLowerCase().includes(key.toLowerCase())
    )
    return match ? match[1] : Star
  }

  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Key <span className="text-elvitra-pink-dark">Features</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = getIcon(feature)
            return (
              <ScrollReveal key={feature} delay={index * 0.08} className="h-full">
                <div className="group flex h-full flex-col rounded-lg bg-elvitra-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-elvitra-pink-dark/20 border border-transparent">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-elvitra-pink-dark/10 transition-colors duration-300 group-hover:bg-elvitra-pink-dark">
                    <Icon className="h-8 w-8 text-elvitra-pink-dark transition-colors duration-300 group-hover:text-elvitra-white" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-elvitra-dark">
                    {feature}
                  </h3>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SpecSection({
  specifications,
  specKeys,
  title,
}: {
  specifications: Record<string, string>
  specKeys: string[]
  title: string
}) {
  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Technical <span className="text-elvitra-pink-dark">Specifications</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-xl border border-elvitra-silver/50 bg-elvitra-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="bg-elvitra-pearl border-b border-elvitra-silver/50 px-8 py-6">
              <h3 className="font-serif text-2xl font-bold text-elvitra-dark text-center">{title}</h3>
            </div>
            <div className="divide-y divide-elvitra-silver/40">
              {specKeys.map((key) => (
                <div
                  key={key}
                  className="flex items-center justify-between px-8 py-5 transition-colors duration-200 hover:bg-elvitra-pearl/30"
                >
                  <span className="font-sans text-sm font-bold uppercase tracking-widest text-elvitra-pink-dark">
                    {key}
                  </span>
                  <span className="font-sans text-right text-sm font-semibold text-elvitra-dark">
                    {specifications[key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function SafetySection() {
  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="relative mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-elvitra-pink-dark/30 bg-elvitra-pink-dark/5 px-5 py-1.5">
              <Shield className="h-4 w-4 text-elvitra-pink-dark" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-elvitra-pink-dark">
                Your Safety Is Our Priority
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Safety <span className="text-elvitra-pink-dark">Features</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded bg-elvitra-pink-dark" />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {safetyFeatures.map((feature, index) => {
            const Icon = safetyIconMap[feature.title] || Shield
            return (
              <ScrollReveal key={feature.title} delay={index * 0.08} className="h-full">
                <div className="group flex h-full flex-col rounded-lg bg-elvitra-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-transparent hover:border-elvitra-pink-dark/20">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-elvitra-pink-dark/10 text-elvitra-pink-dark transition-colors duration-300 group-hover:bg-elvitra-pink-dark group-hover:text-elvitra-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-serif text-lg font-bold text-elvitra-dark">
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
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="bg-elvitra-white px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Visual <span className="text-elvitra-pink-dark">Gallery</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
            <p className="mx-auto mt-4 max-w-2xl text-elvitra-text">
              Visual highlights of our elevator designs and installations
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {galleryPlaceholders.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-xl border border-elvitra-silver/40 bg-elvitra-pearl shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="flex h-72 items-center justify-center bg-elvitra-silver/20 transition-colors duration-500 group-hover:bg-elvitra-silver/40">
                  <div className="flex flex-col items-center gap-3">
                    <ImageIcon className="h-16 w-16 text-elvitra-text-light/50 transition-all duration-500 group-hover:scale-110 group-hover:text-elvitra-pink-dark/50" />
                    <span className="font-sans text-xs font-medium uppercase tracking-widest text-elvitra-text-light">
                      Image Placeholder
                    </span>
                  </div>
                </div>
                <div className="bg-elvitra-white p-6">
                  <h3 className="font-serif text-xl font-bold text-elvitra-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-elvitra-text">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultFaq = [
  { question: 'What makes this elevator type unique?', answer: `Each Elvitra elevator is engineered with specific features and capabilities tailored to its intended application. Contact our team for detailed information about this model's unique advantages and how it can be customized for your project.` },
  { question: 'What is the typical lead time for this elevator?', answer: 'Lead times vary based on configuration, customization requirements, and current production schedule. Standard models typically ship within 8–12 weeks. Custom configurations may require additional time. Our sales team will provide a precise timeline during consultation.' },
  { question: 'Can this elevator be customized to my requirements?', answer: 'Absolutely. We offer extensive customization options including cabin dimensions, interior finishes, door configurations, control systems, and special features. Our engineering team works closely with you to design a solution that meets your exact specifications.' },
  { question: 'What kind of warranty and support is included?', answer: 'All Elvitra elevators come with a comprehensive warranty covering parts and labor. Warranty periods vary by component type. We also offer extended warranty options and comprehensive annual maintenance contracts for long-term peace of mind.' },
]

function FaqSection({ faq }: { faq: { question: string; answer: string }[] }) {
  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Frequently Asked <span className="text-elvitra-pink-dark">Questions</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
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
            ? 'border-elvitra-pink-dark/30 bg-elvitra-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
            : 'border-elvitra-silver/50 bg-elvitra-white hover:border-elvitra-pink-dark/20'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-8 py-6 text-left"
        >
          <span className="pr-4 font-serif text-lg font-bold text-elvitra-dark">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-elvitra-pink-dark/10"
          >
            <ChevronDown className="h-5 w-5 text-elvitra-pink-dark" />
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
          <div className="border-t border-elvitra-silver/30 px-8 pb-6 pt-4">
            <p className="text-sm leading-relaxed text-elvitra-text">{answer}</p>
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  )
}

function CTASection() {
  return (
    <section className="bg-elvitra-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-elvitra-pearl border border-elvitra-silver/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #d67a92 1px, transparent 1px),
              linear-gradient(-45deg, #d67a92 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="relative z-10 px-8 py-16 text-center md:py-20 md:px-16">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl lg:text-6xl">
              Ready to Elevate Your Space?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-elvitra-text md:text-lg">
              Get in touch with our team to discuss your elevator requirements. We offer free site
              assessments and customized solutions for every project.
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
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
            {contact.phone.length > 0 && (
              <p className="mt-8 font-serif text-xl font-bold text-elvitra-pink-dark md:text-2xl">
                {contact.phone[0].number}
              </p>
            )}
            <p className="mt-2 text-sm font-medium text-elvitra-text-light">{contact.hours}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function RelatedSection({
  related,
}: {
  related: typeof elevators
}) {
  return (
    <section className="bg-elvitra-pearl px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
              Explore Other <span className="text-elvitra-pink-dark">Elevators</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-elvitra-pink-dark" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item, index) => {
            const Icon = categoryIconMap[item.id] || ArrowUpDown
            return (
              <ScrollReveal key={item.id} delay={index * 0.08} className="h-full">
                <Link to={`/elevators/${item.id}`} className="group block h-full">
                  <div className="flex h-full flex-col rounded-lg bg-elvitra-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-elvitra-pink-dark/10">
                      <Icon className="h-7 w-7 text-elvitra-pink-dark transition-colors duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-elvitra-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium italic text-elvitra-pink-dark">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-elvitra-text">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-elvitra-pink-dark transition-all duration-300 group-hover:gap-3">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
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
