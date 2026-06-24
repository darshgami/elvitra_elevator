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
import type { Elevator } from '../../data/elevators'

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
  elevator: Elevator
}

export default function ElevatorSpecs({ elevator }: ElevatorSpecsProps) {
  const specs = Object.entries(elevator.specifications) as [string, string][]

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div
          className="h-5 w-1 rounded-full"
          style={{ background: 'linear-gradient(180deg, #f4d0d9, #d67a92)' }}
        />
        <h3 className="font-serif text-lg font-bold text-elvitra-white">
          Technical Specifications
        </h3>
      </div>

      <div
        className="overflow-hidden rounded-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(26,26,46,0.6), rgba(15,15,26,0.8))',
          border: '1px solid rgba(214,122,146,0.1)',
        }}
      >
        {specs.map(([key, value], index) => {
          const IconComponent = specIcons[key] || Settings
          const label = specLabels[key] || key

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.04, duration: 0.25 }}
              className="flex items-center gap-4 px-5 py-3.5 transition-colors duration-300 hover:bg-elvitra-pink-dark/[0.03]"
              style={{
                borderBottom:
                  index < specs.length - 1
                    ? '1px solid rgba(214,122,146,0.06)'
                    : 'none',
              }}
            >
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                style={{
                  background: 'rgba(214,122,146,0.08)',
                  border: '1px solid rgba(214,122,146,0.1)',
                }}
              >
                <IconComponent className="h-3.5 w-3.5 text-elvitra-pink-dark/70" />
              </div>

              <div className="flex flex-1 items-center justify-between gap-4">
                <span className="text-xs font-medium tracking-wider text-elvitra-text-light/60 uppercase">
                  {label}
                </span>
                <span className="text-right text-sm font-semibold text-elvitra-white/90">
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
