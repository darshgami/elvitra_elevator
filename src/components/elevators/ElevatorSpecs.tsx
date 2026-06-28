import { motion } from 'framer-motion'
import {
  Weight,
  Gauge,
  Building2,
  Cpu,
  DoorOpen,
  Cog,
  Zap,
  Settings,
} from 'lucide-react'

const specIcons: Record<string, React.ElementType> = {
  capacity: Weight,
  speed: Gauge,
  travel: Building2,
  operation: Cpu,
  doorType: DoorOpen,
  driveSystem: Cog,
  powerRequirement: Zap,
  machineType: Settings,
}

const specLabels: Record<string, string> = {
  capacity: 'Capacity',
  speed: 'Speed',
  travel: 'Travel Height',
  operation: 'Operation',
  doorType: 'Door Type',
  driveSystem: 'Drive System',
  powerRequirement: 'Power',
  machineType: 'Machine Type',
}

interface ElevatorSpecsProps {
  specifications: Record<string, string>
}

export default function ElevatorSpecs({ specifications }: ElevatorSpecsProps) {
  const specs = Object.entries(specifications) as [string, string][]

  return (
    <div className="bg-elvitra-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-elvitra-silver/50">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-6 w-1 rounded-full bg-elvitra-pink-dark" />
        <h3 className="font-serif text-xl font-bold text-elvitra-dark">
          Technical Specifications
        </h3>
      </div>

      <div className="overflow-hidden rounded-xl bg-elvitra-pearl border border-elvitra-silver/40 divide-y divide-elvitra-silver/30">
        {specs.map(([key, value], index) => {
          const IconComponent = specIcons[key] || Settings
          const label = specLabels[key] || key

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.04, duration: 0.25 }}
              className="flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-elvitra-white"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-elvitra-pink-dark/10">
                <IconComponent className="h-4 w-4 text-elvitra-pink-dark" />
              </div>

              <div className="flex flex-1 items-center justify-between gap-4">
                <span className="text-xs font-bold tracking-wider text-elvitra-text uppercase">
                  {label}
                </span>
                <span className="text-right text-sm font-semibold text-elvitra-dark">
                  {value}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
