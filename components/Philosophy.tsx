import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-sans text-xs tracking-widest uppercase sticky top-32"
            >
              (01) The Philosophy
            </motion.h3>
          </div>

          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-12">
                We believe digital presence is the new architecture. It must be <span className="text-outline">structurally sound</span> and <span className="text-brand-accent">aesthetically profound</span>.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-brand-muted leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                In a sea of templates, we choose custom craftsmanship. Veblify isn't just a dev shop; we are creative partners who translate your complex business logic into intuitive, emotive digital interfaces.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our methodology combines heavy-lifting backend engineering with delicate, motion-rich frontend design. We ensure your platform not only works flawlessly but leaves a lasting memory on every visitor.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};