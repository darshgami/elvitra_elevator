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
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div
            className="h-5 w-1 rounded-full"
            style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
          />
          <h3 className="font-serif text-lg font-bold text-elvitra-white">
            Key Features
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {elevator.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="group rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(26,26,46,0.6), rgba(15,15,26,0.8))',
                border: '1px solid rgba(214,122,146,0.08)',
              }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(214,122,146,0.15), rgba(214,122,146,0.05))',
                  }}
                >
                  <Check className="h-3.5 w-3.5 text-elvitra-pink-dark" />
                </div>
                <h4 className="text-sm font-semibold text-elvitra-white/90">
                  {feature.title}
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-elvitra-text-light/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Safety Features */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div
            className="h-5 w-1 rounded-full"
            style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
          />
          <Shield className="h-4 w-4 text-elvitra-pink-dark" />
          <h3 className="font-serif text-lg font-bold text-elvitra-white">
            Safety Features
          </h3>
        </div>

        <div
          className="rounded-xl p-5"
          style={{
            background: 'linear-gradient(135deg, rgba(26,26,46,0.6), rgba(15,15,26,0.8))',
            border: '1px solid rgba(214,122,146,0.08)',
          }}
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            {elevator.safetyFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.04, duration: 0.25 }}
                className="flex items-center gap-2.5"
              >
                <div
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{
                    backgroundColor: '#d67a92',
                    boxShadow: '0 0 4px rgba(214,122,146,0.4)',
                  }}
                />
                <span className="text-xs text-elvitra-white/70">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div
            className="h-5 w-1 rounded-full"
            style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
          />
          <h3 className="font-serif text-lg font-bold text-elvitra-white">
            Applications
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {elevator.applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.06, duration: 0.3 }}
              className="rounded-xl p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(26,26,46,0.6), rgba(15,15,26,0.8))',
                border: '1px solid rgba(214,122,146,0.08)',
              }}
            >
              <h4 className="text-sm font-semibold text-elvitra-pink-dark">
                {app.title}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-elvitra-text-light/60">
                {app.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
