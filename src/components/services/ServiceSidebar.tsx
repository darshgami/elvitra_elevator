import { motion } from 'framer-motion'
import { HardHat, Wrench, FileCheck, RefreshCw } from 'lucide-react'
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
  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <aside className="hidden md:block">
        <div
          className="sticky top-[100px] w-[280px] overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(180deg, rgba(26,26,46,0.95) 0%, rgba(15,15,26,0.98) 100%)',
            border: '1px solid rgba(201,168,76,0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,168,76,0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Header */}
          <div
            className="px-6 py-5"
            style={{
              borderBottom: '1px solid rgba(201,168,76,0.1)',
              background: 'linear-gradient(180deg, rgba(201,168,76,0.06) 0%, transparent 100%)',
            }}
          >
            <p className="font-sans text-[10px] font-semibold tracking-[0.2em] text-elvitra-gold/60 uppercase">
              Our Expertise
            </p>
            <h3 className="mt-1 font-serif text-lg font-bold text-elvitra-white">
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
                      ? 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)'
                      : 'transparent',
                  }}
                  whileHover={{
                    backgroundColor: isActive ? undefined : 'rgba(201,168,76,0.05)',
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
                        background: 'linear-gradient(180deg, #dfc173, #c9a84c, #b8953a)',
                        boxShadow: '0 0 8px rgba(201,168,76,0.4), 0 0 16px rgba(201,168,76,0.2)',
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
                        ? 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.1))'
                        : 'rgba(201,168,76,0.06)',
                      border: isActive
                        ? '1px solid rgba(201,168,76,0.3)'
                        : '1px solid rgba(201,168,76,0.08)',
                      boxShadow: isActive
                        ? '0 0 12px rgba(201,168,76,0.15)'
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
                        color: isActive ? '#c9a84c' : 'rgba(138,138,154,0.6)',
                      }}
                    />
                  </motion.div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate font-sans text-sm font-semibold transition-colors duration-300"
                      style={{
                        color: isActive ? '#c9a84c' : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {service.shortTitle}
                    </p>
                    <p
                      className="truncate text-[11px] transition-colors duration-300"
                      style={{
                        color: isActive ? 'rgba(201,168,76,0.6)' : 'rgba(138,138,154,0.4)',
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
                        backgroundColor: '#c9a84c',
                        boxShadow: '0 0 6px rgba(201,168,76,0.6)',
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
              background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
            }}
          />
          <div className="px-6 py-4">
            <p className="text-center text-[10px] text-elvitra-text-light/40">
              Full lifecycle support
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile horizontal scroll */}
      <div className="mb-6 md:hidden">
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {services.map((service) => {
            const isActive = service.id === activeId
            const IconComponent = iconMap[service.icon] || Wrench

            return (
              <motion.button
                key={service.id}
                onClick={() => onSelect(service.id)}
                className="relative flex flex-shrink-0 items-center gap-2 rounded-full px-4 py-2.5"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))'
                    : 'rgba(26,26,46,0.8)',
                  border: isActive
                    ? '1px solid rgba(201,168,76,0.4)'
                    : '1px solid rgba(201,168,76,0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent
                  className="h-4 w-4"
                  style={{ color: isActive ? '#c9a84c' : 'rgba(138,138,154,0.6)' }}
                />
                <span
                  className="whitespace-nowrap text-xs font-semibold"
                  style={{ color: isActive ? '#c9a84c' : 'rgba(255,255,255,0.6)' }}
                >
                  {service.shortTitle}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </>
  )
}
