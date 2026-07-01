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
        <div className="mt-8 bg-elvitra-white p-6 md:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-elvitra-silver/50">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <p className="mb-2 font-sans text-xs font-bold tracking-[0.2em] text-elvitra-pink-dark uppercase">
              {elevator.subtitle}
            </p>
            <h2 className="font-serif text-3xl font-bold text-elvitra-dark md:text-4xl">
              {elevator.title}
            </h2>
            <div className="mt-4 h-1 w-16 rounded bg-elvitra-pink-dark" />
          </motion.div>

          <motion.p
            className="mt-6 max-w-3xl text-sm leading-relaxed text-elvitra-text lg:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {elevator.overview}
          </motion.p>

          {/* Quick stats */}
          <motion.div
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
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
                className="rounded-xl bg-elvitra-pearl px-5 py-4 border border-elvitra-silver/40 transition-colors hover:border-elvitra-pink-dark/30 hover:bg-elvitra-white shadow-sm"
              >
                <p className="text-[10px] font-bold tracking-wider text-elvitra-pink-dark uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-bold text-elvitra-dark">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Use Cases */}
        <motion.div
          className="mt-8 bg-elvitra-white p-6 md:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-elvitra-silver/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-elvitra-pink-dark" />
            <h3 className="font-serif text-xl font-bold text-elvitra-dark">
              Applications
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {elevator.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 rounded-lg bg-elvitra-pearl px-5 py-3 border border-elvitra-silver/30"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-elvitra-pink-dark/10">
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-elvitra-pink-dark" />
                </div>
                <span className="text-sm font-medium text-elvitra-dark">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px bg-elvitra-silver/50" />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Main Features Column */}
          <div className="lg:col-span-3">
            <ElevatorFeatures elevator={elevator} />
          </div>

          {/* Specs Sidebar Column */}
          <div className="lg:col-span-2 space-y-6">
            <ElevatorSpecs specifications={elevator.specifications} />

            {/* Quick Actions */}
            <motion.div
              className="rounded-xl bg-elvitra-pearl p-6 shadow-sm border border-elvitra-silver/40"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <h4 className="mb-4 font-serif text-lg font-bold text-elvitra-dark">
                Interested in this model?
              </h4>
              <div className="flex flex-col gap-3">
                <Button variant="primary" className="w-full justify-center" href="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Request a Quote
                </Button>
                <Button variant="outline" className="w-full justify-center" href="/ELVITRA ELEVATOR CATALOGUE 2021.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>

              
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
