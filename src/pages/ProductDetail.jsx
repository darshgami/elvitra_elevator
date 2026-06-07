import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, Download } from 'lucide-react';
import { elevatorTypes } from '../data/elevatorTypes';
import Button from '../components/ui/Button';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = elevatorTypes.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-elvitra-primary text-elvitra-text-main">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-elvitra-accent hover:underline font-bold">Return to Products</Link>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <article className="bg-elvitra-primary min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <Link to="/products" className="inline-flex items-center text-sm font-bold tracking-wider uppercase text-elvitra-text-muted hover:text-elvitra-accent transition-colors mb-12">
          <ChevronLeft size={16} className="mr-1" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Product Image */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] rounded-2xl bg-gray-100 flex items-center justify-center relative overflow-hidden border border-elvitra-border sticky top-32"
            >
              <div className="absolute inset-0 bg-gray-200" />
              <Icon size={120} strokeWidth={1} className="text-gray-400 relative z-10" />
              <div className="absolute bottom-8 left-8 right-8">
                 <Button to="/contact" variant="primary" fullWidth size="lg">Request a Quote</Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-elvitra-secondary border border-elvitra-border mb-6">
                <span className="w-2 h-2 rounded-full bg-elvitra-accent" />
                <span className="text-xs font-bold tracking-widest uppercase text-elvitra-text-main">Elevator System</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-elvitra-text-main mb-4 leading-tight tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-elvitra-text-muted mb-10 font-light">
                {product.tagline}
              </p>

              <div className="prose prose-lg text-elvitra-text-muted mb-12 border-b border-elvitra-border pb-12">
                <p className="leading-relaxed">{product.description}</p>
              </div>

              {/* Technical Specifications */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-elvitra-text-main mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="p-5 bg-white border border-elvitra-border rounded-xl shadow-sm">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-elvitra-text-muted mb-1.5">{key}</p>
                      <p className="text-lg font-medium text-elvitra-text-main">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-elvitra-text-main mb-6">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-base font-medium text-elvitra-text-main">
                      <CheckCircle2 size={20} className="text-elvitra-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capacities */}
              {product.capacities && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-elvitra-text-main mb-6">Available Capacities</h2>
                  <div className="flex flex-wrap gap-3">
                    {product.capacities.map((cap, i) => (
                      <span key={i} className="px-5 py-2.5 bg-elvitra-secondary border border-elvitra-border rounded-full text-sm font-bold text-elvitra-text-main shadow-sm">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-elvitra-border">
                <Button href="#" variant="outline" icon={Download}>Download Tech Specs</Button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </article>
  );
}
