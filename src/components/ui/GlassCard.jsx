import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = false, delay = 0 }) {
  const baseClass = hover ? 'premium-card-hover premium-card' : 'premium-card';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`${baseClass} ${className} overflow-hidden`}
    >
      {children}
    </motion.div>
  );
}
