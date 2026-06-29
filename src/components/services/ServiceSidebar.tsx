import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HardHat, Wrench, FileCheck, RefreshCw, ChevronDown } from 'lucide-react'
import type { servicesData } from '../../data/services'

const iconMap: Record<string, React.ElementType> = {
  HardHat,
  Wrench,
  FileCheck,
  RefreshCw,
}

type ServiceItem = (typeof servicesData)[number]

interface ServiceSidebarProps {
  services: ServiceItem[]
  activeId: string
  onSelect: (id: string) => void
}

export default function ServiceSidebar({
  services,
  activeId,
  onSelect,
}: ServiceSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeService = services.find(s => s.id === activeId) || services[0]
  const ActiveIcon = iconMap[activeService.icon] || Wrench
  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <aside className="hidden md:block">
        <div
          className="sticky top-[100px] w-[280px] overflow-hidden rounded-2xl bg-elvitra-white"
          style={{
            border: '1px solid rgba(214,122,146,0.15)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          }}
        >
          {/* Header */}
          <div
            className="px-6 py-5"
            style={{
              borderBottom: '1px solid rgba(214,122,146,0.1)',
              background: 'linear-gradient(180deg, rgba(214,122,146,0.06) 0%, transparent 100%)',
            }}
          >
            <p className="font-sans text-[10px] font-semibold tracking-[0.2em] text-elvitra-pink-dark/60 uppercase">
              Our Expertise
            </p>
            <h3 className="mt-1 font-serif text-lg font-bold text-elvitra-dark">
              Professional Services
            </h3>
          </div>

          {/* Service list */}
          <nav className="relative p-3">
            {services.map((service) => {
              const isActive = service.id === activeId
              const IconComponent = iconMap[service.icon] || Wrench

              return (
                <motion.button
                  key={service.id}
                  onClick={() => onSelect(service.id)}
                  className="relative flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(214,122,146,0.08) 0%, rgba(214,122,146,0.02) 100%)'
                      : 'transparent',
                  }}
                  whileHover={{
                    backgroundColor: isActive ? undefined : 'rgba(214,122,146,0.05)',
                    x: isActive ? 0 : 4,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="service-sidebar-indicator"
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #f4d0d9, #d67a92, #d67a92)',
                        boxShadow: '0 0 8px rgba(214,122,146,0.4), 0 0 16px rgba(214,122,146,0.2)',
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
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(214,122,146,0.15), rgba(214,122,146,0.05))'
                        : 'rgba(214,122,146,0.04)',
                      border: isActive
                        ? '1px solid rgba(214,122,146,0.2)'
                        : '1px solid rgba(214,122,146,0.08)',
                      boxShadow: isActive
                        ? '0 0 12px rgba(214,122,146,0.1)'
                        : 'none',
                    }}
                    animate={{
                      scale: isActive ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                      ease: 'easeInOut',
                    }}
                  >
                    <IconComponent
                      className="h-4.5 w-4.5 transition-colors duration-300"
                      style={{
                        color: isActive ? '#d67a92' : 'rgba(0,0,0,0.4)',
                      }}
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate font-sans text-sm font-semibold transition-colors duration-300"
                      style={{
                        color: isActive ? '#d67a92' : 'rgba(0,0,0,0.7)',
                      }}
                    >
                      {service.shortTitle}
                    </p>
                    <p
                      className="truncate text-[11px] transition-colors duration-300"
                      style={{
                        color: isActive ? 'rgba(214,122,146,0.8)' : 'rgba(0,0,0,0.4)',
                      }}
                    >
                      {service.title}
                    </p>
                  </div>

                  {/* Active dot */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-2 w-2 flex-shrink-0 rounded-full"
                      style={{
                        backgroundColor: '#d67a92',
                        boxShadow: '0 0 6px rgba(214,122,146,0.6)',
                      }}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>

          {/* Bottom gradient fade */}
          <div
            className="h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(214,122,146,0.2), transparent)',
            }}
          />
          <div className="px-6 py-4">
            <p className="text-center text-[10px] text-elvitra-text-light/40">
              Full lifecycle support
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Dropdown */}
      <div className="mb-6 md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,1), rgba(250,250,250,1))',
              border: '1px solid rgba(214,122,146,0.3)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-elvitra-pink-dark/10">
                <ActiveIcon className="h-5 w-5 text-elvitra-pink-dark" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-elvitra-pink-dark/70">
                  Our Expertise
                </span>
                <span className="font-serif text-sm font-bold text-elvitra-dark">
                  {activeService.shortTitle}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-elvitra-pink-dark" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl"
                style={{
                  background: 'rgba(255,255,255,1)',
                  border: '1px solid rgba(214,122,146,0.2)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                }}
              >
                <div className="max-h-[300px] overflow-y-auto p-2">
                  {services.map((service) => {
                    const isActive = service.id === activeId
                    const IconComponent = iconMap[service.icon] || Wrench

                    return (
                      <button
                        key={service.id}
                        onClick={() => {
                          onSelect(service.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors"
                        style={{
                          backgroundColor: isActive ? 'rgba(214,122,146,0.1)' : 'transparent',
                        }}
                      >
                        <IconComponent
                          className="h-4 w-4"
                          style={{ color: isActive ? '#d67a92' : 'rgba(0,0,0,0.4)' }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: isActive ? '#d67a92' : 'rgba(0,0,0,0.7)' }}
                        >
                          {service.shortTitle}
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
