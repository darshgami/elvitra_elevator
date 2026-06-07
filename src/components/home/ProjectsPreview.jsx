import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Building2, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { projects } from '../../data/projects';

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 4); // Show 4 in a bento-like grid

  return (
    <section className="section-padding bg-elvitra-secondary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            caption="Portfolio" 
            title="Featured Installations" 
            subtitle="A selection of our premium elevator installations across prominent buildings in Gujarat." 
            align="left"
          />
          <div className="mb-16">
            <Button to="/projects" variant="outline" icon={ArrowRight}>
              View All Projects
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-xl overflow-hidden premium-card bg-white ${
                i === 0 ? 'md:col-span-8 md:row-span-2 aspect-square md:aspect-auto' : 
                i === 1 ? 'md:col-span-4 aspect-square' :
                i === 2 ? 'md:col-span-4 aspect-square' :
                'md:col-span-4 aspect-square'
              }`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Building2 size={i === 0 ? 80 : 40} className="text-gray-300" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-sm text-white rounded-full">
                      {project.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/80 font-medium">
                      <MapPin size={12} /> {project.location}
                    </span>
                  </div>
                  <h3 className={`font-bold text-white mb-2 ${i === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/70 font-medium">{project.elevator}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
