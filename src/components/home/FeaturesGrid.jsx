import { motion } from 'framer-motion';
import { features } from '../../data/features';
import SectionHeading from '../ui/SectionHeading';

export default function FeaturesGrid() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section-padding bg-elvitra-secondary">
      <div className="container-custom">
        <SectionHeading 
          caption="The Elvitra Standard" 
          title="Engineering Excellence" 
          subtitle="Every elevator we build is founded on these eight core pillars of quality and performance." 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="premium-card premium-card-hover p-8 flex flex-col group bg-white"
            >
              <div className="w-14 h-14 rounded-xl bg-elvitra-secondary flex items-center justify-center mb-6 group-hover:bg-elvitra-accent group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} className="text-elvitra-text-main group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-elvitra-text-main mb-3">{feature.title}</h3>
              <p className="text-base text-elvitra-text-muted leading-relaxed flex-1">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
