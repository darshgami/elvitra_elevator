import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import Badge from '../components/ui/Badge';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-elvitra-primary text-elvitra-text-main">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-elvitra-accent hover:underline font-bold">Return to Blog</Link>
        </div>
      </div>
    );
  }

  // Simple markdown parser for the content
  const renderContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-3xl font-bold text-elvitra-text-main mt-12 mb-6">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-2xl font-bold text-elvitra-text-main mt-8 mb-4">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="text-lg text-elvitra-text-muted leading-relaxed ml-6 list-disc mb-3">{line.replace('- ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={i} />;
      }
      return <p key={i} className="text-lg text-elvitra-text-muted leading-relaxed mb-6">{line}</p>;
    });
  };

  return (
    <article className="bg-elvitra-primary min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-sm font-bold tracking-wider uppercase text-elvitra-text-muted hover:text-elvitra-accent transition-colors mb-12">
          <ChevronLeft size={16} className="mr-1" /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <Badge variant="rose">{post.category}</Badge>
            <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-elvitra-text-muted">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-elvitra-accent" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-elvitra-accent" /> {post.readTime} read</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-elvitra-text-main mb-12 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="h-64 md:h-[500px] w-full rounded-2xl bg-gray-100 mb-16 relative overflow-hidden border border-elvitra-border">
             <div className="absolute inset-0 bg-gray-200" />
          </div>

          <div className="prose prose-lg max-w-none text-elvitra-text-main">
            {renderContent(post.content)}
          </div>
          
          <div className="mt-20 pt-8 border-t border-elvitra-border flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-elvitra-text-main font-bold text-sm tracking-widest uppercase">Share This Article</p>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 rounded-full border border-elvitra-border text-sm font-bold text-elvitra-text-main hover:border-elvitra-text-main transition-colors">Facebook</button>
              <button className="px-6 py-2.5 rounded-full border border-elvitra-border text-sm font-bold text-elvitra-text-main hover:border-elvitra-text-main transition-colors">Twitter</button>
              <button className="px-6 py-2.5 rounded-full border border-elvitra-border text-sm font-bold text-elvitra-text-main hover:border-elvitra-text-main transition-colors">LinkedIn</button>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
