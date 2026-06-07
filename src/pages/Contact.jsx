import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import ContactForm from '../components/shared/ContactForm';
import SectionHeading from '../components/ui/SectionHeading';

const contactInfo = [
  { icon: MapPin, title: 'Head Office', desc: 'Office No. 16, Laxmi Plaza, Beside Subh Hotel, Sanala Road, Morbi-363641, Gujarat' },
  { icon: Phone, title: 'Phone Numbers', desc: '+91 99799 64474\n+91 88666 43510' },
  { icon: Mail, title: 'Email Address', desc: 'info.elvitraelevator@gmail.com' },
  { icon: Clock, title: 'Working Hours', desc: 'Monday - Saturday\n9:30 AM - 6:30 PM' },
];

export default function Contact() {
  return (
    <>
      <PageHero 
        caption="Get In Touch" 
        title="Contact Elvitra" 
        subtitle="Our engineering team is ready to help you find the perfect elevator solution for your building." 
      />

      <section className="section-padding bg-elvitra-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Info Cards */}
            <div className="lg:col-span-4 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="premium-card p-8 flex items-start gap-5 bg-white"
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-elvitra-secondary flex items-center justify-center">
                    <info.icon size={24} className="text-elvitra-accent" />
                  </div>
                  <div>
                    <h3 className="text-elvitra-text-main font-bold mb-2 text-lg">{info.title}</h3>
                    <p className="text-base text-elvitra-text-muted whitespace-pre-line leading-relaxed">
                      {info.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <h2 className="text-3xl font-bold text-elvitra-text-main mb-8">Send us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Map/Branches Section */}
      <section className="section-padding bg-elvitra-secondary relative overflow-hidden border-t border-elvitra-border">
        <div className="container-custom">
          <SectionHeading caption="Our Network" title="Gujarat Branches" subtitle="We provide installation and maintenance across all major cities in Gujarat." />
          
          <div className="premium-card h-[500px] w-full bg-white relative overflow-hidden flex items-center justify-center border-elvitra-border">
            {/* Placeholder for actual Google Map */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-elvitra-text-main) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <div className="text-center p-12 relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-elvitra-border shadow-sm max-w-3xl w-full mx-4">
              <MapPin size={48} className="text-elvitra-accent mx-auto mb-6" />
              <p className="text-elvitra-text-main font-bold tracking-[0.2em] uppercase text-sm mb-8">Interactive Map Loading</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Ahmedabad', 'Junagadh', 'Jamnagar', 'Rajkot', 'Surat', 'Valsad-Vapi', 'Vadodara', 'Navsari', 'Bhavnagar', 'Morbi (HQ)'].map(city => (
                  <span key={city} className="px-5 py-2 bg-white border border-elvitra-border rounded-full text-sm font-bold text-elvitra-text-main shadow-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Abstract map dots */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {Array.from({length: 15}).map((_, i) => (
                  <div key={i} className="absolute w-3 h-3 bg-elvitra-accent rounded-full shadow-md" style={{top: `${Math.random()*80 + 10}%`, left: `${Math.random()*80 + 10}%`}} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
