import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { blogPosts } from '../../data/blog';

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-elvitra-secondary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            caption="Knowledge Hub" 
            title="Latest Insights" 
            subtitle="Expert articles on vertical mobility, maintenance, and modern architecture." 
            align="left"
          />
          <div className="mb-16">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-elvitra-text-main hover:text-elvitra-accent transition-colors group">
              View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block premium-card premium-card-hover overflow-hidden group h-full flex flex-col bg-white">
                <div className="h-56 bg-gray-100 relative flex items-center justify-center overflow-hidden">
                   {/* Image Placeholder */}
                   <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 z-10">
                    <Badge variant="rose">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-4 text-xs font-medium text-elvitra-text-muted mb-4 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl text-elvitra-text-main font-bold mb-3 group-hover:text-elvitra-accent transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-base text-elvitra-text-muted leading-relaxed mb-6 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-elvitra-accent font-bold flex items-center gap-1 mt-auto group-hover:text-elvitra-text-main transition-colors">
                    Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
