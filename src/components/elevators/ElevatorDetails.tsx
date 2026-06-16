import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, MessageSquare } from 'lucide-react'
import type { Elevator } from '../../data/elevators'
import ElevatorGallery from './ElevatorGallery'
import ElevatorSpecs from './ElevatorSpecs'
import ElevatorFeatures from './ElevatorFeatures'
import Button from '../ui/Button'

interface ElevatorDetailsProps {
  elevator: Elevator
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

export default function ElevatorDetails({ elevator }: ElevatorDetailsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={elevator.id}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex-1"
      >
        {/* Gallery */}
        <ElevatorGallery
          images={elevator.galleryImages}
          elevatorId={elevator.id}
        />

        {/* Title & Description */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <p className="mb-2 font-sans text-xs font-semibold tracking-[0.2em] text-elvitra-gold/70 uppercase">
              {elevator.subtitle}
            </p>
            <h2 className="font-serif text-3xl font-bold text-elvitra-white md:text-4xl">
              {elevator.title}
            </h2>
          </motion.div>

          <motion.p
            className="mt-4 max-w-3xl text-sm leading-relaxed text-elvitra-text-light/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {elevator.overview}
          </motion.p>

          {/* Quick stats */}
          <motion.div
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {[
              { label: 'Capacity', value: elevator.specifications.capacity },
              { label: 'Speed', value: elevator.specifications.speed },
              { label: 'Travel', value: elevator.specifications.travel },
              { label: 'Drive', value: elevator.specifications.machineType },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl px-4 py-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))',
                  border: '1px solid rgba(201,168,76,0.1)',
                }}
              >
                <p className="text-[10px] font-semibold tracking-wider text-elvitra-gold/50 uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-bold text-elvitra-white/90">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Use Cases */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <div
              className="h-5 w-1 rounded-full"
              style={{ background: 'linear-gradient(180deg, #dfc173, #c9a84c)' }}
            />
            <h3 className="font-serif text-lg font-bold text-elvitra-white">
              Use Cases
            </h3>
          </div>
          <div className="space-y-2">
            {elevator.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 rounded-lg px-4 py-2.5"
                style={{
                  background: 'rgba(201,168,76,0.03)',
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              >
                <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-elvitra-gold/60" />
                <span className="text-sm text-elvitra-white/70">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
          }}
        />

        {/* Features & Safety */}
        <ElevatorFeatures elevator={elevator} />

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
          }}
        />

        {/* Specs */}
        <ElevatorSpecs elevator={elevator} />

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
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
              <MessageSquare className="h-4 w-4" />
              Get a Quote
            </span>
          </Button>
          <button
            className="flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
            style={{
              borderColor: 'rgba(201,168,76,0.3)',
              color: '#c9a84c',
              background: 'rgba(201,168,76,0.05)',
            }}
          >
            <Download className="h-4 w-4" />
            Download Brochure
          </button>
        </motion.div>

        {/* FAQs */}
        {elevator.faqs.length > 0 && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.4 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div
                className="h-5 w-1 rounded-full"
                style={{ background: 'linear-gradient(180deg, #dfc173, #c9a84c)' }}
              />
              <h3 className="font-serif text-lg font-bold text-elvitra-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {elevator.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl p-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26,26,46,0.6), rgba(15,15,26,0.8))',
                    border: '1px solid rgba(201,168,76,0.08)',
                  }}
                >
                  <h4 className="text-sm font-semibold text-elvitra-white/90">
                    {faq.question}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-elvitra-text-light/60">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
