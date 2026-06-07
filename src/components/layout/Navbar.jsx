import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Button from '../ui/Button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    mega: true,
    columns: [
      { title: 'Elevator Types', items: [
        { name: 'Passenger Auto', href: '/products/passenger-auto' },
        { name: 'Passenger Manual', href: '/products/passenger-manual' },
        { name: 'Capsule', href: '/products/capsule' },
        { name: 'Hospital', href: '/products/hospital' },
        { name: 'Home & Bungalow', href: '/products/home-bungalow' },
        { name: 'MRL', href: '/products/mrl' },
        { name: 'Hydraulic', href: '/products/hydraulic' },
        { name: 'Goods', href: '/products/goods-freight' },
        { name: 'Car Elevator', href: '/products/car-automobile' },
      ]},
      { title: 'Components', items: [
        { name: 'Range of Doors', href: '/categories/doors' },
        { name: 'Range of Cabins', href: '/categories/cabins' },
        { name: 'Control Panels', href: '/categories/panels' },
      ]},
    ]
  },
  {
    label: 'Services',
    mega: true,
    columns: [
      { title: 'Service Types', items: [
        { name: 'AMC Services', href: '/services/amc' },
        { name: 'Modernization', href: '/services/modernization' },
        { name: 'Maintenance', href: '/services/maintenance' },
        { name: 'Emergency Support', href: '/services/emergency' },
      ]}
    ]
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
  }`;

  const linkColor = isScrolled ? 'text-elvitra-text-main' : 'text-elvitra-text-main';

  return (
    <header className={navClass}>
      <div className="container-custom flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 relative z-50">
          <div className="w-10 h-10 bg-elvitra-text-main rounded-md flex items-center justify-center font-bold text-white text-xl">
            E
          </div>
          <div className="hidden sm:block">
            <span className={`text-xl font-bold tracking-wider block leading-none ${linkColor}`}>ELVITRA</span>
            <span className={`text-[10px] tracking-[0.2em] uppercase font-medium mt-1 block ${isScrolled ? 'text-elvitra-text-muted' : 'text-elvitra-text-muted'}`}>Elevator</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative group h-full"
              onMouseEnter={() => item.mega && setActiveMegaMenu(item.label)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link 
                to={item.href || '#'} 
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                  location.pathname === item.href ? 'text-elvitra-accent' : linkColor
                } hover:text-elvitra-accent`}
              >
                {item.label}
                {item.mega && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />}
              </Link>

              {/* Mega Menu Dropdown */}
              {item.mega && (
                <AnimatePresence>
                  {activeMegaMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max min-w-[500px] bg-white rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-elvitra-border p-8 grid grid-cols-2 gap-12"
                    >
                      {/* Invisible bridge to prevent hover loss */}
                      <div className="absolute -top-6 left-0 w-full h-6" />
                      
                      {item.columns.map((col, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-bold tracking-widest uppercase text-elvitra-text-muted mb-4 pb-2 border-b border-elvitra-border">
                            {col.title}
                          </h4>
                          <ul className="space-y-3">
                            {col.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link 
                                  to={subItem.href}
                                  className="text-sm font-medium text-elvitra-text-main hover:text-elvitra-accent transition-colors flex items-center"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <div className={`hidden md:flex items-center gap-2 mr-4 ${linkColor}`}>
            <Phone size={16} className="text-elvitra-accent" />
            <a href="tel:+919979964474" className="text-sm font-medium hover:text-elvitra-accent transition-colors">
              +91 99799 64474
            </a>
          </div>
          
          <Button to="/contact" variant="primary" size="sm" className="hidden sm:flex">
            Get Quote
          </Button>
          
          <button 
            className={`xl:hidden p-2 rounded-md ${isScrolled ? 'text-elvitra-text-main bg-gray-100' : 'text-elvitra-text-main bg-gray-100'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 pt-24 bg-white z-40 overflow-y-auto"
          >
            <div className="container-custom pb-20">
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 pb-4">
                    {!item.mega ? (
                      <Link 
                        to={item.href}
                        className="text-2xl font-bold text-elvitra-text-main hover:text-elvitra-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="space-y-4">
                        <span className="text-2xl font-bold text-elvitra-text-main">{item.label}</span>
                        <div className="pl-4 border-l-2 border-elvitra-accent/20 space-y-6 mt-4">
                          {item.columns.map((col, idx) => (
                            <div key={idx}>
                              <h4 className="text-sm font-bold tracking-widest uppercase text-elvitra-text-muted mb-3">
                                {col.title}
                              </h4>
                              <ul className="space-y-3">
                                {col.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link 
                                      to={subItem.href}
                                      className="text-lg font-medium text-gray-700 hover:text-elvitra-accent transition-colors block"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="text-sm font-bold tracking-widest uppercase text-elvitra-text-muted mb-4">Contact Us</h4>
                  <div className="space-y-3 text-lg font-medium text-elvitra-text-main">
                    <p>+91 99799 64474</p>
                    <p>+91 88666 43510</p>
                    <p className="text-elvitra-accent text-base mt-2">info.elvitraelevator@gmail.com</p>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
