import React from 'react';
import { motion } from 'framer-motion';
import { ThreeScene } from './ThreeScene';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-60 md:opacity-100 mix-blend-screen">
        <ThreeScene />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-brand-accent font-sans text-sm tracking-[0.2em] mb-4 uppercase">
                Digital Atelier
              </h2>
            </motion.div>
            
            <motion.h1 
              className="font-display font-bold text-6xl md:text-8xl leading-[0.9] tracking-tight mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We Craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Digital Reality
              </span>
            </motion.h1>

            <motion.p
              className="font-sans text-brand-muted text-lg md:text-xl max-w-md leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Veblify merges strategic engineering with avant-garde design to build web experiences that defy the ordinary.
            </motion.p>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-sans font-bold text-brand-black transition-transform duration-300 hover:-translate-y-1 bg-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  INITIATE PROJECT <ArrowDownRight size={18} />
                </span>
                <div className="absolute inset-0 bg-brand-accent transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center space-x-4 text-xs font-sans text-brand-muted tracking-widest uppercase">
        <div className="w-12 h-[1px] bg-brand-muted"></div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
};