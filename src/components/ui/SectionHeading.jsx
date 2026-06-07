import { motion } from 'framer-motion';

export default function SectionHeading({ 
  caption, 
  title, 
  subtitle, 
  align = 'center',
  light = false
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }[align];

  const titleColor = light ? 'text-white' : 'text-elvitra-text-main';
  const subtitleColor = light ? 'text-gray-300' : 'text-elvitra-text-muted';

  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        {caption && (
          <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
             {align === 'center' && <div className="w-8 h-px bg-elvitra-accent" />}
             <p className="text-sm font-semibold tracking-[0.2em] uppercase text-elvitra-accent">
               {caption}
             </p>
             {align !== 'right' && align !== 'center' && <div className="w-8 h-px bg-elvitra-accent" />}
             {align === 'center' && <div className="w-8 h-px bg-elvitra-accent" />}
             {align === 'right' && <div className="w-8 h-px bg-elvitra-accent" />}
          </div>
        )}
        
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${titleColor}`}>
          {title}
        </h2>
        
        {subtitle && (
          <p className={`text-lg leading-relaxed ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
