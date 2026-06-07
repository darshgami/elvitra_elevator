import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Settings, Wrench, Headphones, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import FAQAccordion from '../components/shared/FAQAccordion';
import { faqs } from '../data/faqs';

const services = [
  { 
    id: 'amc',
    icon: Shield, 
    title: 'AMC Services', 
    subtitle: 'Annual Maintenance Contracts',
    desc: 'Comprehensive maintenance plans ensuring maximum uptime and safety. Choose from Basic, Standard, Premium, and Enterprise tiers tailored to your needs.',
    features: ['Regular safety inspections', 'Preventive maintenance', 'Priority emergency response']
  },
  { 
    id: 'modernization',
    icon: Settings, 
    title: 'Modernization', 
    subtitle: 'Upgrade & Transform',
    desc: 'Breathe new life into aging elevator systems with modern controllers, energy-efficient drives, and contemporary cabin aesthetics.',
    features: ['Control system upgrades', 'Energy-saving drives', 'Cabin renovation']
  },
  { 
    id: 'maintenance',
    icon: Wrench, 
    title: 'Maintenance', 
    subtitle: 'Preventive Care',
    desc: 'Scheduled preventive maintenance programs focusing on lubrication, alignment, and safety device testing to extend your elevator\'s lifespan.',
    features: ['Monthly maintenance visits', 'Safety device testing', 'Alignment checks']
  },
  { 
    id: 'emergency',
    icon: Headphones, 
    title: 'Emergency Support', 
    subtitle: '24/7 Assistance',
    desc: 'Round-the-clock emergency response network across all 9 Gujarat branches. Rapid technician dispatch for passenger rescue and critical failures.',
    features: ['24/7 response hotline', 'Passenger rescue', 'Rapid dispatch']
  },
];

export default function Services() {
  const serviceFaqs = faqs.filter(faq => faq.question.toLowerCase().includes('amc') || faq.question.toLowerCase().includes('maintenance') || faq.question.toLowerCase().includes('modernization'));

  return (
    <>
      <PageHero 
        caption="Our Expertise" 
        title="Complete Elevator Services" 
        subtitle="From routine maintenance to complete modernization, Elvitra ensures your vertical mobility systems run flawlessly." 
      />

      <section className="section-padding bg-elvitra-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card premium-card-hover p-10 flex flex-col bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-elvitra-secondary flex items-center justify-center">
                    <service.icon size={28} className="text-elvitra-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-elvitra-text-main mb-1">{service.title}</h3>
                    <p className="text-sm font-bold tracking-widest uppercase text-elvitra-text-muted">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-elvitra-text-muted leading-relaxed mb-8 flex-1">{service.desc}</p>
                
                <div className="mb-8 pt-6 border-t border-elvitra-border">
                  <ul className="space-y-4">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-base font-medium text-elvitra-text-main">
                        <div className="w-2 h-2 rounded-full bg-elvitra-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-elvitra-accent hover:text-elvitra-text-main transition-colors mt-auto group">
                  Explore Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-elvitra-secondary border-t border-elvitra-border">
        <div className="container-custom">
          <SectionHeading caption="FAQ" title="Common Service Questions" />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={serviceFaqs.length > 0 ? serviceFaqs : faqs.slice(0, 4)} />
          </div>
        </div>
      </section>
    </>
  );
}
