import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Settings, Wrench, Headphones, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const services = [
  { icon: Shield, title: 'AMC Services', desc: 'Comprehensive annual maintenance contracts ensuring peak performance and safety.', link: '/services/amc' },
  { icon: Settings, title: 'Modernization', desc: 'Upgrade legacy elevator systems with modern, energy-efficient technology.', link: '/services/modernization' },
  { icon: Wrench, title: 'Maintenance', desc: 'Preventive and breakdown maintenance by certified elevator engineers.', link: '/services/maintenance' },
  { icon: Headphones, title: 'Emergency', desc: '24/7 rapid response team for passenger rescue and critical breakdowns.', link: '/services/emergency' },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-elvitra-primary">
      <div className="container-custom">
        <SectionHeading 
          caption="Our Services" 
          title="Lifecycle Support" 
          subtitle="Beyond installation, we provide comprehensive maintenance and modernization services to extend the lifespan of your elevators." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={service.link} className="block h-full p-8 premium-card premium-card-hover group bg-white">
                <div className="w-14 h-14 rounded-full bg-elvitra-secondary flex items-center justify-center mb-8 group-hover:bg-elvitra-accent transition-colors duration-300">
                  <service.icon size={24} className="text-elvitra-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-elvitra-text-main mb-3">{service.title}</h3>
                <p className="text-base text-elvitra-text-muted leading-relaxed mb-8">{service.desc}</p>
                <div className="flex items-center text-sm font-bold tracking-wider uppercase text-elvitra-text-main group-hover:text-elvitra-accent transition-colors mt-auto">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
