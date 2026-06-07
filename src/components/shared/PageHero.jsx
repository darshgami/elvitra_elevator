import { motion } from 'framer-motion';

export default function PageHero({ caption, title, subtitle }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-elvitra-secondary border-b border-elvitra-border">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--color-elvitra-text-main) 1px, transparent 1px), linear-gradient(90deg, var(--color-elvitra-text-main) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {caption && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-elvitra-border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-elvitra-accent" />
              <span className="text-xs font-bold tracking-widest uppercase text-elvitra-text-main">{caption}</span>
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-elvitra-text-main mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-elvitra-text-muted max-w-2xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
