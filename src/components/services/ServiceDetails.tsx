import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  HardHat,
  Wrench,
  FileCheck,
  RefreshCw,
  PhoneCall,
  CalendarDays,
} from 'lucide-react'
import type { servicesData } from '../../data/services'
import Button from '../ui/Button'

type ServiceItem = (typeof servicesData)[number]

interface ServiceDetailsProps {
  service: ServiceItem
}

const serviceVisuals: Record<string, { gradient: string; accent: string; icon: React.ElementType }> = {
  installation: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)',
    accent: '#d67a92',
    icon: HardHat,
  },
  maintenance: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 50%, #f0fdf4 100%)',
    accent: '#10b981',
    icon: Wrench,
  },
  amc: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #fffbf5 50%, #fffbeb 100%)',
    accent: '#f59e0b',
    icon: FileCheck,
  },
  modernization: {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 50%, #f3e8ff 100%)',
    accent: '#8b5cf6',
    icon: RefreshCw,
  },
}

const contentVariants: any = {
  enter: {
    opacity: 0,
    y: 30,
    filter: 'blur(4px)',
  },
  center: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const visual = serviceVisuals[service.id] || serviceVisuals.installation
  const VisualIcon = visual.icon

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex-1 space-y-10"
      >
        {/* Decorative Header Graphic */}
        <div
          className="relative overflow-hidden rounded-2xl p-8 md:p-12"
          style={{
            background: visual.gradient,
            border: '1px solid rgba(214,122,146,0.15)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          }}
        >
          {/* Decorative Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, transparent, transparent 40px, ${visual.accent} 40px, ${visual.accent} 41px),
                repeating-linear-gradient(0deg, transparent, transparent 40px, ${visual.accent} 40px, ${visual.accent} 41px)
              `,
            }}
          />

          {/* Ambient Glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              right: '10%',
              top: '10%',
              width: 260,
              height: 260,
              background: `radial-gradient(circle, ${visual.accent}18 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
            {/* Visual Icon Box */}
            <div
              className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: `2px solid ${visual.accent}40`,
                boxShadow: `0 0 20px ${visual.accent}20`,
              }}
            >
              <VisualIcon
                className="h-9 w-9"
                style={{ color: visual.accent }}
              />
            </div>

            {/* Title Block */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.25em] text-elvitra-pink-dark uppercase">
                Service Domain
              </p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-elvitra-dark md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-elvitra-text md:text-sm">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-1 rounded-full"
              style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
            />
            <h3 className="font-serif text-lg font-bold text-elvitra-dark">
              Service Overview
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-elvitra-text">
            {service.overview}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-1 rounded-full"
              style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
            />
            <h3 className="font-serif text-lg font-bold text-elvitra-dark">
              Key Benefits & Commitments
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex items-start gap-3 rounded-xl p-4 bg-elvitra-pearl border border-elvitra-silver/40 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: visual.accent }}
                />
                <span className="text-xs leading-relaxed text-elvitra-text">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-1 rounded-full"
              style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
            />
            <h3 className="font-serif text-lg font-bold text-elvitra-dark">
              Methodology & Process Flow
            </h3>
          </div>

          <div className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-elvitra-pink-dark/15">
            {service.process.map((proc, index) => (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="relative mb-6 last:mb-0"
              >
                {/* Timeline node */}
                <div
                  className="absolute -left-[20px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold"
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#d67a92',
                    color: '#d67a92',
                    boxShadow: '0 0 6px rgba(214,122,146,0.3)',
                  }}
                >
                  {index + 1}
                </div>

                <div className="rounded-xl p-4 bg-elvitra-white border border-elvitra-silver/40 shadow-sm">
                  <h4 className="text-sm font-semibold text-elvitra-dark">
                    {proc.step}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-elvitra-text">
                    {proc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-1 rounded-full"
              style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
            />
            <h3 className="font-serif text-lg font-bold text-elvitra-dark">
              Service FAQs
            </h3>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl p-5 bg-elvitra-pearl border border-elvitra-silver/40 shadow-sm"
              >
                <h4 className="text-sm font-semibold text-elvitra-dark">
                  {faq.question}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-elvitra-text">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col gap-4 pt-4 sm:flex-row"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Book Consultation
            </span>
          </Button>

          <button
            className="flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
            style={{
              borderColor: 'rgba(214,122,146,0.3)',
              color: '#d67a92',
              background: 'rgba(214,122,146,0.05)',
            }}
          >
            <PhoneCall className="h-4 w-4" />
            Contact Service Desk
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
