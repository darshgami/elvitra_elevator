import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Layers, Filter } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import { projects } from '../data/projects';

const categories = ['All', 'Commercial', 'Residential', 'Hospital', 'Industrial'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <>
      <PageHero 
        caption="Portfolio" 
        title="Our Installations" 
        subtitle="Explore our successful elevator installations across various sectors in Gujarat." 
      />

      <section className="section-padding bg-elvitra-primary min-h-screen">
        <div className="container-custom">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <Filter size={18} className="text-elvitra-accent mr-2 hidden sm:block" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 text-sm font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                  filter === cat 
                    ? 'bg-elvitra-text-main border-elvitra-text-main text-white shadow-md' 
                    : 'bg-white border-elvitra-border text-elvitra-text-main hover:border-elvitra-text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="premium-card premium-card-hover flex flex-col bg-white overflow-hidden"
                >
                  <div className="h-64 relative overflow-hidden bg-gray-100 flex items-center justify-center border-b border-elvitra-border">
                    <Building2 size={64} className="text-gray-300" />
                    <div className="absolute top-4 right-4 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-white shadow-sm border border-elvitra-border text-elvitra-text-main rounded-full">
                      {project.type}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-elvitra-text-main mb-3">{project.name}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-medium text-elvitra-text-muted">
                      <span className="flex items-center gap-1.5"><MapPin size={16} className="text-elvitra-accent" /> {project.location}</span>
                      <span className="flex items-center gap-1.5"><Layers size={16} className="text-elvitra-accent" /> {project.floors} Floors</span>
                    </div>
                    
                    <p className="text-base text-elvitra-text-muted leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="pt-5 border-t border-elvitra-border mt-auto">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-elvitra-text-muted mb-1.5">Installed System</p>
                      <p className="text-base font-bold text-elvitra-text-main">{project.elevator}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-elvitra-text-muted text-lg font-medium">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
