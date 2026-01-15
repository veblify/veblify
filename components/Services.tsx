import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'Experience Design',
    description: 'User-centric UI/UX that prioritizes accessibility without sacrificing the avant-garde aesthetic. We map journeys that convert.',
    tags: ['UI/UX', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    id: '02',
    title: 'Web Engineering',
    description: 'Robust, scalable React and Next.js applications built for speed and SEO. Clean code is our religion.',
    tags: ['React', 'TypeScript', 'Node.js', 'WebGL']
  },
  {
    id: '03',
    title: 'Brand Identity',
    description: 'We don\'t just put a logo on a page. We weave your brand DNA into every interaction, color choice, and micro-animation.',
    tags: ['Strategy', 'Visual Identity', 'Motion Design', 'Content']
  }
];

export const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-brand-accent font-sans text-xs tracking-widest uppercase block mb-4">
            (03) Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Capabilities
          </h2>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative border-t border-white/10 py-12 cursor-pointer"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2 font-display text-xl text-brand-muted group-hover:text-brand-accent transition-colors">
                  /{service.id}
                </div>
                
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl font-bold group-hover:text-brand-accent transition-colors flex items-center gap-4">
                    {service.title}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: hoveredService === service.id ? 1 : 0, scale: hoveredService === service.id ? 1 : 0.5 }}
                    >
                      <ArrowUpRight className="w-8 h-8" />
                    </motion.span>
                  </h3>
                </div>

                <div className="md:col-span-6">
                  <p className="font-sans text-brand-muted text-lg leading-relaxed mb-6 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs font-sans text-brand-muted uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Background Reveal on Hover */}
              <motion.div 
                className="absolute inset-0 bg-white/5 -z-10"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredService === service.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ originY: 0 }}
              />
            </motion.div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
};