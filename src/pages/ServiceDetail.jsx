import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Settings, Wrench, Headphones, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import ContactForm from '../components/shared/ContactForm';
import FAQAccordion from '../components/shared/FAQAccordion';
import { faqs } from '../data/faqs';

const serviceData = {
  amc: {
    icon: Shield,
    title: 'AMC Services',
    subtitle: 'Annual Maintenance Contract',
    description: 'Our Comprehensive Annual Maintenance Contracts (AMC) guarantee that your elevator operates safely, reliably, and efficiently. Regular maintenance prevents unexpected breakdowns and extends the life of your equipment.',
    details: [
      'Comprehensive elevator maintenance plans',
      'Regular safety inspections',
      'Preventive maintenance schedules',
      'Emergency repair coverage',
      '24/7 helpline support',
      'Certified technicians',
      'Genuine spare parts',
      'Documentation and compliance support'
    ],
    plans: ['Basic', 'Standard', 'Premium', 'Enterprise']
  },
  modernization: {
    icon: Settings,
    title: 'Modernization',
    subtitle: 'Elevator Upgrades',
    description: 'Transform your aging elevator system with our modernization services. We upgrade critical components to improve performance, enhance safety, reduce energy consumption, and elevate the aesthetic appeal of your building.',
    details: [
      'Upgrade old elevator systems',
      'Control system modernization',
      'Door system upgrades',
      'Cabin interior renovation',
      'Energy-saving drive installation',
      'Safety system upgrades',
      'Performance optimization'
    ]
  },
  maintenance: {
    icon: Wrench,
    title: 'Maintenance Services',
    subtitle: 'Preventive Care',
    description: 'Regular preventive maintenance is the key to smooth elevator operation. Our proactive approach identifies and resolves potential issues before they cause disruption, ensuring passenger safety and comfort.',
    details: [
      'Monthly maintenance visits',
      'Lubrication of moving parts',
      'Safety device testing',
      'Alignment checks',
      'Brake and motor inspection',
      'Emergency battery testing',
      'Full compliance reports'
    ]
  },
  emergency: {
    icon: Headphones,
    title: 'Emergency Support',
    subtitle: '24/7 Rapid Response',
    description: 'Elevator emergencies require immediate professional attention. Our dedicated emergency response team is available 24/7 across all our Gujarat branches to handle passenger rescues and critical system failures.',
    details: [
      '24/7 emergency response',
      'Passenger rescue services',
      'Rapid technician dispatch',
      'Power failure assistance',
      'Door malfunction response',
      'Available across all 9 Gujarat branches'
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-elvitra-primary text-elvitra-text-main">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-elvitra-accent hover:underline font-bold">Return to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <PageHero caption={service.subtitle} title={service.title} />

      <section className="section-padding bg-elvitra-primary border-b border-elvitra-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <h2 className="text-3xl font-bold text-elvitra-text-main mb-6">Overview</h2>
              <p className="text-lg text-elvitra-text-muted leading-relaxed mb-10">{service.description}</p>
              
              <h3 className="text-xl font-bold text-elvitra-text-main mb-6 pb-4 border-b border-elvitra-border">Service Inclusions</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-elvitra-text-main font-medium">
                    <CheckCircle2 size={20} className="text-elvitra-accent shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {service.plans && (
                <div className="mt-12 bg-elvitra-secondary p-8 rounded-xl border border-elvitra-border">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-elvitra-text-main mb-6">Available Plans</h3>
                  <div className="flex flex-wrap gap-4">
                    {service.plans.map(plan => (
                      <span key={plan} className="px-5 py-2.5 bg-white border border-elvitra-border rounded-full text-sm font-bold text-elvitra-text-main shadow-sm">
                        {plan}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="premium-card p-12 flex flex-col items-center justify-center text-center aspect-square bg-white sticky top-32"
            >
              <div className="w-24 h-24 rounded-full bg-elvitra-secondary flex items-center justify-center mb-8 border border-elvitra-border shadow-sm">
                <Icon size={40} className="text-elvitra-accent" />
              </div>
              <h3 className="text-3xl font-bold text-elvitra-text-main mb-4">Expert Service</h3>
              <p className="text-lg text-elvitra-text-muted max-w-sm">Trust our certified engineers to maintain the safety and reliability of your vertical mobility systems.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-elvitra-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-elvitra-text-main mb-8">Book a Service</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-elvitra-text-main mb-8">Frequently Asked Questions</h2>
              <FAQAccordion items={faqs.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
