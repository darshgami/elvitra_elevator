import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [floor, setFloor] = useState(1);

  // Simple floor counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFloor(f => f < 18 ? f + 1 : 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen -mt-20 flex items-center justify-center overflow-hidden bg-elvitra-primary">
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--color-elvitra-text-main) 1px, transparent 1px), linear-gradient(90deg, var(--color-elvitra-text-main) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Main Content Container */}
      <div className="container-custom relative z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-elvitra-secondary border border-elvitra-border mb-8">
                <span className="w-2 h-2 rounded-full bg-elvitra-accent animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-elvitra-text-main">Premium Elevator Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-elvitra-text-main mb-6 leading-[1.05]">
                A New Way To <span className="gradient-accent-text">Rise High.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-elvitra-text-muted mb-10 max-w-2xl leading-relaxed font-light">
                Engineering trust and elevating lives. Experience world-class vertical mobility designed for modern Indian architecture.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button to="/contact" size="lg" variant="primary" icon={ArrowRight}>
                  Get a Free Quote
                </Button>
                <Button to="/products" size="lg" variant="outline">
                  Explore Systems
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 pt-8 border-t border-elvitra-border flex items-center gap-8 opacity-80">
                <div>
                   <p className="text-3xl font-bold text-elvitra-text-main">500+</p>
                   <p className="text-sm font-medium text-elvitra-text-muted mt-1">Projects Delivered</p>
                </div>
                <div className="w-px h-12 bg-elvitra-border" />
                <div>
                   <p className="text-3xl font-bold text-elvitra-text-main">15<span className="text-elvitra-accent">+</span></p>
                   <p className="text-sm font-medium text-elvitra-text-muted mt-1">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual / Elevator Concept */}
          <div className="lg:col-span-5 hidden lg:block relative h-[600px]">
             <motion.div 
               style={{ y, opacity }}
               className="absolute inset-0 flex items-center justify-center"
             >
                {/* Abstract Elevator Shaft/Cabin Graphic */}
                <div className="w-64 h-[500px] border-2 border-elvitra-border rounded-t-full relative bg-elvitra-secondary overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
                   {/* Floor Indicator */}
                   <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-8 bg-elvitra-text-main rounded text-white flex items-center justify-center font-bold font-mono text-lg shadow-inner z-20">
                     {floor === 1 ? 'G' : floor === 2 ? '1' : floor - 1}
                   </div>
                   
                   {/* Cabin */}
                   <motion.div 
                     initial={{ y: 400 }}
                     animate={{ y: 80 }}
                     transition={{ duration: 2, ease: "easeOut" }}
                     className="absolute w-[90%] left-[5%] h-[320px] bg-white border border-elvitra-border rounded-t-full shadow-lg overflow-hidden z-10"
                   >
                     {/* Cabin Doors */}
                     <motion.div 
                       initial={{ x: 0 }}
                       animate={{ x: '-100%' }}
                       transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
                       className="absolute inset-y-0 left-0 w-1/2 bg-elvitra-secondary border-r border-elvitra-border" 
                     />
                     <motion.div 
                       initial={{ x: 0 }}
                       animate={{ x: '100%' }}
                       transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
                       className="absolute inset-y-0 right-0 w-1/2 bg-elvitra-secondary border-l border-elvitra-border" 
                     />
                     
                     {/* Inside Cabin Glow */}
                     <div className="absolute inset-0 bg-gradient-to-t from-elvitra-primary via-transparent to-transparent opacity-50" />
                     <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-1 bg-elvitra-accent opacity-30 blur-md" />
                   </motion.div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-elvitra-text-muted flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={20} className="text-elvitra-accent" />
      </motion.div>
      
    </section>
  );
}
