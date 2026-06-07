import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

export default function AboutPreview() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section-padding bg-elvitra-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
               <div className="w-10 h-px bg-elvitra-accent" />
               <p className="text-sm font-bold tracking-[0.2em] uppercase text-elvitra-accent">About Elvitra</p>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-elvitra-text-main mb-8 leading-[1.1]">
              Engineering Trust. <br/>
              <span className="text-elvitra-text-muted">Elevating Lives.</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-6 text-lg text-elvitra-text-muted leading-relaxed">
              <p>
                Elvitra Elevator is proud of having your confidence and admiration with its solutions and products. We will always be your solution partner with years of experience, young and dynamic staff, designs based on safety and durability, and efficient after-sales support.
              </p>
              <p className="font-medium text-elvitra-text-main pl-6 border-l-2 border-elvitra-accent">
                "We Promise Our Products, Services And Actions Will At All Time Be Worthy Of The Description"
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              {['Trusted', 'Professional', 'Smart'].map(pill => (
                <div key={pill} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-elvitra-secondary border border-elvitra-border text-sm font-semibold text-elvitra-text-main">
                  <CheckCircle2 size={16} className="text-elvitra-accent" />
                  {pill}
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <Button to="/about" variant="outline" size="lg">Discover Our Story</Button>
            </motion.div>
          </motion.div>

          {/* Right: Architectural Image placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-elvitra-secondary relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 flex items-center justify-center p-12">
                {/* Abstract geometric shapes representing architecture */}
                <div className="w-full h-full relative border border-gray-200 shadow-sm rounded-lg overflow-hidden bg-white">
                  <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-100" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100" />
                  <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-100" />
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-100" />
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-100" />
                  <div className="absolute bottom-0 right-0 w-32 h-64 bg-elvitra-secondary" />
                  <div className="absolute bottom-0 left-8 w-16 h-full bg-elvitra-accent/5" />
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-elvitra-border">
              <div className="text-4xl font-bold text-elvitra-text-main mb-1">15<span className="text-elvitra-accent">+</span></div>
              <div className="text-sm font-medium tracking-widest uppercase text-elvitra-text-muted">Years of<br/>Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
