import { motion } from 'framer-motion';
import { CheckCircle, Award, Globe, HeartHandshake } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const reasons = [
  {
    icon: Award,
    title: 'Engineering Backed by Experience',
    desc: '15+ years of elevator engineering excellence. Our team of certified professionals brings deep technical expertise to every project.',
    align: 'left'
  },
  {
    icon: CheckCircle,
    title: 'Safety-First Design Philosophy',
    desc: 'Every elevator is engineered with multi-layered safety systems including overspeed governors, door interlocks, and emergency rescue devices.',
    align: 'right'
  },
  {
    icon: Globe,
    title: 'Nationwide Service Network',
    desc: '9 branch offices across Gujarat ensure rapid response and comprehensive coverage for installations and maintenance.',
    align: 'left'
  },
  {
    icon: HeartHandshake,
    title: 'Comprehensive AMC Support',
    desc: 'From Basic to Enterprise, our Annual Maintenance Contracts keep your elevators running safely and efficiently year-round.',
    align: 'right'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-elvitra-primary relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeading caption="Why Elvitra" title="The Elvitra Advantage" subtitle="What sets us apart in the Indian vertical mobility industry." />
        <div className="max-w-5xl mx-auto space-y-8 relative">
          
          {/* Center Line for Desktop Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-elvitra-border -translate-x-1/2" />
          
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${reason.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className={`premium-card premium-card-hover p-8 bg-white relative ${reason.align === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
                  {/* Timeline connector triangle */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-elvitra-border transform rotate-45 ${reason.align === 'left' ? '-right-[9px] border-b-0 border-l-0' : '-left-[9px] border-t-0 border-r-0 border-b border-l'}`} />
                  
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-elvitra-secondary flex items-center justify-center">
                      <reason.icon size={24} className="text-elvitra-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-elvitra-text-main mb-3">{reason.title}</h3>
                      <p className="text-base text-elvitra-text-muted leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex w-12 shrink-0 items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-elvitra-accent ring-4 ring-white shadow-sm" />
              </div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
