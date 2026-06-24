import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpFromLine } from 'lucide-react'
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
        className={`fixed left-0 right-0 top-0 z-50 h-[80px] px-6 lg:px-12 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-elvitra-dark/92 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <img 
              src="/logo.png" 
              alt="Elvitra Logo Mark" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <img 
              src="/elvitraname.png" 
              alt="Elvitra Elevator" 
              className="-ml-9 h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:-ml-[22]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            <button
              onClick={() => handleNav('/')}
              className={`px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                isHome
                  ? 'text-elvitra-pink-dark'
                  : 'text-elvitra-white/80 hover:text-elvitra-pink-dark'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('/elevators')}
              className={`px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                location.pathname.startsWith('/elevators')
                  ? 'text-elvitra-pink-dark'
                  : 'text-elvitra-white/80 hover:text-elvitra-pink-dark'
              }`}
            >
              Elevators
            </button>

            <button
              onClick={() => handleNav('/services')}
              className={`px-3 py-2 font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                location.pathname.startsWith('/services')
                  ? 'text-elvitra-pink-dark'
                  : 'text-elvitra-white/80 hover:text-elvitra-pink-dark'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => handleNav('/#features')}
              className="px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-pink-dark"
            >
              Features
            </button>

            <button
              onClick={() => handleNav('/#safety')}
              className="px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-pink-dark"
            >
              Safety
            </button>

            <button
              onClick={() => handleNav('/#contact')}
              className="px-3 py-2 font-sans text-sm font-medium tracking-wider text-elvitra-white/80 uppercase transition-colors duration-300 hover:text-elvitra-pink-dark"
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

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center text-elvitra-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
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

              <motion.button
                custom={3}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleNav('/#features')}
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-pink-dark"
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
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-pink-dark"
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
                className="font-serif text-3xl font-medium tracking-wider text-elvitra-white/90 transition-colors duration-300 hover:text-elvitra-pink-dark"
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
