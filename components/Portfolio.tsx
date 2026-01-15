import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: '1', title: 'Aura Collective', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Neon Nexus', image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Vertex Studios', image: 'https://images.unsplash.com/photo-1635776062127-d3b73c3933e5?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Ether Labs', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Obsidian Flow', image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=800&auto=format&fit=crop' },
  { id: '6', title: 'Prism Core', image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop' },
];

export const Portfolio: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Double the projects to create a seamless infinite loop
  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-accent font-sans text-xs tracking-widest uppercase block mb-4">
            (02) Selected Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Recent Projects
          </h2>
        </motion.div>
      </div>

      <div className="relative flex items-center w-full">
        <div
          className={`flex whitespace-nowrap animate-marquee ${isPaused ? 'pause-animation' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {marqueeProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="relative inline-block px-4 group cursor-pointer"
            >
              {/* "View" Label */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-top-12 z-20 pointer-events-none">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent bg-brand-black/90 backdrop-blur-sm px-4 py-1 border border-brand-accent/30 rounded-full">
                  View
                </span>
              </div>

              {/* Image Container */}
              <div className="relative w-72 h-96 md:w-96 md:h-[30rem] overflow-hidden border border-transparent transition-all duration-300 group-hover:border-brand-accent group-hover:shadow-[0_0_40px_rgba(212,255,0,0.15)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-transparent transition-colors duration-300"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h4 className="font-display text-2xl font-bold text-white tracking-tight transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};