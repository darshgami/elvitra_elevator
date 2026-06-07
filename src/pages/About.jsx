import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';

const teamStats = [
  { label: 'Certified Engineers', value: '45+' },
  { label: 'Installation Experts', value: '120+' },
  { label: 'Support Staff', value: '30+' },
  { label: 'Designers', value: '15+' },
];

export default function About() {
  return (
    <>
      <PageHero 
        caption="Our Story" 
        title="Engineering Trust" 
        subtitle="We build more than elevators. We build reliable vertical mobility solutions that power modern Indian architecture." 
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-elvitra-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="premium-card p-10 bg-white"
            >
              <div className="w-14 h-14 rounded-full bg-elvitra-secondary flex items-center justify-center mb-8">
                <Target size={28} className="text-elvitra-accent" />
              </div>
              <h2 className="text-3xl font-bold text-elvitra-text-main mb-6">Our Mission</h2>
              <p className="text-lg text-elvitra-text-muted leading-relaxed">
                Trusted, Professional and Smart — these three words sum up our commitment to adding value to our customers' buildings and businesses through Reliability, Integrity, Expertise, Experience, Intelligence and Innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="premium-card p-10 bg-white"
            >
              <div className="w-14 h-14 rounded-full bg-elvitra-secondary flex items-center justify-center mb-8">
                <Eye size={28} className="text-elvitra-accent" />
              </div>
              <h2 className="text-3xl font-bold text-elvitra-text-main mb-6">Our Vision</h2>
              <p className="text-lg text-elvitra-text-muted leading-relaxed">
                Long-term strategic orientation — over the long term, Elvitra Elevator is committed to delivering on Safety, Quality and Customer Experience. We aim to grow more rapidly than the global elevator market while increasing profitability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team / Stats */}
      <section className="py-20 bg-elvitra-text-main text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container-custom relative z-10">
          <SectionHeading 
            caption="The People" 
            title="Young & Dynamic Staff" 
            subtitle="Our success is driven by a team of highly qualified engineers and technicians dedicated to excellence."
            light={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm tracking-widest uppercase text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-elvitra-secondary border-t border-elvitra-border">
        <div className="container-custom text-center">
          <SectionHeading caption="Quality Assurance" title="Certified Excellence" />
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck size={48} className="text-elvitra-text-main" />
              <span className="font-bold text-sm tracking-widest uppercase text-elvitra-text-main">ISO 9001:2015</span>
            </div>
            <div className="w-px h-16 bg-elvitra-border hidden md:block" />
            <div className="flex flex-col items-center gap-3">
              <Award size={48} className="text-elvitra-text-main" />
              <span className="font-bold text-sm tracking-widest uppercase text-elvitra-text-main">Make in India</span>
            </div>
            <div className="w-px h-16 bg-elvitra-border hidden md:block" />
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck size={48} className="text-elvitra-text-main" />
              <span className="font-bold text-sm tracking-widest uppercase text-elvitra-text-main">CE Certified</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
