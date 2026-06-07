import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="section-padding bg-elvitra-primary overflow-hidden">
      <div className="container-custom" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4">
            <SectionHeading 
              caption="Testimonials" 
              title="Trusted by Leaders" 
              subtitle="Read what builders, architects, and homeowners have to say about their experience with Elvitra."
              align="left"
            />
            <div className="flex items-center gap-4 hidden lg:flex">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full border border-elvitra-border bg-white flex items-center justify-center text-elvitra-text-main hover:bg-elvitra-accent hover:text-white hover:border-elvitra-accent transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full border border-elvitra-border bg-white flex items-center justify-center text-elvitra-text-main hover:bg-elvitra-accent hover:text-white hover:border-elvitra-accent transition-all shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: '.testimonials-pagination' }}
                breakpoints={{
                  768: { slidesPerView: 2 }
                }}
                className="pb-16"
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.id} className="h-auto">
                    <div className="h-full p-8 premium-card flex flex-col relative bg-white">
                      <Quote size={40} className="absolute top-6 right-6 text-elvitra-secondary" />
                      
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star 
                            key={idx} 
                            size={16} 
                            className={idx < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-elvitra-text-main text-lg leading-relaxed flex-1 mb-8 italic">
                        "{t.text}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-elvitra-secondary flex items-center justify-center text-elvitra-text-main font-bold shadow-sm">
                          {t.avatar}
                        </div>
                        <div>
                          <h4 className="text-elvitra-text-main font-bold">{t.name}</h4>
                          <p className="text-sm font-medium text-elvitra-text-muted mt-0.5">
                            {t.role}{t.company ? `, ${t.company}` : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="testimonials-pagination flex justify-center lg:hidden gap-2 mt-4" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
