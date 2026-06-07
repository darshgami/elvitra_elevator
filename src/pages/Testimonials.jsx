import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <>
      <PageHero 
        caption="Client Stories" 
        title="What People Say" 
        subtitle="Read real reviews from builders, hospital directors, and homeowners who trust Elvitra." 
      />

      <section className="section-padding bg-elvitra-secondary min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card premium-card-hover p-10 flex flex-col relative bg-white"
              >
                <Quote size={40} className="absolute top-8 right-8 text-elvitra-secondary" />
                
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      size={18} 
                      className={idx < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} 
                    />
                  ))}
                </div>
                
                <p className="text-elvitra-text-main text-lg leading-relaxed flex-1 mb-10 italic">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-5 pt-6 border-t border-elvitra-border mt-auto">
                  <div className="w-14 h-14 rounded-full bg-elvitra-secondary flex items-center justify-center text-elvitra-text-main text-lg font-bold shrink-0 border border-elvitra-border shadow-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-elvitra-text-main font-bold text-lg">{t.name}</h4>
                    <p className="text-elvitra-text-muted text-sm font-medium mt-1">
                      {t.role}{t.company ? `, ${t.company}` : ''}
                    </p>
                    <p className="text-elvitra-accent text-[10px] font-bold tracking-widest uppercase mt-1">
                      {t.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
