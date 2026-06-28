import { motion } from 'framer-motion'
import { Check, Shield } from 'lucide-react'
import type { Elevator } from '../../data/elevators'

interface ElevatorFeaturesProps {
  elevator: Elevator
}

export default function ElevatorFeatures({ elevator }: ElevatorFeaturesProps) {
  return (
    <div className="space-y-8">
      {/* Key Features */}
      <div className="bg-elvitra-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-elvitra-silver/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-elvitra-pink-dark" />
          <h3 className="font-serif text-xl font-bold text-elvitra-dark">
            Key Features
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {elevator.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 bg-elvitra-pearl border border-elvitra-silver/30 hover:border-elvitra-pink-dark/30 hover:shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-elvitra-pink-dark/10 group-hover:bg-elvitra-pink-dark transition-colors">
                  <Check className="h-4 w-4 text-elvitra-pink-dark group-hover:text-elvitra-white transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-elvitra-dark">
                  {feature.title}
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-elvitra-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Safety Features */}
      <div className="bg-elvitra-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-elvitra-silver/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-elvitra-pink-dark" />
          <Shield className="h-5 w-5 text-elvitra-pink-dark" />
          <h3 className="font-serif text-xl font-bold text-elvitra-dark">
            Safety Features
          </h3>
        </div>

        <div className="rounded-xl p-6 bg-elvitra-pearl border border-elvitra-silver/30">
          <div className="grid gap-4 sm:grid-cols-2">
            {elevator.safetyFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.04, duration: 0.25 }}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 flex-shrink-0 rounded-full bg-elvitra-pink-dark" />
                <span className="text-sm font-medium text-elvitra-dark">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
