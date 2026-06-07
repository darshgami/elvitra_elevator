import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import PageHero from '../components/shared/PageHero';

// Generate mock gallery items based on requirements
const galleryItems = [
  { id: 1, category: 'Passenger', title: 'Luxury Hotel Lobby', src: 'passenger-1' },
  { id: 2, category: 'Capsule', title: 'Mall Panoramic Lift', src: 'capsule-1' },
  { id: 3, category: 'Hospital', title: 'Stretcher Elevator', src: 'hospital-1' },
  { id: 4, category: 'Home', title: 'Villa Lift', src: 'home-1' },
  { id: 5, category: 'MRL', title: 'Corporate MRL', src: 'mrl-1' },
  { id: 6, category: 'Hydraulic', title: 'Glass Hydraulic', src: 'hydro-1' },
  { id: 7, category: 'Goods', title: 'Industrial Freight', src: 'goods-1' },
  { id: 8, category: 'Car', title: 'Auto Elevator', src: 'car-1' },
  { id: 9, category: 'Doors', title: 'Golden Auto Door', src: 'door-1' },
  { id: 10, category: 'Doors', title: 'Glass Vision Door', src: 'door-2' },
  { id: 11, category: 'Cabins', title: 'Wood Finish Cabin', src: 'cabin-1' },
  { id: 12, category: 'Panels', title: 'Black Touch COP', src: 'panel-1' },
];

const categories = ['All', 'Passenger', 'Capsule', 'Hospital', 'Home', 'MRL', 'Hydraulic', 'Goods', 'Car', 'Doors', 'Cabins', 'Panels'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <PageHero 
        caption="Visual Showcase" 
        title="Image Gallery" 
        subtitle="Browse through our high-quality installations, cabin finishes, and modern elevator designs." 
      />

      <section className="section-padding bg-elvitra-secondary min-h-screen">
        <div className="container-custom">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
            <Filter size={18} className="text-elvitra-accent mr-2 hidden lg:block" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 md:py-2.5 text-xs md:text-sm font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-elvitra-text-main border-elvitra-text-main text-white shadow-md' 
                    : 'bg-white border-elvitra-border text-elvitra-text-main hover:border-elvitra-text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-xl overflow-hidden aspect-[4/5] premium-card cursor-pointer bg-gray-100"
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/70 mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
