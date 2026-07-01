import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const linkVariants: any = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.04, duration: 0.35, ease: 'easeOut' },
  }),
}

const menuVariants: any = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
  }, [location.pathname])

  function handleNav(href: string) {
    setMenuOpen(false)
    if (isHome && href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 lg:pt-6 pb-2 transition-all duration-500 pointer-events-none"
      >
        <div className={`mx-auto flex h-[72px] lg:h-[80px] w-full max-w-7xl items-center justify-between rounded-full px-6 lg:px-8 pointer-events-auto transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-elvitra-dark/92 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl border border-white/5'
            : 'bg-transparent border border-transparent'
        }`}>
          {/* Logo Container (Left) */}
          <div className="flex shrink-0 items-center">
            <Link to="/" className="group flex items-center">
              <img 
                src="/logo.png" 
                alt="Elvitra Logo Mark" 
                width="40"
                height="40"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <img 
                src="/elvitraname.png" 
                alt="Elvitra Elevator"
                width="160"
                height="40"
                className="-ml-8 h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80" 
              />
            </Link>
          </div>

          {/* Desktop Navigation Links & CTA (Right) */}
          <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
            <button
              onClick={() => handleNav('/')}
              className={`group relative px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                isHome
                  ? 'text-elvitra-pink-dark'
                  : 'text-elvitra-white/80 hover:text-elvitra-pink-dark'
              }`}
            >
              Home
              <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left transform scale-x-0 bg-elvitra-pink-dark transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            <button
              onClick={() => handleNav('/elevators')}
              className={`group relative px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                location.pathname.startsWith('/elevators')
                  ? 'text-elvitra-pink-dark'
                  : 'text-elvitra-white/80 hover:text-elvitra-pink-dark'
              }`}
            >
              Elevators
              <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left transform scale-x-0 bg-elvitra-pink-dark transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            <button
              onClick={() => handleNav('/services')}
              className={`group relative px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                location.pathname.startsWith('/services')
                  ? 'text-elvitra-pink-dark'
                  : 'text-elvitra-white/80 hover:text-elvitra-pink-dark'
              }`}
            >
              Services
              <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left transform scale-x-0 bg-elvitra-pink-dark transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            {/* <button
              onClick={() => handleNav('/#safety')}
              className="group relative px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-pink-dark"
            >
              Safety
              <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left transform scale-x-0 bg-elvitra-pink-dark transition-transform duration-300 group-hover:scale-x-100" />
            </button> */}

            <button
              onClick={() => handleNav('/contact')}
              className={`group relative px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                location.pathname.startsWith('/contact')
                  ? 'text-elvitra-pink-dark'
                  : 'text-elvitra-white/80 hover:text-elvitra-pink-dark'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left transform scale-x-0 bg-elvitra-pink-dark transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            <div className="ml-2 ">
              <Button
                variant="primary"
                size="sm"
                className="rounded-full"
                onClick={() => handleNav('/contact')}
              >
                Get a Quote
              </Button>
            </div>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center text-elvitra-white lg:hidden ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-45 flex flex-col justify-center bg-elvitra-dark/98 px-6 py-20 backdrop-blur-2xl lg:hidden"
          >
            {/* Background Grid Accent */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px),
                  repeating-linear-gradient(0deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px)
                `,
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              <motion.button
                custom={0}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/')}
                className={`font-serif text-3xl font-medium tracking-wider transition-colors duration-300 ${
                  isHome ? 'text-elvitra-pink-dark' : 'text-elvitra-white/90 hover:text-elvitra-pink-dark'
                }`}
              >
                Home
              </motion.button>

              <motion.button
                custom={1}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/elevators')}
                className={`font-serif text-3xl font-medium tracking-wider transition-colors duration-300 ${
                  location.pathname.startsWith('/elevators')
                    ? 'text-elvitra-pink-dark'
                    : 'text-elvitra-white/90 hover:text-elvitra-pink-dark'
                }`}
              >
                Elevators
              </motion.button>

              <motion.button
                custom={2}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/services')}
                className={`font-serif text-3xl font-medium tracking-wider transition-colors duration-300 ${
                  location.pathname.startsWith('/services')
                    ? 'text-elvitra-pink-dark'
                    : 'text-elvitra-white/90 hover:text-elvitra-pink-dark'
                }`}
              >
                Services
              </motion.button>

              {/* <motion.button
                custom={3}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/#safety')}
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-pink-dark"
              >
                Safety
              </motion.button> */}

              <motion.button
                custom={4}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/contact')}
                className={`font-serif text-3xl font-medium tracking-wider transition-colors duration-300 ${
                  location.pathname.startsWith('/contact')
                    ? 'text-elvitra-pink-dark'
                    : 'text-elvitra-white/90 hover:text-elvitra-pink-dark'
                }`}
              >
                Contact
              </motion.button>

              <motion.div
                custom={5}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="mt-2"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleNav('/contact')}
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
