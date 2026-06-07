import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { elevatorTypes } from '../../data/elevatorTypes';
import SectionHeading from '../ui/SectionHeading';

export default function ProductsPreview() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section className="section-padding bg-elvitra-secondary overflow-hidden">
      <div className="container-custom" ref={containerRef}>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            caption="Our Systems" 
            title="Vertical Mobility Solutions" 
            subtitle="Explore our comprehensive range of premium elevators designed for various architectural requirements."
            align="left"
          />
          
          <div className="flex items-center gap-4 mb-16 md:mb-16">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-elvitra-border bg-white flex items-center justify-center text-elvitra-text-main hover:bg-elvitra-accent hover:text-white hover:border-elvitra-accent transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-elvitra-border bg-white flex items-center justify-center text-elvitra-text-main hover:bg-elvitra-accent hover:text-white hover:border-elvitra-accent transition-all shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.products-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 }
            }}
            className="pb-16"
          >
            {elevatorTypes.map((type) => (
              <SwiperSlide key={type.id} className="h-auto">
                <Link to={`/products/${type.slug}`} className="block h-full group premium-card premium-card-hover overflow-hidden flex flex-col bg-white">
                  <div className="h-64 bg-elvitra-secondary relative overflow-hidden flex items-center justify-center p-8">
                    {/* Placeholder for real image */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-elvitra-text-main) 1px, transparent 1px), linear-gradient(90deg, var(--color-elvitra-text-main) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <type.icon size={64} strokeWidth={1} className="text-elvitra-text-muted group-hover:text-elvitra-accent transition-colors duration-500 relative z-10" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-elvitra-text-main mb-2">{type.name}</h3>
                    <p className="text-sm font-medium tracking-widest uppercase text-elvitra-accent mb-4">{type.tagline}</p>
                    <p className="text-base text-elvitra-text-muted line-clamp-3 mb-8 flex-1">{type.description}</p>
                    
                    <div className="flex items-center text-sm font-bold tracking-wider uppercase text-elvitra-text-main group-hover:text-elvitra-accent transition-colors mt-auto">
                      Explore Specs <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="products-pagination flex justify-center gap-2 mt-4" />
        </motion.div>

      </div>
    </section>
  );
}
