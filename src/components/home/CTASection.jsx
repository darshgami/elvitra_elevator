import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-24 bg-elvitra-text-main relative overflow-hidden">
      
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-elvitra-text-main to-transparent opacity-80" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-16 h-px bg-elvitra-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to Elevate <br />
            <span className="text-gray-400">Your Building?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our engineering team today to discuss your vertical mobility requirements. We provide end-to-end solutions from design to installation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" size="lg" variant="accent" icon={ArrowRight}>
              Contact Us Now
            </Button>
            <Button href="#" size="lg" variant="outline" className="text-white border-white/20 hover:bg-white hover:text-elvitra-text-main" icon={Download}>
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
