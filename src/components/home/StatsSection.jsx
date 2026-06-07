import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Elevator Types' },
  { value: 9, suffix: '', label: 'Branch Locations' },
  { value: 15, suffix: '+', label: 'Years Experience' }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-elvitra-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-elvitra-border/50">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-elvitra-text-main mb-2 tracking-tight">
                <AnimatedCounter to={stat.value} />
                <span className="text-elvitra-accent ml-1">{stat.suffix}</span>
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-elvitra-text-muted mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
