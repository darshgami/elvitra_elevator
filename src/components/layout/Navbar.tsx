import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ArrowUpFromLine,
  ChevronDown,
  ArrowUpDown,
  Building2,
  Home,
  Truck,
  Gauge,
  Eye,
  Box,
  Package,
  HardHat,
  Wrench,
  FileCheck,
  RefreshCw,
} from 'lucide-react'
import { categories, services } from '../../data/brochure'
import Button from '../ui/Button'

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const elevatorIconMap: Record<string, React.ElementType> = {
  passenger: ArrowUpDown,
  hospital: Building2,
  home: Home,
  freight: Truck,
  hydraulic: Gauge,
  capsule: Eye,
  mrl: Box,
  goods: Package,
}

const serviceIconMap: Record<string, React.ElementType> = {
  HardHat,
  Wrench,
  FileCheck,
  RefreshCw,
}

const elevatorGroups = [
  { label: 'Passenger & Healthcare', ids: ['passenger', 'hospital'] },
  { label: 'Residential & Luxury', ids: ['home', 'capsule'] },
  { label: 'Industrial & Cargo', ids: ['freight', 'goods'] },
  { label: 'Technology & Efficiency', ids: ['hydraulic', 'mrl'] },
]

const megaPanelVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.04, duration: 0.35, ease: 'easeOut' },
  }),
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<'elevators' | 'services' | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<'elevators' | 'services' | null>(null)
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileAccordion(null)
  }, [location.pathname])

  function handleNav(href: string) {
    setMenuOpen(false)
    setMobileAccordion(null)
    if (isHome && href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
    }
  }

  function handleMegaEnter(type: 'elevators' | 'services') {
    if (megaTimer.current) clearTimeout(megaTimer.current)
    setActiveMega(type)
  }

  function handleMegaLeave() {
    megaTimer.current = setTimeout(() => setActiveMega(null), 120)
  }

  function closeMega() {
    setActiveMega(null)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 right-0 top-0 z-50 h-[80px] px-6 lg:px-12 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-elvitra-dark/92 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <ArrowUpFromLine className="h-6 w-6 text-elvitra-gold transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="font-serif text-2xl font-bold tracking-[0.15em] text-elvitra-gold">
              ELVITRA
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <button
              onClick={() => handleNav('/')}
              className="px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-gold"
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={() => handleMegaEnter('elevators')}
              onMouseLeave={handleMegaLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  activeMega === 'elevators'
                    ? 'text-elvitra-gold'
                    : 'text-elvitra-white/80 hover:text-elvitra-gold'
                }`}
              >
                Elevators
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    activeMega === 'elevators' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMega === 'elevators' && (
                  <motion.div
                    variants={megaPanelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                    onMouseEnter={() => handleMegaEnter('elevators')}
                    onMouseLeave={handleMegaLeave}
                  >
                    <div className="w-[860px] overflow-hidden rounded-xl border border-elvitra-gold/20 bg-elvitra-dark/98 shadow-2xl backdrop-blur-2xl">
                      <div className="h-[3px] bg-gradient-to-r from-transparent via-elvitra-gold to-transparent" />
                      <div className="p-7">
                        <div className="mb-5 flex items-center gap-2 border-b border-elvitra-gold/10 pb-3">
                          <ArrowUpDown className="h-4 w-4 text-elvitra-gold" />
                          <span className="font-serif text-xs font-semibold tracking-[0.2em] text-elvitra-gold uppercase">
                            Premium Elevator Range
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                          {elevatorGroups.map((group) => (
                            <div key={group.label} className="col-span-1">
                              <p className="mb-2 text-[10px] font-semibold tracking-[0.15em] text-elvitra-gold/60 uppercase">
                                {group.label}
                              </p>
                              <div className="space-y-1">
                                {group.ids.map((id) => {
                                  const cat = categories.find((c) => c.id === id)
                                  if (!cat) return null
                                  const IconComp = elevatorIconMap[cat.id] || ArrowUpDown
                                  return (
                                    <Link
                                      key={cat.id}
                                      to={`/elevators/${cat.id}`}
                                      onClick={closeMega}
                                      className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-300 hover:scale-[1.02] hover:bg-elvitra-gold/5"
                                    >
                                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-elvitra-gold/10 transition-colors duration-300 group-hover/item:bg-elvitra-gold/20">
                                        <IconComp className="h-4 w-4 text-elvitra-gold" />
                                      </div>
                                      <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold text-elvitra-white transition-colors duration-300 group-hover/item:text-elvitra-gold">
                                          {cat.title}
                                        </p>
                                        <p className="truncate text-[10px] text-elvitra-white/40">
                                          {cat.subtitle}
                                        </p>
                                      </div>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMegaEnter('services')}
              onMouseLeave={handleMegaLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  activeMega === 'services'
                    ? 'text-elvitra-gold'
                    : 'text-elvitra-white/80 hover:text-elvitra-gold'
                }`}
              >
                Services
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    activeMega === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMega === 'services' && (
                  <motion.div
                    variants={megaPanelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                    onMouseEnter={() => handleMegaEnter('services')}
                    onMouseLeave={handleMegaLeave}
                  >
                    <div className="w-[580px] overflow-hidden rounded-xl border border-elvitra-gold/20 bg-elvitra-dark/98 shadow-2xl backdrop-blur-2xl">
                      <div className="h-[3px] bg-gradient-to-r from-transparent via-elvitra-gold to-transparent" />
                      <div className="p-7">
                        <div className="mb-5 flex items-center gap-2 border-b border-elvitra-gold/10 pb-3">
                          <HardHat className="h-4 w-4 text-elvitra-gold" />
                          <span className="font-serif text-xs font-semibold tracking-[0.2em] text-elvitra-gold uppercase">
                            Our Services
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {services.map((svc) => {
                            const IconComp = serviceIconMap[svc.icon] || Wrench
                            const slug = slugify(svc.title)
                            return (
                              <Link
                                key={svc.title}
                                to={`/services/${slug}`}
                                onClick={closeMega}
                                className="group/item rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-elvitra-gold/5"
                              >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-elvitra-gold/10 transition-colors duration-300 group-hover/item:bg-elvitra-gold/20">
                                  <IconComp className="h-5 w-5 text-elvitra-gold" />
                                </div>
                                <h4 className="font-serif text-sm font-bold text-elvitra-white transition-colors duration-300 group-hover/item:text-elvitra-gold">
                                  {svc.title}
                                </h4>
                                <p className="mt-0.5 text-[11px] leading-relaxed text-elvitra-white/50 line-clamp-2">
                                  {svc.description}
                                </p>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNav('/#features')}
              className="px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-gold"
            >
              Features
            </button>

            <button
              onClick={() => handleNav('/#safety')}
              className="px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-gold"
            >
              Safety
            </button>

            <button
              onClick={() => handleNav('/#contact')}
              className="px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-gold"
            >
              Contact
            </button>

            <div className="ml-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNav('/#contact')}
              >
                Get a Quote
              </Button>
            </div>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center text-elvitra-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-elvitra-dark/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-28">
              <motion.button
                custom={0}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/')}
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-gold"
              >
                Home
              </motion.button>

              <motion.div
                custom={1}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full max-w-xs"
              >
                <button
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === 'elevators' ? null : 'elevators'
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-gold"
                >
                  Elevators
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileAccordion === 'elevators' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === 'elevators' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {categories.map((cat) => {
                          const IconComp = elevatorIconMap[cat.id] || ArrowUpDown
                          return (
                            <Link
                              key={cat.id}
                              to={`/elevators/${cat.id}`}
                              onClick={() => handleNav(`/elevators/${cat.id}`)}
                              className="flex items-center gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-elvitra-gold/10"
                            >
                              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-elvitra-gold/10">
                                <IconComp className="h-4 w-4 text-elvitra-gold" />
                              </div>
                              <span className="text-left text-sm font-medium leading-tight text-elvitra-white/80">
                                {cat.title}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                custom={2}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full max-w-xs"
              >
                <button
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === 'services' ? null : 'services'
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-gold"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileAccordion === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 space-y-1">
                        {services.map((svc) => {
                          const IconComp = serviceIconMap[svc.icon] || Wrench
                          const slug = slugify(svc.title)
                          return (
                            <Link
                              key={svc.title}
                              to={`/services/${slug}`}
                              onClick={() => handleNav(`/services/${slug}`)}
                              className="flex items-center gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-elvitra-gold/10"
                            >
                              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-elvitra-gold/10">
                                <IconComp className="h-4 w-4 text-elvitra-gold" />
                              </div>
                              <span className="text-left text-sm font-medium leading-tight text-elvitra-white/80">
                                {svc.title}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                custom={3}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/#features')}
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-gold"
              >
                Features
              </motion.button>

              <motion.button
                custom={4}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/#safety')}
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-gold"
              >
                Safety
              </motion.button>

              <motion.button
                custom={5}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/#contact')}
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-gold"
              >
                Contact
              </motion.button>

              <motion.div
                custom={6}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="mt-2"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleNav('/#contact')}
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
