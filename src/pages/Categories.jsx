import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/shared/PageHero';
import { doorTypes } from '../data/doorTypes';
import { cabinFinishes } from '../data/cabinFinishes';
// COP and LOP data is small enough to include directly for this generic page
const copPanels = [
  { id: 'cop1', name: 'Linen Finish S.S.', desc: 'Seven segment display with key switch' },
  { id: 'cop2', name: 'Hairline Finish S.S.', desc: 'Seven segment + dot matrix display' },
  { id: 'cop3', name: 'Dot Finish S.S.', desc: 'Seven segment display' },
  { id: 'cop4', name: 'Aluminum COP & LOP', desc: 'Dot matrix, key switch' },
  { id: 'cop5', name: 'Black Touch COP & LOP', desc: 'LCD display, key switch, Elvitra branded' },
  { id: 'cop6', name: 'Glass Finish COP & LOP', desc: 'Dot matrix, key switch, Elvitra logo' },
];

const getCategoryData = (type) => {
  switch(type) {
    case 'doors': return { title: 'Range of Doors', items: doorTypes, caption: 'Door Systems' };
    case 'cabins': return { title: 'Range of Cabins', items: cabinFinishes, caption: 'Cabin Finishes' };
    case 'panels': return { title: 'COP & LOP Panels', items: copPanels, caption: 'Control Panels' };
    default: return null;
  }
};

export default function Categories() {
  const { type } = useParams();
  const data = getCategoryData(type);

  if (!data) return <Navigate to="/products" replace />;

  return (
    <>
      <PageHero 
        caption={data.caption} 
        title={data.title} 
        subtitle="Explore our premium collection of elevator components, designed for durability, aesthetics, and optimal performance." 
      />

      <section className="section-padding bg-elvitra-secondary min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card premium-card-hover group flex flex-col overflow-hidden bg-white"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden border-b border-elvitra-border flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-700" />
                  <span className="text-gray-400 font-bold uppercase tracking-widest relative z-10 text-sm">Image Preview</span>
                  {item.premium && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-elvitra-accent text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm z-10">
                      Premium
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-1 text-center">
                  <h3 className="text-xl font-bold text-elvitra-text-main mb-3">{item.name}</h3>
                  <p className="text-sm text-elvitra-text-muted leading-relaxed">
                    {item.description || item.desc || `${item.material || 'Premium'} finish design`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
