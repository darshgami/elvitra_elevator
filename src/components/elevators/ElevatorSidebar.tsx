import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpDown,
  Building2,
  Home,
  Truck,
  Gauge,
  Eye,
  Box,
  Package,
  ChevronDown,
} from 'lucide-react'
import type { Elevator } from '../../data/elevators'

const iconMap: Record<string, React.ElementType> = {
  passenger: ArrowUpDown,
  hospital: Building2,
  home: Home,
  freight: Truck,
  hydraulic: Gauge,
  capsule: Eye,
  mrl: Box,
  goods: Package,
}

interface ElevatorSidebarProps {
  elevators: Elevator[]
  activeId: string
  onSelect: (id: string) => void
}

export default function ElevatorSidebar({
  elevators,
  activeId,
  onSelect,
}: ElevatorSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeElevator = elevators.find(e => e.id === activeId) || elevators[0]
  const ActiveIcon = iconMap[activeElevator.id] || ArrowUpDown
  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <aside className="hidden md:block md:w-64 lg:w-72 md:flex-shrink-0">
        <div
          className="sticky top-[100px] w-full overflow-hidden rounded-2xl bg-elvitra-white"
          style={{
            border: '1px solid rgba(214,122,146,0.15)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          {/* Header */}
          <div
            className="px-6 py-5 bg-elvitra-pearl border-b border-elvitra-silver/50"
          >
            <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-elvitra-pink-dark uppercase">
              Browse Collection
            </p>
            <h3 className="mt-1 font-serif text-xl font-bold text-elvitra-dark">
              Elevator Types
            </h3>
          </div>

          {/* Elevator list */}
          <nav className="relative p-3 space-y-1">
            {elevators.map((elevator) => {
              const isActive = elevator.id === activeId
              const IconComponent = iconMap[elevator.id] || ArrowUpDown

              return (
                <motion.button
                  key={elevator.id}
                  onClick={() => onSelect(elevator.id)}
                  className="relative flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300 group"
                  style={{
                    background: isActive ? 'rgba(214,122,146,0.08)' : 'transparent',
                  }}
                  whileHover={{
                    backgroundColor: isActive ? undefined : 'rgba(214,122,146,0.04)',
                    x: isActive ? 0 : 4,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-indicator"
                      className="absolute left-0 top-2 bottom-2 w-[4px] rounded-r-full"
                      style={{
                        background: '#d67a92',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: isActive ? '#d67a92' : 'rgba(214,122,146,0.1)',
                      border: isActive
                        ? '1px solid rgba(214,122,146,0.3)'
                        : '1px solid transparent',
                    }}
                  >
                    <IconComponent
                      className="h-4.5 w-4.5 transition-colors duration-300"
                      style={{
                        color: isActive ? '#ffffff' : '#d67a92',
                      }}
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate font-sans text-sm font-bold transition-colors duration-300"
                      style={{
                        color: isActive ? '#d67a92' : '#2A2A35',
                      }}
                    >
                      {elevator.title}
                    </p>
                    <p
                      className="truncate text-xs font-medium italic transition-colors duration-300"
                      style={{
                        color: isActive ? 'rgba(214,122,146,0.8)' : '#8A8A9A',
                      }}
                    >
                      {elevator.subtitle}
                    </p>
                  </div>
                </motion.button>
              )
            })}
          </nav>

          <div className="px-6 py-4 bg-elvitra-pearl border-t border-elvitra-silver/30">
            <p className="text-center text-xs font-semibold text-elvitra-text-light">
              {elevators.length} elevator types available
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Dropdown */}
      <div className="relative z-50 mb-6 md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-4 bg-elvitra-white shadow-sm border border-elvitra-silver/50 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elvitra-pink-dark text-elvitra-white shadow-sm">
                <ActiveIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-elvitra-text-light">
                  Elevator Types
                </span>
                <span className="font-serif text-base font-bold text-elvitra-dark">
                  {activeElevator.title}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-elvitra-pink-dark/10"
            >
              <ChevronDown className="h-4 w-4 text-elvitra-pink-dark" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl bg-elvitra-white shadow-lg border border-elvitra-silver/50"
              >
                <div className="max-h-[350px] overflow-y-auto p-2">
                  {elevators.map((elevator) => {
                    const isActive = elevator.id === activeId
                    const IconComponent = iconMap[elevator.id] || ArrowUpDown

                    return (
                      <button
                        key={elevator.id}
                        onClick={() => {
                          onSelect(elevator.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-elvitra-pearl"
                        style={{
                          backgroundColor: isActive ? 'rgba(214,122,146,0.08)' : 'transparent',
                        }}
                      >
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-md"
                          style={{
                            background: isActive ? '#d67a92' : 'rgba(214,122,146,0.1)',
                          }}
                        >
                          <IconComponent
                            className="h-4 w-4"
                            style={{ color: isActive ? '#ffffff' : '#d67a92' }}
                          />
                        </div>
                        <span
                          className="text-sm font-bold"
                          style={{ color: isActive ? '#d67a92' : '#2A2A35' }}
                        >
                          {elevator.title}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
