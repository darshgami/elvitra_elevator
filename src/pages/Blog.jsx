import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import Badge from '../components/ui/Badge';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <>
      <PageHero 
        caption="Insights" 
        title="Elevator Knowledge Hub" 
        subtitle="Expert articles, industry trends, and maintenance guides from the Elvitra engineering team." 
      />

      <section className="section-padding bg-elvitra-secondary min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block premium-card premium-card-hover h-full flex flex-col group overflow-hidden bg-white">
                  <div className="h-56 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="rose">{post.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex gap-4 text-xs font-medium text-elvitra-text-muted mb-4 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-elvitra-accent" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} className="text-elvitra-accent" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-elvitra-text-main mb-4 group-hover:text-elvitra-accent transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-base text-elvitra-text-muted leading-relaxed mb-8 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm font-bold tracking-wider uppercase text-elvitra-text-main mt-auto group-hover:text-elvitra-accent transition-colors">
                      Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
