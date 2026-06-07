import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import { elevatorTypes } from '../data/elevatorTypes';

export default function Products() {
  return (
    <>
      <PageHero 
        caption="Our Systems" 
        title="Elevator Solutions" 
        subtitle="Discover our complete range of premium vertical mobility systems, engineered for safety, efficiency, and architectural elegance." 
      />

      <section className="section-padding bg-elvitra-secondary min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elevatorTypes.map((type, i) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/products/${type.slug}`} className="block premium-card premium-card-hover h-full flex flex-col group bg-white overflow-hidden">
                  <div className="h-64 bg-gray-100 relative overflow-hidden flex items-center justify-center border-b border-elvitra-border">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-elvitra-text-main) 1px, transparent 1px), linear-gradient(90deg, var(--color-elvitra-text-main) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <type.icon size={64} strokeWidth={1} className="text-elvitra-text-muted group-hover:text-elvitra-accent transition-colors duration-500 relative z-10" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-elvitra-text-main mb-2 group-hover:text-elvitra-accent transition-colors">{type.name}</h3>
                    <p className="text-sm font-bold tracking-widest uppercase text-elvitra-text-muted mb-6">{type.tagline}</p>
                    
                    <p className="text-base text-elvitra-text-muted leading-relaxed mb-8 flex-1 line-clamp-3">
                      {type.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-elvitra-secondary px-3 py-1.5 rounded-full text-elvitra-text-main border border-elvitra-border">
                        <Settings size={12} className="text-elvitra-accent" /> Up to {type.specs.speed}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm font-bold tracking-wider uppercase text-elvitra-text-main group-hover:text-elvitra-accent transition-colors mt-auto">
                      View Specifications <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
